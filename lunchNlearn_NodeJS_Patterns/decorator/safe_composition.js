function decorate(component) {
    const proto = Object.getPrototypeOf(component)
    
    function Decorator(component) {
      this.component = component
    }
  
    Decorator.prototype = Object.create(proto)
  
    // new method
    Decorator.prototype.teleport = function() {
      console.log("woosh!")
    }
  
    // delegated method
    Decorator.prototype.slash = function() {
      return this.component.slash.apply(this.component, arguments)
    }
  
    return new Decorator(component)
}

module.exports = decorate