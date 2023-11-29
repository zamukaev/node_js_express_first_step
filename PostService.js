import Post from "./Post.js";
import FileService from "./FileService.js";

class PostService {
    async create(post, picture) {
        const fileName = FileService.saveFile(picture);
        console.log(fileName)
        const createdPost = await Post.create({ ...post, picture: fileName });
        return createdPost;
    }
    async findAll() {
        const posts = await Post.find();
        return posts;
    }
    async findOne(id) {
        if (!id) {
            throw new Error('id ist nicht angegeben')
        }
        const post = await Post.findById(id);
        return post
    }
    async update(post) {
        if (!post._id) {
            throw new Error('id ist nicht angegeben')
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
        return updatedPost;
    }
    async delete(id) {
        if (!id) {
            throw new Error('id ist nicht angegeben')
        }
        const deletedPost = await Post.findByIdAndDelete(id);
        return deletedPost;
    }

}

export default new PostService()