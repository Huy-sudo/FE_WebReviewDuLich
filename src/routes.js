import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Auth from './scenes/Auth/router'
import router from './scenes/router'
import Admin from './scenes/Admin/router'
export default [
    ...Auth,
    ...Admin,
    ...router
]
