import React from "react";

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

export default PostRow
