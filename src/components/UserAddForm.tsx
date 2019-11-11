import React from "react";
import {Form, Input} from '@rocketseat/unform';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {addAsyncUser} from "../store/userAddForm/thunk";


class UserAddForm extends React.Component <any> {

    handleSubmit = (data: any) => {
        this.props.addUser(data);
    };

    render() {
        const {isLoading} = this.props;
        return (
            <div>
                {isLoading ? <div>Loading...</div> : (
                    <React.Fragment>
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
                    </React.Fragment>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    user: state.userAddFormReducer.user,
    isLoading: state.userAddFormReducer.isLoading
});

const mapActionsToProps = (dispatch: any) => {
    return {
        addUser: (data: any) => {
            dispatch(addAsyncUser(data))
        }
    };
};

export default connect(mapStateToProps, mapActionsToProps)(UserAddForm);
