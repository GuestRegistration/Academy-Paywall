export default {
    namespaced: true,
    state: {
        alert: {},
        errors: {},
        bags: {},
    },
    getters: {
        getErrorsByBag: (state) => (bag) => state.bags[bag],
    },
    mutations: {
        setErrors(state, errors) {
            if (!(errors instanceof Object)) return;

            if (errors.bag) {
                Vue.set(state.bags, errors.bag, errors.errors);
                return;
            }

            state.errors = errors;
        },
        emptyBag(state, bag) {
            Vue.set(state.bags, bag, []);
        },
    },
};
