import { Cheerio } from 'cheerio'

export const getWordDay = (req, res) => {
  const options = {
    uri: 'https://www.dictionary.com/e/word-of-the-day/',
    transform: function (body) {
      return Cheerio.load(body)
    }
  }

  request(options)
    .then(function ($) {
      const word = $('.js-fit-text:first')
      const wordData = $('.otd-item-headword__pos p')
      const category = $(wordData).eq(0).text().trim()
      const meaning = $(wordData).eq(1).text().trim()

      console.log(word.text())
      console.log(category)
      console.log(meaning)
    })
    .catch(function (err) {
      console.log(err)
    })

  res.json({ Title: 'Hello World' })
}
