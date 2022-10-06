import { createStore } from 'vuex';
import langModule from './modules/lang.js';

const store = createStore({
    modules: {
        lang: langModule,
    }
});

export default store;
