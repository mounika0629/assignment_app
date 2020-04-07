
import React from 'react';
import { Form, Col, InputGroup } from 'react-bootstrap';
import { OnChange } from '../action'
import { connect } from 'react-redux';

class SignupDetail extends React.Component {
    handleChange = (e) => {
        let name = e.target.name
        let name3 = e.target.value
        console.log(name, name3)
        this.props.OnChange(e.target.name, e.target.value)
    }

    render() {
        return (
            <Form >
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationFormikUsername">
                        <Form.Label>First name</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="First name"
                                name="Firstname"
                                value={this.props.UserData.FirstName}
                                onChange={(e) => this.handleChange(e)}
                                autoComplete="off"
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationFormikUsername">
                        <Form.Label>Last name</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Last name"
                                name="Lastname"
                                value={this.props.UserData.lastName}
                                onChange={(e) => this.handleChange(e)}
                                autoComplete="off"
                            />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="validationFormikUsername">
                        <Form.Label>Address 1</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Apartment, studio, or floor"
                                name="Address1"
                                value={this.props.UserData.Address2}
                                onChange={(e) => this.handleChange(e)}
                                autoComplete="off"
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} controlId="validationFormikUsername">
                        <Form.Label>Mobile Number</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="number"
                                placeholder="Mobile Number"
                                name="MobileNumber"
                                value={this.props.UserData.MobileNumber}
                                onChange={(e) => this.handleChange(e)}
                                autoComplete="off"
                            />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="validationFormikUsername">
                        <Form.Label>Address 2</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Street, Land Mark"
                                name="Address2"
                                value={this.props.UserData.Address1}
                                onChange={(e) => this.handleChange(e)}
                                autoComplete="off"
                            />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="validationFormikUsername">
                        <Form.Label>City</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="City"
                                name="City"
                                value={this.props.UserData.City}
                                onChange={(e) => this.handleChange(e)}
                                autoComplete="off"
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} controlId="validationFormikUsername">
                        <Form.Label>State</Form.Label>
                        <InputGroup>
                            <Form.Control as="select" name="state" onChange={(e) => this.handleChange(e)}>
                                <option>Andra Pradesh</option>
                                <option>Karnataka</option>
                                <option>Tamil Nadu</option>
                            </Form.Control>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} controlId="validationFormikUsername">
                        <Form.Label>Zip</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="number"
                                placeholder=""
                                name="Zip"
                                value={this.props.UserData.Zip}
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

export default connect(mapStateToProps, { OnChange })(SignupDetail) 
