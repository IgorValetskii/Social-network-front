import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {changeName, changeSurname} from '../store/actions/actions';


class TestReduxComponent extends React.Component<any> {
    render() {
        console.log(this.props);
        // const dispatch = this.props.dispatch;
        const {name, surname, changeName1, changeSurname1} = this.props;
        return (
            <div>
                <div>
                    <input
                        type="text"
                        value={name}
                        placeholder="name"
                        onChange={(event) => {
                            changeName1(event.target.value);
                        }}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        value={surname}
                        placeholder="surname"
                        onChange={(event) => {
                            changeSurname1(event.target.value);
                        }}
                    />
                </div>
            </div>
        )
    }
}


const putStateToProps = (state: any) => {
    // console.log(state);
    return {
        name: state.name,
        surname: state.surname
    }
};

const putActionsToProps = (dispatch: any) => {
    return {
        changeName1: bindActionCreators(changeName, dispatch),
        changeSurname1: bindActionCreators(changeSurname, dispatch)
    };
};

export default connect(putStateToProps, putActionsToProps)(TestReduxComponent);