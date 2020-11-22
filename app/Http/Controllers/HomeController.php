<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Classes\PaymentGatewaySupport;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('inertia-conflict');
    }
    
    public function __invoke(){
        
        return Inertia::render('Pages/Home', [
            'howItWork' => $this->hiw(),
            'features' => $this->features(),
            'communities' => $this->communities(),
            'countries' => $this->countries(),
            'gateways' => $this->gateways(),
        ])
        ->withViewData([
            'title' => 'Create and Manage your Online Courses',
            'description' => 'Get a mini website to show your courses, receive registration information from your students and receive payment via Paystack and Stripe.',
            'image' => asset('images/acada-text-logo.jpg'),
            'ssr' => $this->getSSR(),
        ]);
    }



    public function getSSR()
    {
        $ssr = "<div style='text-align: center'>";
        
        $ssr .= "<div><h1>Create a website for your courses</h1></div>";

        $ssr .= "<h2>How it Work</h2>";
        $hiws = $this->hiw();
        foreach ($hiws  as $hiw) {
            $ssr .= "
                <div>
                    <img src='{$hiw['icon']}' alt='how-acada-works' width='200px' />
                    <h4>{$hiw['heading']}</h4>
                    <p>{$hiw['text']}</p>
                </div>
            ";
        }

        $ssr .= "<h2>FEATURES</h2>";
        $features = $this->features();
        foreach ($features  as $feature) {
            $ssr .= "
                <div>
                    <img src='{$feature['icon']}' alt='acada-features' width='200px'  />
                    <h4>{$feature['heading']}</h4>
                    <p>{$feature['text']}</p>
                </div>
            ";
        }

        $ssr .= "<h2>OUR COMMUNITIES</h2>";
        $communities = $this->communities();
        foreach ($communities  as $community) {
            $ssr .= "
                <div>
                    <img src='{$community['icon']}' alt='acada-communities' width='200px'  />
                    <h4>{$community['heading']}</h4>
                    <p>{$community['text']}</p>
                </div>
            ";
        }

        $ssr .= "<h2>NO NEED TO WORRY ABOUT PAYMENTT GATEWAY</h2>";
        $ssr .= " <p>We already have all worked out for you.</p>";
        $gateways = $this->gateways();
        foreach ($gateways  as $gateway) {
            $ssr .= "<a href='{$gateway['link']}'>
                        <img src='{$gateway['image']}' alt='{$gateway['name']}' width='200px'  />
                    </a>";
        }

        $ssr .= "<h2>RECEIVE ANY CURRENCY FROM 40+ COUNTRIES</h2>";
        $ssr .= "<p>You can recive payment for your courses in any currency from over 40 different countries in the world</p>";

        $countries = $this->countries();
        $ssr .= "<ol>";
        foreach ($countries  as $country) {
            $ssr .= "<li>{$country}</li>";
        }
        $ssr .= "</ol>";

        $ssr .="</div>";

        return $ssr;
    }

    public function hiw()
    {
        return [
            [
                'icon' => asset('images/account.PNG'),
                'heading' => 'Set up your profile',
                'text' => 'Create your account and set up your personal and academy profile. Good news! you do not need a password',
            ],
            
            [
                'icon' => asset('images/add-course.PNG'),
                'heading' => 'Add Course',
                'text' => 'Add your course with just a few clicks. Include the course title, course description, your preferred LMS and the cost of the course.',
            ],
            [
                'icon' => 'images/get-paid.PNG',
                'heading' => 'Get Paid',
                'text' => 'Receive payment every time someone registers for your course and automatically send them instructions on how to join the class.'
            ]

        ];

    }

    public function features()
    {
        return [
            [
                'icon' =>  asset('images/web.PNG'),
                'heading' =>  'A Customizable Website for your Courses',
                'text' =>  'Get a beautiful website for less than the cost of a flyer in just a few clicks.'
            ],
            [
                'icon' =>   asset('images/authorization.PNG'),
                'heading' =>  'Authorized Access Only',
                'text' =>  'Access to courses is limited to only participants who have paid and enrolled for the course.'
            ],
            [
                'icon' =>   asset('images/currency.PNG'),
                'heading' =>  'Multi-Currency',
                'text' =>  'You can choose the currency in which you charge for your courses.'
            ],
            [
                'icon' =>   asset('images/zero-fee.PNG'),
                'heading' =>  'Zero Fees',
                'text' =>  'We do not charge extra for enrollment, your money is all yours.'
            ],
            [
                'icon' =>   asset('images/accept-payment.PNG'),
                'heading' =>  'Accept Payment',
                'text' =>  'Set a fee for your course, select your  preferred payment method and sleep at night, while we take care of the rest. We integrate with Stripe, PayPal, Paystack and more.'
            ],
            [
                'icon' =>   asset('images/accept-payment.PNG'),
                'heading' =>  'Third-Party Integration',
                'text' =>  'Pick your preferred conferencing or LMS (such as Zoom, Google Hangouts, WhatsApp, Google Classrom, nd others) and submit the URL to your audience.'
            ],
            [
                'icon' =>   asset('images/participants-list.PNG'),
                'heading' =>  'Participants List',
                'text' =>  'You get detailed enrollment information of every participant.'
            ],
            [
                'icon' =>   asset('images/unlimited-enrollment.PNG'),
                'heading' =>  'Unlimited Enrollment',
                'text' =>  'THE MORE THE MERRIER! As many people as possible can enroll for your course. There are no limits unless they are set by you.'
            ],
            [
                'icon' =>  asset('images/enterprise-version.PNG'),
                'heading' =>  'Enterprise Version',
                'text' =>  'Allows you to manage several instructors under your organization from a single account.'
            ]
        ];
    }

    public function communities()
    {
        return [
            [
                'icon' =>  asset('images/jobred.PNG'),
                'heading' =>  'JobRed "Ajo Balogun"',
                'text' =>  'When the pandemic caused us to stop physical classes completely, we needed a way to reach out to our students and ensure that the quality of our trainings was not compromised. Acada App allowed us to hold classes on online platforms while ensuring that course contents were limited to only participants that have successfully enrolled for the course.'
            ],
            [
                'icon' =>   asset('images/healthboxes.PNG'),
                'heading' =>  'Health Boxes "Lola Kogbodoku"',
                'text' =>  'Charging for training and keeping track of participant registrations have been made easier with this app. I do not even need flyers, propspective applicants can simply browse through my page and register for their preferred course.'
            ],
            [
                'icon' =>  asset('images/prof-elegbe.PNG'),
                'heading' =>  'Macaulay Gidado',
                'text' =>  'As a business owner and techpreneur, I always hold bite-sized trainings where I share hacks and tips that I have learnt from experience across varying fields. I now use Acada app to host such courses and I must say that it has never been easier. Thank you Acada 👍🏽'
            ]
        ];
    }

    public function gateways(){
        $paymentGateways = PaymentGatewaySupport::GATEWAYS;
        $gateways = [];
        foreach ($paymentGateways as $key => $_gateway) {
            array_push($gateways, [
                'name' => $_gateway['name'],
                'image' => asset($_gateway['image']),
                'link' => $_gateway['link'],
            ]);
        }

        return $gateways;
    }

    public function countries(){
        $paymentGateways = PaymentGatewaySupport::GATEWAYS;
        $countries = [];
        foreach ($paymentGateways as $key => $_gateway) {
            foreach ($_gateway['countries'] as $code => $country) {
                if(!array_key_exists($code, $countries)){
                    $countries[$code] = $country;
                }
            }
        }
        \ksort($countries);

        return $countries;
    }
}
