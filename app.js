const {
  celsius_Para_Fahrenheit,
  horas_para_minutos,
  idade_em_dias,
  quilometros_em_metros,
  consumo_medio,
} = require('./conversores.js');

console.log(celsius_Para_Fahrenheit(30));
console.log(horas_para_minutos(2));
console.log(idade_em_dias(20));
console.log(quilometros_em_metros(3));
console.log(consumo_medio(500, 40));
