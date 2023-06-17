import { createStore } from 'vuex'

import coachesModule from './modules/coaches/index.js';
import requestModule from './modules/requests/index.js';

const store = createStore({
    state() {
        return {
            userId: 'c3'
        };
    },
    modules: {
        coaches: coachesModule,
        requests: requestModule
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
});

export default store;