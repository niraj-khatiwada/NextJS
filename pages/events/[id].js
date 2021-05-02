import Link from 'next/link'

export default function Home({ effect_entries, error }) {
  console.log(effect_entries)
  if (error) {
    return <p>Something went wrong</p>
  }

  //   if (!effect_entries) {
  //     return <h1>Loading...</h1>
  //   }

  return (
    <>
      {effect_entries?.map((item) => (
        <>
          <p>{item?.effect}</p>
        </>
      ))}
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const { id } = params
  const properties = {
    props: {
      effect_entries: null,
      error: false,
    },
    revalidate: 5,
  }

  try {
    const _response = await fetch(`https://poklleapi.co/api/v1/ability/${id}`)
    const response = await _response.json()
    console.log('response', JSON.stringify(response, null, 2))

    properties.props.effect_entries = response?.effect_entries
  } catch (error) {
    console.log('Error', error)
    properties.props.error = true
  }
  return properties
}
