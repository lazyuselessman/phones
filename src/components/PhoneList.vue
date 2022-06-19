<template>
  <div v-if="this.phoneNumbers.length" class="list-group">
    <div class="table">
      <table class="center">
        <tr v-if="phoneNumbers">
          <th>Surname</th>
          <th>Phone Numbers</th>
        </tr>
        <tr v-for="phoneNumber in this.phoneNumbers.slice().reverse()" :key="phoneNumber.id">
          <td v-if="phoneNumber.numbers.length">{{ phoneNumber.surname }}</td>
          <td v-if="phoneNumber.numbers.length">
            <table>
              <tr v-for="number in phoneNumber.numbers" :key="number.id">
                <td>{{ number.number }}</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </div>
  <div v-else>
    <h3>There are no phone numbers in dictionary!</h3>
  </div>
</template>

<script>
export default {
  name: "PhoneList",
  props: {
    phoneNumbers: Array,
  },
  methods: {
    getAuthorName(authorId) {
      const author = this.$store.state.users.findById(authorId);
      return `${author.firstname} ${author.lastname}`;
    },
  },
};
</script>

<style>
.center {
  margin-left: auto;
  margin-right: auto;
}
</style>