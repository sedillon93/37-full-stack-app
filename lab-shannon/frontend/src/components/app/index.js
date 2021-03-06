import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Dashboard from '../dashboard';
import Landing from '../landing';
import AuthRedirect from '../auth-redirect';
import Profile from '../profile';
import * as profileActions from '../../actions/profile';

class App extends React.Component{
  componentDidMount(){
    if(this.props.loggedIn){
      this.props.getUserProfile();
    }
  }

  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
            <Route path='*' component={AuthRedirect}/>
            <Route exact path='/' component={Landing} />
            <Route exact path='/signup' component={Landing} />
            <Route exact path='/login' component={Landing} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/profile' component={Profile}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  loggedIn: !!state.token,
});

let mapDispatchToProps = (dispatch) => ({
  getUserProfile : () => dispatch(profileActions.getProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
