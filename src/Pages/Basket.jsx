import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket, increaseQuantity, decreaseQuantity } from '../REDUX/basketSlice/basketSlice';
import 'bootstrap/dist/css/bootstrap.min.css'


const Basket = () => {
  const dispatch = useDispatch();
  const { items, count } = useSelector((state) => state.basket);

  const handleRemove = (id) => {
    dispatch(removeFromBasket(id));

  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));

  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div className="container ">
      <h1 className='text-center p-4'> Basket</h1>
        
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Increase & Decrease</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>
                  <button className='btn btn-outline-secondary' onClick={() => handleIncrease(item.id)}>+</button>
                   <span className='p-3'> {item.quantity || 1}</span>
                    <button className='btn btn-outline-secondary' onClick={() => handleDecrease(item.id)}>- </button>
                  </td>
                  <td>
                    <button className='btn btn-outline-danger' onClick={() => handleRemove(item.id)}><i class="fa-regular fa-trash-can"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <h5 className='mt-5'>Total Count: <span>{count}</span> </h5>
          </div>
          <button className='btn btn-primary mt-3'><a className='text-light text-decoration-none' href="/">Go back</a></button>
      
    </div>
  );
};

export default Basket;
