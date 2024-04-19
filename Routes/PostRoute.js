const Route = require("express");
const route = Route();
const controller = require("../Controllers/PostController");

route.post("/post" , controller.createPost);
route.get("/posts" , controller.getPosts);
route.get("/post/:id" , controller.getPost);
route.get("/owner/:id" , controller.getPostOwner);
route.patch("/post/:id" , controller.updatePost);
route.delete("/post/:id" , controller.deletePost);

module.exports = route;