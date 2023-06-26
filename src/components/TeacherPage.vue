<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <div class="container">
      <h2 class="teal-text">Welcome, Adiyapika Ji _/\_</h2>
      <p class="grey-text">This is the teacher home page.</p>
    </div>
    <nav class="valign-wrapper  nav-warper text-white teal">
      <div class="container">
      <ul>
        <li><router-link class="white-text" to="/teacher/home">Home</router-link></li>
        <li><router-link class="white-text" to="/teacher/class">Class</router-link></li>
        <li><router-link class="white-text" to="/teacher/grades">Grades</router-link></li>
        <li><router-link class="white-text" to="/teacher/evaluation">Evaluation</router-link></li>
      </ul>
    </div>
    </nav>
    <router-view></router-view>
  </template>
  
  <script>
  export default {
    name: 'TeacherPage',
  };
  </script>
  
  <style scoped>
  /* Add your custom CSS styles here */
  .container {
  /* margin-top: 20px; */
}

.teal-text {
  color: #009688;
}

.grey-text {
  color: #757575;
}

.valign-wrapper {
  display: flex;
  align-items: center;
}

.teal {
  background-color: #009688;
}

.nav-wrapper li {
  display: inline-block;
  margin-right: 10px;
}

.white-text {
  color: #fff;
}
  </style>
  




        