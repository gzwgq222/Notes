## this
### this指向
- 在ES5中，this的指向始终坚持一个原理：this指向最后调用他的那个对象

  例1
  ```
  const name = 'windowsName'
    function a() {
      const name = 'Cherry'
      console.log(this.name) // windowsName  
      console.log('inner:' + this) // window  
    }
    a() // window调用函数a
  ```
  例2
  ```
  const name = 'windowsName'
  const a = {
      name: 'Cherry',
      fn : function () {
        console.log(this.name) // Cherry
      }
  }
  a.fn()    // 对象a调用fn方法
  ```
  例3
  ```
  const name = 'windowsName'
  const a = {
      name: 'Cherry',
      fn : function () {
        console.log(this.name) // Cherry
      }
  }
  window.a.fn()    // 还是对象a最后调用fn方法
  ```
  例4
  ```
  const name = 'windowsName'
  const a = {
      name: 'Cherry',
      fn : function () {
        console.log(this.name) // windowsName
      }
  }
  const otherFun = a.fn // a对象的fn方法赋值给otherFun，但是此时还没有执行该方法
  otherFun() // 执行otherFun，此时this指向window
  ```
  例5
  ```
  const name = 'windowsName'
  function fn() {
    const name = 'Cherry'
    innerFunction()
    function innerFunction() {
      console.log(this.name)     // windowsName
    }
  }
  fn() // innerFunction()是作为一个函数执行的，没有挂载在任何对象上，所以this指向window
  ```
### 改变this指向
  - bind bind方法创建一个新的函数，当被调用时，将其this关键字设置为设置的值。多用在事件绑定中，如react事件中绑定this。
  - call fn.call(obj, args)
  - apply fn.apply(obj, [args])
  - 箭头函数
  - const that = this
  - 构造函数