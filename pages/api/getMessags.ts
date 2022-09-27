
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { Messag } from './../../typings'
import { groq } from 'next-sanity'

const feedQuery = groq`
*[_type == "message"] {
    _id,
    ...
  } | order(_createdAt desc)
  `


type Data = {
  messags : Messag[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
const messags: Messag[] = await sanityClient.fetch(feedQuery)

res.status(200).json({ messags })
}
