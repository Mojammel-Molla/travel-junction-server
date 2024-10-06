import { TPost } from './post.interface'
import { PostModel } from './post.model'

const createPostIntoDB = async (payload: TPost) => {
  const result = await PostModel.create(payload)
  return result
}

const getAllPostsFromDB = async () => {
  const result = await PostModel.find()
  return result
}

const getSinglePostFromDB = async (id: string) => {
  const result = await PostModel.findOne({ _id: id })
  return result
}

export const PostServices = {
  createPostIntoDB,
  getAllPostsFromDB,
  getSinglePostFromDB,
}
