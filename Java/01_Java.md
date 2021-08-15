# Java란?

썬 마이크로시스템즈에서 개발한 **객체지향 프로그래밍 언어.**
<br><br>


## **특징**

1. 자바가상머신(JVM)만 설치하면 컴퓨터의 **운영체제에 상관없이 작동함**.(즉, **운영체제에 독립적**).
2. 기본 자료형을 제외한 모든 요소들이 **객체로 표현**.
3. 객체 지향 개념의 특징인 **캡슐화, 상속, 다형성**이 잘 적용된 언어.
4. Garbage Collector를 통한 **자동적인 메모리 관리.**
5. **멀티쓰레드**(Multi-thread)를 지원.
<br>

## 기본적인 코드 구조

```java
// [package 이름 명시 (필수는 아님)]
package myPackage;

// [import할 패키지 명시]
import java.io.*;

// [주요 클래스 구현]
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, world!");
    }
}

// [부차적 클래스 및 함수 구현]
```
- 확장자 명은 *.java 이다.
- **하나의 \*.java 파일** 안에는 **하나의 주요 클래스만 정의**되어야 한다.
- 클래스 선언 시에 **해당 \*.java 파일과 동일한 이름으로 주요 클래스 이름**을 정해야 한다.
- 부차적 클래스의 이름을 정할 때에는 상관없다.
<br>

## 문법

- **기본적인 문법**들은 **C와 거의 동일**하다. (추가 예정)

    for-문, while-문, switch문, if-else if-else문, 산술 연산자 등.

    자바에서 **포인터는** 제공하지 않으므로 **제외.**
<br>

## 참고

[여기](https://goddaehee.tistory.com/120) : 정의, 특징

[여기](https://namu.wiki/w/Java/%EB%AC%B8%EB%B2%95) : 코드 구조, 문법
