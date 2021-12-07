import React from "react";

const UserDetail = React.createContext({
    id: '',
    email: '',
    name: '', 
    isAdmin: 0
})

export default UserDetail;