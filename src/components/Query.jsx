import React from 'react'
import { useDeleteCategoryMutation, useGetCategoriesQuery } from '../services/CategorySlice/categortSlice'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../REDUX/basketSlice/basketSlice'
import { addToWishList } from '../REDUX/wishListSlice/wishListSlice'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const Query = () => {
    const { data, refetch, error, isLoading } = useGetCategoriesQuery('')
    const [deleteCategory] = useDeleteCategoryMutation()
    const dispatch = useDispatch()
    const handleDelete = async (id) => {
        await deleteCategory(id)
        refetch()
    }
    return (
        <div className='container'>
            <h1 className='text-center p-4'>Query</h1>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td ><button className='btn me-2 btn-outline-info' onClick={() => handleDelete(item.id)}><i className="fa-regular fa-trash-can"></i></button>
                                        <Link className='btn me-2 btn-outline-danger' to={`/details/${item.id}`}>  <i className="fa-solid fa-circle-info"></i></Link>
                                        <button className='btn me-2 btn-outline-success' onClick={() => {
                                            dispatch(addToWishList(item))
                                        }}><i className="fa-regular fa-heart"></i></button>
                                        <button className='btn me-2 btn-outline-info' onClick={() => dispatch(addToBasket(item))}>
                                            <i className="fa-solid fa-basket-shopping"></i>
                                        </button>
                                        <Link className='btn me-2 btn-outline-danger' to={`/edit/${item.id}`}>
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Query
