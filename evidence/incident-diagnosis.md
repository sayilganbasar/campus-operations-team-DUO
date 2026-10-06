# Incident Diagnosis — YerimVar Case Study

## Breakpoint 1: Eşzamanlı İsteklerde Çifte Rezervasyon ve Veri Tutarsızlığı

### What happened?
Yoğun talep anında aynı boş kontenjan/yer için eşzamanlı gelen isteklerde sistem tutarsız duruma düştü; aynı yer birden fazla kullanıcıya onaylandı ve ardından servis yanıt veremez hale gelerek çöktü.

### Process Gap
Eşzamanlılık (concurrency) ve yarış durumu (race condition) senaryolarının mimari tasarım ve test süreçlerine dahil edilmemesi. Sistemin dağıtım (deployment) öncesinde gerçek dünya yükünü simüle eden stres ve yük testi (stress/load testing) süreçlerinden geçirilmeden canlıya alınması.

### Missing Evidence
- Yük testi (Load Testing) sonuç raporları ve eşzamanlı işlem sınır testleri (Concurrency Benchmark Logs).
- Veritabanı transaction seviyesi ve veri bütünlüğü (ACID/Locking) doğrulama test kayıtları.

---

## Breakpoint 2: Doğrulanmamış Kullanıcı Varsayımı ve "Hayalet Rezervasyon" (No-Show) Krizi

### What happened?
Sistem üzerinde tüm yerler "dolu" görünürken, rezervasyon yapan kullanıcıların fiziksel olarak alana gitmemesi nedeniyle fiziksel kapasite boş kaldı; gerçek ihtiyaç sahipleri hizmete erişemedi ve operasyon fiilen kilitlendi.

### Process Gap
Kullanıcı davranışlarının doğrulanmamış varsayımlara dayandırılması. İhtiyaç analizi aşamasında bir caydırıcılık, onaylama (check-in) veya zaman aşımı (timeout/release) mekanizması tasarlanmaması; sahadaki fiziksel gerçeklik ile dijital durum arasındaki kopukluğun bir risk olarak yönetilmemesi.

### Missing Evidence
- Kullanıcı kabul testlerinde doğrulanmış "no-show" senaryosu analiz dokümanı.
- Sahadaki fiziksel kullanım ile dijital rezervasyon durumunu eşleştiren otomatik iptal/serbest bırakma kural seti kanıtı.

---

## Breakpoint 3: Canlı Ortamda Kör Uçuş (Observability & Rollback Eksikliği)

### What happened?
Sistem canlıya alındıktan sonra operasyonel hatalar dakikalarca devam etti; geliştirici ekip sorunu sistem alarmları yerine son kullanıcılardan gelen şikayetlerle fark edebildi ve sistemi hızlıca kararlı bir sürüme geri çekemedi.

### Process Gap
Canlı ortam izleme (observability), telemetri ve hata uyarı (alerting) süreçlerinin kurulmamış olması. Bir acil durum müdahale planı (Incident Response Protocol) ve tek tuşla geri alma (rollback) mekanizmasının dağıtım sürecinin zorunlu bir adımı olarak işletilmemesi.

### Missing Evidence
- Canlıya çıkış öncesi kontrol listesi (Production Readiness Checklist).
- Hata oranlarını ve yanıt sürelerini gösteren APM/Log izleme paneli ve alarm eşik değerleri dokümantasyonu.

---

## AI Usage Record
- **AI Tool(s):** Gemini
- **AI Role:** Structuring root cause analysis and formulating process gaps
- **Human Review:** Completed (Technical breakpoints evaluated and verified by Başar Sayılgan, İsmail Coşkun)
- **Final Decision:** Breakpoint categories and engineering evidence standards accepted
