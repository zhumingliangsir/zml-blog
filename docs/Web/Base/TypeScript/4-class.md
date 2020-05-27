---
title: 类
---

## 1-关于

::: tip

- 以前：我们一般都是通过原型继承的方式去实现可复用的组件
- 现在：用的是基于类的继承并且对象是由类构建出来的

```ts
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");
```

类的继承

```ts
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
```

- 类从基类中继承了属性和方法
- `Dog` 是一个 派生类
- 派生自 `Animal` 基类
- 派生类通常被称作 `子类`，基类通常被称作 `超类`。

```ts
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
```

:::

## 公共修饰符(public)

::: tip
TypeScript 里，成员都默认为 public

```ts
class Animal {
  public name: string;
  public constructor(theName: string) {
    this.name = theName;
  }
  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
```

:::

## 私有修饰符(private)

::: tip
当成员被标记成 private 时，它就不能在声明它的类的外部访问。比如：

```ts
class Animal {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

new Animal("Cat").name; // 错误: 'name' 是私有的.
```

- TypeScript 使用的是结构性类型系统。
- 当我们比较两种不同的类型时，并不在乎它们从何处而来，
- 如果所有成员的类型都是兼容的，我们就认为它们的类型是兼容的

```ts
class Animal {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

class AnimalSon extends Animal {
  constructor() {
    super("AnimalSon");
  }
}

class Employee {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

let animal = new Animal("Goat");
let rhino = new AnimalSon();
let employee = new Employee("Bob");

animal = rhino;
animal = employee; // 错误: Animal 与 Employee 不兼容.
```

- 这个例子中有 `Animal` 和 `AnimalSon` 两个类，
- `AnimalSon` 是 `Animal` 类的子类。 还有一个 `Employee` 类，其类型看上去与 `Animal` 是相同的。
- 我们创建了几个这些类的实例，并相互赋值来看看会发生什么。
- 因为 `Animal` 和 `AnimalSon` 共享了来自 `Animal` 里的私有成员定义 `private name: string`，因此它们是`兼容`的。
- 然而 `Employee` 却不是这样。当把 `Employee` 赋值给 `Animal` 的时候，得到一个错误，说它们的类型不兼容。
- 尽管 `Employee` 里也有一个私有成员 `name`，但它明显不是 `Animal` 里面定义的那个。
  :::

## 保护修饰符(protected)

:::tip

- `protected` 修饰符与 `protected` 修饰符的行为很相似
- 但有一点不同， `protected` 成员在派生类中仍然可以访问。

```ts
class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // 错误
```

- 注意，我们不能在 Person 类外使用 name，
- 但是我们仍然可以通过 Employee 类的实例方法访问，
- 因为 Employee 是由 Person 派生而来的。
- 构造函数也可以被标记成 protected。
- 这意味着这个类不能在包含它的类外被实例化，但是能被继承。

```ts
class Person {
  protected name: string;
  protected constructor(theName: string) {
    this.name = theName;
  }
}

// Employee 能够继承 Person
class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.
```

:::

## 只读修饰符(readonly)

:::tip

- 你可以使用 `readonly` 关键字将属性设置为只读的。
- 只读属性必须在声明时或构造函数里被初始化。

```ts
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
```

:::

## 存取器(get/set)

:::tip

- 不使用存取器

```ts
class Employee {
  fullName: string;
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  console.log(employee.fullName);
}
```

- 使用存取器

```ts
let passcode = "secret passcode";

class Employee {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode == "secret passcode") {
      this._fullName = newName;
    } else {
      console.log("Error: Unauthorized update of employee!");
    }
  }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  alert(employee.fullName);
}
```

总结：只带有 `get` 不带有 `set` 的存取器自动被推断为 `readonly`
:::

## 静态属性(static)

:::tip

- 到目前为止，我们只讨论了类的实例成员，那些仅当类被实例化的时候才会被初始化的属性。
- 我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。
- 在这个例子里，我们使用 static 定义 origin，因
- 为它是所有网格都会用到的属性。
- 每个实例想要访问这个属性的时候，都要在 origin 前面加上类名。
- 如同在实例属性上使用 this.前缀来访问属性一样，
- 这里我们使用 Grid.来访问静态属性。

```ts
class Grid {
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number) {}
}

let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
```

:::

## 抽象类(abstract)

:::tip

- 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。
- 不同于接口，抽象类可以包含成员的实现细节。
- abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法。

```ts
abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log("roaming the earch...");
  }
}
```

- `抽象类中的抽象方法不包含具体实现并且必须在派生类中实现`。
- 抽象方法的语法与接口方法相似。 两者都是定义方法签名但不包含方法体。
- 然而，抽象方法必须包含 abstract 关键字并且可以包含访问修饰符。

```ts
abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log("Department name: " + this.name);
  }

  abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing"); // 在派生类的构造函数中必须调用 super()
  }

  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }

  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}

let department: Department; // 允许创建一个对抽象类型的引用
department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
department.generateReports(); // 错误: 方法在声明的抽象类中不存在
```

:::

## 高级技巧

### 构造函数

:::tip

- 当你在 TypeScript 里声明了一个类的时候，实际上同时声明了很多东西。 首先就是类的 实例的类型。

```ts
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter: Greeter;
greeter = new Greeter("world");
console.log(greeter.greet());
```

这里，我们写了 let greeter: Greeter，意思是 Greeter 类的实例的类型是 Greeter。
:::

## 把类当做接口使用

:::tip

- 类定义会创建两个东西：类的实例类型和一个构造函数。
  因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。

```ts
class Point {
  x: number;
  y: number;
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };
```

:::
