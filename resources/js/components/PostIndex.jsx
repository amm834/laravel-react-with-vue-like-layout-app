import React, {useEffect, useState} from 'react';
import PostRow from "./PostRow";
import Paginator from "./Paginator";
import CategoryFilter from "./CategoryFilter";


const PostIndex = () => {

    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useState({
        page: 1,
        category_id: '',
        column: 'id',
        direction: 'desc',
    })
    const fetchPosts = () => {
        axios.get('/api/posts', {
            params: query
        })
            .then(res => setPosts(res.data))
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const onPaginateButtonClick = (url) => {
        const fullUrl = new URL(url)
        const page = fullUrl.searchParams.get('page')
        query.page = page
        fetchPosts()
    }

    const onCategoryFilterChange = (event) => {
        const category_id = event.target.value
        query.page = 1
        query.category_id = category_id;
        fetchPosts()
    }

    const orderPostBy = (column) => {
        query.column = column
        let direction = query.direction === 'desc' ? 'asc' : 'desc'
        query.direction = direction
        fetchPosts()
    }

    if (!posts.data) return

    return (
        <>
            <div className="mb-6  overflow-x-auto relative">
                <CategoryFilter onCategoryFilterChange={onCategoryFilterChange}/>

                <table className="w-full text-sm text-left text-gray-500  dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            <div className="flex items-center">
                                ID
                                <button onClick={() => orderPostBy('id')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true"
                                         fill="currentColor" viewBox="0 0 320 512">
                                        <path
                                            d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/>
                                    </svg>
                                </button>
                            </div>
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <div className="flex items-center">
                                Title
                                <button onClick={() => orderPostBy('title')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true"
                                         fill="currentColor" viewBox="0 0 320 512">
                                        <path
                                            d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/>
                                    </svg>
                                </button>
                            </div>
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Category
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Content
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Created At
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {posts.data.map(post => <PostRow key={post.id} post={post}/>)}
                    </tbody>
                </table>
            </div>


            <Paginator
                meta={posts.meta}
                onPaginateButtonClick={onPaginateButtonClick}
            />
        </>
    );
};

export default PostIndex;
