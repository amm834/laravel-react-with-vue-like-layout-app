import React, {useEffect, useState} from 'react';
import PostRow from "./PostRow";
import Paginator from "./Paginator";
import CategoryFilter from "./CategoryFilter";


const PostIndex = () => {

    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useState({
        page: 1,
        category_id: '',
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
        query.category_id = category_id;
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
                            ID
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Title
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
