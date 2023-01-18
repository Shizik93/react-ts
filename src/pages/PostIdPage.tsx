import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    console.log(params)
    const [post, setPost] = useState<null | string>(null)
    const [comments, setComments] = useState<Array<CommentsType>>([])
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(Number(params.id))
        setPost(response.data.title)
    })
    const [fetchCommentsById, isLoadingComments, errorComments] = useFetching(async () => {
        const response = await PostService.getCommentsByPostId(Number(params.id))
        setComments(response.data)
    })
    useEffect(() => {
        fetchPostById()
        fetchCommentsById()
    }, [])

    return (
        <div>
            {error && <h1 style={{display: "flex", justifyContent: 'center', marginTop: 50}}>Ошибка {error}</h1>}
            {isLoading
                ? <Loader/>
                : <h1>Вы открыли страницу поста {params.id}</h1>}
            {post}

            <h1>
                Комментарии
            </h1>
            {errorComments &&
                <h1 style={{display: "flex", justifyContent: 'center', marginTop: 50}}>Ошибка {errorComments}</h1>}
            {isLoadingComments
                ? <Loader/>
                : <div>{comments.map(comment =>
                    <div style={{marginTop: 15}} key={comment.id}>
                        <h5>{comment.email}</h5>
                        <div> {comment.body}</div>
                    </div>
                )}
                </div>}

        </div>
    );
};

export default PostIdPage;

export type CommentsType = {
    postId: number,
    id: number,
    name: string
    email: string,
    body: string
}