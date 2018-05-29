import React from 'react';
import {autobind} from 'core-decorators';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from './actions';

@autobind
export class TestStore extends React.Component {
    render() {
        return <div className='test-store'>
            {this.props.index}
            <button onClick={()=>this.props.add(2)}>click</button>
        </div>
    }
}

const mapStateToProps = (state) => {
    return state.testReducers.toJS();
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(TestStore);