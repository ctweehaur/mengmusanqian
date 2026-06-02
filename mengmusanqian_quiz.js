const quizQuestions = [
    {
        id: 1,
        text: "下列句子中，加点字“去”的含义解释正确的是？",
        py: "xià liè jù zǐ zhōng jiā diǎn zì qù de hán yì jiě shì zhèng què de shì",
        en: "Which of the following explains the meaning of 'qù' in the text correctly?",
        options: [
            {
                text: "前往、到某个地方去",
                py: "qián wǎng dào mǒu gè dì fāng qù",
                en: "To go to a certain place.",
                correct: false,
                explanation: "错误。在古汉语中，“去”的基本义通常是“离开”，而不是现代汉语的“前往”。",
                explanationPy: "cuò wù zài gǔ dài hàn yǔ zhōng qù de jī běn yì tōng cháng shì lí kāi ér bú shì xiàn dài hàn yǔ de qián wǎng",
                explanationEn: "Incorrect. In classical Chinese, 'qu' primarily means 'to leave', opposite to its common modern usage of 'going to'.",
                en: "To head towards"
            },
            {
                text: "离开、离去",
                py: "lí kāi lí qù",
                en: "To leave or depart from a place.",
                correct: true,
                explanation: "正确！“乃去”的意思是“于是他们离开了那个地方”，这里的“去”表示离开。",
                explanationPy: "zhèng què nǎi qù de yì si shì yú shì tā men lí kāi le nà gè dì fāng zhè lǐ de qù biǎo shì lí kāi",
                explanationEn: "Correct! 'Nai qu' translates to 'then they left'. In this context, 'qu' functions as a verb meaning to leave or depart.",
                en: "To leave or depart"
            },
            {
                text: "去除、消灭",
                py: "qù chú xiāo miè",
                en: "To eliminate or get rid of.",
                correct: false,
                explanation: "错误。搬家的语境中，不可能指去除或者消灭空间。",
                explanationPy: "cuò wù bān jiā de yǔ jìng zhōng bù kě néng zhǐ qù chú huò zhě xiāo miè kōng jiān",
                explanationEn: "Incorrect. In the context of moving houses, it cannot mean to eliminate or erase.",
                en: "To eliminate"
            },
            {
                text: "失去、丧失",
                py: "shī qù sàng shī",
                en: "To lose or be deprived of.",
                correct: false,
                explanation: "错误。文中指的是空间的移动，不是指丢失了某样物品。",
                explanationPy: "cuò wù wén zhōng zhǐ de shì kōng jiān de yí dòng bú shì zhǐ diū shī le mǒu yàng wù pǐn",
                explanationEn: "Incorrect. The phrase implies physical relocation, not losing a possession.",
                en: "To lose"
            }
        ]
    },
    {
        id: 2,
        text: "文中“此非所以居子也”中的“所以”在这里是什么意思？",
        py: "wén zhāng zhōng cǐ fēi suǒ yǐ jū zǐ yě zhōng de suǒ yǐ zài zhè lǐ shì shén me yì si",
        en: "What does the phrase 'suǒ yǐ' mean in 'cǐ fēi suǒ yǐ jū zǐ yě'?",
        options: [
            {
                text: "表因果关系的连词（因为……所以）",
                py: "biǎo yīn guǒ guān xì de lián cí",
                en: "A conjunction indicating cause and effect (therefore).",
                correct: false,
                explanation: "错误。在古汉语中，“所以”很少用作现代汉语的因果连词，它是由代词“所”和介词“以”结合的特殊结构。",
                explanationPy: "cuò wù zài gǔ dài hàn yǔ zhōng suǒ yǐ hěn shǎo yòng zuò xiàn dài hàn yǔ de yīn guǒ lián cí tā shì yóu dài cí suǒ hé jiè cí yǐ jié hé de tè shū jié gòu",
                explanationEn: "Incorrect. In classical Chinese, 'suoyi' rarely functions as a modern causal conjunction; it is a special pronominal structure.",
                en: "Conjunction meaning 'therefore'"
            },
            {
                text: "用来……的地方、用来……的办法",
                py: "yòng lái ... de dì fāng yòng lái ... de bàn fǎ",
                en: "The place to... or the method by which...",
                correct: true,
                explanation: "正确！在这里“所以”和后面的动词“居”结合，表示“用来居住、安置（孩子）的地方”。",
                explanationPy: "zhèng què zài zhè lǐ suǒ yǐ hé hòu miàn de dòng cí jū jié hé biǎo shì yòng lái jū zhù ān zhì hái zǐ de dì fāng",
                explanationEn: "Correct! Combined with the verb 'ju' (to live/raise), it indicates 'the place by which to settle or raise (the child)'.",
                en: "The place where or means by which"
            },
            {
                text: "真实的情况、实情",
                py: "zhēn shí de qíng kuàng shí qíng",
                en: "The actual situation or facts.",
                correct: false,
                explanation: "错误。这个含义不符合孟母评价居住环境好坏的语言语境。",
                explanationPy: "cuò wù zhè gè hán yì bù fú hé mèng mǔ píng jià jū zhù huán jìng hǎo huài de yǔ yán yǔ jìng",
                explanationEn: "Incorrect. This definition does not fit the context of assessing a residential environment.",
                en: "The actual facts"
            },
            {
                text: "所有的、全部的物品",
                py: "suǒ yǒu de quán bù de wù pǐn",
                en: "All or everything.",
                correct: false,
                explanation: "错误。古汉语中没有这种代词用法。",
                explanationPy: "cuò wù gǔ dài hàn yǔ zhōng méi yǒu zhè zhǒng dài cí yòng fǎ",
                explanationEn: "Incorrect. Classical Chinese does not feature such a pronominal usage for this phrase.",
                en: "All possessions"
            }
        ]
    },
    {
        id: 3,
        text: "根据课文，孟子在居住在集市旁（市旁）的时候，模仿了什么行为？",
        py: "gēn jù kè wén mèng zǐ zài jū zhù zài shì páng de shí hòu mó fǎng le shén me xíng wéi",
        en: "According to the text, what behavior did Mencius imitate when living near the market?",
        options: [
            {
                text: "官员跪拜行礼的规矩",
                py: "guān yuán guì bài xíng lǐ de guī jǔ",
                en: "The kneeling and bowing rituals of officials.",
                correct: false,
                explanation: "错误。这是孟子最后搬到学校（学宫）旁边时才模仿的行为。",
                explanationPy: "cuò wù zhè shì mèng zǐ zuì hòu bān dào xué xiào páng biān shí cái mó fǎng de xíng wéi",
                explanationEn: "Incorrect. This was the behavior Mencius imitated only after they finally moved next to the academy.",
                en: "Rituals of state officials"
            },
            {
                text: "大声哭泣和举办葬礼",
                py: "dà shēng kū qì hé jǔ bàn zàng lǐ",
                en: "Wailing loudly and arranging funerals.",
                correct: false,
                explanation: "错误。这是他住在坟墓（墓）旁边时的游戏行为。",
                explanationPy: "cuò wù zhè shì tā zhù zài fén mù páng biān shí de yóu xì xíng wéi",
                explanationEn: "Incorrect. This was the game he played when they lived adjacent to the cemetery.",
                en: "Wailing and holding funerals"
            },
            {
                text: "像商人一样沿街夸耀和叫卖货物",
                py: "xiàng shāng rén yī yàng yán jiē kuā yào hé jiào mài huò wù",
                en: "Like a merchant, bragging and advertising goods on the street.",
                correct: true,
                explanation: "正确！文中写到他搬到市旁后，“嬉为贾人炫卖之事”，贾人就是商人，炫卖就是叫卖。",
                explanationPy: "zhèng què wén zhāng zhōng xiě dào tā bān dào shì páng hòu xī wéi gǔ rén xuàn mài zhī shì gǔ rén jiù shì shāng rén xuàn mài jiù ... jiào mài",
                explanationEn: "Correct! The text states that near the market, he played at 'xuàn mài' like a merchant, which means advertising and selling items.",
                en: "Advertising and selling like a merchant"
            },
            {
                text: "宰杀牲畜和做肉类买卖",
                py: "zǎi shā shēng chù hé zuò ròu lèi mǎi mài",
                en: "Slaughtering animals and trading meat products.",
                correct: false,
                explanation: "错误。这是他住在屠宰场（屠）旁边时学做的事情。",
                explanationPy: "cuò wù zhè shì tā zhù zài tú zǎi chǎng páng biān shí xué zuò de shì qíng",
                explanationEn: "Incorrect. This was what he picked up while living near the slaughterhouse.",
                en: "Slaughtering and selling meat"
            }
        ]
    },
    {
        id: 4,
        text: "孟母最后决定长期定居在学宫旁边的主要原因是什么？",
        py: "mèng mǔ zuì hòu jué dìng cháng qī dìng jū zài xué gōng páng biān de zhǔ yào yuán yīn shì shén me",
        en: "What was the main reason Mencius's mother finally decided to settle near the academy?",
        options: [
            {
                text: "因为那里的房子比集市和屠宰场的更便宜",
                py: "yīn wèi nà lǐ de fáng zǐ bǐ jí shì hé tú zǎi chǎng de gèng pián yí",
                en: "Because houses there were cheaper than those near the market and slaughterhouse.",
                correct: false,
                explanation: "错误。文中完全没有提及房租或房价等经济因素，孟母搬家唯一的考量是教育环境。",
                explanationPy: "cuò wù wén zhāng zhōng wán quán méi yǒu tí jí fáng zū huò fáng jià děng jīng jì yīn sù mèng mǔ bān jiā wéi yī de kǎo liáng ... jiào yù huán jìng",
                explanationEn: "Incorrect. Financial aspects are completely absent from the text; her sole consideration was the educational environment.",
                en: "The housing prices were cheaper"
            },
            {
                text: "因为她希望孟子多结识朝廷的高官富商",
                py: "yīn wèi tā xī wàng mèng zǐ duō jié shí cháo tíng de gāo guān fù shāng",
                en: "Because she wished for Mencius to network with high officials and rich merchants.",
                correct: false,
                explanation: "错误。孟母是为了让孟子习得正统的礼仪与学问，不是为了追求名利和结交权贵。",
                explanationPy: "cuò wù mèng mǔ shì wèi le ràng mèng zǐ xí dé zhèng tǒng de lǐ yí yǔ xué wèn bú shì wèi le zhuī qiú míng lì hé jié jiāo quán guì",
                explanationEn: "Incorrect. She aimed for him to absorb refined etiquette and academic values, not to chase fame or powerful contacts.",
                en: "To network with high officials"
            },
            {
                text: "因为孟子在那里开始模仿学习文雅的礼仪和规矩",
                py: "yīn wèi mèng zǐ zài nà lǐ kāi shǐ mó fǎng xué xí wén yǎ de lǐ yí hé guī jǔ",
                en: "Because Mencius began to imitate and learn refined etiquette and rules there.",
                correct: true,
                explanation: "正确！孟子在学宫旁见到了官员的行礼跪拜、揖让进退并“一一习记”，孟母认为这才是教育孩子的真正好环境。",
                explanationPy: "zhèng què mèng zǐ zài xué gōng páng jiàn dào le guān yuán de xíng lǐ guì bài yī ràng jìn tuì bìng yī yī xí jì mèng mǔ rèn wéi zhè cái shì jiào yù hái zǐ de zhēn zhèng hǎo huán jìng",
                explanationEn: "Correct! Mencius observed and copied the respectful bows and structural codes of the academy, convincing her it was the perfect environment.",
                en: "Mencius learned polite etiquette there"
            },
            {
                text: "因为有很多亲戚朋友也都居住在学校附近",
                py: "yīn wèi yǒu hěn duō qīn qī péng yǒu yě dōu jū zhù zài xué xiào fù jìn",
                en: "Because many of their relatives and friends also resided near the school.",
                correct: false,
                explanation: "错误。孟母是在丈夫去世后独自带孩子连续搬家，没有任何亲戚和熟人的干扰因素。",
                explanationPy: "cuò wù mèng mǔ shì zài fù qīn qù shì hòu dú zì dài hái zǐ lián xù bān jiā méi yǒu rèn hé qīn qī hé shú rén de gān rǎo yīn sù",
                explanationEn: "Incorrect. She relocated systematically on her own after her husband's demise, unaffected by family or acquaintances.",
                en: "Many relatives lived nearby"
            }
        ]
    },
    {
        id: 5,
        text: "通过孟母连续搬迁四次地点的经历，主要传达了什么教育道理？",
        py: "tōng guò mèng mǔ lián xù bān qiān sì cì dì diǎn de jīng lì zhǔ yào chuán dá le shén me jiào yù dào lǐ",
        en: "What educational principle does the narrative of moving across four distinct locations convey?",
        options: [
            {
                text: "孩子小的时候应该多换地方玩耍，增长见识",
                py: "hái zǐ xiǎo de shí hòu yīng gāi duō huàn dì fāng wán shuǎ zēng zhǎng jiàn shí",
                en: "Children should change environments often to play and widen their horizons.",
                correct: false,
                explanation: "错误。频繁换地方是为了摆脱不良风气的影响，而不是为了让孩子到处去玩耍娱乐。",
                explanationPy: "cuò wù pín fán huàn dì fāng shì wèi le bǎi tuō bù liáng fēng qì de yǐng xiǎng bú ... ràng hái zǐ dào chù qù wán shuǎ yú lè",
                explanationEn: "Incorrect. Moving frequently was done to escape toxic social impacts, not to encourage nomadic playtime.",
                en: "Children should play in varied places"
            },
            {
                text: "环境对孩子的习惯和思想成长有关键的引导作用",
                py: "huán jìng duì hái zǐ de xí guàn hé sī xiǎng chéng zhǎng yǒu guān jiàn de yǐn dǎo zuò yòng",
                en: "The environment plays a pivotal guiding role in a child's habits and mindset.",
                correct: true,
                explanation: "正确！故事里孟子住什么地方就学什么行为，充分证明了近朱者赤、近墨者黑，环境对孩子的教育非常关键。",
                explanationPy: "zhèng què gù shì lǐ mèng zǐ zhù shén me dì fāng jiù xué shén me xíng wéi chōng fèn zhèng míng le jìn zhū zhě chì jìn mò zhě hēi huán jìng duì hái zǐ de jiào yù fēi cháng guān jiàn",
                explanationEn: "Correct! Mencius's rapid imitation of whatever was near demonstrates that structural settings deeply anchor a child's early character development.",
                en: "Environment critically shapes a child's growth"
            },
            {
                text: "单亲家庭的孩子比一般家庭的孩子更难管教",
                py: "dān qīn jiā tíng de hái zǐ bǐ yī bān jiā tíng de hái zǐ gèng nán guǎn jiào",
                en: "Children from single-parent families are more difficult to discipline than others.",
                correct: false,
                explanation: "错误。故事旨在赞扬孟母高超的教育智慧和孟子最终成才，绝非在表达单亲家庭的负面成见。",
                explanationPy: "cuò wù gù shì zhǐ zài zàn yáng mèng mǔ gāo cháo de jiào yù zhì huì hé mèng zǐ zuì hòu chéng cái jué fēi zài biǎo dá dān qīn jiā tíng de fù miàn chéng jiàn",
                explanationEn: "Incorrect. The story values maternal dedication and Mencius's later scholarly success, not single-parent stereotypes.",
                en: "Single-parent children are hard to discipline"
            },
            {
                text: "做买卖和做生意是古代社会地位最低下的工作",
                py: "zuò mǎi mài hé zuò shēng yì shì gǔ dài shè huì dì wèi zuì dī xià de gōng zuò",
                en: "Trading and running businesses were the lowest status jobs in ancient society.",
                correct: false,
                explanation: "错误。虽然古代有重农抑商观念，但孟母搬迁集市和屠场只是因为这些地方吵闹、行为市侩，不适合当时小孟子的启蒙教育，而非单纯批判职业高低。",
                explanationPy: "cuò wù suī rán gǔ dài yǒu zhòng nóng yì shāng guān niàn dàn mèng mǔ bān qiān jí shì hé tú chǎng zhǐ shì yīn wèi zhè xiē dì fāng chǎo nào xíng wéi shì kuài bú shì hé dāng shí xiǎo mèng zǐ de qǐ méng jiào yù ér fēi chān chún pī pàn zhí yè gāo dī",
                explanationEn: "Incorrect. She relocated away from markets because the environment was too rowdy and worldly for basic early upbringing, not as a purely vocational critique.",
                en: "Trading was the lowest-ranked occupation"
            }
        ]
    }
];
