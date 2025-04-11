import './bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';

import login from "../views/components/login.vue";



const app = createApp({
    components: {
      'login': login // Register the component locally
    }
  });


app.mount('#app');