import React, { useState } from 'react'
import { useAddCategoryMutation } from '../services/CategorySlice/categortSlice'
import './Add.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
const Add = () => {
    const [formData, setFormData] = useState({ name: '', description: '' })
    const [addCategory] = useAddCategoryMutation()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleAdd = async (e) => {
        e.preventDefault()
        try {
            const response = await addCategory(formData).unwrap()
            console.log('Response:', response)
            setFormData({ name: '', description: '' })
            setTimeout(() => {
                navigate('/HomeQuery', {replace: true});
            }, 500);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='p-5 text-center'>
            <form onSubmit={handleAdd}>
                <input
                    className='m-2'
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
                <input
                    className='m-2'
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    required
                />

                <button className='btn btn-outline-success mt-2' type="submit">Add</button>

            </form>
            <button className='btn mt-5 btn-primary mt-3'><a className='text-light text-decoration-none' href="/">Go back</a></button>

        </div>
    )
}

export default Add
