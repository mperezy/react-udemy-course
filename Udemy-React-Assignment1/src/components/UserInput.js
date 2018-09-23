import React from 'react';
import { Col, Input, FormGroup, Label, Button } from 'reactstrap';

class UserInput extends React.Component {
    render(){
        return (
            <div className={"form-inline"}>
                <FormGroup row>
                    <Label for="userInput" sm={2}>Input</Label>
                    <Col sm={10}>
                        <Input onChange={this.props.usernameHandler} value={this.props.currentUsername} type="text" id="userInput" placeholder={"Type a username here..."}/>
                    </Col>
                </FormGroup>
            </div>
        )
    }
}

export default UserInput;