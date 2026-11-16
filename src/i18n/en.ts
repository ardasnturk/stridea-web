import type { BaseDictionary } from "./types";

export const en: BaseDictionary = {
  meta: {
    title: "{app} – Explore Your City on Foot",
    description:
      "{app} turns walking into exploring: your city starts under fog, every walk clears it, and the landmarks, museums, castles and parks you pass join your collection and earn cups. No account, no ads, no tracking.",
  },
  nav: {
    features: "Features",
    explore: "Explore",
    collection: "Collection",
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
    tagline: "Clear the fog on your city's map, collect the places worth seeing and win cups, one walk at a time. For iPhone and Apple Watch.",
    product: "Product",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    support: "Support",
    rights: "All rights reserved.",
    trademarks: "Apple, iPhone, Apple Watch, Apple Maps and App Store are trademarks of Apple Inc.",
  },
  legal: {
    updated: "Last updated: November 16, 2026",
    back: "Back to home",
    privacyTitle: "Privacy Policy",
    privacyIntro:
      "This policy explains how the {app} app for iPhone and Apple Watch (“{app}”, “the app”), developed by {developer}, handles your information. In short: your walks, routes, explored map, collection, health, motion and location data stay on your device and in Apple Health. The app has no accounts, no ads and no analytics, and the developer runs no server. Information leaves your device only in these cases: to find sights and walking routes, the app asks Apple's maps service about the map area involved (section 6); purchase information for {app} PRO (section 9); if you create or join a competition, your display name and your score for that competition, which are stored in Apple's iCloud and shown to its members (section 10); and iCloud Sync, which keeps a few settings the same across your own devices in your private iCloud storage (section 11).",
    privacySections: [
      {
        title: "1. Data we collect",
        paragraphs: [
          "{app} has no user accounts, no ads, and no analytics or tracking. The developer does not receive your walks, routes, explored map, collected sights, heart-rate data, motion activity, location or anything else you see in the app. The one exception is optional: if you create or join a competition, the display name you typed and your score for the days of the competition are stored in Apple's iCloud and shown to the members of that competition, as described in section 10.",
          "The app contains one third-party component: RevenueCat, a purchase SDK used only to manage {app} PRO purchases and subscription status (section 9). It never receives health, motion or location data. The app also uses services provided by Apple: Apple Health, Apple's maps service (MapKit) for sights and walking routes (section 6), and iCloud (CloudKit) for competitions and iCloud Sync (sections 10 and 11). No other place, map or analytics service is used.",
        ],
      },
      {
        title: "2. What the app reads from Apple Health",
        paragraphs: [
          "With your permission, {app} reads the following from Apple Health: workouts and workout routes, steps, distance, active energy, flights climbed, exercise time, heart rate, resting heart rate, walking heart rate average, walking metrics (walking speed, step length, walking asymmetry and double support time), walking steadiness, cardio fitness (VO₂ max), six-minute walk distance, and your date of birth, which is only used to estimate your maximum heart rate for heart-rate zones.",
          "The routes of your walks and hikes are used to uncover your map and to find the sights you walked past (section 7). The other data is used to show your day, your history, your trends, your heart-rate zones, your walking analysis and your personal suggestions. All of it is processed on your device and never used for advertising. It is not sent to the developer or anyone else; the only exception is the score shared in a competition you take part in (section 10).",
        ],
      },
      {
        title: "3. What the app writes to Apple Health",
        paragraphs: [
          "When you record a walk in the app or on Apple Watch, {app} saves it to Apple Health as a walking workout together with its route and distance. Nothing else is written. You can view and delete these workouts in the Health app at any time.",
        ],
      },
      {
        title: "4. Location",
        paragraphs: [
          "{app} asks for location access while you use the app (“When In Use”). It uses your location to record walks and draw their route, and to show where you are and the sights near you on the map. If you lock your screen during a walk you started, the app keeps recording that walk's route in the background until you finish it. There is no background location tracking at any other time.",
          "Your location is never sent to the developer. To find sights and walking routes near you, the map area or coordinates involved are sent to Apple, as described in section 6.",
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
        title: "6. Sights, walking routes and Apple Maps",
        paragraphs: [
          "To find places worth seeing (landmarks and monuments, museums, castles and fortresses, theatres and planetariums, libraries and parks), {app} uses Apple's MapKit points-of-interest search. To draw a walking route to a sight or plan a sightseeing tour, it uses MapKit walking directions. To name the areas you walk in most, it uses Apple's geocoding service. These requests go directly from your device to Apple and contain the map area or coordinates involved, such as the area around your walks or the start and end of a route. They are handled by Apple under Apple's privacy policy (https://www.apple.com/legal/privacy/).",
          "“About This Place” shows Apple Maps' own place card for a sight; its contents come from Apple. The developer receives none of these requests or their results. Sight results and area names are cached only on your device. {app} uses no other place or map service.",
        ],
      },
      {
        title: "7. Your explored map and collection",
        paragraphs: [
          "The parts of the map you have uncovered, your areas, the new ground of each walk, the sights you have collected, your cups and your medals are worked out on your device from the routes in Apple Health and the sights found through Apple Maps. They are stored only on your device and are never sent to the developer or anyone else. The only exception is your score in a competition you take part in (section 10).",
        ],
      },
      {
        title: "8. Personal suggestions and Apple Intelligence",
        paragraphs: [
          "The personal suggestions ({app} PRO) are worked out on your iPhone from your own numbers. On iPhones with Apple Intelligence (iOS 26 or later), “Your Week in Words” is a short summary written on the device by Apple's on-device model from those numbers. Nothing is sent to the developer or to anyone else to create suggestions or summaries.",
          "Suggestions and summaries are general wellness information, not medical advice.",
        ],
      },
      {
        title: "9. Purchases and RevenueCat",
        paragraphs: [
          "{app} PRO is offered as an in-app purchase: an auto-renewing subscription or a one-time purchase. Purchases are processed by Apple through your Apple Account. The developer never receives your payment details. Apple's handling of your purchase is covered by Apple's privacy policy.",
          "To know whether PRO is active on your device, the app uses RevenueCat, a third-party purchase SDK. RevenueCat receives purchase and transaction information and an anonymous app user ID. It does not receive your name or email address from the app, and it never receives health, motion, location or map data. The app does not use RevenueCat for advertising or tracking. RevenueCat's privacy policy: https://www.revenuecat.com/privacy",
          "Whether the welcome offer has been shown, and when it ends, is stored on your device.",
        ],
      },
      {
        title: "10. Competitions",
        paragraphs: [
          "Competitions are optional. You can create a competition, or join one with a six-character code or an invitation link. The host accepts each person who asks to join. Competitions need iCloud: they work only if you are signed in to iCloud on your iPhone.",
          "A competition counts either steps or new ground: the area, in square metres, that a member uncovers on the competition's days and had never walked before. For a competition you host or join, the app stores the following in Apple's iCloud (CloudKit, in the app's public database): the competition's name, its dates, what it counts and its goal, the display name you typed, and your score for the days of the competition (your step total or your square metres of new ground), which is updated while the competition runs. Members of a competition see each other's display name and score. If you ask to join a competition, your display name is stored so that the host can accept or decline.",
          "No routes, locations, places, walks, heart rate or other health data are shared: only the total. Records are identified by an anonymous iCloud user identifier; the developer does not get your Apple Account (Apple ID), email address or name from iCloud. The developer runs no server of their own; this data is held by Apple's iCloud.",
          "Records in the public database can be read by anyone who knows a competition's code, so the code works like a private link. Share it only with the people you want in the competition.",
          "The host can delete a competition in the app, which removes it for everyone. If you leave a competition, it is removed from your app; your last reported score may remain in iCloud until the competition is deleted. To have it removed, write to {email}.",
        ],
      },
      {
        title: "11. iCloud Sync",
        paragraphs: [
          "iCloud Sync is on by default and can be turned off in the app's Settings. It keeps your daily goal, units, maximum heart rate setting, medals earned, competition results, display name and the list of competitions you have joined the same across your own devices, through your private iCloud key-value storage. Only you can read it. Your explored map and collection are not synced. iCloud Sync is used only if you are signed in to iCloud on your iPhone.",
        ],
      },
      {
        title: "12. Where your data is stored",
        paragraphs: [
          "Your explored map, collection, health, motion and location data stays on your device and in Apple Health. The developer runs no server of their own. Requests for sights and walking routes are handled by Apple as described in section 6. Competition data is held in Apple's iCloud (CloudKit) as described in section 10, and synced settings in your private iCloud storage as described in section 11. Data in Apple Health is managed by you in the Health app. Data in Apple Health, Apple's maps service and iCloud is covered by Apple's privacy policy. Purchase information is held by Apple and by RevenueCat as described in section 9.",
        ],
      },
      {
        title: "13. Your choices and deleting your data",
        paragraphs: [
          "You decide which Apple Health data {app} may read or write, and whether it may use location and Motion & Fitness data. You can change these permissions at any time in the Settings and Health apps. Competitions are optional, and iCloud Sync can be turned off in the app's Settings. Subscriptions are managed and cancelled in your App Store account settings.",
          "Deleting the app removes the data it stores on your device, including your explored map, collection, cached sights and the daily motion summaries. Your walks and their routes stay in Apple Health until you delete them there. Deleting the app does not delete a competition you host from iCloud: delete it in the app first. To have your data removed from a competition you have left, write to {email}.",
        ],
      },
      {
        title: "14. Children",
        paragraphs: [
          "{app} is not directed at children under 13 and does not knowingly collect personal data from them.",
        ],
      },
      {
        title: "15. Changes and contact",
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
          "The core of {app} is free: the fog map and areas, sights, your collection and cups, nearby suggestions and walking routes to a sight, competitions, medals, steps and walk recording. {app} PRO adds sightseeing tours, the exploration time-lapse, personal suggestions, walking analysis, motion analysis and walking metrics. There is no free trial.",
          "PRO is available as a yearly, 3-month, monthly or weekly auto-renewing subscription, or as a one-time lifetime purchase. The price of each plan is shown in the app before you buy. Payment is charged to your Apple Account when you confirm the purchase.",
          "Welcome offer: after setup, the app shows the PRO plans once. If you close them without buying, a one-time welcome offer may be shown: the 3-month subscription at a discount, available for 24 hours. The offer is shown only once and cannot be restarted. It is an auto-renewing subscription: unless you cancel, it renews every 3 months at the renewal price shown in the offer before you buy.",
          "Subscriptions renew automatically at the end of each period, at the price shown, until you cancel. To avoid being charged for the next period, cancel at least 24 hours before the current period ends. You can manage and cancel a subscription at any time in your App Store account settings. Deleting the app does not cancel a subscription.",
          "The lifetime purchase is paid once and does not renew. Purchases are processed by Apple, and refunds are handled by Apple under its own terms. You can restore your purchases on a device signed in to the same Apple Account with Restore Purchases in the app. Apple's Standard EULA applies to all purchases.",
        ],
      },
      {
        title: "3. Not a medical device",
        paragraphs: [
          "{app} is a walking, exploration and wellness app. It is not a medical device and does not provide medical advice, diagnosis or treatment. Steps, distance, calories, heart rate, heart-rate zones, walking metrics, fitness markers and motion analysis come from your device's sensors and from Apple Health, are estimates and may be inaccurate.",
          "Personal suggestions and the “Your Week in Words” summary, which is written by Apple's on-device model, are general information worked out from those numbers. They can be wrong and are not medical advice.",
          "Do not make health decisions based on the app alone. Talk to a doctor before starting a new exercise routine or if you have any concerns about your health.",
        ],
      },
      {
        title: "4. Places, routes and walking safely",
        paragraphs: [
          "Sights, place details and walking routes come from Apple Maps. They may be incomplete, out of date or inaccurate: a place may be closed, private, under construction or not open to the public, and a suggested route or sightseeing tour may not be safe or passable. Use your own judgement, follow signs, opening hours and local rules, and do not enter private property.",
          "Pay attention to your surroundings while walking. Do not look at your phone when it is unsafe to do so, and follow local traffic rules.",
        ],
      },
      {
        title: "5. Your data",
        paragraphs: [
          "Your data belongs to you. Your explored map, collection, health, motion and location data stays on your device and in Apple Health, and you manage it there. If you use competitions or iCloud Sync, the information described in the Privacy Policy is stored in Apple's iCloud. How {app} handles your data, what is sent to Apple's maps service and what purchase information is processed is described in the Privacy Policy.",
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
    emailHint: "Please include your iPhone model and iOS version if you are reporting a problem. You never need to send us your health data or your routes.",
    topics: [
      {
        title: "My walks don't clear the fog",
        text: "The map is uncovered from the routes of your walks in Apple Health. Open the Health app, tap your profile picture › Apps › {app} and turn on Workouts and Workout Routes. Only walks and hikes with a route count: outdoor walks recorded in {app}, on Apple Watch or by another app that saves the route.",
      },
      {
        title: "No sights appear on the map",
        text: "Sights are looked up in Apple Maps, so {app} needs an internet connection the first time it looks at an area. It shows landmarks and monuments, museums, castles and fortresses, theatres and planetariums, libraries and parks; some areas have few of them in Apple Maps.",
      },
      {
        title: "A sight wasn't added to my collection",
        text: "A sight is collected when the route of one of your walks passes within about 100 m of it. Walks without a recorded route, such as indoor walks, can't collect sights.",
      },
      {
        title: "My position isn't shown or the route isn't drawn",
        text: "{app} needs location access while you use the app. Allow it in Settings › Privacy & Security › Location Services › {app} (“While Using the App”). In the background, location is only used during a walk you started.",
      },
      {
        title: "Competitions don't work",
        text: "Competitions use iCloud. Make sure you are signed in to iCloud in the Settings app and that your iPhone is online. To join, enter the six-character code or open the invitation link, then wait for the host to accept you.",
      },
      {
        title: "Steps or other data are missing",
        text: "{app} needs permission to read from Apple Health. Open the Health app, tap your profile picture › Apps › {app} and turn on the data you want to see.",
      },
      {
        title: "Live steps don't update",
        text: "Check that Motion & Fitness access is allowed for {app} in Settings › Privacy & Security › Motion & Fitness.",
      },
      {
        title: "PRO features are locked",
        text: "Sightseeing tours, the exploration time-lapse, personal suggestions, walking analysis, motion analysis and walking metrics need {app} PRO. There is no free trial. Exploring, sights, the collection, cups, competitions and steps stay free. If you already bought PRO, restore your purchase.",
      },
      {
        title: "Where is the welcome offer?",
        text: "The welcome offer appears once, if you close the PRO plans shown at the end of setup without buying. It lasts 24 hours and can be reopened from its card in the app until it ends. It can't be restarted after that.",
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
        text: "The written summary is part of PRO and needs an iPhone with Apple Intelligence (iOS 26 or later) with Apple Intelligence turned on. The other personal suggestions work on every supported iPhone.",
      },
    ],
  },
};
