import Layout from "@components/Layout";
import Link from "next/link";
import { useState } from "react";

const Target = ({ coin }) => {
  const [open, setOpen] = useState(false);

  return (
    <Layout>
      <div className="container w-full max-w-[1440px] mx-auto mt-[100px]">
        <div className="left w-2/5 flex flex-col">
          <div className="flex flex-col space-y-5 mb-[50px]">
            <div className="info flex items-center space-x-2">
              <img
                src={coin.image.large}
                alt={coin.id}
                className="w-[80px] h-[80px]"
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
                ATH: ${coin.market_data.ath.usd.toLocaleString()}
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
              <a
                href="#"
                className="bg-[#536162] px-3 py-1 flex items-center rounded-lg text-white space-x-1"
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
              </a>

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

        <div className="right w-3/5"></div>
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
