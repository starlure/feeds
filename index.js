const feeds = [
	["Finance", [
		"chinaetfs",
		"SmartGAA",
		"lamboCFA",
		"GlobalMacroHedge",
		"ForrestM",
		"yan-guan-lin-20",
		"Equity-Investment",
		"forex-analysis",
		"yuefenginvest",
		"trading",
		"c_106548378",
		"sanleima",
		"Lhtz-Jqxx",
		"quanttech",
		"ricequant",
		"tiangu1",
		"touyanbang88",
		"Chouma2016",
		"sishimiao",
		"DimensionsCapital",
	]],
	["独立", [
		"hiyeka",
		"wxieshuo",
		"yeka52",
		"aloha-yaoyao",
		"FannyAndLiang",
		"FlyTheCode",
		"zhoudaobiji",
		"iamawguo",
	]],
	["FP", [
		"yinwang",
		"marisa",
		"hllvm",
		"zju-lambda",
		"impress-your-cat",
		"yangbo",
		"rust-lang",
	]],
	["心理", [
		"knowyourself2015",
		"knowyourself",
		"pongba_mindhacks",
		"mindhacks",
		"PSY_Jile",
		"bhahhltmusic",
	]],
	["政治 / 人文", [
		"knowledgewealth",
		"mzmojo",
		"gushibuduo",
		"dushu_magazine",
		"hulianzatan9",
		"commando",
		"bigeguide",
		"zhidaoxue",
		"zhidaoshe",
	]],
	["ACG", [
		"yumenaka",
		"c_126395105",
		"heibai",
		"acgpiping",
		"c_150242766",
		"chenshuidongman",
		"mowanglingyu",
		"ACGerTalk",
	]],
	["后端", [
		"prattle",
		"milocode",
	]],
	["机器学习", [
		"almosthuman2014",
	]],
	["商业", [
		"caozsay",
		"Professor-Li",
	]],
	["Security", [
		"chaitin-tech",
		"HuorongLab",
		"datasec",
		"fhe-blockchain",
		"dong-tian-yang",
		"twosecurity",
		"freebuf",
		"drops",
	]],
	["文艺", [
		"c_40866915",
	]],
	["科学", [
		"zerojz",
	]],
	["法律", [
		"mclawman",
		"laodongfaquanji",
	]],
	["算法", [
		"algorithmicliberalartsdegree",
		"c_124392554",
		"c_131397850",
	]],
];

const lis = R.fromPairs(Array.from(document.getElementsByTagName("li")).map(li => [/(?:^|\.)([^.]+)\/$/.exec(li.getElementsByTagName("a")[0].getAttribute("href"))[1], li]))

document.body.appendChild(DIV.apply(null, R.flatten(feeds.map(cate => [
	H2(cate[0]),
	UL.apply(null, cate[1].map(id => lis[id])),
]))));
