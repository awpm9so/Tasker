import { createStore } from "vuex"
import Project from './modules/project'

const store = createStore({
    modules: {
        Project
    } 
    
})

export default store; 