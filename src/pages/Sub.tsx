
import React from 'react';
import { Route } from 'react-router-dom';

import One from './One';
import Two from './Two';
import Three from './Three';

function Sub() {
    return (
        <div className="App">
            <div>서브페이지입니다.</div>
            <Route path="/sub/one" component={One} />
            <Route path="/sub/two" component={Two} />
            <Route path="/sub/three" component={Three} />
        </div>
    );
  }
  
  export default Sub;