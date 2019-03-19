import React, {Component} from "react";
import {connect} from "react-redux";
import LoginLayout from "../Layouts/LoginLayout";

class SignupPage extends Component {

    render() {
        return (
            <LoginLayout>

                signup page

            </LoginLayout>
        )
    }

}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupPage);

