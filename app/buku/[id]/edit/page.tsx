import { prisma } from "@/lib/prisma";
import { editBuku } from "../../actions";

export default async function EditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const buku = await prisma.buku.findUnique({
    where: { id: Number(id) },
  });

  if (!buku) {
    return <h1>Data tidak ditemukan</h1>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Edit Buku</h1>

      <form action={editBuku}>
        <input type="hidden" name="id" value={buku.id} />
        <input name="judul" defaultValue={buku.judul} required />{" "}
        <input name="penulis" defaultValue={buku.penulis} required />{" "}
        <input name="tahun" type="number" defaultValue={buku.tahun} required />{" "}
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
}