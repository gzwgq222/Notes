# Mongodb

## 安装
 - 💖💖[下载地址](https://www.mongodb.com/download-center/community)💖💖
 ## win10
  - 选择合适的版本

    ![image](https://upload-images.jianshu.io/upload_images/6078022-955fe942b044af18.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
  - 可以默认安装一直next，也可点击 "Custom(自定义)" 按钮来设置你的安装目录
  ![image](https://upload-images.jianshu.io/upload_images/6078022-1c72b4d436b321c9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

  - mongodb compass moongodb可视化工具，挺好用的，建议安装

    ![image](https://upload-images.jianshu.io/upload_images/6078022-6ed168c4f6a8533b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    
  - 创建数据目录

      MongoDB将数据目录存储在 db 目录下。但是这个数据目录不会主动创建，我们在安装完成后需要创建它。请注意，数据目录应该放在根目录下(如C盘 或 D盘的根目录)
      ```
      cd c:\
      mkdir db
      ```
  - 设置为全局环境变量
      mongodb已经安装到本地，把mongodb变量添加到全局变量，这样我们在任何目录下都可以使用mongodb命令
      找到mongodb安装路径，复制安装路径

    ![image](https://upload-images.jianshu.io/upload_images/6078022-71936eca09932346.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

  - 点击计算机属性, 进入环境变量配置
  
    ![image](https://upload-images.jianshu.io/upload_images/6078022-ba3cde075cf43121.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

  - 把复制的安装路径添加进去

    ![image](https://upload-images.jianshu.io/upload_images/6078022-7bb523fef474f369.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
        
    mongodb已配置到全局变量

    ```
    mongod
    ```
    启动服务试试
    最后输入信息如下则表示启动成功

    ![image](https://upload-images.jianshu.io/upload_images/6078022-281a19f839122e31.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)