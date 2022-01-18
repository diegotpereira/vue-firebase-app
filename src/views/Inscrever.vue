<template>
    <div class="vue-tempalte">
        <form @submit.prevent="userRegistration">
            <h3>Inscrever-se</h3>

            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control form-control-lg" v-model="user.name" />
            </div>

            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control form-control-lg" v-model="user.email" />
            </div>

            <div class="form-group">
                <label>Senha</label>
                <input type="password" class="form-control form-control-lg" v-model="user.password" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">
               Cadastre-se
            </button>

            <p class="forgot-password text-right">
                Já Cadastrado? 
                <router-link to="/entrar">entrar</router-link>.
            </p>
        </form>
    </div>
</template>


<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    userRegistration() {
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.user.email, this.user.password)
      .then(() => {
            this.$router.replace('home')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      }
    }
  }
</script>

 <style scoped>
  .sign-up {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }
</style>