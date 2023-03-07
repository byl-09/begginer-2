let operations = [1000, -1100, 300, -500, 10000];
let start = 100;


function resultBalans(operations){
	let sum = 0;
	for (let element of operations) {	
	sum = sum + element;
}
console.log(`итоговый баланс равен = ${sum}`);
}

function fun2(operations) {
	let sum = 0;
	for (let element of operations) {
		sum = sum + element;
		if (sum < 0)
		{
		console.log(`false`);
		console.log(`Итоговый баланс равен: ${sum}`);
		break;
		}	
	}	
}

function fun3(operations) {
	
	let elemСonsumption = 0;
	let elemIncome = 0;
	let sumIncome = 0;
	let sumСonsumption = 0;
	for (let element of operations) {
		if (element > 0) {
			elemIncome = elemIncome + 1;
			sumIncome = sumIncome + element;
		}
		else if (element < 0) {
			elemСonsumption = elemСonsumption + 1;
			sumСonsumption = sumСonsumption + element;
		}
	}
	console.log(`Средняя сумма доходов: ${sumIncome / elemIncome}`);
	console.log(`Средняя сумма расходов: ${sumСonsumption / elemСonsumption}`);
}

fun3(operations);