export default {
    name: 'UserInfo',
    data() {
        return {
            greeting: 'Hello'
        }
    },
    computed: {
        count() {
            return this.$store.state.count
        }
    },
    template() {
        const link = document.createElement('link');
        link.rel = 'import';
        link.href = 'LoginForm.html';
        //link.onload = function(e) {...};
        //link.onerror = function(e) {...};
        document.head.appendChild(link);
        const content = document.querySelector('link[rel="import"]').import;
        return content;
    },
    methods: {
        increment() {
            this.$store.commit('increment')
        },
        decrement() {
            this.$store.commit('decrement')
        }
    }
};
