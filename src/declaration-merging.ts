import { Observable } from './module_prac/moduleA'

interface Box {
  height: number
  width: number
}

interface Box {
  scale: number
}

let box: Box = {
  height: 2,
  width: 3,
  scale: 4
}

interface DocumentDemo {
  createElement(tagName: any): Element
}

interface DocumentDemo {
  createElement(tagName: 'div'): Element
}

interface DocumentDemo {
  createElement(tagName: string): Element
  createElement(tagName: 'span'): Element
}

class DocumentDemoClass implements DocumentDemo {
  createElement(tagName: 'span'): Element
  createElement(tagName: 'div'): Element
  createElement(tagName: string): Element
  createElement(tagName: any): Element
  createElement(tagName: any) {
    return new Element()
  }
}

namespace Animal {
  let hasMuscles = true

  export function animalHasMuscles() {
    return hasMuscles
  }
}

namespace Animal {
  export function doAnimalHasMuscles() {
    // return hasMuscles // Error
    return animalHasMuscles() // ok
  }
}

class Album {
  label = new Album.AlbumLabel() // 内部类
  value = Album.staticValue // 静态属性
}

namespace Album {
  export class AlbumLabel {
    name: string = 'default label'
  }

  export const staticValue = '123'
}

function jQuery(arg: string): any {
  return `using jQuery('${arg}')`
}

namespace jQuery {
  export namespace fn {
    export const version: string = '0.0.1'
  }
}

let $ = jQuery
console.log(jQuery('body'), jQuery.fn.version)

enum Color {
  Red,
  Blue,
  Green
}

namespace Color {
  export function mixColor(colorName: 'Yellow' | 'White') {
    if (colorName === 'Yellow') {
      return Color.Red + Color.Green
    } else {
      return Color.Red + Color.Blue + Color.Green
    }
  }
}

declare module './module_prac/moduleA' {
  interface Observable<T> {
    map<U>(f: (item: T) => U): Observable<U>
  }
}

Observable.prototype.map = function<T, U>(f: (item: T) => U) {
  const newValues = this.values.map(item => f(item))
  return new Observable<U>(newValues)
}

let obs: Observable<any> = new Observable([1, 2, 3])
console.dir(obs)
obs = obs.map(item => 'No. ' + item)
console.log(obs)

export {}
