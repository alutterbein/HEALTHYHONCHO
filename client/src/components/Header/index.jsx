import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className=" text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: '3rem' }}>
           Welcome
          </h1>
        </Link>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          Track your wellness for today! 
        </p>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn-lg btn btn-outline-dark m-2" to="/me">
                View My Profile
              </Link>
              <button className="btn btn-lg btn-outline-dark m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-outline-dark m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-outline-dark m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
