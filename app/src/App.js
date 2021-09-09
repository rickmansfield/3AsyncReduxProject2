import './App.css';
import styled from 'styled-components';
import Dog from './components/Dog'
import Cat from './components/Cat'

const Wrapper = styled.div`
  background-image: url('https://wallpaperaccess.com/full/340452.png');
  background-repeat: no-repeat;
  background-size: cover;
  color: dodgerblue;
  box-sizing: border-box;
    padding:0;
    margin: 0;
    max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;`


function App() {
  return (
    <Wrapper>
      <h1>Animal Lovers Search Engine</h1>
      <h2>🐕🐕🐕🐕</h2>
      <Dog />
      <Cat />
    </Wrapper>

  );
}

export default App;
