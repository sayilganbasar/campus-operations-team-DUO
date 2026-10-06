# Instructor Feedback — Week 01 Engineering Evidence

**Course:** Yazılım Geliştirme Süreçleri  
**Project:** Campus Operations — Solo Project  
**Student:** Başar Sayılgan  
**Review:** Week 01 Engineering Evidence

---

## Overall Assessment

Başar,

Week 01 çalışmanı başarılı buldum. Repository yapın, problem tanımın
ve Engineering Evidence belgelerin dersin temel mühendislik yaklaşımıyla
uyumludur.

Özellikle çalışmanın yalnızca bir “proje fikri” sunmaması; problem,
stakeholder, unknowns, assumptions, AI önerileri, Human Judgment ve
Evidence Needed arasında bağlantı kurması güçlü bir başlangıçtır.

> **Problem → Human Judgment → AI Assistance → Engineering Evidence → Repository**

zincirinin çalışmanda görünür olması değerlidir.

---

## 1. Problem Statement — Very Strong

`docs/problem-statement-v0.md` çalışmanın en güçlü bölümlerinden biridir.

Kampüs içi ring/servis problemini yalnızca
“ringler gecikiyor” şeklinde tanımlamak yerine;

- öğrenciler,
- akademik/idari personel,
- şoförler,
- kampüs ulaşım yönetimi

gibi farklı stakeholder perspektiflerinden ele almışsın.

Ayrıca **Known Unknowns → Assumptions → Required Evidence**
ayrımının kurulmuş olması önemli bir engineering practice'tir.

Özellikle şu soru değerlidir:

> Gerçekten araç kapasitesi mi yetersiz, yoksa mevcut kapasite
> yanlış saatlerde veya yanlış noktalarda mı kullanılıyor?

Bu sorunun cevabını henüz bildiğini varsaymaman doğru yaklaşımdır.

### Engineering Challenge

İlerleyen haftalarda aşağıdaki varsayımlarından en az birini gerçek
evidence ile test etmeye çalış:

> “Ara duraklardaki öğrenciler ilk duraktakilere göre daha fazla
> mağdur olmaktadır.”

Bu iddia doğrulanırsa ürün kararlarını etkileyebilir; yanlışlanırsa
problem tanımının değişmesi gerekebilir.

---

## 2. AI → Human → Evidence — Strong

`evidence/ai-human-evidence.md` içinde AI önerilerini doğrudan kabul
etmemiş olman özellikle olumlu.

Üç farklı öneri için:

- **MODIFY**
- **REJECT**
- **UNCERTAIN**

kararlarını kullanman Human Judgment'ın görünür olduğunu gösteriyor.

Özellikle yüz tanıma ve koltuk rezervasyonu önerisini
over-engineering, operasyonel maliyet ve kişisel veri riskleri
üzerinden reddetmen iyi bir engineering rationale örneğidir.

Makine öğrenmesi önerisini doğrudan kabul etmek yerine veri
mevcudiyetini sorgulayıp **UNCERTAIN** bırakman da doğru yaklaşımdır.

> **AI output ≠ Engineering Evidence**

AI'nın ikna edici bir çözüm üretmesi, o çözümün proje bağlamında
doğru olduğu anlamına gelmez.

Bu yaklaşımı dönem boyunca korumanı bekliyorum.

---

## 3. Incident Diagnosis — Technically Strong, But Watch the Abstraction Level

`evidence/incident-diagnosis.md` teknik açıdan güçlü bir çalışma.

Concurrency, race condition, load testing, observability ve rollback
gibi kavramları süreç boşluklarıyla ilişkilendirebilmişsin.

Ancak burada önemli bir engineering discipline noktasına dikkat:

Week 01'de temel hedefimiz henüz belirli ileri teknik çözümleri
seçmek değil, **hangi evidence'ın eksik olduğunu teşhis etmek.**

Örneğin:

> “Sistemin eşzamanlı kullanım altında güvenilir davrandığını
> gösteren kanıta ihtiyacımız var.”

önce gelir.

Bunun daha sonra load test, concurrency test veya başka bir teknik
mekanizmayla nasıl doğrulanacağı ayrı bir engineering decision'dır.

Bu nedenle ilerleyen çalışmalarda şu ayrımı koru:

**Evidence Need → Engineering Decision → Tool / Technique**

Araç veya ileri teknik kavram, evidence ihtiyacının önüne geçmemelidir.

---

## 4. Repository & Engineering History — Good Start

Repository yapın temiz ve beklenen Week 01 yapısıyla uyumludur:

```text
campus-operations-team-solo/
├── README.md
├── docs/
│   └── problem-statement-v0.md
└── evidence/
    ├── incident-diagnosis.md
    └── ai-human-evidence.md
