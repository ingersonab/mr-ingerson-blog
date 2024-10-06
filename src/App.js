import Navbar from "./Navbar/Navbar"
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <div style={{ height: '1500px' }}> {/* Add large height for testing scroll */}
        Scroll down to test the sticky navbar.
      </div>
    </>
  );
}

export default App;
