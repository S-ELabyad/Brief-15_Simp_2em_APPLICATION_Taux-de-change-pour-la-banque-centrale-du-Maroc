import {format} from 'date-fns';

const SAMPLE_RATES = {
    AUD:1.2323,
    BGN:2.2323,
    BRL:3.2323,
    CAD:4.2323,
    CHF:5.2323,
    MAD:6.2323,
    DKK:7.2323,
    EUR:8.2323,
    HRK:9.2323,
    IDR:88.2323,
    JPY:77.2323,
    MYR:66.2323,
    NDK:55.2323,
    USD:44.2323,
    GBP:33.2323
}
export const api = (_path = "") => {
   const [path] = _path.split('?');



    if(path.length === 0) {
        return Promise.reject(new Error("path required"));
    }

    if(path !== "/latest") {
        return Promise.reject(new Error("path invalid"));
    }

    const baseCurrency = _path.split('base=')[1]

    return new Promise ((resolve) =>{
        // return  Promise.resolve ({
   setTimeout(() => {
       resolve({
        base : baseCurrency,
        date: format(new Date(), "yyyy-MM-dd"),
        rates: {
            ...SAMPLE_RATES,
            [baseCurrency]:1,
        },
       });
   }, 500);
       
});
};