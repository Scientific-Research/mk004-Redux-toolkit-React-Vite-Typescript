import { useDispatch, useSelector } from 'react-redux';
import { add, subtract } from '../../features/cart/cartSlice';
import { RootState } from '../../app/store';

export const PageBooks = () => {
  const dispatch = useDispatch();
  const selectCart = (state: RootState) => state.cart;
  const { count } = useSelector(selectCart);

  const handleSubtractOne = () => {
    dispatch(subtract());
  };

  const handleAddOne = () => {
    dispatch(add());
  };

  return (
    <div className="pageBooks">
      <p>Welcome to the Books page.</p>
      <button onClick={handleSubtractOne}>Subtract One</button>
      <button onClick={handleAddOne}>Add One</button>
      <hr />
      <span>{count}</span>
    </div>
  );
};
