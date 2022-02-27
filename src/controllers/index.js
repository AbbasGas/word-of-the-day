import * as cheerio from 'cheerio'
import axios from 'axios'

export const getWordDay = async (req, res) => {
  try {
    const url = 'https://www.dictionary.com/e/word-of-the-day/'

    const { data } = await axios({
      method: 'get',
      url: url
    })

    const $ = cheerio.load(data)

    const word = $('.js-fit-text:first')
    const wordData = $('.otd-item-headword__pos p')
    const category = $(wordData).eq(0).text().trim()
    const meaning = $(wordData).eq(1).text().trim()

    res.json({
      status: 200,
      word: word.text(),
      category: category,
      meaning: meaning
    })
  } catch (error) {
    res.json({ status: 500, message: error })
  }
}
