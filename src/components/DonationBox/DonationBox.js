import React, { useState } from "react";
import Header from "../Header/Header";
import LoadingBar from "../LoadingBar/LoadingBar";

const DonationBox = () => {
  const [amountNeeded, setAmountNeeded] = useState(500);
  const [donation, setDonation] = useState(50);
  const [donors, setDonors] = useState(42);

  const handleDonate = () => {
    if (amountNeeded === 0) return;

    if (donation > amountNeeded) {
      setDonation(amountNeeded);
      setAmountNeeded(0);
      return
    }

    setDonors(donors + 1);
    setAmountNeeded(amountNeeded - donation);
  };

  return (
    <>
      <Header amountNeeded={amountNeeded} />
      <div className="main-container">
        <LoadingBar area={100 * (1 - amountNeeded / 500)} />
        <p>
          <span>Only 3 days left</span> to fund this project.
        </p>
        <p>
          Join the <strong>{donors}</strong> other donors who have already
          supported this project. Every dollar helps.
        </p>
        <div className="form">
          <input
            className="form-item"
            type="number"
            value={donation}
            onChange={(e) => setDonation(e.target.value)}
          />
          <button
            className="form-item donate-button"
            type="submit"
            onClick={handleDonate}
          >
            Give Now
          </button>
        </div>
        <em>{`Why give $${donation}?`}</em>
      </div>
      <div className="button-container">
        <button className="grey-buttons left-button">Save for later</button>
        <button className="grey-buttons">Tell your friends</button>
      </div>
    </>
  );
};

export default DonationBox;
