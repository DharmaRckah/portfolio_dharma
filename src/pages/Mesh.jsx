// components/LanguageSphere.js
import React from 'react';
import { Text } from '@react-three/drei';

// Sample data of languages and databases
const items = [
  'JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'PHP', 'Swift', 'Kotlin', 'Go',
  'Rust', 'TypeScript', 'SQL', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis',
  'Firebase', 'SQLite', 'Cassandra', 'OracleDB', 'Elasticsearch', 'DynamoDB',
  'Neo4j', 'MariaDB', 'CouchDB', 'Hive', 'BigQuery', 'ClickHouse', 'Snowflake', 'HBase'
];

// Helper function to position items evenly on a sphere
function sphereDistribution(count, radius) {
  const positions = [];
  const goldenRatio = (1 + Math.sqrt(5)) / 2; // Approximation of phi for even distribution
  for (let i = 0; i < count; i++) {
    const theta = 2 * Math.PI * i / goldenRatio; // Spread items around
    const phi = Math.acos(1 - 2 * (i + 0.5) / count); // Spherical latitude
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    positions.push([x, y, z]);
  }
  return positions;
}

const LanguageSphere = ({ radius = 10 }) => {
  const positions = sphereDistribution(items.length, radius);

  return (
    <>
      {items.map((item, index) => (
        <Text
          key={index}
          position={positions[index]}
          fontSize={0.6}
          color="white"
          rotation={[0, 0, Math.PI / 2]}
          onClick={() => alert(`Selected: ${item}`)}
        >
          {item}
        </Text>
      ))}
    </>
  );
};

export default LanguageSphere;
