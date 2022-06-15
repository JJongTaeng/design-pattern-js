class Simple {
  private static instance: Simple

  private constructor () {
  }

  // 메소드 이름은 달라도 상관없다.
  public static getInstance () {
    return this.instance || (this.instance = new this())
  }
}