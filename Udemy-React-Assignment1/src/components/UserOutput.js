import React from 'react';
import {  } from 'reactstrap';

class UserOutput extends React.Component {
    render(){
        return (
            <div className={"outputBorder"}>
                <p id="paragraph1">Username: {this.props.text}</p>
                <p>This is a username!</p>
            </div>
        )
    }
}

export default UserOutput;