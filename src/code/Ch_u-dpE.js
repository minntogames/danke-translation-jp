(function() {
    const s = document.createElement("link").relList;
    if (s && s.supports && s.supports("modulepreload"))
        return;
    for (const _ of document.querySelectorAll('link[rel="modulepreload"]'))
        i(_);
    new MutationObserver(_ => {
        for (const o of _)
            if (o.type === "childList")
                for (const n of o.addedNodes)
                    n.tagName === "LINK" && n.rel === "modulepreload" && i(n)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function l(_) {
        const o = {};
        return _.integrity && (o.integrity = _.integrity),
        _.referrerPolicy && (o.referrerPolicy = _.referrerPolicy),
        _.crossOrigin === "use-credentials" ? o.credentials = "include" : _.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function i(_) {
        if (_.ep)
            return;
        _.ep = !0;
        const o = l(_);
        fetch(_.href, o)
    }
}
)();
function F() {
    const t = [
        "按钮用文件来永久保存", "燃烧瓶", "致命感应", 
        "console", "tchSpy", "n-requirem", 
        "不会考虑面板攻击。不", "ook-collec", "skill_visu", 
        "tack", "vxTNL", "高效维持装置", 
        "configProp", "全体特工", 
        "混沌融合效果", "增伤计算(旧版)", "soldOut", 
        "skill_evo_", "tureDesc", "t_box_s_po", 
        "xiongMao", "SS项链破坏4", "yiChangDam", 
        "IqEyV", "乔伊碎片", "drawTypeFa", 
        "tion2", "sHGnI", "laceKuangB", 
        "手动调整。", "taskHighCh", "navi.max-a", 
        "依次输入A，最终，B", "pon", "ame", 
        "Multi", "燃油桶", "[GxFNGijQK", 
        "输入你所拥有的特工核", "BaoJiLv", "home.guild", 
        "双生毁灭者", "oGtIf", "fo1", 
        "ents", "taskMain2", "hero", 
        "table", "解锁觉醒红色{cou", "32MVkQnV", 
        "装扮评分", "ng1", "qYwgE", 
        "FuvNz", "JpwhY", "特工信息", 
        "wuNian", "baoJiLv", "tb_zu_qiu", 
        "total", "oBNKo", "同调面板",
        "需要消耗", "andom_yell", "注意：SS手套{wo", 
        "edit", "signin", "denseMode", 
        "erty", "currentCon", "k}万", 
        "alnzk", "ntry", "taskQuick1", 
        "navi.home", "放置于被动槽位", "欢迎使用", 
        "谐振模拟器", "本操作不可回退。", "damageInfo", 
        "LnlPU", "needCore", "你的配置。", 
        "击值。所以当你勾选这", "修改类型", 
        "superJiLi", "setEffectP", "-informati", 
        "hero_core", "JVqyE", "图标。", 
        "select_wea", "天赋·75关键进化", "单击格子，可以 放置", 
        "targetGodS", "击装备页左上角的图标", "attention", 
        "navi.draw", "收藏品升星", "skill", 
        "技能-{index}", "selectType", "限的。", "属性，请提前录入，否", "选择连携特工", "navi.jing-", 
        "yFhZm", "petDog", "收藏品套装词条", "自选史诗收藏品", "加，这种情况一定要全", "skillDamag", "velLeft",
        "initStar", "蓝绿切换", "SUkxs", "数量。不要包含其它全", "一般情况下，这里的输", "calcGearCo", "自选破坏装备",
        "poHuaiGlov", "ice", "进攻方远征之证数量", "fvAwA", "参与主线关卡", "unlockGod", "器。您可以自由调整装", "i-shang-ha",
        "awakeWithN", "count}星", "随机史诗收藏品", "选择防御配件", "随着缓存的清除而丢失", "系我。", "sShardCoun", "drawToScor",
        "pet_frog", "化，不能直接计算出攻", "entInfo", "天启战衣·创星破灭", "hNumber", "-mine-expe", "超级鼓舞", "核心分配，或者特工的",
        "-rank", "uff", "paiDaXing", "换。但需要注意的是，", "or_all", "eShang", "tion8", "_mo1", "fLlTU", "stSkill", "searchNote",
        "兑换成积分，勾选其左", "GdaxnkeFN0", "心数量，S特工碎片数", "50815UtQobw", "home.gear", 
        "tor", "DsjME", "些发挥效果，如果和你", "navi_gear-", "suit_yue_y", "taskLogin1", "doDiscord", "解锁皮皮德金色{co", "tDamage", 
        "gLiang", "huiXiangMo", "技能伤害", "选择模式", "壳壳龟", "chaosEffec", "确的。由于无法获得全", "回响模式", "彩色配件", "tongtiaoLe", 
        "passSkillC", "才能找到。", "capybara", "uploadScre", "om_yellow", "finalHp", "S特工碎片数量", "navi.god", "ue1", "消耗的抽奖券。参见实", 
        "navi.remin", "特工直觉", "otherAttr", "itle", "金色小蜗助战", "HVVCHjWxrA", "al_shou_we", "上角的", "查看积分", "普通模式", "MWeMu", "tech", 
        "checkColle", "shanDi", "否则计算结果并不正确", "选择助战技能", "游戏的装备页，<sp", "i_chang", "reInfo2", "navi_skill", "om_yellow_", "ess", 
        "出战特工", "notEnable", "shoe", "消耗的数量，也不包含", "gMaoRed", "创建中。。。", "tongTiaoLe", "杨大师", "过应该说，当前的功能", "yueYong", "clear", 
        "单击格子，或在格子上", "navi.hot", "navi_pathf", "子上的宝箱。", "seconds", "navi.sugge", "块等减少CD技能效果", "特别模式", "unt", "Core", "没有使用碎星拳，且显", 
        "chaosFusio", "鹰鸽鸽", "防御配件", "把所有物品全部兑换成", "gear_core", "wakening", "-lian.type", "分解获得精华", "starWithNu", "__proto__", "ent", "est1", "differentS", 
        "战斗渴望", "navi_reson", "i_si1", "ate", "fromCharCo", "GRRqxfZHUg", "taskData", "ssGloveNot", "双生量子球", "mwPAC", "baoJiLvSta", "BaoJiShang", "greenBlue", "{star}星", 
        "这里的暴击伤害包含了", "配时，是有考虑面板攻", "局内升级次数", "AINyy", "BMOQE", "护盾存在时伤害增加", "此期间，我们为您限时", "Detail2", "发挥度", "type", "uo_jian", "，C，D，E，F，G", "ion", 
        "tb_liu_lia", "jinHua2", "文（简体）和英语，请", "zzAeo", "-evo", "jinHuaLeve", "核心分配", "_last", "哨箭(彩色配件)", "oySkill", "SfnVo", "FHxIwEyYLK", "有用。如果这个链接超", 
        "解锁熊猫觉醒{cou", "xieZhenNen", "特工全体属性", "laiAngNaDu", "耗指消耗掉的抽奖券，", "识别成功", "MbRmh", "ran_shao_p", "DYgrG", "configFuzh", "级。如果你不想使用某", "tion1", 
        "已售罄", "{}.constru", "DLV]", "ellow", "榴莲态", "navi.spy-s", "兑换成抽奖券。实际获", "配件谐振计算", "ing", "凯蒂斯", "poHuaiNeck", "提供混乱融合之力，请", "ssClothPoH", "or_yellow", 
        "金周年庆套装", "calcResult", "oSlider", "BFnyQ", "Info", "Red", "搭配推荐", "，不包含其它全体特工", "kMFCv", "攻击力：{attac", "除此格子上的宝箱。", "设置属性", "collectEdi", "Number", 
        "只能计算出战，协同，", "subscribeN", "手开发DPS计算器，", "tech_tb_zu", "输入的特工核心，S特", "ZYmQu", "navi.priva", "shop", "unlockYong", "CPUSM", "收，按照钻石算不会亏", "urationBen", 
        "绿色词条生效", "resourcesB", "水果对对碰", "redCollect", "navi.chip", "能量扩散器", "needCoin", "unitScore", "redWoNiu", "ckPeiJian", "传截屏，本工具将自动", "，项链，手套的增加面", 
        "需要消耗金币", "这个链接的内容是公开", "红收藏数量: {co", "unitPrice", "需要消耗图纸", "starCalc", "nizeFailed", "xieTong", "eternalFor", "tb_zuan_to", "积分收益率", "钻头弹+", "120", 
        "cy-policy", "ture", "全收需要资源", "yuanZhengM", "zuanTouSki", "件装备，但仍然需要它", "一番赏积分计算", "天赋·40关键进化", "ssShoe", "际消耗说明。", "weapon", "uan_tou", 
        "自选史诗宠物", "攻击已经正确填写）", "r-rank", "莱昂纳多", "needJingHu", "mation", "labelLevel", "hpPercent", "双生压制力场", "dunShangVa", "护盾增伤", "_box_rando", "szwoR", 
        "navi.board", "navi.gear", "effectPerc", "恢复系统推荐值", "迎体验！", "guWu", "复活3次总耗时（秒）", "解锁绿色词条", "skill_zuan", "ove2", "useAsSub", "tion", "寻路工具", 
        "navi.upcom", "zhiMingGan", "等待。", "ArXzb", "eRed", "ian", "ll3", "lect_box_y", "linYinShaZ", "tion0", "mary_label", "igInfo", "nction() ", "red", "navi_chaos", "targetStar", 
        "PoHuai4Tit", "玩家排行榜", "keMeng", "WTvxr", "navi.pet", "普通特工", "金色{number}", "紧凑模式（手机分屏）", "如收藏品对单个技能的", "or_red", "KZfKk", "calculator", 
        "navi.guild", "navi_pet-m", "split", "merge", "-debuff", "slice", "FycLS", "usingSpy", "navi_clan-", "home.hero", "券有数量限制", "tech_ran_s", "uai2", "and", "iplier", 
        "normalSpy", "chengGui", "配件信息", "浅色模式", "wrTffqKyLX", "abnormal", "level", "现在你可以拥有多套配", "所有配置都仅仅保存在", "计算器", "至{level}级", "成功导入配置", "一番赏", "全体特工属性", 
        "resetSyste", "mLink", "伤害倍率。不支持仅对", "双生钻头弹", "tb_state_l", "jEcpC", "右上方向轻划，可以清", "pet_cat", "钻头弹", "_zhong_du", "attackWith", "geEffect", "中毒存在时间：{va", 
        "置，并在它们中随意切", "gy-level-u", "解锁永恒神铸{cou", "超级战斗渴望", "Detail", "章鱼哥", "gName", "mJyYj", "装备合并", "冰霜战靴", "rhKUutJtXp", "收，稳赚不赔。", "dyoIU", "ttack", "navi_exp-t", "FPyWQ", 
        "QVUjZ", "lace1", "Star", "PoHuai4", "nizeSucces", "eInfo", "未解锁", "unlockPurp", '{name}"吗? ', "Ying", "合计积分", "jinHua1", "体特工属性中的数量（", "oOxkM", "selectGear", "_tou", "量子机器人", "actualCost", 
        "cdOfPet", "jinHua3", "进阶功能", "关键进化", "S级特工", "Entry", "钻石收益率是指，假设", "wu-ren-ji-", "navi.rank", "减掉获得积分兑换所能", "techResona", "次特别行动", "派大星", "navi.damag", "护盾高于血量值时，伤", 
        "核心自选宝箱", "自动计算（需保证当前", "navi_forge", "kaiDiSi", "强力弹头", "tech_tb_wu", "源有限，是否全收仍然", "），然后对比消耗资源", "nfo", "则不准确。未开启特工", "initGodSta", "EZMhB", "techAndSki", "age", "navi.daily", 
        "useSubSpy", "QEMvurJxYv", "决斗等级", "right", "设置最低星级", "弱点伤害", "火箭谐振给目标附加冰", "-data", "selectSubH", "lator", "danTouRedS", "jinHua40", "使用本计算器，或者你", "Count", "ssGlove2", "公会详细", "nDuOf", 
        "MoRed", "length", "破坏自选装备", "hunLuanBel", "tible", "宠物信息", "PoHuai2", "出战宠物", "异常时间", "月矿负面效果", "aiLinNa", "时间生效），暴击率不", "个选项时，你需要保证", "nt}星", "selectAtta", "moonInputT", "误差。", 
        "ECjUs", "navi.event", "选择装备（可多选）", "summary", "clanFirst", "yiSun", "y-essense", "unlockBlue", "navi_syner", "-evolution", "HengGod", "选择卡片", "DJTWO", "rogkk", "升级经验", "连携特工", "finalAttac", "深色模式", 
        '你确认删除配置: "', "critRate", "蓝盆友", "星辰腰带红色效果", "navi.order", "公会排行榜", "jBiRNrHYNu", "yongHengNe", "析失败或有错误，可以", "最终攻击", "trace", "设置对决局内等级", "远征阶段", "saveConfig", "红星被动数量", 
        "缓效果", "HtMmd", "_box_yello", "gearMaxLev", "永恒战衣", "的钻石价格，与获得资", "的情况不相符，你可以", "bianCe", "EMvurJxYvj", "自选杰出S装备", "priceNum", "按照如下方法手动操作", "upgrade", "的体验。", "zuQiuLianE", 
        "attack", "changeType", "techConfig", "限制，保证有解", "RpOfV", "宠物合并", "cancel", "henBeiLv", "券数量。", "levelWithN", "petCd", "tb_state_z", "鲨嘴炮", "navi_colle", "被动特工", "击率。", "ywrTffqKyL", "taskLogin2", 
        "chart", "自动计算最优装备核心", "taskSpecia", "god3Effect", "解锁收藏品红色5星并", "解锁皮皮德红色{co", "home.event", "calcAttent", "selectMode", "_bing_huan", "lue", "YbufI", "superBianC", "t_box_rand", "觉醒{star}星", 
        "efit", "lieShangTi", "量，以及部分特工最高", "uccess", "选择手套", "同调升级", "hero_frag_", "攻击百分比", "select_glo", "每日提醒", "tchCollect", "击</span>位于", "navi.chart", "iuEvo", 'an class="', "核心分配，这里的攻击", 
        "典藏套装红色收藏品数", "attackLoca", "导入配置失败", "select_sho", "助战宠物", "Tai", "UpCount", "-shop", "同调等级和连携特工的", "premiumFea", "BiRNrHYNux", "configXieZ", "huoJian", "currentCor", "品质技能", "暴击伤害", 
        "useThis", "沃尔默周年庆套装", "poHuaiShoe", "unlockRed", "ber", "nt-calcula", "levelUp", "guildLevel", "图纸能将装备升级到的", "event", "单特工模式", "upload_scr", "umber", "ype1", "unlockTong", "-costs", "pet_bird", 
        "tEffect", "tion7", "copy", "力场态", "linYin", "初始等级", "破坏{star}", "兑换成抽奖券。实际消", "快速巡逻", "unlockGree", "wzLsu", "宠物CD", "解锁收藏品金色{co", "（也不包含紫龟的属性", "dMbbs", "navi.skill", "zoXQC", 
        "navi.syner", "forgeCost", "和声之力", "navi.searc", "navi.chaos", "超级鞭策", "tongDian", "navi.desig", "needTime", "uiJue", "needs", "沃尔默", "狂暴状态，增加40%", "taskChest1", "oRstqxfZHU", "被动技能升级次数", 
        "随机史诗配件", "aiShoe", "sNfsQ", "558BCveEf", "damageMult", "fzhlN", "Discord上反馈", "用户信息", "_core", "ectionRed", "DD-6", "结果为估算。", "clanTimes", "136naRpdN", "oad", "WithNumber", "公会等级", "u_qiu", 
        "dunShangEn", "baoJiShang", "copySucces", "选择谐振倍率", "lowerHpTit", "fuHuo1Time", "解锁觉醒{count", "home.tech", "navi.playe", "petFrog", "mainPet", "gear", "解锁凛音觉醒{cou", "ue2", "suit_wo_er", 
        "使用，我们可能会删除", "自动计算中...", "量达到上限", "EMdKz", "from", "计算功能来计算装备的", "ype2", "hua", "jiLi", "UJOHj", "highJiLi", "navi_pet-a", "moonInfo", "tion9", "navi_gears", "lczEn", "selectAssi", 
        "永恒{star}", "twinInfoDe", "needTuZhi", "解锁蓝色词条", "神铸{number}", "twinInfo", "以某个格子为起点，向", "解锁进阶功能并增强您", "收藏品，特工，技能，", "达到5星", "rEntry", "击败怪物", "源的钻石价格。如果收", 
        "woErMo", "非精确", "danTou2", "Gjpyv", "pet_crab", "解锁紫色词条", "mainHero", "XM]", "ll1", "计算核心分配方案", "percent", "VVCHjWxrAy", "ssBeltRedE", "gradeSkill", "taskQuick2", "assistPet", "混乱融合", 
        "套装中的暴击伤害", "or_blue", "creating", "i-lv", "or_green", "jinHua0", "turtles", "OPzun", "的，任何人打开链接都", "activity", "critDamage", "月殇护手", "unlockDogY", "nt}", "次高级装备或者高级宠", "yTPJw", 
        "当前核心数", "ckInfo", "inputAwake", "设置钻石价格", "cklace1", "tAhrp", "prototype", "reachYello", "confirmDel", "navi.lao-y", "taskChest2", "subHero", "选择技能", "mDefault", "hards", "in1", "dQcPB", 
        "对裂伤目标伤害增加", "OHvGY", "无人机态", "pet_turtle", "选择衣服", "神铸核心计算器", "7.coymYLKH", "高级战斗渴望", "scoreRateI", "几分钟的时间，请耐心", "07.cGijQom", "eStat", "swipeToSwi", "给作者+1s", "fuHuo2Time", 
        "greenOnly", 'ctor("retu', "积分，然后对比消耗和", "选择攻击配件", "ount", "o_ping", "精华消耗", "ssGlove", "最终生命", "包含合成消耗", "kZeOX", "公会等级属性", "yongHengGo", "认，如果有错误，请联", "chaoWu", "操作指南",
        "解锁收藏品红色{co", "exception", "-task-data", "神铸消耗", "一部分，用于抵消你所", "configureH", "selectSkil", "constructo", "collectInf", "xieTong1", "2148ncNIlf", "拉斐尔", "uiPao", "此功能需要有效订阅才", 
        "复活2次总耗时（秒）", "ll2", "星辰腰带彩色效果", "部分技能生效的效果，", "yiShang", "单抽积分", "特工同调", "3702DfTFQC", "想把配置分享给你的朋", "ssGear", "return (fu", "ing-events", "天赋·60关键进化", 
        "设置配件属性", "艾琳娜", "你的浏览器中，它们会", "scoreLimit", "navi.colle", "overall", "recognizeS", "suiXingQua", "chaosPower", "收藏品", "apply", "pet_select", "方案来自动计算并变化", "等级上限", "wtfIQ", "dStar", "大体上已经够用。", "svfYB", "返还的抽奖券。", "tb_li_chan", "增伤倍率", "<span clas", "navi.pet-m", "color", "ziGui", "设置此词条效果发挥百", 
        "解锁神铸{count", "topValue", "弹头被动升级红星", "summarySco", "ithNumber", "navi.calc", "140560wQwApv", "分解获得图纸", "inRed", "核心单价", "twrDk", "erge", "subSpy", "破坏项链狂暴", "_ren_ji", 
        "eIncrease", "永恒项链", "变化，来计算攻击的变", "扭曲腰带", "正在从链接加载配置.", "使用中", "立即订阅", "解锁彩色词条", "al_zu_qiu", "板攻击的词条进行一定", "ssGlove1", "yongHengCl", "pet_fish", 
        "jinHua60", "skillLevel", "-fusion", "weiChe", "永恒战衣复活", "navi.lunar", "fhFer", "需要消耗核心", "ctible-sta", "动变化。但如果你使用", "月殇护手·创星破灭", "上传截图功能仅支持中", 
        "collectSui", "velRight", "inding", "navi.crit-", "gears", "，可能和实际值有一些", "藏品总计增加了多少暴", "仅绿色", "heroTongTi", "选择出战技能", "highPetCd", 'g-green">攻', "协同作战", "和最终攻击会根据新的", 'reen">最终攻击', "人物面板攻击", "的攻击", "yiShangSta", "剩余数量识别失败，请", "相同。计算器会推断一", "设置永恒衣服复活时间", "破坏神铸效果", "loadingFro", "superPetCd", "总谐振能量", "configurat", "nce", "klace", "aiPuLiEr", "奖池类型识别失败，请", "星辰束腰", "核心数量", "point_dial", "lueEntry", "ffNMB", "yangStatus", "anTou", "necklace", "SS衣服破坏2", "damageConf", "navi.forge", "点击上传游戏截屏", "被动特工所使用的数量", "darkMode", "wuRenJiLiC", "谐振{number}", "wnEBZ", "排行榜数据", "获得核心", "eenshot", "lace", "红色小蜗助战", "othRevival", "superGuWu", "把所有物品都按照钻石", "initLevel", "SpjWFOEwNQ", "bind", "收藏品暴击率", "remain", "charCodeAt", "功能需订阅解锁：", "navi.gear-", "suitWithNu", "damage_sum", "indexOf", "xDLV", "不过在计算装备核心分", "checkPoint", "宠物等级", "技能与配件", "fo4", "SS级装备", "兑换数量", "allSpy", "reToEdit", "fo2", "计算过程需要几十秒到", "分配方案（敬请期待）", "pageHeader", "但是需要一段时间，敬", "selectChip", ";lKGRocalh", "任务数据", "dLrTW", "navi.gift", "分配方案，计算结果不", "回此页面，点击按钮上", "功能需月卡解锁：", "evaDps", "tongTiaoAt", "zu-qiu-liu", "configureP", "vSYVR", "你可能希望一键分配配", "ator", "启动全收所需要的抽奖", "tech_tb_li", "神罚项链·创星破灭", "紫色小蜗助战", "反物质维持装置", "xieZhenWit", "请输入宠物礼物所增加", "DbFJv", "神铸效果", "supportLan", "tech_selec", "奖的数量，用空格分开", "pet_robot", "parts-info", "configStar", "der", "目标神铸星级", "ModeDetail", "选择星级", "cHXRC", "用于升级出战，协同，", "在游戏中截屏，然后返", "addOneSpy", "notNow", "other", "multiSpyMo", "estimate", "错误反馈", "aoEntry", "先在游戏内调整语言再", "全部取消勾选", "t_box_s_ra", "chaosNotWo", "需的资源都被认为是无", "jinHua4", "suit_jin1", "ountInfo", "select_clo", "EQVrv", "输入配置名称", "uai2Entry", "hpPeiJian", "开放部分进阶功能，欢", "只统计出战，同调等级", "navi_lunar", "eYellow", "issueRepor", "右键点击可以清除此格", "try", "home.overa", "chuZhan", "-detail", "击的影响的，会对武器", "如果你需要将某件物品", "对战阶段开启后，点击", "PUdQo", "益率为正，说明可以全", "ffect", "解锁破坏神铸{cou", "剩余数量识别成功", "破坏者具足", 
        "ndom", "select_nec", "ation", "206423XPNLQz", "belt", "laoShu", "awakening", "ssWeapon", "了解更多", "KBjFZ", "BOSS头像，即可查", "要取决于你的期待值。", "PFUPU", "部分增伤技能并不能发", "每秒总伤害（平均值）", "WkwCa", "设置最高星级", "选择鞋子", "t_box_yell", "clickStarT", "破坏者徽记", "_huai", "collection", "glove", "_shuai_ruo", "可以长按或者单击", "ssNecklace", "特工核心最佳分配计算", "time3", "poHuaiStar", "tech_huo_j", "分析最佳路径。如果分", "解锁金色{count", "超级激励", "hao_ping", "击率和暴击伤害。", "ero", "呱呱蛙", "图纸最高可以升级装备", "suit_lin_y", "max", "rd}未生效（或一半", "oxyWm", "taskMonste", "实际获得", "yuanZhengP", "navi_survi", "attackPerc", "lect_box_r", "导入配置失败，配置数", "yangZhuang", "peiJian", "heroCoreCo", "双生配件已经添加", "14VuUIHU", "暴击率计算", "switch", "time2", "signup", "Attack", "式下发挥的程度也不尽", "这是一款伤害倍率计算", "register", "scoreRate", "selectStar", "ltOSN", "耐心等待。数据没有确", "ectionYell", "targetLeve", "ct6", "月咏周年庆套装", "友时，这个功能会比较", "selectHpPe", "vor-awaken", "Yellow", "selectDepl", "月矿伤害减少", "needChip", "inUse", "注册账户", "oHqFA", "ance-simul", "凛音丸子头饰", "YFxqT", "inding_sho", "Sjopm", "og_title", "装备信息", "足球态", "inputConfi", "点击图片修改", "tempannoun", "modifyDraw", "u_ren_ji", "selectCard", "godWithNum", "紫龟消耗的数量", "来设置宝箱。", "zhangYuGe", "ectionSuit", "设置弹头局内等级", "钻头弹态", "性，实时查看对应的伤", "初始神铸星级", "attackPeiJ", "createConf", "none", "unlockDogR", "spy", "or_purple", "海绵宝宝", "attackAuto", "S计算器，目前只能计", "select_bel", "方案{number}", "danTou1", "taluoOverl", `能访问。立即订阅以`, "noData", "jiShang", "火箭态", "dressScore", "navi_pets-", "其它属性", "注意：本次积分兑换奖", "永恒手套", "ct-star-up", "any", "件和芯片，很遗憾伤害", "-attr", "，你可以使用“导出”", "buyAllInfo", "可获得", "破坏项链", "s_spy", "未来活动", "出战技能", "能达到的星级，然后点", "ownerAtk", "[rKUuJXGTz", "弹壳计算器", "hAGLF", "shuaiRuo", "noPlanNoti", "目标等级", "taskMain1", "unlock", "计算按钮即可。其它所", "laFeiEr", "增加一个特工", "battlePhas", "神器核心", "1749390oMDWAg", "/清除 宝箱。", "宠物，发挥度等信息，", "卡皮巴拉Go", "heroCoreCa", "工碎片数量请只包含可", "yellowStar", "图标，就能看到你的收", "ook-tech", "671evEgFw", "navi.next-", "dition-deb", "dunShang", "fuHuo3Time", "的评估。一般情况下也", "随机史诗宠物", "duiJueLeve", "天赋·进化等级（地球", "输入核心数量，以及每", "greenEffec", "示了弱点的情况下，能", "可以看到你当前的配置", "teGongZhiJ", "Tiao", "redCountOf", "永恒神铸效果", "百分比", "Hai", "heSheng", "unlockLinY", "al_ran_sha", "learnMore", "本，但因为每个人的资", "calculate", "最终奖", "searchTool", "lowerHpEnt", "planWithNu", "计算失败，请检查星级", "，协同作战，以及连携", "总需求", "ode", "pet_dog", "</span>需要点", "每次升级时，获得5秒", 
        "ted", "划过可以 放置/升级", "备、特工、收藏品等属", "实际消耗", "泡泡蟹", "特工觉醒", "suit_ke_me", "对战阶段", "rate-calcu", "达到80级", "初始星级", "new", "解锁收藏品套装{co", "设置和声之力局内等级", "ectionPoHu", "总能量在90%以上时", "碎星拳", "eteConfig", "kRxrC", "选择腰带", "unlockYell", "tle", "navi.god-u", "ove", "得中的积分已经扣除了", "部精确数据，部分计算", "text-tag-g", "双生无人机", "tou", "钻石收益率", "解锁收藏品套装红色{", "zhongDu", "allSurvivo", "保存配置到本地或链接", "tb_state_w", "公会升级属性", "qHXiI", "ssCloth", "排行榜", "选择武器", "上角的勾选框。", "includeCre", "自选史诗配件", "current", "收藏品暴击伤害", "这个问题。我已经在着", "rmation", "VPbhW", "nNZKy", "edExceeded", "chuZhanSki", "宠物合成", "生效（杀怪300）", "解锁收藏品套装金色{", "老鹰伤害计算", "点击数字按钮进行修正", "configLink", "护盾值越高，伤害越高", "toString", "破坏者手甲", "navi_damag", "uPeiJian", "选择项链", "gainCore", "eFhGN", "设置升级次数", "达到40级", "ranShaoPin", "GutOK", "ercent", "informatio", "CustomSuit", "st-gear-co", "sor", "export", "damageSpon", "unlockXion", "ranYouTong", "艾普利尔", "configureD", "navi_crit-", "开启特工同调", "diamondRat", "综合伤害倍率", "需要消耗精华", 
        "tRate", "heroTotalC", "不同特工消耗的特工碎", "SS项链破坏2", "。当你想在另一台设备", "unlockColl", "选择类型", "collect", "VCAHG", "oModify", "开任意宝箱", "ranking", "装备图纸计算", "Title", "r-up", "物宝箱", "useAsMain", "计价（包括获得的积分", "iu_lian", "draw", "PoHuai2Ent", "usage", "uncheckAll", "宠物觉醒", "hase", "注册账号", "sGear", 
        "China", "home.other", "功能需订阅后解锁：", "in_tou1", "yangDaShi", "or_limit", "反物质生成器", "match", "面板计算", "select_box", "/升级/清除 宝箱。", "忍者神龟联动", "特工升级", "totalDamag", "est2", "collectCol", "passive", "allHeroEnt", "配件谐振", "分解获得金币", "commonMode", "(左右滑动切换藏品)", "暂无数据", "config", "navi_event", "scZCF", "ook", "navi.bao-j", "damageAtta", "请期待。", "双绝枪·创星破灭", "rBlQo", "totalRequi", "ctible-inf", "复活1次耗时（秒）", "clickPictu", "当前输入的攻击值是正", "cklace2", "tech_zuan_", "BDulI", "oth", "阳状态", "多特工模式", "qiaoyi", "fo3", "save", "收藏品信息", "本功能依赖装备，收藏", "混沌融合之力", "拾取能量球，增加伤害", "MXrKR", "donateMe", "能量制导系统", "unt}星星", "home.colle", "i_zhe", "暴击伤害计算", "gSpjWFOEwN", "修改数量", "对中毒，冰缓，衰弱", "Mode2", "对对碰记牌器", "LlcVn", "jinHua75", "图纸消耗", "coreCount", "积分收益率是指，假设", "navi.exp-l", "rice", "也不要包含紫龟的数量", "pet", "inputAllPr", "的估算。", "凛音春节套装", "danTou", "RAUIt", "delete", "获得的积分。如果收益", "singleSpyM", "累计登录游戏", "操作模式", "紫色蜗牛", "perks", "衰弱存在时间：{va", "金色蜗牛", "Mode", "冰缓存在时间：{va", "yourInform", "tb_state_h", "战力发展史", "lightMode", "linYinMode", "guild", "fenPeiHeXi", "reachLevel", "燃烧瓶技能外观", "navi_energ", "率为正，说明积分会增", "智能分配装备核心", "navi_desig", "支付功能即将上线。在", "特工觉醒核心", "TCJWt", "创建全新配置", "随机杰出S装备", "高级激励", "tion3", "-old", "技能进化", "error", "earnJingHu", "unlockColo", "更新汇总", "tb_wu_ren_", 'rn this")(', "price_type", "，额外+30%技能伤", "actualEarn", "害倍率结果。部分进阶", "note", "XMFVl", "uyAll", "活动预测", "fig", "min", "t_box_s", "drawCalc", "公会商店", "科萌周年庆套装", "包含其它全体特工属性", "notAccurat", "yellowWoNi", "collectCri", "importFail", "navi.card", "提升。也不支持对能量", "countRecog", "bottomValu", "enableTech", "{level}级", "forgeEffec", "(左右滑动切换特工)", "攻击配件", "m_yellow", "星辰腰带·创星破灭", "玩家飙升榜", "navi.hero", "liuLianZuQ", "3470Rnfvwd", "过3个月没有被任何人", "bingHuan", "unlockAwak", "点击星星修改", "u_lian", "unlockPoHu", "unt}星", "选择辅助配件", "hang", "jin", "算对全部技能都生效的", "left", "红色蜗牛", "home.pet", "双生铁蒺藜", "ssBelt", "collectibl", "yongHengGl", "查看第6期收藏属性", "navi_upcom", "目标星级", "HaiStat", "使用{type}作为", "purpleWoNi", "计算器只能根据属性的", "iJian", "nkHex0IwE0", "tion5", "解锁神铸3并且生效", "beiDong", "达到120级", "gear_selec", "e-multipli", "踩到弱点方向的概率", "装备合成", "echoSkillN", "ove1", "月矿远征", "priceDetai", "设置星级", "setMinStar", "after", "计算功能需要提前录入", "Bao", "需要一点时间适配，请", "解锁沃尔默觉醒{co", "活动数据", "relicCoreC", "PoHuai4Ent", "huo_jian", "当前配置: ", "xieTong2", "片类型不同，结果中图", "凯蒂斯周年庆套装", "evel-up", "套装{number}", "yiChangTim", "scenario", "-requireme", "e-increase", "haiMianBao", "件装备的最低，最高星", "挥其全部效果，不同模", "ong1", 
        "自身血量越低造成伤害", "diamondPer", "本工具不是完全体DP", "生命百分比", "navi.timel", "specialMod", "ZFnQX", "需要芯片", "enshot", "unlockWoEr", "同调无法使用本功能。", "谐振能量", "RcIeh", "keyEvo", "暂时不用", "suit_kai_d", "gains", "voidForgeE", "害增加", "tar", "足球技能外观", "rate", "看进攻方的远征之证数", "gealLevelW", "calcHeroIn", "BQQke", "log", "-task", "useSearch", "info", 's="text-ta', "warn", "混乱融合消耗", "reset", "huiXiang", "ormation", "weakDamage", "import", "tion4", "隐私政策", "片仅做示例", "设置红星被动数量", "totalAttac", "计算结果", "lace2", "createLink", "o-level-up", "iled", "lieShang", "ook-pet", "xieZhen", "勾选它旁边的", "，技能，宠物等等其它", "gainCoin", "setMaxStar", "levelShort", "navi_tech-", "使用{tech}", "解锁红色词条", "navi.handb", "皮皮德", "在收藏品页面，点击右", "mber", "生成连接", "collect_se", "ssBeltRed", "增伤计算", "importSucc", "获得的积分可以反过来", "eIncrease.", "入不会根据其它输入自", "综合倍率", "已经复制到剪切板", "vors-infor", "Gs:T/zF/da", "暴击率", "unt}", "reInfo", "petLevel", "alc", "AsSKP", "sKBkD", "守卫者技能外观", "aiGod", "倍率计算器并不能解决", "gainTuZhi", "礼包码", "rking", "an_tou", "tion6", "replace", "caiShaoJia", "AJZMz", "li-chang.t", "dunShangSt", "ssBeltColo", "confirm", "解锁觉醒金色{cou", "ine", "cloth"
    ];
    return F = function() {
        return t
    }
    ,
    F()
}
const e = E;
(function(t, s) {
    const l = {
        _0x59184b: 1070,
        _0x5850f2: 1315,
        _0x5a3a86: 1032,
        _0x1f606d: 880,
        _0x3cf5b6: 2041,
        _0xeafd86: 1413,
        _0x2b27ed: 1264,
        _0xdc7d1c: 1932,
        _0x1be742: 870,
        _0x49fdc7: 1718,
        _0xf8c4d4: 1422,
        _0x4f2d56: 1021
    }
      , i = E
      , _ = t();
    for (; ; )
        try {
            if (parseInt(i(l._0x59184b)) / 1 + parseInt(i(l._0x5850f2)) / 2 * (-parseInt(i(l._0x5a3a86)) / 3) + -parseInt(i(l._0x1f606d)) / 4 * (parseInt(i(l._0x3cf5b6)) / 5) + parseInt(i(l._0xeafd86)) / 6 + parseInt(i(l._0x2b27ed)) / 7 * (parseInt(i(l._0xdc7d1c)) / 8) + -parseInt(i(l._0x1be742)) / 9 * (parseInt(i(l._0x49fdc7)) / 10) + -parseInt(i(l._0xf8c4d4)) / 11 * (-parseInt(i(l._0x4f2d56)) / 12) === s)
                break;
            _.push(_.shift())
        } catch {
            _.push(_.shift())
        }
}
)(F, 185306);
const z = function() {
    const t = {
        _0x439e92: 1893,
        _0x16bd61: 1522,
        _0x1bc371: 621,
        _0x1abfc6: 1972,
        _0x47e783: 455,
        _0x1e6b04: 1055,
        _0x274351: 2082,
        _0x144145: 1998,
        _0x5866eb: 781,
        _0x8fb8d7: 686,
        _0x5db175: 635,
        _0x14960b: 1238,
        _0x2fce3c: 848
    }
      , s = {
        _0x3b1d4e: 455,
        _0x5319b6: 686,
        _0x5ae617: 1238,
        _0x1983e0: 1893,
        _0x2062d6: 2133,
        _0x4ea1d9: 569,
        _0x2a2964: 1522,
        _0x30c83f: 688,
        _0x148007: 1169,
        _0x39bc80: 621,
        _0x128914: 1972,
        _0x2ed43c: 688,
        _0x3e6244: 1169
    }
      , l = {
        _0x5bbc85: 621,
        _0x39c2f3: 1055,
        _0x4af532: 1998,
        _0x3d5742: 1048
    }
      , i = E
      , _ = {};
    _[i(t._0x439e92)] = function(f, h) {
        return f === h
    }
    ,
    _[i(t._0x16bd61)] = function(f, h) {
        return f - h
    }
    ,
    _[i(t._0x1bc371)] = function(f, h) {
        return f !== h
    }
    ,
    _[i(t._0x1abfc6)] = function(f, h) {
        return f == h
    }
    ,
    _[i(t._0x47e783)] = function(f, h) {
        return f === h
    }
    ,
    _[i(t._0x1e6b04)] = i(t._0x274351),
    _[i(t._0x144145)] = i(t._0x5866eb),
    _[i(t._0x8fb8d7)] = i(t._0x5db175),
    _[i(t._0x14960b)] = i(t._0x2fce3c);
    const o = _;
    let n = !0;
    return function(f, h) {
        const u = i;
        if (o[u(s._0x3b1d4e)](o[u(s._0x5319b6)], o[u(s._0x5ae617)])) {
            const p = _0x19877a[_0xb0839]
              , S = o[u(s._0x1983e0)](p[0], _0x2a1b89[u(s._0x2062d6) + "de"](46)) ? p[u(s._0x4ea1d9)](1) : p
              , m = o[u(s._0x2a2964)](_0x5d9adb[u(s._0x30c83f)], S[u(s._0x30c83f)])
              , k = _0x206f35[u(s._0x148007)](S, m);
            o[u(s._0x39bc80)](k, -1) && o[u(s._0x1983e0)](k, m) && (o[u(s._0x128914)](_0x1c117a[u(s._0x30c83f)], p[u(s._0x2ed43c)]) || o[u(s._0x3b1d4e)](p[u(s._0x3e6244)]("."), 0)) && (_0x1b1794 = !0)
        } else {
            const p = n ? function() {
                const S = u;
                if (o[S(l._0x5bbc85)](o[S(l._0x39c2f3)], o[S(l._0x4af532)])) {
                    if (h) {
                        const m = h[S(l._0x3d5742)](f, arguments);
                        return h = null,
                        m
                    }
                } else
                    _0x153c31 = _0x295f0b
            }
            : function() {}
            ;
            return n = !1,
            p
        }
    }
}()
  , W = z(void 0, function() {
    const t = {
        _0x1e563c: 2166,
        _0x50b42d: 470,
        _0x13d11e: 1035,
        _0x5ad59a: 548,
        _0x2fa03d: 2182,
        _0x233cf0: 996,
        _0xa46427: 1684,
        _0x152a28: 1400,
        _0xf6b2ec: 2167,
        _0x1e84da: 2077,
        _0x46cf40: 768,
        _0x1ef4ac: 937,
        _0x202051: 616,
        _0x260c98: 1857,
        _0x49a816: 1745,
        _0x265a0c: 986,
        _0x279405: 941,
        _0x3aa541: 583,
        _0x50c223: 1920,
        _0x1f2d86: 2134,
        _0x3428ec: 1160,
        _0x55873c: 745,
        _0x2405a8: 811,
        _0x341385: 435,
        _0x24a20d: 2039,
        _0x749c7b: 990,
        _0x2cec9c: 1186,
        _0x3413df: 865,
        _0xcfbcae: 1627,
        _0x356fd8: 671,
        _0x2d9e7d: 728,
        _0x51f49a: 1170,
        _0x28a86b: 666,
        _0x8dfebc: 1326,
        _0x5313e7: 954,
        _0x5541c7: 1672,
        _0x3702a3: 1551,
        _0x1618e8: 1609,
        _0x19d949: 1910,
        _0x4b7c36: 1864,
        _0x16de24: 2175,
        _0x474b94: 1476,
        _0x284420: 1005,
        _0x5e9fd9: 2035,
        _0x1f436a: 1632,
        _0x53d559: 2177,
        _0x4a770d: 844,
        _0x25ba49: 1963,
        _0x5d24b6: 1935,
        _0x390173: 1873,
        _0x2e8f1c: 566,
        _0x2587d1: 1197,
        _0x55ebc0: 1795,
        _0x8989a2: 1795,
        _0x2906cf: 1620,
        _0x223309: 1150,
        _0x5a617a: 1052,
        _0x147ef7: 1164,
        _0x486136: 1005,
        _0x5504e3: 1197,
        _0x128002: 2147,
        _0x22b070: 1601,
        _0xd12d71: 1197,
        _0x4b1f88: 903,
        _0x2aa511: 903,
        _0xa3fa91: 2177,
        _0x4971fb: 979,
        _0x2b4c1d: 1863,
        _0x28e70f: 570,
        _0x12314d: 968,
        _0x141a35: 555,
        _0x3347e0: 1276,
        _0x12e7a4: 1873,
        _0x375331: 1954,
        _0x270ca7: 872,
        _0x17a4b5: 962,
        _0x1450b9: 716,
        _0x2cabc9: 1943,
        _0x13e52b: 1875,
        _0x2bf234: 522,
        _0x3f39f3: 688,
        _0x569864: 1808,
        _0xbc9db4: 450,
        _0x124a68: 2133,
        _0x11c04c: 569,
        _0x4e14eb: 1344,
        _0x288cca: 688,
        _0x12a9ce: 1169,
        _0x37aba6: 717,
        _0x31c8d1: 1808,
        _0x26f323: 1989,
        _0x4c8614: 1989,
        _0x5e7b92: 1150,
        _0x2c9c63: 688,
        _0x324639: 1074,
        _0x1d6d2a: 1276
    }
      , s = {
        _0x5c1dba: 622
    }
      , l = {
        _0x2b739b: 1219
    }
      , i = {
        _0x39a321: 872,
        _0xe82c6c: 613,
        _0x5bf100: 613,
        _0x4de056: 622
    }
      , _ = {
        _0x19dc53: 2146,
        _0x35b1bf: 688,
        _0x556724: 850,
        _0x130c3c: 466,
        _0x137424: 1150,
        _0xb86077: 1052,
        _0x27910e: 1164,
        _0xbb1141: 1005,
        _0x23f21e: 1197,
        _0x1f5a6c: 1138
    }
      , o = E
      , n = {
        AINyy: function(b, g) {
            return b != g
        },
        zoXQC: function(b, g) {
            return b < g
        },
        ZYmQu: function(b, g) {
            return b < g
        },
        wnEBZ: function(b, g) {
            return b == g
        },
        wtfIQ: function(b, g) {
            return b != g
        },
        kZeOX: function(b, g) {
            return b + g
        },
        vSYVR: function(b, g) {
            return b === g
        },
        ffNMB: o(t._0x1e563c),
        QVUjZ: function(b, g, r, d) {
            return b(g, r, d)
        },
        fzhlN: function(b, g) {
            return b !== g
        },
        mJyYj: o(t._0x50b42d),
        cHXRC: function(b, g, r, d) {
            return b(g, r, d)
        },
        kRxrC: function(b, g) {
            return b(g)
        },
        fLlTU: function(b, g) {
            return b + g
        },
        LlcVn: o(t._0x13d11e) + o(t._0x5ad59a),
        DYgrG: o(t._0x2fa03d) + o(t._0x233cf0) + o(t._0xa46427) + " )",
        WTvxr: o(t._0x152a28) + o(t._0xf6b2ec) + o(t._0x1e84da) + o(t._0x46cf40) + o(t._0x1ef4ac),
        WkwCa: o(t._0x202051) + o(t._0x260c98) + o(t._0x49a816) + o(t._0x265a0c) + o(t._0x279405) + o(t._0x3aa541) + "M",
        oBNKo: function(b, g, r, d) {
            return b(g, r, d)
        },
        wzLsu: function(b) {
            return b()
        },
        LnlPU: o(t._0x50c223) + o(t._0x1f2d86) + o(t._0x3428ec) + o(t._0x55873c) + o(t._0x2405a8) + o(t._0x341385),
        qYwgE: o(t._0x24a20d) + o(t._0x749c7b) + o(t._0x2cec9c) + o(t._0x3413df) + o(t._0xcfbcae) + o(t._0x356fd8) + o(t._0x2d9e7d) + o(t._0x51f49a),
        RcIeh: o(t._0x28a86b),
        MXrKR: function(b, g, r, d) {
            return b(g, r, d)
        },
        BMOQE: o(t._0x8dfebc),
        rBlQo: function(b, g, r, d) {
            return b(g, r, d)
        },
        EMdKz: o(t._0x5313e7),
        dQcPB: function(b, g) {
            return b > g
        },
        AsSKP: function(b, g) {
            return b === g
        },
        FycLS: o(t._0x5541c7),
        tAhrp: o(t._0x3702a3),
        alnzk: function(b, g, r, d) {
            return b(g, r, d)
        },
        yTPJw: o(t._0x1618e8),
        DJTWO: o(t._0x19d949),
        AJZMz: function(b, g) {
            return b || g
        },
        szwoR: function(b, g) {
            return b < g
        },
        BQQke: function(b, g) {
            return b === g
        },
        BFnyQ: o(t._0x4b7c36),
        YFxqT: function(b, g) {
            return b - g
        },
        rogkk: function(b, g) {
            return b !== g
        },
        yFhZm: o(t._0x16de24),
        twrDk: function(b, g) {
            return b === g
        }
    };
    let f;
    try {
        const b = n[o(t._0x474b94)](Function, n[o(t._0x284420)](n[o(t._0x5e9fd9)](n[o(t._0x1f436a)], n[o(t._0x53d559)]), ");"));
        f = n[o(t._0x4a770d)](b)
    } catch {
        f = window
    }
    const h = new RegExp(n[o(t._0x25ba49)],"g")
      , u = n[o(t._0x5d24b6)][o(t._0x390173)](h, "")[o(t._0x2e8f1c)](";");
    let p, S, m, k;
    const C = function(b, g, r) {
        const d = o;
        if (n[d(_._0x19dc53)](b[d(_._0x35b1bf)], g))
            return !1;
        for (let y = 0; n[d(_._0x556724)](y, g); y++)
            for (let v = 0; n[d(_._0x130c3c)](v, r[d(_._0x35b1bf)]); v += 2)
                if (n[d(_._0x137424)](y, r[v]) && n[d(_._0xb86077)](b[d(_._0x27910e)](y), r[n[d(_._0xbb1141)](v, 1)])) {
                    if (n[d(_._0x23f21e)](n[d(_._0x1f5a6c)], n[d(_._0x1f5a6c)]))
                        return !1;
                    _0x56fce0 = _0x5304cc
                }
        return !0
    }
      , w = function(b, g, r) {
        const d = o;
        return n[d(i._0x39a321)](n[d(i._0xe82c6c)], n[d(i._0x5bf100)]) ? n[d(i._0x4de056)](_0x11054c, _0xda1662, _0x53e924, _0x2e5a83) : n[d(i._0x4de056)](C, g, r, b)
    }
      , M = function(b, g, r) {
        return n[o(l._0x2b739b)](w, g, b, r)
    }
      , H = function(b, g, r) {
        return n[o(s._0x5c1dba)](M, g, r, b)
    };
    for (let b in f)
        if (n[o(t._0x2587d1)](n[o(t._0x55ebc0)], n[o(t._0x8989a2)])) {
            if (n[o(t._0x2906cf)](C, b, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
                p = b;
                break
            }
        } else if (n[o(t._0x223309)](_0x1472d5, _0x407e92[_0x3cd625]) && n[o(t._0x5a617a)](_0x27905b[o(t._0x147ef7)](_0x4d6d37), _0x32bdaa[n[o(t._0x486136)](_0x12a8ee, 1)]))
            return !1;
    for (let b in f[p])
        if (n[o(t._0x5504e3)](n[o(t._0x128002)], n[o(t._0x128002)])) {
            if (n[o(t._0x22b070)](H, 6, b, [5, 110, 0, 100])) {
                S = b;
                break
            }
        } else
            return !1;
    for (let b in f[p])
        if (n[o(t._0x22b070)](M, b, [7, 110, 0, 108], 8))
            if (n[o(t._0xd12d71)](n[o(t._0x4b1f88)], n[o(t._0x2aa511)])) {
                m = b;
                break
            } else
                _0x18086d = n[o(t._0x474b94)](_0x3ddcc9, n[o(t._0x486136)](n[o(t._0x5e9fd9)](n[o(t._0x1f436a)], n[o(t._0xa3fa91)]), ");"))();
    if (!n[o(t._0x4971fb)]("~", S)) {
        if (n[o(t._0x2b4c1d)](n[o(t._0x28e70f)], n[o(t._0x12314d)])) {
            const b = new _0x2ed427(n[o(t._0x141a35)],"g")
              , g = n[o(t._0x3347e0)][o(t._0x12e7a4)](b, "");
            _0x3f0e9e[_0x411cc8][_0x5e8053] = g
        } else
            for (let b in f[p][m])
                if (n[o(t._0x375331)](w, [7, 101, 0, 104], b, 8)) {
                    k = b;
                    break
                }
    }
    if (!p || !f[p])
        return n[o(t._0x270ca7)](n[o(t._0x17a4b5)], n[o(t._0x1450b9)]) ? void 0 : n[o(t._0x2cabc9)](_0x1d18d6, _0x306336, _0xd37ea0, _0x2d5cec);
    const I = f[p][S]
      , B = !!f[p][m] && f[p][m][k]
      , D = n[o(t._0x13e52b)](I, B);
    if (!D)
        return;
    let N = !1;
    for (let b = 0; n[o(t._0x2bf234)](b, u[o(t._0x3f39f3)]); b++)
        if (n[o(t._0x569864)](n[o(t._0xbc9db4)], n[o(t._0xbc9db4)])) {
            const g = u[b]
              , r = n[o(t._0x2b4c1d)](g[0], String[o(t._0x124a68) + "de"](46)) ? g[o(t._0x11c04c)](1) : g
              , d = n[o(t._0x4e14eb)](D[o(t._0x3f39f3)], r[o(t._0x288cca)])
              , y = D[o(t._0x12a9ce)](r, d);
            if (n[o(t._0x37aba6)](y, -1) && n[o(t._0x31c8d1)](y, d)) {
                if (n[o(t._0x37aba6)](n[o(t._0x26f323)], n[o(t._0x4c8614)]))
                    return !1;
                (n[o(t._0x5e7b92)](D[o(t._0x2c9c63)], g[o(t._0x2c9c63)]) || n[o(t._0x324639)](g[o(t._0x12a9ce)]("."), 0)) && (N = !0)
            }
        } else {
            const g = {
                _0xd39c0f: 1048
            }
              , r = _0x593151 ? function() {
                const d = o;
                if (_0x428838) {
                    const y = _0x301f70[d(g._0xd39c0f)](_0x2eb1f2, arguments);
                    return _0xba4a89 = null,
                    y
                }
            }
            : function() {}
            ;
            return _0x51efaa = !1,
            r
        }
    if (!N) {
        const b = new RegExp(n[o(t._0x141a35)],"g")
          , g = n[o(t._0x1d6d2a)][o(t._0x390173)](b, "");
        f[p][m] = g
    }
});
W();
const A = function() {
    const t = {
        _0x38660a: 1255,
        _0x58a89d: 704,
        _0x30dbc9: 1505,
        _0x5e89c8: 869,
        _0x10f7ce: 539,
        _0x492770: 909,
        _0x32af50: 1270,
        _0x44b1b2: 1273,
        _0x3dc4bd: 1937,
        _0x11731d: 756,
        _0x39da27: 2138,
        _0xc681db: 1595
    }
      , s = {
        _0x287198: 1273,
        _0x5c291d: 1937,
        _0xf050c7: 2138
    }
      , l = E
      , i = {};
    i[l(t._0x38660a)] = function(n, f) {
        return n == f
    }
    ,
    i[l(t._0x58a89d)] = function(n, f) {
        return n === f
    }
    ,
    i[l(t._0x30dbc9)] = function(n, f) {
        return n === f
    }
    ,
    i[l(t._0x5e89c8)] = l(t._0x10f7ce),
    i[l(t._0x492770)] = l(t._0x32af50),
    i[l(t._0x44b1b2)] = function(n, f) {
        return n !== f
    }
    ,
    i[l(t._0x3dc4bd)] = l(t._0x11731d),
    i[l(t._0x39da27)] = l(t._0xc681db);
    const _ = i;
    let o = !0;
    return function(n, f) {
        const h = {
            _0x9c68b3: 1505,
            _0x1f6607: 869,
            _0x23dbd3: 909,
            _0x1562d0: 562,
            _0x495e4c: 688,
            _0x55d8dd: 688,
            _0x163093: 2044,
            _0x3f966c: 1169,
            _0x272fa6: 1048
        }
          , u = {
            _0x1f6cc2: 1255
        }
          , p = l;
        if (_[p(s._0x287198)](_[p(s._0x5c291d)], _[p(s._0xf050c7)])) {
            const S = o ? function() {
                const m = {
                    _0x23ae89: 704
                }
                  , k = p
                  , C = {
                    KZfKk: function(w, M) {
                        return _[E(u._0x1f6cc2)](w, M)
                    },
                    DsjME: function(w, M) {
                        return _[E(m._0x23ae89)](w, M)
                    }
                };
                if (_[k(h._0x9c68b3)](_[k(h._0x1f6607)], _[k(h._0x23dbd3)]))
                    (C[k(h._0x1562d0)](_0x29e54f[k(h._0x495e4c)], _0x33cba3[k(h._0x55d8dd)]) || C[k(h._0x163093)](_0x284f50[k(h._0x3f966c)]("."), 0)) && (_0x3387e5 = !0);
                else if (f) {
                    const w = f[k(h._0x272fa6)](n, arguments);
                    return f = null,
                    w
                }
            }
            : function() {}
            ;
            return o = !1,
            S
        } else
            _0x27ba1f = !0
    }
}()
  , J = A(void 0, function() {
    const t = {
        _0x2364a7: 1035,
        _0x4eeee7: 548,
        _0x335bb0: 2182,
        _0x346dc5: 996,
        _0x3fb851: 1684,
        _0xe85b56: 1906,
        _0x17a020: 1494,
        _0x17cb35: 1925,
        _0x503cf2: 1809,
        _0x3d1816: 1814,
        _0x2de63d: 1812,
        _0xa664e3: 1679,
        _0x7fb2c7: 1012,
        _0x4649c3: 1930,
        _0x384a95: 732,
        _0x461e87: 1207,
        _0x33f202: 1886,
        _0x29dd01: 1886,
        _0x11876e: 2006,
        _0x17751f: 981,
        _0x370035: 2159,
        _0x2629f0: 933,
        _0x4b351d: 1341,
        _0x29ca46: 1188,
        _0x29d538: 1645,
        _0x556c05: 1789,
        _0x508760: 688,
        _0x14c749: 1018,
        _0x1c4998: 969,
        _0x4273f3: 1161,
        _0x86678b: 2125,
        _0x481e2c: 1516
    }
      , s = {
        _0x5dd14e: 1402,
        _0x11915c: 1506,
        _0x41da38: 1690,
        _0x5b8ac1: 1303,
        _0x9f6efc: 1526,
        _0x43da09: 738,
        _0x116db1: 1936,
        _0x173f43: 1098,
        _0xc86adc: 1098,
        _0x403583: 618,
        _0x10ad60: 1346,
        _0x2e4639: 598,
        _0x2e1837: 915,
        _0x25dc93: 618
    }
      , l = E
      , i = {
        HtMmd: function(h, u, p, S) {
            return h(u, p, S)
        },
        jEcpC: function(h, u) {
            return h(u)
        },
        lczEn: function(h, u) {
            return h + u
        },
        fhFer: function(h, u) {
            return h + u
        },
        dyoIU: l(t._0x2364a7) + l(t._0x4eeee7),
        Sjopm: l(t._0x335bb0) + l(t._0x346dc5) + l(t._0x3fb851) + " )",
        hAGLF: function(h, u) {
            return h !== u
        },
        nNZKy: l(t._0xe85b56),
        XMFVl: l(t._0x17a020),
        oxyWm: function(h, u) {
            return h !== u
        },
        GutOK: l(t._0x17cb35),
        FuvNz: function(h, u) {
            return h(u)
        },
        DbFJv: function(h) {
            return h()
        },
        fvAwA: l(t._0x503cf2),
        OHvGY: l(t._0x3d1816),
        zzAeo: l(t._0x2de63d),
        Gjpyv: l(t._0xa664e3),
        oHqFA: l(t._0x7fb2c7),
        dLrTW: l(t._0x4649c3),
        RAUIt: l(t._0x384a95),
        ZFnQX: function(h, u) {
            return h < u
        }
    }
      , _ = function() {
        const h = l;
        if (i[h(s._0x5dd14e)](i[h(s._0x11915c)], i[h(s._0x41da38)])) {
            let u;
            try {
                if (i[h(s._0x5b8ac1)](i[h(s._0x9f6efc)], i[h(s._0x9f6efc)]))
                    return i[h(s._0x43da09)](_0x40c23a, _0x3ab41e, _0x132e49, _0x2a0d0c);
                u = i[h(s._0x116db1)](Function, i[h(s._0x173f43)](i[h(s._0xc86adc)](i[h(s._0x403583)], i[h(s._0x10ad60)]), ");"))()
            } catch {
                u = window
            }
            return u
        } else {
            let u;
            try {
                u = i[h(s._0x2e4639)](_0x6db85a, i[h(s._0x2e1837)](i[h(s._0xc86adc)](i[h(s._0x25dc93)], i[h(s._0x10ad60)]), ");"))()
            } catch {
                u = _0x3e2241
            }
            return u
        }
    }
      , o = i[l(t._0x461e87)](_)
      , n = o[l(t._0x33f202)] = o[l(t._0x29dd01)] || {}
      , f = [i[l(t._0x11876e)], i[l(t._0x17751f)], i[l(t._0x370035)], i[l(t._0x2629f0)], i[l(t._0x4b351d)], i[l(t._0x29ca46)], i[l(t._0x29d538)]];
    for (let h = 0; i[l(t._0x556c05)](h, f[l(t._0x508760)]); h++) {
        const u = A[l(t._0x14c749) + "r"][l(t._0x1c4998)][l(t._0x4273f3)](A)
          , p = f[h]
          , S = n[p] || u;
        u[l(t._0x86678b)] = A[l(t._0x4273f3)](A),
        u[l(t._0x481e2c)] = S[l(t._0x481e2c)][l(t._0x4273f3)](S),
        n[p] = u
    }
});
J();
function E(t, s) {
    const l = F();
    return E = function(i, _) {
        return i = i - 435,
        l[i]
    }
    ,
    E(t, s)
}
const a = {};
a[e(1183)] = e(1401),
a[e(1043)] = "综合",
a[e(826)] = "活动",
a[e(896)] = "装备",
a[e(1550)] = e(1047),
a[e(1929)] = "特工",
a[e(1640)] = "宠物",
a[e(2083)] = "配件",
a[e(1662)] = "公会",
a[e(1224)] = "其它",
a[e(1518) + e(1751) + "er"] = e(1854),
a[e(1538) + e(1804)] = e(1858),
a[e(1738) + e(1036)] = e(1396),
a[e(1594) + e(677)] = e(1765),
a[e(914) + e(1970) + "on"] = e(1348),
a[e(657) + e(832)] = e(1014),
a[e(550) + e(1094)] = e(1815),
a[e(1669) + e(1888) + e(1927)] = e(1634),
a[e(2046) + e(567)] = e(614),
a[e(765) + e(1603) + e(1818)] = e(1616),
a[e(765) + e(1100) + e(1557)] = e(1981),
a[e(1244) + e(568)] = e(696),
a[e(572) + e(468)] = e(1697),
a[e(572) + e(1652)] = e(1006),
a[e(1307) + e(1856) + e(515)] = e(1938),
a[e(1307) + e(1334) + e(441)] = e(1463),
a[e(712) + e(607) + "p"] = e(790),
a[e(1666) + e(710)] = e(1582),
a[e(1839) + e(1213) + e(1504)] = e(581),
a[e(1383) + e(1528) + "n"] = e(692),
a[e(911) + e(2121)] = e(1566),
a[e(565) + e(1075)] = e(757),
a[e(2091) + e(713)] = e(1678),
a[e(620) + e(1829)] = e(718),
a[e(2130) + e(1342) + e(1199)] = e(1960),
a[e(2107) + e(1345) + "rt"] = "寻路",
a[e(2107) + e(1106)] = "寻路",
a[e(1147)] = e(721),
a[e(1660)] = e(582),
a[e(708)] = "首次",
a[e(879)] = "次数",
a[e(2049)] = e(873),
a[e(1185) + e(1918)] = e(888),
a[e(1952) + e(1693)] = e(1769),
a[e(971) + e(1475)] = e(722) + e(630) + e(1961),
a[e(758)] = "取消",
a[e(1879)] = "确认",
a[e(1317)] = "切换",
a[e(1532)] = "导出",
a[e(1820)] = "导入",
a[e(1828)] = e(1846),
a[e(1350) + e(612)] = e(1239),
a[e(1366) + "ig"] = e(1673),
a[e(1948)] = "编辑",
a[e(1339)] = e(1084),
a[e(817)] = "使用",
a[e(1646)] = "删除",
a[e(1615)] = "保存",
a[e(1850) + e(2093)] = e(590),
a[e(1703) + "ed"] = e(803),
a[e(1703) + e(1507)] = e(1310) + e(902),
a[e(949)] = e(2099),
a[e(887) + "s"] = e(1855),
a[e(1514) + e(451)] = e(486) + e(955) + e(1434) + e(1547) + e(682) + e(1033) + e(1332) + e(2168) + e(1719) + e(900) + "它。",
a[e(836)] = "复制",
a[e(1126) + e(594)] = e(1083) + "..",
a[e(1143) + e(547)] = e(586) + e(606) + e(2030) + e(587) + e(1040) + e(2015) + e(1391) + e(1883) + e(1965),
a[e(1825) + "k"] = "攻击",
a[e(740) + "el"] = e(825) + e(1051),
a[e(1372) + e(1655)] = e(656) + e(511),
a[e(1372) + e(1630)] = e(901),
a[e(1372) + e(1217) + e(451)] = e(1743) + e(1081) + e(2020) + e(1966) + e(699) + e(1606) + e(2058) + e(1483) + e(878),
a[e(1689)] = "注意",
a[e(464) + e(1871)] = e(1204),
a[e(763) + e(509)] = e(1362),
a[e(1658) + e(2153)] = e(1381),
a[e(1900) + e(494) + "u"] = e(596),
a[e(802) + e(534)] = e(1059) + e(1813) + e(1115) + e(796) + e(2088) + e(799) + e(1484) + e(1118) + e(1456) + e(1978) + e(2063),
a[e(1754) + e(1917)] = e(1983),
a[e(1323)] = e(1568),
a[e(1949)] = "登录",
a[e(1319)] = e(1340),
a[e(1657) + e(1263)] = e(874),
a[e(810) + e(499)] = e(642),
a[e(810) + e(1901)] = e(1024) + e(1378) + e(924) + e(750),
a[e(1766) + e(1862)] = e(1668),
a[e(1417) + "lc"] = e(1288),
a[e(735) + e(472) + e(785)] = e(1491),
a[e(1223)] = e(1797),
a[e(462) + "ow"] = e(1085),
a[e(1377) + e(881)] = "超载",
a[e(1352) + "ce"] = e(1670) + e(2149) + e(1242) + e(527),
a[e(1444)] = e(1269),
a[e(1962) + e(1570)] = e(1322) + e(2009) + e(1460) + e(1363) + e(1688) + e(1192),
a[e(1962)] = e(1322) + e(2009) + e(1460) + e(1363) + e(1688) + e(1165),
a[e(1957)] = e(1401),
a[e(2106)] = "热门",
a[e(648)] = e(1496),
a[e(1069)] = e(588),
a[e(972) + e(441)] = e(1512),
a[e(1597) + e(950)] = e(1316),
a[e(1107) + e(1466) + e(679)] = e(1316),
a[e(1597) + e(2010) + "i"] = e(1626),
a[e(653) + e(1778)] = e(1849),
a[e(653) + e(1751) + "er"] = e(1849),
a[e(653) + e(1778) + e(1677)] = e(1898),
a[e(893) + e(512)] = e(553),
a[e(893) + e(1557)] = e(1715),
a[e(564) + e(2027)] = e(727),
a[e(564) + e(1251)] = e(685),
a[e(1988) + e(907)] = e(1001),
a[e(2069)] = e(985),
a[e(438) + e(1802)] = e(1463),
a[e(858) + "n"] = e(1555),
a[e(477)] = e(440),
a[e(523)] = e(1578),
a[e(705) + "s"] = "活动",
a[e(1980)] = e(591),
a[e(1704)] = e(1631),
a[e(1842) + e(1596)] = "图鉴",
a[e(726)] = "订单",
a[e(556)] = e(1566),
a[e(2110) + "st"] = e(453),
a[e(2110) + e(1530) + "re"] = e(2162),
a[e(1716)] = "特工",
a[e(524)] = "装备",
a[e(1842) + e(1832)] = "宠物",
a[e(1842) + e(1421)] = "配件",
a[e(1787) + e(1881)] = e(1682),
a[e(1914) + e(619)] = e(1659),
a[e(797)] = "图表",
a[e(564) + e(808)] = e(1697),
a[e(564) + e(1390)] = e(1493),
a[e(849) + e(2160)] = e(1678),
a[e(1060) + e(1075)] = e(1509),
a[e(1166) + e(567)] = e(1753),
a[e(1480) + "p"] = e(1014),
a[e(1144) + e(1777) + e(822) + e(2043)] = e(1014),
a[e(669)] = "日常",
a[e(705) + e(1810)] = e(1765),
a[e(705) + e(1013)] = e(1765),
a[e(1189)] = e(1869),
a[e(2072) + e(1215)] = e(794),
a[e(854) + "h"] = e(535),
a[e(467) + e(498)] = e(1822),
a[e(855) + e(1094)] = e(946),
a[e(1423) + e(956)] = e(1692),
a[e(536) + e(1036)] = e(1692),
a[e(851) + "gy"] = e(790),
a[e(1042) + e(1387)] = e(1981),
a[e(1637) + e(1773)] = e(718),
a[e(1842) + e(1890) + e(691)] = e(1047),
a[e(1097) + e(2024) + e(1424) + e(2028)] = e(1337),
a[e(1534) + e(2098)] = e(2169) + e(700),
a[e(1442) + e(1072)] = e(897) + e(700),
a[e(1792) + e(687)] = e(1764) + e(1725),
a[e(959) + e(436)] = e(2050) + e(1725),
a[e(1368) + "ed"] = e(775) + e(1725),
a[e(508)] = "武器",
a[e(1882)] = "衣服",
a[e(1141)] = "项链",
a[e(1268)] = e(1600),
a[e(1734)] = e(1714),
a[e(1002)] = e(1102),
a[e(1224)] = "其它",
a[e(469) + e(714)] = e(608) + e(960),
a[e(1724) + e(1866)] = e(1258) + e(960),
a[e(2008)] = e(1064) + "}",
a[e(1548) + e(1360) + e(624)] = e(1470) + e(1623),
a[e(1548) + e(1360) + e(452)] = e(1488) + e(2012),
a[e(1548) + e(1360) + e(1335)] = e(1511) + e(2012),
a[e(1380)] = "技伤",
a[e(1029)] = "易伤",
a[e(843) + "n"] = e(530),
a[e(711)] = e(920),
a[e(629) + "le"] = e(935),
a[e(820)] = e(1841),
a[e(1090) + e(1610)] = e(741),
a[e(1495)] = e(2022),
a[e(1318)] = "2次",
a[e(1289)] = "3次",
a[e(443) + e(1154)] = e(1281),
a[e(1287)] = e(1202),
a[e(1432) + e(1458)] = e(473),
a[e(1940)] = e(1858),
a[e(886) + e(1440)] = e(816),
a[e(1548) + e(1328) + "ow"] = e(846) + e(1725),
a[e(1548) + e(876)] = e(1011) + e(1725),
a[e(680) + e(1802)] = e(1066),
a[e(1681) + "r"] = e(1086),
a[e(690) + "t"] = e(1082),
a[e(1707) + "e"] = "下限",
a[e(1065)] = "上限",
a[e(1265)] = "腰带",
a[e(773) + "ed"] = e(1747),
a[e(2003) + "e"] = e(1517),
a[e(1736) + e(1481)] = e(1386),
a[e(1284)] = "手套",
a[e(1994) + "e"] = e(2054),
a[e(2096)] = "鞋子",
a[e(819)] = e(1260),
a[e(1903)] = e(2101),
a[e(838)] = "凛音",
a[e(1311) + e(806)] = e(1611),
a[e(1478) + "ow"] = e(1293) + "}星",
a[e(1721) + "e"] = e(891) + "}星",
a[e(571)] = e(2094),
a[e(1403)] = "衰弱",
a[e(1661)] = e(1650),
a[e(2141)] = e(1997),
a[e(995)] = e(1111),
a[e(1489)] = "中毒",
a[e(1720)] = "冰缓",
a[e(1775) + "e"] = e(695),
a[e(2109)] = "秒",
a[e(1425)] = e(520),
a[e(670)] = e(1958),
a[e(1076)] = e(766),
a[e(1664) + "40"] = e(1524),
a[e(1664) + "80"] = e(1467),
a[e(1664) + e(497)] = e(1749),
a[e(970) + "w5"] = e(926),
a[e(1178)] = e(592),
a[e(1283) + e(1922)] = e(1162),
a[e(1283) + e(2140) + e(1440)] = e(1502),
a[e(1283)] = e(1047),
a[e(1644)] = e(659),
a[e(1874) + "n"] = e(2164),
a[e(681)] = e(505),
a[e(1092)] = e(1037),
a[e(1633)] = e(1975),
a[e(1982)] = "技能",
a[e(1009)] = "超武",
a[e(528)] = "鼓舞",
a[e(1157)] = e(2025),
a[e(744)] = "鞭策",
a[e(782) + "e"] = e(856),
a[e(448)] = e(1826),
a[e(1583) + e(1079)] = e(1541),
a[e(1583) + e(1852) + e(1760)] = "倍",
a[e(584)] = "异伤",
a[e(1939)] = "无念",
a[e(1640)] = "宠物",
a[e(1395)] = e(644),
a[e(579)] = e(557),
a[e(585)] = "级",
a[e(1222)] = e(1410),
a[e(1388)] = "任意",
a[e(514) + "a"] = e(1542),
a[e(1680) + "a"] = e(2123),
a[e(479)] = e(485),
a[e(1836)] = e(1589),
a[e(919)] = e(489),
a[e(1868)] = e(1071),
a[e(636) + e(1918)] = e(706),
a[e(665) + "r"] = e(1364),
a[e(1977) + e(1802)] = e(1216),
a[e(1964)] = e(1099),
a[e(1521)] = e(1152),
a[e(1548) + e(1472) + e(868)] = e(774) + e(1510),
a[e(544) + e(1023)] = e(676) + e(737),
a[e(861)] = e(1945),
a[e(1799)] = e(1393),
a[e(1593)] = e(458),
a[e(1996)] = e(1468),
a[e(551)] = e(1739),
a[e(1034)] = e(1176),
a[e(1159)] = e(839),
a[e(1329) + "l"] = e(1405),
a[e(952)] = "无",
a[e(633)] = "+1",
a[e(2157)] = "+2",
a[e(641)] = "+3",
a[e(1234)] = "+4",
a[e(2178) + e(1519)] = e(1726),
a[e(1605) + e(1179)] = e(1351),
a[e(812) + e(759)] = e(888),
a[e(2170) + e(2052)] = e(1794),
a[e(1338)] = e(1790),
a[e(896)] = "装备",
a[e(1974) + e(1916)] = e(1497),
a[e(1237) + "th"] = e(984),
a[e(1262) + e(1131)] = e(1520),
a[e(1374) + "t"] = e(1477),
a[e(793) + "ve"] = e(789),
a[e(804) + "e"] = e(1278),
a[e(895)] = e(694),
a[e(1990)] = e(1843),
a[e(894)] = e(1298),
a[e(1721) + e(1245)] = e(1880) + e(700),
a[e(1721) + e(540)] = e(1931) + e(700),
a[e(908)] = "激励",
a[e(910)] = e(1675),
a[e(1968)] = e(1294),
a[e(762)] = e(2129),
a[e(1114)] = e(987),
a[e(1127)] = e(609),
a[e(640)] = e(845),
a[e(1742) + "u"] = e(1203),
a[e(1701) + "u"] = e(2076),
a[e(481)] = e(1155),
a[e(516)] = "等级",
a[e(1369)] = "特工",
a[e(1250)] = "出战",
a[e(1748)] = "被动",
a[e(1895) + e(1951)] = e(458),
a[e(1214)] = e(1758),
a[e(992) + e(1887)] = e(1711),
a[e(992) + e(795)] = e(1591),
a[e(1407)] = "解锁",
a[e(554)] = "科萌",
a[e(2103)] = "月咏",
a[e(658)] = e(442),
a[e(930)] = e(862),
a[e(1728)] = "金",
a[e(1359)] = e(611),
a[e(1779) + e(1762)] = e(1371),
a[e(1095)] = "威彻",
a[e(697)] = e(1039),
a[e(1574)] = e(2101),
a[e(2029)] = e(652),
a[e(2085)] = "珊迪",
a[e(838)] = "凛音",
a[e(1559)] = e(1741) + "出战",
a[e(533)] = e(1741) + "被动",
a[e(1312)] = "配件",
a[e(1365) + e(541)] = e(1712),
a[e(1241)] = e(2118),
a[e(701) + e(482)] = e(998),
a[e(1333) + e(1744)] = e(2014),
a[e(1455)] = e(1843),
a[e(833)] = e(2117),
a[e(2019)] = e(1298),
a[e(600)] = e(724),
a[e(1212)] = e(877),
a[e(1091)] = "摸鱼",
a[e(934)] = e(1462),
a[e(983)] = e(2056),
a[e(1301)] = "最大",
a[e(1694)] = "最小",
a[e(965) + e(1320)] = e(1206) + e(1120),
a[e(2161) + "l"] = e(1430) + "）",
a[e(1382)] = e(1933),
a[e(824)] = e(883),
a[e(752)] = "攻击",
a.hp = "生命",
a[e(2152)] = "类型",
a[e(720) + "k"] = e(731),
a[e(2067)] = e(1003),
a[e(1308) + e(2126)] = e(792),
a[e(517)] = e(1786),
a[e(940)] = e(1439),
a[e(1648) + e(1454)] = e(827),
a[e(1225) + "de"] = e(1612),
a[e(778)] = e(2055),
a[e(1696)] = e(504),
a[e(1685) + "_a"] = "A奖",
a[e(1685) + "_b"] = "B奖",
a[e(1685) + "_c"] = "C奖",
a[e(1685) + "_d"] = "D奖",
a[e(1685) + "_e"] = "E奖",
a[e(1685) + "_f"] = "F奖",
a[e(1685) + "_g"] = "G奖",
a[e(1685) + e(2163)] = e(1447),
a[e(1641) + e(2004)] = e(1915) + e(2154) + e(1211),
a[e(747)] = e(1177),
a[e(480)] = "单价",
a[e(1067) + "re"] = e(632),
a[e(1757) + "l"] = "详细",
a[e(501) + e(1454)] = e(1756),
a[e(2053) + "de"] = e(2059),
a[e(890)] = e(1604),
a[e(994)] = e(1025),
a[e(1426)] = e(529),
a[e(1663) + "n"] = e(771) + e(1182),
a[e(1831)] = "裂伤",
a[e(2172) + "o"] = e(513),
a[e(1409)] = e(1022),
a[e(1132)] = e(1536),
a[e(1613)] = "乔伊",
a[e(580)] = "橙龟",
a[e(1062)] = "紫龟",
a[e(1266)] = "老鼠",
a[e(1950)] = e(559),
a[e(1590)] = e(2081),
a[e(1788) + "e"] = e(2112),
a[e(1816)] = "重置",
a[e(1577)] = e(475),
a[e(723)] = e(1858),
a[e(957)] = e(816),
a[e(1819)] = e(675),
a[e(1905) + e(668)] = e(1629),
a[e(1734)] = e(1134),
a[e(506)] = e(615),
a[e(1817)] = "回响",
a[e(1045) + "n"] = e(1474),
a[e(1226)] = "估算",
a[e(1194) + e(1892)] = e(1944),
a[e(1776)] = "模式",
a[e(563) + "s"] = e(588),
a[e(871) + e(578)] = e(1058),
a[e(1108)] = "装备",
a[e(814) + "e"] = e(963),
a[e(2001) + "re"] = e(939),
a[e(2001) + e(1860)] = e(1431) + e(1780) + e(2179) + e(503) + e(444) + e(1834),
a[e(2001) + e(2090)] = e(1973),
a[e(490)] = "计算",
a[e(1635)] = e(1135),
a[e(1979)] = "注意",
a[e(777) + e(2155)] = e(1761) + e(925) + e(1415) + e(2086),
a[e(1007) + e(1053)] = e(917),
a[e(1290)] = e(840),
a[e(2136) + "e"] = e(1947) + e(1302) + e(698) + "足",
a[e(1019) + "o1"] = e(1844) + e(2079),
a[e(1019) + "o2"] = e(1420) + e(1110) + e(1296),
a[e(1019) + "o3"] = e(1420) + e(1110) + e(767),
a[e(1702) + e(1543)] = e(1162),
a[e(1702) + e(2051)] = e(1502),
a[e(1929)] = "特工",
a[e(1501)] = "当前",
a[e(1544) + e(1236)] = e(1243) + e(1452) + e(1146) + e(454) + e(2097) + e(1357),
a[e(1807) + e(1926)] = e(1921) + e(2040) + e(787) + e(1398) + e(1408) + e(1233) + e(1985),
a[e(1807) + e(1180)] = e(465) + e(1418) + e(1220) + e(809) + e(1999) + e(634) + e(1639) + "）。",
a[e(1807) + e(1614)] = e(461) + e(809) + e(1190) + e(1699) + e(847) + "）。",
a[e(1807) + e(1175)] = e(1617) + e(1835) + e(1986) + e(664) + e(1793),
a[e(1313) + e(2113)] = e(1135),
a[e(2017) + "t"] = e(2068),
a[e(936)] = e(2094),
a[e(1112) + "ao"] = e(1031),
a[e(831) + e(1436)] = e(1539),
a[e(2100) + e(1995)] = "同调",
a[e(2061) + e(1105)] = "级",
a[e(492)] = e(1116),
a[e(1020)] = e(1116),
a[e(1770)] = "",
a[e(974)] = e(719),
a[e(678) + e(1297)] = e(1987),
a[e(1587) + "ry"] = e(2171),
a[e(761) + e(829)] = e(1709),
a[e(2011) + e(829)] = e(784),
a[e(2124) + e(1845)] = e(2142),
a[e(1376)] = e(659),
a[e(932)] = "",
a[e(502) + e(938)] = e(496),
a[e(502) + e(1026)] = e(2060),
a[e(502) + e(542)] = "",
a[e(1525) + "g"] = e(1884),
a[e(1205) + e(2023)] = e(1149),
a[e(1535)] = e(1919),
a[e(813)] = "火箭",
a[e(1796)] = e(643),
a[e(1508) + "ll"] = e(1397),
a[e(895)] = e(694),
a[e(945)] = e(805),
a[e(481)] = e(1731),
a[e(1701) + "u"] = e(1654),
a[e(1742) + "u"] = e(1651),
a[e(525) + e(2126)] = e(2151),
a[e(525) + e(2021)] = e(1274) + e(1781) + e(1321) + e(1123) + e(2045) + e(743) + e(1513) + "。",
a[e(1537) + e(1140)] = e(1361),
a[e(593) + e(976)] = e(526),
a[e(1429) + "l"] = e(672),
a[e(1537) + e(860)] = e(733),
a[e(885) + e(1248)] = e(2148),
a[e(1969) + e(1527)] = e(1063) + "分比",
a[e(519) + e(1137)] = e(1515),
a[e(519) + e(780)] = e(1515),
a[e(1016) + e(2032)] = e(1471),
a[e(1441)] = e(853),
a[e(1355)] = e(715),
a[e(889) + "le"] = e(1783) + "越高",
a[e(1449) + "ry"] = e(1783) + "越高",
a[e(443) + e(1911) + "ao"] = e(1077),
a[e(443) + e(1911) + e(1228)] = e(1457) + e(863) + "伤害",
a[e(1819) + e(645)] = e(2115) + e(1433) + e(1752),
a[e(1878) + "r"] = e(1027),
a[e(1878) + e(927)] = e(1473) + e(1686) + "害",
a[e(1848)] = e(725),
a[e(942) + e(1955)] = e(1619),
a[e(445) + e(576)] = e(1142),
a[e(445) + e(1240)] = e(654) + e(1801),
a[e(1287) + e(693)] = e(1546),
a[e(1287) + e(1563) + "ry"] = e(1523),
a[e(2062) + e(999)] = e(866),
a[e(1287) + e(625)] = e(1904),
a[e(1287) + e(552) + "le"] = e(1824),
a[e(1287) + e(1767) + "ry"] = e(736),
a[e(1090) + e(1156)] = e(1096),
a[e(1090) + e(1156) + e(1556)] = e(1124),
a[e(1450) + e(1845)] = e(1375),
a[e(2095)] = e(628),
a[e(1017) + "l"] = e(975),
a[e(1129) + e(2155)] = "配置",
a[e(1089)] = e(958),
a[e(684)] = "",
a[e(443) + e(623)] = e(1394),
a[e(443) + e(1827)] = "",
a[e(549)] = "红色",
a[e(1735) + "e"] = e(1047),
a[e(1736) + e(1755)] = e(1386),
a[e(1736) + e(532)] = "",
a[e(1586)] = "被动",
a[e(1419) + e(882)] = e(558) + "星",
a[e(1139)] = e(1611),
a[e(1356) + e(821)] = e(921),
a[e(537) + e(631)] = e(1885),
a[e(1435) + e(2070)] = e(2073),
a[e(1435) + e(898)] = "",
a[e(729) + e(967)] = e(1080),
a[e(729) + e(1607)] = "",
a[e(1562)] = e(591),
a[e(1324)] = e(495),
a[e(1540) + "e"] = e(1487),
a[e(639)] = e(1461),
a[e(1687)] = e(1305),
a[e(474) + e(1691)] = e(500),
a[e(988) + e(663)] = e(1636) + e(2119) + e(997) + e(1647) + e(1667) + e(1993) + e(617),
a[e(1540) + e(627)] = e(646) + e(1158) + e(1560) + e(662) + e(742) + e(929) + e(1256) + e(471) + e(1445) + e(661) + e(1272),
a[e(639) + e(451)] = e(1851) + e(841) + e(2173) + e(649) + e(1056),
a[e(1687) + e(451)] = e(1851) + e(439) + e(1482) + e(1015) + e(2071) + e(507),
a[e(1392)] = e(1200) + e(760),
a[e(1353) + "1"] = e(1286),
a[e(577)] = "和",
a[e(1353) + "2"] = e(1628),
a[e(2018) + e(627)] = e(1253) + e(2038) + e(1498),
a[e(488)] = "单价",
a[e(1569)] = e(746),
a[e(2116) + "n"] = e(946),
a[e(707)] = "合计",
a[e(857)] = "痛点",
a[e(2135)] = e(1187),
a[e(1700) + "e"] = e(931),
a[e(2048)] = e(1649),
a[e(769)] = "天",
a[e(1406)] = e(2007),
a[e(1928)] = "次",
a[e(772) + "l1"] = "完成",
a[e(772) + "l2"] = e(651),
a[e(1304) + "r1"] = e(928),
a[e(1304) + "r2"] = "K",
a[e(1956)] = e(842),
a[e(944)] = "次",
a[e(864)] = e(1553),
a[e(973)] = "次",
a[e(1913) + e(2127)] = "开启",
a[e(1913) + e(1584)] = e(961) + e(1558),
a[e(1379)] = e(1592),
a[e(1899)] = e(2181),
a[e(852)] = e(1014),
a[e(1499) + e(2132)] = e(1004),
a[e(2128) + e(977)] = e(1545) + e(1771) + e(1823),
a[e(953)] = e(1581),
a[e(1196) + e(1638)] = e(966),
a[e(1210) + e(1279) + "ow"] = e(1500),
a[e(1847) + e(543) + e(436)] = e(1992),
a[e(1971)] = e(1671),
a[e(2120)] = e(1412),
a[e(1750) + e(1902) + e(1282)] = e(689),
a[e(753)] = e(1967),
a[e(1579) + e(875)] = e(655),
a[e(1300) + e(978)] = e(1643),
a[e(1300) + e(1573)] = e(1343),
a[e(791) + e(1613)] = e(1907),
a[e(1464) + e(1934)] = e(1698),
a[e(2047) + e(1782)] = e(1331),
a[e(1235)] = e(447),
a[e(1798) + e(2131)] = e(1772),
a[e(899) + e(2034)] = e(818),
a[e(828) + e(1153)] = e(1145),
a[e(1908) + e(1830)] = e(1133) + e(1912),
a[e(1044) + e(788)] = e(2174),
a[e(1706) + e(626) + "s"] = e(1259),
a[e(1706) + e(491)] = e(1122) + e(1912),
a[e(1209) + "g"] = e(1103) + e(2158) + e(1229) + "截图",
a[e(1784) + e(2114)] = e(1073),
a[e(859)] = e(1763) + e(1327) + e(1008) + e(2016),
a[e(1891) + e(1087)] = e(1803),
a[e(1891) + e(2078) + e(1625)] = e(1865),
a[e(1891) + e(1443) + e(1e3)] = e(1665),
a[e(1750) + e(1695)] = e(746),
a[e(1750) + e(1902) + e(1282)] = e(2002),
a[e(1750) + e(1231) + e(1261)] = e(1674),
a[e(1210) + e(1279) + "ow"] = e(1500),
a[e(1210) + e(783) + e(2066)] = e(867),
a[e(1210) + e(783) + e(2092) + "2"] = e(867),
a[e(1049) + e(739) + "w"] = e(510),
a[e(1049) + e(521) + e(1713)] = e(1428),
a[e(1163)] = "剩余",
a[e(1565)] = e(1230),
a[e(1041)] = e(1385) + e(574),
a[e(1847) + e(1309) + e(1946) + "ow"] = e(2013),
a[e(1246) + "t"] = e(1227),
a[e(1136) + e(1347)] = e(1030),
a[e(1172)] = e(2080),
a[e(1232) + e(1870)] = e(1181) + e(989) + e(538),
a[e(943)] = e(815),
a[e(493) + e(604)] = e(1438),
a[e(1800) + e(1257)] = e(1125),
a[e(1104) + e(834)] = e(1991),
a[e(1710) + "t"] = e(1208),
a[e(823)] = "升级",
a[e(749)] = "升星",
a[e(1490) + "r"] = e(1896),
a[e(1838)] = "等级",
a[e(1267)] = "觉醒",
a[e(1942)] = "累计",
a[e(1730)] = "左",
a[e(673)] = "右",
a[e(650) + e(1130)] = e(1588),
a[e(904)] = "初始",
a.to = "目标",
a[e(1602) + "re"] = e(1453),
a[e(770)] = "图表",
a[e(563)] = e(588),
a[e(1367)] = "无",
a[e(2057) + "t"] = e(1897),
a[e(1046)] = e(1618),
a[e(1193)] = e(1275),
a[e(1280) + e(1552)] = e(1722),
a[e(1325)] = e(1218),
a[e(1336) + e(2165)] = e(1113),
a[e(916) + e(2036)] = e(2087),
a[e(1093) + e(807)] = e(2145),
a[e(2074)] = e(1384),
a[e(1399)] = e(1119),
a[e(1861)] = e(1173),
a[e(1554)] = e(1151),
a[e(1962)] = e(1322) + e(2009) + e(1460) + e(1363) + e(1688) + e(1572),
a[e(1962) + e(610)] = e(1785) + e(1373) + e(1729) + e(595) + e(1028) + e(560) + e(1705) + e(2111) + e(1427) + e(1889) + e(2102) + e(1054),
a[e(1962) + e(2150)] = e(1171) + e(2144) + e(1252) + e(484) + e(1088) + e(1642),
a[e(1533) + e(1531)] = "招募",
a[e(1469)] = "新",
a[e(1984)] = e(1549),
a[e(459) + e(545)] = "全部",
a[e(459) + e(2180)] = "1期",
a[e(459) + e(1909)] = "2期",
a[e(459) + e(1676)] = "3期",
a[e(459) + e(1821)] = "4期",
a[e(459) + e(1746)] = "5期",
a[e(459) + e(1872)] = "6期",
a[e(459) + e(835)] = "7期",
a[e(459) + e(2033)] = "8期",
a[e(459) + e(913)] = "9期",
a[e(1585) + e(2031)] = "全部",
a[e(1585) + e(561)] = "红",
a[e(1585) + e(446)] = "金",
a[e(1585) + e(1575)] = "限时",
a[e(1585) + e(1370)] = "紫",
a[e(1585) + e(948)] = "蓝",
a[e(1585) + e(951)] = "绿",
a[e(751) + "vo"] = e(1733),
a[e(1061)] = "彩色",
a[e(922)] = e(1314),
a[e(918) + "sc"] = e(1198) + e(1389) + e(1867) + e(1503) + e(463) + e(1184) + e(1599),
a[e(2084) + e(1330)] = e(1737),
a[e(1811)] = e(1959),
a[e(1448)] = e(535),
a[e(786) + e(1479)] = e(980),
a[e(2104)] = "清空",
a[e(2065) + e(1791)] = e(1145),
a[e(1564)] = e(1010),
a[e(2037) + "1"] = e(1221) + e(1191) + e(483) + e(1292) + e(730) + e(748) + e(1358),
a[e(2037) + "2"] = e(2105) + e(1459) + e(1414),
a[e(2037) + "3"] = e(923) + e(599) + e(457),
a[e(2037) + "4"] = e(1976) + e(1580),
a[e(2037) + "5"] = e(1247) + e(2108),
a[e(1446)] = "计算",
a[e(702) + e(2075)] = e(2005),
a[e(912)] = e(1254) + e(1271) + e(1805) + "量。",
a[e(1306) + e(1567)] = e(734),
a[e(1411) + "e"] = e(1465),
a[e(2139) + "t"] = e(1858),
a[e(886) + e(1740)] = e(816),
a[e(1994) + e(991)] = e(2054),
a[e(1877) + "at"] = e(520),
a[e(1121) + "t"] = "易伤",
a[e(1168) + e(546) + e(779)] = e(1656) + "l}",
a[e(1168) + e(546) + e(602)] = e(605) + "l}",
a[e(1168) + e(546) + e(1285)] = e(1653) + "l}",
a[e(709)] = "易损",
a[e(1195) + e(2122) + "1"] = e(437),
a[e(1195) + e(2122) + "2"] = e(1349),
a[e(1717) + e(798)] = e(2137),
a[e(1759)] = e(674),
a[e(1837)] = e(1277),
a[e(1404) + "fy"] = e(1451) + e(755),
a[e(2064)] = e(1416),
a[e(1148) + e(1727)] = e(1485),
a[e(1621)] = e(993),
a[e(603) + e(460)] = e(456) + e(1953),
a[e(1806) + e(1068)] = e(1299) + e(589),
a[e(1598) + e(964)] = e(2e3) + e(1853) + e(1101) + e(905) + e(2026) + e(800) + e(1117) + e(1050) + e(1109) + e(703),
a[e(667) + "ll"] = e(1174),
a[e(754)] = e(1038),
a[e(1708)] = e(1840),
a[e(660) + e(1078)] = e(1622),
a[e(1201) + e(1723)] = e(638),
a[e(575) + e(1295)] = e(478),
a[e(1291) + e(541)] = e(1894),
a[e(1608) + e(1486)] = e(1576),
a[e(1492) + e(1354)] = e(982),
a[e(597) + e(2089)] = e(837),
a[e(597) + e(1561)] = e(437),
a[e(763) + e(884)] = e(1349),
a[e(1833)] = e(1128),
a[e(1900) + e(1683) + "ji"] = e(1924),
a[e(1900) + e(2156) + "n"] = e(1733),
a[e(1900) + e(1941)] = e(2137),
a[e(1900) + e(2176) + e(441)] = e(1919),
a[e(1900) + e(1768)] = e(764),
a[e(531) + e(637)] = e(601),
a[e(647) + e(1876) + e(830)] = e(982),
a[e(647) + e(1876) + e(906)] = e(837),
a[e(1900) + e(1057) + "g"] = e(518),
a[e(476) + e(683)] = e(487) + e(1859),
a[e(1167) + e(1845)] = e(1774),
a[e(1019) + e(449)] = e(2143) + e(947),
a[e(1437) + e(1529)] = e(801) + "量",
a[e(1183)] = e(1401),
a[e(1249) + "ll"] = "综合",
a[e(776)] = "活动",
a[e(2042)] = "装备",
a[e(1624) + "ct"] = e(1047),
a[e(573)] = "特工",
a[e(1732)] = "宠物",
a[e(892)] = "配件",
a[e(1923)] = "公会",
a[e(1571)] = "其它";
const K = a
  , x = P;
(function(t, s) {
    const l = {
        _0x27bd68: 2235,
        _0x50aeed: 2367,
        _0x3d2a9a: 1399,
        _0x44939b: 567,
        _0x850d6c: 1687,
        _0x1e9566: 378,
        _0x53317f: 1786,
        _0x2be1b6: 524,
        _0x42ba34: 926,
        _0x10ed80: 469,
        _0x4751b7: 2251
    }
      , i = P
      , _ = t();
    for (; ; )
        try {
            if (-parseInt(i(l._0x27bd68)) / 1 + parseInt(i(l._0x50aeed)) / 2 * (-parseInt(i(l._0x3d2a9a)) / 3) + parseInt(i(l._0x44939b)) / 4 + -parseInt(i(l._0x850d6c)) / 5 * (-parseInt(i(l._0x1e9566)) / 6) + parseInt(i(l._0x53317f)) / 7 + parseInt(i(l._0x2be1b6)) / 8 * (parseInt(i(l._0x42ba34)) / 9) + -parseInt(i(l._0x10ed80)) / 10 * (-parseInt(i(l._0x4751b7)) / 11) === s)
                break;
            _.push(_.shift())
        } catch {
            _.push(_.shift())
        }
}
)(G, 718127);
function P(t, s) {
    const l = G();
    return P = function(i, _) {
        return i = i - 176,
        l[i]
    }
    ,
    P(t, s)
}
const Y = function() {
    const t = {
        _0x17ae0f: 189,
        _0x18d202: 592
    }
      , s = {
        _0x5124d3: 466,
        _0x1e3183: 2418,
        _0x4694f8: 1212,
        _0x44c5ce: 1212,
        _0x3a97ca: 1377
    }
      , l = {
        _0x1dd6b9: 1454,
        _0x5500d9: 405,
        _0x4c8d7d: 405,
        _0x3ba5cd: 261,
        _0x561e12: 261
    }
      , i = P
      , _ = {
        QWTMg: function(n, f, h, u) {
            return n(f, h, u)
        },
        wFIMC: function(n, f) {
            return n !== f
        },
        HGcuy: i(t._0x17ae0f),
        Jodiw: function(n, f) {
            return n === f
        },
        aCXnP: i(t._0x18d202)
    };
    let o = !0;
    return function(n, f) {
        const h = {
            _0x8ac704: 1139
        }
          , u = i
          , p = {
            IXAuJ: function(S, m) {
                return _[P(h._0x8ac704)](S, m)
            },
            ZSfqS: _[u(s._0x5124d3)]
        };
        if (_[u(s._0x1e3183)](_[u(s._0x4694f8)], _[u(s._0x44c5ce)])) {
            const S = o ? function() {
                const m = u;
                if (f)
                    if (p[m(l._0x1dd6b9)](p[m(l._0x5500d9)], p[m(l._0x4c8d7d)])) {
                        if (_0x4d650a) {
                            const k = _0x3f4570[m(l._0x3ba5cd)](_0x4db2d8, arguments);
                            return _0x4c3aa4 = null,
                            k
                        }
                    } else {
                        const k = f[m(l._0x561e12)](n, arguments);
                        return f = null,
                        k
                    }
            }
            : function() {}
            ;
            return o = !1,
            S
        } else
            return _[u(s._0x3a97ca)](_0x1ff662, _0x4c0d6c, _0x5af321, _0x2cb4ac)
    }
}()
  , j = Y(void 0, function() {
    const t = {
        _0x43f7f8: 1259,
        _0x55fec3: 2134,
        _0x54500c: 959,
        _0x224b9e: 388,
        _0x1269cf: 1317,
        _0x367097: 847,
        _0x432350: 398,
        _0x5dbe36: 2321,
        _0x1d7ac3: 1198,
        _0xd98afa: 2523,
        _0x5f105b: 2296,
        _0x454a16: 1258,
        _0x15af02: 2378,
        _0x383b53: 919,
        _0x5cc9e4: 1670,
        _0x244fcc: 864,
        _0x36b8b5: 701,
        _0x3993f6: 1830,
        _0x160d27: 2167,
        _0x2c3837: 1398,
        _0x5b40f8: 230,
        _0x1f1dc6: 193,
        _0x20c857: 1417,
        _0x460588: 1171,
        _0x24cf39: 484,
        _0x57c930: 2138,
        _0x2d5486: 1777,
        _0x1e1164: 715,
        _0x472937: 2536,
        _0x834caf: 2355,
        _0xe5b9cf: 2087,
        _0x4620f1: 1768,
        _0x610fe4: 1119,
        _0x550da9: 885,
        _0x4a7d6d: 714,
        _0x1786fd: 2293,
        _0x91861: 2624,
        _0x3a6c74: 223,
        _0x20d037: 500,
        _0x58a81a: 2348,
        _0x4e5d9d: 874,
        _0x219d22: 2641,
        _0x10cec6: 393,
        _0x4d695e: 1203,
        _0x2f5710: 1025,
        _0x3069f9: 2627,
        _0x1f014f: 1483,
        _0x512f7b: 2421,
        _0x26706f: 931,
        _0x7a3e1e: 573,
        _0x3949c9: 2494,
        _0x145554: 2002,
        _0x2d26ea: 2002,
        _0x1ab9dc: 354,
        _0x1665e0: 1103,
        _0x1d7453: 462,
        _0x55edeb: 1945,
        _0x34ee91: 2091,
        _0x16efcc: 1746,
        _0x2812a1: 1261,
        _0x5c7f24: 1261,
        _0x5bb5ef: 1395,
        _0x56ef0e: 644,
        _0x505685: 1859,
        _0x1678a7: 1145,
        _0x3cb92c: 1086,
        _0xe7d9e6: 2413,
        _0x1c85f3: 1474,
        _0x5031ae: 350,
        _0x27f1b3: 429,
        _0x37d8ad: 1003,
        _0x4d1197: 1003,
        _0x249ef1: 2464,
        _0x194669: 257,
        _0x39458d: 1172,
        _0x4042b6: 2340,
        _0x419cc4: 1003,
        _0xd2e44: 1003,
        _0x1eba6e: 1103,
        _0x350164: 2464,
        _0x51245c: 1730,
        _0x230d22: 2124,
        _0x3581b6: 1133,
        _0x3659a2: 2137,
        _0x542518: 2019,
        _0x1a2bfd: 2544,
        _0xba7e19: 1409,
        _0x47db40: 2541,
        _0x58423c: 2177,
        _0x53f1a5: 1697,
        _0x265b13: 554,
        _0x1190a0: 2308,
        _0x54b410: 566,
        _0x12bb84: 1003,
        _0x1d98e8: 1076,
        _0x14a72b: 2464,
        _0x1dd29c: 350,
        _0x44c34e: 1356,
        _0x27086c: 1003,
        _0x1b3c6c: 1003,
        _0x306e8f: 2464,
        _0x227399: 2407,
        _0x1a1eb7: 1288,
        _0x2771db: 659,
        _0x1827f0: 2357,
        _0x2b7c10: 2302,
        _0xddf5a7: 227,
        _0x590aae: 2315,
        _0x194940: 804
    }
      , s = {
        _0x46dd6b: 1421
    }
      , l = {
        _0x198a31: 1421
    }
      , i = {
        _0x7cf063: 1421
    }
      , _ = {
        _0x4a0c37: 2174,
        _0x28ba78: 2577,
        _0x14919e: 2577,
        _0x3fd3d9: 456,
        _0x1b841a: 1003,
        _0x52d005: 357,
        _0x59f453: 471,
        _0x52eade: 2436,
        _0x43bd4a: 1513,
        _0x16b393: 576
    }
      , o = {
        _0x30a458: 2137,
        _0x291c99: 2326,
        _0x58be98: 576,
        _0x547930: 1409,
        _0x45f89d: 2541,
        _0xc54d70: 746,
        _0x11cb22: 2276
    }
      , n = P
      , f = {
        pzxDL: function(r, d) {
            return r(d)
        },
        efsaC: function(r, d) {
            return r + d
        },
        jdwpm: function(r, d) {
            return r + d
        },
        JnBpL: n(t._0x43f7f8) + n(t._0x55fec3),
        GcEYf: n(t._0x54500c) + n(t._0x224b9e) + n(t._0x1269cf) + " )",
        PGmIK: function(r, d) {
            return r === d
        },
        ANlFb: n(t._0x367097),
        yOriI: function(r, d) {
            return r !== d
        },
        aRbAG: n(t._0x432350),
        MyYpZ: function(r, d) {
            return r != d
        },
        JaMoF: function(r, d) {
            return r < d
        },
        YPHDS: function(r, d) {
            return r == d
        },
        vVWbS: function(r, d) {
            return r != d
        },
        sBbNn: function(r, d, y, v) {
            return r(d, y, v)
        },
        zEmCU: function(r, d, y, v) {
            return r(d, y, v)
        },
        UWfOr: function(r, d) {
            return r === d
        },
        hgNFh: function(r, d) {
            return r - d
        },
        ZfvHz: function(r, d) {
            return r !== d
        },
        GWEtY: function(r, d) {
            return r === d
        },
        nmvMJ: function(r, d) {
            return r == d
        },
        ByARB: function(r, d) {
            return r === d
        },
        axckA: function(r, d) {
            return r + d
        },
        SyVpw: function(r, d) {
            return r + d
        },
        wKoWf: function(r, d) {
            return r == d
        },
        SOfGf: function(r, d) {
            return r === d
        },
        JREkV: function(r) {
            return r()
        },
        vquIi: n(t._0x5dbe36) + n(t._0x1d7ac3) + n(t._0xd98afa) + n(t._0x5f105b) + n(t._0x454a16) + n(t._0x15af02),
        TVsrf: n(t._0x383b53) + n(t._0x5cc9e4) + n(t._0x244fcc) + n(t._0x36b8b5) + n(t._0x3993f6) + n(t._0x160d27) + n(t._0x2c3837) + n(t._0x5b40f8),
        LSXqk: function(r, d) {
            return r !== d
        },
        PPYWC: n(t._0x1f1dc6),
        yCRhe: function(r, d, y, v) {
            return r(d, y, v)
        },
        HUJDU: n(t._0x20c857),
        MzgmY: n(t._0x460588),
        gDdMm: function(r, d) {
            return r !== d
        },
        fCWwn: n(t._0x24cf39),
        SeDKo: function(r, d) {
            return r > d
        },
        ybKDY: function(r, d) {
            return r !== d
        },
        AgwQS: n(t._0x57c930),
        pmERq: n(t._0x2d5486),
        QkMkY: function(r, d, y, v) {
            return r(d, y, v)
        },
        sXSdg: function(r, d) {
            return r || d
        },
        kaHsn: n(t._0x1e1164),
        NFgJB: n(t._0x472937),
        FJHjP: function(r, d) {
            return r < d
        },
        gcCXe: function(r, d) {
            return r === d
        },
        WeDHS: n(t._0x834caf),
        dKCOO: n(t._0xe5b9cf),
        nheFX: function(r, d) {
            return r - d
        },
        gBPob: function(r, d) {
            return r !== d
        },
        KuWYX: function(r, d) {
            return r == d
        },
        XLaUq: function(r, d) {
            return r === d
        },
        YlRCI: function(r, d) {
            return r !== d
        },
        RTBbM: n(t._0x4620f1),
        JcUpC: n(t._0x610fe4),
        badaU: n(t._0x550da9) + n(t._0x4a7d6d) + n(t._0x1786fd) + n(t._0x91861) + n(t._0x3a6c74),
        bKOLa: n(t._0x20d037) + n(t._0x58a81a) + n(t._0x4e5d9d) + n(t._0x219d22) + n(t._0x10cec6) + n(t._0x4d695e) + n(t._0x2f5710)
    }
      , h = function() {
        const r = n;
        let d;
        try {
            d = f[r(o._0x30a458)](Function, f[r(o._0x291c99)](f[r(o._0x58be98)](f[r(o._0x547930)], f[r(o._0x45f89d)]), ");"))()
        } catch {
            f[r(o._0xc54d70)](f[r(o._0x11cb22)], f[r(o._0x11cb22)]) ? d = window : _0x49e3fa = _0x50a446
        }
        return d
    }
      , u = f[n(t._0x3069f9)](h)
      , p = new RegExp(f[n(t._0x1f014f)],"g")
      , S = f[n(t._0x512f7b)][n(t._0x26706f)](p, "")[n(t._0x7a3e1e)](";");
    let m, k, C, w;
    const M = function(r, d, y) {
        const v = n;
        if (f[v(_._0x4a0c37)](f[v(_._0x28ba78)], f[v(_._0x14919e)]))
            _0x1f3bd8 = _0x14d8ee;
        else {
            if (f[v(_._0x3fd3d9)](r[v(_._0x1b841a)], d))
                return !1;
            for (let T = 0; f[v(_._0x52d005)](T, d); T++)
                for (let L = 0; f[v(_._0x52d005)](L, y[v(_._0x1b841a)]); L += 2)
                    if (f[v(_._0x59f453)](T, y[L]) && f[v(_._0x52eade)](r[v(_._0x43bd4a)](T), y[f[v(_._0x16b393)](L, 1)]))
                        return !1;
            return !0
        }
    }
      , H = function(r, d, y) {
        return f[n(i._0x7cf063)](M, d, y, r)
    }
      , I = function(r, d, y) {
        return f[n(l._0x198a31)](H, d, r, y)
    }
      , B = function(r, d, y) {
        return f[n(s._0x46dd6b)](I, d, y, r)
    };
    for (let r in u)
        if (f[n(t._0x3949c9)](f[n(t._0x145554)], f[n(t._0x2d26ea)]))
            _0x18e000 = !0;
        else if (f[n(t._0x1ab9dc)](M, r, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
            m = r;
            break
        }
    for (let r in u[m]) {
        if (f[n(t._0x1665e0)](f[n(t._0x1d7453)], f[n(t._0x55edeb)]))
            return f[n(t._0x34ee91)](_0x307647, _0x2241eb, _0x2ddd65, _0x10d14c);
        if (f[n(t._0x34ee91)](B, 6, r, [5, 110, 0, 100])) {
            if (f[n(t._0x16efcc)](f[n(t._0x2812a1)], f[n(t._0x5c7f24)]))
                return;
            k = r;
            break
        }
    }
    for (let r in u[m])
        if (f[n(t._0x1ab9dc)](I, r, [7, 110, 0, 108], 8)) {
            C = r;
            break
        }
    if (!f[n(t._0x5bb5ef)]("~", k))
        for (let r in u[m][C])
            if (f[n(t._0x56ef0e)](f[n(t._0x505685)], f[n(t._0x1678a7)])) {
                if (f[n(t._0x3cb92c)](H, [7, 101, 0, 104], r, 8)) {
                    w = r;
                    break
                }
            } else {
                const d = _0x2829f4[_0x560a70]
                  , y = f[n(t._0xe7d9e6)](d[0], _0x22ddda[n(t._0x1c85f3) + "de"](46)) ? d[n(t._0x5031ae)](1) : d
                  , v = f[n(t._0x27f1b3)](_0x5040a1[n(t._0x37d8ad)], y[n(t._0x4d1197)])
                  , T = _0x5bc783[n(t._0x249ef1)](y, v);
                f[n(t._0x194669)](T, -1) && f[n(t._0x39458d)](T, v) && (f[n(t._0x4042b6)](_0x26ff2c[n(t._0x419cc4)], d[n(t._0xd2e44)]) || f[n(t._0x1eba6e)](d[n(t._0x350164)]("."), 0)) && (_0x5e4440 = !0)
            }
    if (!m || !u[m])
        return;
    const D = u[m][k]
      , N = !!u[m][C] && u[m][C][w]
      , b = f[n(t._0x51245c)](D, N);
    if (!b)
        if (f[n(t._0xe7d9e6)](f[n(t._0x230d22)], f[n(t._0x3581b6)]))
            _0x13ee3f = f[n(t._0x3659a2)](_0x3bcd3c, f[n(t._0x542518)](f[n(t._0x1a2bfd)](f[n(t._0xba7e19)], f[n(t._0x47db40)]), ");"))();
        else
            return;
    let g = !1;
    for (let r = 0; f[n(t._0x58423c)](r, S[n(t._0x37d8ad)]); r++)
        if (f[n(t._0x53f1a5)](f[n(t._0x265b13)], f[n(t._0x1190a0)]))
            (f[n(t._0x54b410)](_0x535545[n(t._0x4d1197)], _0x38da0c[n(t._0x12bb84)]) || f[n(t._0x1d98e8)](_0x1be68f[n(t._0x14a72b)]("."), 0)) && (_0x565bf8 = !0);
        else {
            const d = S[r]
              , y = f[n(t._0x1d98e8)](d[0], String[n(t._0x1c85f3) + "de"](46)) ? d[n(t._0x1dd29c)](1) : d
              , v = f[n(t._0x44c34e)](b[n(t._0x27086c)], y[n(t._0x1b3c6c)])
              , T = b[n(t._0x306e8f)](y, v);
            f[n(t._0x227399)](T, -1) && f[n(t._0x39458d)](T, v) && (f[n(t._0x1a1eb7)](b[n(t._0x4d1197)], d[n(t._0x1b3c6c)]) || f[n(t._0x2771db)](d[n(t._0x306e8f)]("."), 0)) && (g = !0)
        }
    if (!g)
        if (f[n(t._0x1827f0)](f[n(t._0x2b7c10)], f[n(t._0xddf5a7)])) {
            const r = new RegExp(f[n(t._0x590aae)],"g")
              , d = f[n(t._0x194940)][n(t._0x26706f)](r, "");
            u[m][C] = d
        } else
            return !1
});
j();
const R = function() {
    let t = !0;
    return function(s, l) {
        const i = {
            _0x4eb0df: 261
        }
          , _ = t ? function() {
            const o = P;
            if (l) {
                const n = l[o(i._0x4eb0df)](s, arguments);
                return l = null,
                n
            }
        }
        : function() {}
        ;
        return t = !1,
        _
    }
}()
  , O = R(void 0, function() {
    const t = {
        _0x5e1073: 1259,
        _0x26c908: 2134,
        _0x126f6f: 959,
        _0x39f22a: 388,
        _0xeb83c5: 1317,
        _0x29cc0c: 454,
        _0x1d8cfc: 914,
        _0x50b525: 2322,
        _0x1ba487: 1350,
        _0x2e1b5e: 1974,
        _0x262466: 2225,
        _0x23d19b: 761,
        _0x4822b1: 290,
        _0x59eaa2: 2269,
        _0x2741f9: 639,
        _0x3f01db: 2209,
        _0x40e9a8: 718,
        _0x35d177: 439,
        _0x2dea4b: 356,
        _0x2314e6: 1325,
        _0x2ebfb8: 2334,
        _0x149ee4: 1858,
        _0x5a67ab: 1912,
        _0x313950: 557,
        _0x824f0: 1003,
        _0x4e3cdf: 323,
        _0x5f21c2: 2589,
        _0x51cbc4: 1874,
        _0x2644fe: 2232,
        _0x45b794: 1874,
        _0x3f1c37: 2311,
        _0x5ead97: 2311,
        _0x45b097: 1874
    }
      , s = {
        _0x55c67d: 1159,
        _0x55c01e: 1878,
        _0x557e95: 459,
        _0x2ed336: 2480,
        _0x218f84: 1784,
        _0x1ee040: 680,
        _0x57de1b: 2133,
        _0xcd0e77: 1159,
        _0x57c2b3: 2628,
        _0x37ccac: 413,
        _0x5c8240: 413,
        _0x24ad09: 1082,
        _0x1345c3: 826
    }
      , l = {
        _0x576e97: 2133
    }
      , i = P
      , _ = {
        lWaGQ: function(u, p) {
            return u(p)
        },
        PnzMO: function(u, p) {
            return u + p
        },
        LVASS: i(t._0x5e1073) + i(t._0x26c908),
        eHNSv: i(t._0x126f6f) + i(t._0x39f22a) + i(t._0xeb83c5) + " )",
        MWApq: function(u, p) {
            return u !== p
        },
        LTsNB: i(t._0x29cc0c),
        WIFTu: i(t._0x1d8cfc),
        dtzfA: function(u, p) {
            return u(p)
        },
        BssHN: function(u) {
            return u()
        },
        KSbPg: i(t._0x50b525),
        gYSFG: i(t._0x1ba487),
        apwGH: i(t._0x2e1b5e),
        poacm: i(t._0x262466),
        OXvZD: i(t._0x23d19b),
        FgPri: i(t._0x4822b1),
        PMyRr: i(t._0x59eaa2),
        PYLeP: function(u, p) {
            return u < p
        }
    }
      , o = function() {
        const u = {
            _0x2d8c2f: 408
        }
          , p = i
          , S = {
            RTDYx: function(k, C) {
                return _[P(u._0x2d8c2f)](k, C)
            },
            BpJaE: function(k, C) {
                return _[P(l._0x576e97)](k, C)
            },
            iMxBj: _[p(s._0x55c67d)],
            yBGXo: _[p(s._0x55c01e)]
        };
        let m;
        try {
            _[p(s._0x557e95)](_[p(s._0x2ed336)], _[p(s._0x218f84)]) ? m = _[p(s._0x1ee040)](Function, _[p(s._0x57de1b)](_[p(s._0x57de1b)](_[p(s._0xcd0e77)], _[p(s._0x55c01e)]), ");"))() : _0xc35e07 = S[p(s._0x57c2b3)](_0x30428c, S[p(s._0x37ccac)](S[p(s._0x5c8240)](S[p(s._0x24ad09)], S[p(s._0x1345c3)]), ");"))()
        } catch {
            m = window
        }
        return m
    }
      , n = _[i(t._0x2741f9)](o)
      , f = n[i(t._0x3f01db)] = n[i(t._0x3f01db)] || {}
      , h = [_[i(t._0x40e9a8)], _[i(t._0x35d177)], _[i(t._0x2dea4b)], _[i(t._0x2314e6)], _[i(t._0x2ebfb8)], _[i(t._0x149ee4)], _[i(t._0x5a67ab)]];
    for (let u = 0; _[i(t._0x313950)](u, h[i(t._0x824f0)]); u++) {
        const p = R[i(t._0x4e3cdf) + "r"][i(t._0x5f21c2)][i(t._0x51cbc4)](R)
          , S = h[u]
          , m = f[S] || p;
        p[i(t._0x2644fe)] = R[i(t._0x45b794)](R),
        p[i(t._0x3f1c37)] = m[i(t._0x5ead97)][i(t._0x45b097)](m),
        f[S] = p
    }
});
function G() {
    const t = ["estimates.", "120", "collect_se", "dKCOO", "Molotov", "-4 of Judg", "toString", "drawCalc", "importFail", "amage here", "badaU", "totalRequi", "Squidward", " you want ", "useSubSpy", "Worn Anniv", "[LvKSHjZOF", "log", "Voidwaker", "e your col", "der", "efsaC", "s an activ", "weakDamage", "notEnable", "ive", "Chapter st", "Pets", "vel: ", "OXvZD", "configXieZ", "targetStar", "ion", "e tech par", "Minimum St", "nmvMJ", "ower", "gear", "en added", "sGear", "navi_damag", "navi.playe", "tongtiaoLe", "PNlAfsf:Tg", "merge", "u_lian", "Survivor A", " am develo", "Not Enable", "Soccer Bal", "PklmS", "Copy", "YlRCI", "poHuaiNeck", "Informatio", "after", "Michelange", "etc. You n", "forgeCost", " energy is", "equip the ", "Start with", "2MAKpNL", "vival (s)", "fied) and ", "Forcefield", "t_box_rand", "e equipmen", "Mode", "dance Syst", "skills, su", "unlockYong", "Prize E", "bxB]", "beiDong", "designs ca", "Gain Berse", "se must bu", "Actual Ear", "e-multipli", "HaiStat", "overall", "lly calcul", "tens of se", "navi.jing-", "damage_sum", " other att", "解锁收藏品套装金色{", "Final HP", "attackPeiJ", "he grid, o", "Turtles", "ssGlove1", "vivor", "irements", "configureH", " of the eq", "r Core", "ulator", "in a file.", "kaiDiSi", "selectMode", "gBPob", "Info", "to share t", "Type: Atta", "tar", "inding", "UWfOr", "aos fusion", "ons are on", "navi.lao-y", "n (make su", "Jodiw", "UpCount", "Sign In", "TVsrf", "Support De", "Metallia", "Inspiratio", "collectCol", "bianCe", "guWu", "superPetCd", "Resonance-", "issueRepor", "Synergy Le", "othRevival", "Key Evolut", "fenPeiHeXi", "Calculate ", "vVWbS", "yiChangDam", "r didn't t", "Total Reso", " that the ", "yiSun", "nked commu", "hot", "ture", " edition", "-rank", "Failed to ", "choes recr", "eStat", "一番赏积分计算", "gealLevelW", "ore Calcul", "ess takes ", "and the <s", "lent Equip", "conds to s", "ot functio", "ynergy", "er calcula", "HengGod", "fo4", "checkPoint", "ible suit.", "indexOf", "c Part", "jinHuaLeve", "greenOnly", "ence Earns", "igurations", "only calcu", "In Use", "he time", "ease don't", "fo1", "damageMult", "shanDi", "ents", "liuLianZuQ", "or_purple", "LTsNB", "Click imag", "d on other", "awakeWithN", "ectible pa", "navi.desig", "King Anniv", "singleSpyM", "onvert all", "to all ski", "暴击伤害计算", "m weapon, ", "Upgrade", "priceDetai", "LSXqk", "moonInputT", "calcGearCo", "navi.rank", "Ender's Ec", "-2 of Ever", "(Swipe to ", "d by click", "lls. It do", "edit", "moonInfo", "arn is gre", "denseMode", "actualEarn", "ent crit r", "ch parts, ", "u_ren_ji", "Lacerated ", "Encouragem", "SS Grade", "ex}", "calculator", "仅绿色", "ol will au", "tiple conf", "skill", "Sandy", "需要消耗核心", "Successful", "BNrMbbFFMB", "Hi-Maintai", "ing-events", "g data, pl", " Count", "ocation", "ide the ch", "diamondRat", "n't contai", "被动特工", "peiJian", "awakening", "Enter the ", "WWFlI", " and switc", "min", "petCd", "解锁收藏品套装红色{", "GcEYf", "Red Entry ", "superJiLi", "SyVpw", "jinHua2", "Level {lev", "Fashion Po", "Kraken - E", "tion8", "e analysis", "解锁收藏品红色{co", "ful when y", "u cost, su", "wu-ren-ji-", "change you", "synergy le", "ed, click ", " core and ", 'K + 10%" e', "uai2", "suit_lin_y", "edExceeded", "ge effect", "select_nec", "Set the Re", "t: {count}", "rn to this", "Delete", "signup", "解锁神铸{count", "m Synergy", "Max gear l", "hests", "The crit d", "Combat Har", "Select Ski", "aRbAG", "tongDian", "Emblem Ber", "allSurvivo", "ease damag", "yuanZhengM", "times", "ill Visual", "解锁皮皮德红色{co", "tech_tb_wu", "navi_chaos", "Twinborn C", "prototype", "e, and can", "sults are ", "Twinborn Q", "ance-simul", "mber", "Set Hi-Pow", "Core Alloc", "Cancel", "crit damag", "Actual Cos", "targetLeve", "jiShang", "t or pet c", "vivors, te", "greenEffec", "ar Passive", "uiting 135", "evaluate C", "Quick Patr", "laoShu", "unlockPurp", "configProp", "ptimizing ", "ellow", "tion of we", "efit", "Effect Per", "o-level-up", "Super Moti", "yueYong", "Add Surviv", "mwork pass", "Higher Dam", "huiXiang", "EMSlNFFATu", "eenshot in", "lace", "JREkV", "RTDYx", "redWoNiu", " testament", " use the c", "rone", "scenario", "zhongDu", "Subscribe ", "diamondPer", "small diff", "collectEdi", "目标神铸星级", "notNow", "WkTzSxge0g", "ts that ap", "r uploadin", " So when y", "ot accurat", "perience. ", "ssGear", "keMeng", "searchTool", "Calculate", "选择装备（可多选）", "CustomSuit", "_zhong_du", "percent", "selectStar", "Pet Level", "nd gloves.", "ong1", "vors-infor", "ocked", "To Lacerat", "rk for 5s ", "Clarity", "Tiao", "lts. Some ", " place/upg", "xieTong1", " rate your", "Dark Mode", "re the cur", "t again.", "ax number ", "eft corner", "usingSpy", "Max", "Awakening ", "Prize F", "JyTep", "eShang", "taluoOverl", "ath. If th", "CICIT", "creenshot", "tibles and", "_last", "ment Neckl", "ors' Entri", "al ATK</sp", "Forge Cost", "ranShaoPin", "es Informa", "yangDaShi", "tion", "battlePhas", "rations re", "calcHeroIn", "Set Harmon", " icon to m", "priceNum", "navi.spy-s", "火箭谐振给目标附加冰", "uipment", "The <span ", " the upper", "found wron", "erence wit", "y delete i", "navi.gear", "nd New", "yongHengNe", "matically ", "gxLZExLAS]", "upload_scr", "核心分配", "n Hair", "JcUpC", "iration", "upgrade", "pbxB", "Common Mod", "void Armor", "Earns", "Pets Infor", "ence", "Forge Calc", "attention", "PoHuai2Ent", "ctible-sta", "Pay Attent", "DMG Multi", "Usage", "umber", "lueEntry", "navi.god", "ercent", "ee your cu", "Privacy Po", "navi.order", "subSpy", "Leonardo", "chengGui", "unlockDogY", "ou check t", "totalDamag", "Skill Dama", "ZfvHz", "supportLan", "弹头被动升级红星", "heroTotalC", "apply", "Harmony", "includeCre", ", the high", "ond, and t", "自动计算最优装备核心", "baoJiShang", "match", "蓝绿切换", "ibles", "fit", "S Grade Ex", "Core Choic", "st-gear-co", "d. If you ", "ynergy Unl", "e Chest", "更新汇总", "Owner's AT", "rade/clear", "gher than ", "Sponsor", "Target Sta", "ove2", "rs, tech p", "Current Co", "nder", "on Set", "ssClothPoH", "table", "hen compar", "ount", "Splinter", "when level", "none", "y clicking", "targetGodS", "ration wit", " In the me", "Astral For", "tongTiaoLe", "Relic Core", "ine", "ince it is", "ct-star-up", " a tile an", "iplier", "hero_core", "configurat", "n compare ", "assive Cou", "t_box_s_po", "Need some ", "gear_selec", "chaoWu", "ing up: +4", "rking", "Design Cos", "ack value.", " includes ", "summarySco", "Attack: {a", "constructo", "Design Ear", "ectionSuit", "or_limit", "jinHua4", "there is a", " a button ", "mainHero", "necklace a", "hero", "cation of ", "ding to th", "petDog", "m star lev", "est2", '"text-tag-', "Awakening-", " core allo", "Detail2", "evel desig", "saveConfig", "-{star}", "unitScore", "import", "ovide.", "bingHuan", "i-lv", "slice", "Bao", "SpongeBob", "scar Brace", "yCRhe", "ber}", "apwGH", "JaMoF", "gainCoin", "Showdown", "chests on ", ", you need", " Double Bu", "-2 of Judg", "amily, fun", "ch gear. I", "ve.", " screensho", "礼包码", "aiLinNa", "current", "Select Par", "xiongMao", "ak spot, e", "ted", "-fusion", "scoreLimit", "红色小蜗助战", "6IwNHXB", "he calcula", "nizeFailed", "re allocat", "The probab", "ou freely ", "se be pati", "ation", "erge", "times of p", 'ctor("retu', "lts", "ultiplier ", "or_yellow", "tion9", "zN0ME7.MSl", "navi.hero", "dunShangSt", "Right", "taskHighCh", "XvDZo", " awakening", "ription: ", "kills etc.", "lace1", "er}", "tion2", "ZSfqS", "t of Attac", "navi.god-u", "lWaGQ", "fo3", "d means th", "dunShangEn", "any", "BpJaE", "nce", "damageConf", "oth", "uipment pa", "icon in th", "vival Time", " percent, ", "Resonance ", "iled", "the inputs", "Catnips", "Bracer", "nly calcul", "createLink", "Percent", "hgNFh", "premium to", "ATK", "ait, not a", "laFeiEr", "cleared. Y", "Prize B", "rge-{star}", "time3", "unt", "gYSFG", "Set Effect", "Left", "Gloves", "Clan shop", "This featu", "assive", "ere is a s", "Edit", "tstar Rip", "gName", "uploadScre", "Switch", "checkColle", "point_dial", "JWFla", " high-leve", "MyYpZ", "shoe", "passSkillC", "MWApq", " calculato", "_mo1", "HUJDU", "Tsukuyomi", "altrops", "ny and tea", "HGcuy", "heroCoreCa", "s_spy", "3720COVgDn", "suitWithNu", "YPHDS", "Clear", "unlockYell", "ue1", "异常时间", "ion of sur", "unted and ", "Void Excel", "them in ad", "clickStarT", "ode", "atically c", "specialMod", "rsMUg", "-evolution", "ountInfo", " for they ", "April", "，C，D，E，F，G", "techConfig", "bottomValu", "ulation re", "and change", "e Star Up", "ply to onl", "danTouRedS", "Select Nec", "actualCost", "right", "hGtGJMCtVp", "navi.gift", "se is open", "keyEvo", "-costs", ", +30% add", ". (All oth", "hpPeiJian", "n failed, ", "fo2", "解锁绿色词条", "ckPeiJian", "uo_jian", "Select Tea", "e Set Effe", "The conten", "This tool ", "r language", "collectInf", "navi.bao-j", "jinHua1", "If you wan", "levelShort", "依次输入A，最终，B", "520uraGkG", "e minimum ", "Crit Rate ", "n account", "Common", "ake effect", "ct6", "Use this t", "Play Main ", "guild", "+ATK %", "useThis", "Chilled ex", "ce/upgrade", " device or", "cent", "Input a na", "tech", "yiShangSta", "than 3 mon", "zhiMingGan", "elt", " value is ", "reInfo2", "useSearch", "Set {numbe", "configureD", "Main Pet", "Chaos Fusi", "navi_skill", "WeDHS", "caiShaoJia", " not autom", "PYLeP", "ll data ar", "navi.remin", "needCore", "linYin", "t want to ", "ted back t", "critRate", "or_blue", "wKoWf", "1505036IEIfiv", "reachYello", " tickets. ", "Guardian S", "wn Star", "ergy Cube ", "split", "-data", "The 3rd Re", "jdwpm", "that all c", "Match Coun", "poHuaiGlov", "cores, as ", "uncheckAll", "perks", "ge.", "Light Mode", "navi_pets-", "navi.draw", "al_zu_qiu", "cklace2", "please che", "effect of ", "When Shiel", "OxIyQ", "culator. I", " right dir", "damageInfo", "Calculatio", "to it.", "uiPao", "skill_zuan", "urvivors", "drawTypeFa", "解锁收藏品金色{co", "cdOfPet", "6th", "rt some pr", "Total", "n from lin", "r-rank", "on the bos", "Hi-Power", "Diamond pe", "zuanTouSki", "Shield Dam", "ck the but", "aiShoe", "ment", "Note: {wor", "Select Glo", "el Up", "Main", "attackPerc", "ly saved i", "superGuWu", "Initial Le", "importSucc", "Crit Damag", "zuQiuLianE", "allSpy", "Others", "chaosNotWo", "All Surviv", "glove", "tb_state_w", "ck the sta", " resources", "lowerHpEnt", "Usually yo", "redCollect", "BssHN", "undone.", "type", "signin", "(or only h", "ybKDY", "capybara", "This damag", "Automatica", "nfo", "ent", "hpPercent", "superBianC", "ziGui", "eld", "suit_jin1", "ran_shao_p", "Super Insp", "使用{type}作为", "ou can use", "XLaUq", "ints", "mary_label", "gradeSkill", "summary", "ssBeltColo", "fuHuo3Time", "绿色词条生效", "Leaderboar", "It will es", "haiMianBao", "Wayfinding", "tb_liu_lia", "Yellow", "设置属性", "lls", "Special Mo", "suit_ke_me", "Type: Defe", "selectAtta", "collectibl", "dtzfA", "clear", "chart", "Red", "danTou", `cess.
Subs`, "ttack", "公会详细", "navi_pathf", "ssBeltRed", "izes to po", "yuanZhengP", "lating rel", "vel", " some calc", "vation", "Attack fro", "Overall", "t to conve", "uan_tou", "switch)", "calrHChzoB", "o tickets", "select_wea", "yongHengGl", "ou can man", "unlockGree", "Clan", "om_yellow", "he more th", " you use t", "To Weakene", " a DPS cal", "to modify ", "AffTgqHQEK", "SDVUu", "t Sash", "navi_gears", "KSbPg", "ble", "Click on t", "ttack}K", "copySucces", "n all accu", "Events", "the images", "selectSubH", "velLeft", "mwork Pass", "culate the", "(when spli", " to ensure", "tries can'", "resetSyste", "re to dele", "them at wi", "w the crit", "rent attac", "tech_tb_zu", "bs to incr", " Generator", "Choice Epi", "collect", "Sign Up", "-60", "taskData", "PGmIK", "pport Chin", "rate-calcu", "spy", "finalHp", "zhangYuGe", " insuffici", "lace2", "S-Grade", "entInfo", "ur actuall", "Clan Perks", "age", "ves", "玩家排行榜", "exception", "note", "y all in t", "needTuZhi", "searchNote", "wuRenJiLiC", "ssBeltRedE", "解锁凛音觉醒{cou", "Tai", "ess", "eenshot", "gy-level-u", "function, ", "ModeDetail", "unlockWoEr", "unitPrice", "iJian", "tchCollect", "ncluded.", ", memes an", "Multi", "other", "Tsukuyomi ", "collectCri", "sorDesc3", "ch for eac", "hest Type", "targets bo", "useAsMain", "till need ", "tEffect", "解锁收藏品套装{co", "ue2", "Event Data", "r Damage M", "哨箭(彩色配件)", "ts and res", "color", "estroyer", "chuZhanSki", "m_yellow", "Skill Evol", "lieShangTi", "bKOLa", "-75", "weapon", "levelUp", "er resourc", "atures for", "ct me.", "unlockDogR", "MoRed", "tion to ac", "神罚项链·创星破灭", "t page of ", "Sold Out", "e multipli", "Select Mod", "purpleWoNi", "Outfit", "usage", "confirm", "guildLevel", "which need", "int, pleas", "yBGXo", "tion4", "Harmonic P", "fully", "xists for ", "Smart Reli", "setMinStar", "Click star", "delete", " icon in t", "Overload", "starWithNu", "Mode2", "clanTimes", "ch as the ", "urationBen", " to the ne", "Red Star P", "of Stardus", "Dense Mode", "c Collecti", "svWTB", "navi.daily", 'rt" button', "switch", "tech_huo_j", "iversary S", "navi_gear-", "操作模式", " above are", "rge Effect", "arts, coll", "e confirme", "taskChest1", "Skills", "nd skills ", "total of", " or the co", "iLmG;loYHT", "Advanced B", "navi.upcom", "Moonscar", "解锁沃尔默觉醒{co", "达到5星", "Search Too", "Pet Awaken", "o_ping", "duiJueLeve", "//qHdaQnEK", "with Color", "ns support", "Point Yiel", "h between ", ", Poisoned", "is action ", "configLink", "nity for f", "normalSpy", "Riftstar R", "[GGJMCVPNl", "lls learne", "changeType", "ssShoe", "btract the", "highPetCd", "navi.pet", "tb_zu_qiu", "val} of th", "xieZhen", "ormation", "rs, collec", "e subscrip", "Estimate", "Detail", "_bing_huan", "Damage", "addOneSpy", "es not sup", "clanFirst", "heroTongTi", "navi.chip", "y be some ", "starCalc", "y analyze ", "gainCore", 'class="tex', "-mine-expe", "port Parts", "lsRLu", "Each survi", "equipments", ": {level}", "Lower HP, ", "daLvKSnkeH", " fails or ", "premiumFea", "Drone Stat", "Stars", " examples ", "tureDesc", "112959eWPBdt", " Also, att", "vor requir", " will infe", "put attack", "replace", "fuHuo2Time", "yellowWoNi", "ually set ", "tack From ", "aiGod", " Expeditio", "tion funct", "Green", "Premium Fe", "the game, ", "opponents", "evel-up", " failed", "解锁紫色词条", "ic Power S", "月殇护手·创星破灭", "Attack", "yangStatus", " remain co", "wakening C", "Blue", "r, it can ", "heSheng", "All Editio", "Eternal Fo", "Molotov Sk", "D reductio", "{}.constru", "Coio Earns", "gainTuZhi", "Joey", "select_glo", "skill. It ", "lectibles ", "Joey Shard", "planWithNu", "Reset", "Red Collec", "s avatar t", "解锁熊猫觉醒{cou", "Set Showdo", "huiXiangMo", "es, pets a", "voidForgeE", "el up", "Price", "e time", "ing on the", "sor", "nt}", "eation Cos", "accordingl", "Battle Lus", "enableTech", "Super Enco", "otherAttr", "_ren_ji", "est1", "Rocket Mod", "el}", " and Skill", "alculator ", "rade Excel", "unlockColo", "The 1st Re", "odify", "navi.sugge", "s not used", "ll2", "when calcu", "Points per", "length", "r build", "ors", "解锁收藏品红色5星并", ". Join the", "l count of", "current in", "vel Up", "ance", "subHero", "All", "Maximum St", "Daily", "unlockLinY", "select_bel", " Mode", "Wesson", "battle pha", "premium fe", "buyAllInfo", "Note: Chan", "Eternal", "xLZExLAS", "ll3", "dunShang", "Color", "d HP is hi", "Design Req", "S-grade Sh", "解锁神铸3并且生效", "rrent conf", "达到120级", "ributes to", "abnormal", "navi_crit-", "解锁觉醒红色{cou", "needJingHu", "rmation", "eld, More ", "nse", "vor", " recognize", "Feedback o", "clipboard", "dition-deb", "收藏品暴击伤害", "ilities th", "e to edit", "(s)", "Draw", "n have mul", "kening Yel", "left", 'ration: "{', "Stardust S", "nt button.", "setEffectP", " power, ch", "geEffect", "in_tou1", "es a diffe", "Pathfindin", "Hai", "Level Up", "ool", "Number", "Handbook", "taskMain2", "attackLoca", "swipeToSwi", "Home", "-detail", "finalAttac", "SOfGf", "rate data,", "ed success", "lator", "stSkill", "Red collec", "iMxBj", " draw", "解锁金色{count", "Epic Part", "QkMkY", "navi_colle", "or_all", " tickets.T", "noData", "Random Epi", "reInfo", "onverted f", "eck the", " above 90%", "Energy Ess", "Total Requ", "_tou", "PoHuai4", "Other Stat", "Void Forge", "hunLuanBel", "ByARB", "nds on gea", "Capabara G", "You may wa", "twinInfoDe", "Tech Parts", "天启战衣·创星破灭", ", donatell", "jinHua40", "None", "Select Typ", " according", " this tool", "gear but s", "alf time),", "sitive val", "QCcpz", "to allocat", "奖的数量，用空格分开", "of configu", "shuaiRuo", "ssGlove", "are conver", "godWithNum", "oost", "our config", "r a effect", "weiChe", "y-essense", "Core Count", "NFgJB", "onance Sup", "jin", "sorDesc2", "navi.gear-", " result ma", "wFIMC", "yongHengCl", "3rd", "yangZhuang", "mizing you", "fuser", "pmERq", "inding_sho", "labelLevel", "tack accor", "number of ", "currentCon", "navi_lunar", "Prize C", "atures wil", "ace", "li-chang.t", "No data ye", " page, cli", "clickPictu", "LVASS", "Motivation", "Pain", " unlimited", "Select Dep", "Teamwork P", "icon next ", "ating...", "Scenario", "全体特工属性", "缓效果", "Owner's Le", "hKffL", "GWEtY", "xieTong2", "oySkill", "an> is loc", "taskMain1", " the game,", "ist Skills", "paiDaXing", "owever, if", "Star", "Min", "d victory!", "/clear che", "Right-clic", "chaosEffec", "Durian Mod", "selectCard", "navi_energ", " impossibl", "effectPerc", "Weak Spot ", "highJiLi", "Enjoy!", "tion3", "Unlock Awa", "differentS", "iLGYHTrHCz", "{val} of t", "pageHeader", "amage in t", "selectType", "coNFFATmug", "Survivor", "tech_ran_s", "ll. But pl", "Treads", "Damage on ", "dressScore", "解锁觉醒{count", "Key Evolve", "aCXnP", "sidered as", "ard", "Multiple S", "otivation", "Lunar Mine", "assistPet", "onfigurati", "Select Boo", "navi.card", "chaosFusio", "well as th", "atello is ", "red", "chuZhan", "them. A po", "i_si1", "low Star-{", "sual", "ect them i", "ill be los", "We only su", "Random S G", "cloth", "unlockGod", "Colored En", "the best p", "elect the ", "_shuai_ruo", "n: ", "Metallia's", "ectionYell", "yiChangTim", "Core", "vel in Bat", "h the actu", "Deploying ", "ctible-inf", "ross the g", "crease the", "Confirm", " cache is ", "navi.max-a", "passive", "hen result", "r, survivo", "qrEMPwOpNp", "return (fu", "Drone Mode", "fCWwn", "time to co", "Rex", "Result", "select_sho", "recognize ", "To Chilled", "ard, and s", "les can pr", "port effec", "max", "n support", "tech_selec", "adjust gea", "hua", " to save y", "ke effect,", "d value, t", "uccess", "setMaxStar", "1st", "mber}", " Percent", "Single Sur", "ectionRed", "enshot", "navi_event", "KuWYX", "ping that,", "eRed", "jiLi", "Select Res", "Lv.", "e damage b", "Merge", "Recognize ", "ATK Calc", "All needed", "heroCoreCo", "baoJiLvSta", "Save Confi", "hang", " will auto", "Limit", "Twinborn D", "Emblem", "loadingFro", "Ying", "shop", "ssCloth", "tible coun", "cannot be ", "0% damage", "ense", "Skill-{ind", "danTou1", 'rn this")(', " and earns", "stem defau", "god3Effect", "learnMore", "Not Accura", "register", "tor", "poacm", " the shiel", "dStar", "calcAttent", "ffect", "The 2nd Re", "Coin Costs", "ctly fille", "select_box", "attackWith", "lect_box_r", "jinHua3", "ed back to", "Only main ", "sorDesc1", "allHeroEnt", "yongHengGo", " Phase", "Simulator", "me. :sad", "is not DPS", "unlockAwak", "ator", "eYellow", "e tick the", "warn", "erty", "turtles", "navi.calc", "Master Yan", "olution", "nheFX", "the count", " you to ex", "ate", "ths, we ma", "damageAtta", "ckInfo", "Select Car", "can provid", "ed.", "nt to find", "ack is not", "does not s", "config", "ease conta", "Choice S G", "uff", "Point yiel", "huoJian", "Super Batt", "gurations ", "QWTMg", "levelWithN", "d Equipmen", "t when the", "amage mult", "fig", "t applies ", "needs", "Forge Requ", " view resu", "atures req", "tible", "ly calcula", "copy", "Faile to R", "total", " here will", "{tech}", "SeDKo", "h survivor", "o is not i", "KqrEMPwOpN", "3624051gIUJsp", "an> can on", "yellowStar", "nance Ener", "Consider o", "User Infor", "vor-awaken", "navi.handb", "ter", "tle", "JnBpL", "Tpye", "n advance,", "Prize A", "阳状态", "he collect", "redCountOf", "vivors, th", "xSUSh", "r limit to", "cancel", "ice", "sBbNn", "rdust Sash", "Target Lev", "unt}星", "calcResult", "jinHua60", "unlockBlue", "suit_yue_y", "it to prov", "modifyDraw", "-shop", "Times", "navi.chaos", "{number}", "inputAllPr", "金色小蜗助战", "reachLevel", "commonMode", "-task", "Price Conf", "tion5", "Locally or", "hero_frag_", "selectGear", "greenBlue", "tempannoun", "attack", "BaoJiShang", "PoHuai4Ent", "selectSkil", " to Englis", "Awakening", "解锁蓝色词条", "IXAuJ", "Soccer Mod", "Upcoming E", "iguration", "uiJue", "navi.next-", "pan class=", "Tech parts", "scoreRateI", "Hi-Power B", "recognizeS", "navi.board", "_box_yello", "-task-data", "or_red", "wuNian", "n. Please ", "Count", "s chests i", " as Link", "fromCharCo", "Plan-{numb", "wakening", " is negati", "ence Costs", "Register a", "cy-policy", "anTou", "cost, plea", "vquIi", " + 10%", "hNumber", "r swipe ac", "soldOut", " Effect", "Import con", "danTou2", "rid to pla", "ore", "TB Quantum", "e to obtai", " a single ", "ranYouTong", "chests", "ator can o", "configStar", "al_shou_we", "drawToScor", "niversary ", "分配方案（敬请期待）", "Initial St", "Eternal Su", "Diamond Yi", "confirmDel", "navi_desig", "Issue Repo", " Configura", "save", "uragement", "charCodeAt", "navi_pet-a", "Special Op", "收藏品暴击率", "navi_exp-t", "uirements", "放置于被动槽位", "your HP is", "d} of Moon", "Necklace", "iu_lian", "navi_reson", "everal min", "sive skill", "aoEntry", "navi.forge", "navi.lunar", "ime of Rif", "licy", "cked some ", " by anyone", "informatio", "Golden-{nu", "ge, click", "Assist Pet", "Calculator", "ullet", "兑换数量", "玩家飙升榜", "serk", "late the d", "currentCor", "Loading co", "tor lets y", "Murica DPS", "ctibles", "{star}", "Equipment ", "attackAuto", "解锁皮皮德金色{co", "skill_visu", " state", "er Bullet ", "calculated", "useAsSub", "Pet Merge", "解锁永恒神铸{cou", "ame", "tb_wu_ren_", "navi_pet-m", "parts-info", "for Buy Al", "thing", "navi.priva", "获得核心", "tou", "tech_tb_li", "-attr", "Point can ", "ature", " #1 Top Ra", "iguration.", "_box_rando", "at survivo", "Chart", "r stand in", "unlockColl", "Go to Coll", "needChip", "Create Bra", "Quantum Na", "vents", "n, like En", "tech_zuan_", "price_type", "king clear", "coreCount", "初始神铸星级", ", and make", " the costs", "rboots", "cribe now ", "ero", "n error, y", "eIncrease.", "ease note ", "Include Cr", "Input tota", "Raphael", "c Core All", "Current", "t, and the", "ity", "战力发展史", "uyAll", "antime, we", "d there ma", " Ball", "Clan Shop", "Some of en", "cts of 6th", "count}星", "activity", "only.", "not direct", "al values.", "hase", " ensure th", "level", "createConf", "taskChest2", "scoreRate", "tickets yo", "生效（杀怪300）", "lect_box_y", "ash", "initStar", "unlockPoHu", "pet_select", "Copied to ", "Super", "he upper l", "me, please", "nobot", "y earns do", "le Lust", "kill Visua", "Red Snail", "onance Mul", "Note", ' the "Expo', "he grid to", "navi_survi", "clear the ", "navi.skill", "ook-pet", "ithNumber", "'ve tempor", "w plan, an", "Energy Gui", "Payment fe", "cklace1", "Poisoned e", "nizeSucces", "st as foll", " checkbox ", "noPlanNoti", "解锁彩色词条", "his case.", "after opti", "Common-Gra", "Pair Match", "7th", "pets and s", "tb_li_chan", "Main Survi", "own HP, sk", "j00Z7.cOFo", "linYinMode", "skill_evo_", "navi_syner", "y Outfit", "_core", "evel your ", "to unlock ", "e top righ", "ached", "e-increase", "er your da", "ectibles, ", "o see the ", "navi.colle", " damage of", "mony", "6071905pMbZFA", "mainPet", "PoHuai2", "n Discord", "his option", "poHuaiShoe", "uire subsc", "Select Clo", "topValue", "ic core al", "gcCXe", " chests.", "st when sh", "dunShangVa", "Configurat", "Learn more", "tion0", "taskLogin2", "e attack a", "ed some ti", "Collectibl", "English fo", "inputConfi", 'n">ATK</sp', "gear_core", "and the to", "Check effe", "Change Typ", "unlockXion", "Creating..", "og_title", "Vulnerabil", "Twinborn F", "5th", "unlockTong", "f attribut", "cellent Eq", "ance Energ", "k is corre", "ange of at", "poHuaiStar", "ook-tech", "teGongZhiJ", "sXSdg", "ost", "Use {type}", "rEntry", "necklace", "Upload a S", "urvivor", "Click", "ows.", "earnJingHu", "selectDepl", "i-shang-ha", "navi.timel", "ook-collec", "增伤计算(旧版)", "mage", "gDdMm", "Import", "Glacial Wa", "e them. Pl", "Bullet", "evaDps", "upport to ", "not includ", "inputAwake", "ion import", "Passive", "Other", "from", "high", "on Effect", "ed this ti", "suit_wo_er", "of Collect", "ranking", "Yelena", "unted, don", "h your fri", "yBkyz", "reToEdit", "Crit Rate", "gMaoRed", "Instinct", "rom point.", "m Collecti", "To Exposed", "The higher", "jBRTT", "ernal Suit", " the resul", "永恒手套", "ation depe", "navi.event", "up the che", "WIFTu", "+HP %", "2883167VqbrWe", " statistic", "he configu", "ecognize C", "ian", "tion7", "t fully ta", "Select Ass", "configureP", "inUse", ", please w", "y be not a", "Survivors", "_huai", "Antimatter", "unlock", "chaosPower", "draw", "mDefault", " collectib", "New", "Hot", "-40", "BaoJiLv", "hao_ping", "Revival En", "Purple", "t_box_yell", "resourcesB", "correct. S", "Advanced M", "navi.home", "-lian.type", "selectAssi", "杨大师", "Configure ", "link can s", "suiXingQua", "Lunar Debu", "ent.", "公会排行榜", "vance, oth", "twinInfo", "opens the ", "stNrMbbFFM", "navi.damag", " failed, m", "navi.guild", "navi_forge", "tongTiaoAt", "Damage Mul", "sorDesc4", "ffects fro", "t of this ", "velRight", "Enternal", "doDiscord", "Choice Voi", "ll1", "llect data", "oad the sc", "n-requirem", "pet", "ou want to", "tb_state_h", "tchSpy", "navi.chart", "try of Ent", "try", "tomaticall", "Now you ca", "Open", "FgPri", "AgwQS", "n your bro", "danke007.c", "hance your", "tb_zuan_to", "4th", "The calcul", "els for ea", "navi.searc", "yiShang", "Drill Shot", 'green">fin', "ue means e", " Spring Se", "orce Barri", "bind", "petFrog", "Select Bel", "t may be n", "eHNSv", "ield exist", "r-up", 'timate "AT', "on another", "Twisting B", "oad", "ate the ch", "Succeed to", "eed to sel", "Gears", "t of Custo", " Testament", "TM players", " the direc", "gears", " wait.", " as Main S", "t screen)", "able soon.", "Star-{star", "mation", " into diam", "lowerHpTit", "henBeiLv", "Clan Level", "Common Ann", "jinHua0", "宠物CD", "Exp to Lev", "t_box_s", "totalAttac", "n this slo", "needTime", "PMyRr", " This feat", "e change o", "ols and en", "Ranking", "you can co", "tDamage", "navi.exp-l", "Golden Sna", "Higher Shi", "al_ran_sha", "count}", "hold", "Twinborn p", "remain", "达到80级", "nyone who ", "Press and ", "ectionPoHu", "y certain ", "rrect it b", "eternalFor", "TB Drill S", "ps, howeve", "2nd", "ove1", " count of ", "Title", "t_box_s_ra", "Automatic ", "Gift", "ssNecklace", "fuHuo1Time", "MzgmY", "the crit d", "Unlock", "belt", "l Skill Vi", "event", "es that in", "Daily Remi", "Advanced", "ion to cal", "Expedition", "sts.", "Worm", " rate and ", "Level", "utes, plea", "ssGloveNot", "ly be foun", "Select Wea", "gains", "-informati", "ntry", "g screensh", "and", "rate", "huo_jian", "-evo", "Denatello", "onents.", "info", "hange base", "configFuzh", "navi_upcom", " the perce", "to select ", "to tickets", "From", "blic and a", "Fuel Barre", "tb_state_l", "try of Sta", "ge points ", "Prize D", "on Power", "Part Reson", "initGodSta", "selectHpPe", "合计积分", "inRed", "DPS", "be convert", "Set Red St", "suit_kai_d", "te configu", "vel up", "K monsters", "ng1", "PPYWC", "laceKuangB", "9th", "skillDamag", "RPG", "unt}星星", "klace", "tion1", "techResona", "taskLogin1", "navi.hot", "After the ", "notAccurat", "ber", "Grade Skil", "passive.", "te the att", "axckA", "ou can rea", "i_chang", "export", "link is pu", "taskSpecia", "d swipe in", "baoJiLv", "echoSkillN", "i_zhe", "calculatio", "remain cou", "lieShang", "First", "达到40级", "Complete", "Not Now", "assive ski", "nd final a", " to buy al", "xieTong", "t corner, ", "woErMo", "e of Colle", "Yang Stanc", "ownerAtk", "ype1", "ove", "Login for ", "itional sk", "PoHuai4Tit", "ists for {", "petLevel", "解锁破坏神铸{cou", " Maintaine", "or_green", "Handguards", "8th", "gearMaxLev", "in1", "collectSui", "ages", "s from opp", "an_tou", "Croaky", "ar Limit", "critDamage", " buy all w", "f you don'", "Normally, ", "uration pe", "his link i", "location. ", "reset", "nt-calcula", "d in)", "Resources ", "xieZhenWit", "reenshot, ", "jinHua75", "multiSpyMo", "xieZhenNen", "super", "ssGlove2", "rent kind ", "Sharkmaw G", "oModify", "max star y", "njwRN", "darkMode", "calculate", "l be avail", "zEmCU", "Damage boo", "Patrick", "WithNumber", "u_qiu", "Combat", "d, except ", "iplier tha", "skillLevel", "tiplier", "that grid.", "seconds", "Prize G", "hards", "navi.pet-m", " tickets c", "Forge-{num", "rmanently ", "calculate ", "Catnips An", "Uncheck Al", "tb_state_z", "s that sho", "at if we c", "qiaoyi", "k...", "S-grade sh", "vel up, co", "estimate", "gLiang", "and maximu", "-requireme", "eInfo", "kaHsn", " or Weaken", "Survivor S", "Purple Sna", "ated on th", "Export", "tible Coun", "creating", "oSlider", "PnzMO", "nction() ", "ection to ", "To Poisone", "pzxDL", "iFRwP", "Entry", "ccurate.", " otherwise", "unlockRed", " into poin", "figuration", "selectChip", "time2", "Are you su", "Create Lin", "双绝枪·创星破灭", "ution", "ns points,", "Costs", " can't pro", "wser and w", "Calc", "ure is use", "navi.syner", " inputs. H", "nt}星", "eteConfig", "andom_yell", "ing", "your clan ", "Battle Pha", "itle", "Use", "BUZrZVJRQM", "re require", "Voidwaker ", "Equipments", "The lower ", "taskQuick2", "navi_clan-", "yOriI", "ends. If t", "attle Lust", "FJHjP", "erwise the", "select_clo", " are limit", "laiAngNaDu", "ive are co", " You need ", "damageSpon", "ton to upl", "relicCoreC", "linYinShaZ", "donateMe", "ttack here", "Select Sta", "aiPuLiEr", "techAndSki", "s learned", "Upload Scr", " for more ", "Survivor, ", "Last Prize", "loying Ski", " then retu", "mbat harmo", "mLink", "ersary Out", "xcluding t", "countRecog", "Evolve Lev", "Save", "taskMonste", "t of Defen", "console", "Energy Dif", "nds on sur", "tRate", "uai2Entry", " but it ne", "Final ATK", "nfiguratio", "collect or", " instantly", "eIncrease", "tack", "needCoin", "arily unlo", "ation proc", "subscribeN", "error", "ater than ", "uPeiJian", "星辰腰带·创星破灭", "collection", "zu-qiu-liu", "Restore sy", "__proto__", "rice", "-old", "918604qbEeXb", "Survivors ", "ype2", "forgeEffec", "t-tag-gree", "ook", "mes of pas", "搭配推荐", "taskQuick1", "Set the ti", "navi.crit-", "Check Poin", "s Final At", "Input Pet'", "alc", "his field ", "781niYoTC", "解锁红色词条", "Charts", "of shard, ", "紫色小蜗助战", "uantum Bal", "onance chi", "Now", "vide such ", "ssBelt", "ner", "Take a scr", " Informati", "initLevel", "King", "出战特工", "h or Chine", "se in game", "trace", "om_yellow_", "Chip", "tion6", "Defeat", "Lucky Kill", "igInfo", "ANlFb", "iuEvo", " considere", "Weakened e", "ese(simpli", "ill damage", "ndom", "c Pet", "l equipmen", "Anniversar", "sShardCoun", "navi_tech-", "ssWeapon", "new", "pon", "yourInform", "Skill", "WTzSxggzNM", "-debuff", "means the ", "UZrZVJRQMK", "lightMode", "es are con", 'name}"? Th', "lue", "art has be", "RTBbM", "When total", " experienc"];
    return G = function() {
        return t
    }
    ,
    G()
}
O();
const c = {};
c[x(1200)] = x(1861) + "om",
c[x(2386)] = x(697),
c[x(1950)] = x(724),
c[x(2342)] = x(1888),
c[x(742)] = x(1707) + "es",
c[x(332)] = x(1798),
c[x(1848)] = x(2332),
c[x(541)] = x(1108),
c[x(533)] = x(707),
c[x(782)] = x(1757),
c[x(2345) + x(2384) + "er"] = x(1836) + x(2100),
c[x(1037) + x(1969)] = x(1770),
c[x(1977) + x(2525)] = x(1456) + x(1584),
c[x(1287) + x(574)] = x(794),
c[x(717) + x(1965) + "on"] = x(2170) + x(2263) + "on",
c[x(1834) + x(504)] = x(1385) + x(2399),
c[x(2587) + x(375)] = x(552) + "on",
c[x(1508) + x(1847) + x(2477)] = x(1030) + x(1518),
c[x(853) + x(2349)] = x(1550) + x(1295),
c[x(1087) + x(1249) + x(895)] = x(1707) + x(202) + x(204),
c[x(1087) + x(239) + x(1880)] = x(1707) + x(494),
c[x(1151) + x(2294)] = x(1824) + "ff",
c[x(2173) + x(1309)] = x(1611),
c[x(2173) + x(582)] = x(757),
c[x(1645) + x(2659) + x(1899)] = x(2236) + x(2359) + "n",
c[x(1645) + x(1405) + x(2162)] = x(2351) + x(1476),
c[x(1673) + x(772) + "p"] = x(2431) + x(1010),
c[x(1189) + x(1131)] = x(1096) + x(1314),
c[x(2287) + x(1563) + x(1040)] = x(1108) + x(2263) + "on",
c[x(585) + x(1534) + "n"] = x(234) + x(1899),
c[x(1514) + x(1476)] = x(871) + x(2162),
c[x(1562) + x(386)] = x(1558),
c[x(553) + x(485)] = x(802) + x(2150),
c[x(1517) + x(2617)] = x(1907) + x(619),
c[x(1524) + x(2593) + x(1347)] = x(421) + x(1343),
c[x(688) + x(1146) + "rt"] = x(1064) + "g",
c[x(688) + x(2412)] = x(1064) + "g",
c[x(2088)] = x(180),
c[x(2297)] = x(584),
c[x(904)] = x(2032),
c[x(839)] = x(1432),
c[x(1842)] = x(1045) + x(1690),
c[x(2145) + x(781)] = x(1292) + x(1641) + x(2100),
c[x(1150) + x(1382)] = x(286) + x(2216) + x(1241),
c[x(1507) + x(2160)] = x(2147) + x(734) + x(1998) + x(1056) + x(2299) + x(880) + x(1312) + x(640),
c[x(1419)] = x(2597),
c[x(822)] = x(1252),
c[x(850)] = x(451),
c[x(2022)] = x(2129),
c[x(346)] = x(1747),
c[x(427)] = x(2148) + "k",
c[x(1709) + x(449)] = x(540) + "me",
c[x(1622) + "ig"] = x(1582) + x(220),
c[x(2503)] = x(447),
c[x(1795)] = x(2471),
c[x(535)] = x(2166),
c[x(834)] = x(2568),
c[x(1511)] = x(2206),
c[x(625) + x(770)] = x(1701) + x(1755) + x(1078) + x(829),
c[x(2313) + "ed"] = x(1489) + x(2144) + x(944),
c[x(2313) + x(2562)] = x(1489) + x(2144) + x(1832) + x(183) + x(1122) + x(206) + x(1679),
c[x(2131)] = x(1716) + ".",
c[x(722) + "s"] = x(1632) + x(1046),
c[x(881) + x(2408)] = x(515) + x(1839) + x(2023) + x(1982) + x(1928) + x(1829) + x(1822) + x(247) + x(1033) + x(1574) + x(1913) + x(2156) + x(2552) + x(1849) + x(2631) + x(993) + x(1882) + x(538) + x(2318) + x(2409) + x(1788) + x(298) + x(1767) + x(2175) + x(2070) + x(999) + x(1533) + x(2195) + x(543) + x(1360) + x(218) + "t.",
c[x(1390)] = x(2356),
c[x(1307) + x(2201)] = x(1545) + x(2216) + x(607) + x(2116),
c[x(415) + x(2275)] = x(1856) + x(1053) + x(2518) + x(2469) + x(2537) + x(878) + x(735) + x(1206) + x(1598) + x(577) + x(1219) + x(2415) + x(622) + x(1860) + x(2154) + x(1232) + x(1380) + x(1253) + x(434) + x(658) + x(1643) + x(849) + x(1276) + x(1128) + x(2069) + x(2108) + x(2404),
c[x(1909) + "k"] = x(431),
c[x(2057) + "el"] = x(2572) + x(1676) + x(2380) + x(1272),
c[x(1551) + x(2373)] = x(1941) + x(2029) + x(2417) + x(181) + x(737) + x(1725) + x(1332) + x(2074),
c[x(1551) + x(838)] = x(647) + x(2387) + x(1166),
c[x(1551) + x(774) + x(2408)] = x(1865) + x(1498) + x(426) + x(1885) + x(1726) + x(1148) + x(334) + x(1914) + x(1722) + x(2590) + x(1617) + x(1389) + x(2018) + x(319) + x(2644) + x(254) + x(1691) + x(361) + x(731) + x(2440) + x(1009) + x(930) + x(546) + x(1815) + x(304) + x(1190) + x(1494) + x(723) + x(1077) + x(694) + x(492) + x(2591) + x(2305),
c[x(762)] = x(1642),
c[x(738) + x(2062)] = x(1800) + x(2053) + "r",
c[x(2112) + x(699)] = x(1869) + x(1018),
c[x(1850) + x(512)] = x(990) + "e",
c[x(1672) + x(1863) + "u"] = x(1934) + x(2443),
c[x(1071) + x(204)] = x(214) + x(911) + x(2239) + x(1710) + x(1175) + x(2128) + x(2372) + x(815) + x(941) + x(2454) + x(1460) + x(338) + x(1870) + x(199) + x(1400) + x(1962) + x(2501) + x(979) + x(835) + x(1634) + x(184) + x(2401) + x(417) + x(583),
c[x(2027) + x(1560)] = x(1315) + x(2514),
c[x(1323)] = x(1479) + x(527),
c[x(642)] = x(2420),
c[x(2569)] = x(743),
c[x(2291) + x(385)] = x(1404) + x(1899),
c[x(921) + x(2444)] = x(940) + x(1572),
c[x(921) + x(925)] = x(444) + x(2168) + x(2327) + x(897) + x(813) + x(685) + x(1594) + x(1677) + x(430) + x(1915) + x(1862) + x(2304) + "e.",
c[x(2186) + x(2249)] = x(831) + x(1602) + x(2528),
c[x(467) + "lc"] = x(2351) + x(951) + x(2452) + x(1347),
c[x(343) + x(841) + x(2615)] = x(1301) + x(1376) + x(1442) + x(1473),
c[x(2640)] = x(2035),
c[x(2224) + "ow"] = x(2635) + x(2258),
c[x(191) + x(1884)] = x(836),
c[x(1446) + "ce"] = x(1653) + x(1153) + x(2090) + x(1897) + x(299) + x(1608) + x(1650) + x(2222) + x(1532) + x(1021) + x(809) + x(1358) + x(2646) + x(1194),
c[x(1321)] = x(1702),
c[x(1817)] = x(1073),
c[x(2012)] = x(1807),
c[x(2497)] = x(667) + "d",
c[x(1353)] = x(2155),
c[x(2416) + x(2162)] = x(1547),
c[x(519) + x(349)] = x(1770),
c[x(2245) + x(748) + x(1079)] = x(1770),
c[x(519) + x(1741) + "i"] = x(2490),
c[x(1831) + x(1680)] = x(241),
c[x(1831) + x(2384) + "er"] = x(241),
c[x(1831) + x(1680) + x(2234)] = x(1744),
c[x(2346) + x(608)] = x(760),
c[x(2346) + x(1880)] = x(1541),
c[x(1833) + x(2446)] = x(1826),
c[x(1833) + x(1074)] = x(687),
c[x(2389) + x(1275)] = x(1096) + x(235),
c[x(245)] = x(236) + x(2403),
c[x(1528) + x(2122) + x(2073) + x(1324)] = x(236) + x(2403),
c[x(211) + x(2411)] = x(2351) + x(1476),
c[x(2485) + "n"] = x(1030) + x(1518),
c[x(906)] = x(1989) + x(1011),
c[x(1465)] = x(1297),
c[x(1782) + "s"] = x(724),
c[x(586)] = x(1052),
c[x(1221)] = x(578) + x(1407),
c[x(1406) + x(2240)] = x(1069),
c[x(249)] = "订单",
c[x(891)] = x(871) + x(2162),
c[x(998) + "st"] = x(2242),
c[x(998) + x(274) + "re"] = x(225),
c[x(394)] = x(1798),
c[x(219)] = x(2170),
c[x(1406) + x(1648)] = x(2332),
c[x(1406) + x(1728)] = x(1108),
c[x(1742) + x(303)] = x(278),
c[x(1254) + x(686)] = x(1606),
c[x(1852)] = x(2253),
c[x(1833) + x(1431)] = x(443),
c[x(1833) + x(1570)] = x(757),
c[x(1647) + x(1971)] = x(802) + x(2150),
c[x(2105) + x(386)] = x(1558),
c[x(1137) + x(2349)] = x(1550) + x(1295),
c[x(407) + "p"] = x(200) + "s",
c[x(848)] = x(1015),
c[x(1782) + x(1439)] = x(794),
c[x(1782) + x(1467)] = x(794),
c[x(501)] = x(368),
c[x(559) + x(2325)] = x(1952) + x(287),
c[x(1867) + "h"] = x(670),
c[x(1566) + x(1480)] = x(248) + x(1531),
c[x(1433) + x(375)] = x(552) + "on",
c[x(1459) + x(1615)] = x(1456) + x(1584),
c[x(866) + x(2525)] = x(1456) + x(1584),
c[x(2157) + "gy"] = x(2431) + x(1999),
c[x(1684) + x(305)] = x(1707) + x(494),
c[x(1919) + x(943)] = x(1907) + x(976),
c[x(1406) + x(1743) + x(1388)] = x(1707) + "e",
c[x(1529) + x(912) + x(1047) + x(1372)] = x(1824) + "ff",
c[x(1715) + x(1771)] = x(971) + x(2159),
c[x(1016) + x(1993)] = x(768) + x(2159),
c[x(775) + x(812)] = x(868) + x(1424),
c[x(253) + x(2613)] = x(1552) + x(1424),
c[x(811) + "ed"] = x(2585) + x(1424),
c[x(806)] = "武器",
c[x(1235)] = "衣服",
c[x(1734)] = "项链",
c[x(2288)] = x(2149),
c[x(2260)] = x(2228),
c[x(1124)] = x(947),
c[x(782)] = x(629),
c[x(2376) + x(2460)] = x(1559) + x(981),
c[x(1630) + x(936)] = x(2052) + x(981),
c[x(1236)] = x(2570) + "}",
c[x(1579) + x(325) + x(1181)] = x(792) + x(2007),
c[x(1579) + x(325) + x(683)] = x(2540) + x(1614),
c[x(1579) + x(325) + x(672)] = x(2392) + x(1614),
c[x(2601)] = "技伤",
c[x(1868)] = x(1718) + x(1605),
c[x(706) + "n"] = x(510),
c[x(1427)] = x(1453),
c[x(2610) + "le"] = x(945),
c[x(2142)] = x(2252),
c[x(1140) + x(416)] = x(1505) + "it",
c[x(1310)] = x(1109),
c[x(2146)] = "2次",
c[x(437)] = "3次",
c[x(2358) + x(2626)] = x(2169) + x(1306),
c[x(1943)] = x(814),
c[x(2604) + x(374)] = x(666),
c[x(2026)] = x(1770),
c[x(267) + x(1065)] = x(626) + "e",
c[x(1579) + x(1243) + "ow"] = x(602) + x(1424),
c[x(1579) + x(1285)] = x(2551) + x(1424),
c[x(496) + x(2411)] = x(259),
c[x(995) + "r"] = x(1660),
c[x(1102) + "t"] = x(1883) + x(545),
c[x(491) + "e"] = "下限",
c[x(1695)] = "上限",
c[x(1948)] = "腰带",
c[x(1320) + "ed"] = x(1032),
c[x(579) + "e"] = x(2169) + x(2055),
c[x(704) + x(2046)] = x(1780),
c[x(632)] = "手套",
c[x(2005) + "e"] = x(256) + "ge",
c[x(457)] = "鞋子",
c[x(1692)] = x(2169) + x(1207),
c[x(372)] = x(1820),
c[x(561)] = "凛音",
c[x(1142) + x(769)] = x(1413),
c[x(473) + "ow"] = x(1084) + "}星",
c[x(1346) + "e"] = x(1210) + "}星",
c[x(185)] = x(2266),
c[x(1123)] = x(711) + "d",
c[x(1671)] = x(854),
c[x(1445)] = x(269),
c[x(2467)] = x(2516),
c[x(2634)] = x(2136) + "d",
c[x(348)] = x(1267),
c[x(1244) + "e"] = x(475),
c[x(2102)] = "秒",
c[x(1027)] = x(613) + x(758),
c[x(2319)] = x(1519),
c[x(250)] = x(2532),
c[x(1437) + "40"] = x(2033),
c[x(1437) + "80"] = x(1927),
c[x(1437) + x(2306)] = x(1034),
c[x(568) + "w5"] = x(869),
c[x(628)] = x(1168),
c[x(2229) + x(1809)] = x(1516),
c[x(2229) + x(1448) + x(1065)] = x(1048),
c[x(2229)] = x(1707) + "es",
c[x(684)] = x(1463) + x(1539),
c[x(555) + "n"] = x(796),
c[x(1111)] = x(1211) + x(1808),
c[x(1426)] = x(1211) + x(744),
c[x(2078)] = x(1211) + x(805),
c[x(2519)] = x(860),
c[x(315)] = "超武",
c[x(2427)] = x(2424) + "n",
c[x(623)] = x(656) + x(228),
c[x(2426)] = x(2512) + x(649),
c[x(651) + "e"] = x(986) + x(1512),
c[x(1425)] = x(1264),
c[x(255) + x(2219)] = x(1836) + x(2100),
c[x(255) + x(1597) + x(2360)] = "",
c[x(1036)] = "异伤",
c[x(1469)] = x(2663),
c[x(1848)] = x(2332),
c[x(468)] = x(754),
c[x(883)] = x(1663) + "de",
c[x(1352)] = x(2396),
c[x(1621)] = "级",
c[x(902)] = x(2620) + "or",
c[x(412)] = "任意",
c[x(1039) + "a"] = x(1096) + x(1478),
c[x(1739) + "a"] = x(1096) + x(2468),
c[x(2221)] = x(1331),
c[x(358)] = x(960),
c[x(764)] = x(318) + "ts",
c[x(961)] = x(324) + "ns",
c[x(1444) + x(781)] = x(2651),
c[x(1990) + "r"] = x(1590),
c[x(297) + x(2411)] = x(2639),
c[x(560)] = x(2521),
c[x(910)] = x(1567),
c[x(1579) + x(1930) + x(615)] = x(1006) + x(1626),
c[x(2187) + x(598)] = x(212) + x(1169),
c[x(1384)] = x(2152),
c[x(1964)] = x(233),
c[x(1369)] = x(673),
c[x(1629)] = x(1504) + "ar",
c[x(2336)] = x(283) + "r",
c[x(2647)] = x(2513),
c[x(2264)] = x(624) + x(693),
c[x(2600) + "l"] = x(1423) + "el",
c[x(1905)] = x(1112),
c[x(520)] = "+1",
c[x(2545)] = "+2",
c[x(1336)] = "+3",
c[x(327)] = "+4",
c[x(1976) + x(2227)] = x(1292) + x(1134) + x(913),
c[x(1158) + x(1769)] = x(2481) + x(1050),
c[x(2335) + x(1902)] = x(1292) + x(1641) + x(2100),
c[x(2080) + x(2120)] = x(1989) + x(1724) + "y",
c[x(1581)] = x(421) + x(2271),
c[x(2342)] = "装备",
c[x(703) + x(2290)] = x(1963) + x(2290),
c[x(2179) + "th"] = x(1694) + x(1565),
c[x(2564) + x(2008)] = x(497) + x(2008),
c[x(1017) + "t"] = x(1876) + "t",
c[x(963) + "ve"] = x(618) + x(759),
c[x(1265) + "e"] = x(1220) + "ts",
c[x(1688)] = x(551),
c[x(335)] = x(1263),
c[x(1875)] = x(2063),
c[x(1346) + x(1348)] = x(1196) + x(1054) + x(1229) + x(1923),
c[x(1346) + x(1290)] = x(1038) + x(2159),
c[x(1291)] = x(1160),
c[x(1193)] = x(1816) + x(1216),
c[x(2543)] = x(2618) + x(695),
c[x(1759)] = x(1953),
c[x(2081)] = x(1633),
c[x(2539)] = x(984) + "t",
c[x(890)] = x(865) + x(2176),
c[x(2428)] = x(1375) + x(1638),
c[x(603)] = x(1906),
c[x(819) + "u"] = x(2255),
c[x(933) + "u"] = x(1436),
c[x(2629)] = x(377),
c[x(1147)] = x(1959),
c[x(749)] = "特工",
c[x(1226)] = x(620),
c[x(2379)] = "被动",
c[x(2611) + x(1351)] = x(1701) + x(2337),
c[x(1499)] = x(1821) + x(923),
c[x(1072) + x(1851)] = x(2500) + x(700),
c[x(1072) + x(778)] = x(2500) + x(700),
c[x(1801)] = x(1947),
c[x(2648)] = x(528),
c[x(2619)] = x(463),
c[x(2405)] = x(424),
c[x(2041)] = x(1957),
c[x(1135)] = x(2265),
c[x(751)] = x(2317),
c[x(669) + x(351)] = x(352),
c[x(1130)] = x(1019),
c[x(369)] = x(1765),
c[x(203)] = x(1354) + "g",
c[x(1179)] = x(2093),
c[x(2476)] = x(2520),
c[x(561)] = x(2423),
c[x(789)] = x(1732) + x(1895) + x(1736),
c[x(1557)] = x(657) + "被动",
c[x(2533)] = "配件",
c[x(2394) + x(1790)] = x(2410) + "ck",
c[x(507)] = x(677) + x(1042),
c[x(678) + x(511)] = x(371) + x(406) + "k",
c[x(1991) + x(777)] = x(371) + x(2208) + "se",
c[x(1271)] = x(186),
c[x(2538)] = x(1182),
c[x(1754) + x(948)] = x(2248) + x(2247) + x(935) + x(1942),
c[x(2466) + "l"] = x(2205) + "el",
c[x(1209)] = x(2547) + x(660),
c[x(823)] = x(1903),
c[x(1447)] = x(431),
c.hp = "HP",
c[x(641)] = x(1410),
c[x(1075) + "k"] = x(2215),
c[x(750)] = x(2393),
c[x(621) + x(649)] = x(534),
c[x(650)] = x(1785),
c[x(2654)] = x(428),
c[x(2487) + x(481)] = x(1284) + x(2398),
c[x(2079) + "de"] = x(1215) + x(600),
c[x(2406)] = x(818) + "e",
c[x(2312)] = x(2450),
c[x(1587) + "_a"] = x(1412),
c[x(1587) + "_b"] = x(435),
c[x(1587) + "_c"] = x(1152),
c[x(1587) + "_d"] = x(1987),
c[x(1587) + "_e"] = x(2377),
c[x(1587) + "_f"] = x(188),
c[x(1587) + "_g"] = x(2103),
c[x(1587) + x(196)] = x(2197),
c[x(1435) + x(1420)] = x(523) + x(489) + x(1121),
c[x(210)] = x(1540),
c[x(345)] = "单价",
c[x(321) + "re"] = x(1992),
c[x(2493) + "l"] = "详细",
c[x(2582) + x(481)] = x(1217) + x(937) + "n",
c[x(973) + "de"] = x(2498) + "ho",
c[x(1944)] = x(996) + x(2368),
c[x(932)] = x(1330) + x(2368),
c[x(665)] = x(575) + x(2368),
c[x(2434) + "n"] = x(266) + x(1503),
c[x(2031)] = x(2661) + "ed",
c[x(2181) + "o"] = x(251),
c[x(433)] = x(1601),
c[x(2191)] = x(488),
c[x(2115)] = x(962),
c[x(252)] = x(2361) + "lo",
c[x(652)] = x(1972),
c[x(2609)] = x(293),
c[x(1438)] = x(231) + "e",
c[x(483) + "e"] = x(675) + "de",
c[x(2072)] = x(968),
c[x(2506)] = x(845) + x(730) + x(1896),
c[x(268)] = x(1664),
c[x(564)] = x(1770),
c[x(2065)] = x(626) + "e",
c[x(2328)] = x(1192) + x(901),
c[x(2437) + x(758)] = x(1267) + x(879) + x(2125) + "ed",
c[x(2260)] = x(1057) + x(1628),
c[x(888)] = x(1748) + x(1593),
c[x(2623)] = x(2498) + "ho",
c[x(1823) + "n"] = x(884) + "ip",
c[x(2119)] = x(898),
c[x(1835) + x(2220)] = x(696) + x(2571),
c[x(2633)] = x(1167),
c[x(2515) + "s"] = x(1538) + "s",
c[x(2475) + x(307)] = x(1836) + x(2100),
c[x(1893)] = x(1888),
c[x(1544) + "e"] = x(286) + "re",
c[x(2496) + "re"] = x(2435) + x(2596) + x(385),
c[x(2496) + x(1092)] = x(2535) + x(1149) + x(580) + x(1223) + x(525) + x(2121) + x(336) + x(1866) + x(365) + x(2067) + x(562) + x(2365) + x(1116) + x(790) + x(1429) + x(2529) + x(2414) + x(1060) + x(1094),
c[x(2496) + x(547)] = x(1165) + x(597),
c[x(908)] = x(2650),
c[x(1589)] = x(1132),
c[x(237)] = x(240) + x(2337),
c[x(1328) + x(2337)] = x(1865) + x(1781) + x(2211) + x(2603) + x(2509) + x(679) + x(974) + x(861) + x(2362) + x(1887) + x(1231) + x(1411) + x(2141) + x(1779) + x(1877) + x(2645) + "e.",
c[x(1341) + x(1327)] = x(956) + x(436),
c[x(1727)] = x(1101) + x(344),
c[x(1961) + "e"] = x(617) + x(1521) + x(353) + x(2438) + x(529) + x(643) + x(1117) + x(752) + x(2508) + x(1359),
c[x(518) + "o1"] = x(1580) + x(2484) + x(1536),
c[x(518) + "o2"] = x(418) + x(1678) + x(2040) + x(328) + x(1787) + x(2113) + x(736) + x(1958) + x(2598) + x(2324) + x(965) + x(1364) + "e.",
c[x(518) + "o3"] = x(418) + x(1678) + x(2040) + x(328) + x(1787) + x(2113) + x(736) + x(179) + x(1805) + x(1269) + x(347),
c[x(784) + x(2212)] = x(526) + x(1763) + x(270),
c[x(784) + x(1918)] = x(626) + x(2042) + x(1548),
c[x(332)] = x(1798),
c[x(370)] = x(1603),
c[x(260) + x(486)] = x(1338) + x(2196) + x(2556) + x(2118) + x(2200) + x(465) + x(2621) + x(2182) + x(1766) + x(1224) + x(1753) + x(1365),
c[x(207) + x(2474)] = x(1600) + x(1008) + x(399) + x(2558) + x(2117) + x(1268) + x(1239) + x(2086) + x(2020) + x(786) + x(1396) + x(506) + x(808) + x(2298) + x(1213) + x(1162) + ")",
c[x(207) + x(509)] = x(1338) + x(2196) + x(2556) + x(2118) + x(2200) + x(465) + x(2621) + x(2182) + x(477) + x(1556) + x(1110) + x(1397) + x(779),
c[x(207) + x(409)] = "",
c[x(207) + x(2461)] = x(1865) + x(1781) + x(1104) + x(285) + x(857) + x(1682) + x(1666) + x(401) + x(2183) + x(1979) + x(479) + x(1827) + x(2178) + x(1138) + x(1797) + x(2140),
c[x(1299) + x(438)] = x(187) + x(1245),
c[x(2286) + "t"] = x(1031) + x(1214),
c[x(330)] = x(1668) + x(1043),
c[x(905) + "ao"] = x(2126) + x(2458),
c[x(1721) + x(2664)] = x(2126) + x(276) + x(2660),
c[x(301) + x(727)] = x(2431) + x(2333),
c[x(2347) + x(1840)] = "",
c[x(2039)] = x(2575) + x(1686),
c[x(178)] = x(2096),
c[x(1173)] = x(262),
c[x(1012)] = x(1164) + x(445),
c[x(726) + x(1595)] = x(513) + x(728) + x(2330),
c[x(1340) + "ry"] = x(631) + x(198) + "es",
c[x(1378) + x(243)] = x(2546) + x(991),
c[x(2483) + x(243)] = x(339) + x(1549),
c[x(837) + x(2594)] = x(1898) + "}",
c[x(1316)] = x(610),
c[x(1490)] = x(1750),
c[x(612) + x(1844)] = x(1869),
c[x(612) + x(1e3)] = x(875) + "ed",
c[x(612) + x(1026)] = x(1108),
c[x(201) + "g"] = x(2309),
c[x(2076) + x(1485)] = x(2429) + x(1434),
c[x(1496)] = x(1983) + "l",
c[x(1374)] = x(2006),
c[x(503)] = x(2433) + x(2337),
c[x(800) + "ll"] = x(1248) + x(2292),
c[x(1688)] = x(551),
c[x(1218)] = x(1537),
c[x(2629)] = x(1640),
c[x(933) + "u"] = x(1920) + "il",
c[x(819) + "u"] = x(2127) + "il",
c[x(1191) + x(649)] = x(2616) + x(539),
c[x(1191) + x(755)] = x(1612) + x(732) + x(1792) + x(1277) + x(1115) + x(929) + x(1129) + x(420) + x(1917) + x(1932) + x(296) + x(1978) + x(1058),
c[x(550) + x(1481)] = x(2595) + x(1555) + x(1181),
c[x(733) + x(1804)] = x(2231) + x(1319) + x(389),
c[x(873) + "l"] = x(359),
c[x(550) + x(1458)] = x(972) + x(571),
c[x(411) + x(1854)] = x(2092) + x(1699) + x(1879) + "s",
c[x(1059) + x(246)] = x(440) + x(1283),
c[x(1700) + x(244)] = x(1776) + x(1326) + x(1278) + x(709) + x(1294) + x(1127),
c[x(1700) + x(2300)] = x(1921) + x(1041) + x(901),
c[x(2400) + x(190)] = x(208) + x(946) + x(2411),
c[x(954)] = x(828) + x(2341),
c[x(1188)] = x(1363) + "d",
c[x(1901) + "le"] = x(918) + x(2622) + x(758),
c[x(636) + "ry"] = x(2171) + x(1520) + x(264) + x(1681) + x(1745),
c[x(2358) + x(2003) + "ao"] = x(2169) + x(2579) + x(1542),
c[x(2358) + x(2003) + x(1527)] = x(2381) + x(2662) + x(294) + x(316) + x(1313),
c[x(2328) + x(2139)] = x(382) + x(1049) + x(1576) + x(1578) + x(1892) + x(2614) + x(373) + x(2203) + x(1530) + x(448),
c[x(664) + "r"] = x(1237) + x(1985) + x(1422),
c[x(664) + x(1733)] = x(2303) + x(2364) + x(1095) + x(505) + x(2048) + x(2281),
c[x(689)] = x(2542) + x(844) + x(716),
c[x(767) + x(1966)] = x(2217) + x(739) + x(2581) + "e",
c[x(289) + x(2213)] = x(591) + x(1029) + x(281) + x(1669) + x(2281) + x(1484),
c[x(289) + x(2560)] = x(1101) + x(2499) + x(232),
c[x(1943) + x(1689)] = x(1101) + x(363) + x(197) + x(1154),
c[x(1943) + x(238) + "ry"] = x(2244) + x(2241) + x(1526) + x(2193),
c[x(458) + x(292)] = x(387) + x(2036) + x(886) + "d",
c[x(1943) + x(1099)] = x(1101) + x(2310) + x(197) + x(1154),
c[x(1943) + x(2049) + "le"] = x(1996) + x(2605) + x(2527),
c[x(1943) + x(1449) + "ry"] = x(843) + x(311) + "nt",
c[x(1140) + x(2432)] = x(1811) + x(1853) + x(1778),
c[x(1140) + x(2432) + x(1939)] = x(2565) + x(419),
c[x(967) + x(2594)] = x(1475) + x(403),
c[x(2329)] = x(2353),
c[x(1450) + "l"] = x(2576) + "ll",
c[x(309) + x(2337)] = x(1701) + x(2337),
c[x(2397)] = x(867),
c[x(2082)] = x(425),
c[x(2358) + x(402)] = x(2323),
c[x(2358) + x(753)] = x(1306),
c[x(1225)] = x(683),
c[x(679) + "e"] = x(1707) + "e",
c[x(704) + x(1937)] = x(1024),
c[x(704) + x(284)] = x(442),
c[x(1255)] = x(1756),
c[x(1401) + x(2094)] = x(1535) + x(1282),
c[x(949)] = x(2043) + "e",
c[x(221) + x(1654)] = x(1841),
c[x(221) + x(588)] = x(1522),
c[x(1126) + x(2015)] = x(2107) + x(355),
c[x(544) + x(1308)] = x(2274),
c[x(1729) + x(474)] = x(1204),
c[x(1729) + x(793)] = x(1772),
c[x(1803)] = x(1052),
c[x(1624)] = x(877) + "d",
c[x(2530) + "e"] = x(1506) + x(653),
c[x(498)] = x(2599) + "t",
c[x(2507)] = x(2383) + "ns",
c[x(1814) + x(1607)] = x(2075) + x(1564) + "l",
c[x(1462) + x(648)] = x(1373) + x(410) + x(2114) + x(2488) + x(1592) + x(1318) + x(2143) + x(1604) + x(310) + x(1227) + x(1118) + x(1871) + x(2505) + x(2226) + x(1482) + x(2382) + x(763) + x(1661),
c[x(2530) + x(2123)] = x(1373) + x(410) + x(2114) + x(2488) + x(1592) + x(1318) + x(1900) + x(265) + x(291) + x(1749) + x(2473) + x(2066) + x(1256) + x(1477) + x(366),
c[x(498) + x(2408)] = x(1571) + x(1995) + x(1337) + x(1089) + x(2250) + x(2295) + x(1625) + x(2553) + x(889) + x(2106) + x(1093) + x(1773),
c[x(2507) + x(2408)] = x(1571) + x(1995) + x(1337) + x(569) + x(637) + x(756) + x(1637) + x(2531) + x(2151) + x(487) + x(1125) + x(563) + x(702),
c[x(1022)] = x(1298) + x(635) + x(2038) + "l.",
c[x(1430) + "1"] = x(1929) + x(1924),
c[x(1968)] = x(1968),
c[x(1430) + "2"] = x(713) + x(1357),
c[x(1501) + x(2123)] = x(521) + x(698) + x(605) + x(690) + x(825) + x(1349) + x(1658) + x(983) + "y.",
c[x(776)] = x(977),
c[x(2344)] = x(272) + x(1723) + x(213),
c[x(1222) + "n"] = x(552) + "on",
c[x(663)] = x(606),
c[x(2578)] = x(1161),
c[x(745)] = x(794),
c[x(2014) + "e"] = x(1322) + "te",
c[x(2011)] = x(2047) + x(862),
c[x(1704)] = "d",
c[x(1176)] = x(532) + x(2331) + x(2060),
c[x(1070)] = x(2583),
c[x(2024) + "l1"] = x(2034),
c[x(2024) + "l2"] = x(1515) + x(1051),
c[x(2207) + "r1"] = x(2273),
c[x(2207) + "r2"] = x(2e3),
c[x(2243)] = x(2608) + "ol",
c[x(2172)] = x(2583),
c[x(859)] = x(1857),
c[x(1623)] = x(1497),
c[x(397) + x(989)] = x(1857),
c[x(397) + x(337)] = x(455) + x(2284) + x(2602) + x(2573),
c[x(1090)] = x(1156) + "t",
c[x(1487)] = x(816),
c[x(2363)] = x(200) + "s",
c[x(263) + x(1359)] = x(1599) + x(982) + "ts",
c[x(1197) + x(2104)] = x(915) + x(928) + x(1063) + x(2083) + x(2254) + x(725) + x(855) + x(924) + x(1616),
c[x(1794) + x(2233)] = x(1440) + x(1457),
c[x(1273) + x(1813) + "ow"] = x(1085),
c[x(2307) + x(1627) + x(2613)] = x(741) + x(846) + x(719),
c[x(308)] = x(2351) + x(951) + x(1492),
c[x(1711)] = x(302),
c[x(314) + x(312) + x(1799)] = x(478) + x(2455) + x(616),
c[x(887)] = x(1714) + "e",
c[x(1333) + x(1675)] = x(273) + x(277),
c[x(2561) + x(2058)] = x(1242) + x(1872) + "t",
c[x(2561) + x(1062)] = x(1242) + x(362) + x(226),
c[x(1443) + x(2115)] = x(966),
c[x(676) + x(2001)] = x(1904) + x(852) + "et",
c[x(1428) + x(2658)] = x(783) + x(2285) + x(1674),
c[x(654)] = x(2486) + x(2202) + x(271),
c[x(1997) + x(1228)] = x(2110) + x(1502) + x(820),
c[x(1762) + x(461)] = x(2320) + x(2202) + x(271),
c[x(224) + x(771)] = x(1735) + x(194),
c[x(601) + x(422)] = x(1391) + x(1789) + x(787),
c[x(1464) + x(1279)] = x(1296) + x(2522) + "ly",
c[x(2204) + x(1656) + "s"] = x(1886) + x(1044) + x(950) + x(438),
c[x(2204) + x(380)] = x(2447) + x(1266) + x(2030) + "nt",
c[x(258) + "g"] = x(1233) + x(747) + x(2280) + x(2369) + x(1708) + x(2643) + x(1967) + x(2457) + x(1470) + x(2555) + x(517) + x(1451) + x(2267) + x(2268) + x(1591) + x(367) + x(182),
c[x(2636) + x(1245)] = x(611) + x(2402),
c[x(1911)] = x(313) + x(1262) + x(1845) + x(1796) + x(432) + x(558) + x(858) + x(275) + x(216) + x(2526) + x(1370) + x(810),
c[x(1553) + x(587)] = x(2354) + x(1949) + x(1230),
c[x(1553) + x(1500) + x(2028)] = x(570) + x(1639) + "l",
c[x(1553) + x(1922) + x(872)] = x(957) + x(2584),
c[x(314) + x(1908)] = x(1371) + x(994) + x(2455) + x(616),
c[x(314) + x(312) + x(1799)] = x(1843) + x(1379) + "t",
c[x(314) + x(1940) + x(2282)] = x(1234) + x(994) + x(2455) + x(616),
c[x(1273) + x(1813) + "ow"] = x(741) + x(2465),
c[x(1273) + x(2371) + x(708)] = x(1091) + x(2465),
c[x(1273) + x(2371) + x(2270) + "2"] = x(1091) + x(2465),
c[x(1631) + x(1466) + "w"] = x(741) + x(2283),
c[x(1631) + x(1575) + x(801)] = x(1091) + x(2283),
c[x(1926)] = x(441),
c[x(581)] = x(2111) + "l",
c[x(376)] = x(1023) + x(1986) + x(1980) + x(2180) + x(1761) + x(1344),
c[x(2307) + x(1335) + x(2161) + "ow"] = x(1091) + x(846) + x(719),
c[x(2430) + "t"] = x(1509) + "rt",
c[x(453) + x(1717)] = x(1002) + x(1083),
c[x(2462)] = x(2246) + "ts",
c[x(630) + x(317)] = x(1865) + x(2223) + x(2453) + x(2388) + x(2456) + x(1525) + x(1960) + x(384) + x(1825),
c[x(662)] = x(2016) + "ls",
c[x(1933) + x(1061)] = x(956) + x(856),
c[x(975) + x(1329)] = x(1101) + x(1488),
c[x(2059) + x(791)] = x(1707) + x(514) + "ct",
c[x(2238) + "t"] = x(300) + x(2563),
c[x(807)] = x(1066),
c[x(229)] = x(2492),
c[x(2580) + "r"] = x(631) + x(1005),
c[x(522)] = x(1293),
c[x(2534)] = x(1452),
c[x(1392)] = x(606),
c[x(1055)] = x(441),
c[x(499)] = x(396),
c[x(2010) + x(414)] = x(1989) + x(1011),
c[x(1758)] = x(1981),
c.to = "To",
c[x(2316) + "re"] = x(1097) + x(2399),
c[x(682)] = x(1577),
c[x(2515)] = x(1538),
c[x(295)] = x(1112),
c[x(1186) + "t"] = x(552) + x(1760),
c[x(1802)] = x(552) + x(1988),
c[x(1751)] = x(1994),
c[x(480) + x(2085)] = x(833) + x(209) + x(997),
c[x(2655)] = x(2190) + "r",
c[x(1740) + x(1174)] = x(1163) + x(2198) + x(674),
c[x(1819) + x(1080)] = x(1793) + x(1178),
c[x(2099) + x(2419)] = x(1170) + x(1246) + x(1408),
c[x(987)] = x(1100) + "s",
c[x(2044)] = x(279) + "K",
c[x(2051)] = x(2656),
c[x(1764)] = x(1916),
c[x(595)] = x(646) + x(817) + x(2459) + x(1546) + x(383) + x(1274) + x(1257) + x(896) + x(195) + x(2391) + x(1035) + x(2218) + x(1386) + x(176) + x(1021) + x(1387) + x(1693) + x(400),
c[x(595) + x(899)] = x(516) + x(1345) + x(460) + x(953) + x(2470) + x(1543) + x(1381) + x(2098) + x(1383) + x(2489) + x(2502) + x(903) + x(1270) + x(2642) + x(495) + x(1931) + x(2375) + x(840) + x(590) + x(679) + x(1951) + x(1251) + x(1685) + x(1495) + x(964) + x(1368) + x(1752) + x(2607) + x(958) + x(1585) + x(572) + x(2017),
c[x(595) + x(341)] = x(927) + x(1367) + x(2278) + x(2097) + x(1001) + x(692) + x(1696) + x(2071) + x(668) + x(1881) + x(2559) + x(1838) + x(2491) + x(331) + x(2657),
c[x(2184) + x(980)] = x(282),
c[x(2184) + x(1339)] = x(1403) + x(2612) + x(2163) + x(1662) + x(1143) + x(1004),
c[x(2184) + x(1136)] = x(2548) + x(2448) + x(2606) + "+ ",
c[x(2184) + x(785)] = x(1891) + x(1007) + x(1573) + x(2442) + x(882) + x(364) + x(780) + x(1183) + " ",
c[x(2184) + x(1837)] = x(1737),
c[x(2289)] = x(1806),
c[x(1202)] = x(1113) + "e",
c[x(2638) + x(1703)] = x(955) + "n",
c[x(2638) + x(2009)] = x(1281),
c[x(2638) + x(404)] = x(1936),
c[x(2638) + x(1195)] = x(1141),
c[x(2638) + x(827)] = x(1864),
c[x(2638) + x(1441)] = x(1720),
c[x(2638) + x(2272)] = x(604),
c[x(2638) + x(1791)] = x(1665),
c[x(2638) + x(2549)] = x(2056),
c[x(2638) + x(392)] = x(2004),
c[x(2425) + x(1088)] = x(1013),
c[x(2425) + x(1468)] = x(683),
c[x(2425) + x(391)] = x(672),
c[x(2425) + x(326)] = x(1304),
c[x(2425) + x(2479)] = x(1812),
c[x(2425) + x(565)] = x(952),
c[x(2425) + x(2054)] = x(939),
c[x(627) + "vo"] = x(2588) + x(464),
c[x(798)] = x(1028),
c[x(1828)] = x(1925) + x(2301) + x(2343),
c[x(1107) + "sc"] = x(1106) + x(1366) + x(329) + x(1120) + x(2338) + x(797) + x(2257) + x(1935) + x(795) + x(390) + x(1538) + x(2153) + x(2259) + x(773) + x(824) + x(712) + x(593) + x(2352) + x(1289) + x(2214) + x(1706) + x(1635) + x(1894),
c[x(452) + x(530)] = x(1713) + x(1613) + x(2445),
c[x(548)] = x(531) + x(1067),
c[x(2649)] = x(870) + "l",
c[x(803) + x(1408)] = x(1208) + x(2511) + x(788) + x(1731),
c[x(681)] = x(472),
c[x(450) + x(1286)] = x(2194) + x(771),
c[x(821)] = x(242),
c[x(765) + "1"] = x(2262) + x(2625) + x(1177) + x(2199) + x(2567) + x(1157) + x(614) + x(2185) + x(1846) + x(2077) + x(1712) + x(2517) + x(1855) + x(909) + x(1238) + x(192) + x(2550) + x(920) + x(328) + x(1596) + x(705) + x(934) + x(1783) + x(1657) + x(1738),
c[x(765) + "2"] = x(720) + x(2395) + x(1486) + x(1250) + x(1491) + x(537) + x(1184) + x(1956),
c[x(765) + "3"] = x(2366) + x(306) + x(2025) + x(215) + x(594) + x(2135) + x(1646) + x(360) + x(2101),
c[x(765) + "4"] = x(720) + x(1644) + x(177) + x(280) + x(1698),
c[x(765) + "5"] = x(1185) + x(1588) + x(1472) + x(1910) + "t.",
c[x(2089)] = x(2650),
c[x(2495) + x(2165)] = x(1955) + x(2630) + x(1938) + x(942),
c[x(2504)] = x(2013) + x(1020) + x(502) + x(2557) + x(609) + x(970) + x(1683) + x(1149) + x(1955) + x(1890) + x(2061) + x(1973),
c[x(691) + x(1619)] = x(1955) + x(1342),
c[x(205) + "e"] = x(2164) + "se",
c[x(1300) + "t"] = x(1770),
c[x(267) + x(2385)] = x(626) + "e",
c[x(2005) + x(2449)] = x(256) + "ge",
c[x(395) + "at"] = x(613) + x(758),
c[x(542) + "t"] = x(1718) + x(1605),
c[x(2390) + x(661) + x(900)] = x(536) + x(2050) + x(893) + x(978),
c[x(2390) + x(661) + x(2653)] = x(1655) + x(830) + x(1199) + x(2472),
c[x(2390) + x(661) + x(1240)] = x(2279) + x(830) + x(1199) + x(2472),
c[x(2441)] = x(1775),
c[x(2230) + x(1818) + "1"] = x(1187) + "e",
c[x(2230) + x(1818) + "2"] = x(1455) + "e",
c[x(2478) + x(2277)] = x(1493) + x(1610),
c[x(832)] = x(2339) + x(2064),
c[x(1280)] = x(1014) + x(2064),
c[x(1659) + "fy"] = x(596) + x(508) + x(589) + x(634) + x(1418) + x(1620) + x(446) + x(1355),
c[x(645)] = x(1105) + "o",
c[x(766) + x(1302)] = x(1305) + x(2632),
c[x(2188)] = x(2422) + "v",
c[x(1334) + x(1068)] = x(322) + x(721),
c[x(2451) + x(1649)] = x(2572) + x(342) + x(876) + x(917),
c[x(1361) + x(1362)] = x(2068) + x(423) + x(1393) + x(556) + x(482) + x(1975) + x(2482) + x(2158) + x(1180) + x(710) + x(379) + x(938) + x(1954) + x(729) + x(340) + x(333) + x(916) + x(863) + x(381) + x(476) + x(1416) + x(1705) + x(2037) + x(2189) + x(1303) + x(222) + x(2109) + x(493) + x(1114) + x(842) + x(1651) + x(1609) + x(907) + x(2637) + x(217) + x(1247) + x(1618),
c[x(2192) + "ll"] = x(1461) + x(992) + "s",
c[x(490)] = x(1461) + x(1510) + x(204),
c[x(985)] = x(1248) + x(1394),
c[x(2586) + x(988)] = x(1652) + x(2374) + "em",
c[x(1569) + x(2350)] = x(1583) + x(1636),
c[x(1205) + x(1810)] = x(2210) + x(1144),
c[x(851) + x(1790)] = x(2524) + x(2261),
c[x(1586) + x(1568)] = x(1800) + x(740),
c[x(633) + x(2510)] = x(922) + "e",
c[x(1984) + x(2021)] = x(2370) + x(1554),
c[x(1984) + x(1523)] = x(1187) + "e",
c[x(2112) + x(2095)] = x(1455) + "e",
c[x(894)] = x(2439) + x(1402) + "gy",
c[x(1672) + x(1561) + "ji"] = x(1305) + x(799),
c[x(1672) + x(671) + "n"] = x(2588) + x(464),
c[x(1672) + x(892)] = x(2592) + x(2256) + "l",
c[x(1672) + x(655) + x(2162)] = x(1983) + "l",
c[x(1672) + x(1970)] = x(2084) + "un",
c[x(599) + x(1098)] = x(1869),
c[x(2554) + x(1155) + x(2045)] = x(1260),
c[x(2554) + x(1155) + x(2237)] = x(2370) + x(1018),
c[x(1672) + x(1667) + "g"] = x(1719) + x(1873) + "er",
c[x(638) + x(1471)] = x(1081) + x(1311) + x(2566),
c[x(470) + x(2594)] = x(549) + "r}",
c[x(518) + x(2132)] = x(2574) + x(2314) + x(320) + x(1946) + x(1201) + x(1414) + x(2463),
c[x(1415) + x(2652)] = x(969) + x(2130) + x(1889) + x(1774) + x(288);
const U = c;
export {U as a, K as c};
