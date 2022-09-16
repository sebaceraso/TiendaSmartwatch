const data = [
    {
        id: "1",
        title: "W26",
        price: 2000,
        image: 'https://http2.mlstatic.com/D_NQ_NP_686611-MLA48934413710_012022-O.webp',
    },
    {
        id: "2",
        title: "DT100",
        price: 3000,
        image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/085/544/products/adobe_post_20210506_0738270-8539285586535061-dde7553dc4d2872e3216202978864486-640-0.png',
    },
    {
        id: "3",
        title: "D18",
        price: 2500,
        image: 'https://http2.mlstatic.com/D_NQ_NP_940626-MLA51046586441_082022-O.webp',
    },
    {
        id: "4",
        title: "SmartBand M6",
        price: 1800,
        image: 'https://http2.mlstatic.com/D_NQ_NP_785408-MLA50785869885_072022-O.webp',
    },

];

export const getItem = (new Promise((resolve, reject) => {
    let condition = true;
    setTimeout (() => {
        if (condition) { 
           resolve(data)
        } else {
            reject("Algo salio mal")
        } 
    },2000)
    })
)