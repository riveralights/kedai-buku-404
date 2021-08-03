import { BrowserRouter, Switch, Route } from "react-router-dom";
import Beranda from "./components/Beranda";
import ManajemenBuku from "./components/ManajemenBuku";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Beranda />
          </Route>
          <Route path="/">
            <ManajemenBuku />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
