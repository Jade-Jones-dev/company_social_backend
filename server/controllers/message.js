const db = require("../models/database");
const message = require("../models/message");
const Message = db.messages;
const Op = db.Sequelize.Op;

// Update a message by the id in the request- check if the user created the message or is admin
exports.update = (req, res) => {
	const id = req.params.id;

	// check if this is on db
	if(message.userId !== req.auth.userId){
		res.status(403).json({message: "Unauthorised"})
		return;
	}

	Message.update(req.body, {
		where: {id: id},
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: "Message was updated successfully.",
				});
			} else {
				res.send({
					message: `Cannot update Message with id=${id}. Maybe Message was not found or req.body is empty!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error updating Message with id=" + id,
			});
		});
};

// Delete a Mesage  with the specified id in the request- need to also add admin
// exports.delete = (req, res, next) => {
// 	Message.findOne({id: req.params.id})
// 		.then((message) => {
// 			if(message.userId !== req.auth.userId || req.auth.userId.isAdmin === false){
// 				res.status(403).json({message: "Unauthorised"})
// 				return;
// 			}
			
	
// 	const id = req.params.id;

// 	Message.destroy({
// 		where: {id: id},
// 	})
// 		.then((num) => {
// 			if (num == 1) {
// 				res.send({
// 					message: "Message was deleted successfully!",
// 				});
// 			} else {
// 				res.send({
// 					message: `Cannot delete Message with id=${id}. Message was not found!`,
// 				});
// 			}
// 		}))
// 		.catch((err) => {
// 			res.status(500).send({
// 				message: "Error could not delete Message with id=" + id,
// 			});
// 		});
// };

exports.delete = (req, res, next) => {

	Message.findOne({id: req.params.id})
		.then((message) => {

			// not on databasede
			if(message.userId !== req.auth.userId){
				res.status(403).json({message: "Unauthorised"})
				return;
			}
			
			Message.destroy({where: {id: req.params.id}})
			.then(() => res.status(200).json({message: 'Message has been deleted'}))
			.catch((error) => res.status(400).json({error}))
		})
		.catch((error) => res.status(400).json({error}))
  }

// Delete all Message from the database- need to add admin to this
exports.deleteAll = (req, res) => {
	Message.destroy({
		where: {},
		truncate: false,
	})
		.then((nums) => {
			res.send({message: `${nums} Messages were deleted successfully!`});
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "An error occurred while removing all messages.",
			});
		});
};

// Completed- Create a new Message
exports.create = (req, res) => {
	if (!req.body.title) {
		res.status(400).send({
			message: "Your post title can not be empty!",
		});
		return;
	}

	if (!req.body.body) {
		res.status(400).send({
			message: "Your post content can not be empty!",
		});
		return;
	}

	const message = {
		title: req.body.title,
		body: req.body.body,
	};

	Message.create(message)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Sorry there was an error while creating the post",
			});
		});
};

//  Completed- find message with query

exports.findAll = (req, res) => {
	const title = req.query.title;
	var condition = title ? {title: {[Op.like]: `%${title}%`}} : null;

	Message.findAll({where: condition})
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "An error occurred whilst retrieving posts.",
			});
		});
};

// Completed-Find a single message with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	Message.findByPk(id)
		.then((data) => {
			if (data) {
				res.send(data);
			} else {
				res.status(404).send({
					message: `Cannot find Message with id=${id}.`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error retrieving Message with id=" + id,
			});
		});
};
