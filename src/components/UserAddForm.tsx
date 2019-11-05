import React from "react";
import {Form, Input} from '@rocketseat/unform';
import {Link} from "react-router-dom";
import {addAsyncUser} from "../store/actions/actions";
import {connect} from "react-redux";


class UserAddForm extends React.Component <any> {
    constructor(props: any) {
        super(props);
    }

    handleSubmit = (data: any) => {
        // console.log(data);
        // console.log(this.props.match.params.id)
        console.log(this.props)
        this.props.addUser(data);
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <p>Firstname:</p>
                <Input name="firstName"/>
                <p>Surname:</p>
                <Input name="lastName"/>
                <p>Username:</p>
                <Input name="userName"/>
                <p>Password:</p>
                <Input name="password"/>
                <p>isAdmin:</p>
                <Input name="isAdmin"/>

                <button type="submit">Create User</button>
                <Link to="/users">
                    <button>Return</button>
                </Link>
            </Form>
        );
    }
}

const mapStateToProps = (state: any) => ({
    user: state.user.detailed
});

const mapActionsToProps = (dispatch: any) => {
    return {
        addUser: (data: any) => {
            dispatch(addAsyncUser(data))
        }
    };
};

export default connect(mapStateToProps, mapActionsToProps)(UserAddForm);

