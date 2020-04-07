import React from 'react';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';

class Search extends React.Component {
    SearchContent = (e) => {
        this.props.searchCont(e.target.value)
    }
    render() {

        return (
            <div>
                <Alert variant="success">
                    <Alert.Heading>Total Number of Registered User : {this.props.base.length}</Alert.Heading>
                </Alert>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        base: store.root.Base,
    }
}


export default connect(mapStateToProps, {})(Search);