import React from 'react';
import { connect } from 'react-redux';
import { OnChange ,onSubmit } from '../action';
import Signup from './Signup'
import SignupDetail from './SignupDetail'
import SummaryPage from './summaryPage'
import swal from 'sweetalert'


class InnerForm extends React.Component {
    render() {
        switch (this.props.data.currentStep) {
            case 1:
                return (
                    <Signup data={this.props.data} />
                )
            case 2:
                return (
                    <SignupDetail data={this.props.data} />
                )
            case 3:
                return (
                    <SummaryPage data={this.props.data} />
                )
            default:
                return <Signup data={this.props.data} />
        }
    }
}


class Search extends React.Component {
    SearchContent = (e) => {
        this.props.searchCont(e.target.value)
    }
    render() {

        return (
            <div>
                <CreateForm UserData={this.props.UserData} onSubmit={(e)=>this.props.onSubmit(e)} />
            </div>
        )
    }
}

class CreateForm extends React.Component {
    state = {
        currentStep: 1,
        step1: "active",
        step2: "disabled",
        step3: "disabled",
        prev: "disabled",
        next: "active",
        finish: "disabled"
    }
    getClass = (status) => {
        if (status === "done")
            return " done";
        else if (status === "error")
            return " btn-danger";
        else if (status === "active")
            return " btn-primary";
        else
            return " btn-default disabled";
    }
    onFinish =()=>{
        return this.props.onSubmit(this);
    }
    onGotoStep = (index, step) => {
        if (index === 1) {
            this.setState({ next: "active", prev: "disabled", finish:"disabled", step1: "active", step2: "disabled", step3: "disabled" })
        }
        else if (index === 2) {
            this.setState({ next: "active", prev: "active", step1: "disabled",finish:"disabled", step2: "active", step3: "disabled" })
        }
        else if (index === 3) {
            this.setState({ next: "disabled", prev: "active", step1: "disabled",finish:"active", step2: "disabled", step3: "active" })
        }
        this.setState({ currentStep: index })

    }

    onPrev = () => {
        this.onGotoStep(this.state.currentStep - 1);
    }
    onNext = () => {
        if (this.state.currentStep === 1) {

            if (this.props.UserData.UserName && this.props.UserData.Email &&
                this.props.UserData.Password && this.props.UserData.ConfirmPassword) {
                if (this.props.UserData.Password === this.props.UserData.ConfirmPassword) {
                    this.onGotoStep(this.state.currentStep + 1);
                } else {
                    swal("Warning!", "PassWord is Mismatched!", "warning");
                }
            } else {
                swal("Warning!", "Mandatory field should not be emplty!", "warning");
            }

        }
        else if (this.state.currentStep === 2) {
            if (this.props.UserData.Firstname && this.props.UserData.Lastname && this.props.UserData.Address2
                && this.props.UserData.Address1 && this.props.UserData.MobileNumber &&
                this.props.UserData.City && this.props.UserData.state && this.props.UserData.Zip) {
                this.onGotoStep(this.state.currentStep + 1);
            } else {
                swal("Warning!", "Mandatory field should not be emplty!", "warning");
            }
        }

    }
    render() {
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="ibox-title">
                    <h2 >Registration Form</h2>
                    <div className="ibox-tools">
                    </div>
                </div>
                <div className="ibox-content">
                    <div className="steps clearfix">
                        <div role="tablist" className="row tablist">
                            <div className="tab-cont col-md-4"><div className={"tab-btn btn" + this.getClass(this.state.step1)} >1. <span>Signup</span></div></div>
                            <div className="tab-cont col-md-4"><div className={"tab-btn btn" + this.getClass(this.state.step2)} >2. <span >Signup Details</span></div></div>
                            <div className="tab-cont col-md-4"><div className={"tab-btn btn" + this.getClass(this.state.step3)} >3. <span >Personal Details</span></div></div>
                        </div>
                    </div>
                    <div className="content clearfix" style={{ width: "100%" }}>
                        <br />
                        <div style={{ height: "400px" }}>
                            <InnerForm data={this.state} />
                        </div>
                        <div className="pull-right" style={{ marginTop: "10px" }}>
                            <div className={"formActions btn" + this.getClass(this.state.prev)} onClick={this.onPrev} >previous</div>
                            <div className={"formActions btn" + this.getClass(this.state.next)} onClick={this.onNext}>next</div>
                            <div className={"formActions btn" + this.getClass(this.state.finish)} onClick={this.onFinish}>Finish</div>
                            <div className="formActions btn btn-primary" onClick={this.resetDefaults} >Cancel</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    console.log(store.root.UserData)
    return {
        UserData: store.root.UserData,
    }
}

export default connect(mapStateToProps, { OnChange ,onSubmit})(Search);