import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi('fca_live_j6x8dN1S7seusP5zESVOOYauJZJhsvBSRaaRZ0tH');

export async function convertCurrency(formCurrency, toCurrency, units) {
    const res = await freecurrencyapi.latest({
        base_currency: formCurrency,
        currencies: toCurrency
    });
    const multiplier = res.data[toCurrency];
    return multiplier*units
}

export default convertCurrency;