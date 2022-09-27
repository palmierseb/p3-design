import { Messag } from '../typings'

export const fetchMessags = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getMessags`) 
  
  const data = await res.json()
  const messags: Messag[] = data.messags
    return messags
}