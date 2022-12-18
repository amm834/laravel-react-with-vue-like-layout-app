import React, {useEffect, useState} from 'react';


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


const PostIndex = () => {

    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const {data: {data: posts}} = await axios.get('/api/posts')
        setPosts(posts)
    }

    useEffect(() => {
        fetchPosts()
    }, [])


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
                {
                    posts.map(post => <PostRow post={post} key={post.id}/>)
                }
                </tbody>
            </table>
        </div>

    );
};

export default PostIndex;
