import { RequestHandler } from 'express'
import catchAsync from '../../utils/catchAsync'
import { UserServices } from './user.service'
import sendResponse from '../../utils/sendResponse'

const createUser: RequestHandler = catchAsync(async (req, res) => {
  const newUser = req.body
  const result = await UserServices.createUserIntoDB(newUser)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User is created successfully',
    data: result,
  })
})

const getAllUsers: RequestHandler = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUserFromDB()

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Users are retrieved successfully',
    data: result,
  })
})

const getSingleUser: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await UserServices.getSingleUserFromDB(id)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Single user retrieve successfully',
    data: result,
  })
})

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
}
