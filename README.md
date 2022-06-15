# 자바스크립트(타입스크립트) 디자인 패턴

## 목차

1. [싱글톤](#싱글톤)

# 싱글톤
- 싱글톤은 한 번 인스턴스화할 수 있고 전역적으로 액세스할 수 있는 클래스입니다.
- 이 단일 인스턴스는 응용 프로그램 전체에서 공유할 수 있으므로 싱글톤 패턴은 응용 프로그램의 전역 상태를 관리하는 데 적합합니다.

### 클래스를 사용하여 구성하기
- Counter 클래스로 싱글톤 패턴을 구현합니다.
    ```typescript
    let instance;
    let counter = 0;
    class Counter {
    
      constructor() {
        if (instance) {
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

### 장점
- 인스턴스를 하나로 제한하여 전역적으로 관리하면 많은 메모리 공간을 절약할 수 있습니다.

### 단점
- 실제 싱글톤은 안티패턴으로 간주됩니다.
- JavaScript에선 Class를 사용하여 구성할 필요가 없긴합니다.
    ```typescript
    let count = 0;
    
    const counter = {
      increment() {
        return ++count;
      },
      decrement() {
        return --count;
      }
    };
    
    Object.freeze(counter);
    export { counter };
    ```
- 참조로 전달하여 counter를 사용하면 count 값은 하나의 값으로 변경됩니다.
- 테스팅에 싱글톤 패턴이 사용되면 까다롭습니다.
  - 매번 새로운 인스턴스를 생성할 수 없기 때문에 모든 테스트는 이전 테스트의 전역 인스턴스 수정에 의존합니다.
  - 하나의 인스턴스로 여러테스트를 진행할 경우 테스트의 순서가 중요하며, 제대로 이루어지지 않을 가능성이 높습니다.
  - 테스트 진행 후에 인스턴스가 초기화 되어야 합니다.
- 모듈이 싱글톤 패턴인지 명확하지 않습니다.
  - 다른 모듈에서 싱글톤 패턴인지 모르고 가져다가 사용할 경우 의도와 다르게 동작할 수 있습니다.
- 싱글톤 패턴은 어플리케이션 전역에 같은 인스턴스가 사용됩니다.
  - 전역 변수를 갖는 것은 일반적으로 잘못된 설계 결정으로 간주됩니다.
  - 전역 범위 오염은 실수로 전역 변수 값을 덮어쓰게 되어 예기치 않은 많은 동작을 초래할 수 있습니다.
  - 전역 상태를 사용할 때 데이터 흐름을 이해하는 것은 애플리케이션이 성장하고 수십 개의 구성 요소가 서로 의존함에 따라 매우 까다로울 수 있습니다.

