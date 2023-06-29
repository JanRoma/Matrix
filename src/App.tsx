import './App.css';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { Capsule } from './Capsule';

function App() {
  return (
    <div className="App">

      <header className="App-header">
      <p>Pick your pill</p>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Capsule position={[-3, 0, 0]} color='blue' />
        <Capsule position={[3, 0, 0]} color='red' />
      </Canvas>
      </header>

    </div>
  );
}

export default App;
