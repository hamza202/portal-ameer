import {App} from 'vue';
import InputText from "primevue/inputtext";
import PrimeVue from "primevue/config";
import Dropdown from 'primevue/dropdown';
import InputWithValidation from './primeVueWithValidation/inputWithValidation.vue'
import DropdownWithValidation from './primeVueWithValidation/DropdownWithValidation.vue'
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Calendar from 'primevue/calendar';
import CalendarWithValidation  from './primeVueWithValidation/CalendarWithValidation.vue'


export function globalComponents(app: App<Element>) {
    app.component("InputText", InputText);
    app.component("DropdownSelect", Dropdown);
    app.component('InputWithValidation', InputWithValidation);
    app.component('DropdownWithValidation', DropdownWithValidation);
    app.component('ToastComp', Toast);
    app.component('InputCalendar', Calendar);
    app.component('CalendarWithValidation', CalendarWithValidation)
    app.use(ToastService);
    app.use(PrimeVue);
}
