export class Ship {
  private name: string;
  private color: string;
  private logo: string;

  public getName() {
    return this.name;
  }

  public getColor() {
    return this.color;
  }

  public getLogo() {
    return this.logo;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setColor(color: string) {
    this.color = color;
  }

  public setLogo(logo: string) {
    this.logo = logo;
  }

  public toString() {
    return `
    Ship
      name = ${this.name}
      color = ${this.color}
      logo = ${this.logo}
    `
  }
}