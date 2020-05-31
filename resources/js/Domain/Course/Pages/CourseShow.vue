<template>
    <div>
        <h4>{{course.title}}</h4>
        <v-img :src="course.cover_image" ></v-img>
        <v-divider></v-divider>
        <div class="d-flex">
            <div>
                <h1>{{ course.price | money }}</h1>
            </div>
            <div class="ml-auto">
                <v-btn dark large :color="account.theme_color">
                    Enroll Now <v-icon>arrow_forward</v-icon>
                </v-btn>
            </div>
        </div>
        <v-divider></v-divider>
        <div>
            {{course.description}}
        </div>

        <v-btn fixed dark fab bottom right large :color="account.theme_color" :title="`Enroll for ${course.title}`">
                <v-icon>arrow_forward</v-icon>
        </v-btn>
    </div>
    
</template>

<script>
    import {mapGetters} from "vuex";
    import AccountLayout from '@/Domain/Account/Layout';

    export default {
        name: "CourseShow",
        layout: (h, page) => h(AccountLayout, [page]),
         metaInfo()
         {
             return{
                title: `${this.course.title} ${this.account.at_username}`,
                titleTemplate: '%s - AcadaApp',
             }
        },
        props: {
            account: Object,
            course: Object
        },
        computed: {
            ...mapGetters([
                'auth', 'authenticated', 'isMyAccount', 'isOnMyAccount'
            ]),
        },

    }
</script>