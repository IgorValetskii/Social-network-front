import React from "react";
import {Form, Input} from "@rocketseat/unform";
import {Link} from "react-router-dom";
import {getAsyncUserInfo,updateAsyncUserInfo} from "../store/actions/actions";
import {connect} from "react-redux";


class UserEditForm extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount(): void {
        // debugger;
        console.log(this.props.match.params.id);
        const ID = this.props.match.params.id;
        this.props.getUserInfo(ID);
    }

    // componentDidUpdate(prevProps:any) {
    //     // Популярный пример (не забудьте сравнить пропсы):
    //     if (this.props.user.defaultInfo !== prevProps.user) {
    //         console.log('CРаботал DIDUPDATE')
    //     }
    // }

    handleSubmit(data:any) {
        console.log(data);

    }

    render() {
        // console.log(this.props);
        // console.log(this.props);
        let initialData:any;
        if (this.props.user.defaultInfo){
           initialData = {
                name: this.props.user.defaultInfo.firstName ,
                surname: this.props.user.defaultInfo.lastName ,
                username: this.props.user.defaultInfo.userName
            };
        }
        return (
            <Form onSubmit={this.handleSubmit} initialData={initialData}>
                <p>Firstname:</p>
                <Input name="name"/>
                <p>Surname:</p>
                <Input name="surname"/>
                <p>Username:</p>
                <Input name="username"/>

                <button type="submit">Edit User</button>
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
        getUserInfo: (ID:any) => {dispatch(getAsyncUserInfo(ID))},
        updateUserInfo: (ID:any, ) => {dispatch(updateAsyncUserInfo(ID))}
    };
};

export default connect(mapStateToProps, mapActionsToProps)(UserEditForm);
