import {
    httpPost
} from '../../communication/communication';

export default {
    name: 'Login',
    data: function () {
        return {
            msg: 'hello',
        }
    },
    methods: {
        getDetails() {
            httpPost('auth/login', {
                username: 'name',
                password: 'pass'
            }).then(res => {
                console.log(res);
            })
        }
    },
    mounted() {
        this.getDetails()
    },
}