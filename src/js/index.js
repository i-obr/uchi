/* eslint no-param-reassign: ["error", { "props": false }] */
import getRandomNumber from './math';

const step = 39; // длинна одного деления

const operandOutOne = document.querySelector('#inputOut-1');
const operandOutTwo = document.querySelector('#inputOut-2');
const operandInOne = document.querySelector('#inputIn-1');
const operandInTwo = document.querySelector('#inputIn-2');
const operandResult = document.querySelector('#result');
const graphOne = document.querySelector('.scale__graph--1');
const graphTwo = document.querySelector('.scale__graph--2');

const result = getRandomNumber(11, 14);
const valueOperandOutOne = getRandomNumber(6, 9);
const valueOperandOutTwo = result - valueOperandOutOne;

operandOutOne.value = valueOperandOutOne;
operandOutTwo.value = valueOperandOutTwo;
graphOne.style.width = `${valueOperandOutOne * step}px`;
graphTwo.style.width = `${valueOperandOutTwo * step}px`;

if (!graphTwo.classList.contains('hidden')) {
  graphTwo.classList.add('hidden');
}

const isValid = (arg1, arg2) => +arg1 === +arg2;

/**
Функция обработки события ввода
@param {number} value - значение которое необходимо ввести;
@param {Element} operandIn - поле ввода текущего значения;
@param {Element} operandOut - поле с правильным значением;
@param {Element} graph - график;
@param {Element} nextOperand - следующий элемент, которому нужно передать focus();
*/
const handler = (value, operandIn, operandOut, graph, nextOperand) => {
  if (isValid(value, operandIn.value)) {
    operandIn.disabled = true;
    operandIn.classList.remove('error');
    operandOut.classList.remove('warning');
    if (graph.classList.contains('hidden')) {
      graph.classList.remove('hidden');
    }
    nextOperand.disabled = false;
    nextOperand.focus();
  } else {
    operandIn.classList.add('error');
    operandOut.classList.add('warning');
  }
};

operandInOne.addEventListener('input', () =>
  handler(valueOperandOutOne, operandInOne, operandOutOne, graphTwo, operandInTwo));

operandInTwo.addEventListener('input', () =>
  handler(valueOperandOutTwo, operandInTwo, operandOutTwo, graphTwo, operandResult));

operandResult.addEventListener('input', () => {
  if (isValid(operandResult.value, result)) {
    operandResult.classList.remove('error');
    operandResult.disabled = true;
  } else {
    operandResult.classList.add('error');
  }
});
