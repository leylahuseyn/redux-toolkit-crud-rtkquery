import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosCategoryById } from '../REDUX/categorySlice/Category.Slice';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.selectedCategory);
  const status = useSelector((state) => state.category.status);
  const error = useSelector((state) => state.category.error);

  useEffect(() => {
    if (id) {
      dispatch(axiosCategoryById(id));
      // console.log(category.name);
      
    }
  }, [id, dispatch]);

  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && category && (
       <div className='text-center'>
       <h1 className='mt-5'>{category.name}</h1>
       <p className='mt-4'>{category.description}</p>

       <button className='btn btn-primary mt-3'><a className='text-light text-decoration-none' href="/">Go back</a></button>
     </div>
      )}
    </div>
  );
};

export default DetailPage;






