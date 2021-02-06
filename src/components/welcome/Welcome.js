import React from 'react';

function Welcome(props) {
    let name = (props.match && props.match.params.name)|| props.name
    return (
        <div classnName="welcome">
            Welcome, {name}!
        </div>
    )
}


export default Welcome;
