const _product = [
    {"id":1,"title":"huawei mate 40","price":20000,"inventory":2},
    {"id":2,"title":"xiaomi mix 4","price":6999,"inventory":0},
    {"id":3,"title":"oppo R20","price": 3999,"inventory":5},
]

export default {
    getProducts(cb) {
        setTimeout(() => cb(_product),100)
    },

    buyProducts(products, cb, errorCb) {
        setTimeout(() => {
            Math.random() > 0.5 
            ? cb() 
            : errorCb()
        },100)
    }
}