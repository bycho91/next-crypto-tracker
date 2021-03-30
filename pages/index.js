import Head from 'next/head'
import Link from 'next/link';
import Searchbar from '@components/Searchbar';
import CoinList from '@components/CoinList';
import {useState, useEffect} from 'react';
import Layout from '@components/Layout';

export default function Home({filteredCoins}) {

  const [targetCoin, setTargetCoin] = useState('');

  const changeTargetCoin = (target) => {
    setTargetCoin(target);
  }


  const finalCoins = filteredCoins.filter(coin => {
    return coin.name.toLowerCase().includes(targetCoin.toLowerCase()) || coin.symbol.toLowerCase().includes(targetCoin.toLowerCase());
  })

  return (
    <Layout>
      <Searchbar changeTargetCoin={changeTargetCoin} target={targetCoin} />
      <CoinList coins={finalCoins} />
    </Layout>
  )
}


export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=7d');

  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins,
    }
  }
}