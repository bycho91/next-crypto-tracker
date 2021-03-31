import Coin from "@components/Coin";

const CoinList = ({ coins }) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="top-labels grid grid-cols-4 gap-2 w-full mx-auto text-center border-b-[1px] border-[#536162] pb-2 text-[#424642]">
        <h1 className="text-left font-bold text-3xl">Name</h1>
        <h1 className="text-right font-bold text-3xl">Price</h1>
        <h1 className=" text-right font-bold text-3xl">% Change(24h)</h1>
        <h1 className="text-right font-bold text-3xl">Market Cap</h1>
      </div>

      {/* coins */}
      {coins.map((coin) => (
        <Coin key={coin.id} data={coin} />
      ))}
    </div>
  );
};

export default CoinList;
