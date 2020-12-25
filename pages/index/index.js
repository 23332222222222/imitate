const fetch =require('../../utils/util')
Page({
  data: {
    slides:'',
    categories:''
  },
  onLoad:function(){
    fetch('slides').then(res=>{
      this.setData({
        slides:res.data
      })
    }),
    fetch('categories').then(res=>{
      this.setData({
        categories:res.data
      })
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    if(res.from==='menu'){
      console.log(res.target);
    }
    return{
      title:'本地宝',
      path:'/pages/index/index'
    }
  },
  onShareTimeline:function(){
    if(res.from==='menu'){
      console.log(res.target);
    }
    return{
      title:'本地宝',
      path:'/pages/index/index'
    }
  }
})
