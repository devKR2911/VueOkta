import groupUserListHelper from './GroupUserList.helper';

export default {
  name: 'GroupUserList',
  data() {
    return {
      userList: [],
      groupName: '',
    };
  },
  methods: {
    getGroupUserList(groupId) {
      const groupObj = {
        id: groupId
      };
      groupUserListHelper.getAllGroupUsers(groupObj).then(res => {
        this.userList = res.users;
        this.groupName = res.group.profile.name;
      });
    },
  },
  watch: {},
  mounted() {
    const groupId = this.$route.params.groupid;
    this.getGroupUserList(groupId);
  },
};
