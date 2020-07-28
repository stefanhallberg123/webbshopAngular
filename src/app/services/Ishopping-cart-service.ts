export interface IshoppingCartService {
  addProduct(product): void;
  getCartProducts(): void;
  getTotalPrice(): void;
}
