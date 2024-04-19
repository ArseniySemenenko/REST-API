const service = require("../Services/UserService");

class UserController{
    async createUser(req , res){
        const user = req.body;
        const newUser = await service.createUser(user);
        res.json(newUser);
    }

    async getUsers(req , res){
        const users = await service.getUsers();
        res.json(users);
    }

    async getUser(req , res){
        const id = req.params.id;
        const user = await service.getUser(id);
        if(user){
            res.json(user);
        }
        else{
            res.status(404).json("Not Found");
        }
    }

    async updateUser(req , res){
        const user = req.body;
        const id = req.params.id;
        const updatedUser = await service.updateUser(user , id);
        res.json(updatedUser);
    }

    async deleteUser(req , res){
        const id = req.params.id;
        const user = await service.deleteUser(id);
        res.json(user);
    }

}

module.exports = new UserController();