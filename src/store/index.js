import { createStore } from 'vuex';
import langModule from './modules/lang.js';
import AuthModule from '@/store/modules/AuthModule';


const store = createStore({
    modules: {
        lang: langModule,
        auth: AuthModule
    }
});

export default store;
