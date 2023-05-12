/*
  Warnings:

  - You are about to drop the column `remark` on the `Visitor` table. All the data in the column will be lost.
  - You are about to drop the column `want_to_visit` on the `Visitor` table. All the data in the column will be lost.
  - Added the required column `person_to_visit` to the `Visitor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `purpose_of_visit` to the `Visitor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type_visitor` to the `Visitor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Visitor" DROP COLUMN "remark",
DROP COLUMN "want_to_visit",
ADD COLUMN     "person_to_visit" TEXT NOT NULL,
ADD COLUMN     "purpose_of_visit" TEXT NOT NULL,
ADD COLUMN     "type_visitor" TEXT NOT NULL;
