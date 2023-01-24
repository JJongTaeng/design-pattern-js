var Simple = /** @class */ (function() {
  function Simple() {
  }

  // 메소드 이름은 달라도 상관없다.
  Simple.getInstance = function() {
    return this.instance || (this.instance = new this());
  };
  return Simple;
}());
//# sourceMappingURL=singleton.js.map