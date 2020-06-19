import React, { Component } from 'react';
import './App.css';
import Homepage from './Pages/Homepage/Homepage'
import ShopPage from './Pages/ShopPage/ShopPage'
import { Route, Switch,Redirect } from 'react-router-dom'
import Header from './Components/Header/Header'
import SignPage from './Pages/SignPage/SignPage'
import { connect } from 'react-redux';
// user action used for dispatchToProps
import {setCurrentUser} from './redux/user-reducer/user-action'
import { auth, createUserProfileDocument } from './firebase/firebaseUtil'

class App extends Component {
 
  unsubscribeFromAuth = null;

  //store userData in database onto state 
  componentDidMount() {
    const {setCurrentUser} = this.props;
 
    //whenever AuthState is changed currentUser is set to the user that was changed 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //if user authenticates
      if (userAuth) {
        //get the user reference from firebase 
        const userRef = await createUserProfileDocument(userAuth);
        //whenever the database is updated with a user change the state 
        userRef.onSnapshot(snapShot => {
          
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      else
        setCurrentUser({
          currentUser: null
        })


    })

  }

  //whenever component is closed, also close authorization to prevent memory leak 
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log(this.props.currentUser)
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={() => <Homepage />} />
          <Route exact path='/shop' render={() => <ShopPage />} />
          <Route exact path='/Sign' render={() => this.props.currentUser === null || this.props.currentUser.currentUser === null ?<SignPage /> : (<Redirect to = '/'/>)} />
        </Switch>
      </div>
    );
  }
}

//if there is a user dont want access to sign in form, need state of the user 
const mapStateToProps = ({user}) => {
  return {
    currentUser: user.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return{
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}

export default connect( mapStateToProps , mapDispatchToProps)(App);
// connect(null, mapDispatchToProps)