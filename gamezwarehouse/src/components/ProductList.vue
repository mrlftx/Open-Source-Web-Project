<template>
  <main>
      <div id="list">
        <div class="odd" id ="container"><img src="../assets/gow.png" id="image">
          <div id="desc">
            <div id="title"><h2>God of War Ragnarok<br>Playstation 5</h2></div>
            <div id="rate"><h1 class="left">
              <img src="../assets/Star 2.png" id="star">4.8</h1><h1 class="right">$59.99</h1></div>
          </div>
        </div>
        <div class="even" id ="container"><img src="../assets/smbw.png" id="image">
          <div id="desc">
            <div id="title"><h2>Super Mario Bros Wonder<br>Nintendo Switch</h2></div>
            <div id="rate"><h1 class="left">
              <img src="../assets/Star 2.png" id="star">4.8</h1><h1 class="right">$49.99</h1></div>
          </div>
        </div>
        <div class="odd" id ="container"><img src="../assets/ffxvi.png" id="image">
          <div id="desc">
            <div id="title"><h2>Final Fantasy XVI<br>Playstation 5</h2></div>
            <div id="rate"><h1 class="left">
              <img src="../assets/Star 2.png" id="star">4.4</h1><h1 class="right">$49.99</h1></div>
          </div>
        </div>
        <div class="even" id ="container"><img src="../assets/mpss.png" id="image">
          <div id="desc">
            <div id="title"><h2>Mario Party Superstars<br>Nintendo Switch</h2></div>
            <div id="rate"><h1 class="left">
              <img src="../assets/Star 2.png" id="star">4.2</h1><h1 class="right">$39.99</h1></div>
          </div>
        </div>
        <div class="odd" id ="container"><img src="../assets/jedi.png" id="image">
          <div id="desc">
            <div id="title"><h2>Star Wars Jedi Survivor<br>Playstation 5</h2></div>
            <div id="rate"><h1 class="left">
              <img src="../assets/Star 2.png" id="star">4.6</h1><h1 class="right">$44.99</h1></div>
          </div>
        </div>
        <div class="even" id ="container"><img src="../assets/mk8.png" id="image">
          <div id="desc">
            <div id="title"><h2>Mario Kart 8<br>Nintendo Switch</h2></div>
            <div id="rate"><h1 class="left">
              <img src="../assets/Star 2.png" id="star">4.7</h1><h1 class="right">$35.99</h1></div>
          </div>
        </div>
        <div class="odd" id ="container"><img src="../assets/fh5.png" id="image">
          <div id="desc"><div id="title"><h2>Forza Horizon 5<br>Series X</h2></div>
            <div id="rate"><h1 class="left">
              <img src="../assets/Star 2.png" id="star">4.3</h1><h1 class="right">$49.99</h1></div>
          </div>
        </div>
        <div class="even" id ="container"><img src="../assets/hi.png" id="image">
          <div id="desc">
            <div id="title"><h2>Halo Infinite<br>Series X</h2></div>
              <div id="rate"><h1 class="left">
                <img src="../assets/Star 2.png" id="star">4.6</h1><h1 class="right">$39.99</h1></div>
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
  width: 100vw;
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
  width: 160vw;
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
</style>
<script>
</script>