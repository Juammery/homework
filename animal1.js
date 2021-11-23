// class Animal1 {
//   public name: string;
//   public set(name): void {
//     this.name = name
//   }
//   public get(name): String {
//     return this.name;
//   }
// }
// // 继承
// class Dog1 extends Animal1 {
//   public bark(): void {
//     console.log('wangwang')
//   }
// }
// // 多态
// class Cat {
//   // 声明公有函数bark
//   public bark(): string;
//   public bark(sound: string): string;
//   // 实现公有函数bark
//   public bark(sound?: string): string {
//     if (Object.toString.call(sound) === '[object String]') {
//       return sound;
//     } else {
//       return '...'
//     }
//   }
// }

class Phone {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }
  call() {
    console.log('打电话');
  }
}
class SmartPhone extends Phone {
  constructor(brand, price, color, size) {
    super(brand, price);
    this.color = color;
    this.size = size;
  }
  music() {
    console.log('听音乐');
  }
}
let chuizi = new SmartPhone('锤子', 3999, 'black', '5.5');
console.log(chuizi);