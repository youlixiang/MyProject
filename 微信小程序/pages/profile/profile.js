// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },
  // aabbcc: function (event) {
  //   console.log("点击了")
  //   if (input=""){
  //     wx.showToast({
  //       title: '请输入用户名和密码！',
  //       icon: 'none',
  //       duration: 2000//持续的时间
  //     })
  //   }
  //   else {
  //         wx.showToast({
  //     title: '成功',
  //     icon: 'success',
  //     duration: 2000//持续的时间
  //   })
  //   }

  b: function (b) {
    wx.showModal({
      title: '警告',
      content: '用户名/密码为空或错误',
      success: function (res) {
        if (res.confirm) {
        }
      }
    })
  }

})