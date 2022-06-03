import _ from 'underscore';

const formatter = {
    numberOptions: {
        precision: null,            // decimal precision
        thSeparator: ',',           // thousand separator
        decSeparator: '.'           // decimal separator
    },

    currencyOptions: {
        currencyCode: 'EUR',
        precision: 2,               // decimal precision
        symbolAtTheLeft: true       // 'true' to draw currency symbol to the left of amount
    },

    currencies: {
        'USD': '$',         // $
        'EUR': '\u20AC',    // €
        'GBP': '\xA3',      // £
        'PLN': 'zł',
        'RUB': 'руб',       // ₽
        'UAH': '\u20B4'     // ₴
    },

    formatNumber(number, options = {}) {
        _.defaults(options, formatter.numberOptions);

        let formattedNumber;

        formattedNumber = options.precision !== null
            ? number.toFixed(options.precision)
            : number.toString();

        let numberParts = formattedNumber.split('.');
        numberParts[0] = numberParts[0].replace(/(\d)(?=(\d{3})+\b)/g, '$1' + options.thSeparator);

        formattedNumber = !numberParts[1]
            ? numberParts[0]
            : numberParts.join(options.decSeparator);

        return formattedNumber;
    },

    formatCurrency(amount, options = {}) {
        _.defaults(options, formatter.currencyOptions);

        let formattedAmount = formatter.formatNumber(amount, options);
        const currencySymbol = formatter.getCurrencySymbol(options.currencyCode);

        formattedAmount = options.symbolAtTheLeft
            ? `${currencySymbol} ${formattedAmount}`
            : `${formattedAmount} ${currencySymbol}`;

        return formattedAmount;
    },

    getCurrencySymbol(currencyCode) {
        currencyCode = currencyCode || formatter.currencyOptions.currencyCode || '';

        return formatter.currencies[currencyCode] || currencyCode || '';
    }
};

export default formatter;