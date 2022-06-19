<template>
  <div class="register">
    <h1>Signup</h1>
    <div class="form-outline mb-4">
      <input
        type="text"
        name="surname"
        placeholder="Surname"
        v-model="input.surname"
      />
    </div>
    <div class="form-outline mb-4">
      <input
        type="text"
        name="email"
        v-model="input.email"
        placeholder="email"
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
    <button type="button" class="btn btn-primary btn-block mb-4" v-on:click="register()">Sign up</button>
  </div>
</template>

<script>
export default {
  name: "SignupPage",
  data() {
    return {
      input: {
        email: "",
        password: "",
        surname: "",
      },
    };
  },
  methods: {
    register() {
      if (this.input.surname === "") {
        console.log("Surname must be set");
        return;
      }
      if (this.input.email !== "" && this.input.password !== "") {
        if (this.$store.state.users.findByEmail(this.input.email)) {
          console.log(`User with email '${this.input.email}' already exists!`);
          this.$router.push("/signup");
          return;
        }
        console.log("Adding user");
        this.$store.dispatch("ADD_USER", this.input);
        this.$router.push("/login");
      } else {
        console.log("Username and password must be set");
      }
    },
  },
};
</script>
