const mongoose = require('mongoose')


const clientSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        trim: true,
        required: true
    },
    second_lastname: {
        type: String,
        trim: true,
        required: true
    },
    curp: {
        type: String,
        required: false,
        trim: true
    },
    ine_folio: {
        type: String,
        trim: true,
        required: false
    },
    dob: {//Fecha de nacimiento
        type: Date,
        required: false
    },
    segmento: {
        type: String,
        required:false,
        trim: false
    },
    loan_cicle: { //Cuántos creditos ha tenido el cliente
        type: Number,
        required: false
    },
    client_type:{
        type: String,
        required: false
    },
    branch : { //Sucursal
        type: String,
        required: false
    },
    is_new: {
        type: Boolean,
        required: false
    },
    bussiness_data: [{//datos socieconómicos
        // ventas totales
        // sueldo conyuge
        // otro trabajo
        // etc ....
        // (datos del chat)
    }],
    gender: {
        type: String,
        required: false
    },
    scolarship: {
        type: String,
        required: false
    },
    address: [{
        // addres_type -> dirección de casa/ofina/negocio
        // entidad federativa
        // municicpio
        // etc.... (datos del chat)
    }],
    phones: [{
        phone: {
            type: String,
            required: false
        },
        phone_type: {
            type: String,
            required: false
        },
        phone_propierty: {
            type: Boolean,
            required: false
        },
    }],
    credit_circuit_data: [//arreglo por fechas(por checar)

    ]
})


/*
    loan_cicle: number -> Cuántos creditos ha tenido el cliente
    status -> 
    client_type -> persona o empresa
    branch -> sucursal
    is_new: Boolean
    bussiness_ data: [{//datos socieconómicos
        ventas totales
        sueldo conyuge
        otro trabajo
        etc ....(datos del chat)

    }]
    gender -> genero
    scolarship -> escolaridad
    address: [{
        addres_type -> dirección de casa/ofina/negocio
        entidad federativa
        municicpio
        etc.... (datos del chat)
    }],
    phones: [{
        phone: 
        phone_type: mobile/ fixed (móvilo/fijo)
        phone_propierty : -> propio o de otra persona
    }]
    circulo_credito_data: [//arreglo por fechas(por checar)

    ]
*/
clientSchema.methods.toJSON = function(){
    const client = this

    const clientPublic = client.toObject()
    delete clientPublic._id
    delete clientPublic.user_id

    return clientPublic
}

clientSchema.statics.passwordHashing = async (password) => {
    return bcrypt.hash(password,8)
}

const Client = mongoose.model('Client', clientSchema)
module.exports = Client