<template>
    <div class="modal fade" id="signinModal" tabindex="-1" role="dialog" aria-labelledby="signinModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
            <div class="modal-content">
                 <div class="modal-header">
                    <h2 class="modal-title" id="signinModalLabel" style="color: #E91E63; font-weight: bolder">{{ title }}</h2>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                   <signin-form />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SigninForm from '@/components/SigninForm';

    export default {
        name: "SigninModal",
        components: { SigninForm },
        data(){
            return {
                title: ''
            }
        },

        methods:{
            open(title = "Signin"){
                this.title = title;
                $('#signinModal').modal({
                    keyboard: false
                })
            },
            close(){
                 $('#signinModal').modal('hide');
            }
        }
    }
</script>

<style lang="scss">
    .modal-open{
        padding: 0 !important;
    }
</style>