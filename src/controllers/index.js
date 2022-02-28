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

    const date = $('.otd-item-headword__date:first').text().trim()
    const pronunciation = $('.otd-item-headword__pronunciation__text:first').text().trim()
    const audio = $('.otd-item-headword__pronunciation-audio:first').attr('href')
    const word = $('.js-fit-text:first').text()
    const wordData = $('.otd-item-headword__pos p')
    const category = $(wordData).eq(0).text().trim()
    const meaning = $(wordData).eq(1).text().trim()

    res.json({
      status: 200,
      date: date,
      pronunciation: pronunciation,
      audio: audio,
      word: word,
      category: category,
      meaning: meaning
    })
  } catch (error) {
    res.json({ status: 500, message: error })
  }
}
