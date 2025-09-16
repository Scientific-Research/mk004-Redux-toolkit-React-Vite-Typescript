import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export const PageCart = () => {
  const selectCart = (state: RootState) => state.cart;
  const { cartItems } = useSelector(selectCart);

  return (
    <div className="pageCart">
      <div className="cartItems">
        {cartItems.map((cartItem, index) => {
          return (
            <div className="cartItem" key={index}>
              <img src={`images/${cartItem.book.idCode}.jpg`} />
              <div className="title">{cartItem.book.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
