export type User = {
  firstName: string;
  lastName: string;
  imageUrl: string;
  loggedIn: boolean;
};

export type Post = {
  id: number;
  title: string;
  content: string;
};

export type Product = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};
