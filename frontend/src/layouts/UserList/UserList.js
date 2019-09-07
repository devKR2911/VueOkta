import userListHelper from './UserList.helper';

export default {
  name: 'UserList',
  data() {
    return {
      id: '',
      pageName: 'UserList',
      userList: [],
    };
  },
  methods: {
    getUserList() {
      userListHelper.getAllUsers().then(res => {
        this.userList = res.users;
      });
    },
    editUser(user) {
      this.$router.push({
        name: 'updateuser',
        params: {
          id: user.id,
        },
      });
    },
    deleteUser(user) {
      if (window.confirm('Are you sure to delete this user?')) {
        const userObj = {
          id: user.id,
        };
        userListHelper.deleteUser(userObj).then(() => {
          this.getUserList();
        });
      }
    },
  },
  watch: {},
  mounted() {
    this.getUserList();
  },
};
