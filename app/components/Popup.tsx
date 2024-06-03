"use client";

import React from "react";

type PopupProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const Popup: React.FC<PopupProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/20 flex items-center justify-center">
      <div
        className="relative bg-black border-2 border-white/30 p-10 pr-32 shadow-lg"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-cosmic-gradient text-white flex items-center justify-center"
        >
          CLOSE
        </button>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
