import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#455B27',
                secondary: '#FFA500',
                accent: '#B5B5B5',
                error: '#FF5252',
                info: '#555454',
                dashContent: '#5c5c5c',
                success: '#4CAF50',
                warning: '#FFC107'
            },
        },

    },
});