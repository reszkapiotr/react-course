import React from 'react';

import {withFirebase} from '../Firebase';



const DeleteAccountButton = ({firebase}) => {
    const deleteAccount = () => {
        firebase.deleteAccount();
    }
    return (
        <button type="button" onClick={deleteAccount}>
            Delete account
        </button>
    )
};

export default withFirebase(DeleteAccountButton);