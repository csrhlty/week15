"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// CREATE
export async function tambahBuku(formData: FormData) {
  const judul = formData.get("judul") as string;
  const penulis = formData.get("penulis") as string;
  const tahun = Number(formData.get("tahun"));

  await prisma.buku.create({
    data: { judul, penulis, tahun },
  });

  revalidatePath("/buku");
}

// UPDATE
export async function editBuku(formData: FormData) {
  const id = Number(formData.get("id"));
  const judul = formData.get("judul") as string;
  const penulis = formData.get("penulis") as string;
  const tahun = Number(formData.get("tahun"));

  await prisma.buku.update({
    where: { id },
    data: { judul, penulis, tahun },
  });

  redirect("/buku");
}

// DELETE
export async function hapusBuku(formData: FormData) {
  const id = Number(formData.get("id"));

  await prisma.buku.delete({ where: { id } });

  revalidatePath("/buku");
}