/**
 * 互动古文教学平台 - 简答题特训专属题库 (大马中学完全对齐版)
 */

const shortQData = [
    {
        id: "Q1",
        qZh: "在搬到学校旁边之前，孟母一共带孟子搬过几次家？他们分别住过哪些地方的旁边？",
        qPy: "zài bān dào xué xiào páng biān zhī qián mèng mǔ yī gòng dài mèng zǐ bān guò jǐ cì jiā tā men fēn bié zhù guò nǎ xiē dì fāng de páng biān",
        qEn: "Before moving next to the school, how many times did Mencius's mother move their home? What places did they live near respectively?",
        sZh: [
            "1. 算出搬到学宫前搬家的总次数。",
            "2. 按照文章的前后顺序，依次列出前三个居住地点的名字。"
        ],
        sPy: [
            "suàn chū bān dào xué gōng qián bān jiā de zǒng cì shù",
            "àn zhào wén zhāng de qián hòu shùn xù yī cì liè chū qián sān gè jū zhù dì diǎn de míng zì"
        ],
        sEn: "Step 1: Calculate the total number of moves before the final location.<br>Step 2: List the names of the first three locations in chronological order.",
        aZh: "一共搬过三次家。他们先后居住在坟墓旁边、集市旁边以及屠宰场附近。",
        aPy: "yī gòng bān guò sān cì jiā tā men xiān hòu jū zhù zài fén mù páng biān jí shì páng biān yǐ jí tú zǎi chǎng fù jìn",
        aEn: "She moved their home three times. They lived near a cemetery, beside a marketplace, and close to a slaughterhouse respectively."
    },
    {
        id: "Q2",
        qZh: "当他们住在第一个地方时，小小的孟子天天都在模仿和玩些什么事情？",
        qPy: "dāng tā men zhù zài dì yī gè dì fāng shí xiǎo xiǎo de mèng zǐ tiān tiān dōu zài mó fǎng hé wán xiē shén me shì qíng",
        qEn: "When they lived at the first location near the cemetery, what did the young Mencius imitate and play at every day?",
        sZh: [
            "1. 找到课文中第一部分的关键词句。",
            "2. 用直白的白话文翻译出这些玩耍和模仿的具体丧葬行为。"
        ],
        sPy: [
            "zhǎo chū kè wén zhōng dì yī bù fèn de guān jiàn cí jù",
            "yòng zhí bái de bái huà wén fān yì chū zhè xiē wán shuǎ hé mó fǎng de jù tǐ xíng wéi"
        ],
        sEn: "Step 1: Locate the key words in the first segment of the text.<br>Step 2: Translate these specific funeral actions into clear modern prose.",
        aZh: "孟子天天都在模仿和学习举办丧礼的事情，玩耍着捶胸拍大腿、因悲痛而跳跃以及伤心痛哭的游戏。",
        aPy: "mèng zǐ tiān tiān dōu zài mó fǎng hé xué xí jǔ bàn sāng lǐ de shì qíng wán shuǎ zhe chuí xiōng pāi dà tuǐ yīn bēi tòng ér tiào yuè yǐ jí shāng xīn tòng kū de yۆu xì",
        aEn: "Mencius practiced and imitated funeral rituals every day, playing games that involved beating his chest, stamping his feet in symbolic mourning, and crying loudly."
    },
    {
        id: "Q3",
        qZh: "每当孟子开始模仿周围人的不好行为时，孟母都会说同一句话。请写出这句话并说明孟母当时的担忧是什么？",
        qPy: "měi dāng mèng zǐ kāi shǐ mó fǎng zhōu bián rén de bù hǎo xíng wéi shí mèng mǔ dōu huì shuō tóng yī jù huà qǐng xiě chū zhè jù huà bìng shuō míng mèng mǔ dāng shí de dān yōu shì shén me",
        qEn: "Whenever Mencius imitated bad habits around him, his mother repeated the same remark. Please write down this sentence and explain her concern.",
        sZh: [
            "1. 从课文中提取出孟母反复说的那句原话。",
            "2. 结合大马中学要求，直白说明她担心环境会带坏孩子、影响孩子的思想和前途。"
        ],
        sPy: [
            "cóng kè wén zhōng tí qǔ chū mèng mǔ fǎn fù shuō de nà jù yuán huà",
            "jié hé dà mǎ zhōng xué yào qiú zhí bái shuō míng tā dān yān huán jìng huì dài huài hái zǐ yǐng xiǎng hái zǐ de sī xiǎng hé qián tú"
        ],
        sEn: "Step 1: Extract the repetitive comment made by Mencius's mother from the text.<br>Step 2: Clearly explain her worry that the environment might misguide her child's mindset.",
        aZh: "孟母说：“这里不是用来安置和抚养孩子居住的地方。”她当时的担忧是这些市侩、吵闹或者悲伤的环境会带坏幼小的孟子，让他养成不好的生活习惯，无法专心学习有用的学问。",
        aPy: "mèng mǔ shuō zhè lǐ bú shì yòng lái ān zhì hé fǔ yǎng hái zǐ jū zhù de dì fāng tā dāng shí de dān yōu shì zhè xiē shì kuài chǎo nào huò zhě bēi shāng de huán jìng huì dài huài yòu xiǎo de mèng zǐ ràng tā yǎng chéng bù hǎo de shēng huó xí guàn wú fǎ zhuān xīn xué xí yǒu yòng de xué wèn",
        aEn: "She said, 'This is not the proper place to raise my child.' Her worry was that these worldly, rowdy, or depressing surroundings would influence young Mencius negatively, causing him to form bad habits instead of focusing on valuable learning."
    },
    {
        id: "Q4",
        qZh: "最后搬到学校旁边后，孟子见到了什么场景？他接着怎么做？",
        qPy: "zuì hòu bān dào xué xiào páng biān hòu mèng zǐ jiàn dào le shén me chǎng jǐng tā jiē zhe zěn me zuò",
        qEn: "After finally moving next to the academy, what scene did Mencius witness? What did he do next?",
        sZh: [
            "1. 筛选出孟子在学宫旁见到的官员入文庙行礼跪拜、揖让进退的场景信息。",
            "2. 说明孟子的反应和做法。"
        ],
        sPy: [
            "shāi xuǎn chū mèng zǐ zài xué gōng páng jiàn dào de guān yuán rù wén miào xíng lǐ guì bài yī ràng jìn tuì de chǎng jǐng xìn xī",
            "shuō míng mèng zǐ de fǎn yìng hé zuò fǎ"
        ],
        sEn: "Step 1: Filter the text details regarding the officials entering the temple to perform structural ceremonies.<br>Step 2: Clarify Mencius's response and actions.",
        aZh: "孟子看到官员们在初一和十五进入文庙，举行祭祀礼仪、下跪磕头、并互相拱手谦让和进退。孟子见了这些优雅的礼节后，把它们全都一个一个地模仿练习并牢记在心里。",
        aPy: "mèng zǐ kàn dào guān yuán men zài chū yī hé shí wǔ jìn rù wén miào jǔ xíng jì sì lǐ yí xià guì kē tóu bìng hù xiāng gǒng shǒu qiān ràng hé jìn tuì mèng zǐ jiàn le zhè xiē yōu yǎ de lǐ jié hòu bǎ tā men quán dōu yī yī mó fǎng liàn xí bìng láo jì zài xīn lǐ",
        aEn: "Mencius saw officials entering the temple on the 1st and 15th to conduct state ceremonies, kneeling, bowing, and practicing polite codes. Upon seeing this, he meticulously copied and memorized every single movement."
    },
    {
        id: "Q5",
        qZh: "读完《孟母三迁》这个经典故事，大马中学生能够从中得到什么重要的生活启示？",
        qPy: "dú wán mèng mǔ sān qiān zhè gè jīng diǎn gù shì dà mǎ zhōng xué shēng néng gòu cóng zhōng dé dào shén me zhòng yào de shēng huó qǐ shì",
        qEn: "After reading the classic story of 'Mencius's Mother Moving Three Times', what important life lesson can Malaysian secondary school students learn?",
        sZh: [
            "1. 用简单直接的语言提炼核心教训，说明环境的影响。",
            "2. 给学生提出实际行动建议。"
        ],
        sPy: [
            "yòng jiǎn dān zhí jiē de yǔ yán tí liàn hé xīn jiào xù shuō míng huán jìng de yǐng xiǎng",
            "gěi xué shēng tí chū shí jì xíng dòng jiàn yì"
        ],
        sEn: "Step 1: Summarize the core lesson in simple words regarding the immense impact of our surroundings.<br>Step 2: Provide a practical suggestion for students to choose good friends and stay clear of toxic habits.",
        aZh: "启示我们周围的环境和朋友对我们的行为习惯有极大的影响。作为中学生，我们在日常生活中应该自觉远离不好的娱乐场所和不良少年，多结交积极向上的好朋友，共同创造一个良好的学习和成长环境。",
        aPy: "qǐ shì wǒ men zhōu wéi de huán jìng hé péng yǒu duì wǒ men de xíng wéi xí guàn yǒu jí dà de yǐng xiǎng zuò wéi zhōng xué shēng wǒ men zài rì cháng shēng huó zhōng yīng gāi zì jué yuǎn lí bù hǎo de yú lè chǎng suǒ hé bù liáng shào nián duō jié jiāo jī jí xiàng shàng de hǎo péng yǒu gòng tóng chuàng zào yī gè liáng hǎo de xué xí hé chéng zhǎng huán jìng",
        aEn: "It teaches us that our surroundings and the peers we mix with heavily impact our habits. As secondary school students, we should proactively stay away from unwholesome environments, choose friends who inspire us positively, and build a good environment together."
    }
];
