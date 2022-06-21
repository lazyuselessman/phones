<template>
  <div>
    <label for="item">Replace a phone number:</label>
    <p><input id="item" type="text" v-model="number" /></p>
    <p>
      <button @click="edit">Edit</button>
      <button @click="cancel">Cancel</button>
    </p>
  </div>    
</template>

<script>

export default {
  name: 'EditPage',
  props: ['numberId'],
  
  data () {
    return {
        number: ''
    }
  },
  
  mounted() {
    // if (this.numberId == null) { // and undefined
    //   this.$router.push({name: 'home'});
    //   return;
    // }
    // const number = this.$store.state.phoneNumbers.getNumber(this.$store.state.currentUser, this.numberId);  
    // this.number = number; 
  },

  methods: {
    edit() {
      this.$store.dispatch('EDIT_NUMBER', {id: this.numberId, number: this.number});
      this.$router.push({name: 'profile'});
    },
    cancel() {
      this.$router.push({name: 'profile'});
    }
  }
}
</script>