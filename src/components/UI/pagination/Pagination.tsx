import React, {useMemo} from 'react';
import style from './Pagination.module.css'

const Pagination = ({totalPages, changePage, page}: PaginationType) => {
    const pagesArray = useMemo(() => {
        const pages = []
        for (let i = 0; i < totalPages; i++) {
            pages.push(i + 1)
        }
        return pages
    }, [totalPages])
    return (
        <div className={style.pageWrapper}>
            {pagesArray.map(p => <span onClick={() => changePage(p)} key={p}
                                       className={p === page ? `${style.page} ${style.pageCurrent}` : style.page}>{p}</span>)}
        </div>
    );
};

export default Pagination;

type PaginationType = {
    totalPages: number
    changePage: (page: number) => void
    page: number
}