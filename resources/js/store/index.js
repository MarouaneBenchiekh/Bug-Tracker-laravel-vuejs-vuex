export default {
    state: {
        currentUser: {},
        Users: [],
        Project: []
    },

    getters: {
        getUserFromGetters(state) {
            //take parameter state

            return state.Users;
        },
        getProjectFromGetters(state) {
            //take parameter state

            return state.Project;
        }
    },

    actions: {
        allUserFromDatabase(context) {
            axios
                .get("api/User")

                .then(response => {
                    console.log(response.data.user);
                    context.commit("User", response.data.user); //categories will be run from mutation
                })

                .catch(() => {
                    console.log("Error........");
                });
        },
        allProjectFromDatabase(context) {
            axios
                .get("api/Projects/" + context.currentUser.id)

                .then(response => {
                    console.log(response.data.project);
                    context.commit("Project", response.data.project); //categories will be run from mutation
                })

                .catch(() => {
                    console.log("Error........");
                });
        },
        addProject(context, payload) {
            axios.post("api/Projects", payload);
        },
        getCurrentUser(context) {
            axios
                .get("api/currentUser")
                .then(response => {
                    console.log(response);
                    //context.commit("currentUser", response);
                })
                .catch(response => {
                    console.log(response);
                });
        }
    },

    mutations: {
        User(state, data) {
            return (state.Users = data);
        },
        Project(state, data) {
            return (state.Project = data);
        },
        currentUser(state, data) {
            return (state.currentUser = data);
        }
    }
};
