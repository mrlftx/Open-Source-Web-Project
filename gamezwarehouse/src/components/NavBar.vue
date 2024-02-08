<template>
  <header>
    <div id="nav">
      <div id="outer">
        <div id="inner">
          <h1 id="logo">GamezWarehouse</h1>
          <input type="text" id="search" placeholder="Search">
          <h1 id="login">Login</h1>
        </div>
      </div>
    </div>
  </header>

  <main>

  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 9.5vh;
}
h1{
  font-size: 30px;
  font-family: 'Open Sans', sans-serif;
  color: #FFFFFF;
}
#logo{
  text-align: center;
  display: inline-block;
  transform: translate(4vw, 1vh);
}
#login{
  text-align: center;
  display: inline-block;
  transform: translate(52vw, 1vh);
}
#search{
  text-align: left;
  font-size: 20px;
  display: inline-block;
  height: 6vh;
  line-height: 6vh;
  width: 22.5vw;
  transform: translate(27.5vw, .75vh);
  border-radius: 25px;
  border: 0;
  text-indent: .5vw;
}
#nav {
  position: absolute;
  display: inline-block;
  background-color: #28398A;
  width: 100vw;
  height: 9.5vh;
  left: 0;
}
#outer{
  position: absolute;
  display: inline-block;
  background-color: #576BCE;
  width: 100vw;
  height: 8vh;
  transform: translateY(.75vh);
}
#inner{
  position: absolute;
  display: inline-block;
  background-color: #3951C6;
  width: 100vw;
  height: 7.5vh;
  transform: translateY(.25vh);
}
</style>
