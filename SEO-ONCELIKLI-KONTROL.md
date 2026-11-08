# İbin Elektronik – SEO öncelikli kontrol ve yayın planı (9 Kasım 2026)

## İlk teknik bulgular
- Pakette 13 indekslenebilir HTML sayfası, ayrı canonical etiketleri, sitemap.xml ve taramaya açık robots.txt var. Dolayısıyla bu ZIP'te bariz `noindex` / `Disallow: /` engeli yok.
- Canlı `https://uyducuerdalusta.site/` adresi bağımsız dış araç üzerinden açılarak doğrulanamadı. Bu tek başına kesinti kanıtı değildir. Alan adı, GitHub Pages ve Search Console üzerinden doğrulanmalıdır.
- Web aramalarında alan adı için sonuç görülmedi; bu kesin indeks kaydı değildir. Google URL Denetimi esastır.
- Ana sayfa artık uydu/çanak anten niyetine odaklanıyor; TV/kamera hizmetleri ayrı sayfalara yönlendiriliyor.
- Animasyonun H1 metnini JS ile parçalayarak yeniden yazması ve aşağıdaki bölümleri ilk başta görünmez yapması kaldırıldı. CSS/JS olmadan da tüm içerik gösterilir.
- 404 sayfasının ana sayfaya işaret eden canonical etiketi kaldırıldı; `noindex` korundu.
- Resimlerin ve belgelerin çoğu zaten hafif; asıl dar boğazın performans olduğunu gösteren veri bulunmadı.

## Yapılacaklar (öncelik sırası)
1. Alan adını normal tarayıcı ve mobil internetten açın; `https://uyducuerdalusta.site/`, `.../robots.txt`, `.../sitemap.xml` yanıtlarını kontrol edin. GitHub > Settings > Pages içindeki custom domain ve "Enforce HTTPS" durumuna bakın. DNS sağlayıcısındaki A/AAAA/CNAME kayıtlarını GitHub Pages resmi rehberine göre kontrol edin. DNS değiştirmeden önce mevcut kayıtları kaydedin.
2. https://search.google.com/search-console/ > `uyducuerdalusta.site` Domain mülkü > URL Denetimi > ana sayfa. "Google'da var" mı? Değilse "Sayfa indeksleme" nedenini kaydedin. Canlı URL testi 200 ve erişilebilir ise indeksleme isteği gönderin.
3. `https://uyducuerdalusta.site/mersin-uyducu.html` sayfasını ayrıca denetleyin. GSC'nin Google tarafından seçilen canonical alanına bakın.
4. Search Console > Site haritaları > `sitemap.xml` gönderin; URL toplamını ve "Başarılı" durumunu kontrol edin.
5. Google İşletme Profili: Gerçek ve onaylı ad, doğru kategori, telefon, doğru web adresi, gerçek servis bölgeleri, fotoğraflar ve müşteri yorumları. Kamuya açık profil ve harita görünürlüğü ayrıca incelenmeli.
6. Gerçek işten en az 6–10 fotoğraf (çanak kurulum, sinyal ölçümü, merkezi sistem vb.) ve işin hangi ilçede yapıldığına dair doğru kısa açıklama yayınlayın. Fotoğraf ve yorum uydurmayın.
7. GSC Performans bölümünde son 28 gün ve 3 ay için "mersin uyducu", "toroslar uyducu", "çanak anten montajı", "uydu sinyal yok" sorgularında gösterim/tıklama/ortalama konumu izleyin. 0 gösterim varsa indekse ve keşfe; gösterim olup 0 tıklama varsa arama niyeti ve snippet'e odaklanın.

## Yayınlama
ZIP içindeki dosyaları repo köküne gönderin (ZIP'i olduğu gibi GitHub'a dosya olarak yüklemeyin). Bu ZIP `.git/` içermez. Var olan `CNAME` dosyasını koruyun. `.htaccess` GitHub Pages üzerinde çalışmaz. Bu paket **canlı sitede otomatik olarak yayınlanmadı**.

## Önemli sınırlar
Sıralama veya indeksleme garanti edilmez. DNS, Search Console raporu, Analytics ve Google İşletme Profili erişimi olmadan dış sistemdeki kök neden kesin belirlenemez. Bu düzenleme yayınlanana kadar Google eski siteyi görmeye devam edebilir.
