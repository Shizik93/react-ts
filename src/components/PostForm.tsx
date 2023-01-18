import React, {ChangeEvent, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {PostType} from "./PostItem";

const PostForm = ({createPost}: PostFormPropsType) => {
    const defaultPost = {
        title: '',
        body: ''
    }
    const [post, setPost] = useState(defaultPost)
    const addNewPost = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()//функция предотвращает default поведение браузера
        const newPost = {userId: Date.now() + 1, id: Date.now(), ...post}
        createPost(newPost)
        setPost(defaultPost)

        /* console.log(bodyInputRef.current.value)*/
    }
    return (
        <form>

            <MyInput value={post.title}
                     onChange={(e: ChangeEvent<HTMLInputElement>) => setPost({...post, title: e.target.value})}
                     type={'text'} placeholder={'Title post'}/>
            {/*Управляемый компонент*/}
            <MyInput value={post.body}
                     onChange={(e: ChangeEvent<HTMLInputElement>) => setPost({...post, body: e.target.value})}
                     type={'text'} placeholder={'Body post'}
            />
            {/*Управляемый компонент*/}

            {/*<MyInput ref={bodyInputRef}
                         type={'text'}
                         placeholder={'Body post'}/>
                Неуправляемы компонент*/}

            <MyButton onClick={addNewPost}> Create post</MyButton>{/*по умолчанию у кнопки type={'submit'}*/}
        </form>
    );
};

export default PostForm;

type PostFormPropsType = {
    createPost: (newPost: PostType) => void

}