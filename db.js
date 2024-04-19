const {Client} = require("pg");

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "user",
    database: "rest",
});

client.connect((err) => {
    if(err){
        console.log(`db connection error: ${err.message}`);
    }
    else{
        console.log("db connected");
    }
});

module.exports = client;