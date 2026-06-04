import React, { useState } from "react";
import "./Launch.css";
import { useNavigate } from "react-router-dom";

function Launchpage() {
  const [country, setCountry] = useState("");
  const [blockchain, setBlockchain] = useState("");
  const [currency, setCurrency] = useState("");

  const navigate = useNavigate();

  return (
    <section className="launch-page">
      <div className="container">
        <div className="launch-wrapper">

          {/* Back Button */}
          <button
            className="back-btn"
            onClick={() => navigate("/")}
          >
            <i className="bi bi-arrow-left"></i>
            <span>Back To Home</span>
          </button>

          {/* Title */}
          <h1 className="launch-title">
            Create Crypto Account
          </h1>

          <p className="launch-subtitle">
            Join the future of blockchain technology
          </p>

          {/* Form */}
          <form
            className="launch-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="row g-4">

              {/* Name & Username */}
              <div className="col-12 col-md-6">
                <input
                  type="text"
                  className="form-control custom-input"
                  placeholder="Full Name"
                />
              </div>

              <div className="col-12 col-md-6">
                <input
                  type="text"
                  className="form-control custom-input"
                  placeholder="Username"
                />
              </div>

              {/* Email & Phone */}
              <div className="col-12 col-md-6">
                <input
                  type="email"
                  className="form-control custom-input"
                  placeholder="Email Address"
                />
              </div>

              <div className="col-12 col-md-6">
                <input
                  type="tel"
                  className="form-control custom-input"
                  placeholder="Phone Number"
                />
              </div>

              {/* Country & DOB */}
              <div className="col-12 col-md-6">
                <select
                  className="form-select custom-input"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Canada">Canada</option>
                </select>
              </div>

              <div className="col-12 col-md-6">
                <input
                  type="date"
                  className="form-control custom-input"
                />
              </div>

              {/* Wallet Address */}
              <div className="col-12">
                <div className="input-group">
                  <span className="input-group-text wallet-icon">
                    <i className="bi bi-wallet2"></i>
                  </span>

                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Wallet Address"
                  />
                </div>
              </div>

              {/* Blockchain */}
              <div className="col-12 col-md-6">
                <select
                  className="form-select custom-input"
                  value={blockchain}
                  onChange={(e) => setBlockchain(e.target.value)}
                >
                  <option value="">Preferred Blockchain</option>
                  <option value="Ethereum">Ethereum</option>
                  <option value="BNB Chain">BNB Chain</option>
                  <option value="Polygon">Polygon</option>
                  <option value="Solana">Solana</option>
                </select>
              </div>

              {/* Currency */}
              <div className="col-12 col-md-6">
                <select
                  className="form-select custom-input"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <option value="">Preferred Currency</option>
                  <option value="BTC">Bitcoin (BTC)</option>
                  <option value="ETH">Ethereum (ETH)</option>
                  <option value="USDT">Tether (USDT)</option>
                  <option value="BNB">Binance Coin (BNB)</option>
                </select>
              </div>

              {/* Password */}
              <div className="col-12 col-md-6">
                <input
                  type="password"
                  className="form-control custom-input"
                  placeholder="Password"
                />
              </div>

              <div className="col-12 col-md-6">
                <input
                  type="password"
                  className="form-control custom-input"
                  placeholder="Confirm Password"
                />
              </div>

              {/* Referral */}
              <div className="col-12">
                <input
                  type="text"
                  className="form-control custom-input"
                  placeholder="Referral Code (Optional)"
                />
              </div>

              {/* Terms */}
              <div className="col-12">
                <div className="form-check terms-checkbox">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="terms"
                  />

                  <label
                    className="form-check-label"
                    htmlFor="terms"
                  >
                    I agree to the Terms & Conditions
                  </label>
                </div>
              </div>

              {/* Buttons */}
              <div className="col-12">
                <div className="launch-buttons">
                  <button
                    type="submit"
                    className="btn register-btn"
                  >
                    Register Account
                  </button>

                  <button
                    type="button"
                    className="btn wallet-btn"
                  >
                    Connect Wallet
                  </button>
                </div>
              </div>

            </div>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Launchpage;