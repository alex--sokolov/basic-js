import {NotImplementedError} from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
    if (date) {
        if (Object.prototype.toString.call(date) === "[object Date]"
            && date instanceof Date
            && typeof date === 'object'
            && Object.keys(date).length === 0
            && !isNaN(+date)) {
            let m = date.getMonth() + 1
            console.log(m);
            if (m === 12 || m === 1 || m === 2) {
                return "winter";
            } else if (m >= 3 && m < 6) {
                return "spring";
            } else if (m >= 6 && m < 9) {
                return "summer";
            } else if (m >= 9 && m < 12) {
                return "autumn";
            }
        } else {
            throw new Error("Invalid date!")
        }
    }

    return ("Unable to determine the time of year!")
}

console.log(getSeason(new Date(1522, 11, 16, 0, 47, 3, 289)));