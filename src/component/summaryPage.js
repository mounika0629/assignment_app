
import React from 'react';
import { connect } from 'react-redux';


class Label extends React.Component {
    render(){
        return (
            <div className="row">
                <label style={{paddingLeft:'185px'}} className="col-md-5">{this.props.name}</label> :<label style={{paddingLeft:'60px'}} className="col-md-5">{this.props.value}</label>
            </div>
        )
    }
}
class SummaryPage extends React.Component {
    render() {
        console.log(this.props.UserData)
        return (
            <div>
                <Label name="Name" value={`${this.props.UserData.Firstname} ${this.props.UserData.Lastname}`}/>
                <Label name="Email Address" value={this.props.UserData.Email}/>
                <Label name="Mobile Number" value={this.props.UserData.MobileNumber}/>
                <Label name="Address" value={this.props.UserData.Address1}/>
                <Label name="" value={this.props.UserData.Address2}/>
                <Label name="" value={this.props.UserData.City}/>
                <Label name="state" value={this.props.UserData.state}/>
                <Label name="Zip" value={this.props.UserData.Zip}/>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        UserData: store.root.UserData,

    }
}


export default connect(mapStateToProps, {  })(SummaryPage) 


