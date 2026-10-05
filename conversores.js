function celsius_Para_Fahrenheit(celsius) {
  return (fahrenheit = (9 / 5) * celsius + 32);
}
function horas_para_minutos(horas) {
  return horas * 60;
}
function idade_em_dias(ano) {
  return ano * 365;
}
function quilometros_em_metros(quilometros) {
  return quilometros * 1000;
}
function consumo_medio(distacia, litros) {
  return distacia / litros;
}

module.exports = {
  celsius_Para_Fahrenheit,
  horas_para_minutos,
  idade_em_dias,
  quilometros_em_metros,
  consumo_medio,
};
