export const REPONSIVE_SCREEN = {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    '2XL': 1536
}

export const formatMoney = (num)=>{
    return new Intl.NumberFormat().format(+num)
}