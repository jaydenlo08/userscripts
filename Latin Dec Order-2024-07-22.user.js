// ==UserScript==
// @name         Latin Dec Order
// @namespace    http://tampermonkey.net/
// @version      2024-07-22
// @description  try to take over the world!d
// @author       You
// @match        https://en.wiktionary.org/wiki/*
// @icon         https://en.wiktionary.org/static/favicon/wiktionary/en.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const order = ["Nominative", "Vocative", "Accusative", "Genitive", "Dative", "Ablative"]
    const decTable = document.getElementsByClassName('inflection-table-la')
    if (decTable.length > 0) {
        if (order.length != 6) {
            throw new Error("Invalid number of declensions, 6 expected!")
        }
        order.forEach(function (item, index) {
            var xpath = `//a[text()='${item}']`;
            var row = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.parentElement.parentElement
            decTable[0].children[0].appendChild(row)
        })
    }
})();