import { Component,ReactNode } from 'react';

type TestTProps = {
    test?: string;
    children: ReactNode; 
  };

class TestT extends Component {
  constructor(props:TestTProps) {
    super(props);
    this.state = {
      // Initialize state if needed
    };
    console.log('Constructor called');
  }
  componentDidMount() {
    console.log('Component did mount');
    // Perform actions after the component has been added to the DOM
  }

  componentDidUpdate() {
    console.log('Component did update');
    // Perform actions after the component's state or props have been updated
  }

  componentWillUnmount() {
    console.log('Component will unmount');
    // Perform cleanup before the component is removed from the DOM
  }

  // Example event handler method
  handleButtonClick = () => {
    console.log('Button clicked!');
  };

  render() {
  

    return (
      <div>
        <p></p>
        <div>
        
          <button onClick={this.handleButtonClick}>Click me</button>
        </div>
      </div>
    );
  }
}

export default TestT;
