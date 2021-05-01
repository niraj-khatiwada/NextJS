import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Description() {
  const router = useRouter()

  console.log(router)
  return (
    <>
      <Head>
        <title>NEXT JS</title>
      </Head>
      <div>Slug</div>
      <Link href={{ pathname: '/clients/[id]', query: { id: 'Niraj' } }}>
        Go to home
      </Link>
    </>
  )
}
