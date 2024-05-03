import React, { useState } from 'react';

const TypeaHeadComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);

    const suggestions = [
		"Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
		"Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
		"The Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize",
		"Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
		"Bulgaria", "Burkina Faso", "Burundi",
		"Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad",
		"Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
		"Congo, Republic of the", "Costa Rica", "Côte d’Ivoire", "Croatia", "Cuba", "Cyprus",
		"Czech Republic",
		"Denmark", "Djibouti", "Dominica", "Dominican Republic",
		"East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
		"Eritrea", "Estonia", "Eswatini", "Ethiopia",
		"Fiji", "Finland", "France",
		"Gabon", "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala",
		"Guinea", "Guinea-Bissau", "Guyana",
		"Haiti", "Honduras", "Hungary",
		"Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
		"Jamaica", "Japan", "Jordan",
		"Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo",
		"Kuwait", "Kyrgyzstan",
		"Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
		"Lithuania", "Luxembourg",
		"Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
		"Mauritania", "Mauritius", "Mexico",
		"Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro",
		"Morocco", "Mozambique", "Myanmar (Burma)",
		"Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
		"Nigeria", "North Macedonia", "Norway",
		"Oman",
		"Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
		"Poland", "Portugal",
		"Qatar",
		"Romania", "Russia", "Rwanda",
		"Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa",
		"San Marino", "Sao Tome and Principe",
		"Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
		"Slovakia", "Slovenia",
		"Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan",
		"Sudan, South", "Suriname", "Sweden",
		"Switzerland", "Syria",
		"Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago",
		"Tunisia", "Turkey", "Turkmenistan",
		"Tuvalu",
		"Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
		"Uruguay", "Uzbekistan",
		"Vanuatu", "Vatican City", "Venezuela", "Vietnam",
		"Yemen",
		"Zambia", "Zimbabwe"
	];

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setInputValue(inputValue);
        const filteredSuggestions = suggestions.filter(suggestion =>
            suggestion.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredSuggestions(filteredSuggestions);
    };

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion);
        setFilteredSuggestions([]);
    };

    return (
        <div className="typeahead-container">
            <h1>Type A Head Component</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type here..."
                size={'39'}
            />
            <ul className="suggestions-list"data-testid="optionClicked">
                {filteredSuggestions.map((suggestion, index) => (
                    <li  key={index} onClick={() => handleSuggestionClick(suggestion)}>
                        {suggestion}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TypeaHeadComponent;
