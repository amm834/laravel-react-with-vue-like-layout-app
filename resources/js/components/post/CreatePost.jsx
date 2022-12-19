import React, {useEffect, useState} from 'react';
import {getAllCategories} from "../../services/category";
import {useNavigate} from "react-router-dom";

const CreatePost = () => {

    const navigate = useNavigate()

    const [categories, setCategories] = useState([]);
    const [post, setPost] = useState({
        title: '',
        category_id: '',
        content: '',
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        getAllCategories()
            .then(res => setCategories(res.data.data))
    }, [])

    const onTitleChange = (event) => {
        post.title = event.target.value
    }

    const onCategoryChange = (event) => {
        post.category_id = event.target.value
    }

    const onContentChange = (event) => {
        post.content = event.target.value
    }

    const onSubmit = (event) => {
        event.preventDefault()

        axios.post('/api/posts', post)
            .then((res) => {
                navigate('/')
            })
            .catch(error => setErrors(error.response.data.errors))
    }


    function errorMessageOf(field) {
        return errors?.['title']?.map((error, index) => <span className="text-red-500" key={index}>{error}</span>);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-6">
                <label htmlFor="title"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input type="text" id="title"
                       onChange={onTitleChange}
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errorMessageOf('title')}
            </div>

            <div className="mb-6">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                    an option</label>
                <select id="countries"
                        onChange={onCategoryChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Choose a category</option>
                    {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                </select>
                {errorMessageOf('category_id')}

            </div>

            <div className="mb-6">
                <label htmlFor="title"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
                <textarea type="text" id="title" rows="6"
                          onChange={onContentChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errorMessageOf('content')}

            </div>

            <button type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Save
            </button>
        </form>
    );
};

export default CreatePost;
