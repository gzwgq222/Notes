## 布局
### 三列布局
  - 左右中
    `
    推荐第一个
    `
    ```
    <div class="main">  
    <div class="left">left</div>
    <div class="right">right</div>
    <div class="center">center</div>
    </div>
    <!-- center 放在最后。left right 左右 float，定宽，main 设置 min-width 既可 -->
    ```
    ```
    <div class="main">
      <div class="center">圣杯布局</div>
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
    <!-- center拍最前面，center，left，right 都设置float:left, left设置margin:-100%,right 设置 margin:负自身长度, 使三者排在同一行, main 设置左右 padding。left，right通过想对定位将两者左右移到 main padding 设置的位置上 -->
    ```
    ```
    <div class="main">
      <div class="center">
        <div class='center-main'>双飞翼布局</div>
      </div>
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
    <!-- 前两步和圣杯布局一样，圣杯布局第三步是通过设置父元素 padding，移动 left，right 的位置实现，双飞翼布局通过给中间部分添加个子元素，设置子元素（center-main）的 padding 实现 -->
    ```
  - 上中下三行，头部200px高，底部200px高，中间自适应占满
    ```
    <div class="main">  
      <div class="top"></div>  
      <div class="center"></div>  
      <div class="bottom"></div>  
    </div>  
    ```
    ```
    .main{  
      width: 100%;  
    }  
    .top{  
      width: 100%;  
      height: 200px;  
      position: absolute;  
      top: 0;  
    }  
    .center{  
      width: 100%;  
      position: absolute;  
      top: 200px;  
      bottom: 200px;  
    }  
    .bottom{  
      width: 100%;  
      height: 200px;  
      position: absolute;  
      bottom: 0;  
    }  
    ```
