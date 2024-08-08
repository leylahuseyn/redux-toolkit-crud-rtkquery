import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishList } from '../REDUX/wishListSlice/wishListSlice';
import 'bootstrap/dist/css/bootstrap.min.css'
const Favorite = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items); 

  console.log("wishlist", wishlist);

  const handleRemove = (id) => {
    dispatch(removeFromWishList(id));
  };

  return (
    <div className="container ">
      <h1 className='text-center p-4'> Favorite</h1>
          <table className="table ">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>
                    <button className='btn btn-outline-danger' onClick={() => handleRemove(item.id)}><i class="fa-regular fa-trash-can"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className='btn btn-primary mt-3'><a className='text-light text-decoration-none' href="/">Go back</a></button>
      
    </div>


  );
};

export default Favorite;
