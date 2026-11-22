# MVP Test Cases & Verification Log

- **Project:** Campus Operations – Ring Transit Optimization
- **Team:** Team DUO
- **Target Module:** `mvp/index.html`, `mvp/style.css`, `mvp/app.js`
- **Verification Policy:** Gerçekleştirilmemiş manuel testler `NOT RUN` olarak işaretlenir; insan doğrulaması sonrası `PASS` veya `FAIL` olarak güncellenir.

---

### TC-01: Örnek Durakların ve Simülasyon Uyarısının Doğru Görüntülenmesi
- **Test ID:** TC-01
- **Requirement ID:** REQ-01, REQ-06
- **Preconditions:** Tarayıcıda `LocalStorage` temizdir ve `mvp/index.html` dosyası tarayıcıda açılmıştır.
- **Test Steps:**
  1. `mvp/index.html` sayfasını açın.
  2. Sayfanın en üstündeki uyarı şeridini kontrol edin.
  3. Ana ekranda listelenen durak kartlarını sayın ve isimlerini kontrol edin.
- **Expected Result:** Sayfanın en üstünde `"Eğitim Amaçlı Prototip – Veriler Simülasyondur."` metni görünür. Ekranda **Durak A**, **Durak B** ve **Durak C** olmak üzere 3 durak kartı listelenir.
- **Actual Result:** Sayfa üstünde uyarı şeridi tam metin olarak görüntülendi; Durak A, Durak B ve Durak C kartları ekranda eksiksiz listelendi.
- **Status:** PASS

---

### TC-02: Tahmini Varış Sürelerinin (ETA) Doğru Görüntülenmesi
- **Test ID:** TC-02
- **Requirement ID:** REQ-02
- **Preconditions:** `mvp/index.html` başlangıç durumunda (`Simülasyon Adımı: 0`) açıktır.
- **Test Steps:**
  1. Durak A, Durak B ve Durak C kartlarındaki "Tahmini Varış (ETA)" alanlarını inceleyin.
  2. Her durakta sayısal dakika değerinin (`6 dk`, `2 dk`, `10 dk`) ve yaklaşan ring kodunun gösterildiğini doğrulayın.
- **Expected Result:** Tüm durak kartlarında geçerli, pozitif sayısal ETA değerleri `dk` birimiyle birlikte görünür.
- **Actual Result:** Başlangıç ekranında Durak A için `6 dk`, Durak B için `2 dk` ve Durak C için `10 dk` değerleri ring kodlarıyla birlikte doğrulandı.
- **Status:** PASS

---

### TC-03: Doluluk Göstergelerinin Örnek Verilerle Tutarlılığı
- **Test ID:** TC-03
- **Requirement ID:** REQ-03
- **Preconditions:** `mvp/index.html` başlangıç durumunda açıktır.
- **Test Steps:**
  1. Durak A (`14/40` yolcu - `%35`), Durak B (`30/40` yolcu - `%75`) ve Durak C (`38/40` yolcu - `%95`) kartlarındaki doluluk etiketlerini kontrol edin.
  2. Etiketlerin tanımlı eşik kurallarıyla (`<%50 Müsait`, `%50-%85 Yoğun`, `>%85 Dolu`) uyumlu olduğunu doğrulayın.
- **Expected Result:** Durak A için **Müsait**, Durak B için **Yoğun**, Durak C için **Dolu** etiketi hem metin hem de renk rozetiyle tutarlı biçimde gösterilir.
- **Actual Result:** Yolcu oranlarına göre Durak A "Müsait", Durak B "Yoğun", Durak C "Dolu" rozetiyle tutarlı biçimde görüntülendi.
- **Status:** PASS

---

### TC-04: Simülasyon İlerletme İşleminin Doğrulanması
- **Test ID:** TC-04
- **Requirement ID:** REQ-04
- **Preconditions:** `mvp/index.html` başlangıç durumunda (`Simülasyon Adımı: 0`) açıktır.
- **Test Steps:**
  1. **"Simülasyonu 1 Adım İlerlet (+2 dk)"** butonuna 1 kez tıklayın.
  2. Simülasyon adımı sayacını ve her durağın ETA ile doluluk bilgilerini kontrol edin.
- **Expected Result:** Simülasyon adımı `1` olur. Durak A ETA değeri `4 dk`, Durak B ETA değeri `0 dk (Durakta)`, Durak C ETA değeri `8 dk` olarak güncellenir; doluluk etiketleri yeni yolcu sayılarıyla tutarlı kalır.
- **Actual Result:** 1. adımda sayaç `1` oldu; ETA değerleri sırasıyla `4 dk`, `0 dk (Durakta)` ve `8 dk` olarak güncellendi, doluluk etiketleri tutarlı kaldı.
- **Status:** PASS

---

### TC-05: Çoklu Adımda ETA Değerinin Negatif Olmaması
- **Test ID:** TC-05
- **Requirement ID:** REQ-02, REQ-04
- **Preconditions:** `mvp/index.html` tarayıcıda açıktır.
- **Test Steps:**
  1. **"Simülasyonu 1 Adım İlerlet (+2 dk)"** butonuna art arda 10 kez tıklayın.
  2. Her tıklama sonrasında üç duraktaki ETA değerlerini gözlemleyin.
- **Expected Result:** Hiçbir durakta `-1 dk` veya `-2 dk` gibi negatif ETA değeri oluşmaz. ETA `0 dk (Durakta)` değerine ulaştıktan sonraki adımda sıradaki örnek ring döngüsü pozitif başlangıç ETA değeriyle devreye girer.
- **Actual Result:** 10 ardışık adımda hiçbir durakta negatif ETA oluşmadı; `0 dk (Durakta)` sonrası yeni ring döngüsü pozitif süreyle başladı.
- **Status:** PASS

---

### TC-06: Simülasyonun Başlangıç Durumuna Sıfırlanması
- **Test ID:** TC-06
- **Requirement ID:** REQ-05
- **Preconditions:** Simülasyon en az 2 adım ilerletilmiş durumdadır (`Simülasyon Adımı >= 2`).
- **Test Steps:**
  1. **"Başlangıç Durumuna Sıfırla"** butonuna tıklayın.
  2. Simülasyon adım sayacını ve durak kartlarındaki verileri kontrol edin.
  3. Tarayıcı sayfasını yenileyerek (F5 / Cmd+R) başlangıç durumunun korunduğunu doğrulayın.
- **Expected Result:** Simülasyon adımı `0` değerine döner; Durak A (`6 dk`, `Müsait`), Durak B (`2 dk`, `Yoğun`) ve Durak C (`10 dk`, `Dolu`) ilk değerlerine geri yüklenir. Sayfa yenilendiğinde de sıfırlanmış başlangıç verileri görünür.
- **Actual Result:** Sıfırlama sonrası adım sayacı `0` oldu, tüm duraklar ilk değerlerine döndü ve sayfa yenilendiğinde başlangıç durumunun korunduğu görüldü.
- **Status:** PASS
