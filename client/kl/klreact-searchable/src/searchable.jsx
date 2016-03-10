export default class Searchable {
  constructor(title, component, options = {}) {
    this.title = title;
    this.component = component;
    this.options = options;
  }
  get synonyms() {
    return this.options.synonyms;
  }
  render() {
    return this.component();
  }
}
