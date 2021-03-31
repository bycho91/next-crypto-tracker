import Link from "next/link";

const Coin = ({ data }) => {
  return (
    <Link href="/coin/[id]" as={`/coin/${data.id}`}>
      <a>
        <div className="w-full max-w-[1440px] rounded-lg shadow-lg h-[80px] flex items-center hover:bg-gray-200 justify-between mb-2 px-4">
          <div className="name flex items-center w-1/4">
            <img
              src={data.image}
              alt={data.name}
              className="w-[40px] h-[40px] mr-4"
            />
            <h1 className="text-2xl font-bold">{data.name}</h1>
            <p className="uppercase ml-1 text-gray-500">{data.symbol}</p>
          </div>

          <div className="price text-right w-1/4 text-xl">
            ${((parseFloat(data.current_price)).toFixed(2)).toLocaleString()}
          </div>

          <div className="percentChange text-right w-1/4 text-xl">
            {data.price_change_percentage_24h < 0 ? (
              <p className="text-red-400">
                {data.price_change_percentage_24h.toFixed(2)}%
              </p>
            ) : (
              <p className="text-green-500 text-xl">
                {data.price_change_percentage_24h.toFixed(2)}%
              </p>
            )}
          </div>

          <div className="marketCap text-right w-1/4 text-xl">
            ${data.market_cap.toLocaleString()}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Coin;
