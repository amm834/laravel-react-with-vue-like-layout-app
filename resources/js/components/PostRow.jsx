import React from "react";
import {Link} from "react-router-dom";

const PostRow = ({post, onPostDelete, onPostEdit}) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {post.id}
            </th>
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {post.title}
            </th>
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {post.category.name}
            </th>
            <td className="py-4 px-6">
                {post.content}
            </td>
            <td className="py-4 px-6">
                {post.created_at}
            </td>
            <td className="py-4 px-6 text-sky-500">
                <Link to={`/posts/${post.id}`}>Edit</Link>
            </td>
            <td className="py-4 px-6 text-red-500">
                <button type="button"
                        onClick={() => onPostDelete(post.id)}
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default PostRow
