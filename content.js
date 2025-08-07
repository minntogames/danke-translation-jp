// .checkbox-line内の自動計算文言の翻訳
function translateCheckboxLine(root=document) {
  root.querySelectorAll('.checkbox-line').forEach(line => {
    // テキストノードと子要素両方対応
    for (const node of line.childNodes) {
      if (node.nodeType === Node.TEXT_NODE) {
        const txt = node.textContent.trim();
        if (checkboxLineTranslations[txt]) {
          node.textContent = checkboxLineTranslations[txt];
        }
      }
    }
    line.querySelectorAll('*').forEach(child => {
      const txt = child.textContent.trim();
      if (checkboxLineTranslations[txt]) {
        child.textContent = checkboxLineTranslations[txt];
      }
    });
  });
}
// .my-info内のATK説明文（分割ノード対応）翻訳
const myInfoATKEn = "The ATK is located on the equipment page of the game, and the final ATK can only be found by clicking on the icon in the upper left corner of the equipment page.";
const myInfoATKJp = "<ATK>はゲームの装備画面に表示されています。<最終ATK>は、装備画面の左上にあるアイコンをクリックすることで確認できます。";

function translateMyInfoATKDescription(root=document) {
  root.querySelectorAll('.my-info').forEach(el => {
    // すべてのテキストノードを連結して比較
    let textNodes = [];
    let fullText = '';
    for (const node of el.childNodes) {
      if (node.nodeType === Node.TEXT_NODE) {
        textNodes.push(node);
        fullText += node.textContent;
      }
    }
    if (fullText.replace(/\s+/g, ' ').trim() === myInfoATKEn) {
      // 既存ノードを全て削除
      while (el.firstChild) el.removeChild(el.firstChild);
      // <ATK>と<最終ATK>をspanでラップ
      let html = myInfoATKJp
        .replace(/<ATK>/g, '<span class="text-tag-green">ATK</span>')
        .replace(/<最終ATK>/g, '<span class="text-tag-green">最終ATK</span>');
      // 全体をspanでラップ
      const span = document.createElement('span');
      span.innerHTML = html;
      el.appendChild(span);
    }
  });
}
// data-v-93498d95が付いたdiv要素のaria-label属性をcheckboxLineTranslationsで翻訳
function translateDivAriaLabelDataV93498d95(root=document) {
  root.querySelectorAll('div[data-v-93498d95][aria-label]').forEach(div => {
    const ariaLabel = div.getAttribute('aria-label');
    if (!ariaLabel) return;
    const jp = checkboxLineTranslations[ariaLabel.trim()];
    if (jp) {
      div.setAttribute('aria-label', jp);
    }
  });
}

const checkboxLineTranslations = {
  'Automatic calculation (make sure the current attack is correctly filled in)': '自動計算（現在の攻撃力が正しく入力されていることを確認してください）',
  "Automatically calculating...": "自動計算中...",
};



// .wrapper内で各装備種別名を含む要素の中の"SS"を画像に置き換える
function replaceSSWithImageInWrapper(root=document) {
  const uri = "https://youtube.minntelia.com/danke-translation-jp/";
  const typeToImg = {
    weapon: 'ss_tl.PNG',
    armor: 'ss_ea.PNG',
    necklace: 'ss_jn.PNG',
    belt: 'ss_ss.PNG',
    bracer: 'ss_mb.PNG',
    boots: 'ss_gw.PNG',
  };
  const equipmentOrder = ['weapon', 'armor', 'necklace', 'belt', 'bracer', 'boots'];
  const cycleData = {
    weapon: [
      {type: 'img', src: 'ss_tl.PNG', alt: 'SS'},
      {type: 'none'}
    ],
    armor: [
      {type: 'img', src: 'ss_ea.PNG', alt: 'SS'},
      {type: 'img', src: 's_eb.PNG', alt: 'E'},
      {type: 'none'}
    ],
    necklace: [
      {type: 'img', src: 'ss_jn.PNG', alt: 'SS'},
      {type: 'img', src: 's_ve.PNG', alt: 'V'},
      {type: 'none'}
    ],
    belt: [
      {type: 'img', src: 'ss_ss.PNG', alt: 'SS'},
      {type: 'img', src: 's_cb.PNG', alt: 'C'},
      {type: 'none'}
    ],
    bracer: [
      {type: 'img', src: 'ss_mb.PNG', alt: 'SS'},
      {type: 'img', src: 's_vh.PNG', alt: 'V'},
      {type: 'none'}
    ],
    boots: [
      {type: 'img', src: 'ss_gw.PNG', alt: 'SS'},
      {type: 'img', src: 's_vb.PNG', alt: 'V'},
      {type: 'none'}
    ]
  };
  // .wrapper内の.text-lineをすべて取得し、index順で装備種別を割り当てる
  const textLines = [];
  root.querySelectorAll('.wrapper').forEach(wrapper => {
    wrapper.querySelectorAll('.text-line').forEach(line => textLines.push(line));
  });
  textLines.forEach((textLine, index) => {
    // E/V/CテキストをSSに戻す
    const walkerRestore = document.createTreeWalker(textLine, NodeFilter.SHOW_TEXT, null);
    let nodeRestore;
    while ((nodeRestore = walkerRestore.nextNode())) {
      if (["E","V","C"].includes(nodeRestore.textContent.trim())) {
        nodeRestore.textContent = 'SS';
      }
    }
    // 装備タイプをindex順で割り当て
    if (index >= equipmentOrder.length) return;
    const equipType = equipmentOrder[index];
    // サイクル状態を取得
    let cycleIdx = textLine.dataset.cycleIdx ? parseInt(textLine.dataset.cycleIdx) : 0;
    // cycleIdxがcycleArrの範囲外なら0にリセット
    const cycleArr = cycleData[equipType];
    if (cycleIdx >= cycleArr.length) cycleIdx = 0;
    textLine.dataset.cycleIdx = cycleIdx;
    const state = cycleArr[cycleIdx] || cycleArr[0];
    // SSテキストを置換
    const walker = document.createTreeWalker(textLine, NodeFilter.SHOW_TEXT, null);
    let node;
    while ((node = walker.nextNode())) {
      if (node.textContent.trim() === 'SS') {
        if (state.type === 'img') {
          const img = document.createElement('img');
          img.src = uri + 'src/img/ss/' + state.src;
          img.alt = state.alt;
          img.style.height = '2em';
          img.style.verticalAlign = 'middle';
          img.dataset.equipType = equipType;
          img.dataset.textLineIndex = index;
          node.parentNode.replaceChild(img, node);
        } else if (state.type === 'text') {
          node.textContent = state.text;
        } else if (state.type === 'none') {
          node.textContent = '';
        }
      } else if (node.textContent.trim() === 'E' || node.textContent.trim() === 'V' || node.textContent.trim() === 'C') {
        // E/V/CテキストをSSに置換
        if (state.type === 'img') {
          const img = document.createElement('img');
          img.src = uri + 'src/img/ss/' + state.src;
          img.alt = state.alt;
          img.style.height = '2em';
          img.style.verticalAlign = 'middle';
          img.dataset.equipType = equipType;
          img.dataset.textLineIndex = index;
          node.parentNode.replaceChild(img, node);
        } else if (state.type === 'text') {
          node.textContent = state.text;
        } else if (state.type === 'none') {
          node.textContent = '';
        }
      }
    }
  });
}
// --- クリックでサイクル切り替え ---
let ssCycleClickInitialized = false;
function initSSCycleClick() {
  if (ssCycleClickInitialized) return;
  ssCycleClickInitialized = true;
  document.addEventListener('click', e => {
    // 画像がクリックされたか判定
    if (!(e.target instanceof HTMLImageElement)) return;
    const img = e.target;
    if (!img.closest('.text-line')) return;
    // 500ms後にその.text-lineだけcycleIdxを進める
    setTimeout(() => {
      const textLine = img.closest('.text-line');
      // text-lineのindexを再計算
      const allTextLines = [];
      document.querySelectorAll('.wrapper').forEach(wrapper => {
        wrapper.querySelectorAll('.text-line').forEach(line => allTextLines.push(line));
      });
      const idx = allTextLines.indexOf(textLine);
      if (idx === -1) return;
      const equipmentOrder = ['weapon', 'armor', 'necklace', 'belt', 'bracer', 'boots'];
      if (idx >= equipmentOrder.length) return;
      const equipType = equipmentOrder[idx];
      const cycleArrLen = (function(){
        switch(equipType){
          case 'weapon': return 2;
          case 'armor': case 'necklace': case 'belt': case 'bracer': case 'boots': return 3;
          default: return 2;
        }
      })();
      let now = textLine.dataset.cycleIdx ? parseInt(textLine.dataset.cycleIdx) : 0;
      now = (now + 1) % cycleArrLen;
      textLine.dataset.cycleIdx = now;
      replaceSSWithImageInWrapper();
    }, 500);
  });
}
initSSCycleClick();
// --- すべての翻訳辞書・関数定義のさらに後ろ（ファイル末尾）に移動 ---
// .damage-moon-input-title の翻訳
const damageMoonInputTitleTranslations = {
  "Expedition testament count of opponents": "遠征の敵の証数"
};

// .line内のq-radio...の翻訳（動的対応・部分一致/正規表現対応）
const radioLabelTranslationRules = [
  { pattern: /^Lunar Mine Expedition$/, jp: "月の鉱山遠征" },
  { pattern: /^Ender's Echo$/, jp: "末世反響" },
  { pattern: /^Expedition Phase$/, jp: "遠征段階" },
  { pattern: /^Battle Phase$/, jp: "対戦段階" },
  // ここに追加可能
];

function addRadioLabelTranslation(pattern, jp) {
  radioLabelTranslationRules.push({ pattern, jp });
}

function findRadioLabelTranslation(text) {
  for (const rule of radioLabelTranslationRules) {
    if (typeof rule.pattern === 'string') {
      if (text === rule.pattern) return rule.jp;
    } else if (rule.pattern instanceof RegExp) {
      if (rule.pattern.test(text)) return rule.jp;
    }
  }
  return null;
}

function translateRadioLabels(root=document) {
  root.querySelectorAll('.line .q-radio.cursor-pointer.no-outline.row.inline.no-wrap.items-center').forEach(radio => {
    // aria-label属性も翻訳
    const ariaLabel = radio.getAttribute('aria-label');
    if (ariaLabel) {
      const jp = findRadioLabelTranslation(ariaLabel.trim());
      if (jp) radio.setAttribute('aria-label', jp);
    }
    // テキストノードを走査
    for (const node of radio.childNodes) {
      if (node.nodeType === Node.TEXT_NODE) {
        const txt = node.textContent.trim();
        const jp = findRadioLabelTranslation(txt);
        if (jp) {
          node.textContent = jp;
        }
      }
    }
    // 子要素（span等）も翻訳
    radio.querySelectorAll('*').forEach(child => {
      const txt = child.textContent.trim();
      const jp = findRadioLabelTranslation(txt);
      if (jp) {
        child.textContent = jp;
      }
    });
  });
}

function translateDamageMoonInputTitles(root=document) {
  root.querySelectorAll('span.damage-moon-input-title').forEach(span => {
    const txt = span.textContent.trim();
    if (damageMoonInputTitleTranslations[txt]) {
      span.textContent = damageMoonInputTitleTranslations[txt];
    }
  });
}

// ページ読み込み時にも必ず翻訳・監視を実行
function observeRadioSelection() {
  document.querySelectorAll('.line .q-radio.cursor-pointer.no-outline.row.inline.no-wrap.items-center').forEach(radio => {
    radio.removeEventListener('click', radio._jpTranslateHandler ?? (()=>{}));
    const handler = () => setTimeout(() => translateRadioLabels(radio.parentElement), 0);
    radio.addEventListener('click', handler);
    radio._jpTranslateHandler = handler;
  });
}
// --- すべての翻訳関数・辞書定義の後ろに移動 ---
// すべての翻訳を一括実行する関数（setInterval等で利用）
function runAllTranslations() {
  translateRadioLabels();
  translateItemLabels();
  translateResultTextDivs();
  translateHeaderDivs();
  translateAnnouncementSpans();
  translateMiscButtons();
  translateButtonSpans();
  translateDamageMoonInputTitles();
  document.querySelectorAll('.q-card-root.tp').forEach(translateCard);
  replaceSSWithImageInWrapper();
  translateCheckboxLine();
  translateDivAriaLabelDataV93498d95();
  translateMyInfoATKDescription();
}


// --- すべての翻訳辞書・関数定義のさらに後ろ（ファイル末尾）に移動 ---

// MutationObserverで動的追加にも対応
const origTranslateRadioLabels = translateRadioLabels;
translateRadioLabels = function(root=document) {
  origTranslateRadioLabels(root);
  observeRadioSelection();
};
// .line内のq-radio...の翻訳（動的対応）はMutationObserver内でのみ参照する
// ...existing code...
// MutationObserverのコールバック内に移動
// ...existing code...
// .item .item-label の翻訳
const itemLabelTranslations = {
  "Crit Rate": "クリティカル率",
  "Crit Damage": "クリティカルダメージ",
  "Skill Damage": "スキルダメージ",
  "Shield Damage": "シールドダメージ増幅",
  "Vulnerability": "脆弱性効果",
  "To Chilled": "氷結効果",
  "To Poisoned": "毒効果",
  "To Weakened": "衰弱効果",
  "To Lacerated": "裂傷効果",
  "Eternal Suit": "エターナルバトルスーツ",
  "Clarity": "無心（アポカリプスアーマー）", 
  "Voidwaker Emblem": "破壊者エンブレム",
  "Twisting Belt": "湾曲の帯革",
  "Stardust Sash": "ステラベルト",
  "Voidwaker Handguards": "破壊者ハンドアーマー",
  "Voidwaker Treads":"破壊者フットアーマー",
  "Glacial Warboots": "フロストブーツ",
  "Hi-Power Bullet": "強力銃弾(パッシブスキル)", 
  "Rex": "ハチ公(ペット)",
  "Overload": "オーバーロード（タローシアのスキル）", 
  "Lunar Mine Expedition": "月の鉱山遠征"
};

function translateItemLabels(root=document) {
  root.querySelectorAll('.item .item-label').forEach(label => {
    // コロンや空白を除去して比較
    const raw = label.textContent.trim();
    const key = raw.replace(/[:：\s]+$/, '');
    if (itemLabelTranslations[key]) {
      // 元の末尾コロンや空白を保持
      const suffix = raw.match(/[:：\s]+$/)?.[0] || '';
      label.textContent = itemLabelTranslations[key] + suffix;
    }
  });
}

// .result-text div の翻訳
function translateResultTextDivs(root=document) {
  root.querySelectorAll('.result-text div').forEach(div => {
    const txt = div.textContent.trim();
    const match = txt.match(/^Damage Multiplier: (.+)$/);
    if (match) {
      div.textContent = `ダメージ倍率: ${match[1]}`;
    }
  });
}
      // .result-text div の翻訳（動的対応）
// .header div の翻訳
const headerDivTranslations = {
  "Result": "結果",
  "Scenario": "ゲームモード",
  "ATK": "攻撃力",
  "Tech parts and Skills": "テックパーツ・スキル",
  "Collectibles": "コレクション",
  "Pets": "ペット",
  "Effect Percent": "効果割合"
};

function translateHeaderDivs(root=document) {
  // div, span, テキストノードすべて対象
  root.querySelectorAll('.header, .header *').forEach(el => {
    // テキストノードも個別に
    for (const node of el.childNodes) {
      if (node.nodeType === Node.TEXT_NODE) {
        let txt = node.textContent;
        txt = txt.replace(/Gears/g, '神鋳')
                 .replace(/Current Core:/g, '現在のコア数:')
                 .replace(/Survivors/g, 'サバイバー')
                 .replace(/Current:/g, '現在:')
                 .replace(/Core:/g, 'コア:')
                 .replace(/Shard:/g, '欠片:');
        node.textContent = txt;
      }
    }
    // 要素ノード自身のtextContentが完全一致の場合
    const txt = el.textContent.trim();
    if (headerDivTranslations[txt]) {
      el.textContent = headerDivTranslations[txt];
      // 結果タイトルの場合はclassを上書き
      if (headerDivTranslations[txt] === '結果') {
        el.className = 'doc-card-title q-my-xs q-mr-sm';
      }
    }
  });
}
// .announcement-bar span の翻訳
const announcementTranslations = {
  "As the payment method is still under preparation, some premium features are temporarily open and you are welcome to use them.":
    "決済方法の準備中のため、一部のプレミアム機能を一時的に開放しています。ぜひご利用ください。"
};

function translateAnnouncementSpans(root=document) {
  root.querySelectorAll('.announcement-bar span').forEach(span => {
    const txt = span.textContent.trim();
    if (announcementTranslations[txt]) {
      span.textContent = announcementTranslations[txt];
    }
  });
}
// .create-btn, .actions のボタンテキスト翻訳
const miscButtonTranslations = {
  "Create Brand New": "新規作成",
  "Edit": "編集",
  "Use": "使用",
  "In Use": "使用中",
  "Delete": "削除"
};


// ノードとその子孫のテキストノード・要素を再帰的に翻訳
function translateNodeTextRecursive(node, translations) {
  if (node.nodeType === Node.TEXT_NODE) {
    const txt = node.textContent.trim();
    if (translations[txt]) {
      node.textContent = translations[txt];
    }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    // 要素自身のテキストも翻訳（ボタンやspanなど）
    const txt = node.textContent.trim();
    if (translations[txt]) {
      node.textContent = translations[txt];
    } else {
      // 子ノードを再帰的に処理
      for (const child of node.childNodes) {
        translateNodeTextRecursive(child, translations);
      }
    }
  }
}

function translateMiscButtons(root=document) {
  // .create-btn
  root.querySelectorAll('.create-btn').forEach(btn => {
    translateNodeTextRecursive(btn, miscButtonTranslations);
  });
  // .action-btn
  root.querySelectorAll('.action-btn').forEach(actions => {
    translateNodeTextRecursive(actions, miscButtonTranslations);
  });
}
// .my-info .buttons span のボタンテキスト翻訳

// --- すべての翻訳関数・辞書定義の後ろに移動 ---
const buttonTextTranslations = {
  "Switch": "構成切替",
  "Export": "エクスポート",
  "Import": "インポート",
  "Create Link": "リンク作成"
};

function translateButtonSpans(root=document) {
  root.querySelectorAll('.my-info .buttons span').forEach(span => {
    const txt = span.textContent.trim();
    if (buttonTextTranslations[txt]) {
      span.textContent = buttonTextTranslations[txt];
    }
  });
}

// ...existing code...
const cardTranslations = {
  "Huma": "人間",
  "Book": "本",
  "Immo": "不死",
  "Inst": "即発",
  // ...
};

// .title の Current Configuration: ... 前方一致翻訳（テキストノードのみ置換）
function translateTitleConfig(el) {
  for (const node of el.childNodes) {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim().startsWith("Current Configuration: ")) {
      const configName = node.textContent.trim().replace("Current Configuration: ", "");
      node.textContent = `現在の構成：${configName}`;
    }
  }
}
// ...existing code...

// カード要素を翻訳
function translateCard(el) {
  const txt = el.textContent.trim();
  if (cardTranslations[txt]) {
    el.textContent = cardTranslations[txt];
  }
}

// 動的な翻訳（MutationObserver）


const observer = new MutationObserver(mutations => {
  for (const m of mutations) {
    // 追加ノードの処理
    for (const node of m.addedNodes) {
      if (node.nodeType !== 1) continue;

      if (node.matches('.q-card-root.tp')) translateCard(node);
      node.querySelectorAll?.('.q-card-root.tp')?.forEach(translateCard);

      // .my-info の完全一致翻訳
      if (node.matches('.my-info')) {
        const text = node.textContent.trim();
        if (text === "The basic functions of this tool are free. You can adjust various attributes at will and then view the damage multiplier in real time.") {
          node.textContent = "このツールの基本機能は無料です。各種属性を自由に調整して、ダメージ倍率をリアルタイムで確認できます。";
        }
        if (text === 'Now you can have multiple configurations and switch between them at will. But please note that all configurations are only saved in your browser and will be lost when the cache is cleared. You can use the "Export" button to save your configuration permanently in a file.') {
          node.textContent = '現在、複数の設定を保存し、自由に切り替えることができます。ただし、すべての設定はブラウザ内にのみ保存され、キャッシュをクリアすると失われる点にご注意ください。設定を永久にファイルに保存するには、「エクスポート」ボタンをご利用ください。';
        }
        if (text === 'After the battle phase is opened, click on the boss avatar to see the number of Expedition Testaments from opponents.') {
          node.textContent = '対戦段階が開始された後、ボスをタッチすると、対戦相手からの遠征の証の数が表示されます。';
        }
        if (text === 'Only main Survivor, synergy level up, combat harmony and teamwork passive are counted, donatello is not included.') {
          node.textContent = 'メインサバイバーのみが対象で、同調レベルアップ、協力作戦、およびチームワークのパッシブスキルがカウントされます。ドナテロは含まれません。';
        }
        if (text === 'The calculator can only calculate the change of attack according to the change of attribute, and cannot directly calculate the attack value. So when you check this option, you need to ensure that the current input attack value is correct. Since it is impossible to obtain all accurate data, some calculation results are estimates.') {
          node.textContent = 'この計算機は属性の変化に基づいて攻撃力の変化を計算するもので、直接的な攻撃値の計算は行いません。このオプションを選択する場合、現在の入力攻撃値が正しいことを確認してください。すべての正確なデータを取得することは不可能なため、一部の計算結果は推定値となります。';
        }
        // ボタンテキストも翻訳
        translateButtonSpans(node);
      }
      node.querySelectorAll?.('.my-info')?.forEach(el => {
        const text = el.textContent.trim();
        if (text === "The basic functions of this tool are free. You can adjust various attributes at will and then view the damage multiplier in real time.") {
          el.textContent = "このツールの基本機能は無料です。各種属性を自由に調整して、ダメージ倍率をリアルタイムで確認できます。";
        }
        if (text === 'Now you can have multiple configurations and switch between them at will. But please note that all configurations are only saved in your browser and will be lost when the cache is cleared. You can use the "Export" button to save your configuration permanently in a file.') {
          el.textContent = '現在、複数の設定を保存し、自由に切り替えることができます。ただし、すべての設定はブラウザ内にのみ保存され、キャッシュをクリアすると失われる点にご注意ください。設定を永久にファイルに保存するには、「エクスポート」ボタンをご利用ください。';
        }
        if (text === 'After the battle phase is opened, click on the boss avatar to see the number of Expedition Testaments from opponents.') {
          el.textContent = '対戦段階が開始された後、ボスをタッチすると、対戦相手からの遠征の証の数が表示されます。';
        }
        if (text === 'Only main Survivor, synergy level up, combat harmony and teamwork passive are counted, donatello is not included.') {
          el.textContent = 'メインサバイバーのみが対象で、同調レベルアップ、協力作戦、およびチームワークのパッシブスキルがカウントされます。ドナテロは含まれません。';
        }
        if (text === 'The calculator can only calculate the change of attack according to the change of attribute, and cannot directly calculate the attack value. So when you check this option, you need to ensure that the current input attack value is correct. Since it is impossible to obtain all accurate data, some calculation results are estimates.') {
          el.textContent = 'この計算機は属性の変化に基づいて攻撃力の変化を計算するもので、直接的な攻撃値の計算は行いません。このオプションを選択する場合、現在の入力攻撃値が正しいことを確認してください。すべての正確なデータを取得することは不可能なため、一部の計算結果は推定値となります。';
        }
        // ボタンテキストも翻訳
        translateButtonSpans(el);
      });

      // .my-info .buttons span のボタンテキストも動的に翻訳
      if (node.matches('.my-info .buttons span')) translateButtonSpans(node.parentElement);
      node.querySelectorAll?.('.my-info .buttons span')?.forEach(span => translateButtonSpans(span.parentElement));

      // .create-btn, .action-btn のボタンテキストも動的に翻訳
      if (node.matches('.create-btn, .action-btn')) translateMiscButtons(node);
      node.querySelectorAll?.('.create-btn, .action-btn')?.forEach(el => translateMiscButtons(el));

      // .title の Current Configuration: ... 前方一致翻訳
      if (node.matches('.title')) translateTitleConfig(node);
      node.querySelectorAll?.('.title')?.forEach(translateTitleConfig);

      // .announcement-bar span の翻訳（動的対応）
      if (node.matches('.announcement-bar span')) translateAnnouncementSpans(node.parentElement);
      node.querySelectorAll?.('.announcement-bar span')?.forEach(span => translateAnnouncementSpans(span.parentElement));

      // .header の翻訳（動的対応）
      if (node.matches('.header, .header *')) translateHeaderDivs(node);
      node.querySelectorAll?.('.header, .header *')?.forEach(el => translateHeaderDivs(el));
    }

    // 既存ノードのテキスト変化も監視
    if (m.type === 'characterData') {
      let el = m.target.parentElement;
      // .action-btn, .create-btn, .actions のいずれかの子孫なら再翻訳
      while (el) {
        if (el.classList?.contains('action-btn') || el.classList?.contains('create-btn') || el.classList?.contains('actions')) {
          translateMiscButtons(el);
          break;
        }
        el = el.parentElement;
      }
      // .title 内のCurrent Configuration: ...
      if (m.target.parentElement?.classList.contains('title')) {
        translateTitleConfig(m.target.parentElement);
      }
    }
    // .title要素自体の属性変化や子ノード変化も監視
    if (m.target && m.target.classList && m.target.classList.contains('title')) {
      translateTitleConfig(m.target);
    }
  }
});

observer.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true });

// --- 初期化処理（ファイル末尾）---
function initRadioTranslation() {
  runAllTranslations();
  observeRadioSelection();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRadioTranslation);
} else {
  initRadioTranslation();
}

// 数秒ごとに全翻訳を再実行
setInterval(() => {
  runAllTranslations();
}, 1000); // 1秒ごと（必要に応じて調整）

