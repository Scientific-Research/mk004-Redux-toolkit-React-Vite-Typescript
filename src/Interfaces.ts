export interface IBook {
  id: number;
  idCode: string;
  title: string;
}

export interface ICartItem {
  book: IBook;
}

export interface IState {
  books: IBook[];
  cartItems: ICartItem[];
}
