const db = require("../db");

class UserService{
    async createUser(user){
        const {name , email} = user;
        const newUser = await db.query("INSERT INTO users (name , email) VALUES ($1 , $2) RETURNING *",
        [name , email]);
        return newUser.rows[0];
    }

    async getUsers(){
        const users = await db.query("SELECT * FROM users");
        return users.rows;
    }
    
    async getUser(id){
        const user = await db.query("SELECT * FROM users where id = $1" , [id]);
        return user.rows[0];
    }

    async updateUser(user , id){
        const updatedUser = await db.query("UPDATE users set name = $1 , email = $2 where id = $3 RETURNING *",
        [user.name , user.email , id]);
        return updatedUser;
    }

    async deleteUser(id){
        const user = db.query("DELETE FROM users where id = $1 RETURNING *",[id]);
        return user;
    }
}

module.exports = new UserService();