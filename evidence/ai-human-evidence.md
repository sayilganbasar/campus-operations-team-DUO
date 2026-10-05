# AI-Human Engineering Evidence Matrix

## AI Proposal 1: Canlı GPS Haritası İçeren Yerli Mobil Uygulama Geliştirilmesi

### AI Proposal
Tüm öğrencilerin indireceği, ringlerin harita üzerinde nerede olduğunu anlık gösteren ve durakta kaç dakika sonra olacağını bildiren bir native mobil uygulama geliştirilmesi.

### Human Decision
MODIFY

### Why?
Mühendislik açısından doğrudan mobil uygulama yazmaya atlamak hatalı bir yaklaşımdır. Her öğrencinin uygulama indirmesini beklemek gerçekçi değildir ve uygulamanın varlığı ringlerin fiziksel yetersizliğini çözmez. Öncelikli olarak harita çizmek yerine, duraklara konumlandırılacak basit dijital bilgi panoları veya web tabanlı hafif bir gösterge ile durak bazlı tahmini varış süresinin (ETA) doğruluğu test edilmelidir.

### Evidence Needed
- Durakta bekleyen öğrencilerin mobil uygulama yükleme istekliliği ve kullanım alışkanlıklarını ölçen anket verisi.
- Araçlara takılacak GPS takip donanımlarının üniversite bütçesi ve teknik altyapısıyla uyum fizibilite raporu.

---

## AI Proposal 2: Ring Binişlerinde Yapay Zeka Destekli Yüz Tanıma ve Koltuk Rezervasyonu

### AI Proposal
Ring duraklarına yüz tanıma kameraları yerleştirilerek öğrencilerin önceden ayırttıkları koltuklara sırayla ve biyometrik doğrulama ile binmesini sağlamak.

### Human Decision
REJECT

### Why?
Aşırı mühendislik (over-engineering), yüksek maliyet ve operasyonel tıkanıklık riski taşımaktadır. Saniyeler içinde gerçekleşmesi gereken biniş sürecine biyometrik doğrulama eklemek durak kuyruklarını daha da uzatır. Ayrıca üniversite ortamında yüz verisi işlemek ciddi KVKK ve kişisel veri gizliliği engelleri doğurur.

### Evidence Needed
- KVKK ve üniversite bilgi güvenliği politika dokümanları.
- Biyometrik doğrulamanın yolcu başına biniş süresine (sn/kişi) getireceği gecikmeyi gösteren akış simülasyonu.

---

## AI Proposal 3: Geçmiş Sefer Verileriyle Makine Öğrenmesi Destekli Dinamik Sefer Çizelgelemesi

### AI Proposal
Tarihsel sefer gecikmelerini ve öğrenci ders yoğunluklarını analiz ederek pik saatlerde sefer aralıklarını otomatik optimize eden bir yapay zeka tahminleme modeli kurmak.

### Human Decision
UNCERTAIN

### Why?
Fikir teorik olarak güçlüdür ancak üniversitenin elinde bu modeli eğitebilecek yapılandırılmış, temiz ve geçmişe dönük sefer gecikme veri seti (dataset) olup olmadığı bilinmemektedir. Yeterli veri olmadan model geliştirmek "çöp veri girer, çöp sonuç çıkar" (garbage in, garbage out) riskini doğurur.

### Evidence Needed
- Üniversite Ulaşım Daire Başkanlığı'ndan geriye dönük en az 6 aylık sefer logları ve gecikme verilerinin mevcudiyet teyidi.
- Öğrenci İşleri Daire Başkanlığı'ndan fakülte bazlı toplu ders başlangıç/bitiş saatleri veri erişim izni.

---

## AI Usage Record
- **AI Tool(s):** Gemini
- **AI Role:** Drafting solution proposals and structuring decision templates
- **Human Review:** Completed (Proposals critically challenged, decisions justified, and evidence requirements defined by Başar Sayılgan)
- **Final Decision:** 1 MODIFY, 1 REJECT, 1 UNCERTAIN decision approved
