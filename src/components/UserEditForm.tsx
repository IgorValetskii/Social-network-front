import React from "react";
import {Form, Input} from "@rocketseat/unform";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import { getAsyncUserInfo } from '../store/userEditForm/thunk';




class UserEditForm extends React.Component<any> {
    componentDidMount(): void {
        // debugger;
        // console.log(this.props.match.params.id);
        const ID = this.props.match.params.id;
        this.props.getUserInfo(ID);
    }

    // componentDidUpdate(prevProps:any) {
    //     // Популярный пример (не забудьте сравнить пропсы):
    //     if (this.props.user.defaultInfo !== prevProps.user.defaultInfo) {
    //         console.log('CРаботал DIDUPDATE')
    //     }
    // }

    handleSubmit = (data: any) => {
        // console.log(data);
        // console.log(this.props.match.params.id)
        const ID = this.props.match.params.id;
        this.props.updateUserInfo(ID, data);
    }

    render() {
        // console.log(this.props);
        // console.log(this.props);
        // console.log(this.props.user.defaultInfo);
        // let initialData:any;
        // if (this.props.user.defaultInfo){
        //    initialData = {
        //         name: this.props.user.defaultInfo.firstName ,
        //         surname: this.props.user.defaultInfo.lastName ,
        //         username: this.props.user.defaultInfo.userName
        //     };
        // }
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

                        <button type="submit">Edit User</button>
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
    user: state.user.detailed
});

const mapActionsToProps = (dispatch: any) => {
    return {
        getUserInfo: (ID: any) => {
            dispatch(getAsyncUserInfo(ID))
        },

    };
};

export default connect(mapStateToProps, mapActionsToProps)(UserEditForm);