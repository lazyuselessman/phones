<template>
  <div v-if="this.$store.state.currentUser" class="list-group">
    <div class="d-flex justify-content-center">
    <button @click="add">Add</button>
    <PhoneListEdit :phone="$store.state.currentUserPhone" 
      @deleteNumber="deleteNumber" @editNumber="editNumber"/>
    </div>
  </div>
</template>

<script>
import PhoneListEdit from '@/components/PhoneListEdit.vue'

export default {
  name: 'ProfilePage',
  components: { PhoneListEdit },
  data() {
    return {
      
    };
  },
  methods: {
    add() {
      this.$router.push({name:'add'});
    },
    deleteNumber(numberId) {
      this.$router.push({name:'delete', params: {numberId: numberId}});
    },
    editNumber(numberId) { 
      this.$router.push({name:'edit', params: {numberId: numberId}});
    }
  }
}
</script>
