class Counter {
  counter = 0;
  useConstructor = false;

  constructor() {
    if(!this.useConstructor) {
      throw new Error("You can only create one instance!"); // 인스턴스 생성 시 에러 발생
    }
  }

  static getInstance() {
    return this.instance || (this.instance = new this(false));
  }

  getCount() {
    return this.counter;
  }

  increment() {
    return ++this.counter;
  }

  decrement() {
    return --this.counter;
  }
}

//
// const singletonCounter = Object.freeze(new Counter()); // Object.freeze를 사용해서 업데이트, 추가, 삭제 불가능
// export default singletonCounter;

export default Counter;