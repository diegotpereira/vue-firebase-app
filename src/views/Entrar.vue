<template>
    <div class="login">
        <h3>Entrar</h3>
        <input type="text" name="" id="" placeholder="Email" v-model="user.email">
        <input type="password" name="" id="" placeholder="Senha" v-model="user.password">
        <button @click="entrar">Entrar</button>
        <p>Você não tem uma conta? Você pode <router-link to="/inscrever"> criar uma</router-link></p>
    </div>
</template>

<script>

 import firebase from 'firebase';
export default {
    name: 'entrar',
    data() {
        return {
            user: {
              email: '',
              password: ''
            }
        }
    },
    methods: {
      entrar: function() {
        firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          this.$router.replace('home')
        },
        (err) => {
           alert('Oops. ' + err.message)
        })
      }
    }
}
</script>

<style scoped>
  .login {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
</style>