import React from "react";
import {Form, Input} from "@rocketseat/unform";
import {Link} from "react-router-dom";
import {getAsyncUserInfo} from "../store/actions/actions";
import {connect} from "react-redux";

class UserEditForm extends React.Component<any> {
    constructor(props: any) {
        super(props);

    }

    componentDidMount(): void {
        this.props.getUserInfo();
    }

    handleSubmit() {
    }

    changeInfoUser(){

    }

    render() {
        // console.log(this.props);
        const initialData = {
            name: this.props.user.firstName,
            surname: this.props.user.lastName,
            username: this.props.user.userName
        };
        return (
            <Form onSubmit={this.handleSubmit} initialData={initialData}>
                <p>Firstname:</p>
                <Input name="name"/>
                <p>Surname:</p>
                <Input name="surname"/>
                <p>Username:</p>
                <Input name="username"/>

                <button type="submit" onClick={this.changeInfoUser}>Edit User</button>
                <Link to="/users">
                    <button>Return</button>
                </Link>
            </Form>
        );
    }
}

const mapStateToProps = (state: any) => ({
    user: state.user
});

const mapActionsToProps = (dispatch: any) => {
    return {
        getUserInfo: () => {dispatch(getAsyncUserInfo())},
        // changeName1: bindActionCreators(changeName, dispatch),
        // changeSurname1: bindActionCreators(changeSurname, dispatch)
    };
};


export default connect(mapStateToProps, mapActionsToProps)(UserEditForm);
