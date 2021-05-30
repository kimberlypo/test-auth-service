import React from 'react';
import {getUser, removeUserSession} from '../../utils/Common';

function Home(props) {
  const user = getUser();

  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  };

  return (
    <div>
      Welcome Page
      <br />
      <br />
    </div>
  );
}

export default Home;
