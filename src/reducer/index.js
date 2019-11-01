/*
 * File: index
 * Desc: 描述
 * File Created: 2019/11/1
 * Author: SZQ
 * ------
 * Last Modified: 2019/11/1
 * Modified By: SZQ at <2167622337@qq.com>
 * ------
 * Copyright 2018 - present, karakal
 */

const defaultState = {
    inputValue: 'hello world',
    list: []
};

export default (state = defaultState, action) => {
    if(action.type === 'change_input'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === 'add_item'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        return newState;
    }
    return state;
};

