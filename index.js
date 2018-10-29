const returnFirstTwoDrivers = function (collection){
	
	arr =[...collection]
	elemests = arr.slice(0 ,2)
	return elemests
}

const returnLastTwoDrivers = function (collection){
	
	let arr =[...collection]
	let elemests = arr.slice(arr.length - 2 ,arr.length)
	return elemests
}

const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers]

function createFareMultiplier(num){
	 return function (value) {
    return num * value;
  }
}

function fareDoubler(value){

    return 2 * value;
  }

fareTripler = num => num*3


const fetchSpecifiedDrivers = function(arrayOfDrivers, fun){
	 return fun(arrayOfDrivers);
}