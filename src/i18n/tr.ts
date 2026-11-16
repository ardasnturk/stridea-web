import type { BaseDictionary } from "./types";

export const tr: BaseDictionary = {
  meta: {
    title: "{app} – Şehrini Yürüyerek Keşfet",
    description:
      "{app} yürümeyi keşfe dönüştürür: şehrin sisle kaplı başlar, her yürüyüş sisi dağıtır; yanından geçtiğin simge yapılar, müzeler, kaleler ve parklar koleksiyonuna girer ve kupa kazandırır. Hesap yok, reklam yok, takip yok.",
  },
  nav: {
    features: "Özellikler",
    explore: "Keşif",
    collection: "Koleksiyon",
    pro: "PRO",
    privacy: "Gizlilik",
    faq: "SSS",
    download: "İndir",
    comingSoon: "Çok yakında",
    language: "Dil",
    menu: "Menü",
    skip: "İçeriğe geç",
  },
  appStore: { small: "App Store'dan", large: "İndir", soonSmall: "Çok yakında", soonLarge: "App Store'da" },
  footer: {
    tagline: "Şehrinin haritasındaki sisi dağıt, görülmeye değer yerleri topla, kupaları kazan; her seferinde bir yürüyüşle. iPhone ve Apple Watch için.",
    product: "Ürün",
    legal: "Yasal",
    privacy: "Gizlilik Politikası",
    terms: "Kullanım Koşulları",
    support: "Destek",
    rights: "Tüm hakları saklıdır.",
    trademarks: "Apple, iPhone, Apple Watch, Apple Haritalar ve App Store, Apple Inc. şirketinin ticari markalarıdır.",
  },
  legal: {
    updated: "Son güncelleme: 16 Kasım 2026",
    back: "Ana sayfaya dön",
    privacyTitle: "Gizlilik Politikası",
    privacyIntro:
      "Bu politika, {developer} tarafından geliştirilen {app} adlı iPhone ve Apple Watch uygulamasının (“{app}”, “uygulama”) bilgilerinizi nasıl ele aldığını açıklar. Kısacası: yürüyüşleriniz, rotalarınız, keşfettiğiniz harita, koleksiyonunuz, sağlık, hareket ve konum verileriniz cihazınızda ve Apple Sağlık'ta kalır. Uygulamada hesap, reklam ve analiz yoktur; geliştiricinin bir sunucusu yoktur. Cihazınızdan yalnızca şu durumlarda bilgi çıkar: görülecek yerleri ve yürüme rotalarını bulmak için uygulama, ilgili harita bölgesini Apple'ın harita hizmetine sorar (6. bölüm); {app} PRO satın alma bilgileri (9. bölüm); bir yarışma oluşturur ya da bir yarışmaya katılırsanız, Apple'ın iCloud'unda saklanan ve yarışmanın üyelerine gösterilen görünen adınız ve o yarışmadaki puanınız (10. bölüm); ve birkaç ayarı kendi cihazlarınız arasında, size özel iCloud saklama alanınızda aynı tutan iCloud Eşitleme (11. bölüm).",
    privacySections: [
      {
        title: "1. Topladığımız veriler",
        paragraphs: [
          "{app} uygulamasında kullanıcı hesabı, reklam, analiz ve izleme yoktur. Geliştirici; yürüyüşlerinize, rotalarınıza, keşfettiğiniz haritaya, topladığınız yerlere, nabız verilerinize, hareket aktivitenize, konumunuza veya uygulamada gördüğünüz başka hiçbir bilgiye erişmez. Tek istisna isteğe bağlıdır: bir yarışma oluşturur ya da bir yarışmaya katılırsanız, yazdığınız görünen ad ve yarışma günlerindeki puanınız, 10. bölümde açıklandığı şekilde Apple'ın iCloud'unda saklanır ve o yarışmanın üyelerine gösterilir.",
          "Uygulamada tek bir üçüncü taraf bileşen bulunur: yalnızca {app} PRO satın alımlarını ve abonelik durumunu yönetmek için kullanılan satın alma SDK'sı RevenueCat (9. bölüm). Sağlık, hareket ve konum verileri RevenueCat'e asla iletilmez. Uygulama ayrıca Apple'ın sunduğu hizmetleri kullanır: Apple Sağlık, görülecek yerler ve yürüme rotaları için Apple'ın harita hizmeti (MapKit, 6. bölüm) ve yarışmalar ile iCloud Eşitleme için iCloud (CloudKit, 10. ve 11. bölümler). Başka hiçbir yer, harita veya analiz hizmeti kullanılmaz.",
        ],
      },
      {
        title: "2. Uygulamanın Apple Sağlık'tan okudukları",
        paragraphs: [
          "{app}, izniniz dahilinde Apple Sağlık'tan şu verileri okur: antrenmanlar ve antrenman rotaları, adımlar, mesafe, aktif enerji, çıkılan katlar, egzersiz süresi, nabız, dinlenme nabzı, yürüme nabzı ortalaması, yürüme ölçümleri (yürüme hızı, adım uzunluğu, yürüme asimetrisi ve çift destek süresi), yürüme dengesi, kardiyo kondisyonu (VO₂ max), altı dakika yürüyüş mesafesi ve yalnızca nabız bölgeleri için maksimum nabzınızı tahmin etmekte kullanılan doğum tarihiniz.",
          "Yürüyüşlerinizin ve doğa yürüyüşlerinizin rotaları, haritanızı açmak ve yanından geçtiğiniz yerleri bulmak için kullanılır (7. bölüm). Diğer veriler gününüzü, geçmişinizi, eğilimlerinizi, nabız bölgelerinizi, yürüyüş analizinizi ve kişisel önerilerinizi göstermek için kullanılır. Hepsi cihazınızda işlenir ve reklam amacıyla asla kullanılmaz. Geliştiriciye ya da başka birine gönderilmez; tek istisna, katıldığınız bir yarışmada paylaşılan puanınızdır (10. bölüm).",
        ],
      },
      {
        title: "3. Uygulamanın Apple Sağlık'a yazdıkları",
        paragraphs: [
          "Uygulamada veya Apple Watch'ta bir yürüyüş kaydettiğinizde {app}, bunu rotası ve mesafesiyle birlikte yürüyüş antrenmanı olarak Apple Sağlık'a kaydeder. Başka hiçbir şey yazılmaz. Bu antrenmanları dilediğiniz zaman Sağlık uygulamasında görebilir ve silebilirsiniz.",
        ],
      },
      {
        title: "4. Konum",
        paragraphs: [
          "{app}, uygulamayı kullanırken konum erişimi ister (“Uygulamayı Kullanırken”). Konumunuzu yürüyüşleri kaydetmek ve rotalarını çizmek, ayrıca haritada nerede olduğunuzu ve yakınınızdaki yerleri göstermek için kullanır. Başlattığınız bir yürüyüş sırasında ekranı kilitlerseniz, uygulama yürüyüşü bitirene kadar rotasını arka planda kaydetmeye devam eder. Bunun dışında arka planda hiçbir zaman konum takibi yapılmaz.",
          "Konumunuz geliştiriciye asla gönderilmez. Yakınınızdaki yerleri ve yürüme rotalarını bulmak için ilgili harita bölgesi veya koordinatlar, 6. bölümde açıklandığı şekilde Apple'a gönderilir.",
        ],
      },
      {
        title: "5. Hareket ve Fitness verileri",
        paragraphs: [
          "{app}, izniniz dahilinde (Hareket ve Fitness) iPhone'unuzun hareket sensörünün kaydettiği aktiviteyi okur: yürüyor, koşuyor, bisiklet sürüyor, araçta ya da hareketsiz olduğunuz bilgisini ve adımsayarın saydığı adımları. Bu aktiviteyi iPhone arka planda kendiliğinden kaydeder; uygulama yalnızca okur.",
          "Uygulama bu verileri, yürüyüş kaydederken adımlarınızı canlı göstermek ve hareket analizi için kullanır: en aktif saatleriniz, ayakta geçen süreniz, yürüyüşleriniz, en uzun oturma süreniz, kadansınız ve araçta geçen süreniz. Bu aktivitenin günlük özetleri yalnızca iPhone'unuzda saklanır. Hareket verileri cihazda analiz edilir; geliştiriciye ya da başka birine asla gönderilmez.",
        ],
      },
      {
        title: "6. Görülecek yerler, yürüme rotaları ve Apple Haritalar",
        paragraphs: [
          "{app}, görülmeye değer yerleri (simge yapılar ve anıtlar, müzeler, kaleler ve hisarlar, tiyatrolar ve planetaryumlar, kütüphaneler ve parklar) bulmak için Apple'ın MapKit ilgi noktası aramasını; bir yere yürüme rotası çizmek veya gezi turu planlamak için MapKit yürüme yol tarifini; en çok yürüdüğünüz bölgelere ad vermek için de Apple'ın konum adlandırma (geocoding) hizmetini kullanır. Bu istekler cihazınızdan doğrudan Apple'a gider ve ilgili harita bölgesini veya koordinatları içerir; örneğin yürüyüşlerinizin çevresindeki bölge ya da bir rotanın başlangıç ve bitiş noktası. Bu istekler Apple tarafından, Apple'ın gizlilik politikası kapsamında işlenir (https://www.apple.com/legal/privacy/).",
          "“Bu Yer Hakkında”, bir yer için Apple Haritalar'ın kendi yer kartını gösterir; içeriği Apple'dan gelir. Geliştirici bu isteklerin ya da sonuçlarının hiçbirini almaz. Yer sonuçları ve bölge adları yalnızca cihazınızda önbelleğe alınır. {app} başka hiçbir yer veya harita hizmeti kullanmaz.",
        ],
      },
      {
        title: "7. Keşfettiğiniz harita ve koleksiyonunuz",
        paragraphs: [
          "Haritada açtığınız alanlar, bölgeleriniz, her yürüyüşün yeni alanı, topladığınız yerler, kupalarınız ve madalyalarınız; Apple Sağlık'taki rotalardan ve Apple Haritalar ile bulunan yerlerden cihazınızda hesaplanır. Yalnızca cihazınızda saklanır; geliştiriciye ya da başka birine asla gönderilmez. Tek istisna, katıldığınız bir yarışmadaki puanınızdır (10. bölüm).",
        ],
      },
      {
        title: "8. Kişisel öneriler ve Apple Intelligence",
        paragraphs: [
          "Kişisel öneriler ({app} PRO), kendi verilerinizden iPhone'unuzda hesaplanır. Apple Intelligence destekli iPhone'larda (iOS 26 veya sonrası) “Haftan Birkaç Cümlede”, Apple'ın cihaz üzerindeki modelinin bu verilerden, cihazınızda yazdığı kısa bir özettir. Önerileri ya da özetleri oluşturmak için geliştiriciye ya da başka birine hiçbir veri gönderilmez.",
          "Öneriler ve özetler genel sağlıklı yaşam bilgisidir; tıbbi tavsiye değildir.",
        ],
      },
      {
        title: "9. Satın alımlar ve RevenueCat",
        paragraphs: [
          "{app} PRO, uygulama içi satın alma olarak sunulur: otomatik yenilenen abonelik ya da tek seferlik satın alma. Satın alımlar, Apple Hesabınız üzerinden Apple tarafından işlenir. Ödeme bilgileriniz geliştiriciye asla ulaşmaz. Apple'ın satın alımınızla ilgili işlemleri için Apple'ın gizlilik politikası geçerlidir.",
          "Uygulama, PRO'nun cihazınızda etkin olup olmadığını bilmek için üçüncü taraf bir satın alma SDK'sı olan RevenueCat'i kullanır. RevenueCat, satın alma ve işlem bilgilerini ve anonim bir uygulama kullanıcı kimliğini alır. Uygulamadan adınızı ya da e-posta adresinizi almaz; sağlık, hareket, konum ve harita verilerini ise asla almaz. Uygulama, RevenueCat'i reklam ya da izleme amacıyla kullanmaz. RevenueCat'in gizlilik politikası: https://www.revenuecat.com/privacy",
          "Hoş geldin teklifinin gösterilip gösterilmediği ve ne zaman sona ereceği cihazınızda saklanır.",
        ],
      },
      {
        title: "10. Yarışmalar",
        paragraphs: [
          "Yarışmalar isteğe bağlıdır. Bir yarışma oluşturabilir ya da altı karakterli bir kodla veya davet bağlantısıyla bir yarışmaya katılabilirsiniz. Katılmak isteyen her kişiyi yarışmayı kuran kişi kabul eder. Yarışmalar için iCloud gerekir: yalnızca iPhone'unuzda iCloud'a giriş yaptıysanız çalışır.",
          "Bir yarışma ya adımları ya da yeni alanı sayar: bir üyenin yarışma günlerinde açtığı ve daha önce hiç yürümediği alan, metrekare olarak. Kurduğunuz ya da katıldığınız bir yarışma için uygulama, Apple'ın iCloud'unda (CloudKit, uygulamanın genel “public” veritabanı) şunları saklar: yarışmanın adı, tarihleri, neyi saydığı ve hedefi, yazdığınız görünen ad ve yarışma günlerindeki puanınız (adım toplamınız veya metrekare cinsinden yeni alanınız); puan, yarışma sürerken güncellenir. Bir yarışmanın üyeleri birbirlerinin görünen adını ve puanını görür. Bir yarışmaya katılmak istediğinizde, yarışmayı kuran kişinin isteğinizi kabul ya da reddedebilmesi için görünen adınız saklanır.",
          "Rota, konum, yer, yürüyüş, nabız ya da başka hiçbir sağlık verisi paylaşılmaz; yalnızca toplam paylaşılır. Kayıtlar anonim bir iCloud kullanıcı tanımlayıcısıyla ilişkilendirilir; geliştirici iCloud'dan Apple Hesabınızı (Apple ID), e-posta adresinizi ya da adınızı almaz. Geliştiricinin kendine ait bir sunucusu yoktur; bu veriler Apple'ın iCloud'unda tutulur.",
          "Genel veritabanındaki kayıtlar, bir yarışmanın kodunu bilen herkes tarafından okunabilir; yani kod, özel bir bağlantı gibi çalışır. Kodu yalnızca yarışmada olmasını istediğiniz kişilerle paylaşın.",
          "Yarışmayı kuran kişi yarışmayı uygulamadan silebilir; bu, yarışmayı herkes için kaldırır. Bir yarışmadan ayrıldığınızda yarışma uygulamanızdan kaldırılır; bildirilen son puanınız ise yarışma silinene kadar iCloud'da kalabilir. Kaldırılmasını isterseniz {email} adresine yazın.",
        ],
      },
      {
        title: "11. iCloud Eşitleme",
        paragraphs: [
          "iCloud Eşitleme varsayılan olarak açıktır ve uygulamanın Ayarlar bölümünden kapatılabilir. Günlük hedefinizi, birimlerinizi, maksimum nabız ayarınızı, kazandığınız madalyaları, yarışma sonuçlarınızı, görünen adınızı ve katıldığınız yarışmaların listesini, size özel iCloud anahtar-değer saklama alanınız aracılığıyla kendi cihazlarınız arasında aynı tutar. Bu bilgileri yalnızca siz okuyabilirsiniz. Keşfettiğiniz harita ve koleksiyonunuz eşitlenmez. iCloud Eşitleme yalnızca iPhone'unuzda iCloud'a giriş yaptıysanız kullanılır.",
        ],
      },
      {
        title: "12. Verilerinizin saklandığı yer",
        paragraphs: [
          "Keşfettiğiniz harita, koleksiyonunuz, sağlık, hareket ve konum verileriniz cihazınızda ve Apple Sağlık'ta kalır. Geliştiricinin kendine ait bir sunucusu yoktur. Görülecek yer ve yürüme rotası istekleri 6. bölümde açıklandığı şekilde Apple tarafından işlenir. Yarışma verileri 10. bölümde açıklandığı şekilde Apple'ın iCloud'unda (CloudKit), eşitlenen ayarlar ise 11. bölümde açıklandığı şekilde size özel iCloud saklama alanınızda tutulur. Apple Sağlık'taki verileri Sağlık uygulamasından siz yönetirsiniz. Apple Sağlık, Apple'ın harita hizmeti ve iCloud'daki veriler için Apple'ın gizlilik politikası geçerlidir. Satın alma bilgileri, 9. bölümde açıklandığı şekilde Apple ve RevenueCat tarafından tutulur.",
        ],
      },
      {
        title: "13. Tercihleriniz ve verilerinizin silinmesi",
        paragraphs: [
          "{app} uygulamasının hangi Apple Sağlık verilerini okuyup yazabileceğine, konum ile Hareket ve Fitness verilerini kullanıp kullanamayacağına siz karar verirsiniz. Bu izinleri dilediğiniz zaman Ayarlar ve Sağlık uygulamalarından değiştirebilirsiniz. Yarışmalar isteğe bağlıdır; iCloud Eşitleme'yi uygulamanın Ayarlar bölümünden kapatabilirsiniz. Abonelikler, App Store hesap ayarlarınızdan yönetilir ve iptal edilir.",
          "Uygulamayı sildiğinizde, keşfettiğiniz harita, koleksiyonunuz, önbelleğe alınmış yerler ve günlük hareket özetleri dahil cihazınızda sakladığı veriler silinir. Yürüyüşleriniz ve rotaları, siz orada silene kadar Apple Sağlık'ta kalır. Uygulamayı silmek, kurduğunuz bir yarışmayı iCloud'dan silmez: yarışmayı önce uygulamadan silin. Ayrıldığınız bir yarışmadaki verilerinizin kaldırılması için {email} adresine yazın.",
        ],
      },
      {
        title: "14. Çocuklar",
        paragraphs: [
          "{app}, 13 yaşın altındaki çocuklara yönelik değildir ve onlardan bilerek kişisel veri toplamaz.",
        ],
      },
      {
        title: "15. Değişiklikler ve iletişim",
        paragraphs: [
          "Bu politika değişirse bu sayfayı ve yukarıdaki tarihi güncelleriz. Sorularınız için: {email}.",
        ],
      },
    ],
    termsTitle: "Kullanım Koşulları",
    termsIntro:
      "{app}, Apple'ın Standart Lisanslı Uygulama Son Kullanıcı Lisans Sözleşmesi (EULA) ve aşağıdaki koşullar kapsamında size lisanslanır.",
    termsSections: [
      {
        title: "1. Lisans",
        paragraphs: [
          "{app} kullanımınız Apple'ın Standart EULA'sına tabidir: https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
        ],
      },
      {
        title: "2. {app} PRO, abonelikler ve satın alımlar",
        paragraphs: [
          "{app} uygulamasının temel özellikleri ücretsizdir: sis haritası ve bölgeler, görülecek yerler, koleksiyonunuz ve kupalarınız, yakındaki öneriler ve bir yere yürüme rotası, yarışmalar, madalyalar, adımlar ve yürüyüş kaydı. {app} PRO; gezi turlarını, keşif zaman tünelini, kişisel önerileri, yürüyüş analizini, hareket analizini ve yürüme ölçümlerini ekler. Ücretsiz deneme sunulmaz.",
          "PRO; yıllık, 3 aylık, aylık veya haftalık otomatik yenilenen abonelik ya da tek seferlik ömür boyu satın alma olarak sunulur. Her planın fiyatı, satın almadan önce uygulamada gösterilir. Ödeme, satın almayı onayladığınızda Apple Hesabınızdan tahsil edilir.",
          "Hoş geldin teklifi: kurulumdan sonra uygulama PRO planlarını bir kez gösterir. Satın almadan kapatırsanız, bir kerelik bir hoş geldin teklifi gösterilebilir: 24 saat boyunca geçerli, indirimli 3 aylık abonelik. Teklif yalnızca bir kez gösterilir ve yeniden başlatılamaz. Teklif otomatik yenilenen bir aboneliktir: iptal etmediğiniz sürece, satın almadan önce teklifte gösterilen yenileme fiyatı üzerinden 3 ayda bir yenilenir.",
          "Abonelikler, siz iptal edene kadar her dönemin sonunda gösterilen fiyat üzerinden otomatik olarak yenilenir. Bir sonraki dönem için ücretlendirilmemek için, içinde bulunduğunuz dönemin bitiminden en az 24 saat önce iptal edin. Aboneliğinizi dilediğiniz zaman App Store hesap ayarlarınızdan yönetebilir ve iptal edebilirsiniz. Uygulamayı silmek aboneliği iptal etmez.",
          "Ömür boyu satın alma bir kez ödenir ve yenilenmez. Satın alımları Apple işler; iadeler Apple tarafından, Apple'ın kendi koşullarına göre yürütülür. Satın alımlarınızı, aynı Apple Hesabı ile giriş yapılmış bir cihazda uygulamadaki Satın Alımları Geri Yükle seçeneğiyle geri yükleyebilirsiniz. Tüm satın alımlar için Apple'ın Standart EULA'sı geçerlidir.",
        ],
      },
      {
        title: "3. Tıbbi cihaz değildir",
        paragraphs: [
          "{app} bir yürüyüş, keşif ve sağlıklı yaşam uygulamasıdır. Tıbbi cihaz değildir; tıbbi tavsiye, teşhis veya tedavi sunmaz. Adım, mesafe, kalori, nabız, nabız bölgeleri, yürüme ölçümleri, kondisyon göstergeleri ve hareket analizi cihazınızın sensörlerinden ve Apple Sağlık'tan gelir; tahminidir ve hatalı olabilir.",
          "Kişisel öneriler ve Apple'ın cihaz üzerindeki modelinin yazdığı “Haftan Birkaç Cümlede” özeti, bu verilerden çıkarılan genel bilgilerdir. Hatalı olabilirler ve tıbbi tavsiye değildirler.",
          "Sağlığınızla ilgili kararları yalnızca uygulamaya dayanarak vermeyin. Yeni bir egzersiz programına başlamadan önce veya sağlığınızla ilgili bir endişeniz varsa doktorunuza danışın.",
        ],
      },
      {
        title: "4. Yerler, rotalar ve güvenli yürüyüş",
        paragraphs: [
          "Görülecek yerler, yer bilgileri ve yürüme rotaları Apple Haritalar'dan gelir. Eksik, güncel olmayan veya hatalı olabilirler: bir yer kapalı, özel mülk, inşaat halinde ya da ziyarete kapalı olabilir; önerilen bir rota veya gezi turu güvenli ya da geçilebilir olmayabilir. Kendi değerlendirmenizi yapın, tabelalara, açılış saatlerine ve yerel kurallara uyun ve özel mülke girmeyin.",
          "Yürürken çevrenize dikkat edin. Güvenli olmadığı durumlarda telefonunuza bakmayın ve trafik kurallarına uyun.",
        ],
      },
      {
        title: "5. Verileriniz",
        paragraphs: [
          "Verileriniz size aittir. Keşfettiğiniz harita, koleksiyonunuz, sağlık, hareket ve konum verileriniz cihazınızda ve Apple Sağlık'ta kalır; onları oradan siz yönetirsiniz. Yarışmaları ya da iCloud Eşitleme'yi kullanırsanız, Gizlilik Politikası'nda açıklanan bilgiler Apple'ın iCloud'unda saklanır. {app} uygulamasının verilerinizi nasıl ele aldığı, Apple'ın harita hizmetine nelerin gönderildiği ve hangi satın alma bilgilerinin işlendiği Gizlilik Politikası'nda açıklanır.",
        ],
      },
      {
        title: "6. İletişim",
        paragraphs: [
          "Bu koşullarla ilgili sorularınız için: {email}.",
        ],
      },
    ],
  },
  support: {
    title: "Destek",
    intro: "Bir şey çalışmıyor mu, yoksa {app} uygulamasını daha iyi yapacak bir fikriniz mi var? Sizden haber almak isteriz.",
    emailLabel: "Bize yazın",
    emailHint: "Bir sorun bildiriyorsanız lütfen iPhone modelinizi ve iOS sürümünüzü belirtin. Sağlık verilerinizi veya rotalarınızı bize göndermeniz asla gerekmez.",
    topics: [
      {
        title: "Yürüyüşlerim sisi dağıtmıyor",
        text: "Harita, Apple Sağlık'taki yürüyüşlerinizin rotalarından açılır. Sağlık uygulamasını açın, profil resminize › Uygulamalar › {app} yolunu izleyin ve Antrenmanlar ile Antrenman Rotaları'nı açın. Yalnızca rotası olan yürüyüşler sayılır: {app} uygulamasında, Apple Watch'ta veya rotayı kaydeden başka bir uygulamada kaydedilmiş açık hava yürüyüşleri ve doğa yürüyüşleri.",
      },
      {
        title: "Haritada hiç yer görünmüyor",
        text: "Görülecek yerler Apple Haritalar'da aranır; bu yüzden {app} bir bölgeye ilk kez bakarken internet bağlantısına ihtiyaç duyar. Simge yapılar ve anıtlar, müzeler, kaleler ve hisarlar, tiyatrolar ve planetaryumlar, kütüphaneler ve parklar gösterilir; bazı bölgelerde Apple Haritalar'da bunlardan az bulunur.",
      },
      {
        title: "Bir yer koleksiyonuma eklenmedi",
        text: "Bir yer, yürüyüşlerinizden birinin rotası yaklaşık 100 m yakınından geçtiğinde toplanır. Kapalı alan yürüyüşleri gibi rotası kaydedilmemiş yürüyüşler yer toplayamaz.",
      },
      {
        title: "Konumum görünmüyor veya rota çizilmiyor",
        text: "{app}, uygulamayı kullanırken konum erişimine ihtiyaç duyar. Ayarlar › Gizlilik ve Güvenlik › Konum Servisleri › {app} bölümünden “Uygulamayı Kullanırken” seçeneğine izin verin. Arka planda konum yalnızca başlattığınız bir yürüyüş sırasında kullanılır.",
      },
      {
        title: "Yarışmalar çalışmıyor",
        text: "Yarışmalar iCloud kullanır. Ayarlar uygulamasında iCloud'a giriş yaptığınızdan ve iPhone'unuzun internete bağlı olduğundan emin olun. Katılmak için altı karakterli kodu girin ya da davet bağlantısını açın, ardından yarışmayı kuran kişinin sizi kabul etmesini bekleyin.",
      },
      {
        title: "Adımlar veya diğer veriler görünmüyor",
        text: "{app} uygulamasının Apple Sağlık'tan veri okuma iznine ihtiyacı vardır. Sağlık uygulamasını açın, profil resminize › Uygulamalar › {app} yolunu izleyin ve görmek istediğiniz verileri açın.",
      },
      {
        title: "Canlı adımlar güncellenmiyor",
        text: "Ayarlar › Gizlilik ve Güvenlik › Hareket ve Fitness bölümünde {app} için erişime izin verildiğinden emin olun.",
      },
      {
        title: "PRO özellikleri kilitli",
        text: "Gezi turları, keşif zaman tüneli, kişisel öneriler, yürüyüş analizi, hareket analizi ve yürüme ölçümleri için {app} PRO gerekir. Ücretsiz deneme sunulmaz. Keşif, görülecek yerler, koleksiyon, kupalar, yarışmalar ve adımlar ücretsiz kalır. PRO'yu daha önce satın aldıysanız satın alımınızı geri yükleyin.",
      },
      {
        title: "Hoş geldin teklifi nerede?",
        text: "Hoş geldin teklifi, kurulumun sonunda gösterilen PRO planlarını satın almadan kapatırsanız bir kez çıkar. 24 saat sürer ve bitene kadar uygulamadaki kartından yeniden açılabilir. Sona erdikten sonra yeniden başlatılamaz.",
      },
      {
        title: "Satın alımları geri yükleme",
        text: "{app} içinde Ayarlar › {app} PRO ekranını açın ve Satın Alımları Geri Yükle'ye dokunun. PRO'yu satın aldığınız Apple Hesabı ile giriş yapmış olmanız gerekir.",
      },
      {
        title: "Aboneliği yönetme veya iptal etme",
        text: "Abonelikleri Apple yönetir. Ayarlar uygulamasında adınız › Abonelikler yolunu izleyin ya da {app} PRO ekranında Aboneliği Yönet'e dokunun. Uygulamayı silmek aboneliği iptal etmez. İade için Apple ile iletişime geçin.",
      },
      {
        title: "“Haftan Birkaç Cümlede” görünmüyor",
        text: "Yazılı özet PRO'nun bir parçasıdır ve Apple Intelligence destekli (iOS 26 veya sonrası), Apple Intelligence'ın açık olduğu bir iPhone gerektirir. Diğer kişisel öneriler, desteklenen her iPhone'da çalışır.",
      },
    ],
  },
};
