"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _React = React,
  useState = _React.useState;
function App() {
  var _useState = useState("menu"),
    _useState2 = _slicedToArray(_useState, 2),
    stage = _useState2[0],
    setStage = _useState2[1];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "linear-gradient(135deg,#eef2ff,#fde68a)"
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
      return setStage("classic");
    },
    className: "px-6 py-3 bg-emerald-500 text-white rounded-2xl font-bold hover:scale-105 transition"
  }, "TRAINING"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setStage("progressive");
    },
    className: "px-6 py-3 bg-indigo-500 text-white rounded-2xl font-bold hover:scale-105 transition"
  }, "COMPETICI\xD3N"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setStage("ranking");
    },
    className: "px-6 py-3 bg-sky-500 text-white rounded-2xl font-bold hover:scale-105 transition"
  }, "Ver Ranking")))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
