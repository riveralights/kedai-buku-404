import { useState } from "react";

function ManajemenBuku({ bookList, store }) {
    const [inputBook, setInputBook] = useState();
    const [form, setForm] = useState();

    function handleJudul(e) {
        setInputBook({ ...inputBook, judul: e.target.value });
    }

    function handlePengarang(e) {
        setInputBook({ ...inputBook, pengarang: e.target.value });
    }

    function handleHarga(e) {
        setInputBook({ ...inputBook, harga: e.target.value });
    }

    function handleStok(e) {
        setInputBook({ ...inputBook, stok: e.target.value });
    }

    function submitAdd(e) {
        e.preventDefault();
        store(inputBook);
    }

    function showCreate() {
        setForm("create");
    }

    function showEdit(book) {
        setInputBook(book);
        setForm("edit");
    }

    return (
        <div className="container mt-3">
            <h1 className="text-center">Manajemen Buku</h1>
            {form === "create" && (
                <div id="formTambah">
                    <h5 className="mt-5">Form Tambah Buku</h5>
                    <hr />
                    <form onSubmit={submitAdd} className="row align-items-center gx-3 gy-2">
                        <div className="col-sm-3">
                            <input type="text" name="judul" className="form-control" placeholder="Judul" onChange={handleJudul} />
                        </div>
                        <div className="col-sm-3">
                            <input type="text" name="pengarang" className="form-control" placeholder="Pengarang" onChange={handlePengarang} />
                        </div>
                        <div className="col-sm-2">
                            <input type="text" name="harga" className="form-control" placeholder="Harga" onChange={handleHarga} />
                        </div>
                        <div className="col-sm-2">
                            <input type="number" name="stok" className="form-control" placeholder="Stok Buku" onChange={handleStok} />
                        </div>
                        <div className="col-sm-2">
                            <input type="submit" className="btn btn-primary" value="Submit" />
                        </div>
                    </form>
                </div>
            )}

            {form === "edit" && (
                <div id="formUbah">
                <h5 className="mt-5">Ubah Buku</h5>
                <hr />
                <form className="row align-items-center gx-3 gy-2">
                    <div className="col-sm-3">
                        <input type="text" name="judul" className="form-control" placeholder="Judul" onChange={handleJudul} value={inputBook.judul} />
                    </div>
                    <div className="col-sm-3">
                        <input type="text" name="pengarang" className="form-control" placeholder="Pengarang" onChange={handlePengarang} value={inputBook.pengarang} />
                    </div>
                    <div className="col-sm-2">
                        <input type="text" name="harga" className="form-control" placeholder="Harga" onChange={handleHarga} value={inputBook.harga} />
                    </div>
                    <div className="col-sm-2">
                        <input type="number" name="stok" className="form-control" placeholder="Stok Buku" onChange={handleStok} value={inputBook.stok}/>
                    </div>
                    <div className="col-sm-2">
                        <input type="submit" className="btn btn-warning" value="Ubah" />
                    </div>
                </form>
            </div>
            )}
            
            <div id="daftarBuku">
                <h2 className="mt-5">Daftar Buku</h2>
                <hr />
                <button className="btn btn-primary mb-4" onClick={showCreate}>Tambah Buku</button>
                <table className="table table-bordered">
                    <thead>
                        <tr className="text-center">
                            <th width="5%">No.</th>
                            <th>Judul</th>
                            <th>Pengarang</th>
                            <th>Harga</th>
                            <th>Stok</th>
                            <th width="15%">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookList.map((book, index) => (
                            <tr key={index}>
                                <td className="text-center align-middle">{index + 1}</td>
                                <td className="align-middle">{book.judul}</td>
                                <td className="align-middle">{book.pengarang}</td>
                                <td className="text-center align-middle">{book.harga}</td>
                                <td className="text-center align-middle">{book.stok}</td>
                                <td className="text-center align-middle">
                                    <button className="btn btn-warning me-2" onClick={() => showEdit(book)}>Edit</button>
                                    <button className="btn btn-danger">Hapus</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ManajemenBuku;