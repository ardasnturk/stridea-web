import type { BaseDictionary } from "./types";

export const en: BaseDictionary = {
  meta: {
    title: "{app} – Step Counter & Walk Tracker for iPhone",
    description:
      "{app} counts your steps, tracks your walks on a live map and shows heart-rate zones, walking analysis and personal suggestions worked out on your iPhone. No account, no ads, no analytics.",
  },
  nav: {
    features: "Features",
    walks: "Walks",
    trends: "Trends",
    pro: "PRO",
    privacy: "Privacy",
    faq: "FAQ",
    download: "Download",
    comingSoon: "Coming soon",
    language: "Language",
    menu: "Menu",
    skip: "Skip to content",
  },
  appStore: { small: "Download on the", large: "App Store", soonSmall: "Coming soon to the", soonLarge: "App Store" },
  footer: {
    tagline: "A clear, private step counter and walk tracker for iPhone, connected to Apple Health.",
    product: "Product",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    support: "Support",
    rights: "All rights reserved.",
    trademarks: "Apple, iPhone, Apple Watch and App Store are trademarks of Apple Inc.",
  },
  legal: {
    updated: "Last updated: November 12, 2026",
    back: "Back to home",
    privacyTitle: "Privacy Policy",
    privacyIntro:
      "This policy explains how the {app} app for iPhone (“{app}”, “the app”), developed by {developer}, handles your information. In short: your health, motion and location data stays on your iPhone and in Apple Health. The app has no accounts, no ads and no analytics. Information leaves your device in three cases only: purchase information for {app} PRO (section 7); if you create or join a competition, your display name and your step total for that competition, which are stored in Apple's iCloud and shown to its members (section 8); and iCloud Sync, which keeps a few settings the same across your own devices in your private iCloud storage (section 9).",
    privacySections: [
      {
        title: "1. Data we collect",
        paragraphs: [
          "{app} has no user accounts, no ads, and no analytics or tracking. The developer does not receive your walks, routes, heart-rate data, motion activity, location or anything else you see in the app. The one exception is optional: if you create or join a competition, the display name you typed and your step total for the days of the competition are stored in Apple's iCloud and shown to the members of that competition, as described in section 8.",
          "The app contains one third-party component: RevenueCat, a purchase SDK used only to manage {app} PRO purchases and subscription status. What it receives is described in section 7. It never receives health, motion or location data. The app also uses Apple's iCloud (CloudKit) for competitions and iCloud Sync, as described in sections 8 and 9. iCloud is used only if you are signed in to iCloud on your iPhone.",
        ],
      },
      {
        title: "2. What the app reads from Apple Health",
        paragraphs: [
          "With your permission, {app} reads the following from Apple Health: steps, distance, energy burned, flights climbed, exercise time, heart rate, resting heart rate, walking heart rate average, walking metrics (walking speed, step length, walking asymmetry and double support time), walking steadiness, cardio fitness (VO₂ max), six-minute walk distance, workouts and workout routes.",
          "This data is only used to show your day, your history, your heart-rate zones, your trends, your walking analysis and your personal suggestions inside the app. It is processed on your iPhone and is never used for advertising. It is not sent to the developer or anyone else; the only exception is the step total shared in a competition you take part in (section 8).",
        ],
      },
      {
        title: "3. What the app writes to Apple Health",
        paragraphs: [
          "When you record a walk, {app} saves it to Apple Health as a walking workout together with its route. Nothing else is written. You can view and delete these workouts in the Health app at any time.",
        ],
      },
      {
        title: "4. Location",
        paragraphs: [
          "{app} uses your location only while a walk is being recorded, to draw the route on the map and measure the walk. The route is saved with the workout in Apple Health. Your location is not used at any other time and is never sent to the developer or anyone else.",
        ],
      },
      {
        title: "5. Motion & Fitness data",
        paragraphs: [
          "With your permission (Motion & Fitness), {app} reads the activity recorded by your iPhone's motion sensor: whether you were walking, running, cycling, in a vehicle or stationary, and the steps counted by the pedometer. iPhone records this activity in the background by itself; the app only reads it.",
          "The app uses it to show your steps live while you record a walk and for motion analysis: your most active hours, time on foot, walks, longest sitting stretch, cadence and time in vehicles. Daily summaries of this activity are stored only on your iPhone. Motion data is analysed on the device and is never sent to the developer or anyone else.",
        ],
      },
      {
        title: "6. Personal suggestions and Apple Intelligence",
        paragraphs: [
          "The suggestions in “For You” are worked out on your iPhone from your own numbers. On iPhones with Apple Intelligence (iOS 26 or later), “Your Week in Words” is a short summary written on the device by Apple's on-device model from those numbers. Nothing is sent to the developer or to anyone else to create suggestions or summaries.",
          "Suggestions and summaries are general wellness information, not medical advice.",
        ],
      },
      {
        title: "7. Purchases and RevenueCat",
        paragraphs: [
          "{app} PRO is offered as an in-app purchase: an auto-renewing subscription or a one-time purchase. Purchases are processed by Apple through your Apple Account. The developer never receives your payment details. Apple's handling of your purchase is covered by Apple's privacy policy.",
          "To know whether PRO is active on your device, the app uses RevenueCat, a third-party purchase SDK. RevenueCat receives purchase and transaction information and an anonymous app user ID. It does not receive your name or email address from the app, and it never receives health, motion or location data. The app does not use RevenueCat for advertising or tracking. RevenueCat's privacy policy: https://www.revenuecat.com/privacy",
          "The free first week of PRO needs no payment and no sign-up. The date it started is stored on your iPhone.",
        ],
      },
      {
        title: "8. Competitions",
        paragraphs: [
          "Competitions are optional. You can create a competition, or join one with a six-character code or an invitation link. The host accepts each person who asks to join. Competitions need iCloud: they work only if you are signed in to iCloud on your iPhone.",
          "For a competition you host or join, the app stores the following in Apple's iCloud (CloudKit, in the app's public database): the competition's name, its dates and its step goal, the display name you typed, and your total step count for the days of the competition, which is updated while the competition runs. Members of a competition see each other's display name and step total. If you ask to join a competition, your display name is stored so that the host can accept or decline.",
          "No heart rate, location, routes, walks or other health data is shared. Records are identified by an anonymous iCloud user identifier; the developer does not get your Apple Account (Apple ID), email address or name from iCloud. The developer runs no server of their own; this data is held by Apple's iCloud.",
          "Records in the public database can be read by anyone who knows a competition's code, so the code works like a private link. Share it only with the people you want in the competition.",
          "The host can delete a competition in the app, which removes it for everyone. If you leave a competition, it is removed from your app; your last reported step total may remain in iCloud until the competition is deleted. To have it removed, write to {email}.",
        ],
      },
      {
        title: "9. iCloud Sync",
        paragraphs: [
          "iCloud Sync is on by default and can be turned off in the app's Settings. It keeps your daily goal, units, medals earned, display name and the list of competitions you have joined the same across your own devices, through your private iCloud key-value storage. Only you can read it. It is used only if you are signed in to iCloud on your iPhone.",
        ],
      },
      {
        title: "10. Where your data is stored",
        paragraphs: [
          "Your health, motion and location data stays on your device and in Apple Health. The developer runs no server of their own. Competition data is held in Apple's iCloud (CloudKit) as described in section 8, and synced settings in your private iCloud storage as described in section 9. Data in Apple Health is managed by you in the Health app. Data in Apple Health and in iCloud is covered by Apple's privacy policy. Purchase information is held by Apple and by RevenueCat as described in section 7.",
        ],
      },
      {
        title: "11. Your choices and deleting your data",
        paragraphs: [
          "You decide which Apple Health data {app} may read or write, and whether it may use location and Motion & Fitness data. You can change these permissions at any time in the Settings and Health apps. Competitions are optional, and iCloud Sync can be turned off in the app's Settings. Subscriptions are managed and cancelled in your App Store account settings.",
          "Deleting the app removes the data it stores on your iPhone, including the daily motion summaries. The start date of the free week is kept, so that reinstalling the app does not restart it. Data in Apple Health stays until you delete it there. Deleting the app does not delete a competition you host from iCloud: delete it in the app first. To have your data removed from a competition you have left, write to {email}.",
        ],
      },
      {
        title: "12. Children",
        paragraphs: [
          "{app} is not directed at children under 13 and does not knowingly collect personal data from them.",
        ],
      },
      {
        title: "13. Changes and contact",
        paragraphs: [
          "If this policy changes, we will update this page and the date above. Questions? Write to {email}.",
        ],
      },
    ],
    termsTitle: "Terms of Use",
    termsIntro:
      "{app} is licensed to you under Apple's Standard Licensed Application End User License Agreement (EULA), together with the following terms.",
    termsSections: [
      {
        title: "1. License",
        paragraphs: [
          "Your use of {app} is governed by Apple's Standard EULA: https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
        ],
      },
      {
        title: "2. {app} PRO, subscriptions and purchases",
        paragraphs: [
          "The core of {app} is free. {app} PRO adds personal suggestions, walking analysis, motion analysis and walking metrics. Every new install includes all PRO features free for the first week. The free week needs no payment and no sign-up, and it does not turn into a paid plan by itself.",
          "After the free week, PRO is available as a yearly, monthly or weekly auto-renewing subscription, or as a one-time lifetime purchase. The price of each plan is shown in the app before you buy. Payment is charged to your Apple Account when you confirm the purchase.",
          "Subscriptions renew automatically at the end of each period, at the price shown, until you cancel. To avoid being charged for the next period, cancel at least 24 hours before the current period ends. You can manage and cancel a subscription at any time in your App Store account settings. Deleting the app does not cancel a subscription.",
          "The lifetime purchase is paid once and does not renew. Purchases are processed by Apple, and refunds are handled by Apple under its own terms. You can restore your purchases on a device signed in to the same Apple Account with Restore Purchases in the app. Apple's Standard EULA applies to all purchases.",
        ],
      },
      {
        title: "3. Not a medical device",
        paragraphs: [
          "{app} is a fitness and wellness app. It is not a medical device and does not provide medical advice, diagnosis or treatment. Steps, distance, calories, heart rate, heart-rate zones, walking metrics, fitness markers and motion analysis come from your iPhone's sensors and from Apple Health, are estimates and may be inaccurate.",
          "Personal suggestions and the “Your Week in Words” summary, which is written by Apple's on-device model, are general information worked out from those numbers. They can be wrong and are not medical advice.",
          "Do not make health decisions based on the app alone. Talk to a doctor before starting a new exercise routine or if you have any concerns about your health.",
        ],
      },
      {
        title: "4. Walk safely",
        paragraphs: [
          "Pay attention to your surroundings while walking. Do not look at your phone when it is unsafe to do so, and follow local traffic rules.",
        ],
      },
      {
        title: "5. Your data",
        paragraphs: [
          "Your data belongs to you. Your health, motion and location data stays on your device and in Apple Health, and you manage it there. If you use competitions or iCloud Sync, the information described in the Privacy Policy is stored in Apple's iCloud. How {app} handles your data, and what purchase information is processed, is described in the Privacy Policy.",
        ],
      },
      {
        title: "6. Contact",
        paragraphs: [
          "Questions about these terms: {email}.",
        ],
      },
    ],
  },
  support: {
    title: "Support",
    intro: "Something not working, or an idea to make {app} better? We'd love to hear from you.",
    emailLabel: "Email us",
    emailHint: "Please include your iPhone model and iOS version if you are reporting a problem. You never need to send us your health data.",
    topics: [
      {
        title: "Steps or other data are missing",
        text: "{app} needs permission to read from Apple Health. Open the Health app, tap your profile picture › Apps › {app} and turn on the data you want to see.",
      },
      {
        title: "Live steps don't update",
        text: "Check that Motion & Fitness access is allowed for {app} in Settings › Privacy & Security › Motion & Fitness.",
      },
      {
        title: "Motion analysis is empty",
        text: "Motion analysis needs Motion & Fitness access. Allow it in {app} under Settings › Motion Analysis, or in the Settings app › Privacy & Security › Motion & Fitness. The analysis is done on your iPhone and the data never leaves it.",
      },
      {
        title: "The route is not drawn",
        text: "Recording a route needs location access. Allow it for {app} in Settings › Privacy & Security › Location Services. Location is only used while a walk is being recorded.",
      },
      {
        title: "Heart-rate zones are empty",
        text: "Zones are calculated from heart-rate data in Apple Health. They appear when a device such as an Apple Watch has recorded your heart rate.",
      },
      {
        title: "PRO features are locked",
        text: "Every new install includes all PRO features free for the first week. After that they need {app} PRO. Steps, history, walk recording, step trends and heart-rate zones stay free. If you already bought PRO, restore your purchase.",
      },
      {
        title: "Restore purchases",
        text: "In {app}, open Settings › {app} PRO and tap Restore Purchases. You need to be signed in to the Apple Account you bought PRO with.",
      },
      {
        title: "Manage or cancel a subscription",
        text: "Subscriptions are managed by Apple. Open the Settings app › your name › Subscriptions, or tap Manage Subscription on the {app} PRO screen. Deleting the app does not cancel a subscription. For refunds, contact Apple.",
      },
      {
        title: "“Your Week in Words” doesn't appear",
        text: "The written summary needs an iPhone with Apple Intelligence (iOS 26 or later) and Apple Intelligence turned on. The other suggestions in “For You” work on every supported iPhone.",
      },
    ],
  },
};
