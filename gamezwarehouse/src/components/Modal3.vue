<script setup>
import ProductList from "@/components/ProductList.vue";
import SearchList from "@/components/SearchList.vue";
const props = defineProps({
  show: Boolean,
  text: String
})
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="mask" @click.self="$emit('close')">
      <div class="container">
        <div class="header">
          <button class="exit-button" @click="$emit('close')">X</button>
          <h1>Searching for: {{text}}</h1>
        </div>

        <div class="body">
          <SearchList :text="text"></SearchList>
        </div>

        <div class="footer">
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
  width: 90vw;
  height: 86vh;
  margin: auto;
  padding: 20px 30px;
  background-color: #f2f2f2;
  border-radius: 25px;
  box-shadow: .15vw .15vh 10px #28398A;
  color: #3648A2;

}

.body {
  margin: 1.5vh -1.5vw;
  font-size: 24px;
  line-height: 6vh;
  vertical-align: middle;
  font-family: 'Open Sans', sans-serif;
  transform: translateY(1vh);
  overflow-x: auto;
  overflow-y: hidden;
}
.header{
  //position: fixed;
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


.modal-enter-from {
  opacity: 0;
}
.modal-leave-to {
  opacity: 0;
}
</style>