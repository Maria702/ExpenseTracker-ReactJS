import styled from "styled-components";
import HomePage from './components/Home';


const Container = styled.div`
display: flex;
flex-direction: column;
font-family: 'Tapestry', cursive;
align-items: center;

`;

const Header = styled.span`
color : black;
font-size: 30px;
font-weight: bold;

`;
function App() {
  return (
    <>
      <Container>
        <Header>Expense Tracker</Header>
        <HomePage />
      </Container>
    </>


  );
}

export default App;
