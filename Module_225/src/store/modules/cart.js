export default {
    namespaced: true,
    state() {
        return {
            items: [],
            total: 0,
            qty: 0,
        };
    },
    mutations: {
        addProductToCart(state, payload) {
            const productData = payload.product;
            const productInCartIndex = state.items.findIndex(
                (ci) => ci.productId === payload.id
            );

            if (productInCartIndex >= 0) {
                state.items[productInCartIndex].qty++;
            } else {
                const newItem = {
                    productId: payload.id,
                    title: payload.title,
                    image: payload.image,
                    price: payload.price,
                    qty: 1,
                };
                state.items.push(newItem);
            }
            state.qty++;
            state.total += productData.price;
        },
        removeProductFromCart(state, payload) {
            const prodID = payload.productId;
            const productInCartIndex = state.items.findIndex(
                (cartItem) => cartItem.productId === prodID
            );
            const prodData = state.items[productInCartIndex];
            state.items.splice(productInCartIndex, 1);
            state.qty -= prodData.qty;
            state.total -= prodData.price * prodData.qty;
        },
    },
    actions: {
        addToCart(context, payload) {
            context.commit('addProductToCart', payload);
        },
        removeFromCart(context, payload) {
            context.commit('removeProductFromCart', payload);
        }
    },
    getters: {
        products(state) {
            return state.items;
        },
        totalSum(state) {
            return state.total;
        },
        quantity(state) {
            return state.qty;
        }
    }
};
