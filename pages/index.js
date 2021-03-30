import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CryptoCurrent</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          <Link href='/contact'>
            <a>Click here to contact</a>
          </Link>
        </p>
      </main>

      <Footer />
    </div>
  )
}
