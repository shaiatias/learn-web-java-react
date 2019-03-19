import React, {Component} from "react";
import PropTypes from "prop-types";
import {changeName} from "../redux/actions/users";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

class Demo extends Component {

    changeText = () => {
        this.props.changeName("benjamin");
    };

    render() {
        return (
            <div>

                <NavLink to={"/"}>link 1</NavLink>
                <NavLink to={"/aa"}>link 1</NavLink>
                <NavLink to={"/bb"}>link 1</NavLink>

                Name is: {this.props.name}
                <br/>
                <button onClick={this.changeText}>change me</button>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    name: state.users.name
});

const mapDispatchToProps = (dispatch) => ({
    changeName: (name) => dispatch(changeName(name))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Demo);

