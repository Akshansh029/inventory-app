/*
  Warnings:

  - You are about to drop the column `totalPurchase` on the `PurchaseSummary` table. All the data in the column will be lost.
  - You are about to drop the column `totalAmount` on the `Purchases` table. All the data in the column will be lost.
  - You are about to drop the column `unitPrice` on the `Purchases` table. All the data in the column will be lost.
  - Added the required column `totalPurchased` to the `PurchaseSummary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalCost` to the `Purchases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unitCost` to the `Purchases` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" ALTER COLUMN "rating" DROP NOT NULL;

-- AlterTable
ALTER TABLE "PurchaseSummary" DROP COLUMN "totalPurchase",
ADD COLUMN     "totalPurchased" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Purchases" DROP COLUMN "totalAmount",
DROP COLUMN "unitPrice",
ADD COLUMN     "totalCost" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "unitCost" DOUBLE PRECISION NOT NULL;
