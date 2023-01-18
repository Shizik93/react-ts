import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import {FilterType} from "../pages/Posts";


const PostFilter = ({filter, setFilter}: PostFilterType) => {
    return (
        <div>
            <MyInput placeholder={'Поиск...'} value={filter.query} onChange={(e) => {
                setFilter({...filter, query: e.target.value})
            }}/>
            <MySelect value={filter.sort} onChangeSelect={selectedSort => setFilter({...filter, sort: selectedSort})}
                      options={[
                          {value: 'title', name: 'По названию'},
                          {value: 'body', name: 'По описанию'},
                      ]} defaultValue={'Сортировка по'}/>
        </div>
    );
};

export default PostFilter;

type PostFilterType = {
    filter: FilterType
    setFilter: (value: { query: string; sort: string }) => void
}