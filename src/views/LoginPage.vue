<template>
  <div class="login">
    <div class="d-flex justify-content-center">
      <form>
        <p class="text-center">Login</p>
        <div class="form-outline mb-4">
          <input
            type="text"
            name="email"
            v-model="input.email"
            placeholder="Email"
          />
        </div>
        <div class="form-outline mb-4">
          <input
            type="password"
            name="password"
            v-model="input.password"
            placeholder="Password"
          />
        </div>
        <button type="button" class="btn btn-primary btn-block mb-4" v-on:click="login()">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      input: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (this.input.email !== "" && this.input.password !== "") {
        this.$store.dispatch("LOGIN", this.input);
      if (this.$store.state.currentUser) {
        this.$router.push("/profile");
      }
      else
      {
        this.$router.push("/login");
      }
        // this.$router.push("/home");
      } else {
        console.log("Email and password must be set");
      }
    },
  },
};
</script>
