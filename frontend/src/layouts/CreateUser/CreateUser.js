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
      password: '',
      isEditMode: false,
      userId: '',
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
            value: this.password,
          },
        },
      };
      createUserHelper
        .addUser(newUser)
        .then(() => {
          this.clearFields();
          alert('user created successfully');
        })
        .catch(() => {
          alert('failed to create user');
        });
    },
    updateUser() {
      const userObj = {
        profile: {
          firstName: this.firstname,
          lastName: this.lastname,
          email: this.email,
          login: this.email,
        },
        credentials: {
          password: {
            value: this.password,
          },
        },
      };
      const updateObj = {
        id: this.userId,
        userObj,
      };

      createUserHelper
        .updateUser(updateObj)
        .then(() => {
          this.clearFields();
          alert('user updated successfully');
        })
        .catch(() => {
          alert('failed to update user');
        });
    },
    setUserDetails(userDetails) {
      this.firstname = userDetails.profile.firstName;
      this.lastname = userDetails.profile.lastName;
      this.email = userDetails.profile.email;
      this.password = '';
      this.isEditMode = true;
    },
    clearFields() {
      this.firstname = '';
      this.lastname = '';
      this.email = '';
      this.password = '';
    },
    getUserDetails(userId) {
      const userObj = {
        id: userId,
      };
      this.userId = userId;
      createUserHelper.getUserDetails(userObj).then(res => {
        this.setUserDetails(res.user);
      });
    },
  },
  watch: {},
  mounted() {
    if (this.$route.name === 'updateuser') {
      const userId = this.$route.params.id;
      this.getUserDetails(userId);
    }
  },
};
