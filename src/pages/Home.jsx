// Home.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import LanguageSphere from './Mesh.jsx';


const Home = () => {
  return (
    <div className="home">
      <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <LanguageSphere /> {/* 3D language and database sphere */}
      </Canvas>
    </div>
  );
};

export default Home;
