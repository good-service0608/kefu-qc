// ============================================================
// 质检数据文件 - 2026年4月 质检汇总（合格率制）
// 最后更新：2026-04-23
// ============================================================

const QC_CONFIG = {
  shopName: "客服质检绩效系统",
  platform: "飞鸽客服系统",
  passRate: 90,
  lastUpdated: "2026-04-23",
  month: "2026-04",
  inspector: "质检组",
};

const QC_SUMMARY = {
  total: 541,
  passCnt: 514,
  failCnt: 27,
  passRate: 95.0,
};

const AGENT_QC = [
  { name:"屈李佩", total:34, passCnt:25, failCnt:9, rate:73.5, pass:false },
  { name:"曾苗欣", total:24, passCnt:21, failCnt:3, rate:87.5, pass:false },
  { name:"贺尖尖", total:29, passCnt:27, failCnt:2, rate:93.1, pass:true },
  { name:"张曼", total:30, passCnt:28, failCnt:2, rate:93.3, pass:true },
  { name:"杨佳瑶", total:30, passCnt:28, failCnt:2, rate:93.3, pass:true },
  { name:"李文婕", total:32, passCnt:30, failCnt:2, rate:93.8, pass:true },
  { name:"马子清", total:27, passCnt:26, failCnt:1, rate:96.3, pass:true },
  { name:"郭毅", total:32, passCnt:31, failCnt:1, rate:96.9, pass:true },
  { name:"苏迎欣", total:38, passCnt:37, failCnt:1, rate:97.4, pass:true },
  { name:"卢淼", total:41, passCnt:40, failCnt:1, rate:97.6, pass:true },
  { name:"费琳渊", total:42, passCnt:41, failCnt:1, rate:97.6, pass:true },
  { name:"何友婕", total:8, passCnt:8, failCnt:0, rate:100.0, pass:true },
  { name:"张佳茹", total:51, passCnt:51, failCnt:0, rate:100.0, pass:true },
  { name:"彭阮东", total:24, passCnt:24, failCnt:0, rate:100.0, pass:true },
  { name:"王蕊", total:59, passCnt:59, failCnt:0, rate:100.0, pass:true },
  { name:"靳娇娇", total:33, passCnt:33, failCnt:0, rate:100.0, pass:true },
];

const SHOP_QC = [
  { shop:"爱他美至熠系列", total:6, passCnt:4, failCnt:2, rate:66.7, issues:[{"issue": "售前咨询", "cnt": 2}] },
  { shop:"怡宝", total:7, passCnt:5, failCnt:2, rate:71.4, issues:[{"issue": "响应慢", "cnt": 1}, {"issue": "未表明问题", "cnt": 1}] },
  { shop:"a2 HMO紫曜", total:12, passCnt:10, failCnt:2, rate:83.3, issues:[{"issue": "响应慢", "cnt": 1}, {"issue": "催赠品", "cnt": 1}] },
  { shop:"维纳斯", total:12, passCnt:11, failCnt:1, rate:91.7, issues:[{"issue": "产品刮伤", "cnt": 1}] },
  { shop:"舒肤佳", total:215, passCnt:200, failCnt:15, rate:93.0, issues:[{"issue": "产品咨询", "cnt": 3}, {"issue": "非签不满", "cnt": 2}, {"issue": "退货异常", "cnt": 2}] },
  { shop:"华润怡宝", total:30, passCnt:29, failCnt:1, rate:96.7, issues:[{"issue": "保质期问题", "cnt": 1}] },
  { shop:"麦当劳会员店", total:100, passCnt:97, failCnt:3, rate:97.0, issues:[{"issue": "其他", "cnt": 3}] },
  { shop:"沙宣", total:68, passCnt:67, failCnt:1, rate:98.5, issues:[{"issue": "送货上门", "cnt": 1}] },
  { shop:"STOKKE", total:6, passCnt:6, failCnt:0, rate:100.0, issues:[] },
  { shop:"吉列", total:72, passCnt:72, failCnt:0, rate:100.0, issues:[] },
  { shop:"爱他美", total:1, passCnt:1, failCnt:0, rate:100.0, issues:[] },
  { shop:"爱他美AP", total:10, passCnt:10, failCnt:0, rate:100.0, issues:[] },
  { shop:"至熠", total:1, passCnt:1, failCnt:0, rate:100.0, issues:[] },
  { shop:"麦当劳", total:1, passCnt:1, failCnt:0, rate:100.0, issues:[] },
];

const QC_SESSIONS = [
  { date:"4月6日", shop:"怡宝", id:"7625448844393825582", evaluation:"中差评", agent:"李文婕", scenario:"响应慢", issue:"下班未小休造成客户消息漏回复", dim:"流程与系统操作", responsible:"服务S", tip:"", hasFlowIssue:"" },
  { date:"4月6日", shop:"怡宝", id:"7625453232977921331", evaluation:"中差评", agent:"张曼", scenario:"未表明问题", issue:"客服私自关闭会话", dim:"流程与系统操作", responsible:"服务S", tip:"", hasFlowIssue:"" },
  { date:"4月3日", shop:"a2 HMO紫曜", id:"7624355372156880180", evaluation:"中差评", agent:"卢淼", scenario:"响应慢", issue:"漏回复 ", dim:"沟通体验与规范", responsible:"服务S", tip:"", hasFlowIssue:"" },
  { date:"4月6日", shop:"a2 HMO紫曜", id:"7625470971025130792", evaluation:"中差评", agent:"张曼", scenario:"催赠品", issue:"没有直接回复客户问题", dim:"沟通体验与规范", responsible:"nan", tip:"", hasFlowIssue:"" },
  { date:"2026-04-08", shop:"华润怡宝", id:"7626380960816235839", evaluation:"中差评", agent:"郭毅", scenario:"保质期问题", issue:"瓶口的是保质期，不是生产日期", dim:"业务知识与准确性", responsible:"nan", tip:"", hasFlowIssue:"" },
  { date:"2026/4/6", shop:"爱他美至熠系列", id:"7625468840222426404", evaluation:"nan", agent:"nan", scenario:"售前咨询", issue:"客户询问限购是每个月的吗，回答不清晰", dim:"沟通体验与规范", responsible:"nan", tip:"", hasFlowIssue:"" },
  { date:"2026/4/15", shop:"爱他美至熠系列", id:"7628785554208982306", evaluation:"nan", agent:"nan", scenario:"售前咨询", issue:"客户的码扫不到，未解决", dim:"沟通体验与规范", responsible:"nan", tip:"", hasFlowIssue:"" },
  { date:"2026/4/11", shop:"麦当劳会员店", id:"7627402498386494735", evaluation:"中差评", agent:"李文婕", scenario:"其他", issue:"安抚客户方面", dim:"沟通体验与规范", responsible:"nan", tip:"", hasFlowIssue:"" },
  { date:"2026/4/17", shop:"麦当劳会员店", id:"7629679995211892010", evaluation:"中差评", agent:"贺尖尖", scenario:"其他", issue:"没有理解客户问题要客户联系400", dim:"业务知识与准确性", responsible:"nan", tip:"", hasFlowIssue:"" },
  { date:"2026/4/18", shop:"麦当劳会员店", id:"7630042559380735267", evaluation:"中差评", agent:"贺尖尖", scenario:"其他", issue:"漏回复，没有回复客户是否门店可以有小卡", dim:"沟通体验与规范", responsible:"nan", tip:"", hasFlowIssue:"" },
  { date:"4月2日", shop:"舒肤佳", id:"7624097983725831450", evaluation:"中差评", agent:"屈李佩", scenario:"破损/少件不满", issue:"少错破 未及时回复", dim:"沟通体验与规范", responsible:"服务S", tip:"", hasFlowIssue:"" },
  { date:"4月2日", shop:"舒肤佳", id:"7624141198558627107", evaluation:"中差评", agent:"屈李佩", scenario:"催补发", issue:"补发已有单号漏回复客户", dim:"业务知识与准确性", responsible:"物流L", tip:"", hasFlowIssue:"" },
  { date:"4月3日", shop:"舒肤佳", id:"7624463745271481606", evaluation:"中差评", agent:"屈李佩", scenario:"味道不符合预期", issue:"香水味道客户不喜欢 未及时抛出方案", dim:"流程与系统操作", responsible:"服务S", tip:"", hasFlowIssue:"" },
  { date:"4月3日", shop:"舒肤佳", id:"7624548797586081060", evaluation:"中差评", agent:"费琳渊", scenario:"产品咨询", issue:"产品成分咨询解答错误 后续客服已纠正", dim:"业务知识与准确性", responsible:"产品P", tip:"", hasFlowIssue:"" },
  { date:"4月6日", shop:"维纳斯", id:"7625506099931776283", evaluation:"中差评", agent:"马子清", scenario:"产品刮伤", issue:"产品刮伤已补偿 因平台优惠劵客户要求跨订单处理 无安抚共情动作", dim:"沟通与解决问题能力", responsible:"服务S", tip:"", hasFlowIssue:"" },
  { date:"4月7日", shop:"舒肤佳", id:"7625854806761981227", evaluation:"中差评", agent:"曾苗欣", scenario:"非签不满", issue:"非签未及时处理客户不满意   物流中转异常应及时协商补发/部分退款", dim:"沟通体验与规范", responsible:"物流L", tip:"", hasFlowIssue:"" },
  { date:"4月8日", shop:"舒肤佳", id:"7626194994004542761", evaluation:"中差评", agent:"屈李佩", scenario:"产品咨询", issue:"回复慢", dim:"沟通体验与规范", responsible:"服务S", tip:"", hasFlowIssue:"" },
  { date:"4月8日", shop:"舒肤佳", id:"7626254496980665640", evaluation:"中差评", agent:"屈李佩", scenario:"生产日期", issue:"日期咨询客服漏回复", dim:"沟通体验与规范", responsible:"服务S", tip:"", hasFlowIssue:"" },
  { date:"4月8日", shop:"舒肤佳", id:"7626271428765058319", evaluation:"中差评", agent:"屈李佩", scenario:"退货异常", issue:"客服漏回复", dim:"沟通体验与规范", responsible:"服务S", tip:"", hasFlowIssue:"" },
  { date:"4月8日", shop:"舒肤佳", id:"7626395379159876864", evaluation:"中差评", agent:"曾苗欣", scenario:"更换组合", issue:"消费者需要自由搭配组合 未及时抛出小额方案", dim:"业务知识与准确性", responsible:"服务S", tip:"", hasFlowIssue:"" },
  { date:"4月8日", shop:"舒肤佳", id:"7626407538736497983", evaluation:"中差评", agent:"曾苗欣", scenario:"平台优惠劵", issue:"平台优惠劵客户要求退差，客服告知平台优惠劵无法退差 最多补偿5元，客户反馈重新下单处理态度差", dim:"沟通与解决问题能力", responsible:"服务S", tip:"", hasFlowIssue:"" },
  { date:"4月8日", shop:"沙宣", id:"7626260363138303275", evaluation:"中差评", agent:"杨佳瑶", scenario:"送货上门", issue:"客户需要送货上门 客服直接引导退货", dim:"沟通体验与规范", responsible:"物流L", tip:"", hasFlowIssue:"" },
  { date:"4月12日", shop:"舒肤佳", id:"7627840371589956900", evaluation:"中差评", agent:"屈李佩", scenario:"非签不满", issue:"快递已提供红章证明客户反馈没有收到 应建单拦截 不是告知运费险", dim:"沟通体验与规范", responsible:"服务S", tip:"", hasFlowIssue:"" },
  { date:"4月12日", shop:"舒肤佳", id:"7627866266702726427", evaluation:"中差评", agent:"屈李佩", scenario:"泵头使用破损", issue:"泵头损坏可以补发同款泵头客服告知无相关泵头", dim:"沟通体验与规范", responsible:"服务S", tip:"", hasFlowIssue:"" },
  { date:"4月12日", shop:"舒肤佳", id:"7627894039437788451", evaluation:"中差评", agent:"苏迎欣", scenario:"产品咨询", issue:"产品咨询 响应慢", dim:"沟通体验与规范", responsible:"服务S", tip:"", hasFlowIssue:"" },
  { date:"4月15日", shop:"舒肤佳", id:"7628961579505157410", evaluation:"中差评", agent:"屈李佩", scenario:"退货异常", issue:"退货异常消费者要求退款其中一单未引导申请正确的 错误的及时撤销", dim:"沟通体验与规范", responsible:"物流L", tip:"", hasFlowIssue:"" },
  { date:"4月18日", shop:"舒肤佳", id:"7630118004335985963", evaluation:"中差评", agent:"杨佳瑶", scenario:"额外索要礼品", issue:"索要起泡网未使用话术 直接告知不送 未合规使用标准话术 已对应辅导", dim:"沟通体验与规范", responsible:"物流L", tip:"", hasFlowIssue:"" },
];

const ISSUE_FREQ = {"其他": 3, "产品咨询": 3, "响应慢": 2, "售前咨询": 2, "非签不满": 2, "退货异常": 2, "未表明问题": 1, "催赠品": 1, "保质期问题": 1, "破损/少件不满": 1};

const DIM_FREQ = {"沟通体验与规范": 17, "业务知识与准确性": 5, "流程与系统操作": 3, "沟通与解决问题能力": 2};

const AGENT_SUMMARY = AGENT_QC.map(a => ({
  name: a.name, count: a.total, avg: a.rate,
  max: a.rate, min: a.rate, level: a.pass ? "合格" : "待改进",
  weeklyQuota: a.failCnt
}));
