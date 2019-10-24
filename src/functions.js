export function getProfit (USD, oldUSD) {
  return ((USD - oldUSD) / (oldUSD / 100)).toFixed(2);
}
const dayOfWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
const monthOfYear = ['янв', 'фев', 'март', 'апр', 'май', 'июнь', 'июль', 
  'авг', 'сент', 'окт', 'нояб', 'дек'];

export function getChartData (period, pricePeriod) {
  const data = [];
  const labels = [];

  pricePeriod.forEach(obj => {
    data.push(obj.close);
    const date = new Date(obj.time * 1000);
    switch (period) {
    case 'day':
      labels.push(date.getHours() + 'h00');
      break;
    case 'week':
      labels.push(dayOfWeek[date.getDay()]);
      break;
    case 'month':
      labels.push(monthOfYear[date.getMonth()] + ' ' + date.getDate());
      break;
    }
  });
  return (
    {
      datasets: [{
        label: '',
        data,
        borderColor: 'rgb(139,101,218)',
        pointRadius: 0,
        lineTension: 0,
        borderWidth: 1,
        backgroundColor: 'rgba(139,101,218,0.1)',
        
      }],
      labels,
      
    }
  );
}

//   var chartData = {
//     datasets: [{
//       data: [45, 25, 20, 10],
//     }],
//     labels: ['Red', 'Blue', 'Purple', 'Yellow', 'white']
// };