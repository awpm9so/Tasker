import { createStore } from "vuex"

const store = createStore({
    state: {
        user: {
            data: {},
            token: null
        },
        project: {
            data: {}
        }
    },
    getters: {},
    actions: {
        create({ commit }, project) {
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
    },
    mutations: {},
    modules: {}
})

export default store; 