import groupListHelper from './GroupList.helper';

export default {
  name: 'GroupList',
  data() {
    return {
      id: '',
      pageName: 'GroupList',
      groupList: [],
    };
  },
  methods: {
    getGroupList() {
      groupListHelper.getAllGroups().then(res => {
        this.groupList = res.groups;
      });
    },
    deleteGroup() {
      alert('not implemented');
    },
    getGroupUsers(group) {
      this.$router.push({
        name: 'groupusers',
        params: {
          groupid: group.id,
        },
      });
    }
  },
  watch: {},
  mounted() {
    this.getGroupList();
  },
};
