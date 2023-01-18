import axios from "axios";
import {PostType} from "../components/PostItem";
import {CommentsType} from "../pages/PostIdPage";

export default class PostService {
    static async getAll(limit: number = 10, page: number = 1) {

        const response = await axios.get<Array<PostType>>('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response
    }

    static async getById(id: number) {

        const response = await axios.get<PostByIdType>('https://jsonplaceholder.typicode.com/posts/' + id)
        return response
    }

    static async getCommentsByPostId(id: number) {

        const response = await axios.get<Array<CommentsType>>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response
    }
}


type PostByIdType = {
    userId: number
    id: number
    title: string
}