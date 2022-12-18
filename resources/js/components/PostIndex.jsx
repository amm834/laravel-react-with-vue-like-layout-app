import React, {useEffect, useState} from 'react';
import PostRow from "./PostRow";
import Paginator from "./Paginator";


const PostIndex = () => {

    const [posts, setPosts] = useState([]);

    const fetchPosts = async (page = 1) => {
        const {data: posts} = await axios.get('/api/posts', {
            params: {
                page
            }
        })
        setPosts(posts)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const onPaginateButtonClick = (url) => {
        const fullUrl = new URL(url)
        const page = fullUrl.searchParams.get('page')
        fetchPosts(page)
    }

    if (!posts.data) return


    return (
        <>
            <div className="mb-6 overflow-x-auto relative">
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
