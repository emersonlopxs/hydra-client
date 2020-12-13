import { useEffect, useState } from 'react';

import { Container } from './styles.ts';

function Homepage() {
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    async function getLaunches() {
      try {
        const response = await fetch('http://localhost:3333/api/v1/spacex/launches')
        const data = await response.json();
        setLaunches(data.launches);
      } catch (error) {
        console.log('error -> ', error);
      }
    }
    getLaunches()
  }, [])

  return (
    <Container>
      <h1>homepage</h1>
      {launches?.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </Container>
  );
}

export default Homepage;
