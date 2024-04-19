const db = require("../db");

class PostService{
    async getPosts(){
        const posts = await db.query("SELECT * FROM posts");
        return posts.rows;
    }

    async getPost(id){
        const post = await db.query("SELECT * FROM posts where id = $1",
        [id]);
        return post.rows[0];
    }

    async getPostOwner(id){
        const user_id = await db.query("SELECT user_id FROM posts where id = $1" , [id]);
        const user = await db.query("SELECT * FROM users where id = $1" , [user_id.rows[0].user_id]);
        return user.rows[0];
    }

    async createPost(post){
        const newPost = await db.query("INSERT INTO posts (title , content , picture , user_id) VALUES ($1 , $2 ,$3 ,$4) RETURNING *",
        [post.title , post.content, post.picture , post.user_id]);
        return post;
    }
    
    async updatePost(post , id){
        const updatedPost = await db.query("UPDATE posts set title = $1, content = $2, picture = $3 where id = $4 RETURNING *",
        [post.title , post.content , post.picture , id]);
        return updatedPost.rows[0];
    }

    async deletePost(id){
        const post = await db.query("DELETE FROM posts where id = $1 RETURNING *" , [id]);
        return post.rows[0];
    }
}

module.exports = new PostService();