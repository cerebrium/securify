import React, { useEffect, useState } from 'react';
import './App.scss';
import WelcomeBoxes from './components/imageContainer/WelcomeBoxes'
import WelcomeBoxesLower from './components/imageContainer/WelcomeBoxesLower'
import Stereo from './Images/stereoImage.jpg'
import Painting from './Images/painterino.jpg'
import Ps4 from './Images/ps4.jpg'
import Computer from './Images/computer.jpg'
import Login from './components/auth/Login'
import { useSelector, useDispatch } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { 
  selectAuth,
  addAuth
} from './features/authSlice'

const App = () => {
  // auth0
  const { user, isAuthenticated, isLoading } = useAuth0();

  // redux
  const authData = useSelector(selectAuth)
  const dispatch = useDispatch();

  // local state
  const [ content, setContent ] = useState(null)

  useEffect( () => {
    if (isAuthenticated) {
      console.log(user)
      dispatch(addAuth(
          {
            username: user.name,
            email: user.email
          }
        )
      )
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

  // handle the auth
  useEffect( () => {
    if (isAuthenticated) {
      setContent(
        <Router>
          <Route exact path = '/' render={ () => <Home />}/>
        </Router>
      )
    } else {
      setContent(
          <div className="mainPageContainer">
          <h1>Property Lock</h1>
          <h3>Securely and Safely track your items across the web</h3>
          <div className='middleContent'>
            <WelcomeBoxes 
              image={Stereo}
              description='Always ensure your sound is safe'
            />
            <WelcomeBoxesLower 
              image={Painting}
              description='Track your paintings through the web'
            />
            <WelcomeBoxes 
              image={Ps4}
              description='Game in peace'
            />
            <WelcomeBoxesLower 
              image={Computer}
              description='Track your valuables for pepace of mind'
            />
          </div>
          <div className='loginContainer'>
            <Login />
          </div>
        </div>
      )
    }
  }, [isAuthenticated])

  return (
    <>
      {content}
    </>
  );
}

export default App;
