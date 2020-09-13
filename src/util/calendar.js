import { createElement, addClass, addId, setText } from './module.js';

function makeTitleDate(year, month) {
  const yearmonth = createElement('h2');
  yearmonth.innerText = `${year}년 ${month}월`;
  return yearmonth;
}

function makeDOW() {
  const dowDiv = createElement('div');
  ['일', '월', '화', '수', '목', '금', '토'].forEach((dow) => {
    const dowSpan = createElement('span');
    dowSpan.innerText = dow;
    dowDiv.appendChild(dowSpan);
  });
  return dowDiv;
}

function setClassToDOM(weekSpan, date, year, month) {
  const todayDate = new Date();

  const todayDay = todayDate.getDate();
  const todayMonth = todayDate.getMonth() + 1;
  const todayYear = todayDate.getFullYear();
  const isRestday =
    (todayDay <= date && todayMonth == month && todayYear == year) ||
    (todayYear <= year && todayMonth < month) ||
    todayYear < year;
  if (isRestday) {
    addClass(weekSpan, 'header__calendar-restday');
    addId(weekSpan, `${year}년 ${month}월 ${date}일`);
    return;
  }
  addClass(weekSpan, 'header__calendar-oldday');
}

function makeDays(calendar, year, month) {
  const lastDate = new Date(year, month, 0);
  const startDate = new Date(year, month - 1, 1);
  const lastDay = lastDate.getDate();
  const startDOW = startDate.getDay();

  const sixWeek = 6;
  const sevenDay = 7;

  let day = 1,
    dayCountStart = false;
  for (let i = 0; i < sixWeek; i++) {
    const weekDiv = createElement('div');
    for (let j = 0; j < sevenDay; j++) {
      const weekSpan = createElement('span');
      if (startDOW === j) dayCountStart = true;
      if (dayCountStart && day <= lastDay) {
        setClassToDOM(weekSpan, day, year, month);
        setText(weekSpan, day++);
        weekDiv.appendChild(weekSpan);
        continue;
      }
      weekDiv.appendChild(weekSpan);
    }
    calendar.append(weekDiv);
    if (day > lastDay) break;
  }
}

export function makeCalendar(year, month) {
  const calendar = createElement('li');

  calendar.append(makeTitleDate(year, month), makeDOW());
  makeDays(calendar, year, month);
  return calendar;
}

export function getNextDate(year, month) {
  if (month === 12) return [year + 1, 1];
  return [year, month + 1];
}

export function getPrevDate(year, month) {
  if (month === 1) return [year - 1, 12];
  return [year, month - 1];
}

export function compareDate(date1, date2) {
  const [year1, month1, day1] = date1.match(/(\d+)/g).map((d) => Number(d));
  const [year2, month2, day2] = date2.match(/(\d+)/g).map((d) => Number(d));

  const d1 = new Date(year1, month1 - 1, day1);
  const d2 = new Date(year2, month2 - 1, day2);
  return d1 >= d2;
}
