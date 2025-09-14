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
 * Constantes & Utils
 *****************************************************************/
var TOTAL_LEVELS = 10;
var levelColors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899", "#14b8a6", "#f97316", "#6366f1", "#22c55e"];
function shuffle(arr) {
  return arr.slice().sort(function () {
    return Math.random() - 0.5;
  });
}
function sample(arr, n) {
  return shuffle(arr).slice(0, n);
}
function formatDateShort(d) {
  try {
    var date = typeof d === "string" ? new Date(d) : d;
    return date.toLocaleString(undefined, {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  } catch (_unused) {
    return String(d || "");
  }
}

/* Frases motivacionales */
var frasesNivel = {
  1: "Nivel 1 · Scout de Banderas 🧭",
  2: "Nivel 2 · Rookie Patriota 💥",
  3: "Nivel 3 · Tryhard Cartógrafo 🗺️",
  4: "Nivel 4 · Pro Vexilólogo ⚔️",
  5: "Nivel 5 · Épico Guardia Fronterizo 🛡️",
  6: "Nivel 6 · Legendario Cazador de Banderas 🏹",
  7: "Nivel 7 · Master Conquistador 🌟",
  8: "Nivel 8 · Elite Geoestratega 🧠",
  9: "Nivel 9 · Mythic Dominador del Mapa ⚡",
  10: "Nivel 10 · God-Tier Señor de las Banderas 👑"
};
function phraseForLevel(n) {
  var x = Math.max(0, Math.min(TOTAL_LEVELS, Number(n || 0)));
  return frasesNivel[x] || (x > 0 ? "¡Sigue escalando!" : "—");
}

/*****************************************************************
 * Barra segmentada multicolor con highlight
 *****************************************************************/
function SegmentedBar(_ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? 0 : _ref$value,
    _ref$total = _ref.total,
    total = _ref$total === void 0 ? TOTAL_LEVELS : _ref$total,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$highlightNext = _ref.highlightNext,
    highlightNext = _ref$highlightNext === void 0 ? false : _ref$highlightNext;
  var filled = Math.max(0, Math.min(total, value));
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-200 rounded overflow-hidden ".concat(className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full flex gap-0.5 p-0.5"
  }, Array.from({
    length: total
  }).map(function (_, i) {
    var bg = "rgba(255,255,255,0.7)";
    if (i < filled) bg = levelColors[i % levelColors.length];else if (highlightNext && i === filled) bg = "#facc15";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        backgroundColor: bg
      },
      className: "flex-1 h-full rounded-sm"
    });
  })));
}

/*****************************************************************
 * App principal
 *****************************************************************/
function App() {
  // stages: menu, start, game, phaseTransition, end, ranking, seen, epicFinal
  var _useState = useState("menu"),
    _useState2 = _slicedToArray(_useState, 2),
    stage = _useState2[0],
    setStage = _useState2[1];
  var _useState3 = useState("classic"),
    _useState4 = _slicedToArray(_useState3, 2),
    gameMode = _useState4[0],
    setGameMode = _useState4[1];

  // Estado general
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    difficulties = _useState6[0],
    setDifficulties = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    regions = _useState8[0],
    setRegions = _useState8[1];
  var _useState9 = useState([]),
    _useState0 = _slicedToArray(_useState9, 2),
    features = _useState0[0],
    setFeatures = _useState0[1];
  var _useState1 = useState(10),
    _useState10 = _slicedToArray(_useState1, 2),
    numQuestions = _useState10[0],
    setNumQuestions = _useState10[1];

  // Juego
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
  var _useState27 = useState(null),
    _useState28 = _slicedToArray(_useState27, 2),
    chosen = _useState28[0],
    setChosen = _useState28[1];
  var _useState29 = useState(null),
    _useState30 = _slicedToArray(_useState29, 2),
    lastResult = _useState30[0],
    setLastResult = _useState30[1];

  // Sonidos
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

  // 🔥 Definición de las 10 fases progresivas
  var fases = [{
    dificultad: [1],
    numPreguntas: 5,
    minAciertos: 3,
    tiempo: 30
  },
  // 1
  {
    dificultad: [1],
    numPreguntas: 5,
    minAciertos: 3,
    tiempo: 25
  },
  // 2
  {
    dificultad: [1, 2],
    numPreguntas: 6,
    minAciertos: 4,
    tiempo: 25
  },
  // 3
  {
    dificultad: [1, 2],
    numPreguntas: 6,
    minAciertos: 4,
    tiempo: 22
  },
  // 4
  {
    dificultad: [2, 3],
    numPreguntas: 7,
    minAciertos: 5,
    tiempo: 22
  },
  // 5
  {
    dificultad: [2, 3],
    numPreguntas: 7,
    minAciertos: 5,
    tiempo: 20
  },
  // 6
  {
    dificultad: [3, 4],
    numPreguntas: 8,
    minAciertos: 6,
    tiempo: 20
  },
  // 7
  {
    dificultad: [3, 4],
    numPreguntas: 8,
    minAciertos: 6,
    tiempo: 18
  },
  // 8
  {
    dificultad: [4],
    numPreguntas: 10,
    minAciertos: 7,
    tiempo: 18
  },
  // 9
  {
    dificultad: [4],
    numPreguntas: 10,
    minAciertos: 8,
    tiempo: 15
  } // 10
  ];
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
  var usedFlagsRef = useRef(new Set());
  var _useState37 = useState(0),
    _useState38 = _slicedToArray(_useState37, 2),
    phaseCorrects = _useState38[0],
    setPhaseCorrects = _useState38[1];

  // Ranking
  var _useState39 = useState(function () {
      try {
        return JSON.parse(localStorage.getItem("ranking") || "[]");
      } catch (_unused2) {
        return [];
      }
    }),
    _useState40 = _slicedToArray(_useState39, 2),
    ranking = _useState40[0],
    setRanking = _useState40[1];
  var _useState41 = useState("score"),
    _useState42 = _slicedToArray(_useState41, 2),
    sortBy = _useState42[0],
    setSortBy = _useState42[1];

  /******************** Filtrado *************************/
  function filterPool() {
    var difficultiesArg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : difficulties;
    var regionsArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : regions;
    var featuresArg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : features;
    var pool = flags;
    if (difficultiesArg.length > 0) {
      pool = pool.filter(function (f) {
        return difficultiesArg.includes(f.difficulty);
      });
    }
    if (regionsArg.length > 0) {
      pool = pool.filter(function (f) {
        return regionsArg.includes(f.region);
      });
    }
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

  /******************** Inicio juego *************************/
  function startGame() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$forceDifficulti = _ref2.forceDifficulties,
      forceDifficulties = _ref2$forceDifficulti === void 0 ? null : _ref2$forceDifficulti,
      _ref2$forceNumQuestio = _ref2.forceNumQuestions,
      forceNumQuestions = _ref2$forceNumQuestio === void 0 ? null : _ref2$forceNumQuestio;
    var effNum = forceNumQuestions !== null && forceNumQuestions !== void 0 ? forceNumQuestions : numQuestions;
    var effDifficulties = forceDifficulties !== null && forceDifficulties !== void 0 ? forceDifficulties : difficulties;
    var avoid = gameMode === "progressive" ? usedFlagsRef.current : new Set();
    var pool = filterPool(effDifficulties, regions, features).filter(function (f) {
      return !avoid.has(f.name);
    });
    if (pool.length === 0) {
      alert("No hay banderas que cumplan esos filtros.");
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

  /******************** Progresivo *************************/
  function startProgressiveGame() {
    // 🎵 reproducir música solo tras click → compatible iPad
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
    setNumQuestions(fase.numPreguntas);
    setTiempoRestante(fase.tiempo);
    setPhaseCorrects(0);
    startGame({
      forceDifficulties: fase.dificultad,
      forceNumQuestions: fase.numPreguntas
    });
    if (timer) clearInterval(timer);
    var t = setInterval(function () {
      setTiempoRestante(function (prev) {
        if (prev === null) return prev;
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

  /******************** Opciones pregunta *************************/
  useEffect(function () {
    if (stage !== "game") return;
    var currentQ = questions[currentIndex];
    if (!currentQ) return;
    setSeenFlags(function (prev) {
      if (prev.find(function (p) {
        return p.flag.name === currentQ.name;
      })) return prev;
      return [].concat(_toConsumableArray(prev), [{
        flag: currentQ,
        result: null
      }]);
    });
    var otherPool = flags.filter(function (f) {
      return f.name !== currentQ.name;
    });
    var others = sample(otherPool, Math.min(5, otherPool.length));
    setOptions(shuffle([currentQ].concat(_toConsumableArray(others))));
    setAnswered(false);
    setFeedback("");
  }, [currentIndex, stage, questions]);

  /******************** Responder *************************/
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
      try {
        var _correctSoundRef$curr;
        (_correctSoundRef$curr = correctSoundRef.current) === null || _correctSoundRef$curr === void 0 || _correctSoundRef$curr.play()["catch"](function () {});
      } catch (e) {}
    } else {
      setFeedback("\xA1Incorrecto! Era ".concat(currentQ.name, " \uD83D\uDE05"));
      try {
        var _wrongSoundRef$curren;
        (_wrongSoundRef$curren = wrongSoundRef.current) === null || _wrongSoundRef$curren === void 0 || _wrongSoundRef$curren.play()["catch"](function () {});
      } catch (e) {}
    }
    setSeenFlags(function (prev) {
      return prev.map(function (s) {
        return s.flag.name === currentQ.name ? _objectSpread(_objectSpread({}, s), {}, {
          result: correct ? "correct" : "wrong"
        }) : s;
      });
    });
    if (gameMode === "progressive") {
      var delay = correct ? 700 : 1300;
      setTimeout(function () {
        nextQuestion();
      }, delay);
    }
  }

  /******************** Siguiente / Fin fase *************************/
  function nextQuestion() {
    if (currentIndex + 1 >= questions.length) {
      if (gameMode === "progressive") {
        var fase = fases[faseIndex];
        var superada = phaseCorrects >= fase.minAciertos;
        endFase(superada);
      } else {
        var _bgMusicRef$current;
        setStage("end");
        (_bgMusicRef$current = bgMusicRef.current) === null || _bgMusicRef$current === void 0 || _bgMusicRef$current.pause();
        bgMusicRef.current.currentTime = 0;
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
      var _bgMusicRef$current2;
      setStage("end");
      (_bgMusicRef$current2 = bgMusicRef.current) === null || _bgMusicRef$current2 === void 0 || _bgMusicRef$current2.pause();
      bgMusicRef.current.currentTime = 0;
      return;
    }
    if (faseIndex + 1 < fases.length) {
      setStage("phaseTransition");
      var nextIdx = faseIndex + 1;
      setTimeout(function () {
        setFaseIndex(nextIdx);
        iniciarFase(nextIdx);
      }, 2000);
    } else {
      var _bgMusicRef$current3;
      // 🚀 superó la fase 10 → final épico
      setStage("epicFinal");
      (_bgMusicRef$current3 = bgMusicRef.current) === null || _bgMusicRef$current3 === void 0 || _bgMusicRef$current3.pause();
      bgMusicRef.current.currentTime = 0;
    }
  }

  /******************** UI helpers *************************/
  function playAgain() {
    var _bgMusicRef$current4;
    (_bgMusicRef$current4 = bgMusicRef.current) === null || _bgMusicRef$current4 === void 0 || _bgMusicRef$current4.pause();
    bgMusicRef.current.currentTime = 0;
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

  /******************** Render *************************/
  var current = stage === "game" ? questions[currentIndex] : null;
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen flex items-center justify-center p-6",
    style: {
      background: gameMode === "progressive" ? fondos[faseIndex % fondos.length] : "#eef2ff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white/90 rounded-2xl p-6 shadow-2xl w-full max-w-5xl"
  }, stage === "menu" && /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl font-extrabold mb-4"
  }, "\uD83C\uDF0E \xA1Adivina la Bandera! \uD83C\uDF0E"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setGameMode("classic");
      setStage("start");
    },
    className: "px-6 py-3 bg-emerald-500 text-white rounded-xl font-bold m-2"
  }, "TRAINING"), /*#__PURE__*/React.createElement("button", {
    onClick: startProgressiveGame,
    className: "px-6 py-3 bg-indigo-500 text-white rounded-xl font-bold m-2"
  }, "COMPETICI\xD3N"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setStage("ranking");
    },
    className: "px-6 py-3 bg-sky-500 text-white rounded-xl font-bold m-2"
  }, "Ver Ranking")), stage === "game" && current && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "text-2xl sm:text-4xl font-extrabold text-slate-800 mb-4"
  }, "P: ", score, " | T: ", tiempoRestante, "s | ", currentIndex + 1, "/", questions.length), gameMode === "progressive" && /*#__PURE__*/React.createElement(SegmentedBar, {
    value: faseIndex + 1,
    className: "h-6 mb-6"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 rounded-xl shadow-inner mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center mb-4"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://flagcdn.com/w320/".concat(current.code, ".png"),
    alt: current.name,
    className: "w-64 h-40 object-cover rounded"
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-lg font-semibold mb-1"
  }, "\xBFDe qu\xE9 pa\xEDs es esta bandera?"), /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-slate-500 mb-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sm:inline"
  }, current.capital, " \xB7 ", current.population)), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto"
  }, options.map(function (opt) {
    return /*#__PURE__*/React.createElement("button", {
      key: opt.name,
      onClick: function onClick() {
        return handleAnswer(opt);
      },
      disabled: answered,
      className: "py-2 px-3 rounded-md text-base sm:text-lg font-semibold shadow\n                    ".concat(answered ? opt.name === current.name ? "bg-emerald-500 text-white" : opt.name === chosen ? "bg-red-500 text-white" : "bg-slate-100 text-slate-600" : "bg-sky-100 text-slate-800")
    }, opt.name);
  })), answered && /*#__PURE__*/React.createElement("div", {
    className: "mt-4 p-3 bg-slate-100 rounded"
  }, feedback))), stage === "epicFinal" && /*#__PURE__*/React.createElement("div", {
    className: "text-center py-20 animate-pulse"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-5xl font-extrabold text-red-600 mb-6"
  }, "\uD83D\uDD25 EPIC LEGEND FINALE TRYHARD MASTER \uD83D\uDD25"), /*#__PURE__*/React.createElement("p", {
    className: "text-2xl text-slate-800 mb-4"
  }, "\xA1Has conquistado las 10 fases de las banderas! \uD83C\uDF0D"), /*#__PURE__*/React.createElement("p", {
    className: "text-xl text-indigo-600 font-bold mb-6"
  }, "Solo los verdaderos maestros llegan aqu\xED \uD83D\uDC8E"), /*#__PURE__*/React.createElement("button", {
    onClick: playAgain,
    className: "px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white rounded-2xl font-extrabold text-2xl hover:scale-110 transition"
  }, "Volver al Men\xFA"))));
}

/*****************************************************************
 * Mount
 *****************************************************************/
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
