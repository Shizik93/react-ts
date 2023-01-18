import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";


const PostItem = ({post, deletePost}: PostItemProps) => {
    const navigate = useNavigate()

    const removePost = () => {
        deletePost(post.id)
    }

    return (
        <div className={'post'}>
            <div className={'post__content'}>
                <strong>
                    {post.id} {post.title}
                </strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className={'post__btns'}>
                <MyButton onClick={() => {
                    navigate(`${post.id}`)
                }}>Open</MyButton>
                <MyButton onClick={removePost}>Delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;

interface PostItemProps {
    post: PostType
    deletePost: (id: number) => void
}

export type PostType = {
    userId: number
    id: number
    title: string
    body: string

}