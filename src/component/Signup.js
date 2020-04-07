
import React from 'react';
import { Form, Col, InputGroup } from 'react-bootstrap';
import { OnChange } from '../action'
import { connect } from 'react-redux';

class Signup extends React.Component {
    handleChange = (e) => {
        this.props.OnChange(e.target.name, e.target.value)
    }
    render() {
        return (
            <Form >
                <Form.Row>
                    <Form.Group as={Col} controlId="validationFormikUsername">
                        <Form.Label>User name</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="User Name"
                                name="UserName"
                                value={this.props.UserData.UserName}
                                onChange={(e) => this.handleChange(e)}
                                autoComplete="off"
                            />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="validationFormikUsername">
                        <Form.Label>Email address</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="email"
                                placeholder="Email address"
                                name="Email"
                                value={this.props.UserData.Email}
                                onChange={(e) => this.handleChange(e)}
                                autoComplete="off"
                            />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="validationFormikUsername">
                        <Form.Label>Password</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="Password"
                                value={this.props.UserData.Password}
                                onChange={(e) => this.handleChange(e)}
                                autoComplete="off"
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} controlId="validationFormikUsername">
                        <Form.Label>Confirm Password</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                name="ConfirmPassword"
                                value={this.props.UserData.ConfirmPassword}
                                onChange={(e) => this.handleChange(e)}
                                autoComplete="off"
                            />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
            </Form>

        );
    }
}

const mapStateToProps = (store) => {
    return {
        UserData: store.root.UserData,
    }
}

export default connect(mapStateToProps, { OnChange })(Signup) 
