const Route = require("express");
const route = new Route();
const controller = require("../Controllers/UserController");

route.post("/user" , controller.createUser);
route.get("/users" , controller.getUsers);
route.get("/user/:id" , controller.getUser);
route.patch("/user/:id" , controller.updateUser);
route.delete("/user/:id" , controller.deleteUser);

module.exports = route;