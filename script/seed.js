"use strict";

const {
  db,
  models: { User, Site, Bucket, Tour },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  //------------Creating users------------------------
  const users = await Promise.all([
    User.create({ username: "cody", password: "123" }),
    User.create({ username: "tasnim", password: "123" }),
  ]);

  //------------Creating sites------------------------
  const sites = await Promise.all([
    Site.create({
      destination: "75",
      imgUrl:
        "https://adventures.com/media/4793/canadian-rockies-mountains-nature-forest-lake-peaks-landscape-1.jpg?anchor=center&mode=crop&width=970&height=645&rnd=132622769740000000&quality=80&format=jpg",
      latitude: 51.42472222,

      country: `Canada`,
      continent: `Europe and North America`,
      description: `The contiguous national parks of Banff, Jasper, Kootenay and Yoho, as well as the Mount Robson, Mount Assiniboine and Hamber provincial parks, studded with mountain peaks, glaciers, lakes, waterfalls, canyons and limestone caves, form a striking mountain landscape. The Burgess Shale fossil site, well known for its fossil remains of soft-bodied marine animals, is also found there.`,

      name: `Canadian Rocky Mountain Parks`,
      category: `Natural`,
      longitude: -116.4797222,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://www.newfoundlandlabrador.com/-/media/marquees/top-destinations/red-bay/red-bay/red-bay-main-header.jpg?mh=960&mw=1280&hash=A907CAA3A04E82E39F1DFC2D6D44BBE61DC5E99A",
      latitude: 51.726925,

      country: `Canada`,
      continent: `Europe and North America`,
      description: `Red Bay, established by Basque mariners in the 16th century at the north-eastern tip of Canada on the shore of the Strait of Belle Isle is an archaeological site that provides the earliest, most complete and best preserved testimony of the European whaling tradition. Gran Baya, as it was called by those who founded the station in 1530s, was used as a base for coastal hunting, butchering, rendering of whale fat by heading to produce oil and storage. It became a major source of whale oil which was shipped to Europe where it was used for lighting. The site, which was used in the summer months, includes remains of rendering ovens, cooperages, wharves, temporary living quarters and a cemetery, together with underwater remains of vessels and whale bone deposits. The station was used for some 70 years, before the local whale population was depleted.`,

      name: `Red Bay Basque Whaling Station`,
      category: `Cultural`,
      longitude: -56.4295222222,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://www.palaeocast.com/wp-content/uploads/2018/09/LRN7759-7805-Joggins-Lower-Cove-WEB-Size-620x350.jpg",
      latitude: 45.7097222222,

      country: `Canada`,
      continent: `Europe and North America`,
      description: `The Joggins Fossil Cliffs, a 689 ha palaeontological site along the coast of Nova Scotia (eastern Canada), have been described as the “coal age Galápagos” due to their wealth of fossils from the Carboniferous period (354 to 290 million years ago). The rocks of this site are considered to be iconic for this period of the history of Earth and are the world's thickest and most comprehensive record of the Pennsylvanian strata (dating back 318 to 303 million years) with the most complete known fossil record of terrestrial life from that time. These include the remains and tracks of very early animals and the rainforest in which they lived, left in situ, intact and undisturbed. With its 14.7 km of sea cliffs, low bluffs, rock platforms and beach, the site groups remains of three ecosystems: estuarine bay, floodplain rainforest and fire prone forested alluvial plain with freshwater pools. It offers the richest assemblage known of the fossil life in these three ecosystems with 96 genera and 148 species of fossils and 20 footprint groups. The site is listed as containing outstanding examples representing major stages in the history of Earth.`,

      name: `Joggins Fossil Cliffs`,
      category: `Natural`,
      longitude: -64.4358333333,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://acadie.cheminsdelafrancophonie.org/wp-content/uploads/grand-pre-1.jpg",
      latitude: 45.1183333333,

      country: `Canada`,
      continent: `Europe and North America`,

      description: `Situated in the southern Minas Basin of Nova Scotia, the Grand Pré marshland and archaeological sites constitute a cultural landscape
        bearing testimony to the development of agricultural farmland using dykes and the aboiteau wooden sluice system, started by the Acadians in the 17th century
        and further developed and maintained by the Planters and present-day inhabitants. Over 1,300 ha, the cultural landscape encompasses a large expanse of polder
        farmland and archaeological elements of the towns of Grand Pré and Hortonville, which were built by the Acadians and their successors. The landscape is an exceptional
        example of the adaptation of the first European settlers to the conditions of the North American Atlantic coast. The site marked by one of the most extreme tidal ranges
        in the world, averaging 11.6 m is also inscribed as a memorial to Acadian way of life and deportation, which started in 1755, known as the Grand Dérangement. The Landscape
        of Grand Pré is an outstanding example and enduring model of the human capacity to overcome extraordinary natural challenges and cultural ordeals.`,
      name: `Landscape of Grand Pré`,
      category: `Cultural`,
      longitude: -64.3072222222,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://www.mustdocanada.com/wp-content/uploads/2018/07/HSIBJ4-1024x682.jpg",
      latitude: 49.74944444,

      country: `Canada`,
      continent: `Europe and North America`,
      description: `In south-west Alberta, the remains of marked trails and an aboriginal camp, and a tumulus where vast quantities of buffalo (American Bison) skeletons can still be found, are evidence of a custom practised by aboriginal peoples of the North American plains for nearly 6,000 years. Using their excellent knowledge of the topography and of buffalo behaviour, they killed their prey by chasing them over a precipice; the carcasses were later carved up in the camp below.`,

      name: `Head-Smashed-In Buffalo Jump`,
      category: `Cultural`,
      longitude: -113.6238889,
    }),
    Site.create({
      destination: "75",
      imgUrl: "https://catalogue.novascotia.com/ManagedMedia/28259.jpg",
      latitude: 44.37611111,

      country: `Canada`,
      continent: `Europe and North America`,
      description: `Lunenburg is the best surviving example of a planned British colonial settlement in North America. Established in 1753, it has retained its original layout and overall appearance, based on a rectangular grid pattern drawn up in the home country. The inhabitants have managed to safeguard the city's identity throughout the centuries by preserving the wooden architecture of the houses, some of which date from the 18th century.`,

      name: `Old Town Lunenburg`,
      category: `Cultural`,
      longitude: -64.30916667,
    }),
    Site.create({
      destination: "75",
      imgUrl: "https://img.peapix.com/15092557937729546811_1080.jpg",
      latitude: 50.76777778,

      country: `Canada`,
      continent: `Europe and North America`,
      description: `In addition to its particularly beautiful scenery, Dinosaur Provincial Park, located at the heart of the province of Alberta's badlands, contains some of the most important fossil discoveries ever made from the 'Age of Reptiles', in particular about 35 species of dinosaur, dating back some 75 million years.`,

      name: `Dinosaur Provincial Park`,
      category: `Natural`,
      longitude: -111.4922222,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://cpawsnab.org/wp-content/uploads/%C2%A9Garth-Lenz-8300.jpg",
      latitude: 59.35833333,

      country: `Canada`,
      continent: `Europe and North America`,
      description: `Situated on the plains in the north-central region of Canada, the park (which covers 44,807 km2) is home to North America's largest population of wild bison. It is also the natural nesting place of the whooping crane. Another of the park's attractions is the world's largest inland delta, located at the mouth of the Peace and Athabasca rivers.`,

      name: `Wood Buffalo National Park`,
      category: `Natural`,
      longitude: -112.2933333,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ch%C3%A2teau_Frontenac%2C_Quebec_city%2C_Canada.jpg/1200px-Ch%C3%A2teau_Frontenac%2C_Quebec_city%2C_Canada.jpg",
      latitude: 46.80944444,

      country: `Canada`,
      continent: `Europe and North America`,
      description: `Québec was founded by the French explorer Champlain in the early 17th century. It is the only North American city to have preserved its ramparts, together with the numerous bastions, gates and defensive works which still surround Old Québec. The Upper Town, built on the cliff, has remained the religious and administrative centre, with its churches, convents and other monuments like the Dauphine Redoubt, the Citadel and Château Frontenac. Together with the Lower Town and its ancient districts, it forms an urban ensemble which is one of the best examples of a fortified colonial city.`,

      name: `Historic District of Old Québec`,
      category: `Cultural`,
      longitude: -71.21055556,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://travelingbc.com/wp-content/uploads/SGang-Gwaay-mortuary-poles-by-Dale-Simonson.jpg",
      latitude: 52.095,

      country: `Canada`,
      continent: `Europe and North America`,
      description: `The village of Ninstints (Nans Dins) is located on a small island off the west coast of the Queen Charlotte Islands (Haida Gwaii). Remains of houses, together with carved mortuary and memorial poles, illustrate the Haida people's art and way of life. The site commemorates the living culture of the Haida people and their relationship to the land and sea, and offers a visual key to their oral traditions.`,

      name: `SGang Gwaay`,
      category: `Cultural`,
      longitude: -131.2202778,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://i.natgeofe.com/n/c9a32790-5972-4b52-9398-659d3ae4c4c5/71328.jpg",
      latitude: 51.46666667,

      country: `Canada`,
      continent: `Europe and North America`,
      description: `At the tip of the Great Northern Peninsula of the island of Newfoundland, the remains of an 11th-century Viking settlement are evidence of the first European presence in North America. The excavated remains of wood-framed peat-turf buildings are similar to those found in Norse Greenland and Iceland.`,

      name: `LAnse aux Meadows National Historic Site`,
      category: `Cultural`,
      longitude: -55.61666667,
    }),
    Site.create({
      destination: "75",
      imgUrl: "https://i.ytimg.com/vi/LxFSkBK8Vf4/maxresdefault.jpg",
      latitude: 46.635,

      country: `Canada`,
      continent: `Europe and North America`,
      description: `This fossil site is located at the south-eastern tip of the island of Newfoundland, in eastern Canada. It consists of a narrow, 17 km-long strip of rugged coastal cliffs. Of deep marine origin, these cliffs date to the Edicarean Period (580-560 million years ago), representing the oldest known assemblages of large fossils anywhere. These fossils illustrate a watershed in the history of life on earth: the appearance of large, biologically complex organisms, after almost three billion years of micro-dominated evolution.`,

      name: `Mistaken Point`,
      category: `Natural`,
      longitude: -53.2111111111,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://media.istockphoto.com/id/1212275972/photo/parliament-hill-in-ottawa-ontario-canada.jpg?s=170667a&w=0&k=20&c=fAEP8PkqK2jYYeOqfVkfoi3gw8_Wrm8WlTcq11OznV4=",
      latitude: 44.9943861111,

      country: `Canada`,
      continent: `Europe and North America`,
      description: `The Rideau Canal, a monumental early 19th-century construction covering 202 km of the Rideau and Cataraqui rivers from Ottawa south to Kingston Harbour on Lake Ontario, was built primarily for strategic military purposes at a time when Great Britain and the United States vied for control of the region. The site, one of the first canals to be designed specifically for steam-powered vessels, also features an ensemble of fortifications. It is the best-preserved example of a slackwater canal in North America, demonstrating the use of this European technology on a large scale. It is the only canal dating from the great North American canal-building era of the early 19th century to remain operational along its original line with most of its structures intact.`,

      name: `Rideau Canal`,
      category: `Cultural`,
      longitude: -75.765125,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://www.bonjourquebec.com/en/listing/images/crop-1200x1200/502145c7-4e7f-42a4-aadc-05b05451341d/parc-national-de-miguasha-parc-national.jpg",
      latitude: 48.105,
      country: `Canada`,
      continent: `Europe and North America`,

      description: `The palaeontological site of Miguasha National Park, in south-eastern Quebec on the southern coast of the Gaspé peninsula, is considered to be the world's most outstanding illustration of the Devonian Period known as the 'Age of Fishes'. Dating from 370 million years ago, the Upper Devonian Escuminac Formation represented here contains five of the six fossil fish groups associated with this period. Its significance stems from the discovery there of the highest number and best-preserved fossil specimens of the lobe-finned fishes that gave rise to the first four-legged, air-breathing terrestrial vertebrates, the tetrapods. In its representation of vertebrate life, Miguasha is the most outstanding fossil site in the world for illustrating the Devonian as the “Age of Fishes”. The area is of paramount importance in having the greatest number and best preserved fossil specimens found anywhere in the world of the lobe-finned fishes that gave rise to the first four-legged, air-breathing terrestrial vertebrates - the tetrapodes.`,

      name: `Miguasha National Park`,
      category: `Natural`,
      longitude: -66.35305556,
    }),
    Site.create({
      destination: "75",
      imgUrl: "https://i.stack.imgur.com/aWa5i.jpg",
      latitude: 49.6125,

      country: `Canada`,
      continent: `Europe and North America`,
      description: `Situated on the west coast of the island of Newfoundland, the park provides a rare example of the process of continental drift, where deep ocean crust and the rocks of the earth's mantle lie exposed. More recent glacial action has resulted in some spectacular scenery, with coastal lowland, alpine plateau, fjords, glacial valleys, sheer cliffs, waterfalls and many pristine lakes.`,

      name: `Gros Morne National Park`,
      category: `Natural`,
      longitude: -57.53138889,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://i.natgeofe.com/n/9c30ca60-d20c-4a15-9464-35cd2a327bc9/36945_square.jpg",
      latitude: 61.54722222,

      country: `Canada`,
      continent: `Europe and North America`,
      description: `Located along the South Nahanni River, one of the most spectacular wild rivers in North America, this park contains deep canyons and huge waterfalls, as well as a unique limestone cave system. The park is also home to animals of the boreal forest, such as wolves, grizzly bears and caribou. Dall's sheep and mountain goats are found in the park's alpine environment.`,

      name: `Nahanni National Park`,
      category: `Natural`,
      longitude: -125.5894444,
    }),
    Site.create({
      destination: "5420",
      imgUrl:
        "https://uploads.alaska.org/advice/g/glaciers/_1200x630_crop_center-center_82_none/Glaciers-tidewater-glacier-jpg-DSC_9100.jpg?mtime=20201204094651&focal=none&tmtime=20210610192533",
      latitude: 61.19758333,
      country: `Canada,United States of America`,
      continent: `Europe and North America`,
      description: `These parks comprise an impressive complex of glaciers and high peaks on both sides of the border between Canada (Yukon Territory and British Columbia) and the United States (Alaska). The spectacular natural landscapes are home to many grizzly bears, caribou and Dall's sheep. The site contains the largest non-polar icefield in the world.`,

      name: `Glacier Bay (Tatshenshini-Alsek)`,
      category: `Natural`,
      longitude: -140.9919722,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/c5/69/e7/waterton-lake-prince.jpg?w=1200&h=-1&s=1",
      latitude: 48.99605556,

      country: `Canada,United States of America`,
      continent: `Europe and North America`,
      description: `In 1932 Waterton Lakes National Park (Alberta, Canada) was combined with the Glacier National Park (Montana, United States) to form the world's first International Peace Park. Situated on the border between the two countries and offering outstanding scenery, the park is exceptionally rich in plant and mammal species as well as prairie, forest, and alpine and glacial features.`,

      name: `Waterton Glacier International Peace Park`,
      category: `Natural`,
      longitude: -113.9041667,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://www.orangesmile.com/extreme/img/w600/popocatepetl-monasteries_1.jpg",
      latitude: 18.93472,

      country: `Mexico`,
      continent: `Latin America and the Caribbean`,
      description: `These 14 monasteries stand on the slopes of Popocatepetl, to the south-east of Mexico City. They are in an excellent state of conservation and are good examples of the architectural style adopted by the first missionaries, Franciscans, Dominicans and Augustinians, who converted the indigenous populations to Christianity in the early 16th century. They also represent an example of a new architectural concept in which open spaces are of renewed importance. The influence of this style is felt throughout the Mexican territory and even beyond its borders.`,

      name: `Earliest 16th-Century Monasteries on the Slopes of Popocatepetl`,
      category: `Cultural`,
      longitude: -98.89778,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://elsemanario.com/wp-content/uploads/2020/10/baja-jpg-Reserva-el-Pinacate-769-Editpp-min.png",
      latitude: 32,
      country: `Mexico`,
      continent: `Latin America and the Caribbean`,
      description: `The 714,566 hectare site comprises two distinct parts: the dormant volcanic Pinacate Shield of black and red lava flows and desert pavements to the east, and, in the west, the Gran Altar Desert with its ever changing and varied sand dunes that can reach a height of 200 metres. This landscape of dramatic contrast notably features linear, star and dome dunes as well as several arid granite massifs, some as high as 650 metres. The dunes emerge like islands from the sea of sand and harbour distinct and highly diverse plant and wildlife communities, including endemic freshwater fish species and the endemic Sonoran Pronghorn, which is only to be found in northwestern Sonora and in southwestern Arizona (USA). Ten enormous, deep and almost perfectly circular craters, believed to have been formed by a combination of eruptions and collapses, also contribute to the dramatic beauty of the site whose exceptional combination of features are of great scientific interest. The site is also a UNESCO Biosphere Reserve.`,

      name: `El Pinacate and Gran Desierto de Altar Biosphere Reserve`,
      category: `Natural`,
      longitude: -113.916666667,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://mediaim.expedia.com/localexpert/879527/6ffed345-017a-42d8-8a5a-bd883f418eae.jpg",
      latitude: 18.60833333,
      country: `Mexico`,
      continent: `Latin America and the Caribbean`,

      description: `Tlacotalpan, a Spanish colonial river port on the Gulf coast of Mexico, was founded in the mid-16th century. It has preserved its original urban fabric to a remarkable degree, with wide streets, colonnaded houses in a profusion of styles and colours, and many mature trees in the public open spaces and private gardens.The urban layout and architecture of Tlacotalpan represent a fusion of Spanish and Caribbean traditions of exceptional importance and quality. Criterion iv: Tlacotalpan is a Spanish colonial river port on the Gulf coast of Mexico which has preserved its original urban fabric to an exceptional degree. Its outstanding character lies in its townscape of wide streets, modest houses in an exuberant variety of styles and colours, and many mature trees in public and private open spaces.`,

      name: `Historic Monuments Zone of Tlacotalpan`,
      category: `Cultural`,
      longitude: -95.65833333,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://centrourbano.com/revista/wp-content/uploads/foto-13-635x635.jpg",
      latitude: 17.48333,

      country: `Mexico`,
      continent: `Latin America and the Caribbean`,
      description: `A prime example of a Mayan sanctuary of the classical period, Palenque was at its height between AD 500 and 700, when its influence extended throughout the basin of the Usumacinta River. The elegance and craftsmanship of the buildings, as well as the lightness of the sculpted reliefs with their Mayan mythological themes, attest to the creative genius of this civilization.`,

      name: `Pre-Hispanic City and National Park of Palenque`,
      category: `Cultural`,
      longitude: -92.05,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://www.patrimoniomundial.com.mx/wp-content/uploads/2013/11/Vista_Zacatecas.jpg",
      latitude: 22.76667,

      country: `Mexico`,
      continent: `Latin America and the Caribbean`,
      description: `Founded in 1546 after the discovery of a rich silver lode, Zacatecas reached the height of its prosperity in the 16th and 17th centuries. Built on the steep slopes of a narrow valley, the town has breathtaking views and there are many old buildings, both religious and civil. The cathedral, built between 1730 and 1760, dominates the centre of the town. It is notable for its harmonious design and the Baroque profusion of its façades, where European and indigenous decorative elements are found side by side.`,

      name: `Historic Centre of Zacatecas`,
      category: `Cultural`,
      longitude: -102.55556,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6f/10/c3.jpg",
      latitude: 19.38333,

      country: `Mexico`,
      continent: `Latin America and the Caribbean`,
      description: `In the language of the Mayan peoples who once inhabited this region, Sian Ka'an means 'Origin of the Sky'. Located on the east coast of the Yucatán peninsula, this biosphere reserve contains tropical forests, mangroves and marshes, as well as a large marine section intersected by a barrier reef. It provides a habitat for a remarkably rich flora and a fauna comprising more than 300 species of birds, as well as a large number of the region's characteristic terrestrial vertebrates, which cohabit in the diverse environment formed by its complex hydrological system.`,

      name: `Sian Ka'an`,
      category: `Natural`,
      longitude: -87.79167,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://ilamdir.org/blobs/ilamdir/w1280h720/328/2019/51/foto_home_2.jpg",
      latitude: 22.6080555556,

      country: `Mexico`,
      continent: `Latin America and the Caribbean`,
      description: `Camino Real de Tierra Adentro was the Royal Inland Road, also known as the Silver Route. The inscribed property consists of 55 sites and five existing World Heritage sites lying along a 1400 km section of this 2600 km route, that extends north from Mexico City to Texas and New Mexico, United States of America. The route was actively used as a trade route for 300 years, from the mid-16th to the 19th centuries, mainly for transporting silver extracted from the mines of Zacatecas, Guanajuato and San Luis Potosí, and mercury imported from Europe. Although it is a route that was motivated and consolidated by the mining industry, it also fostered the creation of social, cultural and religious links in particular between Spanish and Amerindian cultures.`,

      name: `Camino Real de Tierra Adentro`,
      category: `Cultural`,
      longitude: -102.379166667,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://static01.nyt.com/images/2020/04/26/sunday-review/00Exposures-Butterflies-slide-A2ZO/00Exposures-Butterflies-slide-A2ZO-superJumbo.jpg",
      latitude: 19.6063888889,

      country: `Mexico`,
      continent: `Latin America and the Caribbean`,
      description: `The 56,259 ha biosphere lies within rugged forested mountains about 100 km northwest of Mexico City. Every autumn, millions, perhaps a billion, butterflies from wide areas of North America return to the site and cluster on small areas of the forest reserve, colouring its trees orange and literally bending their branches under their collective weight. In the spring, these butterflies begin an 8 month migration that takes them all the way to Eastern Canada and back, during which time four successive generations are born and die. How they find their way back to their overwintering site remains a mystery.`,

      name: `Monarch Butterfly Biosphere Reserve`,
      category: `Natural`,
      longitude: -100.241666667,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://azertag.az/files/2022/2/1200x630/16558247281081059178_1200x630.jpeg",
      latitude: 18.7880555556,

      country: `Mexico`,
      continent: `Latin America and the Caribbean`,
      description: `Located in the eastern Pacific Ocean, this archipelago is made up of four remote islands and their surrounding waters: San Benedicto, Socorro, Roca Partida and Clarión. This archipelago is part of a submerged mountain range, with the four islands representing the peaks of volcanoes emerging above sea level. The islands provide critical habitat for a range of wildlife and are of particular importance for seabirds. The surrounding waters have a remarkable abundance of large pelagic species, such as manta rays, whales, dolphins and sharks.`,

      name: `Archipiélago de Revillagigedo`,
      category: `Natural`,
      longitude: -110.975277778,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://windows10spotlight.com/wp-content/uploads/2021/07/e192061d6ab0715f0bd4d993487ab6c5.jpg",
      latitude: 20.36166667,
      country: `Mexico`,
      continent: `Latin America and the Caribbean`,

      description: `The Mayan town of Uxmal, in Yucatán, was founded c. A.D. 700 and had some 25,000 inhabitants. The layout of the buildings, which date from between 700 and 1000, reveals a knowledge of astronomy. The Pyramid of the Soothsayer, as the Spaniards called it, dominates the ceremonial centre, which has well-designed buildings decorated with a profusion of symbolic motifs and sculptures depicting Chaac, the god of rain. The ceremonial sites of Uxmal, Kabah, Labna and Sayil are considered the high points of Mayan art and architecture. The Committee decided to inscribe the nominated property on the basis of cultural criteria (i), (ii) and (iii) considering that the site is of outstanding universal value. The ruins of the ceremonial structures at Uxmal represent the pinnacle of late Mayan art and architecture in their design, layout and ornamentation, and the complex of Uxmal and its three related towns of Kabáh, Labná and Sayil admirably demonstrate the social and economic structure of late Mayan society.`,

      name: `Pre-Hispanic Town of Uxmal`,
      category: `Cultural`,
      longitude: -89.77027778,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/40/67/ef/20190419-135334-largejpg.jpg?w=1200&h=-1&s=1",
      latitude: 30.37583,
      country: `Mexico`,
      continent: `Latin America and the Caribbean`,

      description: `Paquimé, Casas Grandes, which reached its apogee in the 14th and 15th centuries, played a key role in trade and cultural contacts between the Pueblo culture of the south-western United States and northern Mexico and the more advanced civilizations of Mesoamerica. The extensive remains, only part of which have been excavated, are clear evidence of the vitality of a culture which was perfectly adapted to its physical and economic environment, but which suddenly vanished at the time of the Spanish Conquest. Paquimé Casas Grandes bears eloquent and abundant testimony to an important element in the cultural evolution of North America, and in particular to prehispanic commercial and cultural links. Criterion iv: The extensive remains of the archaeological site of Paquimé Casas Grandes provide exceptional evidence of the development of adobe architecture in North America, and in particular of the blending of this with the more advanced techniques of Mesoamerica.`,

      name: `Archaeological Zone of Paquimé, Casas Grandes`,
      category: `Cultural`,
      longitude: -107.95556,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://www.history.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTU3ODc5MDg2MTYwNjE5MjMx/houses-in-guanajuato.jpg",
      latitude: 21.01694,

      country: `Mexico`,
      continent: `Latin America and the Caribbean`,
      description: `Founded by the Spanish in the early 16th century, Guanajuato became the world's leading silver-extraction centre in the 18th century. This past can be seen in its 'subterranean streets' and the 'Boca del Inferno', a mineshaft that plunges a breathtaking 600 m. The town's fine Baroque and neoclassical buildings, resulting from the prosperity of the mines, have influenced buildings throughout central Mexico. The churches of La Compañía and La Valenciana are considered to be among the most beautiful examples of Baroque architecture in Central and South America. Guanajuato was also witness to events which changed the history of the country.`,

      name: `Historic Town of Guanajuato and Adjacent Mines`,
      category: `Cultural`,
      longitude: -101.25556,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://mexicotravelchannel.com.mx/wp-content/uploads/2022/05/Calakmul-zona-arqueologica-mtch.jpg",
      latitude: 18.0530277778,

      country: `Mexico`,
      continent: `Latin America and the Caribbean`,
      description: `The site is located in the central/southern portion of the Yucatán Peninsula, in southern Mexico and includes the remains of the important Maya city Calakmul, set deep in the tropical forest of the Tierras Bajas. The city played a key role in the history of this region for more than twelve centuries and is characterized by well-preserved structures providing a vivid picture of life in an ancient Maya capital. The property also falls within the Mesoamerica biodiversity hotspot, the third largest in the world, encompassing all subtropical and tropical ecosystems from central Mexico to the Panama Canal.`,

      name: `Ancient Maya City and Protected Tropical Forests of Calakmul, Campeche`,
      category: `Mixed`,
      longitude: -89.7372833333,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://whc.unesco.org/uploads/thumbs/site_0412_0001-750-750-20091001123325.jpg",
      latitude: 19.41833,

      country: `Mexico`,
      continent: `Latin America and the Caribbean`,
      description: `Built in the 16th century by the Spanish on the ruins of Tenochtitlan, the old Aztec capital, Mexico City is now one of the world's largest and most densely populated cities. It has five Aztec temples, the ruins of which have been identified, a cathedral (the largest on the continent) and some fine 19th- and 20th-century public buildings such as the Palacio de las Bellas Artes. Xochimilco lies 28 km south of Mexico City. With its network of canals and artificial islands, it testifies to the efforts of the Aztec people to build a habitat in the midst of an unfavourable environment. Its characteristic urban and rural structures, built since the 16th century and during the colonial period; have been preserved in an exceptional manner.`,

      name: `Historic Centre of Mexico City and Xochimilco`,
      category: `Cultural`,
      longitude: -99.13278,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://travelmexicosolo.com/wp-content/uploads/2020/10/MeridaToCampeche-DayTrip.jpg",
      latitude: 19.84639,
      country: `Mexico`,
      continent: `Latin America and the Caribbean`,

      description: `Campeche is a typical example of a harbour town from the Spanish colonial period in the New World. The historic centre has kept its outer walls and system of fortifications, designed to defend this Caribbean port against attacks from the sea. The harbour town of Campeche is an urbanization model of a Baroque colonial town, with its checkerboard street plan; the defensive walls surrounding its historic centre reflect the influence of the military architecture in the Caribbean. Criterion (iv): The fortifications system of Campeche, an eminent example of the military architecture of the 17th and 18th centuries, is part of an overall defensive system set up by the Spanish to protect the ports on the Caribbean Sea from pirate attacks.`,
      name: `Historic Fortified Town of Campeche`,
      category: `Cultural`,
      longitude: -90.53722,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://i0.wp.com/www.megankopp.com/wp-content/uploads/2015/01/IMG_3442.jpg",
      latitude: 27.65556,

      country: `Mexico`,
      continent: `Latin America and the Caribbean`,
      description: `From c. 100 B.C. to A.D. 1300, the Sierra de San Francisco (in the El Vizcaino reserve, in Baja California) was home to a people who have now disappeared but who left one of the most outstanding collections of rock paintings in the world. They are remarkably well-preserved because of the dry climate and the inaccessibility of the site. Showing human figures and many animal species and illustrating the relationship between humans and their environment, the paintings reveal a highly sophisticated culture. Their composition and size, as well as the precision of the outlines and the variety of colours, but especially the number of sites, make this an impressive testimony to a unique artistic tradition.`,

      name: `Rock Paintings of the Sierra de San Francisco`,
      category: `Cultural`,
      longitude: -112.91611,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://www.sightunseen.com/wordpress/wp-content/uploads/2018/03/EricPetschek-CDMX-CasaGilardi-16.jpg",
      latitude: 19.41833333,

      continent: `Latin America and the Caribbean`,

      description: `Built in 1948, the House and Studio of architect Luis Barragán in the suburbs of Mexico City represents an outstanding example of the architect's creative work in the post-Second World War period. The concrete building, totalling 1,161 m2, consists of a ground floor and two upper storeys, as well as a small private garden. Barragán's work integrated modern and traditional artistic and vernacular currents and elements into a new synthesis, which has been greatly influential, especially in the contemporary design of gardens, plazas and landscapes.The work of Luis Barragán exhibits the integration of modern and traditional influences, which in turn have had an important impact especially on the design of garden and urban landscape design.`,
      name: `Luis Barragán House and Studio`,
      category: `Cultural`,
      longitude: -99.19833333,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://media.istockphoto.com/id/1327692734/photo/jalpan-sierra-gorda-queretaro.jpg?s=612x612&w=0&k=20&c=nsDYH78g82tKkvh9ruumbu5p4oZ1dwiEAc4Gn5nqHcg=",
      latitude: 21.20438889,
      country: `Mexico`,
      continent: `Latin America and the Caribbean`,

      description: `The five Franciscan missions of Sierra Gorda were built during the last phase of the conversion to Christianity of the interior of Mexico in the mid-18th century and became an important reference for the continuation of the evangelization of California, Arizona and Texas. The richly decorated church façades are of special interest as they represent an example of the joint creative efforts of the missionaries and the Indios. The rural settlements that grew around the missions have retained their vernacular character.  The Sierra Gorda Missions exhibit an important interchange of values in the process of evangelisation of central and northern Mexico, and the western United States. Criterion iii: The five Sierra Gorda missions bear witness to the cultural encounter of the European missions with the nomadic populations of central Mexico, remaining a significant testimony to this second phase of evangelisation in North America.`,

      name: `Franciscan Missions in the Sierra Gorda of Querétaro`,
      category: `Cultural`,
      longitude: -99.46411111,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "http://fundacionunam.org.mx/wp-content/uploads/2013/02/biblioteca_central_UNAM.jpg",
      latitude: 19.3322222222,

      country: `Mexico`,
      continent: `Latin America and the Caribbean`,
      description: `The ensemble of buildings, sports facilities and open spaces of the Central University City Campus of the Universidad Nacional Autónoma de México (UNAM), was built from 1949 to 1952 by more than 60 architects, engineers and artists who were involved in the project. As a result, the campus constitutes a unique example of 20th-century modernism integrating urbanism, architecture, engineering, landscape design and fine arts with references to local traditions, especially to Mexico's pre-Hispanic past. The ensemble embodies social and cultural values of universal significance and is one of the most significant icons of modernity in Latin America.`,

      name: `Central University City Campus of the Universidad Nacional Autónoma de México (UNAM)`,
      category: `Cultural`,
      longitude: -99.1880555555,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/b5/0a.jpg",
      latitude: 20.47639,

      country: `Mexico`,
      continent: `Latin America and the Caribbean`,
      description: `Located in the state of Veracruz, El Tajin was at its height from the early 9th to the early 13th century. It became the most important centre in north-east Mesoamerica after the fall of the Teotihuacan Empire. Its cultural influence extended all along the Gulf and penetrated into the Maya region and the high plateaux of central Mexico. Its architecture, which is unique in Mesoamerica, is characterized by elaborate carved reliefs on the columns and frieze. The 'Pyramid of the Niches', a masterpiece of ancient Mexican and American architecture, reveals the astronomical and symbolic significance of the buildings. El Tajin has survived as an outstanding example of the grandeur and importance of the pre-Hispanic cultures of Mexico.`,

      name: `El Tajin, Pre-Hispanic City`,
      category: `Cultural`,
      longitude: -97.3775,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://i0.wp.com/mexicodailypost.com/wp-content/uploads/2021/03/capilla-sixtina-atotonilco.jpg?fit=1200%2C800&ssl=1",
      latitude: 20.9144444444,

      country: `Mexico`,
      continent: `Latin America and the Caribbean`,
      description: `The fortified town, first established in the 16th century to protect the Royal Route inland, reached its apogee in the 18th century when many of its outstanding religious and civic buildings were built in the style of the Mexican Baroque. Some of these buildings are masterpieces of the style that evolved in the transition from Baroque to neoclassical. Situated 14 km from the town, the Jesuit sanctuary, also dating from the 18th century, is one of the finest examples of Baroque art and architecture in the New Spain. It consists of a large church, and several smaller chapels, all decorated with oil paintings by Rodriguez Juárez and mural paintings by Miguel Antonio Martínez de Pocasangre. Because of its location, San Miguel de Allende acted as a melting pot where Spaniards, Creoles and Amerindians exchanged cultural influences while the Sanctuary of Jesús Nazareno de Atotonilco constitutes an exceptional example of the exchange between European and Latin American cultures. Its architecture and interior decoration testify to the influence of Saint Ignacio de Loyola's doctrine.`,

      name: `Protective town of San Miguel and the Sanctuary of Jesús Nazareno de Atotonilco`,
      category: `Cultural`,
      longitude: -100.746388889,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/df/b8/6e.jpg",
      latitude: 20.67388889,
      country: `Mexico`,
      continent: `Latin America and the Caribbean`,

      description: `The Hospicio Cabañas was built at the beginning of the 19th century to provide care and shelter for the disadvantaged, orphans, old people, the handicapped and chronic invalids. This remarkable complex, which incorporates several unusual features designed specifically to meet the needs of its occupants, was unique for its time. It is also notable for the harmonious relationship between the open and built spaces, the simplicity of its design, and its size. In the early 20th century, the chapel was decorated with a superb series of murals, now considered some of the masterpieces of Mexican art. They are the work of José Clemente Orozco, one of the greatest Mexican muralists of the period. The Committee decided to inscribe this property on the basis of criteria (i), (ii), (iii) and (iv), considering that the Hospicio Cabañas is a unique architectural complex, designed to respond to social and economic requirements for housing the sick, the aged, the young, and the needy, which provides an outstanding solution of great subtlety and humanity. It also houses one of the acknowledged masterpieces of mural art.`,
      name: `Hospicio Cabañas, Guadalajara`,
      category: `Cultural`,
      longitude: -103.3397222,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://whc.unesco.org/uploads/thumbs/site_1463_0016-360-360-20150610142320.jpg",
      latitude: 19.835277777800002,

      country: `Mexico`,
      continent: `Latin America and the Caribbean`,
      description: `This 16th century aqueduct is located between the states of Mexico and Hidalgo, on the Central Mexican Plateau. This heritage canal system encompasses a water catchment area, springs, canals, distribution tanks and arcaded aqueduct bridges. The site incorporates the highest single-level arcade ever built in an aqueduct. Initiated by the Franciscan friar, Padre Tembleque, and built with support from the local indigenous communities, this hydraulic system is an example of the exchange of influences between the European tradition of Roman hydraulics and traditional Mesoamerican construction techniques, including the use of adobe.`,

      name: `Aqueduct of Padre Tembleque Hydraulic System`,
      category: `Cultural`,
      longitude: -98.6625666667,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://lacgeo.com/sites/default/files/teotihuacan_mexico_opt%20%281%29.jpg",
      latitude: 19.69167,

      country: `Mexico`,
      continent: `Latin America and the Caribbean`,
      description: `The holy city of Teotihuacan ('the place where the gods were created') is situated some 50 km north-east of Mexico City. Built between the 1st and 7th centuries A.D., it is characterized by the vast size of its monuments, in particular, the Temple of Quetzalcoatl and the Pyramids of the Sun and the Moon, laid out on geometric and symbolic principles. As one of the most powerful cultural centres in Mesoamerica, Teotihuacan extended its cultural and artistic influence throughout the region, and even beyond.`,
      name: `Pre-Hispanic City of Teotihuacan`,
      category: `Cultural`,
      longitude: -98.84167,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://www.ovpm.org/wp-content/uploads/2019/05/museo-de-arte3-header.jpg",
      latitude: 20.58333333,
      country: `Mexico`,
      continent: `Latin America and the Caribbean`,

      description: `The old colonial town of Querétaro is unusual in having retained the geometric street plan of the Spanish conquerors side by side with the twisting alleys of the Indian quarters. The Otomi, the Tarasco, the Chichimeca and the Spanish lived together peacefully in the town, which is notable for the many ornate civil and religious Baroque monuments from its golden age in the 17th and 18th centuries. The Committee decided to inscribe the nominated property on the basis of cultural criteria (ii) and (iv) considering that the site is of outstanding universal value and an exceptional example of a colonial town whose layout symbolizes its multi- ethnic population. It is also endowed with a wealth of outstanding buildings, notably from the 17th and 18th centuries.
    `,
      name: `Historic Monuments Zone of Querétaro`,
      category: `Cultural`,
      longitude: -100.3666667,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/2/20/Mexico_xochicalco_pyramids.JPG",
      latitude: 18.81028,
      country: `Mexico`,
      continent: `Latin America and the Caribbean`,

      description: `Xochicalco is an exceptionally well-preserved example of a fortified political, religious and commercial centre from the troubled period of 650 to 900 that followed the break-up of the great Mesoamerican states such as Teotihuacan, Monte Albán, Palenque and Tikal.  Xochicalco is an exceptionally well preserved and complete example of a fortified settlement from the Epiclassic Period of Mesoamerica. Criterion (iv): The architecture and art of Xochicalco represent the fusion of cultural elements from different parts of Mesoamerica, at a period when the breakdown of earlier political structures resulted in intensive cultural regroup-ing.`,
      name: `Archaeological Monuments Zone of Xochicalco`,
      category: `Cultural`,
      longitude: -99.275,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://www.zonaturistica.com/files/puntos_interes/1285/FP11285.jpg",
      latitude: 27.79222,

      country: `Mexico`,
      continent: `Latin America and the Caribbean`,
      description: `Located in the central part of the peninsula of Baja California, the sanctuary contains some exceptionally interesting ecosystems. The coastal lagoons of Ojo de Liebre and San Ignacio are important reproduction and wintering sites for the grey whale, harbour seal, California sea lion, northern elephant-seal and blue whale. The lagoons are also home to four species of the endangered marine turtle.`,

      name: `Whale Sanctuary of El Vizcaino`,
      category: `Natural`,
      longitude: -114.22778,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/228000/228664-Zocalo-Square.jpg",
      latitude: 19.04722,

      country: `Mexico`,
      continent: `Latin America and the Caribbean`,
      description: `Puebla, which was founded ex nihilo in 1531, is situated about 100 km east of Mexico City, at the foot of the Popocatepetl volcano. It has preserved its great religious structures such as the 16th to 17th-century cathedral and fine buildings like the old archbishop's palace, as well as a host of houses with walls covered in tiles (azulejos). The new aesthetic concepts resulting from the fusion of European and American styles were adopted locally and are peculiar to the Baroque district of Puebla.`,

      name: `Historic Centre of Puebla`,
      category: `Cultural`,
      longitude: -98.20833,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/8a/Campo_y_cerro.jpg",
      latitude: 20.8630555555,

      country: `Mexico`,
      continent: `Latin America and the Caribbean`,
      description: `The 34,658 ha site, between the foothills of the Tequila Volcano and the deep valley of the Rio Grande River, is part of an expansive landscape of blue agave, shaped by the culture of the plant used since the 16th century to produce tequila spirit and for at least 2,000 years to make fermented drinks and cloth. Within the landscape are working distilleries reflecting the growth in the international consumption of tequila in the 19th and 20th centuries. Today, the agave culture is seen as part of national identity. The area encloses a living, working landscape of blue agave fields and the urban settlements of Tequila, Arenal, and Amatitan with large distilleries where the agave pineapple is fermented and distilled. The property is also a testimony to the Teuchitlan cultures which shaped the Tequila area from AD 200-900, notably through the creation of terraces for agriculture, housing, temples, ceremonial mounds and ball courts.`,

      name: `Agave Landscape and Ancient Industrial Facilities of Tequila`,
      category: `Cultural`,
      longitude: -103.778611111,
    }),
    Site.create({
      destination: "50526",
      imgUrl:
        "https://destinoriviera.com/wp-content/uploads/2020/04/marv-watson-UfK0P6WygEE-unsplash-scaled.jpg",
      latitude: 20.66667,

      country: `Mexico`,
      continent: `Latin America and the Caribbean`,
      description: `This sacred site was one of the greatest Mayan centres of the Yucatán peninsula. Throughout its nearly 1,000-year history, different peoples have left their mark on the city. The Maya and Toltec vision of the world and the universe is revealed in their stone monuments and artistic works. The fusion of Mayan construction techniques with new elements from central Mexico make Chichen-Itza one of the most important examples of the Mayan-Toltec civilization in Yucatán. Several buildings have survived, such as the Warriors' Temple, El Castillo and the circular observatory known as El Caracol.`,
      name: `Chichen-Itza Pre-Hispanic City`,
      category: `Cultural`,
      longitude: -88.6,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://ocean.si.edu/sites/default/files/styles/photo_full/public/ProtectedAreasGulfofCalifornia.jpg.webp?itok=zmz7lUU_",
      latitude: 27.62667,

      continent: `Latin America and the Caribbean`,

      description: `The site comprises 244 islands, islets and coastal areas that are located in the Gulf of California in north-eastern Mexico. The Sea of Cortez and its islands have been called a natural laboratory for the investigation of speciation. Moreover, almost all major oceanographic processes occurring in the planet's oceans are present in the property, giving it extraordinary importance for study. The site is one of striking natural beauty in a dramatic setting formed by rugged islands with high cliffs and sandy beaches, which contrast with the brilliant reflection from the desert and the surrounding turquoise waters. It is home to 695 vascular plant species, more than in any marine and insular property on the World Heritage List. Equally exceptional is the number of fish species: 891, 90 of them endemic. The site, moreover, contains 39% of the world's total number of species of marine mammals and a third of the world's marine cetacean species. The diversity of terrestrial and marine life is extraordinary and constitutes a unique ecoregion of high priority for biodiversity conservation. The number of species of vascular plants (695) present in this serial property is higher than that reported in other marine and insular properties included in the WH List. The number of species of fish (891) is also highest when compared to a number of marine and insular properties. In addition the marine endemism is important, with 90 endemic fishes. The serial property contains 39% of the world's total number of marine mammal's species and a third of the world's total number of marine cetacean's species. In addition the serial property includes a good sample of the Sonora desert ecosystems, considered one of the richest deserts in the world from the desert biodiversity point of view.`,
      name: `Islands and Protected Areas of the Gulf of California`,
      category: `Natural`,
      longitude: -112.54583,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://as2.ftcdn.net/v2/jpg/02/41/46/33/1000_F_241463389_RHQoEP2wGCXqZuMz0DxeeKyxjZ4dJ7va.jpg",
      latitude: 17.06194,

      country: `Mexico`,
      continent: `Latin America and the Caribbean`,
      description: `Inhabited over a period of 1,500 years by a succession of peoples, Olmecs, Zapotecs and Mixtecs, the terraces, dams, canals, pyramids and artificial mounds of Monte Albán were literally carved out of the mountain and are the symbols of a sacred topography. The nearby city of Oaxaca, which is built on a grid pattern, is a good example of Spanish colonial town planning. The solidity and volume of the city's buildings show that they were adapted to the earthquake-prone region in which these architectural gems were constructed.`,

      name: `Historic Centre of Oaxaca and Archaeological Site of Monte Albán`,
      category: `Cultural`,
      longitude: -96.72167,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://mexicotravelnews.com/wp/wp-content/uploads/2019/10/Centro-Historico-Morelia.jpg",
      latitude: 19.70444,
      country: `Mexico`,
      continent: `Latin America and the Caribbean`,
      description: `Built in the 16th century, Morelia is an outstanding example of urban planning which combines the ideas of the Spanish Renaissance with the Mesoamerican experience. Well-adapted to the slopes of the hill site, its streets still follow the original layout. More than 200 historic buildings, all in the region's characteristic pink stone, reflect the town's architectural history, revealing a masterly and eclectic blend of the medieval spirit with Renaissance, Baroque and neoclassical elements. Morelia was the birthplace of several important personalities of independent Mexico and has played a major role in the country's history.`,
      name: `Historic Centre of Morelia`,
      category: `Cultural`,
      longitude: -101.19167,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://cdn.loquis.com/prod/loquis/pictures/56a7cfef-e79e-4482-9325-e211d54d83bd.jpg",
      latitude: 16.9508333333,
      country: `Mexico`,
      continent: `Latin America and the Caribbean`,
      description: `This property lies on the northern slopes of the Tlacolula valley in subtropical central Oaxaca and consists of two pre-Hispanic archaeological complexes and a series of pre-historic caves and rock shelters. Some of these shelters provide archaeological and rock-art evidence for the progress of nomadic hunter-gathers to incipient farmers. Ten thousand-year-old Cucurbitaceae seeds in one cave, Guilá Naquitz, are considered to be the earliest known evidence of domesticated plants in the continent, while corn cob fragments from the same cave are said to be the earliest documented evidence for the domestication of maize. The cultural landscape of the Prehistoric Caves of Yagul and Mitla demonstrates the link between man and nature that gave origin to the domestication of plants in North America, thus allowing the rise of Mesoamerican civilizations.`,

      name: `Prehistoric Caves of Yagul and Mitla in the Central Valley of Oaxaca`,
      category: `Cultural`,
      longitude: -96.4211111111,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://www.telegraph.co.uk/content/dam/travel/2021/09/28/TELEMMGLPICT000272822890_trans_NvBQzQNjv4BqgsaO8O78rhmZrDxTlQBjdLdu0TL-Cg_AMOUqySXmFgU.jpeg",
      latitude: 40.68944444,

      country: `United States of America`,
      continent: `Europe and North America`,
      description: `Made in Paris by the French sculptor Bartholdi, in collaboration with Gustave Eiffel (who was responsible for the steel framework), this towering monument to liberty was a gift from France on the centenary of American independence. Inaugurated in 1886, the sculpture stands at the entrance to New York Harbour and has welcomed millions of immigrants to the United States ever since.`,

      name: `Statue of Liberty`,
      category: `Cultural`,
      longitude: -74.04472222,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://npf-prod.imgix.net/uploads/shutterstock_142293898_2022-06-13-204008_rwpo.jpg?auto=compress%2Cformat&fit=max&q=80&w=1600",
      latitude: 39.94861111,

      country: `United States of America`,
      continent: `Europe and North America`,
      description: `The Declaration of Independence (1776) and the Constitution of the United States (1787) were both signed in this building in Philadelphia. The universal principles of freedom and democracy set forth in these documents are of fundamental importance to American history and have also had a profound impact on law-makers around the world.`,

      name: `Independence Hall`,
      category: `Cultural`,
      longitude: -75.15,
    }),
    Site.create({
      destination: "75",
      imgUrl: "https://live.staticflickr.com/5210/5339103010_a65036e6ff_c.jpg",
      latitude: 47.74833333,

      country: `United States of America`,
      continent: `Europe and North America`,
      description: `Located in the north-west of Washington State, Olympic National Park is renowned for the diversity of its ecosystems. Glacier-clad peaks interspersed with extensive alpine meadows are surrounded by an extensive old growth forest, among which is the best example of intact and protected temperate rainforest in the Pacific Northwest. Eleven major river systems drain the Olympic mountains, offering some of the best habitat for anadromous fish species in the country. The park also includes 100 km of wilderness coastline, the longest undeveloped coast in the contiguous United States, and is rich in native and endemic animal and plant species, including critical populations of the endangered northern spotted owl, marbled murrelet and bull trout.`,

      name: `Olympic National Park`,
      category: `Natural`,
      longitude: -123.4488889,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://historyfangirl.com/wp-content/uploads/2020/06/shutterstock_132426206.jpg",
      latitude: 32.16666667,

      country: `United States of America`,
      continent: `Europe and North America`,
      description: `This karst landscape in the state of New Mexico comprises over 80 recognized caves. They are outstanding not only for their size but also for the profusion, diversity and beauty of their mineral formations. Lechuguilla Cave stands out from the others, providing an underground laboratory where geological and biological processes can be studied in a pristine setting.`,

      name: `Carlsbad Caverns National Park`,
      category: `Natural`,
      longitude: -104.3833333,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://i.natgeofe.com/n/942d3a33-7239-4410-b6d6-0dca6348476e/san-juan-travel.jpg",
      latitude: 18.46666667,

      country: `United States of America`,
      continent: `Europe and North America`,
      description: `Between the 15th and 19th centuries, a series of defensive structures was built at this strategic point in the Caribbean Sea to protect the city and the Bay of San Juan. They represent a fine display of European military architecture adapted to harbour sites on the American continent.`,

      name: `La Fortaleza and San Juan National Historic Site in Puerto Rico`,
      category: `Cultural`,
      longitude: -66.125,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://www.explorebigsky.com/wp-content/uploads/2021/09/Pueblo-Bonito-photo-credit-Paul-Vanderveen-2018-scaled.jpg",
      latitude: 36.06377778,

      country: `United States of America`,
      continent: `Europe and North America`,
      description: `For over 2,000 years, Pueblo peoples occupied a vast region of the south-western United States. Chaco Canyon, a major centre of ancestral Pueblo culture between 850 and 1250, was a focus for ceremonials, trade and political activity for the prehistoric Four Corners area. Chaco is remarkable for its monumental public and ceremonial buildings and its distinctive architecture. It has an ancient urban ceremonial centre that is unlike anything constructed before or since. In addition to the Chaco Culture National Historical Park, the World Heritage property includes the Aztec Ruins National Monument and several smaller Chaco sites managed by the Bureau of Land Management.`,

      name: `Chaco Culture`,
      category: `Cultural`,
      longitude: -107.9708333,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://www.worldhistory.org/img/r/p/500x600/13925.jpg?v=1619687335",
      latitude: 32.6369444444,

      country: `United States of America`,
      continent: `Europe and North America`,
      description: `Monumental Earthworks of Poverty Point owes its name to a 19th-century plantation close to the site, which is in the Lower Mississippi Valley on a slightly elevated and narrow landform. The complex comprises five mounds, six concentric semi-elliptical ridges separated by shallow depressions and a central plaza. It was created and used for residential and ceremonial purposes by a society of hunter fisher-gatherers between 3700 and 3100 BP. It is a remarkable achievement in earthen construction in North America that was unsurpassed for at least 2,000 years.`,

      name: `Monumental Earthworks of Poverty Point`,
      category: `Cultural`,
      longitude: -91.4063888889,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://s27363.pcdn.co/wp-content/uploads/2021/08/Hawaii-Volcanoes-Photo.jpg.optimal.jpg",
      latitude: 19.40083333,

      country: `United States of America`,
      continent: `Europe and North America`,
      description: `This site contains two of the most active volcanoes in the world, Mauna Loa (4,170 m high) and Kilauea (1,250 m high), both of which tower over the Pacific Ocean. Volcanic eruptions have created a constantly changing landscape, and the lava flows reveal surprising geological formations. Rare birds and endemic species can be found there, as well as forests of giant ferns.`,

      name: `Hawaii Volcanoes National Park`,
      category: `Natural`,
      longitude: -155.1236111,
    }),
    Site.create({
      destination: "815",
      imgUrl:
        "https://media.cntraveler.com/photos/5ebeef63f52f4c0911cac483/master/pass/GrandCanyonNationalPark-2020-GettyImages-858637934.jpg",
      latitude: 36.10083333,

      country: `United States of America`,
      continent: `Europe and North America`,
      description: `Carved out by the Colorado River, the Grand Canyon (nearly 1,500 m deep) is the most spectacular gorge in the world. Located in the state of Arizona, it cuts across the Grand Canyon National Park. Its horizontal strata retrace the geological history of the past 2 billion years. There are also prehistoric traces of human adaptation to a particularly harsh environment.`,

      name: `Grand Canyon National Park`,
      category: `Natural`,
      longitude: -112.0905556,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://img0.oastatic.com/img2/73855996/1080x610r/view-of-yosemite-falls-on-a-hike-in-yosemite.jpg",
      latitude: 37.74611111,

      country: `United States of America`,
      continent: `Europe and North America`,
      description: `Yosemite National Park lies in the heart of California. With its 'hanging' valleys, many waterfalls, cirque lakes, polished domes, moraines and U-shaped valleys, it provides an excellent overview of all kinds of granite relief fashioned by glaciation. At 600 to 4,000 m, a great variety of flora and fauna can also be found here.`,

      name: `Yosemite National Park`,
      category: `Natural`,
      longitude: -119.5966667,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://static.seeker.io/media/img/1/65af4e4b-43e1-40ac-96a4-5977bb7fcac4-1400.jpg?placeid=2761&name=Redwood%20National%20and%20State%20Parks,%20&lat=41.213181&lng=-124.004623",
      latitude: 41.37388889,

      country: `United States of America`,
      continent: `Europe and North America`,
      description: `Redwood National Park comprises a region of coastal mountains bordering the Pacific Ocean north of San Francisco. It is covered with a magnificent forest of coastal redwood trees, the tallest and most impressive trees in the world. The marine and land life are equally remarkable, in particular the sea lions, the bald eagle and the endangered California brown pelican.`,

      name: `Redwood National and State Parks`,
      category: `Natural`,
      longitude: -123.9980556,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/sunset-over-mission-san-jose-san-antonio-texas-catholic-mission-jason-politte.jpg",
      latitude: 29.3280555556,

      country: `United States of America`,
      continent: `Europe and North America`,
      description: `The site encompasses a group of five frontier mission complexes situated along a stretch of the San Antonio River basin in southern Texas, as well as a ranch located 37 kilometres to the south. It includes architectural and archaeological structures, farmlands, residencies, churches and granaries, as well as water distribution systems. The complexes were built by Franciscan missionaries in the 18th century and illustrate the Spanish Crown's efforts to colonize, evangelize and defend the northern frontier of New Spain. The San Antonio Missions are also an example of the interweaving of Spanish and Coahuiltecan cultures, illustrated by a variety of features, including the decorative elements of churches, which combine Catholic symbols with indigenous designs inspired by nature.`,

      name: `San Antonio Missions`,
      category: `Cultural`,
      longitude: -98.46,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://upload.travelawaits.com/ta/uploads/2021/04/aerial-view-of-monks-mound-at7148c8-800x800.jpg",
      latitude: 38.65861111,

      country: `United States of America`,
      continent: `Europe and North America`,
      description: `Cahokia Mounds, some 13 km north-east of St Louis, Missouri, is the largest pre-Columbian settlement north of Mexico. It was occupied primarily during the Mississippian period (800 to 1400), when it covered nearly 1,600 ha and included some 120 mounds. It is a striking example of a complex chiefdom society, with many satellite mound centres and numerous outlying hamlets and villages. This agricultural society may have had a population of 10 to 20,000 at its peak between 1050 and 1150. Primary features at the site include Monks Mound, the largest prehistoric earthwork in the Americas, covering over 5 ha and standing 30 m high.`,

      name: `Cahokia Mounds State Historic Site`,
      category: `Cultural`,
      longitude: -90.06138889,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://cdn.britannica.com/92/130792-050-ED0EFC61/Everglades-National-Park-Florida.jpg",
      latitude: 25.55444444,

      country: `United States of America`,
      continent: `Europe and North America`,
      description:
        "This site at the southern tip of Florida has been called 'a river of grass flowing imperceptibly from the hinterland into the sea'. The exceptional variety of its water habitats has made it a sanctuary for a large number of birds and reptiles, as well as for threatened species such as the manatee.",
      name: `Everglades National Park`,
      category: `Natural`,
      longitude: -80.99638889,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://www.papahanaumokuakea.gov/new-images/slider-ghost-nets-removed.jpg",
      latitude: 25.34907,

      country: `United States of America`,
      continent: `Europe and North America`,
      description: `Papahānaumokuākea is a vast and isolated linear cluster of small, low lying islands and atolls, with their surrounding ocean, roughly 250 km to the northwest of the main Hawaiian Archipelago and extending over some 1931 km. The area has deep cosmological and traditional significance for living Native Hawaiian culture, as an ancestral environment, as an embodiment of the Hawaiian concept of kinship between people and the natural world, and as the place where it is believed that life originates and to where the spirits return after death. On two of the islands, Nihoa and Makumanamana, there are archaeological remains relating to pre-European settlement and use. Much of the monument is made up of pelagic and deepwater habitats, with notable features such as seamounts and submerged banks, extensive coral reefs and lagoons. It is one of the largest marine protected areas (MPAs) in the world.`,

      name: `Papahānaumokuākea Marine National Santuary`,
      category: `Mixed`,
      longitude: -170.14582,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://images.ctfassets.net/t0xuqwv6k7ay/w9LvKyjZPQD9CXcUjGsgH/a44c173cabac40702cae5384b06ba8ed/mammoth_cave_national_park_hero_image.jpg",
      latitude: 37.18722222,

      country: `United States of America`,
      continent: `Europe and North America`,
      description: `Mammoth Cave National Park, located in the state of Kentucky, has the world's largest network of natural caves and underground passageways, which are characteristic examples of limestone formations. The park and its underground network of more than 560 surveyed km of passageways are home to a varied flora and fauna, including a number of endangered species.`,

      name: `Mammoth Cave National Park`,
      category: `Natural`,
      longitude: -86.10305556,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://www.planetware.com/photos-large/USNM/New-mexico-taos-pueblo.jpg",
      latitude: 36.43889,

      country: `United States of America`,
      continent: `Europe and North America`,
      description: `Situated in the valley of a small tributary of the Rio Grande, this adobe settlement, consisting of dwellings and ceremonial buildings, represents the culture of the Pueblo Indians of Arizona and New Mexico.`,

      name: `Taos Pueblo`,
      category: `Cultural`,
      longitude: -105.54167,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://photojeepers.com/wp-content/uploads/2022/06/hot-pool-at-yellowstone.jpg",
      latitude: 44.46056,

      country: `United States of America`,
      continent: `Europe and North America`,
      description: `The vast natural forest of Yellowstone National Park covers nearly 9,000 km2 ; 96% of the park lies in Wyoming, 3% in Montana and 1% in Idaho. Yellowstone contains half of all the world's known geothermal features, with more than 10,000 examples. It also has the world's largest concentration of geysers (more than 300 geyers, or two thirds of all those on the planet). Established in 1872, Yellowstone is equally known for its wildlife, such as grizzly bears, wolves, bison and wapitis.`,

      name: `Yellowstone National Park`,
      category: `Natural`,
      longitude: -110.82778,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,g_xy_center,h_500,q_65,w_640,x_518,y_361/v1/clients/swaincountync/Oconaluftee_Valley_Overlook_low_rez_for_web_or_social_8f145a91-e25c-4e1d-ba6b-e719fb510523.jpg",
      latitude: 35.59305556,

      country: `United States of America`,
      continent: `Europe and North America`,
      description: `Stretching over more than 200,000 ha, this exceptionally beautiful park is home to more than 3,500 plant species, including almost as many trees (130 natural species) as in all of Europe. Many endangered animal species are also found there, including what is probably the greatest variety of salamanders in the world. Since the park is relatively untouched, it gives an idea of temperate flora before the influence of humankind.`,

      name: `Great Smoky Mountains National Park`,
      category: `Natural`,
      longitude: -83.43555556,
    }),
    Site.create({
      destination: "75",
      imgUrl:
        "https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,h_1200,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/durangoco/MesaVerde_Sellers_150-baff934a90e4def_baff94a2-f937-b9b4-d668f02f77822e5a.jpg",
      latitude: 37.26166667,

      country: `United States of America`,
      continent: `Europe and North America`,
      description: `A great concentration of ancestral Pueblo Indian dwellings, built from the 6th to the 12th century, can be found on the Mesa Verde plateau in south-west Colorado at an altitude of more than 2,600 m. Some 4,400 sites have been recorded, including villages built on the Mesa top. There are also imposing cliff dwellings, built of stone and comprising more than 100 rooms.`,

      name: `Mesa Verde National Park`,
      category: `Cultural`,
      longitude: -108.4855556,
    }),
  ]);

  //------------Creating buckets------------------------
  const buckets = await Promise.all([
    Bucket.create({
      userId: 1,
      siteId: 1,
      status: "Checked",
    }),
    Bucket.create({
      userId: 1,
      siteId: 2,
      status: "Soon",
    }),
    Bucket.create({
      userId: 2,
      siteId: 2,
      status: "Checked",
    }),
  ]);

  const tours = await Promise.all([
    Tour.create({
      siteId: 1,
      title: "Half-Day Private Grand Canyon Guided Hiking Tour",
      description:
        "Spend half a day exploring the Grand Canyon West Rim. Save time on the day by booking admission tickets in advance and enjoy the activities which are of most interest, such as the strolling along the Skywalk.",
      imgUrl:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/94/5d/99.jpg",
      reviewCount: 244,
      reviewAvg: 4,
      duration: "1 to 4 hours (approx.)",
      priceFrom: 53.17,
      bookingUrl:
        "https://www.viator.com/tours/Grand-Canyon-National-Park/Grand-Canyon-West-Admission-Ticket/d815-76754P1",
    }),
    Tour.create({
      siteId: 1,
      title:
        "Helicopter Tour of the North Canyon with Optional Hummer Excursion",
      description:
        "Soar over Kaibab National Forest and into the Dragon Corridor—the deepest and widest part of the canyon. ",
      imgUrl:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/bb/cb/df.jpg",
      reviewCount: 69,
      reviewAvg: 5,
      duration: "2 hours 30 minutes (approx.)",
      priceFrom: 229.0,
      bookingUrl:
        "https://www.viator.com/tours/Grand-Canyon-National-Park/Helicopter-Tour-of-the-North-Canyon-with-Optional-Hummer-Excursion/d815-6613P14",
    }),
    Tour.create({
      siteId: 1,
      title:
        "Arizona Highlights - Antelope Canyon and Lake Powell Flight with River Rafting",
      description:
        "Explore the Grand Canyon from the land, air, and water on this full-day sightseeing adventure.",
      imgUrl:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/73/cb/98.jpg",
      reviewCount: 80,
      reviewAvg: 4,
      duration: "12 hours 30 minutes (approx.)",
      priceFrom: 679.0,
      bookingUrl:
        "https://www.viator.com/tours/Grand-Canyon-National-Park/Arizona-Highlights-Day-Trip-Antelope-Canyon-Lake-Powell-and-Glen-Canyon-with-River-Rafting/d815-6338RIVER",
    }),
    Tour.create({
      siteId: 2,
      title: "Skip the Line: Entrance Ticket to Chichen Itza",
      description:
        "Save hours of waiting in line at one of the New7Wonders of the World with skip-the-line entry to Chichen Itza. Booking your admission ticket in advance allows you to arrive at the Mayan ruins at any time of day.",
      imgUrl:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/e5/57/d2.jpg",
      reviewCount: 60,
      reviewAvg: 4,
      duration: "1 to 6 hours (approx.)",
      priceFrom: 64.0,
      bookingUrl:
        "https://www.viator.com/tours/Cancun/Skip-The-Line-Chichen-Itza-Entrance-Ticket/d631-5885P253",
    }),
    Tour.create({
      siteId: 2,
      title: "Tour to Chichen Itza and Coba with Cenote",
      description:
        "Visit two ancient Maya cities and a beautiful cenote on a full-day trip from Playa del Carmen to Chichen Itza and Coba. ",
      imgUrl:
        "https://media.tacdn.com/media/attractionhttps://media.tacdn.com/media/attractions-splice-spp-674x446/0f/4d/d3/c3.jpgs-splice-spp-674x446/07/35/e8/6b.jpg",
      reviewCount: 109,
      reviewAvg: 4,
      duration: "12 hours (approx.)",
      priceFrom: 70.0,
      bookingUrl:
        "https://www.viator.com/tours/Cancun/Chichen-Itza-Cenote-Ik-Kil-and-Coba-from-Playa-del-Carmen-and-Riviera-Maya/d631-29537P21",
    }),
    Tour.create({
      siteId: 3,
      title: "Winter Wildlife Discovery Tour",
      description:
        "This educational and entertaining guided winter wildlife tour introduces you to the gorgeous natural beauty outside of Jasper. You'll learn about the history and geology of the area from the expert local guide.",
      imgUrl:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/42/ae.jpg",
      reviewCount: 20,
      reviewAvg: 4,
      duration: "3 hours 30 minutes (approx.)",
      priceFrom: 54.66,
      bookingUrl:
        "https://www.viator.com/tours/Jasper/Maligne-Valley-and-Wildlife-Tour/d5421-3872MV",
    }),
    Tour.create({
      siteId: 3,
      title: "Maligne Canyon Ice Walk",
      description:
        "Calling all outdoor adventurers, this hiking tour takes you deep into Maligne Canyon, one of the deepest river canyons in the Canadian Rockies. On a mostly downhill route, encounter frozen waterfalls, ice caves, and discover the mystery of the disappearing Medicine Lake",
      imgUrl:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/9f/7a/61.jpg",
      reviewCount: 71,
      reviewAvg: 4,
      duration: "3 hours (approx.)",
      priceFrom: 56.18,
      bookingUrl:
        "https://www.viator.com/tours/Jasper/Maligne-Canyon-Ice-Walk/d5421-3872P25",
    }),

    Tour.create({
      siteId: 3,
      title: "Athabasca Canyon Run Family Rafting: Class II Plus Rapids",
      description:
        "Paddle through the dramatic Athabasca Canyon on a half-day whitewater rafting adventure from Jasper that takes on fun, family-friendly Class 2+ rapids. ",
      imgUrl:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/97/fd/f4.jpg",
      reviewCount: 86,
      reviewAvg: 5,
      duration: "3 hours 30 minutes (approx.)",
      priceFrom: 85.38,
      bookingUrl:
        "https://www.viator.com/tours/Jasper/Athabasca-Canyon-Run-Family-Rafting-Class-II-Plus-Rapids/d5421-5400P8",
    }),
    Tour.create({
      siteId: 2,
      title: "The Best of Valladolid Walking Tour",
      description:
        "Planning a trip around the Yucatan Peninsula? What to see in Valladolid? Are Mayans living in Valladolid? Enjoy the cultural and iconic attractions of interest in one of the famous and colorful towns in Mexico.",
      imgUrl:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/35/dd/35.jpg",
      reviewCount: 5,
      reviewAvg: 4,
      duration: "2 hours (approx.)",
      priceFrom: 105.0,
      bookingUrl:
        "https://www.viator.com/tours/Valladolid/The-Best-of-Valladolid-Walking-Tour/d50533-198517P4",
    }),
    Tour.create({
      siteId: 3,
      title: "Jasper Rock Climbing Experience",
      description:
        "On this introductory rock climbing tour, suited to all ages and skill levels, escape the city for a day of adventure—with all safety and climbing equipment included. ",
      imgUrl:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/3a/a0.jpg",
      reviewCount: 32,
      reviewAvg: 5,
      duration: "4 hours (approx.)",
      priceFrom: 99.64,
      bookingUrl:
        "https://www.viator.com/tours/Jasper/Jasper-Rock-Climbing-Experience/d5421-38238P1",
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${sites.length} sites`);
  console.log(`seeded ${buckets.length} buckets`);
  console.log(`seeded ${tours.length} tours`);
  console.log(`seeded successfully`);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
