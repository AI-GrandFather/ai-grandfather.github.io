'use strict';

const english = [
  'Merge Jar: Drop Puzzle',
  'Cute & Relaxing Physics Game',
  'Drop, match and merge cute characters in 8 satisfying and relaxing modes.',
  `Drop, match, merge and discover something bigger!

Welcome to Merge Jar, a colorful and satisfying physics-based puzzle game where every drop brings a new possibility. Combine identical objects, discover adorable characters and challenge yourself to create the ultimate merge without overflowing the jar.

Easy to learn but challenging to master, Merge Jar combines relaxing gameplay, clever strategy and satisfying transformations in one delightful experience.

8 UNIQUE GAME MODES

Explore a variety of beautifully designed worlds, including juicy fruits, colorful vegetables, sparkling gems, delicious cakes, adorable fluffy animals, vehicles and fascinating ocean creatures. Each mode offers its own visual style, merge combinations and exciting discoveries.

SIMPLE TO PLAY, CHALLENGING TO MASTER

- Drop objects into the jar.
- Match identical items to create bigger ones.
- Plan your moves and manage the available space.
- Discover new characters and reach exciting milestones.
- Challenge yourself to beat your best score.

FEATURES YOU'LL LOVE

- 8 unique and entertaining game modes.
- Adorable characters and colorful artwork.
- Satisfying physics-based merging mechanics.
- Challenging levels and rewarding progression.
- Helpful power-ups to overcome tricky situations.
- Daily rewards and exciting bonuses.
- Smooth animations and satisfying merge effects.
- Relaxing gameplay with plenty of strategic depth.

Whether you love fruit merging games, cute animal puzzles, brain teasers or satisfying casual games, Merge Jar offers a delightful experience for every mood.

Take a break, challenge your brain and enjoy the magic of merging.

How big can your next merge be?

Download Merge Jar and start your merging adventure today!`,
];

const translations = [
  ['es-419', 'Español (Latinoamérica)', 'Merge Jar: Combina y deja caer', 'Puzle de física relajante', 'Deja caer y combina personajes adorables en 8 modos relajantes.',
   `¡Deja caer, combina y descubre algo más grande!

Bienvenido a Merge Jar, un puzle de física colorido en el que cada caída abre una posibilidad. Junta objetos iguales para crear otros más grandes, descubre personajes adorables y consigue la combinación definitiva antes de que se desborde el frasco.

8 MODOS DE JUEGO

Explora mundos de frutas, verduras, gemas, pasteles, animales esponjosos, vehículos, dispositivos y criaturas marinas. Cada modo tiene su propio estilo y nuevas combinaciones.

FÁCIL DE APRENDER

- Deja caer objetos en el frasco y combina los iguales.
- Planifica las jugadas para aprovechar el espacio.
- Descubre personajes y supera tu récord.

Usa potenciadores cuando el frasco se complique, recoge recompensas diarias y disfruta de animaciones y efectos de fusión. Relájate y pon a prueba tu estrategia. ¿Qué tan grande será tu próxima combinación? Descarga Merge Jar y empieza a jugar.`],
  ['fr-FR', 'Français', 'Merge Jar : Fusion et chute', 'Puzzle physique et détente', 'Faites tomber et fusionner des personnages dans 8 modes apaisants.',
   `Faites tomber, associez et découvrez des objets toujours plus grands !

Merge Jar est un puzzle coloré basé sur la physique. Chaque chute apporte une nouvelle possibilité. Associez les objets identiques, découvrez des personnages adorables et tentez la fusion ultime avant que le bocal déborde.

8 MODES DE JEU

Explorez les fruits, légumes, gemmes, gâteaux, animaux duveteux, véhicules, gadgets et créatures marines. Chaque univers a son propre style et ses propres découvertes.

FACILE À APPRENDRE, DIFFICILE À MAÎTRISER

- Faites tomber des objets et fusionnez les paires.
- Anticipez vos coups et gérez la place disponible.
- Découvrez de nouveaux personnages et battez votre record.

Utilisez des bonus dans les situations délicates et récupérez vos récompenses quotidiennes. Profitez des animations fluides et d'un jeu relaxant qui laisse place à la stratégie. Jusqu'où ira votre prochaine fusion ? Téléchargez Merge Jar pour le découvrir.`],
  ['de-DE', 'Deutsch', 'Merge Jar: Fallpuzzle', 'Entspanntes Physikpuzzle', 'Lass niedliche Figuren fallen und kombiniere sie in 8 entspannenden Modi.',
   `Fallen lassen, kombinieren und etwas Größeres entdecken!

Merge Jar ist ein buntes Physikpuzzle, in dem jeder Wurf eine neue Möglichkeit eröffnet. Kombiniere gleiche Objekte, entdecke niedliche Figuren und versuche die größte Fusion zu erreichen, bevor das Glas überläuft.

8 SPIELMODI

Entdecke Früchte, Gemüse, Edelsteine, Kuchen, flauschige Tiere, Fahrzeuge, Geräte und Meerestiere. Jede Welt hat ihren eigenen Stil und eigene Kombinationen.

LEICHT ZU LERNEN, SCHWER ZU MEISTERN

- Lass Objekte ins Glas fallen und kombiniere gleiche Paare.
- Plane deine Züge und nutze den Platz geschickt.
- Entdecke Figuren und übertriff deine Bestleistung.

Booster helfen in kniffligen Situationen. Hole tägliche Belohnungen ab und genieße flüssige Animationen und entspannte Runden mit strategischem Tiefgang. Wie groß wird deine nächste Fusion? Lade Merge Jar herunter und finde es heraus.`],
  ['pt-BR', 'Português (Brasil)', 'Merge Jar: Puzzle de Combinar', 'Quebra-cabeça relaxante', 'Solte e combine personagens fofos em 8 modos relaxantes.',
   `Solte, combine e descubra algo maior!

Merge Jar é um quebra-cabeça colorido com física divertida. Cada queda abre uma nova possibilidade. Junte objetos iguais, descubra personagens fofos e tente alcançar a combinação final antes que o pote transborde.

8 MODOS DE JOGO

Explore frutas, vegetais, pedras preciosas, bolos, animais fofinhos, veículos, aparelhos e criaturas marinhas. Cada modo tem um estilo e novas descobertas.

FÁCIL DE APRENDER, DIFÍCIL DE DOMINAR

- Solte objetos no pote e combine pares iguais.
- Planeje as jogadas e aproveite o espaço.
- Descubra personagens e supere seu recorde.

Use poderes para sair de situações complicadas, colete recompensas diárias e curta as animações e os efeitos de fusão. Relaxe e coloque sua estratégia à prova. Qual será o tamanho da sua próxima fusão? Baixe Merge Jar e comece a jogar.`],
  ['it-IT', 'Italiano', 'Merge Jar: Puzzle di fusioni', 'Puzzle di fisica rilassante', 'Fai cadere e unisci personaggi adorabili in 8 modalità rilassanti.',
   `Fai cadere, abbina e scopri qualcosa di più grande!

In Merge Jar, un puzzle colorato basato sulla fisica, ogni caduta apre una nuova possibilità. Unisci oggetti uguali, scopri personaggi adorabili e prova a ottenere la fusione più grande prima che il barattolo trabocchi.

8 MODALITÀ DI GIOCO

Esplora mondi di frutta, verdura, gemme, torte, animali soffici, veicoli, dispositivi e creature marine. Ogni modalità ha il suo stile e nuove combinazioni.

SEMPLICE DA IMPARARE

- Lascia cadere gli oggetti nel barattolo e abbina quelli uguali.
- Pianifica le mosse e gestisci lo spazio.
- Scopri personaggi e supera il tuo record.

Usa i potenziamenti nei momenti difficili, raccogli le ricompense giornaliere e goditi animazioni fluide e fusioni appaganti. Quanto sarà grande la tua prossima fusione? Scarica Merge Jar e scoprilo.`],
  ['ja-JP', '日本語', 'Merge Jar：落とすパズル', 'かわいい物理パズル', 'かわいいキャラを落として合体。8つのモードでのんびり遊ぼう。',
   `落として、そろえて、もっと大きなキャラクターを見つけよう！

Merge Jarはカラフルな物理パズルです。同じアイテムを重ねると、ひと回り大きなアイテムに変身。びんからあふれる前に、どこまで大きくできるか挑戦しましょう。

8つのゲームモード

フルーツ、野菜、宝石、ケーキ、もふもふ動物、乗り物、ガジェット、海の生き物。それぞれの世界には独自の見た目と組み合わせがあります。

遊び方はシンプル

- アイテムをびんに落として、同じものを合体。
- 次の一手を考え、空きスペースを上手に使おう。
- 新しいキャラクターを集めて自己ベストを更新。

ピンチにはお助けアイテムを使い、毎日の報酬も受け取りましょう。なめらかなアニメーションと気持ちのよい合体を、気軽にもじっくりにも楽しめます。次はどこまで大きくできる？ Merge Jarで試してみよう。`],
  ['ko-KR', '한국어', 'Merge Jar: 드롭 퍼즐', '귀엽고 편안한 물리 퍼즐', '귀여운 캐릭터를 떨어뜨려 합치는 편안한 8가지 모드를 즐겨 보세요.',
   `떨어뜨리고, 짝을 맞추고, 더 큰 캐릭터를 발견하세요!

Merge Jar는 떨어뜨릴 때마다 새로운 가능성이 열리는 알록달록한 물리 퍼즐입니다. 같은 물건을 합쳐 귀여운 캐릭터를 발견하고, 병이 넘치기 전에 가장 큰 합체를 완성해 보세요.

8가지 게임 모드

과일, 채소, 보석, 케이크, 복슬복슬한 동물, 탈것, 전자기기, 바다 생물을 만나 보세요. 모드마다 고유한 그림과 조합이 기다립니다.

쉽게 시작하는 전략 퍼즐

- 물건을 병에 떨어뜨리고 같은 물건끼리 합치세요.
- 다음 수를 생각하고 빈 공간을 알뜰히 사용하세요.
- 새 캐릭터를 발견하고 최고 기록에 도전하세요.

어려울 때는 부스터를 쓰고 매일 보상을 받으세요. 부드러운 애니메이션과 기분 좋은 합체 효과를 편안하게 즐길 수 있습니다. 다음 합체는 얼마나 커질까요? Merge Jar를 다운로드하고 도전해 보세요.`],
  ['zh-Hans', '简体中文', 'Merge Jar：掉落合成', '可爱治愈的物理益智游戏', '掉落、配对并合成可爱角色，畅玩8种轻松愉快的模式。',
   `掉落、配对、合成，发现更大的角色！

Merge Jar 是一款色彩明快的物理益智游戏。每一次掉落都带来新的可能。合并相同的物品，发现可爱的角色，挑战在罐子溢出之前完成最大合成。

8 种游戏模式

探索水果、蔬菜、宝石、蛋糕、毛茸茸的小动物、交通工具、电子设备和海洋生物。每个主题都有独特的画风和合成组合。

容易上手，富有策略

- 将物品放入罐子，合成相同的物品。
- 提前规划，合理利用剩余空间。
- 发现新角色，挑战自己的最高分。

遇到困难时使用道具，每天领取奖励，享受流畅动画和令人满足的合成效果。休息一下，动动脑，看看下一次能合成多大的角色。下载 Merge Jar 开始挑战吧！`],
  ['ar', 'العربية', 'Merge Jar: لغز الإسقاط', 'لغز فيزيائي لطيف ومريح', 'أسقط الشخصيات اللطيفة وطابقها وادمجها في 8 أوضاع مريحة.',
   `أسقط وطابق وادمج لتكتشف شيئًا أكبر!

Merge Jar لعبة ألغاز فيزيائية زاهية تمنحك فرصة جديدة مع كل إسقاط. ادمج الأشياء المتطابقة واكتشف الشخصيات اللطيفة وحاول الوصول إلى أكبر دمج قبل أن يمتلئ البرطمان.

8 أوضاع لعب

استكشف عوالم الفواكه والخضار والأحجار الكريمة والكعك والحيوانات الرقيقة والمركبات والأجهزة والكائنات البحرية. لكل عالم أسلوبه المرئي ودمجاته الخاصة.

سهلة البداية وفيها مجال للتخطيط

- أسقط الأشياء في البرطمان وطابق المتشابه منها.
- خطط لحركتك التالية وحافظ على المساحة المتاحة.
- اكتشف شخصيات جديدة وتحدَّ رقمك القياسي.

استعن بالمعززات في اللحظات الصعبة واجمع مكافآتك اليومية. استمتع بحركات سلسة وتأثيرات دمج ممتعة. ما حجم دمجك القادم؟ نزّل Merge Jar وابدأ اللعب.`],
  ['hi-IN', 'हिन्दी', 'Merge Jar: ड्रॉप पज़ल', 'मज़ेदार और सुकूनभरी पज़ल', 'प्यारे किरदार गिराएँ, मिलाएँ और 8 आरामदायक मोड खेलें।',
   `गिराएँ, मिलाएँ और कुछ बड़ा खोजें!

Merge Jar रंगीन फ़िज़िक्स पज़ल है, जहाँ हर बार कुछ गिराने पर एक नई संभावना खुलती है। एक जैसी चीज़ें जोड़ें, प्यारे किरदार खोजें और जार भरने से पहले सबसे बड़ा मेल बनाने की कोशिश करें।

8 गेम मोड

फल, सब्ज़ियाँ, रत्न, केक, मुलायम जानवर, वाहन, गैजेट और समुद्री जीव खोजें। हर दुनिया की अपनी कला और नए मेल हैं।

खेलना आसान, महारत चुनौतीपूर्ण

- चीज़ें जार में गिराएँ और एक जैसी चीज़ें मिलाएँ।
- अगली चाल सोचें और खाली जगह का ध्यान रखें।
- नए किरदार खोजें और अपना रिकॉर्ड तोड़ें।

मुश्किल चालों के लिए बूस्टर इस्तेमाल करें और रोज़ इनाम पाएँ। स्मूद ऐनिमेशन और मज़ेदार मेल के साथ आराम करें या अपनी रणनीति आज़माएँ। आपका अगला मेल कितना बड़ा होगा? Merge Jar डाउनलोड करें और खेल शुरू करें।`],
];

const listings = [
  { locale: 'en-US', language: 'English (US)', fields: english },
  ...translations.map(([locale, language, title, subtitle, short, description]) => ({
    locale,
    language,
    fields: [title, subtitle, short, description],
  })),
];

const suggestedKeywords = {
  'en-US': 'fruit,matching,stack,watermelon,animals,gems,cakes,casual,brain teaser,offline,high score',
  'es-419': 'frutas,combinar,sandía,animales,gemas,pasteles,estrategia,récord,casual',
  'fr-FR': 'fruit,bocal,associer,pastèque,animaux,gemmes,gâteaux,stratégie,record',
  'de-DE': 'obst,stapeln,kombinieren,melone,tiere,edelsteine,kuchen,bestwert,strategie',
  'pt-BR': 'frutas,melancia,animais,gemas,bolos,estratégia,recorde,casual',
  'it-IT': 'frutta,abbinare,anguria,animali,gemme,torte,strategia,record',
  'ja-JP': 'フルーツ,スイカ,合体ゲーム,ケーキ,動物ゲーム,宝石,積み重ね',
  'ko-KR': '과일게임,수박게임,캐릭터합체,동물게임,보석쌓기,케이크,최고기록',
  'zh-Hans': '水果合成,西瓜游戏,堆叠益智,可爱动物,宝石配对,蛋糕合成,最高分',
  'ar': 'فواكه,بطيخ,حيوانات,جواهر,كعك,تكديس,مطابقة',
  'hi-IN': 'फल मिलान,तरबूज,रत्न,केक,जानवर,रणनीति',
};
