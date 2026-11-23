import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { tambahBuku, hapusBuku } from "./actions";

export default async function BukuPage() {
  // ambil semua data buku
  const data = await prisma.buku.findMany();

  return (
    <div style={{ padding: 20 }}>
      <h1>Data Buku</h1>

      {/* form tambah data */}
      <form action={tambahBuku} style={{ margin: "20px 0" }}>
        <input name="judul" placeholder="Judul" required />{" "}
        <input name="penulis" placeholder="Penulis" required />{" "}
        <input name="tahun" type="number" placeholder="Tahun" required />{" "}
        <button type="submit">Tambah</button>
      </form>

      {/* tabel data */}
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>No</th>
            <th>Judul</th>
            <th>Penulis</th>
            <th>Tahun</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((buku, index) => (
            <tr key={buku.id}>
              <td>{index + 1}</td>
              <td>{buku.judul}</td>
              <td>{buku.penulis}</td>
              <td>{buku.tahun}</td>
              <td>
                <Link href={`/buku/${buku.id}/edit`}>Edit</Link>{" "}
                <form action={hapusBuku} style={{ display: "inline" }}>
                  <input type="hidden" name="id" value={buku.id} />
                  <button type="submit">Hapus</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}