import Layout from "@components/Layout";
import Link from "next/link";
import { useState } from "react";
import ReactMarkdown from 'react-markdown';

const Target = ({ coin }) => {
  const [open, setOpen] = useState(false);


  return (
    <Layout>
      <div className="container w-4/5 mx-auto max-w-[1440px] ">
        <div className="w-full max-w-[1440px] mx-auto mt-[100px] flex border-b-[1px] border-gray-300 pb-3">
          <div className="left w-2/5 flex flex-col">
            <div className="flex flex-col space-y-3 mb-[50px]">
              <div className="info flex items-center space-x-2">
                <img
                  src={coin.image.large}
                  alt={coin.id}
                  className="w-[60px] h-[60px]"
                />
                <h1 className="text-3xl font-bold">{coin.name}</h1>
                <div className="rounded-md px-2 bg-[#c06014]">
                  <p className="uppercase text-white">{coin.symbol}</p>
                </div>
              </div>

              <div className="bottom-info flex items-center space-x-2">
                <p className="rounded-md px-2 bg-[#c06014] bg-opacity-80 text-white">
                  Rank #{coin.coingecko_rank}
                </p>
                {coin.hashing_algorithm && (
                  <p className="rounded-md px-2 bg-[#c06014] bg-opacity-80 text-white">
                    {coin.hashing_algorithm}
                  </p>
                )}
                <p className="rounded-md px-2 bg-[#c06014] bg-opacity-80 text-white">
                  ATH: ${parseFloat(coin.market_data.ath.usd).toFixed(2)}
                </p>
              </div>
            </div>

            {/* links for the coin */}
            <div className="flex space-x-2">
              {/* WEBSITE */}
              <a
                href={coin.links.homepage[0]}
                target="__blank"
                className="bg-[#536162] px-3 py-1 flex items-center rounded-lg text-white space-x-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-[18px] h-[18px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <p>Website</p>
                <svg
                  className="w-[18px] h-[18px]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              {/* COMMUNITY */}
              <div className="flex flex-col space-y-2 relative">
                <div
                  className="cursor-pointer bg-[#536162] px-3 py-1 flex items-center rounded-lg text-white space-x-1"
                  onClick={() => setOpen(!open)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-[18px] h-[18px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <p>Community</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-[18px] h-[18px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* MODAL */}
                {open && (
                  <div className="bg-black rounded-xl p-5 flex flex-col space-y-2 text-white font-bold absolute top-7 w-full text-md">
                    {coin.links.twitter_screen_name && (
                      <a
                        href={`https://twitter.com/${coin.links.twitter_screen_name}`}
                        target="__blank"
                        className="w-full flex justify-between items-center"
                      >
                        <p>Twitter</p>
                        <svg
                          className="w-[20px] h-[20px]"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                    {coin.links.facebook_username && (
                      <a
                        href={`https://facebook.com/${coin.links.facebook_username}`}
                        target="__blank"
                        className="w-full flex justify-between items-center"
                      >
                        <p>Facebook</p>
                        <svg
                          className="w-[20px] h-[20px]"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                    {coin.links.subreddit_url && (
                      <a
                        href={coin.links.subreddit_url}
                        target="__blank"
                        className="w-full flex justify-between items-center"
                      >
                        <p>Reddit</p>
                        <svg
                          className="w-[20px] h-[20px]"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="right w-3/5">
            {/* top info section */}
            <div className="main-price-info border-b-[1px] border-gray-300 pb-4">
              <h4 className="text-md text-gray-500">{`Current Price (${coin.symbol.toUpperCase()})`}</h4>
              <div className="flex space-x-2 items-center">
                <h1 className='text-5xl font-bold'>${parseFloat(coin.market_data.current_price.usd).toFixed(2).toLocaleString()}</h1>
                <div className={`${coin.market_data.price_change_percentage_7d < 0 ? 'bg-red-400' : 'bg-green-500'} text-white rounded-lg px-2 py-1 flex items-center space-x-1`}>
                  <p>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>
                  <div className="div arrow">
                    {coin.market_data.price_change_percentage_7d < 0 ? (
                      <svg className='w-[20px] h-[20px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                      </svg>
                    ) : (
                      <svg className='w-[20px] h-[20px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    )}
                  </div>
                </div>					
              </div>
            </div>

            {/* bottom info section */}
            <div className="grid grid-cols-4 gap-2">

              <div className="market-cap-info mt-5 flex flex-col space-y-1 border-r-[1px] border-gray-300">
                <p className="text-md text-gray-500 tracking-tighter">Market Cap</p>
                <p className='font-bold'>${coin.market_data.market_cap.usd?.toLocaleString()}</p>
                <p className={`${coin.market_data?.market_cap_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-500'} font-bold`}>
                  {coin.market_data.market_cap_change_percentage_24h?.toFixed(2)}%
                </p>
              </div>
              
              {coin.market_data.fully_diluted_valuation.usd ? (
                  <div className="market-cap-info mt-5 flex flex-col space-y-1 border-r-[1px] border-gray-300">
                    <p className="text-md text-gray-500 tracking-tighter">Fully Diluted Mkt Cap</p>
                    <p className='font-bold'>${coin.market_data.fully_diluted_valuation.usd.toLocaleString()}</p>
                    <p className={`${coin.market_data.market_cap_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-500'} font-bold`}>
                      {coin.market_data.market_cap_change_percentage_24h.toFixed(2)}%
                    </p>
                  </div>

              ) : (
                <div className="market-cap-info mt-5 flex flex-col space-y-1 border-r-[1px] border-gray-300">
                  <p className="text-lg text-red-500 tracking-tighter">N/A</p>
                </div>
              )

              }

              <div className="market-cap-info mt-5 flex flex-col space-y-1 border-r-[1px] border-gray-300 space-y-5">
                <div>
                  <p className="text-md text-gray-500 tracking-tighter">Volume (24h)</p>
                  <p className='font-bold'>${coin.market_data.total_volume?.usd.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-md text-gray-500 tracking-tighter">Volume / Market Cap</p>
                  <p className='font-bold'>{(coin.market_data.total_volume?.usd / coin.market_data.market_cap?.usd).toFixed(5)}</p>
                </div>
              </div>
              
              <div className="market-cap-info mt-5 flex flex-col space-y-1 space-y-5">
                <div>
                  <p className="text-md text-gray-500 tracking-tighter">Circulating Supply</p>
                  <p className='font-bold tracking-tighter'>{`${coin.market_data.circulating_supply?.toLocaleString()} ${coin.symbol.toUpperCase()}`}</p>
                  <div className='bg-gray-300 rounded-full w-[98%] h-3 relative'>
                    <span className='h-3 rounded-full bg-gray-500 display-block absolute' style={{width: `${(coin.market_data.circulating_supply / coin.market_data.total_supply) * 100}%`}}></span>
                  </div>
                </div>
                <div>
                  <p className="text-md text-gray-500 tracking-tighter">Max Supply</p>
                  <p className='font-bold'>{`${coin.market_data.total_supply?.toLocaleString()} ${coin.symbol.toUpperCase()}`}</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="description w-full p-5">
          <h1 className="text-3xl">Description:</h1>
          <ReactMarkdown children={coin.description.en} allowDangerousHtml/>
        </div>
      </div>
    </Layout>
  );
};

export default Target;

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);

  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
};
