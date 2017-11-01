// pages/room/room.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay:false,
    currentTab:0,
    winWidth: 0,
    winHeight: 0,
    gameLists: [
      { "id": 100007, "lv": 37, "desc": "玩家太懒了，什么也没有留下。", "game": "你画我猜", "man": 3, "woman": 3 },
      { "id": 100009, "lv": 37, "desc": "玩家太懒了，什么也没有留下。", "game": "你画我猜", "man": 6, "woman": 0 },
      { "id": 100011, "lv": 37, "desc": "玩家太懒了，什么也没有留下。", "game": "你画我猜", "man": 3, "woman": 3 }
    ],
    roomLists: [
      { "id": 100001, "lv": 37, "desc": "玩家太懒了，什么也没有留下。", "game": "你画我猜", "man": 3, "woman": 3 },
      { "id": 100002, "lv": 37, "desc": "玩家太懒了，什么也没有留下。", "game": "你画我猜", "man": 3, "woman": 3 },
      { "id": 100003, "lv": 37, "desc": "玩家太懒了，什么也没有留下。", "game": "你画我猜", "man": 3, "woman": 3 }
    ]
  },

  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  swiperSwichNav:function(e) {
    var that = this;
    that.setData({
      // that.currentTab
      currentTab : e.detail.current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.setNavigationBarTitle({
      title: '包间',
      success: function(res) {
        // success
      }
    }) 
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if(this.data.currentTab == "0") {
      this.data.currentTab = "1";
    } else {
      this.data.currentTab = "0";
    }
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