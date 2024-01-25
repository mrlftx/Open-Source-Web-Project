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
        <input type="button" class="button" value="REGISTER">
      </div>
      <div id ="Center">
        <img src="../assets/PS5-phy2.png" alt="Spider-Man" width="400" height="603.2"><img
      </div>
      <div id ="Right">
        <h3>Check up on the latest games!</h3>
        <iframe width="600" height="320" src="https://www.youtube.com/embed/7Bb_QpVUMJQ" title="The Biggest Games Coming in 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

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
//left: 100px;
  text-align: center;
//padding-left: 10px;
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
#Right{
  width: 30vw;
  display: inline-block;
  position: absolute;
  transform: translate(65vw, 18vh);
  text-align: center;
}
</style>
<script setup>
import NavBar from "@/components/NavBar.vue";
</script>