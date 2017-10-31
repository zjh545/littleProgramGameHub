// pages/myself/myself.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moduleLists: [
      {"id" : 1,"icon": "../../resource/my/my_icon_1.png", "title" : "买金币"},
      {"id" : 2,"icon": "../../resource/my/my_icon_2.png", "title" : "邀请"},
      {"id" : 3,"icon": "../../resource/my/my_icon_3.png", "title" : "游戏规则"}

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我',
      success: function(res) {
        // success
      }
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