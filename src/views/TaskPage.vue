<template>
  <div class="d-flex justify-content-center">
    <button type="button" class="btn btn-primary btn-block mb-4" v-on:click="calculate_numbers()">Calculate numbers</button>
    <h1>Tasks</h1>
    <table class="center">
      <tr>
        <th>Name</th>
        <th>Task data</th>
        <th>Result</th>
        <th>end date</th>
      </tr>
      <tr v-for="task in this.$store.state.tasks.tasks" :key="task">
        <td>{{ task.name }}</td>
        <td>{{ task.data }}</td>
        <td>{{ task.result }}</td>
        <td>{{ task.endDate }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TaskPage',
  methods: {
    calculate_numbers() {
      console.log("sending starting");
      this.$store.state.ws.send(
        JSON.stringify({
          type: "calculate_numbers",
        })
      );
    },
  },
}
</script>
