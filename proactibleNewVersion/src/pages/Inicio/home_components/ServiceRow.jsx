import React from "react";
import fabricacion from "../../../assets/images/images/gallery/fabricacion.jpg";

export default function ServiceRow() {
  return (
    <div className="bg-pink-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-2">
      <div className="bg-slate-50 flex flex-col items-center justify-center p-2">
        <div className="w-64 h-64 rounded-full overflow-hidden mb-2">
          <img
            src={fabricacion}
            alt="protesis"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-green-500 p-4">a</div>
      </div>
      <div className="bg-slate-50 flex flex-col items-center justify-center p-2">
        <div className="w-64 h-64 rounded-full overflow-hidden mb-2">
          <img
            src={fabricacion}
            alt="protesis"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-green-500 p-4">a</div>
      </div>
      <div className="bg-slate-50 flex flex-col items-center justify-center p-2">
        <div className="w-64 h-64 rounded-full overflow-hidden mb-2">
          <img
            src={fabricacion}
            alt="protesis"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-green-500 p-4">a</div>
      </div>
      <div className="bg-slate-50 flex flex-col items-center justify-center p-2">
        <div className="w-64 h-64 rounded-full overflow-hidden mb-2">
          <img
            src={fabricacion}
            alt="protesis"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-green-500 p-4">a</div>
      </div>
    </div>
  );
}
