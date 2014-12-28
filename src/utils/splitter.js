/*global module*/

'use strict';

function notEmpty(string) {
    return !!string.length;
}

module.exports = {
    /**
     * Splits specified string taking space as a separator and removes empty strings from result.
     * @param {string} line
     * @returns {string[]}
     */
    bySpace: function (line) {
        return line.split(' ').filter(notEmpty);
    },

    /**
     * Splits specified string taking new line character (\n) as a separator and removes empty strings from result.
     * @param {string} content
     * @returns {string[]}
     */
    byNL: function (content) {
        return content.split('\n').filter(notEmpty);
    },

    /**
     * Cuts specified string into substrings by lengths.
     * @param {string} line
     * @param {int[]} lengths
     * @returns {string[]}
     */
    byLengths: function (line, lengths) {
        var i, result = [], start = 0, stop, length;

        for (i = 0; i < lengths.length; i++) {
            length = lengths[i];
            stop = start + length;
            result.push(line.substring(start, stop).trim());
            start = stop;
        }
        result.push(line.substring(start).trim());

        return result;
    }
};