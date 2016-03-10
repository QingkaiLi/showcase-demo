//import ComponentLibraries from "./component-list";
//
//class LibraryInfo {
//  constructor(libraries) {
//    this._addLibrary = this._addLibrary.bind(this);
//    this._addComponents = this._addComponents.bind(this);
//
//    this.componentLookup = {};
//    this.libraryLookup = {};
//    this.libraries = [];
//    this.components = [];
//    this.componentsWithImages = [];
//
//    for(var i in libraries) {
//      this._addLibrary(libraries[i])
//    }
//    for(var i in libraries) {
//      if(libraries[i].images) {
//        for(var compName in libraries[i].images) {
//          let comp = this.componentLookup[compName];
//          if(comp) {
//            comp.image = libraries[i].images[compName];
//            this.componentsWithImages.push(comp);
//          }
//        }
//      }
//    }
//  }
//
//  getComponent(name) {
//    return this.componentLookup[name];
//  }
//
//  getLibrary(name) {
//    return this.libraryLookup[name];
//  }
//
//  _addLibrary(library) {
//    this.libraries.push(library.name);
//    this.libraryLookup[library.name] = library;
//    if(library.metadata) {
//      library.metadata.images = library.images;
//      library.metadata.data = library.data;
//      library.metadata.name = library.name;
//      this._addComponents(library);
//    }
//  }
//  _addComponents(library) {
//    for(var c in library.metadata.components) {
//      let comp = library.metadata.components[c];
//      this.components.push(comp);
//
//      let name = comp.component || comp.componet || comp.displayName;
//      comp.library = library.metadata;
//      this.componentLookup[name] = comp;
//    }
//  }
//}
//
//LibraryInfo.singleton = new LibraryInfo(ComponentLibraries);
//
//export default LibraryInfo.singleton;
