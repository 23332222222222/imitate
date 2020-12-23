module.exports=(url)=>{
  return new Promise((res,rej)=>{
    wx.request({
      url: `https://locally.uieee.com/${url}`,
      success:res,
      fail:rej
    })
  })
}
