import React from 'react'
import { useRouter } from 'next/router'

export default function Description() {
  const router = useRouter()

  console.log(router)
  return <div>Client description</div>
}
