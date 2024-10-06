import { Types } from 'mongoose'

export type TPost = {
  title: string
  content: string
  images: string[]
  category: string
  upVotes: number
  downVotes: number
  author: Types.ObjectId
  isPremium: boolean
  createdAt: Date
}
