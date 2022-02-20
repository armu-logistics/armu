import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#455B27",
        secondary: "#FFA500",
        accent: "#f9f9fb",
        error: "#FF5252",
        info: "#555454",
        accent2: "#5c5c5c",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
});
