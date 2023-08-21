<template>
    <div class="login-container">
      <h2>Login Page</h2>
      <form @submit.prevent="login" class="login-form">
        <input type="text" id="username" v-model="username" required>
        <br>
        <label for="password">Password: </label>
        <input type="password" id="password" v-model="password" required>
        <br>
        <button type="submit">Login</button><br>
        <div v-if ="loggedIn">
            <h2>The name is : {{user.name}}</h2>
            <StudentPage/>
        </div>
        <div v-else>
            <GoogleLogin :callback = "callback" prompt auto-login/>
        </div>
       </form>
   </div>  
  </template>

<script >

export default {
    data() {
      return {
        username: '',
        password: '',
        callback:(response)=> {
          console.log("Logged in") 
          console.log(response)
        }
      };
    },
    
methods: {
    login() {
      const teacher = this.$store.state.teachers.find(teacher => teacher.username === this.username);
      const student = this.$store.state.students.find(student => student.username === this.username);

      if (teacher && teacher.password === this.password) {
        const currentUser = this.$store.getters.getTeacherByUsername(this.username);
        this.$store.commit('setCurrentUser', currentUser);

        this.$emit('login',  'teacher');
        return;
      }
      else if (student && student.password === this.password) {
        const currentUser = this.$store.getters.getStudentByUsername(this.username);
        this.$store.commit('setCurrentUser', currentUser);
        this.$emit('login', 'student');
        return;
      }
      else {
        alert('Invalid username or password');
      }
    },
    
  }
  };
</script>
  
<style>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  
  border-radius: 5px;
  background-color: #efefef;
}

.login-form label {
  font-weight: bold;
}

.login-form input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.login-form button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-form button:hover {
  background-color: #45a049;
}
  </style>
  