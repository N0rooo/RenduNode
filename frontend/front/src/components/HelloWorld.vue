<template>
  <div>

    <div>
      <form  @submit.prevent="register">
        <input type="text" v-model="email" placeholder="Email" required>
        <input type="password" v-model="password" placeholder="Password" required>
        <button type="submit">Register</button>
      </form>
    </div>

    <div>
      <form  @submit.prevent="login">
        <input type="text" v-model="email_log" placeholder="Email" required>
        <input type="password" v-model="password_log" placeholder="Password" required>
        <button type="submit">Login</button>
      </form>
    </div>

  </div>

  
</template>

<script>
const axios = require('axios')

export default {
  name: 'HelloWorld',
  data () {
    return {
      
      email: '',
      password: '',
      email_log : '',
      password_log : ''
    }
  },
  methods: {
    register (event) {
      event.preventDefault()
      console.log('ok')
      axios.post('http://localhost:3000/user/signup', {
        email: this.email,
        password: this.password
      }, {
        headers: {'Access-Control-Allow-Origin': '*'}
      }).then(user => {
        console.log(user)
        alert(user)
      }).catch(err => console.log(err))
    },
    login (event) {
      event.preventDefault()
      console.log('ok')
      axios.post('http://localhost:3000/user/login', {
        email: this.email_log,
        password: this.password_log
      }, {
        headers: {'Access-Control-Allow-Origin': '*'}
      }).then(user => {
        console.log(user)
      }).catch(err => console.log(err))
    },
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
