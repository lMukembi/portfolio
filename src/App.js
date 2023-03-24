import Header from "./components/header"
import Aboutme from "./components/aboutme"
import Intro from "./components/intro"
import Jobs from "./components/jobs"
import Socialmedia from "./components/socialmedia"


function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Aboutme/>
      <Jobs/>
      <Socialmedia/>
      <p style={{fontStyle: "italic", textAlign:"center", fontSize:"13px"}}>Designed & built by Mukembi L.</p>
    </div>
  );
}

export default App;
