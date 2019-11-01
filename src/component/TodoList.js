/*
 * File: TodoList
 * Desc: 描述
 * File Created: 2019/11/1
 * Author: SZQ
 * ------
 * Last Modified: 2019/11/1
 * Modified By: SZQ at <2167622337@qq.com>
 * ------
 * Copyright 2018 - present, karakal
 */

import React, {Component} from 'react';
//import store from '../store';
import { connect } from 'react-redux';

class TodoList extends Component {
    /*constructor(props){
        super(props);
        this.state = store.getState();
    }*/


    /*onChange = (e) => {
        console.log(e.target.value);
    };*/

    render(){
        const { inputValue, onChange, clickBtn, list } = this.props;
        return (
            <div>
                <div>
                    <input
                        value={inputValue}
                        onChange={onChange}
                    />
                    <button onClick={clickBtn}>提交</button>
                </div>
                <ul>
                    {
                        list.map((v, i) => <li key={i}>{v}</li>)
                    }
                </ul>
            </div>
        )
    }
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
};

const dispatchToProps = (dispatch) => {
    return {
        onChange: (e) => {
            let action = {
                type: 'change_input',
                value: e.target.value
            };
            dispatch(action)
        },
        clickBtn: () => {
            let action = {
                type: 'add_item',
            };
            dispatch(action)
        }
    }
};

export default connect(stateToProps, dispatchToProps)(TodoList);