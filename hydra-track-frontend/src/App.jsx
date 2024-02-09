import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import UserCRUD from './components/UserCRUD';
import RecommendationPanel from './components/RecommendationPanel';
import WaterIntakeForm from './components/WaterIntakeForm';
import WaterIntakeDisplay from './components/WaterIntakeDisplay';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [totalWaterIntake, setTotalWaterIntake] = useState(0);
  const navigate = useNavigate();

  const handleSignIn = (username) => {
    // Perform authentication
    navigate('/signin')
    setCurrentUser(username);
  };

  const handleSignUp = (newUser) => {
    // Add the new user to the list
    setUsers([...users, newUser]);
  };

  const handleDeleteUser = (userId) => {
    // Remove the user from the list
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    // <Router>
      <div className="App" style={styles.app}>
        <header style={styles.header}>
          <h1>Hydra Track</h1>
          <nav>
            <ul style={styles.nav}>
              <li><Link to="/signin">Sign In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
              {/* {currentUser && (
                <> */}
                  <li><Link to="/waterintake">Water Intake</Link></li>
                  <li><Link to="/users">Users</Link></li>
                  <li><Link to="/recommendations">Recommendations</Link></li>
                {/* </>
              )} */}
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/signin"
            element={<SignInPage onSignIn={handleSignIn} />}>
          </Route>
          <Route path="/signup"
            element={<SignUpPage onSignUp={handleSignUp} />}>
          </Route>
          {/* {currentUser && (
            <> */}
              <Route path="/waterintake"
                element={
                  <><WaterIntakeForm onSubmit={(intake) => setTotalWaterIntake(totalWaterIntake + intake)} />
                  <WaterIntakeDisplay waterIntake={totalWaterIntake} /></>
                }>
              </Route>
              <Route path="/users"
                element={<UserCRUD users={users} onDelete={handleDeleteUser} />}>
              </Route>
              <Route path="/recommendations"
                element={<RecommendationPanel recommendations={recommendations} />}>
              </Route>
            {/* </>
          )} */}
        </Routes>
      </div>
    // </Router>
  );
};

const styles = {
  app: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
  },
  header: {
    marginBottom: '20px',
  },
  nav: {
    listStyle: 'none',
    padding: 0,
  },
};

export default App;
