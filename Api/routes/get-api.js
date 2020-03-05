const express = require('express');
const mongoose = require('mongoose');
const Contact = require('../model/Contact');
const router = express.Router();

router.route('/:id').get((req,res) => {
	const _id = req.params.id;

	contact.fundOne({ _id }, (err, contact) =>{
		if (err){
			res.status(400).json(err);
		}
		if (!contact) {
			res.status(404).json({ message: 'Não funcionou.'});
		}
		res.json(contact);
	});
});

module.exports = router;