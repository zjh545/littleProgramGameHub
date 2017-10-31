// pages/game/game.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gameList: [
      { "name" : "你画我猜", "bg" : "../../resource/game/game_item_bg_1.png", "num" : 1000},
      { "name": "谁是卧底", "bg": "../../resource/game/game_item_bg_2.png", "num": 2000 },
      { "name": "你问我猜", "bg": "../../resource/game/game_item_bg_3.png", "num": 3000 }
    ],
    iconLists : [
      { "name" : "我的包间", "icon" : "../../resource/game/game_icon_my_room.png", "num" : 1000},
      { "name" : "建临时房间", "icon" : "../../resource/game/game_icon_create_room.png", "num" : 1000},
      { "name" : "进入指定房间", "icon" : "../../resource/game/game_icon_search_into.png", "num" : 1000}
    ],
    advertiseLists : [
      {"id" : 1, "bg":"../../resource/game/advertise/advertise1.png"},
      {"id" : 2, "bg":"../../resource/game/advertise/advertise2.png"},
      {"id" : 3, "bg":"../../resource/game/advertise/advertise3.png"},
    ]
  },

  /*
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '游戏中心',
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