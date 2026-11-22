# MVP Requirements & Acceptance Criteria

- **Project:** Campus Operations – Ring Transit Optimization
- **Team:** Team DUO
- **Version:** 1.0 (MVP)
- **Data Policy:** Tüm sefer, süre ve doluluk verileri **Simulated Data / Demo Data** kapsamındadır.

---

## REQ-01: Durakların Görüntülenmesi
**Tanım:** Kullanıcı, sistemde tanımlı örnek kampüs duraklarını tek ekranda liste/kart yapısında görüntüleyebilmelidir.

**Kabul Kriterleri (Acceptance Criteria):**
- [ ] Arayüz açıldığında en az üç örnek durak (**Durak A**, **Durak B**, **Durak C**) görünür olmalıdır.
- [ ] Her durak kartında durak adı ve durağa yaklaşan örnek ring kodu açıkça okunabilmelidir.
- [ ] Gerçek kampüs durağı veya canlı hat izlenimi veren ifadeler yer almamalıdır.

---

## REQ-02: Tahmini Varış Sürelerinin (ETA) Görüntülenmesi
**Tanım:** Kullanıcı, her durak için yaklaşan ring aracının tahmini varış süresini (ETA) dakika cinsinden görebilmelidir.

**Kabul Kriterleri (Acceptance Criteria):**
- [ ] Her durak kartında yaklaşan ringe ait sayısal bir ETA değeri (`dk` birimiyle) gösterilmelidir.
- [ ] ETA değeri hiçbir simülasyon adımında `0`'ın altına (negatif değere) düşmemelidir (`ETA >= 0`).
- [ ] ETA değeri `0` olduğunda aracın durakta olduğu kullanıcıya anlaşılır biçimde belirtilmelidir.

---

## REQ-03: Ring Doluluk Durumlarının Görüntülenmesi
**Tanım:** Kullanıcı, yaklaşan ring araçlarının doluluk seviyesini kategorik olarak görebilmelidir.

**Kabul Kriterleri (Acceptance Criteria):**
- [ ] Her ring için yalnızca tanımlı üç durumdan biri gösterilmelidir: **Müsait**, **Yoğun** veya **Dolu**.
- [ ] Doluluk durumu, simüle edilen yolcu sayısının araç kapasitesine oranından (`%0–49: Müsait`, `%50–85: Yoğun`, `%86–100: Dolu`) tutarlı biçimde türetilmelidir.
- [ ] Doluluk bilgisi yalnızca renkle değil, metin etiketiyle de sunularak erişilebilirlik sağlanmalıdır.

---

## REQ-04: Simülasyonun İlerletilmesi
**Tanım:** Kullanıcı, zaman akışını ve sefer değişimlerini gözlemlemek için simülasyonu manuel olarak bir adım ilerletebilmelidir.

**Kabul Kriterleri (Acceptance Criteria):**
- [ ] Arayüzde açıkça etiketlenmiş bir **"Simülasyonu 1 Adım İlerlet"** kontrol butonu bulunmalıdır.
- [ ] Butona her tıklandığında simülasyon sayacı `1` artmalı ve her durağın ETA değeri sabit adım süresi (`2 dk`) kadar azalmalıdır.
- [ ] ETA `0` değerine ulaştığında bir sonraki simülasyon adımında yeni örnek sefer döngüsü başlatılmalı ve negatif değer üretilmemelidir.
- [ ] Her adımda simüle edilen yolcu sayısı güncellenmeli ve doluluk etiketi (`Müsait` / `Yoğun` / `Dolu`) yeni yolcu oranıyla tutarlı olmalıdır.

---

## REQ-05: Simülasyonun Başlangıç Durumuna Sıfırlanması
**Tanım:** Kullanıcı, demo sırasında değiştirdiği simülasyon verilerini tek işlemle ilk haline döndürebilmelidir.

**Kabul Kriterleri (Acceptance Criteria):**
- [ ] Arayüzde **"Başlangıç Durumuna Sıfırla"** kontrol butonu bulunmalıdır.
- [ ] Butona tıklandığında simülasyon adım sayacı `0` değerine dönmelidir.
- [ ] Durak A, Durak B ve Durak C için ETA ve doluluk değerleri başlangıçtaki örnek veri setiyle birebir aynı olmalıdır.
- [ ] `LocalStorage` üzerinde saklanan geçici simülasyon durumu temizlenmeli/sıfırlanmalıdır.

---

## REQ-06: Simülasyon Verisi Bildirimi
**Tanım:** Arayüz, gösterilen tüm verilerin eğitim amaçlı simülasyon verisi olduğunu kullanıcıya açıkça bildirmelidir.

**Kabul Kriterleri (Acceptance Criteria):**
- [ ] Sayfanın üst bölümünde (header/banner alanında) tam olarak **"Eğitim Amaçlı Prototip – Veriler Simülasyondur."** ifadesi yer almalıdır.
- [ ] Durak kartlarında veya bilgi alanlarında verilerin "Simulated Data / Demo Data" olduğu belirtilmeli, gerçek zamanlı GPS takibi yapıldığı iddia edilmemelidir.
