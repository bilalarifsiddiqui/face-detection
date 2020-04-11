import React from 'react';

const Navigation = ({ routeChanged, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p className="fa2 link dim black underline pa3 pointer"
                    onClick={() => routeChanged('signin')}
                >Sign Out</p>
            </nav>
        );
    } else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p className="fa2 link dim black underline pa3 pointer" onClick={() => routeChanged('signin')}
                >Sign In</p>
                <p className="fa2 link dim black underline pa3 pointer" onClick={() => routeChanged('register')}>Register</p>
            </nav>
        );
    }


}

export default Navigation;