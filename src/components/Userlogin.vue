<template>
  <div >
    <template v-if="loggedIn">
      <template v-if="userType === 'student'">
        <StudentPage />
      </template>
      <template v-else-if="userType === 'teacher'">
        <TeacherPage />
      </template>
    </template>

    <template v-else>
       <Login @login="handleLogin" />
    </template>
  </div>
</template>



<script>
import Login from './Login.vue';
import StudentPage from './StudentPage.vue';
import TeacherPage from './TeacherPage.vue';

export default {
  components: {
    Login,
    StudentPage,
    TeacherPage
  },
  data() {
    return {
      loggedIn: false,
      userType: ''
    };
  },
  methods: {
    handleLogin(userType) {
      this.loggedIn = true;
      this.userType = userType;
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>