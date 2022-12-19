import React, {useEffect, useState} from "react";

const CategoryFilter = ({onCategoryFilterChange}) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get('/api/categories')
            .then(res => setCategories(res.data.data))
    }, [])

    return (
        <div className="max-w-sm my-3">
            <label htmlFor="countries"
                   className="hidden  block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select an category
            </label>
            <select
                onChange={onCategoryFilterChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option value="">Choose a category</option>
                {categories.map(category =>
                    <option value={category.id} key={category.id}>
                        {category.name}
                    </option>
                )}

            </select>
        </div>
    )
}


export default CategoryFilter
