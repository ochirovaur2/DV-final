let elements = {
	DOM:{
		listOfCountries: document.querySelector('.listOfCountries'),
		sum: document.querySelector('.sum'),
		list: document.querySelector('.list'),
		button: '#main-btn',
		output: document.querySelector(".output"),
		text: document.querySelector("#text")
	},
	calc: {
		sum: 0,
		sum0fMonth: 0
	},
	other:{
		space: " ",
		months: ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
		years: ['2017', '2018', '2019', '2020', '2021', '2022']
	}
}


document.querySelector(`${elements.DOM.button}`).onclick = function() {
	let infoToCalc, arrOfinfoToCalc;

	if(infoToCalc = elements.DOM.text.value){

		// Making array from recieved data 
		arrOfinfoToCalc = splitString(infoToCalc, elements.other.space);

		view.renderLiOfCountries(arrOfinfoToCalc);
		
		view.renderLiPerMonth(infoToCalc);

		view.clearInput();
		
		view.renderTotal();

		sum0fMonth = 0;

	} else {
		alert('Please enter data')
	}
	
	
}


function splitString(stringToSplit, separator) {
	let arrayOfStrings = stringToSplit.split(separator);
	return arrayOfStrings;
}


const view = {
	renderLiPerMonth: (infoToCalc) => {
		let li;

		elements.other.months.forEach((el)=> {
				
			if(infoToCalc.includes(el) ){
				let arr, index, year, FY, FYyear;
				
				arr = splitString(infoToCalc, elements.other.space);
				index = arr.indexOf(el)
				year = arr[index + 1];
				FY = arr[index + 2];
				FYyear = arr[index + 3];
			

				li = `<li>${year} ${el} ${FY} ${FYyear}: ${elements.calc.sum0fMonth}</li>`
				
			}
			
		});

		

		elements.DOM.list.insertAdjacentHTML('beforeend', li);
	},
	renderLiOfCountries:(arrOfinfoToCalc) => {
		for(let i = 0; i < arrOfinfoToCalc.length; i++) {

			if(arrOfinfoToCalc[i] == "DV1" || arrOfinfoToCalc[i] == "DV2" || arrOfinfoToCalc[i] == "DV3") {

			
				let li = `<li>${arrOfinfoToCalc[i]}: ${arrOfinfoToCalc[i + 1]} (${arrOfinfoToCalc[i + 2]})</li>`
				elements.DOM.listOfCountries.insertAdjacentHTML('beforeend', li)
				let num = +arrOfinfoToCalc[i + 1];
				elements.calc.sum+= num;
				elements.calc.sum0fMonth += num;
			}
			
		}
	},
	clearInput: ()=> {
		elements.DOM.text.value = "";
	},
	renderTotal: ()=> {
		elements.DOM.sum.innerHTML = elements.calc.sum;
	}
}




