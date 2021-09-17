import {NotImplementedError} from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */



export default function calculateHanoi(diskNumber, turnsSpeed) {
    function countTurns(diskNumber, n) {
        return diskNumber === 1 ? n : countTurns(--diskNumber, (n * 2) + 1)
    }

    let turnsNumber = countTurns(diskNumber, 1);
    let secondsTotal = Math.floor(turnsNumber * 3600 / turnsSpeed)
    return ({turns: turnsNumber, seconds: secondsTotal})
}
