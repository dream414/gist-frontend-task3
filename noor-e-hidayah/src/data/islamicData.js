const records = [
[1,"Intentions","إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ","Actions are judged by intentions.","Har amal ka daromadar niyyat par hai.","Bukhari 1; Muslim 1907"],
[2,"Faith","أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ","Worship Allah as though you see Him.","Allah ki ibadat is tarah karo jaise tum use dekh rahe ho.","Muslim 8"],
[3,"Islam","بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ","Islam is built upon five pillars.","Islam ki bunyaad paanch arkaan par hai.","Bukhari 8; Muslim 16"],
[4,"Creation","إِنَّ أَحَدَكُمْ يُجْمَعُ خَلْقُهُ","This narration describes stages of human creation and destiny.","Insan ki paidaish mukhtalif marahil se guzarti hai.","Bukhari 3208; Muslim 2643"],
[5,"Sunnah","مَنْ أَحْدَثَ فِي أَمْرِنَا هَذَا","An introduced matter in religion that does not belong to it is rejected.","Deen mein apni taraf se nayi ibadat shamil karna durust nahi.","Bukhari 2697; Muslim 1718"],
[6,"Halal and Haram","إِنَّ الْحَلَالَ بَيِّنٌ","The lawful is clear and the unlawful is clear.","Halal aur haram wazeh hain; mashkook cheezon se bacho.","Bukhari 52; Muslim 1599"],
[7,"Sincerity","الدِّينُ النَّصِيحَةُ","Religion is sincere advice and goodwill.","Deen khair khwahi aur ikhlas ka naam hai.","Muslim 55"],
[8,"Faith","أُمِرْتُ أَنْ أُقَاتِلَ النَّاسَ","This narration addresses the testimony of faith and the protection of life and property.","Is riwayat mein shahadat aur us se mutalliq deeni ahkaam ka zikr hai.","Bukhari 25; Muslim 22"],
[9,"Obedience","فَإِذَا نَهَيْتُكُمْ عَنْ شَيْءٍ","Avoid what is forbidden and fulfil commands according to your ability.","Jis cheez se mana kiya jaye us se bacho aur hukm par apni istitaat ke mutabiq amal karo.","Bukhari 7288; Muslim 1337"],
[10,"Halal and Haram","إِنَّ اللَّهَ طَيِّبٌ","Allah is Pure and accepts only what is pure.","Allah Pak hai aur paak cheez hi qabool farmata hai.","Muslim 1015"],
[11,"Honesty","دَعْ مَا يُرِيبُكَ","Leave what makes you doubt for what does not make you doubt.","Shak wali cheez chhor kar yaqeen wali cheez ikhtiyar karo.","Tirmidhi 2518"],
[12,"Good Character","مِنْ حُسْنِ إِسْلَامِ الْمَرْءِ","Part of good Islam is leaving what does not concern you.","Achhe Musalman ki nishani hai ke woh bekaar baton se door rahe.","Tirmidhi 2317"],
[13,"Brotherhood","لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ","None of you truly believes until he loves for his brother what he loves for himself.","Apne bhai ke liye wohi pasand karo jo apne liye pasand karte ho.","Bukhari 13; Muslim 45"],
[14,"Justice","لَا يَحِلُّ دَمُ امْرِئٍ مُسْلِمٍ","This narration explains the sanctity of Muslim life and defined legal exceptions.","Is hadees mein insani jaan ki hurmat bayan hui hai.","Bukhari 6878; Muslim 1676"],
[15,"Good Character","فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ","Speak good or remain silent, honour neighbours and guests.","Achhi baat karo ya khamosh raho aur parosi aur mehman ki izzat karo.","Bukhari 6018; Muslim 47"],
[16,"Patience","لَا تَغْضَبْ","The Prophet advised: Do not become angry.","Gusse par qabu rakho aur ghusse mein ghalat kaam na karo.","Bukhari 6116"],
[17,"Kindness","إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ","Allah has prescribed excellence and kindness in everything.","Allah ne har kaam mein ihsan aur behtareen rawayye ka hukm diya hai.","Muslim 1955"],
[18,"Good Character","اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ","Be mindful of Allah wherever you are and treat people with good character.","Har jagah Allah se daro, neki karo aur logon se achha sulook rakho.","Tirmidhi 1987"],
[19,"Trust in Allah","احْفَظِ اللَّهَ يَحْفَظْكَ","Be mindful of Allah and He will protect you.","Allah ke ahkaam ki pabandi karo, Allah tumhari hifazat farmayega.","Tirmidhi 2516"],
[20,"Modesty","إِذَا لَمْ تَسْتَحْيِ فَاصْنَعْ مَا شِئْتَ","If you feel no shame, then do as you wish.","Haya insan ko burai se bachati hai.","Bukhari 6120"],
[21,"Faith","قُلْ آمَنْتُ بِاللَّهِ ثُمَّ اسْتَقِمْ","Say: I believe in Allah, then remain steadfast.","Allah par iman lao aur apne deen par mazbooti se qaim raho.","Muslim 38"],
[22,"Worship","أَرَأَيْتَ إِذَا صَلَّيْتُ الْمَكْتُوبَاتِ","The narration discusses obligatory prayer, fasting and lawful conduct.","Farz namaz, Ramadan ke roze aur halal haram ki pabandi karo.","Muslim 15"],
[23,"Purification","الطُّهُورُ شَطْرُ الْإِيمَانِ","Purification is half of faith. Prayer is light and patience is illumination.","Taharat iman ka aham hissa hai. Namaz noor aur sabr roshni hai.","Muslim 223"],
[24,"Mercy","يَا عِبَادِي إِنِّي حَرَّمْتُ الظُّلْمَ","Allah has forbidden injustice and made it forbidden among His servants.","Allah ne zulm ko haram qarar diya hai.","Muslim 2577"],
[25,"Charity","كُلُّ تَسْبِيحَةٍ صَدَقَةٌ","Remembering and glorifying Allah can be an act of charity.","SubhanAllah, Alhamdulillah aur Allahu Akbar kehna bhi sadqa hai.","Muslim 1006"],
[26,"Kindness","وَالْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ","A good word is charity. Helping others is also charity.","Achhi baat kehna aur doosron ki madad karna sadqa hai.","Bukhari 2989; Muslim 1009"],
[27,"Righteousness","الْبِرُّ حُسْنُ الْخُلُقِ","Righteousness is good character.","Neki achhe akhlaq ka naam hai.","Muslim 2553"],
[28,"Sunnah","فَعَلَيْكُمْ بِسُنَّتِي","Hold firmly to my Sunnah and the way of the rightly guided successors.","Meri Sunnat aur Khulafa-e-Rashideen ke tareeqe ko mazbooti se pakro.","Abu Dawud 4607; Tirmidhi 2676"],
[29,"Worship","رَأْسُ الْأَمْرِ الْإِسْلَامُ","The foundation is Islam, its pillar is prayer, and its highest part is striving in Allah's cause.","Deen ki bunyaad Islam hai aur us ka sutoon namaz hai.","Tirmidhi 2616"],
[30,"Obedience","إِنَّ اللَّهَ فَرَضَ فَرَائِضَ","Allah has established obligations, so do not neglect them or cross His limits.","Allah ke farz ada karo aur uski muqarrar hudood se aage na barho.","Daraqutni"],
[31,"Love of Allah","ازْهَدْ فِي الدُّنْيَا","Be detached from excessive attachment to this world.","Duniya ki hadd se zyada muhabbat aur lalach se bacho.","Ibn Majah 4102"],
[32,"Justice","لَا ضَرَرَ وَلَا ضِرَارَ","There should be neither harm nor reciprocating harm.","Na khud kisi ko nuqsan pohanchao aur na badle mein nuqsan do.","Ibn Majah 2340"],
[33,"Justice","الْبَيِّنَةُ عَلَى الْمُدَّعِي","Evidence is required from the claimant.","Daawa karne wale par daleel dena zaroori hai.","Bayhaqi"],
[34,"Good Deeds","مَنْ رَأَى مِنْكُمْ مُنْكَرًا","Whoever sees an evil should change it according to their ability.","Burai ko apni haisiyat aur ikhtiyar ke mutabiq rokne ki koshish karo.","Muslim 49"],
[35,"Brotherhood","لَا تَحَاسَدُوا وَلَا تَنَاجَشُوا","Do not envy, deceive or hate one another. Be brothers.","Hasad, dhoka aur nafrat se bacho aur bhai charay se raho.","Muslim 2564"],
[36,"Knowledge","وَمَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا","Whoever follows a path seeking knowledge, Allah makes a path to Paradise easy for them.","Jo ilm hasil karne ka raasta ikhtiyar karta hai Allah us ke liye Jannat ka raasta asaan karta hai.","Muslim 2699"],
[37,"Mercy","إِنَّ اللَّهَ كَتَبَ الْحَسَنَاتِ","Allah records good and bad deeds, and multiplies the reward of good deeds.","Allah neki aur burai likhta hai aur neki ka ajar kai guna barhata hai.","Bukhari 6491; Muslim 131"],
[38,"Love of Allah","مَنْ عَادَى لِي وَلِيًّا","Allah declares opposition to those who show enmity towards His devoted servants.","Allah ke nek bandon se dushmani rakhna bohat sakht mamla hai.","Bukhari 6502"],
[39,"Mercy","إِنَّ اللَّهَ تَجَاوَزَ لِي عَنْ أُمَّتِي","Allah has pardoned this nation for mistakes, forgetfulness and compulsion.","Allah ne meri ummat ki ghalti, bhool aur majboori par maafi ka zikr farmaya hai.","Ibn Majah 2045"],
[40,"Life","كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ","Be in this world like a stranger or a traveller passing through.","Duniya mein musafir ki tarah raho aur aakhirat ki tayyari karo.","Bukhari 6416"]
];

export const hadithData = records.map((item) => ({
  id: `h${item[0]}`,
  number: item[0],
  category: item[1],
  arabic: item[2],
  english: item[3],
  roman: item[4],
  reference: `Nawawi ${item[0]} | ${item[5]}`
}));

export const duaData = [
  {
    id: "d1",
    category: "Knowledge",
    title: "Dua for Knowledge",
    arabic: "رَبِّ زِدْنِي عِلْمًا",
    transliteration: "Rabbi zidni ilma",
    translation: "My Lord, increase me in knowledge.",
    reference: "Surah Taha 20:114"
  },
  {
    id: "d2",
    category: "Forgiveness",
    title: "Dua for Forgiveness",
    arabic: "رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
    transliteration: "Rabbana zalamna anfusana wa illam taghfir lana wa tarhamna lanakoonanna minal khasireen",
    translation: "Our Lord, we have wronged ourselves. If You do not forgive us and have mercy upon us, we will surely be among the losers.",
    reference: "Surah Al-A'raf 7:23"
  },
  {
    id: "d3",
    category: "Daily Dua",
    title: "Dua for Goodness",
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina adhaban-nar",
    translation: "Our Lord, give us good in this world and good in the Hereafter and protect us from the punishment of the Fire.",
    reference: "Surah Al-Baqarah 2:201"
  },
  {
    id: "d4",
    category: "Ease",
    title: "Dua for Ease",
    arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
    transliteration: "Rabbish rahli sadri wa yassir li amri",
    translation: "My Lord, expand for me my chest and ease for me my task.",
    reference: "Surah Taha 20:25–26"
  },
  {
    id: "d5",
    category: "Forgiveness",
    title: "Seeking Forgiveness",
    arabic: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ",
    transliteration: "Rabbighfir li wa tub alayya innaka antat-tawwabur-raheem",
    translation: "My Lord, forgive me and accept my repentance. You are the Accepter of repentance, the Merciful.",
    reference: "Dua wording; verify source before publication"
  },
  {
    id: "d6",
    category: "Morning Routine",
    title: "Dua After Waking Up",
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    transliteration: "Alhamdu lillahil-ladhi ahyana ba'da ma amatana wa ilayhin-nushur",
    translation: "All praise is for Allah who gave us life after causing us to die, and to Him is the resurrection.",
    reference: "Sahih al-Bukhari 6312"
  },
  {
    id: "d7",
    category: "Night Routine",
    title: "Dua Before Sleeping",
    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    transliteration: "Bismika Allahumma amutu wa ahya",
    translation: "In Your name, O Allah, I die and I live.",
    reference: "Sahih al-Bukhari 6324"
  },
  {
    id: "d8",
    category: "Daily Routine",
    title: "Dua Before Entering Bathroom",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
    transliteration: "Allahumma inni a'udhu bika minal-khubuthi wal-khaba'ith",
    translation: "O Allah, I seek refuge in You from male and female devils.",
    reference: "Sahih al-Bukhari 142; Sahih Muslim 375"
  },
  {
    id: "d9",
    category: "Daily Routine",
    title: "Dua After Leaving Bathroom",
    arabic: "غُفْرَانَكَ",
    transliteration: "Ghufranak",
    translation: "I seek Your forgiveness.",
    reference: "Sunan Abi Dawud 30"
  },
  {
    id: "d10",
    category: "Daily Routine",
    title: "Dua When Leaving Home",
    arabic: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    transliteration: "Bismillah, tawakkaltu alallah, wa la hawla wa la quwwata illa billah",
    translation: "In the name of Allah, I put my trust in Allah. There is no power or strength except through Allah.",
    reference: "Sunan Abi Dawud 5095; Jami at-Tirmidhi 3426"
  },
  {
    id: "d11",
    category: "Daily Routine",
    title: "Dua When Entering Home",
    arabic: "بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا",
    transliteration: "Bismillahi walajna, wa bismillahi kharajna, wa ala Allahi rabbina tawakkalna",
    translation: "In the name of Allah we enter, in the name of Allah we leave, and upon Allah our Lord we rely.",
    reference: "Sunan Abi Dawud 5096"
  },
  {
    id: "d12",
    category: "Worship",
    title: "Dua When Entering Mosque",
    arabic: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    transliteration: "Allahummaftah li abwaba rahmatik",
    translation: "O Allah, open for me the gates of Your mercy.",
    reference: "Sahih Muslim 713"
  },
  {
    id: "d13",
    category: "Worship",
    title: "Dua When Leaving Mosque",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
    transliteration: "Allahumma inni as'aluka min fadlik",
    translation: "O Allah, I ask You for Your bounty.",
    reference: "Sahih Muslim 713"
  },
  {
    id: "d14",
    category: "Purification",
    title: "Dua After Wudu",
    arabic: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    transliteration: "Ashhadu an la ilaha illallahu wahdahu la sharika lahu wa ashhadu anna Muhammadan abduhu wa rasuluh",
    translation: "I bear witness that there is no god but Allah alone, without partner, and I bear witness that Muhammad is His servant and Messenger.",
    reference: "Sahih Muslim 234"
  },
  {
    id: "d15",
    category: "Worship",
    title: "Dua After Adhan",
    arabic: "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلَاةِ الْقَائِمَةِ آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ",
    transliteration: "Allahumma rabba hadhihid-da'watit-tammah was-salatil-qa'imah, ati Muhammadanil-wasilata wal-fadilah, wab'athhu maqamam mahmudan alladhi wa'adtah",
    translation: "O Allah, Lord of this perfect call and established prayer, grant Muhammad the means and virtue, and raise him to the praised position You promised him.",
    reference: "Sahih al-Bukhari 614"
  },
  {
    id: "d16",
    category: "Travel",
    title: "Dua When Starting a Journey",
    arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ",
    transliteration: "Subhanalladhi sakhkhara lana hadha wa ma kunna lahu muqrinin wa inna ila rabbina lamunqalibun",
    translation: "Glory be to Him who has subjected this to us, and we could not have done it ourselves. Surely, to our Lord we will return.",
    reference: "Surah Az-Zukhruf 43:13–14"
  },
  {
    id: "d17",
    category: "Travel",
    title: "Dua When Riding a Vehicle",
    arabic: "بِسْمِ اللَّهِ وَالْحَمْدُ لِلَّهِ",
    transliteration: "Bismillahi walhamdu lillah",
    translation: "In the name of Allah, and all praise belongs to Allah.",
    reference: "Based on the Sunnah of beginning a journey; see Sahih Muslim 1342"
  },
  {
    id: "d18",
    category: "Weather",
    title: "Dua When It Rains",
    arabic: "اللَّهُمَّ صَيِّبًا نَافِعًا",
    transliteration: "Allahumma sayyiban nafi'an",
    translation: "O Allah, make it beneficial rain.",
    reference: "Sahih al-Bukhari 1032"
  },
  {
    id: "d19",
    category: "Weather",
    title: "Dua After Rain",
    arabic: "مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ",
    transliteration: "Mutirna bi fadlillahi wa rahmatih",
    translation: "We have been given rain by the grace and mercy of Allah.",
    reference: "Sahih al-Bukhari 846; Sahih Muslim 71"
  },
  {
    id: "d20",
    category: "Weather",
    title: "Dua During Strong Wind",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَأَعُوذُ بِكَ مِنْ شَرِّهَا",
    transliteration: "Allahumma inni as'aluka khayraha wa a'udhu bika min sharriha",
    translation: "O Allah, I ask You for its good and seek refuge in You from its evil.",
    reference: "Sunan Abi Dawud 5099"
  },
  {
    id: "d21",
    category: "Difficult Times",
    title: "Dua During Distress",
    arabic: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
    transliteration: "La ilaha illa anta subhanaka inni kuntu minaz-zalimin",
    translation: "There is no god but You. Glory be to You. Indeed, I was among the wrongdoers.",
    reference: "Surah Al-Anbiya 21:87"
  },
  {
    id: "d22",
    category: "Good Character",
    title: "Dua When Angry",
    arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    transliteration: "A'udhu billahi minash-shaytanir-rajim",
    translation: "I seek refuge in Allah from Satan, the accursed.",
    reference: "Sahih al-Bukhari 3282; Sahih Muslim 2610"
  },
  {
    id: "d23",
    category: "Good Manners",
    title: "Dua When Sneezing",
    arabic: "الْحَمْدُ لِلَّهِ",
    transliteration: "Alhamdulillah",
    translation: "All praise belongs to Allah.",
    reference: "Sahih al-Bukhari 6224"
  },
  {
    id: "d24",
    category: "Daily Routine",
    title: "Dua When Wearing New Clothes",
    arabic: "اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ كَسَوْتَنِيهِ أَسْأَلُكَ خَيْرَهُ وَخَيْرَ مَا صُنِعَ لَهُ وَأَعُوذُ بِكَ مِنْ شَرِّهِ وَشَرِّ مَا صُنِعَ لَهُ",
    transliteration: "Allahumma lakal-hamdu anta kasawtanihi, as'aluka khayrahu wa khayra ma suni'a lahu, wa a'udhu bika min sharrihi wa sharri ma suni'a lah",
    translation: "O Allah, all praise is Yours. You have clothed me with it. I ask You for its good and the good for which it was made, and I seek refuge in You from its evil and the evil for which it was made.",
    reference: "Sunan Abi Dawud 4020; Jami at-Tirmidhi 1767"
  },
  {
    id: "d25",
    category: "Daily Routine",
    title: "Dua at the End of a Gathering",
    arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ",
    transliteration: "Subhanaka Allahumma wa bihamdika, ashhadu an la ilaha illa anta, astaghfiruka wa atubu ilayk",
    translation: "Glory and praise be to You, O Allah. I bear witness that there is no god but You. I seek Your forgiveness and repent to You.",
    reference: "Sunan Abi Dawud 4859; Jami at-Tirmidhi 3433"
  },
  {
    id: "d26",
    category: "Daily Life",
    title: "Dua Before Eating",
    arabic: "بِسْمِ اللَّهِ",
    transliteration: "Bismillah",
    translation: "Allah ke naam se shuru karta hoon.",
    reference: "Sahih al-Bukhari 5376; Sahih Muslim 2022"
  },
  {
    id: "d27",
    category: "Daily Life",
    title: "Dua Before Drinking Water",
    arabic: "بِسْمِ اللَّهِ",
    transliteration: "Bismillah",
    translation: "Allah ke naam se.",
    reference: "Bismillah keh kar peene ki hidayat; khane se pehle Bismillah ki hadith: Sahih Muslim 2022"
  },
  {
    id: "d28",
    category: "Daily Life",
    title: "Dua Upon Seeing the New Moon",
    arabic: "اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْيُمْنِ وَالْإِيمَانِ وَالسَّلَامَةِ وَالْإِسْلَامِ، رَبِّي وَرَبُّكَ اللَّهُ",
    transliteration: "Allahumma ahillahu alayna bil-yumni wal-eemani was-salamati wal-Islam, Rabbi wa Rabbuk Allah.",
    translation: "Aye Allah! Is chand ko hum par barkat, iman, salamati aur Islam ke saath nikhal. Mera aur tumhara Rab Allah hai.",
    reference: "Jami at-Tirmidhi 3451"
  },
  {
    id: "d29",
    category: "Morning & Evening",
    title: "Morning Dua",
    arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
    transliteration: "Allahumma bika asbahna wa bika amsayna wa bika nahya wa bika namutu wa ilaykan-nushur.",
    translation: "Aye Allah! Teri hi madad se humne subah ki, Teri hi madad se shaam karte hain, Teri hi madad se jeete aur marte hain, aur Teri hi taraf dobara uth kar jana hai.",
    reference: "Sunan Abi Dawud 5068; Jami at-Tirmidhi 3391"
  },
  {
    id: "d30",
    category: "Morning & Evening",
    title: "Evening Dua",
    arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ",
    transliteration: "Allahumma bika amsayna wa bika asbahna wa bika nahya wa bika namutu wa ilaykal-masir.",
    translation: "Aye Allah! Teri hi madad se humne shaam ki, Teri hi madad se subah karte hain, Teri hi madad se jeete aur marte hain, aur Teri hi taraf laut kar jana hai.",
    reference: "Sunan Abi Dawud 5068; Jami at-Tirmidhi 3391"
  },
  {
    id: "d31",
    category: "Daily Life",
    title: "Dua Before Starting a Task",
    arabic: "رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي",
    transliteration: "Rabbish-rah li sadri, wa yassir li amri.",
    translation: "Aye mere Rab! Mera seena khol de aur mera kaam mere liye aasan farma de.",
    reference: "Quran, Surah Taha 20:25–26"
  },
  {
    id: "d32",
    category: "Study & Exams",
    title: "Dua for Ease and Success in Exams",
    arabic: "اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا",
    transliteration: "Allahumma la sahla illa ma ja'altahu sahla, wa anta taj'alul-hazna idha shi'ta sahla.",
    translation: "Aye Allah! Koi kaam aasan nahi siwaye uske jise Tu aasan bana de, aur Tu chahe to mushkil ko bhi aasan bana deta hai.",
    reference: "Sahih Ibn Hibban; Hisn al-Muslim 139"
  },
  {
    id: "d33",
    category: "Study & Exams",
    title: "Dua for Knowledge",
    arabic: "رَبِّ زِدْنِي عِلْمًا",
    transliteration: "Rabbi zidni ilma.",
    translation: "Aye mere Rab! Mere ilm mein izafa farma.",
    reference: "Quran, Surah Taha 20:114"
  },
    {
    id: "d34",
    category: "Supplication",
    title: "Dua by Allah's Greatest Name",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ بِأَنِّي أَشْهَدُ أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ الْأَحَدُ الصَّمَدُ الَّذِي لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
    transliteration: "Allahumma inni as'aluka bi anni ashhadu annaka antallahu la ilaha illa anta al-ahadus-samad, alladhi lam yalid wa lam yulad wa lam yakun lahu kufuwan ahad.",
    translation: "O Allah, I ask You by my testimony that You are Allah, there is no god except You, the One, the Eternal Refuge, who neither begets nor is born, and there is none comparable to Him.",
    reference: "Jami at-Tirmidhi 3475; Sunan Abi Dawud 1493"
  },
  {
    id: "d35",
    category: "Provision & Blessings",
    title: "Dua for Rizq and Goodness",
    arabic: "رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
    transliteration: "Rabbi inni lima anzalta ilayya min khayrin faqir.",
    translation: "My Lord, indeed I am in need of whatever good You send down to me.",
    reference: "Quran, Surah Al-Qasas 28:24"
  },
  {
    id: "d36",
    category: "Protection & Trust",
    title: "Dua for Trust and Protection in Allah",
    arabic: "حَسْبِيَ اللَّهُ وَنِعْمَ الْوَكِيلُ",
    transliteration: "Hasbiyallahu wa ni'mal-wakeel.",
    translation: "Allah is sufficient for me, and He is the best disposer of affairs.",
    reference: "Related Quranic wording: Surah Aal-e-Imran 3:173"
  },
  {
    id: "d37",
    category: "Distress & Help",
    title: "Dua for Help and Relief from Allah",
    arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ",
    transliteration: "Ya Hayyu Ya Qayyumu bi rahmatika astagheeth.",
    translation: "O Ever-Living, O Sustainer of all, I seek help through Your mercy.",
    reference: "Jami at-Tirmidhi 3524"
  }


];