"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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

/*****************************************************************
 * DATA:
 *****************************************************************/
var flags = [
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

/*****************************************************************
 * Utilidades
 *****************************************************************/

function shuffle(arr) {
  return arr.slice().sort(function () {
    return Math.random() - 0.5;
  });
}
function sample(arr, n) {
  return shuffle(arr).slice(0, n);
}
function App() {
  // stages: menu, start, game, phaseTransition, end, ranking, seen
  var _useState = useState("menu"),
    _useState2 = _slicedToArray(_useState, 2),
    stage = _useState2[0],
    setStage = _useState2[1];
  var _useState3 = useState("classic"),
    _useState4 = _slicedToArray(_useState3, 2),
    gameMode = _useState4[0],
    setGameMode = _useState4[1]; // "classic" | "progressive"

  // Estado general
  var _useState5 = useState(1),
    _useState6 = _slicedToArray(_useState5, 2),
    difficulty = _useState6[0],
    setDifficulty = _useState6[1]; // 1..4
  var _useState7 = useState(10),
    _useState8 = _slicedToArray(_useState7, 2),
    numQuestions = _useState8[0],
    setNumQuestions = _useState8[1];
  var _useState9 = useState("Todos"),
    _useState0 = _slicedToArray(_useState9, 2),
    region = _useState0[0],
    setRegion = _useState0[1];
  var _useState1 = useState([]),
    _useState10 = _slicedToArray(_useState1, 2),
    features = _useState10[0],
    setFeatures = _useState10[1]; // ✅ ahora array de features seleccionadas
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
    prevStage = _useState26[0],
    setPrevStage = _useState26[1];

  // FX
  var _useState27 = useState(null),
    _useState28 = _slicedToArray(_useState27, 2),
    chosen = _useState28[0],
    setChosen = _useState28[1];
  var _useState29 = useState(null),
    _useState30 = _slicedToArray(_useState29, 2),
    lastResult = _useState30[0],
    setLastResult = _useState30[1]; // 'correct'|'wrong'|null
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
      correctSoundRef.current = new Audio("sounds/correct.mp3");
      correctSoundRef.current.onerror = function () {
        correctSoundRef.current = new Audio("sounds/correct.wav");
      };
      wrongSoundRef.current = new Audio("sounds/wrong.mp3");
      wrongSoundRef.current.onerror = function () {
        wrongSoundRef.current = new Audio("sounds/wrong.wav");
      };
    } catch (e) {}
  }, []);

  // Progresivo
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
  var _useState31 = useState(0),
    _useState32 = _slicedToArray(_useState31, 2),
    faseIndex = _useState32[0],
    setFaseIndex = _useState32[1];
  var _useState33 = useState(null),
    _useState34 = _slicedToArray(_useState33, 2),
    tiempoRestante = _useState34[0],
    setTiempoRestante = _useState34[1];
  var _useState35 = useState(null),
    _useState36 = _slicedToArray(_useState35, 2),
    timer = _useState36[0],
    setTimer = _useState36[1];
  var usedFlagsRef = useRef(new Set()); // evitar repeticiones en progresivo
  var _useState37 = useState(0),
    _useState38 = _slicedToArray(_useState37, 2),
    phaseCorrects = _useState38[0],
    setPhaseCorrects = _useState38[1];

  // Ranking local
  var _useState39 = useState(function () {
      try {
        return JSON.parse(localStorage.getItem("ranking") || "[]");
      } catch (e) {
        return [];
      }
    }),
    _useState40 = _slicedToArray(_useState39, 2),
    ranking = _useState40[0],
    setRanking = _useState40[1];

  // ------------------ Filtrado (ahora con array features) ------------------
  function filterPool() {
    var difficultyArg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : difficulty;
    var regionArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : region;
    var featuresArg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : features;
    var pool = flags.filter(function (f) {
      return f.difficulty === Number(difficultyArg);
    });
    if (regionArg !== "Todos") pool = pool.filter(function (f) {
      return f.region === regionArg;
    });
    if (featuresArg.length > 0) {
      pool = pool.filter(function (f) {
        return featuresArg.every(function (feat) {
          if (feat === "Con Azul") return f.hasBlue;
          if (feat === "Con Rojo") return f.hasRed;
          if (feat === "Con Blanco") return f.hasWhite;
          if (feat === "Con Amarillo") return f.hasYellow;
          if (feat === "Con Estrellas") return f.hasStars;
          if (feat === "Con Rayas") return f.hasStripes;
          return true;
        });
      });
    }
    return pool;
  }

  // ------------------ Start Game (con overrides) ------------------
  function startGame() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$forceDifficulty = _ref.forceDifficulty,
      forceDifficulty = _ref$forceDifficulty === void 0 ? null : _ref$forceDifficulty,
      _ref$forceNumQuestion = _ref.forceNumQuestions,
      forceNumQuestions = _ref$forceNumQuestion === void 0 ? null : _ref$forceNumQuestion;
    var effDifficulty = forceDifficulty !== null && forceDifficulty !== void 0 ? forceDifficulty : difficulty;
    var effNum = forceNumQuestions !== null && forceNumQuestions !== void 0 ? forceNumQuestions : numQuestions;

    // Evitar repetidas en progresivo
    var avoidSet = gameMode === "progressive" ? usedFlagsRef.current : new Set();
    var pool = filterPool(effDifficulty, region, features).filter(function (f) {
      return !avoidSet.has(f.name);
    }); // ✅ usa features array
    if (pool.length === 0) {
      alert("No hay banderas que cumplan esos filtros. Cambia los filtros o la dificultad.");
      return;
    }
    var n = Math.min(effNum, pool.length);
    var selected = sample(pool, n);
    if (gameMode === "progressive") {
      selected.forEach(function (f) {
        return usedFlagsRef.current.add(f.name);
      });
    }
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

  // ------------------ Progresivo ------------------
  function startProgressiveGame() {
    if (bgMusicRef.current) {
      bgMusicRef.current.currentTime = 0;
      bgMusicRef.current.play()["catch"](function () {});
    }
    usedFlagsRef.current = new Set();
    setGameMode("progressive");
    setFaseIndex(0);
    iniciarFase(0);
  }
  function iniciarFase(index) {
    var fase = fases[index];

    // Configuro UI/estado visible (no dependemos de ellos para generar preguntas)
    setDifficulty(fase.dificultad);
    setNumQuestions(fase.numPreguntas);
    setTiempoRestante(fase.tiempo);
    setPhaseCorrects(0);

    // Iniciar preguntas usando overrides para evitar carrera con setState
    startGame({
      forceDifficulty: fase.dificultad,
      forceNumQuestions: fase.numPreguntas
    });

    // Temporizador
    if (timer) clearInterval(timer);
    var t = setInterval(function () {
      setTiempoRestante(function (prev) {
        if (prev === null) return prev;
        if (prev === 8) {
          try {
            if (warningSoundRef.current) {
              warningSoundRef.current.currentTime = 0;
              warningSoundRef.current.play()["catch"](function () {});
            }
          } catch (e) {}
        }
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

  // ------------------ Opciones por pregunta ------------------
  useEffect(function () {
    if (stage !== "game") return;
    var currentQ = questions[currentIndex];
    if (!currentQ) return;
    // Registrar bandera vista
    setSeenFlags(function (prev) {
      if (prev.find(function (p) {
        return p.flag.name === currentQ.name;
      })) return prev;
      return [].concat(_toConsumableArray(prev), [{
        flag: currentQ,
        result: null
      }]);
    });
    // Construir opciones
    var otherPool = flags.filter(function (f) {
      return f.name !== currentQ.name && (region === "Todos" || f.region === region);
    });
    var others = sample(otherPool, Math.min(5, otherPool.length));
    setOptions(shuffle([currentQ].concat(_toConsumableArray(others))));
    setAnswered(false);
    setFeedback("");
  }, [currentIndex, stage, questions, region]);

  // ------------------ Responder ------------------
  function handleAnswer(choice) {
    if (answered) return;
    var currentQ = questions[currentIndex];
    if (!currentQ) return;
    var correct = choice.name === currentQ.name;
    setChosen(choice.name);
    setAnswered(true);
    if (correct) {
      if (gameMode === "progressive") {
        var puntos = 10;
        var bonusTiempo = Math.max(0, (tiempoRestante || 0) * 2);
        var multiplicador = faseIndex + 1;
        setScore(function (s) {
          return s + (puntos + bonusTiempo) * multiplicador;
        });
        setPhaseCorrects(function (c) {
          return c + 1;
        });
      } else {
        setScore(function (s) {
          return s + 1;
        });
      }
      setFeedback("¡Correcto! 😎");
      setLastResult("correct");
      try {
        if (correctSoundRef !== null && correctSoundRef !== void 0 && correctSoundRef.current) {
          correctSoundRef.current.currentTime = 0;
          correctSoundRef.current.play()["catch"](function () {});
        }
      } catch (e) {}
      setTimeout(function () {
        return setLastResult(null);
      }, 700);
    } else {
      setFeedback("\xA1Incorrecto! La respuesta era ".concat(currentQ.name, " \uD83D\uDE05"));
      setLastResult("wrong");
      try {
        if (wrongSoundRef !== null && wrongSoundRef !== void 0 && wrongSoundRef.current) {
          wrongSoundRef.current.currentTime = 0;
          wrongSoundRef.current.play()["catch"](function () {});
        }
      } catch (e) {}
      setTimeout(function () {
        return setLastResult(null);
      }, 700);
    }

    // actualizar seen
    setSeenFlags(function (prev) {
      return prev.map(function (s) {
        return s.flag.name === currentQ.name ? _objectSpread(_objectSpread({}, s), {}, {
          result: correct ? "correct" : "wrong"
        }) : s;
      });
    });

    // Avance automático en competición
    if (gameMode === "progressive") {
      setTimeout(function () {
        nextQuestion();
      }, 1000);
    }
  }

  // ------------------ Siguiente / Fin de fase ------------------
  function nextQuestion() {
    if (currentIndex + 1 >= questions.length) {
      if (gameMode === "progressive") {
        var fase = fases[faseIndex];
        var superada = phaseCorrects >= fase.minAciertos;
        endFase(superada);
      } else {
        setStage("end");
        if (bgMusicRef.current) {
          bgMusicRef.current.pause();
          bgMusicRef.current.currentTime = 0;
        }
        try {
          if (gameoverSoundRef.current) {
            gameoverSoundRef.current.currentTime = 0;
            gameoverSoundRef.current.play()["catch"](function () {});
          }
        } catch (e) {}
      }
    } else {
      setCurrentIndex(function (i) {
        return i + 1;
      });
    }
  }
  function endFase(superada) {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
    if (!superada) {
      setStage("end");
      if (bgMusicRef.current) {
        bgMusicRef.current.pause();
        bgMusicRef.current.currentTime = 0;
      }
      try {
        if (gameoverSoundRef.current) {
          gameoverSoundRef.current.currentTime = 0;
          gameoverSoundRef.current.play()["catch"](function () {});
        }
      } catch (e) {}
      return;
    }
    if (faseIndex + 1 < fases.length) {
      setStage("phaseTransition");
      try {
        if (phaseSoundRef.current) {
          phaseSoundRef.current.currentTime = 0;
          phaseSoundRef.current.play()["catch"](function () {});
        }
      } catch (e) {}
      var nextIdx = faseIndex + 1;
      setTimeout(function () {
        setFaseIndex(nextIdx);
        iniciarFase(nextIdx);
      }, 1000);
    } else {
      setStage("end");
      if (bgMusicRef.current) {
        bgMusicRef.current.pause();
        bgMusicRef.current.currentTime = 0;
      }
      try {
        if (gameoverSoundRef.current) {
          gameoverSoundRef.current.currentTime = 0;
          gameoverSoundRef.current.play()["catch"](function () {});
        }
      } catch (e) {}
    }
  }

  // ------------------ Utilidades UI ------------------
  function playAgain() {
    if (bgMusicRef.current) {
      bgMusicRef.current.pause();
      bgMusicRef.current.currentTime = 0;
    }
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
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
  }
  function openSeen() {
    setPrevStage(stage);
    setStage("seen");
  }
  function saveScore(nombre) {
    var faseDesc = gameMode === "progressive" ? "Fase ".concat(faseIndex + 1) : "TRAINING";
    var nivel = gameMode === "progressive" ? faseIndex + 1 : 0;
    var entrada = {
      nombre: nombre || "Anónimo",
      score: score,
      fase: faseDesc,
      nivel: nivel,
      fecha: new Date().toLocaleString()
    };
    var nuevo = [].concat(_toConsumableArray(ranking), [entrada]).sort(function (a, b) {
      return b.score - a.score;
    }).slice(0, 20);
    setRanking(nuevo);
    localStorage.setItem("ranking", JSON.stringify(nuevo));
  }

  // Fondo dinámico
  var fondo = gameMode === "progressive" ? fondos[Math.min(faseIndex, fondos.length - 1)] : "linear-gradient(135deg,#eef2ff,#fde68a)";

  // Cálculo seguro para render de "game"
  var current = stage === "game" ? questions[currentIndex] : null;

  // ------------------ Render ------------------
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: fondo
    },
    className: "flex items-center justify-center p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white/90 rounded-2xl p-6 shadow-2xl w-full max-w-5xl"
  }, stage === "phaseTransition" && /*#__PURE__*/React.createElement("div", {
    className: "text-center py-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-3xl font-extrabold mb-2"
  }, "\xA1Fase ", faseIndex, " superada! \uD83C\uDF89"), /*#__PURE__*/React.createElement("div", {
    className: "text-lg text-slate-600"
  }, "Prep\xE1rate para la fase ", faseIndex + 1, "...")), stage === "menu" && /*#__PURE__*/React.createElement("div", {
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
  }, "Ver Ranking"))), stage === "start" && gameMode === "classic" && /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mb-4 text-slate-600"
  }, "Elige dificultad, regi\xF3n y caracter\xEDsticas antes de empezar."), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-slate-50 rounded"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm mb-1"
  }, "Dificultad"), /*#__PURE__*/React.createElement("select", {
    value: difficulty,
    onChange: function onChange(e) {
      return setDifficulty(e.target.value);
    },
    className: "w-full p-2 rounded border"
  }, /*#__PURE__*/React.createElement("option", {
    value: 1
  }, "1 \u2014 F\xE1cil (pa\xEDses muy conocidos)"), /*#__PURE__*/React.createElement("option", {
    value: 2
  }, "2 \u2014 Medio"), /*#__PURE__*/React.createElement("option", {
    value: 3
  }, "3 \u2014 Dif\xEDcil"), /*#__PURE__*/React.createElement("option", {
    value: 4
  }, "4 \u2014 Muy dif\xEDcil (peque\xF1os/raros)"))), /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-slate-50 rounded"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm mb-1"
  }, "Cantidad de preguntas"), /*#__PURE__*/React.createElement("select", {
    value: numQuestions,
    onChange: function onChange(e) {
      return setNumQuestions(Number(e.target.value));
    },
    className: "w-full p-2 rounded border"
  }, /*#__PURE__*/React.createElement("option", {
    value: 5
  }, "5"), /*#__PURE__*/React.createElement("option", {
    value: 10
  }, "10"), /*#__PURE__*/React.createElement("option", {
    value: 15
  }, "15"), /*#__PURE__*/React.createElement("option", {
    value: 20
  }, "20"))), /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-slate-50 rounded"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm mb-1"
  }, "Regi\xF3n"), /*#__PURE__*/React.createElement("select", {
    value: region,
    onChange: function onChange(e) {
      return setRegion(e.target.value);
    },
    className: "w-full p-2 rounded border"
  }, /*#__PURE__*/React.createElement("option", null, "Todos"), /*#__PURE__*/React.createElement("option", null, "Am\xE9rica"), /*#__PURE__*/React.createElement("option", null, "Europa"), /*#__PURE__*/React.createElement("option", null, "Asia"), /*#__PURE__*/React.createElement("option", null, "\xC1frica"), /*#__PURE__*/React.createElement("option", null, "Ocean\xEDa"))), /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-slate-50 rounded"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm mb-2"
  }, "Caracter\xEDsticas"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-1 text-left"
  }, ["Con Azul", "Con Rojo", "Con Blanco", "Con Amarillo", "Con Estrellas", "Con Rayas"].map(function (opt) {
    return /*#__PURE__*/React.createElement("label", {
      key: opt,
      className: "flex items-center gap-2 text-sm"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: features.includes(opt),
      onChange: function onChange() {
        setFeatures(function (prev) {
          return prev.includes(opt) ? prev.filter(function (f) {
            return f !== opt;
          }) : [].concat(_toConsumableArray(prev), [opt]);
        });
      }
    }), opt);
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-3 items-center"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return startGame();
    },
    className: "px-6 py-3 bg-emerald-500 text-white rounded-2xl font-bold hover:scale-105 transition"
  }, "\xA1Empezar Juego!"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setStage("menu");
    },
    className: "px-5 py-3 bg-slate-300 rounded-2xl font-semibold hover:scale-105 transition"
  }, "Volver al Men\xFA")), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 text-sm text-slate-500"
  }, "Nota: la lista actual incluye ", /*#__PURE__*/React.createElement("strong", null, flags.length), " pa\xEDses. Puedes ajustar filtros si quieres menos/otros.")), stage === "game" && (current ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs sm:text-sm text-slate-600"
  }, "P: ", /*#__PURE__*/React.createElement("strong", null, score), " | T: ", tiempoRestante, "s | ", currentIndex + 1, "/", questions.length)), gameMode === "progressive" && /*#__PURE__*/React.createElement("div", {
    className: "w-full bg-slate-200 h-6 rounded-xl overflow-hidden mb-6 shadow-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full bg-gradient-to-r from-indigo-500 to-emerald-500 transition-all duration-700",
    style: {
      width: "".concat((faseIndex + 1) / 10 * 100, "%")
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 rounded-xl shadow-inner mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center mb-4"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://flagcdn.com/w320/".concat(current.code, ".png"),
    alt: "Bandera ".concat(current.name),
    className: "w-64 h-40 object-cover rounded shadow",
    onError: function onError(e) {
      return e.target.style.display = 'none';
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-lg font-semibold mb-1"
  }, "\xBFDe qu\xE9 pa\xEDs es esta bandera?"), /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-slate-500 mb-4"
  }, "(Capital: ", current.capital, " \xB7 Poblaci\xF3n: ", current.population, ")"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto"
  }, options.map(function (opt) {
    return /*#__PURE__*/React.createElement("button", {
      key: opt.name,
      onClick: function onClick() {
        return handleAnswer(opt);
      },
      disabled: answered,
      className: "py-2 px-3 rounded-md text-base sm:text-lg font-semibold shadow transition transform hover:scale-105\n                        ".concat(answered ? opt.name === current.name ? "bg-emerald-500 text-white" : opt.name === chosen ? "bg-red-500 text-white" : "bg-slate-100 text-slate-600" : "bg-sky-100 text-slate-800")
    }, opt.name);
  })), answered && gameMode !== "progressive" && /*#__PURE__*/React.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded bg-slate-100 text-slate-800 font-semibold"
  }, feedback), /*#__PURE__*/React.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: nextQuestion,
    className: "px-5 py-3 bg-indigo-500 text-white rounded-xl font-bold hover:scale-105 transition w-full sm:w-auto"
  }, currentIndex + 1 === questions.length ? "Ver resultado" : "Siguiente pregunta"))), answered && gameMode === "progressive" && /*#__PURE__*/React.createElement("div", {
    className: "mt-4 p-3 rounded bg-slate-100 text-slate-800 font-semibold"
  }, feedback))) : /*#__PURE__*/React.createElement("div", {
    className: "text-center py-12 text-lg text-slate-600"
  }, "Cargando pregunta...")), stage === "end" && /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl font-extrabold mb-2"
  }, "\xA1Juego Terminado! \uD83C\uDF89"), /*#__PURE__*/React.createElement("p", {
    className: "mb-4 text-slate-700"
  }, "Tu puntuaci\xF3n final: ", /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-900"
  }, score), gameMode === "classic" ? " de ".concat(questions.length) : ""), /*#__PURE__*/React.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/React.createElement("input", {
    id: "nombreJugador",
    placeholder: "Tu nombre/siglas",
    className: "p-2 border rounded"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      var n = document.getElementById("nombreJugador").value || "Anónimo";
      saveScore(n);
      setStage("ranking");
    },
    className: "ml-2 px-4 py-2 bg-emerald-500 text-white rounded-2xl"
  }, "Guardar en ranking")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row items-center justify-center gap-3 mt-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: playAgain,
    className: "px-5 py-3 bg-emerald-500 text-white rounded-2xl font-bold hover:scale-105 transition"
  }, "Volver al Men\xFA"), /*#__PURE__*/React.createElement("button", {
    onClick: openSeen,
    className: "px-5 py-3 bg-sky-500 text-white rounded-2xl font-bold hover:scale-105 transition"
  }, "Ver Banderas Vistas"))), stage === "seen" && /*#__PURE__*/React.createElement(SeenView, {
    seen: seenFlags,
    onBack: function onBack() {
      return setStage(prevStage || (gameMode === "classic" ? "start" : "menu"));
    }
  }), stage === "ranking" && /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl mb-4"
  }, "\uD83C\uDFC6 Ranking"), /*#__PURE__*/React.createElement("table", {
    className: "w-full text-left mb-4"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Nombre"), /*#__PURE__*/React.createElement("th", null, "Puntos"), /*#__PURE__*/React.createElement("th", null, "Fase"), /*#__PURE__*/React.createElement("th", null, "Nivel"), /*#__PURE__*/React.createElement("th", null, "Progreso"), /*#__PURE__*/React.createElement("th", null, "Fecha"))), /*#__PURE__*/React.createElement("tbody", null, (Array.isArray(ranking) ? ranking : []).map(function (r, i) {
    var _r$fase;
    var nivelVal = r && r.nivel != null ? r.nivel : 0;
    var pct = nivelVal / 10 * 100;
    return /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement("td", null, r.nombre), /*#__PURE__*/React.createElement("td", null, r.score), /*#__PURE__*/React.createElement("td", null, (_r$fase = r.fase) !== null && _r$fase !== void 0 ? _r$fase : "-"), /*#__PURE__*/React.createElement("td", null, nivelVal), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      className: "w-32 bg-slate-200 h-4 rounded overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-full bg-gradient-to-r from-indigo-500 to-emerald-500",
      style: {
        width: String(pct) + "%"
      }
    }))), /*#__PURE__*/React.createElement("td", null, r.fecha));
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setStage("menu");
    },
    className: "px-4 py-2 bg-slate-300 rounded"
  }, "Volver"))));
}
function SeenView(_ref2) {
  var _ref2$seen = _ref2.seen,
    seen = _ref2$seen === void 0 ? [] : _ref2$seen,
    onBack = _ref2.onBack;
  var _useState41 = useState({}),
    _useState42 = _slicedToArray(_useState41, 2),
    expanded = _useState42[0],
    setExpanded = _useState42[1];
  var _useState43 = useState(false),
    _useState44 = _slicedToArray(_useState43, 2),
    allExpanded = _useState44[0],
    setAllExpanded = _useState44[1];
  useEffect(function () {
    if (allExpanded) {
      var newExp = {};
      seen.forEach(function (s) {
        newExp[s.flag.name] = true;
      });
      setExpanded(newExp);
    } else {
      setExpanded({});
    }
  }, [allExpanded, seen]);
  function toggle(name) {
    setExpanded(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, name, !prev[name]));
    });
  }
  var total = seen.length;
  var corrects = seen.filter(function (s) {
    return s.result === 'correct';
  }).length;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-bold"
  }, "Banderas Vistas \uD83C\uDDE7\uD83C\uDDEA"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-slate-600 mr-4"
  }, "Acertadas: ", /*#__PURE__*/React.createElement("strong", null, corrects), " / ", total), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setAllExpanded(!allExpanded);
    },
    className: "px-3 py-1 bg-indigo-500 text-white rounded-md"
  }, allExpanded ? "Ocultar Info (todos)" : "Ver Info (todos)"), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    className: "px-3 py-1 bg-slate-200 rounded-md"
  }, "Volver"))), total === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "text-center p-4 bg-slate-50 rounded"
  }, "No se mostraron banderas en esta partida.") : /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, seen.map(function (s) {
    var flag = s.flag;
    var result = s.result; // correct | wrong | null
    var bg = result === "correct" ? "bg-emerald-100" : result === "wrong" ? "bg-orange-100" : "bg-slate-50";
    return /*#__PURE__*/React.createElement("div", {
      key: flag.name,
      className: "".concat(bg, " p-4 rounded-xl shadow flex items-start gap-4")
    }, /*#__PURE__*/React.createElement("img", {
      src: "https://flagcdn.com/w80/".concat(flag.code, ".png"),
      alt: flag.name,
      className: "w-16 h-10 object-cover rounded",
      onError: function onError(e) {
        return e.target.style.display = 'none';
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "font-semibold"
    }, flag.name), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-600"
    }, "Regi\xF3n: ", flag.region)), /*#__PURE__*/React.createElement("div", {
      className: "ml-4"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return toggle(flag.name);
      },
      className: "px-3 py-1 bg-indigo-500 text-white rounded-md text-sm"
    }, expanded[flag.name] ? "Ocultar info" : "Ver info"))), expanded[flag.name] && /*#__PURE__*/React.createElement("div", {
      className: "mt-3 text-sm text-slate-700"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Capital:"), " ", flag.capital), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Poblaci\xF3n:"), " ", flag.population), /*#__PURE__*/React.createElement("div", {
      className: "mt-2 text-xs text-slate-500"
    }, "Resultado: ", result === null ? "Sin responder" : result === "correct" ? "Acertada" : "Fallada"))));
  })));
}

// Igual que en el estable
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
