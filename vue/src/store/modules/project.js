import route from '../../router/index'

const state = {
    project: {},
    prjects: {}
}

const getters = {
    PROJECTS(state) {
        return state.projects
    },
    PROJECT(state) {
        return state.project
    },
}


const actions = {
    getProjects: function ({ commit }) {
        return fetch("http://localhost:8000/api/projects")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                commit('setProjects', data)
            });
    },
    getProject: function ({ commit }, id) {
        return fetch(`http://localhost:8000/api/projects/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                commit('setProject', data)
            });
    },
    createProject({}, project) {
        console.log('хехе, креате прожектус')
        return fetch('http://localhost:8000/api/projects/create', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(project)
        })
            .then((response) => {
                route.push({name: 'projects'})
            })
    },
}

const mutations = {
    setProjects: (state, projects) => {
        state.projects = projects
    },
    setProject: (state, project) => {
        state.project = project
    },
}

export default{
    state, actions, getters, mutations
}