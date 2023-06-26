<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <div class="container">
      <h2 class="purple-text text-darken-3">Welcome, Student!</h2>
      <p class="grey-text">This is the student home page.</p>
    </div>
    <nav class="valign-wrapper purple darken-3 nav-warper text-white">
      <div class="container">
      <ul>
        <li><router-link class="white-text" to="/student/home">Home</router-link></li>
        <li><router-link class="white-text" to="/student/learn">Learn</router-link></li>
        <li><router-link class="white-text" to="/student/test">Test</router-link></li>
        <li><router-link class="white-text" to="/student/practice">Practice</router-link></li>
      </ul>
    </div>
    </nav>
    <router-view></router-view>
  </template>
  
  <script>
  export default {
    name: 'StudentHome',
  };
  </script>
  
  <style>
  /* Add your custom CSS styles here */
  .container {
  margin-top: 20px;
}

.purple-text {
  color: #7b1fa2;
}

.grey-text {
  color: #757575;
}

.valign-wrapper {
  display: flex;
  align-items: center;
}

.purple {
  background-color: #7b1fa2;
}

.nav-wrapper li {
  display: inline-block;
  margin-right: 10px;
}

.white-text {
  color: #fff;
}
  </style>
  