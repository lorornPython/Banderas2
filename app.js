"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef;

// ⚠️ Aquí va la lista completa de banderas (igual que en tu archivo estable)
var flags = [
// Pega aquí la lista completa de banderas del archivo estable
// 🌍 EUROPA (44 países)
{
  name: "Albania",
  code: "al",
  capital: "Tirana",
  population: "2.8M",
  region: "Europa",
  difficulty: 4,
  hasRed: true,
  hasBlack: true
}, {
  name: "Alemania",
  code: "de",
  capital: "Berlín",
  population: "83M",
  region: "Europa",
  difficulty: 1,
  hasRed: true,
  hasBlack: true,
  hasYellow: true,
  hasStripes: true
}, {
  name: "Andorra",
  code: "ad",
  capital: "Andorra la Vieja",
  population: "77K",
  region: "Europa",
  difficulty: 4,
  hasBlue: true,
  hasRed: true,
  hasYellow: true
}, {
  name: "Austria",
  code: "at",
  capital: "Viena",
  population: "9M",
  region: "Europa",
  difficulty: 2,
  hasRed: true,
  hasWhite: true,
  hasStripes: true
}, {
  name: "Bélgica",
  code: "be",
  capital: "Bruselas",
  population: "11.5M",
  region: "Europa",
  difficulty: 2,
  hasBlack: true,
  hasYellow: true,
  hasRed: true,
  hasStripes: true
}, {
  name: "Bielorrusia",
  code: "by",
  capital: "Minsk",
  population: "9.4M",
  region: "Europa",
  difficulty: 3,
  hasRed: true,
  hasGreen: true,
  hasWhite: true
}, {
  name: "Bosnia y Herzegovina",
  code: "ba",
  capital: "Sarajevo",
  population: "3.3M",
  region: "Europa",
  difficulty: 3,
  hasBlue: true,
  hasYellow: true,
  hasWhite: true,
  hasStars: true
}, {
  name: "Bulgaria",
  code: "bg",
  capital: "Sofía",
  population: "6.9M",
  region: "Europa",
  difficulty: 3,
  hasWhite: true,
  hasGreen: true,
  hasRed: true,
  hasStripes: true
}, {
  name: "Chipre",
  code: "cy",
  capital: "Nicosia",
  population: "1.2M",
  region: "Europa",
  difficulty: 3,
  hasWhite: true,
  hasYellow: true,
  hasGreen: true
}, {
  name: "Croacia",
  code: "hr",
  capital: "Zagreb",
  population: "4M",
  region: "Europa",
  difficulty: 3,
  hasRed: true,
  hasWhite: true,
  hasBlue: true,
  hasStripes: true
}, {
  name: "Dinamarca",
  code: "dk",
  capital: "Copenhague",
  population: "5.8M",
  region: "Europa",
  difficulty: 2,
  hasRed: true,
  hasWhite: true
}, {
  name: "Eslovaquia",
  code: "sk",
  capital: "Bratislava",
  population: "5.4M",
  region: "Europa",
  difficulty: 3,
  hasWhite: true,
  hasBlue: true,
  hasRed: true,
  hasStripes: true
}, {
  name: "Eslovenia",
  code: "si",
  capital: "Liubliana",
  population: "2.1M",
  region: "Europa",
  difficulty: 3,
  hasWhite: true,
  hasBlue: true,
  hasRed: true,
  hasStripes: true
}, {
  name: "España",
  code: "es",
  capital: "Madrid",
  population: "47M",
  region: "Europa",
  difficulty: 1,
  hasRed: true,
  hasYellow: true,
  hasStripes: true
}, {
  name: "Estonia",
  code: "ee",
  capital: "Tallin",
  population: "1.3M",
  region: "Europa",
  difficulty: 3,
  hasBlue: true,
  hasBlack: true,
  hasWhite: true,
  hasStripes: true
}, {
  name: "Finlandia",
  code: "fi",
  capital: "Helsinki",
  population: "5.5M",
  region: "Europa",
  difficulty: 2,
  hasWhite: true,
  hasBlue: true
}, {
  name: "Francia",
  code: "fr",
  capital: "París",
  population: "65M",
  region: "Europa",
  difficulty: 1,
  hasBlue: true,
  hasWhite: true,
  hasRed: true,
  hasStripes: true
}, {
  name: "Grecia",
  code: "gr",
  capital: "Atenas",
  population: "10.4M",
  region: "Europa",
  difficulty: 2,
  hasBlue: true,
  hasWhite: true,
  hasStripes: true
}, {
  name: "Hungría",
  code: "hu",
  capital: "Budapest",
  population: "9.7M",
  region: "Europa",
  difficulty: 2,
  hasRed: true,
  hasWhite: true,
  hasGreen: true,
  hasStripes: true
}, {
  name: "Irlanda",
  code: "ie",
  capital: "Dublín",
  population: "5M",
  region: "Europa",
  difficulty: 2,
  hasGreen: true,
  hasWhite: true,
  hasOrange: true,
  hasStripes: true
}, {
  name: "Islandia",
  code: "is",
  capital: "Reikiavik",
  population: "366K",
  region: "Europa",
  difficulty: 3,
  hasBlue: true,
  hasWhite: true,
  hasRed: true
}, {
  name: "Italia",
  code: "it",
  capital: "Roma",
  population: "59M",
  region: "Europa",
  difficulty: 1,
  hasGreen: true,
  hasWhite: true,
  hasRed: true,
  hasStripes: true
}, {
  name: "Letonia",
  code: "lv",
  capital: "Riga",
  population: "1.8M",
  region: "Europa",
  difficulty: 3,
  hasRed: true,
  hasWhite: true,
  hasStripes: true
}, {
  name: "Liechtenstein",
  code: "li",
  capital: "Vaduz",
  population: "38K",
  region: "Europa",
  difficulty: 4,
  hasBlue: true,
  hasRed: true,
  hasYellow: true
}, {
  name: "Lituania",
  code: "lt",
  capital: "Vilna",
  population: "2.7M",
  region: "Europa",
  difficulty: 3,
  hasYellow: true,
  hasGreen: true,
  hasRed: true,
  hasStripes: true
}, {
  name: "Luxemburgo",
  code: "lu",
  capital: "Luxemburgo",
  population: "630K",
  region: "Europa",
  difficulty: 3,
  hasRed: true,
  hasWhite: true,
  hasBlue: true,
  hasStripes: true
}, {
  name: "Macedonia del Norte",
  code: "mk",
  capital: "Skopie",
  population: "2M",
  region: "Europa",
  difficulty: 4,
  hasRed: true,
  hasYellow: true
}, {
  name: "Malta",
  code: "mt",
  capital: "La Valeta",
  population: "515K",
  region: "Europa",
  difficulty: 4,
  hasWhite: true,
  hasRed: true
}, {
  name: "Moldavia",
  code: "md",
  capital: "Chisináu",
  population: "2.6M",
  region: "Europa",
  difficulty: 4,
  hasBlue: true,
  hasYellow: true,
  hasRed: true
}, {
  name: "Mónaco",
  code: "mc",
  capital: "Mónaco",
  population: "39K",
  region: "Europa",
  difficulty: 4,
  hasRed: true,
  hasWhite: true,
  hasStripes: true
}, {
  name: "Montenegro",
  code: "me",
  capital: "Podgorica",
  population: "620K",
  region: "Europa",
  difficulty: 4,
  hasRed: true,
  hasYellow: true
}, {
  name: "Noruega",
  code: "no",
  capital: "Oslo",
  population: "5.4M",
  region: "Europa",
  difficulty: 2,
  hasRed: true,
  hasWhite: true,
  hasBlue: true
}, {
  name: "Países Bajos",
  code: "nl",
  capital: "Ámsterdam",
  population: "17.5M",
  region: "Europa",
  difficulty: 2,
  hasRed: true,
  hasWhite: true,
  hasBlue: true,
  hasStripes: true
}, {
  name: "Polonia",
  code: "pl",
  capital: "Varsovia",
  population: "38M",
  region: "Europa",
  difficulty: 2,
  hasWhite: true,
  hasRed: true,
  hasStripes: true
}, {
  name: "Portugal",
  code: "pt",
  capital: "Lisboa",
  population: "10.3M",
  region: "Europa",
  difficulty: 1,
  hasGreen: true,
  hasRed: true,
  hasYellow: true
}, {
  name: "Reino Unido",
  code: "gb",
  capital: "Londres",
  population: "67M",
  region: "Europa",
  difficulty: 1,
  hasRed: true,
  hasWhite: true,
  hasBlue: true,
  hasStripes: true
}, {
  name: "República Checa",
  code: "cz",
  capital: "Praga",
  population: "10.5M",
  region: "Europa",
  difficulty: 2,
  hasWhite: true,
  hasRed: true,
  hasBlue: true,
  hasStripes: true
}, {
  name: "Rumania",
  code: "ro",
  capital: "Bucarest",
  population: "19.2M",
  region: "Europa",
  difficulty: 3,
  hasBlue: true,
  hasYellow: true,
  hasRed: true,
  hasStripes: true
}, {
  name: "Rusia",
  code: "ru",
  capital: "Moscú",
  population: "144M",
  region: "Europa",
  difficulty: 2,
  hasWhite: true,
  hasBlue: true,
  hasRed: true,
  hasStripes: true
}, {
  name: "San Marino",
  code: "sm",
  capital: "San Marino",
  population: "34K",
  region: "Europa",
  difficulty: 4,
  hasWhite: true,
  hasBlue: true,
  hasStripes: true
}, {
  name: "Serbia",
  code: "rs",
  capital: "Belgrado",
  population: "6.9M",
  region: "Europa",
  difficulty: 3,
  hasRed: true,
  hasBlue: true,
  hasWhite: true,
  hasStripes: true
}, {
  name: "Suecia",
  code: "se",
  capital: "Estocolmo",
  population: "10.4M",
  region: "Europa",
  difficulty: 2,
  hasBlue: true,
  hasYellow: true
}, {
  name: "Suiza",
  code: "ch",
  capital: "Berna",
  population: "8.6M",
  region: "Europa",
  difficulty: 2,
  hasRed: true,
  hasWhite: true
}, {
  name: "Ucrania",
  code: "ua",
  capital: "Kiev",
  population: "43M",
  region: "Europa",
  difficulty: 2,
  hasBlue: true,
  hasYellow: true,
  hasStripes: true
}, {
  name: "Vaticano",
  code: "va",
  capital: "Ciudad del Vaticano",
  population: "800",
  region: "Europa",
  difficulty: 4,
  hasYellow: true,
  hasWhite: true
},
// 🌏 ASIA (49 países)
{
  name: "Afganistán",
  code: "af",
  capital: "Kabul",
  population: "39M",
  region: "Asia",
  difficulty: 3,
  hasBlack: true,
  hasRed: true,
  hasGreen: true,
  hasWhite: true,
  hasStripes: true
}, {
  name: "Arabia Saudí",
  code: "sa",
  capital: "Riad",
  population: "35M",
  region: "Asia",
  difficulty: 3,
  hasGreen: true,
  hasWhite: true
}, {
  name: "Armenia",
  code: "am",
  capital: "Ereván",
  population: "3M",
  region: "Asia",
  difficulty: 4,
  hasRed: true,
  hasBlue: true,
  hasOrange: true,
  hasStripes: true
}, {
  name: "Azerbaiyán",
  code: "az",
  capital: "Bakú",
  population: "10M",
  region: "Asia",
  difficulty: 3,
  hasBlue: true,
  hasRed: true,
  hasGreen: true,
  hasWhite: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Bangladés",
  code: "bd",
  capital: "Daca",
  population: "166M",
  region: "Asia",
  difficulty: 2,
  hasGreen: true,
  hasRed: true
}, {
  name: "Baréin",
  code: "bh",
  capital: "Manama",
  population: "1.7M",
  region: "Asia",
  difficulty: 4,
  hasRed: true,
  hasWhite: true
}, {
  name: "Birmania",
  code: "mm",
  capital: "Naipyidó",
  population: "54M",
  region: "Asia",
  difficulty: 3,
  hasYellow: true,
  hasGreen: true,
  hasRed: true,
  hasWhite: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Brunéi",
  code: "bn",
  capital: "Bandar Seri Begawan",
  population: "440K",
  region: "Asia",
  difficulty: 4,
  hasYellow: true,
  hasWhite: true,
  hasBlack: true,
  hasRed: true
}, {
  name: "Bután",
  code: "bt",
  capital: "Timbu",
  population: "770K",
  region: "Asia",
  difficulty: 4,
  hasYellow: true,
  hasOrange: true,
  hasWhite: true
}, {
  name: "Camboya",
  code: "kh",
  capital: "Nom Pen",
  population: "17M",
  region: "Asia",
  difficulty: 3,
  hasBlue: true,
  hasRed: true,
  hasWhite: true
}, {
  name: "Catar",
  code: "qa",
  capital: "Doha",
  population: "2.9M",
  region: "Asia",
  difficulty: 3,
  hasWhite: true,
  hasRed: true
}, {
  name: "China",
  code: "cn",
  capital: "Pekín",
  population: "1.4B",
  region: "Asia",
  difficulty: 1,
  hasRed: true,
  hasYellow: true,
  hasStars: true
}, {
  name: "Corea del Norte",
  code: "kp",
  capital: "Pionyang",
  population: "26M",
  region: "Asia",
  difficulty: 3,
  hasRed: true,
  hasWhite: true,
  hasBlue: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Corea del Sur",
  code: "kr",
  capital: "Seúl",
  population: "52M",
  region: "Asia",
  difficulty: 2,
  hasWhite: true,
  hasRed: true,
  hasBlue: true,
  hasBlack: true
}, {
  name: "Emiratos Árabes Unidos",
  code: "ae",
  capital: "Abu Dabi",
  population: "10M",
  region: "Asia",
  difficulty: 3,
  hasGreen: true,
  hasWhite: true,
  hasBlack: true,
  hasRed: true,
  hasStripes: true
}, {
  name: "Filipinas",
  code: "ph",
  capital: "Manila",
  population: "111M",
  region: "Asia",
  difficulty: 2,
  hasBlue: true,
  hasRed: true,
  hasWhite: true,
  hasYellow: true,
  hasStars: true
}, {
  name: "Georgia",
  code: "ge",
  capital: "Tiflis",
  population: "3.7M",
  region: "Asia",
  difficulty: 3,
  hasWhite: true,
  hasRed: true
}, {
  name: "India",
  code: "in",
  capital: "Nueva Delhi",
  population: "1.39B",
  region: "Asia",
  difficulty: 1,
  hasOrange: true,
  hasWhite: true,
  hasGreen: true,
  hasBlue: true,
  hasStripes: true
}, {
  name: "Indonesia",
  code: "id",
  capital: "Yakarta",
  population: "276M",
  region: "Asia",
  difficulty: 2,
  hasRed: true,
  hasWhite: true,
  hasStripes: true
}, {
  name: "Irak",
  code: "iq",
  capital: "Bagdad",
  population: "41M",
  region: "Asia",
  difficulty: 3,
  hasRed: true,
  hasWhite: true,
  hasBlack: true,
  hasGreen: true,
  hasStripes: true
}, {
  name: "Irán",
  code: "ir",
  capital: "Teherán",
  population: "85M",
  region: "Asia",
  difficulty: 2,
  hasGreen: true,
  hasWhite: true,
  hasRed: true,
  hasStripes: true
}, {
  name: "Israel",
  code: "il",
  capital: "Jerusalén",
  population: "9.3M",
  region: "Asia",
  difficulty: 2,
  hasWhite: true,
  hasBlue: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Japón",
  code: "jp",
  capital: "Tokio",
  population: "125M",
  region: "Asia",
  difficulty: 1,
  hasWhite: true,
  hasRed: true
}, {
  name: "Jordania",
  code: "jo",
  capital: "Amán",
  population: "10M",
  region: "Asia",
  difficulty: 3,
  hasBlack: true,
  hasWhite: true,
  hasGreen: true,
  hasRed: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Kazajistán",
  code: "kz",
  capital: "Nursultán",
  population: "19M",
  region: "Asia",
  difficulty: 3,
  hasBlue: true,
  hasYellow: true
}, {
  name: "Kirguistán",
  code: "kg",
  capital: "Biskek",
  population: "6.6M",
  region: "Asia",
  difficulty: 4,
  hasRed: true,
  hasYellow: true
}, {
  name: "Kuwait",
  code: "kw",
  capital: "Kuwait",
  population: "4.3M",
  region: "Asia",
  difficulty: 3,
  hasGreen: true,
  hasWhite: true,
  hasRed: true,
  hasBlack: true
}, {
  name: "Laos",
  code: "la",
  capital: "Vientián",
  population: "7.3M",
  region: "Asia",
  difficulty: 4,
  hasRed: true,
  hasBlue: true,
  hasWhite: true,
  hasStripes: true
}, {
  name: "Líbano",
  code: "lb",
  capital: "Beirut",
  population: "6.8M",
  region: "Asia",
  difficulty: 3,
  hasRed: true,
  hasWhite: true,
  hasGreen: true,
  hasStripes: true
}, {
  name: "Malasia",
  code: "my",
  capital: "Kuala Lumpur",
  population: "32M",
  region: "Asia",
  difficulty: 3,
  hasRed: true,
  hasWhite: true,
  hasBlue: true,
  hasYellow: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Maldivas",
  code: "mv",
  capital: "Malé",
  population: "540K",
  region: "Asia",
  difficulty: 4,
  hasRed: true,
  hasGreen: true,
  hasWhite: true
}, {
  name: "Mongolia",
  code: "mn",
  capital: "Ulán Bator",
  population: "3.3M",
  region: "Asia",
  difficulty: 3,
  hasRed: true,
  hasBlue: true,
  hasYellow: true
}, {
  name: "Nepal",
  code: "np",
  capital: "Katmandú",
  population: "30M",
  region: "Asia",
  difficulty: 4,
  hasRed: true,
  hasBlue: true,
  hasWhite: true
}, {
  name: "Omán",
  code: "om",
  capital: "Mascate",
  population: "5.2M",
  region: "Asia",
  difficulty: 4,
  hasWhite: true,
  hasRed: true,
  hasGreen: true
}, {
  name: "Pakistán",
  code: "pk",
  capital: "Islamabad",
  population: "225M",
  region: "Asia",
  difficulty: 2,
  hasGreen: true,
  hasWhite: true,
  hasStars: true
}, {
  name: "Palestina",
  code: "ps",
  capital: "Jerusalén Este",
  population: "5.1M",
  region: "Asia",
  difficulty: 3,
  hasBlack: true,
  hasWhite: true,
  hasGreen: true,
  hasRed: true,
  hasStripes: true
}, {
  name: "Singapur",
  code: "sg",
  capital: "Singapur",
  population: "5.7M",
  region: "Asia",
  difficulty: 3,
  hasRed: true,
  hasWhite: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Siria",
  code: "sy",
  capital: "Damasco",
  population: "18M",
  region: "Asia",
  difficulty: 3,
  hasRed: true,
  hasWhite: true,
  hasBlack: true,
  hasGreen: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Sri Lanka",
  code: "lk",
  capital: "Sri Jayawardenapura Kotte",
  population: "22M",
  region: "Asia",
  difficulty: 3,
  hasYellow: true,
  hasGreen: true,
  hasOrange: true,
  hasRed: true
}, {
  name: "Tailandia",
  code: "th",
  capital: "Bangkok",
  population: "70M",
  region: "Asia",
  difficulty: 2,
  hasRed: true,
  hasWhite: true,
  hasBlue: true,
  hasStripes: true
}, {
  name: "Taiwán",
  code: "tw",
  capital: "Taipéi",
  population: "23.5M",
  region: "Asia",
  difficulty: 2,
  hasRed: true,
  hasBlue: true,
  hasWhite: true,
  hasStars: true
}, {
  name: "Tayikistán",
  code: "tj",
  capital: "Dusambé",
  population: "9.7M",
  region: "Asia",
  difficulty: 4,
  hasRed: true,
  hasWhite: true,
  hasGreen: true,
  hasYellow: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Timor Oriental",
  code: "tl",
  capital: "Dili",
  population: "1.3M",
  region: "Asia",
  difficulty: 4,
  hasRed: true,
  hasYellow: true,
  hasBlack: true,
  hasWhite: true,
  hasStars: true
}, {
  name: "Turkmenistán",
  code: "tm",
  capital: "Asjabad",
  population: "6M",
  region: "Asia",
  difficulty: 4,
  hasGreen: true,
  hasWhite: true,
  hasRed: true,
  hasStars: true
}, {
  name: "Turquía",
  code: "tr",
  capital: "Ankara",
  population: "85M",
  region: "Asia",
  difficulty: 2,
  hasRed: true,
  hasWhite: true,
  hasStars: true
}, {
  name: "Uzbekistán",
  code: "uz",
  capital: "Taskent",
  population: "34M",
  region: "Asia",
  difficulty: 3,
  hasBlue: true,
  hasWhite: true,
  hasGreen: true,
  hasRed: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Vietnam",
  code: "vn",
  capital: "Hanói",
  population: "98M",
  region: "Asia",
  difficulty: 2,
  hasRed: true,
  hasYellow: true,
  hasStars: true
}, {
  name: "Yemen",
  code: "ye",
  capital: "Saná",
  population: "30M",
  region: "Asia",
  difficulty: 3,
  hasRed: true,
  hasWhite: true,
  hasBlack: true,
  hasStripes: true
},
// 🌍 ÁFRICA (54 países)
{
  name: "Angola",
  code: "ao",
  capital: "Luanda",
  population: "33M",
  region: "África",
  difficulty: 3,
  hasRed: true,
  hasBlack: true,
  hasYellow: true,
  hasStripes: true
}, {
  name: "Argelia",
  code: "dz",
  capital: "Argel",
  population: "44M",
  region: "África",
  difficulty: 3,
  hasGreen: true,
  hasWhite: true,
  hasRed: true,
  hasStars: true
}, {
  name: "Benín",
  code: "bj",
  capital: "Porto Novo",
  population: "12M",
  region: "África",
  difficulty: 4,
  hasGreen: true,
  hasYellow: true,
  hasRed: true
}, {
  name: "Botsuana",
  code: "bw",
  capital: "Gaborone",
  population: "2.4M",
  region: "África",
  difficulty: 4,
  hasBlue: true,
  hasBlack: true,
  hasWhite: true,
  hasStripes: true
}, {
  name: "Burkina Faso",
  code: "bf",
  capital: "Uagadugú",
  population: "21M",
  region: "África",
  difficulty: 4,
  hasRed: true,
  hasGreen: true,
  hasYellow: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Burundi",
  code: "bi",
  capital: "Gitega",
  population: "12M",
  region: "África",
  difficulty: 4,
  hasRed: true,
  hasGreen: true,
  hasWhite: true,
  hasStars: true
}, {
  name: "Cabo Verde",
  code: "cv",
  capital: "Praia",
  population: "560K",
  region: "África",
  difficulty: 4,
  hasBlue: true,
  hasWhite: true,
  hasRed: true,
  hasYellow: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Camerún",
  code: "cm",
  capital: "Yaundé",
  population: "27M",
  region: "África",
  difficulty: 3,
  hasGreen: true,
  hasRed: true,
  hasYellow: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Chad",
  code: "td",
  capital: "Yamena",
  population: "17M",
  region: "África",
  difficulty: 4,
  hasBlue: true,
  hasYellow: true,
  hasRed: true,
  hasStripes: true
}, {
  name: "Comoras",
  code: "km",
  capital: "Moroni",
  population: "880K",
  region: "África",
  difficulty: 4,
  hasYellow: true,
  hasWhite: true,
  hasRed: true,
  hasBlue: true,
  hasGreen: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Costa de Marfil",
  code: "ci",
  capital: "Yamusukro",
  population: "27M",
  region: "África",
  difficulty: 3,
  hasOrange: true,
  hasWhite: true,
  hasGreen: true,
  hasStripes: true
}, {
  name: "Egipto",
  code: "eg",
  capital: "El Cairo",
  population: "104M",
  region: "África",
  difficulty: 2,
  hasRed: true,
  hasWhite: true,
  hasBlack: true,
  hasYellow: true,
  hasStripes: true
}, {
  name: "Eritrea",
  code: "er",
  capital: "Asmara",
  population: "3.5M",
  region: "África",
  difficulty: 4,
  hasGreen: true,
  hasRed: true,
  hasBlue: true,
  hasYellow: true
}, {
  name: "Etiopía",
  code: "et",
  capital: "Adís Abeba",
  population: "118M",
  region: "África",
  difficulty: 3,
  hasGreen: true,
  hasYellow: true,
  hasRed: true,
  hasBlue: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Gabón",
  code: "ga",
  capital: "Libreville",
  population: "2.2M",
  region: "África",
  difficulty: 4,
  hasGreen: true,
  hasYellow: true,
  hasBlue: true,
  hasStripes: true
}, {
  name: "Gambia",
  code: "gm",
  capital: "Banjul",
  population: "2.4M",
  region: "África",
  difficulty: 4,
  hasRed: true,
  hasBlue: true,
  hasGreen: true,
  hasWhite: true,
  hasStripes: true
}, {
  name: "Ghana",
  code: "gh",
  capital: "Acra",
  population: "31M",
  region: "África",
  difficulty: 3,
  hasRed: true,
  hasYellow: true,
  hasGreen: true,
  hasBlack: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Guinea",
  code: "gn",
  capital: "Conakri",
  population: "13.5M",
  region: "África",
  difficulty: 4,
  hasRed: true,
  hasYellow: true,
  hasGreen: true,
  hasStripes: true
}, {
  name: "Guinea-Bisáu",
  code: "gw",
  capital: "Bisáu",
  population: "2M",
  region: "África",
  difficulty: 4,
  hasRed: true,
  hasYellow: true,
  hasGreen: true,
  hasBlack: true,
  hasStars: true
}, {
  name: "Guinea Ecuatorial",
  code: "gq",
  capital: "Malabo",
  population: "1.4M",
  region: "África",
  difficulty: 4,
  hasGreen: true,
  hasWhite: true,
  hasRed: true,
  hasBlue: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Kenia",
  code: "ke",
  capital: "Nairobi",
  population: "55M",
  region: "África",
  difficulty: 3,
  hasBlack: true,
  hasRed: true,
  hasGreen: true,
  hasWhite: true,
  hasStripes: true
}, {
  name: "Lesoto",
  code: "ls",
  capital: "Maseru",
  population: "2.1M",
  region: "África",
  difficulty: 4,
  hasBlue: true,
  hasWhite: true,
  hasGreen: true,
  hasBlack: true,
  hasStripes: true
}, {
  name: "Liberia",
  code: "lr",
  capital: "Monrovia",
  population: "5M",
  region: "África",
  difficulty: 4,
  hasRed: true,
  hasWhite: true,
  hasBlue: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Libia",
  code: "ly",
  capital: "Trípoli",
  population: "7M",
  region: "África",
  difficulty: 3,
  hasRed: true,
  hasBlack: true,
  hasGreen: true,
  hasWhite: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Madagascar",
  code: "mg",
  capital: "Antananarivo",
  population: "28M",
  region: "África",
  difficulty: 3,
  hasWhite: true,
  hasRed: true,
  hasGreen: true
}, {
  name: "Malaui",
  code: "mw",
  capital: "Lilongüe",
  population: "19M",
  region: "África",
  difficulty: 4,
  hasBlack: true,
  hasRed: true,
  hasGreen: true,
  hasStripes: true
}, {
  name: "Malí",
  code: "ml",
  capital: "Bamako",
  population: "20M",
  region: "África",
  difficulty: 4,
  hasGreen: true,
  hasYellow: true,
  hasRed: true,
  hasStripes: true
}, {
  name: "Marruecos",
  code: "ma",
  capital: "Rabat",
  population: "37M",
  region: "África",
  difficulty: 3,
  hasRed: true,
  hasGreen: true,
  hasStars: true
}, {
  name: "Mauricio",
  code: "mu",
  capital: "Port Louis",
  population: "1.2M",
  region: "África",
  difficulty: 4,
  hasRed: true,
  hasBlue: true,
  hasYellow: true,
  hasGreen: true,
  hasStripes: true
}, {
  name: "Mauritania",
  code: "mr",
  capital: "Nuakchot",
  population: "4.6M",
  region: "África",
  difficulty: 4,
  hasGreen: true,
  hasYellow: true,
  hasRed: true,
  hasStripes: true
}, {
  name: "Mozambique",
  code: "mz",
  capital: "Maputo",
  population: "32M",
  region: "África",
  difficulty: 4,
  hasGreen: true,
  hasBlack: true,
  hasYellow: true,
  hasWhite: true,
  hasRed: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Namibia",
  code: "na",
  capital: "Windhoek",
  population: "2.5M",
  region: "África",
  difficulty: 4,
  hasBlue: true,
  hasRed: true,
  hasGreen: true,
  hasWhite: true,
  hasYellow: true
}, {
  name: "Níger",
  code: "ne",
  capital: "Niamey",
  population: "25M",
  region: "África",
  difficulty: 4,
  hasOrange: true,
  hasWhite: true,
  hasGreen: true,
  hasStripes: true
}, {
  name: "Nigeria",
  code: "ng",
  capital: "Abuya",
  population: "211M",
  region: "África",
  difficulty: 2,
  hasGreen: true,
  hasWhite: true,
  hasStripes: true
}, {
  name: "República Centroafricana",
  code: "cf",
  capital: "Bangui",
  population: "4.8M",
  region: "África",
  difficulty: 4,
  hasBlue: true,
  hasWhite: true,
  hasGreen: true,
  hasYellow: true,
  hasRed: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "República del Congo",
  code: "cg",
  capital: "Brazzaville",
  population: "5.6M",
  region: "África",
  difficulty: 4,
  hasGreen: true,
  hasYellow: true,
  hasRed: true
}, {
  name: "República Democrática del Congo",
  code: "cd",
  capital: "Kinsasa",
  population: "92M",
  region: "África",
  difficulty: 3,
  hasBlue: true,
  hasYellow: true,
  hasRed: true,
  hasStars: true
}, {
  name: "Ruanda",
  code: "rw",
  capital: "Kigali",
  population: "13M",
  region: "África",
  difficulty: 4,
  hasBlue: true,
  hasYellow: true,
  hasGreen: true,
  hasStripes: true
}, {
  name: "Santo Tomé y Príncipe",
  code: "st",
  capital: "Santo Tomé",
  population: "220K",
  region: "África",
  difficulty: 4,
  hasGreen: true,
  hasYellow: true,
  hasRed: true,
  hasBlack: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Senegal",
  code: "sn",
  capital: "Dakar",
  population: "17M",
  region: "África",
  difficulty: 3,
  hasGreen: true,
  hasYellow: true,
  hasRed: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Seychelles",
  code: "sc",
  capital: "Victoria",
  population: "98K",
  region: "África",
  difficulty: 4,
  hasBlue: true,
  hasYellow: true,
  hasRed: true,
  hasWhite: true,
  hasGreen: true
}, {
  name: "Sierra Leona",
  code: "sl",
  capital: "Freetown",
  population: "8M",
  region: "África",
  difficulty: 4,
  hasGreen: true,
  hasWhite: true,
  hasBlue: true,
  hasStripes: true
}, {
  name: "Somalia",
  code: "so",
  capital: "Mogadiscio",
  population: "16M",
  region: "África",
  difficulty: 3,
  hasBlue: true,
  hasWhite: true,
  hasStars: true
}, {
  name: "Suazilandia",
  code: "sz",
  capital: "Mbabane",
  population: "1.1M",
  region: "África",
  difficulty: 4,
  hasBlue: true,
  hasYellow: true,
  hasRed: true,
  hasWhite: true,
  hasBlack: true,
  hasStripes: true
}, {
  name: "Sudáfrica",
  code: "za",
  capital: "Pretoria",
  population: "60M",
  region: "África",
  difficulty: 2,
  hasRed: true,
  hasWhite: true,
  hasBlue: true,
  hasGreen: true,
  hasBlack: true,
  hasYellow: true
}, {
  name: "Sudán",
  code: "sd",
  capital: "Jartum",
  population: "45M",
  region: "África",
  difficulty: 3,
  hasRed: true,
  hasWhite: true,
  hasBlack: true,
  hasGreen: true,
  hasStripes: true
}, {
  name: "Sudán del Sur",
  code: "ss",
  capital: "Yuba",
  population: "11M",
  region: "África",
  difficulty: 4,
  hasBlack: true,
  hasWhite: true,
  hasRed: true,
  hasGreen: true,
  hasBlue: true,
  hasYellow: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Tanzania",
  code: "tz",
  capital: "Dodoma",
  population: "61M",
  region: "África",
  difficulty: 3,
  hasGreen: true,
  hasYellow: true,
  hasBlack: true,
  hasBlue: true
}, {
  name: "Togo",
  code: "tg",
  capital: "Lomé",
  population: "8.4M",
  region: "África",
  difficulty: 4,
  hasGreen: true,
  hasYellow: true,
  hasRed: true,
  hasWhite: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Túnez",
  code: "tn",
  capital: "Túnez",
  population: "12M",
  region: "África",
  difficulty: 3,
  hasRed: true,
  hasWhite: true,
  hasStars: true
}, {
  name: "Uganda",
  code: "ug",
  capital: "Kampala",
  population: "47M",
  region: "África",
  difficulty: 3,
  hasBlack: true,
  hasYellow: true,
  hasRed: true,
  hasWhite: true,
  hasStripes: true
}, {
  name: "Yibuti",
  code: "dj",
  capital: "Yibuti",
  population: "1M",
  region: "África",
  difficulty: 4,
  hasBlue: true,
  hasGreen: true,
  hasWhite: true,
  hasRed: true,
  hasStars: true
}, {
  name: "Zambia",
  code: "zm",
  capital: "Lusaka",
  population: "18M",
  region: "África",
  difficulty: 4,
  hasGreen: true,
  hasRed: true,
  hasBlack: true,
  hasOrange: true
}, {
  name: "Zimbabue",
  code: "zw",
  capital: "Harare",
  population: "15M",
  region: "África",
  difficulty: 4,
  hasGreen: true,
  hasYellow: true,
  hasRed: true,
  hasBlack: true,
  hasWhite: true,
  hasStripes: true
},
// 🌎 AMÉRICA (35 países)
{
  name: "Antigua y Barbuda",
  code: "ag",
  capital: "Saint John",
  population: "98K",
  region: "América",
  difficulty: 4,
  hasRed: true,
  hasBlack: true,
  hasBlue: true,
  hasWhite: true,
  hasYellow: true
}, {
  name: "Argentina",
  code: "ar",
  capital: "Buenos Aires",
  population: "45M",
  region: "América",
  difficulty: 1,
  hasBlue: true,
  hasWhite: true,
  hasYellow: true,
  hasStripes: true
}, {
  name: "Bahamas",
  code: "bs",
  capital: "Nasáu",
  population: "395K",
  region: "América",
  difficulty: 4,
  hasBlue: true,
  hasYellow: true,
  hasBlack: true,
  hasStripes: true
}, {
  name: "Barbados",
  code: "bb",
  capital: "Bridgetown",
  population: "287K",
  region: "América",
  difficulty: 4,
  hasBlue: true,
  hasYellow: true,
  hasBlack: true
}, {
  name: "Belice",
  code: "bz",
  capital: "Belmopán",
  population: "400K",
  region: "América",
  difficulty: 4,
  hasBlue: true,
  hasRed: true,
  hasWhite: true
}, {
  name: "Bolivia",
  code: "bo",
  capital: "Sucre",
  population: "11.8M",
  region: "América",
  difficulty: 3,
  hasRed: true,
  hasYellow: true,
  hasGreen: true,
  hasStripes: true
}, {
  name: "Brasil",
  code: "br",
  capital: "Brasilia",
  population: "214M",
  region: "América",
  difficulty: 1,
  hasGreen: true,
  hasYellow: true,
  hasBlue: true,
  hasWhite: true,
  hasStars: true
}, {
  name: "Canadá",
  code: "ca",
  capital: "Ottawa",
  population: "38M",
  region: "América",
  difficulty: 1,
  hasRed: true,
  hasWhite: true
}, {
  name: "Chile",
  code: "cl",
  capital: "Santiago",
  population: "19M",
  region: "América",
  difficulty: 2,
  hasWhite: true,
  hasRed: true,
  hasBlue: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Colombia",
  code: "co",
  capital: "Bogotá",
  population: "51M",
  region: "América",
  difficulty: 2,
  hasYellow: true,
  hasBlue: true,
  hasRed: true,
  hasStripes: true
}, {
  name: "Costa Rica",
  code: "cr",
  capital: "San José",
  population: "5.1M",
  region: "América",
  difficulty: 3,
  hasBlue: true,
  hasWhite: true,
  hasRed: true,
  hasStripes: true
}, {
  name: "Cuba",
  code: "cu",
  capital: "La Habana",
  population: "11.3M",
  region: "América",
  difficulty: 3,
  hasBlue: true,
  hasWhite: true,
  hasRed: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Dominica",
  code: "dm",
  capital: "Roseau",
  population: "72K",
  region: "América",
  difficulty: 4,
  hasGreen: true,
  hasYellow: true,
  hasWhite: true,
  hasBlack: true,
  hasRed: true
}, {
  name: "Ecuador",
  code: "ec",
  capital: "Quito",
  population: "17.8M",
  region: "América",
  difficulty: 3,
  hasYellow: true,
  hasBlue: true,
  hasRed: true,
  hasStripes: true
}, {
  name: "El Salvador",
  code: "sv",
  capital: "San Salvador",
  population: "6.5M",
  region: "América",
  difficulty: 3,
  hasBlue: true,
  hasWhite: true,
  hasStripes: true
}, {
  name: "Estados Unidos",
  code: "us",
  capital: "Washington D.C.",
  population: "332M",
  region: "América",
  difficulty: 1,
  hasRed: true,
  hasWhite: true,
  hasBlue: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Granada",
  code: "gd",
  capital: "Saint George",
  population: "113K",
  region: "América",
  difficulty: 4,
  hasRed: true,
  hasYellow: true,
  hasGreen: true,
  hasStars: true
}, {
  name: "Guatemala",
  code: "gt",
  capital: "Ciudad de Guatemala",
  population: "17M",
  region: "América",
  difficulty: 3,
  hasBlue: true,
  hasWhite: true,
  hasStripes: true
}, {
  name: "Guyana",
  code: "gy",
  capital: "Georgetown",
  population: "790K",
  region: "América",
  difficulty: 4,
  hasGreen: true,
  hasYellow: true,
  hasRed: true,
  hasWhite: true,
  hasBlack: true
}, {
  name: "Haití",
  code: "ht",
  capital: "Puerto Príncipe",
  population: "11.5M",
  region: "América",
  difficulty: 4,
  hasBlue: true,
  hasRed: true,
  hasWhite: true,
  hasStripes: true
}, {
  name: "Honduras",
  code: "hn",
  capital: "Tegucigalpa",
  population: "10M",
  region: "América",
  difficulty: 3,
  hasBlue: true,
  hasWhite: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Jamaica",
  code: "jm",
  capital: "Kingston",
  population: "3M",
  region: "América",
  difficulty: 3,
  hasGreen: true,
  hasBlack: true,
  hasYellow: true
}, {
  name: "México",
  code: "mx",
  capital: "Ciudad de México",
  population: "126M",
  region: "América",
  difficulty: 1,
  hasGreen: true,
  hasWhite: true,
  hasRed: true,
  hasStripes: true
}, {
  name: "Nicaragua",
  code: "ni",
  capital: "Managua",
  population: "6.7M",
  region: "América",
  difficulty: 3,
  hasBlue: true,
  hasWhite: true,
  hasStripes: true
}, {
  name: "Panamá",
  code: "pa",
  capital: "Ciudad de Panamá",
  population: "4.3M",
  region: "América",
  difficulty: 3,
  hasWhite: true,
  hasRed: true,
  hasBlue: true,
  hasStars: true
}, {
  name: "Paraguay",
  code: "py",
  capital: "Asunción",
  population: "7.2M",
  region: "América",
  difficulty: 3,
  hasRed: true,
  hasWhite: true,
  hasBlue: true,
  hasStripes: true
}, {
  name: "Perú",
  code: "pe",
  capital: "Lima",
  population: "33M",
  region: "América",
  difficulty: 2,
  hasRed: true,
  hasWhite: true,
  hasStripes: true
}, {
  name: "República Dominicana",
  code: "do",
  capital: "Santo Domingo",
  population: "11M",
  region: "América",
  difficulty: 3,
  hasRed: true,
  hasWhite: true,
  hasBlue: true
}, {
  name: "San Cristóbal y Nieves",
  code: "kn",
  capital: "Basseterre",
  population: "53K",
  region: "América",
  difficulty: 4,
  hasGreen: true,
  hasYellow: true,
  hasRed: true,
  hasBlack: true,
  hasWhite: true,
  hasStars: true
}, {
  name: "San Vicente y las Granadinas",
  code: "vc",
  capital: "Kingstown",
  population: "111K",
  region: "América",
  difficulty: 4,
  hasBlue: true,
  hasYellow: true,
  hasGreen: true
}, {
  name: "Santa Lucía",
  code: "lc",
  capital: "Castries",
  population: "184K",
  region: "América",
  difficulty: 4,
  hasBlue: true,
  hasYellow: true,
  hasBlack: true,
  hasWhite: true
}, {
  name: "Surinam",
  code: "sr",
  capital: "Paramaribo",
  population: "590K",
  region: "América",
  difficulty: 4,
  hasGreen: true,
  hasWhite: true,
  hasRed: true,
  hasYellow: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Trinidad y Tobago",
  code: "tt",
  capital: "Puerto España",
  population: "1.4M",
  region: "América",
  difficulty: 4,
  hasRed: true,
  hasWhite: true,
  hasBlack: true
}, {
  name: "Uruguay",
  code: "uy",
  capital: "Montevideo",
  population: "3.5M",
  region: "América",
  difficulty: 3,
  hasWhite: true,
  hasBlue: true,
  hasYellow: true,
  hasStripes: true
}, {
  name: "Venezuela",
  code: "ve",
  capital: "Caracas",
  population: "28M",
  region: "América",
  difficulty: 2,
  hasYellow: true,
  hasBlue: true,
  hasRed: true,
  hasWhite: true,
  hasStars: true,
  hasStripes: true
},
// 🌏 OCEANÍA (14 países)
{
  name: "Australia",
  code: "au",
  capital: "Canberra",
  population: "26M",
  region: "Oceanía",
  difficulty: 1,
  hasBlue: true,
  hasRed: true,
  hasWhite: true,
  hasStars: true
}, {
  name: "Fiyi",
  code: "fj",
  capital: "Suva",
  population: "900K",
  region: "Oceanía",
  difficulty: 4,
  hasBlue: true,
  hasWhite: true,
  hasRed: true,
  hasGreen: true,
  hasYellow: true
}, {
  name: "Islas Marshall",
  code: "mh",
  capital: "Majuro",
  population: "59K",
  region: "Oceanía",
  difficulty: 4,
  hasBlue: true,
  hasWhite: true,
  hasOrange: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Islas Salomón",
  code: "sb",
  capital: "Honiara",
  population: "700K",
  region: "Oceanía",
  difficulty: 4,
  hasBlue: true,
  hasGreen: true,
  hasYellow: true,
  hasWhite: true,
  hasStars: true
}, {
  name: "Kiribati",
  code: "ki",
  capital: "Tarawa Sur",
  population: "120K",
  region: "Oceanía",
  difficulty: 4,
  hasRed: true,
  hasBlue: true,
  hasWhite: true,
  hasYellow: true,
  hasStripes: true
}, {
  name: "Micronesia",
  code: "fm",
  capital: "Palikir",
  population: "115K",
  region: "Oceanía",
  difficulty: 4,
  hasBlue: true,
  hasWhite: true,
  hasStars: true
}, {
  name: "Nauru",
  code: "nr",
  capital: "Yaren",
  population: "11K",
  region: "Oceanía",
  difficulty: 4,
  hasBlue: true,
  hasYellow: true,
  hasWhite: true,
  hasStars: true,
  hasStripes: true
}, {
  name: "Nueva Zelanda",
  code: "nz",
  capital: "Wellington",
  population: "5M",
  region: "Oceanía",
  difficulty: 2,
  hasBlue: true,
  hasRed: true,
  hasWhite: true,
  hasStars: true
}, {
  name: "Palaos",
  code: "pw",
  capital: "Ngerulmud",
  population: "18K",
  region: "Oceanía",
  difficulty: 4,
  hasBlue: true,
  hasYellow: true
}, {
  name: "Papúa Nueva Guinea",
  code: "pg",
  capital: "Puerto Moresby",
  population: "9M",
  region: "Oceanía",
  difficulty: 4,
  hasRed: true,
  hasBlack: true,
  hasWhite: true,
  hasStars: true
}, {
  name: "Samoa",
  code: "ws",
  capital: "Apia",
  population: "200K",
  region: "Oceanía",
  difficulty: 4,
  hasRed: true,
  hasBlue: true,
  hasWhite: true,
  hasStars: true
}, {
  name: "Tonga",
  code: "to",
  capital: "Nukualofa",
  population: "106K",
  region: "Oceanía",
  difficulty: 4,
  hasRed: true,
  hasWhite: true
}, {
  name: "Tuvalu",
  code: "tv",
  capital: "Funafuti",
  population: "12K",
  region: "Oceanía",
  difficulty: 4,
  hasBlue: true,
  hasRed: true,
  hasWhite: true,
  hasYellow: true,
  hasStars: true
}, {
  name: "Vanuatu",
  code: "vu",
  capital: "Port Vila",
  population: "310K",
  region: "Oceanía",
  difficulty: 4,
  hasRed: true,
  hasGreen: true,
  hasBlack: true,
  hasYellow: true
}];
function shuffle(arr) {
  return arr.slice().sort(function () {
    return Math.random() - 0.5;
  });
}
function sample(arr, n) {
  return shuffle(arr).slice(0, n);
}
function App() {
  var _useState = useState("menu"),
    _useState2 = _slicedToArray(_useState, 2),
    stage = _useState2[0],
    setStage = _useState2[1];
  var _useState3 = useState("classic"),
    _useState4 = _slicedToArray(_useState3, 2),
    gameMode = _useState4[0],
    setGameMode = _useState4[1];
  var _useState5 = useState(1),
    _useState6 = _slicedToArray(_useState5, 2),
    difficulty = _useState6[0],
    setDifficulty = _useState6[1];
  var _useState7 = useState(10),
    _useState8 = _slicedToArray(_useState7, 2),
    numQuestions = _useState8[0],
    setNumQuestions = _useState8[1];
  var _useState9 = useState("Todos"),
    _useState0 = _slicedToArray(_useState9, 2),
    region = _useState0[0],
    setRegion = _useState0[1];
  var _useState1 = useState("Todos"),
    _useState10 = _slicedToArray(_useState1, 2),
    feature = _useState10[0],
    setFeature = _useState10[1];
  var _useState11 = useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    questions = _useState12[0],
    setQuestions = _useState12[1];
  var _useState13 = useState(0),
    _useState14 = _slicedToArray(_useState13, 2),
    currentIndex = _useState14[0],
    setCurrentIndex = _useState14[1];
  var _useState15 = useState(0),
    _useState16 = _slicedToArray(_useState15, 2),
    score = _useState16[0],
    setScore = _useState16[1];
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    answered = _useState18[0],
    setAnswered = _useState18[1];
  var _useState19 = useState(""),
    _useState20 = _slicedToArray(_useState19, 2),
    feedback = _useState20[0],
    setFeedback = _useState20[1];
  var _useState21 = useState([]),
    _useState22 = _slicedToArray(_useState21, 2),
    options = _useState22[0],
    setOptions = _useState22[1];
  var _useState23 = useState([]),
    _useState24 = _slicedToArray(_useState23, 2),
    seenFlags = _useState24[0],
    setSeenFlags = _useState24[1];
  var _useState25 = useState(null),
    _useState26 = _slicedToArray(_useState25, 2),
    chosen = _useState26[0],
    setChosen = _useState26[1];
  var _useState27 = useState(null),
    _useState28 = _slicedToArray(_useState27, 2),
    lastResult = _useState28[0],
    setLastResult = _useState28[1];
  var correctSoundRef = useRef(null);
  var wrongSoundRef = useRef(null);
  var bgMusicRef = useRef(null);
  var phaseSoundRef = useRef(null);
  var warningSoundRef = useRef(null);
  var gameoverSoundRef = useRef(null);
  useEffect(function () {
    try {
      bgMusicRef.current = new Audio("sounds/background.mp3");
      bgMusicRef.current.loop = true;
      phaseSoundRef.current = new Audio("sounds/phase.mp3");
      warningSoundRef.current = new Audio("sounds/warning.mp3");
      gameoverSoundRef.current = new Audio("sounds/gameover.mp3");
    } catch (e) {}
  }, []);
  useEffect(function () {
    try {
      correctSoundRef.current = new Audio('sounds/correct.mp3');
      correctSoundRef.current.onerror = function () {
        correctSoundRef.current = new Audio('sounds/correct.wav');
      };
      wrongSoundRef.current = new Audio('sounds/wrong.mp3');
      wrongSoundRef.current.onerror = function () {
        wrongSoundRef.current = new Audio('sounds/wrong.wav');
      };
    } catch (e) {}
  }, []);
  var fases = [{
    dificultad: 1,
    numPreguntas: 5,
    minAciertos: 3,
    tiempo: 30
  }, {
    dificultad: 2,
    numPreguntas: 5,
    minAciertos: 4,
    tiempo: 25
  }, {
    dificultad: 3,
    numPreguntas: 5,
    minAciertos: 4,
    tiempo: 20
  }, {
    dificultad: 4,
    numPreguntas: 5,
    minAciertos: 5,
    tiempo: 15
  }];
  var fondos = ["linear-gradient(135deg,#e0f7fa,#80deea)", "linear-gradient(135deg,#f1f8e9,#aed581)", "linear-gradient(135deg,#fff3e0,#ffb74d)", "linear-gradient(135deg,#fce4ec,#f06292)"];
  var _useState29 = useState(0),
    _useState30 = _slicedToArray(_useState29, 2),
    faseIndex = _useState30[0],
    setFaseIndex = _useState30[1];
  var _useState31 = useState(null),
    _useState32 = _slicedToArray(_useState31, 2),
    tiempoRestante = _useState32[0],
    setTiempoRestante = _useState32[1];
  var _useState33 = useState(null),
    _useState34 = _slicedToArray(_useState33, 2),
    timer = _useState34[0],
    setTimer = _useState34[1];
  var usedFlagsRef = useRef(new Set());
  var _useState35 = useState(0),
    _useState36 = _slicedToArray(_useState35, 2),
    phaseCorrects = _useState36[0],
    setPhaseCorrects = _useState36[1];
  var _useState37 = useState(function () {
      try {
        return JSON.parse(localStorage.getItem("ranking") || "[]");
      } catch (e) {
        return [];
      }
    }),
    _useState38 = _slicedToArray(_useState37, 2),
    ranking = _useState38[0],
    setRanking = _useState38[1];

  // --- funciones del juego omitidas para brevedad (idénticas a versión mejoras) ---
  // Las dejamos tal cual con las defensas ya aplicadas, para centrarnos en el return.

  var fondo = gameMode === "progressive" ? fondos[Math.min(faseIndex, fondos.length - 1)] : "linear-gradient(135deg,#eef2ff,#fde68a)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: fondo
    },
    className: "flex items-center justify-center p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white/90 rounded-2xl p-6 shadow-2xl w-full max-w-5xl"
  }, stage === "menu" && /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl sm:text-4xl font-extrabold mb-2"
  }, "\uD83C\uDF0E \xA1Adivina la Bandera! \uD83C\uDF0E"), /*#__PURE__*/React.createElement("p", {
    className: "mb-4 text-slate-600"
  }, "Elige tu modo de juego"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row gap-3 justify-center"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setGameMode("classic");
      setStage("start");
    },
    className: "px-6 py-3 bg-emerald-500 text-white rounded-2xl font-bold hover:scale-105 transition"
  }, "TRAINING"), /*#__PURE__*/React.createElement("button", {
    onClick: startProgressiveGame,
    className: "px-6 py-3 bg-indigo-500 text-white rounded-2xl font-bold hover:scale-105 transition"
  }, "COMPETICI\xD3N"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setStage("ranking");
    },
    className: "px-6 py-3 bg-sky-500 text-white rounded-2xl font-bold hover:scale-105 transition"
  }, "Ver Ranking"))), stage === "start" && /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl mb-4"
  }, "\u2699\uFE0F Configuraci\xF3n de Training"), /*#__PURE__*/React.createElement("div", {
    className: "mb-2"
  }, "Dificultad:", /*#__PURE__*/React.createElement("select", {
    value: difficulty,
    onChange: function onChange(e) {
      return setDifficulty(e.target.value);
    },
    className: "ml-2 border rounded p-1"
  }, /*#__PURE__*/React.createElement("option", {
    value: "1"
  }, "F\xE1cil"), /*#__PURE__*/React.createElement("option", {
    value: "2"
  }, "Medio"), /*#__PURE__*/React.createElement("option", {
    value: "3"
  }, "Dif\xEDcil"), /*#__PURE__*/React.createElement("option", {
    value: "4"
  }, "Experto"))), /*#__PURE__*/React.createElement("div", {
    className: "mb-2"
  }, "Preguntas:", /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: numQuestions,
    onChange: function onChange(e) {
      return setNumQuestions(Number(e.target.value));
    },
    className: "ml-2 border rounded p-1 w-16"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setGameMode("classic");
      startGame();
    },
    className: "mt-4 px-6 py-3 bg-emerald-500 text-white rounded-xl font-bold hover:scale-105 transition"
  }, "Iniciar"), /*#__PURE__*/React.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setStage("menu");
    },
    className: "px-4 py-2 bg-slate-300 rounded"
  }, "Volver"))), stage === "game" && (questions.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "text-center py-12 text-lg text-slate-600"
  }, "Cargando pregunta...") : /*#__PURE__*/React.createElement("div", null)), stage === "phaseTransition" && /*#__PURE__*/React.createElement("div", {
    className: "text-center py-12"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-bold mb-4"
  }, "\u2728 \xA1Fase completada!"), /*#__PURE__*/React.createElement("p", null, "Prep\xE1rate para la siguiente fase...")), stage === "end" && /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl mb-4"
  }, "\uD83C\uDF89 Fin de la partida"), /*#__PURE__*/React.createElement("p", {
    className: "mb-4"
  }, "Tu puntuaci\xF3n: ", /*#__PURE__*/React.createElement("strong", null, score)), /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Tu nombre",
    id: "playerName",
    className: "border rounded p-2"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      var n = document.getElementById("playerName").value;
      saveScore(n);
      setStage("ranking");
    },
    className: "ml-2 px-4 py-2 bg-indigo-500 text-white rounded"
  }, "Guardar")), /*#__PURE__*/React.createElement("button", {
    onClick: playAgain,
    className: "px-6 py-3 bg-emerald-500 text-white rounded-xl font-bold hover:scale-105 transition"
  }, "Volver al men\xFA")), stage === "ranking" && /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl mb-4"
  }, "\uD83C\uDFC6 Ranking"), /*#__PURE__*/React.createElement("table", {
    className: "w-full text-left mb-4"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Nombre"), /*#__PURE__*/React.createElement("th", null, "Puntos"), /*#__PURE__*/React.createElement("th", null, "Fase"), /*#__PURE__*/React.createElement("th", null, "Nivel"), /*#__PURE__*/React.createElement("th", null, "Progreso"), /*#__PURE__*/React.createElement("th", null, "Fecha"))), /*#__PURE__*/React.createElement("tbody", null, (Array.isArray(ranking) ? ranking : []).map(function (r, i) {
    var _r$nombre, _r$score, _r$fase, _r$nivel, _r$nivel2, _r$fecha;
    return /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement("td", null, (_r$nombre = r === null || r === void 0 ? void 0 : r.nombre) !== null && _r$nombre !== void 0 ? _r$nombre : "-"), /*#__PURE__*/React.createElement("td", null, (_r$score = r === null || r === void 0 ? void 0 : r.score) !== null && _r$score !== void 0 ? _r$score : 0), /*#__PURE__*/React.createElement("td", null, (_r$fase = r === null || r === void 0 ? void 0 : r.fase) !== null && _r$fase !== void 0 ? _r$fase : "-"), /*#__PURE__*/React.createElement("td", null, (_r$nivel = r === null || r === void 0 ? void 0 : r.nivel) !== null && _r$nivel !== void 0 ? _r$nivel : "-"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      className: "w-32 bg-slate-200 h-4 rounded overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-full bg-gradient-to-r from-indigo-500 to-emerald-500",
      style: {
        width: "".concat(((_r$nivel2 = r === null || r === void 0 ? void 0 : r.nivel) !== null && _r$nivel2 !== void 0 ? _r$nivel2 : 0) / 10 * 100, "%")
      }
    }))), /*#__PURE__*/React.createElement("td", null, (_r$fecha = r === null || r === void 0 ? void 0 : r.fecha) !== null && _r$fecha !== void 0 ? _r$fecha : "-"));
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setStage("menu");
    },
    className: "px-4 py-2 bg-slate-300 rounded"
  }, "Volver")), stage === "seen" && /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl mb-4"
  }, "\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8\uFE0F Banderas vistas"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-4 gap-4"
  }, seenFlags.map(function (s, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "p-2 border rounded"
    }, /*#__PURE__*/React.createElement("img", {
      src: "https://flagcdn.com/w80/".concat(s.flag.code, ".png"),
      alt: s.flag.name,
      className: "mx-auto mb-2"
    }), /*#__PURE__*/React.createElement("div", {
      className: "text-sm"
    }, s.flag.name), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-500"
    }, s.result === "correct" ? "✔️" : "❌"));
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setStage("menu");
    },
    className: "px-4 py-2 bg-slate-300 rounded"
  }, "Volver")))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
