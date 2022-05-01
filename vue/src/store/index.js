import { createStore } from "vuex"

const store = createStore({
    state: {
        user: [],
        projects: []
    },
    getters: {
        PROJECTS(state) {
            return state.projects
        }
    },
    actions: {
        createProject({ commit }, project) {
            return fetch('http://localhost:8000/api/project/create', {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(project)
            })
                .then((res) => res.json())
        },
        getProjects: function ({ commit }) {
            return fetch("http://localhost:8000/api/projects")
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    commit('setProjects', data)
                });
        },
    },
    mutations: {
        setProjects: (state, projects) => {
            state.projects = projects
        }
    },
    modules: {}
})

export default store; 