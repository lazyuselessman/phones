<template>
  <div>
    <p> Are you sure to delete number #<b>{{ numberId }}</b>"?</p>
    <p>
      <button @click="deleteItem">Yes</button> &nbsp;
      <button @click="cancel">No</button>
    </p>
  </div>    
</template>

<script>
export default {
  name: 'DeletePage',
  props: ['numberId'],
  
  mounted() {
    if (this.numberId == null) {
      // and undefined
      this.$router.push({name: 'Home'});
      return;
    }
  },

  methods: {
    deleteItem() {
      this.$store.dispatch('DELETE_NUMBER', this.numberId);
      this.$router.push({name: 'profile'});
    },
    cancel() {
      this.$router.push({name: 'profile'});
    }
  }
}

</script>