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

## CentOS7
- 可以本地下载好，通过XFTP等工具上传到服务器

  ![image](https://upload-images.jianshu.io/upload_images/6078022-93fddaa9a7a87a70.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 此次直接在服务器上下载
  ```
  curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-4.0.6.tgz # 下载
  tar -zxvf mongodb-linux-x86_64-4.0.6.tgz # 解压
  mv  mongodb-linux-x86_64-4.0.6/ /usr/local/mongodb # 将解压包移动到指定到目录 
  ```
- MongoDB的数据存储在data目录的db目录下，但是这个目录在安装过程不会自动创建，所以你需要手动创建data目录，并在data目录中创建db目录
  ```
  cd /data
  mkdir db
  ```

 - `将mongodb添加到全局变量中`
    最开始参考[菜鸟教程](http://www.runoob.com/mongodb/mongodb-linux-install.html)的设置方式，
    ```
    export PATH=/usr/local/mongodb/bin:$PATH
    ```
    然后启动mongod服务是好，等到后来关闭当前命令行窗口，再打开时发现mongod启动不了，提示 
    ```
    not command
    ```
    卸载mongodb，重安装后PATH设置路径，在当前命令行业还是可以启动，新开个命令行窗口，依然无法启动，
    这个问题困扰了好久，查了N多资料后才发现PATH设置的变量是临时变量, 在.bash_profile 文件中设置才是永久的全局变量

    - PATH设定方法(临时)

      export PATH=$PATH:/usr/local/mongodb/bin
    - PATH设定方法(永久)

      单个用户

      上记临时方法的命令行，追加到home目录下的 .bash_profile文件的最后一行

      全部用户

      上记临时方法的命令行，追加到/etc/profile文件的最后一行
      
      ps:这个文件是login的时候才生效的，因此需要马上生效的情况，请执行以下命令
      ```
      source .bash_profile
      ```
      ```
      source /etc/profile
      ````
    - 运行mongod查看是否设置成功
      ```
       mongod
       ```

## 完毕