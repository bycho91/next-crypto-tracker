
const Searchbar = ({changeTargetCoin, target}) => {
	return (
		<div className='w-full mt-[50px] mb-[50px] flex justify-center'>
			<input type="text" placeholder='Search Coins' className='rounded-lg p-4 text-lg focus:outline-none border border-gray-300 text-black w-1/5' value={target} onChange={e => changeTargetCoin(e.target.value)}/>
		</div>
	)
}

export default Searchbar
