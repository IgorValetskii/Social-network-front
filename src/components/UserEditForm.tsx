import React from "react";
import {Form, Input} from "@rocketseat/unform";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import { getAsyncUserInfo,updateAsyncUserInfo } from '../store/userEditForm/thunk';





class UserEditForm extends React.Component<any> {
    componentDidMount(): void {
        const ID = this.props.match.params.id;
        this.props.getUserInfo(ID);
    }

    handleSubmit = (data: any) => {
        const ID = this.props.match.params.id;
        this.props.updateUserInfo(ID, data);
    };

    render() {
        const {firstName, lastName, userName} = this.props.user;
        return (
            <React.Fragment>
                {firstName ? (
                    <Form onSubmit={this.handleSubmit} initialData={{
                        firstName: firstName,
                        lastName: lastName,
                        userName: userName
                    }}>
                        <p>Firstname:</p>
                        <Input name="firstName"/>
                        <p>Surname:</p>
                        <Input name="lastName"/>
                        <p>Username:</p>
                        <Input name="userName"/>

                        <button type="submit" >Edit User</button>
                        <Link to="/users">
                            <button>Return</button>
                        </Link>
                    </Form>
                ) : <div>Loading....</div>}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: any) => ({
    user: state.userEditFormReducer.user,
    isLoading: state.userEditFormReducer.isLoading,
    isUpdate: state.userEditFormReducer.isUpdate
});

const mapActionsToProps = (dispatch: any) => {
    return {
        getUserInfo: (ID: any) => {
            dispatch(getAsyncUserInfo(ID))
        },
        updateUserInfo: (ID: any , data:any) => {
            dispatch(updateAsyncUserInfo(ID, data))
        },

    };
};

export default connect(mapStateToProps, mapActionsToProps)(UserEditForm);
