import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";
import i18n from "i18next";
import reportWebVitals from "./reportWebVitals";
import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Header
        French: "Français",
        // Hero
        HERO_INTRO_1:
          "We asked small-scale farmers in four countries for their perspectives on how to create equitable, sustainable, and productive food systems for all.",
        HERO_INTRO_2:
          "Click on the floating bubbles and icons to listen to their voices.",
        // About page
        ABOUT_P_1:
          "Over the course of three weeks in June 2021, and in partnership with IFAD, World Vision Canada, and the Food Security Policy Group, Farm Radio International gathered thousands of small-scale farmers’ and other rural peoples’ perspectives on how to create equitable, sustainable, and productive food systems.",
        ABOUT_P_2:
          "The goal: to bring farmers’ voices to the global conversation about food systems to speak for themselves.",
        ABOUT_P_3:
          "Radio is accessible, and reaches people everywhere. And with mobile phones, it has even more power.",
        ABOUT_P_4:
          "We worked with six stations in Burkina Faso, Ghana, Tanzania, and Uganda to create 18 original episodes of radio programming, complete with mobile phone based listener polling. On air, broadcasters invited local experts, farmers, and guests to speak their mind and share their knowledge. Off air, we engaged listeners to join in the discussion with their own thoughts.",
        ABOUT_P_5:
          "We asked listeners: Which issues impact farmers most? How do barriers and opportunities play out differently for female and male farmers? What is the future of food systems? And what needs to happen to make life better for farming families?",
        ABOUT_P_9:
          "“The summit will only be effective at setting out the pathway to 2030 if we successfully leverage the collective knowledge and experience of the broadest possible cross-section of the population.” – UN Special Envoy Dr. Agnes Kalibata",
        ABOUT_P_10:
          "Farm Radio International is a Canadian international non-governmental organization uniquely focused on improving the lives of rural Africans through the world’s most accessible communications tool, radio, in combination with ICTs.",
        ABOUT_P_11:
          "IFAD is an international financial institution and a United Nations specialized agency based in Rome – the United Nations food and agriculture hub. IFAD invests in rural people, empowering them to reduce poverty, increase food security, improve nutrition and strengthen resilience.",
        ABOUT_P_12:
          "World Vision Canada is a Christian relief, development and advocacy organization working to create lasting change in the lives of children, families and communities to overcome poverty and injustice.",
        ABOUT_P_13:
          "The Canadian Food Security Policy Group is a network of Canadian development and humanitarian organizations with expertise in global food systems, and food security in the Global South.",
        // Summary
        SUMMARY_P_1:
          "We asked small-scale farmers to tell us their thoughts and concerns about food systems",
        SUMMARY_P_2:
          "Nearly 3,500 people in Burkina Faso, Ghana, Tanzania, and Uganda called in to express their perspectives, concerns, and experiences in 2,600+ audio messages. Here’s what they had to say.",
        RESULTS_QUESTION_1: "If you think about the safety and quality of the food your family eats, are you most worried that:",
        RESULTS_QUESTION_2: "When food is scarce, what is the first thing your family does to cope?",
        RESULTS_QUESTION_3: "Which of the following five options would give you the most success as a farmer:",
        RESULTS_QUESTION_4: "What will farming look like in the future for today’s children?",
        RESULTS_QUESTION_5: "Where would you turn to for information to help you cope with future threats to your family and livelihood?",
        RESULTS_QUESTION_6: "Climate change can have a big effect on farming. Which of the following would help you as a farmer to best deal with changes in the weather?",
      },
    },
    fr: {
      translation: {
        // Header
        "About the project": "À propos du projet",
        Insights: "Observations",
        "Explore the results": "Explorer les résultats",
        English: "English",
        French: "Français",
        "Report coming soon": "Rapport à venir",
        // Hero
        "Rural voices": "Voix rurales",
        HERO_INTRO_1:
          "Nous avons demandé aux agriculteurs(trices) de petites exploitations dans quatre pays leurs points de vue sur la manière de créer des systèmes alimentaires équitables, durables et productifs pour tous.",
        HERO_INTRO_2:
          "Cliquez sur les bulles et les icônes flottantes pour écouter leurs voix.",
        // About page
        ABOUT_P_1:
          "Pendant trois semaines en juin 2021, et en partenariat avec le FIDA, World Vision Canada et le Food Security Policy Group, Radios Rurales Internationales a rassemblé des milliers de points de vue d’agriculteurs(trices) de petites exploitations et d'autres populations rurales sur la façon de créer des systèmes alimentaires équitables, durables et productifs.",
        ABOUT_P_2:
          "L'objectif : faire entendre la voix des agriculteurs(trices) dans la discussion mondiale sur les systèmes alimentaires pour qu'ils parlent en leur nom propre.",
        ABOUT_P_3:
          "La radio est accessible et disponible partout et pour tous. Et avec les téléphones portables, elle a encore plus de force.",
        ABOUT_P_4:
          "Nous avons travaillé avec six stations au Burkina Faso, au Ghana, en Tanzanie et en Ouganda pour créer 18 épisodes uniques de programmes radiophoniques, complétés par des sondages d'auditeurs en utilisant les téléphones portables. À l'antenne, les radiodiffuseurs ont invité des experts locaux, des agriculteurs(trices) et des invités à s'exprimer et à partager leurs connaissances. Hors antenne, nous avons invité les auditeurs à se joindre à la discussion avec leurs propres réflexions.",
        ABOUT_P_5:
          "Nous avons demandé aux auditeurs : Quels enjeux ont le plus d'impact sur les agriculteurs(trices) ? Comment les barrières et les opportunités se présentent-elles différemment pour les agricultrices et les agriculteurs ? Quel est l'avenir des systèmes alimentaires ? Et que faut-il faire pour améliorer la vie des familles agricoles ?",
        ABOUT_P_6:
          "Pour lire les résultats complets, <1>téléchargez le rapport ici</1>. ",
        ABOUT_P_7:
          "Ou <1>cliquez ici</1> pour explorer les résultats et écouter les voix des agriculteurs(trices).",
        "The 2021 UN Food Systems Summit":
          "LE SOMMET DES NATIONS UNIES SUR LES SYSTÈMES ALIMENTAIRES DE 2021",
        ABOUT_P_8:
          "Ce projet s'inscrit dans le cadre du <2>Sommet des Nations Unies sur les systèmes alimentaires de 2021</2>. Convoqué en 2021 par le Secrétaire général des Nations Unies António Guterres, le Sommet des Nations Unies sur les systèmes alimentaires rassemble des acteurs mondiaux de tous les secteurs pour engager un dialogue sur tous les aspects des systèmes alimentaires. L'objectif du Sommet est de créer une transformation tangible et positive des systèmes alimentaires à travers les Objectifs de Développement Durable (ODD).",
        ABOUT_P_9:
          "« Le sommet ne sera efficace pour tracer la voie vers 2030 que si nous exploitons avec succès les connaissances et l'expérience collectives de l’échantillon le plus large possible de la population. » – Envoyée spéciale de l'ONU Dr. Agnes Kalibata",
        Acknowledgements: "REMERCIEMENTS",
        "Farm Radio International": "Radios Rurales Internationales",
        "International Fund for Agriculture Development":
          "Fonds international de développement agricole (FIDA)",
        "World Vision Canada": "Vision Mondiale Canada",
        "Canadian Food Security Policy Group":
          "Groupe canadien de la politique sur la sécurité alimentaire",
        ABOUT_P_10:
          "Radios Rurales Internationales est une organisation internationale non gouvernementale canadienne dont l'unique objectif est d'améliorer la vie des Africains en milieu rural grâce à l'outil de communication le plus accessible au monde, la radio, en combinaison avec les technologies de l'information et des communications (TIC).",
        ABOUT_P_11:
          "Le Fonds international de développement agricole (FIDA) est une institution financière internationale et un organisme spécialisé des Nations Unies dont le siège est à Rome, le centre névralgique des Nations Unies pour l'alimentation et l'agriculture. Le FIDA investit dans les populations rurales et leur donne les moyens de réduire la pauvreté, d’accroître leur sécurité alimentaire, d’améliorer la nutrition et à renforcer leur résilience.",
        ABOUT_P_12:
          "Vision Mondiale Canada est une organisation de solidarité internationale qui lutte contre toutes les formes de pauvreté et d’injustice à travers ses programmes d’aide humanitaire d’urgence, de développement et ses actions de plaidoyer.",
        ABOUT_P_13:
          "Le Groupe canadien sur la politique de sécurité alimentaire est un réseau d’organisations canadiennes de développement et humanitaires possédant une expertise dans les systèmes alimentaires mondiaux et la sécurité alimentaire dans les pays du Sud.",
        "UN Sustainable Development Goals":
          "Objectifs de Développement Durable ONU",
        // Summary
        "Listening to farmers": "À L’ÉCOUTE DES AGRICULTEURS(TRICES)",
        SUMMARY_P_1:
          "Nous avons demandé aux agriculteurs(trices) de petites exploitations de nous faire part de leurs réflexions et préoccupations concernant les systèmes alimentaires",
        SUMMARY_P_2:
          "Près de 3 500 personnes au Burkina Faso, au Ghana, en Tanzanie et en Ouganda ont appelé pour exprimer leurs points de vue, leurs préoccupations et leurs expériences sur plus de 2 600 messages audio. Voici ce qu'elles avaient à dire.",
        SUMMARY_P_3:
          "<strong>Les appelants avaient beaucoup</strong> à dire sur l'avenir de l'agriculture pour leurs enfants. Seule une personne sur neuf estime que les jeunes d'aujourd'hui ne devraient pas devenir agriculteurs(trices). Toutefois, plus d'un tiers d'entre eux estiment que des changements seraient nécessaires pour permettre à la prochaine génération d'agriculteurs(trices) de réussir.",
        SUMMARY_P_4:
          "<strong>Près de 75 % des personnes interrogées</strong> ont déclaré avoir des inquiétudes au sujet de la salubrité et de la qualité des aliments disponibles pour leurs familles.",
        SUMMARY_P_5:
          "<strong>Plus de 90 % des appelants</strong> ont estimé qu'ils pouvaient faire quelque chose dans leur communauté pour faire face au changement climatique.",
        "Countries": "Pays",
        "Radio stations": "stations de radio",
        SUMMARY_P_6: "<strong>épisodes</strong> par station",
        "Total callers": "Appelants au total",
        SUMMARY_P_7: "<strong>Réponses totales</strong> aux questions",
        SUMMARY_P_8: "<strong>Messages audios</strong> enregistrés",
        "Learn more": "En savoir plus sur",
        // Results
        "What farmers think about food systems": "Ce que pensent les agriculteurs(trices) des systèmes alimentaires",
        "Click on the dropdown menu below to explore the responses of farmers in each country.": "Cliquez sur le menu déroulant ci-dessous pour explorer les réponses des agriculteurs(trices) dans chaque pays.",
        "Select a country": "Choisissez un pays",
        "Report": "Rapport",
        RESULTS_P_1: "Vous voulez une analyse approfondie des résultats? <strong>Restez à l'écoute pour lire le rapport complet.</strong>",
        "Download (coming soon)": "Télécharger (prochainement)",
        RESULTS_QUESTION_1: "TODO",
        RESULTS_QUESTION_2: "TODO",
        RESULTS_QUESTION_3: "TODO",
        RESULTS_QUESTION_4: "TODO",
        RESULTS_QUESTION_5: "TODO",
        RESULTS_QUESTION_6: "TODO",
        "Burkina Faso": "Burkina Faso",
        "Ghana": "Ghana",
        "Tanzania": "Tanzanie",
        "Uganda": "Ouganda",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  debug: true,
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
