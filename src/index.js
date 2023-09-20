/*task 1*/
function getPrimesFromArray(array) {

  const isPrime = (value) => {
    let isPrime = true;
    if (value<=1) return false;
    for (let i=2; i<=value/2; i++) {
      if (value % i === 0) isPrime = false;
    }
    return isPrime;
  }

  return array.filter((element) => isPrime(element));
}
/*test:*/
const array = [2,4,5,20,1,13];
console.log('Task 1 - primes from array: ',getPrimesFromArray(array));

/*task 2:*/
function groupNotificationBySource(arrayOfNotifications) {
  return result = arrayOfNotifications.reduce((accumulator, notification) => {
    const {source} = notification;

    if (!accumulator[source]) {
      accumulator[source] = [];
    }

    accumulator[source].push(notification);

    return accumulator;
  }, {})
}

const notifications = [
  { text: 'Alice', source: 'facebook', date: '19/09/2023' },
  { text: 'Bob', source: 'facebook', date: '19/09/2023' },
  { text: 'Charlie', source: 'telegram', date: '19/09/2023' },
];
console.log('Task 2 - group by source: ', groupNotificationBySource(notifications));
/*
{
  facebook: [
              { text: 'Alice', source: 'facebook', date: '19/09/2023' }, 
              { text: 'Bob', source: 'facebook', date: '19/09/2023' }
            ],
  telegram: [{ text: 'Charlie', source: 'telegram', date: '19/09/2023' }]
}
*/

/*task 3:*/
function groupByArray(array, group) {
  return result = array.reduce((accumulator, element) => {
    const key = element[group];

    if (!accumulator[key]) {
      accumulator[key] = [];
    }

    accumulator[key].push(element);

    return accumulator;
  }, {})
}

const arrayTask3 = [
  { text: 'Alice', source: 'facebook', date: '19/09/2023' },
  { text: 'Bob', source: 'facebook', date: '19/09/2023' },
  { text: 'Charlie', source: 'telegram', date: '19/09/2023' },
  { text: 'Bob', source: 'instagram', date: '21/09/2023' },
];
console.log('task3 - group by source: ', groupByArray(arrayTask3, 'source'));
console.log('task3 - group by date: ', groupByArray(arrayTask3, 'date'));
console.log('task3 - group by text: ', groupByArray(arrayTask3, 'text'));