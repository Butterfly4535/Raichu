/*index.js*/
 //获取应用实例
var time = require('../../utils/util.js');
const app = getApp() 
Page({
  data: {
    /*userInfo: {},  //获取用户信息模块，小程序审核越来越严格，暂未启用，所以用注释的形式呈现
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    back: "",
    */
   /*以下是一些天气（界面）图标*/
    dingwei: "../../img/location.png",
    ico: "",
    qing:"../../img/qing.png",
    duoyun:"../../img/duoyun.png",
    wu:"../../img/wu.png",
    xue: "../../img/xue.png",
    yin:"../../img/yin.png",
    xiaoyu:"../../img/xiaoyu.png",
    zhongyu:"../../img/zhongyu.png",
    dayu:"../../img/dayu.png",
    baoyu:"../../img/baoyu.png",
    mai:"../../img/mai.png",
    
    /*下面是城市列表，用户输入的是城市名称（CityName），小程序把它转化为对应的城市代码（CityCode），用以通过天气API接口请求数据*/
    /*注：考虑到单个省份范围较大，默认查询省会城市的天气，直辖市除外*/
    cityList: [{
        "cityName": "北京",
        "province": "北京",
        "cityPinyin": "beijing",
        "cityCode": "101010100"
      },
      {
        "cityName": "海淀",
        "province": "北京",
        "cityPinyin": "haidian",
        "cityCode": "101010200"
      },
      {
        "cityName": "朝阳",
        "province": "北京",
        "cityPinyin": "chaoyang",
        "cityCode": "101010300"
      },
      {
        "cityName": "顺义",
        "province": "北京",
        "cityPinyin": "shunyi",
        "cityCode": "101010400"
      },
      {
        "cityName": "怀柔",
        "province": "北京",
        "cityPinyin": "huairou",
        "cityCode": "101010500"
      },
      {
        "cityName": "通州",
        "province": "北京",
        "cityPinyin": "tongzhou",
        "cityCode": "101010600"
      },
      {
        "cityName": "昌平",
        "province": "北京",
        "cityPinyin": "changping",
        "cityCode": "101010700"
      },
      {
        "cityName": "延庆",
        "province": "北京",
        "cityPinyin": "yanqing",
        "cityCode": "101010800"
      },
      {
        "cityName": "丰台",
        "province": "北京",
        "cityPinyin": "fengtai",
        "cityCode": "101010900"
      },
      {
        "cityName": "石景山",
        "province": "北京",
        "cityPinyin": "shijingshan",
        "cityCode": "101011000"
      },
      {
        "cityName": "大兴",
        "province": "北京",
        "cityPinyin": "daxing",
        "cityCode": "101011100"
      },
      {
        "cityName": "房山",
        "province": "北京",
        "cityPinyin": "fangshan",
        "cityCode": "101011200"
      },
      {
        "cityName": "密云",
        "province": "北京",
        "cityPinyin": "miyun",
        "cityCode": "101011300"
      },
      {
        "cityName": "门头沟",
        "province": "北京",
        "cityPinyin": "mentougou",
        "cityCode": "101011400"
      },
      {
        "cityName": "平谷",
        "province": "北京",
        "cityPinyin": "pinggu",
        "cityCode": "101011500"
      },
      {
        "cityName": "上海",
        "province": "上海",
        "cityPinyin": "shanghai",
        "cityCode": "101020100"
      },
      {
        "cityName": "闵行",
        "province": "上海",
        "cityPinyin": "minhang",
        "cityCode": "101020200"
      },
      {
        "cityName": "宝山",
        "province": "上海",
        "cityPinyin": "baoshan",
        "cityCode": "101020300"
      },
      {
        "cityName": "嘉定",
        "province": "上海",
        "cityPinyin": "jiading",
        "cityCode": "101020500"
      },
      {
        "cityName": "南汇",
        "province": "上海",
        "cityPinyin": "nanhui",
        "cityCode": "101020600"
      },
      {
        "cityName": "金山",
        "province": "上海",
        "cityPinyin": "jinshan",
        "cityCode": "101020700"
      },
      {
        "cityName": "青浦",
        "province": "上海",
        "cityPinyin": "qingpu",
        "cityCode": "101020800"
      },
      {
        "cityName": "松江",
        "province": "上海",
        "cityPinyin": "songjiang",
        "cityCode": "101020900"
      },
      {
        "cityName": "奉贤",
        "province": "上海",
        "cityPinyin": "fengxian",
        "cityCode": "101021000"
      },
      {
        "cityName": "崇明",
        "province": "上海",
        "cityPinyin": "chongming",
        "cityCode": "101021100"
      },
      {
        "cityName": "徐家汇",
        "province": "上海",
        "cityPinyin": "xujiahui",
        "cityCode": "101021200"
      },
      {
        "cityName": "浦东",
        "province": "上海",
        "cityPinyin": "pudong",
        "cityCode": "101021300"
      },
      {
        "cityName": "天津",
        "province": "天津",
        "cityPinyin": "tianjin",
        "cityCode": "101030100"
      },
      {
        "cityName": "武清",
        "province": "天津",
        "cityPinyin": "wuqing",
        "cityCode": "101030200"
      },
      {
        "cityName": "宝坻",
        "province": "天津",
        "cityPinyin": "baodi",
        "cityCode": "101030300"
      },
      {
        "cityName": "东丽",
        "province": "天津",
        "cityPinyin": "dongli",
        "cityCode": "101030400"
      },
      {
        "cityName": "西青",
        "province": "天津",
        "cityPinyin": "xiqing",
        "cityCode": "101030500"
      },
      {
        "cityName": "北辰",
        "province": "天津",
        "cityPinyin": "beichen",
        "cityCode": "101030600"
      },
      {
        "cityName": "宁河",
        "province": "天津",
        "cityPinyin": "ninghe",
        "cityCode": "101030700"
      },
      {
        "cityName": "汉沽",
        "province": "天津",
        "cityPinyin": "hangu",
        "cityCode": "101030800"
      },
      {
        "cityName": "静海",
        "province": "天津",
        "cityPinyin": "jinghai",
        "cityCode": "101030900"
      },
      {
        "cityName": "津南",
        "province": "天津",
        "cityPinyin": "jinnan",
        "cityCode": "101031000"
      },
      {
        "cityName": "塘沽",
        "province": "天津",
        "cityPinyin": "tanggu",
        "cityCode": "101031100"
      },
      {
        "cityName": "大港",
        "province": "天津",
        "cityPinyin": "dagang",
        "cityCode": "101031200"
      },
      {
        "cityName": "蓟县",
        "province": "天津",
        "cityPinyin": "jixian",
        "cityCode": "101031400"
      },
      {
        "cityName": "重庆",
        "province": "重庆",
        "cityPinyin": "chongqing",
        "cityCode": "101040100"
      },
      {
        "cityName": "永川",
        "province": "重庆",
        "cityPinyin": "yongchuan",
        "cityCode": "101040200"
      },
      {
        "cityName": "合川",
        "province": "重庆",
        "cityPinyin": "hechuan",
        "cityCode": "101040300"
      },
      {
        "cityName": "南川",
        "province": "重庆",
        "cityPinyin": "nanchuan",
        "cityCode": "101040400"
      },
      {
        "cityName": "江津",
        "province": "重庆",
        "cityPinyin": "jiangjin",
        "cityCode": "101040500"
      },
      {
        "cityName": "万盛",
        "province": "重庆",
        "cityPinyin": "wansheng",
        "cityCode": "101040600"
      },
      {
        "cityName": "渝北",
        "province": "重庆",
        "cityPinyin": "yubei",
        "cityCode": "101040700"
      },
      {
        "cityName": "北碚",
        "province": "重庆",
        "cityPinyin": "beibei",
        "cityCode": "101040800"
      },
      {
        "cityName": "巴南",
        "province": "重庆",
        "cityPinyin": "banan",
        "cityCode": "101040900"
      },
      {
        "cityName": "长寿",
        "province": "重庆",
        "cityPinyin": "changshou",
        "cityCode": "101041000"
      },
      {
        "cityName": "黔江",
        "province": "重庆",
        "cityPinyin": "qianjiang",
        "cityCode": "101041100"
      },
      {
        "cityName": "万州",
        "province": "重庆",
        "cityPinyin": "wanzhou",
        "cityCode": "101041300"
      },
      {
        "cityName": "涪陵",
        "province": "重庆",
        "cityPinyin": "fuling",
        "cityCode": "101041400"
      },
      {
        "cityName": "开县",
        "province": "重庆",
        "cityPinyin": "kaixian",
        "cityCode": "101041500"
      },
      {
        "cityName": "城口",
        "province": "重庆",
        "cityPinyin": "chengkou",
        "cityCode": "101041600"
      },
      {
        "cityName": "云阳",
        "province": "重庆",
        "cityPinyin": "yunyang",
        "cityCode": "101041700"
      },
      {
        "cityName": "巫溪",
        "province": "重庆",
        "cityPinyin": "wuxi",
        "cityCode": "101041800"
      },
      {
        "cityName": "奉节",
        "province": "重庆",
        "cityPinyin": "fengjie",
        "cityCode": "101041900"
      },
      {
        "cityName": "巫山",
        "province": "重庆",
        "cityPinyin": "wushan",
        "cityCode": "101042000"
      },
      {
        "cityName": "潼南",
        "province": "重庆",
        "cityPinyin": "tongnan",
        "cityCode": "101042100"
      },
      {
        "cityName": "垫江",
        "province": "重庆",
        "cityPinyin": "dianjiang",
        "cityCode": "101042200"
      },
      {
        "cityName": "梁平",
        "province": "重庆",
        "cityPinyin": "liangping",
        "cityCode": "101042300"
      },
      {
        "cityName": "忠县",
        "province": "重庆",
        "cityPinyin": "zhongxian",
        "cityCode": "101042400"
      },
      {
        "cityName": "石柱",
        "province": "重庆",
        "cityPinyin": "shizhu",
        "cityCode": "101042500"
      },
      {
        "cityName": "大足",
        "province": "重庆",
        "cityPinyin": "dazu",
        "cityCode": "101042600"
      },
      {
        "cityName": "荣昌",
        "province": "重庆",
        "cityPinyin": "rongchang",
        "cityCode": "101042700"
      },
      {
        "cityName": "铜梁",
        "province": "重庆",
        "cityPinyin": "tongliang",
        "cityCode": "101042800"
      },
      {
        "cityName": "璧山",
        "province": "重庆",
        "cityPinyin": "bishan",
        "cityCode": "101042900"
      },
      {
        "cityName": "丰都",
        "province": "重庆",
        "cityPinyin": "fengdu",
        "cityCode": "101043000"
      },
      {
        "cityName": "武隆",
        "province": "重庆",
        "cityPinyin": "wulong",
        "cityCode": "101043100"
      },
      {
        "cityName": "彭水",
        "province": "重庆",
        "cityPinyin": "pengshui",
        "cityCode": "101043200"
      },
      {
        "cityName": "綦江",
        "province": "重庆",
        "cityPinyin": "qijiang",
        "cityCode": "101043300"
      },
      {
        "cityName": "酉阳",
        "province": "重庆",
        "cityPinyin": "youyang",
        "cityCode": "101043400"
      },
      {
        "cityName": "秀山",
        "province": "重庆",
        "cityPinyin": "xiushan",
        "cityCode": "101043600"
      },
      {
        "cityName": "黑龙江",
        "province": "黑龙江",
        "cityPinyin": "haerbin",
        "cityCode": "101050101"
      },
      {
        "cityName": "哈尔滨",
        "province": "黑龙江",
        "cityPinyin": "haerbin",
        "cityCode": "101050101"
      },
      {
        "cityName": "双城",
        "province": "黑龙江",
        "cityPinyin": "shuangcheng",
        "cityCode": "101050102"
      },
      {
        "cityName": "呼兰",
        "province": "黑龙江",
        "cityPinyin": "hulan",
        "cityCode": "101050103"
      },
      {
        "cityName": "阿城",
        "province": "黑龙江",
        "cityPinyin": "acheng",
        "cityCode": "101050104"
      },
      {
        "cityName": "宾县",
        "province": "黑龙江",
        "cityPinyin": "binxian",
        "cityCode": "101050105"
      },
      {
        "cityName": "依兰",
        "province": "黑龙江",
        "cityPinyin": "yilan",
        "cityCode": "101050106"
      },
      {
        "cityName": "巴彦",
        "province": "黑龙江",
        "cityPinyin": "bayan",
        "cityCode": "101050107"
      },
      {
        "cityName": "通河",
        "province": "黑龙江",
        "cityPinyin": "tonghe",
        "cityCode": "101050108"
      },
      {
        "cityName": "方正",
        "province": "黑龙江",
        "cityPinyin": "fangzheng",
        "cityCode": "101050109"
      },
      {
        "cityName": "延寿",
        "province": "黑龙江",
        "cityPinyin": "yanshou",
        "cityCode": "101050110"
      },
      {
        "cityName": "尚志",
        "province": "黑龙江",
        "cityPinyin": "shangzhi",
        "cityCode": "101050111"
      },
      {
        "cityName": "五常",
        "province": "黑龙江",
        "cityPinyin": "wuchang",
        "cityCode": "101050112"
      },
      {
        "cityName": "木兰",
        "province": "黑龙江",
        "cityPinyin": "mulan",
        "cityCode": "101050113"
      },
      {
        "cityName": "齐齐哈尔",
        "province": "黑龙江",
        "cityPinyin": "qiqihaer",
        "cityCode": "101050201"
      },
      {
        "cityName": "讷河",
        "province": "黑龙江",
        "cityPinyin": "nehe",
        "cityCode": "101050202"
      },
      {
        "cityName": "龙江",
        "province": "黑龙江",
        "cityPinyin": "longjiang",
        "cityCode": "101050203"
      },
      {
        "cityName": "甘南",
        "province": "黑龙江",
        "cityPinyin": "gannan",
        "cityCode": "101050204"
      },
      {
        "cityName": "富裕",
        "province": "黑龙江",
        "cityPinyin": "fuyu",
        "cityCode": "101050205"
      },
      {
        "cityName": "依安",
        "province": "黑龙江",
        "cityPinyin": "yian",
        "cityCode": "101050206"
      },
      {
        "cityName": "拜泉",
        "province": "黑龙江",
        "cityPinyin": "baiquan",
        "cityCode": "101050207"
      },
      {
        "cityName": "克山",
        "province": "黑龙江",
        "cityPinyin": "keshan",
        "cityCode": "101050208"
      },
      {
        "cityName": "克东",
        "province": "黑龙江",
        "cityPinyin": "kedong",
        "cityCode": "101050209"
      },
      {
        "cityName": "泰来",
        "province": "黑龙江",
        "cityPinyin": "tailai",
        "cityCode": "101050210"
      },
      {
        "cityName": "牡丹江",
        "province": "黑龙江",
        "cityPinyin": "mudanjiang",
        "cityCode": "101050301"
      },
      {
        "cityName": "海林",
        "province": "黑龙江",
        "cityPinyin": "hailin",
        "cityCode": "101050302"
      },
      {
        "cityName": "穆棱",
        "province": "黑龙江",
        "cityPinyin": "muling",
        "cityCode": "101050303"
      },
      {
        "cityName": "林口",
        "province": "黑龙江",
        "cityPinyin": "linkou",
        "cityCode": "101050304"
      },
      {
        "cityName": "绥芬河",
        "province": "黑龙江",
        "cityPinyin": "suifenhe",
        "cityCode": "101050305"
      },
      {
        "cityName": "宁安",
        "province": "黑龙江",
        "cityPinyin": "ningan",
        "cityCode": "101050306"
      },
      {
        "cityName": "东宁",
        "province": "黑龙江",
        "cityPinyin": "dongning",
        "cityCode": "101050307"
      },
      {
        "cityName": "佳木斯",
        "province": "黑龙江",
        "cityPinyin": "jiamusi",
        "cityCode": "101050401"
      },
      {
        "cityName": "汤原",
        "province": "黑龙江",
        "cityPinyin": "tangyuan",
        "cityCode": "101050402"
      },
      {
        "cityName": "抚远",
        "province": "黑龙江",
        "cityPinyin": "fuyuan",
        "cityCode": "101050403"
      },
      {
        "cityName": "桦川",
        "province": "黑龙江",
        "cityPinyin": "huachuan",
        "cityCode": "101050404"
      },
      {
        "cityName": "桦南",
        "province": "黑龙江",
        "cityPinyin": "huanan",
        "cityCode": "101050405"
      },
      {
        "cityName": "同江",
        "province": "黑龙江",
        "cityPinyin": "tongjiang",
        "cityCode": "101050406"
      },
      {
        "cityName": "富锦",
        "province": "黑龙江",
        "cityPinyin": "fujin",
        "cityCode": "101050407"
      },
      {
        "cityName": "绥化",
        "province": "黑龙江",
        "cityPinyin": "suihua",
        "cityCode": "101050501"
      },
      {
        "cityName": "肇东",
        "province": "黑龙江",
        "cityPinyin": "zhaodong",
        "cityCode": "101050502"
      },
      {
        "cityName": "安达",
        "province": "黑龙江",
        "cityPinyin": "anda",
        "cityCode": "101050503"
      },
      {
        "cityName": "海伦",
        "province": "黑龙江",
        "cityPinyin": "hailun",
        "cityCode": "101050504"
      },
      {
        "cityName": "明水",
        "province": "黑龙江",
        "cityPinyin": "mingshui",
        "cityCode": "101050505"
      },
      {
        "cityName": "望奎",
        "province": "黑龙江",
        "cityPinyin": "wangkui",
        "cityCode": "101050506"
      },
      {
        "cityName": "兰西",
        "province": "黑龙江",
        "cityPinyin": "lanxi",
        "cityCode": "101050507"
      },
      {
        "cityName": "青冈",
        "province": "黑龙江",
        "cityPinyin": "qinggang",
        "cityCode": "101050508"
      },
      {
        "cityName": "庆安",
        "province": "黑龙江",
        "cityPinyin": "qingan",
        "cityCode": "101050509"
      },
      {
        "cityName": "绥棱",
        "province": "黑龙江",
        "cityPinyin": "suiling",
        "cityCode": "101050510"
      },
      {
        "cityName": "黑河",
        "province": "黑龙江",
        "cityPinyin": "heihe",
        "cityCode": "101050601"
      },
      {
        "cityName": "嫩江",
        "province": "黑龙江",
        "cityPinyin": "nenjiang",
        "cityCode": "101050602"
      },
      {
        "cityName": "孙吴",
        "province": "黑龙江",
        "cityPinyin": "sunwu",
        "cityCode": "101050603"
      },
      {
        "cityName": "逊克",
        "province": "黑龙江",
        "cityPinyin": "xunke",
        "cityCode": "101050604"
      },
      {
        "cityName": "五大连池",
        "province": "黑龙江",
        "cityPinyin": "wudalianchi",
        "cityCode": "101050605"
      },
      {
        "cityName": "北安",
        "province": "黑龙江",
        "cityPinyin": "beian",
        "cityCode": "101050606"
      },
      {
        "cityName": "大兴安岭",
        "province": "黑龙江",
        "cityPinyin": "daxinganling",
        "cityCode": "101050701"
      },
      {
        "cityName": "塔河",
        "province": "黑龙江",
        "cityPinyin": "tahe",
        "cityCode": "101050702"
      },
      {
        "cityName": "漠河",
        "province": "黑龙江",
        "cityPinyin": "mohe",
        "cityCode": "101050703"
      },
      {
        "cityName": "呼玛",
        "province": "黑龙江",
        "cityPinyin": "huma",
        "cityCode": "101050704"
      },
      {
        "cityName": "呼中",
        "province": "黑龙江",
        "cityPinyin": "huzhong",
        "cityCode": "101050705"
      },
      {
        "cityName": "新林",
        "province": "黑龙江",
        "cityPinyin": "xinlin",
        "cityCode": "101050706"
      },
      {
        "cityName": "加格达奇",
        "province": "黑龙江",
        "cityPinyin": "jiagedaqi",
        "cityCode": "101050708"
      },
      {
        "cityName": "伊春",
        "province": "黑龙江",
        "cityPinyin": "yichun",
        "cityCode": "101050801"
      },
      {
        "cityName": "乌伊岭",
        "province": "黑龙江",
        "cityPinyin": "wuyiling",
        "cityCode": "101050802"
      },
      {
        "cityName": "五营",
        "province": "黑龙江",
        "cityPinyin": "wuying",
        "cityCode": "101050803"
      },
      {
        "cityName": "铁力",
        "province": "黑龙江",
        "cityPinyin": "tieli",
        "cityCode": "101050804"
      },
      {
        "cityName": "嘉荫",
        "province": "黑龙江",
        "cityPinyin": "jiayin",
        "cityCode": "101050805"
      },
      {
        "cityName": "大庆",
        "province": "黑龙江",
        "cityPinyin": "daqing",
        "cityCode": "101050901"
      },
      {
        "cityName": "林甸",
        "province": "黑龙江",
        "cityPinyin": "lindian",
        "cityCode": "101050902"
      },
      {
        "cityName": "肇州",
        "province": "黑龙江",
        "cityPinyin": "zhaozhou",
        "cityCode": "101050903"
      },
      {
        "cityName": "肇源",
        "province": "黑龙江",
        "cityPinyin": "zhaoyuan",
        "cityCode": "101050904"
      },
      {
        "cityName": "杜尔伯特",
        "province": "黑龙江",
        "cityPinyin": "duerbote",
        "cityCode": "101050905"
      },
      {
        "cityName": "七台河",
        "province": "黑龙江",
        "cityPinyin": "qitaihe",
        "cityCode": "101051002"
      },
      {
        "cityName": "勃利",
        "province": "黑龙江",
        "cityPinyin": "boli",
        "cityCode": "101051003"
      },
      {
        "cityName": "鸡西",
        "province": "黑龙江",
        "cityPinyin": "jixi",
        "cityCode": "101051101"
      },
      {
        "cityName": "虎林",
        "province": "黑龙江",
        "cityPinyin": "hulin",
        "cityCode": "101051102"
      },
      {
        "cityName": "密山",
        "province": "黑龙江",
        "cityPinyin": "mishan",
        "cityCode": "101051103"
      },
      {
        "cityName": "鸡东",
        "province": "黑龙江",
        "cityPinyin": "jidong",
        "cityCode": "101051104"
      },
      {
        "cityName": "鹤岗",
        "province": "黑龙江",
        "cityPinyin": "hegang",
        "cityCode": "101051201"
      },
      {
        "cityName": "绥滨",
        "province": "黑龙江",
        "cityPinyin": "suibin",
        "cityCode": "101051202"
      },
      {
        "cityName": "萝北",
        "province": "黑龙江",
        "cityPinyin": "luobei",
        "cityCode": "101051203"
      },
      {
        "cityName": "双鸭山",
        "province": "黑龙江",
        "cityPinyin": "shuangyashan",
        "cityCode": "101051301"
      },
      {
        "cityName": "集贤",
        "province": "黑龙江",
        "cityPinyin": "jixian",
        "cityCode": "101051302"
      },
      {
        "cityName": "宝清",
        "province": "黑龙江",
        "cityPinyin": "baoqing",
        "cityCode": "101051303"
      },
      {
        "cityName": "饶河",
        "province": "黑龙江",
        "cityPinyin": "raohe",
        "cityCode": "101051304"
      },
      {
        "cityName": "友谊",
        "province": "黑龙江",
        "cityPinyin": "youyi",
        "cityCode": "101051305"
      },
      {
        "cityName": "吉林",
        "province": "吉林",
        "cityPinyin": "changchun",
        "cityCode": "101060101"
      },
      {
        "cityName": "长春",
        "province": "吉林",
        "cityPinyin": "changchun",
        "cityCode": "101060101"
      },
      {
        "cityName": "农安",
        "province": "吉林",
        "cityPinyin": "nongan",
        "cityCode": "101060102"
      },
      {
        "cityName": "德惠",
        "province": "吉林",
        "cityPinyin": "dehui",
        "cityCode": "101060103"
      },
      {
        "cityName": "九台",
        "province": "吉林",
        "cityPinyin": "jiutai",
        "cityCode": "101060104"
      },
      {
        "cityName": "榆树",
        "province": "吉林",
        "cityPinyin": "yushu",
        "cityCode": "101060105"
      },
      {
        "cityName": "双阳",
        "province": "吉林",
        "cityPinyin": "shuangyang",
        "cityCode": "101060106"
      },
      {
        "cityName": "吉林",
        "province": "吉林",
        "cityPinyin": "jilin",
        "cityCode": "101060201"
      },
      {
        "cityName": "舒兰",
        "province": "吉林",
        "cityPinyin": "shulan",
        "cityCode": "101060202"
      },
      {
        "cityName": "永吉",
        "province": "吉林",
        "cityPinyin": "yongji",
        "cityCode": "101060203"
      },
      {
        "cityName": "蛟河",
        "province": "吉林",
        "cityPinyin": "jiaohe",
        "cityCode": "101060204"
      },
      {
        "cityName": "磐石",
        "province": "吉林",
        "cityPinyin": "panshi",
        "cityCode": "101060205"
      },
      {
        "cityName": "桦甸",
        "province": "吉林",
        "cityPinyin": "huadian",
        "cityCode": "101060206"
      },
      {
        "cityName": "延吉",
        "province": "吉林",
        "cityPinyin": "yanji",
        "cityCode": "101060301"
      },
      {
        "cityName": "敦化",
        "province": "吉林",
        "cityPinyin": "dunhua",
        "cityCode": "101060302"
      },
      {
        "cityName": "安图",
        "province": "吉林",
        "cityPinyin": "antu",
        "cityCode": "101060303"
      },
      {
        "cityName": "汪清",
        "province": "吉林",
        "cityPinyin": "wangqing",
        "cityCode": "101060304"
      },
      {
        "cityName": "和龙",
        "province": "吉林",
        "cityPinyin": "helong",
        "cityCode": "101060305"
      },
      {
        "cityName": "龙井",
        "province": "吉林",
        "cityPinyin": "longjing",
        "cityCode": "101060307"
      },
      {
        "cityName": "珲春",
        "province": "吉林",
        "cityPinyin": "hunchun",
        "cityCode": "101060308"
      },
      {
        "cityName": "图们",
        "province": "吉林",
        "cityPinyin": "tumen",
        "cityCode": "101060309"
      },
      {
        "cityName": "四平",
        "province": "吉林",
        "cityPinyin": "siping",
        "cityCode": "101060401"
      },
      {
        "cityName": "双辽",
        "province": "吉林",
        "cityPinyin": "shuangliao",
        "cityCode": "101060402"
      },
      {
        "cityName": "梨树",
        "province": "吉林",
        "cityPinyin": "lishu",
        "cityCode": "101060403"
      },
      {
        "cityName": "公主岭",
        "province": "吉林",
        "cityPinyin": "gongzhuling",
        "cityCode": "101060404"
      },
      {
        "cityName": "伊通",
        "province": "吉林",
        "cityPinyin": "yitong",
        "cityCode": "101060405"
      },
      {
        "cityName": "通化",
        "province": "吉林",
        "cityPinyin": "tonghua",
        "cityCode": "101060501"
      },
      {
        "cityName": "梅河口",
        "province": "吉林",
        "cityPinyin": "meihekou",
        "cityCode": "101060502"
      },
      {
        "cityName": "柳河",
        "province": "吉林",
        "cityPinyin": "liuhe",
        "cityCode": "101060503"
      },
      {
        "cityName": "辉南",
        "province": "吉林",
        "cityPinyin": "huinan",
        "cityCode": "101060504"
      },
      {
        "cityName": "集安",
        "province": "吉林",
        "cityPinyin": "jian",
        "cityCode": "101060505"
      },
      {
        "cityName": "通化县",
        "province": "吉林",
        "cityPinyin": "tonghuaxian",
        "cityCode": "101060506"
      },
      {
        "cityName": "白城",
        "province": "吉林",
        "cityPinyin": "baicheng",
        "cityCode": "101060601"
      },
      {
        "cityName": "洮南",
        "province": "吉林",
        "cityPinyin": "taonan",
        "cityCode": "101060602"
      },
      {
        "cityName": "大安",
        "province": "吉林",
        "cityPinyin": "daan",
        "cityCode": "101060603"
      },
      {
        "cityName": "镇赉",
        "province": "吉林",
        "cityPinyin": "zhenlai",
        "cityCode": "101060604"
      },
      {
        "cityName": "通榆",
        "province": "吉林",
        "cityPinyin": "tongyu",
        "cityCode": "101060605"
      },
      {
        "cityName": "辽源",
        "province": "吉林",
        "cityPinyin": "liaoyuan",
        "cityCode": "101060701"
      },
      {
        "cityName": "东丰",
        "province": "吉林",
        "cityPinyin": "dongfeng",
        "cityCode": "101060702"
      },
      {
        "cityName": "东辽",
        "province": "吉林",
        "cityPinyin": "dongliao",
        "cityCode": "101060703"
      },
      {
        "cityName": "松原",
        "province": "吉林",
        "cityPinyin": "songyuan",
        "cityCode": "101060801"
      },
      {
        "cityName": "乾安",
        "province": "吉林",
        "cityPinyin": "qianan",
        "cityCode": "101060802"
      },
      {
        "cityName": "前郭",
        "province": "吉林",
        "cityPinyin": "qianguo",
        "cityCode": "101060803"
      },
      {
        "cityName": "长岭",
        "province": "吉林",
        "cityPinyin": "changling",
        "cityCode": "101060804"
      },
      {
        "cityName": "扶余",
        "province": "吉林",
        "cityPinyin": "fuyu",
        "cityCode": "101060805"
      },
      {
        "cityName": "白山",
        "province": "吉林",
        "cityPinyin": "baishan",
        "cityCode": "101060901"
      },
      {
        "cityName": "靖宇",
        "province": "吉林",
        "cityPinyin": "jingyu",
        "cityCode": "101060902"
      },
      {
        "cityName": "临江",
        "province": "吉林",
        "cityPinyin": "linjiang",
        "cityCode": "101060903"
      },
      {
        "cityName": "东岗",
        "province": "吉林",
        "cityPinyin": "donggang",
        "cityCode": "101060904"
      },
      {
        "cityName": "长白",
        "province": "吉林",
        "cityPinyin": "changbai",
        "cityCode": "101060905"
      },
      {
        "cityName": "抚松",
        "province": "吉林",
        "cityPinyin": "fusong",
        "cityCode": "101060906"
      },
      {
        "cityName": "江源",
        "province": "吉林",
        "cityPinyin": "jiangyuan",
        "cityCode": "101060907"
      },
      {
        "cityName": "辽宁",
        "province": "辽宁",
        "cityPinyin": "shenyang",
        "cityCode": "101070101"
      },
      {
        "cityName": "沈阳",
        "province": "辽宁",
        "cityPinyin": "shenyang",
        "cityCode": "101070101"
      },
      {
        "cityName": "辽中",
        "province": "辽宁",
        "cityPinyin": "liaozhong",
        "cityCode": "101070103"
      },
      {
        "cityName": "康平",
        "province": "辽宁",
        "cityPinyin": "kangping",
        "cityCode": "101070104"
      },
      {
        "cityName": "法库",
        "province": "辽宁",
        "cityPinyin": "faku",
        "cityCode": "101070105"
      },
      {
        "cityName": "新民",
        "province": "辽宁",
        "cityPinyin": "xinming",
        "cityCode": "101070106"
      },
      {
        "cityName": "大连",
        "province": "辽宁",
        "cityPinyin": "dalian",
        "cityCode": "101070201"
      },
      {
        "cityName": "瓦房店",
        "province": "辽宁",
        "cityPinyin": "wafangdian",
        "cityCode": "101070202"
      },
      {
        "cityName": "金州",
        "province": "辽宁",
        "cityPinyin": "jinzhou",
        "cityCode": "101070203"
      },
      {
        "cityName": "普兰店",
        "province": "辽宁",
        "cityPinyin": "pulandian",
        "cityCode": "101070204"
      },
      {
        "cityName": "旅顺",
        "province": "辽宁",
        "cityPinyin": "lvshun",
        "cityCode": "101070205"
      },
      {
        "cityName": "长海",
        "province": "辽宁",
        "cityPinyin": "changhai",
        "cityCode": "101070206"
      },
      {
        "cityName": "庄河",
        "province": "辽宁",
        "cityPinyin": "zhuanghe",
        "cityCode": "101070207"
      },
      {
        "cityName": "鞍山",
        "province": "辽宁",
        "cityPinyin": "anshan",
        "cityCode": "101070301"
      },
      {
        "cityName": "台安",
        "province": "辽宁",
        "cityPinyin": "taian",
        "cityCode": "101070302"
      },
      {
        "cityName": "岫岩",
        "province": "辽宁",
        "cityPinyin": "xiuyan",
        "cityCode": "101070303"
      },
      {
        "cityName": "海城",
        "province": "辽宁",
        "cityPinyin": "haicheng",
        "cityCode": "101070304"
      },
      {
        "cityName": "抚顺",
        "province": "辽宁",
        "cityPinyin": "fushun",
        "cityCode": "101070401"
      },
      {
        "cityName": "新宾",
        "province": "辽宁",
        "cityPinyin": "xinbin",
        "cityCode": "101070402"
      },
      {
        "cityName": "清原",
        "province": "辽宁",
        "cityPinyin": "qingyuan",
        "cityCode": "101070403"
      },
      {
        "cityName": "章党",
        "province": "辽宁",
        "cityPinyin": "zhangdang",
        "cityCode": "101070404"
      },
      {
        "cityName": "本溪",
        "province": "辽宁",
        "cityPinyin": "benxi",
        "cityCode": "101070501"
      },
      {
        "cityName": "本溪县",
        "province": "辽宁",
        "cityPinyin": "benxixian",
        "cityCode": "101070502"
      },
      {
        "cityName": "桓仁",
        "province": "辽宁",
        "cityPinyin": "huanren",
        "cityCode": "101070504"
      },
      {
        "cityName": "丹东",
        "province": "辽宁",
        "cityPinyin": "dandong",
        "cityCode": "101070601"
      },
      {
        "cityName": "凤城",
        "province": "辽宁",
        "cityPinyin": "fengcheng",
        "cityCode": "101070602"
      },
      {
        "cityName": "宽甸",
        "province": "辽宁",
        "cityPinyin": "kuandian",
        "cityCode": "101070603"
      },
      {
        "cityName": "东港",
        "province": "辽宁",
        "cityPinyin": "donggang",
        "cityCode": "101070604"
      },
      {
        "cityName": "锦州",
        "province": "辽宁",
        "cityPinyin": "jinzhou",
        "cityCode": "101070701"
      },
      {
        "cityName": "凌海",
        "province": "辽宁",
        "cityPinyin": "linghai",
        "cityCode": "101070702"
      },
      {
        "cityName": "义县",
        "province": "辽宁",
        "cityPinyin": "yixian",
        "cityCode": "101070704"
      },
      {
        "cityName": "黑山",
        "province": "辽宁",
        "cityPinyin": "heishan",
        "cityCode": "101070705"
      },
      {
        "cityName": "北镇",
        "province": "辽宁",
        "cityPinyin": "beizhen",
        "cityCode": "101070706"
      },
      {
        "cityName": "营口",
        "province": "辽宁",
        "cityPinyin": "yingkou",
        "cityCode": "101070801"
      },
      {
        "cityName": "大石桥",
        "province": "辽宁",
        "cityPinyin": "dashiqiao",
        "cityCode": "101070802"
      },
      {
        "cityName": "盖州",
        "province": "辽宁",
        "cityPinyin": "gaizhou",
        "cityCode": "101070803"
      },
      {
        "cityName": "阜新",
        "province": "辽宁",
        "cityPinyin": "fuxin",
        "cityCode": "101070901"
      },
      {
        "cityName": "彰武",
        "province": "辽宁",
        "cityPinyin": "zhangwu",
        "cityCode": "101070902"
      },
      {
        "cityName": "辽阳",
        "province": "辽宁",
        "cityPinyin": "liaoyang",
        "cityCode": "101071001"
      },
      {
        "cityName": "辽阳县",
        "province": "辽宁",
        "cityPinyin": "liaoyangxian",
        "cityCode": "101071002"
      },
      {
        "cityName": "灯塔",
        "province": "辽宁",
        "cityPinyin": "dengta",
        "cityCode": "101071003"
      },
      {
        "cityName": "弓长岭",
        "province": "辽宁",
        "cityPinyin": "gongchangling",
        "cityCode": "101071004"
      },
      {
        "cityName": "铁岭",
        "province": "辽宁",
        "cityPinyin": "tieling",
        "cityCode": "101071101"
      },
      {
        "cityName": "开原",
        "province": "辽宁",
        "cityPinyin": "kaiyuan",
        "cityCode": "101071102"
      },
      {
        "cityName": "昌图",
        "province": "辽宁",
        "cityPinyin": "changtu",
        "cityCode": "101071103"
      },
      {
        "cityName": "西丰",
        "province": "辽宁",
        "cityPinyin": "xifeng",
        "cityCode": "101071104"
      },
      {
        "cityName": "调兵山",
        "province": "辽宁",
        "cityPinyin": "tiefa",
        "cityCode": "101071105"
      },
      {
        "cityName": "朝阳",
        "province": "辽宁",
        "cityPinyin": "chaoyang",
        "cityCode": "101071201"
      },
      {
        "cityName": "凌源",
        "province": "辽宁",
        "cityPinyin": "lingyuan",
        "cityCode": "101071203"
      },
      {
        "cityName": "喀左",
        "province": "辽宁",
        "cityPinyin": "kazuo",
        "cityCode": "101071204"
      },
      {
        "cityName": "北票",
        "province": "辽宁",
        "cityPinyin": "beipiao",
        "cityCode": "101071205"
      },
      {
        "cityName": "建平县",
        "province": "辽宁",
        "cityPinyin": "jianpingxian",
        "cityCode": "101071207"
      },
      {
        "cityName": "盘锦",
        "province": "辽宁",
        "cityPinyin": "panjin",
        "cityCode": "101071301"
      },
      {
        "cityName": "大洼",
        "province": "辽宁",
        "cityPinyin": "dawa",
        "cityCode": "101071302"
      },
      {
        "cityName": "盘山",
        "province": "辽宁",
        "cityPinyin": "panshan",
        "cityCode": "101071303"
      },
      {
        "cityName": "葫芦岛",
        "province": "辽宁",
        "cityPinyin": "huludao",
        "cityCode": "101071401"
      },
      {
        "cityName": "建昌",
        "province": "辽宁",
        "cityPinyin": "jianchang",
        "cityCode": "101071402"
      },
      {
        "cityName": "绥中",
        "province": "辽宁",
        "cityPinyin": "suizhong",
        "cityCode": "101071403"
      },
      {
        "cityName": "兴城",
        "province": "辽宁",
        "cityPinyin": "xingcheng",
        "cityCode": "101071404"
      },
      {
        "cityName": "内蒙古",
        "province": "内蒙古",
        "cityPinyin": "huhehaote",
        "cityCode": "101080101"
      },
      {
        "cityName": "呼和浩特",
        "province": "内蒙古",
        "cityPinyin": "huhehaote",
        "cityCode": "101080101"
      },
      {
        "cityName": "土左旗",
        "province": "内蒙古",
        "cityPinyin": "tuzuoqi",
        "cityCode": "101080102"
      },
      {
        "cityName": "托县",
        "province": "内蒙古",
        "cityPinyin": "tuoxian",
        "cityCode": "101080103"
      },
      {
        "cityName": "和林",
        "province": "内蒙古",
        "cityPinyin": "helin",
        "cityCode": "101080104"
      },
      {
        "cityName": "清水河",
        "province": "内蒙古",
        "cityPinyin": "qingshuihe",
        "cityCode": "101080105"
      },
      {
        "cityName": "呼市郊区",
        "province": "内蒙古",
        "cityPinyin": "hushijiaoqu",
        "cityCode": "101080106"
      },
      {
        "cityName": "武川",
        "province": "内蒙古",
        "cityPinyin": "wuchuan",
        "cityCode": "101080107"
      },
      {
        "cityName": "包头",
        "province": "内蒙古",
        "cityPinyin": "baotou",
        "cityCode": "101080201"
      },
      {
        "cityName": "白云鄂博",
        "province": "内蒙古",
        "cityPinyin": "baiyunebo",
        "cityCode": "101080202"
      },
      {
        "cityName": "满都拉",
        "province": "内蒙古",
        "cityPinyin": "mandula",
        "cityCode": "101080203"
      },
      {
        "cityName": "土右旗",
        "province": "内蒙古",
        "cityPinyin": "tuyouqi",
        "cityCode": "101080204"
      },
      {
        "cityName": "固阳",
        "province": "内蒙古",
        "cityPinyin": "guyang",
        "cityCode": "101080205"
      },
      {
        "cityName": "达茂旗",
        "province": "内蒙古",
        "cityPinyin": "damaoqi",
        "cityCode": "101080206"
      },
      {
        "cityName": "希拉穆仁",
        "province": "内蒙古",
        "cityPinyin": "xilamuren",
        "cityCode": "101080207"
      },
      {
        "cityName": "乌海",
        "province": "内蒙古",
        "cityPinyin": "wuhai",
        "cityCode": "101080301"
      },
      {
        "cityName": "集宁",
        "province": "内蒙古",
        "cityPinyin": "jining",
        "cityCode": "101080401"
      },
      {
        "cityName": "卓资",
        "province": "内蒙古",
        "cityPinyin": "zhuozi",
        "cityCode": "101080402"
      },
      {
        "cityName": "化德",
        "province": "内蒙古",
        "cityPinyin": "huade",
        "cityCode": "101080403"
      },
      {
        "cityName": "商都",
        "province": "内蒙古",
        "cityPinyin": "shangdu",
        "cityCode": "101080404"
      },
      {
        "cityName": "兴和",
        "province": "内蒙古",
        "cityPinyin": "xinghe",
        "cityCode": "101080406"
      },
      {
        "cityName": "凉城",
        "province": "内蒙古",
        "cityPinyin": "liangcheng",
        "cityCode": "101080407"
      },
      {
        "cityName": "察右前旗",
        "province": "内蒙古",
        "cityPinyin": "chayouqianqi",
        "cityCode": "101080408"
      },
      {
        "cityName": "察右中旗",
        "province": "内蒙古",
        "cityPinyin": "chayouzhongqi",
        "cityCode": "101080409"
      },
      {
        "cityName": "察右后旗",
        "province": "内蒙古",
        "cityPinyin": "chayouhouqi",
        "cityCode": "101080410"
      },
      {
        "cityName": "四子王旗",
        "province": "内蒙古",
        "cityPinyin": "siziwangqi",
        "cityCode": "101080411"
      },
      {
        "cityName": "丰镇",
        "province": "内蒙古",
        "cityPinyin": "fengzhen",
        "cityCode": "101080412"
      },
      {
        "cityName": "通辽",
        "province": "内蒙古",
        "cityPinyin": "tongliao",
        "cityCode": "101080501"
      },
      {
        "cityName": "舍伯吐",
        "province": "内蒙古",
        "cityPinyin": "shebotu",
        "cityCode": "101080502"
      },
      {
        "cityName": "科左中旗",
        "province": "内蒙古",
        "cityPinyin": "kezuozhongqi",
        "cityCode": "101080503"
      },
      {
        "cityName": "科左后旗",
        "province": "内蒙古",
        "cityPinyin": "kezuohouqi",
        "cityCode": "101080504"
      },
      {
        "cityName": "青龙山",
        "province": "内蒙古",
        "cityPinyin": "qinglongshan",
        "cityCode": "101080505"
      },
      {
        "cityName": "开鲁",
        "province": "内蒙古",
        "cityPinyin": "kailu",
        "cityCode": "101080506"
      },
      {
        "cityName": "库伦",
        "province": "内蒙古",
        "cityPinyin": "kulun",
        "cityCode": "101080507"
      },
      {
        "cityName": "奈曼",
        "province": "内蒙古",
        "cityPinyin": "naiman",
        "cityCode": "101080508"
      },
      {
        "cityName": "扎鲁特",
        "province": "内蒙古",
        "cityPinyin": "zhalute",
        "cityCode": "101080509"
      },
      {
        "cityName": "高力板",
        "province": "内蒙古",
        "cityPinyin": "gaoliban",
        "cityCode": "101080510"
      },
      {
        "cityName": "巴雅尔吐胡硕",
        "province": "内蒙古",
        "cityPinyin": "bayaertuhushuo",
        "cityCode": "101080511"
      },
      {
        "cityName": "赤峰",
        "province": "内蒙古",
        "cityPinyin": "chifeng",
        "cityCode": "101080601"
      },
      {
        "cityName": "阿鲁旗",
        "province": "内蒙古",
        "cityPinyin": "aluqi",
        "cityCode": "101080603"
      },
      {
        "cityName": "浩尔吐",
        "province": "内蒙古",
        "cityPinyin": "haoertu",
        "cityCode": "101080604"
      },
      {
        "cityName": "巴林左旗",
        "province": "内蒙古",
        "cityPinyin": "balinzuoqi",
        "cityCode": "101080605"
      },
      {
        "cityName": "巴林右旗",
        "province": "内蒙古",
        "cityPinyin": "balinyouqi",
        "cityCode": "101080606"
      },
      {
        "cityName": "林西",
        "province": "内蒙古",
        "cityPinyin": "linxi",
        "cityCode": "101080607"
      },
      {
        "cityName": "克什克腾",
        "province": "内蒙古",
        "cityPinyin": "keshiketeng",
        "cityCode": "101080608"
      },
      {
        "cityName": "翁牛特",
        "province": "内蒙古",
        "cityPinyin": "wengniute",
        "cityCode": "101080609"
      },
      {
        "cityName": "岗子",
        "province": "内蒙古",
        "cityPinyin": "gangzi",
        "cityCode": "101080610"
      },
      {
        "cityName": "喀喇沁",
        "province": "内蒙古",
        "cityPinyin": "kalaqin",
        "cityCode": "101080611"
      },
      {
        "cityName": "八里罕",
        "province": "内蒙古",
        "cityPinyin": "balihan",
        "cityCode": "101080612"
      },
      {
        "cityName": "宁城",
        "province": "内蒙古",
        "cityPinyin": "ningcheng",
        "cityCode": "101080613"
      },
      {
        "cityName": "敖汉",
        "province": "内蒙古",
        "cityPinyin": "aohan",
        "cityCode": "101080614"
      },
      {
        "cityName": "宝国吐",
        "province": "内蒙古",
        "cityPinyin": "baoguotu",
        "cityCode": "101080615"
      },
      {
        "cityName": "鄂尔多斯",
        "province": "内蒙古",
        "cityPinyin": "eerduosi",
        "cityCode": "101080701"
      },
      {
        "cityName": "达拉特",
        "province": "内蒙古",
        "cityPinyin": "dalate",
        "cityCode": "101080703"
      },
      {
        "cityName": "准格尔",
        "province": "内蒙古",
        "cityPinyin": "zhungeer",
        "cityCode": "101080704"
      },
      {
        "cityName": "鄂前旗",
        "province": "内蒙古",
        "cityPinyin": "eqianqi",
        "cityCode": "101080705"
      },
      {
        "cityName": "河南",
        "province": "内蒙古",
        "cityPinyin": "henan",
        "cityCode": "101080706"
      },
      {
        "cityName": "伊克乌素",
        "province": "内蒙古",
        "cityPinyin": "yikewusu",
        "cityCode": "101080707"
      },
      {
        "cityName": "鄂托克",
        "province": "内蒙古",
        "cityPinyin": "etuoke",
        "cityCode": "101080708"
      },
      {
        "cityName": "杭锦旗",
        "province": "内蒙古",
        "cityPinyin": "hangjinqi",
        "cityCode": "101080709"
      },
      {
        "cityName": "乌审旗",
        "province": "内蒙古",
        "cityPinyin": "wushenqi",
        "cityCode": "101080710"
      },
      {
        "cityName": "伊金霍洛",
        "province": "内蒙古",
        "cityPinyin": "yijinhuoluo",
        "cityCode": "101080711"
      },
      {
        "cityName": "乌审召",
        "province": "内蒙古",
        "cityPinyin": "wushenzhao",
        "cityCode": "101080712"
      },
      {
        "cityName": "东胜",
        "province": "内蒙古",
        "cityPinyin": "dongsheng",
        "cityCode": "101080713"
      },
      {
        "cityName": "临河",
        "province": "内蒙古",
        "cityPinyin": "linhe",
        "cityCode": "101080801"
      },
      {
        "cityName": "五原",
        "province": "内蒙古",
        "cityPinyin": "wuyuan",
        "cityCode": "101080802"
      },
      {
        "cityName": "磴口",
        "province": "内蒙古",
        "cityPinyin": "dengkou",
        "cityCode": "101080803"
      },
      {
        "cityName": "乌前旗",
        "province": "内蒙古",
        "cityPinyin": "wuqianqi",
        "cityCode": "101080804"
      },
      {
        "cityName": "大佘太",
        "province": "内蒙古",
        "cityPinyin": "dashetai",
        "cityCode": "101080805"
      },
      {
        "cityName": "乌中旗",
        "province": "内蒙古",
        "cityPinyin": "wuzhongqi",
        "cityCode": "101080806"
      },
      {
        "cityName": "乌后旗",
        "province": "内蒙古",
        "cityPinyin": "wuhouqi",
        "cityCode": "101080807"
      },
      {
        "cityName": "海力素",
        "province": "内蒙古",
        "cityPinyin": "hailisu",
        "cityCode": "101080808"
      },
      {
        "cityName": "那仁宝力格",
        "province": "内蒙古",
        "cityPinyin": "narenbaolige",
        "cityCode": "101080809"
      },
      {
        "cityName": "杭锦后旗",
        "province": "内蒙古",
        "cityPinyin": "hangjinhouqi",
        "cityCode": "101080810"
      },
      {
        "cityName": "锡林浩特",
        "province": "内蒙古",
        "cityPinyin": "xilinhaote",
        "cityCode": "101080901"
      },
      {
        "cityName": "二连浩特",
        "province": "内蒙古",
        "cityPinyin": "erlianhaote",
        "cityCode": "101080903"
      },
      {
        "cityName": "阿巴嘎",
        "province": "内蒙古",
        "cityPinyin": "abaga",
        "cityCode": "101080904"
      },
      {
        "cityName": "苏左旗",
        "province": "内蒙古",
        "cityPinyin": "suzuoqi",
        "cityCode": "101080906"
      },
      {
        "cityName": "苏右旗",
        "province": "内蒙古",
        "cityPinyin": "suyouqi",
        "cityCode": "101080907"
      },
      {
        "cityName": "朱日和",
        "province": "内蒙古",
        "cityPinyin": "zhurihe",
        "cityCode": "101080908"
      },
      {
        "cityName": "东乌旗",
        "province": "内蒙古",
        "cityPinyin": "dongwuqi",
        "cityCode": "101080909"
      },
      {
        "cityName": "西乌旗",
        "province": "内蒙古",
        "cityPinyin": "xiwuqi",
        "cityCode": "101080910"
      },
      {
        "cityName": "太仆寺",
        "province": "内蒙古",
        "cityPinyin": "taibusiqi",
        "cityCode": "101080911"
      },
      {
        "cityName": "镶黄旗",
        "province": "内蒙古",
        "cityPinyin": "xianghuang",
        "cityCode": "101080912"
      },
      {
        "cityName": "正镶白旗",
        "province": "内蒙古",
        "cityPinyin": "zhengxiangbaiqi",
        "cityCode": "101080913"
      },
      {
        "cityName": "正兰旗",
        "province": "内蒙古",
        "cityPinyin": "zhenglanqi",
        "cityCode": "101080914"
      },
      {
        "cityName": "多伦",
        "province": "内蒙古",
        "cityPinyin": "duolun",
        "cityCode": "101080915"
      },
      {
        "cityName": "博克图",
        "province": "内蒙古",
        "cityPinyin": "boketu",
        "cityCode": "101080916"
      },
      {
        "cityName": "乌拉盖",
        "province": "内蒙古",
        "cityPinyin": "wulagai",
        "cityCode": "101080917"
      },
      {
        "cityName": "呼伦贝尔",
        "province": "内蒙古",
        "cityPinyin": "hulunbeier",
        "cityCode": "101081000"
      },
      {
        "cityName": "海拉尔",
        "province": "内蒙古",
        "cityPinyin": "hailaer",
        "cityCode": "101081001"
      },
      {
        "cityName": "小二沟",
        "province": "内蒙古",
        "cityPinyin": "xiaoergou",
        "cityCode": "101081002"
      },
      {
        "cityName": "阿荣旗",
        "province": "内蒙古",
        "cityPinyin": "arongqi",
        "cityCode": "101081003"
      },
      {
        "cityName": "莫力达瓦",
        "province": "内蒙古",
        "cityPinyin": "molidawa",
        "cityCode": "101081004"
      },
      {
        "cityName": "鄂伦春旗",
        "province": "内蒙古",
        "cityPinyin": "elunchunqi",
        "cityCode": "101081005"
      },
      {
        "cityName": "鄂温克旗",
        "province": "内蒙古",
        "cityPinyin": "ewenkeqi",
        "cityCode": "101081006"
      },
      {
        "cityName": "陈旗",
        "province": "内蒙古",
        "cityPinyin": "chenqi",
        "cityCode": "101081007"
      },
      {
        "cityName": "新左旗",
        "province": "内蒙古",
        "cityPinyin": "xinzuoqi",
        "cityCode": "101081008"
      },
      {
        "cityName": "新右旗",
        "province": "内蒙古",
        "cityPinyin": "xinyouqi",
        "cityCode": "101081009"
      },
      {
        "cityName": "满洲里",
        "province": "内蒙古",
        "cityPinyin": "manzhouli",
        "cityCode": "101081010"
      },
      {
        "cityName": "牙克石",
        "province": "内蒙古",
        "cityPinyin": "yakeshi",
        "cityCode": "101081011"
      },
      {
        "cityName": "扎兰屯",
        "province": "内蒙古",
        "cityPinyin": "zhalantun",
        "cityCode": "101081012"
      },
      {
        "cityName": "额尔古纳",
        "province": "内蒙古",
        "cityPinyin": "eerguna",
        "cityCode": "101081014"
      },
      {
        "cityName": "根河",
        "province": "内蒙古",
        "cityPinyin": "genhe",
        "cityCode": "101081015"
      },
      {
        "cityName": "图里河",
        "province": "内蒙古",
        "cityPinyin": "tulihe",
        "cityCode": "101081016"
      },
      {
        "cityName": "乌兰浩特",
        "province": "内蒙古",
        "cityPinyin": "wulanhaote",
        "cityCode": "101081101"
      },
      {
        "cityName": "阿尔山",
        "province": "内蒙古",
        "cityPinyin": "aershan",
        "cityCode": "101081102"
      },
      {
        "cityName": "科右中旗",
        "province": "内蒙古",
        "cityPinyin": "keyouzhongqi",
        "cityCode": "101081103"
      },
      {
        "cityName": "胡尔勒",
        "province": "内蒙古",
        "cityPinyin": "huerle",
        "cityCode": "101081104"
      },
      {
        "cityName": "扎赉特",
        "province": "内蒙古",
        "cityPinyin": "zhanlaite",
        "cityCode": "101081105"
      },
      {
        "cityName": "索伦",
        "province": "内蒙古",
        "cityPinyin": "suolun",
        "cityCode": "101081106"
      },
      {
        "cityName": "突泉",
        "province": "内蒙古",
        "cityPinyin": "tuquan",
        "cityCode": "101081107"
      },
      {
        "cityName": "霍林郭勒",
        "province": "内蒙古",
        "cityPinyin": "huolinguole",
        "cityCode": "101081108"
      },
      {
        "cityName": "科右前旗",
        "province": "内蒙古",
        "cityPinyin": "keyouqianqi",
        "cityCode": "101081109"
      },
      {
        "cityName": "阿左旗",
        "province": "内蒙古",
        "cityPinyin": "azuoqi",
        "cityCode": "101081201"
      },
      {
        "cityName": "阿右旗",
        "province": "内蒙古",
        "cityPinyin": "ayouqi",
        "cityCode": "101081202"
      },
      {
        "cityName": "额济纳",
        "province": "内蒙古",
        "cityPinyin": "ejina",
        "cityCode": "101081203"
      },
      {
        "cityName": "拐子湖",
        "province": "内蒙古",
        "cityPinyin": "guanzihu",
        "cityCode": "101081204"
      },
      {
        "cityName": "吉兰太",
        "province": "内蒙古",
        "cityPinyin": "jilantai",
        "cityCode": "101081205"
      },
      {
        "cityName": "锡林高勒",
        "province": "内蒙古",
        "cityPinyin": "xilingaole",
        "cityCode": "101081206"
      },
      {
        "cityName": "头道湖",
        "province": "内蒙古",
        "cityPinyin": "toudaohu",
        "cityCode": "101081207"
      },
      {
        "cityName": "中泉子",
        "province": "内蒙古",
        "cityPinyin": "zhongquanzi",
        "cityCode": "101081208"
      },
      {
        "cityName": "诺尔公",
        "province": "内蒙古",
        "cityPinyin": "nuoergong",
        "cityCode": "101081209"
      },
      {
        "cityName": "雅布赖",
        "province": "内蒙古",
        "cityPinyin": "yabulai",
        "cityCode": "101081210"
      },
      {
        "cityName": "乌斯泰",
        "province": "内蒙古",
        "cityPinyin": "wusitai",
        "cityCode": "101081211"
      },
      {
        "cityName": "孪井滩",
        "province": "内蒙古",
        "cityPinyin": "luanjingtan",
        "cityCode": "101081212"
      },
      {
        "cityName": "河北",
        "province": "河北",
        "cityPinyin": "shijiazhuang",
        "cityCode": "101090101"
      },
      {
        "cityName": "石家庄",
        "province": "河北",
        "cityPinyin": "shijiazhuang",
        "cityCode": "101090101"
      },
      {
        "cityName": "井陉",
        "province": "河北",
        "cityPinyin": "jingxing",
        "cityCode": "101090102"
      },
      {
        "cityName": "正定",
        "province": "河北",
        "cityPinyin": "zhengding",
        "cityCode": "101090103"
      },
      {
        "cityName": "栾城",
        "province": "河北",
        "cityPinyin": "luancheng",
        "cityCode": "101090104"
      },
      {
        "cityName": "行唐",
        "province": "河北",
        "cityPinyin": "xingtang",
        "cityCode": "101090105"
      },
      {
        "cityName": "灵寿",
        "province": "河北",
        "cityPinyin": "lingshou",
        "cityCode": "101090106"
      },
      {
        "cityName": "高邑",
        "province": "河北",
        "cityPinyin": "gaoyi",
        "cityCode": "101090107"
      },
      {
        "cityName": "深泽",
        "province": "河北",
        "cityPinyin": "shenze",
        "cityCode": "101090108"
      },
      {
        "cityName": "赞皇",
        "province": "河北",
        "cityPinyin": "zanhuang",
        "cityCode": "101090109"
      },
      {
        "cityName": "无极",
        "province": "河北",
        "cityPinyin": "wuji",
        "cityCode": "101090110"
      },
      {
        "cityName": "平山",
        "province": "河北",
        "cityPinyin": "pingshan",
        "cityCode": "101090111"
      },
      {
        "cityName": "元氏",
        "province": "河北",
        "cityPinyin": "yuanshi",
        "cityCode": "101090112"
      },
      {
        "cityName": "赵县",
        "province": "河北",
        "cityPinyin": "zhaoxian",
        "cityCode": "101090113"
      },
      {
        "cityName": "辛集",
        "province": "河北",
        "cityPinyin": "xinji",
        "cityCode": "101090114"
      },
      {
        "cityName": "藁城",
        "province": "河北",
        "cityPinyin": "gaocheng",
        "cityCode": "101090115"
      },
      {
        "cityName": "晋州",
        "province": "河北",
        "cityPinyin": "jinzhou",
        "cityCode": "101090116"
      },
      {
        "cityName": "新乐",
        "province": "河北",
        "cityPinyin": "xinle",
        "cityCode": "101090117"
      },
      {
        "cityName": "鹿泉",
        "province": "河北",
        "cityPinyin": "luquan",
        "cityCode": "101090118"
      },
      {
        "cityName": "保定",
        "province": "河北",
        "cityPinyin": "baoding",
        "cityCode": "101090201"
      },
      {
        "cityName": "满城",
        "province": "河北",
        "cityPinyin": "mancheng",
        "cityCode": "101090202"
      },
      {
        "cityName": "阜平",
        "province": "河北",
        "cityPinyin": "fuping",
        "cityCode": "101090203"
      },
      {
        "cityName": "徐水",
        "province": "河北",
        "cityPinyin": "xushui",
        "cityCode": "101090204"
      },
      {
        "cityName": "唐县",
        "province": "河北",
        "cityPinyin": "tangxian",
        "cityCode": "101090205"
      },
      {
        "cityName": "高阳",
        "province": "河北",
        "cityPinyin": "gaoyang",
        "cityCode": "101090206"
      },
      {
        "cityName": "容城",
        "province": "河北",
        "cityPinyin": "rongcheng",
        "cityCode": "101090207"
      },
      {
        "cityName": "涞源",
        "province": "河北",
        "cityPinyin": "laiyuan",
        "cityCode": "101090209"
      },
      {
        "cityName": "望都",
        "province": "河北",
        "cityPinyin": "wangdu",
        "cityCode": "101090210"
      },
      {
        "cityName": "安新",
        "province": "河北",
        "cityPinyin": "anxin",
        "cityCode": "101090211"
      },
      {
        "cityName": "易县",
        "province": "河北",
        "cityPinyin": "yixian",
        "cityCode": "101090212"
      },
      {
        "cityName": "曲阳",
        "province": "河北",
        "cityPinyin": "quyang",
        "cityCode": "101090214"
      },
      {
        "cityName": "蠡县",
        "province": "河北",
        "cityPinyin": "lixian",
        "cityCode": "101090215"
      },
      {
        "cityName": "顺平",
        "province": "河北",
        "cityPinyin": "shunping",
        "cityCode": "101090216"
      },
      {
        "cityName": "雄县",
        "province": "河北",
        "cityPinyin": "xiongxian",
        "cityCode": "101090217"
      },
      {
        "cityName": "涿州",
        "province": "河北",
        "cityPinyin": "zhuozhou",
        "cityCode": "101090218"
      },
      {
        "cityName": "定州",
        "province": "河北",
        "cityPinyin": "dingzhou",
        "cityCode": "101090219"
      },
      {
        "cityName": "安国",
        "province": "河北",
        "cityPinyin": "anguo",
        "cityCode": "101090220"
      },
      {
        "cityName": "高碑店",
        "province": "河北",
        "cityPinyin": "gaobeidian",
        "cityCode": "101090221"
      },
      {
        "cityName": "涞水",
        "province": "河北",
        "cityPinyin": "laishui",
        "cityCode": "101090222"
      },
      {
        "cityName": "定兴",
        "province": "河北",
        "cityPinyin": "dingxing",
        "cityCode": "101090223"
      },
      {
        "cityName": "清苑",
        "province": "河北",
        "cityPinyin": "qingyuan",
        "cityCode": "101090224"
      },
      {
        "cityName": "博野",
        "province": "河北",
        "cityPinyin": "boye",
        "cityCode": "101090225"
      },
      {
        "cityName": "张家口",
        "province": "河北",
        "cityPinyin": "zhangjiakou",
        "cityCode": "101090301"
      },
      {
        "cityName": "宣化",
        "province": "河北",
        "cityPinyin": "xuanhua",
        "cityCode": "101090302"
      },
      {
        "cityName": "张北",
        "province": "河北",
        "cityPinyin": "zhangbei",
        "cityCode": "101090303"
      },
      {
        "cityName": "康保",
        "province": "河北",
        "cityPinyin": "kangbao",
        "cityCode": "101090304"
      },
      {
        "cityName": "沽源",
        "province": "河北",
        "cityPinyin": "guyuan",
        "cityCode": "101090305"
      },
      {
        "cityName": "尚义",
        "province": "河北",
        "cityPinyin": "shangyi",
        "cityCode": "101090306"
      },
      {
        "cityName": "蔚县",
        "province": "河北",
        "cityPinyin": "yuxian",
        "cityCode": "101090307"
      },
      {
        "cityName": "阳原",
        "province": "河北",
        "cityPinyin": "yangyuan",
        "cityCode": "101090308"
      },
      {
        "cityName": "怀安",
        "province": "河北",
        "cityPinyin": "huaian",
        "cityCode": "101090309"
      },
      {
        "cityName": "万全",
        "province": "河北",
        "cityPinyin": "wanquan",
        "cityCode": "101090310"
      },
      {
        "cityName": "怀来",
        "province": "河北",
        "cityPinyin": "huailai",
        "cityCode": "101090311"
      },
      {
        "cityName": "涿鹿",
        "province": "河北",
        "cityPinyin": "zhuolu",
        "cityCode": "101090312"
      },
      {
        "cityName": "赤城",
        "province": "河北",
        "cityPinyin": "chicheng",
        "cityCode": "101090313"
      },
      {
        "cityName": "崇礼",
        "province": "河北",
        "cityPinyin": "chongli",
        "cityCode": "101090314"
      },
      {
        "cityName": "承德",
        "province": "河北",
        "cityPinyin": "chengde",
        "cityCode": "101090402"
      },
      {
        "cityName": "承德县",
        "province": "河北",
        "cityPinyin": "chengdexian",
        "cityCode": "101090403"
      },
      {
        "cityName": "兴隆",
        "province": "河北",
        "cityPinyin": "xinglong",
        "cityCode": "101090404"
      },
      {
        "cityName": "平泉",
        "province": "河北",
        "cityPinyin": "pingquan",
        "cityCode": "101090405"
      },
      {
        "cityName": "滦平",
        "province": "河北",
        "cityPinyin": "luanping",
        "cityCode": "101090406"
      },
      {
        "cityName": "隆化",
        "province": "河北",
        "cityPinyin": "longhua",
        "cityCode": "101090407"
      },
      {
        "cityName": "丰宁",
        "province": "河北",
        "cityPinyin": "fengning",
        "cityCode": "101090408"
      },
      {
        "cityName": "宽城",
        "province": "河北",
        "cityPinyin": "kuancheng",
        "cityCode": "101090409"
      },
      {
        "cityName": "围场",
        "province": "河北",
        "cityPinyin": "weichang",
        "cityCode": "101090410"
      },
      {
        "cityName": "唐山",
        "province": "河北",
        "cityPinyin": "tangshan",
        "cityCode": "101090501"
      },
      {
        "cityName": "丰南",
        "province": "河北",
        "cityPinyin": "fengnan",
        "cityCode": "101090502"
      },
      {
        "cityName": "丰润",
        "province": "河北",
        "cityPinyin": "fengrun",
        "cityCode": "101090503"
      },
      {
        "cityName": "滦县",
        "province": "河北",
        "cityPinyin": "luanxian",
        "cityCode": "101090504"
      },
      {
        "cityName": "滦南",
        "province": "河北",
        "cityPinyin": "luannan",
        "cityCode": "101090505"
      },
      {
        "cityName": "乐亭",
        "province": "河北",
        "cityPinyin": "leting",
        "cityCode": "101090506"
      },
      {
        "cityName": "迁西",
        "province": "河北",
        "cityPinyin": "qianxi",
        "cityCode": "101090507"
      },
      {
        "cityName": "玉田",
        "province": "河北",
        "cityPinyin": "yutian",
        "cityCode": "101090508"
      },
      {
        "cityName": "唐海",
        "province": "河北",
        "cityPinyin": "tanghai",
        "cityCode": "101090509"
      },
      {
        "cityName": "遵化",
        "province": "河北",
        "cityPinyin": "zunhua",
        "cityCode": "101090510"
      },
      {
        "cityName": "迁安",
        "province": "河北",
        "cityPinyin": "qianan",
        "cityCode": "101090511"
      },
      {
        "cityName": "曹妃甸",
        "province": "河北",
        "cityPinyin": "caofeidian",
        "cityCode": "101090512"
      },
      {
        "cityName": "廊坊",
        "province": "河北",
        "cityPinyin": "langfang",
        "cityCode": "101090601"
      },
      {
        "cityName": "固安",
        "province": "河北",
        "cityPinyin": "guan",
        "cityCode": "101090602"
      },
      {
        "cityName": "永清",
        "province": "河北",
        "cityPinyin": "yongqing",
        "cityCode": "101090603"
      },
      {
        "cityName": "香河",
        "province": "河北",
        "cityPinyin": "xianghe",
        "cityCode": "101090604"
      },
      {
        "cityName": "大城",
        "province": "河北",
        "cityPinyin": "dacheng",
        "cityCode": "101090605"
      },
      {
        "cityName": "文安",
        "province": "河北",
        "cityPinyin": "wenan",
        "cityCode": "101090606"
      },
      {
        "cityName": "大厂",
        "province": "河北",
        "cityPinyin": "dachang",
        "cityCode": "101090607"
      },
      {
        "cityName": "霸州",
        "province": "河北",
        "cityPinyin": "bazhou",
        "cityCode": "101090608"
      },
      {
        "cityName": "三河",
        "province": "河北",
        "cityPinyin": "sanhe",
        "cityCode": "101090609"
      },
      {
        "cityName": "沧州",
        "province": "河北",
        "cityPinyin": "cangzhou",
        "cityCode": "101090701"
      },
      {
        "cityName": "青县",
        "province": "河北",
        "cityPinyin": "qingxian",
        "cityCode": "101090702"
      },
      {
        "cityName": "东光",
        "province": "河北",
        "cityPinyin": "dongguang",
        "cityCode": "101090703"
      },
      {
        "cityName": "海兴",
        "province": "河北",
        "cityPinyin": "haixing",
        "cityCode": "101090704"
      },
      {
        "cityName": "盐山",
        "province": "河北",
        "cityPinyin": "yanshan",
        "cityCode": "101090705"
      },
      {
        "cityName": "肃宁",
        "province": "河北",
        "cityPinyin": "suning",
        "cityCode": "101090706"
      },
      {
        "cityName": "南皮",
        "province": "河北",
        "cityPinyin": "nanpi",
        "cityCode": "101090707"
      },
      {
        "cityName": "吴桥",
        "province": "河北",
        "cityPinyin": "wuqiao",
        "cityCode": "101090708"
      },
      {
        "cityName": "献县",
        "province": "河北",
        "cityPinyin": "xianxian",
        "cityCode": "101090709"
      },
      {
        "cityName": "孟村",
        "province": "河北",
        "cityPinyin": "mengcun",
        "cityCode": "101090710"
      },
      {
        "cityName": "泊头",
        "province": "河北",
        "cityPinyin": "botou",
        "cityCode": "101090711"
      },
      {
        "cityName": "任丘",
        "province": "河北",
        "cityPinyin": "renqiu",
        "cityCode": "101090712"
      },
      {
        "cityName": "黄骅",
        "province": "河北",
        "cityPinyin": "huanghua",
        "cityCode": "101090713"
      },
      {
        "cityName": "河间",
        "province": "河北",
        "cityPinyin": "hejian",
        "cityCode": "101090714"
      },
      {
        "cityName": "沧县",
        "province": "河北",
        "cityPinyin": "cangxian",
        "cityCode": "101090716"
      },
      {
        "cityName": "衡水",
        "province": "河北",
        "cityPinyin": "hengshui",
        "cityCode": "101090801"
      },
      {
        "cityName": "枣强",
        "province": "河北",
        "cityPinyin": "zaoqiang",
        "cityCode": "101090802"
      },
      {
        "cityName": "武邑",
        "province": "河北",
        "cityPinyin": "wuyi",
        "cityCode": "101090803"
      },
      {
        "cityName": "武强",
        "province": "河北",
        "cityPinyin": "wuqiang",
        "cityCode": "101090804"
      },
      {
        "cityName": "饶阳",
        "province": "河北",
        "cityPinyin": "raoyang",
        "cityCode": "101090805"
      },
      {
        "cityName": "安平",
        "province": "河北",
        "cityPinyin": "anping",
        "cityCode": "101090806"
      },
      {
        "cityName": "故城",
        "province": "河北",
        "cityPinyin": "gucheng",
        "cityCode": "101090807"
      },
      {
        "cityName": "景县",
        "province": "河北",
        "cityPinyin": "jingxian",
        "cityCode": "101090808"
      },
      {
        "cityName": "阜城",
        "province": "河北",
        "cityPinyin": "fucheng",
        "cityCode": "101090809"
      },
      {
        "cityName": "冀州",
        "province": "河北",
        "cityPinyin": "jizhou",
        "cityCode": "101090810"
      },
      {
        "cityName": "深州",
        "province": "河北",
        "cityPinyin": "shenzhou",
        "cityCode": "101090811"
      },
      {
        "cityName": "邢台",
        "province": "河北",
        "cityPinyin": "xingtai",
        "cityCode": "101090901"
      },
      {
        "cityName": "临城",
        "province": "河北",
        "cityPinyin": "lincheng",
        "cityCode": "101090902"
      },
      {
        "cityName": "内丘",
        "province": "河北",
        "cityPinyin": "neiqiu",
        "cityCode": "101090904"
      },
      {
        "cityName": "柏乡",
        "province": "河北",
        "cityPinyin": "baixiang",
        "cityCode": "101090905"
      },
      {
        "cityName": "隆尧",
        "province": "河北",
        "cityPinyin": "longyao",
        "cityCode": "101090906"
      },
      {
        "cityName": "南和",
        "province": "河北",
        "cityPinyin": "nanhe",
        "cityCode": "101090907"
      },
      {
        "cityName": "宁晋",
        "province": "河北",
        "cityPinyin": "ningjin",
        "cityCode": "101090908"
      },
      {
        "cityName": "巨鹿",
        "province": "河北",
        "cityPinyin": "julu",
        "cityCode": "101090909"
      },
      {
        "cityName": "新河",
        "province": "河北",
        "cityPinyin": "xinhe",
        "cityCode": "101090910"
      },
      {
        "cityName": "广宗",
        "province": "河北",
        "cityPinyin": "guangzong",
        "cityCode": "101090911"
      },
      {
        "cityName": "平乡",
        "province": "河北",
        "cityPinyin": "pingxiang",
        "cityCode": "101090912"
      },
      {
        "cityName": "威县",
        "province": "河北",
        "cityPinyin": "weixian",
        "cityCode": "101090913"
      },
      {
        "cityName": "清河",
        "province": "河北",
        "cityPinyin": "qinghe",
        "cityCode": "101090914"
      },
      {
        "cityName": "临西",
        "province": "河北",
        "cityPinyin": "linxi",
        "cityCode": "101090915"
      },
      {
        "cityName": "南宫",
        "province": "河北",
        "cityPinyin": "nangong",
        "cityCode": "101090916"
      },
      {
        "cityName": "沙河",
        "province": "河北",
        "cityPinyin": "shahe",
        "cityCode": "101090917"
      },
      {
        "cityName": "任县",
        "province": "河北",
        "cityPinyin": "renxian",
        "cityCode": "101090918"
      },
      {
        "cityName": "邯郸",
        "province": "河北",
        "cityPinyin": "handan",
        "cityCode": "101091001"
      },
      {
        "cityName": "峰峰",
        "province": "河北",
        "cityPinyin": "fengfeng",
        "cityCode": "101091002"
      },
      {
        "cityName": "临漳",
        "province": "河北",
        "cityPinyin": "linzhang",
        "cityCode": "101091003"
      },
      {
        "cityName": "成安",
        "province": "河北",
        "cityPinyin": "chengan",
        "cityCode": "101091004"
      },
      {
        "cityName": "大名",
        "province": "河北",
        "cityPinyin": "daming",
        "cityCode": "101091005"
      },
      {
        "cityName": "涉县",
        "province": "河北",
        "cityPinyin": "shexian",
        "cityCode": "101091006"
      },
      {
        "cityName": "磁县",
        "province": "河北",
        "cityPinyin": "cixian",
        "cityCode": "101091007"
      },
      {
        "cityName": "肥乡",
        "province": "河北",
        "cityPinyin": "feixiang",
        "cityCode": "101091008"
      },
      {
        "cityName": "永年",
        "province": "河北",
        "cityPinyin": "yongnian",
        "cityCode": "101091009"
      },
      {
        "cityName": "邱县",
        "province": "河北",
        "cityPinyin": "qiuxian",
        "cityCode": "101091010"
      },
      {
        "cityName": "鸡泽",
        "province": "河北",
        "cityPinyin": "jize",
        "cityCode": "101091011"
      },
      {
        "cityName": "广平",
        "province": "河北",
        "cityPinyin": "guangping",
        "cityCode": "101091012"
      },
      {
        "cityName": "馆陶",
        "province": "河北",
        "cityPinyin": "guantao",
        "cityCode": "101091013"
      },
      {
        "cityName": "魏县",
        "province": "河北",
        "cityPinyin": "weixian",
        "cityCode": "101091014"
      },
      {
        "cityName": "曲周",
        "province": "河北",
        "cityPinyin": "quzhou",
        "cityCode": "101091015"
      },
      {
        "cityName": "武安",
        "province": "河北",
        "cityPinyin": "wuan",
        "cityCode": "101091016"
      },
      {
        "cityName": "秦皇岛",
        "province": "河北",
        "cityPinyin": "qinhuangdao",
        "cityCode": "101091101"
      },
      {
        "cityName": "青龙",
        "province": "河北",
        "cityPinyin": "qinglong",
        "cityCode": "101091102"
      },
      {
        "cityName": "昌黎",
        "province": "河北",
        "cityPinyin": "changli",
        "cityCode": "101091103"
      },
      {
        "cityName": "抚宁",
        "province": "河北",
        "cityPinyin": "funing",
        "cityCode": "101091104"
      },
      {
        "cityName": "卢龙",
        "province": "河北",
        "cityPinyin": "lulong",
        "cityCode": "101091105"
      },
      {
        "cityName": "北戴河",
        "province": "河北",
        "cityPinyin": "beidaihe",
        "cityCode": "101091106"
      },
      {
        "cityName": "山西",
        "province": "山西",
        "cityPinyin": "taiyuan",
        "cityCode": "101100101"
      },
      {
        "cityName": "太原",
        "province": "山西",
        "cityPinyin": "taiyuan",
        "cityCode": "101100101"
      },
      {
        "cityName": "清徐",
        "province": "山西",
        "cityPinyin": "qingxu",
        "cityCode": "101100102"
      },
      {
        "cityName": "阳曲",
        "province": "山西",
        "cityPinyin": "yangqu",
        "cityCode": "101100103"
      },
      {
        "cityName": "娄烦",
        "province": "山西",
        "cityPinyin": "loufan",
        "cityCode": "101100104"
      },
      {
        "cityName": "古交",
        "province": "山西",
        "cityPinyin": "gujiao",
        "cityCode": "101100105"
      },
      {
        "cityName": "尖草坪区",
        "province": "山西",
        "cityPinyin": "jiancaopingqu",
        "cityCode": "101100106"
      },
      {
        "cityName": "小店区",
        "province": "山西",
        "cityPinyin": "xiaodianqu",
        "cityCode": "101100107"
      },
      {
        "cityName": "大同",
        "province": "山西",
        "cityPinyin": "datong",
        "cityCode": "101100201"
      },
      {
        "cityName": "阳高",
        "province": "山西",
        "cityPinyin": "yanggao",
        "cityCode": "101100202"
      },
      {
        "cityName": "大同县",
        "province": "山西",
        "cityPinyin": "datongxian",
        "cityCode": "101100203"
      },
      {
        "cityName": "天镇",
        "province": "山西",
        "cityPinyin": "tianzhen",
        "cityCode": "101100204"
      },
      {
        "cityName": "广灵",
        "province": "山西",
        "cityPinyin": "guangling",
        "cityCode": "101100205"
      },
      {
        "cityName": "灵丘",
        "province": "山西",
        "cityPinyin": "lingqiu",
        "cityCode": "101100206"
      },
      {
        "cityName": "浑源",
        "province": "山西",
        "cityPinyin": "hunyuan",
        "cityCode": "101100207"
      },
      {
        "cityName": "左云",
        "province": "山西",
        "cityPinyin": "zuoyun",
        "cityCode": "101100208"
      },
      {
        "cityName": "阳泉",
        "province": "山西",
        "cityPinyin": "yangquan",
        "cityCode": "101100301"
      },
      {
        "cityName": "盂县",
        "province": "山西",
        "cityPinyin": "yuxian",
        "cityCode": "101100302"
      },
      {
        "cityName": "平定",
        "province": "山西",
        "cityPinyin": "pingding",
        "cityCode": "101100303"
      },
      {
        "cityName": "晋中",
        "province": "山西",
        "cityPinyin": "jinzhong",
        "cityCode": "101100401"
      },
      {
        "cityName": "榆次",
        "province": "山西",
        "cityPinyin": "yuci",
        "cityCode": "101100402"
      },
      {
        "cityName": "榆社",
        "province": "山西",
        "cityPinyin": "yushe",
        "cityCode": "101100403"
      },
      {
        "cityName": "左权",
        "province": "山西",
        "cityPinyin": "zuoquan",
        "cityCode": "101100404"
      },
      {
        "cityName": "和顺",
        "province": "山西",
        "cityPinyin": "heshun",
        "cityCode": "101100405"
      },
      {
        "cityName": "昔阳",
        "province": "山西",
        "cityPinyin": "xiyang",
        "cityCode": "101100406"
      },
      {
        "cityName": "寿阳",
        "province": "山西",
        "cityPinyin": "shouyang",
        "cityCode": "101100407"
      },
      {
        "cityName": "太谷",
        "province": "山西",
        "cityPinyin": "taigu",
        "cityCode": "101100408"
      },
      {
        "cityName": "祁县",
        "province": "山西",
        "cityPinyin": "qixian",
        "cityCode": "101100409"
      },
      {
        "cityName": "平遥",
        "province": "山西",
        "cityPinyin": "pingyao",
        "cityCode": "101100410"
      },
      {
        "cityName": "灵石",
        "province": "山西",
        "cityPinyin": "lingshi",
        "cityCode": "101100411"
      },
      {
        "cityName": "介休",
        "province": "山西",
        "cityPinyin": "jiexiu",
        "cityCode": "101100412"
      },
      {
        "cityName": "长治",
        "province": "山西",
        "cityPinyin": "changzhi",
        "cityCode": "101100501"
      },
      {
        "cityName": "黎城",
        "province": "山西",
        "cityPinyin": "licheng",
        "cityCode": "101100502"
      },
      {
        "cityName": "屯留",
        "province": "山西",
        "cityPinyin": "tunliu",
        "cityCode": "101100503"
      },
      {
        "cityName": "潞城",
        "province": "山西",
        "cityPinyin": "lucheng",
        "cityCode": "101100504"
      },
      {
        "cityName": "襄垣",
        "province": "山西",
        "cityPinyin": "xiangyuan",
        "cityCode": "101100505"
      },
      {
        "cityName": "平顺",
        "province": "山西",
        "cityPinyin": "pingshun",
        "cityCode": "101100506"
      },
      {
        "cityName": "武乡",
        "province": "山西",
        "cityPinyin": "wuxiang",
        "cityCode": "101100507"
      },
      {
        "cityName": "沁县",
        "province": "山西",
        "cityPinyin": "qinxian",
        "cityCode": "101100508"
      },
      {
        "cityName": "长子",
        "province": "山西",
        "cityPinyin": "zhangzi",
        "cityCode": "101100509"
      },
      {
        "cityName": "沁源",
        "province": "山西",
        "cityPinyin": "qinyuan",
        "cityCode": "101100510"
      },
      {
        "cityName": "壶关",
        "province": "山西",
        "cityPinyin": "huguan",
        "cityCode": "101100511"
      },
      {
        "cityName": "晋城",
        "province": "山西",
        "cityPinyin": "jincheng",
        "cityCode": "101100601"
      },
      {
        "cityName": "沁水",
        "province": "山西",
        "cityPinyin": "qinshui",
        "cityCode": "101100602"
      },
      {
        "cityName": "阳城",
        "province": "山西",
        "cityPinyin": "yangcheng",
        "cityCode": "101100603"
      },
      {
        "cityName": "陵川",
        "province": "山西",
        "cityPinyin": "lingchuan",
        "cityCode": "101100604"
      },
      {
        "cityName": "高平",
        "province": "山西",
        "cityPinyin": "gaoping",
        "cityCode": "101100605"
      },
      {
        "cityName": "泽州",
        "province": "山西",
        "cityPinyin": "zezhou",
        "cityCode": "101100606"
      },
      {
        "cityName": "临汾",
        "province": "山西",
        "cityPinyin": "linfen",
        "cityCode": "101100701"
      },
      {
        "cityName": "曲沃",
        "province": "山西",
        "cityPinyin": "quwo",
        "cityCode": "101100702"
      },
      {
        "cityName": "永和",
        "province": "山西",
        "cityPinyin": "yonghe",
        "cityCode": "101100703"
      },
      {
        "cityName": "隰县",
        "province": "山西",
        "cityPinyin": "xixian",
        "cityCode": "101100704"
      },
      {
        "cityName": "大宁",
        "province": "山西",
        "cityPinyin": "daning",
        "cityCode": "101100705"
      },
      {
        "cityName": "吉县",
        "province": "山西",
        "cityPinyin": "jixian",
        "cityCode": "101100706"
      },
      {
        "cityName": "襄汾",
        "province": "山西",
        "cityPinyin": "xiangfen",
        "cityCode": "101100707"
      },
      {
        "cityName": "蒲县",
        "province": "山西",
        "cityPinyin": "puxian",
        "cityCode": "101100708"
      },
      {
        "cityName": "汾西",
        "province": "山西",
        "cityPinyin": "fenxi",
        "cityCode": "101100709"
      },
      {
        "cityName": "洪洞",
        "province": "山西",
        "cityPinyin": "hongtong",
        "cityCode": "101100710"
      },
      {
        "cityName": "霍州",
        "province": "山西",
        "cityPinyin": "huozhou",
        "cityCode": "101100711"
      },
      {
        "cityName": "乡宁",
        "province": "山西",
        "cityPinyin": "xiangning",
        "cityCode": "101100712"
      },
      {
        "cityName": "翼城",
        "province": "山西",
        "cityPinyin": "yicheng",
        "cityCode": "101100713"
      },
      {
        "cityName": "侯马",
        "province": "山西",
        "cityPinyin": "houma",
        "cityCode": "101100714"
      },
      {
        "cityName": "浮山",
        "province": "山西",
        "cityPinyin": "fushan",
        "cityCode": "101100715"
      },
      {
        "cityName": "安泽",
        "province": "山西",
        "cityPinyin": "anze",
        "cityCode": "101100716"
      },
      {
        "cityName": "古县",
        "province": "山西",
        "cityPinyin": "guxian",
        "cityCode": "101100717"
      },
      {
        "cityName": "运城",
        "province": "山西",
        "cityPinyin": "yuncheng",
        "cityCode": "101100801"
      },
      {
        "cityName": "临猗",
        "province": "山西",
        "cityPinyin": "linyi",
        "cityCode": "101100802"
      },
      {
        "cityName": "稷山",
        "province": "山西",
        "cityPinyin": "jishan",
        "cityCode": "101100803"
      },
      {
        "cityName": "万荣",
        "province": "山西",
        "cityPinyin": "wanrong",
        "cityCode": "101100804"
      },
      {
        "cityName": "河津",
        "province": "山西",
        "cityPinyin": "hejin",
        "cityCode": "101100805"
      },
      {
        "cityName": "新绛",
        "province": "山西",
        "cityPinyin": "xinjiang",
        "cityCode": "101100806"
      },
      {
        "cityName": "绛县",
        "province": "山西",
        "cityPinyin": "jiangxian",
        "cityCode": "101100807"
      },
      {
        "cityName": "闻喜",
        "province": "山西",
        "cityPinyin": "wenxi",
        "cityCode": "101100808"
      },
      {
        "cityName": "垣曲",
        "province": "山西",
        "cityPinyin": "yuanqu",
        "cityCode": "101100809"
      },
      {
        "cityName": "永济",
        "province": "山西",
        "cityPinyin": "yongji",
        "cityCode": "101100810"
      },
      {
        "cityName": "芮城",
        "province": "山西",
        "cityPinyin": "ruicheng",
        "cityCode": "101100811"
      },
      {
        "cityName": "夏县",
        "province": "山西",
        "cityPinyin": "xiaxian",
        "cityCode": "101100812"
      },
      {
        "cityName": "平陆",
        "province": "山西",
        "cityPinyin": "pinglu",
        "cityCode": "101100813"
      },
      {
        "cityName": "朔州",
        "province": "山西",
        "cityPinyin": "shuozhou",
        "cityCode": "101100901"
      },
      {
        "cityName": "平鲁",
        "province": "山西",
        "cityPinyin": "pinglu",
        "cityCode": "101100902"
      },
      {
        "cityName": "山阴",
        "province": "山西",
        "cityPinyin": "shanyin",
        "cityCode": "101100903"
      },
      {
        "cityName": "右玉",
        "province": "山西",
        "cityPinyin": "youyu",
        "cityCode": "101100904"
      },
      {
        "cityName": "应县",
        "province": "山西",
        "cityPinyin": "yingxian",
        "cityCode": "101100905"
      },
      {
        "cityName": "怀仁",
        "province": "山西",
        "cityPinyin": "huairen",
        "cityCode": "101100906"
      },
      {
        "cityName": "忻州",
        "province": "山西",
        "cityPinyin": "xinzhou",
        "cityCode": "101101001"
      },
      {
        "cityName": "定襄",
        "province": "山西",
        "cityPinyin": "dingxiang",
        "cityCode": "101101002"
      },
      {
        "cityName": "五台县",
        "province": "山西",
        "cityPinyin": "wutaixian",
        "cityCode": "101101003"
      },
      {
        "cityName": "河曲",
        "province": "山西",
        "cityPinyin": "hequ",
        "cityCode": "101101004"
      },
      {
        "cityName": "偏关",
        "province": "山西",
        "cityPinyin": "pianguan",
        "cityCode": "101101005"
      },
      {
        "cityName": "神池",
        "province": "山西",
        "cityPinyin": "shenchi",
        "cityCode": "101101006"
      },
      {
        "cityName": "宁武",
        "province": "山西",
        "cityPinyin": "ningwu",
        "cityCode": "101101007"
      },
      {
        "cityName": "代县",
        "province": "山西",
        "cityPinyin": "daixian",
        "cityCode": "101101008"
      },
      {
        "cityName": "繁峙",
        "province": "山西",
        "cityPinyin": "fanshi",
        "cityCode": "101101009"
      },
      {
        "cityName": "五台山",
        "province": "山西",
        "cityPinyin": "wutaishan",
        "cityCode": "101101010"
      },
      {
        "cityName": "保德",
        "province": "山西",
        "cityPinyin": "bode",
        "cityCode": "101101011"
      },
      {
        "cityName": "静乐",
        "province": "山西",
        "cityPinyin": "jingle",
        "cityCode": "101101012"
      },
      {
        "cityName": "岢岚",
        "province": "山西",
        "cityPinyin": "kelan",
        "cityCode": "101101013"
      },
      {
        "cityName": "五寨",
        "province": "山西",
        "cityPinyin": "wuzhai",
        "cityCode": "101101014"
      },
      {
        "cityName": "原平",
        "province": "山西",
        "cityPinyin": "yuanping",
        "cityCode": "101101015"
      },
      {
        "cityName": "吕梁",
        "province": "山西",
        "cityPinyin": "lvliang",
        "cityCode": "101101100"
      },
      {
        "cityName": "离石",
        "province": "山西",
        "cityPinyin": "lishi",
        "cityCode": "101101101"
      },
      {
        "cityName": "临县",
        "province": "山西",
        "cityPinyin": "linxian",
        "cityCode": "101101102"
      },
      {
        "cityName": "兴县",
        "province": "山西",
        "cityPinyin": "xingxian",
        "cityCode": "101101103"
      },
      {
        "cityName": "岚县",
        "province": "山西",
        "cityPinyin": "lanxian",
        "cityCode": "101101104"
      },
      {
        "cityName": "柳林",
        "province": "山西",
        "cityPinyin": "liulin",
        "cityCode": "101101105"
      },
      {
        "cityName": "石楼",
        "province": "山西",
        "cityPinyin": "shilou",
        "cityCode": "101101106"
      },
      {
        "cityName": "方山",
        "province": "山西",
        "cityPinyin": "fangshan",
        "cityCode": "101101107"
      },
      {
        "cityName": "交口",
        "province": "山西",
        "cityPinyin": "jiaokou",
        "cityCode": "101101108"
      },
      {
        "cityName": "中阳",
        "province": "山西",
        "cityPinyin": "zhongyang",
        "cityCode": "101101109"
      },
      {
        "cityName": "孝义",
        "province": "山西",
        "cityPinyin": "xiaoyi",
        "cityCode": "101101110"
      },
      {
        "cityName": "汾阳",
        "province": "山西",
        "cityPinyin": "fenyang",
        "cityCode": "101101111"
      },
      {
        "cityName": "文水",
        "province": "山西",
        "cityPinyin": "wenshui",
        "cityCode": "101101112"
      },
      {
        "cityName": "交城",
        "province": "山西",
        "cityPinyin": "jiaocheng",
        "cityCode": "101101113"
      },
      {
        "cityName": "陕西",
        "province": "陕西",
        "cityPinyin": "xian",
        "cityCode": "101110101"
      },
      {
        "cityName": "西安",
        "province": "陕西",
        "cityPinyin": "xian",
        "cityCode": "101110101"
      },
      {
        "cityName": "长安",
        "province": "陕西",
        "cityPinyin": "changan",
        "cityCode": "101110102"
      },
      {
        "cityName": "临潼",
        "province": "陕西",
        "cityPinyin": "lintong",
        "cityCode": "101110103"
      },
      {
        "cityName": "蓝田",
        "province": "陕西",
        "cityPinyin": "lantian",
        "cityCode": "101110104"
      },
      {
        "cityName": "周至",
        "province": "陕西",
        "cityPinyin": "zhouzhi",
        "cityCode": "101110105"
      },
      {
        "cityName": "户县",
        "province": "陕西",
        "cityPinyin": "huxian",
        "cityCode": "101110106"
      },
      {
        "cityName": "高陵",
        "province": "陕西",
        "cityPinyin": "gaoling",
        "cityCode": "101110107"
      },
      {
        "cityName": "咸阳",
        "province": "陕西",
        "cityPinyin": "xianyang",
        "cityCode": "101110200"
      },
      {
        "cityName": "三原",
        "province": "陕西",
        "cityPinyin": "sanyuan",
        "cityCode": "101110201"
      },
      {
        "cityName": "礼泉",
        "province": "陕西",
        "cityPinyin": "liquan",
        "cityCode": "101110202"
      },
      {
        "cityName": "永寿",
        "province": "陕西",
        "cityPinyin": "yongshou",
        "cityCode": "101110203"
      },
      {
        "cityName": "淳化",
        "province": "陕西",
        "cityPinyin": "chunhua",
        "cityCode": "101110204"
      },
      {
        "cityName": "泾阳",
        "province": "陕西",
        "cityPinyin": "jingyang",
        "cityCode": "101110205"
      },
      {
        "cityName": "武功",
        "province": "陕西",
        "cityPinyin": "wugong",
        "cityCode": "101110206"
      },
      {
        "cityName": "乾县",
        "province": "陕西",
        "cityPinyin": "qianxian",
        "cityCode": "101110207"
      },
      {
        "cityName": "彬县",
        "province": "陕西",
        "cityPinyin": "binxian",
        "cityCode": "101110208"
      },
      {
        "cityName": "长武",
        "province": "陕西",
        "cityPinyin": "changwu",
        "cityCode": "101110209"
      },
      {
        "cityName": "旬邑",
        "province": "陕西",
        "cityPinyin": "xunyi",
        "cityCode": "101110210"
      },
      {
        "cityName": "兴平",
        "province": "陕西",
        "cityPinyin": "xingping",
        "cityCode": "101110211"
      },
      {
        "cityName": "延安",
        "province": "陕西",
        "cityPinyin": "yanan",
        "cityCode": "101110300"
      },
      {
        "cityName": "延长",
        "province": "陕西",
        "cityPinyin": "yanchang",
        "cityCode": "101110301"
      },
      {
        "cityName": "延川",
        "province": "陕西",
        "cityPinyin": "yanchuan",
        "cityCode": "101110302"
      },
      {
        "cityName": "子长",
        "province": "陕西",
        "cityPinyin": "zichang",
        "cityCode": "101110303"
      },
      {
        "cityName": "宜川",
        "province": "陕西",
        "cityPinyin": "yichuan",
        "cityCode": "101110304"
      },
      {
        "cityName": "富县",
        "province": "陕西",
        "cityPinyin": "fuxian",
        "cityCode": "101110305"
      },
      {
        "cityName": "志丹",
        "province": "陕西",
        "cityPinyin": "zhidan",
        "cityCode": "101110306"
      },
      {
        "cityName": "安塞",
        "province": "陕西",
        "cityPinyin": "ansai",
        "cityCode": "101110307"
      },
      {
        "cityName": "甘泉",
        "province": "陕西",
        "cityPinyin": "ganquan",
        "cityCode": "101110308"
      },
      {
        "cityName": "洛川",
        "province": "陕西",
        "cityPinyin": "luochuan",
        "cityCode": "101110309"
      },
      {
        "cityName": "黄陵",
        "province": "陕西",
        "cityPinyin": "huangling",
        "cityCode": "101110310"
      },
      {
        "cityName": "黄龙",
        "province": "陕西",
        "cityPinyin": "huanglong",
        "cityCode": "101110311"
      },
      {
        "cityName": "吴起",
        "province": "陕西",
        "cityPinyin": "wuqi",
        "cityCode": "101110312"
      },
      {
        "cityName": "榆林",
        "province": "陕西",
        "cityPinyin": "yulin",
        "cityCode": "101110401"
      },
      {
        "cityName": "府谷",
        "province": "陕西",
        "cityPinyin": "fugu",
        "cityCode": "101110402"
      },
      {
        "cityName": "神木",
        "province": "陕西",
        "cityPinyin": "shenmu",
        "cityCode": "101110403"
      },
      {
        "cityName": "佳县",
        "province": "陕西",
        "cityPinyin": "jiaxian",
        "cityCode": "101110404"
      },
      {
        "cityName": "定边",
        "province": "陕西",
        "cityPinyin": "dingbian",
        "cityCode": "101110405"
      },
      {
        "cityName": "靖边",
        "province": "陕西",
        "cityPinyin": "jingbian",
        "cityCode": "101110406"
      },
      {
        "cityName": "横山",
        "province": "陕西",
        "cityPinyin": "hengshan",
        "cityCode": "101110407"
      },
      {
        "cityName": "米脂",
        "province": "陕西",
        "cityPinyin": "mizhi",
        "cityCode": "101110408"
      },
      {
        "cityName": "子洲",
        "province": "陕西",
        "cityPinyin": "zizhou",
        "cityCode": "101110409"
      },
      {
        "cityName": "绥德",
        "province": "陕西",
        "cityPinyin": "suide",
        "cityCode": "101110410"
      },
      {
        "cityName": "吴堡",
        "province": "陕西",
        "cityPinyin": "wubu",
        "cityCode": "101110411"
      },
      {
        "cityName": "清涧",
        "province": "陕西",
        "cityPinyin": "jingjian",
        "cityCode": "101110412"
      },
      {
        "cityName": "榆阳",
        "province": "陕西",
        "cityPinyin": "yuyang",
        "cityCode": "101110413"
      },
      {
        "cityName": "渭南",
        "province": "陕西",
        "cityPinyin": "weinan",
        "cityCode": "101110501"
      },
      {
        "cityName": "华县",
        "province": "陕西",
        "cityPinyin": "huaxian",
        "cityCode": "101110502"
      },
      {
        "cityName": "潼关",
        "province": "陕西",
        "cityPinyin": "tongguan",
        "cityCode": "101110503"
      },
      {
        "cityName": "大荔",
        "province": "陕西",
        "cityPinyin": "dali",
        "cityCode": "101110504"
      },
      {
        "cityName": "白水",
        "province": "陕西",
        "cityPinyin": "baishui",
        "cityCode": "101110505"
      },
      {
        "cityName": "富平",
        "province": "陕西",
        "cityPinyin": "fuping",
        "cityCode": "101110506"
      },
      {
        "cityName": "蒲城",
        "province": "陕西",
        "cityPinyin": "pucheng",
        "cityCode": "101110507"
      },
      {
        "cityName": "澄城",
        "province": "陕西",
        "cityPinyin": "chengcheng",
        "cityCode": "101110508"
      },
      {
        "cityName": "合阳",
        "province": "陕西",
        "cityPinyin": "heyang",
        "cityCode": "101110509"
      },
      {
        "cityName": "韩城",
        "province": "陕西",
        "cityPinyin": "hancheng",
        "cityCode": "101110510"
      },
      {
        "cityName": "华阴",
        "province": "陕西",
        "cityPinyin": "huayin",
        "cityCode": "101110511"
      },
      {
        "cityName": "商洛",
        "province": "陕西",
        "cityPinyin": "shangluo",
        "cityCode": "101110601"
      },
      {
        "cityName": "洛南",
        "province": "陕西",
        "cityPinyin": "luonan",
        "cityCode": "101110602"
      },
      {
        "cityName": "柞水",
        "province": "陕西",
        "cityPinyin": "zhashui",
        "cityCode": "101110603"
      },
      {
        "cityName": "商州",
        "province": "陕西",
        "cityPinyin": "shangxian",
        "cityCode": "101110604"
      },
      {
        "cityName": "镇安",
        "province": "陕西",
        "cityPinyin": "zhenan",
        "cityCode": "101110605"
      },
      {
        "cityName": "丹凤",
        "province": "陕西",
        "cityPinyin": "danfeng",
        "cityCode": "101110606"
      },
      {
        "cityName": "商南",
        "province": "陕西",
        "cityPinyin": "shangnan",
        "cityCode": "101110607"
      },
      {
        "cityName": "山阳",
        "province": "陕西",
        "cityPinyin": "shanyang",
        "cityCode": "101110608"
      },
      {
        "cityName": "安康",
        "province": "陕西",
        "cityPinyin": "ankang",
        "cityCode": "101110701"
      },
      {
        "cityName": "紫阳",
        "province": "陕西",
        "cityPinyin": "ziyang",
        "cityCode": "101110702"
      },
      {
        "cityName": "石泉",
        "province": "陕西",
        "cityPinyin": "shiquan",
        "cityCode": "101110703"
      },
      {
        "cityName": "汉阴",
        "province": "陕西",
        "cityPinyin": "hanyin",
        "cityCode": "101110704"
      },
      {
        "cityName": "旬阳",
        "province": "陕西",
        "cityPinyin": "xunyang",
        "cityCode": "101110705"
      },
      {
        "cityName": "岚皋",
        "province": "陕西",
        "cityPinyin": "langao",
        "cityCode": "101110706"
      },
      {
        "cityName": "平利",
        "province": "陕西",
        "cityPinyin": "pingli",
        "cityCode": "101110707"
      },
      {
        "cityName": "白河",
        "province": "陕西",
        "cityPinyin": "baihe",
        "cityCode": "101110708"
      },
      {
        "cityName": "镇坪",
        "province": "陕西",
        "cityPinyin": "zhenping",
        "cityCode": "101110709"
      },
      {
        "cityName": "宁陕",
        "province": "陕西",
        "cityPinyin": "ningshan",
        "cityCode": "101110710"
      },
      {
        "cityName": "汉中",
        "province": "陕西",
        "cityPinyin": "hanzhong",
        "cityCode": "101110801"
      },
      {
        "cityName": "略阳",
        "province": "陕西",
        "cityPinyin": "lueyang",
        "cityCode": "101110802"
      },
      {
        "cityName": "勉县",
        "province": "陕西",
        "cityPinyin": "mianxian",
        "cityCode": "101110803"
      },
      {
        "cityName": "留坝",
        "province": "陕西",
        "cityPinyin": "liuba",
        "cityCode": "101110804"
      },
      {
        "cityName": "洋县",
        "province": "陕西",
        "cityPinyin": "yangxian",
        "cityCode": "101110805"
      },
      {
        "cityName": "城固",
        "province": "陕西",
        "cityPinyin": "chenggu",
        "cityCode": "101110806"
      },
      {
        "cityName": "西乡",
        "province": "陕西",
        "cityPinyin": "xixiang",
        "cityCode": "101110807"
      },
      {
        "cityName": "佛坪",
        "province": "陕西",
        "cityPinyin": "fuoping",
        "cityCode": "101110808"
      },
      {
        "cityName": "宁强",
        "province": "陕西",
        "cityPinyin": "ningqiang",
        "cityCode": "101110809"
      },
      {
        "cityName": "南郑",
        "province": "陕西",
        "cityPinyin": "nanzheng",
        "cityCode": "101110810"
      },
      {
        "cityName": "镇巴",
        "province": "陕西",
        "cityPinyin": "zhenba",
        "cityCode": "101110811"
      },
      {
        "cityName": "宝鸡",
        "province": "陕西",
        "cityPinyin": "baoji",
        "cityCode": "101110901"
      },
      {
        "cityName": "千阳",
        "province": "陕西",
        "cityPinyin": "qianyang",
        "cityCode": "101110903"
      },
      {
        "cityName": "麟游",
        "province": "陕西",
        "cityPinyin": "linyou",
        "cityCode": "101110904"
      },
      {
        "cityName": "岐山",
        "province": "陕西",
        "cityPinyin": "qishan",
        "cityCode": "101110905"
      },
      {
        "cityName": "凤翔",
        "province": "陕西",
        "cityPinyin": "fengxiang",
        "cityCode": "101110906"
      },
      {
        "cityName": "扶风",
        "province": "陕西",
        "cityPinyin": "fufeng",
        "cityCode": "101110907"
      },
      {
        "cityName": "眉县",
        "province": "陕西",
        "cityPinyin": "meixian",
        "cityCode": "101110908"
      },
      {
        "cityName": "太白",
        "province": "陕西",
        "cityPinyin": "taibai",
        "cityCode": "101110909"
      },
      {
        "cityName": "凤县",
        "province": "陕西",
        "cityPinyin": "fengxian",
        "cityCode": "101110910"
      },
      {
        "cityName": "陇县",
        "province": "陕西",
        "cityPinyin": "longxian",
        "cityCode": "101110911"
      },
      {
        "cityName": "陈仓",
        "province": "陕西",
        "cityPinyin": "chencang",
        "cityCode": "101110912"
      },
      {
        "cityName": "铜川",
        "province": "陕西",
        "cityPinyin": "tongchuan",
        "cityCode": "101111001"
      },
      {
        "cityName": "耀县",
        "province": "陕西",
        "cityPinyin": "yaoxian",
        "cityCode": "101111002"
      },
      {
        "cityName": "宜君",
        "province": "陕西",
        "cityPinyin": "yijun",
        "cityCode": "101111003"
      },
      {
        "cityName": "耀州",
        "province": "陕西",
        "cityPinyin": "yaozhou",
        "cityCode": "101111004"
      },
      {
        "cityName": "杨凌",
        "province": "陕西",
        "cityPinyin": "yangling",
        "cityCode": "101111101"
      },
      {
        "cityName": "山东",
        "province": "山东",
        "cityPinyin": "jinan",
        "cityCode": "101120101"
      },
      {
        "cityName": "济南",
        "province": "山东",
        "cityPinyin": "jinan",
        "cityCode": "101120101"
      },
      {
        "cityName": "长清",
        "province": "山东",
        "cityPinyin": "changqing",
        "cityCode": "101120102"
      },
      {
        "cityName": "商河",
        "province": "山东",
        "cityPinyin": "shanghe",
        "cityCode": "101120103"
      },
      {
        "cityName": "章丘",
        "province": "山东",
        "cityPinyin": "zhangqiu",
        "cityCode": "101120104"
      },
      {
        "cityName": "平阴",
        "province": "山东",
        "cityPinyin": "pingyin",
        "cityCode": "101120105"
      },
      {
        "cityName": "济阳",
        "province": "山东",
        "cityPinyin": "jiyang",
        "cityCode": "101120106"
      },
      {
        "cityName": "天桥",
        "province": "山东",
        "cityPinyin": "tianqiao",
        "cityCode": "101120107"
      },
      {
        "cityName": "青岛",
        "province": "山东",
        "cityPinyin": "qingdao",
        "cityCode": "101120201"
      },
      {
        "cityName": "崂山",
        "province": "山东",
        "cityPinyin": "laoshan",
        "cityCode": "101120202"
      },
      {
        "cityName": "即墨",
        "province": "山东",
        "cityPinyin": "jimo",
        "cityCode": "101120204"
      },
      {
        "cityName": "胶州",
        "province": "山东",
        "cityPinyin": "jiaozhou",
        "cityCode": "101120205"
      },
      {
        "cityName": "胶南",
        "province": "山东",
        "cityPinyin": "jiaonan",
        "cityCode": "101120206"
      },
      {
        "cityName": "莱西",
        "province": "山东",
        "cityPinyin": "laixi",
        "cityCode": "101120207"
      },
      {
        "cityName": "平度",
        "province": "山东",
        "cityPinyin": "pingdu",
        "cityCode": "101120208"
      },
      {
        "cityName": "淄博",
        "province": "山东",
        "cityPinyin": "zibo",
        "cityCode": "101120301"
      },
      {
        "cityName": "淄川",
        "province": "山东",
        "cityPinyin": "zichuan",
        "cityCode": "101120302"
      },
      {
        "cityName": "博山",
        "province": "山东",
        "cityPinyin": "boshan",
        "cityCode": "101120303"
      },
      {
        "cityName": "高青",
        "province": "山东",
        "cityPinyin": "gaoqing",
        "cityCode": "101120304"
      },
      {
        "cityName": "周村",
        "province": "山东",
        "cityPinyin": "zhoucun",
        "cityCode": "101120305"
      },
      {
        "cityName": "沂源",
        "province": "山东",
        "cityPinyin": "yiyuan",
        "cityCode": "101120306"
      },
      {
        "cityName": "桓台",
        "province": "山东",
        "cityPinyin": "huantai",
        "cityCode": "101120307"
      },
      {
        "cityName": "临淄",
        "province": "山东",
        "cityPinyin": "linzi",
        "cityCode": "101120308"
      },
      {
        "cityName": "德州",
        "province": "山东",
        "cityPinyin": "dezhou",
        "cityCode": "101120401"
      },
      {
        "cityName": "武城",
        "province": "山东",
        "cityPinyin": "wucheng",
        "cityCode": "101120402"
      },
      {
        "cityName": "临邑",
        "province": "山东",
        "cityPinyin": "linyi",
        "cityCode": "101120403"
      },
      {
        "cityName": "陵县",
        "province": "山东",
        "cityPinyin": "lingxian",
        "cityCode": "101120404"
      },
      {
        "cityName": "齐河",
        "province": "山东",
        "cityPinyin": "qihe",
        "cityCode": "101120405"
      },
      {
        "cityName": "乐陵",
        "province": "山东",
        "cityPinyin": "leling",
        "cityCode": "101120406"
      },
      {
        "cityName": "庆云",
        "province": "山东",
        "cityPinyin": "qingyun",
        "cityCode": "101120407"
      },
      {
        "cityName": "平原",
        "province": "山东",
        "cityPinyin": "pingyuan",
        "cityCode": "101120408"
      },
      {
        "cityName": "宁津",
        "province": "山东",
        "cityPinyin": "ningjin",
        "cityCode": "101120409"
      },
      {
        "cityName": "夏津",
        "province": "山东",
        "cityPinyin": "xiajin",
        "cityCode": "101120410"
      },
      {
        "cityName": "禹城",
        "province": "山东",
        "cityPinyin": "yucheng",
        "cityCode": "101120411"
      },
      {
        "cityName": "烟台",
        "province": "山东",
        "cityPinyin": "yantai",
        "cityCode": "101120501"
      },
      {
        "cityName": "莱州",
        "province": "山东",
        "cityPinyin": "laizhou",
        "cityCode": "101120502"
      },
      {
        "cityName": "长岛",
        "province": "山东",
        "cityPinyin": "changdao",
        "cityCode": "101120503"
      },
      {
        "cityName": "蓬莱",
        "province": "山东",
        "cityPinyin": "penglai",
        "cityCode": "101120504"
      },
      {
        "cityName": "龙口",
        "province": "山东",
        "cityPinyin": "longkou",
        "cityCode": "101120505"
      },
      {
        "cityName": "招远",
        "province": "山东",
        "cityPinyin": "zhaoyuan",
        "cityCode": "101120506"
      },
      {
        "cityName": "栖霞",
        "province": "山东",
        "cityPinyin": "qixia",
        "cityCode": "101120507"
      },
      {
        "cityName": "福山",
        "province": "山东",
        "cityPinyin": "fushan",
        "cityCode": "101120508"
      },
      {
        "cityName": "牟平",
        "province": "山东",
        "cityPinyin": "moup",
        "cityCode": "101120509"
      },
      {
        "cityName": "莱阳",
        "province": "山东",
        "cityPinyin": "laiyang",
        "cityCode": "101120510"
      },
      {
        "cityName": "海阳",
        "province": "山东",
        "cityPinyin": "haiyang",
        "cityCode": "101120511"
      },
      {
        "cityName": "潍坊",
        "province": "山东",
        "cityPinyin": "weifang",
        "cityCode": "101120601"
      },
      {
        "cityName": "青州",
        "province": "山东",
        "cityPinyin": "qingzhou",
        "cityCode": "101120602"
      },
      {
        "cityName": "寿光",
        "province": "山东",
        "cityPinyin": "shouguang",
        "cityCode": "101120603"
      },
      {
        "cityName": "临朐",
        "province": "山东",
        "cityPinyin": "linqu",
        "cityCode": "101120604"
      },
      {
        "cityName": "昌乐",
        "province": "山东",
        "cityPinyin": "changle",
        "cityCode": "101120605"
      },
      {
        "cityName": "昌邑",
        "province": "山东",
        "cityPinyin": "changyi",
        "cityCode": "101120606"
      },
      {
        "cityName": "安丘",
        "province": "山东",
        "cityPinyin": "anqiu",
        "cityCode": "101120607"
      },
      {
        "cityName": "高密",
        "province": "山东",
        "cityPinyin": "gaomi",
        "cityCode": "101120608"
      },
      {
        "cityName": "诸城",
        "province": "山东",
        "cityPinyin": "zhucheng",
        "cityCode": "101120609"
      },
      {
        "cityName": "济宁",
        "province": "山东",
        "cityPinyin": "jining",
        "cityCode": "101120701"
      },
      {
        "cityName": "嘉祥",
        "province": "山东",
        "cityPinyin": "jiaxiang",
        "cityCode": "101120702"
      },
      {
        "cityName": "微山",
        "province": "山东",
        "cityPinyin": "weishan",
        "cityCode": "101120703"
      },
      {
        "cityName": "鱼台",
        "province": "山东",
        "cityPinyin": "yutai",
        "cityCode": "101120704"
      },
      {
        "cityName": "兖州",
        "province": "山东",
        "cityPinyin": "yanzhou",
        "cityCode": "101120705"
      },
      {
        "cityName": "金乡",
        "province": "山东",
        "cityPinyin": "jinxiang",
        "cityCode": "101120706"
      },
      {
        "cityName": "汶上",
        "province": "山东",
        "cityPinyin": "wenshang",
        "cityCode": "101120707"
      },
      {
        "cityName": "泗水",
        "province": "山东",
        "cityPinyin": "sishui",
        "cityCode": "101120708"
      },
      {
        "cityName": "梁山",
        "province": "山东",
        "cityPinyin": "liangshan",
        "cityCode": "101120709"
      },
      {
        "cityName": "曲阜",
        "province": "山东",
        "cityPinyin": "qufu",
        "cityCode": "101120710"
      },
      {
        "cityName": "邹城",
        "province": "山东",
        "cityPinyin": "zoucheng",
        "cityCode": "101120711"
      },
      {
        "cityName": "泰安",
        "province": "山东",
        "cityPinyin": "taian",
        "cityCode": "101120801"
      },
      {
        "cityName": "新泰",
        "province": "山东",
        "cityPinyin": "xintai",
        "cityCode": "101120802"
      },
      {
        "cityName": "肥城",
        "province": "山东",
        "cityPinyin": "feicheng",
        "cityCode": "101120804"
      },
      {
        "cityName": "东平",
        "province": "山东",
        "cityPinyin": "dongping",
        "cityCode": "101120805"
      },
      {
        "cityName": "宁阳",
        "province": "山东",
        "cityPinyin": "ningyang",
        "cityCode": "101120806"
      },
      {
        "cityName": "临沂",
        "province": "山东",
        "cityPinyin": "linyi",
        "cityCode": "101120901"
      },
      {
        "cityName": "莒南",
        "province": "山东",
        "cityPinyin": "junan",
        "cityCode": "101120902"
      },
      {
        "cityName": "沂南",
        "province": "山东",
        "cityPinyin": "yinan",
        "cityCode": "101120903"
      },
      {
        "cityName": "苍山",
        "province": "山东",
        "cityPinyin": "cangshan",
        "cityCode": "101120904"
      },
      {
        "cityName": "临沭",
        "province": "山东",
        "cityPinyin": "linshu",
        "cityCode": "101120905"
      },
      {
        "cityName": "郯城",
        "province": "山东",
        "cityPinyin": "tancheng",
        "cityCode": "101120906"
      },
      {
        "cityName": "蒙阴",
        "province": "山东",
        "cityPinyin": "mengyin",
        "cityCode": "101120907"
      },
      {
        "cityName": "平邑",
        "province": "山东",
        "cityPinyin": "pingyi",
        "cityCode": "101120908"
      },
      {
        "cityName": "费县",
        "province": "山东",
        "cityPinyin": "feixian",
        "cityCode": "101120909"
      },
      {
        "cityName": "沂水",
        "province": "山东",
        "cityPinyin": "yishui",
        "cityCode": "101120910"
      },
      {
        "cityName": "菏泽",
        "province": "山东",
        "cityPinyin": "heze",
        "cityCode": "101121001"
      },
      {
        "cityName": "鄄城",
        "province": "山东",
        "cityPinyin": "juancheng",
        "cityCode": "101121002"
      },
      {
        "cityName": "郓城",
        "province": "山东",
        "cityPinyin": "yuncheng",
        "cityCode": "101121003"
      },
      {
        "cityName": "东明",
        "province": "山东",
        "cityPinyin": "dongming",
        "cityCode": "101121004"
      },
      {
        "cityName": "定陶",
        "province": "山东",
        "cityPinyin": "dingtao",
        "cityCode": "101121005"
      },
      {
        "cityName": "巨野",
        "province": "山东",
        "cityPinyin": "juye",
        "cityCode": "101121006"
      },
      {
        "cityName": "曹县",
        "province": "山东",
        "cityPinyin": "caoxian",
        "cityCode": "101121007"
      },
      {
        "cityName": "成武",
        "province": "山东",
        "cityPinyin": "chengwu",
        "cityCode": "101121008"
      },
      {
        "cityName": "单县",
        "province": "山东",
        "cityPinyin": "shanxian",
        "cityCode": "101121009"
      },
      {
        "cityName": "滨州",
        "province": "山东",
        "cityPinyin": "binzhou",
        "cityCode": "101121101"
      },
      {
        "cityName": "博兴",
        "province": "山东",
        "cityPinyin": "boxing",
        "cityCode": "101121102"
      },
      {
        "cityName": "无棣",
        "province": "山东",
        "cityPinyin": "wudi",
        "cityCode": "101121103"
      },
      {
        "cityName": "阳信",
        "province": "山东",
        "cityPinyin": "yangxin",
        "cityCode": "101121104"
      },
      {
        "cityName": "惠民",
        "province": "山东",
        "cityPinyin": "huimin",
        "cityCode": "101121105"
      },
      {
        "cityName": "沾化",
        "province": "山东",
        "cityPinyin": "zhanhua",
        "cityCode": "101121106"
      },
      {
        "cityName": "邹平",
        "province": "山东",
        "cityPinyin": "zouping",
        "cityCode": "101121107"
      },
      {
        "cityName": "东营",
        "province": "山东",
        "cityPinyin": "dongying",
        "cityCode": "101121201"
      },
      {
        "cityName": "河口",
        "province": "山东",
        "cityPinyin": "hekou",
        "cityCode": "101121202"
      },
      {
        "cityName": "垦利",
        "province": "山东",
        "cityPinyin": "kenli",
        "cityCode": "101121203"
      },
      {
        "cityName": "利津",
        "province": "山东",
        "cityPinyin": "lijin",
        "cityCode": "101121204"
      },
      {
        "cityName": "广饶",
        "province": "山东",
        "cityPinyin": "guangrao",
        "cityCode": "101121205"
      },
      {
        "cityName": "威海",
        "province": "山东",
        "cityPinyin": "weihai",
        "cityCode": "101121301"
      },
      {
        "cityName": "文登",
        "province": "山东",
        "cityPinyin": "wendeng",
        "cityCode": "101121302"
      },
      {
        "cityName": "荣成",
        "province": "山东",
        "cityPinyin": "rongcheng",
        "cityCode": "101121303"
      },
      {
        "cityName": "乳山",
        "province": "山东",
        "cityPinyin": "rushan",
        "cityCode": "101121304"
      },
      {
        "cityName": "成山头",
        "province": "山东",
        "cityPinyin": "chengshantou",
        "cityCode": "101121305"
      },
      {
        "cityName": "石岛",
        "province": "山东",
        "cityPinyin": "shidao",
        "cityCode": "101121306"
      },
      {
        "cityName": "枣庄",
        "province": "山东",
        "cityPinyin": "zaozhuang",
        "cityCode": "101121401"
      },
      {
        "cityName": "薛城",
        "province": "山东",
        "cityPinyin": "xuecheng",
        "cityCode": "101121402"
      },
      {
        "cityName": "峄城",
        "province": "山东",
        "cityPinyin": "yicheng",
        "cityCode": "101121403"
      },
      {
        "cityName": "台儿庄",
        "province": "山东",
        "cityPinyin": "taierzhuang",
        "cityCode": "101121404"
      },
      {
        "cityName": "滕州",
        "province": "山东",
        "cityPinyin": "tengzhou",
        "cityCode": "101121405"
      },
      {
        "cityName": "日照",
        "province": "山东",
        "cityPinyin": "rizhao",
        "cityCode": "101121501"
      },
      {
        "cityName": "五莲",
        "province": "山东",
        "cityPinyin": "wulian",
        "cityCode": "101121502"
      },
      {
        "cityName": "莒县",
        "province": "山东",
        "cityPinyin": "juxian",
        "cityCode": "101121503"
      },
      {
        "cityName": "莱芜",
        "province": "山东",
        "cityPinyin": "laiwu",
        "cityCode": "101121601"
      },
      {
        "cityName": "聊城",
        "province": "山东",
        "cityPinyin": "liaocheng",
        "cityCode": "101121701"
      },
      {
        "cityName": "冠县",
        "province": "山东",
        "cityPinyin": "guanxian",
        "cityCode": "101121702"
      },
      {
        "cityName": "阳谷",
        "province": "山东",
        "cityPinyin": "yanggu",
        "cityCode": "101121703"
      },
      {
        "cityName": "高唐",
        "province": "山东",
        "cityPinyin": "gaotang",
        "cityCode": "101121704"
      },
      {
        "cityName": "茌平",
        "province": "山东",
        "cityPinyin": "chiping",
        "cityCode": "101121705"
      },
      {
        "cityName": "东阿",
        "province": "山东",
        "cityPinyin": "donge",
        "cityCode": "101121706"
      },
      {
        "cityName": "临清",
        "province": "山东",
        "cityPinyin": "linqing",
        "cityCode": "101121707"
      },
      {
        "cityName": "莘县",
        "province": "山东",
        "cityPinyin": "shenxian",
        "cityCode": "101121709"
      },
      {
        "cityName": "新疆",
        "province": "新疆",
        "cityPinyin": "wulumuqi",
        "cityCode": "101130101"
      },
      {
        "cityName": "乌鲁木齐",
        "province": "新疆",
        "cityPinyin": "wulumuqi",
        "cityCode": "101130101"
      },
      {
        "cityName": "小渠子",
        "province": "新疆",
        "cityPinyin": "xiaoquzi",
        "cityCode": "101130103"
      },
      {
        "cityName": "巴仑台",
        "province": "新疆",
        "cityPinyin": "baluntai",
        "cityCode": "101130104"
      },
      {
        "cityName": "达坂城",
        "province": "新疆",
        "cityPinyin": "dabancheng",
        "cityCode": "101130105"
      },
      {
        "cityName": "乌鲁木齐牧试站",
        "province": "新疆",
        "cityPinyin": "wulumuqimushizhan",
        "cityCode": "101130108"
      },
      {
        "cityName": "天池",
        "province": "新疆",
        "cityPinyin": "tianchi",
        "cityCode": "101130109"
      },
      {
        "cityName": "白杨沟",
        "province": "新疆",
        "cityPinyin": "baiyanggou",
        "cityCode": "101130110"
      },
      {
        "cityName": "克拉玛依",
        "province": "新疆",
        "cityPinyin": "kelamayi",
        "cityCode": "101130201"
      },
      {
        "cityName": "乌尔禾",
        "province": "新疆",
        "cityPinyin": "wuerhe",
        "cityCode": "101130202"
      },
      {
        "cityName": "白碱滩",
        "province": "新疆",
        "cityPinyin": "baijiantan",
        "cityCode": "101130203"
      },
      {
        "cityName": "石河子",
        "province": "新疆",
        "cityPinyin": "shihezi",
        "cityCode": "101130301"
      },
      {
        "cityName": "炮台",
        "province": "新疆",
        "cityPinyin": "paotai",
        "cityCode": "101130302"
      },
      {
        "cityName": "莫索湾",
        "province": "新疆",
        "cityPinyin": "mosuowan",
        "cityCode": "101130303"
      },
      {
        "cityName": "昌吉",
        "province": "新疆",
        "cityPinyin": "changji",
        "cityCode": "101130401"
      },
      {
        "cityName": "呼图壁",
        "province": "新疆",
        "cityPinyin": "hutubi",
        "cityCode": "101130402"
      },
      {
        "cityName": "米泉",
        "province": "新疆",
        "cityPinyin": "miquan",
        "cityCode": "101130403"
      },
      {
        "cityName": "阜康",
        "province": "新疆",
        "cityPinyin": "fukang",
        "cityCode": "101130404"
      },
      {
        "cityName": "吉木萨尔",
        "province": "新疆",
        "cityPinyin": "jimusaer",
        "cityCode": "101130405"
      },
      {
        "cityName": "奇台",
        "province": "新疆",
        "cityPinyin": "qitai",
        "cityCode": "101130406"
      },
      {
        "cityName": "玛纳斯",
        "province": "新疆",
        "cityPinyin": "manasi",
        "cityCode": "101130407"
      },
      {
        "cityName": "木垒",
        "province": "新疆",
        "cityPinyin": "mulei",
        "cityCode": "101130408"
      },
      {
        "cityName": "蔡家湖",
        "province": "新疆",
        "cityPinyin": "caijiahu",
        "cityCode": "101130409"
      },
      {
        "cityName": "吐鲁番",
        "province": "新疆",
        "cityPinyin": "tulufan",
        "cityCode": "101130501"
      },
      {
        "cityName": "托克逊",
        "province": "新疆",
        "cityPinyin": "tuokexun",
        "cityCode": "101130502"
      },
      {
        "cityName": "克孜勒",
        "province": "新疆",
        "cityPinyin": "kezile",
        "cityCode": "101130503"
      },
      {
        "cityName": "鄯善",
        "province": "新疆",
        "cityPinyin": "shanshan",
        "cityCode": "101130504"
      },
      {
        "cityName": "库尔勒",
        "province": "新疆",
        "cityPinyin": "kuerle",
        "cityCode": "101130601"
      },
      {
        "cityName": "轮台",
        "province": "新疆",
        "cityPinyin": "luntai",
        "cityCode": "101130602"
      },
      {
        "cityName": "尉犁",
        "province": "新疆",
        "cityPinyin": "weili",
        "cityCode": "101130603"
      },
      {
        "cityName": "若羌",
        "province": "新疆",
        "cityPinyin": "ruoqiang",
        "cityCode": "101130604"
      },
      {
        "cityName": "且末",
        "province": "新疆",
        "cityPinyin": "qiemo",
        "cityCode": "101130605"
      },
      {
        "cityName": "和静",
        "province": "新疆",
        "cityPinyin": "hejing",
        "cityCode": "101130606"
      },
      {
        "cityName": "焉耆",
        "province": "新疆",
        "cityPinyin": "yanqi",
        "cityCode": "101130607"
      },
      {
        "cityName": "和硕",
        "province": "新疆",
        "cityPinyin": "shuo",
        "cityCode": "101130608"
      },
      {
        "cityName": "巴音布鲁克",
        "province": "新疆",
        "cityPinyin": "bayinbuluke",
        "cityCode": "101130610"
      },
      {
        "cityName": "铁干里克",
        "province": "新疆",
        "cityPinyin": "tieganlike",
        "cityCode": "101130611"
      },
      {
        "cityName": "博湖",
        "province": "新疆",
        "cityPinyin": "bohu",
        "cityCode": "101130612"
      },
      {
        "cityName": "塔中",
        "province": "新疆",
        "cityPinyin": "tazhong",
        "cityCode": "101130613"
      },
      {
        "cityName": "阿拉尔",
        "province": "新疆",
        "cityPinyin": "alaer",
        "cityCode": "101130701"
      },
      {
        "cityName": "阿克苏",
        "province": "新疆",
        "cityPinyin": "akesu",
        "cityCode": "101130801"
      },
      {
        "cityName": "乌什",
        "province": "新疆",
        "cityPinyin": "wushi",
        "cityCode": "101130802"
      },
      {
        "cityName": "温宿",
        "province": "新疆",
        "cityPinyin": "wensu",
        "cityCode": "101130803"
      },
      {
        "cityName": "拜城",
        "province": "新疆",
        "cityPinyin": "baicheng",
        "cityCode": "101130804"
      },
      {
        "cityName": "新和",
        "province": "新疆",
        "cityPinyin": "xinhe",
        "cityCode": "101130805"
      },
      {
        "cityName": "沙雅",
        "province": "新疆",
        "cityPinyin": "shaya",
        "cityCode": "101130806"
      },
      {
        "cityName": "库车",
        "province": "新疆",
        "cityPinyin": "kuche",
        "cityCode": "101130807"
      },
      {
        "cityName": "柯坪",
        "province": "新疆",
        "cityPinyin": "keping",
        "cityCode": "101130808"
      },
      {
        "cityName": "阿瓦提",
        "province": "新疆",
        "cityPinyin": "awati",
        "cityCode": "101130809"
      },
      {
        "cityName": "喀什",
        "province": "新疆",
        "cityPinyin": "kashi",
        "cityCode": "101130901"
      },
      {
        "cityName": "英吉沙",
        "province": "新疆",
        "cityPinyin": "yingjisha",
        "cityCode": "101130902"
      },
      {
        "cityName": "塔什库尔干",
        "province": "新疆",
        "cityPinyin": "tashikuergan",
        "cityCode": "101130903"
      },
      {
        "cityName": "麦盖提",
        "province": "新疆",
        "cityPinyin": "maigaiti",
        "cityCode": "101130904"
      },
      {
        "cityName": "莎车",
        "province": "新疆",
        "cityPinyin": "shache",
        "cityCode": "101130905"
      },
      {
        "cityName": "叶城",
        "province": "新疆",
        "cityPinyin": "yecheng",
        "cityCode": "101130906"
      },
      {
        "cityName": "泽普",
        "province": "新疆",
        "cityPinyin": "zepu",
        "cityCode": "101130907"
      },
      {
        "cityName": "巴楚",
        "province": "新疆",
        "cityPinyin": "bachu",
        "cityCode": "101130908"
      },
      {
        "cityName": "岳普湖",
        "province": "新疆",
        "cityPinyin": "yuepuhu",
        "cityCode": "101130909"
      },
      {
        "cityName": "伽师",
        "province": "新疆",
        "cityPinyin": "jiashi",
        "cityCode": "101130910"
      },
      {
        "cityName": "疏附",
        "province": "新疆",
        "cityPinyin": "shufu",
        "cityCode": "101130911"
      },
      {
        "cityName": "疏勒",
        "province": "新疆",
        "cityPinyin": "shule",
        "cityCode": "101130912"
      },
      {
        "cityName": "伊宁",
        "province": "新疆",
        "cityPinyin": "yining",
        "cityCode": "101131001"
      },
      {
        "cityName": "察布查尔",
        "province": "新疆",
        "cityPinyin": "chabuchaer",
        "cityCode": "101131002"
      },
      {
        "cityName": "尼勒克",
        "province": "新疆",
        "cityPinyin": "nileke",
        "cityCode": "101131003"
      },
      {
        "cityName": "伊宁县",
        "province": "新疆",
        "cityPinyin": "yiningxian",
        "cityCode": "101131004"
      },
      {
        "cityName": "巩留",
        "province": "新疆",
        "cityPinyin": "gongliu",
        "cityCode": "101131005"
      },
      {
        "cityName": "新源",
        "province": "新疆",
        "cityPinyin": "xinyuan",
        "cityCode": "101131006"
      },
      {
        "cityName": "昭苏",
        "province": "新疆",
        "cityPinyin": "zhaosu",
        "cityCode": "101131007"
      },
      {
        "cityName": "特克斯",
        "province": "新疆",
        "cityPinyin": "tekesi",
        "cityCode": "101131008"
      },
      {
        "cityName": "霍城",
        "province": "新疆",
        "cityPinyin": "huocheng",
        "cityCode": "101131009"
      },
      {
        "cityName": "霍尔果斯",
        "province": "新疆",
        "cityPinyin": "huoerguosi",
        "cityCode": "101131010"
      },
      {
        "cityName": "奎屯",
        "province": "新疆",
        "cityPinyin": "kuitunshi",
        "cityCode": "101131011"
      },
      {
        "cityName": "塔城",
        "province": "新疆",
        "cityPinyin": "tacheng",
        "cityCode": "101131101"
      },
      {
        "cityName": "裕民",
        "province": "新疆",
        "cityPinyin": "yumin",
        "cityCode": "101131102"
      },
      {
        "cityName": "额敏",
        "province": "新疆",
        "cityPinyin": "emin",
        "cityCode": "101131103"
      },
      {
        "cityName": "和布克赛尔",
        "province": "新疆",
        "cityPinyin": "hebukesaier",
        "cityCode": "101131104"
      },
      {
        "cityName": "托里",
        "province": "新疆",
        "cityPinyin": "tuoli",
        "cityCode": "101131105"
      },
      {
        "cityName": "乌苏",
        "province": "新疆",
        "cityPinyin": "wusu",
        "cityCode": "101131106"
      },
      {
        "cityName": "沙湾",
        "province": "新疆",
        "cityPinyin": "shawan",
        "cityCode": "101131107"
      },
      {
        "cityName": "和丰",
        "province": "新疆",
        "cityPinyin": "hefeng",
        "cityCode": "101131108"
      },
      {
        "cityName": "哈密",
        "province": "新疆",
        "cityPinyin": "hami",
        "cityCode": "101131201"
      },
      {
        "cityName": "巴里坤",
        "province": "新疆",
        "cityPinyin": "balikun",
        "cityCode": "101131203"
      },
      {
        "cityName": "伊吾",
        "province": "新疆",
        "cityPinyin": "yiwu",
        "cityCode": "101131204"
      },
      {
        "cityName": "和田",
        "province": "新疆",
        "cityPinyin": "hetian",
        "cityCode": "101131301"
      },
      {
        "cityName": "皮山",
        "province": "新疆",
        "cityPinyin": "pishan",
        "cityCode": "101131302"
      },
      {
        "cityName": "策勒",
        "province": "新疆",
        "cityPinyin": "cele",
        "cityCode": "101131303"
      },
      {
        "cityName": "墨玉",
        "province": "新疆",
        "cityPinyin": "moyu",
        "cityCode": "101131304"
      },
      {
        "cityName": "洛浦",
        "province": "新疆",
        "cityPinyin": "luopu",
        "cityCode": "101131305"
      },
      {
        "cityName": "民丰",
        "province": "新疆",
        "cityPinyin": "minfeng",
        "cityCode": "101131306"
      },
      {
        "cityName": "于田",
        "province": "新疆",
        "cityPinyin": "yutian",
        "cityCode": "101131307"
      },
      {
        "cityName": "阿勒泰",
        "province": "新疆",
        "cityPinyin": "aletai",
        "cityCode": "101131401"
      },
      {
        "cityName": "哈巴河",
        "province": "新疆",
        "cityPinyin": "habahe",
        "cityCode": "101131402"
      },
      {
        "cityName": "吉木乃",
        "province": "新疆",
        "cityPinyin": "jimunai",
        "cityCode": "101131405"
      },
      {
        "cityName": "布尔津",
        "province": "新疆",
        "cityPinyin": "buerjin",
        "cityCode": "101131406"
      },
      {
        "cityName": "福海",
        "province": "新疆",
        "cityPinyin": "fuhai",
        "cityCode": "101131407"
      },
      {
        "cityName": "富蕴",
        "province": "新疆",
        "cityPinyin": "fuyun",
        "cityCode": "101131408"
      },
      {
        "cityName": "青河",
        "province": "新疆",
        "cityPinyin": "qinghe",
        "cityCode": "101131409"
      },
      {
        "cityName": "阿图什",
        "province": "新疆",
        "cityPinyin": "atushi",
        "cityCode": "101131501"
      },
      {
        "cityName": "乌恰",
        "province": "新疆",
        "cityPinyin": "wuqia",
        "cityCode": "101131502"
      },
      {
        "cityName": "阿克陶",
        "province": "新疆",
        "cityPinyin": "aketao",
        "cityCode": "101131503"
      },
      {
        "cityName": "阿合奇",
        "province": "新疆",
        "cityPinyin": "aheqi",
        "cityCode": "101131504"
      },
      {
        "cityName": "博乐",
        "province": "新疆",
        "cityPinyin": "bole",
        "cityCode": "101131601"
      },
      {
        "cityName": "温泉",
        "province": "新疆",
        "cityPinyin": "wenquan",
        "cityCode": "101131602"
      },
      {
        "cityName": "精河",
        "province": "新疆",
        "cityPinyin": "jinghe",
        "cityCode": "101131603"
      },
      {
        "cityName": "阿拉山口",
        "province": "新疆",
        "cityPinyin": "alashankou",
        "cityCode": "101131606"
      },
      {
        "cityName": "西藏",
        "province": "西藏",
        "cityPinyin": "lasa",
        "cityCode": "101140101"
      },
      {
        "cityName": "拉萨",
        "province": "西藏",
        "cityPinyin": "lasa",
        "cityCode": "101140101"
      },
      {
        "cityName": "当雄",
        "province": "西藏",
        "cityPinyin": "dangxiong",
        "cityCode": "101140102"
      },
      {
        "cityName": "尼木",
        "province": "西藏",
        "cityPinyin": "nimu",
        "cityCode": "101140103"
      },
      {
        "cityName": "林周",
        "province": "西藏",
        "cityPinyin": "linzhou",
        "cityCode": "101140104"
      },
      {
        "cityName": "堆龙德庆",
        "province": "西藏",
        "cityPinyin": "duilongdeqing",
        "cityCode": "101140105"
      },
      {
        "cityName": "曲水",
        "province": "西藏",
        "cityPinyin": "qushui",
        "cityCode": "101140106"
      },
      {
        "cityName": "达孜",
        "province": "西藏",
        "cityPinyin": "dazi",
        "cityCode": "101140107"
      },
      {
        "cityName": "墨竹工卡",
        "province": "西藏",
        "cityPinyin": "mozhugongka",
        "cityCode": "101140108"
      },
      {
        "cityName": "日喀则",
        "province": "西藏",
        "cityPinyin": "rikaze",
        "cityCode": "101140201"
      },
      {
        "cityName": "拉孜",
        "province": "西藏",
        "cityPinyin": "lazi",
        "cityCode": "101140202"
      },
      {
        "cityName": "南木林",
        "province": "西藏",
        "cityPinyin": "nanmulin",
        "cityCode": "101140203"
      },
      {
        "cityName": "聂拉木",
        "province": "西藏",
        "cityPinyin": "nielamu",
        "cityCode": "101140204"
      },
      {
        "cityName": "定日",
        "province": "西藏",
        "cityPinyin": "anri",
        "cityCode": "101140205"
      },
      {
        "cityName": "江孜",
        "province": "西藏",
        "cityPinyin": "jiangzi",
        "cityCode": "101140206"
      },
      {
        "cityName": "帕里",
        "province": "西藏",
        "cityPinyin": "pali",
        "cityCode": "101140207"
      },
      {
        "cityName": "仲巴",
        "province": "西藏",
        "cityPinyin": "zhongba",
        "cityCode": "101140208"
      },
      {
        "cityName": "萨嘎",
        "province": "西藏",
        "cityPinyin": "saga",
        "cityCode": "101140209"
      },
      {
        "cityName": "吉隆",
        "province": "西藏",
        "cityPinyin": "jilong",
        "cityCode": "101140210"
      },
      {
        "cityName": "昂仁",
        "province": "西藏",
        "cityPinyin": "angren",
        "cityCode": "101140211"
      },
      {
        "cityName": "定结",
        "province": "西藏",
        "cityPinyin": "dingjie",
        "cityCode": "101140212"
      },
      {
        "cityName": "萨迦",
        "province": "西藏",
        "cityPinyin": "sajia",
        "cityCode": "101140213"
      },
      {
        "cityName": "谢通门",
        "province": "西藏",
        "cityPinyin": "xietongmen",
        "cityCode": "101140214"
      },
      {
        "cityName": "岗巴",
        "province": "西藏",
        "cityPinyin": "gangba",
        "cityCode": "101140216"
      },
      {
        "cityName": "白朗",
        "province": "西藏",
        "cityPinyin": "bailang",
        "cityCode": "101140217"
      },
      {
        "cityName": "亚东",
        "province": "西藏",
        "cityPinyin": "yadong",
        "cityCode": "101140218"
      },
      {
        "cityName": "康马",
        "province": "西藏",
        "cityPinyin": "kangma",
        "cityCode": "101140219"
      },
      {
        "cityName": "仁布",
        "province": "西藏",
        "cityPinyin": "renbu",
        "cityCode": "101140220"
      },
      {
        "cityName": "山南",
        "province": "西藏",
        "cityPinyin": "shannan",
        "cityCode": "101140301"
      },
      {
        "cityName": "贡嘎",
        "province": "西藏",
        "cityPinyin": "gongga",
        "cityCode": "101140302"
      },
      {
        "cityName": "札囊",
        "province": "西藏",
        "cityPinyin": "zhanan",
        "cityCode": "101140303"
      },
      {
        "cityName": "加查",
        "province": "西藏",
        "cityPinyin": "jiacha",
        "cityCode": "101140304"
      },
      {
        "cityName": "浪卡子",
        "province": "西藏",
        "cityPinyin": "langkazi",
        "cityCode": "101140305"
      },
      {
        "cityName": "错那",
        "province": "西藏",
        "cityPinyin": "cuona",
        "cityCode": "101140306"
      },
      {
        "cityName": "隆子",
        "province": "西藏",
        "cityPinyin": "longzi",
        "cityCode": "101140307"
      },
      {
        "cityName": "泽当",
        "province": "西藏",
        "cityPinyin": "zedang",
        "cityCode": "101140308"
      },
      {
        "cityName": "乃东",
        "province": "西藏",
        "cityPinyin": "naidong",
        "cityCode": "101140309"
      },
      {
        "cityName": "桑日",
        "province": "西藏",
        "cityPinyin": "sangri",
        "cityCode": "101140310"
      },
      {
        "cityName": "洛扎",
        "province": "西藏",
        "cityPinyin": "luozha",
        "cityCode": "101140311"
      },
      {
        "cityName": "措美",
        "province": "西藏",
        "cityPinyin": "cuomei",
        "cityCode": "101140312"
      },
      {
        "cityName": "琼结",
        "province": "西藏",
        "cityPinyin": "qiongjie",
        "cityCode": "101140313"
      },
      {
        "cityName": "曲松",
        "province": "西藏",
        "cityPinyin": "qusong",
        "cityCode": "101140314"
      },
      {
        "cityName": "林芝",
        "province": "西藏",
        "cityPinyin": "linzhi",
        "cityCode": "101140401"
      },
      {
        "cityName": "波密",
        "province": "西藏",
        "cityPinyin": "bomi",
        "cityCode": "101140402"
      },
      {
        "cityName": "米林",
        "province": "西藏",
        "cityPinyin": "milin",
        "cityCode": "101140403"
      },
      {
        "cityName": "察隅",
        "province": "西藏",
        "cityPinyin": "chayu",
        "cityCode": "101140404"
      },
      {
        "cityName": "工布江达",
        "province": "西藏",
        "cityPinyin": "gongbujiangda",
        "cityCode": "101140405"
      },
      {
        "cityName": "朗县",
        "province": "西藏",
        "cityPinyin": "langxian",
        "cityCode": "101140406"
      },
      {
        "cityName": "墨脱",
        "province": "西藏",
        "cityPinyin": "motuo",
        "cityCode": "101140407"
      },
      {
        "cityName": "昌都",
        "province": "西藏",
        "cityPinyin": "changdu",
        "cityCode": "101140501"
      },
      {
        "cityName": "丁青",
        "province": "西藏",
        "cityPinyin": "dingqing",
        "cityCode": "101140502"
      },
      {
        "cityName": "边坝",
        "province": "西藏",
        "cityPinyin": "bianba",
        "cityCode": "101140503"
      },
      {
        "cityName": "洛隆",
        "province": "西藏",
        "cityPinyin": "luolong",
        "cityCode": "101140504"
      },
      {
        "cityName": "左贡",
        "province": "西藏",
        "cityPinyin": "zuogong",
        "cityCode": "101140505"
      },
      {
        "cityName": "芒康",
        "province": "西藏",
        "cityPinyin": "mangkang",
        "cityCode": "101140506"
      },
      {
        "cityName": "类乌齐",
        "province": "西藏",
        "cityPinyin": "leiwuqi",
        "cityCode": "101140507"
      },
      {
        "cityName": "八宿",
        "province": "西藏",
        "cityPinyin": "basu",
        "cityCode": "101140508"
      },
      {
        "cityName": "江达",
        "province": "西藏",
        "cityPinyin": "jiangda",
        "cityCode": "101140509"
      },
      {
        "cityName": "察雅",
        "province": "西藏",
        "cityPinyin": "chaya",
        "cityCode": "101140510"
      },
      {
        "cityName": "贡觉",
        "province": "西藏",
        "cityPinyin": "gongjue",
        "cityCode": "101140511"
      },
      {
        "cityName": "那曲",
        "province": "西藏",
        "cityPinyin": "naqu",
        "cityCode": "101140601"
      },
      {
        "cityName": "尼玛",
        "province": "西藏",
        "cityPinyin": "nima",
        "cityCode": "101140602"
      },
      {
        "cityName": "嘉黎",
        "province": "西藏",
        "cityPinyin": "jiali",
        "cityCode": "101140603"
      },
      {
        "cityName": "班戈",
        "province": "西藏",
        "cityPinyin": "bange",
        "cityCode": "101140604"
      },
      {
        "cityName": "安多",
        "province": "西藏",
        "cityPinyin": "anduo",
        "cityCode": "101140605"
      },
      {
        "cityName": "索县",
        "province": "西藏",
        "cityPinyin": "suoxian",
        "cityCode": "101140606"
      },
      {
        "cityName": "聂荣",
        "province": "西藏",
        "cityPinyin": "nierong",
        "cityCode": "101140607"
      },
      {
        "cityName": "巴青",
        "province": "西藏",
        "cityPinyin": "baqing",
        "cityCode": "101140608"
      },
      {
        "cityName": "比如",
        "province": "西藏",
        "cityPinyin": "biru",
        "cityCode": "101140609"
      },
      {
        "cityName": "阿里",
        "province": "西藏",
        "cityPinyin": "ali",
        "cityCode": "101140701"
      },
      {
        "cityName": "改则",
        "province": "西藏",
        "cityPinyin": "gaize",
        "cityCode": "101140702"
      },
      {
        "cityName": "申扎",
        "province": "西藏",
        "cityPinyin": "shenzha",
        "cityCode": "101140703"
      },
      {
        "cityName": "狮泉河",
        "province": "西藏",
        "cityPinyin": "shiquanhe",
        "cityCode": "101140704"
      },
      {
        "cityName": "普兰",
        "province": "西藏",
        "cityPinyin": "pulan",
        "cityCode": "101140705"
      },
      {
        "cityName": "札达",
        "province": "西藏",
        "cityPinyin": "zhada",
        "cityCode": "101140706"
      },
      {
        "cityName": "噶尔",
        "province": "西藏",
        "cityPinyin": "gaer",
        "cityCode": "101140707"
      },
      {
        "cityName": "日土",
        "province": "西藏",
        "cityPinyin": "ritu",
        "cityCode": "101140708"
      },
      {
        "cityName": "革吉",
        "province": "西藏",
        "cityPinyin": "geji",
        "cityCode": "101140709"
      },
      {
        "cityName": "措勤",
        "province": "西藏",
        "cityPinyin": "cuoqin",
        "cityCode": "101140710"
      },
      {
        "cityName": "青海",
        "province": "青海",
        "cityPinyin": "xining",
        "cityCode": "101150101"
      },
      {
        "cityName": "西宁",
        "province": "青海",
        "cityPinyin": "xining",
        "cityCode": "101150101"
      },
      {
        "cityName": "大通",
        "province": "青海",
        "cityPinyin": "datong",
        "cityCode": "101150102"
      },
      {
        "cityName": "湟源",
        "province": "青海",
        "cityPinyin": "huangyuan",
        "cityCode": "101150103"
      },
      {
        "cityName": "湟中",
        "province": "青海",
        "cityPinyin": "huangzhong",
        "cityCode": "101150104"
      },
      {
        "cityName": "海东",
        "province": "青海",
        "cityPinyin": "haidong",
        "cityCode": "101150201"
      },
      {
        "cityName": "乐都",
        "province": "青海",
        "cityPinyin": "ledu",
        "cityCode": "101150202"
      },
      {
        "cityName": "民和",
        "province": "青海",
        "cityPinyin": "minhe",
        "cityCode": "101150203"
      },
      {
        "cityName": "互助",
        "province": "青海",
        "cityPinyin": "huzhu",
        "cityCode": "101150204"
      },
      {
        "cityName": "化隆",
        "province": "青海",
        "cityPinyin": "hualong",
        "cityCode": "101150205"
      },
      {
        "cityName": "循化",
        "province": "青海",
        "cityPinyin": "xunhua",
        "cityCode": "101150206"
      },
      {
        "cityName": "冷湖",
        "province": "青海",
        "cityPinyin": "lenghu",
        "cityCode": "101150207"
      },
      {
        "cityName": "平安",
        "province": "青海",
        "cityPinyin": "pingan",
        "cityCode": "101150208"
      },
      {
        "cityName": "黄南",
        "province": "青海",
        "cityPinyin": "huangnan",
        "cityCode": "101150301"
      },
      {
        "cityName": "尖扎",
        "province": "青海",
        "cityPinyin": "jianzha",
        "cityCode": "101150302"
      },
      {
        "cityName": "泽库",
        "province": "青海",
        "cityPinyin": "zeku",
        "cityCode": "101150303"
      },
      {
        "cityName": "河南",
        "province": "青海",
        "cityPinyin": "henan",
        "cityCode": "101150304"
      },
      {
        "cityName": "同仁",
        "province": "青海",
        "cityPinyin": "tongren",
        "cityCode": "101150305"
      },
      {
        "cityName": "海南",
        "province": "青海",
        "cityPinyin": "hainan",
        "cityCode": "101150401"
      },
      {
        "cityName": "贵德",
        "province": "青海",
        "cityPinyin": "guide",
        "cityCode": "101150404"
      },
      {
        "cityName": "兴海",
        "province": "青海",
        "cityPinyin": "xinghai",
        "cityCode": "101150406"
      },
      {
        "cityName": "贵南",
        "province": "青海",
        "cityPinyin": "guinan",
        "cityCode": "101150407"
      },
      {
        "cityName": "同德",
        "province": "青海",
        "cityPinyin": "tongde",
        "cityCode": "101150408"
      },
      {
        "cityName": "共和",
        "province": "青海",
        "cityPinyin": "gonghe",
        "cityCode": "101150409"
      },
      {
        "cityName": "果洛",
        "province": "青海",
        "cityPinyin": "guoluo",
        "cityCode": "101150501"
      },
      {
        "cityName": "班玛",
        "province": "青海",
        "cityPinyin": "banma",
        "cityCode": "101150502"
      },
      {
        "cityName": "甘德",
        "province": "青海",
        "cityPinyin": "gande",
        "cityCode": "101150503"
      },
      {
        "cityName": "达日",
        "province": "青海",
        "cityPinyin": "dari",
        "cityCode": "101150504"
      },
      {
        "cityName": "久治",
        "province": "青海",
        "cityPinyin": "jiuzhi",
        "cityCode": "101150505"
      },
      {
        "cityName": "玛多",
        "province": "青海",
        "cityPinyin": "madu",
        "cityCode": "101150506"
      },
      {
        "cityName": "多县",
        "province": "青海",
        "cityPinyin": "duoxian",
        "cityCode": "101150507"
      },
      {
        "cityName": "玛沁",
        "province": "青海",
        "cityPinyin": "maqin",
        "cityCode": "101150508"
      },
      {
        "cityName": "玉树",
        "province": "青海",
        "cityPinyin": "yushu",
        "cityCode": "101150601"
      },
      {
        "cityName": "称多",
        "province": "青海",
        "cityPinyin": "chenduo",
        "cityCode": "101150602"
      },
      {
        "cityName": "治多",
        "province": "青海",
        "cityPinyin": "zhiduo",
        "cityCode": "101150603"
      },
      {
        "cityName": "杂多",
        "province": "青海",
        "cityPinyin": "zaduo",
        "cityCode": "101150604"
      },
      {
        "cityName": "囊谦",
        "province": "青海",
        "cityPinyin": "nangqian",
        "cityCode": "101150605"
      },
      {
        "cityName": "曲麻莱",
        "province": "青海",
        "cityPinyin": "qumacai",
        "cityCode": "101150606"
      },
      {
        "cityName": "海西",
        "province": "青海",
        "cityPinyin": "haixi",
        "cityCode": "101150701"
      },
      {
        "cityName": "天峻",
        "province": "青海",
        "cityPinyin": "tianjun",
        "cityCode": "101150708"
      },
      {
        "cityName": "乌兰",
        "province": "青海",
        "cityPinyin": "wulan",
        "cityCode": "101150709"
      },
      {
        "cityName": "茫崖",
        "province": "青海",
        "cityPinyin": "mangai",
        "cityCode": "101150712"
      },
      {
        "cityName": "大柴旦",
        "province": "青海",
        "cityPinyin": "dachaidan",
        "cityCode": "101150713"
      },
      {
        "cityName": "德令哈",
        "province": "青海",
        "cityPinyin": "delingha",
        "cityCode": "101150716"
      },
      {
        "cityName": "海北",
        "province": "青海",
        "cityPinyin": "haibei",
        "cityCode": "101150801"
      },
      {
        "cityName": "门源",
        "province": "青海",
        "cityPinyin": "menyuan",
        "cityCode": "101150802"
      },
      {
        "cityName": "祁连",
        "province": "青海",
        "cityPinyin": "qilian",
        "cityCode": "101150803"
      },
      {
        "cityName": "海晏",
        "province": "青海",
        "cityPinyin": "haiman",
        "cityCode": "101150804"
      },
      {
        "cityName": "刚察",
        "province": "青海",
        "cityPinyin": "gangcha",
        "cityCode": "101150806"
      },
      {
        "cityName": "格尔木",
        "province": "青海",
        "cityPinyin": "geermu",
        "cityCode": "101150901"
      },
      {
        "cityName": "都兰",
        "province": "青海",
        "cityPinyin": "dulan",
        "cityCode": "101150902"
      },
      {
        "cityName": "甘肃",
        "province": "甘肃",
        "cityPinyin": "lanzhou",
        "cityCode": "101160101"
      },
      {
        "cityName": "兰州",
        "province": "甘肃",
        "cityPinyin": "lanzhou",
        "cityCode": "101160101"
      },
      {
        "cityName": "皋兰",
        "province": "甘肃",
        "cityPinyin": "gaolan",
        "cityCode": "101160102"
      },
      {
        "cityName": "永登",
        "province": "甘肃",
        "cityPinyin": "yongdeng",
        "cityCode": "101160103"
      },
      {
        "cityName": "榆中",
        "province": "甘肃",
        "cityPinyin": "yuzhong",
        "cityCode": "101160104"
      },
      {
        "cityName": "定西",
        "province": "甘肃",
        "cityPinyin": "dingxi",
        "cityCode": "101160201"
      },
      {
        "cityName": "通渭",
        "province": "甘肃",
        "cityPinyin": "tongwei",
        "cityCode": "101160202"
      },
      {
        "cityName": "陇西",
        "province": "甘肃",
        "cityPinyin": "longxi",
        "cityCode": "101160203"
      },
      {
        "cityName": "渭源",
        "province": "甘肃",
        "cityPinyin": "weiyuan",
        "cityCode": "101160204"
      },
      {
        "cityName": "临洮",
        "province": "甘肃",
        "cityPinyin": "lintao",
        "cityCode": "101160205"
      },
      {
        "cityName": "漳县",
        "province": "甘肃",
        "cityPinyin": "zhangxian",
        "cityCode": "101160206"
      },
      {
        "cityName": "岷县",
        "province": "甘肃",
        "cityPinyin": "minxian",
        "cityCode": "101160207"
      },
      {
        "cityName": "安定",
        "province": "甘肃",
        "cityPinyin": "anding",
        "cityCode": "101160208"
      },
      {
        "cityName": "平凉",
        "province": "甘肃",
        "cityPinyin": "pingliang",
        "cityCode": "101160301"
      },
      {
        "cityName": "泾川",
        "province": "甘肃",
        "cityPinyin": "jingchuan",
        "cityCode": "101160302"
      },
      {
        "cityName": "灵台",
        "province": "甘肃",
        "cityPinyin": "lingtai",
        "cityCode": "101160303"
      },
      {
        "cityName": "崇信",
        "province": "甘肃",
        "cityPinyin": "chongxin",
        "cityCode": "101160304"
      },
      {
        "cityName": "华亭",
        "province": "甘肃",
        "cityPinyin": "huating",
        "cityCode": "101160305"
      },
      {
        "cityName": "庄浪",
        "province": "甘肃",
        "cityPinyin": "zhuanglang",
        "cityCode": "101160306"
      },
      {
        "cityName": "静宁",
        "province": "甘肃",
        "cityPinyin": "jingning",
        "cityCode": "101160307"
      },
      {
        "cityName": "崆峒",
        "province": "甘肃",
        "cityPinyin": "kongtong",
        "cityCode": "101160308"
      },
      {
        "cityName": "庆阳",
        "province": "甘肃",
        "cityPinyin": "qingyang",
        "cityCode": "101160401"
      },
      {
        "cityName": "西峰",
        "province": "甘肃",
        "cityPinyin": "xifeng",
        "cityCode": "101160402"
      },
      {
        "cityName": "环县",
        "province": "甘肃",
        "cityPinyin": "huanxian",
        "cityCode": "101160403"
      },
      {
        "cityName": "华池",
        "province": "甘肃",
        "cityPinyin": "huachi",
        "cityCode": "101160404"
      },
      {
        "cityName": "合水",
        "province": "甘肃",
        "cityPinyin": "heshui",
        "cityCode": "101160405"
      },
      {
        "cityName": "正宁",
        "province": "甘肃",
        "cityPinyin": "zhengning",
        "cityCode": "101160406"
      },
      {
        "cityName": "宁县",
        "province": "甘肃",
        "cityPinyin": "ningxian",
        "cityCode": "101160407"
      },
      {
        "cityName": "镇原",
        "province": "甘肃",
        "cityPinyin": "zhenyuan",
        "cityCode": "101160408"
      },
      {
        "cityName": "庆城",
        "province": "甘肃",
        "cityPinyin": "qingcheng",
        "cityCode": "101160409"
      },
      {
        "cityName": "武威",
        "province": "甘肃",
        "cityPinyin": "wuwei",
        "cityCode": "101160501"
      },
      {
        "cityName": "民勤",
        "province": "甘肃",
        "cityPinyin": "minqin",
        "cityCode": "101160502"
      },
      {
        "cityName": "古浪",
        "province": "甘肃",
        "cityPinyin": "gulang",
        "cityCode": "101160503"
      },
      {
        "cityName": "天祝",
        "province": "甘肃",
        "cityPinyin": "tianzhu",
        "cityCode": "101160505"
      },
      {
        "cityName": "金昌",
        "province": "甘肃",
        "cityPinyin": "jinchang",
        "cityCode": "101160601"
      },
      {
        "cityName": "永昌",
        "province": "甘肃",
        "cityPinyin": "yongchang",
        "cityCode": "101160602"
      },
      {
        "cityName": "张掖",
        "province": "甘肃",
        "cityPinyin": "zhangye",
        "cityCode": "101160701"
      },
      {
        "cityName": "肃南",
        "province": "甘肃",
        "cityPinyin": "sunan",
        "cityCode": "101160702"
      },
      {
        "cityName": "民乐",
        "province": "甘肃",
        "cityPinyin": "minle",
        "cityCode": "101160703"
      },
      {
        "cityName": "临泽",
        "province": "甘肃",
        "cityPinyin": "linze",
        "cityCode": "101160704"
      },
      {
        "cityName": "高台",
        "province": "甘肃",
        "cityPinyin": "gaotai",
        "cityCode": "101160705"
      },
      {
        "cityName": "山丹",
        "province": "甘肃",
        "cityPinyin": "shandan",
        "cityCode": "101160706"
      },
      {
        "cityName": "酒泉",
        "province": "甘肃",
        "cityPinyin": "jiuquan",
        "cityCode": "101160801"
      },
      {
        "cityName": "金塔",
        "province": "甘肃",
        "cityPinyin": "jinta",
        "cityCode": "101160803"
      },
      {
        "cityName": "阿克塞",
        "province": "甘肃",
        "cityPinyin": "akesai",
        "cityCode": "101160804"
      },
      {
        "cityName": "瓜州",
        "province": "甘肃",
        "cityPinyin": "guazhou",
        "cityCode": "101160805"
      },
      {
        "cityName": "肃北",
        "province": "甘肃",
        "cityPinyin": "subei",
        "cityCode": "101160806"
      },
      {
        "cityName": "玉门",
        "province": "甘肃",
        "cityPinyin": "yumen",
        "cityCode": "101160807"
      },
      {
        "cityName": "敦煌",
        "province": "甘肃",
        "cityPinyin": "dunhuang",
        "cityCode": "101160808"
      },
      {
        "cityName": "天水",
        "province": "甘肃",
        "cityPinyin": "tianshui",
        "cityCode": "101160901"
      },
      {
        "cityName": "清水",
        "province": "甘肃",
        "cityPinyin": "qingshui",
        "cityCode": "101160903"
      },
      {
        "cityName": "秦安",
        "province": "甘肃",
        "cityPinyin": "qinan",
        "cityCode": "101160904"
      },
      {
        "cityName": "甘谷",
        "province": "甘肃",
        "cityPinyin": "gangu",
        "cityCode": "101160905"
      },
      {
        "cityName": "武山",
        "province": "甘肃",
        "cityPinyin": "wushan",
        "cityCode": "101160906"
      },
      {
        "cityName": "张家川",
        "province": "甘肃",
        "cityPinyin": "zhangjiachuan",
        "cityCode": "101160907"
      },
      {
        "cityName": "麦积",
        "province": "甘肃",
        "cityPinyin": "maiji",
        "cityCode": "101160908"
      },
      {
        "cityName": "武都",
        "province": "甘肃",
        "cityPinyin": "wudu",
        "cityCode": "101161001"
      },
      {
        "cityName": "成县",
        "province": "甘肃",
        "cityPinyin": "chengxian",
        "cityCode": "101161002"
      },
      {
        "cityName": "文县",
        "province": "甘肃",
        "cityPinyin": "wenxian",
        "cityCode": "101161003"
      },
      {
        "cityName": "宕昌",
        "province": "甘肃",
        "cityPinyin": "dangchang",
        "cityCode": "101161004"
      },
      {
        "cityName": "康县",
        "province": "甘肃",
        "cityPinyin": "kangxian",
        "cityCode": "101161005"
      },
      {
        "cityName": "西和",
        "province": "甘肃",
        "cityPinyin": "xihe",
        "cityCode": "101161006"
      },
      {
        "cityName": "礼县",
        "province": "甘肃",
        "cityPinyin": "lixian",
        "cityCode": "101161007"
      },
      {
        "cityName": "徽县",
        "province": "甘肃",
        "cityPinyin": "huixian",
        "cityCode": "101161008"
      },
      {
        "cityName": "两当",
        "province": "甘肃",
        "cityPinyin": "liangdang",
        "cityCode": "101161009"
      },
      {
        "cityName": "临夏",
        "province": "甘肃",
        "cityPinyin": "linxia",
        "cityCode": "101161101"
      },
      {
        "cityName": "康乐",
        "province": "甘肃",
        "cityPinyin": "kangle",
        "cityCode": "101161102"
      },
      {
        "cityName": "永靖",
        "province": "甘肃",
        "cityPinyin": "yongjing",
        "cityCode": "101161103"
      },
      {
        "cityName": "广河",
        "province": "甘肃",
        "cityPinyin": "guanghe",
        "cityCode": "101161104"
      },
      {
        "cityName": "和政",
        "province": "甘肃",
        "cityPinyin": "hezheng",
        "cityCode": "101161105"
      },
      {
        "cityName": "东乡",
        "province": "甘肃",
        "cityPinyin": "dongxiang",
        "cityCode": "101161106"
      },
      {
        "cityName": "积石山",
        "province": "甘肃",
        "cityPinyin": "jishishan",
        "cityCode": "101161107"
      },
      {
        "cityName": "合作",
        "province": "甘肃",
        "cityPinyin": "hezuo",
        "cityCode": "101161201"
      },
      {
        "cityName": "临潭",
        "province": "甘肃",
        "cityPinyin": "lintan",
        "cityCode": "101161202"
      },
      {
        "cityName": "卓尼",
        "province": "甘肃",
        "cityPinyin": "zhuoni",
        "cityCode": "101161203"
      },
      {
        "cityName": "舟曲",
        "province": "甘肃",
        "cityPinyin": "zhouqu",
        "cityCode": "101161204"
      },
      {
        "cityName": "迭部",
        "province": "甘肃",
        "cityPinyin": "diebu",
        "cityCode": "101161205"
      },
      {
        "cityName": "玛曲",
        "province": "甘肃",
        "cityPinyin": "maqu",
        "cityCode": "101161206"
      },
      {
        "cityName": "碌曲",
        "province": "甘肃",
        "cityPinyin": "luqu",
        "cityCode": "101161207"
      },
      {
        "cityName": "夏河",
        "province": "甘肃",
        "cityPinyin": "xiahe",
        "cityCode": "101161208"
      },
      {
        "cityName": "白银",
        "province": "甘肃",
        "cityPinyin": "baiyin",
        "cityCode": "101161301"
      },
      {
        "cityName": "靖远",
        "province": "甘肃",
        "cityPinyin": "jingyuan",
        "cityCode": "101161302"
      },
      {
        "cityName": "会宁",
        "province": "甘肃",
        "cityPinyin": "huining",
        "cityCode": "101161303"
      },
      {
        "cityName": "平川",
        "province": "甘肃",
        "cityPinyin": "pingchuan",
        "cityCode": "101161304"
      },
      {
        "cityName": "景泰",
        "province": "甘肃",
        "cityPinyin": "jingtai",
        "cityCode": "101161305"
      },
      {
        "cityName": "嘉峪关",
        "province": "甘肃",
        "cityPinyin": "jiayuguan",
        "cityCode": "101161401"
      },
      {
        "cityName": "宁夏",
        "province": "宁夏",
        "cityPinyin": "yinchuan",
        "cityCode": "101170101"
      },
      {
        "cityName": "银川",
        "province": "宁夏",
        "cityPinyin": "yinchuan",
        "cityCode": "101170101"
      },
      {
        "cityName": "永宁",
        "province": "宁夏",
        "cityPinyin": "yongning",
        "cityCode": "101170102"
      },
      {
        "cityName": "灵武",
        "province": "宁夏",
        "cityPinyin": "lingwu",
        "cityCode": "101170103"
      },
      {
        "cityName": "贺兰",
        "province": "宁夏",
        "cityPinyin": "helan",
        "cityCode": "101170104"
      },
      {
        "cityName": "石嘴山",
        "province": "宁夏",
        "cityPinyin": "shizuishan",
        "cityCode": "101170201"
      },
      {
        "cityName": "惠农",
        "province": "宁夏",
        "cityPinyin": "huinong",
        "cityCode": "101170202"
      },
      {
        "cityName": "平罗",
        "province": "宁夏",
        "cityPinyin": "pingluo",
        "cityCode": "101170203"
      },
      {
        "cityName": "陶乐",
        "province": "宁夏",
        "cityPinyin": "taole",
        "cityCode": "101170204"
      },
      {
        "cityName": "大武口",
        "province": "宁夏",
        "cityPinyin": "dawukou",
        "cityCode": "101170206"
      },
      {
        "cityName": "吴忠",
        "province": "宁夏",
        "cityPinyin": "wuzhong",
        "cityCode": "101170301"
      },
      {
        "cityName": "同心",
        "province": "宁夏",
        "cityPinyin": "tongxin",
        "cityCode": "101170302"
      },
      {
        "cityName": "盐池",
        "province": "宁夏",
        "cityPinyin": "yanchi",
        "cityCode": "101170303"
      },
      {
        "cityName": "青铜峡",
        "province": "宁夏",
        "cityPinyin": "qingtongxia",
        "cityCode": "101170306"
      },
      {
        "cityName": "固原",
        "province": "宁夏",
        "cityPinyin": "guyuan",
        "cityCode": "101170401"
      },
      {
        "cityName": "西吉",
        "province": "宁夏",
        "cityPinyin": "xiji",
        "cityCode": "101170402"
      },
      {
        "cityName": "隆德",
        "province": "宁夏",
        "cityPinyin": "longde",
        "cityCode": "101170403"
      },
      {
        "cityName": "泾源",
        "province": "宁夏",
        "cityPinyin": "jinyuan",
        "cityCode": "101170404"
      },
      {
        "cityName": "彭阳",
        "province": "宁夏",
        "cityPinyin": "pengyang",
        "cityCode": "101170406"
      },
      {
        "cityName": "中卫",
        "province": "宁夏",
        "cityPinyin": "zhongwei",
        "cityCode": "101170501"
      },
      {
        "cityName": "中宁",
        "province": "宁夏",
        "cityPinyin": "zhongning",
        "cityCode": "101170502"
      },
      {
        "cityName": "海原",
        "province": "宁夏",
        "cityPinyin": "haiyuan",
        "cityCode": "101170504"
      },
      {
        "cityName": "河南",
        "province": "河南",
        "cityPinyin": "zhengzhou",
        "cityCode": "101180101"
      },
      {
        "cityName": "郑州",
        "province": "河南",
        "cityPinyin": "zhengzhou",
        "cityCode": "101180101"
      },
      {
        "cityName": "巩义",
        "province": "河南",
        "cityPinyin": "gongyi",
        "cityCode": "101180102"
      },
      {
        "cityName": "荥阳",
        "province": "河南",
        "cityPinyin": "xingyang",
        "cityCode": "101180103"
      },
      {
        "cityName": "登封",
        "province": "河南",
        "cityPinyin": "dengfeng",
        "cityCode": "101180104"
      },
      {
        "cityName": "新密",
        "province": "河南",
        "cityPinyin": "xinmi",
        "cityCode": "101180105"
      },
      {
        "cityName": "新郑",
        "province": "河南",
        "cityPinyin": "xinzheng",
        "cityCode": "101180106"
      },
      {
        "cityName": "中牟",
        "province": "河南",
        "cityPinyin": "zhongmou",
        "cityCode": "101180107"
      },
      {
        "cityName": "上街",
        "province": "河南",
        "cityPinyin": "shangjie",
        "cityCode": "101180108"
      },
      {
        "cityName": "安阳",
        "province": "河南",
        "cityPinyin": "anyang",
        "cityCode": "101180201"
      },
      {
        "cityName": "汤阴",
        "province": "河南",
        "cityPinyin": "tangyin",
        "cityCode": "101180202"
      },
      {
        "cityName": "滑县",
        "province": "河南",
        "cityPinyin": "huaxian",
        "cityCode": "101180203"
      },
      {
        "cityName": "内黄",
        "province": "河南",
        "cityPinyin": "neihuang",
        "cityCode": "101180204"
      },
      {
        "cityName": "林州",
        "province": "河南",
        "cityPinyin": "linzhou",
        "cityCode": "101180205"
      },
      {
        "cityName": "新乡",
        "province": "河南",
        "cityPinyin": "xinxiang",
        "cityCode": "101180301"
      },
      {
        "cityName": "获嘉",
        "province": "河南",
        "cityPinyin": "huojia",
        "cityCode": "101180302"
      },
      {
        "cityName": "原阳",
        "province": "河南",
        "cityPinyin": "yuanyang",
        "cityCode": "101180303"
      },
      {
        "cityName": "辉县",
        "province": "河南",
        "cityPinyin": "huixian",
        "cityCode": "101180304"
      },
      {
        "cityName": "卫辉",
        "province": "河南",
        "cityPinyin": "weihui",
        "cityCode": "101180305"
      },
      {
        "cityName": "延津",
        "province": "河南",
        "cityPinyin": "yanjin",
        "cityCode": "101180306"
      },
      {
        "cityName": "封丘",
        "province": "河南",
        "cityPinyin": "fengqiu",
        "cityCode": "101180307"
      },
      {
        "cityName": "长垣",
        "province": "河南",
        "cityPinyin": "changyuan",
        "cityCode": "101180308"
      },
      {
        "cityName": "许昌",
        "province": "河南",
        "cityPinyin": "xuchang",
        "cityCode": "101180401"
      },
      {
        "cityName": "鄢陵",
        "province": "河南",
        "cityPinyin": "yanling",
        "cityCode": "101180402"
      },
      {
        "cityName": "襄城",
        "province": "河南",
        "cityPinyin": "xiangcheng",
        "cityCode": "101180403"
      },
      {
        "cityName": "长葛",
        "province": "河南",
        "cityPinyin": "changge",
        "cityCode": "101180404"
      },
      {
        "cityName": "禹州",
        "province": "河南",
        "cityPinyin": "yuzhou",
        "cityCode": "101180405"
      },
      {
        "cityName": "平顶山",
        "province": "河南",
        "cityPinyin": "pingdingshan",
        "cityCode": "101180501"
      },
      {
        "cityName": "郏县",
        "province": "河南",
        "cityPinyin": "jiaxian",
        "cityCode": "101180502"
      },
      {
        "cityName": "宝丰",
        "province": "河南",
        "cityPinyin": "baofeng",
        "cityCode": "101180503"
      },
      {
        "cityName": "汝州",
        "province": "河南",
        "cityPinyin": "ruzhou",
        "cityCode": "101180504"
      },
      {
        "cityName": "叶县",
        "province": "河南",
        "cityPinyin": "yexian",
        "cityCode": "101180505"
      },
      {
        "cityName": "舞钢",
        "province": "河南",
        "cityPinyin": "wugang",
        "cityCode": "101180506"
      },
      {
        "cityName": "鲁山",
        "province": "河南",
        "cityPinyin": "lushan",
        "cityCode": "101180507"
      },
      {
        "cityName": "石龙",
        "province": "河南",
        "cityPinyin": "shilong",
        "cityCode": "101180508"
      },
      {
        "cityName": "信阳",
        "province": "河南",
        "cityPinyin": "xinyang",
        "cityCode": "101180601"
      },
      {
        "cityName": "息县",
        "province": "河南",
        "cityPinyin": "xixian",
        "cityCode": "101180602"
      },
      {
        "cityName": "罗山",
        "province": "河南",
        "cityPinyin": "luoshan",
        "cityCode": "101180603"
      },
      {
        "cityName": "光山",
        "province": "河南",
        "cityPinyin": "guangshan",
        "cityCode": "101180604"
      },
      {
        "cityName": "新县",
        "province": "河南",
        "cityPinyin": "xinxian",
        "cityCode": "101180605"
      },
      {
        "cityName": "淮滨",
        "province": "河南",
        "cityPinyin": "huaibin",
        "cityCode": "101180606"
      },
      {
        "cityName": "潢川",
        "province": "河南",
        "cityPinyin": "huangchuan",
        "cityCode": "101180607"
      },
      {
        "cityName": "固始",
        "province": "河南",
        "cityPinyin": "gushi",
        "cityCode": "101180608"
      },
      {
        "cityName": "商城",
        "province": "河南",
        "cityPinyin": "shangcheng",
        "cityCode": "101180609"
      },
      {
        "cityName": "南阳",
        "province": "河南",
        "cityPinyin": "nanyang",
        "cityCode": "101180701"
      },
      {
        "cityName": "南召",
        "province": "河南",
        "cityPinyin": "nanzhao",
        "cityCode": "101180702"
      },
      {
        "cityName": "方城",
        "province": "河南",
        "cityPinyin": "fangcheng",
        "cityCode": "101180703"
      },
      {
        "cityName": "社旗",
        "province": "河南",
        "cityPinyin": "sheqi",
        "cityCode": "101180704"
      },
      {
        "cityName": "西峡",
        "province": "河南",
        "cityPinyin": "xixia",
        "cityCode": "101180705"
      },
      {
        "cityName": "内乡",
        "province": "河南",
        "cityPinyin": "neixiang",
        "cityCode": "101180706"
      },
      {
        "cityName": "镇平",
        "province": "河南",
        "cityPinyin": "zhenping",
        "cityCode": "101180707"
      },
      {
        "cityName": "淅川",
        "province": "河南",
        "cityPinyin": "xichuan",
        "cityCode": "101180708"
      },
      {
        "cityName": "新野",
        "province": "河南",
        "cityPinyin": "xinye",
        "cityCode": "101180709"
      },
      {
        "cityName": "唐河",
        "province": "河南",
        "cityPinyin": "tanghe",
        "cityCode": "101180710"
      },
      {
        "cityName": "邓州",
        "province": "河南",
        "cityPinyin": "dengzhou",
        "cityCode": "101180711"
      },
      {
        "cityName": "桐柏",
        "province": "河南",
        "cityPinyin": "tongbai",
        "cityCode": "101180712"
      },
      {
        "cityName": "开封",
        "province": "河南",
        "cityPinyin": "kaifeng",
        "cityCode": "101180801"
      },
      {
        "cityName": "杞县",
        "province": "河南",
        "cityPinyin": "qixian",
        "cityCode": "101180802"
      },
      {
        "cityName": "尉氏",
        "province": "河南",
        "cityPinyin": "weishi",
        "cityCode": "101180803"
      },
      {
        "cityName": "通许",
        "province": "河南",
        "cityPinyin": "tongxu",
        "cityCode": "101180804"
      },
      {
        "cityName": "兰考",
        "province": "河南",
        "cityPinyin": "lankao",
        "cityCode": "101180805"
      },
      {
        "cityName": "洛阳",
        "province": "河南",
        "cityPinyin": "luoyang",
        "cityCode": "101180901"
      },
      {
        "cityName": "新安",
        "province": "河南",
        "cityPinyin": "xinan",
        "cityCode": "101180902"
      },
      {
        "cityName": "孟津",
        "province": "河南",
        "cityPinyin": "mengjin",
        "cityCode": "101180903"
      },
      {
        "cityName": "宜阳",
        "province": "河南",
        "cityPinyin": "yiyang",
        "cityCode": "101180904"
      },
      {
        "cityName": "洛宁",
        "province": "河南",
        "cityPinyin": "luoning",
        "cityCode": "101180905"
      },
      {
        "cityName": "伊川",
        "province": "河南",
        "cityPinyin": "yichuan",
        "cityCode": "101180906"
      },
      {
        "cityName": "嵩县",
        "province": "河南",
        "cityPinyin": "songxian",
        "cityCode": "101180907"
      },
      {
        "cityName": "偃师",
        "province": "河南",
        "cityPinyin": "yanshi",
        "cityCode": "101180908"
      },
      {
        "cityName": "栾川",
        "province": "河南",
        "cityPinyin": "luanchuan",
        "cityCode": "101180909"
      },
      {
        "cityName": "汝阳",
        "province": "河南",
        "cityPinyin": "ruyang",
        "cityCode": "101180910"
      },
      {
        "cityName": "吉利",
        "province": "河南",
        "cityPinyin": "jili",
        "cityCode": "101180911"
      },
      {
        "cityName": "商丘",
        "province": "河南",
        "cityPinyin": "shangqiu",
        "cityCode": "101181001"
      },
      {
        "cityName": "睢县",
        "province": "河南",
        "cityPinyin": "suixian",
        "cityCode": "101181003"
      },
      {
        "cityName": "民权",
        "province": "河南",
        "cityPinyin": "minquan",
        "cityCode": "101181004"
      },
      {
        "cityName": "虞城",
        "province": "河南",
        "cityPinyin": "yucheng",
        "cityCode": "101181005"
      },
      {
        "cityName": "柘城",
        "province": "河南",
        "cityPinyin": "zhecheng",
        "cityCode": "101181006"
      },
      {
        "cityName": "宁陵",
        "province": "河南",
        "cityPinyin": "ningling",
        "cityCode": "101181007"
      },
      {
        "cityName": "夏邑",
        "province": "河南",
        "cityPinyin": "xiayi",
        "cityCode": "101181008"
      },
      {
        "cityName": "永城",
        "province": "河南",
        "cityPinyin": "yongcheng",
        "cityCode": "101181009"
      },
      {
        "cityName": "焦作",
        "province": "河南",
        "cityPinyin": "jiaozuo",
        "cityCode": "101181101"
      },
      {
        "cityName": "修武",
        "province": "河南",
        "cityPinyin": "xiuwu",
        "cityCode": "101181102"
      },
      {
        "cityName": "武陟",
        "province": "河南",
        "cityPinyin": "wuzhi",
        "cityCode": "101181103"
      },
      {
        "cityName": "沁阳",
        "province": "河南",
        "cityPinyin": "qinyang",
        "cityCode": "101181104"
      },
      {
        "cityName": "博爱",
        "province": "河南",
        "cityPinyin": "boai",
        "cityCode": "101181106"
      },
      {
        "cityName": "温县",
        "province": "河南",
        "cityPinyin": "wenxian",
        "cityCode": "101181107"
      },
      {
        "cityName": "孟州",
        "province": "河南",
        "cityPinyin": "mengzhou",
        "cityCode": "101181108"
      },
      {
        "cityName": "鹤壁",
        "province": "河南",
        "cityPinyin": "hebi",
        "cityCode": "101181201"
      },
      {
        "cityName": "浚县",
        "province": "河南",
        "cityPinyin": "xunxian",
        "cityCode": "101181202"
      },
      {
        "cityName": "淇县",
        "province": "河南",
        "cityPinyin": "qixian",
        "cityCode": "101181203"
      },
      {
        "cityName": "濮阳",
        "province": "河南",
        "cityPinyin": "puyang",
        "cityCode": "101181301"
      },
      {
        "cityName": "台前",
        "province": "河南",
        "cityPinyin": "taiqian",
        "cityCode": "101181302"
      },
      {
        "cityName": "南乐",
        "province": "河南",
        "cityPinyin": "nanle",
        "cityCode": "101181303"
      },
      {
        "cityName": "清丰",
        "province": "河南",
        "cityPinyin": "qingfeng",
        "cityCode": "101181304"
      },
      {
        "cityName": "范县",
        "province": "河南",
        "cityPinyin": "fanxian",
        "cityCode": "101181305"
      },
      {
        "cityName": "周口",
        "province": "河南",
        "cityPinyin": "zhoukou",
        "cityCode": "101181401"
      },
      {
        "cityName": "扶沟",
        "province": "河南",
        "cityPinyin": "fugou",
        "cityCode": "101181402"
      },
      {
        "cityName": "太康",
        "province": "河南",
        "cityPinyin": "taikang",
        "cityCode": "101181403"
      },
      {
        "cityName": "淮阳",
        "province": "河南",
        "cityPinyin": "huaiyang",
        "cityCode": "101181404"
      },
      {
        "cityName": "西华",
        "province": "河南",
        "cityPinyin": "xihua",
        "cityCode": "101181405"
      },
      {
        "cityName": "商水",
        "province": "河南",
        "cityPinyin": "shangshui",
        "cityCode": "101181406"
      },
      {
        "cityName": "项城",
        "province": "河南",
        "cityPinyin": "xiangcheng",
        "cityCode": "101181407"
      },
      {
        "cityName": "郸城",
        "province": "河南",
        "cityPinyin": "dancheng",
        "cityCode": "101181408"
      },
      {
        "cityName": "鹿邑",
        "province": "河南",
        "cityPinyin": "luyi",
        "cityCode": "101181409"
      },
      {
        "cityName": "沈丘",
        "province": "河南",
        "cityPinyin": "shenqiu",
        "cityCode": "101181410"
      },
      {
        "cityName": "漯河",
        "province": "河南",
        "cityPinyin": "luohe",
        "cityCode": "101181501"
      },
      {
        "cityName": "临颍",
        "province": "河南",
        "cityPinyin": "linying",
        "cityCode": "101181502"
      },
      {
        "cityName": "舞阳",
        "province": "河南",
        "cityPinyin": "wuyang",
        "cityCode": "101181503"
      },
      {
        "cityName": "驻马店",
        "province": "河南",
        "cityPinyin": "zhumadian",
        "cityCode": "101181601"
      },
      {
        "cityName": "西平",
        "province": "河南",
        "cityPinyin": "xiping",
        "cityCode": "101181602"
      },
      {
        "cityName": "遂平",
        "province": "河南",
        "cityPinyin": "suiping",
        "cityCode": "101181603"
      },
      {
        "cityName": "上蔡",
        "province": "河南",
        "cityPinyin": "shangcai",
        "cityCode": "101181604"
      },
      {
        "cityName": "汝南",
        "province": "河南",
        "cityPinyin": "runan",
        "cityCode": "101181605"
      },
      {
        "cityName": "泌阳",
        "province": "河南",
        "cityPinyin": "biyang",
        "cityCode": "101181606"
      },
      {
        "cityName": "平舆",
        "province": "河南",
        "cityPinyin": "pingyu",
        "cityCode": "101181607"
      },
      {
        "cityName": "新蔡",
        "province": "河南",
        "cityPinyin": "xincai",
        "cityCode": "101181608"
      },
      {
        "cityName": "确山",
        "province": "河南",
        "cityPinyin": "queshan",
        "cityCode": "101181609"
      },
      {
        "cityName": "正阳",
        "province": "河南",
        "cityPinyin": "zhengyang",
        "cityCode": "101181610"
      },
      {
        "cityName": "三门峡",
        "province": "河南",
        "cityPinyin": "sanmenxia",
        "cityCode": "101181701"
      },
      {
        "cityName": "灵宝",
        "province": "河南",
        "cityPinyin": "lingbao",
        "cityCode": "101181702"
      },
      {
        "cityName": "渑池",
        "province": "河南",
        "cityPinyin": "mianchi",
        "cityCode": "101181703"
      },
      {
        "cityName": "卢氏",
        "province": "河南",
        "cityPinyin": "lushi",
        "cityCode": "101181704"
      },
      {
        "cityName": "义马",
        "province": "河南",
        "cityPinyin": "yima",
        "cityCode": "101181705"
      },
      {
        "cityName": "陕县",
        "province": "河南",
        "cityPinyin": "shanxian",
        "cityCode": "101181706"
      },
      {
        "cityName": "济源",
        "province": "河南",
        "cityPinyin": "jiyuan",
        "cityCode": "101181801"
      },
      {
        "cityName": "江苏",
        "province": "江苏",
        "cityPinyin": "nanjing",
        "cityCode": "101190101"
      },
      {
        "cityName": "南京",
        "province": "江苏",
        "cityPinyin": "nanjing",
        "cityCode": "101190101"
      },
      {
        "cityName": "溧水",
        "province": "江苏",
        "cityPinyin": "lishui",
        "cityCode": "101190102"
      },
      {
        "cityName": "高淳",
        "province": "江苏",
        "cityPinyin": "gaochun",
        "cityCode": "101190103"
      },
      {
        "cityName": "江宁",
        "province": "江苏",
        "cityPinyin": "jiangning",
        "cityCode": "101190104"
      },
      {
        "cityName": "六合",
        "province": "江苏",
        "cityPinyin": "luhe",
        "cityCode": "101190105"
      },
      {
        "cityName": "江浦",
        "province": "江苏",
        "cityPinyin": "jiangpu",
        "cityCode": "101190106"
      },
      {
        "cityName": "浦口",
        "province": "江苏",
        "cityPinyin": "pukou",
        "cityCode": "101190107"
      },
      {
        "cityName": "无锡",
        "province": "江苏",
        "cityPinyin": "wuxi",
        "cityCode": "101190201"
      },
      {
        "cityName": "江阴",
        "province": "江苏",
        "cityPinyin": "jiangyin",
        "cityCode": "101190202"
      },
      {
        "cityName": "宜兴",
        "province": "江苏",
        "cityPinyin": "yixing",
        "cityCode": "101190203"
      },
      {
        "cityName": "锡山",
        "province": "江苏",
        "cityPinyin": "xishan",
        "cityCode": "101190204"
      },
      {
        "cityName": "镇江",
        "province": "江苏",
        "cityPinyin": "zhenjiang",
        "cityCode": "101190301"
      },
      {
        "cityName": "丹阳",
        "province": "江苏",
        "cityPinyin": "danyang",
        "cityCode": "101190302"
      },
      {
        "cityName": "扬中",
        "province": "江苏",
        "cityPinyin": "yangzhong",
        "cityCode": "101190303"
      },
      {
        "cityName": "句容",
        "province": "江苏",
        "cityPinyin": "jurong",
        "cityCode": "101190304"
      },
      {
        "cityName": "丹徒",
        "province": "江苏",
        "cityPinyin": "dantu",
        "cityCode": "101190305"
      },
      {
        "cityName": "苏州",
        "province": "江苏",
        "cityPinyin": "suzhou",
        "cityCode": "101190401"
      },
      {
        "cityName": "常熟",
        "province": "江苏",
        "cityPinyin": "changshu",
        "cityCode": "101190402"
      },
      {
        "cityName": "张家港",
        "province": "江苏",
        "cityPinyin": "zhangjiagang",
        "cityCode": "101190403"
      },
      {
        "cityName": "昆山",
        "province": "江苏",
        "cityPinyin": "kunshan",
        "cityCode": "101190404"
      },
      {
        "cityName": "吴中",
        "province": "江苏",
        "cityPinyin": "wuzhong",
        "cityCode": "101190405"
      },
      {
        "cityName": "吴江",
        "province": "江苏",
        "cityPinyin": "wujiang",
        "cityCode": "101190407"
      },
      {
        "cityName": "太仓",
        "province": "江苏",
        "cityPinyin": "taicang",
        "cityCode": "101190408"
      },
      {
        "cityName": "南通",
        "province": "江苏",
        "cityPinyin": "nantong",
        "cityCode": "101190501"
      },
      {
        "cityName": "海安",
        "province": "江苏",
        "cityPinyin": "haian",
        "cityCode": "101190502"
      },
      {
        "cityName": "如皋",
        "province": "江苏",
        "cityPinyin": "rugao",
        "cityCode": "101190503"
      },
      {
        "cityName": "如东",
        "province": "江苏",
        "cityPinyin": "rudong",
        "cityCode": "101190504"
      },
      {
        "cityName": "启东",
        "province": "江苏",
        "cityPinyin": "qidong",
        "cityCode": "101190507"
      },
      {
        "cityName": "海门",
        "province": "江苏",
        "cityPinyin": "haimen",
        "cityCode": "101190508"
      },
      {
        "cityName": "通州",
        "province": "江苏",
        "cityPinyin": "tongzhou",
        "cityCode": "101190509"
      },
      {
        "cityName": "扬州",
        "province": "江苏",
        "cityPinyin": "yangzhou",
        "cityCode": "101190601"
      },
      {
        "cityName": "宝应",
        "province": "江苏",
        "cityPinyin": "baoying",
        "cityCode": "101190602"
      },
      {
        "cityName": "仪征",
        "province": "江苏",
        "cityPinyin": "yizheng",
        "cityCode": "101190603"
      },
      {
        "cityName": "高邮",
        "province": "江苏",
        "cityPinyin": "gaoyou",
        "cityCode": "101190604"
      },
      {
        "cityName": "江都",
        "province": "江苏",
        "cityPinyin": "jiangdu",
        "cityCode": "101190605"
      },
      {
        "cityName": "邗江",
        "province": "江苏",
        "cityPinyin": "hanjiang",
        "cityCode": "101190606"
      },
      {
        "cityName": "盐城",
        "province": "江苏",
        "cityPinyin": "yancheng",
        "cityCode": "101190701"
      },
      {
        "cityName": "响水",
        "province": "江苏",
        "cityPinyin": "xiangshui",
        "cityCode": "101190702"
      },
      {
        "cityName": "滨海",
        "province": "江苏",
        "cityPinyin": "binhai",
        "cityCode": "101190703"
      },
      {
        "cityName": "阜宁",
        "province": "江苏",
        "cityPinyin": "funing",
        "cityCode": "101190704"
      },
      {
        "cityName": "射阳",
        "province": "江苏",
        "cityPinyin": "sheyang",
        "cityCode": "101190705"
      },
      {
        "cityName": "建湖",
        "province": "江苏",
        "cityPinyin": "jianhu",
        "cityCode": "101190706"
      },
      {
        "cityName": "东台",
        "province": "江苏",
        "cityPinyin": "dongtai",
        "cityCode": "101190707"
      },
      {
        "cityName": "大丰",
        "province": "江苏",
        "cityPinyin": "dafeng",
        "cityCode": "101190708"
      },
      {
        "cityName": "盐都",
        "province": "江苏",
        "cityPinyin": "yandu",
        "cityCode": "101190709"
      },
      {
        "cityName": "徐州",
        "province": "江苏",
        "cityPinyin": "xuzhou",
        "cityCode": "101190801"
      },
      {
        "cityName": "铜山",
        "province": "江苏",
        "cityPinyin": "tongshan",
        "cityCode": "101190802"
      },
      {
        "cityName": "丰县",
        "province": "江苏",
        "cityPinyin": "fengxian",
        "cityCode": "101190803"
      },
      {
        "cityName": "沛县",
        "province": "江苏",
        "cityPinyin": "peixian",
        "cityCode": "101190804"
      },
      {
        "cityName": "邳州",
        "province": "江苏",
        "cityPinyin": "pizhou",
        "cityCode": "101190805"
      },
      {
        "cityName": "睢宁",
        "province": "江苏",
        "cityPinyin": "suining",
        "cityCode": "101190806"
      },
      {
        "cityName": "新沂",
        "province": "江苏",
        "cityPinyin": "xinyi",
        "cityCode": "101190807"
      },
      {
        "cityName": "淮安",
        "province": "江苏",
        "cityPinyin": "huaian",
        "cityCode": "101190901"
      },
      {
        "cityName": "金湖",
        "province": "江苏",
        "cityPinyin": "jinhu",
        "cityCode": "101190902"
      },
      {
        "cityName": "盱眙",
        "province": "江苏",
        "cityPinyin": "xuyi",
        "cityCode": "101190903"
      },
      {
        "cityName": "洪泽",
        "province": "江苏",
        "cityPinyin": "hongze",
        "cityCode": "101190904"
      },
      {
        "cityName": "涟水",
        "province": "江苏",
        "cityPinyin": "lianshui",
        "cityCode": "101190905"
      },
      {
        "cityName": "淮阴区",
        "province": "江苏",
        "cityPinyin": "huaiyinqu",
        "cityCode": "101190906"
      },
      {
        "cityName": "淮安区",
        "province": "江苏",
        "cityPinyin": "huaianqu",
        "cityCode": "101190908"
      },
      {
        "cityName": "连云港",
        "province": "江苏",
        "cityPinyin": "lianyungang",
        "cityCode": "101191001"
      },
      {
        "cityName": "东海",
        "province": "江苏",
        "cityPinyin": "donghai",
        "cityCode": "101191002"
      },
      {
        "cityName": "赣榆",
        "province": "江苏",
        "cityPinyin": "ganyu",
        "cityCode": "101191003"
      },
      {
        "cityName": "灌云",
        "province": "江苏",
        "cityPinyin": "guanyun",
        "cityCode": "101191004"
      },
      {
        "cityName": "灌南",
        "province": "江苏",
        "cityPinyin": "guannan",
        "cityCode": "101191005"
      },
      {
        "cityName": "常州",
        "province": "江苏",
        "cityPinyin": "changzhou",
        "cityCode": "101191101"
      },
      {
        "cityName": "溧阳",
        "province": "江苏",
        "cityPinyin": "liyang",
        "cityCode": "101191102"
      },
      {
        "cityName": "金坛",
        "province": "江苏",
        "cityPinyin": "jintan",
        "cityCode": "101191103"
      },
      {
        "cityName": "武进",
        "province": "江苏",
        "cityPinyin": "wujin",
        "cityCode": "101191104"
      },
      {
        "cityName": "泰州",
        "province": "江苏",
        "cityPinyin": "taizhou",
        "cityCode": "101191201"
      },
      {
        "cityName": "兴化",
        "province": "江苏",
        "cityPinyin": "xinghua",
        "cityCode": "101191202"
      },
      {
        "cityName": "泰兴",
        "province": "江苏",
        "cityPinyin": "taixing",
        "cityCode": "101191203"
      },
      {
        "cityName": "姜堰",
        "province": "江苏",
        "cityPinyin": "jiangyan",
        "cityCode": "101191204"
      },
      {
        "cityName": "靖江",
        "province": "江苏",
        "cityPinyin": "jingjiang",
        "cityCode": "101191205"
      },
      {
        "cityName": "宿迁",
        "province": "江苏",
        "cityPinyin": "suqian",
        "cityCode": "101191301"
      },
      {
        "cityName": "沭阳",
        "province": "江苏",
        "cityPinyin": "shuyang",
        "cityCode": "101191302"
      },
      {
        "cityName": "泗阳",
        "province": "江苏",
        "cityPinyin": "siyang",
        "cityCode": "101191303"
      },
      {
        "cityName": "泗洪",
        "province": "江苏",
        "cityPinyin": "sihong",
        "cityCode": "101191304"
      },
      {
        "cityName": "宿豫",
        "province": "江苏",
        "cityPinyin": "suyu",
        "cityCode": "101191305"
      },
      {
        "cityName": "湖北",
        "province": "湖北",
        "cityPinyin": "wuhan",
        "cityCode": "101200101"
      },
      {
        "cityName": "武汉",
        "province": "湖北",
        "cityPinyin": "wuhan",
        "cityCode": "101200101"
      },
      {
        "cityName": "蔡甸",
        "province": "湖北",
        "cityPinyin": "caidian",
        "cityCode": "101200102"
      },
      {
        "cityName": "黄陂",
        "province": "湖北",
        "cityPinyin": "huangpi",
        "cityCode": "101200103"
      },
      {
        "cityName": "新洲",
        "province": "湖北",
        "cityPinyin": "xinzhou",
        "cityCode": "101200104"
      },
      {
        "cityName": "江夏",
        "province": "湖北",
        "cityPinyin": "jiangxia",
        "cityCode": "101200105"
      },
      {
        "cityName": "东西湖",
        "province": "湖北",
        "cityPinyin": "dongxihu",
        "cityCode": "101200106"
      },
      {
        "cityName": "襄阳",
        "province": "湖北",
        "cityPinyin": "xiangyang",
        "cityCode": "101200201"
      },
      {
        "cityName": "襄州",
        "province": "湖北",
        "cityPinyin": "xiangzhou",
        "cityCode": "101200202"
      },
      {
        "cityName": "保康",
        "province": "湖北",
        "cityPinyin": "baokang",
        "cityCode": "101200203"
      },
      {
        "cityName": "南漳",
        "province": "湖北",
        "cityPinyin": "nanzhang",
        "cityCode": "101200204"
      },
      {
        "cityName": "宜城",
        "province": "湖北",
        "cityPinyin": "yicheng",
        "cityCode": "101200205"
      },
      {
        "cityName": "老河口",
        "province": "湖北",
        "cityPinyin": "laohekou",
        "cityCode": "101200206"
      },
      {
        "cityName": "谷城",
        "province": "湖北",
        "cityPinyin": "gucheng",
        "cityCode": "101200207"
      },
      {
        "cityName": "枣阳",
        "province": "湖北",
        "cityPinyin": "zaoyang",
        "cityCode": "101200208"
      },
      {
        "cityName": "鄂州",
        "province": "湖北",
        "cityPinyin": "ezhou",
        "cityCode": "101200301"
      },
      {
        "cityName": "梁子湖",
        "province": "湖北",
        "cityPinyin": "liangzihu",
        "cityCode": "101200302"
      },
      {
        "cityName": "孝感",
        "province": "湖北",
        "cityPinyin": "xiaogan",
        "cityCode": "101200401"
      },
      {
        "cityName": "安陆",
        "province": "湖北",
        "cityPinyin": "anlu",
        "cityCode": "101200402"
      },
      {
        "cityName": "云梦",
        "province": "湖北",
        "cityPinyin": "yunmeng",
        "cityCode": "101200403"
      },
      {
        "cityName": "大悟",
        "province": "湖北",
        "cityPinyin": "dawu",
        "cityCode": "101200404"
      },
      {
        "cityName": "应城",
        "province": "湖北",
        "cityPinyin": "yingcheng",
        "cityCode": "101200405"
      },
      {
        "cityName": "汉川",
        "province": "湖北",
        "cityPinyin": "hanchuan",
        "cityCode": "101200406"
      },
      {
        "cityName": "孝昌",
        "province": "湖北",
        "cityPinyin": "xiaochang",
        "cityCode": "101200407"
      },
      {
        "cityName": "黄冈",
        "province": "湖北",
        "cityPinyin": "huanggang",
        "cityCode": "101200501"
      },
      {
        "cityName": "红安",
        "province": "湖北",
        "cityPinyin": "hongan",
        "cityCode": "101200502"
      },
      {
        "cityName": "麻城",
        "province": "湖北",
        "cityPinyin": "macheng",
        "cityCode": "101200503"
      },
      {
        "cityName": "罗田",
        "province": "湖北",
        "cityPinyin": "luotian",
        "cityCode": "101200504"
      },
      {
        "cityName": "英山",
        "province": "湖北",
        "cityPinyin": "yingshan",
        "cityCode": "101200505"
      },
      {
        "cityName": "浠水",
        "province": "湖北",
        "cityPinyin": "xishui",
        "cityCode": "101200506"
      },
      {
        "cityName": "蕲春",
        "province": "湖北",
        "cityPinyin": "qichun",
        "cityCode": "101200507"
      },
      {
        "cityName": "黄梅",
        "province": "湖北",
        "cityPinyin": "huangmei",
        "cityCode": "101200508"
      },
      {
        "cityName": "武穴",
        "province": "湖北",
        "cityPinyin": "wuxue",
        "cityCode": "101200509"
      },
      {
        "cityName": "团风",
        "province": "湖北",
        "cityPinyin": "tuanfeng",
        "cityCode": "101200510"
      },
      {
        "cityName": "黄石",
        "province": "湖北",
        "cityPinyin": "huangshi",
        "cityCode": "101200601"
      },
      {
        "cityName": "大冶",
        "province": "湖北",
        "cityPinyin": "daye",
        "cityCode": "101200602"
      },
      {
        "cityName": "阳新",
        "province": "湖北",
        "cityPinyin": "yangxin",
        "cityCode": "101200603"
      },
      {
        "cityName": "铁山",
        "province": "湖北",
        "cityPinyin": "tieshan",
        "cityCode": "101200604"
      },
      {
        "cityName": "下陆",
        "province": "湖北",
        "cityPinyin": "xialu",
        "cityCode": "101200605"
      },
      {
        "cityName": "西塞山",
        "province": "湖北",
        "cityPinyin": "xisaishan",
        "cityCode": "101200606"
      },
      {
        "cityName": "咸宁",
        "province": "湖北",
        "cityPinyin": "xianning",
        "cityCode": "101200701"
      },
      {
        "cityName": "赤壁",
        "province": "湖北",
        "cityPinyin": "chibi",
        "cityCode": "101200702"
      },
      {
        "cityName": "嘉鱼",
        "province": "湖北",
        "cityPinyin": "jiayu",
        "cityCode": "101200703"
      },
      {
        "cityName": "崇阳",
        "province": "湖北",
        "cityPinyin": "chongyang",
        "cityCode": "101200704"
      },
      {
        "cityName": "通城",
        "province": "湖北",
        "cityPinyin": "tongcheng",
        "cityCode": "101200705"
      },
      {
        "cityName": "通山",
        "province": "湖北",
        "cityPinyin": "tongshan",
        "cityCode": "101200706"
      },
      {
        "cityName": "荆州",
        "province": "湖北",
        "cityPinyin": "jingzhou",
        "cityCode": "101200801"
      },
      {
        "cityName": "江陵",
        "province": "湖北",
        "cityPinyin": "jiangling",
        "cityCode": "101200802"
      },
      {
        "cityName": "公安",
        "province": "湖北",
        "cityPinyin": "gongan",
        "cityCode": "101200803"
      },
      {
        "cityName": "石首",
        "province": "湖北",
        "cityPinyin": "shishou",
        "cityCode": "101200804"
      },
      {
        "cityName": "监利",
        "province": "湖北",
        "cityPinyin": "jianli",
        "cityCode": "101200805"
      },
      {
        "cityName": "洪湖",
        "province": "湖北",
        "cityPinyin": "honghu",
        "cityCode": "101200806"
      },
      {
        "cityName": "松滋",
        "province": "湖北",
        "cityPinyin": "songzi",
        "cityCode": "101200807"
      },
      {
        "cityName": "宜昌",
        "province": "湖北",
        "cityPinyin": "yichang",
        "cityCode": "101200901"
      },
      {
        "cityName": "远安",
        "province": "湖北",
        "cityPinyin": "yuanan",
        "cityCode": "101200902"
      },
      {
        "cityName": "秭归",
        "province": "湖北",
        "cityPinyin": "zigui",
        "cityCode": "101200903"
      },
      {
        "cityName": "兴山",
        "province": "湖北",
        "cityPinyin": "xingshan",
        "cityCode": "101200904"
      },
      {
        "cityName": "五峰",
        "province": "湖北",
        "cityPinyin": "wufeng",
        "cityCode": "101200906"
      },
      {
        "cityName": "当阳",
        "province": "湖北",
        "cityPinyin": "dangyang",
        "cityCode": "101200907"
      },
      {
        "cityName": "长阳",
        "province": "湖北",
        "cityPinyin": "changyang",
        "cityCode": "101200908"
      },
      {
        "cityName": "宜都",
        "province": "湖北",
        "cityPinyin": "yidu",
        "cityCode": "101200909"
      },
      {
        "cityName": "枝江",
        "province": "湖北",
        "cityPinyin": "zhijiang",
        "cityCode": "101200910"
      },
      {
        "cityName": "三峡",
        "province": "湖北",
        "cityPinyin": "sanxia",
        "cityCode": "101200911"
      },
      {
        "cityName": "夷陵",
        "province": "湖北",
        "cityPinyin": "yiling",
        "cityCode": "101200912"
      },
      {
        "cityName": "恩施",
        "province": "湖北",
        "cityPinyin": "enshi",
        "cityCode": "101201001"
      },
      {
        "cityName": "利川",
        "province": "湖北",
        "cityPinyin": "lichuan",
        "cityCode": "101201002"
      },
      {
        "cityName": "建始",
        "province": "湖北",
        "cityPinyin": "jianshi",
        "cityCode": "101201003"
      },
      {
        "cityName": "咸丰",
        "province": "湖北",
        "cityPinyin": "xianfeng",
        "cityCode": "101201004"
      },
      {
        "cityName": "宣恩",
        "province": "湖北",
        "cityPinyin": "xuanen",
        "cityCode": "101201005"
      },
      {
        "cityName": "鹤峰",
        "province": "湖北",
        "cityPinyin": "hefeng",
        "cityCode": "101201006"
      },
      {
        "cityName": "来凤",
        "province": "湖北",
        "cityPinyin": "laifeng",
        "cityCode": "101201007"
      },
      {
        "cityName": "巴东",
        "province": "湖北",
        "cityPinyin": "badong",
        "cityCode": "101201008"
      },
      {
        "cityName": "十堰",
        "province": "湖北",
        "cityPinyin": "shiyan",
        "cityCode": "101201101"
      },
      {
        "cityName": "竹溪",
        "province": "湖北",
        "cityPinyin": "zhuxi",
        "cityCode": "101201102"
      },
      {
        "cityName": "郧西",
        "province": "湖北",
        "cityPinyin": "yunxi",
        "cityCode": "101201103"
      },
      {
        "cityName": "郧县",
        "province": "湖北",
        "cityPinyin": "yunxian",
        "cityCode": "101201104"
      },
      {
        "cityName": "竹山",
        "province": "湖北",
        "cityPinyin": "zhushan",
        "cityCode": "101201105"
      },
      {
        "cityName": "房县",
        "province": "湖北",
        "cityPinyin": "fangxian",
        "cityCode": "101201106"
      },
      {
        "cityName": "丹江口",
        "province": "湖北",
        "cityPinyin": "danjiangkou",
        "cityCode": "101201107"
      },
      {
        "cityName": "茅箭",
        "province": "湖北",
        "cityPinyin": "maojian",
        "cityCode": "101201108"
      },
      {
        "cityName": "张湾",
        "province": "湖北",
        "cityPinyin": "zhangwan",
        "cityCode": "101201109"
      },
      {
        "cityName": "神农架",
        "province": "湖北",
        "cityPinyin": "shennongjia",
        "cityCode": "101201201"
      },
      {
        "cityName": "随州",
        "province": "湖北",
        "cityPinyin": "suizhou",
        "cityCode": "101201301"
      },
      {
        "cityName": "广水",
        "province": "湖北",
        "cityPinyin": "guangshui",
        "cityCode": "101201302"
      },
      {
        "cityName": "荆门",
        "province": "湖北",
        "cityPinyin": "jingmen",
        "cityCode": "101201401"
      },
      {
        "cityName": "钟祥",
        "province": "湖北",
        "cityPinyin": "zhongxiang",
        "cityCode": "101201402"
      },
      {
        "cityName": "京山",
        "province": "湖北",
        "cityPinyin": "jingshan",
        "cityCode": "101201403"
      },
      {
        "cityName": "掇刀",
        "province": "湖北",
        "cityPinyin": "duodao",
        "cityCode": "101201404"
      },
      {
        "cityName": "沙洋",
        "province": "湖北",
        "cityPinyin": "shayang",
        "cityCode": "101201405"
      },
      {
        "cityName": "沙市",
        "province": "湖北",
        "cityPinyin": "shashi",
        "cityCode": "101201406"
      },
      {
        "cityName": "天门",
        "province": "湖北",
        "cityPinyin": "tianmen",
        "cityCode": "101201501"
      },
      {
        "cityName": "仙桃",
        "province": "湖北",
        "cityPinyin": "xiantao",
        "cityCode": "101201601"
      },
      {
        "cityName": "潜江",
        "province": "湖北",
        "cityPinyin": "qianjiang",
        "cityCode": "101201701"
      },
      {
        "cityName": "浙江",
        "province": "浙江",
        "cityPinyin": "hangzhou",
        "cityCode": "101210101"
      },
      {
        "cityName": "杭州",
        "province": "浙江",
        "cityPinyin": "hangzhou",
        "cityCode": "101210101"
      },
      {
        "cityName": "萧山",
        "province": "浙江",
        "cityPinyin": "xiaoshan",
        "cityCode": "101210102"
      },
      {
        "cityName": "桐庐",
        "province": "浙江",
        "cityPinyin": "tonglu",
        "cityCode": "101210103"
      },
      {
        "cityName": "淳安",
        "province": "浙江",
        "cityPinyin": "chunan",
        "cityCode": "101210104"
      },
      {
        "cityName": "建德",
        "province": "浙江",
        "cityPinyin": "jiande",
        "cityCode": "101210105"
      },
      {
        "cityName": "余杭",
        "province": "浙江",
        "cityPinyin": "yuhang",
        "cityCode": "101210106"
      },
      {
        "cityName": "临安",
        "province": "浙江",
        "cityPinyin": "linan",
        "cityCode": "101210107"
      },
      {
        "cityName": "富阳",
        "province": "浙江",
        "cityPinyin": "fuyang",
        "cityCode": "101210108"
      },
      {
        "cityName": "湖州",
        "province": "浙江",
        "cityPinyin": "huzhou",
        "cityCode": "101210201"
      },
      {
        "cityName": "长兴",
        "province": "浙江",
        "cityPinyin": "changxing",
        "cityCode": "101210202"
      },
      {
        "cityName": "安吉",
        "province": "浙江",
        "cityPinyin": "anji",
        "cityCode": "101210203"
      },
      {
        "cityName": "德清",
        "province": "浙江",
        "cityPinyin": "deqing",
        "cityCode": "101210204"
      },
      {
        "cityName": "嘉兴",
        "province": "浙江",
        "cityPinyin": "jiaxing",
        "cityCode": "101210301"
      },
      {
        "cityName": "嘉善",
        "province": "浙江",
        "cityPinyin": "jiashan",
        "cityCode": "101210302"
      },
      {
        "cityName": "海宁",
        "province": "浙江",
        "cityPinyin": "haining",
        "cityCode": "101210303"
      },
      {
        "cityName": "桐乡",
        "province": "浙江",
        "cityPinyin": "tongxiang",
        "cityCode": "101210304"
      },
      {
        "cityName": "平湖",
        "province": "浙江",
        "cityPinyin": "pinghu",
        "cityCode": "101210305"
      },
      {
        "cityName": "海盐",
        "province": "浙江",
        "cityPinyin": "haiyan",
        "cityCode": "101210306"
      },
      {
        "cityName": "宁波",
        "province": "浙江",
        "cityPinyin": "ningbo",
        "cityCode": "101210401"
      },
      {
        "cityName": "慈溪",
        "province": "浙江",
        "cityPinyin": "cixi",
        "cityCode": "101210403"
      },
      {
        "cityName": "余姚",
        "province": "浙江",
        "cityPinyin": "yuyao",
        "cityCode": "101210404"
      },
      {
        "cityName": "奉化",
        "province": "浙江",
        "cityPinyin": "fenghua",
        "cityCode": "101210405"
      },
      {
        "cityName": "象山",
        "province": "浙江",
        "cityPinyin": "xiangshan",
        "cityCode": "101210406"
      },
      {
        "cityName": "宁海",
        "province": "浙江",
        "cityPinyin": "ninghai",
        "cityCode": "101210408"
      },
      {
        "cityName": "北仑",
        "province": "浙江",
        "cityPinyin": "beilun",
        "cityCode": "101210410"
      },
      {
        "cityName": "鄞州",
        "province": "浙江",
        "cityPinyin": "yinzhou",
        "cityCode": "101210411"
      },
      {
        "cityName": "镇海",
        "province": "浙江",
        "cityPinyin": "zhenhai",
        "cityCode": "101210412"
      },
      {
        "cityName": "绍兴",
        "province": "浙江",
        "cityPinyin": "shaoxing",
        "cityCode": "101210501"
      },
      {
        "cityName": "诸暨",
        "province": "浙江",
        "cityPinyin": "zhuji",
        "cityCode": "101210502"
      },
      {
        "cityName": "上虞",
        "province": "浙江",
        "cityPinyin": "shangyu",
        "cityCode": "101210503"
      },
      {
        "cityName": "新昌",
        "province": "浙江",
        "cityPinyin": "xinchang",
        "cityCode": "101210504"
      },
      {
        "cityName": "嵊州",
        "province": "浙江",
        "cityPinyin": "shengzhou",
        "cityCode": "101210505"
      },
      {
        "cityName": "台州",
        "province": "浙江",
        "cityPinyin": "taizhou",
        "cityCode": "101210601"
      },
      {
        "cityName": "玉环",
        "province": "浙江",
        "cityPinyin": "yuhuan",
        "cityCode": "101210603"
      },
      {
        "cityName": "三门",
        "province": "浙江",
        "cityPinyin": "sanmen",
        "cityCode": "101210604"
      },
      {
        "cityName": "天台",
        "province": "浙江",
        "cityPinyin": "tiantai",
        "cityCode": "101210605"
      },
      {
        "cityName": "仙居",
        "province": "浙江",
        "cityPinyin": "xianju",
        "cityCode": "101210606"
      },
      {
        "cityName": "温岭",
        "province": "浙江",
        "cityPinyin": "wenling",
        "cityCode": "101210607"
      },
      {
        "cityName": "洪家",
        "province": "浙江",
        "cityPinyin": "hongjia",
        "cityCode": "101210609"
      },
      {
        "cityName": "临海",
        "province": "浙江",
        "cityPinyin": "linhai",
        "cityCode": "101210610"
      },
      {
        "cityName": "椒江",
        "province": "浙江",
        "cityPinyin": "jiaojiang",
        "cityCode": "101210611"
      },
      {
        "cityName": "黄岩",
        "province": "浙江",
        "cityPinyin": "huangyan",
        "cityCode": "101210612"
      },
      {
        "cityName": "路桥",
        "province": "浙江",
        "cityPinyin": "luqiao",
        "cityCode": "101210613"
      },
      {
        "cityName": "温州",
        "province": "浙江",
        "cityPinyin": "wenzhou",
        "cityCode": "101210701"
      },
      {
        "cityName": "泰顺",
        "province": "浙江",
        "cityPinyin": "taishun",
        "cityCode": "101210702"
      },
      {
        "cityName": "文成",
        "province": "浙江",
        "cityPinyin": "wencheng",
        "cityCode": "101210703"
      },
      {
        "cityName": "平阳",
        "province": "浙江",
        "cityPinyin": "pingyang",
        "cityCode": "101210704"
      },
      {
        "cityName": "瑞安",
        "province": "浙江",
        "cityPinyin": "ruian",
        "cityCode": "101210705"
      },
      {
        "cityName": "洞头",
        "province": "浙江",
        "cityPinyin": "dongtou",
        "cityCode": "101210706"
      },
      {
        "cityName": "乐清",
        "province": "浙江",
        "cityPinyin": "yueqing",
        "cityCode": "101210707"
      },
      {
        "cityName": "永嘉",
        "province": "浙江",
        "cityPinyin": "yongjia",
        "cityCode": "101210708"
      },
      {
        "cityName": "苍南",
        "province": "浙江",
        "cityPinyin": "cangnan",
        "cityCode": "101210709"
      },
      {
        "cityName": "丽水",
        "province": "浙江",
        "cityPinyin": "lishui",
        "cityCode": "101210801"
      },
      {
        "cityName": "遂昌",
        "province": "浙江",
        "cityPinyin": "suichang",
        "cityCode": "101210802"
      },
      {
        "cityName": "龙泉",
        "province": "浙江",
        "cityPinyin": "longquan",
        "cityCode": "101210803"
      },
      {
        "cityName": "缙云",
        "province": "浙江",
        "cityPinyin": "jinyun",
        "cityCode": "101210804"
      },
      {
        "cityName": "青田",
        "province": "浙江",
        "cityPinyin": "qingtian",
        "cityCode": "101210805"
      },
      {
        "cityName": "云和",
        "province": "浙江",
        "cityPinyin": "yunhe",
        "cityCode": "101210806"
      },
      {
        "cityName": "庆元",
        "province": "浙江",
        "cityPinyin": "qingyuan",
        "cityCode": "101210807"
      },
      {
        "cityName": "松阳",
        "province": "浙江",
        "cityPinyin": "songyang",
        "cityCode": "101210808"
      },
      {
        "cityName": "景宁",
        "province": "浙江",
        "cityPinyin": "jingning",
        "cityCode": "101210809"
      },
      {
        "cityName": "金华",
        "province": "浙江",
        "cityPinyin": "jinhua",
        "cityCode": "101210901"
      },
      {
        "cityName": "浦江",
        "province": "浙江",
        "cityPinyin": "pujiang",
        "cityCode": "101210902"
      },
      {
        "cityName": "兰溪",
        "province": "浙江",
        "cityPinyin": "lanxi",
        "cityCode": "101210903"
      },
      {
        "cityName": "义乌",
        "province": "浙江",
        "cityPinyin": "yiwu",
        "cityCode": "101210904"
      },
      {
        "cityName": "东阳",
        "province": "浙江",
        "cityPinyin": "dongyang",
        "cityCode": "101210905"
      },
      {
        "cityName": "武义",
        "province": "浙江",
        "cityPinyin": "wuyi",
        "cityCode": "101210906"
      },
      {
        "cityName": "永康",
        "province": "浙江",
        "cityPinyin": "yongkang",
        "cityCode": "101210907"
      },
      {
        "cityName": "磐安",
        "province": "浙江",
        "cityPinyin": "panan",
        "cityCode": "101210908"
      },
      {
        "cityName": "衢州",
        "province": "浙江",
        "cityPinyin": "quzhou",
        "cityCode": "101211001"
      },
      {
        "cityName": "常山",
        "province": "浙江",
        "cityPinyin": "changshan",
        "cityCode": "101211002"
      },
      {
        "cityName": "开化",
        "province": "浙江",
        "cityPinyin": "kaihua",
        "cityCode": "101211003"
      },
      {
        "cityName": "龙游",
        "province": "浙江",
        "cityPinyin": "longyou",
        "cityCode": "101211004"
      },
      {
        "cityName": "江山",
        "province": "浙江",
        "cityPinyin": "jiangshan",
        "cityCode": "101211005"
      },
      {
        "cityName": "衢江",
        "province": "浙江",
        "cityPinyin": "qujiang",
        "cityCode": "101211006"
      },
      {
        "cityName": "舟山",
        "province": "浙江",
        "cityPinyin": "zhoushan",
        "cityCode": "101211101"
      },
      {
        "cityName": "嵊泗",
        "province": "浙江",
        "cityPinyin": "shengsi",
        "cityCode": "101211102"
      },
      {
        "cityName": "岱山",
        "province": "浙江",
        "cityPinyin": "daishan",
        "cityCode": "101211104"
      },
      {
        "cityName": "普陀",
        "province": "浙江",
        "cityPinyin": "putuo",
        "cityCode": "101211105"
      },
      {
        "cityName": "定海",
        "province": "浙江",
        "cityPinyin": "dinghai",
        "cityCode": "101211106"
      },
      {
        "cityName": "安徽",
        "province": "安徽",
        "cityPinyin": "hefei",
        "cityCode": "101220101"
      },
      {
        "cityName": "合肥",
        "province": "安徽",
        "cityPinyin": "hefei",
        "cityCode": "101220101"
      },
      {
        "cityName": "长丰",
        "province": "安徽",
        "cityPinyin": "changfeng",
        "cityCode": "101220102"
      },
      {
        "cityName": "肥东",
        "province": "安徽",
        "cityPinyin": "feidong",
        "cityCode": "101220103"
      },
      {
        "cityName": "肥西",
        "province": "安徽",
        "cityPinyin": "feixi",
        "cityCode": "101220104"
      },
      {
        "cityName": "蚌埠",
        "province": "安徽",
        "cityPinyin": "bengbu",
        "cityCode": "101220201"
      },
      {
        "cityName": "怀远",
        "province": "安徽",
        "cityPinyin": "huaiyuan",
        "cityCode": "101220202"
      },
      {
        "cityName": "固镇",
        "province": "安徽",
        "cityPinyin": "guzhen",
        "cityCode": "101220203"
      },
      {
        "cityName": "五河",
        "province": "安徽",
        "cityPinyin": "wuhe",
        "cityCode": "101220204"
      },
      {
        "cityName": "芜湖",
        "province": "安徽",
        "cityPinyin": "wuhu",
        "cityCode": "101220301"
      },
      {
        "cityName": "繁昌",
        "province": "安徽",
        "cityPinyin": "fanyang",
        "cityCode": "101220302"
      },
      {
        "cityName": "芜湖县",
        "province": "安徽",
        "cityPinyin": "wuhuxian",
        "cityCode": "101220303"
      },
      {
        "cityName": "南陵",
        "province": "安徽",
        "cityPinyin": "nanling",
        "cityCode": "101220304"
      },
      {
        "cityName": "淮南",
        "province": "安徽",
        "cityPinyin": "huainan",
        "cityCode": "101220401"
      },
      {
        "cityName": "凤台",
        "province": "安徽",
        "cityPinyin": "fengtai",
        "cityCode": "101220402"
      },
      {
        "cityName": "潘集",
        "province": "安徽",
        "cityPinyin": "panji",
        "cityCode": "101220403"
      },
      {
        "cityName": "马鞍山",
        "province": "安徽",
        "cityPinyin": "maanshan",
        "cityCode": "101220501"
      },
      {
        "cityName": "当涂",
        "province": "安徽",
        "cityPinyin": "dangtu",
        "cityCode": "101220502"
      },
      {
        "cityName": "安庆",
        "province": "安徽",
        "cityPinyin": "anqing",
        "cityCode": "101220601"
      },
      {
        "cityName": "枞阳",
        "province": "安徽",
        "cityPinyin": "zongyang",
        "cityCode": "101220602"
      },
      {
        "cityName": "太湖",
        "province": "安徽",
        "cityPinyin": "taihu",
        "cityCode": "101220603"
      },
      {
        "cityName": "潜山",
        "province": "安徽",
        "cityPinyin": "qianshan",
        "cityCode": "101220604"
      },
      {
        "cityName": "怀宁",
        "province": "安徽",
        "cityPinyin": "huaining",
        "cityCode": "101220605"
      },
      {
        "cityName": "宿松",
        "province": "安徽",
        "cityPinyin": "susong",
        "cityCode": "101220606"
      },
      {
        "cityName": "望江",
        "province": "安徽",
        "cityPinyin": "wangjiang",
        "cityCode": "101220607"
      },
      {
        "cityName": "岳西",
        "province": "安徽",
        "cityPinyin": "yuexi",
        "cityCode": "101220608"
      },
      {
        "cityName": "桐城",
        "province": "安徽",
        "cityPinyin": "tongcheng",
        "cityCode": "101220609"
      },
      {
        "cityName": "宿州",
        "province": "安徽",
        "cityPinyin": "suzhou",
        "cityCode": "101220701"
      },
      {
        "cityName": "砀山",
        "province": "安徽",
        "cityPinyin": "dangshan",
        "cityCode": "101220702"
      },
      {
        "cityName": "灵璧",
        "province": "安徽",
        "cityPinyin": "lingbi",
        "cityCode": "101220703"
      },
      {
        "cityName": "泗县",
        "province": "安徽",
        "cityPinyin": "sixian",
        "cityCode": "101220704"
      },
      {
        "cityName": "萧县",
        "province": "安徽",
        "cityPinyin": "xiaoxian",
        "cityCode": "101220705"
      },
      {
        "cityName": "阜阳",
        "province": "安徽",
        "cityPinyin": "fuyang",
        "cityCode": "101220801"
      },
      {
        "cityName": "阜南",
        "province": "安徽",
        "cityPinyin": "funan",
        "cityCode": "101220802"
      },
      {
        "cityName": "颍上",
        "province": "安徽",
        "cityPinyin": "yingshang",
        "cityCode": "101220803"
      },
      {
        "cityName": "临泉",
        "province": "安徽",
        "cityPinyin": "linquan",
        "cityCode": "101220804"
      },
      {
        "cityName": "界首",
        "province": "安徽",
        "cityPinyin": "jieshou",
        "cityCode": "101220805"
      },
      {
        "cityName": "太和",
        "province": "安徽",
        "cityPinyin": "taihe",
        "cityCode": "101220806"
      },
      {
        "cityName": "亳州",
        "province": "安徽",
        "cityPinyin": "bozhou",
        "cityCode": "101220901"
      },
      {
        "cityName": "涡阳",
        "province": "安徽",
        "cityPinyin": "guoyang",
        "cityCode": "101220902"
      },
      {
        "cityName": "利辛",
        "province": "安徽",
        "cityPinyin": "lixin",
        "cityCode": "101220903"
      },
      {
        "cityName": "蒙城",
        "province": "安徽",
        "cityPinyin": "mengcheng",
        "cityCode": "101220904"
      },
      {
        "cityName": "黄山",
        "province": "安徽",
        "cityPinyin": "huangshan",
        "cityCode": "101221001"
      },
      {
        "cityName": "黄山区",
        "province": "安徽",
        "cityPinyin": "huangshanqu",
        "cityCode": "101221002"
      },
      {
        "cityName": "屯溪",
        "province": "安徽",
        "cityPinyin": "tunxi",
        "cityCode": "101221003"
      },
      {
        "cityName": "祁门",
        "province": "安徽",
        "cityPinyin": "qimen",
        "cityCode": "101221004"
      },
      {
        "cityName": "黟县",
        "province": "安徽",
        "cityPinyin": "yixian",
        "cityCode": "101221005"
      },
      {
        "cityName": "歙县",
        "province": "安徽",
        "cityPinyin": "shexian",
        "cityCode": "101221006"
      },
      {
        "cityName": "休宁",
        "province": "安徽",
        "cityPinyin": "xiuning",
        "cityCode": "101221007"
      },
      {
        "cityName": "黄山风景区",
        "province": "安徽",
        "cityPinyin": "huangshanfengjingqu",
        "cityCode": "101221008"
      },
      {
        "cityName": "滁州",
        "province": "安徽",
        "cityPinyin": "chuzhou",
        "cityCode": "101221101"
      },
      {
        "cityName": "凤阳",
        "province": "安徽",
        "cityPinyin": "fengyang",
        "cityCode": "101221102"
      },
      {
        "cityName": "明光",
        "province": "安徽",
        "cityPinyin": "mingguang",
        "cityCode": "101221103"
      },
      {
        "cityName": "定远",
        "province": "安徽",
        "cityPinyin": "dingyuan",
        "cityCode": "101221104"
      },
      {
        "cityName": "全椒",
        "province": "安徽",
        "cityPinyin": "quanjiao",
        "cityCode": "101221105"
      },
      {
        "cityName": "来安",
        "province": "安徽",
        "cityPinyin": "laian",
        "cityCode": "101221106"
      },
      {
        "cityName": "天长",
        "province": "安徽",
        "cityPinyin": "tianchang",
        "cityCode": "101221107"
      },
      {
        "cityName": "淮北",
        "province": "安徽",
        "cityPinyin": "huaibei",
        "cityCode": "101221201"
      },
      {
        "cityName": "濉溪",
        "province": "安徽",
        "cityPinyin": "suixi",
        "cityCode": "101221202"
      },
      {
        "cityName": "铜陵",
        "province": "安徽",
        "cityPinyin": "tongling",
        "cityCode": "101221301"
      },
      {
        "cityName": "宣城",
        "province": "安徽",
        "cityPinyin": "xuancheng",
        "cityCode": "101221401"
      },
      {
        "cityName": "泾县",
        "province": "安徽",
        "cityPinyin": "jingxian",
        "cityCode": "101221402"
      },
      {
        "cityName": "旌德",
        "province": "安徽",
        "cityPinyin": "jingde",
        "cityCode": "101221403"
      },
      {
        "cityName": "宁国",
        "province": "安徽",
        "cityPinyin": "ningguo",
        "cityCode": "101221404"
      },
      {
        "cityName": "绩溪",
        "province": "安徽",
        "cityPinyin": "jixi",
        "cityCode": "101221405"
      },
      {
        "cityName": "广德",
        "province": "安徽",
        "cityPinyin": "guangde",
        "cityCode": "101221406"
      },
      {
        "cityName": "郎溪",
        "province": "安徽",
        "cityPinyin": "langxi",
        "cityCode": "101221407"
      },
      {
        "cityName": "六安",
        "province": "安徽",
        "cityPinyin": "luan",
        "cityCode": "101221501"
      },
      {
        "cityName": "霍邱",
        "province": "安徽",
        "cityPinyin": "huoqiu",
        "cityCode": "101221502"
      },
      {
        "cityName": "寿县",
        "province": "安徽",
        "cityPinyin": "shouxian",
        "cityCode": "101221503"
      },
      {
        "cityName": "金寨",
        "province": "安徽",
        "cityPinyin": "jinzhai",
        "cityCode": "101221505"
      },
      {
        "cityName": "霍山",
        "province": "安徽",
        "cityPinyin": "huoshan",
        "cityCode": "101221506"
      },
      {
        "cityName": "舒城",
        "province": "安徽",
        "cityPinyin": "shucheng",
        "cityCode": "101221507"
      },
      {
        "cityName": "巢湖",
        "province": "安徽",
        "cityPinyin": "chaohu",
        "cityCode": "101221601"
      },
      {
        "cityName": "庐江",
        "province": "安徽",
        "cityPinyin": "lujiang",
        "cityCode": "101221602"
      },
      {
        "cityName": "无为",
        "province": "安徽",
        "cityPinyin": "wuwei",
        "cityCode": "101221603"
      },
      {
        "cityName": "含山",
        "province": "安徽",
        "cityPinyin": "hanshan",
        "cityCode": "101221604"
      },
      {
        "cityName": "和县",
        "province": "安徽",
        "cityPinyin": "hexian",
        "cityCode": "101221605"
      },
      {
        "cityName": "池州",
        "province": "安徽",
        "cityPinyin": "chizhou",
        "cityCode": "101221701"
      },
      {
        "cityName": "东至",
        "province": "安徽",
        "cityPinyin": "dongzhi",
        "cityCode": "101221702"
      },
      {
        "cityName": "青阳",
        "province": "安徽",
        "cityPinyin": "qingyang",
        "cityCode": "101221703"
      },
      {
        "cityName": "九华山",
        "province": "安徽",
        "cityPinyin": "jiuhuashan",
        "cityCode": "101221704"
      },
      {
        "cityName": "石台",
        "province": "安徽",
        "cityPinyin": "shitai",
        "cityCode": "101221705"
      },
      {
        "cityName": "福建",
        "province": "福建",
        "cityPinyin": "fuzhou",
        "cityCode": "101230101"
      },
      {
        "cityName": "福州",
        "province": "福建",
        "cityPinyin": "fuzhou",
        "cityCode": "101230101"
      },
      {
        "cityName": "闽清",
        "province": "福建",
        "cityPinyin": "minqing",
        "cityCode": "101230102"
      },
      {
        "cityName": "闽侯",
        "province": "福建",
        "cityPinyin": "minhou",
        "cityCode": "101230103"
      },
      {
        "cityName": "罗源",
        "province": "福建",
        "cityPinyin": "luoyuan",
        "cityCode": "101230104"
      },
      {
        "cityName": "连江",
        "province": "福建",
        "cityPinyin": "lianjiang",
        "cityCode": "101230105"
      },
      {
        "cityName": "永泰",
        "province": "福建",
        "cityPinyin": "yongtai",
        "cityCode": "101230107"
      },
      {
        "cityName": "平潭",
        "province": "福建",
        "cityPinyin": "pingtan",
        "cityCode": "101230108"
      },
      {
        "cityName": "长乐",
        "province": "福建",
        "cityPinyin": "changle",
        "cityCode": "101230110"
      },
      {
        "cityName": "福清",
        "province": "福建",
        "cityPinyin": "fuqing",
        "cityCode": "101230111"
      },
      {
        "cityName": "厦门",
        "province": "福建",
        "cityPinyin": "xiamen",
        "cityCode": "101230201"
      },
      {
        "cityName": "同安",
        "province": "福建",
        "cityPinyin": "tongan",
        "cityCode": "101230202"
      },
      {
        "cityName": "宁德",
        "province": "福建",
        "cityPinyin": "ningde",
        "cityCode": "101230301"
      },
      {
        "cityName": "古田",
        "province": "福建",
        "cityPinyin": "gutian",
        "cityCode": "101230302"
      },
      {
        "cityName": "霞浦",
        "province": "福建",
        "cityPinyin": "xiapu",
        "cityCode": "101230303"
      },
      {
        "cityName": "寿宁",
        "province": "福建",
        "cityPinyin": "shouning",
        "cityCode": "101230304"
      },
      {
        "cityName": "周宁",
        "province": "福建",
        "cityPinyin": "zhouning",
        "cityCode": "101230305"
      },
      {
        "cityName": "福安",
        "province": "福建",
        "cityPinyin": "fuan",
        "cityCode": "101230306"
      },
      {
        "cityName": "柘荣",
        "province": "福建",
        "cityPinyin": "zherong",
        "cityCode": "101230307"
      },
      {
        "cityName": "福鼎",
        "province": "福建",
        "cityPinyin": "fuding",
        "cityCode": "101230308"
      },
      {
        "cityName": "屏南",
        "province": "福建",
        "cityPinyin": "pingnan",
        "cityCode": "101230309"
      },
      {
        "cityName": "莆田",
        "province": "福建",
        "cityPinyin": "putian",
        "cityCode": "101230401"
      },
      {
        "cityName": "仙游",
        "province": "福建",
        "cityPinyin": "xianyou",
        "cityCode": "101230402"
      },
      {
        "cityName": "秀屿港",
        "province": "福建",
        "cityPinyin": "xiuyugang",
        "cityCode": "101230403"
      },
      {
        "cityName": "涵江",
        "province": "福建",
        "cityPinyin": "hanjiang",
        "cityCode": "101230404"
      },
      {
        "cityName": "秀屿",
        "province": "福建",
        "cityPinyin": "xiuyu",
        "cityCode": "101230405"
      },
      {
        "cityName": "荔城",
        "province": "福建",
        "cityPinyin": "licheng",
        "cityCode": "101230406"
      },
      {
        "cityName": "城厢",
        "province": "福建",
        "cityPinyin": "chengxiang",
        "cityCode": "101230407"
      },
      {
        "cityName": "泉州",
        "province": "福建",
        "cityPinyin": "quanzhou",
        "cityCode": "101230501"
      },
      {
        "cityName": "安溪",
        "province": "福建",
        "cityPinyin": "anxi",
        "cityCode": "101230502"
      },
      {
        "cityName": "永春",
        "province": "福建",
        "cityPinyin": "yongchun",
        "cityCode": "101230504"
      },
      {
        "cityName": "德化",
        "province": "福建",
        "cityPinyin": "dehua",
        "cityCode": "101230505"
      },
      {
        "cityName": "南安",
        "province": "福建",
        "cityPinyin": "nanan",
        "cityCode": "101230506"
      },
      {
        "cityName": "崇武",
        "province": "福建",
        "cityPinyin": "chongwu",
        "cityCode": "101230507"
      },
      {
        "cityName": "惠安",
        "province": "福建",
        "cityPinyin": "huian",
        "cityCode": "101230508"
      },
      {
        "cityName": "晋江",
        "province": "福建",
        "cityPinyin": "jinjiang",
        "cityCode": "101230509"
      },
      {
        "cityName": "石狮",
        "province": "福建",
        "cityPinyin": "shishi",
        "cityCode": "101230510"
      },
      {
        "cityName": "漳州",
        "province": "福建",
        "cityPinyin": "zhangzhou",
        "cityCode": "101230601"
      },
      {
        "cityName": "长泰",
        "province": "福建",
        "cityPinyin": "changtai",
        "cityCode": "101230602"
      },
      {
        "cityName": "南靖",
        "province": "福建",
        "cityPinyin": "nanjing",
        "cityCode": "101230603"
      },
      {
        "cityName": "平和",
        "province": "福建",
        "cityPinyin": "pinghe",
        "cityCode": "101230604"
      },
      {
        "cityName": "龙海",
        "province": "福建",
        "cityPinyin": "longhai",
        "cityCode": "101230605"
      },
      {
        "cityName": "漳浦",
        "province": "福建",
        "cityPinyin": "zhangpu",
        "cityCode": "101230606"
      },
      {
        "cityName": "诏安",
        "province": "福建",
        "cityPinyin": "zhaoan",
        "cityCode": "101230607"
      },
      {
        "cityName": "东山",
        "province": "福建",
        "cityPinyin": "dongshan",
        "cityCode": "101230608"
      },
      {
        "cityName": "云霄",
        "province": "福建",
        "cityPinyin": "yunxiao",
        "cityCode": "101230609"
      },
      {
        "cityName": "华安",
        "province": "福建",
        "cityPinyin": "huaan",
        "cityCode": "101230610"
      },
      {
        "cityName": "龙岩",
        "province": "福建",
        "cityPinyin": "longyan",
        "cityCode": "101230701"
      },
      {
        "cityName": "长汀",
        "province": "福建",
        "cityPinyin": "changting",
        "cityCode": "101230702"
      },
      {
        "cityName": "连城",
        "province": "福建",
        "cityPinyin": "liancheng",
        "cityCode": "101230703"
      },
      {
        "cityName": "武平",
        "province": "福建",
        "cityPinyin": "wuping",
        "cityCode": "101230704"
      },
      {
        "cityName": "上杭",
        "province": "福建",
        "cityPinyin": "shanghang",
        "cityCode": "101230705"
      },
      {
        "cityName": "永定",
        "province": "福建",
        "cityPinyin": "yongding",
        "cityCode": "101230706"
      },
      {
        "cityName": "漳平",
        "province": "福建",
        "cityPinyin": "zhangping",
        "cityCode": "101230707"
      },
      {
        "cityName": "三明",
        "province": "福建",
        "cityPinyin": "sanming",
        "cityCode": "101230801"
      },
      {
        "cityName": "宁化",
        "province": "福建",
        "cityPinyin": "ninghua",
        "cityCode": "101230802"
      },
      {
        "cityName": "清流",
        "province": "福建",
        "cityPinyin": "qingliu",
        "cityCode": "101230803"
      },
      {
        "cityName": "泰宁",
        "province": "福建",
        "cityPinyin": "taining",
        "cityCode": "101230804"
      },
      {
        "cityName": "将乐",
        "province": "福建",
        "cityPinyin": "jiangle",
        "cityCode": "101230805"
      },
      {
        "cityName": "建宁",
        "province": "福建",
        "cityPinyin": "jianning",
        "cityCode": "101230806"
      },
      {
        "cityName": "明溪",
        "province": "福建",
        "cityPinyin": "mingxi",
        "cityCode": "101230807"
      },
      {
        "cityName": "沙县",
        "province": "福建",
        "cityPinyin": "shaxian",
        "cityCode": "101230808"
      },
      {
        "cityName": "尤溪",
        "province": "福建",
        "cityPinyin": "youxi",
        "cityCode": "101230809"
      },
      {
        "cityName": "永安",
        "province": "福建",
        "cityPinyin": "yongan",
        "cityCode": "101230810"
      },
      {
        "cityName": "大田",
        "province": "福建",
        "cityPinyin": "datian",
        "cityCode": "101230811"
      },
      {
        "cityName": "南平",
        "province": "福建",
        "cityPinyin": "nanping",
        "cityCode": "101230901"
      },
      {
        "cityName": "顺昌",
        "province": "福建",
        "cityPinyin": "shunchang",
        "cityCode": "101230902"
      },
      {
        "cityName": "光泽",
        "province": "福建",
        "cityPinyin": "guangze",
        "cityCode": "101230903"
      },
      {
        "cityName": "邵武",
        "province": "福建",
        "cityPinyin": "shaowu",
        "cityCode": "101230904"
      },
      {
        "cityName": "武夷山",
        "province": "福建",
        "cityPinyin": "wuyishan",
        "cityCode": "101230905"
      },
      {
        "cityName": "浦城",
        "province": "福建",
        "cityPinyin": "pucheng",
        "cityCode": "101230906"
      },
      {
        "cityName": "建阳",
        "province": "福建",
        "cityPinyin": "jianyang",
        "cityCode": "101230907"
      },
      {
        "cityName": "松溪",
        "province": "福建",
        "cityPinyin": "songxi",
        "cityCode": "101230908"
      },
      {
        "cityName": "政和",
        "province": "福建",
        "cityPinyin": "zhenghe",
        "cityCode": "101230909"
      },
      {
        "cityName": "建瓯",
        "province": "福建",
        "cityPinyin": "jianou",
        "cityCode": "101230910"
      },
      {
        "cityName": "钓鱼岛",
        "province": "福建",
        "cityPinyin": "diaoyudao",
        "cityCode": "101231001"
      },
      {
        "cityName": "南昌",
        "province": "江西",
        "cityPinyin": "nanchang",
        "cityCode": "101240101"
      },
      {
        "cityName": "新建",
        "province": "江西",
        "cityPinyin": "xinjian",
        "cityCode": "101240102"
      },
      {
        "cityName": "江西",
        "province": "江西",
        "cityPinyin": "nanchangxian",
        "cityCode": "101240103"
      },
      {
        "cityName": "南昌县",
        "province": "江西",
        "cityPinyin": "nanchangxian",
        "cityCode": "101240103"
      },
      {
        "cityName": "安义",
        "province": "江西",
        "cityPinyin": "anyi",
        "cityCode": "101240104"
      },
      {
        "cityName": "进贤",
        "province": "江西",
        "cityPinyin": "jinxian",
        "cityCode": "101240105"
      },
      {
        "cityName": "莲塘",
        "province": "江西",
        "cityPinyin": "liantang",
        "cityCode": "101240106"
      },
      {
        "cityName": "九江",
        "province": "江西",
        "cityPinyin": "jiujiang",
        "cityCode": "101240201"
      },
      {
        "cityName": "瑞昌",
        "province": "江西",
        "cityPinyin": "ruichang",
        "cityCode": "101240202"
      },
      {
        "cityName": "庐山",
        "province": "江西",
        "cityPinyin": "lushan",
        "cityCode": "101240203"
      },
      {
        "cityName": "武宁",
        "province": "江西",
        "cityPinyin": "wuning",
        "cityCode": "101240204"
      },
      {
        "cityName": "德安",
        "province": "江西",
        "cityPinyin": "dean",
        "cityCode": "101240205"
      },
      {
        "cityName": "永修",
        "province": "江西",
        "cityPinyin": "yongxiu",
        "cityCode": "101240206"
      },
      {
        "cityName": "湖口",
        "province": "江西",
        "cityPinyin": "hukou",
        "cityCode": "101240207"
      },
      {
        "cityName": "彭泽",
        "province": "江西",
        "cityPinyin": "pengze",
        "cityCode": "101240208"
      },
      {
        "cityName": "星子",
        "province": "江西",
        "cityPinyin": "xingzi",
        "cityCode": "101240209"
      },
      {
        "cityName": "都昌",
        "province": "江西",
        "cityPinyin": "duchang",
        "cityCode": "101240210"
      },
      {
        "cityName": "修水",
        "province": "江西",
        "cityPinyin": "xiushui",
        "cityCode": "101240212"
      },
      {
        "cityName": "澎泽",
        "province": "江西",
        "cityPinyin": "pengze",
        "cityCode": "101240213"
      },
      {
        "cityName": "上饶",
        "province": "江西",
        "cityPinyin": "shangrao",
        "cityCode": "101240301"
      },
      {
        "cityName": "鄱阳",
        "province": "江西",
        "cityPinyin": "poyang",
        "cityCode": "101240302"
      },
      {
        "cityName": "婺源",
        "province": "江西",
        "cityPinyin": "wuyuan",
        "cityCode": "101240303"
      },
      {
        "cityName": "余干",
        "province": "江西",
        "cityPinyin": "yugan",
        "cityCode": "101240305"
      },
      {
        "cityName": "万年",
        "province": "江西",
        "cityPinyin": "wannian",
        "cityCode": "101240306"
      },
      {
        "cityName": "德兴",
        "province": "江西",
        "cityPinyin": "dexing",
        "cityCode": "101240307"
      },
      {
        "cityName": "上饶县",
        "province": "江西",
        "cityPinyin": "shangraoxian",
        "cityCode": "101240308"
      },
      {
        "cityName": "弋阳",
        "province": "江西",
        "cityPinyin": "yiyang",
        "cityCode": "101240309"
      },
      {
        "cityName": "横峰",
        "province": "江西",
        "cityPinyin": "hengfeng",
        "cityCode": "101240310"
      },
      {
        "cityName": "铅山",
        "province": "江西",
        "cityPinyin": "yanshan",
        "cityCode": "101240311"
      },
      {
        "cityName": "玉山",
        "province": "江西",
        "cityPinyin": "yushan",
        "cityCode": "101240312"
      },
      {
        "cityName": "广丰",
        "province": "江西",
        "cityPinyin": "guangfeng",
        "cityCode": "101240313"
      },
      {
        "cityName": "抚州",
        "province": "江西",
        "cityPinyin": "fuzhou",
        "cityCode": "101240401"
      },
      {
        "cityName": "广昌",
        "province": "江西",
        "cityPinyin": "guangchang",
        "cityCode": "101240402"
      },
      {
        "cityName": "乐安",
        "province": "江西",
        "cityPinyin": "anle",
        "cityCode": "101240403"
      },
      {
        "cityName": "崇仁",
        "province": "江西",
        "cityPinyin": "chongren",
        "cityCode": "101240404"
      },
      {
        "cityName": "金溪",
        "province": "江西",
        "cityPinyin": "jinxi",
        "cityCode": "101240405"
      },
      {
        "cityName": "资溪",
        "province": "江西",
        "cityPinyin": "zixi",
        "cityCode": "101240406"
      },
      {
        "cityName": "宜黄",
        "province": "江西",
        "cityPinyin": "yihuang",
        "cityCode": "101240407"
      },
      {
        "cityName": "南城",
        "province": "江西",
        "cityPinyin": "nancheng",
        "cityCode": "101240408"
      },
      {
        "cityName": "南丰",
        "province": "江西",
        "cityPinyin": "nanfeng",
        "cityCode": "101240409"
      },
      {
        "cityName": "黎川",
        "province": "江西",
        "cityPinyin": "lichuan",
        "cityCode": "101240410"
      },
      {
        "cityName": "东乡",
        "province": "江西",
        "cityPinyin": "dongxiang",
        "cityCode": "101240411"
      },
      {
        "cityName": "宜春",
        "province": "江西",
        "cityPinyin": "yichun",
        "cityCode": "101240501"
      },
      {
        "cityName": "铜鼓",
        "province": "江西",
        "cityPinyin": "tonggu",
        "cityCode": "101240502"
      },
      {
        "cityName": "宜丰",
        "province": "江西",
        "cityPinyin": "yifeng",
        "cityCode": "101240503"
      },
      {
        "cityName": "万载",
        "province": "江西",
        "cityPinyin": "wanzai",
        "cityCode": "101240504"
      },
      {
        "cityName": "上高",
        "province": "江西",
        "cityPinyin": "shanggao",
        "cityCode": "101240505"
      },
      {
        "cityName": "靖安",
        "province": "江西",
        "cityPinyin": "jingan",
        "cityCode": "101240506"
      },
      {
        "cityName": "奉新",
        "province": "江西",
        "cityPinyin": "fengxin",
        "cityCode": "101240507"
      },
      {
        "cityName": "高安",
        "province": "江西",
        "cityPinyin": "gaoan",
        "cityCode": "101240508"
      },
      {
        "cityName": "樟树",
        "province": "江西",
        "cityPinyin": "zhangshu",
        "cityCode": "101240509"
      },
      {
        "cityName": "丰城",
        "province": "江西",
        "cityPinyin": "fengcheng",
        "cityCode": "101240510"
      },
      {
        "cityName": "吉安",
        "province": "江西",
        "cityPinyin": "jian",
        "cityCode": "101240601"
      },
      {
        "cityName": "吉安县",
        "province": "江西",
        "cityPinyin": "jianxian",
        "cityCode": "101240602"
      },
      {
        "cityName": "吉水",
        "province": "江西",
        "cityPinyin": "jishui",
        "cityCode": "101240603"
      },
      {
        "cityName": "新干",
        "province": "江西",
        "cityPinyin": "xingan",
        "cityCode": "101240604"
      },
      {
        "cityName": "峡江",
        "province": "江西",
        "cityPinyin": "xiajiang",
        "cityCode": "101240605"
      },
      {
        "cityName": "永丰",
        "province": "江西",
        "cityPinyin": "yongfeng",
        "cityCode": "101240606"
      },
      {
        "cityName": "永新",
        "province": "江西",
        "cityPinyin": "yongxin",
        "cityCode": "101240607"
      },
      {
        "cityName": "井冈山",
        "province": "江西",
        "cityPinyin": "jinggangshan",
        "cityCode": "101240608"
      },
      {
        "cityName": "万安",
        "province": "江西",
        "cityPinyin": "wanan",
        "cityCode": "101240609"
      },
      {
        "cityName": "遂川",
        "province": "江西",
        "cityPinyin": "suichuan",
        "cityCode": "101240610"
      },
      {
        "cityName": "泰和",
        "province": "江西",
        "cityPinyin": "taihe",
        "cityCode": "101240611"
      },
      {
        "cityName": "安福",
        "province": "江西",
        "cityPinyin": "anfu",
        "cityCode": "101240612"
      },
      {
        "cityName": "宁冈",
        "province": "江西",
        "cityPinyin": "ninggang",
        "cityCode": "101240613"
      },
      {
        "cityName": "赣州",
        "province": "江西",
        "cityPinyin": "ganzhou",
        "cityCode": "101240701"
      },
      {
        "cityName": "崇义",
        "province": "江西",
        "cityPinyin": "chongyi",
        "cityCode": "101240702"
      },
      {
        "cityName": "上犹",
        "province": "江西",
        "cityPinyin": "shangyou",
        "cityCode": "101240703"
      },
      {
        "cityName": "南康",
        "province": "江西",
        "cityPinyin": "nankang",
        "cityCode": "101240704"
      },
      {
        "cityName": "大余",
        "province": "江西",
        "cityPinyin": "dayu",
        "cityCode": "101240705"
      },
      {
        "cityName": "信丰",
        "province": "江西",
        "cityPinyin": "xinfeng",
        "cityCode": "101240706"
      },
      {
        "cityName": "宁都",
        "province": "江西",
        "cityPinyin": "ningdu",
        "cityCode": "101240707"
      },
      {
        "cityName": "石城",
        "province": "江西",
        "cityPinyin": "shicheng",
        "cityCode": "101240708"
      },
      {
        "cityName": "瑞金",
        "province": "江西",
        "cityPinyin": "ruijin",
        "cityCode": "101240709"
      },
      {
        "cityName": "于都",
        "province": "江西",
        "cityPinyin": "yudu",
        "cityCode": "101240710"
      },
      {
        "cityName": "会昌",
        "province": "江西",
        "cityPinyin": "huichang",
        "cityCode": "101240711"
      },
      {
        "cityName": "安远",
        "province": "江西",
        "cityPinyin": "anyuan",
        "cityCode": "101240712"
      },
      {
        "cityName": "全南",
        "province": "江西",
        "cityPinyin": "quannan",
        "cityCode": "101240713"
      },
      {
        "cityName": "龙南",
        "province": "江西",
        "cityPinyin": "longnan",
        "cityCode": "101240714"
      },
      {
        "cityName": "定南",
        "province": "江西",
        "cityPinyin": "dingnan",
        "cityCode": "101240715"
      },
      {
        "cityName": "寻乌",
        "province": "江西",
        "cityPinyin": "xunwu",
        "cityCode": "101240716"
      },
      {
        "cityName": "兴国",
        "province": "江西",
        "cityPinyin": "xingguo",
        "cityCode": "101240717"
      },
      {
        "cityName": "赣县",
        "province": "江西",
        "cityPinyin": "ganxian",
        "cityCode": "101240718"
      },
      {
        "cityName": "景德镇",
        "province": "江西",
        "cityPinyin": "jingdezhen",
        "cityCode": "101240801"
      },
      {
        "cityName": "乐平",
        "province": "江西",
        "cityPinyin": "leping",
        "cityCode": "101240802"
      },
      {
        "cityName": "浮梁",
        "province": "江西",
        "cityPinyin": "fuliang",
        "cityCode": "101240803"
      },
      {
        "cityName": "萍乡",
        "province": "江西",
        "cityPinyin": "pingxiang",
        "cityCode": "101240901"
      },
      {
        "cityName": "莲花",
        "province": "江西",
        "cityPinyin": "lianhua",
        "cityCode": "101240902"
      },
      {
        "cityName": "上栗",
        "province": "江西",
        "cityPinyin": "shangli",
        "cityCode": "101240903"
      },
      {
        "cityName": "安源",
        "province": "江西",
        "cityPinyin": "anyuan",
        "cityCode": "101240904"
      },
      {
        "cityName": "芦溪",
        "province": "江西",
        "cityPinyin": "luxi",
        "cityCode": "101240905"
      },
      {
        "cityName": "湘东",
        "province": "江西",
        "cityPinyin": "xiangdong",
        "cityCode": "101240906"
      },
      {
        "cityName": "新余",
        "province": "江西",
        "cityPinyin": "xinyu",
        "cityCode": "101241001"
      },
      {
        "cityName": "分宜",
        "province": "江西",
        "cityPinyin": "fenyi",
        "cityCode": "101241002"
      },
      {
        "cityName": "鹰潭",
        "province": "江西",
        "cityPinyin": "yingtan",
        "cityCode": "101241101"
      },
      {
        "cityName": "余江",
        "province": "江西",
        "cityPinyin": "yujiang",
        "cityCode": "101241102"
      },
      {
        "cityName": "贵溪",
        "province": "江西",
        "cityPinyin": "guixi",
        "cityCode": "101241103"
      },
      {
        "cityName": "湖南",
        "province": "湖南",
        "cityPinyin": "changsha",
        "cityCode": "101250101"
      },
      {
        "cityName": "长沙",
        "province": "湖南",
        "cityPinyin": "changsha",
        "cityCode": "101250101"
      },
      {
        "cityName": "宁乡",
        "province": "湖南",
        "cityPinyin": "ningxiang",
        "cityCode": "101250102"
      },
      {
        "cityName": "浏阳",
        "province": "湖南",
        "cityPinyin": "liuyang",
        "cityCode": "101250103"
      },
      {
        "cityName": "马坡岭",
        "province": "湖南",
        "cityPinyin": "mapoling",
        "cityCode": "101250104"
      },
      {
        "cityName": "望城",
        "province": "湖南",
        "cityPinyin": "wangcheng",
        "cityCode": "101250105"
      },
      {
        "cityName": "湘潭",
        "province": "湖南",
        "cityPinyin": "xiangtan",
        "cityCode": "101250201"
      },
      {
        "cityName": "韶山",
        "province": "湖南",
        "cityPinyin": "shaoshan",
        "cityCode": "101250202"
      },
      {
        "cityName": "湘乡",
        "province": "湖南",
        "cityPinyin": "xiangxiang",
        "cityCode": "101250203"
      },
      {
        "cityName": "株洲",
        "province": "湖南",
        "cityPinyin": "zhuzhou",
        "cityCode": "101250301"
      },
      {
        "cityName": "攸县",
        "province": "湖南",
        "cityPinyin": "youxian",
        "cityCode": "101250302"
      },
      {
        "cityName": "醴陵",
        "province": "湖南",
        "cityPinyin": "liling",
        "cityCode": "101250303"
      },
      {
        "cityName": "茶陵",
        "province": "湖南",
        "cityPinyin": "chaling",
        "cityCode": "101250305"
      },
      {
        "cityName": "炎陵",
        "province": "湖南",
        "cityPinyin": "yanling",
        "cityCode": "101250306"
      },
      {
        "cityName": "衡阳",
        "province": "湖南",
        "cityPinyin": "hengyang",
        "cityCode": "101250401"
      },
      {
        "cityName": "衡山",
        "province": "湖南",
        "cityPinyin": "hengshan",
        "cityCode": "101250402"
      },
      {
        "cityName": "衡东",
        "province": "湖南",
        "cityPinyin": "hengdong",
        "cityCode": "101250403"
      },
      {
        "cityName": "祁东",
        "province": "湖南",
        "cityPinyin": "qidong",
        "cityCode": "101250404"
      },
      {
        "cityName": "衡阳县",
        "province": "湖南",
        "cityPinyin": "hengyangxian",
        "cityCode": "101250405"
      },
      {
        "cityName": "常宁",
        "province": "湖南",
        "cityPinyin": "changning",
        "cityCode": "101250406"
      },
      {
        "cityName": "衡南",
        "province": "湖南",
        "cityPinyin": "hengnan",
        "cityCode": "101250407"
      },
      {
        "cityName": "耒阳",
        "province": "湖南",
        "cityPinyin": "leiyang",
        "cityCode": "101250408"
      },
      {
        "cityName": "南岳",
        "province": "湖南",
        "cityPinyin": "nanyue",
        "cityCode": "101250409"
      },
      {
        "cityName": "郴州",
        "province": "湖南",
        "cityPinyin": "chenzhou",
        "cityCode": "101250501"
      },
      {
        "cityName": "桂阳",
        "province": "湖南",
        "cityPinyin": "guiyang",
        "cityCode": "101250502"
      },
      {
        "cityName": "嘉禾",
        "province": "湖南",
        "cityPinyin": "jiahe",
        "cityCode": "101250503"
      },
      {
        "cityName": "宜章",
        "province": "湖南",
        "cityPinyin": "yizhang",
        "cityCode": "101250504"
      },
      {
        "cityName": "临武",
        "province": "湖南",
        "cityPinyin": "linwu",
        "cityCode": "101250505"
      },
      {
        "cityName": "资兴",
        "province": "湖南",
        "cityPinyin": "zixing",
        "cityCode": "101250507"
      },
      {
        "cityName": "汝城",
        "province": "湖南",
        "cityPinyin": "rucheng",
        "cityCode": "101250508"
      },
      {
        "cityName": "安仁",
        "province": "湖南",
        "cityPinyin": "anren",
        "cityCode": "101250509"
      },
      {
        "cityName": "永兴",
        "province": "湖南",
        "cityPinyin": "yongxing",
        "cityCode": "101250510"
      },
      {
        "cityName": "桂东",
        "province": "湖南",
        "cityPinyin": "guidong",
        "cityCode": "101250511"
      },
      {
        "cityName": "苏仙",
        "province": "湖南",
        "cityPinyin": "suxian",
        "cityCode": "101250512"
      },
      {
        "cityName": "常德",
        "province": "湖南",
        "cityPinyin": "changde",
        "cityCode": "101250601"
      },
      {
        "cityName": "安乡",
        "province": "湖南",
        "cityPinyin": "anxiang",
        "cityCode": "101250602"
      },
      {
        "cityName": "桃源",
        "province": "湖南",
        "cityPinyin": "taoyuan",
        "cityCode": "101250603"
      },
      {
        "cityName": "汉寿",
        "province": "湖南",
        "cityPinyin": "hanshou",
        "cityCode": "101250604"
      },
      {
        "cityName": "澧县",
        "province": "湖南",
        "cityPinyin": "lixian",
        "cityCode": "101250605"
      },
      {
        "cityName": "临澧",
        "province": "湖南",
        "cityPinyin": "linli",
        "cityCode": "101250606"
      },
      {
        "cityName": "石门",
        "province": "湖南",
        "cityPinyin": "shimen",
        "cityCode": "101250607"
      },
      {
        "cityName": "津市",
        "province": "湖南",
        "cityPinyin": "jinshi",
        "cityCode": "101250608"
      },
      {
        "cityName": "益阳",
        "province": "湖南",
        "cityPinyin": "yiyang",
        "cityCode": "101250700"
      },
      {
        "cityName": "赫山区",
        "province": "湖南",
        "cityPinyin": "heshanqu",
        "cityCode": "101250701"
      },
      {
        "cityName": "南县",
        "province": "湖南",
        "cityPinyin": "nanxian",
        "cityCode": "101250702"
      },
      {
        "cityName": "桃江",
        "province": "湖南",
        "cityPinyin": "taojiang",
        "cityCode": "101250703"
      },
      {
        "cityName": "安化",
        "province": "湖南",
        "cityPinyin": "anhua",
        "cityCode": "101250704"
      },
      {
        "cityName": "沅江",
        "province": "湖南",
        "cityPinyin": "yuanjiang",
        "cityCode": "101250705"
      },
      {
        "cityName": "娄底",
        "province": "湖南",
        "cityPinyin": "loudi",
        "cityCode": "101250801"
      },
      {
        "cityName": "双峰",
        "province": "湖南",
        "cityPinyin": "shuangfeng",
        "cityCode": "101250802"
      },
      {
        "cityName": "冷水江",
        "province": "湖南",
        "cityPinyin": "lengshuijiang",
        "cityCode": "101250803"
      },
      {
        "cityName": "新化",
        "province": "湖南",
        "cityPinyin": "xinhua",
        "cityCode": "101250805"
      },
      {
        "cityName": "涟源",
        "province": "湖南",
        "cityPinyin": "lianyuan",
        "cityCode": "101250806"
      },
      {
        "cityName": "邵阳",
        "province": "湖南",
        "cityPinyin": "shaoyang",
        "cityCode": "101250901"
      },
      {
        "cityName": "隆回",
        "province": "湖南",
        "cityPinyin": "longhui",
        "cityCode": "101250902"
      },
      {
        "cityName": "洞口",
        "province": "湖南",
        "cityPinyin": "dongkou",
        "cityCode": "101250903"
      },
      {
        "cityName": "新邵",
        "province": "湖南",
        "cityPinyin": "xinshao",
        "cityCode": "101250904"
      },
      {
        "cityName": "邵东",
        "province": "湖南",
        "cityPinyin": "shaodong",
        "cityCode": "101250905"
      },
      {
        "cityName": "绥宁",
        "province": "湖南",
        "cityPinyin": "suining",
        "cityCode": "101250906"
      },
      {
        "cityName": "新宁",
        "province": "湖南",
        "cityPinyin": "xinning",
        "cityCode": "101250907"
      },
      {
        "cityName": "武冈",
        "province": "湖南",
        "cityPinyin": "wugang",
        "cityCode": "101250908"
      },
      {
        "cityName": "城步",
        "province": "湖南",
        "cityPinyin": "chengbu",
        "cityCode": "101250909"
      },
      {
        "cityName": "邵阳县",
        "province": "湖南",
        "cityPinyin": "shaoyangxian",
        "cityCode": "101250910"
      },
      {
        "cityName": "岳阳",
        "province": "湖南",
        "cityPinyin": "yueyang",
        "cityCode": "101251001"
      },
      {
        "cityName": "华容",
        "province": "湖南",
        "cityPinyin": "huarong",
        "cityCode": "101251002"
      },
      {
        "cityName": "湘阴",
        "province": "湖南",
        "cityPinyin": "xiangyin",
        "cityCode": "101251003"
      },
      {
        "cityName": "汨罗",
        "province": "湖南",
        "cityPinyin": "miluo",
        "cityCode": "101251004"
      },
      {
        "cityName": "平江",
        "province": "湖南",
        "cityPinyin": "pingjiang",
        "cityCode": "101251005"
      },
      {
        "cityName": "临湘",
        "province": "湖南",
        "cityPinyin": "linxiang",
        "cityCode": "101251006"
      },
      {
        "cityName": "张家界",
        "province": "湖南",
        "cityPinyin": "zhangjiajie",
        "cityCode": "101251101"
      },
      {
        "cityName": "桑植",
        "province": "湖南",
        "cityPinyin": "sangzhi",
        "cityCode": "101251102"
      },
      {
        "cityName": "慈利",
        "province": "湖南",
        "cityPinyin": "cili",
        "cityCode": "101251103"
      },
      {
        "cityName": "武陵源",
        "province": "湖南",
        "cityPinyin": "wulingyuan",
        "cityCode": "101251104"
      },
      {
        "cityName": "怀化",
        "province": "湖南",
        "cityPinyin": "huaihua",
        "cityCode": "101251201"
      },
      {
        "cityName": "沅陵",
        "province": "湖南",
        "cityPinyin": "yuanling",
        "cityCode": "101251203"
      },
      {
        "cityName": "辰溪",
        "province": "湖南",
        "cityPinyin": "chenxi",
        "cityCode": "101251204"
      },
      {
        "cityName": "靖州",
        "province": "湖南",
        "cityPinyin": "jingzhou",
        "cityCode": "101251205"
      },
      {
        "cityName": "会同",
        "province": "湖南",
        "cityPinyin": "huitong",
        "cityCode": "101251206"
      },
      {
        "cityName": "通道",
        "province": "湖南",
        "cityPinyin": "tongdao",
        "cityCode": "101251207"
      },
      {
        "cityName": "麻阳",
        "province": "湖南",
        "cityPinyin": "mayang",
        "cityCode": "101251208"
      },
      {
        "cityName": "新晃",
        "province": "湖南",
        "cityPinyin": "xinhuang",
        "cityCode": "101251209"
      },
      {
        "cityName": "芷江",
        "province": "湖南",
        "cityPinyin": "zhijiang",
        "cityCode": "101251210"
      },
      {
        "cityName": "溆浦",
        "province": "湖南",
        "cityPinyin": "xupu",
        "cityCode": "101251211"
      },
      {
        "cityName": "中方",
        "province": "湖南",
        "cityPinyin": "zhongfang",
        "cityCode": "101251212"
      },
      {
        "cityName": "洪江",
        "province": "湖南",
        "cityPinyin": "hongjiang",
        "cityCode": "101251213"
      },
      {
        "cityName": "永州",
        "province": "湖南",
        "cityPinyin": "yongzhou",
        "cityCode": "101251401"
      },
      {
        "cityName": "祁阳",
        "province": "湖南",
        "cityPinyin": "qiyang",
        "cityCode": "101251402"
      },
      {
        "cityName": "东安",
        "province": "湖南",
        "cityPinyin": "dongan",
        "cityCode": "101251403"
      },
      {
        "cityName": "双牌",
        "province": "湖南",
        "cityPinyin": "shuangpai",
        "cityCode": "101251404"
      },
      {
        "cityName": "道县",
        "province": "湖南",
        "cityPinyin": "daoxian",
        "cityCode": "101251405"
      },
      {
        "cityName": "宁远",
        "province": "湖南",
        "cityPinyin": "ningyuan",
        "cityCode": "101251406"
      },
      {
        "cityName": "江永",
        "province": "湖南",
        "cityPinyin": "jiangyong",
        "cityCode": "101251407"
      },
      {
        "cityName": "蓝山",
        "province": "湖南",
        "cityPinyin": "lanshan",
        "cityCode": "101251408"
      },
      {
        "cityName": "新田",
        "province": "湖南",
        "cityPinyin": "xintian",
        "cityCode": "101251409"
      },
      {
        "cityName": "江华",
        "province": "湖南",
        "cityPinyin": "jianghua",
        "cityCode": "101251410"
      },
      {
        "cityName": "冷水滩",
        "province": "湖南",
        "cityPinyin": "lengshuitan",
        "cityCode": "101251411"
      },
      {
        "cityName": "吉首",
        "province": "湖南",
        "cityPinyin": "jishou",
        "cityCode": "101251501"
      },
      {
        "cityName": "保靖",
        "province": "湖南",
        "cityPinyin": "baojing",
        "cityCode": "101251502"
      },
      {
        "cityName": "永顺",
        "province": "湖南",
        "cityPinyin": "yongshun",
        "cityCode": "101251503"
      },
      {
        "cityName": "古丈",
        "province": "湖南",
        "cityPinyin": "guzhang",
        "cityCode": "101251504"
      },
      {
        "cityName": "凤凰",
        "province": "湖南",
        "cityPinyin": "fenghuang",
        "cityCode": "101251505"
      },
      {
        "cityName": "泸溪",
        "province": "湖南",
        "cityPinyin": "luxi",
        "cityCode": "101251506"
      },
      {
        "cityName": "龙山",
        "province": "湖南",
        "cityPinyin": "longshan",
        "cityCode": "101251507"
      },
      {
        "cityName": "花垣",
        "province": "湖南",
        "cityPinyin": "huayuan",
        "cityCode": "101251508"
      },
      {
        "cityName": "贵州",
        "province": "贵州",
        "cityPinyin": "guiyang",
        "cityCode": "101260101"
      },
      {
        "cityName": "贵阳",
        "province": "贵州",
        "cityPinyin": "guiyang",
        "cityCode": "101260101"
      },
      {
        "cityName": "白云",
        "province": "贵州",
        "cityPinyin": "baiyun",
        "cityCode": "101260102"
      },
      {
        "cityName": "花溪",
        "province": "贵州",
        "cityPinyin": "huaxi",
        "cityCode": "101260103"
      },
      {
        "cityName": "乌当",
        "province": "贵州",
        "cityPinyin": "wudang",
        "cityCode": "101260104"
      },
      {
        "cityName": "息烽",
        "province": "贵州",
        "cityPinyin": "xifeng",
        "cityCode": "101260105"
      },
      {
        "cityName": "开阳",
        "province": "贵州",
        "cityPinyin": "kaiyang",
        "cityCode": "101260106"
      },
      {
        "cityName": "修文",
        "province": "贵州",
        "cityPinyin": "xiuwen",
        "cityCode": "101260107"
      },
      {
        "cityName": "清镇",
        "province": "贵州",
        "cityPinyin": "qingzhen",
        "cityCode": "101260108"
      },
      {
        "cityName": "小河",
        "province": "贵州",
        "cityPinyin": "xiaohe",
        "cityCode": "101260109"
      },
      {
        "cityName": "云岩",
        "province": "贵州",
        "cityPinyin": "yunyan",
        "cityCode": "101260110"
      },
      {
        "cityName": "南明",
        "province": "贵州",
        "cityPinyin": "nanming",
        "cityCode": "101260111"
      },
      {
        "cityName": "遵义",
        "province": "贵州",
        "cityPinyin": "zunyi",
        "cityCode": "101260201"
      },
      {
        "cityName": "遵义县",
        "province": "贵州",
        "cityPinyin": "zunyixian",
        "cityCode": "101260202"
      },
      {
        "cityName": "仁怀",
        "province": "贵州",
        "cityPinyin": "renhuai",
        "cityCode": "101260203"
      },
      {
        "cityName": "绥阳",
        "province": "贵州",
        "cityPinyin": "suiyang",
        "cityCode": "101260204"
      },
      {
        "cityName": "湄潭",
        "province": "贵州",
        "cityPinyin": "meitan",
        "cityCode": "101260205"
      },
      {
        "cityName": "凤冈",
        "province": "贵州",
        "cityPinyin": "fenggang",
        "cityCode": "101260206"
      },
      {
        "cityName": "桐梓",
        "province": "贵州",
        "cityPinyin": "tongzi",
        "cityCode": "101260207"
      },
      {
        "cityName": "赤水",
        "province": "贵州",
        "cityPinyin": "chishui",
        "cityCode": "101260208"
      },
      {
        "cityName": "习水",
        "province": "贵州",
        "cityPinyin": "xishui",
        "cityCode": "101260209"
      },
      {
        "cityName": "道真",
        "province": "贵州",
        "cityPinyin": "daozhen",
        "cityCode": "101260210"
      },
      {
        "cityName": "正安",
        "province": "贵州",
        "cityPinyin": "zhengan",
        "cityCode": "101260211"
      },
      {
        "cityName": "务川",
        "province": "贵州",
        "cityPinyin": "wuchuan",
        "cityCode": "101260212"
      },
      {
        "cityName": "余庆",
        "province": "贵州",
        "cityPinyin": "yuqing",
        "cityCode": "101260213"
      },
      {
        "cityName": "汇川",
        "province": "贵州",
        "cityPinyin": "huichuan",
        "cityCode": "101260214"
      },
      {
        "cityName": "红花岗",
        "province": "贵州",
        "cityPinyin": "honghuagang",
        "cityCode": "101260215"
      },
      {
        "cityName": "安顺",
        "province": "贵州",
        "cityPinyin": "anshun",
        "cityCode": "101260301"
      },
      {
        "cityName": "普定",
        "province": "贵州",
        "cityPinyin": "puding",
        "cityCode": "101260302"
      },
      {
        "cityName": "镇宁",
        "province": "贵州",
        "cityPinyin": "zhenning",
        "cityCode": "101260303"
      },
      {
        "cityName": "平坝",
        "province": "贵州",
        "cityPinyin": "pingba",
        "cityCode": "101260304"
      },
      {
        "cityName": "紫云",
        "province": "贵州",
        "cityPinyin": "ziyun",
        "cityCode": "101260305"
      },
      {
        "cityName": "关岭",
        "province": "贵州",
        "cityPinyin": "guanling",
        "cityCode": "101260306"
      },
      {
        "cityName": "都匀",
        "province": "贵州",
        "cityPinyin": "duyun",
        "cityCode": "101260401"
      },
      {
        "cityName": "贵定",
        "province": "贵州",
        "cityPinyin": "guiding",
        "cityCode": "101260402"
      },
      {
        "cityName": "瓮安",
        "province": "贵州",
        "cityPinyin": "wengan",
        "cityCode": "101260403"
      },
      {
        "cityName": "长顺",
        "province": "贵州",
        "cityPinyin": "changshun",
        "cityCode": "101260404"
      },
      {
        "cityName": "福泉",
        "province": "贵州",
        "cityPinyin": "fuquan",
        "cityCode": "101260405"
      },
      {
        "cityName": "惠水",
        "province": "贵州",
        "cityPinyin": "huishui",
        "cityCode": "101260406"
      },
      {
        "cityName": "龙里",
        "province": "贵州",
        "cityPinyin": "longli",
        "cityCode": "101260407"
      },
      {
        "cityName": "罗甸",
        "province": "贵州",
        "cityPinyin": "luodian",
        "cityCode": "101260408"
      },
      {
        "cityName": "平塘",
        "province": "贵州",
        "cityPinyin": "pingtang",
        "cityCode": "101260409"
      },
      {
        "cityName": "独山",
        "province": "贵州",
        "cityPinyin": "dushan",
        "cityCode": "101260410"
      },
      {
        "cityName": "三都",
        "province": "贵州",
        "cityPinyin": "sandu",
        "cityCode": "101260411"
      },
      {
        "cityName": "荔波",
        "province": "贵州",
        "cityPinyin": "libo",
        "cityCode": "101260412"
      },
      {
        "cityName": "凯里",
        "province": "贵州",
        "cityPinyin": "kaili",
        "cityCode": "101260501"
      },
      {
        "cityName": "岑巩",
        "province": "贵州",
        "cityPinyin": "cengong",
        "cityCode": "101260502"
      },
      {
        "cityName": "施秉",
        "province": "贵州",
        "cityPinyin": "shibing",
        "cityCode": "101260503"
      },
      {
        "cityName": "镇远",
        "province": "贵州",
        "cityPinyin": "zhenyuan",
        "cityCode": "101260504"
      },
      {
        "cityName": "黄平",
        "province": "贵州",
        "cityPinyin": "huangping",
        "cityCode": "101260505"
      },
      {
        "cityName": "麻江",
        "province": "贵州",
        "cityPinyin": "majiang",
        "cityCode": "101260507"
      },
      {
        "cityName": "丹寨",
        "province": "贵州",
        "cityPinyin": "danzhai",
        "cityCode": "101260508"
      },
      {
        "cityName": "三穗",
        "province": "贵州",
        "cityPinyin": "sansui",
        "cityCode": "101260509"
      },
      {
        "cityName": "台江",
        "province": "贵州",
        "cityPinyin": "taijiang",
        "cityCode": "101260510"
      },
      {
        "cityName": "剑河",
        "province": "贵州",
        "cityPinyin": "jianhe",
        "cityCode": "101260511"
      },
      {
        "cityName": "雷山",
        "province": "贵州",
        "cityPinyin": "leishan",
        "cityCode": "101260512"
      },
      {
        "cityName": "黎平",
        "province": "贵州",
        "cityPinyin": "liping",
        "cityCode": "101260513"
      },
      {
        "cityName": "天柱",
        "province": "贵州",
        "cityPinyin": "tianzhu",
        "cityCode": "101260514"
      },
      {
        "cityName": "锦屏",
        "province": "贵州",
        "cityPinyin": "jinping",
        "cityCode": "101260515"
      },
      {
        "cityName": "榕江",
        "province": "贵州",
        "cityPinyin": "rongjiang",
        "cityCode": "101260516"
      },
      {
        "cityName": "从江",
        "province": "贵州",
        "cityPinyin": "congjiang",
        "cityCode": "101260517"
      },
      {
        "cityName": "铜仁",
        "province": "贵州",
        "cityPinyin": "tongren",
        "cityCode": "101260601"
      },
      {
        "cityName": "江口",
        "province": "贵州",
        "cityPinyin": "jiangkou",
        "cityCode": "101260602"
      },
      {
        "cityName": "玉屏",
        "province": "贵州",
        "cityPinyin": "yuping",
        "cityCode": "101260603"
      },
      {
        "cityName": "万山",
        "province": "贵州",
        "cityPinyin": "wanshan",
        "cityCode": "101260604"
      },
      {
        "cityName": "思南",
        "province": "贵州",
        "cityPinyin": "sinan",
        "cityCode": "101260605"
      },
      {
        "cityName": "印江",
        "province": "贵州",
        "cityPinyin": "yinjiang",
        "cityCode": "101260607"
      },
      {
        "cityName": "石阡",
        "province": "贵州",
        "cityPinyin": "shiqian",
        "cityCode": "101260608"
      },
      {
        "cityName": "沿河",
        "province": "贵州",
        "cityPinyin": "yanhe",
        "cityCode": "101260609"
      },
      {
        "cityName": "德江",
        "province": "贵州",
        "cityPinyin": "dejiang",
        "cityCode": "101260610"
      },
      {
        "cityName": "松桃",
        "province": "贵州",
        "cityPinyin": "songtao",
        "cityCode": "101260611"
      },
      {
        "cityName": "毕节",
        "province": "贵州",
        "cityPinyin": "bijie",
        "cityCode": "101260701"
      },
      {
        "cityName": "赫章",
        "province": "贵州",
        "cityPinyin": "hezhang",
        "cityCode": "101260702"
      },
      {
        "cityName": "金沙",
        "province": "贵州",
        "cityPinyin": "jinsha",
        "cityCode": "101260703"
      },
      {
        "cityName": "威宁",
        "province": "贵州",
        "cityPinyin": "weining",
        "cityCode": "101260704"
      },
      {
        "cityName": "大方",
        "province": "贵州",
        "cityPinyin": "dafang",
        "cityCode": "101260705"
      },
      {
        "cityName": "纳雍",
        "province": "贵州",
        "cityPinyin": "nayong",
        "cityCode": "101260706"
      },
      {
        "cityName": "织金",
        "province": "贵州",
        "cityPinyin": "zhijin",
        "cityCode": "101260707"
      },
      {
        "cityName": "黔西",
        "province": "贵州",
        "cityPinyin": "qianxi",
        "cityCode": "101260708"
      },
      {
        "cityName": "水城",
        "province": "贵州",
        "cityPinyin": "shuicheng",
        "cityCode": "101260801"
      },
      {
        "cityName": "六枝",
        "province": "贵州",
        "cityPinyin": "liuzhi",
        "cityCode": "101260802"
      },
      {
        "cityName": "盘县",
        "province": "贵州",
        "cityPinyin": "panxian",
        "cityCode": "101260804"
      },
      {
        "cityName": "兴义",
        "province": "贵州",
        "cityPinyin": "xingyi",
        "cityCode": "101260901"
      },
      {
        "cityName": "晴隆",
        "province": "贵州",
        "cityPinyin": "qinglong",
        "cityCode": "101260902"
      },
      {
        "cityName": "兴仁",
        "province": "贵州",
        "cityPinyin": "xingren",
        "cityCode": "101260903"
      },
      {
        "cityName": "贞丰",
        "province": "贵州",
        "cityPinyin": "zhenfeng",
        "cityCode": "101260904"
      },
      {
        "cityName": "望谟",
        "province": "贵州",
        "cityPinyin": "wangmo",
        "cityCode": "101260905"
      },
      {
        "cityName": "安龙",
        "province": "贵州",
        "cityPinyin": "anlong",
        "cityCode": "101260907"
      },
      {
        "cityName": "册亨",
        "province": "贵州",
        "cityPinyin": "ceheng",
        "cityCode": "101260908"
      },
      {
        "cityName": "普安",
        "province": "贵州",
        "cityPinyin": "puan",
        "cityCode": "101260909"
      },
      {
        "cityName": "四川",
        "province": "四川",
        "cityPinyin": "chengdu",
        "cityCode": "101270101"
      },
      {
        "cityName": "成都",
        "province": "四川",
        "cityPinyin": "chengdu",
        "cityCode": "101270101"
      },
      {
        "cityName": "龙泉驿",
        "province": "四川",
        "cityPinyin": "longquanyi",
        "cityCode": "101270102"
      },
      {
        "cityName": "新都",
        "province": "四川",
        "cityPinyin": "xindu",
        "cityCode": "101270103"
      },
      {
        "cityName": "温江",
        "province": "四川",
        "cityPinyin": "wenjiang",
        "cityCode": "101270104"
      },
      {
        "cityName": "金堂",
        "province": "四川",
        "cityPinyin": "jintang",
        "cityCode": "101270105"
      },
      {
        "cityName": "双流",
        "province": "四川",
        "cityPinyin": "shuangliu",
        "cityCode": "101270106"
      },
      {
        "cityName": "郫县",
        "province": "四川",
        "cityPinyin": "pixian",
        "cityCode": "101270107"
      },
      {
        "cityName": "大邑",
        "province": "四川",
        "cityPinyin": "dayi",
        "cityCode": "101270108"
      },
      {
        "cityName": "蒲江",
        "province": "四川",
        "cityPinyin": "pujiang",
        "cityCode": "101270109"
      },
      {
        "cityName": "新津",
        "province": "四川",
        "cityPinyin": "xinjin",
        "cityCode": "101270110"
      },
      {
        "cityName": "都江堰",
        "province": "四川",
        "cityPinyin": "dujiangyan",
        "cityCode": "101270111"
      },
      {
        "cityName": "彭州",
        "province": "四川",
        "cityPinyin": "pengzhou",
        "cityCode": "101270112"
      },
      {
        "cityName": "邛崃",
        "province": "四川",
        "cityPinyin": "qionglai",
        "cityCode": "101270113"
      },
      {
        "cityName": "崇州",
        "province": "四川",
        "cityPinyin": "chongzhou",
        "cityCode": "101270114"
      },
      {
        "cityName": "攀枝花",
        "province": "四川",
        "cityPinyin": "panzhihua",
        "cityCode": "101270201"
      },
      {
        "cityName": "仁和",
        "province": "四川",
        "cityPinyin": "renhe",
        "cityCode": "101270202"
      },
      {
        "cityName": "米易",
        "province": "四川",
        "cityPinyin": "miyi",
        "cityCode": "101270203"
      },
      {
        "cityName": "盐边",
        "province": "四川",
        "cityPinyin": "yanbian",
        "cityCode": "101270204"
      },
      {
        "cityName": "自贡",
        "province": "四川",
        "cityPinyin": "zigong",
        "cityCode": "101270301"
      },
      {
        "cityName": "富顺",
        "province": "四川",
        "cityPinyin": "fushun",
        "cityCode": "101270302"
      },
      {
        "cityName": "荣县",
        "province": "四川",
        "cityPinyin": "rongxian",
        "cityCode": "101270303"
      },
      {
        "cityName": "绵阳",
        "province": "四川",
        "cityPinyin": "mianyang",
        "cityCode": "101270401"
      },
      {
        "cityName": "三台",
        "province": "四川",
        "cityPinyin": "santai",
        "cityCode": "101270402"
      },
      {
        "cityName": "盐亭",
        "province": "四川",
        "cityPinyin": "yanting",
        "cityCode": "101270403"
      },
      {
        "cityName": "安县",
        "province": "四川",
        "cityPinyin": "anxian",
        "cityCode": "101270404"
      },
      {
        "cityName": "梓潼",
        "province": "四川",
        "cityPinyin": "zitong",
        "cityCode": "101270405"
      },
      {
        "cityName": "北川",
        "province": "四川",
        "cityPinyin": "beichuan",
        "cityCode": "101270406"
      },
      {
        "cityName": "平武",
        "province": "四川",
        "cityPinyin": "pingwu",
        "cityCode": "101270407"
      },
      {
        "cityName": "江油",
        "province": "四川",
        "cityPinyin": "jiangyou",
        "cityCode": "101270408"
      },
      {
        "cityName": "南充",
        "province": "四川",
        "cityPinyin": "nanchong",
        "cityCode": "101270501"
      },
      {
        "cityName": "南部",
        "province": "四川",
        "cityPinyin": "nanbu",
        "cityCode": "101270502"
      },
      {
        "cityName": "营山",
        "province": "四川",
        "cityPinyin": "yingshan",
        "cityCode": "101270503"
      },
      {
        "cityName": "蓬安",
        "province": "四川",
        "cityPinyin": "pengan",
        "cityCode": "101270504"
      },
      {
        "cityName": "仪陇",
        "province": "四川",
        "cityPinyin": "yilong",
        "cityCode": "101270505"
      },
      {
        "cityName": "西充",
        "province": "四川",
        "cityPinyin": "xichong",
        "cityCode": "101270506"
      },
      {
        "cityName": "阆中",
        "province": "四川",
        "cityPinyin": "langzhong",
        "cityCode": "101270507"
      },
      {
        "cityName": "达州",
        "province": "四川",
        "cityPinyin": "dazhou",
        "cityCode": "101270601"
      },
      {
        "cityName": "宣汉",
        "province": "四川",
        "cityPinyin": "xuanhan",
        "cityCode": "101270602"
      },
      {
        "cityName": "开江",
        "province": "四川",
        "cityPinyin": "kaijiang",
        "cityCode": "101270603"
      },
      {
        "cityName": "大竹",
        "province": "四川",
        "cityPinyin": "dazhu",
        "cityCode": "101270604"
      },
      {
        "cityName": "渠县",
        "province": "四川",
        "cityPinyin": "quxian",
        "cityCode": "101270605"
      },
      {
        "cityName": "万源",
        "province": "四川",
        "cityPinyin": "wanyuan",
        "cityCode": "101270606"
      },
      {
        "cityName": "通川",
        "province": "四川",
        "cityPinyin": "tongchuan",
        "cityCode": "101270607"
      },
      {
        "cityName": "达县",
        "province": "四川",
        "cityPinyin": "daxian",
        "cityCode": "101270608"
      },
      {
        "cityName": "遂宁",
        "province": "四川",
        "cityPinyin": "suining",
        "cityCode": "101270701"
      },
      {
        "cityName": "蓬溪",
        "province": "四川",
        "cityPinyin": "pengxi",
        "cityCode": "101270702"
      },
      {
        "cityName": "射洪",
        "province": "四川",
        "cityPinyin": "shehong",
        "cityCode": "101270703"
      },
      {
        "cityName": "广安",
        "province": "四川",
        "cityPinyin": "guangan",
        "cityCode": "101270801"
      },
      {
        "cityName": "岳池",
        "province": "四川",
        "cityPinyin": "yuechi",
        "cityCode": "101270802"
      },
      {
        "cityName": "武胜",
        "province": "四川",
        "cityPinyin": "wusheng",
        "cityCode": "101270803"
      },
      {
        "cityName": "邻水",
        "province": "四川",
        "cityPinyin": "linshui",
        "cityCode": "101270804"
      },
      {
        "cityName": "华蓥",
        "province": "四川",
        "cityPinyin": "huaying",
        "cityCode": "101270805"
      },
      {
        "cityName": "巴中",
        "province": "四川",
        "cityPinyin": "bazhong",
        "cityCode": "101270901"
      },
      {
        "cityName": "通江",
        "province": "四川",
        "cityPinyin": "tongjiang",
        "cityCode": "101270902"
      },
      {
        "cityName": "南江",
        "province": "四川",
        "cityPinyin": "nanjiang",
        "cityCode": "101270903"
      },
      {
        "cityName": "平昌",
        "province": "四川",
        "cityPinyin": "pingchang",
        "cityCode": "101270904"
      },
      {
        "cityName": "泸州",
        "province": "四川",
        "cityPinyin": "luzhou",
        "cityCode": "101271001"
      },
      {
        "cityName": "泸县",
        "province": "四川",
        "cityPinyin": "luxian",
        "cityCode": "101271003"
      },
      {
        "cityName": "合江",
        "province": "四川",
        "cityPinyin": "hejiang",
        "cityCode": "101271004"
      },
      {
        "cityName": "叙永",
        "province": "四川",
        "cityPinyin": "xuyong",
        "cityCode": "101271005"
      },
      {
        "cityName": "古蔺",
        "province": "四川",
        "cityPinyin": "gulin",
        "cityCode": "101271006"
      },
      {
        "cityName": "纳溪",
        "province": "四川",
        "cityPinyin": "naxi",
        "cityCode": "101271007"
      },
      {
        "cityName": "宜宾",
        "province": "四川",
        "cityPinyin": "yibin",
        "cityCode": "101271101"
      },
      {
        "cityName": "宜宾县",
        "province": "四川",
        "cityPinyin": "yibinxian",
        "cityCode": "101271103"
      },
      {
        "cityName": "南溪",
        "province": "四川",
        "cityPinyin": "nanxi",
        "cityCode": "101271104"
      },
      {
        "cityName": "江安",
        "province": "四川",
        "cityPinyin": "jiangan",
        "cityCode": "101271105"
      },
      {
        "cityName": "长宁",
        "province": "四川",
        "cityPinyin": "changning",
        "cityCode": "101271106"
      },
      {
        "cityName": "高县",
        "province": "四川",
        "cityPinyin": "gaoxian",
        "cityCode": "101271107"
      },
      {
        "cityName": "珙县",
        "province": "四川",
        "cityPinyin": "gongxian",
        "cityCode": "101271108"
      },
      {
        "cityName": "筠连",
        "province": "四川",
        "cityPinyin": "junlian",
        "cityCode": "101271109"
      },
      {
        "cityName": "兴文",
        "province": "四川",
        "cityPinyin": "xingwen",
        "cityCode": "101271110"
      },
      {
        "cityName": "屏山",
        "province": "四川",
        "cityPinyin": "pingshan",
        "cityCode": "101271111"
      },
      {
        "cityName": "内江",
        "province": "四川",
        "cityPinyin": "neijiang",
        "cityCode": "101271201"
      },
      {
        "cityName": "东兴",
        "province": "四川",
        "cityPinyin": "dongxing",
        "cityCode": "101271202"
      },
      {
        "cityName": "威远",
        "province": "四川",
        "cityPinyin": "weiyuan",
        "cityCode": "101271203"
      },
      {
        "cityName": "资中",
        "province": "四川",
        "cityPinyin": "zizhong",
        "cityCode": "101271204"
      },
      {
        "cityName": "隆昌",
        "province": "四川",
        "cityPinyin": "longchang",
        "cityCode": "101271205"
      },
      {
        "cityName": "资阳",
        "province": "四川",
        "cityPinyin": "ziyang",
        "cityCode": "101271301"
      },
      {
        "cityName": "安岳",
        "province": "四川",
        "cityPinyin": "anyue",
        "cityCode": "101271302"
      },
      {
        "cityName": "乐至",
        "province": "四川",
        "cityPinyin": "lezhi",
        "cityCode": "101271303"
      },
      {
        "cityName": "简阳",
        "province": "四川",
        "cityPinyin": "jianyang",
        "cityCode": "101271304"
      },
      {
        "cityName": "乐山",
        "province": "四川",
        "cityPinyin": "leshan",
        "cityCode": "101271401"
      },
      {
        "cityName": "犍为",
        "province": "四川",
        "cityPinyin": "qianwei",
        "cityCode": "101271402"
      },
      {
        "cityName": "井研",
        "province": "四川",
        "cityPinyin": "jingyan",
        "cityCode": "101271403"
      },
      {
        "cityName": "夹江",
        "province": "四川",
        "cityPinyin": "jiajiang",
        "cityCode": "101271404"
      },
      {
        "cityName": "沐川",
        "province": "四川",
        "cityPinyin": "muchuan",
        "cityCode": "101271405"
      },
      {
        "cityName": "峨边",
        "province": "四川",
        "cityPinyin": "ebian",
        "cityCode": "101271406"
      },
      {
        "cityName": "马边",
        "province": "四川",
        "cityPinyin": "mabian",
        "cityCode": "101271407"
      },
      {
        "cityName": "峨眉",
        "province": "四川",
        "cityPinyin": "emei",
        "cityCode": "101271408"
      },
      {
        "cityName": "峨眉山",
        "province": "四川",
        "cityPinyin": "emeishan",
        "cityCode": "101271409"
      },
      {
        "cityName": "眉山",
        "province": "四川",
        "cityPinyin": "meishan",
        "cityCode": "101271501"
      },
      {
        "cityName": "仁寿",
        "province": "四川",
        "cityPinyin": "renshou",
        "cityCode": "101271502"
      },
      {
        "cityName": "彭山",
        "province": "四川",
        "cityPinyin": "pengshan",
        "cityCode": "101271503"
      },
      {
        "cityName": "洪雅",
        "province": "四川",
        "cityPinyin": "hongya",
        "cityCode": "101271504"
      },
      {
        "cityName": "丹棱",
        "province": "四川",
        "cityPinyin": "danleng",
        "cityCode": "101271505"
      },
      {
        "cityName": "青神",
        "province": "四川",
        "cityPinyin": "qingshen",
        "cityCode": "101271506"
      },
      {
        "cityName": "凉山",
        "province": "四川",
        "cityPinyin": "liangshan",
        "cityCode": "101271601"
      },
      {
        "cityName": "木里",
        "province": "四川",
        "cityPinyin": "muli",
        "cityCode": "101271603"
      },
      {
        "cityName": "盐源",
        "province": "四川",
        "cityPinyin": "yanyuan",
        "cityCode": "101271604"
      },
      {
        "cityName": "德昌",
        "province": "四川",
        "cityPinyin": "dechang",
        "cityCode": "101271605"
      },
      {
        "cityName": "会理",
        "province": "四川",
        "cityPinyin": "huili",
        "cityCode": "101271606"
      },
      {
        "cityName": "会东",
        "province": "四川",
        "cityPinyin": "huidong",
        "cityCode": "101271607"
      },
      {
        "cityName": "宁南",
        "province": "四川",
        "cityPinyin": "ningnan",
        "cityCode": "101271608"
      },
      {
        "cityName": "普格",
        "province": "四川",
        "cityPinyin": "puge",
        "cityCode": "101271609"
      },
      {
        "cityName": "西昌",
        "province": "四川",
        "cityPinyin": "xichang",
        "cityCode": "101271610"
      },
      {
        "cityName": "金阳",
        "province": "四川",
        "cityPinyin": "jinyang",
        "cityCode": "101271611"
      },
      {
        "cityName": "昭觉",
        "province": "四川",
        "cityPinyin": "zhaojue",
        "cityCode": "101271612"
      },
      {
        "cityName": "喜德",
        "province": "四川",
        "cityPinyin": "xide",
        "cityCode": "101271613"
      },
      {
        "cityName": "冕宁",
        "province": "四川",
        "cityPinyin": "mianning",
        "cityCode": "101271614"
      },
      {
        "cityName": "越西",
        "province": "四川",
        "cityPinyin": "yuexi",
        "cityCode": "101271615"
      },
      {
        "cityName": "甘洛",
        "province": "四川",
        "cityPinyin": "ganluo",
        "cityCode": "101271616"
      },
      {
        "cityName": "雷波",
        "province": "四川",
        "cityPinyin": "leibo",
        "cityCode": "101271617"
      },
      {
        "cityName": "美姑",
        "province": "四川",
        "cityPinyin": "meigu",
        "cityCode": "101271618"
      },
      {
        "cityName": "布拖",
        "province": "四川",
        "cityPinyin": "butuo",
        "cityCode": "101271619"
      },
      {
        "cityName": "雅安",
        "province": "四川",
        "cityPinyin": "yaan",
        "cityCode": "101271701"
      },
      {
        "cityName": "名山",
        "province": "四川",
        "cityPinyin": "mingshan",
        "cityCode": "101271702"
      },
      {
        "cityName": "荥经",
        "province": "四川",
        "cityPinyin": "yingjing",
        "cityCode": "101271703"
      },
      {
        "cityName": "汉源",
        "province": "四川",
        "cityPinyin": "hanyuan",
        "cityCode": "101271704"
      },
      {
        "cityName": "石棉",
        "province": "四川",
        "cityPinyin": "shimian",
        "cityCode": "101271705"
      },
      {
        "cityName": "天全",
        "province": "四川",
        "cityPinyin": "tianquan",
        "cityCode": "101271706"
      },
      {
        "cityName": "芦山",
        "province": "四川",
        "cityPinyin": "lushan",
        "cityCode": "101271707"
      },
      {
        "cityName": "宝兴",
        "province": "四川",
        "cityPinyin": "baoxing",
        "cityCode": "101271708"
      },
      {
        "cityName": "甘孜",
        "province": "四川",
        "cityPinyin": "ganzi",
        "cityCode": "101271801"
      },
      {
        "cityName": "康定",
        "province": "四川",
        "cityPinyin": "kangding",
        "cityCode": "101271802"
      },
      {
        "cityName": "泸定",
        "province": "四川",
        "cityPinyin": "luding",
        "cityCode": "101271803"
      },
      {
        "cityName": "丹巴",
        "province": "四川",
        "cityPinyin": "danba",
        "cityCode": "101271804"
      },
      {
        "cityName": "九龙",
        "province": "四川",
        "cityPinyin": "jiulong",
        "cityCode": "101271805"
      },
      {
        "cityName": "雅江",
        "province": "四川",
        "cityPinyin": "yajiang",
        "cityCode": "101271806"
      },
      {
        "cityName": "道孚",
        "province": "四川",
        "cityPinyin": "daofu",
        "cityCode": "101271807"
      },
      {
        "cityName": "炉霍",
        "province": "四川",
        "cityPinyin": "luhuo",
        "cityCode": "101271808"
      },
      {
        "cityName": "新龙",
        "province": "四川",
        "cityPinyin": "xinlong",
        "cityCode": "101271809"
      },
      {
        "cityName": "德格",
        "province": "四川",
        "cityPinyin": "dege",
        "cityCode": "101271810"
      },
      {
        "cityName": "白玉",
        "province": "四川",
        "cityPinyin": "baiyu",
        "cityCode": "101271811"
      },
      {
        "cityName": "石渠",
        "province": "四川",
        "cityPinyin": "shiqu",
        "cityCode": "101271812"
      },
      {
        "cityName": "色达",
        "province": "四川",
        "cityPinyin": "seda",
        "cityCode": "101271813"
      },
      {
        "cityName": "理塘",
        "province": "四川",
        "cityPinyin": "litang",
        "cityCode": "101271814"
      },
      {
        "cityName": "巴塘",
        "province": "四川",
        "cityPinyin": "batang",
        "cityCode": "101271815"
      },
      {
        "cityName": "乡城",
        "province": "四川",
        "cityPinyin": "xiangcheng",
        "cityCode": "101271816"
      },
      {
        "cityName": "稻城",
        "province": "四川",
        "cityPinyin": "daocheng",
        "cityCode": "101271817"
      },
      {
        "cityName": "得荣",
        "province": "四川",
        "cityPinyin": "derong",
        "cityCode": "101271818"
      },
      {
        "cityName": "阿坝",
        "province": "四川",
        "cityPinyin": "aba",
        "cityCode": "101271901"
      },
      {
        "cityName": "汶川",
        "province": "四川",
        "cityPinyin": "wenchuan",
        "cityCode": "101271902"
      },
      {
        "cityName": "理县",
        "province": "四川",
        "cityPinyin": "lixian",
        "cityCode": "101271903"
      },
      {
        "cityName": "茂县",
        "province": "四川",
        "cityPinyin": "maoxian",
        "cityCode": "101271904"
      },
      {
        "cityName": "松潘",
        "province": "四川",
        "cityPinyin": "songfan",
        "cityCode": "101271905"
      },
      {
        "cityName": "九寨沟",
        "province": "四川",
        "cityPinyin": "jiuzhaigou",
        "cityCode": "101271906"
      },
      {
        "cityName": "金川",
        "province": "四川",
        "cityPinyin": "jinchuan",
        "cityCode": "101271907"
      },
      {
        "cityName": "小金",
        "province": "四川",
        "cityPinyin": "xiaojin",
        "cityCode": "101271908"
      },
      {
        "cityName": "黑水",
        "province": "四川",
        "cityPinyin": "heishui",
        "cityCode": "101271909"
      },
      {
        "cityName": "马尔康",
        "province": "四川",
        "cityPinyin": "maerkang",
        "cityCode": "101271910"
      },
      {
        "cityName": "壤塘",
        "province": "四川",
        "cityPinyin": "rangtang",
        "cityCode": "101271911"
      },
      {
        "cityName": "若尔盖",
        "province": "四川",
        "cityPinyin": "nuoergai",
        "cityCode": "101271912"
      },
      {
        "cityName": "红原",
        "province": "四川",
        "cityPinyin": "hongyuan",
        "cityCode": "101271913"
      },
      {
        "cityName": "南坪",
        "province": "四川",
        "cityPinyin": "nanping",
        "cityCode": "101271914"
      },
      {
        "cityName": "德阳",
        "province": "四川",
        "cityPinyin": "deyang",
        "cityCode": "101272001"
      },
      {
        "cityName": "中江",
        "province": "四川",
        "cityPinyin": "zhongjiang",
        "cityCode": "101272002"
      },
      {
        "cityName": "广汉",
        "province": "四川",
        "cityPinyin": "guanghan",
        "cityCode": "101272003"
      },
      {
        "cityName": "什邡",
        "province": "四川",
        "cityPinyin": "shifang",
        "cityCode": "101272004"
      },
      {
        "cityName": "绵竹",
        "province": "四川",
        "cityPinyin": "mianzhu",
        "cityCode": "101272005"
      },
      {
        "cityName": "罗江",
        "province": "四川",
        "cityPinyin": "luojiang",
        "cityCode": "101272006"
      },
      {
        "cityName": "广元",
        "province": "四川",
        "cityPinyin": "guangyuan",
        "cityCode": "101272101"
      },
      {
        "cityName": "旺苍",
        "province": "四川",
        "cityPinyin": "wangcang",
        "cityCode": "101272102"
      },
      {
        "cityName": "青川",
        "province": "四川",
        "cityPinyin": "qingchuan",
        "cityCode": "101272103"
      },
      {
        "cityName": "剑阁",
        "province": "四川",
        "cityPinyin": "jiange",
        "cityCode": "101272104"
      },
      {
        "cityName": "苍溪",
        "province": "四川",
        "cityPinyin": "cangxi",
        "cityCode": "101272105"
      },
      {
        "cityName": "广东",
        "province": "广东",
        "cityPinyin": "guangzhou",
        "cityCode": "101280101"
      },
      {
        "cityName": "广州",
        "province": "广东",
        "cityPinyin": "guangzhou",
        "cityCode": "101280101"
      },
      {
        "cityName": "番禺",
        "province": "广东",
        "cityPinyin": "panyu",
        "cityCode": "101280102"
      },
      {
        "cityName": "从化",
        "province": "广东",
        "cityPinyin": "conghua",
        "cityCode": "101280103"
      },
      {
        "cityName": "增城",
        "province": "广东",
        "cityPinyin": "zengcheng",
        "cityCode": "101280104"
      },
      {
        "cityName": "花都",
        "province": "广东",
        "cityPinyin": "huadu",
        "cityCode": "101280105"
      },
      {
        "cityName": "韶关",
        "province": "广东",
        "cityPinyin": "shaoguan",
        "cityCode": "101280201"
      },
      {
        "cityName": "乳源",
        "province": "广东",
        "cityPinyin": "ruyuan",
        "cityCode": "101280202"
      },
      {
        "cityName": "始兴",
        "province": "广东",
        "cityPinyin": "shixing",
        "cityCode": "101280203"
      },
      {
        "cityName": "翁源",
        "province": "广东",
        "cityPinyin": "wengyuan",
        "cityCode": "101280204"
      },
      {
        "cityName": "乐昌",
        "province": "广东",
        "cityPinyin": "lechang",
        "cityCode": "101280205"
      },
      {
        "cityName": "仁化",
        "province": "广东",
        "cityPinyin": "renhua",
        "cityCode": "101280206"
      },
      {
        "cityName": "南雄",
        "province": "广东",
        "cityPinyin": "nanxiong",
        "cityCode": "101280207"
      },
      {
        "cityName": "新丰",
        "province": "广东",
        "cityPinyin": "xinfeng",
        "cityCode": "101280208"
      },
      {
        "cityName": "曲江",
        "province": "广东",
        "cityPinyin": "qujiang",
        "cityCode": "101280209"
      },
      {
        "cityName": "浈江",
        "province": "广东",
        "cityPinyin": "chengjiang",
        "cityCode": "101280210"
      },
      {
        "cityName": "武江",
        "province": "广东",
        "cityPinyin": "wujiang",
        "cityCode": "101280211"
      },
      {
        "cityName": "惠州",
        "province": "广东",
        "cityPinyin": "huizhou",
        "cityCode": "101280301"
      },
      {
        "cityName": "博罗",
        "province": "广东",
        "cityPinyin": "boluo",
        "cityCode": "101280302"
      },
      {
        "cityName": "惠阳",
        "province": "广东",
        "cityPinyin": "huiyang",
        "cityCode": "101280303"
      },
      {
        "cityName": "惠东",
        "province": "广东",
        "cityPinyin": "huidong",
        "cityCode": "101280304"
      },
      {
        "cityName": "龙门",
        "province": "广东",
        "cityPinyin": "longmen",
        "cityCode": "101280305"
      },
      {
        "cityName": "梅州",
        "province": "广东",
        "cityPinyin": "meizhou",
        "cityCode": "101280401"
      },
      {
        "cityName": "兴宁",
        "province": "广东",
        "cityPinyin": "xingning",
        "cityCode": "101280402"
      },
      {
        "cityName": "蕉岭",
        "province": "广东",
        "cityPinyin": "jiaoling",
        "cityCode": "101280403"
      },
      {
        "cityName": "大埔",
        "province": "广东",
        "cityPinyin": "dabu",
        "cityCode": "101280404"
      },
      {
        "cityName": "丰顺",
        "province": "广东",
        "cityPinyin": "fengshun",
        "cityCode": "101280406"
      },
      {
        "cityName": "平远",
        "province": "广东",
        "cityPinyin": "pingyuan",
        "cityCode": "101280407"
      },
      {
        "cityName": "五华",
        "province": "广东",
        "cityPinyin": "wuhua",
        "cityCode": "101280408"
      },
      {
        "cityName": "梅县",
        "province": "广东",
        "cityPinyin": "meixian",
        "cityCode": "101280409"
      },
      {
        "cityName": "汕头",
        "province": "广东",
        "cityPinyin": "shantou",
        "cityCode": "101280501"
      },
      {
        "cityName": "潮阳",
        "province": "广东",
        "cityPinyin": "chaoyang",
        "cityCode": "101280502"
      },
      {
        "cityName": "澄海",
        "province": "广东",
        "cityPinyin": "chenghai",
        "cityCode": "101280503"
      },
      {
        "cityName": "南澳",
        "province": "广东",
        "cityPinyin": "nanao",
        "cityCode": "101280504"
      },
      {
        "cityName": "深圳",
        "province": "广东",
        "cityPinyin": "shenzhen",
        "cityCode": "101280601"
      },
      {
        "cityName": "珠海",
        "province": "广东",
        "cityPinyin": "zhuhai",
        "cityCode": "101280701"
      },
      {
        "cityName": "斗门",
        "province": "广东",
        "cityPinyin": "doumen",
        "cityCode": "101280702"
      },
      {
        "cityName": "金湾",
        "province": "广东",
        "cityPinyin": "jinwan",
        "cityCode": "101280703"
      },
      {
        "cityName": "佛山",
        "province": "广东",
        "cityPinyin": "foshan",
        "cityCode": "101280800"
      },
      {
        "cityName": "顺德",
        "province": "广东",
        "cityPinyin": "shunde",
        "cityCode": "101280801"
      },
      {
        "cityName": "三水",
        "province": "广东",
        "cityPinyin": "sanshui",
        "cityCode": "101280802"
      },
      {
        "cityName": "南海",
        "province": "广东",
        "cityPinyin": "nanhai",
        "cityCode": "101280803"
      },
      {
        "cityName": "高明",
        "province": "广东",
        "cityPinyin": "gaoming",
        "cityCode": "101280804"
      },
      {
        "cityName": "肇庆",
        "province": "广东",
        "cityPinyin": "zhaoqing",
        "cityCode": "101280901"
      },
      {
        "cityName": "广宁",
        "province": "广东",
        "cityPinyin": "guangning",
        "cityCode": "101280902"
      },
      {
        "cityName": "四会",
        "province": "广东",
        "cityPinyin": "sihui",
        "cityCode": "101280903"
      },
      {
        "cityName": "德庆",
        "province": "广东",
        "cityPinyin": "deqing",
        "cityCode": "101280905"
      },
      {
        "cityName": "怀集",
        "province": "广东",
        "cityPinyin": "huaiji",
        "cityCode": "101280906"
      },
      {
        "cityName": "封开",
        "province": "广东",
        "cityPinyin": "fengkai",
        "cityCode": "101280907"
      },
      {
        "cityName": "高要",
        "province": "广东",
        "cityPinyin": "gaoyao",
        "cityCode": "101280908"
      },
      {
        "cityName": "湛江",
        "province": "广东",
        "cityPinyin": "zhanjiang",
        "cityCode": "101281001"
      },
      {
        "cityName": "吴川",
        "province": "广东",
        "cityPinyin": "wuchuan",
        "cityCode": "101281002"
      },
      {
        "cityName": "雷州",
        "province": "广东",
        "cityPinyin": "leizhou",
        "cityCode": "101281003"
      },
      {
        "cityName": "徐闻",
        "province": "广东",
        "cityPinyin": "xuwen",
        "cityCode": "101281004"
      },
      {
        "cityName": "廉江",
        "province": "广东",
        "cityPinyin": "lianjiang",
        "cityCode": "101281005"
      },
      {
        "cityName": "赤坎",
        "province": "广东",
        "cityPinyin": "chikan",
        "cityCode": "101281006"
      },
      {
        "cityName": "遂溪",
        "province": "广东",
        "cityPinyin": "suixi",
        "cityCode": "101281007"
      },
      {
        "cityName": "坡头",
        "province": "广东",
        "cityPinyin": "potou",
        "cityCode": "101281008"
      },
      {
        "cityName": "霞山",
        "province": "广东",
        "cityPinyin": "xiashan",
        "cityCode": "101281009"
      },
      {
        "cityName": "麻章",
        "province": "广东",
        "cityPinyin": "mazhang",
        "cityCode": "101281010"
      },
      {
        "cityName": "江门",
        "province": "广东",
        "cityPinyin": "jiangmen",
        "cityCode": "101281101"
      },
      {
        "cityName": "开平",
        "province": "广东",
        "cityPinyin": "kaiping",
        "cityCode": "101281103"
      },
      {
        "cityName": "新会",
        "province": "广东",
        "cityPinyin": "xinhui",
        "cityCode": "101281104"
      },
      {
        "cityName": "恩平",
        "province": "广东",
        "cityPinyin": "enping",
        "cityCode": "101281105"
      },
      {
        "cityName": "台山",
        "province": "广东",
        "cityPinyin": "taishan",
        "cityCode": "101281106"
      },
      {
        "cityName": "蓬江",
        "province": "广东",
        "cityPinyin": "pengjiang",
        "cityCode": "101281107"
      },
      {
        "cityName": "鹤山",
        "province": "广东",
        "cityPinyin": "heshan",
        "cityCode": "101281108"
      },
      {
        "cityName": "江海",
        "province": "广东",
        "cityPinyin": "jianghai",
        "cityCode": "101281109"
      },
      {
        "cityName": "河源",
        "province": "广东",
        "cityPinyin": "heyuan",
        "cityCode": "101281201"
      },
      {
        "cityName": "紫金",
        "province": "广东",
        "cityPinyin": "zijin",
        "cityCode": "101281202"
      },
      {
        "cityName": "连平",
        "province": "广东",
        "cityPinyin": "lianping",
        "cityCode": "101281203"
      },
      {
        "cityName": "和平",
        "province": "广东",
        "cityPinyin": "heping",
        "cityCode": "101281204"
      },
      {
        "cityName": "龙川",
        "province": "广东",
        "cityPinyin": "longchuan",
        "cityCode": "101281205"
      },
      {
        "cityName": "东源",
        "province": "广东",
        "cityPinyin": "dongyuan",
        "cityCode": "101281206"
      },
      {
        "cityName": "清远",
        "province": "广东",
        "cityPinyin": "qingyuan",
        "cityCode": "101281301"
      },
      {
        "cityName": "连南",
        "province": "广东",
        "cityPinyin": "liannan",
        "cityCode": "101281302"
      },
      {
        "cityName": "连州",
        "province": "广东",
        "cityPinyin": "lianzhou",
        "cityCode": "101281303"
      },
      {
        "cityName": "连山",
        "province": "广东",
        "cityPinyin": "lianshan",
        "cityCode": "101281304"
      },
      {
        "cityName": "阳山",
        "province": "广东",
        "cityPinyin": "yangshan",
        "cityCode": "101281305"
      },
      {
        "cityName": "佛冈",
        "province": "广东",
        "cityPinyin": "fogang",
        "cityCode": "101281306"
      },
      {
        "cityName": "英德",
        "province": "广东",
        "cityPinyin": "yingde",
        "cityCode": "101281307"
      },
      {
        "cityName": "清新",
        "province": "广东",
        "cityPinyin": "qingxin",
        "cityCode": "101281308"
      },
      {
        "cityName": "云浮",
        "province": "广东",
        "cityPinyin": "yunfu",
        "cityCode": "101281401"
      },
      {
        "cityName": "罗定",
        "province": "广东",
        "cityPinyin": "luoding",
        "cityCode": "101281402"
      },
      {
        "cityName": "新兴",
        "province": "广东",
        "cityPinyin": "xinxing",
        "cityCode": "101281403"
      },
      {
        "cityName": "郁南",
        "province": "广东",
        "cityPinyin": "yunan",
        "cityCode": "101281404"
      },
      {
        "cityName": "云安",
        "province": "广东",
        "cityPinyin": "yunan",
        "cityCode": "101281406"
      },
      {
        "cityName": "潮州",
        "province": "广东",
        "cityPinyin": "chaozhou",
        "cityCode": "101281501"
      },
      {
        "cityName": "饶平",
        "province": "广东",
        "cityPinyin": "raoping",
        "cityCode": "101281502"
      },
      {
        "cityName": "潮安",
        "province": "广东",
        "cityPinyin": "chaoan",
        "cityCode": "101281503"
      },
      {
        "cityName": "东莞",
        "province": "广东",
        "cityPinyin": "dongguan",
        "cityCode": "101281601"
      },
      {
        "cityName": "中山",
        "province": "广东",
        "cityPinyin": "zhongshan",
        "cityCode": "101281701"
      },
      {
        "cityName": "阳江",
        "province": "广东",
        "cityPinyin": "yangjiang",
        "cityCode": "101281801"
      },
      {
        "cityName": "阳春",
        "province": "广东",
        "cityPinyin": "yangchun",
        "cityCode": "101281802"
      },
      {
        "cityName": "阳东",
        "province": "广东",
        "cityPinyin": "yangdong",
        "cityCode": "101281803"
      },
      {
        "cityName": "阳西",
        "province": "广东",
        "cityPinyin": "yangxi",
        "cityCode": "101281804"
      },
      {
        "cityName": "揭阳",
        "province": "广东",
        "cityPinyin": "jieyang",
        "cityCode": "101281901"
      },
      {
        "cityName": "揭西",
        "province": "广东",
        "cityPinyin": "jiexi",
        "cityCode": "101281902"
      },
      {
        "cityName": "普宁",
        "province": "广东",
        "cityPinyin": "puning",
        "cityCode": "101281903"
      },
      {
        "cityName": "惠来",
        "province": "广东",
        "cityPinyin": "huilai",
        "cityCode": "101281904"
      },
      {
        "cityName": "揭东",
        "province": "广东",
        "cityPinyin": "jiedong",
        "cityCode": "101281905"
      },
      {
        "cityName": "茂名",
        "province": "广东",
        "cityPinyin": "maoming",
        "cityCode": "101282001"
      },
      {
        "cityName": "高州",
        "province": "广东",
        "cityPinyin": "gaozhou",
        "cityCode": "101282002"
      },
      {
        "cityName": "化州",
        "province": "广东",
        "cityPinyin": "huazhou",
        "cityCode": "101282003"
      },
      {
        "cityName": "电白",
        "province": "广东",
        "cityPinyin": "dianbai",
        "cityCode": "101282004"
      },
      {
        "cityName": "信宜",
        "province": "广东",
        "cityPinyin": "xinyi",
        "cityCode": "101282005"
      },
      {
        "cityName": "茂港",
        "province": "广东",
        "cityPinyin": "maogang",
        "cityCode": "101282006"
      },
      {
        "cityName": "汕尾",
        "province": "广东",
        "cityPinyin": "shanwei",
        "cityCode": "101282101"
      },
      {
        "cityName": "海丰",
        "province": "广东",
        "cityPinyin": "haifeng",
        "cityCode": "101282102"
      },
      {
        "cityName": "陆丰",
        "province": "广东",
        "cityPinyin": "lufeng",
        "cityCode": "101282103"
      },
      {
        "cityName": "陆河",
        "province": "广东",
        "cityPinyin": "luhe",
        "cityCode": "101282104"
      },
      {
        "cityName": "云南",
        "province": "云南",
        "cityPinyin": "kunming",
        "cityCode": "101290101"
      },
      {
        "cityName": "昆明",
        "province": "云南",
        "cityPinyin": "kunming",
        "cityCode": "101290101"
      },
      {
        "cityName": "东川",
        "province": "云南",
        "cityPinyin": "dongchuan",
        "cityCode": "101290103"
      },
      {
        "cityName": "寻甸",
        "province": "云南",
        "cityPinyin": "xundian",
        "cityCode": "101290104"
      },
      {
        "cityName": "晋宁",
        "province": "云南",
        "cityPinyin": "jinning",
        "cityCode": "101290105"
      },
      {
        "cityName": "宜良",
        "province": "云南",
        "cityPinyin": "yiliang",
        "cityCode": "101290106"
      },
      {
        "cityName": "石林",
        "province": "云南",
        "cityPinyin": "shilin",
        "cityCode": "101290107"
      },
      {
        "cityName": "呈贡",
        "province": "云南",
        "cityPinyin": "chenggong",
        "cityCode": "101290108"
      },
      {
        "cityName": "富民",
        "province": "云南",
        "cityPinyin": "fumin",
        "cityCode": "101290109"
      },
      {
        "cityName": "嵩明",
        "province": "云南",
        "cityPinyin": "songming",
        "cityCode": "101290110"
      },
      {
        "cityName": "禄劝",
        "province": "云南",
        "cityPinyin": "luquan",
        "cityCode": "101290111"
      },
      {
        "cityName": "安宁",
        "province": "云南",
        "cityPinyin": "anning",
        "cityCode": "101290112"
      },
      {
        "cityName": "太华山",
        "province": "云南",
        "cityPinyin": "taihuashan",
        "cityCode": "101290113"
      },
      {
        "cityName": "大理",
        "province": "云南",
        "cityPinyin": "dali",
        "cityCode": "101290201"
      },
      {
        "cityName": "云龙",
        "province": "云南",
        "cityPinyin": "yunlong",
        "cityCode": "101290202"
      },
      {
        "cityName": "漾濞",
        "province": "云南",
        "cityPinyin": "yangbi",
        "cityCode": "101290203"
      },
      {
        "cityName": "永平",
        "province": "云南",
        "cityPinyin": "yongping",
        "cityCode": "101290204"
      },
      {
        "cityName": "宾川",
        "province": "云南",
        "cityPinyin": "binchuan",
        "cityCode": "101290205"
      },
      {
        "cityName": "弥渡",
        "province": "云南",
        "cityPinyin": "midu",
        "cityCode": "101290206"
      },
      {
        "cityName": "祥云",
        "province": "云南",
        "cityPinyin": "xiangyun",
        "cityCode": "101290207"
      },
      {
        "cityName": "巍山",
        "province": "云南",
        "cityPinyin": "weishan",
        "cityCode": "101290208"
      },
      {
        "cityName": "剑川",
        "province": "云南",
        "cityPinyin": "jianchuan",
        "cityCode": "101290209"
      },
      {
        "cityName": "洱源",
        "province": "云南",
        "cityPinyin": "eryuan",
        "cityCode": "101290210"
      },
      {
        "cityName": "鹤庆",
        "province": "云南",
        "cityPinyin": "heqing",
        "cityCode": "101290211"
      },
      {
        "cityName": "南涧",
        "province": "云南",
        "cityPinyin": "nanjian",
        "cityCode": "101290212"
      },
      {
        "cityName": "红河",
        "province": "云南",
        "cityPinyin": "honghe",
        "cityCode": "101290301"
      },
      {
        "cityName": "石屏",
        "province": "云南",
        "cityPinyin": "shiping",
        "cityCode": "101290302"
      },
      {
        "cityName": "建水",
        "province": "云南",
        "cityPinyin": "jianshui",
        "cityCode": "101290303"
      },
      {
        "cityName": "弥勒",
        "province": "云南",
        "cityPinyin": "mile",
        "cityCode": "101290304"
      },
      {
        "cityName": "元阳",
        "province": "云南",
        "cityPinyin": "yuanyang",
        "cityCode": "101290305"
      },
      {
        "cityName": "绿春",
        "province": "云南",
        "cityPinyin": "lvchun",
        "cityCode": "101290306"
      },
      {
        "cityName": "开远",
        "province": "云南",
        "cityPinyin": "kaiyuan",
        "cityCode": "101290307"
      },
      {
        "cityName": "个旧",
        "province": "云南",
        "cityPinyin": "gejiu",
        "cityCode": "101290308"
      },
      {
        "cityName": "蒙自",
        "province": "云南",
        "cityPinyin": "mengzi",
        "cityCode": "101290309"
      },
      {
        "cityName": "屏边",
        "province": "云南",
        "cityPinyin": "pingbian",
        "cityCode": "101290310"
      },
      {
        "cityName": "泸西",
        "province": "云南",
        "cityPinyin": "luxi",
        "cityCode": "101290311"
      },
      {
        "cityName": "金平",
        "province": "云南",
        "cityPinyin": "jinping",
        "cityCode": "101290312"
      },
      {
        "cityName": "河口",
        "province": "云南",
        "cityPinyin": "hekou",
        "cityCode": "101290313"
      },
      {
        "cityName": "曲靖",
        "province": "云南",
        "cityPinyin": "qujing",
        "cityCode": "101290401"
      },
      {
        "cityName": "沾益",
        "province": "云南",
        "cityPinyin": "zhanyi",
        "cityCode": "101290402"
      },
      {
        "cityName": "陆良",
        "province": "云南",
        "cityPinyin": "luliang",
        "cityCode": "101290403"
      },
      {
        "cityName": "富源",
        "province": "云南",
        "cityPinyin": "fuyuan",
        "cityCode": "101290404"
      },
      {
        "cityName": "马龙",
        "province": "云南",
        "cityPinyin": "malong",
        "cityCode": "101290405"
      },
      {
        "cityName": "师宗",
        "province": "云南",
        "cityPinyin": "shizong",
        "cityCode": "101290406"
      },
      {
        "cityName": "罗平",
        "province": "云南",
        "cityPinyin": "luoping",
        "cityCode": "101290407"
      },
      {
        "cityName": "会泽",
        "province": "云南",
        "cityPinyin": "huize",
        "cityCode": "101290408"
      },
      {
        "cityName": "宣威",
        "province": "云南",
        "cityPinyin": "xuanwei",
        "cityCode": "101290409"
      },
      {
        "cityName": "保山",
        "province": "云南",
        "cityPinyin": "baoshan",
        "cityCode": "101290501"
      },
      {
        "cityName": "龙陵",
        "province": "云南",
        "cityPinyin": "longling",
        "cityCode": "101290503"
      },
      {
        "cityName": "施甸",
        "province": "云南",
        "cityPinyin": "sidian",
        "cityCode": "101290504"
      },
      {
        "cityName": "昌宁",
        "province": "云南",
        "cityPinyin": "changning",
        "cityCode": "101290505"
      },
      {
        "cityName": "腾冲",
        "province": "云南",
        "cityPinyin": "tengchong",
        "cityCode": "101290506"
      },
      {
        "cityName": "文山",
        "province": "云南",
        "cityPinyin": "wenshan",
        "cityCode": "101290601"
      },
      {
        "cityName": "西畴",
        "province": "云南",
        "cityPinyin": "xichou",
        "cityCode": "101290602"
      },
      {
        "cityName": "马关",
        "province": "云南",
        "cityPinyin": "maguan",
        "cityCode": "101290603"
      },
      {
        "cityName": "麻栗坡",
        "province": "云南",
        "cityPinyin": "malipo",
        "cityCode": "101290604"
      },
      {
        "cityName": "砚山",
        "province": "云南",
        "cityPinyin": "yanshan",
        "cityCode": "101290605"
      },
      {
        "cityName": "丘北",
        "province": "云南",
        "cityPinyin": "qiubei",
        "cityCode": "101290606"
      },
      {
        "cityName": "广南",
        "province": "云南",
        "cityPinyin": "guangnan",
        "cityCode": "101290607"
      },
      {
        "cityName": "富宁",
        "province": "云南",
        "cityPinyin": "funing",
        "cityCode": "101290608"
      },
      {
        "cityName": "玉溪",
        "province": "云南",
        "cityPinyin": "yuxi",
        "cityCode": "101290701"
      },
      {
        "cityName": "澄江",
        "province": "云南",
        "cityPinyin": "chengjiang",
        "cityCode": "101290702"
      },
      {
        "cityName": "江川",
        "province": "云南",
        "cityPinyin": "jiangchuan",
        "cityCode": "101290703"
      },
      {
        "cityName": "通海",
        "province": "云南",
        "cityPinyin": "tonghai",
        "cityCode": "101290704"
      },
      {
        "cityName": "华宁",
        "province": "云南",
        "cityPinyin": "huaning",
        "cityCode": "101290705"
      },
      {
        "cityName": "新平",
        "province": "云南",
        "cityPinyin": "xinping",
        "cityCode": "101290706"
      },
      {
        "cityName": "易门",
        "province": "云南",
        "cityPinyin": "yimen",
        "cityCode": "101290707"
      },
      {
        "cityName": "峨山",
        "province": "云南",
        "cityPinyin": "eshan",
        "cityCode": "101290708"
      },
      {
        "cityName": "元江",
        "province": "云南",
        "cityPinyin": "yuanjiang",
        "cityCode": "101290709"
      },
      {
        "cityName": "楚雄",
        "province": "云南",
        "cityPinyin": "chuxiong",
        "cityCode": "101290801"
      },
      {
        "cityName": "大姚",
        "province": "云南",
        "cityPinyin": "dayao",
        "cityCode": "101290802"
      },
      {
        "cityName": "元谋",
        "province": "云南",
        "cityPinyin": "yuanmou",
        "cityCode": "101290803"
      },
      {
        "cityName": "姚安",
        "province": "云南",
        "cityPinyin": "yaoan",
        "cityCode": "101290804"
      },
      {
        "cityName": "牟定",
        "province": "云南",
        "cityPinyin": "mouding",
        "cityCode": "101290805"
      },
      {
        "cityName": "南华",
        "province": "云南",
        "cityPinyin": "nanhua",
        "cityCode": "101290806"
      },
      {
        "cityName": "武定",
        "province": "云南",
        "cityPinyin": "wuding",
        "cityCode": "101290807"
      },
      {
        "cityName": "禄丰",
        "province": "云南",
        "cityPinyin": "lufeng",
        "cityCode": "101290808"
      },
      {
        "cityName": "双柏",
        "province": "云南",
        "cityPinyin": "shuangbai",
        "cityCode": "101290809"
      },
      {
        "cityName": "永仁",
        "province": "云南",
        "cityPinyin": "yongren",
        "cityCode": "101290810"
      },
      {
        "cityName": "普洱",
        "province": "云南",
        "cityPinyin": "puer",
        "cityCode": "101290901"
      },
      {
        "cityName": "景谷",
        "province": "云南",
        "cityPinyin": "jinggu",
        "cityCode": "101290902"
      },
      {
        "cityName": "景东",
        "province": "云南",
        "cityPinyin": "jingdong",
        "cityCode": "101290903"
      },
      {
        "cityName": "澜沧",
        "province": "云南",
        "cityPinyin": "lancang",
        "cityCode": "101290904"
      },
      {
        "cityName": "墨江",
        "province": "云南",
        "cityPinyin": "mojiang",
        "cityCode": "101290906"
      },
      {
        "cityName": "江城",
        "province": "云南",
        "cityPinyin": "jiangcheng",
        "cityCode": "101290907"
      },
      {
        "cityName": "孟连",
        "province": "云南",
        "cityPinyin": "menglian",
        "cityCode": "101290908"
      },
      {
        "cityName": "西盟",
        "province": "云南",
        "cityPinyin": "ximeng",
        "cityCode": "101290909"
      },
      {
        "cityName": "镇沅",
        "province": "云南",
        "cityPinyin": "zhenyuan",
        "cityCode": "101290911"
      },
      {
        "cityName": "宁洱",
        "province": "云南",
        "cityPinyin": "ninger",
        "cityCode": "101290912"
      },
      {
        "cityName": "昭通",
        "province": "云南",
        "cityPinyin": "zhaotong",
        "cityCode": "101291001"
      },
      {
        "cityName": "鲁甸",
        "province": "云南",
        "cityPinyin": "ludian",
        "cityCode": "101291002"
      },
      {
        "cityName": "彝良",
        "province": "云南",
        "cityPinyin": "yiliang",
        "cityCode": "101291003"
      },
      {
        "cityName": "镇雄",
        "province": "云南",
        "cityPinyin": "zhenxiong",
        "cityCode": "101291004"
      },
      {
        "cityName": "威信",
        "province": "云南",
        "cityPinyin": "weixin",
        "cityCode": "101291005"
      },
      {
        "cityName": "巧家",
        "province": "云南",
        "cityPinyin": "qiaojia",
        "cityCode": "101291006"
      },
      {
        "cityName": "绥江",
        "province": "云南",
        "cityPinyin": "suijiang",
        "cityCode": "101291007"
      },
      {
        "cityName": "永善",
        "province": "云南",
        "cityPinyin": "yongshan",
        "cityCode": "101291008"
      },
      {
        "cityName": "盐津",
        "province": "云南",
        "cityPinyin": "yanjin",
        "cityCode": "101291009"
      },
      {
        "cityName": "大关",
        "province": "云南",
        "cityPinyin": "daguan",
        "cityCode": "101291010"
      },
      {
        "cityName": "水富",
        "province": "云南",
        "cityPinyin": "shuifu",
        "cityCode": "101291011"
      },
      {
        "cityName": "临沧",
        "province": "云南",
        "cityPinyin": "lincang",
        "cityCode": "101291101"
      },
      {
        "cityName": "沧源",
        "province": "云南",
        "cityPinyin": "cangyuan",
        "cityCode": "101291102"
      },
      {
        "cityName": "耿马",
        "province": "云南",
        "cityPinyin": "gengma",
        "cityCode": "101291103"
      },
      {
        "cityName": "双江",
        "province": "云南",
        "cityPinyin": "shuangjiang",
        "cityCode": "101291104"
      },
      {
        "cityName": "凤庆",
        "province": "云南",
        "cityPinyin": "fengqing",
        "cityCode": "101291105"
      },
      {
        "cityName": "永德",
        "province": "云南",
        "cityPinyin": "yongde",
        "cityCode": "101291106"
      },
      {
        "cityName": "云县",
        "province": "云南",
        "cityPinyin": "yunxian",
        "cityCode": "101291107"
      },
      {
        "cityName": "镇康",
        "province": "云南",
        "cityPinyin": "zhenkang",
        "cityCode": "101291108"
      },
      {
        "cityName": "怒江",
        "province": "云南",
        "cityPinyin": "nujiang",
        "cityCode": "101291201"
      },
      {
        "cityName": "福贡",
        "province": "云南",
        "cityPinyin": "fugong",
        "cityCode": "101291203"
      },
      {
        "cityName": "兰坪",
        "province": "云南",
        "cityPinyin": "lanping",
        "cityCode": "101291204"
      },
      {
        "cityName": "泸水",
        "province": "云南",
        "cityPinyin": "lushui",
        "cityCode": "101291205"
      },
      {
        "cityName": "六库",
        "province": "云南",
        "cityPinyin": "liuku",
        "cityCode": "101291206"
      },
      {
        "cityName": "贡山",
        "province": "云南",
        "cityPinyin": "gongshan",
        "cityCode": "101291207"
      },
      {
        "cityName": "香格里拉",
        "province": "云南",
        "cityPinyin": "xianggelila",
        "cityCode": "101291301"
      },
      {
        "cityName": "德钦",
        "province": "云南",
        "cityPinyin": "deqin",
        "cityCode": "101291302"
      },
      {
        "cityName": "维西",
        "province": "云南",
        "cityPinyin": "weixi",
        "cityCode": "101291303"
      },
      {
        "cityName": "中甸",
        "province": "云南",
        "cityPinyin": "zhongdian",
        "cityCode": "101291304"
      },
      {
        "cityName": "丽江",
        "province": "云南",
        "cityPinyin": "lijiang",
        "cityCode": "101291401"
      },
      {
        "cityName": "永胜",
        "province": "云南",
        "cityPinyin": "yongsheng",
        "cityCode": "101291402"
      },
      {
        "cityName": "华坪",
        "province": "云南",
        "cityPinyin": "huaping",
        "cityCode": "101291403"
      },
      {
        "cityName": "宁蒗",
        "province": "云南",
        "cityPinyin": "ninglang",
        "cityCode": "101291404"
      },
      {
        "cityName": "德宏",
        "province": "云南",
        "cityPinyin": "dehong",
        "cityCode": "101291501"
      },
      {
        "cityName": "陇川",
        "province": "云南",
        "cityPinyin": "longchuan",
        "cityCode": "101291503"
      },
      {
        "cityName": "盈江",
        "province": "云南",
        "cityPinyin": "yingjiang",
        "cityCode": "101291504"
      },
      {
        "cityName": "瑞丽",
        "province": "云南",
        "cityPinyin": "ruili",
        "cityCode": "101291506"
      },
      {
        "cityName": "梁河",
        "province": "云南",
        "cityPinyin": "lianghe",
        "cityCode": "101291507"
      },
      {
        "cityName": "潞西",
        "province": "云南",
        "cityPinyin": "luxi",
        "cityCode": "101291508"
      },
      {
        "cityName": "景洪",
        "province": "云南",
        "cityPinyin": "jinghong",
        "cityCode": "101291601"
      },
      {
        "cityName": "勐海",
        "province": "云南",
        "cityPinyin": "menghai",
        "cityCode": "101291603"
      },
      {
        "cityName": "勐腊",
        "province": "云南",
        "cityPinyin": "mengla",
        "cityCode": "101291605"
      },
      {
        "cityName": "广西",
        "province": "广西",
        "cityPinyin": "nanning",
        "cityCode": "101300101"
      },
      {
        "cityName": "南宁",
        "province": "广西",
        "cityPinyin": "nanning",
        "cityCode": "101300101"
      },
      {
        "cityName": "邕宁",
        "province": "广西",
        "cityPinyin": "yongning",
        "cityCode": "101300103"
      },
      {
        "cityName": "横县",
        "province": "广西",
        "cityPinyin": "hengxian",
        "cityCode": "101300104"
      },
      {
        "cityName": "隆安",
        "province": "广西",
        "cityPinyin": "longan",
        "cityCode": "101300105"
      },
      {
        "cityName": "马山",
        "province": "广西",
        "cityPinyin": "mashan",
        "cityCode": "101300106"
      },
      {
        "cityName": "上林",
        "province": "广西",
        "cityPinyin": "shanglin",
        "cityCode": "101300107"
      },
      {
        "cityName": "武鸣",
        "province": "广西",
        "cityPinyin": "wuming",
        "cityCode": "101300108"
      },
      {
        "cityName": "宾阳",
        "province": "广西",
        "cityPinyin": "binyang",
        "cityCode": "101300109"
      },
      {
        "cityName": "崇左",
        "province": "广西",
        "cityPinyin": "chongzuo",
        "cityCode": "101300201"
      },
      {
        "cityName": "天等",
        "province": "广西",
        "cityPinyin": "tiandeng",
        "cityCode": "101300202"
      },
      {
        "cityName": "龙州",
        "province": "广西",
        "cityPinyin": "longzhou",
        "cityCode": "101300203"
      },
      {
        "cityName": "凭祥",
        "province": "广西",
        "cityPinyin": "pingxiang",
        "cityCode": "101300204"
      },
      {
        "cityName": "大新",
        "province": "广西",
        "cityPinyin": "daxin",
        "cityCode": "101300205"
      },
      {
        "cityName": "扶绥",
        "province": "广西",
        "cityPinyin": "fusui",
        "cityCode": "101300206"
      },
      {
        "cityName": "宁明",
        "province": "广西",
        "cityPinyin": "ningming",
        "cityCode": "101300207"
      },
      {
        "cityName": "柳州",
        "province": "广西",
        "cityPinyin": "liuzhou",
        "cityCode": "101300301"
      },
      {
        "cityName": "柳城",
        "province": "广西",
        "cityPinyin": "liucheng",
        "cityCode": "101300302"
      },
      {
        "cityName": "鹿寨",
        "province": "广西",
        "cityPinyin": "luzhai",
        "cityCode": "101300304"
      },
      {
        "cityName": "柳江",
        "province": "广西",
        "cityPinyin": "liujiang",
        "cityCode": "101300305"
      },
      {
        "cityName": "融安",
        "province": "广西",
        "cityPinyin": "rongan",
        "cityCode": "101300306"
      },
      {
        "cityName": "融水",
        "province": "广西",
        "cityPinyin": "rongshui",
        "cityCode": "101300307"
      },
      {
        "cityName": "三江",
        "province": "广西",
        "cityPinyin": "sanjiang",
        "cityCode": "101300308"
      },
      {
        "cityName": "来宾",
        "province": "广西",
        "cityPinyin": "laibin",
        "cityCode": "101300401"
      },
      {
        "cityName": "忻城",
        "province": "广西",
        "cityPinyin": "xicheng",
        "cityCode": "101300402"
      },
      {
        "cityName": "金秀",
        "province": "广西",
        "cityPinyin": "jinxiu",
        "cityCode": "101300403"
      },
      {
        "cityName": "象州",
        "province": "广西",
        "cityPinyin": "xiangzhou",
        "cityCode": "101300404"
      },
      {
        "cityName": "武宣",
        "province": "广西",
        "cityPinyin": "wuxuan",
        "cityCode": "101300405"
      },
      {
        "cityName": "合山",
        "province": "广西",
        "cityPinyin": "heshan",
        "cityCode": "101300406"
      },
      {
        "cityName": "桂林",
        "province": "广西",
        "cityPinyin": "guilin",
        "cityCode": "101300501"
      },
      {
        "cityName": "龙胜",
        "province": "广西",
        "cityPinyin": "longsheng",
        "cityCode": "101300503"
      },
      {
        "cityName": "永福",
        "province": "广西",
        "cityPinyin": "yongfu",
        "cityCode": "101300504"
      },
      {
        "cityName": "临桂",
        "province": "广西",
        "cityPinyin": "lingui",
        "cityCode": "101300505"
      },
      {
        "cityName": "兴安",
        "province": "广西",
        "cityPinyin": "xingan",
        "cityCode": "101300506"
      },
      {
        "cityName": "灵川",
        "province": "广西",
        "cityPinyin": "lingchuan",
        "cityCode": "101300507"
      },
      {
        "cityName": "全州",
        "province": "广西",
        "cityPinyin": "quanzhou",
        "cityCode": "101300508"
      },
      {
        "cityName": "灌阳",
        "province": "广西",
        "cityPinyin": "guanyang",
        "cityCode": "101300509"
      },
      {
        "cityName": "阳朔",
        "province": "广西",
        "cityPinyin": "yangshuo",
        "cityCode": "101300510"
      },
      {
        "cityName": "恭城",
        "province": "广西",
        "cityPinyin": "gongcheng",
        "cityCode": "101300511"
      },
      {
        "cityName": "平乐",
        "province": "广西",
        "cityPinyin": "pingle",
        "cityCode": "101300512"
      },
      {
        "cityName": "荔浦",
        "province": "广西",
        "cityPinyin": "lipu",
        "cityCode": "101300513"
      },
      {
        "cityName": "资源",
        "province": "广西",
        "cityPinyin": "ziyuan",
        "cityCode": "101300514"
      },
      {
        "cityName": "梧州",
        "province": "广西",
        "cityPinyin": "wuzhou",
        "cityCode": "101300601"
      },
      {
        "cityName": "藤县",
        "province": "广西",
        "cityPinyin": "tengxian",
        "cityCode": "101300602"
      },
      {
        "cityName": "苍梧",
        "province": "广西",
        "cityPinyin": "cangwu",
        "cityCode": "101300604"
      },
      {
        "cityName": "蒙山",
        "province": "广西",
        "cityPinyin": "mengshan",
        "cityCode": "101300605"
      },
      {
        "cityName": "岑溪",
        "province": "广西",
        "cityPinyin": "cenxi",
        "cityCode": "101300606"
      },
      {
        "cityName": "长洲",
        "province": "广西",
        "cityPinyin": "changzhou",
        "cityCode": "101300607"
      },
      {
        "cityName": "贺州",
        "province": "广西",
        "cityPinyin": "hezhou",
        "cityCode": "101300701"
      },
      {
        "cityName": "昭平",
        "province": "广西",
        "cityPinyin": "zhaoping",
        "cityCode": "101300702"
      },
      {
        "cityName": "富川",
        "province": "广西",
        "cityPinyin": "fuchuan",
        "cityCode": "101300703"
      },
      {
        "cityName": "钟山",
        "province": "广西",
        "cityPinyin": "zhongshan",
        "cityCode": "101300704"
      },
      {
        "cityName": "贵港",
        "province": "广西",
        "cityPinyin": "guigang",
        "cityCode": "101300801"
      },
      {
        "cityName": "桂平",
        "province": "广西",
        "cityPinyin": "guiping",
        "cityCode": "101300802"
      },
      {
        "cityName": "平南",
        "province": "广西",
        "cityPinyin": "pingnan",
        "cityCode": "101300803"
      },
      {
        "cityName": "玉林",
        "province": "广西",
        "cityPinyin": "yulin",
        "cityCode": "101300901"
      },
      {
        "cityName": "博白",
        "province": "广西",
        "cityPinyin": "bobai",
        "cityCode": "101300902"
      },
      {
        "cityName": "北流",
        "province": "广西",
        "cityPinyin": "beiliu",
        "cityCode": "101300903"
      },
      {
        "cityName": "容县",
        "province": "广西",
        "cityPinyin": "rongxian",
        "cityCode": "101300904"
      },
      {
        "cityName": "陆川",
        "province": "广西",
        "cityPinyin": "luchuan",
        "cityCode": "101300905"
      },
      {
        "cityName": "兴业",
        "province": "广西",
        "cityPinyin": "xingye",
        "cityCode": "101300906"
      },
      {
        "cityName": "百色",
        "province": "广西",
        "cityPinyin": "baise",
        "cityCode": "101301001"
      },
      {
        "cityName": "那坡",
        "province": "广西",
        "cityPinyin": "napo",
        "cityCode": "101301002"
      },
      {
        "cityName": "田阳",
        "province": "广西",
        "cityPinyin": "tianyang",
        "cityCode": "101301003"
      },
      {
        "cityName": "德保",
        "province": "广西",
        "cityPinyin": "debao",
        "cityCode": "101301004"
      },
      {
        "cityName": "靖西",
        "province": "广西",
        "cityPinyin": "jingxi",
        "cityCode": "101301005"
      },
      {
        "cityName": "田东",
        "province": "广西",
        "cityPinyin": "tiandong",
        "cityCode": "101301006"
      },
      {
        "cityName": "平果",
        "province": "广西",
        "cityPinyin": "pingguo",
        "cityCode": "101301007"
      },
      {
        "cityName": "隆林",
        "province": "广西",
        "cityPinyin": "longlin",
        "cityCode": "101301008"
      },
      {
        "cityName": "西林",
        "province": "广西",
        "cityPinyin": "xilin",
        "cityCode": "101301009"
      },
      {
        "cityName": "乐业",
        "province": "广西",
        "cityPinyin": "leye",
        "cityCode": "101301010"
      },
      {
        "cityName": "凌云",
        "province": "广西",
        "cityPinyin": "lingyun",
        "cityCode": "101301011"
      },
      {
        "cityName": "田林",
        "province": "广西",
        "cityPinyin": "tianlin",
        "cityCode": "101301012"
      },
      {
        "cityName": "钦州",
        "province": "广西",
        "cityPinyin": "qinzhou",
        "cityCode": "101301101"
      },
      {
        "cityName": "浦北",
        "province": "广西",
        "cityPinyin": "pubei",
        "cityCode": "101301102"
      },
      {
        "cityName": "灵山",
        "province": "广西",
        "cityPinyin": "lingshan",
        "cityCode": "101301103"
      },
      {
        "cityName": "河池",
        "province": "广西",
        "cityPinyin": "hechi",
        "cityCode": "101301201"
      },
      {
        "cityName": "天峨",
        "province": "广西",
        "cityPinyin": "tiane",
        "cityCode": "101301202"
      },
      {
        "cityName": "东兰",
        "province": "广西",
        "cityPinyin": "donglan",
        "cityCode": "101301203"
      },
      {
        "cityName": "巴马",
        "province": "广西",
        "cityPinyin": "bama",
        "cityCode": "101301204"
      },
      {
        "cityName": "环江",
        "province": "广西",
        "cityPinyin": "huanjiang",
        "cityCode": "101301205"
      },
      {
        "cityName": "罗城",
        "province": "广西",
        "cityPinyin": "luocheng",
        "cityCode": "101301206"
      },
      {
        "cityName": "宜州",
        "province": "广西",
        "cityPinyin": "yizhou",
        "cityCode": "101301207"
      },
      {
        "cityName": "凤山",
        "province": "广西",
        "cityPinyin": "fengshan",
        "cityCode": "101301208"
      },
      {
        "cityName": "南丹",
        "province": "广西",
        "cityPinyin": "nandan",
        "cityCode": "101301209"
      },
      {
        "cityName": "都安",
        "province": "广西",
        "cityPinyin": "andu",
        "cityCode": "101301210"
      },
      {
        "cityName": "大化",
        "province": "广西",
        "cityPinyin": "dahua",
        "cityCode": "101301211"
      },
      {
        "cityName": "北海",
        "province": "广西",
        "cityPinyin": "beihai",
        "cityCode": "101301301"
      },
      {
        "cityName": "合浦",
        "province": "广西",
        "cityPinyin": "hepu",
        "cityCode": "101301302"
      },
      {
        "cityName": "涠洲岛",
        "province": "广西",
        "cityPinyin": "weizhoudao",
        "cityCode": "101301303"
      },
      {
        "cityName": "防城港",
        "province": "广西",
        "cityPinyin": "fangchenggang",
        "cityCode": "101301401"
      },
      {
        "cityName": "上思",
        "province": "广西",
        "cityPinyin": "shangsi",
        "cityCode": "101301402"
      },
      {
        "cityName": "东兴",
        "province": "广西",
        "cityPinyin": "dongxing",
        "cityCode": "101301403"
      },
      {
        "cityName": "防城",
        "province": "广西",
        "cityPinyin": "fangcheng",
        "cityCode": "101301405"
      },
      {
        "cityName": "海南",
        "province": "海南",
        "cityPinyin": "haikou",
        "cityCode": "101310101"
      },
      {
        "cityName": "海口",
        "province": "海南",
        "cityPinyin": "haikou",
        "cityCode": "101310101"
      },
      {
        "cityName": "三亚",
        "province": "海南",
        "cityPinyin": "sanya",
        "cityCode": "101310201"
      },
      {
        "cityName": "东方",
        "province": "海南",
        "cityPinyin": "dongfang",
        "cityCode": "101310202"
      },
      {
        "cityName": "临高",
        "province": "海南",
        "cityPinyin": "lingao",
        "cityCode": "101310203"
      },
      {
        "cityName": "澄迈",
        "province": "海南",
        "cityPinyin": "chengmai",
        "cityCode": "101310204"
      },
      {
        "cityName": "儋州",
        "province": "海南",
        "cityPinyin": "danzhou",
        "cityCode": "101310205"
      },
      {
        "cityName": "昌江",
        "province": "海南",
        "cityPinyin": "changjiang",
        "cityCode": "101310206"
      },
      {
        "cityName": "白沙",
        "province": "海南",
        "cityPinyin": "baisha",
        "cityCode": "101310207"
      },
      {
        "cityName": "琼中",
        "province": "海南",
        "cityPinyin": "qiongzhong",
        "cityCode": "101310208"
      },
      {
        "cityName": "定安",
        "province": "海南",
        "cityPinyin": "dingan",
        "cityCode": "101310209"
      },
      {
        "cityName": "屯昌",
        "province": "海南",
        "cityPinyin": "tunchang",
        "cityCode": "101310210"
      },
      {
        "cityName": "琼海",
        "province": "海南",
        "cityPinyin": "qionghai",
        "cityCode": "101310211"
      },
      {
        "cityName": "文昌",
        "province": "海南",
        "cityPinyin": "wenchang",
        "cityCode": "101310212"
      },
      {
        "cityName": "保亭",
        "province": "海南",
        "cityPinyin": "baoting",
        "cityCode": "101310214"
      },
      {
        "cityName": "万宁",
        "province": "海南",
        "cityPinyin": "wanning",
        "cityCode": "101310215"
      },
      {
        "cityName": "陵水",
        "province": "海南",
        "cityPinyin": "lingshui",
        "cityCode": "101310216"
      },
      {
        "cityName": "西沙",
        "province": "海南",
        "cityPinyin": "xisha",
        "cityCode": "101310217"
      },
      {
        "cityName": "南沙",
        "province": "海南",
        "cityPinyin": "nansha",
        "cityCode": "101310220"
      },
      {
        "cityName": "乐东",
        "province": "海南",
        "cityPinyin": "ledong",
        "cityCode": "101310221"
      },
      {
        "cityName": "五指山",
        "province": "海南",
        "cityPinyin": "wuzhishan",
        "cityCode": "101310222"
      }
    ],
    cityCode: "101010100", 
    /*默认城市代码为北京地区*/
    cityName: "",//城市名称
    wendu: "",//温度
    shidu: "",//湿度
    notice: "",//提示
    quality: "",//AQI

    forecast: [],
    bcgImgList: [{      //背景图片和顶部颜色设置
        src: '../../img/qing.jpg',  /*晴天对应的背景图片*/
        topColor: '#B06DBD'  /*顶部颜色：和当前背景的16进制颜色代码相同，用以优化界面显示，此处为淡紫色*/
      },
      {
        src: '../../img/yu.jpg',  
        topColor: '#A6E5EA'
        //雨天对应的背景图片，界面顶部浅蓝色
      },
      {
        src: '../../img/xue.jpg',
        topColor: '#7390BC'
        //雪天对应背景图片，界面顶部深蓝色
      },
      {
        src: '../../img/yun.jpg',
        topColor: '#D0AA63'
        //多云天气，界面顶部暗黄色
      },
      {
        src: '../../img/wu.jpg',
        topColor: '#A0B7A5'
        //雾天，顶部界面暗绿色
      },
      {
        src: '../../img/yin.jpg',
        topColor: '#8296BB'
        //阴天，顶部界面为灰色
      },
      {
        src: '../../img/mai.jpg',
        topColor: '#395562'
        //霾对应的背景，顶部界面墨绿色
      },
    ],
  },
 /*获取用户输入，将输入的地名转化为城市代码*/
  huoqushuru(name) {
    let that = this;  //局部变量
    let mingzi = name.detail.value;
    that.data.cityList.forEach((item, index, array) => {//如果用户输入名称与城市列表里相符，
      if (item.cityName == mingzi) {
        //则将请求段的Citycode设置为对应的城市代码
        //例如北京-->101010100
        that.setData({
          cityCode:item.cityCode,
        })
      }
    })
  },
    dianjianniu() { 
     /*当用户点击按钮后，小程序将按照输入，向天气API接口请求当地的天气信息，并将返回的天气数据和对应的背景图片呈现在用户界面上*/
    let that = this;
    let weather; //局部变量
      wx.request({//数据请求：天气接口+城市代码
      url: 'http://t.weather.sojson.com/api/weather/city/' + this.data.cityCode,
        success(res) {//回调函数
        that.setData({
          cityName: res.data.cityInfo.city,
          //城市名称
          wendu: res.data.data.wendu,//温度
          shidu: res.data.data.shidu,//湿度
          //notice: res.data.data.ganmao,
          quality: res.data.data.quality,
          //空气质量
          forecast: res.data.data.forecast,//预报
          weatherIco: weather,//天气图标
        });
        /*情况0：如果返回的天气数据是“晴”，则界面采用背景qing.jpg，天气图标为qing.png，顶部颜色为淡紫色*/
        if (res.data.data.forecast[0].type == "晴") {
            that.setData({
              back: "../../img/qing.jpg",  
              //背景图片，后续同理
              ico: "../../img/qing.png",
              //天气图标，后续同理
              bcgColor: that.data.bcgImgList[0].topColor,  //顶部颜色设置，后续同理
            })
            that.setNavigationBarColor()
          }
          /*情况3：如果返回的天气数据是“多云”，则界面采用背景duoyun.jpg，天气图标为duoyu.png，顶部颜色为暗黄色*/
          if (res.data.data.forecast[0].type == "多云") {
            that.setData({
              back: "../../img/duoyun.jpg",
              ico: "../../img/duoyun.png",
              bcgColor: that.data.bcgImgList[3].topColor,
            })
            that.setNavigationBarColor()
          }
          /*情况4：如果返回的天气数据是“雾”，则界面采用背景wu.jpg，天气图标为wu.png，顶部颜色为暗绿色*/
          if (res.data.data.forecast[0].type == "雾") {
            that.setData({
              back: "../../img/wu.jpg",
              ico: "../../img/wu.png",
              bcgColor: that.data.bcgImgList[4].topColor,
            })
            that.setNavigationBarColor()
          }
         /*情况2：如果返回的天气数据是“雪”，这里指各种雪，则界面统一采用背景xue.jpg，天气图标为xue.png，顶部颜色为深蓝色*/
          if (res.data.data.forecast[0].type == "小雪" || res.data.data.forecast[0].type == "小雪" || res.data.data.forecast[0].type == "大雪" || res.data.data.forecast[0].type == "暴雪") {
            that.setData({
              back: "../../img/xue.jpg",
              ico: "../../img/xue.png",
              bcgColor: that.data.bcgImgList[2].topColor,
            })
            that.setNavigationBarColor()
          }
          /*情况5：如果返回的天气数据是“阴”，则界面采用背景yin.jpg，天气图标为yin.png，顶部颜色为灰色*/
          if (res.data.data.forecast[0].type == "阴") {
            that.setData({
              back: "../../img/yin.jpg",
              ico: "../../img/yin.png",
              bcgColor: that.data.bcgImgList[5].topColor,
            })
            that.setNavigationBarColor()
          }
          /*情况1：如果返回的天气数据是“雨”，这里指各种雨，则界面统一采用雨天的背景yu.jpg，顶部颜色为浅蓝色，天气图标分4种情况*/
          /*小雨天气，图标为xiaoyu.png*/
          if (res.data.data.forecast[0].type == "小雨") { 
              that.setData({
                back: "../../img/yu.jpg",
                ico: "../../img/xiaoyu.png",
                bcgColor: that.data.bcgImgList[1].topColor,
              })
              that.setNavigationBarColor()
            }/*中雨天气，图标为zhongyu.png*/
            if (res.data.data.forecast[0].type == "中雨") {
              that.setData({
                back: "../../img/yu.jpg",
                ico: "../../img/zhongyu.png",
                bcgColor: that.data.bcgImgList[1].topColor,
              })
              that.setNavigationBarColor()
            }/*大雨天气，图标为dayu.png*/
            if (res.data.data.forecast[0].type == "大雨") {
              that.setData({
                back: "../../img/yu.jpg",
                ico: "../../img/dayu.png",
                bcgColor: that.data.bcgImgList[1].topColor,
              })
              that.setNavigationBarColor()
            }
            /*暴雨或大暴雨，图标统一为baoyu.png*/
            if (res.data.data.forecast[0].type == "暴雨" || res.data.data.forecast[0].type == "大暴雨") {
              that.setData({
                back: "../../img/yu.jpg",
                ico: "../../img/baoyu.png",
                bcgColor: that.data.bcgImgList[1].topColor,
              })
              that.setNavigationBarColor()
            } 
          /*以上情况都不是，即返回的天气是霾，
          则显示mai.jpg，对应图标mai.png（情况6）*/
          else if (res.data.data.forecast[0].type != "晴" && res.data.data.forecast[0].type != "多云" && res.data.data.forecast[0].type != "雾" && res.data.data.forecast[0].type != "雪" && res.data.data.forecast[0].type != "雨" && res.data.data.forecast[0].type != "阴" && res.data.data.forecast[0].type != "大雨" && res.data.data.forecast[0].type != "小雨" && res.data.data.forecast[0].type != "中雨" && res.data.data.forecast[0].type != "暴雨" && res.data.data.forecast[0].type != "大暴雨" && res.data.data.forecast[0].type != "小雪" && res.data.data.forecast[0].type != "大雪" && res.data.data.forecast[0].type != "暴雪") {
            that.setData({
              back: "../../img/mai.jpg",
              ico: "../../img/mai.png",
              bcgColor: that.data.bcgImgList[6].topColor,
            })
            that.setNavigationBarColor()
          }
          console.log(res.data.data.forecast[0].type)
          //用于在窗口输出信息，这里是当地的天气
      }
    })
  },
  /*事件处理函数*/
  /*bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  */
  /*getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  */
/*小程序页面加载时触发，用来呈现默认城市的天气*/
/*如果没有这项功能，初次进入界面时，默认的城市是没有天气背景和图标的，用户体验不太好，所以将其保留*/
  onLoad: function(options) {  
    let that = this;
    let weather;
    wx.request({//天气接口API+城市代码
      url: 'http://t.weather.sojson.com/api/weather/city/' + this.data.cityCode,
      success(res) {
        that.setData({
          cityName: res.data.cityInfo.city,//名称
          wendu: res.data.data.wendu,//温度
          shidu: res.data.data.shidu,//湿度
          notice: res.data.data.ganmao,//反馈
          forecast: res.data.data.forecast,//预报
          quality: res.data.data.quality,//AQI
        });//晴天对应的显示，同上，这里不再赘述~
        if (res.data.data.forecast[0].type == "晴") {
            that.setData({
              back: "../../img/qing.jpg",
              ico: "../../img/qing.png",
              bcgColor: that.data.bcgImgList[0].
              topColor,
            })
            that.setNavigationBarColor()
          }//多云对应的显示（初始界面）
          if (res.data.data.forecast[0].type == "多云") {
            that.setData({
              back: "../../img/duoyun.jpg",
              ico: "../../img/duoyun.png",
              bcgColor: that.data.bcgImgList[3].topColor,
            })
            that.setNavigationBarColor()
          }//大雾对应的显示（初始界面）
          if (res.data.data.forecast[0].type == "雾") {
            that.setData({
              back: "../../img/wu.jpg",
              ico: "../../img/wu.png",
              bcgColor: that.data.bcgImgList[4].topColor,
            })
            that.setNavigationBarColor()
          }//雪天对应的显示（初始界面）
          if (res.data.data.forecast[0].type == "小雪" || res.data.data.forecast[0].type == "小雪" || res.data.data.forecast[0].type == "大雪" || res.data.data.forecast[0].type == "暴雪") {
            that.setData({
              back: "../../img/xue.jpg",
              ico: "../../img/xue.png",
              bcgColor: that.data.bcgImgList[2].topColor,
            })
            that.setNavigationBarColor()
          }//阴天对应的显示（初始界面）
         if (res.data.data.forecast[0].type == "阴") {
            that.setData({
              back: "../../img/yin.jpg",
              ico: "../../img/yin.png",
              bcgColor: that.data.bcgImgList[5].topColor,
            })
            that.setNavigationBarColor()
          }//雨天对应的显示（初始界面）
          /*小雨天气，图标为xiaoyu.png*/
          if (res.data.data.forecast[0].type == "小雨") {
              that.setData({
                back: "../../img/yu.jpg",
                ico: "../../img/xiaoyu.png",
                bcgColor: that.data.bcgImgList[1].topColor,
              })
              that.setNavigationBarColor()
            }
             /*中雨天气，图标为zhongyu.png*/
            if (res.data.data.forecast[0].type == "中雨") {
              that.setData({
                back: "../../img/yu.jpg",
                ico: "../../img/zhongyu.png",
                bcgColor: that.data.bcgImgList[1].topColor,
              })
              that.setNavigationBarColor()
            }
             /*大雨天气，图标为dayu.png*/
            if (res.data.data.forecast[0].type == "大雨") {
              that.setData({
                back: "../../img/yu.jpg",
                ico: "../../img/dayu.png",
                bcgColor: that.data.bcgImgList[1].topColor,
              })
              that.setNavigationBarColor()
            }
          /*暴雨或大暴雨，图标统一为baoyu.png*/   
            if (res.data.data.forecast[0].type == "暴雨" || res.data.data.forecast[0].type == "大暴雨") {
              that.setData({
                back: "../../img/yu.jpg",
                ico: "../../img/baoyu.png",
                bcgColor: that.data.bcgImgList[1].topColor,
              })
              that.setNavigationBarColor()
            } //霾对应的显示（初始界面）
          else if (res.data.data.forecast[0].type != "晴" && res.data.data.forecast[0].type != "多云" && res.data.data.forecast[0].type != "雾" && res.data.data.forecast[0].type != "雪" && res.data.data.forecast[0].type != "雨" && res.data.data.forecast[0].type != "阴" && res.data.data.forecast[0].type != "大雨" && res.data.data.forecast[0].type != "小雨" && res.data.data.forecast[0].type != "中雨" && res.data.data.forecast[0].type != "暴雨" && res.data.data.forecast[0].type != "大暴雨" && res.data.data.forecast[0].type != "小雪" && res.data.data.forecast[0].type != "大雪" && res.data.data.forecast[0].type != "暴雪") {
            that.setData({
              back: "../../img/mai.jpg",
              ico: "../../img/mai.png",
              bcgColor: that.data.bcgImgList[6].topColor,
            })
            that.setNavigationBarColor()
          }  
       console.log(res.data.data.forecast[0].type)  /*用于在窗口输出信息，
       这里是默认城市（北京）的天气*/
      } //success
    })
  },
/*设置顶部（导航条）的颜色*/
  setNavigationBarColor(color) {
    let that = this;
    let bcgColor = color || that.data.bcgColor
    wx.setNavigationBarColor({
      frontColor: '#ffffff',  //顶部颜色为白色
      backgroundColor: that.data.bcgColor,
      /*设置与天气背景对应的顶部颜色*/
    })
  },
})