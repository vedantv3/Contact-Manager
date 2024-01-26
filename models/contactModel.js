const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "pleaseadd the contact name"]
    },
    email: {
        type: String,
        required: [true, "please add the contact emial address"]
    },
    phone: {
        type: String,
        required: [true, "please add thge contact phone number"]
    }
},
    {
        timestamps: true,
    }
);

module.exports=mongoose.model("Contact",contactSchema);
