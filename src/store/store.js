import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: localStorage.getItem("token"),
    username: localStorage.getItem("username") || "",
    email: localStorage.getItem("email") || "",
    roles: localStorage.getItem("role") || "",
    snackbar: {},
    loading: false,
    navDialog: true,
    itemId: "",
    users: [],
    myFarm: "",
    MyFarmLocation: "",
    grade: "",
    product: [],
    postedProduct: [],
  },
  mutations: {
    AUTH_USER(state, userData) {
      state.idToken = userData.token;
      state.username = userData.username;
      state.email = userData.email;
      state.roles = userData.role;
      state.snackbar = userData.snackbar;
      state.loading = userData.loading;
    },

    AUTH_FAILED(state, userData) {
      state.snackbar = userData.snackbar;
      state.loading = userData.loading;
    },
    REGISTER_RES(state, payload) {
      state.snackbar = payload.snackbar;
    },
    RESET_PASS_RES(state, payload) {
      state.message = payload.message;
    },
    CREATE_PASS_RES(state, payload) {
      state.message = payload.message;
    },
    CREATE_PASS_URL(state, payload) {
      state.itemId = payload;
    },
    CLEAR_AUTH_DATA(state) {
      state.idToken = null;
      state.email = "";
      state.username = "";
      state.roles = "";
    },
    STORE_USERS(state, payload) {
      state.users = payload.users;
      state.loadingTable = payload.loadingTable;
    },
    AUTO_LOGIN(state, payload) {
      state.idToken = payload.token;
    },
    RESET_OTP(state, payload) {
      state.snackbar = payload.snackbar;
    },
    GET_FARMS(state, payload) {
      state.myFarm = payload.farmerId;
      state.MyFarmLocation = payload.location;
      state.snackbar = payload.snackbar;
      state.loading = payload.loading;
    },
    GET_MAIZE_GRADE(state, payload) {
      state.grade = payload.grade;
      state.snackbar = payload.snackbar;
      state.loading = payload.loading;
    },
    PRODUCTS(state, payload) {
      state.product = payload.maize_product;
      state.snackbar = payload.snackbar;
      state.loading = payload.loading;
    },
    POSTED_PRODUCTS(state, payload) {
      state.postedProduct = payload.posted_product;
      state.snackbar = payload.snackbar;
      state.loading = payload.loading;
    },
    NEW_PRODUCT(state, payload) {
      state.snackbar = payload.snackbar;
      state.loading = payload.loading;
    },
  },
  actions: {
    registerFarmer({ commit }, formData) {
      axios
        .post("/auth/signup", formData)
        .then((res) => {
          console.log(res);
          commit("REGISTER_RES", {
            snackbar: {
              showing: true,
              text: `${res.data.message}`,
              color: "success",
            },
          });
          router.replace("/verification");
        })
        .catch((err) => {
          console.log(err);
          commit("REGISTER_RES", {
            snackbar: {
              showing: true,
              text: `${err.response.data.message}`,
              color: "error",
            },
          });
        });
    },

    registerBuyer({ commit }, formData) {
      axios
        .post("/auth/signup", formData)
        .then((res) => {
          console.log(res);
          commit("REGISTER_RES", {
            snackbar: {
              showing: true,
              text: `${res.data.message}`,
              color: "success",
            },
          });
          router.replace("/verification");
        })
        .catch((err) => {
          console.log(err);
          commit("REGISTER_RES", {
            snackbar: {
              showing: true,
              text: `${err.response.data.message}`,
              color: "error",
            },
          });
        });
    },

    login({ commit }, formData) {
      axios
        .post("/auth/signin", formData)
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.accessToken);
          localStorage.setItem("username", res.data.username);
          localStorage.setItem("role", res.data.roles[0]);
          localStorage.setItem("email", formData.email);
          commit("AUTH_USER", {
            token: res.data.accessToken,
            username: res.data.username,
            role: res.data.roles,
            email: formData.email,
            loading: false,
            snackbar: {
              showing: true,
              text: "Login was successfully",
              color: "success",
            },
          });
          router.replace("/dashboard");
        })
        .catch((err) => {
          localStorage.setItem("email", formData.email);
          if (err.response.data.message === "Please verify account.") {
            router.replace("/verification");
          }
          commit("AUTH_FAILED", {
            loading: false,
            snackbar: {
              showing: true,
              text: `${err.response.data.message}`,
              color: "error",
            },
          });
          console.log(err);
        });
    },
    tryAutoLogin({ commit }) {
      const token = localStorage.getItem("token");
      if (!token) {
        return router.replace("/");
      }
      commit("AUTO_LOGIN", { token });
      router.replace("/dashboard");
    },
    logout({ commit }) {
      commit("CLEAR_AUTH_DATA");
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      localStorage.removeItem("role");
      router.replace("/");
    },
    resetpassword({ commit }, resetData) {
      axios
        .post("/auth/password-reset/email", resetData)
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.accessToken);
          localStorage.setItem("username", res.data.name);
          localStorage.setItem("role", res.data.roles[0]);
          commit("RESET_PASS_RES", {
            snackbar: {
              showing: true,
              text: "Login was successfully",
              color: "success",
            },
          });
          router.replace("/email");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    createPassword({ commit, state }, formData) {
      axios
        .post("/auth/signup/" + state.itemId, formData)
        .then((res) => {
          console.log(res);
          commit("CREATE_PASS_RES", {
            message: res.data.message,
          });
          router.replace("/dashboard");
        })
        .catch((err) => {
          this.state.alertError = true;
          console.log(err);
        });
    },

    newOTP({ commit }, formData) {
      axios
        .post("/auth/resend-otp", formData)
        .then((res) => {
          console.log(res);
          commit("RESET_OTP", {
            snackbar: {
              showing: true,
              text: res.data.message,
              color: "success",
            },
          });
        })
        .catch((err) => {
          commit("RESET_OTP", {
            loading: false,
            snackbar: {
              showing: true,
              text: `${err.response.data.message}`,
              color: "error",
            },
          });
          console.log(err);
        });
    },

    getFarm({ commit }) {
      axios
        .get("/farmer/profile/farms/get")
        .then((res) => {
          console.log(res);
          const myFarm = res.data;
          commit("GET_FARMS", myFarm);
        })
        .catch((err) => {
          commit("GET_FARMS", {
            loading: false,
            snackbar: {
              showing: true,
              text: `${err.response.data.message}`,
              color: "error",
            },
          });
          console.log(err);
        });
    },

    getGrade({ commit }) {
      axios
        .get("/farmer/profile/farms/get")
        .then((res) => {
          console.log(res);
          const grade = res.data;
          commit("GET_MAIZE_GRADE", grade);
        })
        .catch((err) => {
          commit("GET_MAIZE_GRADE", {
            loading: false,
            snackbar: {
              showing: true,
              text: `${err.response.data.message}`,
              color: "error",
            },
          });
          console.log(err);
        });
    },

    getProduct({ commit }) {
      axios
        .get("/farmer/get-posted-products")
        .then((res) => {
          console.log(res);
          const maize_product = res.data;
          commit("PRODUCTS", {
            maize_product,
            loading: false,
            snackbar: {
              showing: true,
              text: "Product loaded successful",
              color: "success",
            },
          });
        })
        .catch((err) => {
          commit("PRODUCTS", {
            loading: false,
            snackbar: {
              showing: true,
              text: `${err.response.data.message}`,
              color: "error",
            },
          });
          console.log(err);
        });
    },

    fetchPostedProduct({ commit }) {
      axios
        .get("/buyer/get-posted-products")
        .then((res) => {
          console.log(res);
          const posted_product = res.data;
          commit("POSTED_PRODUCTS", {
            posted_product,
            snackbar: {
              showing: true,
              text: "Product loaded successful",
              color: "success",
            },
          });
        })
        .catch((err) => {
          commit("POSTED_PRODUCTS", {
            loading: false,
            snackbar: {
              showing: true,
              text: `${err.response.data.message}`,
              color: "error",
            },
          });
          console.log(err);
        });
    },

    buyingProduct({ commit }, farmData) {
      axios
        .post(
          "http://api.armulogistics.com:8080/api/buyer/buy-posted-product",
          farmData
        )
        .then((res) => {
          console.log(res);
          commit("NEW_PRODUCT", {
            loading: false,
            snackbar: {
              showing: true,
              text: `You have successfully booked the Product`,
              color: "success",
            },
          });
        })
        .catch((err) => {
          commit("NEW_PRODUCT", {
            loading: false,
            snackbar: {
              showing: true,
              text: `${err.response.data.message}`,
              color: "error",
            },
          });
          console.log(err);
        });
    },

    newProduct({ commit }, farmData) {
      axios
        .post("farmer/product/add", farmData)
        .then((res) => {
          console.log(res);
          commit("NEW_PROUCT", {
            loading: false,
            snackbar: {
              showing: true,
              text: `You have successfully added a new Product`,
              color: "success",
            },
          });
        })
        .catch((err) => {
          commit("NEW_PROUCT", {
            loading: false,
            snackbar: {
              showing: true,
              text: `${err.response.data.message}`,
              color: "error",
            },
          });
          console.log(err);
        });
    },
  },

  getters: {
    username(state) {
      return state.username;
    },
    role(state) {
      return state.roles;
    },
    isAuthenticated(state) {
      return state.idToken !== null;
    },
    alertError(state) {
      return state.alertError !== true;
    },
    snackbackResponse(state) {
      return state.snackbackResponse;
    },
    resetPasswordResponse(state) {
      return state.message;
    },
    availableProducts(state) {
      return state.product.filter((product) => product.status == "posted");
    },
    bookedProducts(state) {
      return state.product.filter((product) => product.status == "bought");
    },
    boughtProducts(state) {
      return state.product.filter((product) => product.status == "ordered");
    },
  },
});
