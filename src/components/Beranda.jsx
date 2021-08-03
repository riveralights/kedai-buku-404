function Beranda({bookList}){
    return (
        <div className="container mt-3">
            <h1 className="text-center">Selamat dari di Kedai Buku 404!</h1>
            <div id="katalog">
                <h2>Katalog Buku</h2>
                <hr />
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr className="text-center">
                            <th>No.</th>
                            <th>Judul</th>
                            <th>Pengarang</th>
                            <th>Harga</th>
                            <th>Stok</th>
                        </tr>
                    </thead>
                    <tbody>
                        { bookList.map((book, index) => (
                            <tr key={index}>
                                <td className="text-center align-middle">{index + 1}</td>
                                <td className="align-middle">{book.judul}</td>
                                <td className="align-middle">{book.pengarang}</td>
                                <td className="text-center align-middle">{book.harga}</td>
                                <td className="text-center align-middle">{book.stok}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Beranda;