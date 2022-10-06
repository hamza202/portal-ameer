import { createApp } from 'vue'
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-light-teal/theme.css";
import "primeicons/primeicons.css";
import './assets/scss/style.scss'
import App from './App.vue'
import store from '../store/index.js';
import  i18n  from './plugin/i18n.js'
import { createMetaManager} from 'vue-meta'
const metaManager = createMetaManager()
import {globalComponents} from "./components/GlobalComponents";

//Start vee-validate
import {ErrorMessage, Field, Form, configure} from "vee-validate";
configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: true,
    validateOnModelUpdate: true,
});
//End vee-validate


const app = createApp(App);
app.use(i18n);
app.use(store);
app.use(metaManager);

app.component("FieldValidate", Field);
app.component("FormValidate", Form);
app.component("ErrorMessage", ErrorMessage);
globalComponents(app);

//Route
import router from "../router/index.js";
app.use(router);

//End Route

app.mount("#app");
