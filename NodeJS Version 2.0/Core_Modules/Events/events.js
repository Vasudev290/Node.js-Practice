const Events = require("events")

const EventsEm = new Events();

//Listening for events;
EventsEm.on("events", () => {
    console.log("listening for events..!");
});
//Trigger the events
EventsEm.emit("events")


EventsEm.on("payment", (plan) => {
    console.log("trigger payments", plan);
})
EventsEm.emit("payment", "Gold")
EventsEm.emit("payment", "Silver")


/* EventsEm.on("removeListenter", () => {
    console.log("Removeing event listnet");
}); */
const myListner = () => {
    console.log("Listening for events..!");
}
EventsEm.on("removeListner", myListner)
EventsEm.emit("RemoveListner");
EventsEm.removeListener("removeListner", myListner);
EventsEm.emit("removeListner")