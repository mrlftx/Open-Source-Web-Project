<script setup>
const props = defineProps({
  text: String
})
</script>
<script>
import axios from "axios";

var show = false;
export default {
  data() {
    return {
      items: []
    };
  },
  created() {
    this.getProductsByName();
  },
  methods: {
    async getProductsByName() {
      try {
        const response = await axios.get(`http://localhost:5174/api/products/${this.text}`);
          console.log(response);
        this.items = response.data;
        if(response.data.length){
          show = false;
        }
        else{
          show = true;
        }
        console.log(this.items);
      } catch (err) {
        console.log(err);
      }
    },
  }
}
</script>

<template>
  <main>
    <div id="list" ><h3 v-if="show">Search not found</h3>
      <div class="odd" id ="container" v-for="item in items" :key="item.id"><img :src="item.image" id="image">
        <div id="desc">
          <div id="title"><h2>{{ item.name }}<br>{{ item.console }}</h2></div>
          <div id="rate"><h1 class="left">
            <img src="../assets/Star 2.png" id="star">{{ item.rating }}</h1><h1 class="right">${{ item.price }}</h1></div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
#title{
  height: 11vh;
}
#rate{
  margin-top: 3vh;
  margin-right: 4vh;
  margin-left: 4vh;
}
#star{
  transform: translate(-.25vw,.75vh);
  width: 2.25vw;
  height: 4.5vh;
}
.left{
  float: left;
  background-color: #DADADA;
  padding: 0 .75vw;
}
.right{
  float: right;
  background-color: #DADADA;
  padding: 0 .5vw;
}
#desc{
  width: auto;
  height: 23.5vh;
  background-color: #F2F2F2;
  text-align: center;
  padding-top: 1vh;
  color: #000000;
}
#image{
  max-width: 80vw;
  max-height: 42.5vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  margin-bottom: 5%;
}
main{
  background-color: #f2f2f2;
  width: auto;
  position: relative;
  height: 70vh;
  font-family: 'Open Sans', sans-serif;
}
.odd{
  background-color: #D9EAFF;
}
.even{
  background-color: #C5DFFF;
}
#container{
  width:20vw;
  height: 60vh;
}
#list{
  left: 0;
  width: auto;
  height: 70vh;
  display: flex;
  flex-direction: row;
  text-align: left;
  position: absolute;
}
h1{
  font-size: 40px;
  display: inline-block;
}
h2{
  font-size: 30px;
  display: inline-block;
}
h3{
  font-size: 50px;
  display: inline-block;
  position: relative;
  left: 35vw;
  top: 40%
}
</style>
