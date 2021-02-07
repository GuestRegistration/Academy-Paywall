<?php
namespace App\Http\Controllers;

use Stripe\Event;
use Stripe\Stripe;
use Stripe\Webhook;
use Illuminate\Support\Facades\Log;
use Stripe\Exception\SignatureVerificationException;

class StripeWebhook extends Controller
{
    public function __invoke()
    {
        $payload = @file_get_contents('php://input');
        
        $event = null;
        Log::channel('daily')->alert("Event received from Stripe with payload: {$payload}");

        if(!isset($_SERVER['HTTP_STRIPE_SIGNATURE'])){
            Log::channel('daily')->alert("Event was received from Stripe but no HTTP_STRIPE_SIGNATURE found");
            http_response_code(400);
            exit();
        }

        $sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'];
        Stripe::setApiKey(config('services.stripe.secret_key'));
        $webhookSecret = config('services.stripe.webhook_secret');

        try {
            $event = Webhook::constructEvent(
                $payload, $sig_header, $webhookSecret
            );
            Log::channel('daily')->alert("Event received from Stripe. Event: {$event->type}");
            Log::channel('daily')->info($event->data->object);
        } catch(\SignatureVerificationException  $e) {
            Log::channel('daily')->alert("Event was received from Stripe but couldn't verify signature.");
            http_response_code(400);
            exit();
        }
        // Handle the event
        switch ($event->type) {
            case 'charge.succeeded':
                $charge = $event->data->object; 
                break;
            case 'account.application.authorized':
                $account = $event->data->object; 

                break;
            case 'account.application.deauthorized':
                $account = $event->data->object; 
                break;
            default:
            Log::channel('daily')->info("This event fro Stripe is not captured. Event: {$event->type}");
        }
                
        http_response_code(200);
    }

}
