import axios from 'axios'
import * as cheerio from 'cheerio'
// import writejson from '../utils/writejson.js'
// import flex from '../flexs/flex.js'

export default async (event) => {
  // includes()
  try {
    // const country = event.message.text.substr(0, 2)
    // let sort = ''
    // event.message.text.includes('人氣') ? sort = '&sort=popular' : sort = ''
    // encodeURI
    // const url = 'https://movies.yahoo.com.tw/category.html?region_id=%E9%9F%93%E5%9C%8B&type_id=1'
    // encodeURI
    const { data } = await axios.get('https://movies.yahoo.com.tw/movie_thisweek.html', {
      headers: {
        'Content-Type': 'text/html',
        charset: 'utf-8'
      }
    })
    const $ = cheerio.load(data)
    event.reply($('.release_movie_name a').attr('href'))
    // const dramas = []
    // if ($('.box_inner').find('ul').text() !== '') {
    // $('.category-list li').each(function () {
    // const replyFlex = JSON.parse(JSON.stringify(flex))
    // replyFlex.body.contents[0].url = $(this).find('.movie_foto img').attr('src')
    // dramas.push($(this).find('.movie_foto img').attr('src'))
    // replyFlex.body.contents[0].action.text = $(this).find('.movielist_info h2').text().trim()
    // replyFlex.body.contents[2].contents[0].contents[0].contents[0].text = $(this).find('.movielist_info h2').text().trim()
    // replyFlex.body.contents[2].contents[0].contents[1].contents[0].contents[0].text = $(this).find('.movielist_info .season').text().trim()
    // dramas.push($('.category-list li').find('.movie_foto img').attr('src'))
    // })
    // console.log(dramas)
    // const reply = {
    //   type: 'flex',
    //   altText: '排行查詢結果',
    //   contents: {
    //     type: 'carousel',
    //     contents: dramas
    //   }
    // }

    // event.reply(reply)
    // writejson(reply, 'dramas')
    // } else console.log('失敗')
    // event.reply('查無資料，請更換檢索條件')
    // return dramaNums
  } catch (error) {
    event.reply('發生錯誤，請稍後再試11')
    console.error(error)
  }
}
