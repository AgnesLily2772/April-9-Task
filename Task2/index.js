const countriesInfo = [
    {
      "name": "Afghanistan",
      "capital": "Kabul",
      "subregion": "Southern Asia",
      "region": "Asia",
      "population": 40218234,
      "currencies": [
        {
          "code": "AFN",
          "name": "Afghan afghani",
          "symbol": "؋"
        }
      ],
      "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
      "independent": false
    },
    {
      "name": "Åland Islands",
      "capital": "Mariehamn",
      "subregion": "Northern Europe",
      "region": "Europe",
      "population": 28875,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/ax.svg",
      "independent": false
    },
    {
      "name": "Albania",
      "capital": "Tirana",
      "subregion": "Southern Europe",
      "region": "Europe",
      "population": 2837743,
      "currencies": [
        {
          "code": "ALL",
          "name": "Albanian lek",
          "symbol": "L"
        }
      ],
      "flag": "https://flagcdn.com/al.svg",
      "independent": false
    },
    {
      "name": "Algeria",
      "capital": "Algiers",
      "subregion": "Northern Africa",
      "region": "Africa",
      "population": 44700000,
      "currencies": [
        {
          "code": "DZD",
          "name": "Algerian dinar",
          "symbol": "د.ج"
        }
      ],
      "flag": "https://flagcdn.com/dz.svg",
      "independent": false
    },
    {
      "name": "American Samoa",
      "capital": "Pago Pago",
      "subregion": "Polynesia",
      "region": "Oceania",
      "population": 55197,
      "currencies": [
        {
          "code": "USD",
          "name": "United States Dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/as.svg",
      "independent": false
    },
    {
      "name": "Andorra",
      "capital": "Andorra la Vella",
      "subregion": "Southern Europe",
      "region": "Europe",
      "population": 77265,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/ad.svg",
      "independent": false
    },
    {
      "name": "Angola",
      "capital": "Luanda",
      "subregion": "Middle Africa",
      "region": "Africa",
      "population": 32866268,
      "currencies": [
        {
          "code": "AOA",
          "name": "Angolan kwanza",
          "symbol": "Kz"
        }
      ],
      "flag": "https://flagcdn.com/ao.svg",
      "independent": false
    },
    {
      "name": "Anguilla",
      "capital": "The Valley",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 13452,
      "currencies": [
        {
          "code": "XCD",
          "name": "East Caribbean dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/ai.svg",
      "independent": false
    },
    {
      "name": "Antarctica",
      "subregion": "Antarctica",
      "region": "Polar",
      "population": 1000,
      "flag": "https://flagcdn.com/aq.svg",
      "independent": false
    },
    {
      "name": "Antigua and Barbuda",
      "capital": "Saint John's",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 97928,
      "currencies": [
        {
          "code": "XCD",
          "name": "East Caribbean dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/ag.svg",
      "independent": false
    },
    {
      "name": "Argentina",
      "capital": "Buenos Aires",
      "subregion": "South America",
      "region": "Americas",
      "population": 45376763,
      "currencies": [
        {
          "code": "ARS",
          "name": "Argentine peso",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/ar.svg",
      "independent": false
    },
    {
      "name": "Armenia",
      "capital": "Yerevan",
      "subregion": "Western Asia",
      "region": "Asia",
      "population": 2963234,
      "currencies": [
        {
          "code": "AMD",
          "name": "Armenian dram",
          "symbol": "֏"
        }
      ],
      "flag": "https://flagcdn.com/am.svg",
      "independent": false
    },
    {
      "name": "Aruba",
      "capital": "Oranjestad",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 106766,
      "currencies": [
        {
          "code": "AWG",
          "name": "Aruban florin",
          "symbol": "ƒ"
        }
      ],
      "flag": "https://flagcdn.com/aw.svg",
      "independent": false
    },
    {
      "name": "Australia",
      "capital": "Canberra",
      "subregion": "Australia and New Zealand",
      "region": "Oceania",
      "population": 25687041,
      "currencies": [
        {
          "code": "AUD",
          "name": "Australian dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/au.svg",
      "independent": false
    },
    {
      "name": "Austria",
      "capital": "Vienna",
      "subregion": "Central Europe",
      "region": "Europe",
      "population": 8917205,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/at.svg",
      "independent": false
    },
    {
      "name": "Azerbaijan",
      "capital": "Baku",
      "subregion": "Western Asia",
      "region": "Asia",
      "population": 10110116,
      "currencies": [
        {
          "code": "AZN",
          "name": "Azerbaijani manat",
          "symbol": "₼"
        }
      ],
      "flag": "https://flagcdn.com/az.svg",
      "independent": false
    },
    {
      "name": "Bahamas",
      "capital": "Nassau",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 393248,
      "currencies": [
        {
          "code": "BSD",
          "name": "Bahamian dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/bs.svg",
      "independent": false
    },
    {
      "name": "Bahrain",
      "capital": "Manama",
      "subregion": "Western Asia",
      "region": "Asia",
      "population": 1701583,
      "currencies": [
        {
          "code": "BHD",
          "name": "Bahraini dinar",
          "symbol": ".د.ب"
        }
      ],
      "flag": "https://flagcdn.com/bh.svg",
      "independent": false
    },
    {
      "name": "Bangladesh",
      "capital": "Dhaka",
      "subregion": "Southern Asia",
      "region": "Asia",
      "population": 164689383,
      "currencies": [
        {
          "code": "BDT",
          "name": "Bangladeshi taka",
          "symbol": "৳"
        }
      ],
      "flag": "https://flagcdn.com/bd.svg",
      "independent": false
    },
    {
      "name": "Barbados",
      "capital": "Bridgetown",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 287371,
      "currencies": [
        {
          "code": "BBD",
          "name": "Barbadian dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/bb.svg",
      "independent": false
    },
    {
      "name": "Belarus",
      "capital": "Minsk",
      "subregion": "Eastern Europe",
      "region": "Europe",
      "population": 9398861,
      "currencies": [
        {
          "code": "BYN",
          "name": "New Belarusian ruble",
          "symbol": "Br"
        },
        {
          "code": "BYR",
          "name": "Old Belarusian ruble",
          "symbol": "Br"
        }
      ],
      "flag": "https://flagcdn.com/by.svg",
      "independent": false
    },
    {
      "name": "Belgium",
      "capital": "Brussels",
      "subregion": "Western Europe",
      "region": "Europe",
      "population": 11555997,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/be.svg",
      "independent": false
    },
    {
      "name": "Belize",
      "capital": "Belmopan",
      "subregion": "Central America",
      "region": "Americas",
      "population": 397621,
      "currencies": [
        {
          "code": "BZD",
          "name": "Belize dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/bz.svg",
      "independent": false
    },
    {
      "name": "Benin",
      "capital": "Porto-Novo",
      "subregion": "Western Africa",
      "region": "Africa",
      "population": 12123198,
      "currencies": [
        {
          "code": "XOF",
          "name": "West African CFA franc",
          "symbol": "Fr"
        }
      ],
      "flag": "https://flagcdn.com/bj.svg",
      "independent": false
    },
    {
      "name": "Bermuda",
      "capital": "Hamilton",
      "subregion": "Northern America",
      "region": "Americas",
      "population": 63903,
      "currencies": [
        {
          "code": "BMD",
          "name": "Bermudian dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/bm.svg",
      "independent": false
    },
    {
      "name": "Bhutan",
      "capital": "Thimphu",
      "subregion": "Southern Asia",
      "region": "Asia",
      "population": 771612,
      "currencies": [
        {
          "code": "BTN",
          "name": "Bhutanese ngultrum",
          "symbol": "Nu."
        },
        {
          "code": "INR",
          "name": "Indian rupee",
          "symbol": "₹"
        }
      ],
      "flag": "https://flagcdn.com/bt.svg",
      "independent": false
    },
    {
      "name": "Bolivia (Plurinational State of)",
      "capital": "Sucre",
      "subregion": "South America",
      "region": "Americas",
      "population": 11673029,
      "currencies": [
        {
          "code": "BOB",
          "name": "Bolivian boliviano",
          "symbol": "Bs."
        }
      ],
      "flag": "https://flagcdn.com/bo.svg",
      "independent": false
    },
    {
      "name": "Bonaire, Sint Eustatius and Saba",
      "capital": "Kralendijk",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 17408,
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/bq.svg",
      "independent": false
    },
    {
      "name": "Bosnia and Herzegovina",
      "capital": "Sarajevo",
      "subregion": "Southern Europe",
      "region": "Europe",
      "population": 3280815,
      "currencies": [
        {
          "code": "BAM",
          "name": "Bosnia and Herzegovina convertible mark",
          "symbol": "KM"
        }
      ],
      "flag": "https://flagcdn.com/ba.svg",
      "independent": false
    },
    {
      "name": "Botswana",
      "capital": "Gaborone",
      "subregion": "Southern Africa",
      "region": "Africa",
      "population": 2351625,
      "currencies": [
        {
          "code": "BWP",
          "name": "Botswana pula",
          "symbol": "P"
        }
      ],
      "flag": "https://flagcdn.com/bw.svg",
      "independent": false
    },
    {
      "name": "Bouvet Island",
      "subregion": "South Antarctic Ocean",
      "region": "Antarctic Ocean",
      "population": 0,
      "currencies": [
        {
          "code": "NOK",
          "name": "Norwegian krone",
          "symbol": "kr"
        }
      ],
      "flag": "https://flagcdn.com/bv.svg",
      "independent": false
    },
    {
      "name": "Brazil",
      "capital": "Brasília",
      "subregion": "South America",
      "region": "Americas",
      "population": 212559409,
      "currencies": [
        {
          "code": "BRL",
          "name": "Brazilian real",
          "symbol": "R$"
        }
      ],
      "flag": "https://flagcdn.com/br.svg",
      "independent": false
    },
    {
      "name": "British Indian Ocean Territory",
      "capital": "Diego Garcia",
      "subregion": "Eastern Africa",
      "region": "Africa",
      "population": 3000,
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/io.svg",
      "independent": false
    },
    {
      "name": "United States Minor Outlying Islands",
      "subregion": "Northern America",
      "region": "Americas",
      "population": 300,
      "currencies": [
        {
          "code": "GBP",
          "name": "British pound",
          "symbol": "£"
        }
      ],
      "flag": "https://flagcdn.com/um.svg",
      "independent": false
    },
    {
      "name": "Virgin Islands (British)",
      "capital": "Road Town",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 30237,
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/vg.svg",
      "independent": false
    },
    {
      "name": "Virgin Islands (U.S.)",
      "capital": "Charlotte Amalie",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 106290,
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/vi.svg",
      "independent": false
    },
    {
      "name": "Brunei Darussalam",
      "capital": "Bandar Seri Begawan",
      "subregion": "South-Eastern Asia",
      "region": "Asia",
      "population": 437483,
      "currencies": [
        {
          "code": "BND",
          "name": "Brunei dollar",
          "symbol": "$"
        },
        {
          "code": "SGD",
          "name": "Singapore dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/bn.svg",
      "independent": false
    },
    {
      "name": "Bulgaria",
      "capital": "Sofia",
      "subregion": "Eastern Europe",
      "region": "Europe",
      "population": 6927288,
      "currencies": [
        {
          "code": "BGN",
          "name": "Bulgarian lev",
          "symbol": "лв"
        }
      ],
      "flag": "https://flagcdn.com/bg.svg",
      "independent": false
    },
    {
      "name": "Burkina Faso",
      "capital": "Ouagadougou",
      "subregion": "Western Africa",
      "region": "Africa",
      "population": 20903278,
      "currencies": [
        {
          "code": "XOF",
          "name": "West African CFA franc",
          "symbol": "Fr"
        }
      ],
      "flag": "https://flagcdn.com/bf.svg",
      "independent": false
    },
    {
      "name": "Burundi",
      "capital": "Gitega",
      "subregion": "Eastern Africa",
      "region": "Africa",
      "population": 11890781,
      "currencies": [
        {
          "code": "BIF",
          "name": "Burundian franc",
          "symbol": "Fr"
        }
      ],
      "flag": "https://flagcdn.com/bi.svg",
      "independent": false
    },
    {
      "name": "Cambodia",
      "capital": "Phnom Penh",
      "subregion": "South-Eastern Asia",
      "region": "Asia",
      "population": 16718971,
      "currencies": [
        {
          "code": "KHR",
          "name": "Cambodian riel",
          "symbol": "៛"
        },
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/kh.svg",
      "independent": false
    },
    {
      "name": "Cameroon",
      "capital": "Yaoundé",
      "subregion": "Middle Africa",
      "region": "Africa",
      "population": 26545864,
      "currencies": [
        {
          "code": "XAF",
          "name": "Central African CFA franc",
          "symbol": "Fr"
        }
      ],
      "flag": "https://flagcdn.com/cm.svg",
      "independent": false
    },
    {
      "name": "Canada",
      "capital": "Ottawa",
      "subregion": "Northern America",
      "region": "Americas",
      "population": 38005238,
      "currencies": [
        {
          "code": "CAD",
          "name": "Canadian dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/ca.svg",
      "independent": false
    },
    {
      "name": "Cabo Verde",
      "capital": "Praia",
      "subregion": "Western Africa",
      "region": "Africa",
      "population": 555988,
      "currencies": [
        {
          "code": "CVE",
          "name": "Cape Verdean escudo",
          "symbol": "Esc"
        }
      ],
      "flag": "https://flagcdn.com/cv.svg",
      "independent": false
    },
    {
      "name": "Cayman Islands",
      "capital": "George Town",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 65720,
      "currencies": [
        {
          "code": "KYD",
          "name": "Cayman Islands dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/ky.svg",
      "independent": false
    },
    {
      "name": "Central African Republic",
      "capital": "Bangui",
      "subregion": "Middle Africa",
      "region": "Africa",
      "population": 4829764,
      "currencies": [
        {
          "code": "XAF",
          "name": "Central African CFA franc",
          "symbol": "Fr"
        }
      ],
      "flag": "https://flagcdn.com/cf.svg",
      "independent": false
    },
    {
      "name": "Chad",
      "capital": "N'Djamena",
      "subregion": "Middle Africa",
      "region": "Africa",
      "population": 16425859,
      "currencies": [
        {
          "code": "XAF",
          "name": "Central African CFA franc",
          "symbol": "Fr"
        }
      ],
      "flag": "https://flagcdn.com/td.svg",
      "independent": false
    },
    {
      "name": "Chile",
      "capital": "Santiago",
      "subregion": "South America",
      "region": "Americas",
      "population": 19116209,
      "currencies": [
        {
          "code": "CLP",
          "name": "Chilean peso",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/cl.svg",
      "independent": false
    },
    {
      "name": "China",
      "capital": "Beijing",
      "subregion": "Eastern Asia",
      "region": "Asia",
      "population": 1402112000,
      "currencies": [
        {
          "code": "CNY",
          "name": "Chinese yuan",
          "symbol": "¥"
        }
      ],
      "flag": "https://flagcdn.com/cn.svg",
      "independent": false
    },
    {
      "name": "Christmas Island",
      "capital": "Flying Fish Cove",
      "subregion": "Australia and New Zealand",
      "region": "Oceania",
      "population": 2072,
      "currencies": [
        {
          "code": "AUD",
          "name": "Australian dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/cx.svg",
      "independent": false
    },
    {
      "name": "Cocos (Keeling) Islands",
      "capital": "West Island",
      "subregion": "Australia and New Zealand",
      "region": "Oceania",
      "population": 550,
      "currencies": [
        {
          "code": "AUD",
          "name": "Australian dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/cc.svg",
      "independent": false
    },
    {
      "name": "Colombia",
      "capital": "Bogotá",
      "subregion": "South America",
      "region": "Americas",
      "population": 50882884,
      "currencies": [
        {
          "code": "COP",
          "name": "Colombian peso",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/co.svg",
      "independent": false
    },
    {
      "name": "Comoros",
      "capital": "Moroni",
      "subregion": "Eastern Africa",
      "region": "Africa",
      "population": 869595,
      "currencies": [
        {
          "code": "KMF",
          "name": "Comorian franc",
          "symbol": "Fr"
        }
      ],
      "flag": "https://flagcdn.com/km.svg",
      "independent": false
    },
    {
      "name": "Congo",
      "capital": "Brazzaville",
      "subregion": "Middle Africa",
      "region": "Africa",
      "population": 5518092,
      "currencies": [
        {
          "code": "XAF",
          "name": "Central African CFA franc",
          "symbol": "Fr"
        }
      ],
      "flag": "https://flagcdn.com/cg.svg",
      "independent": false
    },
    {
      "name": "Congo (Democratic Republic of the)",
      "capital": "Kinshasa",
      "subregion": "Middle Africa",
      "region": "Africa",
      "population": 89561404,
      "currencies": [
        {
          "code": "CDF",
          "name": "Congolese franc",
          "symbol": "Fr"
        }
      ],
      "flag": "https://flagcdn.com/cd.svg",
      "independent": false
    },
    {
      "name": "Cook Islands",
      "capital": "Avarua",
      "subregion": "Polynesia",
      "region": "Oceania",
      "population": 18100,
      "currencies": [
        {
          "code": "NZD",
          "name": "New Zealand dollar",
          "symbol": "$"
        },
        {
          "code": "CKD",
          "name": "Cook Islands dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/ck.svg",
      "independent": false
    },
    {
      "name": "Costa Rica",
      "capital": "San José",
      "subregion": "Central America",
      "region": "Americas",
      "population": 5094114,
      "currencies": [
        {
          "code": "CRC",
          "name": "Costa Rican colón",
          "symbol": "₡"
        }
      ],
      "flag": "https://flagcdn.com/cr.svg",
      "independent": false
    },
    {
      "name": "Croatia",
      "capital": "Zagreb",
      "subregion": "Southern Europe",
      "region": "Europe",
      "population": 4047200,
      "currencies": [
        {
          "code": "HRK",
          "name": "Croatian kuna",
          "symbol": "kn"
        }
      ],
      "flag": "https://flagcdn.com/hr.svg",
      "independent": false
    },
    {
      "name": "Cuba",
      "capital": "Havana",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 11326616,
      "currencies": [
        {
          "code": "CUC",
          "name": "Cuban convertible peso",
          "symbol": "$"
        },
        {
          "code": "CUP",
          "name": "Cuban peso",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/cu.svg",
      "independent": false
    },
    {
      "name": "Curaçao",
      "capital": "Willemstad",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 155014,
      "currencies": [
        {
          "code": "ANG",
          "name": "Netherlands Antillean guilder",
          "symbol": "ƒ"
        }
      ],
      "flag": "https://flagcdn.com/cw.svg",
      "independent": false
    },
    {
      "name": "Cyprus",
      "capital": "Nicosia",
      "subregion": "Southern Europe",
      "region": "Europe",
      "population": 1207361,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/cy.svg",
      "independent": false
    },
    {
      "name": "Czech Republic",
      "capital": "Prague",
      "subregion": "Central Europe",
      "region": "Europe",
      "population": 10698896,
      "currencies": [
        {
          "code": "CZK",
          "name": "Czech koruna",
          "symbol": "Kč"
        }
      ],
      "flag": "https://flagcdn.com/cz.svg",
      "independent": false
    },
    {
      "name": "Denmark",
      "capital": "Copenhagen",
      "subregion": "Northern Europe",
      "region": "Europe",
      "population": 5831404,
      "currencies": [
        {
          "code": "DKK",
          "name": "Danish krone",
          "symbol": "kr"
        }
      ],
      "flag": "https://flagcdn.com/dk.svg",
      "independent": false
    },
    {
      "name": "Djibouti",
      "capital": "Djibouti",
      "subregion": "Eastern Africa",
      "region": "Africa",
      "population": 988002,
      "currencies": [
        {
          "code": "DJF",
          "name": "Djiboutian franc",
          "symbol": "Fr"
        }
      ],
      "flag": "https://flagcdn.com/dj.svg",
      "independent": false
    },
    {
      "name": "Dominica",
      "capital": "Roseau",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 71991,
      "currencies": [
        {
          "code": "XCD",
          "name": "East Caribbean dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/dm.svg",
      "independent": false
    },
    {
      "name": "Dominican Republic",
      "capital": "Santo Domingo",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 10847904,
      "currencies": [
        {
          "code": "DOP",
          "name": "Dominican peso",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/do.svg",
      "independent": false
    },
    {
      "name": "Ecuador",
      "capital": "Quito",
      "subregion": "South America",
      "region": "Americas",
      "population": 17643060,
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/ec.svg",
      "independent": false
    },
    {
      "name": "Egypt",
      "capital": "Cairo",
      "subregion": "Northern Africa",
      "region": "Africa",
      "population": 102334403,
      "currencies": [
        {
          "code": "EGP",
          "name": "Egyptian pound",
          "symbol": "£"
        }
      ],
      "flag": "https://flagcdn.com/eg.svg",
      "independent": false
    },
    {
      "name": "El Salvador",
      "capital": "San Salvador",
      "subregion": "Central America",
      "region": "Americas",
      "population": 6486201,
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/sv.svg",
      "independent": false
    },
    {
      "name": "Equatorial Guinea",
      "capital": "Malabo",
      "subregion": "Middle Africa",
      "region": "Africa",
      "population": 1402985,
      "currencies": [
        {
          "code": "XAF",
          "name": "Central African CFA franc",
          "symbol": "Fr"
        }
      ],
      "flag": "https://flagcdn.com/gq.svg",
      "independent": false
    },
    {
      "name": "Eritrea",
      "capital": "Asmara",
      "subregion": "Eastern Africa",
      "region": "Africa",
      "population": 5352000,
      "currencies": [
        {
          "code": "ERN",
          "name": "Eritrean nakfa",
          "symbol": "Nfk"
        }
      ],
      "flag": "https://flagcdn.com/er.svg",
      "independent": false
    },
    {
      "name": "Estonia",
      "capital": "Tallinn",
      "subregion": "Northern Europe",
      "region": "Europe",
      "population": 1331057,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/ee.svg",
      "independent": false
    },
    {
      "name": "Ethiopia",
      "capital": "Addis Ababa",
      "subregion": "Eastern Africa",
      "region": "Africa",
      "population": 114963583,
      "currencies": [
        {
          "code": "ETB",
          "name": "Ethiopian birr",
          "symbol": "Br"
        }
      ],
      "flag": "https://flagcdn.com/et.svg",
      "independent": false
    },
    {
      "name": "Falkland Islands (Malvinas)",
      "capital": "Stanley",
      "subregion": "South America",
      "region": "Americas",
      "population": 2563,
      "currencies": [
        {
          "code": "FKP",
          "name": "Falkland Islands pound",
          "symbol": "£"
        }
      ],
      "flag": "https://flagcdn.com/fk.svg",
      "independent": false
    },
    {
      "name": "Faroe Islands",
      "capital": "Tórshavn",
      "subregion": "Northern Europe",
      "region": "Europe",
      "population": 48865,
      "currencies": [
        {
          "code": "DKK",
          "name": "Danish krone",
          "symbol": "kr"
        },
        {
          "code": "FOK",
          "name": "Faroese króna",
          "symbol": "kr"
        }
      ],
      "flag": "https://flagcdn.com/fo.svg",
      "independent": false
    },
    {
      "name": "Fiji",
      "capital": "Suva",
      "subregion": "Melanesia",
      "region": "Oceania",
      "population": 896444,
      "currencies": [
        {
          "code": "FJD",
          "name": "Fijian dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/fj.svg",
      "independent": false
    },
    {
      "name": "Finland",
      "capital": "Helsinki",
      "subregion": "Northern Europe",
      "region": "Europe",
      "population": 5530719,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/fi.svg",
      "independent": false
    },
    {
      "name": "France",
      "capital": "Paris",
      "subregion": "Western Europe",
      "region": "Europe",
      "population": 67391582,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/fr.svg",
      "independent": false
    },
    {
      "name": "French Guiana",
      "capital": "Cayenne",
      "subregion": "South America",
      "region": "Americas",
      "population": 254541,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/gf.svg",
      "independent": false
    },
    {
      "name": "French Polynesia",
      "capital": "Papeetē",
      "subregion": "Polynesia",
      "region": "Oceania",
      "population": 280904,
      "currencies": [
        {
          "code": "XPF",
          "name": "CFP franc",
          "symbol": "Fr"
        }
      ],
      "flag": "https://flagcdn.com/pf.svg",
      "independent": false
    },
    {
      "name": "French Southern Territories",
      "capital": "Port-aux-Français",
      "subregion": "Southern Africa",
      "region": "Africa",
      "population": 140,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/tf.svg",
      "independent": false
    },
    {
      "name": "Gabon",
      "capital": "Libreville",
      "subregion": "Middle Africa",
      "region": "Africa",
      "population": 2225728,
      "currencies": [
        {
          "code": "XAF",
          "name": "Central African CFA franc",
          "symbol": "Fr"
        }
      ],
      "flag": "https://flagcdn.com/ga.svg",
      "independent": false
    },
    {
      "name": "Gambia",
      "capital": "Banjul",
      "subregion": "Western Africa",
      "region": "Africa",
      "population": 2416664,
      "currencies": [
        {
          "code": "GMD",
          "name": "Gambian dalasi",
          "symbol": "D"
        }
      ],
      "flag": "https://flagcdn.com/gm.svg",
      "independent": false
    },
    {
      "name": "Georgia",
      "capital": "Tbilisi",
      "subregion": "Western Asia",
      "region": "Asia",
      "population": 3714000,
      "currencies": [
        {
          "code": "GEL",
          "name": "Georgian Lari",
          "symbol": "ლ"
        }
      ],
      "flag": "https://flagcdn.com/ge.svg",
      "independent": false
    },
    {
      "name": "Germany",
      "capital": "Berlin",
      "subregion": "Central Europe",
      "region": "Europe",
      "population": 83240525,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/de.svg",
      "independent": false
    },
    {
      "name": "Ghana",
      "capital": "Accra",
      "subregion": "Western Africa",
      "region": "Africa",
      "population": 31072945,
      "currencies": [
        {
          "code": "GHS",
          "name": "Ghanaian cedi",
          "symbol": "₵"
        }
      ],
      "flag": "https://flagcdn.com/gh.svg",
      "independent": false
    },
    {
      "name": "Gibraltar",
      "capital": "Gibraltar",
      "subregion": "Southern Europe",
      "region": "Europe",
      "population": 33691,
      "currencies": [
        {
          "code": "GIP",
          "name": "Gibraltar pound",
          "symbol": "£"
        }
      ],
      "flag": "https://flagcdn.com/gi.svg",
      "independent": false
    },
    {
      "name": "Greece",
      "capital": "Athens",
      "subregion": "Southern Europe",
      "region": "Europe",
      "population": 10715549,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/gr.svg",
      "independent": false
    },
    {
      "name": "Greenland",
      "capital": "Nuuk",
      "subregion": "Northern America",
      "region": "Americas",
      "population": 56367,
      "currencies": [
        {
          "code": "DKK",
          "name": "Danish krone",
          "symbol": "kr"
        }
      ],
      "flag": "https://flagcdn.com/gl.svg",
      "independent": false
    },
    {
      "name": "Grenada",
      "capital": "St. George's",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 112519,
      "currencies": [
        {
          "code": "XCD",
          "name": "East Caribbean dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/gd.svg",
      "independent": false
    },
    {
      "name": "Guadeloupe",
      "capital": "Basse-Terre",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 400132,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/gp.svg",
      "independent": false
    },
    {
      "name": "Guam",
      "capital": "Hagåtña",
      "subregion": "Micronesia",
      "region": "Oceania",
      "population": 168783,
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/gu.svg",
      "independent": false
    },
    {
      "name": "Guatemala",
      "capital": "Guatemala City",
      "subregion": "Central America",
      "region": "Americas",
      "population": 16858333,
      "currencies": [
        {
          "code": "GTQ",
          "name": "Guatemalan quetzal",
          "symbol": "Q"
        }
      ],
      "flag": "https://flagcdn.com/gt.svg",
      "independent": false
    },
    {
      "name": "Guernsey",
      "capital": "St. Peter Port",
      "subregion": "Northern Europe",
      "region": "Europe",
      "population": 62999,
      "currencies": [
        {
          "code": "GBP",
          "name": "British pound",
          "symbol": "£"
        },
        {
          "code": "GGP",
          "name": "Guernsey pound",
          "symbol": "£"
        }
      ],
      "flag": "https://flagcdn.com/gg.svg",
      "independent": false
    },
    {
      "name": "Guinea",
      "capital": "Conakry",
      "subregion": "Western Africa",
      "region": "Africa",
      "population": 13132792,
      "currencies": [
        {
          "code": "GNF",
          "name": "Guinean franc",
          "symbol": "Fr"
        }
      ],
      "flag": "https://flagcdn.com/gn.svg",
      "independent": false
    },
    {
      "name": "Guinea-Bissau",
      "capital": "Bissau",
      "subregion": "Western Africa",
      "region": "Africa",
      "population": 1967998,
      "currencies": [
        {
          "code": "XOF",
          "name": "West African CFA franc",
          "symbol": "Fr"
        }
      ],
      "flag": "https://flagcdn.com/gw.svg",
      "independent": false
    },
    {
      "name": "Guyana",
      "capital": "Georgetown",
      "subregion": "South America",
      "region": "Americas",
      "population": 786559,
      "currencies": [
        {
          "code": "GYD",
          "name": "Guyanese dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/gy.svg",
      "independent": false
    },
    {
      "name": "Haiti",
      "capital": "Port-au-Prince",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 11402533,
      "currencies": [
        {
          "code": "HTG",
          "name": "Haitian gourde",
          "symbol": "G"
        }
      ],
      "flag": "https://flagcdn.com/ht.svg",
      "independent": false
    },
    {
      "name": "Heard Island and McDonald Islands",
      "subregion": "Antarctic",
      "region": "Antarctic",
      "population": 0,
      "currencies": [
        {
          "code": "AUD",
          "name": "Australian dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/hm.svg",
      "independent": false
    },
    {
      "name": "Vatican City",
      "capital": "Vatican City",
      "subregion": "Southern Europe",
      "region": "Europe",
      "population": 451,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/va.svg",
      "independent": false
    },
    {
      "name": "Honduras",
      "capital": "Tegucigalpa",
      "subregion": "Central America",
      "region": "Americas",
      "population": 9904608,
      "currencies": [
        {
          "code": "HNL",
          "name": "Honduran lempira",
          "symbol": "L"
        }
      ],
      "flag": "https://flagcdn.com/hn.svg",
      "independent": false
    },
    {
      "name": "Hungary",
      "capital": "Budapest",
      "subregion": "Central Europe",
      "region": "Europe",
      "population": 9749763,
      "currencies": [
        {
          "code": "HUF",
          "name": "Hungarian forint",
          "symbol": "Ft"
        }
      ],
      "flag": "https://flagcdn.com/hu.svg",
      "independent": false
    },
    {
      "name": "Hong Kong",
      "capital": "City of Victoria",
      "subregion": "Eastern Asia",
      "region": "Asia",
      "population": 7481800,
      "currencies": [
        {
          "code": "HKD",
          "name": "Hong Kong dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/hk.svg",
      "independent": false
    },
    {
      "name": "Iceland",
      "capital": "Reykjavík",
      "subregion": "Northern Europe",
      "region": "Europe",
      "population": 366425,
      "currencies": [
        {
          "code": "ISK",
          "name": "Icelandic króna",
          "symbol": "kr"
        }
      ],
      "flag": "https://flagcdn.com/is.svg",
      "independent": false
    },
    {
      "name": "India",
      "capital": "New Delhi",
      "subregion": "Southern Asia",
      "region": "Asia",
      "population": 1380004385,
      "currencies": [
        {
          "code": "INR",
          "name": "Indian rupee",
          "symbol": "₹"
        }
      ],
      "flag": "https://flagcdn.com/in.svg",
      "independent": false
    },
    {
      "name": "Indonesia",
      "capital": "Jakarta",
      "subregion": "South-Eastern Asia",
      "region": "Asia",
      "population": 273523621,
      "currencies": [
        {
          "code": "IDR",
          "name": "Indonesian rupiah",
          "symbol": "Rp"
        }
      ],
      "flag": "https://flagcdn.com/id.svg",
      "independent": false
    },
    {
      "name": "Ivory Coast",
      "capital": "Yamoussoukro",
      "subregion": "Western Africa",
      "region": "Africa",
      "population": 26378275,
      "currencies": [
        {
          "code": "XOF",
          "name": "West African CFA franc",
          "symbol": "Fr"
        }
      ],
      "flag": "https://flagcdn.com/ci.svg",
      "independent": false
    },
    {
      "name": "Iran (Islamic Republic of)",
      "capital": "Tehran",
      "subregion": "Southern Asia",
      "region": "Asia",
      "population": 83992953,
      "currencies": [
        {
          "code": "IRR",
          "name": "Iranian rial",
          "symbol": "﷼"
        }
      ],
      "flag": "https://flagcdn.com/ir.svg",
      "independent": false
    },
    {
      "name": "Iraq",
      "capital": "Baghdad",
      "subregion": "Western Asia",
      "region": "Asia",
      "population": 40222503,
      "currencies": [
        {
          "code": "IQD",
          "name": "Iraqi dinar",
          "symbol": "ع.د"
        }
      ],
      "flag": "https://flagcdn.com/iq.svg",
      "independent": false
    },
    {
      "name": "Ireland",
      "capital": "Dublin",
      "subregion": "Northern Europe",
      "region": "Europe",
      "population": 4994724,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/ie.svg",
      "independent": false
    },
    {
      "name": "Isle of Man",
      "capital": "Douglas",
      "subregion": "Northern Europe",
      "region": "Europe",
      "population": 85032,
      "currencies": [
        {
          "code": "GBP",
          "name": "British pound",
          "symbol": "£"
        },
        {
          "code": "IMP[G]",
          "name": "Manx pound",
          "symbol": "£"
        }
      ],
      "flag": "https://flagcdn.com/im.svg",
      "independent": false
    },
    {
      "name": "Israel",
      "capital": "Jerusalem",
      "subregion": "Western Asia",
      "region": "Asia",
      "population": 9216900,
      "currencies": [
        {
          "code": "ILS",
          "name": "Israeli new shekel",
          "symbol": "₪"
        }
      ],
      "flag": "https://flagcdn.com/il.svg",
      "independent": false
    },
    {
      "name": "Italy",
      "capital": "Rome",
      "subregion": "Southern Europe",
      "region": "Europe",
      "population": 59554023,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/it.svg",
      "independent": false
    },
    {
      "name": "Jamaica",
      "capital": "Kingston",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 2961161,
      "currencies": [
        {
          "code": "JMD",
          "name": "Jamaican dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/jm.svg",
      "independent": false
    },
    {
      "name": "Japan",
      "capital": "Tokyo",
      "subregion": "Eastern Asia",
      "region": "Asia",
      "population": 125836021,
      "currencies": [
        {
          "code": "JPY",
          "name": "Japanese yen",
          "symbol": "¥"
        }
      ],
      "flag": "https://flagcdn.com/jp.svg",
      "independent": false
    },
    {
      "name": "Jersey",
      "capital": "Saint Helier",
      "subregion": "Northern Europe",
      "region": "Europe",
      "population": 100800,
      "currencies": [
        {
          "code": "GBP",
          "name": "British pound",
          "symbol": "£"
        },
        {
          "code": "JEP[G]",
          "name": "Jersey pound",
          "symbol": "£"
        }
      ],
      "flag": "https://flagcdn.com/je.svg",
      "independent": false
    },
    {
      "name": "Jordan",
      "capital": "Amman",
      "subregion": "Western Asia",
      "region": "Asia",
      "population": 10203140,
      "currencies": [
        {
          "code": "JOD",
          "name": "Jordanian dinar",
          "symbol": "د.ا"
        }
      ],
      "flag": "https://flagcdn.com/jo.svg",
      "independent": false
    },
    {
      "name": "Kazakhstan",
      "capital": "Nur-Sultan",
      "subregion": "Central Asia",
      "region": "Asia",
      "population": 18754440,
      "currencies": [
        {
          "code": "KZT",
          "name": "Kazakhstani tenge",
          "symbol": "₸"
        }
      ],
      "flag": "https://flagcdn.com/kz.svg",
      "independent": false
    },
    {
      "name": "Kenya",
      "capital": "Nairobi",
      "subregion": "Eastern Africa",
      "region": "Africa",
      "population": 53771300,
      "currencies": [
        {
          "code": "KES",
          "name": "Kenyan shilling",
          "symbol": "Sh"
        }
      ],
      "flag": "https://flagcdn.com/ke.svg",
      "independent": false
    },
    {
      "name": "Kiribati",
      "capital": "South Tarawa",
      "subregion": "Micronesia",
      "region": "Oceania",
      "population": 119446,
      "currencies": [
        {
          "code": "AUD",
          "name": "Australian dollar",
          "symbol": "$"
        },
        {
          "code": "KID",
          "name": "Kiribati dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/ki.svg",
      "independent": false
    },
    {
      "name": "Kuwait",
      "capital": "Kuwait City",
      "subregion": "Western Asia",
      "region": "Asia",
      "population": 4270563,
      "currencies": [
        {
          "code": "KWD",
          "name": "Kuwaiti dinar",
          "symbol": "د.ك"
        }
      ],
      "flag": "https://flagcdn.com/kw.svg",
      "independent": false
    },
    {
      "name": "Kyrgyzstan",
      "capital": "Bishkek",
      "subregion": "Central Asia",
      "region": "Asia",
      "population": 6591600,
      "currencies": [
        {
          "code": "KGS",
          "name": "Kyrgyzstani som",
          "symbol": "с"
        }
      ],
      "flag": "https://flagcdn.com/kg.svg",
      "independent": false
    },
    {
      "name": "Lao People's Democratic Republic",
      "capital": "Vientiane",
      "subregion": "South-Eastern Asia",
      "region": "Asia",
      "population": 7275556,
      "currencies": [
        {
          "code": "LAK",
          "name": "Lao kip",
          "symbol": "₭"
        }
      ],
      "flag": "https://flagcdn.com/la.svg",
      "independent": false
    },
    {
      "name": "Latvia",
      "capital": "Riga",
      "subregion": "Northern Europe",
      "region": "Europe",
      "population": 1901548,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/lv.svg",
      "independent": false
    },
    {
      "name": "Lebanon",
      "capital": "Beirut",
      "subregion": "Western Asia",
      "region": "Asia",
      "population": 6825442,
      "currencies": [
        {
          "code": "LBP",
          "name": "Lebanese pound",
          "symbol": "ل.ل"
        }
      ],
      "flag": "https://flagcdn.com/lb.svg",
      "independent": false
    },
    {
      "name": "Lesotho",
      "capital": "Maseru",
      "subregion": "Southern Africa",
      "region": "Africa",
      "population": 2142252,
      "currencies": [
        {
          "code": "LSL",
          "name": "Lesotho loti",
          "symbol": "L"
        },
        {
          "code": "ZAR",
          "name": "South African rand",
          "symbol": "R"
        }
      ],
      "flag": "https://flagcdn.com/ls.svg",
      "independent": false
    },
    {
      "name": "Liberia",
      "capital": "Monrovia",
      "subregion": "Western Africa",
      "region": "Africa",
      "population": 5057677,
      "currencies": [
        {
          "code": "LRD",
          "name": "Liberian dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/lr.svg",
      "independent": false
    },
    {
      "name": "Libya",
      "capital": "Tripoli",
      "subregion": "Northern Africa",
      "region": "Africa",
      "population": 6871287,
      "currencies": [
        {
          "code": "LYD",
          "name": "Libyan dinar",
          "symbol": "ل.د"
        }
      ],
      "flag": "https://flagcdn.com/ly.svg",
      "independent": false
    },
    {
      "name": "Liechtenstein",
      "capital": "Vaduz",
      "subregion": "Central Europe",
      "region": "Europe",
      "population": 38137,
      "currencies": [
        {
          "code": "CHF",
          "name": "Swiss franc",
          "symbol": "Fr"
        }
      ],
      "flag": "https://flagcdn.com/li.svg",
      "independent": false
    },
    {
      "name": "Lithuania",
      "capital": "Vilnius",
      "subregion": "Northern Europe",
      "region": "Europe",
      "population": 2794700,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/lt.svg",
      "independent": false
    },
    {
      "name": "Luxembourg",
      "capital": "Luxembourg",
      "subregion": "Western Europe",
      "region": "Europe",
      "population": 632275,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/lu.svg",
      "independent": false
    },
    {
      "name": "Macao",
      "subregion": "Eastern Asia",
      "region": "Asia",
      "population": 649342,
      "currencies": [
        {
          "code": "MOP",
          "name": "Macanese pataca",
          "symbol": "P"
        }
      ],
      "flag": "https://flagcdn.com/mo.svg",
      "independent": false
    },
    {
      "name": "North Macedonia",
      "capital": "Skopje",
      "subregion": "Southern Europe",
      "region": "Europe",
      "population": 2083380,
      "currencies": [
        {
          "code": "MKD",
          "name": "Macedonian denar",
          "symbol": "ден"
        }
      ],
      "flag": "https://flagcdn.com/mk.svg",
      "independent": false
    },
    {
      "name": "Madagascar",
      "capital": "Antananarivo",
      "subregion": "Eastern Africa",
      "region": "Africa",
      "population": 27691019,
      "currencies": [
        {
          "code": "MGA",
          "name": "Malagasy ariary",
          "symbol": "Ar"
        }
      ],
      "flag": "https://flagcdn.com/mg.svg",
      "independent": false
    },
    {
      "name": "Malawi",
      "capital": "Lilongwe",
      "subregion": "Eastern Africa",
      "region": "Africa",
      "population": 19129955,
      "currencies": [
        {
          "code": "MWK",
          "name": "Malawian kwacha",
          "symbol": "MK"
        }
      ],
      "flag": "https://flagcdn.com/mw.svg",
      "independent": false
    },
    {
      "name": "Malaysia",
      "capital": "Kuala Lumpur",
      "subregion": "South-Eastern Asia",
      "region": "Asia",
      "population": 32365998,
      "currencies": [
        {
          "code": "MYR",
          "name": "Malaysian ringgit",
          "symbol": "RM"
        }
      ],
      "flag": "https://flagcdn.com/my.svg",
      "independent": false
    },
    {
      "name": "Maldives",
      "capital": "Malé",
      "subregion": "Southern Asia",
      "region": "Asia",
      "population": 540542,
      "currencies": [
        {
          "code": "MVR",
          "name": "Maldivian rufiyaa",
          "symbol": ".ރ"
        }
      ],
      "flag": "https://flagcdn.com/mv.svg",
      "independent": false
    },
    {
      "name": "Mali",
      "capital": "Bamako",
      "subregion": "Western Africa",
      "region": "Africa",
      "population": 20250834,
      "currencies": [
        {
          "code": "XOF",
          "name": "West African CFA franc",
          "symbol": "Fr"
        }
      ],
      "flag": "https://flagcdn.com/ml.svg",
      "independent": false
    },
    {
      "name": "Malta",
      "capital": "Valletta",
      "subregion": "Southern Europe",
      "region": "Europe",
      "population": 525285,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/mt.svg",
      "independent": false
    },
    {
      "name": "Marshall Islands",
      "capital": "Majuro",
      "subregion": "Micronesia",
      "region": "Oceania",
      "population": 59194,
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/mh.svg",
      "independent": false
    },
    {
      "name": "Martinique",
      "capital": "Fort-de-France",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 378243,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/mq.svg",
      "independent": false
    },
    {
      "name": "Mauritania",
      "capital": "Nouakchott",
      "subregion": "Western Africa",
      "region": "Africa",
      "population": 4649660,
      "currencies": [
        {
          "code": "MRO",
          "name": "Mauritanian ouguiya",
          "symbol": "UM"
        }
      ],
      "flag": "https://flagcdn.com/mr.svg",
      "independent": false
    },
    {
      "name": "Mauritius",
      "capital": "Port Louis",
      "subregion": "Eastern Africa",
      "region": "Africa",
      "population": 1265740,
      "currencies": [
        {
          "code": "MUR",
          "name": "Mauritian rupee",
          "symbol": "₨"
        }
      ],
      "flag": "https://flagcdn.com/mu.svg",
      "independent": false
    },
    {
      "name": "Mayotte",
      "capital": "Mamoudzou",
      "subregion": "Eastern Africa",
      "region": "Africa",
      "population": 226915,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/yt.svg",
      "independent": false
    },
    {
      "name": "Mexico",
      "capital": "Mexico City",
      "subregion": "North America",
      "region": "Americas",
      "population": 128932753,
      "currencies": [
        {
          "code": "MXN",
          "name": "Mexican peso",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/mx.svg",
      "independent": false
    },
    {
      "name": "Micronesia (Federated States of)",
      "capital": "Palikir",
      "subregion": "Micronesia",
      "region": "Oceania",
      "population": 115021,
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/fm.svg",
      "independent": false
    },
    {
      "name": "Moldova (Republic of)",
      "capital": "Chișinău",
      "subregion": "Eastern Europe",
      "region": "Europe",
      "population": 2617820,
      "currencies": [
        {
          "code": "MDL",
          "name": "Moldovan leu",
          "symbol": "L"
        }
      ],
      "flag": "https://flagcdn.com/md.svg",
      "independent": false
    },
    {
      "name": "Monaco",
      "capital": "Monaco",
      "subregion": "Western Europe",
      "region": "Europe",
      "population": 39244,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/mc.svg",
      "independent": false
    },
    {
      "name": "Mongolia",
      "capital": "Ulan Bator",
      "subregion": "Eastern Asia",
      "region": "Asia",
      "population": 3278292,
      "currencies": [
        {
          "code": "MNT",
          "name": "Mongolian tögrög",
          "symbol": "₮"
        }
      ],
      "flag": "https://flagcdn.com/mn.svg",
      "independent": false
    },
    {
      "name": "Montenegro",
      "capital": "Podgorica",
      "subregion": "Southern Europe",
      "region": "Europe",
      "population": 621718,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/me.svg",
      "independent": false
    },
    {
      "name": "Montserrat",
      "capital": "Plymouth",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 4922,
      "currencies": [
        {
          "code": "XCD",
          "name": "East Caribbean dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/ms.svg",
      "independent": false
    },
    {
      "name": "Morocco",
      "capital": "Rabat",
      "subregion": "Northern Africa",
      "region": "Africa",
      "population": 36910558,
      "currencies": [
        {
          "code": "MAD",
          "name": "Moroccan dirham",
          "symbol": "د.م."
        }
      ],
      "flag": "https://flagcdn.com/ma.svg",
      "independent": false
    },
    {
      "name": "Mozambique",
      "capital": "Maputo",
      "subregion": "Eastern Africa",
      "region": "Africa",
      "population": 31255435,
      "currencies": [
        {
          "code": "MZN",
          "name": "Mozambican metical",
          "symbol": "MT"
        }
      ],
      "flag": "https://flagcdn.com/mz.svg",
      "independent": false
    },
    {
      "name": "Myanmar",
      "capital": "Naypyidaw",
      "subregion": "South-Eastern Asia",
      "region": "Asia",
      "population": 54409794,
      "currencies": [
        {
          "code": "MMK",
          "name": "Burmese kyat",
          "symbol": "Ks"
        }
      ],
      "flag": "https://flagcdn.com/mm.svg",
      "independent": false
    },
    {
      "name": "Namibia",
      "capital": "Windhoek",
      "subregion": "Southern Africa",
      "region": "Africa",
      "population": 2540916,
      "currencies": [
        {
          "code": "NAD",
          "name": "Namibian dollar",
          "symbol": "$"
        },
        {
          "code": "ZAR",
          "name": "South African rand",
          "symbol": "R"
        }
      ],
      "flag": "https://flagcdn.com/na.svg",
      "independent": false
    },
    {
      "name": "Nauru",
      "capital": "Yaren",
      "subregion": "Micronesia",
      "region": "Oceania",
      "population": 10834,
      "currencies": [
        {
          "code": "AUD",
          "name": "Australian dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/nr.svg",
      "independent": false
    },
    {
      "name": "Nepal",
      "capital": "Kathmandu",
      "subregion": "Southern Asia",
      "region": "Asia",
      "population": 29136808,
      "currencies": [
        {
          "code": "NPR",
          "name": "Nepalese rupee",
          "symbol": "₨"
        }
      ],
      "flag": "https://flagcdn.com/np.svg",
      "independent": false
    },
    {
      "name": "Netherlands",
      "capital": "Amsterdam",
      "subregion": "Western Europe",
      "region": "Europe",
      "population": 17441139,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/nl.svg",
      "independent": false
    },
    {
      "name": "New Caledonia",
      "capital": "Nouméa",
      "subregion": "Melanesia",
      "region": "Oceania",
      "population": 271960,
      "currencies": [
        {
          "code": "XPF",
          "name": "CFP franc",
          "symbol": "Fr"
        }
      ],
      "flag": "https://flagcdn.com/nc.svg",
      "independent": false
    },
    {
      "name": "New Zealand",
      "capital": "Wellington",
      "subregion": "Australia and New Zealand",
      "region": "Oceania",
      "population": 5084300,
      "currencies": [
        {
          "code": "NZD",
          "name": "New Zealand dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/nz.svg",
      "independent": false
    },
    {
      "name": "Nicaragua",
      "capital": "Managua",
      "subregion": "Central America",
      "region": "Americas",
      "population": 6624554,
      "currencies": [
        {
          "code": "NIO",
          "name": "Nicaraguan córdoba",
          "symbol": "C$"
        }
      ],
      "flag": "https://flagcdn.com/ni.svg",
      "independent": false
    },
    {
      "name": "Niger",
      "capital": "Niamey",
      "subregion": "Western Africa",
      "region": "Africa",
      "population": 24206636,
      "currencies": [
        {
          "code": "XOF",
          "name": "West African CFA franc",
          "symbol": "Fr"
        }
      ],
      "flag": "https://flagcdn.com/ne.svg",
      "independent": false
    },
    {
      "name": "Nigeria",
      "capital": "Abuja",
      "subregion": "Western Africa",
      "region": "Africa",
      "population": 206139587,
      "currencies": [
        {
          "code": "NGN",
          "name": "Nigerian naira",
          "symbol": "₦"
        }
      ],
      "flag": "https://flagcdn.com/ng.svg",
      "independent": false
    },
    {
      "name": "Niue",
      "capital": "Alofi",
      "subregion": "Polynesia",
      "region": "Oceania",
      "population": 1470,
      "currencies": [
        {
          "code": "NZD",
          "name": "New Zealand dollar",
          "symbol": "$"
        },
        {
          "code": "NZD",
          "name": "Niue dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/nu.svg",
      "independent": false
    },
    {
      "name": "Norfolk Island",
      "capital": "Kingston",
      "subregion": "Australia and New Zealand",
      "region": "Oceania",
      "population": 2302,
      "currencies": [
        {
          "code": "AUD",
          "name": "Australian dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/nf.svg",
      "independent": false
    },
    {
      "name": "Korea (Democratic People's Republic of)",
      "capital": "Pyongyang",
      "subregion": "Eastern Asia",
      "region": "Asia",
      "population": 25778815,
      "currencies": [
        {
          "code": "KPW",
          "name": "North Korean won",
          "symbol": "₩"
        }
      ],
      "flag": "https://flagcdn.com/kp.svg",
      "independent": false
    },
    {
      "name": "Northern Mariana Islands",
      "capital": "Saipan",
      "subregion": "Micronesia",
      "region": "Oceania",
      "population": 57557,
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/mp.svg",
      "independent": false
    },
    {
      "name": "Norway",
      "capital": "Oslo",
      "subregion": "Northern Europe",
      "region": "Europe",
      "population": 5379475,
      "currencies": [
        {
          "code": "NOK",
          "name": "Norwegian krone",
          "symbol": "kr"
        }
      ],
      "flag": "https://flagcdn.com/no.svg",
      "independent": false
    },
    {
      "name": "Oman",
      "capital": "Muscat",
      "subregion": "Western Asia",
      "region": "Asia",
      "population": 5106622,
      "currencies": [
        {
          "code": "OMR",
          "name": "Omani rial",
          "symbol": "ر.ع."
        }
      ],
      "flag": "https://flagcdn.com/om.svg",
      "independent": false
    },
    {
      "name": "Pakistan",
      "capital": "Islamabad",
      "subregion": "Southern Asia",
      "region": "Asia",
      "population": 220892331,
      "currencies": [
        {
          "code": "PKR",
          "name": "Pakistani rupee",
          "symbol": "₨"
        }
      ],
      "flag": "https://flagcdn.com/pk.svg",
      "independent": false
    },
    {
      "name": "Palau",
      "capital": "Ngerulmud",
      "subregion": "Micronesia",
      "region": "Oceania",
      "population": 18092,
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/pw.svg",
      "independent": false
    },
    {
      "name": "Palestine, State of",
      "capital": "Ramallah",
      "subregion": "Western Asia",
      "region": "Asia",
      "population": 4803269,
      "currencies": [
        {
          "code": "EGP",
          "name": "Egyptian pound",
          "symbol": "E£"
        },
        {
          "code": "ILS",
          "name": "Israeli new shekel",
          "symbol": "₪"
        },
        {
          "code": "JOD",
          "name": "Jordanian dinar",
          "symbol": "د.أ"
        }
      ],
      "flag": "https://flagcdn.com/ps.svg",
      "independent": false
    },
    {
      "name": "Panama",
      "capital": "Panama City",
      "subregion": "Central America",
      "region": "Americas",
      "population": 4314768,
      "currencies": [
        {
          "code": "PAB",
          "name": "Panamanian balboa",
          "symbol": "B/."
        },
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/pa.svg",
      "independent": false
    },
    {
      "name": "Papua New Guinea",
      "capital": "Port Moresby",
      "subregion": "Melanesia",
      "region": "Oceania",
      "population": 8947027,
      "currencies": [
        {
          "code": "PGK",
          "name": "Papua New Guinean kina",
          "symbol": "K"
        }
      ],
      "flag": "https://flagcdn.com/pg.svg",
      "independent": false
    },
    {
      "name": "Paraguay",
      "capital": "Asunción",
      "subregion": "South America",
      "region": "Americas",
      "population": 7132530,
      "currencies": [
        {
          "code": "PYG",
          "name": "Paraguayan guaraní",
          "symbol": "₲"
        }
      ],
      "flag": "https://flagcdn.com/py.svg",
      "independent": false
    },
    {
      "name": "Peru",
      "capital": "Lima",
      "subregion": "South America",
      "region": "Americas",
      "population": 32971846,
      "currencies": [
        {
          "code": "PEN",
          "name": "Peruvian sol",
          "symbol": "S/."
        }
      ],
      "flag": "https://flagcdn.com/pe.svg",
      "independent": false
    },
    {
      "name": "Philippines",
      "capital": "Manila",
      "subregion": "South-Eastern Asia",
      "region": "Asia",
      "population": 109581085,
      "currencies": [
        {
          "code": "PHP",
          "name": "Philippine peso",
          "symbol": "₱"
        }
      ],
      "flag": "https://flagcdn.com/ph.svg",
      "independent": false
    },
    {
      "name": "Pitcairn",
      "capital": "Adamstown",
      "subregion": "Polynesia",
      "region": "Oceania",
      "population": 56,
      "currencies": [
        {
          "code": "NZD",
          "name": "New Zealand dollar",
          "symbol": "$"
        },
        {
          "code": "PND",
          "name": "Pitcairn Islands dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/pn.svg",
      "independent": false
    },
    {
      "name": "Poland",
      "capital": "Warsaw",
      "subregion": "Central Europe",
      "region": "Europe",
      "population": 37950802,
      "currencies": [
        {
          "code": "PLN",
          "name": "Polish złoty",
          "symbol": "zł"
        }
      ],
      "flag": "https://flagcdn.com/pl.svg",
      "independent": false
    },
    {
      "name": "Portugal",
      "capital": "Lisbon",
      "subregion": "Southern Europe",
      "region": "Europe",
      "population": 10305564,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/pt.svg",
      "independent": false
    },
    {
      "name": "Puerto Rico",
      "capital": "San Juan",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 3194034,
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/pr.svg",
      "independent": false
    },
    {
      "name": "Qatar",
      "capital": "Doha",
      "subregion": "Western Asia",
      "region": "Asia",
      "population": 2881060,
      "currencies": [
        {
          "code": "QAR",
          "name": "Qatari riyal",
          "symbol": "ر.ق"
        }
      ],
      "flag": "https://flagcdn.com/qa.svg",
      "independent": false
    },
    {
      "name": "Republic of Kosovo",
      "capital": "Pristina",
      "subregion": "Eastern Europe",
      "region": "Europe",
      "population": 1775378,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/xk.svg",
      "independent": false
    },
    {
      "name": "Réunion",
      "capital": "Saint-Denis",
      "subregion": "Eastern Africa",
      "region": "Africa",
      "population": 840974,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/re.svg",
      "independent": false
    },
    {
      "name": "Romania",
      "capital": "Bucharest",
      "subregion": "Eastern Europe",
      "region": "Europe",
      "population": 19286123,
      "currencies": [
        {
          "code": "RON",
          "name": "Romanian leu",
          "symbol": "lei"
        }
      ],
      "flag": "https://flagcdn.com/ro.svg",
      "independent": false
    },
    {
      "name": "Russian Federation",
      "capital": "Moscow",
      "subregion": "Eastern Europe",
      "region": "Europe",
      "population": 144104080,
      "currencies": [
        {
          "code": "RUB",
          "name": "Russian ruble",
          "symbol": "₽"
        }
      ],
      "flag": "https://flagcdn.com/ru.svg",
      "independent": false
    },
    {
      "name": "Rwanda",
      "capital": "Kigali",
      "subregion": "Eastern Africa",
      "region": "Africa",
      "population": 12952209,
      "currencies": [
        {
          "code": "RWF",
          "name": "Rwandan franc",
          "symbol": "Fr"
        }
      ],
      "flag": "https://flagcdn.com/rw.svg",
      "independent": false
    },
    {
      "name": "Saint Barthélemy",
      "capital": "Gustavia",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 9417,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/bl.svg",
      "independent": false
    },
    {
      "name": "Saint Helena, Ascension and Tristan da Cunha",
      "capital": "Jamestown",
      "subregion": "Western Africa",
      "region": "Africa",
      "population": 4255,
      "currencies": [
        {
          "code": "SHP",
          "name": "Saint Helena pound",
          "symbol": "£"
        }
      ],
      "flag": "https://flagcdn.com/sh.svg",
      "independent": false
    },
    {
      "name": "Saint Kitts and Nevis",
      "capital": "Basseterre",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 53192,
      "currencies": [
        {
          "code": "XCD",
          "name": "East Caribbean dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/kn.svg",
      "independent": false
    },
    {
      "name": "Saint Lucia",
      "capital": "Castries",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 183629,
      "currencies": [
        {
          "code": "XCD",
          "name": "East Caribbean dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/lc.svg",
      "independent": false
    },
    {
      "name": "Saint Martin (French part)",
      "capital": "Marigot",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 38659,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/mf.svg",
      "independent": false
    },
    {
      "name": "Saint Pierre and Miquelon",
      "capital": "Saint-Pierre",
      "subregion": "Northern America",
      "region": "Americas",
      "population": 6069,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/pm.svg",
      "independent": false
    },
    {
      "name": "Saint Vincent and the Grenadines",
      "capital": "Kingstown",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 110947,
      "currencies": [
        {
          "code": "XCD",
          "name": "East Caribbean dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/vc.svg",
      "independent": false
    },
    {
      "name": "Samoa",
      "capital": "Apia",
      "subregion": "Polynesia",
      "region": "Oceania",
      "population": 198410,
      "currencies": [
        {
          "code": "WST",
          "name": "Samoan tālā",
          "symbol": "T"
        }
      ],
      "flag": "https://flagcdn.com/ws.svg",
      "independent": false
    },
    {
      "name": "San Marino",
      "capital": "City of San Marino",
      "subregion": "Southern Europe",
      "region": "Europe",
      "population": 33938,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/sm.svg",
      "independent": false
    },
    {
      "name": "Sao Tome and Principe",
      "capital": "São Tomé",
      "subregion": "Middle Africa",
      "region": "Africa",
      "population": 219161,
      "currencies": [
        {
          "code": "STD",
          "name": "São Tomé and Príncipe dobra",
          "symbol": "Db"
        }
      ],
      "flag": "https://flagcdn.com/st.svg",
      "independent": false
    },
    {
      "name": "Saudi Arabia",
      "capital": "Riyadh",
      "subregion": "Western Asia",
      "region": "Asia",
      "population": 34813867,
      "currencies": [
        {
          "code": "SAR",
          "name": "Saudi riyal",
          "symbol": "ر.س"
        }
      ],
      "flag": "https://flagcdn.com/sa.svg",
      "independent": false
    },
    {
      "name": "Senegal",
      "capital": "Dakar",
      "subregion": "Western Africa",
      "region": "Africa",
      "population": 16743930,
      "currencies": [
        {
          "code": "XOF",
          "name": "West African CFA franc",
          "symbol": "Fr"
        }
      ],
      "flag": "https://flagcdn.com/sn.svg",
      "independent": false
    },
    {
      "name": "Serbia",
      "capital": "Belgrade",
      "subregion": "Southern Europe",
      "region": "Europe",
      "population": 6908224,
      "currencies": [
        {
          "code": "RSD",
          "name": "Serbian dinar",
          "symbol": "дин."
        }
      ],
      "flag": "https://flagcdn.com/rs.svg",
      "independent": false
    },
    {
      "name": "Seychelles",
      "capital": "Victoria",
      "subregion": "Eastern Africa",
      "region": "Africa",
      "population": 98462,
      "currencies": [
        {
          "code": "SCR",
          "name": "Seychellois rupee",
          "symbol": "₨"
        }
      ],
      "flag": "https://flagcdn.com/sc.svg",
      "independent": false
    },
    {
      "name": "Sierra Leone",
      "capital": "Freetown",
      "subregion": "Western Africa",
      "region": "Africa",
      "population": 7976985,
      "currencies": [
        {
          "code": "SLL",
          "name": "Sierra Leonean leone",
          "symbol": "Le"
        }
      ],
      "flag": "https://flagcdn.com/sl.svg",
      "independent": false
    },
    {
      "name": "Singapore",
      "capital": "Singapore",
      "subregion": "South-Eastern Asia",
      "region": "Asia",
      "population": 5685807,
      "currencies": [
        {
          "code": "SGD",
          "name": "Singapore dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/sg.svg",
      "independent": false
    },
    {
      "name": "Sint Maarten (Dutch part)",
      "capital": "Philipsburg",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 40812,
      "currencies": [
        {
          "code": "ANG",
          "name": "Netherlands Antillean guilder",
          "symbol": "ƒ"
        }
      ],
      "flag": "https://flagcdn.com/sx.svg",
      "independent": false
    },
    {
      "name": "Slovakia",
      "capital": "Bratislava",
      "subregion": "Central Europe",
      "region": "Europe",
      "population": 5458827,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/sk.svg",
      "independent": false
    },
    {
      "name": "Slovenia",
      "capital": "Ljubljana",
      "subregion": "Southern Europe",
      "region": "Europe",
      "population": 2100126,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/si.svg",
      "independent": false
    },
    {
      "name": "Solomon Islands",
      "capital": "Honiara",
      "subregion": "Melanesia",
      "region": "Oceania",
      "population": 686878,
      "currencies": [
        {
          "code": "SBD",
          "name": "Solomon Islands dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/sb.svg",
      "independent": false
    },
    {
      "name": "Somalia",
      "capital": "Mogadishu",
      "subregion": "Eastern Africa",
      "region": "Africa",
      "population": 15893219,
      "currencies": [
        {
          "code": "SOS",
          "name": "Somali shilling",
          "symbol": "Sh"
        }
      ],
      "flag": "https://flagcdn.com/so.svg",
      "independent": false
    },
    {
      "name": "South Africa",
      "capital": "Pretoria",
      "subregion": "Southern Africa",
      "region": "Africa",
      "population": 59308690,
      "currencies": [
        {
          "code": "ZAR",
          "name": "South African rand",
          "symbol": "R"
        }
      ],
      "flag": "https://flagcdn.com/za.svg",
      "independent": false
    },
    {
      "name": "South Georgia and the South Sandwich Islands",
      "capital": "King Edward Point",
      "subregion": "South America",
      "region": "Americas",
      "population": 30,
      "currencies": [
        {
          "code": "FKP",
          "name": "Falkland Islands Pound",
          "symbol": "£"
        }
      ],
      "flag": "https://flagcdn.com/gs.svg",
      "independent": false
    },
    {
      "name": "Korea (Republic of)",
      "capital": "Seoul",
      "subregion": "Eastern Asia",
      "region": "Asia",
      "population": 51780579,
      "currencies": [
        {
          "code": "KRW",
          "name": "South Korean won",
          "symbol": "₩"
        }
      ],
      "flag": "https://flagcdn.com/kr.svg",
      "independent": false
    },
    {
      "name": "Spain",
      "capital": "Madrid",
      "subregion": "Southern Europe",
      "region": "Europe",
      "population": 47351567,
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "flag": "https://flagcdn.com/es.svg",
      "independent": false
    },
    {
      "name": "Sri Lanka",
      "capital": "Sri Jayawardenepura Kotte",
      "subregion": "Southern Asia",
      "region": "Asia",
      "population": 21919000,
      "currencies": [
        {
          "code": "LKR",
          "name": "Sri Lankan rupee",
          "symbol": "Rs"
        }
      ],
      "flag": "https://flagcdn.com/lk.svg",
      "independent": false
    },
    {
      "name": "Sudan",
      "capital": "Khartoum",
      "subregion": "Northern Africa",
      "region": "Africa",
      "population": 43849269,
      "currencies": [
        {
          "code": "SDG",
          "name": "Sudanese pound",
          "symbol": "ج.س."
        }
      ],
      "flag": "https://flagcdn.com/sd.svg",
      "independent": false
    },
    {
      "name": "South Sudan",
      "capital": "Juba",
      "subregion": "Middle Africa",
      "region": "Africa",
      "population": 11193729,
      "currencies": [
        {
          "code": "SSP",
          "name": "South Sudanese pound",
          "symbol": "£"
        }
      ],
      "flag": "https://flagcdn.com/ss.svg",
      "independent": false
    },
    {
      "name": "Suriname",
      "capital": "Paramaribo",
      "subregion": "South America",
      "region": "Americas",
      "population": 586634,
      "currencies": [
        {
          "code": "SRD",
          "name": "Surinamese dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/sr.svg",
      "independent": false
    },
    {
      "name": "Svalbard and Jan Mayen",
      "capital": "Longyearbyen",
      "subregion": "Northern Europe",
      "region": "Europe",
      "population": 2562,
      "currencies": [
        {
          "code": "NOK",
          "name": "Norwegian krone",
          "symbol": "kr"
        }
      ],
      "flag": "https://flagcdn.com/sj.svg",
      "independent": false
    },
    {
      "name": "Swaziland",
      "capital": "Mbabane",
      "subregion": "Southern Africa",
      "region": "Africa",
      "population": 1160164,
      "currencies": [
        {
          "code": "SZL",
          "name": "Swazi lilangeni",
          "symbol": "L"
        }
      ],
      "flag": "https://flagcdn.com/sz.svg",
      "independent": false
    },
    {
      "name": "Sweden",
      "capital": "Stockholm",
      "subregion": "Northern Europe",
      "region": "Europe",
      "population": 10353442,
      "currencies": [
        {
          "code": "SEK",
          "name": "Swedish krona",
          "symbol": "kr"
        }
      ],
      "flag": "https://flagcdn.com/se.svg",
      "independent": false
    },
    {
      "name": "Switzerland",
      "capital": "Bern",
      "subregion": "Central Europe",
      "region": "Europe",
      "population": 8636896,
      "currencies": [
        {
          "code": "CHF",
          "name": "Swiss franc",
          "symbol": "Fr"
        }
      ],
      "flag": "https://flagcdn.com/ch.svg",
      "independent": false
    },
    {
      "name": "Syrian Arab Republic",
      "capital": "Damascus",
      "subregion": "Western Asia",
      "region": "Asia",
      "population": 17500657,
      "currencies": [
        {
          "code": "SYP",
          "name": "Syrian pound",
          "symbol": "£"
        }
      ],
      "flag": "https://flagcdn.com/sy.svg",
      "independent": false
    },
    {
      "name": "Taiwan",
      "capital": "Taipei",
      "subregion": "Eastern Asia",
      "region": "Asia",
      "population": 23503349,
      "currencies": [
        {
          "code": "TWD",
          "name": "New Taiwan dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/tw.svg",
      "independent": false
    },
    {
      "name": "Tajikistan",
      "capital": "Dushanbe",
      "subregion": "Central Asia",
      "region": "Asia",
      "population": 9537642,
      "currencies": [
        {
          "code": "TJS",
          "name": "Tajikistani somoni",
          "symbol": "ЅМ"
        }
      ],
      "flag": "https://flagcdn.com/tj.svg",
      "independent": false
    },
    {
      "name": "Tanzania, United Republic of",
      "capital": "Dodoma",
      "subregion": "Eastern Africa",
      "region": "Africa",
      "population": 59734213,
      "currencies": [
        {
          "code": "TZS",
          "name": "Tanzanian shilling",
          "symbol": "Sh"
        }
      ],
      "flag": "https://flagcdn.com/tz.svg",
      "independent": false
    },
    {
      "name": "Thailand",
      "capital": "Bangkok",
      "subregion": "South-Eastern Asia",
      "region": "Asia",
      "population": 69799978,
      "currencies": [
        {
          "code": "THB",
          "name": "Thai baht",
          "symbol": "฿"
        }
      ],
      "flag": "https://flagcdn.com/th.svg",
      "independent": false
    },
    {
      "name": "Timor-Leste",
      "capital": "Dili",
      "subregion": "South-Eastern Asia",
      "region": "Asia",
      "population": 1318442,
      "currencies": [
        {
          "code": "USD",
          "name": "United States Dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/tl.svg",
      "independent": false
    },
    {
      "name": "Togo",
      "capital": "Lomé",
      "subregion": "Western Africa",
      "region": "Africa",
      "population": 8278737,
      "currencies": [
        {
          "code": "XOF",
          "name": "West African CFA franc",
          "symbol": "Fr"
        }
      ],
      "flag": "https://flagcdn.com/tg.svg",
      "independent": false
    },
    {
      "name": "Tokelau",
      "capital": "Fakaofo",
      "subregion": "Polynesia",
      "region": "Oceania",
      "population": 1411,
      "currencies": [
        {
          "code": "NZD",
          "name": "New Zealand dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/tk.svg",
      "independent": false
    },
    {
      "name": "Tonga",
      "capital": "Nuku'alofa",
      "subregion": "Polynesia",
      "region": "Oceania",
      "population": 105697,
      "currencies": [
        {
          "code": "TOP",
          "name": "Tongan paʻanga",
          "symbol": "T$"
        }
      ],
      "flag": "https://flagcdn.com/to.svg",
      "independent": false
    },
    {
      "name": "Trinidad and Tobago",
      "capital": "Port of Spain",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 1399491,
      "currencies": [
        {
          "code": "TTD",
          "name": "Trinidad and Tobago dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/tt.svg",
      "independent": false
    },
    {
      "name": "Tunisia",
      "capital": "Tunis",
      "subregion": "Northern Africa",
      "region": "Africa",
      "population": 11818618,
      "currencies": [
        {
          "code": "TND",
          "name": "Tunisian dinar",
          "symbol": "د.ت"
        }
      ],
      "flag": "https://flagcdn.com/tn.svg",
      "independent": false
    },
    {
      "name": "Turkey",
      "capital": "Ankara",
      "subregion": "Western Asia",
      "region": "Asia",
      "population": 84339067,
      "currencies": [
        {
          "code": "TRY",
          "name": "Turkish lira",
          "symbol": "₺"
        }
      ],
      "flag": "https://flagcdn.com/tr.svg",
      "independent": false
    },
    {
      "name": "Turkmenistan",
      "capital": "Ashgabat",
      "subregion": "Central Asia",
      "region": "Asia",
      "population": 6031187,
      "currencies": [
        {
          "code": "TMT",
          "name": "Turkmenistan manat",
          "symbol": "m"
        }
      ],
      "flag": "https://flagcdn.com/tm.svg",
      "independent": false
    },
    {
      "name": "Turks and Caicos Islands",
      "capital": "Cockburn Town",
      "subregion": "Caribbean",
      "region": "Americas",
      "population": 38718,
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/tc.svg",
      "independent": false
    },
    {
      "name": "Tuvalu",
      "capital": "Funafuti",
      "subregion": "Polynesia",
      "region": "Oceania",
      "population": 11792,
      "currencies": [
        {
          "code": "AUD",
          "name": "Australian dollar",
          "symbol": "$"
        },
        {
          "code": "TVD[G]",
          "name": "Tuvaluan dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/tv.svg",
      "independent": false
    },
    {
      "name": "Uganda",
      "capital": "Kampala",
      "subregion": "Eastern Africa",
      "region": "Africa",
      "population": 45741000,
      "currencies": [
        {
          "code": "UGX",
          "name": "Ugandan shilling",
          "symbol": "Sh"
        }
      ],
      "flag": "https://flagcdn.com/ug.svg",
      "independent": false
    },
    {
      "name": "Ukraine",
      "capital": "Kyiv",
      "subregion": "Eastern Europe",
      "region": "Europe",
      "population": 44134693,
      "currencies": [
        {
          "code": "UAH",
          "name": "Ukrainian hryvnia",
          "symbol": "₴"
        }
      ],
      "flag": "https://flagcdn.com/ua.svg",
      "independent": false
    },
    {
      "name": "United Arab Emirates",
      "capital": "Abu Dhabi",
      "subregion": "Western Asia",
      "region": "Asia",
      "population": 9890400,
      "currencies": [
        {
          "code": "AED",
          "name": "United Arab Emirates dirham",
          "symbol": "د.إ"
        }
      ],
      "flag": "https://flagcdn.com/ae.svg",
      "independent": false
    },
    {
      "name": "United Kingdom of Great Britain and Northern Ireland",
      "capital": "London",
      "subregion": "Northern Europe",
      "region": "Europe",
      "population": 67215293,
      "currencies": [
        {
          "code": "GBP",
          "name": "British pound",
          "symbol": "£"
        }
      ],
      "flag": "https://flagcdn.com/gb.svg",
      "independent": false
    },
    {
      "name": "United States of America",
      "capital": "Washington, D.C.",
      "subregion": "Northern America",
      "region": "Americas",
      "population": 329484123,
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/us.svg",
      "independent": false
    },
    {
      "name": "Uruguay",
      "capital": "Montevideo",
      "subregion": "South America",
      "region": "Americas",
      "population": 3473727,
      "currencies": [
        {
          "code": "UYU",
          "name": "Uruguayan peso",
          "symbol": "$"
        }
      ],
      "flag": "https://flagcdn.com/uy.svg",
      "independent": false
    },
    {
      "name": "Uzbekistan",
      "capital": "Tashkent",
      "subregion": "Central Asia",
      "region": "Asia",
      "population": 34232050,
      "currencies": [
        {
          "code": "UZS",
          "name": "Uzbekistani so'm",
          "symbol": "so'm"
        }
      ],
      "flag": "https://flagcdn.com/uz.svg",
      "independent": false
    },
    {
      "name": "Vanuatu",
      "capital": "Port Vila",
      "subregion": "Melanesia",
      "region": "Oceania",
      "population": 307150,
      "currencies": [
        {
          "code": "VUV",
          "name": "Vanuatu vatu",
          "symbol": "Vt"
        }
      ],
      "flag": "https://flagcdn.com/vu.svg",
      "independent": false
    },
    {
      "name": "Venezuela (Bolivarian Republic of)",
      "capital": "Caracas",
      "subregion": "South America",
      "region": "Americas",
      "population": 28435943,
      "currencies": [
        {
          "code": "VEF",
          "name": "Venezuelan bolívar",
          "symbol": "Bs S"
        }
      ],
      "flag": "https://flagcdn.com/ve.svg",
      "independent": false
    },
    {
      "name": "Vietnam",
      "capital": "Hanoi",
      "subregion": "South-Eastern Asia",
      "region": "Asia",
      "population": 97338583,
      "currencies": [
        {
          "code": "VND",
          "name": "Vietnamese đồng",
          "symbol": "₫"
        }
      ],
      "flag": "https://flagcdn.com/vn.svg",
      "independent": false
    },
    {
      "name": "Wallis and Futuna",
      "capital": "Mata-Utu",
      "subregion": "Polynesia",
      "region": "Oceania",
      "population": 11750,
      "currencies": [
        {
          "code": "XPF",
          "name": "CFP franc",
          "symbol": "Fr"
        }
      ],
      "flag": "https://flagcdn.com/wf.svg",
      "independent": false
    },
    {
      "name": "Western Sahara",
      "capital": "El Aaiún",
      "subregion": "Northern Africa",
      "region": "Africa",
      "population": 510713,
      "currencies": [
        {
          "code": "MAD",
          "name": "Moroccan dirham",
          "symbol": "د.م."
        },
        {
          "code": "DZD",
          "name": "Algerian dinar",
          "symbol": "د.ج"
        }
      ],
      "flag": "https://flagcdn.com/eh.svg",
      "independent": false
    },
    {
      "name": "Yemen",
      "capital": "Sana'a",
      "subregion": "Western Asia",
      "region": "Asia",
      "population": 29825968,
      "currencies": [
        {
          "code": "YER",
          "name": "Yemeni rial",
          "symbol": "﷼"
        }
      ],
      "flag": "https://flagcdn.com/ye.svg",
      "independent": false
    },
    {
      "name": "Zambia",
      "capital": "Lusaka",
      "subregion": "Eastern Africa",
      "region": "Africa",
      "population": 18383956,
      "currencies": [
        {
          "code": "ZMW",
          "name": "Zambian kwacha",
          "symbol": "ZK"
        }
      ],
      "flag": "https://flagcdn.com/zm.svg",
      "independent": false
    },
    {
      "name": "Zimbabwe",
      "capital": "Harare",
      "subregion": "Southern Africa",
      "region": "Africa",
      "population": 14862927,
      "currencies": [
        {
          "code": "ZMW",
          "name": "Zambian kwacha",
          "symbol": "K"
        }
      ],
      "flag": "https://flagcdn.com/zw.svg",
      "independent": false
    }
]

const pageSetup = document.createElement("div");
pageSetup.className = "mydiv";
for(let i=0;i<countriesInfo.length;i++)
{
    const countriesDetail = document.createElement("div");
    countriesDetail.className = "box";

    const cFlag = document.createElement("img");
    cFlag.src = countriesInfo[i].flag;

    const cName = document.createElement("h3");
    cName.innerText = countriesInfo[i].name;

    countriesDetail.append(cFlag,cName);
    pageSetup.append(countriesDetail);

  }
document.body.append(pageSetup);