const productos = [
    {
        id: '01',
        name: "W26",
        category: 'nuevos',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
        price: 2000,
        image: 'https://http2.mlstatic.com/D_NQ_NP_686611-MLA48934413710_012022-O.webp',
        stock: 5,
    },
    {
        id: '02',
        name: "DT100",
        category: 'nuevos',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
        price: 3000,
        image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/085/544/products/adobe_post_20210506_0738270-8539285586535061-dde7553dc4d2872e3216202978864486-640-0.png',
        stock: 5,
    },
    {
        id: '03',
        name: "D18",
        category: 'nuevos',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
        price: 2500,
        image: 'https://http2.mlstatic.com/D_NQ_NP_940626-MLA51046586441_082022-O.webp',
        stock: 5,
        
    },
    {
        id: '04',
        name: "SmartBand M6",
        category: 'nuevos',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
        price: 1800,
        image: 'https://http2.mlstatic.com/D_NQ_NP_785408-MLA50785869885_072022-O.webp',
        stock: 5,
    },

]

export const data = new Promise(((resolve, reject) => {
    let condition = true

    setTimeout(() => {
        if (condition) {
            resolve(productos)
        } else {
            reject('salio algo mal')
        }
    }, 3000)

}))


