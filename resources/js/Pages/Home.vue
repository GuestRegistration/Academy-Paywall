<template>
    <app>
        <template v-slot:before-container>
            <div id="banner" style="background-image: url('images/Online-Tutoring.jpg');">
                <div id="banner-overlay">
                    <div class="banner-content">
                        <div class="text-center banner-text">
                            <h1>CREATE A WEBSITE</h1>
                            <h1>FOR YOUR COURSES IN MINUTES</h1>
                            <v-dialog
                                v-model="videoDialog"
                                max-width="660"
                                >
                                <template v-slot:activator="{ on, attrs }">
                                    <div class="text-center">
                                        <img  v-bind="attrs" v-on="on" src="/images/play-icon.jpg" alt="Play" width="120px">
                                    </div>
                                </template>
                                <div v-if="videoDialog" style="background-color: #fff">
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/gO4s5jtVBTA?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </v-dialog>

                            <div class="mt-3">
                                <template v-if="authenticated">
                                    <a v-if="auth.account" :href="route('account.show', {account: auth.account.username})">
                                        <v-btn class="ma-2 white--text" color="primary"> <v-icon class="mr-2">school</v-icon> My Organization</v-btn>
                                    </a>
                                    <v-btn v-else class="ma-2 white--text" color="primary" @click="$inertia.visit(route('account.setup'))"> <v-icon class="mr-2">add</v-icon> Create Organization</v-btn>
                                </template>
                                <v-btn v-else class="white--text" color="primary" @click.prevent="$refs.SigninModal.open('GET STARTED')">GET STARTED <v-icon>arrow_forward</v-icon></v-btn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <section class="page-section" id="how-it-work">
            <div class="section-head">
                <h1>HOW IT WORKS</h1>
                <hr class="bg-custom-primary">
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-4" v-for="(hiw, i) in howItWork" :key="i">
                        <div class="info-box">
                            <div class="box-icon text-center mb-5">
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
                <h1>FEATURES</h1>
                <hr>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-4" v-for="(feature, i) in features" :key="i">
                        <div class="info-box">
                            <div class="box-icon text-center mb-5">
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

        <section class="page-section" id="countries">
            <v-row justify="center" align="center">
                <v-col cols="12" md="6">
                    <div class="section-head">
                        <h1>AVAILABLE IN <span class="text-custom-primary">{{ availableCountries.length - 1 }}+ COUNTRIES</span></h1>
                    </div>
                    <div class="container text-center">
                        <p>You can receive payment for your courses in any currency from over {{  availableCountries.length - 1 }} different countries in the world</p>
                    </div>
                </v-col>
                <v-col cols="12" md="6">
                    <div class="container">
                        <div class="text-center">
                            <span v-for="country in availableCountries" :key="country.code" :class="`flag-icon flag-icon-${country.code.toLowerCase()} ma-2`" :title="country.name"></span>
                        </div>
                    </div>
                </v-col>
            </v-row>

            <div class="container mt-5">
                <div class="section-head">
                        <h2>NO NEED TO WORRY ABOUT PAYMENT GATEWAY</h2>
                        <p>We already have it all worked out for you.</p>
                </div>
                <v-row justify="center" align="center">
                    <v-col cols="12" :md="Math.ceil(12/gateways.length)" v-for="(gateway, i) in gateways" :key="i">
                        <div class="pa-2 text-center payment-gateway">
                            <a :href="gateway.link" target="_blank">
                                <img :src="gateway.image" :title="gateway.name" />
                            </a>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </section>

        <section class="page-section" id="pricing">
            <div class="bg-custom-primary text-center mb-3" style="height: 200px">
                <img src="/images/arrow-divider2.PNG" width="100%">
                <h1 class="white--text">PRICING</h1>
            </div>
            <div class="pricing-container">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="pricing-box">
                                <div class="plan-name text-center">
                                    <h4>Basic</h4>
                                    <hr class="bg-custom-primary">
                                </div>
                                <div class="plan-info">
                                    <v-list style="background: inherit">
                                        <v-list-item>
                                            <v-list-item-icon color="primary" class="mr-2">
                                                <v-icon class="text-custom-primary">monetization_on</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title>1 USD per course</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-icon color="primary" class="mr-2">
                                                <v-icon class="text-custom-primary">group</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title>1 instructor</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </div>
                                <div class="plan-action text-center">   
                                    <v-btn class="white--text" color="primary" @click.prevent="$refs.SigninModal.open('GET STARTED')">Get Started</v-btn>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="pricing-box">
                                <div class="plan-name text-center">
                                    <h4>Bundle</h4>
                                    <hr class="bg-custom-primary">
                                </div>
                                <div class="plan-info">
                                    <v-list style="background: inherit">
                                        <v-list-item>
                                            <v-list-item-icon color="primary" class="mr-2">
                                                <v-icon class="text-custom-primary">monetization_on</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title>100 USD per year</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-icon color="primary" class="mr-2">
                                                <v-icon class="text-custom-primary">library_books</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title>200 courses</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-icon color="primary" class="mr-2">
                                                <v-icon class="text-custom-primary">group</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title>5 instructors</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </div>

                                <div class="plan-action text-center">   
                                    <v-btn class="white--text"  color="primary"  @click.prevent="$refs.SigninModal.open('GET STARTED')">Get Started</v-btn>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-4">
                            <div class="pricing-box">
                                <div class="plan-name text-center">
                                    <h4>Enterprise</h4>
                                    <hr class="bg-custom-primary">
                                </div>
                                <div class="plan-info">
                                    <v-list style="background: inherit">
                                        <v-list-item>
                                            <v-list-item-icon color="primary" class="mr-2">
                                                <v-icon class="text-custom-primary">monetization_on</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title>1,000 USD per year</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-icon color="primary" class="mr-2">
                                                <v-icon class="text-custom-primary">library_books</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title>Unlimited Courses</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-icon color="primary" class="mr-2">
                                                <v-icon class="text-custom-primary">group</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title>Unlimited Instructors</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </div>

                                <div class="plan-action text-center">   
                                    <v-btn class="white--text"  color="primary"  @click.prevent="$refs.SigninModal.open('GET STARTED')">Get Started</v-btn>
                                </div>
                            </div>
                        </div>
                    </div>            
                </div>
            </div>
        </section>


        <section class="page-section" id="community">
            <div class="section-head">
                <h1>OUR COMMUNITY</h1>
                <hr class="bg-custom-primary">
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-4" v-for="(community, i) in communities" :key="i">
                        <div class="info-box">
                            <div class="box-icon text-center mb-5">
                                <img :src="community.icon" height="100x" style="max-width: 60%">
                            </div>
                            <div class="text-center">
                                <h1>{{ community.name }}</h1>
                            </div>
                            <div class="box-text">
                                <p>{{ community.text }}</p>
                            </div>
                            <div class="text-center owner pr-2">
                                <p> {{ community.owner }}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </template>


        <template v-slot:after-container>
            <section id="footer">
            <div class="text-center text--primary">
                <p>&copy; 2021 ACADA</p>
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
    import 'flag-icon-css/css/flag-icon.min.css';

    export default {
        name: "HomePage",
        components: {
            App, SigninModal, NavDrawer
        },
        props: {
            howItWork: Array,
            features: Array,
            communities: Array,
            countries: Object,
            gateways: Array,
        },
        data(){
            return {
                videoDialog: false
            }
        },
        computed: {
             ...mapGetters([
                'auth', 'authenticated'
            ]),
            availableCountries(){
                return Object.keys(this.countries).map(code => ({
                    code: code,
                    name: this.countries[code]
                }))
            }
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
        padding: 50px 0;
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

    section#features{
        background-image: linear-gradient( #002B36, #fff);
    }

    section#features .info-box{
        background-color: #fff;
    }

    section#features .section-head h1{
        color: #fff;
    }

    section#features .section-head hr{
        background-color: #fff;
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
        margin-bottom: 10px;
    }

    .info-box .box-text
    {
        text-align: center;
        font-size: 16px;
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
        height: 200px;
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

    #community .owner {
        font-weight: bold;
        text-color: #f7f7f7;
    }

    #footer
    {
         padding: 30px 0;
    }

    .payment-gateway img{
        width: 250px;
    }

    @media (min-width: 768px){
        .banner-content
        {
            padding-top: 15%;
        }

        .pricing-container
        {
            padding: 0 100px;
        }
        .pricing-box
        {
            margin: 0 20px;
        }

    }

     @media (min-width: 960px){
        #features .info-box
        {
            min-height: 300px;
        }
        #community .info-box .box-text
        {
            min-height: 300px;
        }

        .payment-gateway img{
            width: 100%;
        }
     }

</style>
