import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App.jsx';
import SignoutPage from './components/pages/SignoutPage.jsx';
// import { UserProvider } from './UserContext.jsx';


function MainComponent() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(() => {
    // Initialize the state with the value from localStorage if available, or default to false
    return localStorage.getItem('isUserSignedIn') === 'true';
  }); // Initialize state variable

    // Update localStorage when isUserSignedIn changes
    useEffect(() => {
      localStorage.setItem('isUserSignedIn', isUserSignedIn);
    }, [isUserSignedIn]);

  return (
    <React.StrictMode>
      {/* <UserProvider value={{ isUserSignedIn, setIsUserSignedIn }}> */}
        {isUserSignedIn ? <App /> : <SignoutPage setIsUserSignedIn={setIsUserSignedIn}/>}
      {/* </UserProvider> */}
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
      <MainComponent />
)