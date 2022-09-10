//Задача №1

function parseCount(meaning) {
  let unitsOfGoods = Number.parseInt(meaning);
  if (isNaN(unitsOfGoods)) {
    throw new Error("Невалидное значение")
    };
    return unitsOfGoods;
};

function validateCount(meaning) {
  try {
    return parseCount(meaning)
    } catch(error) {
        return error;
    } ;
};

//Задача №2

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if(a > (b + c) || b > (a + c) || c > (a + b)) {
      throw new Error("Треугольник с такими сторонами не существует")
};
};

getPerimeter() {
  return this.a + this.b + this.c;
};

getArea() {
  let p = this.getPerimeter() / 2;
  return parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
};
};

function getTriangle(a, b, c) {
  try {
    const triangle = new Triangle(a, b, c);
    triangle.getArea();
    NaN;
    return new Triangle(a, b, c)
} catch(error) {
    return {
      getArea: () => "Ошибка! Треугольник не существует",
      getPerimeter: () => "Ошибка! Треугольник не существует"
};
};
};
