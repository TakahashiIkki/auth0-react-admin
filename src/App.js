import React from "react";
import { Admin, Resource } from 'react-admin';
import { UserList } from "./users";
import dataProvider from "./dataProvider";
import { useAuth0 } from "@auth0/auth0-react";
import authProvider from "./authProvider";

const App = () => {
    const {
        isLoading,
        isAuthenticated,
        error,
        loginWithRedirect,
        logout,
        getAccessTokenSilently,
    } = useAuth0();

    const customAuthProvider = authProvider({
        loginWithRedirect,
        isAuthenticated,
        logout,
        getAccessTokenSilently,
    });

    const customDataProvider = dataProvider(getAccessTokenSilently);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Oops... {error.message}</div>;
    }

    if (isAuthenticated) {
        return (
            <Admin dataProvider={customDataProvider} authProvider={customAuthProvider}>
                <Resource name="users" list={UserList}/>
            </Admin>
        )
    } else {
        return <button onClick={loginWithRedirect}>Log in</button>;
    }
}

export default App;