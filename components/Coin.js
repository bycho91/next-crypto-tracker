
const Coin = ({data}) => {
	return (
		<div className='w-full max-w-[1080px] border-b-[1px] border-gray-400 h-[80px] flex items-center hover:bg-gray-200 justify-between'>
			<div className="name flex items-center w-1/4">
				<img src={data.image} alt={data.name} className='w-[30px] h-[30px] mr-4'/>
				<h1 className='text-2xl'>{data.name}</h1>
				<p className='uppercase ml-1 text-gray-400'>{data.symbol}</p>
			</div>

			<div className="price text-right w-1/4">
				${data.current_price.toLocaleString()}
			</div>

			<div className="percentChange text-right w-1/4">
				{data.price_change_percentage_24h < 0 ? (
					<p className="text-red-400">{data.price_change_percentage_24h.toFixed(2)}%</p>
				) : (
					<p className="text-green-500">{data.price_change_percentage_24h.toFixed(2)}%</p>
				)}
			</div>

			<div className="marketCap text-right w-1/4">
				${data.market_cap.toLocaleString()}
			</div>
		</div>
	)
}

export default Coin
