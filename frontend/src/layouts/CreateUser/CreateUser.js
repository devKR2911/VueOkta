import createUserHelper from './CreateUser.helper';

export default {
  name: 'CreateUser',
  data() {
    return {
      id: '',
      pageName: 'CreateUser',
    };
  },
  methods: {
    addUser() {
      const newUser = {
        profile: {
          firstName: 'Foo',
          lastName: 'Bar',
          email: 'foo@example.com',
          login: 'foo@example.com',
        },
        credentials: {
          password: {
            value: 'PasswordAbc123'
          }
        }
      }
      createUserHelper.addUser(newUser).then(res => {
        alert('user created successfully');
      }).catch(err => {
        alert('failed to create user');
      })
    }
  },
  watch: {},
};
