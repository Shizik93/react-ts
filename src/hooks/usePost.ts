import {useMemo} from "react";
import {PostType} from "../components/PostItem";

export const useSortedPosts = (posts: Array<PostType>, sort: string) => {
    const sortedPosts = useMemo(() => {
        console.log('getSortedPosts')
        if (sort) {
            // @ts-ignore
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
    }, [sort, posts])
    return sortedPosts
}

//Сортировка постов по title,body

export const usePosts = (posts: Array<PostType>, sort: string, query: string) => {
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))//поиск переданной строки searchQuery в title
    }, [query, sortedPosts])
    return sortedAndSearchedPosts

}

//Поиск постов по строке