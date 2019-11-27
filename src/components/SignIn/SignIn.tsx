import React from 'react';
import {Form, Field} from 'react-final-form'
import {signIn} from "../../store/auth/signIn/signInThunk";
import {connect} from "react-redux";
import {Link} from "react-router-dom";


class SignIn extends React.Component <any> {

    onSubmit = (values: any) => {
        this.props.signIn(values)
    };

    render() {
        const {isLoading, error} = this.props;
        return (
            <div>
                <h1>Welcome to Social network!</h1>
                <Link to="/registration"> <div>Sign up</div> </Link>
                {
                    isLoading ? <div>Loading...</div> :
                        <React.Fragment>
                            {error !== '' ? <div>Incorrect Username or password!</div> : null}
                            <Form
                                onSubmit={this.onSubmit}
                                render={({handleSubmit, form, submitting, pristine, values}) => (
                                    <form onSubmit={handleSubmit}>
                                        <div>
                                            <label>User Name</label>
                                            <Field
                                                name="userName"
                                                component="input"
                                                type="text"
                                                placeholder="First Name"
                                            />
                                        </div>
                                        <div>
                                            <label>Password</label>
                                            <Field
                                                name="password"
                                                component="input"
                                                type="text"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                        <div className="buttons">
                                            <button type="submit" disabled={submitting || pristine}>
                                                Submit
                                            </button>
                                            <button
                                                type="button"
                                                onClick={form.reset}
                                                disabled={submitting || pristine}
                                            >
                                                Reset
                                            </button>
                                        </div>
                                    </form>
                                )}
                            />
                        </React.Fragment>
                }
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    authorized: state.signInReducer.authorized,
    isLoading: state.signInReducer.isLoading,
    error: state.signInReducer.error
});

const mapActionsToProps = (dispatch: any) => {
    return {
        signIn: (values: any) => {
            dispatch(signIn(values))
        },

    };
};

export default connect(mapStateToProps, mapActionsToProps)(SignIn);