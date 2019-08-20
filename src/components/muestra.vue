<template>
  <b-container>
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
            <b-button pill variant="primary" size="sm" >Editar</b-button>
            <b-button pill variant="danger" size="sm">Eliminar</b-button>
      </template>
    </b-table>
  </div>
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
                
                uid:userData.id
            });
        });
        
        }, (error) => {
        console.log('listener users admin off...');
        })
    },
    data() {
        return {
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
          

          
        ]
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
        }
    }
}
</script>
<style>
    table#table-transition-example .flip-list-move {
  transition: transform 1s;
    } 
</style>