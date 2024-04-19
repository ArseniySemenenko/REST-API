const express = require("express");
const app = express();
const UserRoute = require("./Routes/UserRoute");
const PostRoute = require("./Routes/PostRoute");

const PORT = 3000;

app.use(express.json());
app.use("/api" , UserRoute);
app.use("/api" , PostRoute);

app.listen(PORT , () => {
    console.log(`Server started on http://localhost:${PORT}`);
});