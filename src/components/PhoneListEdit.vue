<template>
  <div class="table">
    <table class="center">
      <tr>
        <th>Surname</th>
        <th>Phone Numbers</th>
        <th>Actions</th>
      </tr>
      <tr>
        <td>{{ phone.surname }}</td>
        <td>
          <table>
            <tr v-for="number in phone.numbers" :key="number.id">
              <td>{{ number.number }}</td>
              <td>
                <button @click="deleteNumber(number.id)">Delete</button> &nbsp;
                <button @click="editNumber(number.id)">Edit</button>
            </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import phoneNumber from "@/cls/model/PhoneNumber.js"

export default {
  name: "PhoneListEdit",
  props: {
    phone: phoneNumber,
  },
  methods: {
    deleteNumber(id) {
      this.$emit('deleteNumber', id);
    },
    editNumber(id) {
      this.$emit('editNumber', id);
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