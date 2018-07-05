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
    //第一种： 直接提示然后自动消失的，用户不能操作
    // wx.showToast({
    //   title: '好的',
    //   icon: 'success',
    //   duration: 2000//持续的时间
    // })

    //第二种： 弹出选择框，用户可操作
    // wx.showActionSheet({
    //   itemList: ['选项一', '选项二', '选项三'],
    //   success: function (res) {
    //     if (!res.cancel) {
    //       console.log(res.tapIndex)//这里是点击了那个按钮的下标
    //     }
    //   }
    // })

    //加载中 然后自动消失
    // wx.showToast({
    //   title: '加载中',
    //   icon: 'loading',
    //   duration: 2000
    // })
    // setTimeout(function () {
    //   wx.hideToast()
    // }, 2000) 

    // 长的文本框
    // wx.showToast({
    //   title: '这里面可以写很多的文字，比其他的弹窗都要多！',
    //   icon: 'none',
    //   duration: 2000//持续的时间
    // })
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
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 2000
    })
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

  a: function (a) {
    wx.showModal({
      title: '不好意思哦',
      content: '这个只是测试版哦 亲亲^^',
      success: function (res) {
        if (res.confirm) {
        }
      }
    })
  },
    b: function (b) {
    wx.showModal({
      title: '不好意思哦',
      content: '猫猫也不卖哦 亲亲^^',
      success: function (res) {
        if (res.confirm) {
        }
      }
    })
  },
    c: function (c) {
          wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 2000
    })

    }  
     
     
  

})