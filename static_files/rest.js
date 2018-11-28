//Global Variables
let nationsData;   //Will be used to contrain data received from endpoint.
const listOfCountries = document.getElementById("country_names"); // Contains country names.

/*Change info displayed base on user selection*/
listOfCountries.addEventListener("change", selectCountry);
function selectCountry(event) {
    displayInfo(event.target.value);
}

//Get all countries data from endpoint
fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => initialize(data))
    .catch(err => console.log("Error:", err));

/* Function Description: Populate front end with country data on load 
 * 
 * Parameters: countriesData - data received from  endpoint. 
 */
function initialize(countries) {
    nationsData = countries; 
    let options = "";
    countries.forEach(country => options += `<option value="${country.alpha3Code}">${country.name}</option>`);
    listOfCountries.innerHTML = options;
    listOfCountries.selectedIndex = 0;
    displayInfo(listOfCountries[listOfCountries.selectedIndex].value);
}

/* Function Description: Handles population of html element based on respective country data.
 * 
 * Parameters: code - used to compare country codes. 
 */
function displayInfo(code) {
    const dataName = nationsData.find(country => country.alpha3Code === code);
    document.querySelector("#flag img").src = dataName.flag;
    document.querySelector("#flag img").alt = `Flag of ${dataName.name}`;
    document.getElementById("capital").innerHTML = dataName.capital;
    document.getElementById("population").innerHTML = dataName.population.toLocaleString("en-US");
    document.getElementById("languages").innerHTML = dataName.languages.filter(c => c.name).map(c => `${c.name}`).join(", ");
    document.getElementById("currencies").innerHTML = dataName.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(", ");

}