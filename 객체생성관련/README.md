[홈으로](https://github.com/JJongTaeng/design-pattern-js)

# 객체 생성 관련 디자인 패턴

## 싱글톤 패턴

인스턴스를 오직 한개만 제공하는 클래스

- 이 단일 인스턴스는 응용 프로그램 전체에서 공유할 수 있으므로 싱글톤 패턴은 응용 프로그램의 전역 상태를 관리하는 데 적합합니다.
- 시스템 런타임, 전역적인 환경세팅 등 인스턴스가 여러개일 때 발생하는 문제들이 있기 때문에 사용

### example typescript

```typescript
class Counter {

  private static instance: Counter;

  public counter: number;

  // new 클래스 구문 사용 제한을 목적으로
  // constructor() 함수 앞에 private 접근 제어자 추가
  private constructor() {
  }

  // 오직 getInstance() 스태틱 메서드를 통해서만
  // 단 하나의 객체를 생성할 수 있습니다.
  public static getInstance() {
    if(!Counter.instance) {
      Counter.instance = new Counter();
    }
    return Counter.instance;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}
```

해당 형태의 싱긑톤 패턴은 스레드 세이프하지 않습니다. 왜냐하면 if(!Counter.instance) 이 부분에서 다른 스레드가 동시에 평가를 내려서 새로운 Counter 인스턴스를 생성할 수 있기 때문입니다.
하지만 기본적으로 자바스크립트는 단일 스레드 환경이기 때문에 괜찮습니다.

## 팩토리 메소드 패턴

Factory Method Pattern (팩토리 메소드 패턴) 은 생성 패턴 중 하나로 객체를 생성할 때 어떤 클래스의 인스턴스를 만들 지 서브 클래스에서 결정하게 합니다.

- 다양한 구현체가 있고, 그 중에서 특정한 구현체를 만들 수 있는 다양한 팩토리(Creator)를 제공할 수 있습니다.

### 장단점
장점: 수정에 닫혀있고 확장에는 열려있는 OCP 원칙을 지킬 수 있다는 점
단점: 간단한 기능을 사용할 때보다 많은 클래스를 정의해야 하기 때문에 코드량이 증가합니다.