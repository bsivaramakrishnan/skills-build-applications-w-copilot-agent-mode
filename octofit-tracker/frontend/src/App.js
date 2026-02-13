

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <div className="App container mt-5">
      {/* Bootstrap Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark mb-4">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={process.env.PUBLIC_URL + '/octofitapp-small.png'} alt="Octofit Logo" className="App-logo" />
          <span style={{marginLeft: '8px'}}>Octofit Tracker</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        function App() {
          return (
            <Router>
              <div className="App container mt-5">
                {/* Navigation */}
                <nav className="navbar navbar-expand-lg navbar-dark mb-4">
                  <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src={process.env.PUBLIC_URL + '/octofitapp-small.png'} alt="Octofit Logo" className="App-logo" />
                    <span style={{marginLeft: '8px'}}>Octofit Tracker</span>
                  </Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to="/users">Users</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/teams">Teams</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/activities">Activities</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/workouts">Workouts</Link>
                      </li>
                    </ul>
                  </div>
                </nav>

                <Routes>
                  <Route path="/" element={<h1 className="display-4 mb-4">Welcome to Octofit Tracker</h1>} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/teams" element={<Teams />} />
                  <Route path="/activities" element={<Activities />} />
                  <Route path="/leaderboard" element={<Leaderboard />} />
                  <Route path="/workouts" element={<Workouts />} />
                </Routes>
              </div>
            </Router>
        <thead className="thead-dark">
          <tr>
            <th>Rank</th>
            <th>User</th>
            <th>Points</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Alice</td>
            <td>1200</td>
            <td>OctoFitters</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Bob</td>
            <td>1100</td>
            <td>FitSquad</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Charlie</td>
            <td>950</td>
            <td>OctoFitters</td>
          </tr>
        </tbody>
      </table>

      {/* Bootstrap Button Example */}
      <button className="btn btn-success mb-3">Log Activity</button>

      {/* Bootstrap Form Example */}
      <form className="mb-4">
        <div className="mb-3">
          <label htmlFor="activity" className="form-label">Activity</label>
          <input type="text" className="form-control" id="activity" placeholder="Enter activity" />
        </div>
        <div className="mb-3">
          <label htmlFor="points" className="form-label">Points</label>
          <input type="number" className="form-control" id="points" placeholder="Enter points" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {/* Bootstrap Modal Example (static markup) */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Activity Logged</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Your activity has been successfully logged!
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
