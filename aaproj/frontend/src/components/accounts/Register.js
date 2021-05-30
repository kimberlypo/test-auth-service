import React, {useState} from 'react';
import axios from 'axios';
import {setUserSession} from '../../utils/Common.js';
import {Link} from 'react-router-dom';

function Register(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const email = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [text, onChangeText] = useState(null);

  // handle button click of Register form
  const handleRegister = () => {
    setError(null);
    setLoading(true);
    axios
      .post('http://127.0.0.1:8000/api/register/', {
        username: username.value,
        email: email.value,
        password: password.value,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.token, response.data.user);
        props.history.push('/login');
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401)
          setError(error.response.data.message);
        else setError('Something went wrong. Please try again later.');
      });
  };

  return (
    <form>
      <section className="section">
        <div className="columns is-centered">
          <div className="column is-one-third">
            <h1 className="is-centered">REGISTER A USER</h1>

            <div className="field">
              <label className="label">Username</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  // {...username}
                  id="username"
                  placeholder="username"
                  onChangeText={onChangeText}
                  value={text}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </div>
              <p className="help is-success">This username is available</p>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input is-success"
                  type="text"
                  {...password}
                  placeholder="password"
                  onChangeText={onChangeText}
                  value={text}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-key"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input is-danger"
                  type="email"
                  {...email}
                  placeholder="hello@"
                  onChangeText={onChangeText}
                  value={text}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-exclamation-triangle"></i>
                </span>
              </div>
              <p className="help is-danger">This email is invalid</p>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link" onClick={handleRegister}>
                  REGISTER
                </button>
              </div>
            </div>

            <div>
              <h3>
                Already have an account? &nbsp;
                <Link className="nav-link" to={'/login'}>
                  Login
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default Register;
