const date = new Date();
const dayWeek = date.getDay();
let dayWeekText;

switch (dayWeek) {
    case 0:
        dayWeekText = 'Sunday';
        break;
    case 1:
        dayWeekText = 'Monday';
        break;
    case 2:
        dayWeekText = 'Tuesday';
        break;
    case 3:
        dayWeekText = 'Wednesday';
        break;
    case 4:
        dayWeekText = 'Thursday';
        break;
    case 5:
        dayWeekText = 'Friday';
        break;
    case 6:
        dayWeekText = 'Saturday';
        break;
    default:
        dayWeekText = '';
        break;
}

console.log(dayWeek)
console.log(dayWeekText);