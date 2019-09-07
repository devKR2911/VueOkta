import createUserHelper from './CreateUser.helper';

export default {
  name: 'CreateUser',
  data() {
    return {
      id: '',
      pageName: 'CreateUser',
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    };
  },
  methods: {
    addUser() {
      const newUser = {
        profile: {
          firstName: this.firstname,
          lastName: this.lastname,
          email: this.email,
          login: this.email,
        },
        credentials: {
          password: {
            value: this.password
          }
        }
      }
      createUserHelper.addUser(newUser).then(res => {
        this.clearFields();
        alert('user created successfully');
      }).catch(err => {
        alert('failed to create user');
      })
    },
    clearFields() {
      this.firstname = '';
      this.lastname = '';
      this.email = '';
      this.password = '';
    }
  },
  watch: {},
};
