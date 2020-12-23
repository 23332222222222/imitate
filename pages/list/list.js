 const fetch =require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category:null,
    bol:false,
    pageIndex: 0,
    pageSize: 20,
    totalCount: 0,
    hasMore: true,
    text:'',
    shops:[]
  },
  bol:function(){
    var bol= this.data.bol
    this.setData({
      bol:!bol,pageIndex: 0,
    })
  },
  searchHandler:function(){
   this.bol()
  },
  noHandler:function(){
    this.bol()
  },
  lodeMode:function(){
    let{pageIndex,pageSize,text}=this.data
    if(text) paeame.q = text
    var paeame={_page:++pageIndex,_limit:pageSize}
    return fetch(`categories/${this.data.category.id}/shops`,paeame).then(res=>{
      const totalCount=parseInt(res.header['X-Total-Count'])
      const hasMore=this.data.pageIndex*this.data.pageSize <totalCount
      const shops =this.data.shops.concat(res.data)
      this.setData({
        shops,totalCount,pageIndex,hasMore
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    fetch(`categories/${options.cat}`).then(res=>{
      this.setData({category:res.data})
      wx.setNavigationBarTitle({ title: res.data.name })
      this.lodeMode()
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