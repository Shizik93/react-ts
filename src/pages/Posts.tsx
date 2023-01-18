import {useEffect, useRef, useState} from "react";
import {PostType} from "../components/PostItem";
import {useFetching} from "../hooks/useFetching";
import {usePosts} from "../hooks/usePost";
import MyButton from "../components/UI/button/MyButton";
import PostForm from "../components/PostForm";
import MyModal from "../components/UI/modal/MyModal";
import PostFilter from "../components/PostFilter";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";


function Posts() {
    /*const bodyInputRef=useRef<HTMLInputElement>(null)*/
    const [posts, setPosts] = useState<Array<PostType>>([])
    const [filter, setFilter] = useState<FilterType>({sort: '', query: ''})
    const [modal, setModal] = useState<boolean>(false)
    const [totalPages, setTotalPages] = useState<number>(0)
    const [limit, setlimit] = useState<number>(10)
    const [page, setPage] = useState<number>(1)
    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        posts && setPosts([...posts, ...response.data])
        const totalCount = Number(response.headers['x-total-count'])
        setTotalPages(getPageCount(totalCount, limit))
    })
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const lastElement = useRef<any>()
    const observer = useRef<any>()


    // @ts-ignore

    const createPost = (newPost: PostType) => {
        setPosts([...posts, newPost])
        setModal(false)

    }
    const deletePost = (id: number) => {
        setPosts(posts.filter(post => post.id !== id))
    }

    useEffect(() => {
        if (isPostLoading) return
        if (observer.current) observer.current.disconnect()
        const callback = function (entries: any) {
            if (entries[0].isIntersecting && page < totalPages) {
                setPage(page + 1)
            }
            /* Content excerpted, show below */
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current)
    }, [isPostLoading])

    useEffect(() => {
        fetchPosts()

    }, [page])

    return (
        <div className={'App'}>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <MyButton style={{marginTop: '30px'}} onClick={() => {
                setModal(true)
            }}>Создать пользователя</MyButton>
            <MyModal setVisible={setModal} visible={modal}> <PostForm createPost={createPost}/></MyModal>

            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {postError && <h1 style={{display: "flex", justifyContent: 'center', marginTop: 50}}>Ошибка {postError}</h1>

            }
            {isPostLoading && <div style={{display: "flex", justifyContent: 'center', marginTop: 50}}><Loader/></div>}
            <PostList deletePost={deletePost} title={'List 1'} posts={sortedAndSearchedPosts}/>

            <div ref={lastElement} style={{height: 20, background: "red"}}/>
            <Pagination totalPages={totalPages} changePage={setPage} page={page}/>


        </div>

    );

}

export default Posts;
export type FilterType = {
    sort: string,
    query: string
}

