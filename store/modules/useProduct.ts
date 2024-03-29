import { defineStore } from 'pinia';

export interface productStore {
  productId: string;
}
const productOptions = {
  id: 'product',
  state: (): productStore => ({
    productId: '7190'
  }),
  actions: {
    changeProductId (val) {
      this.productId = val;
    }
  }
};

export default defineStore(productOptions);
