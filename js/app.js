const loadCountries =() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries => {
    console.log(countries[0]);
    const countriesHtml =countries.map(country => getCountryHtml(country));
    // console.log(countriesHtml);
    const container = document.getElementById('countries');
    container.innerHTML=countriesHtml.join(' ');
}

const getCountryHtml = country => {
    return `
        <div class="country">
            <h1>Name:${country.name.common}</h1>
            <p>Capital:${country.capital}</p>
            <p>Area:${country.area}</p>
            <p>Region:${country.region}</p>
            <img src="${country.flags.png}"></img>

        </div>
    `
}

//op---1--
// const getCountryHtml = country => {
//     const {name,area,region,capital,flags}=country;
//     return `
//         <div class="country">
//             <h1>Name:${name.common}</h1>
//             <p>Capital:${capital}</p>
//             <p>Area:${area}</p>
//             <p>Region:${region}</p>
//             <img src="${flags.png}"></img>

//         </div>
//     `
// }
//op--2--
// const getCountryHtml = ({name,area,region,capital,flags}) => {

//     return `
//         <div class="country">
//             <h1>Name:${name.common}</h1>
//             <p>Capital:${capital}</p>
//             <p>Area:${area}</p>
//             <p>Region:${region}</p>
//             <img src="${flags.png}"></img>

//         </div>
//     `
// }


loadCountries();