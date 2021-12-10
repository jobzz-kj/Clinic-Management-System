const Event = require('../models/events');
var eventDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateEvent: updateEvent
}

function findAll() {
    return Event.findAll();
}

function findById(EventID) {
    return Event.findByPk(EventID);
}

function deleteById(EventID) {
    return Event.destroy({ where: { EventID: EventID } });
}

function create(event) {
    var newEvent = new Event(event);
    return newEvent.save();
}

function updateEvent(event, EventID) {
    var updateEvent = {
        EventName: event.EventName,
        Description : event.Description
    };
    return Event.update(updateEvent, { where: { EventID: EventID } });
}
module.exports = eventDao;