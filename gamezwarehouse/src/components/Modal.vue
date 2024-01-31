<script setup>
const props = defineProps({
  show: Boolean
})
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="mask">
      <div class="container">
        <div class="header">
          <button class="exit-button" @click="$emit('close')">X</button>
          <h1>Please enter your personal information.</h1>
        </div>

        <div class="body">
          <label for="name" id="label">User Name:</label>
          <input type="text" id="text" name="name"><br><br>
          <label for="email" id="label">Email Address:</label>
          <input type="text" id="text" name="email"><br><br>
          <label for="phone" id="label">Phone Number:</label>
          <input type="text" id="text" name="phone">
        </div>

        <div class="footer">
          <input type="submit" id="submit" value="Submit">
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
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
  height: 50vh;
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
  line-height: 6vh;
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
}

.modal-enter-from {
  opacity: 0;
}
.modal-leave-to {
  opacity: 0;
}
</style>