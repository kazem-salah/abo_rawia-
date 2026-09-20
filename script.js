const menuData = {"restaurant": {"name": "أبو راويه", "english": "ABO RAWIA'S RESTAURANTS", "since": "Since 1968", "address": "30 شارع الحجاري، بحري، الإسكندرية", "phones": ["04810572", "04843500"], "whatsapp": ["201204753033", "201228885354"], "note": "استعداد تام لإقامة الحفلات الداخلية والخارجية — عروض مميزة لعشاء العرائس"}, "categories": [{"id": "grills", "name": "المشويات", "items": [["كباب (بتلو / ضاني)", "415 جنيه / ⅓ كجم", "1100 جنيه / كجم"], ["كفتة", "315 جنيه / ⅓ كجم", "820 جنيه / كجم"], ["ريش ضاني", "480 جنيه / ⅓ كجم", "1280 جنيه / كجم"], ["بوفتيك ضاني", "450 جنيه / ⅓ كجم", "1200 جنيه / كجم"], ["ريش بتلو", "390 جنيه / ⅓ كجم", "1040 جنيه / كجم"], ["مشكل (لحمة وكفتة)", "345 جنيه / ⅓ كجم", "900 جنيه / كجم"], ["مشكل (كباب وكفتة)", "380 جنيه / ⅓ كجم", "960 جنيه / كجم"], ["ميكس جريل", "370 جنيه / ⅓ كجم", "982 جنيه / كجم"], ["فلتو", "370 جنيه / ⅓ كجم", "980 جنيه / كجم"], ["أنتركوت مشوي", "360 جنيه / ⅓ كجم", "960 جنيه / كجم"], ["كبدة بتلو", "480 جنيه / ⅓ كجم", "1280 جنيه / كجم"], ["كبدة (ضاني / مخاصي)", "385 جنيه / ⅓ كجم", "1020 جنيه / كجم"], ["نيفة", "480 جنيه / ⅓ كجم", "1280 جنيه / كجم"], ["طرب", "385 جنيه / ⅓ كجم", "1020 جنيه / كجم"], ["كفتة شامي", "330 جنيه / ⅓ كجم", "880 جنيه / كجم"], ["موزة أبو راوية المميزة", "490 جنيه / ⅓ كجم", "—"], ["سجق", "310 جنيه / ⅓ كجم", "820 جنيه / كجم"], ["شيش طاووق", "240 جنيه / ⅓ كجم", "600 جنيه / كجم"]]}, {"id": "oriental", "name": "المطبخ الشرقي", "items": [["طبق اليوم (ممنوع من اختيار الشيف)", "490 جنيه"], ["موزة (ضاني/بتلو) مع أرز بالخلطة والمحاشي", "490 جنيه"], ["موزة (ضاني/بتلو) مع الفتة والمحاشي", "490 جنيه"], ["موزة (ضاني/بتلو) بالشوربة", "490 جنيه"], ["ورقة لحمة بالبطاطس", "290 جنيه"], ["1/2 بطة بلدي مع الأرز بالخلطة والمحاشي", "450 جنيه"], ["حمام محشي (بالفريك أو الأرز)", "190 جنيه"], ["طاجن خضار مشكل باللحمة", "270 جنيه"], ["طاجن لسان عصفور باللحمة", "270 جنيه"], ["طاجن عكاوي بلسان العصفور والموزاريلا", "270 جنيه"], ["طاجن مسقعة باللحمة المفرومة والموزاريلا", "270 جنيه"], ["كوارع بالفلفل", "250 جنيه"], ["إسكالوب بانيه", "250 جنيه"], ["فراخ بانيه", "200 جنيه"], ["كبدة خليجي (لحمة)", "350 جنيه"], ["كبدة خليجي (فراخ)", "275 جنيه"], ["وجبة ميكس (1/4 بطة - فرد حمام محشي)", "400 جنيه"], ["1/2 فرخة روستو بالفرن", "200 جنيه"], ["بطاطس بوريه", "80 جنيه"], ["أوزي مصري (حسب الوزن)", "180 جنيه / كجم", "تسوية على أواني — شامل المحاشي والأرز والبطاطس والسلطات"]]}, {"id": "appetizers", "name": "المقبلات", "items": [["ورق عنب - كوسة - فلفل رومي - باذنجان", "طبق صغير 120 / وسط 180 / كبير 250 جنيه"], ["قرنبيط - خرشوف باللحمة - جلاش باللحمة - رقاق باللحمة", "طبق صغير 120 / وسط 180 / كبير 250 جنيه"], ["كانيلوني - سمبوسك (لحمة/جبنة) - كبيبة", "طبق صغير 120 / وسط 180 / كبير 250 جنيه"], ["مبار", "وسط 180 / كبير 250 جنيه"], ["ملوخية خضراء", "70 جنيه"], ["بطاطس بوم فريت", "80 جنيه"], ["فلفل", "60 جنيه"], ["طواجن سادة (خضار - بامية)", "70 جنيه"], ["طاجن ورق عنب بالكوارع", "180 جنيه"]]}, {"id": "soups", "name": "الشوربة", "items": [["شوربة لحمة بلسان العصفور", "40 جنيه"], ["شوربة طماطم", "60 جنيه"], ["شوربة عدس", "60 جنيه"], ["شوربة لحمة بقطع اللحمة", "150 جنيه"], ["شوربة حمام بقطع الحمام", "90 جنيه"], ["شوربة فراخ بالكريمة بقطع الفراخ", "90 جنيه"], ["شوربة خضار", "60 جنيه"], ["شوربة كوارع", "100 جنيه"], ["شوربة مغربي", "60 جنيه"]]}, {"id": "rice", "name": "الأرز والمكرونة", "items": [["برام أرز مع اللحمة", "100 جنيه"], ["أرز خلطة (بالمكسرات)", "70 جنيه"], ["أرز بالكبد والكلاوي", "65 جنيه"], ["أرز بسمتي", "70 جنيه"], ["أرز باللحمة المفرومة", "65 جنيه"], ["أرز بالشعرية", "40 جنيه"], ["فتة بالخل والثوم", "65 جنيه"], ["مكرونة فرن", "65 جنيه"], ["مكرونة اسباجتي بولونيز", "75 جنيه"], ["مكرونة نجرسكو", "90 جنيه"], ["مكرونة إيطاليانو وايت صوص", "75 جنيه"], ["مكرونة إيطاليانو صوص أحمر", "60 جنيه"]]}, {"id": "drinks", "name": "الحلو والمشروبات", "items": [["شاي", "25 جنيه"], ["شاي أخضر", "30 جنيه"], ["قهوة", "30 جنيه"], ["كابتشينو", "30 جنيه"], ["كريم كراميل", "40 جنيه"], ["آيس كريم", "40 جنيه"], ["آيس تي لتر", "40 جنيه"], ["آيس تي 2 لتر", "45 جنيه"], ["مياه معدنية ص", "10 جنيه"], ["مياه معدنية ك", "20 جنيه"], ["أرز باللبن", "40 جنيه"]]}, {"id": "trays", "name": "الصواني", "items": [["صينية الفخم", "1710 جنيه في المطعم / 1410 جنيه تيك أواي", "كيلو إلا ربع مشكل كفتة ولحمة وشيش طاووق وكباب وفرخة شيش مع 2 حمام رز أو فريك، مع أرضية رز ومحاشي و3 مشروب هدية"], ["صينية العيلة", "2180 جنيه في المطعم / 1810 جنيه تيك أواي", "3 حمامات وكيلو مشكل كفتة وكباب ولحمة وشيش طاووق وفرخة شيش مع أرضية رز ومحاشي ومعاها 4 مشروب هدية"], ["صينية الصحاب", "1400 جنيه في المطعم / 1000 جنيه تيك أواي", "فرخة مشوية ونص كفتة مشوية + رز خلطة ورز بسمتي + سلطات + محاشي"]]}, {"id": "offers", "name": "العروض", "items": [["مرموش", "120 جنيه", "وجبة ربع فرخة + أرضية رز خلطة + 3 قطع محاشي + ثلاث علب سلطة متنوعة + عيش"], ["ترزيجية", "160 جنيه", "وجبة ربع فرخة + 2 كفتة + أرضية رز خلطة + 3 قطع محاشي + ثلاث علب سلطة متنوعة + عيش"], ["صلاح", "225 جنيه", "وجبة ربع فرخة + 2 كفتة + شريحة لحمة + 3 قطع محاشي + ثلاث علب سلطة متنوعة + عيش"], ["شوبير", "200 جنيه", "مشكل كفتة واحدة + رز خلطة + 3 قطع محاشي + 3 علب سلطة متنوعة + عيش"], ["زيكو", "500 جنيه", "نص فرخة + تلت مشكل لحمة وكفتة وشيش + رز خلطة ورز بسمتي + أرضية + محاشي"], ["إمام عاشور", "550 جنيه", "حمامة رز أو فريك + تلت مشكل لحمة وكفتة وشيش + رز خلطة ورز بسمتي + أرضية + محاشي"]]}]};

const categoriesEl = document.getElementById("categories");
const menuRoot = document.getElementById("menuRoot");
const search = document.getElementById("search");
const emptyState = document.getElementById("emptyState");

function normalize(s){
  return s.toLowerCase()
    .replace(/[أإآ]/g,"ا")
    .replace(/ة/g,"ه")
    .replace(/ى/g,"ي")
    .replace(/[ًٌٍَُِّْ]/g,"");
}

function renderCategories(){
  categoriesEl.innerHTML = menuData.categories.map((cat,i)=>
    `<a href="#${cat.id}" class="${i===0?'active':''}">${cat.name}</a>`
  ).join("");
}

function itemHTML(item){
  const [name, price, sub] = item;
  const priceParts = price.split(" / ");
  const priceHtml = priceParts.length > 1
    ? `<div class="price-stack">${priceParts.map(p=>`<span>${p}</span>`).join("")}</div>`
    : `<div class="item-price">${price}</div>`;
  return `<article class="menu-item" data-search="${normalize([name,price,sub||""].join(" "))}">
    <div class="item-top"><div class="item-name">${name}</div>${priceHtml}</div>
    ${sub ? `<div class="item-sub">${sub}</div>` : ""}
  </article>`;
}

function renderMenu(filter=""){
  const q = normalize(filter.trim());
  let visibleCount = 0;
  menuRoot.innerHTML = menuData.categories.map(cat=>{
    const items = cat.items.filter(item => !q || normalize(item.join(" ")).includes(q));
    if(!items.length) return "";
    visibleCount += items.length;
    return `<section id="${cat.id}" class="menu-category">
      <div class="category-title"><h3>${cat.name}</h3></div>
      <div class="items-grid">${items.map(itemHTML).join("")}</div>
    </section>`;
  }).join("");
  emptyState.hidden = visibleCount !== 0;
  document.querySelectorAll(".category-nav a").forEach(a=>a.classList.remove("active"));
}

search.addEventListener("input", e => renderMenu(e.target.value));
renderCategories();
renderMenu();

document.querySelectorAll(".category-nav a").forEach(a=>{
  a.addEventListener("click",()=>{
    document.querySelectorAll(".category-nav a").forEach(x=>x.classList.remove("active"));
    a.classList.add("active");
  });
});

// QR Code generator
let qr;
const urlInput = document.getElementById("siteUrl");
const qrTarget = document.getElementById("qrcode");
const downloadBtn = document.getElementById("downloadQr");

function generateQR(){
  if(typeof QRCode === "undefined") return;
  const value = urlInput.value.trim() || window.location.href;
  qrTarget.innerHTML = "";
  qr = new QRCode(qrTarget, {text:value, width:190, height:190, correctLevel:QRCode.CorrectLevel.H});
  downloadBtn.disabled = false;
}
document.getElementById("generateQr").addEventListener("click", generateQR);

downloadBtn.addEventListener("click",()=>{
  const canvas = qrTarget.querySelector("canvas");
  const img = qrTarget.querySelector("img");
  const src = canvas ? canvas.toDataURL("image/png") : (img ? img.src : null);
  if(!src) return;
  const a=document.createElement("a");
  a.href=src; a.download="abo-rawia-menu-qr.png"; a.click();
});
generateQR();
