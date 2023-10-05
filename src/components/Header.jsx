import React from 'react';

const Header = () => {
  const headerStyle = {
    paddingTop :'20px',
    backgroundColor: 'black',
    color: '#a855f7',

    fontSize: '44px',
    fontWeight: 'bold',
    textAlign: 'center'
  };

  return (
    <div style={headerStyle}>
      <h1>Workify</h1>
    </div>
  );
};

export default Header;