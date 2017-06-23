const Storage = {

    getAccessToken: function() {
        return "W5QWPGAM"
    },

    setAccessToken: function(token) {
        localStorage.setItem('accessToken', token);
    },

};

export default Storage;

