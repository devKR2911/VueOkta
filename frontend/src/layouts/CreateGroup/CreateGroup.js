import createGroupHelper from './CreateGroup.helper';

export default {
  name: 'CreateGroup',
  data() {
    return {
      groupName: '',
    };
  },
  methods: {
    createGroup() {
      const newGroup = {
        profile: {
          name: this.groupName,
        },
      };
      createGroupHelper
        .createGroup(newGroup)
        .then(() => {
          alert('Group created successfully');
          this.groupName = '';
        })
        .catch(() => {
          alert('Failed to create group');
        });
    },
  },
  watch: {},
};
