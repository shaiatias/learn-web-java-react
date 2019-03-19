import React, {Component} from "react";
import {connect} from "react-redux";
import LoginLayout from "../Layouts/LoginLayout";

class LoginPage extends Component {

    render() {
        return (
            <LoginLayout>

                login page

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
)(LoginPage);

