# Google Search Console – İbin Elektronik için uygulama

## 1. Sahipliği doğrula
- https://search.google.com/search-console/ > Alan adı mülkü > `uyducuerdalusta.site`.
- DNS paneline Google'ın verdiği TXT doğrulama kaydını ekleyin; doğrulama sonra tamamlanır. Alternatif olarak URL Ön Eki mülkünde HTML dosyası kullanabilirsiniz.

## 2. Canlı URL durumlarını kontrol et
Aşağıdaki adresleri **URL Denetleme** alanına yapıştırın, sonra **Canlı URL'yi Test Et** uygulayın:
- https://uyducuerdalusta.site/
- https://uyducuerdalusta.site/mersin-uyducu.html
- https://uyducuerdalusta.site/canak-anten-montaji.html
- https://uyducuerdalusta.site/mersin-kamera-sistemleri.html
- https://uyducuerdalusta.site/mersin-televizyon-tamiri.html

Her sayfada şu noktaları inceleyin: erişim 200, kullanıcı tarafından belirtilen canonical ile Google'ın seçtiği canonical, robots.txt engeli, noindex durumu, sayfanın dizin durumu. Herhangi bir hata varsa öncelikle bunu çözün. Canlı test başarılıysa **Dizine Eklenmesini İste** uygulayın. Bu Google'a talep gönderir; sıralamayı ve indekslemeyi garanti etmez.

## 3. XML sitemap
- Site Haritaları > Yeni site haritası > `sitemap.xml`.
- Beklenen adres: https://uyducuerdalusta.site/sitemap.xml
- ZIP dosyasında 13 güncel indekslenebilir sayfa listelenmiştir. Dosyaların hepsi sunucuda mevcut olmalıdır.

## 4. Google sonuçlarında veri araması
Performans > Arama Sonuçları > 28 gün ve 3 ay karşılaştırması:
- “uyducu”, “Mersin uyducu”, “Toroslar uyducu”, “uydu tamircisi”
- “çanak anten”, “çanak anten montajı”, “çanak anten tamiri”
- “kameracı”, “Mersin kameracı”, “güvenlik kamerası kurulumu”
- “televizyon tamircisi”, “Mersin televizyon tamiri”

Görünüm yoksa arama sorgusu için sitenin indekslendiği, yeterli alaka/yerel otorite kazandığı varsayılmamalıdır. **Sadece site: araması ile dizin durumunu kesinleştirmeyin**; URL Denetlemesi esas olsun.

## 5. Raporlama
İlk 30–60 gün haftalık gösterimler, tıklamalar, CTR, ortalama konum, sayfa indekslenme durumu ve manuel işlemler izlenmelidir. Tekrarlanan URL denetleme talepleri Google'ın dizine alma hızını artırmaz.
