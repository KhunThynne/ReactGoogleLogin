import React from 'react';
import ContainerT from './components/Container';
import TestFN from './components/TestFunctionComponent';
import GoogleLoginButton from './components/GoogleButton';
class App extends React.Component {
  constructor(props:any) {
    super(props);
    this.state = {};

  }
  render() {
    return (
      <>
        <ContainerT >
          <TestFN />
          <div className='fixed'>
            <h5>This project for test system Google not store any cookie about your private data</h5>
          </div>
          <GoogleLoginButton />
        </ContainerT>
      </>
    );
  }
}

export default App;
