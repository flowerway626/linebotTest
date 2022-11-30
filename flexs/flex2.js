export default {
  type: 'bubble',
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'box',
        layout: 'vertical',
        margin: 'lg',
        spacing: 'sm',
        contents: [
          {
            type: 'image',
            url: 'https://movies.yahoo.com.tw/i/o/production/movies/November2022/pA1HEVkGAbAbR2RI2y5v-1141x1691.jpg',
            aspectMode: 'cover',
            size: 'full',
            aspectRatio: '9:12'
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'filler'
              },
              {
                type: 'text',
                text: '青春應援CHEERUP',
                size: 'xl',
                weight: 'bold',
                color: '#ffffff'
              },
              {
                type: 'filler'
              }
            ],
            height: '40px'
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '播出日期',
                color: '#E4F2ED',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '2022-10-03',
                wrap: true,
                color: '#ffffff',
                size: 'sm',
                flex: 5
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '總集數',
                color: '#E4F2ED',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '16集',
                wrap: true,
                color: '#ffffff',
                size: 'sm',
                flex: 5
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: 'IMDb分數',
                color: '#E4F2ED',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '-',
                wrap: true,
                color: '#ffffff',
                size: 'sm',
                flex: 5
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '導演',
                color: '#E4F2ED',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '韓泰燮',
                wrap: true,
                color: '#ffffff',
                size: 'sm',
                flex: 5
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '編劇',
                color: '#E4F2ED',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '-',
                wrap: true,
                color: '#ffffff',
                size: 'sm',
                flex: 5
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '主演',
                color: '#E4F2ED',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                wrap: true,
                color: '#ffffff',
                size: 'sm',
                flex: 5,
                text: '韓智賢、裴仁爀、金賢鎮、張圭悧、李恩泉、梁東根'
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '串流平台',
                color: '#E4F2ED',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: 'MyVideo、Hami Video、LiTV 線上影視',
                wrap: true,
                color: '#ffffff',
                size: 'sm',
                flex: 5
              }
            ]
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: '劇情簡介',
                align: 'center',
                size: 'md',
                color: '#E4F2ED',
                offsetTop: '3px'
              }
            ],
            height: '30px',
            borderWidth: '1px',
            borderColor: '#999999',
            action: {
              type: 'message',
              label: 'action',
              text: '《青春應援 CHEER UP》是韓國電視台播出的青春校園劇，由《金牌救援》韓泰燮導演與《VIP》車海元編劇打造。劇情以有著50年傳統的大學社團「啦啦隊」為背景，但該社團逐漸落沒，社員們為了讓社團起死回生，展開了一連串的行動，雖然充滿青春與心動感，但也加入了懸疑神秘的元素…關於20年前系上啦啦隊流傳下來的神秘預言。故事將聚焦在20代人們心動的初戀、還有熱力四射的啦啦隊舞台。...'
            },
            offsetEnd: '0px',
            justifyContent: 'center',
            alignItems: 'center'
          }
        ],
        paddingAll: '0px'
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: '韓國',
            color: '#456173',
            align: 'center',
            size: 'md',
            offsetTop: '3px',
            weight: 'bold'
          }
        ],
        position: 'absolute',
        backgroundColor: '#E4F2ED',
        width: '55px',
        height: '28px',
        cornerRadius: '20px',
        offsetTop: '10px',
        offsetStart: '15px'
      }
    ],
    backgroundColor: '#456173',
    paddingTop: '5px',
    paddingBottom: '10px'
  }
}
