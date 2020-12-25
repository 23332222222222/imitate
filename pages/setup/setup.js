// pages/setup/setup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switch:true
  },
  save:function(){
    wx.setStorageSync('key', this.data.switch)
  },
  changeHandler:function(e){
    console.log(e);
    this.setData({switch:e.detail.value})
    this.save()
    var pages=getCurrentPages()
    if (pages.length > 1) {
      //上一个页面实例对象
      var prePage = pages[pages.length - 2];
      //关键在这里  changeData为上一页的方法
      prePage.changeName(this.data.switch)
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    if(wx.getStorageSync('key')===0) return
    console.log(wx.getStorageSync('key'));
    this.setData({
      switch:wx.getStorageSync('key')
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})