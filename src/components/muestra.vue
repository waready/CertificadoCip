<template>
    <div>
        <button type="" @click="obtener"> mostrar</button>
        <div>
            <pre>
                {{$data}}
            </pre>
        </div>

    </div>
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
                nameCurso: userData.nameCurso, 
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
            certificados:[]
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