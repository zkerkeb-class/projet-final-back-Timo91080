const mockArticles = [
  // Articles en français (originaux)
  {
    title: "Ligue 1 : L'OM accroche la deuxième place",
    link: "https://www.lanouvellerepublique.fr/a-la-une/ligue-1-l-om-deroule-face-a-brest-et-s-accroche-a-la-deuxieme-place-1745788177",
    pubDate: "2025-06-01",
    source: "La Nouvelle République",
    description: "L'Olympique de Marseille termine la saison à la deuxième place du championnat après une lutte acharnée avec ses concurrents directs. Grâce à une série de victoires décisives et une défense solide, l'OM a su s'imposer comme l'une des équipes les plus régulières de la saison. Les supporters marseillais ont célébré cette performance, qui permet au club de retrouver la Ligue des Champions la saison prochaine.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtpVBdBvz-Gq8bcZdauRMGTRVNitLwm4A0g&s",
    category: "Ligue 1",
    lang: "fr"
  },
  {
    title: "Mercato : Les transferts chauds de l'été",
    link: "https://www.ouest-france.fr/sport/football/ligue-des-champions/mercato-les-dossiers-chauds-qui-vont-animer-le-dernier-jour-de-la-fenetre-estivale-des-transferts-0f632cb8-6610-11ef-9eb6-0615c3e175fc",
    pubDate: "2025-06-03",
    source: "Ouest-France",
    description: "Le mercato estival 2025 s'annonce particulièrement animé avec de nombreux joueurs en fin de contrat et des clubs prêts à investir massivement. Parmi les dossiers brûlants : le possible transfert de plusieurs stars internationales, des retours inattendus en Ligue 1, et des négociations serrées entre agents et dirigeants. Les supporters suivent avec attention chaque rumeur et officialisation, espérant voir leur équipe favorite se renforcer pour la saison à venir.",
    image: "https://images2.minutemediacdn.com/image/upload/c_crop,w_1920,h_1080,x_0,y_0/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/90min_fr_international_web/01frb48588fpy8c5jzwv.png",
    category: "Mercato",
    lang: "fr"
  },
  {
    title: "Premier League : Manchester City sacré champion",
    link: "https://rmcsport.bfmtv.com/football/premier-league/premier-league-manchester-city-sacre-champion-d-angleterre-pour-la-quatrieme-fois-consecutive-un-record_AV-202405190348.html",
    pubDate: "2025-06-02",
    source: "RMC Sport",
    description: "Manchester City remporte la Premier League après une saison palpitante et pleine de rebondissements. Sous la houlette de Pep Guardiola, les Citizens ont su faire preuve de régularité et d'efficacité, notamment grâce à une attaque redoutable et une défense bien organisée. Ce nouveau titre confirme la domination de City sur le football anglais, avec un effectif impressionnant et un jeu collectif salué par tous les observateurs.",
    image: "https://letemps-17455.kxcdn.com/photos/9fba183a-07be-4f25-a127-98f671424899/small",
    category: "International",
    lang: "fr"
  },
  {
    title: "Ligue 1 : le PSG champion",
    link: "https://www.lemonde.fr/sport/article/2025/04/05/le-psg-remporte-de-nouveau-le-titre-champion-de-france-de-football-et-ecrase-un-peu-plus-la-ligue-1_6591762_3242.html",
    pubDate: "2025-06-04",
    source: "Le Monde",
    description: "Le PSG remporte un nouveau titre de Ligue 1 après une saison exceptionnelle. Grâce à une série impressionnante de victoires et une attaque redoutable menée par Mbappé, le club parisien a dominé le championnat. Les supporters ont célébré ce titre historique au Parc des Princes, marquant la suprématie du PSG sur la scène nationale.",
    image: "https://img.lemde.fr/2025/04/05/0/0/3705/2470/556/0/75/0/ca36179_ftp-import-images-1-svms9upgqrhq-5529759-01-06.jpg",
    category: "Ligue 1",
    lang: "fr"
  },
  {
    title: "Mercato : Mbappé vers le Real Madrid ?",
    link: "https://www.eurosport.fr/football/la-liga/2023-2024/mercato-le-transfert-de-kylian-mbappe-au-real-madrid-officialise-lundi_sto10174253/story.shtml",
    pubDate: "2025-05-30",
    source: "Eurosport",
    description: "Kylian Mbappé serait tout proche de rejoindre le Real Madrid selon plusieurs sources espagnoles. Après plusieurs saisons exceptionnelles au PSG, l'attaquant français est annoncé avec insistance du côté de la capitale espagnole.",
    image: "https://s.france24.com/media/display/b0bb4218-d93a-11ec-907e-005056bfb2b6/w:1280/p:16x9/000_32AP7TN.jpg",
    category: "Mercato",
    lang: "fr"
  },
  {
    title: "Euro 2024 : L'Allemagne impressionne en ouverture",
    link: "https://www.franceinfo.fr/euro/euro-2024-pays-hote-l-allemagne-ecrase-l-ecosse-en-match-d-ouverture-et-debute-parfaitement-sa-competition_6604614.html",
    pubDate: "2025-06-14",
    source: "France Info",
    description: "L'Allemagne a dominé le match d'ouverture de l'Euro 2024 avec une victoire éclatante contre l'Écosse. Les joueurs allemands ont montré une grande maîtrise technique et une cohésion d'équipe remarquable, marquant plusieurs buts spectaculaires.",
    image: "https://images.rtl.fr/~c/1200v800/rtl/www/1683138-toni-kroos-et-thomas-muller-avec-l-allemagne-a-munich-le-14-juin-2024.jpg",
    category: "International",
    lang: "fr"
  },

  // Articles en anglais (traductions exactes)
  {
    title: "Ligue 1: OM secures second place",
    link: "https://www.lanouvellerepublique.fr/a-la-une/ligue-1-l-om-deroule-face-a-brest-et-s-accroche-a-la-deuxieme-place-1745788177-en",
    pubDate: "2025-06-01",
    source: "La Nouvelle République",
    description: "Olympique de Marseille finishes the season in second place in the championship after a fierce battle with their direct competitors. Thanks to a series of decisive victories and a solid defense, OM has established itself as one of the most consistent teams of the season. Marseille supporters celebrated this performance, which allows the club to return to the Champions League next season.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtpVBdBvz-Gq8bcZdauRMGTRVNitLwm4A0g&s",
    category: "Ligue 1",
    lang: "en"
  },
  {
    title: "Transfer Market: Summer's hot transfers",
    link: "https://www.ouest-france.fr/sport/football/ligue-des-champions/mercato-les-dossiers-chauds-qui-vont-animer-le-dernier-jour-de-la-fenetre-estivale-des-transferts-0f632cb8-6610-11ef-9eb6-0615c3e175fc-en",
    pubDate: "2025-06-03",
    source: "Ouest-France",
    description: "The 2025 summer transfer window promises to be particularly lively with many players at the end of their contracts and clubs ready to invest massively. Among the burning issues: the possible transfer of several international stars, unexpected returns to Ligue 1, and tight negotiations between agents and directors. Supporters follow every rumor and officialization with attention, hoping to see their favorite team strengthen for the upcoming season.",
    image: "https://images2.minutemediacdn.com/image/upload/c_crop,w_1920,h_1080,x_0,y_0/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/90min_fr_international_web/01frb48588fpy8c5jzwv.png",
    category: "Transfer Market",
    lang: "en"
  },
  {
    title: "Premier League: Manchester City crowned champion",
    link: "https://rmcsport.bfmtv.com/football/premier-league/premier-league-manchester-city-sacre-champion-d-angleterre-pour-la-quatrieme-fois-consecutive-un-record_AV-202405190348.html-en",
    pubDate: "2025-06-02",
    source: "RMC Sport",
    description: "Manchester City wins the Premier League after a thrilling season full of twists and turns. Under Pep Guardiola's guidance, the Citizens have shown consistency and efficiency, notably thanks to a formidable attack and a well-organized defense. This new title confirms City's dominance over English football, with an impressive squad and collective play praised by all observers.",
    image: "https://letemps-17455.kxcdn.com/photos/9fba183a-07be-4f25-a127-98f671424899/small",
    category: "International",
    lang: "en"
  },
  {
    title: "Ligue 1: PSG champions",
    link: "https://www.lemonde.fr/sport/article/2025/04/05/le-psg-remporte-de-nouveau-le-titre-champion-de-france-de-football-et-ecrase-un-peu-plus-la-ligue-1_6591762_3242.html-en",
    pubDate: "2025-06-04",
    source: "Le Monde",
    description: "PSG wins a new Ligue 1 title after an exceptional season. Thanks to an impressive series of victories and a formidable attack led by Mbappé, the Parisian club dominated the championship. Supporters celebrated this historic title at the Parc des Princes, marking PSG's supremacy on the national stage.",
    image: "https://img.lemde.fr/2025/04/05/0/0/3705/2470/556/0/75/0/ca36179_ftp-import-images-1-svms9upgqrhq-5529759-01-06.jpg",
    category: "Ligue 1",
    lang: "en"
  },
  {
    title: "Transfer Market: Mbappé to Real Madrid?",
    link: "https://www.eurosport.fr/football/la-liga/2023-2024/mercato-le-transfert-de-kylian-mbappe-au-real-madrid-officialise-lundi_sto10174253/story.shtml-en",
    pubDate: "2025-05-30",
    source: "Eurosport",
    description: "Kylian Mbappé would be very close to joining Real Madrid according to several Spanish sources. After several exceptional seasons at PSG, the French striker is persistently announced on the side of the Spanish capital.",
    image: "https://s.france24.com/media/display/b0bb4218-d93a-11ec-907e-005056bfb2b6/w:1280/p:16x9/000_32AP7TN.jpg",
    category: "Transfer Market",
    lang: "en"
  },
  {
    title: "Euro 2024: Germany impresses in opening",
    link: "https://www.franceinfo.fr/euro/euro-2024-pays-hote-l-allemagne-ecrase-l-ecosse-en-match-d-ouverture-et-debute-parfaitement-sa-competition_6604614.html-en",
    pubDate: "2025-06-14",
    source: "France Info",
    description: "Germany dominated the opening match of Euro 2024 with a stunning victory against Scotland. The German players showed great technical mastery and remarkable team cohesion, scoring several spectacular goals.",
    image: "https://images.rtl.fr/~c/1200v800/rtl/www/1683138-toni-kroos-et-thomas-muller-avec-l-allemagne-a-munich-le-14-juin-2024.jpg",
    category: "International",
    lang: "en"
  }
];

module.exports = mockArticles;