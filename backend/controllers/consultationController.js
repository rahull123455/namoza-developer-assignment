const Consultation = require("../models/Consultation");

const createConsultation = async (req, res) => {
    try {
        const {
            fullName,
            phone,
            clinic,
            email,
            age,
            gender,
            department,
            doctor,
            location,
            date,
            time,
            insurance,
            symptoms
        } = req.body;

        if (!fullName || !phone) {
            return res.status(400).json({
                success: false,
                message: "Full Name and Phone are required."
            });
        }

        const consultation = await Consultation.create({
            fullName,
            phone,
            clinic,
            email,
            age,
            gender,
            department,
            doctor,
            location,
            date,
            time,
            insurance,
            symptoms
        });

        return res.status(201).json({
            success: true,
            message: "Consultation booked successfully.",
            data: consultation
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = {
    createConsultation
};