import NavBar from "./NavBar";
import Intro from "./Intro";
import Steps from "./Steps";
import NFC from "./NFC";
import POS from "./POS";
import Tablet from "./Tablet";
import Join from "./Join";
import Footer from "./Footer"

function App() {
  return (

    // <div className="App">
    //    <ElevatedBar/>
    //   <header className="App-header">
    //   </header>
    // </div>
    <>
      <NavBar />
      <br />
      <Intro />
      <br />
      <Steps />
      <br />
      <NFC />
      <br />
      <POS />
      <br />
      <Tablet />
      <br />
      <Join />
      <br />
      <Footer />
    </>
  );
}

export default App;
