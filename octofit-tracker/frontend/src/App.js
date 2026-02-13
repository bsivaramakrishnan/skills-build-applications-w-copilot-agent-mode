
import './App.css';

function App() {
  return (
    <div className="App container mt-5">
      {/* Bootstrap Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <a className="navbar-brand" href="#">Octofit Tracker</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Teams</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Leaderboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Workouts</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Bootstrap Heading */}
      <h1 className="display-4 mb-4">Welcome to Octofit Tracker</h1>

      {/* Bootstrap Card */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Track Your Fitness Journey</h5>
          <p className="card-text">Log activities, join teams, compete on leaderboards, and get personalized workout suggestions!</p>
          <a href="https://reactjs.org" className="btn btn-primary">Learn React</a>
        </div>
      </div>

      {/* Bootstrap Table Example */}
      <h2 className="mb-3">Sample Leaderboard</h2>
      <table className="table table-striped table-bordered">
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
