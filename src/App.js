import React, { Component } from 'react';
import './App.css';
import Homepage from './Pages/Homepage/Homepage'
import ShopPage from './Pages/ShopPage/ShopPage'
import { Route, Switch,Redirect } from 'react-router-dom'
import Header from './Components/Header/Header'
import SignPage from './Pages/SignPage/SignPage'
import { connect } from 'react-redux';
// user action used for dispatchToProps
import {setCurrentUser} from './redux/user/user.actions'
import { auth, createUserProfileDocument } from './firebase/firebaseUtil'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser : null,
    }
  }
 
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
      //otherwise set the currentUser to the currentUser that was changed 
      setCurrentUser(userAuth);


    })

  }

  //whenever component is closed, also close authorization to prevent memory leak 
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={() => <Homepage />} />
          <Route exact path='/shop' render={() => <ShopPage />} />
          <Route exact path='/Sign' render={() => <SignPage /> }/>
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
