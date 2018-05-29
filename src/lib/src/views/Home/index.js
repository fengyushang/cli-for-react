import React from 'react';
import {autobind} from 'core-decorators';
import TestStore from '../TestStore';
import './style.less';

@autobind
export default class Home extends React.Component {
    render() {
        return <div className='home-page'>
            My first react app
            <TestStore/>
        </div>
    }
}