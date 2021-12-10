const express = require('express');
const router = express.Router();
const eventController = require('../controller/event.controller');

router.post('/', eventController.addEvent);
router.get('/', eventController.findEvents);
router.get('/:EventID', eventController.findEventById);
router.put('/:EventID', eventController.updateEvent);
router.delete('/:EventID', eventController.deleteById);

module.exports = router;
