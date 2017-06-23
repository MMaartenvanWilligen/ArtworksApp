const Storage = {

    getAccessToken: function() {
        return "W5QWPGAM"
        //return localStorage.getItem('accessToken'); // null if doesn't exist
    },

    setAccessToken: function(token) {
        localStorage.setItem('accessToken', token);
    },

};

export default Storage;

