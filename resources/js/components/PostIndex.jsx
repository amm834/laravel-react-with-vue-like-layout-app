import React, {useEffect, useState} from 'react';
import clsx from 'clsx'


const PostRow = ({post}) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {post.id}
            </th>
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {post.title}
            </th>
            <td className="py-4 px-6">
                {post.content}
            </td>
            <td className="py-4 px-6">
                {post.created_at}
            </td>
        </tr>
    );
};


const Paginator = ({meta, onPaginateButtonClick}) => {
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <a href="#"
                   className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                <a href="#"
                   className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700 inline-flex gap-x-1">
                        Showing
                        <span className="font-medium">{meta.from}</span>
                        to
                        <span className="font-medium">{meta.to}</span>
                        of
                        <span className="font-medium">{meta.total}</span>
                        results
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">

                        {meta.links.map(link => <button
                            dangerouslySetInnerHTML={{__html: link.label}}
                            onClick={() => onPaginateButtonClick(link.url)}
                            key={link.label}
                            className={clsx('relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex', link.active && 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600')}></button>
                        )}
                    </nav>
                </div>
            </div>
        </div>
    );
};


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
        <div className="overflow-x-auto relative">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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


            <div className="mt-4">
                <Paginator
                    meta={posts.meta}
                    onPaginateButtonClick={onPaginateButtonClick}
                />
            </div>


        </div>

    );
};

export default PostIndex;
