/* ========================================
   神秘運勢占卜 — 主程式
   ========================================

   ★ 占卜結果資料集中在此檔案最上方，
     方便日後修改成其他主題。
   ======================================== */

// ─────────────────────────────────────────
// ▼  占卜結果資料（修改此區即可換主題） ▼
// ─────────────────────────────────────────
const FORTUNE_DATA = [
  {
    name: "大吉 🌟",
    badge: "🌟",
    summary: "萬事如意、貴人相助！今天的你運勢爆棚，無論做什麼都能順利推進。",
    work:  { stars: 5, text: "工作效率極高，深受主管器重，有升遷或加薪的好消息。" },
    study: { stars: 5, text: "學習力驚人，看過的內容過目不忘，考試勢如破竹。" },
    love:  { stars: 5, text: "桃花朵朵開，單身者有機會遇到心動對象；有伴者甜蜜加倍。" },
    money: { stars: 5, text: "財運亨通，正財偏財皆旺，適合理財規劃。" },
    quote: "「今天的你，就是全宇宙最幸運的人！」"
  },
  {
    name: "中吉 ✨",
    badge: "✨",
    summary: "整體運勢不錯，只要保持積極心態，好事會接連發生。",
    work:  { stars: 4, text: "工作穩定推進，團隊合作順暢，可能有新的合作機會。" },
    study: { stars: 4, text: "專注力不錯，適合挑戰較難的課題，多做筆記效果加倍。" },
    love:  { stars: 4, text: "感情穩定發展，多花心思在另一半身上會有驚喜回報。" },
    money: { stars: 4, text: "收入穩健，小有進帳，避免衝動消費即可。" },
    quote: "「好運不是偶然，是你日積月累的回報。」"
  },
  {
    name: "小吉 🌿",
    badge: "🌿",
    summary: "平穩中帶有小確幸，留意身邊的美好事物，幸福其實近在眼前。",
    work:  { stars: 3, text: "工作日常順利，沒有大風大浪，適合處理累積的瑣事。" },
    study: { stars: 4, text: "適合複習舊知識，溫故知新會帶來新的領悟。" },
    love:  { stars: 3, text: "感情平淡但溫馨，一個小小的舉動就能讓對方開心。" },
    money: { stars: 3, text: "財務平穩，不太有大的支出或收入，安心就好。" },
    quote: "「小小的幸運也是幸運，微笑面對每一天。」"
  },
  {
    name: "吉 🍀",
    badge: "🍀",
    summary: "運氣在中上水準，多嘗試新事物會有意想不到的收穫。",
    work:  { stars: 4, text: "可能接到新案子或新任務，大膽接受挑戰會有好表現。" },
    study: { stars: 3, text: "學習進度正常，試著換個學習方法可能會有突破。" },
    love:  { stars: 4, text: "適合主動出擊！邀約對方出門走走，好感度 UP。" },
    money: { stars: 3, text: "正財運平穩，偏財靠緣分，不宜冒險投資。" },
    quote: "「勇敢踏出那一步，世界會為你開路。」"
  },
  {
    name: "末吉 🌤️",
    badge: "🌤️",
    summary: "運勢普通偏好，雖然不是最順的一天，但不會遇到太大困難。",
    work:  { stars: 3, text: "按部就班完成工作即可，不適合冒險提案。" },
    study: { stars: 3, text: "容易分心，建議去咖啡廳或圖書館換個環境讀書。" },
    love:  { stars: 3, text: "感情沒有太大變化，維持現狀就好，別太鑽牛角尖。" },
    money: { stars: 3, text: "花費可能稍多，注意不必要的訂閱或衝動購物。" },
    quote: "「平凡的一天也值得認真度過。」"
  },
  {
    name: "半吉半凶 🌓",
    badge: "🌓",
    summary: "好壞參半的一天，遇到困難不要氣餒，轉個彎可能就柳暗花明。",
    work:  { stars: 3, text: "可能遇到小障礙，但冷靜應對就能安全過關。" },
    study: { stars: 2, text: "專注力起伏大，適合分段學習，每 25 分鐘休息一次。" },
    love:  { stars: 3, text: "溝通上可能有小摩擦，把話說清楚就沒事。" },
    money: { stars: 2, text: "可能有意料之外的開銷，記得留一點緊急備用金。" },
    quote: "「風雨過後，彩虹更加耀眼。」"
  },
  {
    name: "小凶 🌧️",
    badge: "🌧️",
    summary: "今天可能不太順，但別擔心，低潮只是暫時的，明天會更好。",
    work:  { stars: 2, text: "容易出差錯，重要文件務必再三確認。" },
    study: { stars: 2, text: "念不進去的時候就休息吧，硬撐效率更差。" },
    love:  { stars: 2, text: "容易敏感多疑，先冷靜再說話，避免不必要的爭吵。" },
    money: { stars: 2, text: "財運低迷，今天不適合大筆開支或投資決定。" },
    quote: "「就算下雨天，也別忘了帶傘和微笑。」"
  },
  {
    name: "凶 ⛈️",
    badge: "⛈️",
    summary: "運勢偏低的一天，凡事小心為上，低調行事就能平安度過。",
    work:  { stars: 2, text: "可能遇到挫折或被批評，但當作成長的養分吧。" },
    study: { stars: 1, text: "學習效率低，適合做輕鬆的複習，不要安排太重的進度。" },
    love:  { stars: 1, text: "不太適合告白，先觀察再行動，耐心是致勝關鍵。" },
    money: { stars: 1, text: "荷包可能受傷，能省則省，推遲非必要消費。" },
    quote: "「谷底的好處是，接下來只會往上走。」"
  },
  {
    name: "大凶 💫",
    badge: "💫",
    summary: "今天運勢觸底，但物極必反——撐過去，好運馬上來！",
    work:  { stars: 1, text: "職場可能有突發狀況，保持冷靜、做好應變準備。" },
    study: { stars: 1, text: "完全讀不下去？那就好好休息，放鬆也是一種投資。" },
    love:  { stars: 1, text: "感情上容易誤會叢生，今天先保持距離維持美感。" },
    money: { stars: 1, text: "財務亮紅燈，絕對不要借錢或賭博！" },
    quote: "「最暗的夜，才能看到最亮的星。明天會更好！」"
  },
  {
    name: "超神運 🦄",
    badge: "🦄",
    summary: "千載難逢的超級好運！今天你簡直是被幸運之神眷顧的天選之人！",
    work:  { stars: 5, text: "簡報必過、提案必中，老闆會對你刮目相看。" },
    study: { stars: 5, text: "開啟學霸模式！所有知識點一次融會貫通。" },
    love:  { stars: 5, text: "命中注定的人可能就在今天出現，請保持雷達開啟。" },
    money: { stars: 5, text: "意外之財即將降臨？記得買張發票對一對！" },
    quote: "「今天不去買彩券，對不起這個運氣！（笑）」"
  },
  {
    name: "佛系運 🧘",
    badge: "🧘",
    summary: "無慾無求、順其自然。不好不壞，一切隨緣就是最好的安排。",
    work:  { stars: 3, text: "不求表現但也不會出包，穩穩的完成分內事就好。" },
    study: { stars: 3, text: "心態平和適合閱讀課外書，享受知識本身的樂趣。" },
    love:  { stars: 3, text: "緣分天注定，不強求反而更自在。" },
    money: { stars: 3, text: "不多也不少，剛好夠用，知足常樂。" },
    quote: "「一切都是最好的安排，隨緣就好。」"
  },
  {
    name: "反轉運 🎭",
    badge: "🎭",
    summary: "上午可能諸事不順，但下午開始局勢大反轉！先苦後甘的一天。",
    work:  { stars: 3, text: "早上別急著做決定，下午靈感大爆發，效率翻倍。" },
    study: { stars: 4, text: "早上看不懂的題目，下午突然豁然開朗！" },
    love:  { stars: 4, text: "原本的尷尬局面會因為一個契機而完全改觀。" },
    money: { stars: 3, text: "可能先破財後進財，不用太擔心。" },
    quote: "「人生就像 Loading 條，最後一刻往往跳最快。」"
  }
];

// ─────────────────────────────────────────
// ▲  占卜結果資料到此為止              ▲
// ─────────────────────────────────────────


// ============ DOM 元素 ============
const divineBtn     = document.getElementById('divine-btn');
const retryBtn      = document.getElementById('retry-btn');
const heroSection   = document.getElementById('hero');
const oracleSection = document.getElementById('oracle-section');
const loadingSection= document.getElementById('loading-section');
const resultSection = document.getElementById('result-section');

// 結果欄位
const resultBadge   = document.getElementById('result-badge');
const resultTitle   = document.getElementById('result-title');
const resultSummary = document.getElementById('result-summary');
const resultQuote   = document.getElementById('result-quote');
const detailWork    = document.getElementById('detail-work');
const detailStudy   = document.getElementById('detail-study');
const detailLove    = document.getElementById('detail-love');
const detailMoney   = document.getElementById('detail-money');
const textWork      = document.getElementById('text-work');
const textStudy     = document.getElementById('text-study');
const textLove      = document.getElementById('text-love');
const textMoney     = document.getElementById('text-money');


// ============ 星星渲染 ============
function renderStars(count) {
  const full = '★';
  const empty = '☆';
  return full.repeat(count) + empty.repeat(5 - count);
}


// ============ 顯示結果 ============
function showResult(fortune) {
  resultBadge.textContent   = fortune.badge;
  resultTitle.textContent   = fortune.name;
  resultSummary.textContent = fortune.summary;
  resultQuote.textContent   = fortune.quote;

  detailWork.textContent  = renderStars(fortune.work.stars);
  detailStudy.textContent = renderStars(fortune.study.stars);
  detailLove.textContent  = renderStars(fortune.love.stars);
  detailMoney.textContent = renderStars(fortune.money.stars);

  textWork.textContent  = fortune.work.text;
  textStudy.textContent = fortune.study.text;
  textLove.textContent  = fortune.love.text;
  textMoney.textContent = fortune.money.text;

  // 依星數設定顏色
  [detailWork, detailStudy, detailLove, detailMoney].forEach(el => {
    const stars = parseInt(el.textContent.split('☆')[0].length);
    el.style.color = stars >= 4 ? 'var(--gold)' : stars >= 3 ? 'var(--accent-primary)' : '#ef4444';
  });

  loadingSection.classList.add('hidden');
  resultSection.classList.remove('hidden');
}


// ============ 占卜流程 ============
function startDivine() {
  // 隱藏首頁 & 按鈕，顯示 loading
  heroSection.style.display  = 'none';
  oracleSection.classList.add('hidden');
  resultSection.classList.add('hidden');
  loadingSection.classList.remove('hidden');

  // 隨機選取一個結果
  const idx = Math.floor(Math.random() * FORTUNE_DATA.length);
  const fortune = FORTUNE_DATA[idx];

  // 模擬占卜延遲（1.5 ~ 2.5 秒）
  const delay = 1500 + Math.random() * 1000;
  setTimeout(() => showResult(fortune), delay);
}


// ============ 重新占卜 ============
function resetAndRetry() {
  resultSection.classList.add('hidden');
  heroSection.style.display = '';
  oracleSection.classList.remove('hidden');

  // 滾回頂部
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ============ 事件繫結 ============
divineBtn.addEventListener('click', startDivine);
retryBtn.addEventListener('click', resetAndRetry);


// ============ Canvas 星空背景 ============
(function initStarfield() {
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');
  let width, height, stars;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function createStars(count) {
    stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.3,
        alpha: Math.random(),
        delta: (Math.random() - 0.5) * 0.01
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    for (const s of stars) {
      s.alpha += s.delta;
      if (s.alpha <= 0.1 || s.alpha >= 1) s.delta = -s.delta;

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 180, 255, ${s.alpha.toFixed(2)})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  resize();
  createStars(150);
  draw();

  window.addEventListener('resize', () => {
    resize();
    createStars(150);
  });
})();
