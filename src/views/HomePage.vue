<template>
  <div class="home">
    <PhoneList :phoneNumbers="this.$store.state.phoneNumbers.phones" />
  </div>
</template>

<script>
import PhoneList from '@/components/PhoneList.vue'

export default {
  name: 'HomePage',
  components: {
    PhoneList,
  },
}
</script>
