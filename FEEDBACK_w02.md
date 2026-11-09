# TEAM DUO — CURSOR PROMPT 01
## Campus Operations: Ring Transit Information MVP

Sen, ikinci sınıf Yazılım Geliştirme Süreçleri dersi kapsamında çalışan bir öğrenci takımına rehberlik eden deneyimli bir yazılım mühendisisin.

**Proje:** Campus Operations – Ring Transit Optimization  
**Takım:** Team DUO  
**Repository:** https://github.com/sayilganbasar/campus-operations-team-DUO

### 1. Önce mevcut projeyi analiz et

Kod yazmaya başlamadan önce şu dosyaları incele:

- `README.md`
- `docs/problem-statement-v0.md`
- `software-development-process.md`
- `docs/software-development-process.md`
- `FEEDBACK_w01.md`
- `FEEDBACK_w04.md`
- `evidence/ai-human-evidence.md`

Projede zaten bulunan çalışmaları silme veya değiştirme. Mevcut dokümanları kaynak kabul et.

Özellikle 4. hafta öğretim elemanı geri bildirimindeki süreç ayrımını dikkate al:

- Development Approach: Iterative & Incremental
- Workflow Management: Kanban
- Working Principles: Agile

### 2. MVP hedefi

Kampüs içi ring seferlerinin tahmini varış sürelerini ve araç doluluk bilgilerini gösteren basit bir web uygulaması oluştur.

Bu ilk sürümde gerçek GPS verisi, gerçek araç takip sistemi, kullanıcı hesabı, veritabanı veya makine öğrenmesi kullanılmayacak.

Bütün sefer ve doluluk bilgileri açıkça **Simulated Data / Demo Data** olarak tanımlanacak.

### 3. Teknik kapsam

Başlangıçta şu teknolojileri tercih et:

- HTML5
- CSS3
- Vanilla JavaScript
- Gerekirse LocalStorage

React, Next.js, karmaşık backend servisleri ve harici API kullanma.

Kod okunabilir, modüler ve ikinci sınıf öğrencilerinin anlayabileceği düzeyde olsun.

### 4. MVP işlevleri

**A. Ring Bilgi Paneli**

En az üç örnek kampüs durağı göster.

Her durakta:

- Durak adı
- Yaklaşan ring
- Tahmini varış süresi (ETA)
- Araç doluluk durumu

yer alsın.

Gerçek durak adlarını bilmiyorsan Durak A, Durak B ve Durak C kullan. Gerçek kampüs verisi izlenimi oluşturma.

**B. Araç Doluluk Bilgisi**

Her ring için şu üç durumdan birini göster:

- Müsait
- Yoğun
- Dolu

Doluluk durumu örnek verilerden türetilsin. Kullanıcıya gerçek zamanlı bilgi sunulduğu iddia edilmesin.

**C. Simülasyon Kontrolleri**

Demo amacıyla kullanıcı:

- Örnek sefer verilerini görüntüleyebilsin.
- Simülasyonu bir adım ilerletebilsin.
- Verileri başlangıç durumuna sıfırlayabilsin.

Simülasyon sırasında ETA ve doluluk bilgilerinin tutarlı biçimde güncellenmesini sağla. Negatif ETA gösterme.

**D. Kullanıcı Arayüzü**

Basit, anlaşılır, mobil ekranlara uyumlu ve erişilebilir bir panel hazırla.

Üst bölümde açıkça şu ifade bulunsun:

**“Eğitim Amaçlı Prototip – Veriler Simülasyondur.”**

### 5. Requirements ve Acceptance Criteria

Aşağıdaki gereksinimleri koddan önce `docs/mvp-requirements.md` dosyasında tanımla:

- REQ-01: Kullanıcı durakları görüntüleyebilir.
- REQ-02: Kullanıcı yaklaşan ringlerin tahmini varış sürelerini görebilir.
- REQ-03: Kullanıcı ringlerin doluluk durumlarını görebilir.
- REQ-04: Kullanıcı simülasyonu ilerletebilir.
- REQ-05: Kullanıcı simülasyonu başlangıç durumuna sıfırlayabilir.
- REQ-06: Arayüz, bilgilerin simülasyon verisi olduğunu açıkça belirtir.

Her gereksinim için ölçülebilir kabul kriterleri oluştur.

### 6. Testing ve Verification

`docs/test-cases.md` dosyasında en az altı test senaryosu hazırla.

Testler şu durumları kapsasın:

- Durakların doğru görüntülenmesi
- ETA bilgilerinin görüntülenmesi
- Doluluk göstergelerinin tutarlılığı
- Simülasyon ilerletme işlemi
- Sıfırlama işlemi
- ETA değerinin negatif olmaması

Her test için şu alanları kullan:

Test ID, Requirement ID, Preconditions, Test Steps, Expected Result, Actual Result ve Status.

Gerçekten çalıştırmadığın testleri PASS olarak işaretleme. Manuel testler gerçekleştirilmediyse NOT RUN yaz.

### 7. Engineering Evidence

`docs/engineering-evidence.md` dosyasını oluştur.

Şu bilgileri kaydet:

- Geliştirilen işlevler
- Kullanılan teknolojiler ve tercih nedenleri
- Gerçek veri yerine simülasyon kullanımının gerekçesi
- Bilinen sınırlılıklar
- Gerçekleştirilen ve henüz gerçekleştirilmeyen testler
- İnsan tarafından doğrulanması gereken kararlar
- Yapay zekânın hangi faaliyetlerde kullanıldığı

GitHub Issue, Commit veya Pull Request oluşturulmamışsa varmış gibi gösterme.

### 8. GitHub ve takım çalışması

Mevcut repository geçmişini koru.

Kanban iş akışını dikkate al:

Backlog → To Do → In Progress → Review → Done

İki kişilik takım için In Progress WIP limitini başlangıçta 2 olarak öner.

Kod değişiklikleri için anlamlı Commit mesajları öner.

Örnek:

`feat: add simulated campus ring information dashboard`

Ancak benim açık onayım olmadan Commit, Push, Pull Request veya Merge yapma.

### 9. Definition of Done

Bir işin tamamlandığını söylemeden önce:

- Kabul kriterlerini kontrol et.
- Test sonuçlarını kaydet.
- Gerekli dokümantasyonu güncelle.
- Kodun okunabilirliğini değerlendir.
- Diğer takım üyesinin Peer Review yapması gerektiğini belirt.

İnsan incelemesi yapılmadan işi tamamen onaylanmış kabul etme.

### 10. Çalışma sırası

Önce mevcut repository için kısa bir analiz raporu hazırla.

Ardından:

1. MVP kapsamını açıkla.
2. Gereksinimleri ve kabul kriterlerini oluştur.
3. Basit proje dosya yapısını öner.
4. MVP kodunu geliştir.
5. Test senaryolarını hazırla.
6. Mühendislik kanıtlarını belgele.
7. Çalıştırma talimatlarını README'ye ekle.
8. Son olarak değişen dosyaların listesini ve tamamlanmamış işleri raporla.

**Temel ilke:** Çalışan bir prototip üretmek önemlidir; ancak asıl amaç gereksinimlerden test sonuçlarına kadar izlenebilir, insan tarafından değerlendirilebilir ve kanıtlanabilir bir yazılım geliştirme süreci oluşturmaktır.
