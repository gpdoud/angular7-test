export class Menu {
  display: string;
  href: string;
  tip: string;

  constructor(d: string, h: string, t: string) {
    this.display = d;
    this.href = h;
    this.tip = t;
  }
}
