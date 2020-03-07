/**
 *   Copyright 2020 wixette@gmail.com
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 *
 * @fileoverview The main logic to control the front panel UI.
 */

/**
 * Simple namespace.
 * @type {Object}
 */
panel = {};

/**
 * The info of all LEDs.
 */
panel.LED_INFO = [
    {
        id: 'INTE',
        x: 194,
        y: 120
    },
    {
        id: 'PROT',
        x: 245,
        y: 120
    },
    {
        id: 'MEMR',
        x: 296,
        y: 120
    },
    {
        id: 'INP',
        x: 347,
        y: 120
    },
    {
        id: 'MI',
        x: 398,
        y: 120
    },
    {
        id: 'OUT',
        x: 449,
        y: 120
    },
    {
        id: 'HLTA',
        x: 500,
        y: 120
    },
    {
        id: 'STACK',
        x: 551,
        y: 120
    },
    {
        id: 'WO',
        x: 602,
        y: 120
    },
    {
        id: 'INT',
        x: 653,
        y: 120
    },
    {
        id: 'D7',
        x: 830,
        y: 120
    },
    {
        id: 'D6',
        x: 880,
        y: 120
    },
    {
        id: 'D5',
        x: 959,
        y: 120
    },
    {
        id: 'D4',
        x: 1009,
        y: 120
    },
    {
        id: 'D3',
        x: 1059,
        y: 120
    },
    {
        id: 'D2',
        x: 1138,
        y: 120
    },
    {
        id: 'D1',
        x: 1188,
        y: 120
    },
    {
        id: 'D0',
        x: 1238,
        y: 120
    },
    {
        id: 'WAIT',
        x: 194,
        y: 230
    },
    {
        id: 'HLDA',
        x: 245,
        y: 230
    },
    {
        id: 'A15',
        x: 346,
        y: 230
    },
    {
        id: 'A14',
        x: 423,
        y: 230
    },
    {
        id: 'A13',
        x: 473,
        y: 230
    },
    {
        id: 'A12',
        x: 523,
        y: 230
    },
    {
        id: 'A11',
        x: 602,
        y: 230
    },
    {
        id: 'A10',
        x: 652,
        y: 230
    },
    {
        id: 'A9',
        x: 702,
        y: 230
    },
    {
        id: 'A8',
        x: 780,
        y: 230
    },
    {
        id: 'A7',
        x: 830,
        y: 230
    },
    {
        id: 'A6',
        x: 880,
        y: 230
    },
    {
        id: 'A5',
        x: 959,
        y: 230
    },
    {
        id: 'A4',
        x: 1009,
        y: 230
    },
    {
        id: 'A3',
        x: 1059,
        y: 230
    },
    {
        id: 'A2',
        x: 1138,
        y: 230
    },
    {
        id: 'A1',
        x: 1188,
        y: 230
    },
    {
        id: 'A0',
        x: 1238,
        y: 230
    },
];

/**
 * Switch types.
 */
panel.TOGGLE_SWITCH = 0;
panel.STATELESS_SWITCH = 1;

/**
 * The info of all switches.
 */
panel.SWITCH_INFO = [
    {
        id: 'S15',
        type: panel.TOGGLE_SWITCH,
        x: 346,
        y: 334
    },
    {
        id: 'S14',
        type: panel.TOGGLE_SWITCH,
        x: 423,
        y: 334
    },
    {
        id: 'S13',
        type: panel.TOGGLE_SWITCH,
        x: 473,
        y: 334
    },
    {
        id: 'S12',
        type: panel.TOGGLE_SWITCH,
        x: 523,
        y: 334
    },
    {
        id: 'S11',
        type: panel.TOGGLE_SWITCH,
        x: 602,
        y: 334
    },
    {
        id: 'S10',
        type: panel.TOGGLE_SWITCH,
        x: 652,
        y: 334
    },
    {
        id: 'S9',
        type: panel.TOGGLE_SWITCH,
        x: 702,
        y: 334
    },
    {
        id: 'S8',
        type: panel.TOGGLE_SWITCH,
        x: 780,
        y: 334
    },
    {
        id: 'S7',
        type: panel.TOGGLE_SWITCH,
        x: 830,
        y: 334
    },
    {
        id: 'S6',
        type: panel.TOGGLE_SWITCH,
        x: 880,
        y: 334
    },
    {
        id: 'S5',
        type: panel.TOGGLE_SWITCH,
        x: 959,
        y: 334
    },
    {
        id: 'S4',
        type: panel.TOGGLE_SWITCH,
        x: 1009,
        y: 334
    },
    {
        id: 'S3',
        type: panel.TOGGLE_SWITCH,
        x: 1059,
        y: 334
    },
    {
        id: 'S2',
        type: panel.TOGGLE_SWITCH,
        x: 1138,
        y: 334
    },
    {
        id: 'S1',
        type: panel.TOGGLE_SWITCH,
        x: 1188,
        y: 334
    },
    {
        id: 'S0',
        type: panel.TOGGLE_SWITCH,
        x: 1238,
        y: 334
    },
    {
        id: 'OFF-ON',
        type: panel.TOGGLE_SWITCH,
        x: 105,
        y: 439
    },
    {
        id: 'STOP-RUN',
        type: panel.STATELESS_SWITCH,
        x: 348,
        y: 439
    },
    {
        id: 'SINGLE',
        type: panel.STATELESS_SWITCH,
        x: 446,
        y: 439
    },
    {
        id: 'EXAMINE',
        type: panel.STATELESS_SWITCH,
        x: 550,
        y: 439
    },
    {
        id: 'DEPOSIT',
        type: panel.STATELESS_SWITCH,
        x: 650,
        y: 439
    },
    {
        id: 'RESET',
        type: panel.STATELESS_SWITCH,
        x: 753,
        y: 439
    },
    {
        id: 'PROTECT',
        type: panel.STATELESS_SWITCH,
        x: 853,
        y: 439
    },
    {
        id: 'AUX1',
        type: panel.STATELESS_SWITCH,
        x: 957,
        y: 439
    },
    {
        id: 'AUX2',
        type: panel.STATELESS_SWITCH,
        x: 1060,
        y: 439
    },
];

/**
 * Initializes thie UI.
 */
panel.init = function() {
    var localeButtonElem = document.getElementById('locale');
    localeButtonElem.addEventListener('click', l10n.nextLocale, false);

    // Initializes svg components for all LEDs.
    for (let i = 0; i < panel.LED_INFO.length; i++) {
        let info = panel.LED_INFO[i];
        let led = panel.createLed(info.id, info.x, info.y);
    }

    // Initializes svg components for all switches.
    for (let i = 0; i < panel.SWITCH_INFO.length; i++) {
        let info = panel.SWITCH_INFO[i];
        let sw = panel.createSwitch(info.id, info.type,
                                    info.x, info.y);
    }
};

/**
 * Creates a new LED inside the panel svg.
 * @param {string} id The LED ID. This ID will be used as the prefix
 *     of DOM element's ID.
 * @param {number} x The x position.
 * @param {number} y The y position.
 */
panel.createLed = function(id, x, y, id) {
    var panelElem = document.getElementById('panel');
    var ledOnElem = document.getElementById('led-on');
    var ledOffElem = document.getElementById('led-off');

    var onElem = ledOnElem.cloneNode(true);
    onElem.id = id + '-on';
    onElem.x.baseVal.value = '' + x;
    onElem.y.baseVal.value = '' + y;
    onElem.style.display = 'none';

    var offElem = ledOffElem.cloneNode(true);
    offElem.id = id + '-off';
    offElem.x.baseVal.value = '' + x;
    offElem.y.baseVal.value = '' + y;
    offElem.style.display = 'inline';

    panelElem.appendChild(onElem);
    panelElem.appendChild(offElem);
};

/**
 * Turns on the specified LED.
 * @param {string} id The LED ID.
 */
panel.ledOn = function(id) {
    document.getElementById(id + '-on').style.display = 'inline';
    document.getElementById(id + '-off').style.display = 'none';
};

/**
 * Turns off the specified LED.
 * @param {string} id The LED ID.
 */
panel.ledOff = function(id) {
    document.getElementById(id + '-on').style.display = 'none';
    document.getElementById(id + '-off').style.display = 'inline';
};

/**
 * Creates a new switch inside the panel svg.
 * @param {string} id The switch ID. This ID will be used as the
 *     prefix of DOM element's ID.
 * @param {number} type The type of the switch.
 * @param {number} x The x position.
 * @param {number} y The y position.
 */
panel.createSwitch = function(id, type, x, y) {
    var panelElem = document.getElementById('panel');
    var switchMidElem = document.getElementById('switch-mid');
    var switchUpElem = document.getElementById('switch-up');
    var switchDownElem = document.getElementById('switch-down');

    var midElem = switchMidElem.cloneNode(true);
    midElem.id = id + '-mid';
    midElem.x.baseVal.value = '' + x;
    midElem.y.baseVal.value = '' + y;
    midElem.style.display = (type == panel.STATELESS_SWITCH) ? 'inline' : 'none';

    var upElem = switchUpElem.cloneNode(true);
    upElem.id = id + '-up';
    upElem.x.baseVal.value = '' + x;
    upElem.y.baseVal.value = '' + y;
    upElem.style.display = 'none';

    var downElem = switchDownElem.cloneNode(true);
    downElem.id = id + '-down';
    downElem.x.baseVal.value = '' + x;
    downElem.y.baseVal.value = '' + y;
    downElem.style.display = (type == panel.TOGGLE_SWITCH) ? 'inline' : 'none';

    panelElem.appendChild(midElem);
    panelElem.appendChild(upElem);
    panelElem.appendChild(downElem);
};

/**
 * Moves the switch handle up - for TOGGLE_SWITCH only.
 * @param {string} id The switch ID.
 */
panel.switchUp = function(id) {
    var midElem = document.getElementById(id + '-mid');
    var upElem = document.getElementById(id + '-up');
    var downElem = document.getElementById(id + '-down');

    upElem.style.display = 'inline';
    midElem.style.display = 'none';
    downElem.style.display = 'none';
};

/**
 * Moves the switch handle down - for TOGGLE_SWITCH only.
 * @param {string} id The switch ID.
 */
panel.switchDown = function(id) {
    var midElem = document.getElementById(id + '-mid');
    var upElem = document.getElementById(id + '-up');
    var downElem = document.getElementById(id + '-down');

    upElem.style.display = 'none';
    midElem.style.display = 'none';
    downElem.style.display = 'inline';
};

/**
 * Moves the switch handle up, then back to the middle position - for
 * STATELESS_SWITCH only.
 * @param {string} id The switch ID.
 */
panel.switchUpThenBack = function(id) {
    var midElem = document.getElementById(id + '-mid');
    var upElem = document.getElementById(id + '-up');
    var downElem = document.getElementById(id + '-down');

    upElem.style.display = 'none';
    midElem.style.display = 'inline';
    downElem.style.display = 'none';

    window.setTimeout(function() {
        upElem.style.display = 'inline';
        midElem.style.display = 'none';
        downElem.style.display = 'none';

        window.setTimeout(function() {
            upElem.style.display = 'none';
            midElem.style.display = 'inline';
            downElem.style.display = 'none';
        }, 300);
    }, 300);
};

/**
 * Moves the switch handle down, then back to the middle position -
 * for STATELESS_SWITCH only.
 * @param {string} id The switch ID.
 */
panel.switchDownThenBack = function(id) {
    var midElem = document.getElementById(id + '-mid');
    var upElem = document.getElementById(id + '-up');
    var downElem = document.getElementById(id + '-down');

    upElem.style.display = 'none';
    midElem.style.display = 'inline';
    downElem.style.display = 'none';

    window.setTimeout(function() {
        upElem.style.display = 'none';
        midElem.style.display = 'none';
        downElem.style.display = 'inline';

        window.setTimeout(function() {
            upElem.style.display = 'none';
            midElem.style.display = 'inline';
            downElem.style.display = 'none';
        }, 300);
    }, 300);
};
