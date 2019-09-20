const validator = require('validator'),
isEmpty = require('./is-empty');

module.exports = function checkParameter(data) {
    let errors = {};

    if (isEmpty(data.minCount)) {
        errors.minCount = 'minCount is necessary';
    }
    else {
        if (!validator.isInt(data.minCount.toString())) {
            errors.minCount = 'minCount field should be integer';
        }
    }

    if (isEmpty(data.maxCount)) {
        errors.maxCount = 'maxCount is necessary';
    }
    else {
        if (!validator.isInt(data.maxCount.toString())) {
            errors.maxCount = 'maxCount field should be integer';
        }
    }

    if (isEmpty(data.startDate)) {
        errors.startDate = 'startDate is necessary';
    }
    else {
        if (!validator.isISO8601(data.startDate)) {
            errors.startDate = 'startDate format is invalid, startDate should be YYYY-MM-DD';
        }
    }

    if (isEmpty(data.endDate)) {
        errors.endDate = 'endDate is necessary';
    }
    else {
        if (!validator.isISO8601(data.endDate)) {
            errors.endDate = 'endDate format is invalid, endDate should be YYYY-MM-DD';
        }
    }

    if (!isEmpty(Date.startDate) && !isEmpty(Date.endDate)) {
        if (!validator.isBefore(data.startDate, data.endDate)) {
            errors.minCount = 'endDate must be after than start date';
        }
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}