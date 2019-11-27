import React from 'react';
import {Form, Field} from 'react-final-form'
import {signUp} from "../../store/auth/signUp/signUpThunk";
import {connect} from "react-redux";

class SignUp extends React.Component <any> {

    onSubmit = (values: any) => {
        this.props.signUp(values)
    };

    render() {
        const {isLoading, error} = this.props;
        return (
            <div>
                {
                    isLoading ? <div>Loading...</div> :
                        <React.Fragment>
                            {error !== '' ? <div>Registration Error!</div> : null}
                            <Form
                                onSubmit={this.onSubmit}
                                // initialValues={{ stooge: 'larry', employed: false }}
                                render={({handleSubmit, form, submitting, pristine, values}) => (
                                    <form onSubmit={handleSubmit}>
                                        <div>
                                            <label>First name</label>
                                            <Field
                                                name="firstName"
                                                component="input"
                                                type="text"
                                                placeholder="First name"
                                            />
                                        </div>
                                        <div>
                                            <label>Last name</label>
                                            <Field
                                                name="lastName"
                                                component="input"
                                                type="text"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                        <div>
                                            <label>User name</label>
                                            <Field
                                                name="userName"
                                                component="input"
                                                type="text"
                                                placeholder="User name"
                                            />
                                        </div>
                                        <div>
                                            <label>Password</label>
                                            <Field
                                                name="password"
                                                component="input"
                                                type="text"
                                                placeholder="Password"
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
    user: state.registrationReducer.user,
    isLoading: state.registrationReducer.isLoading,
    error: state.registrationReducer.error
});

const mapActionsToProps = (dispatch: any) => {
    return {
        signUp: (values: any) => {
            dispatch(signUp(values))
        },

    };
};

export default connect(mapStateToProps, mapActionsToProps)(SignUp);