import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiContent: {}
  },
  mutations: {
    setApiContent: (state, payload) => {
      state.apiContent[payload.name] = payload.content
    }
  },
  actions: {
    fetchApiContent: (context, project) => {
      return new Promise((resolve, reject) => {
        // Set BASE_URL based on Vue client's origin and process environment variables
        // This allows us to point to the right API and work in conjunction with restricted CORS origins
        var BASE_URL = ""
        if (origin === "http://localhost:5000") {
          BASE_URL = origin + "/api"
        } else {
          BASE_URL = process.env.VUE_APP_API_URL
        }
        axios.get(BASE_URL + "/work_content/" + project)
          .then(x => {
            resolve();
            context.commit("setApiContent", {name: project, content: x.data});
          })
          .catch(() => {
            reject();
          })
      })
    }
  },
  modules: {
  }
})
