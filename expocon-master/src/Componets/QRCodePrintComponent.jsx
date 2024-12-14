import React, { forwardRef, useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import axios from "axios";

const QRCodePrintComponent = forwardRef(
  ({ value, name, place, isCertificatePrinting }, ref) => {
    const [badgeSetup, setBadgeSetup] = useState({
      marginTop: "0px",
      marginBottom: "0px",
      marginLeft: "0px",
      marginRight: "0px",
    });

    const getEvent = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API}/event/get-badge`
        );
        if (res.data.success) {
          setBadgeSetup(res.data.badge);
        }
      } catch (error) {
        console.error("Error fetching badge setup:", error);
      }
    };

    useEffect(() => {
      getEvent();
    }, []);

    return (
      <div ref={ref} style={{ display: "none" }}>
        <div
          className={`container flex flex-col items-center justify-center ${
            isCertificatePrinting && "rotate-90"
          }`}
        >
          <h1 className="text-3xl font-bold">{name}</h1>
          <p>{place}</p>
          <div
            style={{
              marginTop: badgeSetup.marginTop,
              marginBottom: badgeSetup.marginBottom,
              marginLeft: badgeSetup.marginLeft,
              marginRight: badgeSetup.marginRight,
            }}
          >
            <QRCodeSVG value={value} size={256} />
          </div>
        </div>
      </div>
    );
  }
);

export default QRCodePrintComponent;
