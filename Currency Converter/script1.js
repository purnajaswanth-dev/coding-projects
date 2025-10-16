const fromDrop = document.querySelector(".from");
const toDrop = document.querySelector(".too");

const setFlag = (element, currency) => {
    const countryCode = countryList[currency];
    const imgTag = element.parentElement.parentElement.querySelector("img");
    imgTag.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
};

Object.keys(countryList).forEach((currencyCode) => {
    let option1 = document.createElement("option");
    option1.value = currencyCode;
    option1.textContent = currencyCode;
    if (currencyCode === "USD") option1.selected = true;
    fromDrop.appendChild(option1);

    let option2 = document.createElement("option");
    option2.value = currencyCode;
    option2.textContent = currencyCode;
    if (currencyCode === "INR") option2.selected = true;
    toDrop.appendChild(option2);
});

// Event listeners to update flag when dropdown changes
fromDrop.addEventListener("change", () => setFlag(fromDrop, fromDrop.value));
toDrop.addEventListener("change", () => setFlag(toDrop, toDrop.value));

// Initial flag setup
setFlag(fromDrop, fromDrop.value);
setFlag(toDrop, toDrop.value);


// script1.js

const baseUrl = "https://api.exchangerate-api.com/v4/latest/";

const amountInput = document.querySelector("input");
const convertBtn = document.querySelector("button");
const resultPara = document.querySelector(".st");

convertBtn.addEventListener("click", async () => {
    const amountVal = parseFloat(amountInput.value);
    const fromCurrency = document.querySelector(".from").value;
    const toCurrency = document.querySelector(".too").value;

    if (isNaN(amountVal) || amountVal <= 0) {
        resultPara.textContent = "Please enter a valid amount.";
        return;
    }

    try {
        const response = await fetch(`${baseUrl}${fromCurrency}`);
        const data = await response.json();
        const rate = data.rates[toCurrency];

        if (!rate) {
            resultPara.textContent = "Currency not supported.";
            return;
        }

        const converted = (amountVal * rate).toFixed(2);
        resultPara.textContent = `${amountVal} ${fromCurrency} = ${converted} ${toCurrency}`;
    } catch (error) {
        console.error("Conversion error:", error);
        resultPara.textContent = "Failed to fetch exchange rate.";
    }
});
