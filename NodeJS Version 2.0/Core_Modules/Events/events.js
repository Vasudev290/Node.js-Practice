const Events = require("events")

const EventsEm = new Events();

EventsEm.on("events", () => {
    console.log("listening for events..!");
});
EventsEm.emit("events")

EventsEm.on("payment", (plan) => {
    console.log("trigger payments", plan);
})
EventsEm.emit("payment", "Gold")