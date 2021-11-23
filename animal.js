// Java类,通过类 实现继承
// class Animal {
//   private String name;
//   public void set(String name) {
//     this.name = name;
//   }
//   public String get() {
//     return this.name;
//   }
// }
// // 编写测试类
// public class Test {
//   public static void main(String[] args) {
//     Animal animal = new Animal();
//     animal.set('dog')
//     System.out.println(animal.get())
//   }
// }
// ==============================================
// js es5
// 创建Animal函数
function Animal() {
  // 设置私有变量
  this.name = '';
  this.set = function (a) {
    this.name = a;
  }
  this.get = function () {
    return this.name;
  }
}
// 创建animal的实例
var animal = new Animal();
animal.set('dog');
// console.log(animal.get())
// console.log(animal.name);


var parent = { p0: 0 };
parent.__proto__ = null;
console.log(parent.__proto__);
// var son = Object.create(parent);
var son = { p1: 1 };
son.__proto__ = parent;


son.p1 = 1
console.log(son.p0);// p0不是自身属性，从原型对象parent上找p0属性，为0
console.log(son.p1);// p1是自身属性，值为1
// 原型链 child{p1:1}--->parent{p0:0}--->null


// ==========================
// 用一个Dog函数来继承Animal函数
function Dog() {
  this.bark = function () {
    console.log('wangwang');
  }
}

//让函数的原型对象指向Animal函数实例,从一个函数指向一个对象，函数的原型对象
Dog.prototype = new Animal()
// 创建一个Dog函数的实例
var dog = new Dog()
dog.set('dog');
dog.get();
dog.bark();

