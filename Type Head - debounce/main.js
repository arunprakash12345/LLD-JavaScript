const suggestionsList = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cote dIvoire',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czechia',
    'Democratic Republic of the Congo',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Holy See',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Korea',
    'North Macedonia',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine State',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Korea',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syria',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States of America',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe',
];
const resultContainer = document.querySelector(".result-container");
const searchInput = document.getElementById("search");
let timerOut;
let highlighter = -1;
const debounce = (fn, time) => {
    return function (...args) {
        clearTimeout(timerOut);
        timerOut = setTimeout(() => {
            fn(...args);
        }, time)
    }

}
function createResult(filteredList) {
    resultContainer.innerHTML = "";
    filteredList.forEach((country) => {
        const resultCardElem = document.createElement("div");
        resultCardElem.classList.add("resultCard");
        resultCardElem.textContent = country;
        resultContainer.appendChild(resultCardElem);
    })

}
function handleSearch(e) {
    const currentValue = e.target.value.toLowerCase();
    if (currentValue === '') {
        resultContainer.innerHTML = "";
        return;
    }
    const filteredList = suggestionsList.filter((country) => {
        return country.toLowerCase().startsWith(currentValue);
    });
    if (filteredList.length === 0) {
        resultContainer.innerHTML = "";
        const paraElem = document.createElement("p");
        paraElem.classList.add("empty-message");
        paraElem.innerText = "No result found";
        resultContainer.appendChild(paraElem);
        return;
    }

    createResult(filteredList);
}
const debounceSearch = debounce(handleSearch, 500);
searchInput.addEventListener("input", debounceSearch);

searchInput.addEventListener("keyup", (e) => {
    const results = document.querySelectorAll(".resultCard");
    if (e.key === 'Escape') {
        resultContainer.innerHTML = "";
        searchInput.value = '';
        e.preventDefault();
        searchInput.blur();
        clearTimeout(timerOut);
        highlighter = -1;
    }
    else if (e.key === "ArrowDown") {
        e.preventDefault();
        highlighter++;
        if (highlighter >= results.length) highlighter = 0;
        highLight(results);
    }
    else if (e.key === "ArrowUp") {
        e.preventDefault();
        highlighter--;
        if (highlighter < 0) highlighter = results.length - 1;
        highLight(results);
    }
    else if (e.key === "Enter") {
        results.forEach((result) => {
            if (result.classList.contains("highlight")) {
                searchInput.value = result.innerText;
            }
        })
    }
});

function highLight(results) {
    results.forEach((result, index) => {
        if (index === highlighter) {
            result.classList.add("highlight");
        }
        else {
            result.classList.remove("highlight");
        }
    })
}

resultContainer.addEventListener("click", (e) => {

    searchInput.value = e.target.innerText;

})