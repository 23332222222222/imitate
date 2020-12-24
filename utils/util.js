module.exports=(url,data)=>{
  return new Promise((res,rej)=>{
    wx.request({
      url: `https://locally.uieee.com/${url}`,data,
      success:res,
      fail:rej
    })
  })
}
