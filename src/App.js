import React, { Component } from 'react';
import './App.css';
import Homepage from './Pages/Homepage/Homepage'
import ShopPage from './Pages/ShopPage/ShopPage'
import { Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header'
import SignPage from './Pages/SignPage/SignPage'
import { auth, createUserProfileDocument } from './firebase/firebaseUtil'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  //store userData in database onto state 
  componentDidMount() {
    //whenever AuthState is changed currentUser is set to the user that was changed 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //if user authenticates
      if (userAuth) {
        //get the user reference from firebase 
        const userRef = await createUserProfileDocument(userAuth);
        //whenever the database is updated with a user change the state 
        userRef.onSnapshot(snapShot => {
          console.log(snapShot.data())
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      else
        this.setState({
          currentUser: null
        })


    })

  }

  //whenever component is closed, also close authorization to prevent memory leak 
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' render={() => <Homepage />} />
          <Route exact path='/shop' render={() => <ShopPage />} />
          <Route exact path='/Sign' render={() => <SignPage />} />
        </Switch>
      </div>
    );
  }
}

export default App;
