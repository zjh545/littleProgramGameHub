// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    friendMsgLists: [
      {"sex" : 0, "name" : "你好吗1", "pic": "", "game" : "你画我猜"},
      {"sex" : 1, "name" : "你好吗2", "pic": "", "game" : "你画我猜"},
      {"sex" : 0, "name" : "你好吗3", "pic": "", "game" : "你画我猜"},
      {"sex" : 0, "name" : "你好吗4", "pic": "", "game" : "你画我猜"},
      {"sex" : 0, "name" : "你好吗5", "pic": "", "game" : "你画我猜"},
      {"sex" : 0, "name" : "你好吗6", "pic": "", "game" : "你画我猜"},
      {"sex" : 0, "name" : "你好吗7", "pic": "", "game" : "你画我猜"},
      {"sex" : 0, "name" : "你好吗8", "pic": "", "game" : "你画我猜"}
    ],
    messageLists: [
      {"name": "玩家名字七个字", "sex":0, "pic" : ""},
      {"name": "玩家名字七个字", "sex":0, "pic" : ""},
      {"name": "玩家名字七个字", "sex":0, "pic" : ""},
      {"name": "玩家名字七个字", "sex":0, "pic" : ""}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '消息',
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