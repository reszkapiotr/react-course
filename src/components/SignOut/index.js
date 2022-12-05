import React from 'react';

import {withFirebase} from '../Firebase';



const SignOutButton = ({firebase}) => {
    const signOut = () => {
        firebase.doSignOut();
    }
    return (
        <button type="button" onClick={signOut}>
            Sign Out
        </button>
    )
};

export default withFirebase(SignOutButton);