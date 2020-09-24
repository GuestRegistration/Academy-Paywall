<template>
    <app>
        <template v-slot:before-container>
            <div id="banner" style="background-image: url('images/Online-Tutoring.jpg');">
                <div id="banner-overlay">
                    <div class="banner-content">
                        <div class="text-center banner-text">
                            <h1>CREATE A WEBSITE</h1>
                            <h1>FOR YOUR COURSES IN MINUTES</h1>
                            <template v-if="authenticated">
                                <v-btn v-if="auth.account" class="bg-custom-primary m-2 white--text" @click="$inertia.visit(route('account.show', {account: auth.account.username}))"> <v-icon class="mr-2">school</v-icon> My Organization</v-btn>
                                <v-btn v-else class="bg-custom-primary m-2 white--text" @click="$inertia.visit(route('account.setup'))"> <v-icon class="mr-2">school</v-icon> Create Organization</v-btn>
                            </template>
                            <v-btn v-else class="bg-custom-primary white--text" @click.prevent="$refs.SigninModal.open('GET STARTED')">GET STARTED</v-btn>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <section class="page-section" id="how-it-work">
            <div class="section-head">
                <h2>HOW IT WORKS</h2>
                <hr class="bg-custom-primary">
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-4" v-for="(hiw, i) in howItWork" :key="i">
                        <div class="info-box">
                            <div class="box-icon text-center">
                                <img :src="hiw.icon" width="100px">
                            </div>
                            <div class="box-heading">
                                <h2>{{ hiw.heading }}</h2>
                            </div>
                            <div class="box-text">
                                <p>{{ hiw.text }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="page-section" id="features">
            <div class="section-head">
                <h2>FEATURES</h2>
                <hr class="bg-custom-primary">
                <div class="px-3">
                    <img src="/images/arrow-divider.PNG" width="100%">
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-4" v-for="(feature, i) in features" :key="i">
                        <div class="info-box">
                            <div class="box-icon text-center">
                                <img :src="feature.icon" width="50x">
                            </div>
                            <div class="box-heading">
                                <h2>{{ feature.heading }}</h2>
                            </div>
                            <div class="box-text">
                                <p>{{ feature.text }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="page-section" id="pricing">
            <div class="bg-custom-primary text-center mb-3" style="height: 200px">
                <img src="/images/arrow-divider2.PNG" width="100%">
                <h2 class="white--text">Pricing</h2>
            </div>
            <div class="pricing-container">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="pricing-box">
                                <div class="plan-name">
                                    <h4>Basic</h4>
                                    <hr class="bg-custom-primary">
                                </div>

                                <div class="plan-info">
                                    $1 per <br> course
                                </div>

                                <div class="plan-action">   
                                    <v-btn class="bg-custom-primary white--text" @click.prevent="$refs.SigninModal.open()">Get Started</v-btn>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="pricing-box">
                                <div class="plan-name">
                                    <h4>Bundle</h4>
                                    <hr class="bg-custom-primary">
                                </div>

                                <div class="plan-info">
                                    $100 per year <br>
                                    200 courses <br>
                                    5 instructors
                                </div>

                                <div class="plan-action">   
                                    <v-btn class="bg-custom-primary white--text" @click.prevent="$refs.SigninModal.open()">Get Started</v-btn>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-4">
                            <div class="pricing-box">
                                <div class="plan-name">
                                    <h4>Enterprise</h4>
                                    <hr class="bg-custom-primary">
                                </div>

                                <div class="plan-info">
                                    $1,000 per year <br>
                                    unlimited instructors <br>
                                    unlimited courses
                                </div>

                                <div class="plan-action">   
                                    <v-btn class="bg-custom-primary white--text" @click.prevent="$refs.SigninModal.open()">Get Started</v-btn>
                                </div>
                            </div>
                        </div>
                    </div>            
                </div>
            </div>
        </section>

        <section class="page-section" id="community">
            <div class="section-head">
                <h2>our Community</h2>
                <hr class="bg-custom-primary">
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-4" v-for="(community, i) in communities" :key="i">
                        <div class="info-box">
                            <div class="box-icon text-center">
                                <img :src="community.icon" height="200x" style="max-width: 100%">
                            </div>
                            <div class="box-heading">
                                <h2>{{ community.heading }}</h2>
                            </div>
                            <div class="box-text">
                                <p>{{ community.text }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <template v-slot:after-container>
            <section id="footer">
            <div class="text-center text--primary">
                <p>&copy; 2020 ACADA</p>
                <a href="mailto: support@acadaapp.com" >support@acadaapp.com</a>
            </div>
            </section>        
        </template>
        
        <signin-modal ref="SigninModal" />
    </app>
</template>


<script>
    import {mapGetters} from "vuex";
    import App from '@/layouts/App.vue';
    import SigninModal from '@/Domain/Auth/Components/SigninModal';
    import NavDrawer from '@/components/NavDrawer';

    export default {
        name: "HomePage",
        components: {
            App, SigninModal, NavDrawer
        },
        metaInfo()
         {
             return{
                title: `Home`,
                titleTemplate: '%s - AcadaApp',
             }
        },
        data(){
            return {
                howItWork: [
                    {
                        icon: 'images/account.PNG',
                        heading: 'Set up your profile',
                        text: 'You can get started with just your email without having to remember any password.'
                    },
                    {
                        icon: 'images/add-course.PNG',
                        heading: 'Add Course',
                        text: 'You get to include the course title, description (Ability to add text, videos and images) and price for each course you desire to add.'
                    },
                    {
                        icon: 'images/get-paid.PNG',
                        heading: 'Get Paid',
                        text: 'You get paid every time someone registers for your course and you get to add the person to the conferencing or MS of choice'
                    }
                ],

                features: [
                    {
                        icon: 'images/web.PNG',
                        heading: 'A Customizable Website for your Courses',
                        text: 'Get a beautiful website for less than the cost of a flyer in just a few clicks.'
                    },
                    {
                        icon: 'images/authorization.PNG',
                        heading: 'Authorized Access Only',
                        text: 'Links to your courses will only be made available to people who have successfully paid and enrolled for the course.'
                    },
                    {
                        icon: 'images/currency.PNG',
                        heading: 'Multi-Currency',
                        text: 'We do not charge extra for enrollment, your money is all yours.'
                    },
                    {
                        icon: 'images/zero-fee.PNG',
                        heading: 'Zero Fees',
                        text: 'We do not charge extra for enrollment, your money is all yours.'
                    },
                    {
                        icon: 'images/accept-payment.PNG',
                        heading: 'Accept Payment',
                        text: 'Set a fee for your course, select your  preferred payment method and sleep at night, while we take care of the rest. We integrate with Stripe, PayPal, Paystack and more.'
                    },
                    {
                        icon: 'images/accept-payment.PNG',
                        heading: 'Third-Party Integration',
                        text: 'Pick your preferred conferencing or LMS (such as Zoom, Google Hangouts, WhatsApp, Google Classrom, nd others) and submit the URL to your audience.'
                    },
                    {
                        icon: 'images/participants-list.PNG',
                        heading: 'Participants List',
                        text: 'You get detailed enrollment information of every participant.'
                    },
                    {
                        icon: 'images/unlimited-enrollment.PNG',
                        heading: 'Unlimited Enrollment',
                        text: 'THE MORE THE MERRIER! As many people as enroll for your course. There arre no limit unless they are set by you.'
                    },
                    {
                        icon: 'images/enterprise-version.PNG',
                        heading: 'Enterprise Version',
                        text: 'Allows you to manage several instructors under your organization from a single account.'
                    }

                ],
                communities: [
                    {
                        icon: 'images/jobred.PNG',
                        heading: 'JobRed "Ajo Balogun"',
                        text: 'When the pandemic caused us to stop physical classes, we needed a way to reach out to our students and ensure tjat the quality of out training was not compromised. Acada allowd us to hold classes on Google Classroom while ensuring that only students that paid for such classes had access to them.'
                    },
                    {
                        icon: 'images/healthboxes.PNG',
                        heading: 'Health Boxes "Lola Kogbodoku"',
                        text: 'Charging for training and keeping track of participant registrations have been made easier with this app. I do not even need flyers, propspective applicants can simply browse through my page and register for their preferred course.'
                    },
                    {
                        icon: 'images/prof-elegbe.PNG',
                        heading: 'Professor Elegbe',
                        text: 'I help anesthesiologist prepare for exams with the West African College of Surgeons. Acada has made it easy for me to reach my students during the Covid pandemic, continue with the classes and keep track of them.'
                    }
                ]
            }
        },
        computed: {
             ...mapGetters([
                'auth', 'authenticated'
            ]),
        }
    }
</script>

<style>
    body{
        background-color: #fff;
    }
    .bg-custom-primary
    {
        background-color: #E91E63 !important;
    }
    .text-custom-primary
    {
        color: #E91E63 !important;
    }
    .page-section
    {
        margin: 70px 0;
    }
    .section-head hr{
        width: 200px;
        height: 5px;
        margin: auto;
    }
</style>

<style lang="scss" scoped>
    #banner
    {
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }

    #banner,
    #banner-overlay
    {
        min-height: 100vh;
    }

    #banner-overlay
    {
        background-color: rgba(0, 0, 0, 0.65)
    }

    .banner-content
    {
        padding-top: 40%;
    }

    .banner-text
    {
        font-weight: bolder;
        color: #fff
    }

    .section-head
    {
        text-align: center
    }

    .info-box
    {
        box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.05);
        border-radius: 10px;
        padding: 10px;
    }

    .info-box .box-heading
    {
        text-align: center;
    }

    .info-box .box-heading h2{
        font-weight: bolder;
    }

    .info-box .box-text
    {
        text-align: center;
        font-size: 20px;
    }
    
    #how-it-work .info-box
    {
        min-height: 300px;
    }

    .pricing-container
    {
        margin-top: -100px;
    }

    .pricing-box
    {
      text-align: center;
      background-color: #F5F2F3;
      border-radius: 10px;
      padding: 30px 10px;
      box-shadow: 5px 5px 10px 10px rgba(0, 0, 0, 0.1);
    }
    .plan-name hr
    {
        width: 30%;
        margin: auto;
    }

    .plan-info
    {
        height: 100px;
        margin: 50px 0;
    }

    #community
    {
      background-color: #F5F2F3;
      padding: 100px 0;
      margin-bottom: 0;
    }

    #community .info-box
    {
        background-color: #fff;
    }

    #footer
    {
         padding: 30px 0;
    }

    @media (min-width: 768px){
        .banner-content
        {
            padding-top: 15%;
        }


        #features .info-box
        {
            min-height: 300px;
        }

        #community .info-box
        {
            min-height: 600px;
        }

        .pricing-container
        {
            padding: 0 100px;
        }
        .pricing-box
        {
            width: 80%;
        }
    }

</style>
