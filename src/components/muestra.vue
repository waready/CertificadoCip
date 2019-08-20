<template>
  <b-container>
    <div>
  <div>
    <b-table responsive
      id="table-transition-example"
      :items="certificados"
      :fields="fields"
      striped
      small
      primary-key="a"
      :tbody-transition-props="transProps"  
    >
    <template slot="edicion" slot-scope="row">
        <b-button pill variant="primary" size="sm" v-b-modal.modal-multi-1 @click="editar(row.item)">Editar</b-button>
        <b-button pill variant="danger" size="sm"  @click="eliminar(row.item.uid)">Eliminar</b-button>
      </template>
    </b-table>
  </div>

  <b-modal id="modal-multi-1" size="lg" title="Editar Certificado" ok-only no-stacking>
  <p class="my-2">First Modal</p>
  <b-button v-b-modal.modal-multi-2>Open Second Modal</b-button>

    <b-form @submit="onSubmit" @reset="onReset" >
        <b-form-group
          label="Nombre del curso"
        >
          <b-form-input
            v-model="form.nameCurso"
            type="text"
            autofocus
            required
            placeholder="Ingrese Nombre del curso"
          ></b-form-input>

        </b-form-group>

        <b-form-group 
          label="Apellidos" 
        >
          <b-form-input
            v-model="form.apellidos"
            required
            placeholder="Ingrese Apellidos"
          ></b-form-input>
        </b-form-group>

        <b-form-group 
          label="Nombres" 
        >
          <b-form-input
            v-model="form.nombres"
            required
            placeholder="Ingrese Nombres"
          ></b-form-input>
        </b-form-group>
        <b-row>
          <b-col>
            <b-form-group 
              label="Codigo Certificado" 
            >
              <b-form-input
                v-model="form.codigo"
                required
                placeholder="Ingrese Codigo"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group 
              label="DNI" 
            >
            <b-form-input
              v-model="form.dni"
              placeholder="Ingrese Dni"
            ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group 
              label="Costo" 
            >
            <b-input-group  prepend="S/." append=".00">
              <b-form-input type="number" placeholder="00" v-model="form.costo" ></b-form-input>
            </b-input-group>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group 
                label="Cargo" 
              >
              <b-form-select
                id="input-3"
                v-model="form.cargo"
                :options="cargos"
                required
              ></b-form-select>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group 
            label="Grado" 
            >
            <b-form-select
              id="input-3"
              v-model="form.grado"
              :options="grados"
              required
            ></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>   
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </b-modal>

  <b-modal id="modal-multi-2" title="Second Modal" ok-only>
  <p class="my-2">Second Modal</p>
  <b-button v-b-modal.modal-multi-3 size="sm">Open Third Modal</b-button>
  </b-modal>

  <b-modal id="modal-multi-3" size="sm" title="Third Modal" ok-only>
  <p class="my-1">Third Modal</p>
  </b-modal>
  </div>
  <pre>
    {{$data}}
  </pre>
  </b-container>

</template>
<script>

import {db} from '@/main';
export default {
    mounted(){
        db.collection('certificados').onSnapshot(snapshot => {
        this.certificados = [];
        snapshot.forEach(user => {
            const userData = user.data();
            this.certificados.push({
                Curso_Nombre: userData.nameCurso, 
                apellidos: userData.apellidos,
                nombres: userData.nombres,
                codigo:userData.codigo,
                dni:userData.dni,
                costo:userData.costo,
                cargo:userData.cargo,
                grado:userData.grado,
                uid:userData.uid
            });
        });
        
        }, (error) => {
        console.log('listener users admin off...');
        })
    },
    data() {
      return {
         form: {
          id:"",
          nameCurso: '',
          apellidos: '',
          nombres: '',
          codigo:'',
          dni:'',
          costo:'',
          cargo:null,
          grado:null,
        },
        grados: [{ text: 'Seleccione uno', value: null }, 'Estudiante', 'Profesional'],
        cargos: [{ text: 'Seleccione uno', value: null }, 'Participante', 'Organizador', 'Ponente', 'Asistente'],
        show: true,
          certificados:[
              {'editar':''},
              {'eliminar':''}
          ],
            transProps: {
          // Transition name
          name: 'flip-list'
        },
        fields: [
          { key: 'Curso_Nombre', sortable: true },
          { key: 'apellidos', sortable: true },
          { key: 'nombres', sortable: true },
          { key: 'codigo', sortable: true },
          { key: 'dni', sortable: true },
          { key: 'costo', sortable: true },
          { key: 'cargo', sortable: true },
          { key: 'grado', sortable: true },
          { key: 'edicion'},
        ],

        }
    },
    methods:{
      obtener(){
          db.collection("certificados").get().then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
          });
      });
      },
      eliminar(id){
        var r = confirm("Press a button!");
        if (r == true) {
         alert( "You pressed OK!")
          db.collection('certificados').doc(id).delete().then(()=>{
            alert('se elimino')
          })
        } else {
         alert( "You pressed Cance")
        }
      },
      editar(id){
        console.log('tag', id.grado)
        let ggwp = id.grado
        this.form.id = id.uid
        this.form.nameCurso  = id.Curso_Nombre
        this.form.apellidos = id.apellidos
        this.form.nombres = id.nombres
        this.form.codigo = id.codigo
        this.form.dni =  id.dni
        this.form.costo = id.costo
        this.form.cargo = id.cargo
        this.form.grado = ggwp
      },
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      
        db.collection("certificados").doc(this.form.id).set({
          nameCurso: this.form.nameCurso, 
          apellidos: this.form.apellidos,
          nombres: this.form.nombres,
          codigo:this.form.codigo,
          dni:this.form.dni,
          costo:this.form.costo,
          cargo:this.form.cargo,
          grado:this.form.grado,
          uid:this.form.id
      })
      .then(()=> {
          this.onReset()
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
      },
           onReset() {
        
        // Reset our form values
        this.form.nameCurso = ''
        this.form.apellidos = ''
        this.form.nombres = ''
        this.form.codigo = ''
        this.form.dni = ''
        this.form.costo = ''
        this.form.cargo = null
        this.form.grado = null
        
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
    
}
</script>
<style>
  table#table-transition-example .flip-list-move {
    transition: transform 1s;
  } 
</style>