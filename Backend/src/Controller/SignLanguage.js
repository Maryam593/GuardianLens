import SignLanguageModel from "../Model/Awareness/SignLanguage.js";

const SignLanguageController = {
   
    getAll: async (req, res) => {
        try {
            const allSigns = await SignLanguageModel.find();
            if (!allSigns || allSigns.length === 0)
                return res.status(404).json({ warning: "No signs found" });

            res.status(200).json({ success: "Signs found", data: allSigns });
        } catch (error) {
            res.status(500).json({ error: "Internal server error", details: error.message });
        }
    },

    getSingle: async (req, res) => {
        try {
            const { id } = req.params;
            const singleSign = await SignLanguageModel.findById(id);

            if (!singleSign)
                return res.status(404).json({ warning: `Sign not found for ID: ${id}` });

            res.status(200).json({ success: "Sign gesture found", data: singleSign });
        } catch (error) {
            res.status(500).json({ error: "Internal server error", details: error.message });
        }
    },

    newSign: async (req, res) => {
        try {
            const { signName, description, category, exampleVideo } = req.body;
            const newSignGesture = new SignLanguageModel({
                signName,
                description,
                category,
                exampleVideo,
                createdAt: Date.now(),
            });

            await newSignGesture.save();

            res.status(201).json({ success: "New sign created successfully", data: newSignGesture });
        } catch (error) {
            res.status(500).json({ error: "Internal server error", details: error.message });
        }
    },

    UpdateSign: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedSign = await SignLanguageModel.findByIdAndUpdate(id, req.body, { new: true });

            if (!updatedSign)
                return res.status(404).json({ warning: `No sign found for ID: ${id}` });

            res.status(200).json({ success: "Sign updated successfully", data: updatedSign });
        } catch (error) {
            res.status(500).json({ error: "Internal server error", details: error.message });
        }
    },

    deleteSign: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedSign = await SignLanguageModel.findByIdAndDelete(id);

            if (!deletedSign)
                return res.status(404).json({ warning: `No sign found for ID: ${id}` });

            res.status(200).json({ success: "Sign deleted successfully", data: deletedSign });
        } catch (error) {
            res.status(500).json({ error: "Internal server error", details: error.message });
        }
    }
};

export default SignLanguageController;
