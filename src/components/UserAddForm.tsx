import React from "react";
import {Form, Input} from '@rocketseat/unform';
import {Link} from "react-router-dom";


class UserAddForm extends React.Component <any> {
    constructor(props: any) {
        super(props);
    }

    handleSubmit(data: any) {
        const id = Math.floor(Math.random() * 1000);
        data.id = id;
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <p>Firstname:</p>
                <Input name="name"/>
                <p>Surname:</p>
                <Input name="surname"/>
                <p>Username:</p>
                <Input name="username"/>

                <button type="submit">Create User</button>
                <Link to="/users">
                    <button>Return</button>
                </Link>
            </Form>
        );
    }
}

export default UserAddForm;

