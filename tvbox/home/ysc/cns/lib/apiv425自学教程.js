import { _ } from "assets://js/lib/cat.js";
let key = '自学教程';
let homeName = '自学教程';
let HOST = 'https://api.bilibili.com';
let siteKey = '';
let siteType = 0;
let searchable= 0;//searchable=1 启用搜索
const PC_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.361";
// let cookie = "DedeUserID=690781341;DedeUserID__ckMd5=cabc96906269c5b6;SESSDATA=2245ba24%2C1684212125%2C466fd%2Ab2;bili_jct=de6fdb60c10f8a83910aa55d79407b4e;"; // 可更换成自己的cookie
let cookie = "./qyg5.txt"; // 可更换成自己的cookie

async function request(reqUrl) {
  const res = await req(reqUrl, {
      headers: getMb(),
  });
  return res.content;
}

async function init(cfg) {
  siteKey = cfg.skey;
  siteType = cfg.stype;
  if (cookie.startsWith('http')) cookie = await request(cookie);
  // console.debug('我的哔哩 cookie =====>' + cookie); // js_debug.log
}

async function home(filter) {
  let classes = [
    {"type_name": "办公","type_id": "办公软件教程"},
    {"type_name": "摄影","type_id": "手机/单反摄影教程"},
    {"type_name": "自媒体","type_id": "自媒体运营教程"},
    {"type_name": "理财","type_id": "理财教程"},
    {"type_name": "语言","type_id": "英语教程"},
    {"type_name": "设计","type_id": "设计软件教程"},
    {"type_name": "编程","type_id": "编程教程"},
    {"type_name": "建造","type_id": "建筑学教程"},	  
    {"type_name": "法律","type_id": "法律基础知识"}
];
  let filterObj = {
    "办公软件教程":[
        {
            "key":"order",
            "name":"排序",
            "value":[
                {
                    "n":"综合排序",
                    "v":"0"
                },
                {
                    "n":"最多点击",
                    "v":"click"
                },
                {
                    "n":"最新发布",
                    "v":"pubdate"
                },
                {
                    "n":"最多弹幕",
                    "v":"dm"
                },
                {
                    "n":"最多收藏",
                    "v":"stow"
                }
            ]
        },
        {
                "key": "tid",
                "name": "分类",
                "value": [
                    {
                        "n": "打字",
                        "v": "电脑打字教程"
                    },{
                        "n": "Word",
                        "v": "Word教程"
                    },{
                        "n": "PPT",
                        "v": "PPT教程"
                    },{
                        "n": "Excel基础",
                        "v": "Excel基础教程"
                    },{
                        "n": "Excel进阶",
                        "v": "Excel进阶教程"
                    },{
                        "n": "Excel VBA",
                        "v": "Excel VBA教程"
                    },{
                        "n": "WPS",
                        "v": "WPS教程"
                    }
                    
                ]
        },
        {
            "key":"duration",
            "name":"时长",
            "value":[
                {
                    "n":"全部",
                    "v":"0"
                },
                {
                    "n":"60分钟以上",
                    "v":"4"
                },
                {
                    "n":"30~60分钟",
                    "v":"3"
                },
                {
                    "n":"10~30分钟",
                    "v":"2"
                },
                {
                    "n":"10分钟以下",
                    "v":"1"
                }
            ]
        }
    ],
    "手机/单反摄影教程":[
        {
            "key":"order",
            "name":"排序",
            "value":[
                {
                    "n":"综合排序",
                    "v":"0"
                },
                {
                    "n":"最多点击",
                    "v":"click"
                },
                {
                    "n":"最新发布",
                    "v":"pubdate"
                },
                {
                    "n":"最多弹幕",
                    "v":"dm"
                },
                {
                    "n":"最多收藏",
                    "v":"stow"
                }
            ]
        },
        {
            "key":"duration",
            "name":"时长",
            "value":[
                {
                    "n":"全部",
                    "v":"0"
                },
                {
                    "n":"60分钟以上",
                    "v":"4"
                },
                {
                    "n":"30~60分钟",
                    "v":"3"
                },
                {
                    "n":"10~30分钟",
                    "v":"2"
                },
                {
                    "n":"10分钟以下",
                    "v":"1"
                }
            ]
        }
    ],
    "自媒体运营教程":[
        {
            "key":"order",
            "name":"排序",
            "value":[
                {
                    "n":"综合排序",
                    "v":"0"
                },
                {
                    "n":"最多点击",
                    "v":"click"
                },
                {
                    "n":"最新发布",
                    "v":"pubdate"
                },
                {
                    "n":"最多弹幕",
                    "v":"dm"
                },
                {
                    "n":"最多收藏",
                    "v":"stow"
                }
            ]
        },
        {
            "key":"duration",
            "name":"时长",
            "value":[
                {
                    "n":"全部",
                    "v":"0"
                },
                {
                    "n":"60分钟以上",
                    "v":"4"
                },
                {
                    "n":"30~60分钟",
                    "v":"3"
                },
                {
                    "n":"10~30分钟",
                    "v":"2"
                },
                {
                    "n":"10分钟以下",
                    "v":"1"
                }
            ]
        }
    ],
    "理财教程":[
        {
            "key":"order",
            "name":"排序",
            "value":[
                {
                    "n":"综合排序",
                    "v":"0"
                },
                {
                    "n":"最多点击",
                    "v":"click"
                },
                {
                    "n":"最新发布",
                    "v":"pubdate"
                },
                {
                    "n":"最多弹幕",
                    "v":"dm"
                },
                {
                    "n":"最多收藏",
                    "v":"stow"
                }
            ]
        },
        {
            "key":"duration",
            "name":"时长",
            "value":[
                {
                    "n":"全部",
                    "v":"0"
                },
                {
                    "n":"60分钟以上",
                    "v":"4"
                },
                {
                    "n":"30~60分钟",
                    "v":"3"
                },
                {
                    "n":"10~30分钟",
                    "v":"2"
                },
                {
                    "n":"10分钟以下",
                    "v":"1"
                }
            ]
        }
    ],
    "英语教程":[
        {
            "key":"order",
            "name":"排序",
            "value":[
                {
                    "n":"综合排序",
                    "v":"0"
                },
                {
                    "n":"最多点击",
                    "v":"click"
                },
                {
                    "n":"最新发布",
                    "v":"pubdate"
                },
                {
                    "n":"最多弹幕",
                    "v":"dm"
                },
                {
                    "n":"最多收藏",
                    "v":"stow"
                }
            ]
        },
                {
                "key": "tid",
                "name": "分类",
                "value": [
                    {
                        "n": "英语",
                        "v": "英语教程"
                    },{
                        "n": "日语",
                        "v": "日语教程"
                    },{
                        "n": "韩语",
                        "v": "韩语教程"
                    },{
                        "n": "德语",
                        "v": "德语教程"
                    },{
                        "n": "法语",
                        "v": "法语教程"
                    },{
                        "n": "西班牙语",
                        "v": "西班牙语教程"
                    }      
                ]
        },
        {
            "key":"duration",
            "name":"时长",
            "value":[
                {
                    "n":"全部",
                    "v":"0"
                },
                {
                    "n":"60分钟以上",
                    "v":"4"
                },
                {
                    "n":"30~60分钟",
                    "v":"3"
                },
                {
                    "n":"10~30分钟",
                    "v":"2"
                },
                {
                    "n":"10分钟以下",
                    "v":"1"
                }
            ]
        }
    ],
    "设计软件教程":[
        {
            "key":"order",
            "name":"排序",
            "value":[
                {
                    "n":"综合排序",
                    "v":"0"
                },
                {
                    "n":"最多点击",
                    "v":"click"
                },
                {
                    "n":"最新发布",
                    "v":"pubdate"
                },
                {
                    "n":"最多弹幕",
                    "v":"dm"
                },
                {
                    "n":"最多收藏",
                    "v":"stow"
                }
            ]
        },
                {
                "key": "tid",
                "name": "分类",
                "value": [
                    {
                        "n": "平面设计",
                        "v": "平面设计教程"
                    },{
                        "n": "室内设计",
                        "v": "室内设计教程"
                    },{
                        "n": "室外设计",
                        "v": "室外设计教程"
                    },{
                        "n": "机械设计",
                        "v": "机械设计教程"
                    },{
                        "n": "工业自动化",
                        "v": "工业自动化教程"
                    }     
                ]
        },
        {
            "key":"duration",
            "name":"时长",
            "value":[
                {
                    "n":"全部",
                    "v":"0"
                },
                {
                    "n":"60分钟以上",
                    "v":"4"
                },
                {
                    "n":"30~60分钟",
                    "v":"3"
                },
                {
                    "n":"10~30分钟",
                    "v":"2"
                },
                {
                    "n":"10分钟以下",
                    "v":"1"
                }
            ]
        }
    ],
    "编程教程":[
        {
            "key":"order",
            "name":"排序",
            "value":[
                {
                    "n":"综合排序",
                    "v":"0"
                },
                {
                    "n":"最多点击",
                    "v":"click"
                },
                {
                    "n":"最新发布",
                    "v":"pubdate"
                },
                {
                    "n":"最多弹幕",
                    "v":"dm"
                },
                {
                    "n":"最多收藏",
                    "v":"stow"
                }
            ]
        },
                {
                "key": "tid",
                "name": "分类",
                "value": [
                    {
                        "n": "Python",
                        "v": "Python语言教程"
                    },{
                        "n": "Java",
                        "v": "Java语言教程"
                    },{
                        "n": "C",
                        "v": "C语言教程"
                    },{
                        "n": "C++",
                        "v": "C++语言教程"
                    },{
                        "n": "C#",
                        "v": "C#语言教程"
                    },{
                        "n": "Visual Basic",
                        "v": "Visual Basic教语言程"
                    },{
                        "n": "JavaScript",
                        "v": "JavaScript语言教程"
                    },{
                        "n": "PHP",
                        "v": "PHP语言教程"
                    },{
                        "n": "SQL",
                        "v": "SQL语言教程"
                    },{
                        "n": "Go",
                        "v": "Go语言教程"
                    },{
                        "n": "R",
                        "v": "R语言教程"
                    },{
                        "n": "Ruby",
                        "v": "Ruby语言教程"
                    },{
                        "n": "Swift",
                        "v": "Swift语言教程"
                    },{
                        "n": "Rust",
                        "v": "Rust语言教程"
                    },{
                        "n": "MATLAB",
                        "v": "MATLAB语言教程"
                    },{
                        "n": "Assembly language",
                        "v": "Assembly language语言教程"
                    }  
                ]
        },
        {
            "key":"duration",
            "name":"时长",
            "value":[
                {
                    "n":"全部",
                    "v":"0"
                },
                {
                    "n":"60分钟以上",
                    "v":"4"
                },
                {
                    "n":"30~60分钟",
                    "v":"3"
                },
                {
                    "n":"10~30分钟",
                    "v":"2"
                },
                {
                    "n":"10分钟以下",
                    "v":"1"
                }
            ]
        }
    ],
    "建筑学教程":[
        {
            "key":"order",
            "name":"排序",
            "value":[
                {
                    "n":"综合排序",
                    "v":"0"
                },
                {
                    "n":"最多点击",
                    "v":"click"
                },
                {
                    "n":"最新发布",
                    "v":"pubdate"
                },
                {
                    "n":"最多弹幕",
                    "v":"dm"
                },
                {
                    "n":"最多收藏",
                    "v":"stow"
                }
            ]
        },
        {
            "key":"duration",
            "name":"时长",
            "value":[
                {
                    "n":"全部",
                    "v":"0"
                },
                {
                    "n":"60分钟以上",
                    "v":"4"
                },
                {
                    "n":"30~60分钟",
                    "v":"3"
                },
                {
                    "n":"10~30分钟",
                    "v":"2"
                },
                {
                    "n":"10分钟以下",
                    "v":"1"
                }
            ]
        }
    ],
    "法律基础知识":[
        {
            "key":"order",
            "name":"排序",
            "value":[
                {
                    "n":"综合排序",
                    "v":"0"
                },
                {
                    "n":"最多点击",
                    "v":"click"
                },
                {
                    "n":"最新发布",
                    "v":"pubdate"
                },
                {
                    "n":"最多弹幕",
                    "v":"dm"
                },
                {
                    "n":"最多收藏",
                    "v":"stow"
                }
            ]
        },
        {
            "key":"duration",
            "name":"时长",
            "value":[
                {
                    "n":"全部",
                    "v":"0"
                },
                {
                    "n":"60分钟以上",
                    "v":"4"
                },
                {
                    "n":"30~60分钟",
                    "v":"3"
                },
                {
                    "n":"10~30分钟",
                    "v":"2"
                },
                {
                    "n":"10分钟以下",
                    "v":"1"
                }
            ]
        }
    ]
};
  return JSON.stringify({
      class: classes,
      filters: filterObj,
  });
}

async function homeVod() {
  let html = HOST + '/x/web-interface/search/type?search_type=video&keyword='+homeName;
  let data = JSON.parse(await request(html)).data.result;
  let videos = [];
  data.forEach(function(it) {
      videos.push({
          vod_id: it.aid,
          vod_name: stripHtmlTag(it.title),
          vod_pic: 'http:'+it.pic,
          vod_remarks: turnDHM(it.duration) || '',
      });
  });
  return JSON.stringify({
      list: videos,
  });
}

async function category(tid, pg, filter, extend) {
  let html = HOST + '/x/web-interface/search/type?search_type=video&page=' + pg + '&keyword=' + (extend.tid || tid) + '&duration=' + (extend.duration || '') + '&order=' + (extend.order || '');
  let data = JSON.parse(await request(html)).data;
  let videos = [];
  data.result.forEach(function(it) {
      videos.push({
          vod_id: it.aid,
          vod_name: stripHtmlTag(it.title),
          vod_pic: 'https:' + it.pic,
          vod_remarks: turnDHM(it.duration) || '',
      });
  });
  return JSON.stringify({
      page: parseInt(data.page),
      pagecount: data.numPages,
      limit: 20,
      total: data.numResults,
      list: videos,
  });
}

async function detail(id) {
  let data = JSON.parse(await request(HOST + '/x/web-interface/view?aid=' + id)).data;
  let vod = {
      vod_id: data.aid,
      vod_name: stripHtmlTag(data.title),
      vod_pic: data.pic,
      type_name: data.tname,
      vod_year: new Date(data.pubdate*1000).getFullYear(),
      vod_remarks: data.duration || '',
      vod_director: data.owner.name,
      vod_content: stripHtmlTag(data.desc),
  };
  let episodes = data.pages;
  let playurls = [];
  episodes.forEach(function(it) {
    let cid = it.cid;
    let part = it.part.replace('#', '﹟').replace('$', '﹩');
    playurls.push(
        part + '$' + data.aid + '_' + cid
    )
  });
  let playUrl = playurls.join('#');
  vod.vod_play_from = 'B站';
  vod.vod_play_url = playUrl;
  return JSON.stringify({
    list: [vod],
  });
}

async function play(flag, id, flags) {
  let ids = id.split('_');
  let html = HOST + '/x/player/playurl?avid=' + ids[0] + '&cid=' + ids[1] + '&qn=116';
  let data = JSON.parse(await request(html)).data.durl;
  let maxSize = -1;
  let position = -1;
  data.forEach(function(it, i) {
      if (maxSize < Number(it.size)) {
          maxSize = Number(it.size);
          position = i
      }
  });
  let purl = '';
  if (data.length > 0) {
    if (position === -1) {
        position = 0
    }
    purl = data[position].url
  }
  // console.debug('我的哔哩 purl =====>' + purl); // js_debug.log
  return JSON.stringify({
    parse: 0,
    url: purl,
    header: getMb(),
  });
}

async function search(wd, quick, pg) {
  if(searchable==1){
  if (pg <= 0 || typeof(pg) == 'undefined') pg = 1;
  let html = HOST + '/x/web-interface/search/type?search_type=video&keyword=' + wd + '&page=' + pg;
  let data = JSON.parse(await request(html)).data;
  let videos = [];
  data.result.forEach(function(it) {
    videos.push({
        vod_id: it.aid,
        vod_name: stripHtmlTag(it.title),
        vod_pic: 'https:' + it.pic,
        vod_remarks: turnDHM(it.duration) || '',
    });
  });
  return JSON.stringify({
      page: parseInt(data.page),
      pagecount: data.numPages,
      limit: 20,
      total: data.numResults,
      list: videos,
  });
  }else{
	  return null;
  }
}

function getHeader(cookie) {
  let header = {};
  header['cookie'] = cookie;
  header['User-Agent'] = PC_UA;
  header['Referer'] = 'https://www.bilibili.com';
  return header;
}

function getMb() {
  return getHeader(cookie);
}

function stripHtmlTag(src) {
  return src
      .replace(/<\/?[^>]+(>|$)/g, '')
      .replace(/&.{1,5};/g, '')
      .replace(/\s{2,}/g, ' ');
}

function turnDHM(duration) {
  let min = duration.split(':')[0];
  let sec = duration.split(':')[1];
  if (min == 0) {
      return sec + '秒';
  } else if (0 < min && min < 60) {
      return min + '分';
  } else if (60 <= min && min < 1440) {
      if (min % 60 == 0) {
          let h = min / 60;
          return h + '小时';
      } else {
          let h = min / 60;
          h = (h + '').split('.')[0];
          let m = min % 60;
          return h + '小时' + m + '分';
      }
  } else if (min >= 1440) {
      let d = min / 60 / 24;
      d = (d + '').split('.')[0];
      let h = min / 60 % 24;
      h = (h + '').split('.')[0];
      let m = min % 60;
      let dhm = '';
      if (d > 0) {
          dhm = d + '天'
      }
      if (h >= 1) {
          dhm = dhm + h + '小时'
      }
      if (m > 0) {
          dhm = dhm + m + '分'
      }
      return dhm;
  }
  return null;
}

export function __jsEvalReturn() {
  return {
      init: init,
      home: home,
      homeVod: homeVod,
      category: category,
      detail: detail,
      play: play,
      search: search,
  };
}