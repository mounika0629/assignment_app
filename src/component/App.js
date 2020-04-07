import React from 'react';
import { connect } from 'react-redux';
import Search from './searchBox';
import ListCont from './listContent'
import Test2 from './registrationForm'
import { Nav, Navbar, FormControl, Form } from 'react-bootstrap';
import history from '../history'
import {
    Router,
    Switch,
    Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
    
    render() {
        console.log(this.props.data.state)
        return (
            <div >
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home"><i className="fa fa-snowflake-o" style={{fontSize:"35px"}} aria-hidden="true"></i></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link style={{color:"white"}} href="/">Home</Nav.Link>
                        <Nav.Link style={{color:"white"}} href="/test2">Registration-Form</Nav.Link>
                        <Nav.Link style={{color:"white"}} href="/userList">User-List</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                </Navbar>
                <div className="body_content">
                    <Router history={history} >
                        <Switch>
                            <Route exact path="/"><Search /></Route>
                            <Route path="/userList"><ListCont /></Route>
                            <Route path="/test2"><Test2 /></Route>
                        </Switch>
                    </Router>
                </div>

            </div>
        )
    }
}


const mapStateToProps = (store) => {
    console.log(store)
    return {
        data: store.root
    }
}

export default connect(mapStateToProps, {  })(App)