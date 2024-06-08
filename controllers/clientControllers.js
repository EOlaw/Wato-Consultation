const Client = require('../models/clientModel');

const clientControllers = {
    // Render Create Client Profile Page
    renderCreateProfile: (req, res) => {
        res.status(200).render('client/createProfile');
    },

    // Create Client Profile
    createClientProfile: async (req, res) => {
        try {
            const { fullName, address, phoneNumber, company, jobTitle, projects } = req.body;
            const client = new Client({
                user: req.user._id,
                fullName,
                address,
                phoneNumber,
                company,
                jobTitle,
                projects
            });
            await client.save();
            req.flash('success_msg', 'Profile created successfully');
            res.redirect('/user/dashboard');
        } catch (err) {
            req.flash('error_msg', 'Error: ' + err.message);
            res.redirect('/user/create-profile');
        }
    },
    // Render Client List
    getClients: async (req, res) => {
        try {
            const clients = await Client.find();
            res.render('client/list', { clients });
        } catch (err) {
            res.status(500).send(err);
        }
    },

    // Render Client Profile
    renderProfile: async (req, res) => {
        try {
            const client = await Client.findOne({ user: req.user._id });
            res.render('client/profile', { client });
        } catch (err) {
            res.status(500).send(err);
        }
    },


    // Update Client Profile
    updateClientProfile: async (req, res) => {
        try {
            const { fullName, address, phoneNumber, company, jobTitle, projects } = req.body;
            await Client.findOneAndUpdate(
                { user: req.user._id },
                { fullName, address, phoneNumber, company, jobTitle, projects },
                { new: true }
            );
            req.flash('success_msg', 'Profile updated successfully');
            res.redirect('/dashboard');
        } catch (err) {
            req.flash('error_msg', 'Error: ' + err.message);
            res.redirect('/dashboard');
        }
    },

    // Delete Client Profile
    deleteClientProfile: async (req, res) => {
        try {
            await Client.findOneAndDelete({ user: req.user._id });
            req.flash('success_msg', 'Profile deleted successfully');
            res.redirect('/dashboard');
        } catch (err) {
            req.flash('error_msg', 'Error: ' + err.message);
            res.redirect('/dashboard');
        }
    }
};

module.exports = clientControllers;
