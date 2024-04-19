const service = require("../Services/PostService");

class PostController{
    async getPosts(req , res){
        const posts = await service.getPosts();
        res.json(posts);
    }

    async getPost(req , res){
        const id = req.params.id;
        const post = await service.getPost(id);
        if(post){
            res.json(post);
        }
        else{
            res.status(404).json("Not Found");
        }
    }

    async getPostOwner(req , res){
        const id = req.params.id;
        const owner = await service.getPostOwner(id);
        res.json(owner);
    }

    async createPost(req , res){
        const post = req.body;
        const newPost = await service.createPost(post);
        res.json(newPost);
    }

    async updatePost(req , res){
        const id = req.params.id;
        const post = req.body;
        const updatedPost = await service.updatePost(post , id);
        res.json(updatedPost);
    }

    async deletePost(req , res){
        const id = req.params.id;
        const post = await service.deletePost(id);
        res.json(post);
    }
}

module.exports = new PostController();