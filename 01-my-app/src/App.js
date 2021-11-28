import Hello from "./components/hello/Hello";
import Jsx from "./components/jsx/Jsx";
import ExternalStyle from "./components/style/ExternalStyle";
import Style from "./components/style/InlineStyle";
import InternalStyle from "./components/style/InternalStyle";
import Test from "./components/test/Test";


function App() {
  return (
   <div> 

        <div className="App">
        Merhaba Dünya
        </div>

        <Hello/>
        <Test/>
        <Jsx/>
        <Style/>
        <InternalStyle/>
        <ExternalStyle/>
   </div>
  );
}

export default App;
