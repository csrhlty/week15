/*
  Warnings:

  - You are about to drop the `Mahasiswa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Mahasiswa";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Buku" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "judul" TEXT NOT NULL,
    "penulis" TEXT NOT NULL,
    "tahun" INTEGER NOT NULL
);
