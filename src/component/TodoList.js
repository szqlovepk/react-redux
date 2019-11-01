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
import store from '../store';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
    }

    render(){
        const { inputValue } = this.state;
        return (
            <div>
                <div>
                    <input value={inputValue} />
                    <button>提交</button>
                </div>
                <ul>
                    <li>xxx</li>
                </ul>
            </div>
        )
    }
}

export default TodoList;