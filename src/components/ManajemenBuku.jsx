function ManajemenBuku({bookList}){
    console.log(bookList);
    return (
        <div className="container mt-3">
            <h1 className="text-center">Manajemen Buku</h1>
            <div id="formTambah"></div>
            <div id="formUbah"></div>
            <div id="daftarBuku">
                <h2 className="mt-5">Daftar Buku</h2>
                <hr />
                <button className="btn btn-primary mb-4">Tambah Buku</button>
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
                                <td className="text-center align-middle">{index+1}</td>
                                <td className="align-middle">{book.judul}</td>
                                <td className="align-middle">{book.pengarang}</td>
                                <td className="text-center align-middle">{book.harga}</td>
                                <td className="text-center align-middle">{book.stok}</td>
                                <td className="text-center align-middle">
                                    <button className="btn btn-warning me-2">Edit</button>
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