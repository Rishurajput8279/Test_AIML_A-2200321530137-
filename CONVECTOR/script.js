let show = false;
        let data;
        function showConvertor() {
            show = !show;
            if (show) {
                document.querySelector(".right").style.display = "block";
            } else {
                document.querySelector(".right").style.display = "none";
            }
        }

        async function getCurrencyList() {
            let res = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
            data = await res.json();
            let currencyList = Object.keys(data.rates);
            currencyList.forEach((currency) => {
                let option = document.createElement("option");
                option.value = currency;
                option.innerText = currency;
                document.getElementById("inputCurrency").appendChild(option);
                let option2 = document.createElement("option");
                option2.value = currency;
                option2.innerText = currency;
                document.getElementById("outputCurrency").appendChild(option2);
            });
//             {
//   "provider": "https://www.exchangerate-api.com",
//   "WARNING_UPGRADE_TO_V6": "https://www.exchangerate-api.com/docs/free",
//   "terms": "https://www.exchangerate-api.com/terms",
//   "base": "USD",
//   "date": "2024-11-07",
//   "time_last_updated": 1730937602,
//   "rates": {
//     "USD": 1,
//     "AED": 3.67,
//     "AFN": 67.89,
//     "ALL": 91.11,
//     "AMD": 387.25,
//     "ANG": 1.79,
//     "AOA": 917.5,
//     "ARS": 994.75,
//     "AUD": 1.52,
//     "AWG": 1.79,
//     "AZN": 1.7,
//     "BAM": 1.82,
//     "BBD": 2,
//     "BDT": 119.49,
//     "BGN": 1.82,
//     "BHD": 0.376,
//     "BIF": 2919.74,
//     "BMD": 1,
//     "BND": 1.33,
//     "BOB": 6.92,
//     "BRL": 5.75,
//     "BSD": 1,
//     "BTN": 84.32,
//     "BWP": 13.39,
//     "BYN": 3.32,
//     "BZD": 2,
//     "CAD": 1.39,
//     "CDF": 2850.83,
//     "CHF": 0.876,
//     "CLP": 957.29,
//     "CNY": 7.19,
//     "COP": 4399.79,
//     "CRC": 512.51,
//     "CUP": 24,
//     "CVE": 102.73,
//     "CZK": 23.61,
//     "DJF": 177.72,
//     "DKK": 6.95,
//     "DOP": 60.25,
//     "DZD": 133.63,
//     "EGP": 49.21,
//     "ERN": 15,
//     "ETB": 121,
//     "EUR": 0.932,
//     "FJD": 2.25,
//     "FKP": 0.776,
//     "FOK": 6.95,
//     "GBP": 0.776,
//     "GEL": 2.72,
//     "GGP": 0.776,
//     "GHS": 16.49,
//     "GIP": 0.776,
//     "GMD": 71.42,
//     "GNF": 8587.34,
//     "GTQ": 7.72,
//     "GYD": 208.82,
//     "HKD": 7.78,
//     "HNL": 25.21,
//     "HRK": 7.02,
//     "HTG": 131.4,
//     "HUF": 381.96,
//     "IDR": 15836.43,
//     "ILS": 3.73,
//     "IMP": 0.776,
//     "INR": 84.32,
//     "IQD": 1307.73,
//     "IRR": 42067.12,
//     "ISK": 138.36,
//     "JEP": 0.776,
//     "JMD": 158.69,
//     "JOD": 0.709,
//     "JPY": 154.29,
//     "KES": 128.82,
//     "KGS": 85.66,
//     "KHR": 4066.33,
//     "KID": 1.52,
//     "KMF": 458.33,
//     "KRW": 1399.36,
//     "KWD": 0.307,
//     "KYD": 0.833,
//     "KZT": 493.11,
//     "LAK": 21855.03,
//     "LBP": 89500,
//     "LKR": 292.62,
//     "LRD": 191.37,
//     "LSL": 17.65,
//     "LYD": 4.8,
//     "MAD": 9.85,
//     "MDL": 17.89,
//     "MGA": 4605.49,
//     "MKD": 56.8,
//     "MMK": 2099.83,
//     "MNT": 3411.81,
//     "MOP": 8.01,
//     "MRU": 39.67,
//     "MUR": 46.35,
//     "MVR": 15.42,
//     "MWK": 1737.1,
//     "MXN": 20.29,
//     "MYR": 4.4,
//     "MZN": 63.84,
//     "NAD": 17.65,
//     "NGN": 1668.27,
//     "NIO": 36.8,
//     "NOK": 11.08,
//     "NPR": 134.92,
//     "NZD": 1.68,
//     "OMR": 0.384,
//     "PAB": 1,
//     "PEN": 3.78,
//     "PGK": 3.99,
//     "PHP": 58.86,
//     "PKR": 278.1,
//     "PLN": 4.06,
//     "PYG": 7766.33,
//     "QAR": 3.64,
//     "RON": 4.63,
//     "RSD": 108.82,
//     "RUB": 97.69,
//     "RWF": 1366.16,
//     "SAR": 3.75,
//     "SBD": 8.49,
//     "SCR": 14.55,
//     "SDG": 543.1,
//     "SEK": 10.86,
//     "SGD": 1.33,
//     "SHP": 0.776,
//     "SLE": 22.69,
//     "SLL": 22686.44,
//     "SOS": 570.27,
//     "SRD": 34.88,
//     "SSP": 3343.69,
//     "STN": 22.82,
//     "SYP": 12943.77,
//     "SZL": 17.65,
//     "THB": 34.32,
//     "TJS": 10.66,
//     "TMT": 3.5,
//     "TND": 3.11,
//     "TOP": 2.35,
//     "TRY": 34.23,
//     "TTD": 6.77,
//     "TVD": 1.52,
//     "TWD": 32.29,
//     "TZS": 2668.51,
//     "UAH": 41.46,
//     "UGX": 3668.52,
//     "UYU": 41.61,
//     "UZS": 12767.67,
//     "VES": 43.78,
//     "VND": 25374.03,
//     "VUV": 120.04,
//     "WST": 2.74,
//     "XAF": 611.11,
//     "XCD": 2.7,
//     "XDR": 0.756,
//     "XOF": 611.11,
//     "XPF": 111.17,
//     "YER": 250.04,
//     "ZAR": 17.66,
//     "ZMW": 27.02,
//     "ZWL": 26.01
//   }
// }
        }

        function convert() {
            let input = document.getElementById("input").value;
            let inputCurrency = document.getElementById("inputCurrency").value;
            let outputCurrency = document.getElementById("outputCurrency").value;
            let output = input * data.rates[outputCurrency] / data.rates[inputCurrency];
            document.getElementById("output").value = output;
        }
        getCurrencyList();