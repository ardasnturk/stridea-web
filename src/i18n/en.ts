import type { BaseDictionary } from "./types";

export const en: BaseDictionary = {
  meta: {
    title: "{app} – Step Counter & Walk Tracker for iPhone",
    description:
      "{app} counts your steps, tracks your walks on a live map and shows heart-rate zones and walking metrics from Apple Health. No account, no ads, no analytics.",
  },
  nav: {
    features: "Features",
    walks: "Walks",
    insights: "Insights",
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
      "This policy explains how the {app} app for iPhone (“{app}”, “the app”), developed by {developer}, handles your information. In short: {app} does not collect your personal data. Everything stays on your iPhone and in Apple Health.",
    privacySections: [
      {
        title: "1. Data we collect",
        paragraphs: [
          "None. {app} has no user accounts, no ads, no analytics and no third-party SDKs. The developer does not receive your steps, walks, routes, heart-rate data or anything else from the app.",
        ],
      },
      {
        title: "2. What the app reads from Apple Health",
        paragraphs: [
          "With your permission, {app} reads the following from Apple Health: steps, distance, energy burned, flights climbed, exercise time, heart rate, walking metrics (walking speed, step length, walking asymmetry and double support time), workouts and workout routes.",
          "This data is only used to show your day, your history, your heart-rate zones and your trends inside the app. It is processed on your iPhone, is never sent to the developer or anyone else, and is never used for advertising.",
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
          "{app} uses your location only while a walk is being recorded, to draw the route on the map and measure the walk. The route is saved with the workout in Apple Health. Your location is not used at any other time and is never sent to the developer.",
        ],
      },
      {
        title: "5. Motion data",
        paragraphs: [
          "{app} uses your iPhone's motion data to show your steps live. It is processed on your device.",
        ],
      },
      {
        title: "6. Where your data is stored",
        paragraphs: [
          "Your data stays on your device and in Apple Health. {app} has no servers and no cloud sync of its own. Data in Apple Health is managed by you in the Health app and is covered by Apple's privacy policy.",
        ],
      },
      {
        title: "7. Your choices",
        paragraphs: [
          "You decide which Apple Health data {app} may read or write, and whether it may use location and motion data. You can change these permissions at any time in the Settings and Health apps. Deleting the app removes the data it stores on your iPhone; data in Apple Health stays until you delete it there.",
        ],
      },
      {
        title: "8. Children",
        paragraphs: ["{app} is not directed at children under 13 and does not knowingly collect any data from them, or from anyone else."],
      },
      {
        title: "9. Changes and contact",
        paragraphs: ["If this policy changes, we will update this page and the date above. Questions? Write to {email}."],
      },
    ],
    termsTitle: "Terms of Use",
    termsIntro:
      "{app} is licensed to you under Apple's Standard Licensed Application End User License Agreement (EULA), together with the following terms.",
    termsSections: [
      {
        title: "1. License",
        paragraphs: ["Your use of {app} is governed by Apple's Standard EULA: https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"],
      },
      {
        title: "2. Not a medical device",
        paragraphs: [
          "{app} is a fitness and wellness app. It is not a medical device and does not provide medical advice, diagnosis or treatment. Steps, distance, calories, heart rate, heart-rate zones and walking metrics come from your iPhone's sensors and from Apple Health, are estimates and may be inaccurate.",
          "Do not make health decisions based on the app alone. Talk to a doctor before starting a new exercise routine or if you have any concerns about your health.",
        ],
      },
      {
        title: "3. Walk safely",
        paragraphs: ["Pay attention to your surroundings while walking. Do not look at your phone when it is unsafe to do so, and follow local traffic rules."],
      },
      {
        title: "4. Your data",
        paragraphs: [
          "Your data belongs to you. It stays on your device and in Apple Health, and you manage it there. How {app} handles it is described in the Privacy Policy.",
        ],
      },
      {
        title: "5. Contact",
        paragraphs: ["Questions about these terms: {email}."],
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
        title: "The route is not drawn",
        text: "Recording a route needs location access. Allow it for {app} in Settings › Privacy & Security › Location Services. Location is only used while a walk is being recorded.",
      },
      {
        title: "Heart-rate zones are empty",
        text: "Zones are calculated from heart-rate data in Apple Health. They appear when a device such as an Apple Watch has recorded your heart rate.",
      },
    ],
  },
};
