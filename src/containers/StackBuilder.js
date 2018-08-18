import React from 'react';

import Title from '../components/Title';
import Search from '../components/Search';
import Results from '../components/Results';
import Stack from '../components/Stack';

class StackBuilder extends React.Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          maxWidth: 1200,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: 'Source Sans Pro'
        }}
      >
        <Title />
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap-reverse'
          }}
        >
          <div style={{ width: '100%', maxWidth: 900 }}>
            <Search />
            <Results />
          </div>
          <Stack />
        </div>
      </div>
    );
  }
}

export default StackBuilder;
