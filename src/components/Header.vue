<!-- src/components/Header.vue -->

<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">FYI Snippets Search</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav >
        <b-nav-form>
          <b-form-input lazy 
            v-model="searchString"
            size="sm" class="mr-sm-6"
            placeholder="Search">
          </b-form-input>
          <b-button
            size="sm"
            variant="primary"
            @click="executeSearch">Search
          </b-button>
          <b-button size="sm"
            variant="info"
            @click="resetSearchString">Reset
          </b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    searchString: {
      get() {
        return this.$store.state.searchString;
      },
      set(value) {
        this.$store.dispatch('setSearchString', value);
      },
    },
  },
  methods: {
    executeSearch() {
      this.$store.dispatch('setSearchString', this.searchString);
    },
    resetSearchString() {
      this.$store.dispatch('setSearchString');
    }
  }

}
</script>