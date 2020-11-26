import React from 'react';

const headingStyle = {
    textAlign: 'center',
    fontSize: '2.2rem',
    marginTop: '20px'
}

function Welcome(props) {
  return <h1 style={headingStyle}>My name is {props.name} and i made this app!</h1>;
}

export default Welcome