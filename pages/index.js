import Link from 'next/link'
import Image from 'next/image'

export default function Home({ events }) {
  console.log(events)
  return (
    <>
      <div id="image">
        <Image
          src="/river.jpg"
          width={400}
          height={200}
          priority
          objectFit="cover"
          className="image"
          //   layout="fill"
        />
      </div>
      {events?.map((item) => (
        <Link
          href={{ pathname: '/events/[id]', query: { id: 0 } }}
          key={item?.slot}
        >
          {item?.ability?.name}
        </Link>
      ))}
    </>
  )
}

export async function getStaticProps() {
  const properties = {
    props: {
      events: null,
    },
    revalidate: 180,
  }

  try {
    const _response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const response = await _response.json()
    console.log('response', JSON.stringify(response, null, 2))

    properties.props.events = response?.abilities
  } catch (error) {
    console.log('Error', error)
  }
  return properties
}
