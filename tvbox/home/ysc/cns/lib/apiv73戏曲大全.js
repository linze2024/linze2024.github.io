import { _ } from "assets://js/lib/cat.js";
let key = '戏曲大全';
let homeName = '戏曲';
let HOST = 'https://api.bilibili.com';
let siteKey = '';
let siteType = 0;
let searchable=0;
const PC_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.361";
// let cookie = "DedeUserID=690781341;DedeUserID__ckMd5=cabc96906269c5b6;SESSDATA=2245ba24%2C1684212125%2C466fd%2Ab2;bili_jct=de6fdb60c10f8a83910aa55d79407b4e;"; // 可更换成自己的cookie
let cookie = "./qyg7.txt"; // 可更换成自己的cookie

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
      "type_name": "京剧",
      "type_id": "京剧"
    },
    {
      "type_name": "豫剧",
      "type_id": "豫剧"
    },
	{
      "type_name": "曲剧",
      "type_id": "河南曲剧"
    },
	{
      "type_name": "黄梅戏",
      "type_id": "黄梅戏"
    },
    {
      "type_name": "越剧",
      "type_id": "越剧"
    },
    {
      "type_name": "小戏骨",
      "type_id": "小戏骨"
    },
	{
      "type_name": "民间小调",
      "type_id": "民间小调"
    },
    {
      "type_name": "蒲剧",
      "type_id": "蒲剧"
    },
    {
      "type_name": "吕剧",
      "type_id": "吕剧"
    },
    {
      "type_name": "眉户",
      "type_id": "眉户"
    },
    {
      "type_name": "歌仔戏",
      "type_id": "歌仔戏"
    },
    {
      "type_name": "评剧",
      "type_id": "评剧"
    },
    {
      "type_name": "沪剧",
      "type_id": "沪剧"
    },
    {
      "type_name": "昆曲",
      "type_id": "昆曲"
    },
    {
      "type_name": "花鼓戏",
      "type_id": "花鼓戏"
    },
    {
      "type_name": "潮剧",
      "type_id": "潮剧"
    },
	{
      "type_name": "芗剧",
      "type_id": "芗剧"
    },
    {
      "type_name": "超清潮剧",
      "type_id": "超清潮剧"
    },

    {
      "type_name": "百花潮剧院",
      "type_id": "百花潮剧院"
    },
        {
      "type_name": "香港潮剧",
      "type_id": "香港潮剧"
    },
        {
      "type_name": "潮剧院",
      "type_id": "潮剧院"
    },
       {
      "type_name": "潮剧团",
      "type_id": "潮剧团"
    },
        {
      "type_name": "潮剧全剧",
      "type_id": "潮剧全剧"
    }, 
     {
      "type_name": "潮剧选段",
      "type_id": "潮剧选段"
    },
    {
      "type_name": "名家潮剧",
      "type_id": "名家潮剧"
    },
  
    {
      "type_name": "潮汕小品",
      "type_id": "潮汕小品"
    },
        {
      "type_name": "潮汕讲古",
      "type_id": "潮汕讲古"
    },

    {
      "type_name": "河北梆子",
      "type_id": "河北梆子"
    },
    {
      "type_name": "梆子腔",
      "type_id": "梆子腔"
    },
    {
      "type_name": "晋剧",
      "type_id": "晋剧"
    },
    {
      "type_name": "龙江剧",
      "type_id": "龙江剧"
    },
    {
      "type_name": "越调",
      "type_id": "越调"
    },
    {
      "type_name": "山东梆子",
      "type_id": "山东梆子"
    },
    {
      "type_name": "淮剧",
      "type_id": "淮剧"
    },
    {
      "type_name": "滑稽戏",
      "type_id": "滑稽戏"
    },
    {
      "type_name": "婺剧",
      "type_id": "婺剧"
    },
    {
      "type_name": "绍剧",
      "type_id": "绍剧"
    },
    {
      "type_name": "徽剧",
      "type_id": "徽剧"
    },
    {
      "type_name": "雁剧",
      "type_id": "雁剧"
    },
    {
      "type_name": "上党梆子",
      "type_id": "上党梆子"
    },
    {
      "type_name": "秦腔",
      "type_id": "秦腔"
    },
    {
      "type_name": "武安平调",
      "type_id": "武安平调"
    },
    {
      "type_name": "二人台",
      "type_id": "二人台"
    },
    {
      "type_name": "吉剧",
      "type_id": "吉剧"
    },
    {
      "type_name": "高腔",
      "type_id": "高腔"
    }
  ];
  let filterObj = {
	  "民间小调": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
    "小戏骨": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
	  "京剧": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "越剧": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "芗剧": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "蒲剧": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "吕剧": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "眉户": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "歌仔戏": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "黄梅戏": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "评剧": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "豫剧": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "沪剧": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "昆曲": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "花鼓戏": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "潮剧": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "超清潮剧": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "百花潮剧院": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "香港潮剧": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "潮剧院": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "潮剧团": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "潮剧全剧": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "潮剧选段": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "名家潮剧": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "潮汕小品": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "潮汕讲古": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "河北梆子": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "梆子腔": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "晋剧": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "龙江剧": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "越调": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "河南曲剧": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "山东梆子": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "淮剧": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "滑稽戏": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "婺剧": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "绍剧": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "徽剧": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "雁剧": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "上党梆子": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "秦腔": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "武安平调": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "二人台": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "吉剧": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
      "高腔": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}]     
      
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