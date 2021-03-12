import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { UserList } from "./users";
import authProvider from "./authProvider";
import dataProvider from "./dataProvider";

const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="users" list={UserList}/>
    </Admin>
);

export default App;