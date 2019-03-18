# ES6
  [ECMAScript 6 入门](http://es6.ruanyifeng.com/#README)
## const let
  **const声明的时候必须初始化，如声明的为基础数据类型则不可以该更数据，声明的为复杂数据（array，object）可更改内部属性。const 实际保证的并不是值不能改动，而是变量指向的那个内存地址保存的数据不能改动。对应简单数据类型，为值不变，复杂数据类型为指针不变**
  ```
  const PI = 3.1415;
  PI // 3.1415

  PI = 3;
  // TypeError: Assignment to constant variable.
  ```
  **const声明的常量不存在变量提升，存在暂时性死亡区，不可重复声明**
  ```
  if (true) {
    console.log(MAX); // ReferenceError
    const MAX = 5;
  }
  ```
  **let不存在变量提升，存在暂时性死亡区**
  ```
  // var 的情况
  console.log(foo); // 输出undefined
  var foo = 2;

  // let 的情况
  console.log(bar); // 报错ReferenceError
  let bar = 2;
  ```
  ```
  var tmp = 123;
  if (true) {
    tmp = 'abc'; // ReferenceError
    let tmp;
  }
  ```
  **在for循环中**

  *var 声明的变量在全局范围内有效，多次循环的 i 的指向同一个 i ，最后 i 为 10*
  ```
  var a = [];
  for (var i = 0; i < 10; i++) {
    a[i] = function () {
      console.log(i);
    };
  }
  a[6](); // 10
  ```
  *因为 let  具有块级作用域，每次循环都是重新声明一个 i 变量，for 循环设置循环变量的部分是父作用域，循环体内是单独的子作用域*
  ```
  var a = [];
  for (let i = 0; i < 10; i++) {
    a[i] = function () {
      console.log(i);
    };
  }
  a[6](); // 6
  ```
## 变量的解构赋值
- 数组解构赋值。数组的元素是按次序排列的，变量的取值由位置决定


  **属于模式匹配，只要等号两边的模式一样，左边的变量就会被赋予对应的右边的值**
  ```
  const [a, b, c] = [1, 2, 3]
  a // 1
  b // 2
  c // 3
  let [head, ...tail] = [1, 2, 3, 4];
  head // 1
  tail // [2, 3, 4]
  ```
  **如果解构不成功，变量的值就为undefined**
  ```
  let [foo] = [];
  let [bar, foo] = [1];
  foo // undefined
  ```
  **设置默认值, 使用 === 判断一个位置是否有值，只有完全等于 undefined 时设置的默认值才会生效**
  ```
  let [foo = true] = [];
  foo // true

  let [x, y = 'b'] = ['a']; // x='a', y='b'
  let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
  let [x = 1] = [null] // x = 1 因为 null 不严格等于 undefined
  ```
- 对象解构赋值。对象解构赋值是根据属性名取得
  **变量名和属性名必须同名才能取到正确的值**
  ```
  let { bar, foo } = { foo: "aaa", bar: "bbb" };
  foo // "aaa"
  bar // "bbb"

  let { baz } = { foo: "aaa", bar: "bbb" };
  baz // undefined、
  ```
- 字符串的解构赋值
  **字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。**
  ```
  const [a, b, c, d, e] = 'hello';
  a // "h"
  b // "e"
  c // "l"
  d // "l"
  e // "o"
  ```
  **因为类似数组还有个 length 属性，所以可以对该属性进行解构**
  ```
  let {length: len} = 'hello'
  len // 5
  ```
### 用途
- 交换变量的值
  ```
  const x = 'a',
        y = 'b'
  let [x, y] = [y, x]
  ```
- 从函数返回值中取得多个值
  **函数只能返回已个值，当有多个值需要返回时，我们可以把值放在一个数组或对象中，取得返回值后再进行解构赋值**
  ```
  function example() {
    return [1, 2, 3];
  }
  let [a, b, c] = example();

  function example() {
    return {
      foo: 1,
      bar: 2
    };
  }
  let { foo, bar } = example();
  ```
- 函数参数的定义
  ```
  // 参数是一组有次序的值
  function f([x, y, z]) { ... }
  f([1, 2, 3]);

  // 参数是一组无次序的值
  function f({x, y, z}) { ... }
  f({z: 3, y: 2, x: 1});
  ```
- JSON数据的提取
  **解构赋值对提取 JSON 对象中（api请求返回）的数据，尤其有用**
  ```
  let jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
  };

  let { id, status, data: number } = jsonData;

  console.log(id, status, number);
  // 42, "OK", [867, 5309]
  ```
- 函数参数的默认值
  ```
  function getData ({name: 'gong', age: '18'} = {}) {
    do something
  }
  ```
## 字符串的扩展
- 模板字符串
  ```
  const hello = 'hello world'
  const msg = `say ${hello}`
  ```
- includes() 返回布尔值，在字符串中是否找到了参数字符串
  ```
  const name = 'hello, world'
  name.includes('hello) // true
  ```