import Head from 'next/head'
import Link from 'next/link';
import Navbar from '@components/Navbar';
import Searchbar from '@components/Searchbar';
import CoinList from '@components/CoinList';

export default function Home({filteredCoins}) {
  return (
    <div className="container">
      <Head>
        <title>CryptoCurrent</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Searchbar />
      <CoinList coins={filteredCoins} />
    </div>
  )
}


export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=false&price_change_percentage=7d');

  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins,
    }
  }
}