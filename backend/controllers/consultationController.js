const Consultation = require("../models/Consultation");

const createConsultation = async (req, res) => {

    try{

        const { fullName, phone, clinic } = req.body;

        if(!fullName || !phone){

            return res.status(400).json({
                success:false,
                message:"Full Name and Phone are required."
            });

        }

        const consultation = await Consultation.create({

            fullName,
            phone,
            clinic

        });

        return res.status(201).json({

            success:true,
            message:"Consultation booked successfully.",
            data:consultation

        });

    }

    catch(error){

        console.log(error);

        return res.status(500).json({

            success:false,
            message:"Internal Server Error"

        });

    }

};

module.exports={

    createConsultation

};