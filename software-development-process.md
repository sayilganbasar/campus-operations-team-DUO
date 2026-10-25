# Software Development Process Selection

## 1. Project Information

- Project Name: Campus Operations - Ring Transit Optimization
- Team Name: Team DUO
- Date: 18 Ekim 2026
- Version: 1.0

## 2. Project Overview

**Describe the problem your project aims to solve.**
Bu proje, kampüs içi ring/servis seferlerinin varış saatlerindeki öngörülemezliği ve pik saatlerde yaşanan kapasite yetersizliğini analiz ederek optimize etmeyi amaçlamaktadır.

**Explain:**
- **Who are the intended users?** Öğrenciler, akademik personel, idari personel ve ring şoförleri.
- **What problem are you addressing?** Duraklarda oluşan aşırı yığılmalar, seferlerin belirli bir takvime uymaması ve bekleyen yolcuların operasyonel durumdan (araç doluluğu, varış süresi) habersiz olması.
- **What value will your solution provide?** Kampüs içi ulaşımda bekleme sürelerinin tahmin edilebilir hale gelmesi, yığılmaların önlenmesi ve veri odaklı sefer çizelgelemesi ile zaman tasarrufu sağlanması.

## 3. Project Characteristics

Evaluate your project using the following criteria.

| Criterion | Assessment | Explanation |
|---|---|---|
| Requirements Clarity | Medium | Temel problem belli ancak toplanacak sahadaki veriye (durak yığılması) göre teknik ihtiyaçlar şekillenecek. |
| Requirements Volatility | Medium | Çözüm geliştirildikçe üniversite yönetiminden veya kullanıcı testlerinden geri bildirimlere göre değişim yaşanabilir. |
| Technical Complexity | Medium | Donanım (GPS/Sensör) veya karmaşık veri modelleri gerekebileceği için orta seviyededir. |
| Project Risk | Medium | Fiziksel bir operasyona (ulaşım) dijital çözüm entegre etmenin operasyonel ve KVKK riskleri mevcuttur. |
| Stakeholder Feedback Need | High | Sistemin gerçekten işe yarayıp yaramadığını görmek için düzenli öğrenci ve şoför geri bildirimi şarttır. |
| Team Experience | Low | Takım üyeleri süreç yönetimi ve tam kapsamlı yazılım geliştirme konusunda henüz başlangıç seviyesindedir. |

## 4. Process Alternatives

Evaluate at least three alternatives.

| Approach | Advantages for Our Project | Limitations |
|---|---|---|
| Waterfall | Gereksinimler baştan sabitlendiği için sürpriz yaşanmaz, dokümantasyon tamdır. | Değişime kapalıdır, test aşaması projenin çok geç bir evresine bırakılır. |
| Scrum | Değişime çok hızlı adapte olur, kısa sprintlerle (1-2 hafta) ürün parçaları çıkarılır. | Sürekli toplantı (daily standup vb.) gerektirir; uzaktan ve asenkron çalışan bizim gibi küçük takımlar için iletişim yükü fazladır. |
| Kanban | Toplantı dayatması yoktur. İş akışı tamamen görseldir. Ekip üyeleri asenkron (farklı zamanlarda) çalışabilir. | Zaman kutusu (sprint) olmadığı için takım disiplini düşerse işler panoda aylarca "Yapılıyor" aşamasında kalabilir. |

## 5. Selected Development Approach

### 5.1 Our Decision

- Development Approach: Agile (Kanban) - Seçilen (Grup Çalışmamıza Uygun Olan Yöntem)
- Team Management Framework / Method: Asynchronous Kanban Board (GitHub Projects / Trello)
- Workflow Visualization Method: Kanban Board (Backlog, To Do, In Progress, Review, Done)

### 5.2 Selection Rationale

Explain why your team selected this approach.

Takımımız, aşağıda belirtilen somut gerekçelerden dolayı geliştirme süreci olarak **Kanban** yaklaşımını seçmiştir:

1. **Team size and experience & Feedback:** Takımımız uzaktan (remote) ve farklı zaman dilimlerinde (asenkron) çalışan iki kişiden oluşmaktadır. Sık toplantı yapma imkanımız kısıtlıdır. Kanban, "pull" (çekme) sistemiyle çalışır; her üye müsait oldukça panodan işi kendi üzerine çeker, bu sayede toplantı yapmadan iş takibi sağlanır.
2. **Expected changes & Project requirements:** Ring projemizde toplayacağımız verilere göre gereksinimlerimiz değişebilir. Kanban'ın katı kısıtlamaları yoktur, yeni bir özellik gerektiğinde doğrudan Backlog'a (iş havuzuna) eklenebilir.
3. **Technical risks:** WIP (Work in Progress - Aynı anda yapılan iş) limitleri sayesinde, takımın kaldıramayacağı kadar çok işin aynı anda başlanması (teknik yığılma) engellenerek kalite korunacaktır.

## 6. Team Organization

| Team Member | Responsibilities |
|---|---|
| Başar Sayılgan | Proje mimarisi, dokümantasyon, GitHub yönetimi ve gereksinim analizi. |
| İsmail Coşkun | Süreç yönetimi, kodlama/tasarım destek, Kanban pano takibi ve test süreçleri. |

Explain how your team will coordinate its work.
Takımımız senkronize (anlık) toplantılar yerine asenkron koordinasyon modeliyle çalışacaktır. İletişim için WhatsApp/Teams metin kanalları kullanılacak, iş dağılımı ve takibi tamamen paylaşımlı GitHub Projects/Kanban panosu üzerinden görsel olarak yönetilecektir.

## 7. Development Workflow

**Workflow Steps:** Backlog → To Do → In Progress → Review → Done

- **How tasks are selected:** Proje başında tüm gereksinimler parçalanıp 'Backlog' sütununa yazılır. Haftalık hedefler 'To Do' sütununa çekilir.
- **How responsibilities are assigned:** Bir görev 'To Do'dan 'In Progress'e geçerken, görevi yapacak kişi kendi ikonunu göreve atayarak (assign) sorumluluğu alır.
- **How progress is monitored:** İşlerin durumu Kanban panosu üzerinden günlük olarak asenkron izlenir. "In Progress" sütununda yığılma olmaması için WIP limiti uygulanır.
- **When a task is considered completed:** İşin gereksinimi karşıladığı test edildiğinde ve diğer takım üyesi tarafından kod/doküman incelemesi (Review) onaylandığında görev 'Done' sütununa taşınır.

## 8. Quality Assurance

Describe how your team will verify the quality of completed work.
Kalite güvencesi, işlerin 'Review' sütununda diğer takım üyesi tarafından "Peer Review" (eş denetim) yapılmasıyla sağlanacaktır. Bir işi yapan kişi kendi işini 'Done' durumuna getiremez, onaylayıcı takım üyesinin incelemesi şarttır.

### Definition of Done

A task is considered Done when:

- [ ] Görev kartındaki tüm kabul kriterleri (acceptance criteria) karşılanmışsa.
- [ ] Yazılan kod / oluşturulan doküman GitHub reposuna başarılı şekilde yüklenmiş (commit/push) ise.
- [ ] Diğer takım üyesi (Reviewer) tarafından incelenip onaylanmışsa.

## 9. Process Evaluation and Improvement

- **How will your team identify process problems?** Kanban panosunda "In Progress" (Devam edenler) sütununda işler uzun süre kalıyorsa veya WIP limitleri sürekli aşılıyorsa bu bir süreç darboğazı olarak tanımlanacaktır.
- **How frequently will you review your workflow?** Haftada bir kez 15-20 dakikalık asenkron bir "Retrospektif" değerlendirmesi (neyi iyi yaptık, neyi kötü yaptık) mesajlaşma üzerinden yapılacaktır.
- **What will you do if the selected approach does not work as expected?** Eğer asenkron Kanban işe yaramaz ve görevler tamamlanmazsa, iletişimi artırmak adına daha yapılandırılmış olan haftalık kısa Scrum sprintlerine geçiş yapılacaktır.

## 10. AI Usage Declaration

- AI Tool: Gemini
- Purpose of Use: Yazılım geliştirme süreçlerinin (Waterfall, Scrum, Kanban) takım dinamiklerine uygunluk analizi, Markdown şablonunun yapılandırılması ve mühendislik terminolojisinin çevirisi.
- Human Verification: Tamamlandı. Gerekçeler, uzaktan çalışan iki kişilik takım gerçekliğine göre Başar Sayılgan ve İsmail Coşkun tarafından değerlendirilip revize edilmiştir.
- Final Decision Made By: Başar Sayılgan ve Takım Arkadaşı.

## 11. Team Decision

We confirm that the selected development approach has been discussed and agreed upon by the team.

| Team Member | Agreement |
|---|---|
| Başar Sayılgan | Agreed |
|İsmail Coşkun | Agreed |
