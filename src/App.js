import { Container, Header, Statistic } from 'semantic-ui-react'
import './App.css';

function App() {
  return (
    <Container>
      <Header as='h1'>Budget</Header>
      <Statistic sizes='small'>
        <Statistic.Label>Your Balance: </Statistic.Label>
      </Statistic>
    </Container>
  );
}

export default App;
