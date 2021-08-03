import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Beranda from "./components/Beranda";
import ManajemenBuku from "./components/ManajemenBuku";
import Navbar from "./components/Navbar";

function App() {
  const [books, setBooks] = useState([
    {
      _id: 1,
      judul: "Laskar Pelangi",
      pengarang: "Andrea Hirata",
      harga: 80000,
      stok: 6
    },
    {
      _id: 2,
      judul: "Bumi",
      pengarang: "Tere Liye",
      harga: 86000,
      stok: 4
    }
  ]);

  function storeData(inputBook) {
    console.log(inputBook);
    alert("Data berhasil ditambahkan");
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Beranda />
          </Route>
          <Route path="/">
            <ManajemenBuku bookList={books} store={storeData}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
