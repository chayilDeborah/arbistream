"use client";
import React, { useState } from "react";
import Select from "react-select";
import Nav from "../component/DexNav";
import Image from "next/image";
import menu from "../asset/menu.svg";
import convert from "../asset/convert.svg";
import equiv from "../asset/equiv.svg";
import notice from "../asset/notice.svg";
import tick from "../asset/tick.svg";

export default function Dex() {

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "none",
      borderRadius: "17px",
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#ECECEC" : "#ececec",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#26489E" : "#26489E",
        
      }
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none"
    }),
    placeholder: (base) => ({
      ...base,
      placeholder: "Select Token"
    }),
    indicatorsContainer: (base) => ({
      ...base,
      color: "#D5D5D6"
    }),
    menu: (base) => ({
      ...base,
      // background: "#2d2c2c94"
      color: "#26489E"
    }),
    singleValue: (base) => ({
      ...base,
      color: "#26489E",
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "17px"
    })
  };

  const data = [
    {
      value: 1,
      token: "ETH",
      icon: "https://res.cloudinary.com/dmye53wps/image/upload/v1686398570/ETH_ndf4du.svg",
    },
    {
      value: 2,
      token: "AST",
      icon: "https://res.cloudinary.com/dmye53wps/image/upload/v1686394877/AST_qd9pml.svg",
    },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedOption(e);
  };
  const handledChange = (e) => {
    setSelectedOption2(e);
  };
  return (
    <>
    <div style={{background: "#1E1E1E", margin: "-8px"}}>
      <Nav />
      <div className="main">
        <div className="container">
          <div>
            <div className="tab-flex">
              <div className="swap-text">Swap</div>
              <Image src={menu} alt="menu-icon" className="menu-icon" />
            </div>
            <div className="first-token">
              <div>
                <input className="input"/>
                <div className="token_equivalent">$220.07</div>
              </div>
    
              <Select
              id='select-id'
                styles={customStyles}
                value={selectedOption}
                options={data}
                onChange={handleChange}
                getOptionLabel={(e) => (
                  <div style={{ display: "flex", alignItems: "center" }} id="selectdiv-id">
                    <Image src={e.icon} width={20} height={20} />
                    <span style={{ marginLeft: 5 }}>{e.token}</span>
                  </div>
                )}
              />
            </div>
            <div className="break-flex">
              <div className="first-line"></div>
              <Image src={convert} alt="convert" className="convert" />
              <div className="sec-line"></div>
            </div>
            <div className="first-token">
              <div>
              <input className="input"/>
                <div className="token_equivalent">$238.07</div>
              </div>
              <Select
                id="select-id"
                styles={customStyles}
                value={selectedOption2}
                options={data}
                onChange={handledChange}
                getOptionLabel={(e) => (
                  <div
                    style={{ display: "flex", alignItems: "center" }}
                    id="selectdiv-id"
                  >
                    <Image src={e.icon} width={20} height={20} />
                    <span style={{ marginLeft: 5 }}>{e.token}</span>
                  </div>
                )}
              />
            </div>
            <div className="swap-btn-flex">
            <button className="swap-connect-btn">Swap</button>
            </div>
            <div className="estimate-group">
              <div className="estim">
                <div className="estimate-flex">
                  <div className="estim-text">Estimated Cost</div>
                  <div className="estim-no">
                    <Image src={equiv} alt="icon" className="equiv" />
                    <div className="estim-num">$5.08</div>
                  </div>
                </div>
                <div className="estimate-flex" id="estim-id">
                  <div className="estim-text">Price Impact</div>
                  <div className="estim-no">
                    <div className="estim-num">0.00%</div>
                  </div>
                </div>
                <div className="estimate-flex" id="estim-id">
                  <div className="estim-text-flex">
                    <div className="save">You Save</div>
                    <Image src={notice} alt="note" className="note" />
                  </div>
                  <div className="estim-no">
                    <Image src={tick} alt="icon" className="tick" />
                    <div className="estim-num">$5.08</div>
                  </div>
                </div>
                <div className="estimate-flex1" id="estim-id">
                  <div className="estim-text">Minimum Received</div>
                  <div className="estim-no">
                    <div className="estim-num">22,000 AST</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
