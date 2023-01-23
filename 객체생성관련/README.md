[홈으로](https://github.com/JJongTaeng/design-pattern-js)

# 객체 생성 관련 디자인 패턴

## 싱글톤 패턴

인스턴스를 오직 한개만 제공하는 클래스

- 이 단일 인스턴스는 응용 프로그램 전체에서 공유할 수 있으므로 싱글톤 패턴은 응용 프로그램의 전역 상태를 관리하는 데 적합합니다.
- 시스템 런타임, 전역적인 환경세팅 등 인스턴스가 여러개일 때 발생하는 문제들이 있기 때문에 사용

### example javascript

```javascript
let instance;
class Counter {
  counter = 0;
  
  constructor() {
    if(instance) {
      throw new Error("You can only create one instance!"); // 인스턴스 생성 시 에러 발생
    }
    instance = this;
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

const singletonCounter = Object.freeze(new Counter()); // Object.freeze를 사용해서 업데이트, 추가, 삭제 불가능
export default singletonCounter;
```

### example typescript
```typescript
class Counter {

  private static instance: Counter;

  public counter:number;

  // new 클래스 구문 사용 제한을 목적으로
  // constructor() 함수 앞에 private 접근 제어자 추가
  private constructor() {
  }
  
  // 오직 getInstance() 스태틱 메서드를 통해서만
  // 단 하나의 객체를 생성할 수 있습니다.
  public static getInstance() {
    if (!Counter.instance) {
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

해당 형태의 싱긑톤 패턴은 스레드 세이프하지 않습니다. 
왜냐하면 if(!Counter.instance) 이 부분에서 다른 스레드가 동시에 평가를 내려서 새로운 Counter 인스턴스를 생성할 수 있기 때문입니다.
하지만 기본적으로 자바스크립트는 단일 스레드 환경이기 때문에 괜찮습니다.