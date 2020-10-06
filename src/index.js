import React,{useState,useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Admin from './Admin';
import Cookie from 'js-cookie'
import { AuthContext } from "./Context/auth.js";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import { reducer } from './Reducer';
import { Redirect, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import AdminRoute from './PrivateRoute';
import Login from './Pages/login'
import {Switch} from 'react-router-dom';
import EmployeeRoute from './EmployeeRoute';
import Employee from './Employee';
function Index(props){
  let token=Cookie.getJSON('token')
    const [state,dispatch]= useReducer(reducer,token?{token,msgs:[]}:{token:{token:null},msgs:[]})
    return(
    
      <AuthContext.Provider value={{state,dispatch}}>
        <BrowserRouter>
          <Switch>
          <AdminRoute path='/admin'  component={Admin}/>
          <EmployeeRoute path='/employee' component={Employee} />
          <Route path='/login' exact component={Login}/>
          {!token?<Redirect to='/login'/>:token.token.isAdmin?<Redirect to='/admin'></Redirect>:
            <Redirect to = '/employee'/>
          
          }
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    )
  

}
ReactDOM.render(<Index/>,
  document.getElementById('root')
);

serviceWorker.unregister();
