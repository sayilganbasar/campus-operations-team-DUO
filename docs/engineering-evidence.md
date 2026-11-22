# Engineering Evidence – MVP Development & Process Traceability

- **Project:** Campus Operations – Ring Transit Optimization
- **Team:** Team DUO
- **Development Approach:** Iterative & Incremental
- **Workflow Management:** Kanban (WIP Limit: `In Progress` maksimum 2 görev)
- **Working Principles:** Agile

---

## 1. Geliştirilen İşlevler
- **Ring Bilgi Paneli (`mvp/index.html`, `mvp/app.js`):** Üç örnek kampüs durağı (**Durak A**, **Durak B**, **Durak C**) için yaklaşan ring kodu, dakika bazlı tahmini varış süresi (ETA) ve kategorik doluluk durumu kart yapısında sunulmuştur.
- **Kural Tabanlı Doluluk Hesaplama:** Örnek yolcu sayısı ve araç kapasitesi oranından deterministik olarak **Müsait** (`<%50`), **Yoğun** (`%50–%85`) ve **Dolu** (`>%85`) durumları türetilmiştir.
- **Adımlı Simülasyon ve Sıfırlama Kontrolleri:** Kullanıcının zamanı `+2 dk` adımlarla ilerletmesini sağlayan, negatif ETA üretimini engelleyen ve tek tıkla başlangıç durumuna dönüş sunan kontrol mekanizması geliştirilmiştir.
- **Platformlar Arası Uyumlu ve Erişilebilir Arayüz (`mvp/style.css`):** CSS Grid ve DPI/ölçekleme sabitlemeleri ile hem macOS hem de Windows ekranlarında tutarlı görünen, renk körlüğüne karşı metin etiketleriyle desteklenen arayüz oluşturulmuştur.

## 2. Kullanılan Teknolojiler ve Tercih Nedenleri
- **HTML5:** Semantik etiketler (`<header>`, `<main>`, `<section>`, `<article>`) ve `aria-live` özellikleri ile ekran okuyucu uyumluluğu ve temiz belge yapısı sağlamak amacıyla seçilmiştir.
- **CSS3:** Harici bir UI kütüphanesine bağımlılık oluşturmadan CSS değişkenleri ve Responsive Grid ile hafif, hızlı yüklenen ve farklı işletim sistemlerinde tutarlı görünen bir tasarım oluşturmak için tercih edilmiştir.
- **Vanilla JavaScript (ES6+):** İkinci sınıf yazılım mühendisliği düzeyinde kolay incelenebilir, derleme (build) adımı gerektirmeyen modüler fonksiyonlarla iş mantığını doğrudan göstermek amacıyla seçilmiştir.
- **LocalStorage:** Harici bir veritabanı veya backend kurmadan sayfa yenilemelerinde simülasyon adımının korunabilmesi için kullanılmıştır.

## 3. Gerçek Veri Yerine Simülasyon Kullanımının Gerekçesi
- `docs/problem-statement-v0.md` ve `evidence/ai-human-evidence.md` belgelerinde belirlendiği üzere, kampüs ring araçlarına GPS donanımı takılması veya kurumsal veri entegrasyonu yüksek maliyet ve KVKK/izin süreçleri gerektirmektedir.
- Yinelemeli ve artımlı (Iterative & Incremental) yaklaşım gereği, donanım ve sunucu yatırımına geçmeden önce kullanıcı arayüzünün anlaşılırlığını ve bilgi sunum modelini doğrulamak amacıyla açıkça etiketlenmiş **Simulated Data / Demo Data** kullanılmıştır.

## 4. Bilinen Sınırlılıklar
- Gösterilen durak adları (**Durak A, B, C**), sefer süreleri ve yolcu sayıları gerçek kampüs operasyonunu yansıtmaz; eğitim amaçlı statik/kurgusal kurallarla üretilir.
- Trafik yoğunluğu, hava durumu veya araç arızası gibi dinamik dış etkenler simülasyon modeline dahil değildir.
- Çok kullanıcılı merkezi bir veri senkronizasyonu yoktur; durum bilgisi yalnızca kullanıcının kendi tarayıcısındaki `LocalStorage` alanında tutulur.

## 5. Gerçekleştirilen ve Henüz Gerçekleştirilmeyen Testler
- **Gerçekleştirilen Testler:** `docs/test-cases.md` dosyasında tanımlanan **TC-01, TC-02, TC-03, TC-04, TC-05 ve TC-06** manuel test senaryolarının tamamı tarayıcı üzerinde çalıştırılmış ve **`PASS`** olarak doğrulanmıştır.
- **Henüz Gerçekleştirilmeyen Testler:** Otomatik birim testleri (unit test suite) ve çok kullanıcılı yük testleri MVP kapsamı dışında bırakılmıştır.

## 6. İnsan Tarafından Doğrulanması Gereken Kararlar
- [x] Arayüzdeki `"Eğitim Amaçlı Prototip – Veriler Simülasyondur."` uyarısının ve kart hiyerarşisinin görsel okunabilirliğinin kontrol edilmesi.
- [x] `docs/test-cases.md` içindeki 6 test senaryosunun tarayıcıda bizzat çalıştırılarak `Actual Result` ve `Status` (`PASS`) alanlarının doldurulması.
- [x] Doluluk eşik oranlarının (`%50` ve `%85`) proje kapsamı açısından uygunluğunun onaylanması.
- [ ] Diğer takım üyesi tarafından kod ve dokümanlar için **Peer Review** yapılması.

## 7. Yapay Zekâ Kullanım Beyanı ve Süreç Şeffaflığı
- **Kullanılan AI Aracı:** Gemini
- **Kullanım Amacı:** 4. hafta geri bildirimine uygun süreç hizalamasının yapılması, `mvp-requirements.md`, `test-cases.md` ve `engineering-evidence.md` yapılarının oluşturulması ve HTML5/CSS3/Vanilla JS prototip kodunun geliştirilmesi.
- **İnsan Doğrulaması:** Üretilen tüm gereksinimler, simülasyon mantığı ve test senaryoları Team DUO üyeleri tarafından incelenip tarayıcı ortamında çalıştırılarak doğrulanmıştır.
- **GitHub Durum Notu:** Sürüm kontrol işlemleri (Commit/Push) yapay zekâ tarafından otomatik yapılmamış, takım üyelerinin inceleme ve onayı sonrasında manuel olarak gerçekleştirilmiştir.
