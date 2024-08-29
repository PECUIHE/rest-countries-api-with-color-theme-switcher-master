    
    // fetch("./data.json")
    // .then(function(response){
    //     return response.json();
    // })
    // .then(function(data){
    //     let countries = document.querySelector(".countries");
    //     let out = "";
    //     for(let countries of data){
    //         out += 
    //             `<div class="country-img">
    //                 <img src=${countries.flag} alt="">
    //             </div>
    
    //             <div class="country-details">
    //                 <h4 class="countryName">${countries.name}</h4>
    //                 <p><strong>Population:</strong> ${countries.population}</p>
    //                 <p class="regionName"><strong>Region:</strong> ${countries.region}</p>
    //                 <p><strong>Capital:</strong> ${countries.capital}</p>
    //             </div>`
    //         // console.log(countries);  
    //     };
    //     countries.innerHTML = out;
    // });

const header = document.querySelector('.header');
const dropDown = document.querySelector('.dropdownMenu');
const dropOptions = document.querySelector('.drop-options');
const toggle = document.querySelector('.toggle');
const icon = document.querySelector('.bx');
const countries = document.querySelector('.countries');
const search = document.querySelector('.search');
const regions = document.querySelectorAll('.regions');


async function getCountries() {
    const data = await fetch('./data.json')
    const response = await data.json();
    console.log(response);
    response.forEach(data => {
        showCountry(data);
    });
};

getCountries();


function showCountry(data) {
    const country = document.createElement('div');
    country.classList.add('country');
    country.innerHTML = 
    `<div class="country-img">
        <img src=${data.flag} alt="">
    </div>
    
    <div class="country-details">
        <h3 class="countryName"> ${data.name}</h3>
        <p><strong>Population:</strong> ${data.population}</p>
        <p class="regionName"><strong>Region:</strong> ${data.region}</p>
        <p><strong>Capital:</strong> ${data.capital}</p>
    </div>`

    countries.appendChild(country);
};


const countryName = document.getElementsByClassName('countryName');
search.addEventListener('input', e => {
    Array.from(countryName).forEach(country => {
        if(country.innerText.toLowerCase().includes(search.value.toLowerCase())) {
            country.parentElement.parentElement.style.display = "grid";
        } else {
            country.parentElement.parentElement.style.display = "none";
        };
    });
});


const regionName = document.getElementsByClassName('regionName');
regions.forEach(region => {
    region.addEventListener('click', e => {
        Array.from(regionName).forEach(element => {
            if(element.innerText.includes(region.innerText) || region.innerText == "All") {
                element.parentElement.parentElement.style.display = "grid";
            } else {
                element.parentElement.parentElement.style.display = "none";
            };
        });
    });
});


toggle.addEventListener('click', e => {
    document.body.classList.toggle('dark-mode');
    toggle.classList.toggle('dark-mode');
    icon.classList.toggle('bxs-moon');
    header.classList.toggle('element');
    search.classList.toggle('element');
    dropDown.classList.toggle('element');
    dropOptions.classList.toggle('element');
});


dropDown.addEventListener('click', e => {
    dropOptions.classList.toggle('show-options');
});

