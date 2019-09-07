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
    }
  },
  watch: {},
  mounted() {
    this.getUserList()
  },
};
