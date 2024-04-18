<script setup>
const props = defineProps({
  show: Boolean
})
</script>
<script>
import axios from "axios";

export default {
  data() {
    return {
      userName: "",
      password: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    async saveUser() {
      try {
        await axios.post("http://localhost:5174/api/users", {
          username: this.userName,
          password: this.password,
          email: this.email,
          phone: this.phone
        }).then((res) => {

          if(res.data.msg === "Error!") {
            let errors;
            errors = res.data.errors.errs;
            console.log(res.data.errors); //For debugging purposes
            let errorMsg = "";

            for (let i = 0; i < errors.length; i++) {
              errorMsg += `${errors[i]}\n`;
            }

            alert(errorMsg)
          }
          else{
            console.log("Login successful")
            alert("User successfully registered.")
            this.$emit('close')}
        }
        );
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<template>
  <Transition name="modal">
    <div v-if="show" class="mask" @click.self="$emit('close')">
      <div class="container">
        <div class="header">
          <button class="exit-button" @click="$emit('close')">X</button>
          <h1>Please enter your personal information.</h1>
        </div>

        <div class="body">
          <label for="name" id="label">User Name:</label>
          <input type="text" id="text" name="name" v-model="userName"><br><br>
          <label for="pass" id="label">Password:</label>
          <input type="text" id="text" name="pass" v-model="password"><br><br>
          <label for="email" id="label">Email Address:</label>
          <input type="text" id="text" name="email" v-model="email"><br><br>
          <label for="phone" id="label">Phone Number:</label>
          <input type="text" id="text" name="phone" v-model="phone">
        </div>

        <div class="footer">
          <input type="submit" id="submit" value="Submit" @click="saveUser">
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
.mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.container {
  width: 35vw;
  height: 55vh;
  margin: auto;
  padding: 20px 30px;
  background-color: #f2f2f2;
  border-radius: 25px;
  box-shadow: .15vw .15vh 10px #28398A;
  color: #3648A2;
}

.body {
  margin: 20px 0;
  font-size: 24px;
  line-height: 5vh;
  vertical-align: middle;
  font-family: 'Open Sans', sans-serif;
}

.exit-button {
  float: right;
  height: 3vh;
  width: 1.5vw;
  margin-top: 1vh;
  font-size: 20px;
  border-radius: 25px;
  background-color: #28398A;
  color: #F7FBFC;
  cursor: pointer;
}

h1{
  font-size: 30px;
}
#label{
  position: absolute;
  left: 35vw;
}
#text{
  position: absolute;
  height: 36px;
  margin-top: 1vh;
  right: 0;
  transform: translateX(-35vw);
}
#submit{
  position: absolute;
  right: 0;
  width: 7.5vw;
  height: 5vh;
  transform: translate(-46vw, 7vh);
  background-color: #28398A;
  color: #F7FBFC;
  border-radius: 25px;
  font-size: 24px;
  cursor: pointer;
}

.modal-enter-from {
  opacity: 0;
}
.modal-leave-to {
  opacity: 0;
}
</style>