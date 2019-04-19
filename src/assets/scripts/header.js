class Header {
  constructor(header) {
    this.window = wimdow;
    this.header = header;

    this.window.addEventListener('scroll', () => headerAnimation());
  }
  headerHeight() {
    this.header.style.height = '100px';
    this.header.style.transition =
      'all 2s $cubic-bezier(0.68, -0.55, 0.265, 1.55)';
  }
  headerHeightScrolled() {
    this.header.style.height = '50px';
    this.header.style.transition =
      'all 2s $cubic  -bezier(0.68, -0.55, 0.265, 1.55)';
  }
  headerAnimation() {
    if (this.window >= 80) {
      this.headerHeight();
    } else {
      this.headerHeightScrolled();
    }
  }
}
let header = document.querySelector('header', () => new Header(header));
