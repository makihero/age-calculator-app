
const form = document.getElementById('ageCalculatorForm');
const dayInput = document.getElementById('dayInput');
const monthInput = document.getElementById('monthInput');
const yearInput = document.getElementById('yearInput');
const dayError = document.getElementById('dayError');
const monthError = document.getElementById('monthError');
const yearError = document.getElementById('yearError');

const calculateButton = document.getElementById('calculateButton');
const yearsOutput = document.querySelector('.dayOutput');
const monthsOutput = document.querySelector('.monthOutput');
const daysOutput = document.querySelector('.yearOutput');

calculateButton.addEventListener('click', (event) => {
    event.preventDefault();
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    if(isNaN(day) || day < 1 || day > 31) {
        dayError.classList.remove('hidden');
    } else {
        dayError.classList.add('hidden');
    }

    if(isNaN(month) || month < 1 || month > 12) {
        monthError.classList.remove('hidden');
    } else {
        monthError.classList.add('hidden');
    }

   if(isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
        yearError.classList.remove('hidden');
    } else {
        yearError.classList.add('hidden');
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    let ageInYears = today.getFullYear() - birthDate.getFullYear();
    let ageInMonths = today.getMonth() - birthDate.getMonth();
    let ageInDays = today.getDate() - birthDate.getDate();

    if (ageInDays < 0) {
        ageInMonths--;
        const daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        ageInDays += daysInLastMonth;
      }
  
      if (ageInMonths < 0) {
        ageInYears--;
        ageInMonths += 12;
      }

    yearsOutput.innerHTML = `<p class="dayOutput text-5xl text-purple font-[800] italic md:text-8xl">${ageInYears} <span class="text-off-black">years</span></p>`;
    monthsOutput.innerHTML = `<p class="monthOutput text-5xl text-purple font-[800] italic md:text-8xl">${ageInMonths} <span class="text-off-black">months</span></p>`
    daysOutput.innerHTML = `<p class="yearOutput text-5xl text-purple font-[800] italic md:text-8xl ">${ageInDays} <span class="text-off-black">days</span></p>`
})

