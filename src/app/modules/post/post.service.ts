import { TPost } from './post.interface'
import { postModel } from './post.model'

const createPostIntoDB = async (payload: TPost) => {
  const result = await postModel.create(payload)
  return result
}

export const PostServices = {
  createPostIntoDB,
}
