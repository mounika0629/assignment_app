import React from 'react';
import { connect } from 'react-redux';

class ListBody extends React.Component {


    render() {

        if (this.props.base.length > 0) {
            return (
                <div>
                <h2 style={{textAlign:"center",margin:"40px 20px"}}> User List </h2>
                <div className="cards">
                    {
                        this.props.base.map((item, index) => {
                            return (
                                <div className="cart_body" key={index}>
                                    <div>Name</div>:<div>{item.Firstname +' '+ item.Lastname}</div>
                                    <div>Mob-Num</div>:<div>{item.MobileNumber}</div>
                                    <div>City</div>:<div>{item.City}</div>
                                    <div>State</div>:<div>{item.state}</div>
                                </div>
                            )

                        })
                    }
                </div>
                </div>
            )
        } else {
            return (
                <div>
                    No Records
                </div>
            )
        }

    }
}

const mapStateToProps = (store) => {
    return {
        base: store.root.Base,
    }
}

export default connect(mapStateToProps, null)(ListBody);