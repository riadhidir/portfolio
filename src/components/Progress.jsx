import React from "react";

function Progress({ title, percentage }) {
    return (
        <div className="w-full">
            <div className="inline-flex w-full justify-between ">
                <p className="font-bold text-white">{title}</p>
                <p className=" text-[rgba(255,255,255,0.3)]">{percentage}%</p>
            </div>
            {/* progress bar container */}
            <div className="rounded-full border-2 border-[#444444]  p-[2px]">
                {/* the progress bar */}
                <div
                    className={` h-1 bg-blue-500 rounded-full `}
                    style={{ width: `${percentage}%` }}
                >
                    {" "}
                </div>
            </div>
        </div>
    );
}

export default Progress;
