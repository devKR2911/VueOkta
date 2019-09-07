export default {
  name: 'Dashboard',
  directives: {},
  filters: {},
  data() {
    return {
      id: '',
      pageName: 'Dashboard',
    };
  },
  methods: {
    goto(path) {
      this.$router.push({
        path: path
      })
    }
  },
  watch: {},
  components: {},
};
