import type { BaseDictionary } from "./types";

export const tr: BaseDictionary = {
  meta: {
    title: "{app} – iPhone için Adımsayar ve Yürüyüş Takibi",
    description:
      "{app} adımlarını sayar, yürüyüşlerini canlı haritada takip eder; nabız bölgelerini, yürüyüş analizini ve iPhone'unda hesaplanan kişisel önerileri gösterir. Hesap yok, reklam yok, analiz yok.",
  },
  nav: {
    features: "Özellikler",
    walks: "Yürüyüşler",
    trends: "Eğilimler",
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
    tagline: "iPhone için sade ve gizliliğe saygılı adımsayar ve yürüyüş takipçisi. Apple Sağlık ile bağlantılı.",
    product: "Ürün",
    legal: "Yasal",
    privacy: "Gizlilik Politikası",
    terms: "Kullanım Koşulları",
    support: "Destek",
    rights: "Tüm hakları saklıdır.",
    trademarks: "Apple, iPhone, Apple Watch ve App Store, Apple Inc. şirketinin ticari markalarıdır.",
  },
  legal: {
    updated: "Son güncelleme: 12 Kasım 2026",
    back: "Ana sayfaya dön",
    privacyTitle: "Gizlilik Politikası",
    privacyIntro:
      "Bu politika, {developer} tarafından geliştirilen {app} adlı iPhone uygulamasının (“{app}”, “uygulama”) bilgilerinizi nasıl ele aldığını açıklar. Kısacası: sağlık, hareket ve konum verileriniz iPhone'unuzda ve Apple Sağlık'ta kalır. Uygulamada hesap, reklam ve analiz yoktur. Cihazınızdan yalnızca üç durumda bilgi çıkar: {app} PRO satın alma bilgileri (7. bölüm); bir yarışma oluşturur ya da bir yarışmaya katılırsanız, Apple'ın iCloud'unda saklanan ve yarışmanın üyelerine gösterilen görünen adınız ile o yarışmadaki adım toplamınız (8. bölüm); ve birkaç ayarı kendi cihazlarınız arasında, size özel iCloud saklama alanınızda aynı tutan iCloud Eşzamanlama (9. bölüm).",
    privacySections: [
      {
        title: "1. Topladığımız veriler",
        paragraphs: [
          "{app} uygulamasında kullanıcı hesabı, reklam, analiz ve izleme yoktur. Geliştirici; yürüyüşlerinize, rotalarınıza, nabız verilerinize, hareket aktivitenize, konumunuza veya uygulamada gördüğünüz başka hiçbir bilgiye erişmez. Tek istisna isteğe bağlıdır: bir yarışma oluşturur ya da bir yarışmaya katılırsanız, yazdığınız görünen ad ve yarışma günlerindeki adım toplamınız, 8. bölümde açıklandığı şekilde Apple'ın iCloud'unda saklanır ve o yarışmanın üyelerine gösterilir.",
          "Uygulamada tek bir üçüncü taraf bileşen bulunur: yalnızca {app} PRO satın alımlarını ve abonelik durumunu yönetmek için kullanılan satın alma SDK'sı RevenueCat. RevenueCat'e iletilen bilgiler 7. bölümde açıklanır. Sağlık, hareket ve konum verileri RevenueCat'e asla iletilmez. Uygulama ayrıca, 8. ve 9. bölümlerde açıklandığı şekilde yarışmalar ve iCloud Eşzamanlama için Apple'ın iCloud'unu (CloudKit) kullanır. iCloud yalnızca iPhone'unuzda iCloud'a giriş yaptıysanız kullanılır.",
        ],
      },
      {
        title: "2. Uygulamanın Apple Sağlık'tan okudukları",
        paragraphs: [
          "{app}, izniniz dahilinde Apple Sağlık'tan şu verileri okur: adımlar, mesafe, harcanan enerji, çıkılan katlar, egzersiz süresi, nabız, dinlenme nabzı, yürüme nabzı ortalaması, yürüme ölçümleri (yürüme hızı, adım uzunluğu, yürüme asimetrisi ve çift destek süresi), yürüme dengesi, kardiyo kondisyonu (VO₂ max), altı dakika yürüyüş mesafesi, antrenmanlar ve antrenman rotaları.",
          "Bu veriler yalnızca gününüzü, geçmişinizi, nabız bölgelerinizi, eğilimlerinizi, yürüyüş analizinizi ve kişisel önerilerinizi uygulama içinde göstermek için kullanılır. iPhone'unuzda işlenir ve reklam amacıyla asla kullanılmaz. Geliştiriciye ya da başka birine gönderilmez; tek istisna, katıldığınız bir yarışmada paylaşılan adım toplamınızdır (8. bölüm).",
        ],
      },
      {
        title: "3. Uygulamanın Apple Sağlık'a yazdıkları",
        paragraphs: [
          "Bir yürüyüş kaydettiğinizde {app}, bunu rotasıyla birlikte yürüyüş antrenmanı olarak Apple Sağlık'a kaydeder. Başka hiçbir şey yazılmaz. Bu antrenmanları dilediğiniz zaman Sağlık uygulamasında görebilir ve silebilirsiniz.",
        ],
      },
      {
        title: "4. Konum",
        paragraphs: [
          "{app}, konumunuzu yalnızca bir yürüyüş kaydedilirken, rotayı haritada çizmek ve yürüyüşü ölçmek için kullanır. Rota, antrenmanla birlikte Apple Sağlık'a kaydedilir. Konumunuz başka hiçbir zaman kullanılmaz; geliştiriciye ya da başka birine asla gönderilmez.",
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
        title: "6. Kişisel öneriler ve Apple Intelligence",
        paragraphs: [
          "“Sana Özel” bölümündeki öneriler, kendi verilerinizden iPhone'unuzda hesaplanır. Apple Intelligence destekli iPhone'larda (iOS 26 veya sonrası) “Haftan Birkaç Cümlede”, Apple'ın cihaz üzerindeki modelinin bu verilerden, cihazınızda yazdığı kısa bir özettir. Önerileri ya da özetleri oluşturmak için geliştiriciye ya da başka birine hiçbir veri gönderilmez.",
          "Öneriler ve özetler genel sağlıklı yaşam bilgisidir; tıbbi tavsiye değildir.",
        ],
      },
      {
        title: "7. Satın alımlar ve RevenueCat",
        paragraphs: [
          "{app} PRO, uygulama içi satın alma olarak sunulur: otomatik yenilenen abonelik ya da tek seferlik satın alma. Satın alımlar, Apple Hesabınız üzerinden Apple tarafından işlenir. Ödeme bilgileriniz geliştiriciye asla ulaşmaz. Apple'ın satın alımınızla ilgili işlemleri için Apple'ın gizlilik politikası geçerlidir.",
          "Uygulama, PRO'nun cihazınızda etkin olup olmadığını bilmek için üçüncü taraf bir satın alma SDK'sı olan RevenueCat'i kullanır. RevenueCat, satın alma ve işlem bilgilerini ve anonim bir uygulama kullanıcı kimliğini alır. Uygulamadan adınızı ya da e-posta adresinizi almaz; sağlık, hareket ve konum verilerini ise asla almaz. Uygulama, RevenueCat'i reklam ya da izleme amacıyla kullanmaz. RevenueCat'in gizlilik politikası: https://www.revenuecat.com/privacy",
          "Ücretsiz ilk PRO haftası için ödeme ve kayıt gerekmez. Haftanın başladığı tarih iPhone'unuzda saklanır.",
        ],
      },
      {
        title: "8. Yarışmalar",
        paragraphs: [
          "Yarışmalar isteğe bağlıdır. Bir yarışma oluşturabilir ya da altı karakterli bir kodla veya davet bağlantısıyla bir yarışmaya katılabilirsiniz. Katılmak isteyen her kişiyi yarışmayı kuran kişi kabul eder. Yarışmalar için iCloud gerekir: yalnızca iPhone'unuzda iCloud'a giriş yaptıysanız çalışır.",
          "Kurduğunuz ya da katıldığınız bir yarışma için uygulama, Apple'ın iCloud'unda (CloudKit, uygulamanın genel “public” veritabanı) şunları saklar: yarışmanın adı, tarihleri ve adım hedefi, yazdığınız görünen ad ve yarışma günlerindeki toplam adım sayınız; bu sayı yarışma sürerken güncellenir. Bir yarışmanın üyeleri birbirlerinin görünen adını ve adım toplamını görür. Bir yarışmaya katılmak istediğinizde, yarışmayı kuran kişinin isteğinizi kabul ya da reddedebilmesi için görünen adınız saklanır.",
          "Nabız, konum, rota, yürüyüş ya da başka hiçbir sağlık verisi paylaşılmaz. Kayıtlar anonim bir iCloud kullanıcı tanımlayıcısıyla ilişkilendirilir; geliştirici iCloud'dan Apple Hesabınızı (Apple ID), e-posta adresinizi ya da adınızı almaz. Geliştiricinin kendine ait bir sunucusu yoktur; bu veriler Apple'ın iCloud'unda tutulur.",
          "Genel veritabanındaki kayıtlar, bir yarışmanın kodunu bilen herkes tarafından okunabilir; yani kod, özel bir bağlantı gibi çalışır. Kodu yalnızca yarışmada olmasını istediğiniz kişilerle paylaşın.",
          "Yarışmayı kuran kişi yarışmayı uygulamadan silebilir; bu, yarışmayı herkes için kaldırır. Bir yarışmadan ayrıldığınızda yarışma uygulamanızdan kaldırılır; bildirilen son adım toplamınız ise yarışma silinene kadar iCloud'da kalabilir. Kaldırılmasını isterseniz {email} adresine yazın.",
        ],
      },
      {
        title: "9. iCloud Eşzamanlama",
        paragraphs: [
          "iCloud Eşzamanlama varsayılan olarak açıktır ve uygulamanın Ayarlar bölümünden kapatılabilir. Günlük hedefinizi, birimlerinizi, kazandığınız madalyaları, görünen adınızı ve katıldığınız yarışmaların listesini, size özel iCloud anahtar-değer saklama alanınız aracılığıyla kendi cihazlarınız arasında aynı tutar. Bu bilgileri yalnızca siz okuyabilirsiniz. Yalnızca iPhone'unuzda iCloud'a giriş yaptıysanız kullanılır.",
        ],
      },
      {
        title: "10. Verilerinizin saklandığı yer",
        paragraphs: [
          "Sağlık, hareket ve konum verileriniz cihazınızda ve Apple Sağlık'ta kalır. Geliştiricinin kendine ait bir sunucusu yoktur. Yarışma verileri 8. bölümde açıklandığı şekilde Apple'ın iCloud'unda (CloudKit), eşzamanlanan ayarlar ise 9. bölümde açıklandığı şekilde size özel iCloud saklama alanınızda tutulur. Apple Sağlık'taki verileri Sağlık uygulamasından siz yönetirsiniz. Apple Sağlık'taki ve iCloud'daki veriler için Apple'ın gizlilik politikası geçerlidir. Satın alma bilgileri, 7. bölümde açıklandığı şekilde Apple ve RevenueCat tarafından tutulur.",
        ],
      },
      {
        title: "11. Tercihleriniz ve verilerinizin silinmesi",
        paragraphs: [
          "{app} uygulamasının hangi Apple Sağlık verilerini okuyup yazabileceğine, konum ile Hareket ve Fitness verilerini kullanıp kullanamayacağına siz karar verirsiniz. Bu izinleri dilediğiniz zaman Ayarlar ve Sağlık uygulamalarından değiştirebilirsiniz. Yarışmalar isteğe bağlıdır; iCloud Eşzamanlama'yı uygulamanın Ayarlar bölümünden kapatabilirsiniz. Abonelikler, App Store hesap ayarlarınızdan yönetilir ve iptal edilir.",
          "Uygulamayı sildiğinizde, günlük hareket özetleri dahil iPhone'unuzda sakladığı veriler de silinir. Ücretsiz haftanın başlangıç tarihi ise, uygulamayı yeniden yüklemek haftayı baştan başlatmasın diye saklanmaya devam eder. Apple Sağlık'taki veriler siz silene kadar orada kalır. Uygulamayı silmek, kurduğunuz bir yarışmayı iCloud'dan silmez: yarışmayı önce uygulamadan silin. Ayrıldığınız bir yarışmadaki verilerinizin kaldırılması için {email} adresine yazın.",
        ],
      },
      {
        title: "12. Çocuklar",
        paragraphs: [
          "{app}, 13 yaşın altındaki çocuklara yönelik değildir ve onlardan bilerek kişisel veri toplamaz.",
        ],
      },
      {
        title: "13. Değişiklikler ve iletişim",
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
          "{app} uygulamasının temel özellikleri ücretsizdir. {app} PRO; kişisel önerileri, yürüyüş analizini, hareket analizini ve yürüme ölçümlerini ekler. Her yeni kurulumda tüm PRO özellikleri ilk hafta boyunca ücretsizdir. Ücretsiz hafta için ödeme ve kayıt gerekmez; hafta bittiğinde kendiliğinden ücretli bir plana dönüşmez.",
          "Ücretsiz haftadan sonra PRO; yıllık, aylık veya haftalık otomatik yenilenen abonelik ya da tek seferlik ömür boyu satın alma olarak sunulur. Her planın fiyatı, satın almadan önce uygulamada gösterilir. Ödeme, satın almayı onayladığınızda Apple Hesabınızdan tahsil edilir.",
          "Abonelikler, siz iptal edene kadar her dönemin sonunda gösterilen fiyat üzerinden otomatik olarak yenilenir. Bir sonraki dönem için ücretlendirilmemek için, içinde bulunduğunuz dönemin bitiminden en az 24 saat önce iptal edin. Aboneliğinizi dilediğiniz zaman App Store hesap ayarlarınızdan yönetebilir ve iptal edebilirsiniz. Uygulamayı silmek aboneliği iptal etmez.",
          "Ömür boyu satın alma bir kez ödenir ve yenilenmez. Satın alımları Apple işler; iadeler Apple tarafından, Apple'ın kendi koşullarına göre yürütülür. Satın alımlarınızı, aynı Apple Hesabı ile giriş yapılmış bir cihazda uygulamadaki Satın Alımları Geri Yükle seçeneğiyle geri yükleyebilirsiniz. Tüm satın alımlar için Apple'ın Standart EULA'sı geçerlidir.",
        ],
      },
      {
        title: "3. Tıbbi cihaz değildir",
        paragraphs: [
          "{app} bir fitness ve sağlıklı yaşam uygulamasıdır. Tıbbi cihaz değildir; tıbbi tavsiye, teşhis veya tedavi sunmaz. Adım, mesafe, kalori, nabız, nabız bölgeleri, yürüme ölçümleri, kondisyon göstergeleri ve hareket analizi iPhone'unuzun sensörlerinden ve Apple Sağlık'tan gelir; tahminidir ve hatalı olabilir.",
          "Kişisel öneriler ve Apple'ın cihaz üzerindeki modelinin yazdığı “Haftan Birkaç Cümlede” özeti, bu verilerden çıkarılan genel bilgilerdir. Hatalı olabilirler ve tıbbi tavsiye değildirler.",
          "Sağlığınızla ilgili kararları yalnızca uygulamaya dayanarak vermeyin. Yeni bir egzersiz programına başlamadan önce veya sağlığınızla ilgili bir endişeniz varsa doktorunuza danışın.",
        ],
      },
      {
        title: "4. Güvenli yürüyün",
        paragraphs: [
          "Yürürken çevrenize dikkat edin. Güvenli olmadığı durumlarda telefonunuza bakmayın ve trafik kurallarına uyun.",
        ],
      },
      {
        title: "5. Verileriniz",
        paragraphs: [
          "Verileriniz size aittir. Sağlık, hareket ve konum verileriniz cihazınızda ve Apple Sağlık'ta kalır; onları oradan siz yönetirsiniz. Yarışmaları ya da iCloud Eşzamanlama'yı kullanırsanız, Gizlilik Politikası'nda açıklanan bilgiler Apple'ın iCloud'unda saklanır. {app} uygulamasının verilerinizi nasıl ele aldığı ve hangi satın alma bilgilerinin işlendiği Gizlilik Politikası'nda açıklanır.",
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
    emailHint: "Bir sorun bildiriyorsanız lütfen iPhone modelinizi ve iOS sürümünüzü belirtin. Sağlık verilerinizi bize göndermeniz asla gerekmez.",
    topics: [
      {
        title: "Adımlar veya diğer veriler görünmüyor",
        text: "{app} uygulamasının Apple Sağlık'tan veri okuma iznine ihtiyacı vardır. Sağlık uygulamasını açın, profil resminize › Uygulamalar › {app} yolunu izleyin ve görmek istediğiniz verileri açın.",
      },
      {
        title: "Canlı adımlar güncellenmiyor",
        text: "Ayarlar › Gizlilik ve Güvenlik › Hareket ve Fitness bölümünde {app} için erişime izin verildiğinden emin olun.",
      },
      {
        title: "Hareket analizi boş",
        text: "Hareket analizi için Hareket ve Fitness erişimi gerekir. {app} içinde Ayarlar › Hareket Analizi bölümünden ya da Ayarlar uygulamasında Gizlilik ve Güvenlik › Hareket ve Fitness bölümünden izin verin. Analiz iPhone'unuzda yapılır ve veriler cihazınızdan çıkmaz.",
      },
      {
        title: "Rota çizilmiyor",
        text: "Rota kaydı için konum erişimi gerekir. Ayarlar › Gizlilik ve Güvenlik › Konum Servisleri bölümünden {app} için izin verin. Konum yalnızca yürüyüş kaydedilirken kullanılır.",
      },
      {
        title: "Nabız bölgeleri boş",
        text: "Bölgeler, Apple Sağlık'taki nabız verilerinden hesaplanır. Apple Watch gibi bir cihaz nabzınızı kaydettiğinde görünür.",
      },
      {
        title: "PRO özellikleri kilitli",
        text: "Her yeni kurulumda tüm PRO özellikleri ilk hafta boyunca ücretsizdir. Sonrasında bu özellikler için {app} PRO gerekir. Adımlar, geçmiş, yürüyüş kaydı, adım eğilimleri ve nabız bölgeleri ücretsiz kalır. PRO'yu daha önce satın aldıysanız satın alımınızı geri yükleyin.",
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
        text: "Yazılı özet için Apple Intelligence destekli (iOS 26 veya sonrası) ve Apple Intelligence'ın açık olduğu bir iPhone gerekir. “Sana Özel” bölümündeki diğer öneriler, desteklenen her iPhone'da çalışır.",
      },
    ],
  },
};
