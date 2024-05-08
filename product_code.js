"use strict"

let partCode={

    supplierCode:"SZA",
    productNumber:"2987",
    size:"M"



}

function parsePartCode(code){

    console.log(`
    ${code.supplierCode}:${code.productNumber}-${code.size} `)

}

parsePartCode(partCode)