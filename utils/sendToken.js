export const sendToken = (res, user, message, statusCode = 200) => {
  let token = user.GetJWTToken();
  const options = {
    expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    // secure:true,
    sameSite: "none",
  };
  res.status(statusCode).cookie("Token", token, options).json({
    success: true,
    user,
    message,
  });
};
