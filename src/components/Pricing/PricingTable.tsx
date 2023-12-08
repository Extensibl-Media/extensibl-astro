import * as React from "react";
import DoubleCheck from "../../assets/double-check.svg";

const PricingTable = () => {
  const [memberAmount, setMemberAmount] = React.useState("0");
  const [price, setPrice] = React.useState("$2,997/mo");

  const pricingInfo: { [key: string]: string } = {
    "0": "$2,997/mo",
    "1": "$5,994/mo",
    "2": "$8,991/mo",
    "3": "$11,988/mo",
    "4": "$14,985/mo",
    "5": "Custom",
  };

  const calculatePrice = (amount: string) => {
    return pricingInfo[amount] || "Custom";
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMemberAmount = e.target.value;
    setMemberAmount(newMemberAmount);

    const newPrice = calculatePrice(newMemberAmount);
    setPrice(newPrice);
  };

  return (
    <div className="mt-12 border-2 border-brand-dark rounded-lg">
      <div className="border-b-2 border-brand-dark p-4 flex flex-col items-start bg-white rounded-t-lg">
        <p className="text-xl md:text-3xl font-bold">All Inclusive</p>
        <p className="text-sm md:text-lg mt-4 text-gray-400 font-semibold uppercase max-w-4xl">
          For fast-moving agencies, marketing teams & startups who need access
          to reliable on-demand design & dev talent to move even faster.
        </p>
        <input
          className="mx-auto mt-12 w-full md:w-3/4"
          type="range"
          value={memberAmount}
          max="5"
          onChange={(e) => handlePriceChange(e)}
        />
        <div className="flex justify-between w-full mx-auto md:w-3/4 mb-12">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6+</span>
        </div>
      </div>
      <div className="px-4 py-12 bg-brand-dark text-brand-background flex flex-col lg:flex-row lg:items-center">
        <ul className="md:text-xl lg:w-2/3 grid grid-cols-2 gap-4">
          <li className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 py-1 px-2 rounded-full">
              <img
                src={DoubleCheck.src}
                alt="Collaborate together icon"
                className="h-6 w-6"
              />{" "}
              <span>Unlimited Design Requests</span>
            </div>
          </li>
          <li className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 py-1 px-2 rounded-full">
              <img
                src={DoubleCheck.src}
                alt="Collaborate together icon"
                className="h-6 w-6"
              />{" "}
              <span>Unlimited Development Requests</span>
            </div>
          </li>
          <li className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 py-1 px-2 rounded-full">
              <img
                src={DoubleCheck.src}
                alt="Collaborate together icon"
                className="h-6 w-6"
              />{" "}
              <span>Unlimited Revisions</span>
            </div>
          </li>
          <li className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 py-1 px-2 rounded-full">
              <img
                src={DoubleCheck.src}
                alt="Collaborate together icon"
                className="h-6 w-6"
              />{" "}
              <span>Unlimited Brands</span>
            </div>
          </li>
          <li className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 py-1 px-2 rounded-full">
              <img
                src={DoubleCheck.src}
                alt="Collaborate together icon"
                className="h-6 w-6"
              />{" "}
              <span>Dedicated Project Manager</span>
            </div>
          </li>
          <li className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 py-1 px-2 rounded-full">
              <img
                src={DoubleCheck.src}
                alt="Collaborate together icon"
                className="h-6 w-6"
              />{" "}
              <span>Daily Updates & Progress Reports</span>
            </div>
          </li>
          <li className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 py-1 px-2 rounded-full">
              <img
                src={DoubleCheck.src}
                alt="Collaborate together icon"
                className="h-6 w-6"
              />{" "}
              <span>Pause or Cancel Anytime</span>
            </div>
          </li>
          <li className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 py-1 px-2 rounded-full">
              <img
                src={DoubleCheck.src}
                alt="Collaborate together icon"
                className="h-6 w-6"
              />{" "}
              <span>Scale Up or Down Anytime</span>
            </div>
          </li>
          <li className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 py-1 px-2 rounded-full">
              <img
                src={DoubleCheck.src}
                alt="Collaborate together icon"
                className="h-6 w-6"
              />{" "}
              <span>Monthly or Biweekly Options</span>
            </div>
          </li>
        </ul>
        <div className="mt-12 lg:mt-0 lg:mx-auto flex flex-col items-center">
          <span className="text-5xl lg:text-6xl font-bold">{price}</span>
          <a
            href="https://calendly.com/extensibl-media/discovery-call"
            className="grow w-full"
          >
            <button className="text-brand-dark font-bold mt-4 bg-brand-primary px-4 py-2 text-xl rounded-lg w-full">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
