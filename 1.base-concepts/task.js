"use strict"

function solveEquation(a, b, c) {
  // let sum = 0;
  // код для задачи №1 писать здесь

  const D = (Math.pow(b, 2))-(4*a*c);

  if (D === 0) {

    return [-b/(2*a)];
  }

  if (D < 0) {

    return [];
  }

  return [(-b + Math.sqrt(D) )/(2*a), (-b - Math.sqrt(D) )/(2*a)];
}

// solveEquation(a, b, c)

// function calculateTotalMortgage(percent, contribution, amount, date) {
//  let totalAmount;

  // код для задачи №2 писать здесь
  
//  if (isNaN(+percent)) {

//    return `Параметр процентная ставка содержит неправильное значение ${percent}`
//  }

//  if (isNaN(+contribution)) {

//    return `Параметр Первоначальный взнос содержит неправильное значение ${contribution}`
//  }

//  if (isNaN(+amount)) {

//    return `Параметр Общая стоимость содержит неправильное значение ${amount}`
//  }

//  if (isNaN(+date)) {

//    return `Параметр Срок содержит неправильное значение ${date}`
//  }

//  const creditBody = amount - contribution;
//  const currentDate = (new Date(date).getFullYear() - new Date().getFullYear()) * 12 + (new Date(date).getMonth() - new Date().getMonth()) + 1;
  

//  return totalAmount;
//}
