import './App.css';
import styled from "styled-components";

const container = styled.div`
display:flex;
flex-direction: column;
margin: auto;
align-items: center;
box-shadox: 0 3px 6px 0;
 

`
const citycomponent = styled.div`
display:flex;
flex-direction: column;

`
const weathercomponent = styled.div`
display:flex;
flex-direction: column;

`


function App() {
  return (
    <container>
      <citycomponent>

      </citycomponent>

    </container>

  );
}

export default App;
