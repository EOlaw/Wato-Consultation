const Consultant = require('../models/consultantModel');

const consultantControllers = {
    // Render Create Consultant Profile Page
    renderCreateProfile: (req, res) => {
        res.status(200).render('consultant/createProfile');
    },

    // Create Consultant Profile
    createConsultantProfile: async (req, res) => {
        try {
            const { fullName, specialization, experience, phoneNumber, certifications, bio, website } = req.body;
            const consultant = new Consultant({
                user: req.user._id,
                fullName,
                specialization,
                experience,
                phoneNumber,
                certifications,
                bio,
                website
            });
            await consultant.save();
            //req.flash('success_msg', 'Profile created successfully');
            res.redirect('/user/dashboard');
        } catch (err) {
            //req.flash('error_msg', 'Error: ' + err.message);
            res.redirect('/consultant/create-profile');
        }
    },

    // Render Consultant Profile
    renderProfile: async (req, res) => {
        try {
            const consultant = await Consultant.findOne({ user: req.user._id });
            res.render('consultant/profiles', { consultant });
        } catch (err) {
            res.status(500).send(err);
        }
    },
    // Render Consultant List
    getConsultants: async (req, res) => {
        try {
            const consultants = await Consultant.find();
            res.render('consultant/list', { consultants });
        } catch (err) {
            res.status(500).send(err);
        }
    },

    // Update Consultant Profile
    updateConsultantProfile: async (req, res) => {
        try {
            const { fullName, specialization, experience, phoneNumber, certifications, bio, website } = req.body;
            await Consultant.findOneAndUpdate(
                { user: req.user._id },
                { fullName, specialization, experience, phoneNumber, certifications, bio, website },
                { new: true }
            );
            //req.flash('success_msg', 'Profile updated successfully');
            res.redirect('/dashboard');
        } catch (err) {
            //req.flash('error_msg', 'Error: ' + err.message);
            res.redirect('/dashboard');
        }
    },

    // Delete Consultant Profile
    deleteConsultantProfile: async (req, res) => {
        try {
            await Consultant.findOneAndDelete({ user: req.user._id });
            //req.flash('success_msg', 'Profile deleted successfully');
            res.redirect('/dashboard');
        } catch (err) {
            //req.flash('error_msg', 'Error: ' + err.message);
            res.redirect('/dashboard');
        }
    },
};

module.exports = consultantControllers;
