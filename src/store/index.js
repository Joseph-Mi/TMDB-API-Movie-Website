import { defineStore } from "pinia";
import { firestore } from "../firebase/firebase";
import { getDoc, doc } from "firebase/firestore";

export const useStore = defineStore('store', {
  state: () => ({
    user: null,
    cart: [],
  }),
  actions: {
    async addToCart(poster, title) {
      this.cart.push({
        poster,
        title,
      });

      await getDoc(doc(firestore, "carts", this.user.email), { cart: this.cart });
    },
    async removeFromCart(index) {
      this.cart.splice(index, 1);
      await setDoc(doc(firestore, "carts", this.user.email), {
        cart: this.cart,
      });
    },
  }
})
