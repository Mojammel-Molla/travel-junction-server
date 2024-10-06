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
    message: 'Booking is created successfully',
    data: result,
  })
})

export const postControllers = {
  createPost,
}
