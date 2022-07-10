
//=====Задача №1. Форматтер чисел
function parseCount(forParsing) {

  if (isNaN(Number.parseInt(forParsing))) {    
    throw new Error("Невалидное значение");
  } else {

  return Number.parseInt(forParsing);
  }
}


function validateCount(forParsing) {
  try { 

    if  (parseCount(forParsing)) {
      return parseCount(forParsing);
    }
  
  } catch(error) {
    return error;
  }
}

//=====Задача №2. Треугольник
class Triangle {
  constructor(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if ((a < 0) && (b < 0) && (c < 0)) {
      throw new Error("Треугольник с такими сторонами не существует");
    } 

    if ((a+b) < c) {
      throw new Error("Треугольник с такими сторонами не существует");
    } 
    if ((a+c) < b) {
        throw new Error("Треугольник с такими сторонами не существует");
    } 
    if ((b+c) < a) {
        throw new Error("Треугольник с такими сторонами не существует");
    } 
  }
 
  getPerimeter() {

    return this.a + this.b + this.c;
  }

  getArea(){
    let Sq = this.getPerimeter() * 0.5;
    const area = Number(Math.sqrt(Sq*(Sq - this.a)*(Sq - this.b)*(Sq - this.c)).toFixed(3));

  return area;
  }
}

function getTriangle(aa,bb,cc) {
try {

  return new Triangle(aa,bb,cc);
} catch(error) {

  return new class otherTriangle {

    getArea() {

      return "Ошибка! Треугольник не существует";
    }

    getPerimeter() {

      return "Ошибка! Треугольник не существует";
    }
  }
  }
}

