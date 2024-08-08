import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useGetCategoryDetailQuery, useUpdateCategoryMutation } from '../services/CategorySlice/categortSlice'

const Edit = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { data: category, } = useGetCategoryDetailQuery(id)
    const [updateCategory] = useUpdateCategoryMutation()

    const [formData, setFormData] = useState({ name: '', description: '' })

    useEffect(() => {
        if (category) {
            setFormData({
                name: category.name || '',
                description: category.description || '',
            })
        }
    }, [category])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await updateCategory({ id, ...formData }).unwrap()
            window.location.href = '/HomeQuery'
        } catch (error) {
            console.error(error)
        }
    }

    return (

        <div className='p-5 text-center'>
            <h1>Edit Page</h1>
        <form onSubmit={handleSubmit}>
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

            <button className='btn btn-outline-success mt-2' type="submit">Update</button>
        </form>
        <button className='btn btn-primary mt-3'><a className='text-light text-decoration-none' href="/">Go back</a></button>
  
    </div>



    )
}

export default Edit
