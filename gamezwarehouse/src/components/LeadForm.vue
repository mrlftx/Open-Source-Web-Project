<template>
  <main>

    <div id="wrapper">
      <h1>Please enter your personal information.</h1><br><br>
      <div id="center">
        <label for="name">Name:</label>
        <input type="text" id="text" name="name"><br><br>
        <label for="email">Email Address:</label>
        <input type="text" id="text" name="email"><br><br>
        <label for="phone">Phone Number:</label>
        <input type="text" id="text" name="phone"><br><br>
        <input type="submit" id="submit" value="Submit">
      </div>
    </div>
  </main>
</template>

<style scoped>
main{
  background-color: #f2f2f2;
}
#wrapper{
  position: absolute;
  left: 50%;
  transform: translate(-12.5vw, -20vh);
  text-align: center;
}
#center{
  position: absolute;
  transform: translateX(5vw);
  text-align: left;
}
#text{
  position: absolute;
  right: 0;
  transform: translateX(12.5vw);
}
#submit{
  position: absolute;
  right: 0;
  transform: translateX(5vw);
}
</style>