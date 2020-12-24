 const fetch =require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category:null,
    bol:true,
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
      bol:!bol
    })
  },
  searchHandler:function(){
   this.bol()
  },
  noHandler:function(){
    this.bol()
  },
  lodeMode:function(){
    if(!this.data.hasMore) return
    let{pageIndex,pageSize,text}=this.data
    const params = { _page: ++pageIndex, _limit: pageSize }
    // console.log(params);
    if(text) params.q = text
    return fetch(`categories/${this.data.category.id}/shops`, params).then(res=>{
      // console.log(res.header['x-total-count']);
      const totalCount=parseInt(res.header['x-total-count'])
      const hasMore=this.data.pageIndex*this.data.pageSize <totalCount
      // console.log(hasMore,this.data.pageIndex);
      const shops =this.data.shops.concat(res.data)
      this.setData({
        shops,totalCount,pageIndex,hasMore
      })
    })
  },
  inputHandler:function(e){
    // console.log(e.detail.value);
    if(!e.detail.value) return
    this.setData({
      text:e.detail.value,
      pageIndex: 0,
      totalCount: 0,
      hasMore: true,
      shops:[]
    })
    this.lodeMode().then(res=>{
      this.setData({hasMore:false})
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
    this.setData({
      pageIndex: 0,
      totalCount: 0,
      hasMore: true,
      text:'',
      shops:[]
    })
    this.lodeMode().then(wx.stopPullDownRefresh())
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.lodeMode()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})