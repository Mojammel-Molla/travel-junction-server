import { RequestHandler } from 'express'
import sendResponse from '../../utils/sendResponse'
import catchAsync from '../../utils/catchAsync'
import { PostServices } from './post.service'

const createPost: RequestHandler = catchAsync(async (req, res) => {
  const newPost = req.body
  const result = await PostServices.createPostIntoDB(newPost)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Post is created successfully',
    data: result,
  })
})

const getAllPosts: RequestHandler = catchAsync(async (req, res) => {
  const result = await PostServices.getAllPostsFromDB()

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Posts are retrieved successfully',
    data: result,
  })
})

const getSinglePost: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await PostServices.getSinglePostFromDB(id)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Post Service retrieve successfully',
    data: result,
  })
})

export const postControllers = {
  createPost,
  getAllPosts,
  getSinglePost,
}
