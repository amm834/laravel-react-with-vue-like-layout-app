import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";


const Register = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: '',
        password: '',
        name: '',
        password_confirmation: '',
    })
    const [errors, setErrors] = useState({});

    const onUserRegisterFormSumbit = (event) => {
        event.preventDefault()

        axios.post('/api/register', user)
            .then(res => {
                localStorage.setItem('token', res.data?.data?.token)
                navigate('/login')
            })
            .catch(error => {
                setErrors(error.response.data.errors)
            })
    }
    const getErrorOf = (field) => {
        return errors?.[field]?.map((error, index) =>
            <span key={index} className="text-red-500">
                {error}
            </span>
        )
    }

    return (
        <form
            className="bg-zinc-100 min-w-3xl px-8 py-6 rounded-lg max-w-2xl mx-auto mt-32"
            onSubmit={onUserRegisterFormSumbit}
        >
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                    name</label>
                <input type="text" id="email"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       onChange={event => user.name = event.target.value}
                />
                {getErrorOf('name')}
            </div>

            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                    email</label>
                <input type="email" id="email"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       onChange={event => user.email = event.target.value}
                />
                {getErrorOf('email')}
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                    password</label>
                <input type="password" id="password"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       onChange={event => user.password = event.target.value}
                />
                {getErrorOf('password')}
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat
                    your password</label>
                <input type="password" id="password"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       onChange={event => user.password_confirmation = event.target.value}
                />
                {getErrorOf('password')}
            </div>
            <button type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
            </button>
        </form>

    );
};

export default Register;
