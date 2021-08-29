import Vue from 'vue'
import App from './App'
import Routers from './routers/index'
import Stores from './stores/index'
import 'amfe-flexible';

Vue.config.productionTip = false

new Vue({
    router: Routers,
    store: Stores,
    render: h => h(App)
}).$mount('#app')