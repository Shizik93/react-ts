import React from 'react';
import PostItem, {PostType} from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";


const PostList = ({posts, title, deletePost}: PostListProps) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{posts.length ? title : 'Posts not found'}</h1>{/*Условная отрисовка*/}
            <TransitionGroup>
                {posts.map((post) =>
                    <CSSTransition key={post.id} timeout={500} classNames={'post'}>
                        <PostItem deletePost={deletePost} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>

        </div>
    );
};

export default PostList;

interface PostListProps {
    posts: Array<PostType>
    title: string
    deletePost: (id: number) => void
}