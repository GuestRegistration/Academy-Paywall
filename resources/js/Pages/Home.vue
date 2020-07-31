<template>
    <div>
        <div id="banner" style="background-image: url('images/Online-Tutoring.jpg');">
            <div id="banner-overlay">
                <nav class="navbar navbar-expand-lg navbar-dark">
                    <a class="navbar-brand" :href="route('home')">ACADA</a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <!-- Right Side Of Navbar -->
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item ">
                                <a href="#" class="nav-link" >
                                    PRICING
                                </a>
                            </li>
                            <li class="nav-item ">
                                <a href="#" class="nav-link" >
                                    FEATURES
                                </a>
                            </li>
                            <li class="nav-item" v-if="!authenticated">
                                <a href="#" class="nav-link btn" @click.prevent="$refs.SigninModal.open()">
                                    LOGIN
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="main">
                    <div class="text-center banner-text">
                        <h1>CREATE A WEBSITE</h1>
                        <h1>FOR YOUR COURSES IN MINUTES</h1>
                        <button v-if="!authenticated" class="btn" @click.prevent="$refs.SigninModal.open('GET STARTED')">GET STARTED</button>
                        <a v-if="authenticated && auth.account.username" :href="route('account.show', {account: auth.account.username})" class="btn m-2"> <v-icon color="#fff">school</v-icon> My Organization</a>
                        <a v-if="authenticated && auth.profile.username" :href="route('profile.show', {profile: auth.profile.username})" class="btn m-2"><v-icon color="#fff">account_circle</v-icon> My Profile</a>
                    </div>
                </div>
            </div>
        </div>
        <signin-modal ref="SigninModal" />
    </div>

</template>


<script>
    import {mapGetters} from "vuex";
    import SigninModal from '@/components/SigninModal';
    export default {
        name: "HomePage",
        components: {
            SigninModal
        },
        metaInfo()
         {
             return{
                title: `Home`,
                titleTemplate: '%s - AcadaApp',
             }
        },

        computed: {
             ...mapGetters([
                'auth', 'authenticated'
            ]),
        }
    }
</script>

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
    .navbar-brand
    {
        font-size: 20px;
    }
    .nav-link
    {
        color: #fff !important;
    }
    .main
    {
        padding-top: 10%;
    }
    .banner-text
    {
        font-weight: bolder;
        color: #fff
    }
    .btn
    {
        color: #fff;
        background-color: #E91E63;
        border-radius: 15px;
        padding: 0.375rem 1rem !important;
    }


</style>
