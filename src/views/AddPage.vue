<template>
  <div>
    <label for="item">Enter a phone number:</label>
    <p><input id="item" type="text" v-model="phoneNumber" /></p>
    <p><button @click="add">Add</button></p>
  </div>    
</template>

<script>
export default {
  name: 'AddPage',
  data () {
    return {
      phoneNumber: "",
    }
  },
  methods: {
    add() {
      this.$store.dispatch('ADD_NUMBER', this.phoneNumber);
      this.$router.push({name: 'profile'});
      this.$store.state.ws.send(
        JSON.stringify({
          type: "number_add",
        })
      );
    }
  }
}
</script>
