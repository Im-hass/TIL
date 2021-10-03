# Prototype(프로토타입)
> 어떠한 객체가 만들어지기 위해 객체의 모태가 되는 **원형**이다.

- **일반적인 객체 생성 방식 :** 속성은 생성자, 메서드는 프로토타입에 정의한다.
- JavaScript는 **Prototype을 이용한 복사를 통해 새로운 객체를 생성**한다.
- 원형에 **메서드를 추가** 시켜주는 것이다.

## 1-1. **예제**

### 생성

```jsx
// 생성자에서 속성 정의
function Test(a, b) {
	// 속성 ...
}

// 메서드 정의
Test.prototype.x = function() { ... };
Test.prototype.y = function() { ... };

// 객체 생성
let test = new Test(1, 2);
```

### Person 객체에 메서드 추가

```jsx
// 생성자 속성 정의
function Person(name, age) {
	this.name = name;
	this.age = age;
}

// prototype을 이용한 Person 메서드 정의
Person.prototype.isAudlt = function () {
	return this.age > 18;
};

// 객체 생성
const p1 = new Person("bob", 26);
const p2 = new Person("alice", 10);

// 객체 메서드 호출
console.log(p1.isAudlt()); // true
console.log(p2.isAdult()); // false
```
