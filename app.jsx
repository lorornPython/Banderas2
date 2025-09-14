const { useState, useEffect, useRef } = React;

  /*****************************************************************
   * DATA:
   *****************************************************************/
  const flags = [

  // 🌍 EUROPA (44 países)
  { name: "Albania", code: "al", capital: "Tirana", population: "2.8M", region: "Europa", difficulty: 4, hasRed: true, hasBlack: true },
  { name: "Alemania", code: "de", capital: "Berlín", population: "83M", region: "Europa", difficulty: 1, hasRed: true, hasBlack: true, hasYellow: true, hasStripes: true },
  { name: "Andorra", code: "ad", capital: "Andorra la Vieja", population: "77K", region: "Europa", difficulty: 4, hasBlue: true, hasRed: true, hasYellow: true },
  { name: "Austria", code: "at", capital: "Viena", population: "9M", region: "Europa", difficulty: 2, hasRed: true, hasWhite: true, hasStripes: true },
  { name: "Bélgica", code: "be", capital: "Bruselas", population: "11.5M", region: "Europa", difficulty: 2, hasBlack: true, hasYellow: true, hasRed: true, hasStripes: true },
  { name: "Bielorrusia", code: "by", capital: "Minsk", population: "9.4M", region: "Europa", difficulty: 3, hasRed: true, hasGreen: true, hasWhite: true },
  { name: "Bosnia y Herzegovina", code: "ba", capital: "Sarajevo", population: "3.3M", region: "Europa", difficulty: 3, hasBlue: true, hasYellow: true, hasWhite: true, hasStars: true },
  { name: "Bulgaria", code: "bg", capital: "Sofía", population: "6.9M", region: "Europa", difficulty: 3, hasWhite: true, hasGreen: true, hasRed: true, hasStripes: true },
  { name: "Chipre", code: "cy", capital: "Nicosia", population: "1.2M", region: "Europa", difficulty: 3, hasWhite: true, hasYellow: true, hasGreen: true },
  { name: "Croacia", code: "hr", capital: "Zagreb", population: "4M", region: "Europa", difficulty: 3, hasRed: true, hasWhite: true, hasBlue: true, hasStripes: true },
  { name: "Dinamarca", code: "dk", capital: "Copenhague", population: "5.8M", region: "Europa", difficulty: 2, hasRed: true, hasWhite: true },
  { name: "Eslovaquia", code: "sk", capital: "Bratislava", population: "5.4M", region: "Europa", difficulty: 3, hasWhite: true, hasBlue: true, hasRed: true, hasStripes: true },
  { name: "Eslovenia", code: "si", capital: "Liubliana", population: "2.1M", region: "Europa", difficulty: 3, hasWhite: true, hasBlue: true, hasRed: true, hasStripes: true },
  { name: "España", code: "es", capital: "Madrid", population: "47M", region: "Europa", difficulty: 1, hasRed: true, hasYellow: true, hasStripes: true },
  { name: "Estonia", code: "ee", capital: "Tallin", population: "1.3M", region: "Europa", difficulty: 3, hasBlue: true, hasBlack: true, hasWhite: true, hasStripes: true },
  { name: "Finlandia", code: "fi", capital: "Helsinki", population: "5.5M", region: "Europa", difficulty: 2, hasWhite: true, hasBlue: true },
  { name: "Francia", code: "fr", capital: "París", population: "65M", region: "Europa", difficulty: 1, hasBlue: true, hasWhite: true, hasRed: true, hasStripes: true },
  { name: "Grecia", code: "gr", capital: "Atenas", population: "10.4M", region: "Europa", difficulty: 2, hasBlue: true, hasWhite: true, hasStripes: true },
  { name: "Hungría", code: "hu", capital: "Budapest", population: "9.7M", region: "Europa", difficulty: 2, hasRed: true, hasWhite: true, hasGreen: true, hasStripes: true },
  { name: "Irlanda", code: "ie", capital: "Dublín", population: "5M", region: "Europa", difficulty: 2, hasGreen: true, hasWhite: true, hasOrange: true, hasStripes: true },
  { name: "Islandia", code: "is", capital: "Reikiavik", population: "366K", region: "Europa", difficulty: 3, hasBlue: true, hasWhite: true, hasRed: true },
  { name: "Italia", code: "it", capital: "Roma", population: "59M", region: "Europa", difficulty: 1, hasGreen: true, hasWhite: true, hasRed: true, hasStripes: true },
  { name: "Letonia", code: "lv", capital: "Riga", population: "1.8M", region: "Europa", difficulty: 3, hasRed: true, hasWhite: true, hasStripes: true },
  { name: "Liechtenstein", code: "li", capital: "Vaduz", population: "38K", region: "Europa", difficulty: 4, hasBlue: true, hasRed: true, hasYellow: true },
  { name: "Lituania", code: "lt", capital: "Vilna", population: "2.7M", region: "Europa", difficulty: 3, hasYellow: true, hasGreen: true, hasRed: true, hasStripes: true },
  { name: "Luxemburgo", code: "lu", capital: "Luxemburgo", population: "630K", region: "Europa", difficulty: 3, hasRed: true, hasWhite: true, hasBlue: true, hasStripes: true },
  { name: "Macedonia del Norte", code: "mk", capital: "Skopie", population: "2M", region: "Europa", difficulty: 4, hasRed: true, hasYellow: true },
  { name: "Malta", code: "mt", capital: "La Valeta", population: "515K", region: "Europa", difficulty: 4, hasWhite: true, hasRed: true },
  { name: "Moldavia", code: "md", capital: "Chisináu", population: "2.6M", region: "Europa", difficulty: 4, hasBlue: true, hasYellow: true, hasRed: true },
  { name: "Mónaco", code: "mc", capital: "Mónaco", population: "39K", region: "Europa", difficulty: 4, hasRed: true, hasWhite: true, hasStripes: true },
  { name: "Montenegro", code: "me", capital: "Podgorica", population: "620K", region: "Europa", difficulty: 4, hasRed: true, hasYellow: true },
  { name: "Noruega", code: "no", capital: "Oslo", population: "5.4M", region: "Europa", difficulty: 2, hasRed: true, hasWhite: true, hasBlue: true },
  { name: "Países Bajos", code: "nl", capital: "Ámsterdam", population: "17.5M", region: "Europa", difficulty: 2, hasRed: true, hasWhite: true, hasBlue: true, hasStripes: true },
  { name: "Polonia", code: "pl", capital: "Varsovia", population: "38M", region: "Europa", difficulty: 2, hasWhite: true, hasRed: true, hasStripes: true },
  { name: "Portugal", code: "pt", capital: "Lisboa", population: "10.3M", region: "Europa", difficulty: 1, hasGreen: true, hasRed: true, hasYellow: true },
  { name: "Reino Unido", code: "gb", capital: "Londres", population: "67M", region: "Europa", difficulty: 1, hasRed: true, hasWhite: true, hasBlue: true, hasStripes: true },
  { name: "República Checa", code: "cz", capital: "Praga", population: "10.5M", region: "Europa", difficulty: 2, hasWhite: true, hasRed: true, hasBlue: true, hasStripes: true },
  { name: "Rumania", code: "ro", capital: "Bucarest", population: "19.2M", region: "Europa", difficulty: 3, hasBlue: true, hasYellow: true, hasRed: true, hasStripes: true },
  { name: "Rusia", code: "ru", capital: "Moscú", population: "144M", region: "Europa", difficulty: 2, hasWhite: true, hasBlue: true, hasRed: true, hasStripes: true },
  { name: "San Marino", code: "sm", capital: "San Marino", population: "34K", region: "Europa", difficulty: 4, hasWhite: true, hasBlue: true, hasStripes: true },
  { name: "Serbia", code: "rs", capital: "Belgrado", population: "6.9M", region: "Europa", difficulty: 3, hasRed: true, hasBlue: true, hasWhite: true, hasStripes: true },
  { name: "Suecia", code: "se", capital: "Estocolmo", population: "10.4M", region: "Europa", difficulty: 2, hasBlue: true, hasYellow: true },
  { name: "Suiza", code: "ch", capital: "Berna", population: "8.6M", region: "Europa", difficulty: 2, hasRed: true, hasWhite: true },
  { name: "Ucrania", code: "ua", capital: "Kiev", population: "43M", region: "Europa", difficulty: 2, hasBlue: true, hasYellow: true, hasStripes: true },
  { name: "Vaticano", code: "va", capital: "Ciudad del Vaticano", population: "800", region: "Europa", difficulty: 4, hasYellow: true, hasWhite: true },

  // 🌏 ASIA (49 países)
  { name: "Afganistán", code: "af", capital: "Kabul", population: "39M", region: "Asia", difficulty: 3, hasBlack: true, hasRed: true, hasGreen: true, hasWhite: true, hasStripes: true },
  { name: "Arabia Saudí", code: "sa", capital: "Riad", population: "35M", region: "Asia", difficulty: 3, hasGreen: true, hasWhite: true },
  { name: "Armenia", code: "am", capital: "Ereván", population: "3M", region: "Asia", difficulty: 4, hasRed: true, hasBlue: true, hasOrange: true, hasStripes: true },
  { name: "Azerbaiyán", code: "az", capital: "Bakú", population: "10M", region: "Asia", difficulty: 3, hasBlue: true, hasRed: true, hasGreen: true, hasWhite: true, hasStars: true, hasStripes: true },
  { name: "Bangladés", code: "bd", capital: "Daca", population: "166M", region: "Asia", difficulty: 2, hasGreen: true, hasRed: true },
  { name: "Baréin", code: "bh", capital: "Manama", population: "1.7M", region: "Asia", difficulty: 4, hasRed: true, hasWhite: true },
  { name: "Birmania", code: "mm", capital: "Naipyidó", population: "54M", region: "Asia", difficulty: 3, hasYellow: true, hasGreen: true, hasRed: true, hasWhite: true, hasStars: true, hasStripes: true },
  { name: "Brunéi", code: "bn", capital: "Bandar Seri Begawan", population: "440K", region: "Asia", difficulty: 4, hasYellow: true, hasWhite: true, hasBlack: true, hasRed: true },
  { name: "Bután", code: "bt", capital: "Timbu", population: "770K", region: "Asia", difficulty: 4, hasYellow: true, hasOrange: true, hasWhite: true },
  { name: "Camboya", code: "kh", capital: "Nom Pen", population: "17M", region: "Asia", difficulty: 3, hasBlue: true, hasRed: true, hasWhite: true },
  { name: "Catar", code: "qa", capital: "Doha", population: "2.9M", region: "Asia", difficulty: 3, hasWhite: true, hasRed: true },
  { name: "China", code: "cn", capital: "Pekín", population: "1.4B", region: "Asia", difficulty: 1, hasRed: true, hasYellow: true, hasStars: true },
  { name: "Corea del Norte", code: "kp", capital: "Pionyang", population: "26M", region: "Asia", difficulty: 3, hasRed: true, hasWhite: true, hasBlue: true, hasStars: true, hasStripes: true },
  { name: "Corea del Sur", code: "kr", capital: "Seúl", population: "52M", region: "Asia", difficulty: 2, hasWhite: true, hasRed: true, hasBlue: true, hasBlack: true },
  { name: "Emiratos Árabes Unidos", code: "ae", capital: "Abu Dabi", population: "10M", region: "Asia", difficulty: 3, hasGreen: true, hasWhite: true, hasBlack: true, hasRed: true, hasStripes: true },
  { name: "Filipinas", code: "ph", capital: "Manila", population: "111M", region: "Asia", difficulty: 2, hasBlue: true, hasRed: true, hasWhite: true, hasYellow: true, hasStars: true },
  { name: "Georgia", code: "ge", capital: "Tiflis", population: "3.7M", region: "Asia", difficulty: 3, hasWhite: true, hasRed: true },
  { name: "India", code: "in", capital: "Nueva Delhi", population: "1.39B", region: "Asia", difficulty: 1, hasOrange: true, hasWhite: true, hasGreen: true, hasBlue: true, hasStripes: true },
  { name: "Indonesia", code: "id", capital: "Yakarta", population: "276M", region: "Asia", difficulty: 2, hasRed: true, hasWhite: true, hasStripes: true },
  { name: "Irak", code: "iq", capital: "Bagdad", population: "41M", region: "Asia", difficulty: 3, hasRed: true, hasWhite: true, hasBlack: true, hasGreen: true, hasStripes: true },
  { name: "Irán", code: "ir", capital: "Teherán", population: "85M", region: "Asia", difficulty: 2, hasGreen: true, hasWhite: true, hasRed: true, hasStripes: true },
  { name: "Israel", code: "il", capital: "Jerusalén", population: "9.3M", region: "Asia", difficulty: 2, hasWhite: true, hasBlue: true, hasStars: true, hasStripes: true },
  { name: "Japón", code: "jp", capital: "Tokio", population: "125M", region: "Asia", difficulty: 1, hasWhite: true, hasRed: true },
  { name: "Jordania", code: "jo", capital: "Amán", population: "10M", region: "Asia", difficulty: 3, hasBlack: true, hasWhite: true, hasGreen: true, hasRed: true, hasStars: true, hasStripes: true },
  { name: "Kazajistán", code: "kz", capital: "Nursultán", population: "19M", region: "Asia", difficulty: 3, hasBlue: true, hasYellow: true },
  { name: "Kirguistán", code: "kg", capital: "Biskek", population: "6.6M", region: "Asia", difficulty: 4, hasRed: true, hasYellow: true },
  { name: "Kuwait", code: "kw", capital: "Kuwait", population: "4.3M", region: "Asia", difficulty: 3, hasGreen: true, hasWhite: true, hasRed: true, hasBlack: true },
  { name: "Laos", code: "la", capital: "Vientián", population: "7.3M", region: "Asia", difficulty: 4, hasRed: true, hasBlue: true, hasWhite: true, hasStripes: true },
  { name: "Líbano", code: "lb", capital: "Beirut", population: "6.8M", region: "Asia", difficulty: 3, hasRed: true, hasWhite: true, hasGreen: true, hasStripes: true },
  { name: "Malasia", code: "my", capital: "Kuala Lumpur", population: "32M", region: "Asia", difficulty: 3, hasRed: true, hasWhite: true, hasBlue: true, hasYellow: true, hasStars: true, hasStripes: true },
  { name: "Maldivas", code: "mv", capital: "Malé", population: "540K", region: "Asia", difficulty: 4, hasRed: true, hasGreen: true, hasWhite: true },
  { name: "Mongolia", code: "mn", capital: "Ulán Bator", population: "3.3M", region: "Asia", difficulty: 3, hasRed: true, hasBlue: true, hasYellow: true },
  { name: "Nepal", code: "np", capital: "Katmandú", population: "30M", region: "Asia", difficulty: 4, hasRed: true, hasBlue: true, hasWhite: true },
  { name: "Omán", code: "om", capital: "Mascate", population: "5.2M", region: "Asia", difficulty: 4, hasWhite: true, hasRed: true, hasGreen: true },
  { name: "Pakistán", code: "pk", capital: "Islamabad", population: "225M", region: "Asia", difficulty: 2, hasGreen: true, hasWhite: true, hasStars: true },
  { name: "Palestina", code: "ps", capital: "Jerusalén Este", population: "5.1M", region: "Asia", difficulty: 3, hasBlack: true, hasWhite: true, hasGreen: true, hasRed: true, hasStripes: true },
  { name: "Singapur", code: "sg", capital: "Singapur", population: "5.7M", region: "Asia", difficulty: 3, hasRed: true, hasWhite: true, hasStars: true, hasStripes: true },
  { name: "Siria", code: "sy", capital: "Damasco", population: "18M", region: "Asia", difficulty: 3, hasRed: true, hasWhite: true, hasBlack: true, hasGreen: true, hasStars: true, hasStripes: true },
  { name: "Sri Lanka", code: "lk", capital: "Sri Jayawardenapura Kotte", population: "22M", region: "Asia", difficulty: 3, hasYellow: true, hasGreen: true, hasOrange: true, hasRed: true },
  { name: "Tailandia", code: "th", capital: "Bangkok", population: "70M", region: "Asia", difficulty: 2, hasRed: true, hasWhite: true, hasBlue: true, hasStripes: true },
  { name: "Taiwán", code: "tw", capital: "Taipéi", population: "23.5M", region: "Asia", difficulty: 2, hasRed: true, hasBlue: true, hasWhite: true, hasStars: true },
  { name: "Tayikistán", code: "tj", capital: "Dusambé", population: "9.7M", region: "Asia", difficulty: 4, hasRed: true, hasWhite: true, hasGreen: true, hasYellow: true, hasStars: true, hasStripes: true },
  { name: "Timor Oriental", code: "tl", capital: "Dili", population: "1.3M", region: "Asia", difficulty: 4, hasRed: true, hasYellow: true, hasBlack: true, hasWhite: true, hasStars: true },
  { name: "Turkmenistán", code: "tm", capital: "Asjabad", population: "6M", region: "Asia", difficulty: 4, hasGreen: true, hasWhite: true, hasRed: true, hasStars: true },
  { name: "Turquía", code: "tr", capital: "Ankara", population: "85M", region: "Asia", difficulty: 2, hasRed: true, hasWhite: true, hasStars: true },
  { name: "Uzbekistán", code: "uz", capital: "Taskent", population: "34M", region: "Asia", difficulty: 3, hasBlue: true, hasWhite: true, hasGreen: true, hasRed: true, hasStars: true, hasStripes: true },
  { name: "Vietnam", code: "vn", capital: "Hanói", population: "98M", region: "Asia", difficulty: 2, hasRed: true, hasYellow: true, hasStars: true },
  { name: "Yemen", code: "ye", capital: "Saná", population: "30M", region: "Asia", difficulty: 3, hasRed: true, hasWhite: true, hasBlack: true, hasStripes: true },

  // 🌍 ÁFRICA (54 países)
  { name: "Angola", code: "ao", capital: "Luanda", population: "33M", region: "África", difficulty: 3, hasRed: true, hasBlack: true, hasYellow: true, hasStripes: true },
  { name: "Argelia", code: "dz", capital: "Argel", population: "44M", region: "África", difficulty: 3, hasGreen: true, hasWhite: true, hasRed: true, hasStars: true },
  { name: "Benín", code: "bj", capital: "Porto Novo", population: "12M", region: "África", difficulty: 4, hasGreen: true, hasYellow: true, hasRed: true },
  { name: "Botsuana", code: "bw", capital: "Gaborone", population: "2.4M", region: "África", difficulty: 4, hasBlue: true, hasBlack: true, hasWhite: true, hasStripes: true },
  { name: "Burkina Faso", code: "bf", capital: "Uagadugú", population: "21M", region: "África", difficulty: 4, hasRed: true, hasGreen: true, hasYellow: true, hasStars: true, hasStripes: true },
  { name: "Burundi", code: "bi", capital: "Gitega", population: "12M", region: "África", difficulty: 4, hasRed: true, hasGreen: true, hasWhite: true, hasStars: true },
  { name: "Cabo Verde", code: "cv", capital: "Praia", population: "560K", region: "África", difficulty: 4, hasBlue: true, hasWhite: true, hasRed: true, hasYellow: true, hasStars: true, hasStripes: true },
  { name: "Camerún", code: "cm", capital: "Yaundé", population: "27M", region: "África", difficulty: 3, hasGreen: true, hasRed: true, hasYellow: true, hasStars: true, hasStripes: true },
  { name: "Chad", code: "td", capital: "Yamena", population: "17M", region: "África", difficulty: 4, hasBlue: true, hasYellow: true, hasRed: true, hasStripes: true },
  { name: "Comoras", code: "km", capital: "Moroni", population: "880K", region: "África", difficulty: 4, hasYellow: true, hasWhite: true, hasRed: true, hasBlue: true, hasGreen: true, hasStars: true, hasStripes: true },
  { name: "Costa de Marfil", code: "ci", capital: "Yamusukro", population: "27M", region: "África", difficulty: 3, hasOrange: true, hasWhite: true, hasGreen: true, hasStripes: true },
  { name: "Egipto", code: "eg", capital: "El Cairo", population: "104M", region: "África", difficulty: 2, hasRed: true, hasWhite: true, hasBlack: true, hasYellow: true, hasStripes: true },
  { name: "Eritrea", code: "er", capital: "Asmara", population: "3.5M", region: "África", difficulty: 4, hasGreen: true, hasRed: true, hasBlue: true, hasYellow: true },
  { name: "Etiopía", code: "et", capital: "Adís Abeba", population: "118M", region: "África", difficulty: 3, hasGreen: true, hasYellow: true, hasRed: true, hasBlue: true, hasStars: true, hasStripes: true },
  { name: "Gabón", code: "ga", capital: "Libreville", population: "2.2M", region: "África", difficulty: 4, hasGreen: true, hasYellow: true, hasBlue: true, hasStripes: true },
  { name: "Gambia", code: "gm", capital: "Banjul", population: "2.4M", region: "África", difficulty: 4, hasRed: true, hasBlue: true, hasGreen: true, hasWhite: true, hasStripes: true },
  { name: "Ghana", code: "gh", capital: "Acra", population: "31M", region: "África", difficulty: 3, hasRed: true, hasYellow: true, hasGreen: true, hasBlack: true, hasStars: true, hasStripes: true },
  { name: "Guinea", code: "gn", capital: "Conakri", population: "13.5M", region: "África", difficulty: 4, hasRed: true, hasYellow: true, hasGreen: true, hasStripes: true },
  { name: "Guinea-Bisáu", code: "gw", capital: "Bisáu", population: "2M", region: "África", difficulty: 4, hasRed: true, hasYellow: true, hasGreen: true, hasBlack: true, hasStars: true },
  { name: "Guinea Ecuatorial", code: "gq", capital: "Malabo", population: "1.4M", region: "África", difficulty: 4, hasGreen: true, hasWhite: true, hasRed: true, hasBlue: true, hasStars: true, hasStripes: true },
  { name: "Kenia", code: "ke", capital: "Nairobi", population: "55M", region: "África", difficulty: 3, hasBlack: true, hasRed: true, hasGreen: true, hasWhite: true, hasStripes: true },
  { name: "Lesoto", code: "ls", capital: "Maseru", population: "2.1M", region: "África", difficulty: 4, hasBlue: true, hasWhite: true, hasGreen: true, hasBlack: true, hasStripes: true },
  { name: "Liberia", code: "lr", capital: "Monrovia", population: "5M", region: "África", difficulty: 4, hasRed: true, hasWhite: true, hasBlue: true, hasStars: true, hasStripes: true },
  { name: "Libia", code: "ly", capital: "Trípoli", population: "7M", region: "África", difficulty: 3, hasRed: true, hasBlack: true, hasGreen: true, hasWhite: true, hasStars: true, hasStripes: true },
  { name: "Madagascar", code: "mg", capital: "Antananarivo", population: "28M", region: "África", difficulty: 3, hasWhite: true, hasRed: true, hasGreen: true },
  { name: "Malaui", code: "mw", capital: "Lilongüe", population: "19M", region: "África", difficulty: 4, hasBlack: true, hasRed: true, hasGreen: true, hasStripes: true },
  { name: "Malí", code: "ml", capital: "Bamako", population: "20M", region: "África", difficulty: 4, hasGreen: true, hasYellow: true, hasRed: true, hasStripes: true },
  { name: "Marruecos", code: "ma", capital: "Rabat", population: "37M", region: "África", difficulty: 3, hasRed: true, hasGreen: true, hasStars: true },
  { name: "Mauricio", code: "mu", capital: "Port Louis", population: "1.2M", region: "África", difficulty: 4, hasRed: true, hasBlue: true, hasYellow: true, hasGreen: true, hasStripes: true },
  { name: "Mauritania", code: "mr", capital: "Nuakchot", population: "4.6M", region: "África", difficulty: 4, hasGreen: true, hasYellow: true, hasRed: true, hasStripes: true },
  { name: "Mozambique", code: "mz", capital: "Maputo", population: "32M", region: "África", difficulty: 4, hasGreen: true, hasBlack: true, hasYellow: true, hasWhite: true, hasRed: true, hasStars: true, hasStripes: true },
  { name: "Namibia", code: "na", capital: "Windhoek", population: "2.5M", region: "África", difficulty: 4, hasBlue: true, hasRed: true, hasGreen: true, hasWhite: true, hasYellow: true },
  { name: "Níger", code: "ne", capital: "Niamey", population: "25M", region: "África", difficulty: 4, hasOrange: true, hasWhite: true, hasGreen: true, hasStripes: true },
  { name: "Nigeria", code: "ng", capital: "Abuya", population: "211M", region: "África", difficulty: 2, hasGreen: true, hasWhite: true, hasStripes: true },
  { name: "República Centroafricana", code: "cf", capital: "Bangui", population: "4.8M", region: "África", difficulty: 4, hasBlue: true, hasWhite: true, hasGreen: true, hasYellow: true, hasRed: true, hasStars: true, hasStripes: true },
  { name: "República del Congo", code: "cg", capital: "Brazzaville", population: "5.6M", region: "África", difficulty: 4, hasGreen: true, hasYellow: true, hasRed: true },
  { name: "República Democrática del Congo", code: "cd", capital: "Kinsasa", population: "92M", region: "África", difficulty: 3, hasBlue: true, hasYellow: true, hasRed: true, hasStars: true },
  { name: "Ruanda", code: "rw", capital: "Kigali", population: "13M", region: "África", difficulty: 4, hasBlue: true, hasYellow: true, hasGreen: true, hasStripes: true },
  { name: "Santo Tomé y Príncipe", code: "st", capital: "Santo Tomé", population: "220K", region: "África", difficulty: 4, hasGreen: true, hasYellow: true, hasRed: true, hasBlack: true, hasStars: true, hasStripes: true },
  { name: "Senegal", code: "sn", capital: "Dakar", population: "17M", region: "África", difficulty: 3, hasGreen: true, hasYellow: true, hasRed: true, hasStars: true, hasStripes: true },
  { name: "Seychelles", code: "sc", capital: "Victoria", population: "98K", region: "África", difficulty: 4, hasBlue: true, hasYellow: true, hasRed: true, hasWhite: true, hasGreen: true },
  { name: "Sierra Leona", code: "sl", capital: "Freetown", population: "8M", region: "África", difficulty: 4, hasGreen: true, hasWhite: true, hasBlue: true, hasStripes: true },
  { name: "Somalia", code: "so", capital: "Mogadiscio", population: "16M", region: "África", difficulty: 3, hasBlue: true, hasWhite: true, hasStars: true },
  { name: "Suazilandia", code: "sz", capital: "Mbabane", population: "1.1M", region: "África", difficulty: 4, hasBlue: true, hasYellow: true, hasRed: true, hasWhite: true, hasBlack: true, hasStripes: true },
  { name: "Sudáfrica", code: "za", capital: "Pretoria", population: "60M", region: "África", difficulty: 2, hasRed: true, hasWhite: true, hasBlue: true, hasGreen: true, hasBlack: true, hasYellow: true },
  { name: "Sudán", code: "sd", capital: "Jartum", population: "45M", region: "África", difficulty: 3, hasRed: true, hasWhite: true, hasBlack: true, hasGreen: true, hasStripes: true },
  { name: "Sudán del Sur", code: "ss", capital: "Yuba", population: "11M", region: "África", difficulty: 4, hasBlack: true, hasWhite: true, hasRed: true, hasGreen: true, hasBlue: true, hasYellow: true, hasStars: true, hasStripes: true },
  { name: "Tanzania", code: "tz", capital: "Dodoma", population: "61M", region: "África", difficulty: 3, hasGreen: true, hasYellow: true, hasBlack: true, hasBlue: true },
  { name: "Togo", code: "tg", capital: "Lomé", population: "8.4M", region: "África", difficulty: 4, hasGreen: true, hasYellow: true, hasRed: true, hasWhite: true, hasStars: true, hasStripes: true },
  { name: "Túnez", code: "tn", capital: "Túnez", population: "12M", region: "África", difficulty: 3, hasRed: true, hasWhite: true, hasStars: true },
  { name: "Uganda", code: "ug", capital: "Kampala", population: "47M", region: "África", difficulty: 3, hasBlack: true, hasYellow: true, hasRed: true, hasWhite: true, hasStripes: true },
  { name: "Yibuti", code: "dj", capital: "Yibuti", population: "1M", region: "África", difficulty: 4, hasBlue: true, hasGreen: true, hasWhite: true, hasRed: true, hasStars: true },
  { name: "Zambia", code: "zm", capital: "Lusaka", population: "18M", region: "África", difficulty: 4, hasGreen: true, hasRed: true, hasBlack: true, hasOrange: true },
  { name: "Zimbabue", code: "zw", capital: "Harare", population: "15M", region: "África", difficulty: 4, hasGreen: true, hasYellow: true, hasRed: true, hasBlack: true, hasWhite: true, hasStripes: true },

  // 🌎 AMÉRICA (35 países)
  { name: "Antigua y Barbuda", code: "ag", capital: "Saint John", population: "98K", region: "América", difficulty: 4, hasRed: true, hasBlack: true, hasBlue: true, hasWhite: true, hasYellow: true },
  { name: "Argentina", code: "ar", capital: "Buenos Aires", population: "45M", region: "América", difficulty: 1, hasBlue: true, hasWhite: true, hasYellow: true, hasStripes: true },
  { name: "Bahamas", code: "bs", capital: "Nasáu", population: "395K", region: "América", difficulty: 4, hasBlue: true, hasYellow: true, hasBlack: true, hasStripes: true },
  { name: "Barbados", code: "bb", capital: "Bridgetown", population: "287K", region: "América", difficulty: 4, hasBlue: true, hasYellow: true, hasBlack: true },
  { name: "Belice", code: "bz", capital: "Belmopán", population: "400K", region: "América", difficulty: 4, hasBlue: true, hasRed: true, hasWhite: true },
  { name: "Bolivia", code: "bo", capital: "Sucre", population: "11.8M", region: "América", difficulty: 3, hasRed: true, hasYellow: true, hasGreen: true, hasStripes: true },
  { name: "Brasil", code: "br", capital: "Brasilia", population: "214M", region: "América", difficulty: 1, hasGreen: true, hasYellow: true, hasBlue: true, hasWhite: true, hasStars: true },
  { name: "Canadá", code: "ca", capital: "Ottawa", population: "38M", region: "América", difficulty: 1, hasRed: true, hasWhite: true },
  { name: "Chile", code: "cl", capital: "Santiago", population: "19M", region: "América", difficulty: 2, hasWhite: true, hasRed: true, hasBlue: true, hasStars: true, hasStripes: true },
  { name: "Colombia", code: "co", capital: "Bogotá", population: "51M", region: "América", difficulty: 2, hasYellow: true, hasBlue: true, hasRed: true, hasStripes: true },
  { name: "Costa Rica", code: "cr", capital: "San José", population: "5.1M", region: "América", difficulty: 3, hasBlue: true, hasWhite: true, hasRed: true, hasStripes: true },
  { name: "Cuba", code: "cu", capital: "La Habana", population: "11.3M", region: "América", difficulty: 3, hasBlue: true, hasWhite: true, hasRed: true, hasStars: true, hasStripes: true },
  { name: "Dominica", code: "dm", capital: "Roseau", population: "72K", region: "América", difficulty: 4, hasGreen: true, hasYellow: true, hasWhite: true, hasBlack: true, hasRed: true },
  { name: "Ecuador", code: "ec", capital: "Quito", population: "17.8M", region: "América", difficulty: 3, hasYellow: true, hasBlue: true, hasRed: true, hasStripes: true },
  { name: "El Salvador", code: "sv", capital: "San Salvador", population: "6.5M", region: "América", difficulty: 3, hasBlue: true, hasWhite: true, hasStripes: true },
  { name: "Estados Unidos", code: "us", capital: "Washington D.C.", population: "332M", region: "América", difficulty: 1, hasRed: true, hasWhite: true, hasBlue: true, hasStars: true, hasStripes: true },
  { name: "Granada", code: "gd", capital: "Saint George", population: "113K", region: "América", difficulty: 4, hasRed: true, hasYellow: true, hasGreen: true, hasStars: true },
  { name: "Guatemala", code: "gt", capital: "Ciudad de Guatemala", population: "17M", region: "América", difficulty: 3, hasBlue: true, hasWhite: true, hasStripes: true },
  { name: "Guyana", code: "gy", capital: "Georgetown", population: "790K", region: "América", difficulty: 4, hasGreen: true, hasYellow: true, hasRed: true, hasWhite: true, hasBlack: true },
  { name: "Haití", code: "ht", capital: "Puerto Príncipe", population: "11.5M", region: "América", difficulty: 4, hasBlue: true, hasRed: true, hasWhite: true, hasStripes: true },
  { name: "Honduras", code: "hn", capital: "Tegucigalpa", population: "10M", region: "América", difficulty: 3, hasBlue: true, hasWhite: true, hasStars: true, hasStripes: true },
  { name: "Jamaica", code: "jm", capital: "Kingston", population: "3M", region: "América", difficulty: 3, hasGreen: true, hasBlack: true, hasYellow: true },
  { name: "México", code: "mx", capital: "Ciudad de México", population: "126M", region: "América", difficulty: 1, hasGreen: true, hasWhite: true, hasRed: true, hasStripes: true },
  { name: "Nicaragua", code: "ni", capital: "Managua", population: "6.7M", region: "América", difficulty: 3, hasBlue: true, hasWhite: true, hasStripes: true },
  { name: "Panamá", code: "pa", capital: "Ciudad de Panamá", population: "4.3M", region: "América", difficulty: 3, hasWhite: true, hasRed: true, hasBlue: true, hasStars: true },
  { name: "Paraguay", code: "py", capital: "Asunción", population: "7.2M", region: "América", difficulty: 3, hasRed: true, hasWhite: true, hasBlue: true, hasStripes: true },
  { name: "Perú", code: "pe", capital: "Lima", population: "33M", region: "América", difficulty: 2, hasRed: true, hasWhite: true, hasStripes: true },
  { name: "República Dominicana", code: "do", capital: "Santo Domingo", population: "11M", region: "América", difficulty: 3, hasRed: true, hasWhite: true, hasBlue: true },
  { name: "San Cristóbal y Nieves", code: "kn", capital: "Basseterre", population: "53K", region: "América", difficulty: 4, hasGreen: true, hasYellow: true, hasRed: true, hasBlack: true, hasWhite: true, hasStars: true },
  { name: "San Vicente y las Granadinas", code: "vc", capital: "Kingstown", population: "111K", region: "América", difficulty: 4, hasBlue: true, hasYellow: true, hasGreen: true },
  { name: "Santa Lucía", code: "lc", capital: "Castries", population: "184K", region: "América", difficulty: 4, hasBlue: true, hasYellow: true, hasBlack: true, hasWhite: true },
  { name: "Surinam", code: "sr", capital: "Paramaribo", population: "590K", region: "América", difficulty: 4, hasGreen: true, hasWhite: true, hasRed: true, hasYellow: true, hasStars: true, hasStripes: true },
  { name: "Trinidad y Tobago", code: "tt", capital: "Puerto España", population: "1.4M", region: "América", difficulty: 4, hasRed: true, hasWhite: true, hasBlack: true },
  { name: "Uruguay", code: "uy", capital: "Montevideo", population: "3.5M", region: "América", difficulty: 3, hasWhite: true, hasBlue: true, hasYellow: true, hasStripes: true },
  { name: "Venezuela", code: "ve", capital: "Caracas", population: "28M", region: "América", difficulty: 2, hasYellow: true, hasBlue: true, hasRed: true, hasWhite: true, hasStars: true, hasStripes: true },

  // 🌏 OCEANÍA (14 países)
  { name: "Australia", code: "au", capital: "Canberra", population: "26M", region: "Oceanía", difficulty: 1, hasBlue: true, hasRed: true, hasWhite: true, hasStars: true },
  { name: "Fiyi", code: "fj", capital: "Suva", population: "900K", region: "Oceanía", difficulty: 4, hasBlue: true, hasWhite: true, hasRed: true, hasGreen: true, hasYellow: true },
  { name: "Islas Marshall", code: "mh", capital: "Majuro", population: "59K", region: "Oceanía", difficulty: 4, hasBlue: true, hasWhite: true, hasOrange: true, hasStars: true, hasStripes: true },
  { name: "Islas Salomón", code: "sb", capital: "Honiara", population: "700K", region: "Oceanía", difficulty: 4, hasBlue: true, hasGreen: true, hasYellow: true, hasWhite: true, hasStars: true },
  { name: "Kiribati", code: "ki", capital: "Tarawa Sur", population: "120K", region: "Oceanía", difficulty: 4, hasRed: true, hasBlue: true, hasWhite: true, hasYellow: true, hasStripes: true },
  { name: "Micronesia", code: "fm", capital: "Palikir", population: "115K", region: "Oceanía", difficulty: 4, hasBlue: true, hasWhite: true, hasStars: true },
  { name: "Nauru", code: "nr", capital: "Yaren", population: "11K", region: "Oceanía", difficulty: 4, hasBlue: true, hasYellow: true, hasWhite: true, hasStars: true, hasStripes: true },
  { name: "Nueva Zelanda", code: "nz", capital: "Wellington", population: "5M", region: "Oceanía", difficulty: 2, hasBlue: true, hasRed: true, hasWhite: true, hasStars: true },
  { name: "Palaos", code: "pw", capital: "Ngerulmud", population: "18K", region: "Oceanía", difficulty: 4, hasBlue: true, hasYellow: true },
  { name: "Papúa Nueva Guinea", code: "pg", capital: "Puerto Moresby", population: "9M", region: "Oceanía", difficulty: 4, hasRed: true, hasBlack: true, hasWhite: true, hasStars: true },
  { name: "Samoa", code: "ws", capital: "Apia", population: "200K", region: "Oceanía", difficulty: 4, hasRed: true, hasBlue: true, hasWhite: true, hasStars: true },
  { name: "Tonga", code: "to", capital: "Nukualofa", population: "106K", region: "Oceanía", difficulty: 4, hasRed: true, hasWhite: true },
  { name: "Tuvalu", code: "tv", capital: "Funafuti", population: "12K", region: "Oceanía", difficulty: 4, hasBlue: true, hasRed: true, hasWhite: true, hasYellow: true, hasStars: true },
  { name: "Vanuatu", code: "vu", capital: "Port Vila", population: "310K", region: "Oceanía", difficulty: 4, hasRed: true, hasGreen: true, hasBlack: true, hasYellow: true },

  ];

/*****************************************************************
 * Constantes & Utils
 *****************************************************************/

const TOTAL_LEVELS = 10;
const levelColors = [
  "#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6",
  "#ec4899", "#14b8a6", "#f97316", "#6366f1", "#22c55e"
];

function shuffle(arr) { return arr.slice().sort(() => Math.random() - 0.5); }
function sample(arr, n) { return shuffle(arr).slice(0, n); }

function formatDateShort(d) {
  try {
    const date = (typeof d === "string" ? new Date(d) : d);
    return date.toLocaleString(undefined, {
      year: "numeric", month: "numeric", day: "numeric",
      hour: "2-digit", minute: "2-digit"
    });
  } catch { return String(d || ""); }
}

/* Frases de "Nivel" */
const frasesNivel = {
  1: "Nivel 1 · Scout de Banderas 🧭",
  2: "Nivel 2 · Rookie Patriota 💥",
  3: "Nivel 3 · Tryhard Cartógrafo 🗺️",
  4: "Nivel 4 · Pro Vexilólogo ⚔️",
  5: "Nivel 5 · Épico Guardia Fronterizo 🛡️",
  6: "Nivel 6 · Legendario Cazador de Banderas 🏹",
  7: "Nivel 7 · Master Conquistador 🌟",
  8: "Nivel 8 · Elite Geoestratega 🧠",
  9: "Nivel 9 · Mythic Dominador del Mapa ⚡",
  10:"Nivel 10 · God-Tier Señor de las Banderas 👑"
};
function phraseForLevel(n) {
  const x = Math.max(0, Math.min(TOTAL_LEVELS, Number(n || 0)));
  return frasesNivel[x] || (x > 0 ? "¡Sigue escalando!" : "—");
}

/*****************************************************************
 * Barra segmentada multicolor
 *****************************************************************/
function SegmentedBar({ value = 0, total = TOTAL_LEVELS, className = "", highlightNext = false }) {
  const filled = Math.max(0, Math.min(total, value));
  return (
    <div className={`bg-slate-200 rounded overflow-hidden ${className}`}>
      <div className="h-full flex gap-0.5 p-0.5">
        {Array.from({ length: total }).map((_, i) => {
          let bg = "rgba(255,255,255,0.7)";
          if (i < filled) bg = levelColors[i % levelColors.length];
          else if (highlightNext && i === filled) bg = "#facc15";
          return <div key={i} style={{ backgroundColor: bg }} className="flex-1 h-full rounded-sm" />;
        })}
      </div>
    </div>
  );
}

/*****************************************************************
 * App principal
 *****************************************************************/
function App() {
  const [stage, setStage] = useState("menu");
  const [gameMode, setGameMode] = useState("classic");

  // Estado general
  const [difficulties, setDifficulties] = useState([]);
  const [regions, setRegions] = useState([]);
  const [features, setFeatures] = useState([]);
  const [numQuestions, setNumQuestions] = useState(10);

  // Juego
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [options, setOptions] = useState([]);
  const [seenFlags, setSeenFlags] = useState([]);
  const [prevStage, setPrevStage] = useState(null);

  // Sonidos
  const [chosen, setChosen] = useState(null);
  const [lastResult, setLastResult] = useState(null);
  const correctSoundRef = useRef(null);
  const wrongSoundRef = useRef(null);
  const bgMusicRef = useRef(null);
  const phaseSoundRef = useRef(null);
  const warningSoundRef = useRef(null);
  const gameoverSoundRef = useRef(null);

  useEffect(() => {
    try {
      bgMusicRef.current = new Audio("sounds/background.mp3"); bgMusicRef.current.loop = true;
      phaseSoundRef.current = new Audio("sounds/phase.mp3");
      warningSoundRef.current = new Audio("sounds/warning.mp3");
      gameoverSoundRef.current = new Audio("sounds/gameover.mp3");
    } catch (e) {}
  }, []);
  useEffect(() => {
    try {
      correctSoundRef.current = new Audio("sounds/correct.mp3");
      wrongSoundRef.current = new Audio("sounds/wrong.mp3");
    } catch (e) {}
  }, []);

  // 🔥 Definición de 10 fases
  const fases = [
    { dificultad: [1],   numPreguntas: 5,  minAciertos: 3, tiempo: 30 },
    { dificultad: [1],   numPreguntas: 5,  minAciertos: 3, tiempo: 25 },
    { dificultad: [1,2], numPreguntas: 6,  minAciertos: 4, tiempo: 25 },
    { dificultad: [1,2], numPreguntas: 6,  minAciertos: 4, tiempo: 22 },
    { dificultad: [2,3], numPreguntas: 7,  minAciertos: 5, tiempo: 22 },
    { dificultad: [2,3], numPreguntas: 7,  minAciertos: 5, tiempo: 20 },
    { dificultad: [3,4], numPreguntas: 8,  minAciertos: 6, tiempo: 20 },
    { dificultad: [3,4], numPreguntas: 8,  minAciertos: 6, tiempo: 18 },
    { dificultad: [4],   numPreguntas: 10, minAciertos: 7, tiempo: 18 },
    { dificultad: [4],   numPreguntas: 10, minAciertos: 8, tiempo: 15 },
  ];

  const fondos = [
    "linear-gradient(135deg,#e0f7fa,#80deea)",
    "linear-gradient(135deg,#f1f8e9,#aed581)",
    "linear-gradient(135deg,#fff3e0,#ffb74d)",
    "linear-gradient(135deg,#fce4ec,#f06292)",
  ];
  const [faseIndex, setFaseIndex] = useState(0);
  const [tiempoRestante, setTiempoRestante] = useState(null);
  const [timer, setTimer] = useState(null);
  const usedFlagsRef = useRef(new Set());
  const [phaseCorrects, setPhaseCorrects] = useState(0);

  // Ranking
  const [ranking, setRanking] = useState(() => {
    try { return JSON.parse(localStorage.getItem("ranking") || "[]"); }
    catch { return []; }
  });
  const [sortBy, setSortBy] = useState("score");

  /******************** Filtrado *************************/
  function filterPool(difficultiesArg = difficulties, regionsArg = regions, featuresArg = features) {
    let pool = flags;
    if (difficultiesArg.length > 0) {
      pool = pool.filter(f => difficultiesArg.includes(f.difficulty));
    }
    if (regionsArg.length > 0) {
      pool = pool.filter(f => regionsArg.includes(f.region));
    }
    if (featuresArg.length > 0) {
      pool = pool.filter(f =>
        featuresArg.every(feat => {
          if (feat === "Con Azul") return f.hasBlue;
          if (feat === "Con Rojo") return f.hasRed;
          if (feat === "Con Blanco") return f.hasWhite;
          if (feat === "Con Amarillo") return f.hasYellow;
          if (feat === "Con Estrellas") return f.hasStars;
          if (feat === "Con Rayas") return f.hasStripes;
          return true;
        })
      );
    }
    return pool;
  }

  /******************** Inicio de juego *************************/
  function startGame({ forceDifficulties = null, forceRegions = null, forceNumQuestions = null } = {}) {
    const effNum = (forceNumQuestions ?? numQuestions);
    const effDifficulties = (forceDifficulties ?? difficulties);
    const effRegions = (forceRegions ?? regions);
    const avoid = (gameMode === "progressive") ? usedFlagsRef.current : new Set();

    let pool = filterPool(effDifficulties, effRegions, features).filter(f => !avoid.has(f.name));
    if (pool.length === 0) {
      alert("No hay banderas que cumplan esos filtros. Cambia los filtros o la dificultad.");
      return;
    }
    const n = Math.min(effNum, pool.length);
    const selected = sample(pool, n);
    if (gameMode === "progressive") { selected.forEach(f => usedFlagsRef.current.add(f.name)); }

    setQuestions(selected);
    setCurrentIndex(0);
    setScore(0);
    setAnswered(false);
    setFeedback("");
    setChosen(null);
    setLastResult(null);
    setSeenFlags([]);
    setPhaseCorrects(0);
    setStage("game");
  }

  /******************** Progresivo *************************/
  function startProgressiveGame() {
    try { if (bgMusicRef.current) { bgMusicRef.current.currentTime = 0; bgMusicRef.current.play().catch(()=>{}); } } catch(e) {}
    usedFlagsRef.current = new Set();
    setGameMode("progressive");
    setFaseIndex(0);
    iniciarFase(0);
  }

  function iniciarFase(index) {
    const fase = fases[index];
    setNumQuestions(fase.numPreguntas);
    setTiempoRestante(fase.tiempo);
    setPhaseCorrects(0);
    startGame({ forceDifficulties: fase.dificultad, forceNumQuestions: fase.numPreguntas });
    if (timer) clearInterval(timer);
    const t = setInterval(() => {
      setTiempoRestante(prev => {
        if (prev === null) return prev;
        if (prev === 8) { try { if (warningSoundRef.current) { warningSoundRef.current.currentTime = 0; warningSoundRef.current.play().catch(() => {}); } } catch (e) {} }
        if (prev <= 1) {
          clearInterval(t);
          endFase(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    setTimer(t);
  }

  /******************** Opciones por pregunta *************************/
  useEffect(() => {
    if (stage !== "game") return;
    const currentQ = questions[currentIndex];
    if (!currentQ) return;
    setSeenFlags(prev => {
      if (prev.find(p => p.flag.name === currentQ.name)) return prev;
      return [...prev, { flag: currentQ, result: null }];
    });
    const otherPool = flags.filter(f => f.name !== currentQ.name);
    const others = sample(otherPool, Math.min(5, otherPool.length));
    setOptions(shuffle([currentQ, ...others]));
    setAnswered(false);
    setFeedback("");
  }, [currentIndex, stage, questions]);

  /******************** Responder *************************/
  function handleAnswer(choice) {
    if (answered) return;
    const currentQ = questions[currentIndex];
    if (!currentQ) return;
    const correct = choice.name === currentQ.name;
    setChosen(choice.name);
    setAnswered(true);
    if (correct) {
      if (gameMode === "progressive") {
        const puntos = 10;
        const bonusTiempo = Math.max(0, (tiempoRestante || 0) * 2);
        const multiplicador = (faseIndex + 1);
        setScore(s => s + (puntos + bonusTiempo) * multiplicador);
        setPhaseCorrects(c => c + 1);
      } else {
        setScore(s => s + 1);
      }
      setFeedback("¡Correcto! 😎");
      setLastResult("correct");
      try { if (correctSoundRef?.current) { correctSoundRef.current.currentTime = 0; correctSoundRef.current.play().catch(() => {}); } } catch (e) {}
      setTimeout(() => setLastResult(null), 700);
    } else {
      setFeedback(`¡Incorrecto! La respuesta era ${currentQ.name} 😅`);
      setLastResult("wrong");
      try { if (wrongSoundRef?.current) { wrongSoundRef.current.currentTime = 0; wrongSoundRef.current.play().catch(() => {}); } } catch (e) {}
      setTimeout(() => setLastResult(null), 700);
    }
    setSeenFlags(prev => prev.map(s => s.flag.name === currentQ.name ? { ...s, result: correct ? "correct" : "wrong" } : s));
    if (gameMode === "progressive") {
      const delay = correct ? 700 : 1300;
      setTimeout(() => { nextQuestion(); }, delay);
    }
  }

  /******************** Siguiente / Fin de fase *************************/
  function nextQuestion() {
    if (currentIndex + 1 >= questions.length) {
      if (gameMode === "progressive") {
        const fase = fases[faseIndex];
        const superada = phaseCorrects >= fase.minAciertos;
        endFase(superada);
      } else {
        setStage("end");
        if (bgMusicRef.current) { bgMusicRef.current.pause(); bgMusicRef.current.currentTime = 0; }
        try { if (gameoverSoundRef.current) { gameoverSoundRef.current.currentTime = 0; gameoverSoundRef.current.play().catch(() => {}); } } catch (e) {}
      }
    } else {
      setCurrentIndex(i => i + 1);
    }
  }

  function endFase(superada) {
    if (timer) { clearInterval(timer); setTimer(null); }
    if (!superada) {
      setStage("end");
      if (bgMusicRef.current) { bgMusicRef.current.pause(); bgMusicRef.current.currentTime = 0; }
      return;
    }
    if (faseIndex + 1 < fases.length) {
      setStage("phaseTransition");
      const nextIdx = faseIndex + 1;
      setTimeout(() => { setFaseIndex(nextIdx); iniciarFase(nextIdx); }, 2000);
    } else {
      setStage("epicFinal");
      if (bgMusicRef.current) { bgMusicRef.current.pause(); bgMusicRef.current.currentTime = 0; }
    }
  }

  function playAgain() {
    if (bgMusicRef.current) { bgMusicRef.current.pause(); bgMusicRef.current.currentTime = 0; }
    usedFlagsRef.current = new Set();
    setStage("menu");
    setGameMode("classic");
    setQuestions([]);
    setCurrentIndex(0);
    setScore(0);
    setAnswered(false);
    setFeedback("");
    setSeenFlags([]);
    setPhaseCorrects(0);
    setTiempoRestante(null);
    if (timer) { clearInterval(timer); setTimer(null); }
  }

  function openSeen() {
    setPrevStage(stage);
    setStage("seen");
  }

  function saveScore(nombre) {
    if (gameMode === "classic") {
      alert("El ranking solo registra partidas de COMPETICIÓN.");
      return;
    }
    const nivel = (gameMode === "progressive" ? (faseIndex + 1) : 0);
    const entrada = {
      nombre: nombre || "Anónimo",
      score,
      nivel,
      fechaISO: new Date().toISOString()
    };
    const nuevo = [...ranking, entrada]
      .filter(r => Number(r?.nivel || 0) > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 20);
    setRanking(nuevo);
    localStorage.setItem("ranking", JSON.stringify(nuevo));
  }

  const current = stage === "game" ? questions[currentIndex] : null;

  /******************** Render *************************/
  return (
    <div style={{ minHeight: "100vh" }} className="flex items-center justify-center p-6">
      <div className="bg-white/90 rounded-2xl p-6 shadow-2xl w-full max-w-5xl">
        {/* MENU, START, GAME, PHASE TRANSITION, END, RANKING, SEEN (como antes) */}

        {/* EPIC FINALE */}
        {stage === "epicFinal" && (
          <div className="text-center py-20 animate-pulse">
            <h1 className="text-5xl font-extrabold text-red-600 mb-6">
              🔥 EPIC LEGEND FINALE TRYHARD MASTER 🔥
            </h1>
            <p className="text-2xl text-slate-800 mb-4">
              ¡Has conquistado las 10 fases de las banderas! 🌍
            </p>
            <p className="text-xl text-indigo-600 font-bold mb-6">
              Solo los verdaderos maestros llegan aquí 💎
            </p>
            <button
              onClick={playAgain}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white rounded-2xl font-extrabold text-2xl hover:scale-110 transition"
            >
              Volver al Menú
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/*****************************************************************
 * SeenView
 *****************************************************************/
function SeenView({ seen = [], onBack }) {
  const [expanded, setExpanded] = useState({});
  const [allExpanded, setAllExpanded] = useState(false);

  useEffect(() => {
    if (allExpanded) {
      const newExp = {};
      seen.forEach(s => { newExp[s.flag.name] = true; });
      setExpanded(newExp);
    } else {
      setExpanded({});
    }
  }, [allExpanded, seen]);

  function toggle(name) { setExpanded(prev => ({ ...prev, [name]: !prev[name] })); }

  const total = seen.length;
  const corrects = seen.filter(s => s.result === 'correct').length;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold">Banderas Vistas</h3>
        <div className="flex items-center gap-2">
          <div className="text-sm text-slate-600 mr-4">Acertadas: <strong>{corrects}</strong> / {total}</div>
          <button onClick={() => setAllExpanded(!allExpanded)} className="px-3 py-1 bg-indigo-500 text-white rounded-md">{allExpanded ? "Ocultar Info (todos)" : "Ver Info (todos)"}</button>
          <button onClick={onBack} className="px-3 py-1 bg-slate-200 rounded-md">Volver</button>
        </div>
      </div>
      {total === 0 ? (
        <div className="text-center p-4 bg-slate-50 rounded">No se mostraron banderas en esta partida.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {seen.map(s => {
            const flag = s.flag;
            const result = s.result;
            const bg = result === "correct" ? "bg-emerald-100" : result === "wrong" ? "bg-orange-100" : "bg-slate-50";
            return (
              <div key={flag.name} className={`${bg} p-4 rounded-xl shadow flex items-start gap-4`}>
                <img src={`https://flagcdn.com/w80/${flag.code}.png`} alt={flag.name} className="w-16 h-10 object-cover rounded" onError={(e) => e.target.style.display = 'none'} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{flag.name}</div>
                      <div className="text-xs text-slate-600">Región: {flag.region}</div>
                    </div>
                    <div className="ml-4">
                      <button onClick={() => toggle(flag.name)} className="px-3 py-1 bg-indigo-500 text-white rounded-md text-sm">{expanded[flag.name] ? "Ocultar info" : "Ver info"}</button>
                    </div>
                  </div>
                  {expanded[flag.name] && (
                    <div className="mt-3 text-sm text-slate-700">
                      <div><strong>Capital:</strong> {flag.capital}</div>
                      <div><strong>Población:</strong> {flag.population}</div>
                      <div className="mt-2 text-xs text-slate-500">Resultado: {result === null ? "Sin responder" : result === "correct" ? "Acertada" : "Fallada"}</div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/*****************************************************************
 * Mount
 *****************************************************************/
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
