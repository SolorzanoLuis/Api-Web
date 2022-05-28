const express = require("express");
const router = new express.Router();
const User = require("../model/user");
const Client = require('../model/client');
const Employee = require('../model/employee');
const auth = require("../middleware/auth");


router.post("/clients", auth, async(req,res) =>{

    //Ya no es necesario hashear la contraseña, ya que primero guardaremos el usuario 
    //los datos que pide la coleccion de usuarios debería guardarse con loque venga del body y lo del is_client lo ponemos directo desde aquí
    // const client = req.body;

    try{

        const user = new User({
            name: req.body.name,
            lastname: req.body.lastname,
            second_lastname: req.body.second_lastname,
            email: req.body.email,
            password: req.body.password,
            dob: req.body.dob,
            is_client: true,
        });
        const userSaved = await user.save();
    
        if(userSaved){
            console.log("User created", userSaved)
            const client = new Client({
                user_id: userSaved._id,
                name: req.body.name,
                lastname: req.body.lastname,
                second_lastname: req.body.second_lastname,
                curp: "",
                ine_folio: "",
                dob: req.body.dob,
                segmento: "0",
                loan_cicle: req.body.loan_cicle,
                client_type: req.body.client_type,
                branch : req.body.branch,
                is_new: req.body.is_new,
                bussiness_data: req.body.bussiness_data,
                gender: req.body.gender,
                scolarship: req.body.scolarship,
                address: req.body.address,
                phones: req.body.phones,
                credit_circuit_data: req.body.credit_circuit_data
            });
    
            await client.save().then(()=>{
            console.log('Client created...')
            })
            .catch(async(e) =>{
            await User.findOneAndDelete({ _id: userSaved._id })
            console.log("User Deleted");
            throw new Error("Error Creating Client");
            });
        }

        res.status(200).send(userSaved);

    } catch(e){
        res.status(400).send(e + '')
    }
})

module.exports = router;