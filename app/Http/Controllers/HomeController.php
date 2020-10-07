<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

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
        $ssr = "<div><h1>Create a website for your courses</h1></div>";
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

        return $ssr;
    }

    public function hiw()
    {
        return [
            [
                'icon' => asset('images/account.PNG'),
                'heading' => 'Set up your profile',
                'text' => 'You can get started with just your email without having to remember any password.',
            ],
            
            [
                'icon' => asset('images/add-course.PNG'),
                'heading' => 'Add Course',
                'text' => 'You get to include the course title, description (Ability to add text, videos and images) and price for each course you desire to add.',
            ],
            [
                'icon' => 'images/get-paid.PNG',
                'heading' => 'Receive Payment',
                'text' => 'Receive payment every time someone registers for your course and add your participants to the conferencing or LMS platform of choice.'
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
                'text' =>  'Links to your courses will only be made available to people who have successfully paid and enrolled for the course.'
            ],
            [
                'icon' =>   asset('images/currency.PNG'),
                'heading' =>  'Multi-Currency',
                'text' =>  'We do not charge extra for enrollment, your money is all yours.'
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
                'text' =>  'When the pandemic caused us to stop physical classes, we needed a way to reach out to our students and ensure tjat the quality of out training was not compromised. Acada allowed us to hold classes on Google Classroom while ensuring that only students that paid for such classes had access to them.'
            ],
            [
                'icon' =>   asset('images/healthboxes.PNG'),
                'heading' =>  'Health Boxes "Lola Kogbodoku"',
                'text' =>  'Charging for training and keeping track of participant registrations have been made easier with this app. I do not even need flyers, propspective applicants can simply browse through my page and register for their preferred course.'
            ],
            [
                'icon' =>  asset('images/prof-elegbe.PNG'),
                'heading' =>  'Professor Elegbe',
                'text' =>  'I help anesthesiologist prepare for exams with the West African College of Surgeons. Acada has made it easy for me to reach my students during the Covid pandemic, continue with the classes and keep track of them.'
            ]
        ];
    }
}
