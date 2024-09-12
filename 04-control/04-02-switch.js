/**
 * if문이 참/거짓(boolean)으로 코드의 실행 여부를 결정한 반면
 * ! 값으로 코드의 실행 여부 결정
 */
let month = 2;
let monthName;

switch (month) {
    case 9:
        monthName = "9월";
        break;
    case 10:
        monthName = "10월";
        break;
    case 11:
        monthName = "11월";
        break;
    case 12:
        monthName = "12월";
        break;
    default:
        monthName = "해당 없음"
}

console.log(monthName);