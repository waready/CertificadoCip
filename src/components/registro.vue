<template>

  <b-container>
    <b-row align-h="center">
      <b-col cols="7">
        <div class="mt-3">
          <b-card-group deck>
            <b-card bg-variant="info" text-variant="white" header="Registro" class="text-center">
              <b-card-text>
                <b-form @submit="firebaseLogin" >
                  <b-form-group
                    label="Nombre"
                  >
                    <b-form-input
                      v-model="form.nombre"
                      type="text"
                      required
                      placeholder="Enter Nombre"
                      >
                    </b-form-input>
                  </b-form-group>
                  <b-form-group
                   label="Email"
                  >
                    <b-form-input
                      v-model="form.email"
                      type="email"
                      required
                      placeholder="Enter Email"
                      >
                    </b-form-input>
                  </b-form-group>
                  <b-form-group
                    label="Contraseña"
                    label-for="input-2"
                  >
                    <b-form-input
                      v-model="form.password"
                      type="password"
                      required
                      placeholder="Enter Contraseña"
                      >
                    </b-form-input>
                  </b-form-group>
                  <b-form-group
                    label="Confirme Contraseña"
                    label-for="input-2"
                  >
                    <b-form-input
                      v-model="form.password"
                      type="password"
                      required
                      placeholder="Enter Contraseña"
                      >
                    </b-form-input>
                  </b-form-group>
                  <b-button block type="submit" pill variant="secondary"> Registrar</b-button>
                </b-form>
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </b-col>
    </b-row>
  </b-container>

  <!-- Default form login -->
</template>
<script>
import firebase from 'firebase';
import {db} from '@/main';
export default {
  data(){
    return{
      form: {
        nombre:'',
        email: '',
        password: '',
      },
      error:''
      
    }
  },
  methods:{
     firebaseLogin(){
       this.error = ''
       if(this.form.email && this.form.password){
        return firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(userRegistered => {
              const data = {
              uid: userRegistered.user.uid,
              email: this.form.email,
              pass: this.form.password,
              nombre: this.form.nombre
            };
            db.collection("usuarios").doc(data.uid).set(data)
            this.limpiar()  
            })
          .catch(err=>{
          this.error = err.message
          })
       }
       else {
         this.error = "Todos los campos son requeridos"
       }
    },
    limpiar(){
      this.form.email = ''
      this.form.password = ''
      this.form.nombre = ''
    }
  }
}
</script>