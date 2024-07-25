

import Card from 'react-bootstrap/Card';

import './App.css';
import Image from './Image';
import Description from './Description';
import Price from './Price';
import Name from './Name';
function App() {
  return (
    <div className="App">

    

      <Card >
      <Image />
      <Card.Body>
      <Card.Title><Name/></Card.Title>
        <Card.Text>
          <Description/>
        </Card.Text>
        <h1><Price/></h1>
      </Card.Body>
    </Card>
    </div>
  );
}

export default App;
