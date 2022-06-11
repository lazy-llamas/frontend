import React from "react";

export const WhatIsLabInfo = () => {
  const labInfoData = [
    "Welcome to the Lazy Llamas Lab!",
    "Click the warning sign on the building to enter, but remember, its at your own risk :)",
    "Here, Lazy Llamas can be interacted with various forms of Serum X to create strange creatures, but unless a Clone Serum is also used, the OG Llama is burned forever.  Other functions are also possible in the Lab, like for instance, Serum Mixing.",
    "For this first iteration of the Lab, users are required to send a certain number of assets and ada to an address and will receive an nft in return.   Follow the directions closely on the mint page.  Any errors will result in a refund and a failed transaction.",
    "Yes, it is the same address on both pages, you're smort!  The assets are under the same policy ID, but in lieu of smart contract connectivity for this particular tier, we elected to have two pages for clarity.  We will integrating wallets in the future for a better user experience.",
    "You can only use one chamber at a time, in other words do not combine both mixing and mutating in one transaction or you either will get unintended results or you will get a refund.  We get it, you like taking risks, but  just don't do it.",
    "Yoroi cannot be used for this mint as it cannot send multiple assets at once. Also, please don't send funds from an exchange!  If you do this you will get nothing in return.  Believe us,  Coinbase doesn't need your tip.  You must use a Cardano compatible wallet.  Adalite, ccVault, and Nami are good choices."
  ];
  return (
    <div className="flex flex-col gap-y-16">
      {labInfoData.map((data, ind) =>
        <h1 className="text-center text-3xl text-gray_200">
          {data}
        </h1>
      )}
    </div>
  );
};
