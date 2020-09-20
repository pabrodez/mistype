#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
let listPath = process.argv[2] || 'sample.txt' // should be process.argv[2] ?? 'sample.txt' isntead
console.log(listPath)

const { UI } = require('./UI')
const { Game } = require('./Game.js')

function readContent(callback) {
    fs.readFile(path.resolve(__dirname, 'wordLists', listPath), 'utf-8', (err, data) => {
        if (err) return callback(err)
        callback(null, data)
    })

}

readContent(function (err, content) {
    if (!err) {
        let wordsArray = content.split(',')
        const mistype = new Game(new UI(wordsArray))
        mistype.start()
    } else {
        throw err
    }
})

