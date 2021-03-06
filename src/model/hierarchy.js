const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
const { sqlConfig } = require("../db/connSQL");
const sql = require("mssql");

// Cambiar nombre por hierarchy
const hierarchySchema = new mongoose.Schema({
    hierarchy_name: {
        type: String,
        required: true,
    },
    // department:{ //Area
    //     type: String,
    //     required: true,
    // },
    workstation: {
        type: String,
        trim: true,
        required: true,
    },
    isroot: {
        type: Boolean,
        default: false
    },
    parent: [//2 valores => 1- Id, 2- Padre 
        
    ],
    name_employee: {
        type: String,
        trim: true
    }
})

hierarchySchema.statics.getAllHierarchies= async(id) => {
    try {
        let pool = await sql.connect(sqlConfig);
        let result = await pool
            .request()
            .execute("MOV_ObtenerDatosDelPersonal");
        return result;
        // console.log(result)
    } catch (err) {
        console.log(err)
        return err;
    }
};

hierarchySchema.plugin(mongoose_delete, { 
    deletedAt: true, 
    deletedBy : true, 
    overrideMethods: 'all'}
);

const Hierarchy = mongoose.model('Hierarchy', hierarchySchema)
module.exports = Hierarchy