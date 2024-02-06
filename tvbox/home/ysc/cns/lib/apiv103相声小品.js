import { _ } from "assets://js/lib/cat.js";
let key = '相声小品';
let homeName = '相声小品';
let HOST = 'https://api.bilibili.com';
let siteKey = '';
let siteType = 0;
let searchable= 0;//searchable=1 启用搜索
const PC_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.361";
// let cookie = "DedeUserID=690781341;DedeUserID__ckMd5=cabc96906269c5b6;SESSDATA=2245ba24%2C1684212125%2C466fd%2Ab2;bili_jct=de6fdb60c10f8a83910aa55d79407b4e;"; // 可更换成自己的cookie
let cookie = "./qyg4.txt"; // 可更换成自己的cookie

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
    {
      "type_name": "单口相声",
      "type_id": "单口相声"
    },
    {
      "type_name": "群口相声",
      "type_id": "群口相声"
    },
	{
      "type_name": "德云社",
      "type_id": "德云社"
    },
	{
      "type_name": "青曲社",
      "type_id": "青曲社"
    },
    {
      "type_name": "郭德纲",
      "type_id": "郭德纲"
    },
	{
      "type_name": "岳云鹏",
      "type_id": "岳云鹏"
    },
    {
      "type_name": "评书",
      "type_id": "评书"
    },
    {
      "type_name": "二人转",
      "type_id": "二人转"
    },
    {
      "type_name": "春晚小品",
      "type_id": "春晚小品"
    },
    {
      "type_name": "赵本山",
      "type_id": "赵本山"
    },
    {
      "type_name": "陈佩斯",
      "type_id": "陈佩斯"
    },
    {
      "type_name": "冯巩",
      "type_id": "冯巩"
    },
    {
      "type_name": "宋小宝",
      "type_id": "宋小宝"
    },
    {
      "type_name": "赵丽蓉",
      "type_id": "赵丽蓉"
    },
	{
      "type_name": "郭达",
      "type_id": "郭达"
    },
    {
      "type_name": "潘长江",
      "type_id": "潘长江"
    },

    {
      "type_name": "郭冬临",
      "type_id": "郭冬临"
    },
        {
      "type_name": "严顺开",
      "type_id": "严顺开"
    },
        {
      "type_name": "开心麻花",
      "type_id": "开心麻花"
    },
       {
      "type_name": "屌丝男士",
      "type_id": "屌丝男士"
    },
        {
      "type_name": "戏剧综艺",
      "type_id": "戏剧综艺"
    }
];
  let filterObj = {

	  "单口相声": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
	  "群口相声": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "德云社": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "青曲社": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "戏剧综艺": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "屌丝男士": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "开心麻花": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "严顺开": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "郭冬临": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "潘长江": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "郭达": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "赵丽蓉": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "宋小宝": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "冯巩": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "陈佩斯": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "赵本山": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "评书": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "二人转": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "春晚小品": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "曹云金": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "岳云鹏": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "郭德纲": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}]
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