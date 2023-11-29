import Post from "./Post.js";
import PostService from "./PostService.js";
class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body, req.files.picture)
            res.status(200).json(post)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    async getAll(req, res) {
        try {
            const posts = await PostService.findAll();
            return res.json(posts);

        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    async getOne(req, res) {
        try {
            const post = await PostService.findOne(req.params.id);
            return res.json(post)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    async update(req, res) {
        try {
            const post = req.body;

            if (!post._id) {
                res.status(400).json('id ist nicht angegeben');
            }
            const updatedPost = await PostService.update(post);
            return res.json(updatedPost);
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id);
            return res.json(post)
        }
        catch (error) {
            res.status(500).json(error.message)
        }
    }
};

export default new PostController();