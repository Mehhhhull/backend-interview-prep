import asyncHandler from '../utils/asyncHandler.js';

const registerUser=asyncHandler( async(req,res)=>{
  //get user details from frontend
  //validation- not empty fields
  //check if user already exsists: using username,email or any one!!
  //check for images, check for avatar(as its compulsary)
  //upload image to cloudinary,check if avatar is uploaded successfully or not cause its compulsary
  //create user object- create entry in db
  //remove password and refresh token from response
  //check for user creation
  //return response to frontend


  //it is used to get data from form and json
  const {fullName,username,email,password}=req.body;


} )

export {registerUser}