<script setup>
import Modal from './Modal.vue'
</script>
<script>
export default {
  data() {
    return {
      show: true,
      load: false
    }
  },
  mounted: function auto()
  {
    setInterval(() => {
      this.show = !this.show
    }, 5000)
  }
}
</script>
<template>
  <header>
  </header>

  <main>
    <div id ="Container">
      <div id ="Left"><h2>The Quick & Easy Way<br>
        to Buy & Sell Games!</h2>
        <p>Get rid of unwanted games &<br>
          find the cheapest deals here at</p>
        <br>
        <h1>GamezWarehouse</h1>
        <br>
        <br>
        <h4>Not a member?<br>
          Click here to register now!</h4><br>
        <button @click="load = !load" type="button" class="button" value="REGISTER">REGISTER</button>
        <teleport to="body">
          <modal :show="load" @close="load= false">
          </modal>
        </teleport>
      </div>
      <div id ="Center">
        <Transition name="fade" appear>
        <img v-if="show" src="../assets/PS5-phy2.png" alt="Spider-Man" width="400" height="603.2">
        <img v-else src="../assets/SWI-phy2.png" alt="Spider-Man" width="400" height="603.2">
        </Transition>
      </div>
      <div id ="Right">
        <h3>Check up on the latest games!</h3>
        <iframe width="600vw" height="320vh" src="https://www.youtube.com/embed/7Bb_QpVUMJQ" title="The Biggest Games Coming in 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  </main>
  <footer>
    <h2>Best Sellers</h2>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
footer{
  color: #F7FBFC;
  left: 0;
  top: 87.5vh;
  position: absolute;
  padding-left: 7.5vw;
  width: 100vw;
  background-image: url("../assets/Bottom Bar.png");
}
main{
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  line-height: 1.4;
  color: #3648A2;
}
#Container{
  width: 100vw;
  height: 70vh;
  left: 0px;
  top: 10%;
  position: absolute;
}
#Left{
  width: 35vw;
  display: inline-block;
  position: absolute;
  transform: translate(5vw, 10vh);
  text-align: center;
}
h1{
  font-size: 72px;
  font-weight: 600;
}
h2{
  font-size: 50px;
  font-weight: 600;
}
h3{
  font-size: 36px;
  font-weight: 600;
}
h4{
  font-size: 28px;
  font-weight: 600;
}
p{
  font-size: 24px;
  font-weight: 600;
}
.button{
  background-color: #28398A;
  border-radius: 35px;
  border: 0px;
  width: 15vw;
  height: 7.5vh;
  color: #F7FBFC;
  font-size: 36px;
  font-weight: 700;
  cursor: pointer;
}
#Center{
  width: 35vw;
  display: inline-block;
  position: absolute;
  transform: translate(42vw, 8vh);
}
img{
  position: absolute;
  transform: translate(0vw, 0vh);
}
.fade-enter-active, .fade-leave-active{
  transition: opacity 3s ease-in-out;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
#Right{
  width: 30vw;
  display: inline-block;
  position: absolute;
  transform: translate(65vw, 18vh);
  text-align: center;
}
</style>
