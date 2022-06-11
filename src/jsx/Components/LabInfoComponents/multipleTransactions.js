import React from "react";

export const MultipleTransactions = () => {
  const transactionsData = [
    "1 Lazy Llama NFT + 1  T3-Serum + 40 ADA = 1 Biomutant LLama",
    "2 Lazy Llama NFT + 2  T3-Serum + 76 ADA = 2  Biomutant LLamas",
    "3 Lazy Llama NFT + 3  T3-Serum + 108 ADA = 3  Biomutant LLamas",
    "4 Lazy Llama NFT + 4  T3-Serum + 136 ADA = 4  Biomutant LLamas",
    "5 Lazy Llama NFT + 5  T3-Serum + 160 ADA = 5  Biomutant LLamas",
    "6 Lazy Llama NFT + 6  T3-Serum + 180 ADA = 6  Biomutant LLamas",
    "7 Lazy Llama NFT + 7  T3-Serum + 196 ADA = 7  Biomutant LLamas",
    "8 Lazy Llama NFT + 8  T3-Serum + 208 ADA = 8  Biomutant LLamas",
    "9 Lazy Llama NFT + 9  T3-Serum + 216  ADA = 9  Biomutant LLamas",
    "10 Lazy Llama NFT + 10  T3-Serum + 220 ADA = 10  Biomutant LLamas"
  ];
  return (
    <div className="flex flex-col gap-y-14">
      <div className="flex flex-col gap-y-10">
        <h1 className="text-3xl text-gray_200 text-center">
          MultipleTransactions
        </h1>
        <h1 className="text-3xl text-gray_200 text-center">
          Use the chart below to calculate the correct amount, and number of
          assets to send up to 10 mutations:
        </h1>
      </div>
      <div className="flex flex-col gap-y-4">
        {transactionsData.map((data, ind) =>
          <h1 className="text-2xl text-gray_200 text-center" key={ind + 1}>
            {data}
          </h1>
        )}
      </div>
      <h1 className="text-2xl text-gray_200 text-center">
        * For Mixing just include 1 Serum from each Tier plus 10 ADA for each
        Mystery Serum up to 10. (max 30 Serums(10 of each) + 100 ADA = 10
        Mystery Serums)
      </h1>
    </div>
  );
};
