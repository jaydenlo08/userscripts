// ==UserScript==
// @name         YouTube Alert
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Stop wondering into YT while you have work to do!
// @author       You
// @match        https://www.youtube.com/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const tasks = [
        "Prompt 1",
        "Prompt 2",
        "Prompt 3",
        "Prompt 4",
    ];
    for (let i = 0; i < tasks.length; i++) {
        let task = prompt(tasks[i]);
        if (task != tasks[i]) {
            alert("No, you have not!")
            location.reload();
        }
    }
})();
