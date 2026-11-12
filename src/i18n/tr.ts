import type { BaseDictionary } from "./types";

export const tr: BaseDictionary = {
  meta: {
    title: "{app} – iPhone için Adımsayar ve Yürüyüş Takibi",
    description:
      "{app} adımlarını sayar, yürüyüşlerini canlı haritada takip eder, nabız bölgelerini ve Apple Sağlık'taki yürüme ölçümlerini gösterir. Hesap yok, reklam yok, analiz yok.",
  },
  nav: {
    features: "Özellikler",
    walks: "Yürüyüşler",
    insights: "Analizler",
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
      "Bu politika, {developer} tarafından geliştirilen {app} adlı iPhone uygulamasının (“{app}”, “uygulama”) bilgilerinizi nasıl ele aldığını açıklar. Kısacası: {app} kişisel verilerinizi toplamaz. Her şey iPhone'unuzda ve Apple Sağlık'ta kalır.",
    privacySections: [
      {
        title: "1. Topladığımız veriler",
        paragraphs: [
          "Hiçbiri. {app} uygulamasında kullanıcı hesabı, reklam, analiz ve üçüncü taraf SDK'sı yoktur. Geliştirici; adımlarınıza, yürüyüşlerinize, rotalarınıza, nabız verilerinize veya uygulamadaki başka hiçbir bilgiye erişmez.",
        ],
      },
      {
        title: "2. Uygulamanın Apple Sağlık'tan okudukları",
        paragraphs: [
          "{app}, izniniz dahilinde Apple Sağlık'tan şu verileri okur: adımlar, mesafe, harcanan enerji, çıkılan katlar, egzersiz süresi, nabız, yürüme ölçümleri (yürüme hızı, adım uzunluğu, yürüme asimetrisi ve çift destek süresi), antrenmanlar ve antrenman rotaları.",
          "Bu veriler yalnızca gününüzü, geçmişinizi, nabız bölgelerinizi ve eğilimlerinizi uygulama içinde göstermek için kullanılır. iPhone'unuzda işlenir; geliştiriciye ya da başka birine asla gönderilmez ve reklam amacıyla asla kullanılmaz.",
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
          "{app}, konumunuzu yalnızca bir yürüyüş kaydedilirken, rotayı haritada çizmek ve yürüyüşü ölçmek için kullanır. Rota, antrenmanla birlikte Apple Sağlık'a kaydedilir. Konumunuz başka hiçbir zaman kullanılmaz ve geliştiriciye asla gönderilmez.",
        ],
      },
      {
        title: "5. Hareket verileri",
        paragraphs: ["{app}, adımlarınızı canlı göstermek için iPhone'unuzun hareket verilerini kullanır. Bu veriler cihazınızda işlenir."],
      },
      {
        title: "6. Verilerinizin saklandığı yer",
        paragraphs: [
          "Verileriniz cihazınızda ve Apple Sağlık'ta kalır. {app} uygulamasının kendine ait bir sunucusu ya da bulut eşzamanlaması yoktur. Apple Sağlık'taki verileri Sağlık uygulamasından siz yönetirsiniz; bu veriler için Apple'ın gizlilik politikası geçerlidir.",
        ],
      },
      {
        title: "7. Tercihleriniz",
        paragraphs: [
          "{app} uygulamasının hangi Apple Sağlık verilerini okuyup yazabileceğine, konum ve hareket verilerini kullanıp kullanamayacağına siz karar verirsiniz. Bu izinleri dilediğiniz zaman Ayarlar ve Sağlık uygulamalarından değiştirebilirsiniz. Uygulamayı sildiğinizde iPhone'unuzda sakladığı veriler de silinir; Apple Sağlık'taki veriler ise siz silene kadar orada kalır.",
        ],
      },
      {
        title: "8. Çocuklar",
        paragraphs: ["{app}, 13 yaşın altındaki çocuklara yönelik değildir ve onlardan (ya da başka herhangi birinden) bilerek veri toplamaz."],
      },
      {
        title: "9. Değişiklikler ve iletişim",
        paragraphs: ["Bu politika değişirse bu sayfayı ve yukarıdaki tarihi güncelleriz. Sorularınız için: {email}."],
      },
    ],
    termsTitle: "Kullanım Koşulları",
    termsIntro:
      "{app}, Apple'ın Standart Lisanslı Uygulama Son Kullanıcı Lisans Sözleşmesi (EULA) ve aşağıdaki koşullar kapsamında size lisanslanır.",
    termsSections: [
      {
        title: "1. Lisans",
        paragraphs: ["{app} kullanımınız Apple'ın Standart EULA'sına tabidir: https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"],
      },
      {
        title: "2. Tıbbi cihaz değildir",
        paragraphs: [
          "{app} bir fitness ve sağlıklı yaşam uygulamasıdır. Tıbbi cihaz değildir; tıbbi tavsiye, teşhis veya tedavi sunmaz. Adım, mesafe, kalori, nabız, nabız bölgeleri ve yürüme ölçümleri iPhone'unuzun sensörlerinden ve Apple Sağlık'tan gelir; tahminidir ve hatalı olabilir.",
          "Sağlığınızla ilgili kararları yalnızca uygulamaya dayanarak vermeyin. Yeni bir egzersiz programına başlamadan önce veya sağlığınızla ilgili bir endişeniz varsa doktorunuza danışın.",
        ],
      },
      {
        title: "3. Güvenli yürüyün",
        paragraphs: ["Yürürken çevrenize dikkat edin. Güvenli olmadığı durumlarda telefonunuza bakmayın ve trafik kurallarına uyun."],
      },
      {
        title: "4. Verileriniz",
        paragraphs: [
          "Verileriniz size aittir. Cihazınızda ve Apple Sağlık'ta kalır; onları oradan siz yönetirsiniz. {app} uygulamasının verilerinizi nasıl ele aldığı Gizlilik Politikası'nda açıklanır.",
        ],
      },
      {
        title: "5. İletişim",
        paragraphs: ["Bu koşullarla ilgili sorularınız için: {email}."],
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
        title: "Rota çizilmiyor",
        text: "Rota kaydı için konum erişimi gerekir. Ayarlar › Gizlilik ve Güvenlik › Konum Servisleri bölümünden {app} için izin verin. Konum yalnızca yürüyüş kaydedilirken kullanılır.",
      },
      {
        title: "Nabız bölgeleri boş",
        text: "Bölgeler, Apple Sağlık'taki nabız verilerinden hesaplanır. Apple Watch gibi bir cihaz nabzınızı kaydettiğinde görünür.",
      },
    ],
  },
};
