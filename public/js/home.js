/* global window fetch */
/* eslint-disable no-undef */
const days = selectAll('.days');
const months = selectAll('.months');
const upcomingTitle = selectAll('.upcoming-title');
const upcomingFirst = selectAll('.upcoming-first');
const upcomingSecond = selectAll('.upcoming-Second');
const startDate = selectAll('.start-date');
const endDate = selectAll('.end-date');
const hoursText = selectAll('.hours-text');
const duration = select('.duration-time');
const speaker = selectAll('.speaker');
const speakerName = selectAll('.speaker-name');
const minutes = select('.min-numbers');
const seconds = select('.sec-numbers');
const eventId = selectAll('.event-id');
const description = selectAll('.description');
const loremTitle = select('.lorem-title');
const loremDescription = select('.lorem-description');

/* eslint-enable no-undef */
const startDateArray = [];
const endDateArray = [];
const startHourArray = [];
const endHourArray = [];
/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */

loremTitle.textContent = `Upcoming Event: ${upcomingTitle[0].textContent}`;
loremDescription.textContent = description[0].textContent;

// populating the day and month display in the upcoming event list
startDate.forEach((a) => {
  startDateArray.push(a.textContent.split(' ').filter(e => e !== ''));
});
for (let i = 0; i < days.length; i++) {
  days[i].textContent = startDateArray[i][3];
  months[i].textContent = startDateArray[i][2];
}

// populating the time duration display div in the upcoming event list with the
// starting and ending time.
endDate.forEach((a) => {
  endDateArray.push(a.textContent.split(' ').filter(e => e !== ''));
});

for (let i = 0; i < endDateArray.length; i++) {
  endHourArray.push(endDateArray[i][5].split(':').slice(0, 2).join(':'));
}
for (let i = 0; i < startDateArray.length; i++) {
  startHourArray.push(startDateArray[i][5].split(':').slice(0, 2).join(':'));
}

for (let i = 0; i < hoursText.length; i++) {
  const starting = startHourArray[i];
  const ending = endHourArray[i];
  hoursText[i].textContent = `${starting} - ${ending}`;

  // populate the duration div in the
  duration.textContent = `${startHourArray[0]} - ${endHourArray[0]}`;
}

// change the styling of each event that has less than half an hour to start.
for (let i = 0; i < startDate.length; i++) {
  const eventStart = new Date(startDate[i].textContent);
  const remainingTime = (eventStart.getTime() / 1000) - (Date.now() / 1000);
  const remainingMinutes = Math.floor((remainingTime % 3600) / 60);

  if (remainingMinutes < 30) {
    days[i].classList.remove('nth-day');
    months[i].classList.remove('nth-month');
    upcomingTitle[i].classList.remove('nth-upcoming-title');
    upcomingFirst[i].classList.remove('nth-upcoming-first');
    upcomingSecond[i].classList.remove('nth-upcoming-second');
  }
}

// populate the speaker field in the detailed view.
speakerName[0].textContent = speaker[0].textContent;

// countdown timer
setInterval(() => {
  for (let i = 0; i < startDate.length; i++) {
    const eventStart = new Date(startDate[i].textContent).getTime() - Date.now();
    if (eventStart < 2000) {
      fetch(`/delete-event/${eventId[i].textContent}`, {
        method: 'GET',
      })
        .then(() => {
          window.location = '/';
        })
        .catch(err => console.log(err));
    }
  }
}, 1000);

const myCountdown = startDate[0].textContent;
const newDate = new Date(myCountdown).toISOString();
let remainingTime = (new Date(newDate).getTime() / 1000) - (Date.now() / 1000);
setInterval(() => {
  if (remainingTime > 0) {
    remainingTime -= 1;
  }
  const remainingSeconds = Math.floor(remainingTime % 3600 % 60);
  const remainingMinutes = Math.floor((remainingTime % 3600) / 60);
  minutes.textContent = remainingMinutes;
  seconds.textContent = remainingSeconds;
}, 1000);
