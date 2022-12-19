const getAllCategories = () => {
    return axios.get('/api/categories')
}


export {
    getAllCategories,
}
