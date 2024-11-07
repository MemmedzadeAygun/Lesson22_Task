
let monthNumber=+prompt("Enter the month number: ");

switch (monthNumber) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Month number cannot be more than 12.");
        break;
}

let date=prompt("Enter the correct date format int the form of 'YYYY.MM.DD'");
let splitDate=date.split(".");
let year=parseInt(splitDate[0]);
let day=parseInt(splitDate[2]);
let month=parseInt(splitDate[1]);

if (day>31) {
    console.log("Month number cannot be more than 31.");
}
else if(month<1 || month>12) {
    console.log("Month number cannot be more than 12 or less than 1");
}
else{

    if (month==1) {
        console.log(day+" "+"January"+" "+year+"-cu il");
    }
    else if (month==2) {
        console.log(day+" "+"February"+" "+year+"-cu il");
    }
    else if (month==3) {
        console.log(day+" "+"March"+" "+year+"-cu il");
    }
    else if (month==4) {
        console.log(day+" "+"April"+" "+year+"-cu il");
    }
    else if (month==5) {
        console.log(day+" "+"May"+" "+year+"-cu il");
    }
    else if (month==6) {
        console.log(day+" "+"June"+" "+year+"-cu il");
    }
    else if (month==7) {
        console.log(day+" "+"July"+" "+year+"-cu il");
    }
    else if (month==8) {
        console.log(day+" "+"August"+" "+year+"-cu il");
    }
    else if (month==9) {
        console.log(day+" "+"September"+" "+year+"-cu il");
    }
    else if (month==10) {
        console.log(day+" "+"Octber"+" "+year+"-cu il");
    }
    else if (month==11) {
        console.log(day+" "+"November"+" "+year+"-cu il");
    }
    else if (month==12) {
        console.log(day+" "+"December"+" "+year+"-cu il");
    }
  
}
