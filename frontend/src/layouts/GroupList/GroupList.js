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
  },
  watch: {},
  mounted() {
    this.getGroupList();
  },
};
