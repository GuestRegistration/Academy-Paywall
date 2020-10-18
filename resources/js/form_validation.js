
const formValidation = {
        rules: {
            required: value => !!value || 'Field required.',
            email: value => {
                const regx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return regx.test(value) || 'Invalid email address';
            }
        }
}

export default formValidation