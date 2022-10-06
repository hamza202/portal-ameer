import { App } from 'vue';
import InputText from "primevue/inputtext";
import PrimeVue from "primevue/config";
import Dropdown from 'primevue/dropdown';
import InputWithValidation from './primeVueWithValidation/inputWithValidation.vue'
import DropdownWithValidation from './primeVueWithValidation/DropdownWithValidation.vue'

export function globalComponents(app: App<Element>) {
    app.component("InputText", InputText);
    app.component("DropdownSelect", Dropdown);
    app.component('InputWithValidation', InputWithValidation);
    app.component('DropdownWithValidation', DropdownWithValidation);
    app.use(PrimeVue);
}
