import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { axiosCategories, deleteData } from '../REDUX/categorySlice/Category.Slice'
import { Link } from 'react-router-dom'
import { addToWishList } from '../REDUX/wishListSlice/wishListSlice'
import { addToBasket } from '../REDUX/basketSlice/basketSlice'
import 'bootstrap/dist/css/bootstrap.min.css'

const Table = () => {
    const dispatch = useDispatch()
    const { value: category } = useSelector((state) => state.category)
    console.log(category)
    useEffect(() => {
        dispatch(axiosCategories())
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center p-4'>Redux</h1>
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
                        category.map((item) => {
                            return (
                                <tr>
                                    <th>{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td><button className='btn me-2 btn-outline-info' onClick={() => {
                                        dispatch(deleteData(item.id))
                                    }}><i class="fa-regular fa-trash-can"></i></button>
                                
                                        <Link className='btn me-2 btn-outline-danger' to={`/details/${item.id}`}><i class="fa-solid fa-circle-info"></i></Link>
                                    <button className='btn me-2 btn-outline-success' onClick={() => {
                                        dispatch(addToWishList(item))
                                    }}><i class="fa-regular fa-heart"></i></button>
                                     <button className='btn me-2 btn-outline-info'  onClick={() => dispatch(addToBasket(item))}>
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

export default Table