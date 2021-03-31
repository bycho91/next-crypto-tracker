import Coin from "@components/Coin";

const CoinList = ({ coins }) => {
  return (
    <div className="w-4/5 max-w-[1440px] mx-auto">
      <div className="top-labels grid grid-cols-4 gap-2 w-full mx-auto text-center border-b-[1px] border-gray-300 pb-2 text-[#424642] mb-2 px-4">
        <h1 className="text-left font-bold text-2xl">Name</h1>
        <h1 className="text-right font-bold text-2xl">Price</h1>
        <h1 className=" text-right font-bold text-2xl">% Change(24h)</h1>
        <h1 className="text-right font-bold text-2xl">Market Cap</h1>
      </div>

      {/* coins */}
      {coins.map((coin) => (
        <Coin key={coin.id} data={coin} />
      ))}
    </div>
  );
};

export default CoinList;
