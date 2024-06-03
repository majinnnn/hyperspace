"use client";

import React, { useState } from "react";
import Popup from "../components/Popup";

const PopupPage: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
      <div className="block">
        <button
          onClick={() => setIsPopupOpen(true)}
          className="px-6 py-4 bg-cosmic-gradient text-white"
          style={{
            WebkitBoxReflect:
              "below 2px linear-gradient(transparent, rgba(0, 0, 0, .3))",
          }}
        >
          OPEN POPUP
        </button>

        {isPopupOpen && (
          <Popup onClose={() => setIsPopupOpen(false)}>
            <h2 className="text-xl font-bold">Pop-Up Component</h2>
            <p>This is a pop-up implemented as a component.</p>
          </Popup>
        )}
      </div>
    </div>
  );
};

export default PopupPage;
