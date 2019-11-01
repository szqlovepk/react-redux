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
import { createStore } from 'redux';
import reducer from '../reducer';

const store = createStore(reducer);

export default store;