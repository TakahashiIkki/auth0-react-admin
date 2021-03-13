const authProvider = ({
                          loginWithRedirect,
                          isAuthenticated,
                          logout,
                          getAccessTokenSilently
                      }) => ({
    // called when the user attempts to log in
    login: (params) => {
        return loginWithRedirect(params);
    },
    // called when the user clicks on the logout button
    logout: () => {
        if (isAuthenticated) {
            return logout({returnTo: window.location.origin});
        }
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({status}) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        if (isAuthenticated) {
            return Promise.resolve();
        }
        return Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
});

export default authProvider;