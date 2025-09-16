import { useDispatch, useSelector } from 'react-redux';
// import { add, subtract } from '../../features/cart/cartSlice';
import { RootState } from '../../app/store';
import { IBook, ICartItem } from '../../Interfaces';
import { NavLink } from 'react-router-dom';

export const PageBooks = () => {
  const dispatch = useDispatch();
  const selectCart = (state: RootState) => state.cart;
  // const { count } = useSelector(selectCart);
  const { books, cartItems } = useSelector(selectCart);

  // const handleSubtractOne = () => {
  //   dispatch(subtract());
  // };

  // const handleAddOne = () => {
  //   dispatch(add());
  // };

  const handleCartItem = (book: IBook) => {
    dispatch({ type: 'cart/addCartItem', payload: { book: book } });
  };

  return (
    <div className="pageBooks">
      <p>Welcome to the Books page.</p>
      {/* <button onClick={handleSubtractOne}>Subtract One</button>
      <button onClick={handleAddOne}>Add One</button> */}
      <hr />
      {/* <span>{count}</span> */}
      <div className="books">
        {books.map((book) => (
          <div
            onClick={() => handleCartItem(book)}
            className="book"
            key={book.id}
          >
            <img src={`/images/${book.idCode}.jpg`} alt="" />
          </div>
        ))}
      </div>
      <p>
        You have {cartItems.length} items in your{' '}
        <NavLink to="/cart">Cart </NavLink>
      </p>
    </div>
  );
};
