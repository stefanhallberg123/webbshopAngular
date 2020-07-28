import { Category } from './category';

export default class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  year: number;
  amount: number;
  productCategory: {
    categoryId: number;
    category: string;
  };
  categoryList: Category[];
}
