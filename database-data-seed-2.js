var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("rome");
    var myobj = [
          {
             id: "address.1389223010",
             type: "Feature",
             place_type: ["address"],
             relevance: 0.75,
             properties: {
               "marker-color": "#7e7e7e",
               "marker-size": "medium",
               "marker-symbol": "",
               landmark: "true",
               tel: "06 393 842",
               category: "college, education, school, university",
               address: "Via Marcantonio Colonna 21",
               notes: "MBA, MA degrees, & study abroad",
               text: "St. John's University",
               "place_name": "St. John's University",
               "image1": '<a href="https://www.stjohns.edu/campuses/rome-campus" target="_blank"><img src="https://www.stjohns.edu/sites/default/files/styles/photo_gallery_detail/public/2014/07/02/140702-rome-08_0.jpg?itok=NvZ1bVemhttps://www.stjohns.edu/sites/default/files/styles/photo_gallery_detail/public/2014/07/02/140702-rome-08_0.jpg?itok=NvZ1bVem"></a>',
               "image2": '<a href="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/423434_241637199243697_480465340_n.jpg?_nc_cat=108&_nc_ht=scontent-ort2-1.xx&oh=37225f5cf5949c43f3d0940855870679&oe=5C71A548" target="_blank"><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/423434_241637199243697_480465340_n.jpg?_nc_cat=108&_nc_ht=scontent-ort2-1.xx&oh=37225f5cf5949c43f3d0940855870679&oe=5C71A548" style="width:100%" alt="Entrance"></a>',
               "image3": '<a href="src="https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/14468241_1174741452599929_1161776998738973704_o.jpg?_nc_cat=104&_nc_ht=scontent-ort2-1.xx&oh=fc67ea6d531c789877e39bb341540f33&oe=5C85060E" target="_blank"><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/14468241_1174741452599929_1161776998738973704_o.jpg?_nc_cat=104&_nc_ht=scontent-ort2-1.xx&oh=fc67ea6d531c789877e39bb341540f33&oe=5C85060E" style="width:100%" alt="Aula Magna Classroom"></a>',
               "image4": '<a href="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/420045_241637022577048_1524216957_n.jpg?_nc_cat=111&_nc_ht=scontent-ort2-1.xx&oh=b1d3b04b9dd531181223a89948b15230&oe=5C7663AE" target="_blank"><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/420045_241637022577048_1524216957_n.jpg?_nc_cat=111&_nc_ht=scontent-ort2-1.xx&oh=b1d3b04b9dd531181223a89948b15230&oe=5C7663AE" style="width:100%" alt="Library"></a>',
               "image5": '<a href="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/395407_241637035910380_2141138916_n.jpg?_nc_cat=110&_nc_ht=scontent-ort2-1.xx&oh=90c7d9db05b735a12b09dfc0f9f83d15&oe=5C40BDF5" target="_blank"><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/395407_241637035910380_2141138916_n.jpg?_nc_cat=110&_nc_ht=scontent-ort2-1.xx&oh=90c7d9db05b735a12b09dfc0f9f83d15&oe=5C40BDF5" style="width:100%" alt="Computer Lab"></a>',
               "image6": '<a href="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/393904_241636815910402_1262990783_n.jpg?_nc_cat=104&_nc_ht=scontent-ort2-1.xx&oh=b8008cf68f58d5e5d966a23e892d6fa8&oe=5CCC860E" target="_blank"><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/393904_241636815910402_1262990783_n.jpg?_nc_cat=104&_nc_ht=scontent-ort2-1.xx&oh=b8008cf68f58d5e5d966a23e892d6fa8&oe=5CCC860E"></a>',
               "link": '<a href="university.html" target="_blank">website</a>',
               "TotalEnrollment": "250"
             },
             text: "St. John's University",
             "place_name": "St. John's University",
             center: [12.466754, 41.910315],
             geometry: {
               type: "Point",
               coordinates: [12.466754, 41.910315]
             },
             address: "21",
             context: [{
                 id: "postcode.12135619990400930",
                 text: "00192"
               },
               {
                 id: "place.9045806458813870",
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "region.3733",
                 short_code: null,
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "country.333",
                 short_code: "it",
                 wikidata: "Q38",
                 text: "Italy"
               }
             ]
           },
           {
             id: "poi.13495378506950280",
             type: "Feature",
             place_type: ["poi"],
             relevance: 1,
             properties: {
               "marker-color": "#7e7e7e",
               "marker-size": "medium",
               "marker-symbol": "",
               landmark: "true",
               tel: "06 681 9121",
               category: "college, education, school, university",
               address: "Via della Lungara 233",
               text: "John Cabot University",
               "place_name": "John Cabot University",
               "image1": '<a href="https://res-1.cloudinary.com/abroad101/image/upload/c_limit,h_800,w_800/v1494505363/Program_3082_Photo__83cd.jpg" target="_blank"><img src="https://res-1.cloudinary.com/abroad101/image/upload/c_limit,h_800,w_800/v1494505363/Program_3082_Photo__83cd.jpg" alt="JCU street entrance"></a>',
               "image2": '<a href="http://www.aaicu.org/wp-content/uploads/2016/02/John-Cabot-Library.jpg" target="_blank"><img src="http://www.aaicu.org/wp-content/uploads/2016/02/John-Cabot-Library.jpg" alt="JCU Library"></a>',
               "image3": '<a href="https://res-2.cloudinary.com/abroad101/image/upload/c_limit,h_800,w_800/v1494505438/Program_3082_Photo__86a4.jpg" target="_blank"><img src="https://res-2.cloudinary.com/abroad101/image/upload/c_limit,h_800,w_800/v1494505438/Program_3082_Photo__86a4.jpg" alt="JCU computer lab"></a>',
               "image4": '<a href="https://res-5.cloudinary.com/abroad101/image/upload/c_limit,h_800,w_800/v1494505393/Program_3082_Photo__9fec.jpg" target="_blank"><img src="https://res-5.cloudinary.com/abroad101/image/upload/c_limit,h_800,w_800/v1494505393/Program_3082_Photo__9fec.jpg" alt="JCU classroom"></a>',
               "image5": '<a href="https://res-1.cloudinary.com/abroad101/image/upload/c_limit,h_800,w_800/v1494505398/Program_3082_Photo__d77b.jpg" target="_blank"><img src="https://res-1.cloudinary.com/abroad101/image/upload/c_limit,h_800,w_800/v1494505398/Program_3082_Photo__d77b.jpg" alt="JCU Cafeteria"></a>',
               "image6": '<a href="https://res-1.cloudinary.com/abroad101/image/upload/c_limit,h_800,w_800/v1510627191/Review_39900_Photo__7f00.jpg" target="_blank"><img src="https://res-1.cloudinary.com/abroad101/image/upload/c_limit,h_800,w_800/v1510627191/Review_39900_Photo__7f00.jpg" alt="JCU Front Yard"></a>',
               "link": '<a href="https://www.johncabot.edu" target="_blank">website</a>',
               "TotalEnrollment": "1214"
             },
             text: "John Cabot University",
             "place_name": "John Cabot University",
             center: [12.467476, 41.89253],
             geometry: {
               type: "Point",
               coordinates: [12.467476, 41.89253]
             },
             context: [{
                 id: "postcode.15544378823638570",
                 text: "00165"
               },
               {
                 id: "place.9045806458813870",
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "region.3733",
                 short_code: null,
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "country.333",
                 short_code: "it",
                 wikidata: "Q38",
                 text: "Italy"
               }
             ]
           },
           {
             id: "poi.4924637713421710",
             type: "Feature",
             place_type: ["poi"],
             relevance: 0.6,
             properties: {
               landmark: true,
               wikidata: "Q469446",
               tel: "06 5833 0919",
               category: "college, education, school, university",
               address: "Via Pietro Roselli 4",
               text: "American University of Rome",
               "place_name": "American University of Rome",
               "image1": '<a href="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/AUR_Full_View_Campus.JPG/1280px-AUR_Full_View_Campus.JPG" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/AUR_Full_View_Campus.JPG/1280px-AUR_Full_View_Campus.JPG"></a>',
               "image2": '<a href="js/data/AUR courtyard.jpg" target="_blank"><img src="js/data/AUR courtyard.jpg" alt="AUR Courtyard"></a>',
               "image3": '<a href="js/data/AUR auditorium.jpg" target="_blank"><img src="js/data/AUR auditorium.jpg" alt="Student Lounge"></a>',
               "image4": '<a href="js/data/AUR computer lab.jpg" target="_blank"><img src="js/data/AUR computer lab.jpg" alt="AUR Dorms"></a>',
               "image5": '<a href="js/data/AUR student lounge.jpg" target="_blank"><img src="js/data/AUR student lounge.jpg" alt="AUR Dorms"></a>',
               "image6": '<a href="js/data/AUR overview of Rome.jpg" target="_blank"><img src="js/data/AUR overview of Rome.jpg"></a>',
               "link": '<a href="https://www.aur.edu" target="_blank">website</a>',
               "TotalEnrollment": "500"
             },
             text: "American University of Rome",
             "place_name": "American University of Rome",
             center: [12.4623, 41.8857],
             geometry: {
               type: "Point",
               coordinates: [12.4623, 41.8857]
             },
             context: [{
                 id: "postcode.15815264381815910",
                 text: "00153"
               },
               {
                 id: "place.9045806458813870",
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "region.3733",
                 short_code: null,
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "country.333",
                 short_code: "it",
                 wikidata: "Q38",
                 text: "Italy"
               }
             ]
           },
           {
             "id": "address.1539385031",
             "type": "Feature",
             "place_type": [
               "address"
             ],
             "relevance": 0.8,
             "properties": {
               "place_name": "University of Arkansas",
               "address": "via Di Monte Giordano 36",
               "image": '<a href="js/data/UArk 1.jpg" target="_blank"><img src="js/data/UArk 1.jpg"></a>',
               "image1": '<a href="js/data/UArk 1.jpg" target="_blank"><img src="js/data/UArk 1.jpg"></a>',
               "image2": '<a href="js/data/UArk 10.jpg" target="_blank"><img src="js/data/UArk 10.jpg"></a>',
               "image3": '<a href="js/data/UArk 9.jpg" target="_blank"><img src="js/data/UArk 9.jpg"></a>',
               "image4": '<a href="js/data/UArk 8.jpg" target="_blank"><img src="js/data/UArk 8.jpg"></a>',
               "image5": '<a href="js/data/UArk 7.jpg" target="_blank"><img src="js/data/UArk 7.jpg"></a>',
               "image6": '<a href="js/data/UArk 6.jpg" target="_blank"><img src="js/data/UArk 6.jpg"></a>',
               "link": '<a href="http://www.uarkrome.it/" target="_blank">website</a>',
               "TotalEnrollment": "50"
             },
             "text": "via Di Monte Giordano",
             "place_name": "via Di Monte Giordano 36, 00186 Roma Roma, Italy",
             "center": [
               12.46915,
               41.899531
             ],
             "geometry": {
               "type": "Point",
               "coordinates": [
                 12.46915,
                 41.899531
               ]
             },
             "address": "36",
             "context": [{
                 "id": "postcode.15469928861926560",
                 "text": "00186"
               },
               {
                 "id": "place.9045806458813870",
                 "wikidata": "Q220",
                 "text": "Roma"
               },
               {
                 "id": "region.3733",
                 "short_code": null,
                 "wikidata": "Q220",
                 "text": "Roma"
               },
               {
                 "id": "country.333",
                 "short_code": "it",
                 "wikidata": "Q38",
                 "text": "Italy"
               }
             ]
           },
           {
             id: "address.2065545436",
             type: "Feature",
             place_type: ["address"],
             relevance: 0.9947368421052631,
             properties: {
               landmark: true,
               wikidata: "",
               tel: "",
               category: "college, education, school, university",
               address: "Clivo dei Publicii, 2",
               text: "Trinity College",
               "place_name": "Trinity College",
               "image1": '<a href="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/223348_199083680130858_6020249_n.jpg?_nc_cat=107&_nc_ht=scontent-ort2-1.xx&oh=20ade2beff94068ec4893021d3dab03e&oe=5C931B47" target="_blank"><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/223348_199083680130858_6020249_n.jpg?_nc_cat=107&_nc_ht=scontent-ort2-1.xx&oh=20ade2beff94068ec4893021d3dab03e&oe=5C931B47"></a>',
               "image2": '<a href="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/44247913_1944886688883873_1971986452447232000_o.jpg?_nc_cat=105&_nc_ht=scontent-ort2-1.xx&oh=34ef017332be94078f1bb8a60133b2c9&oe=5CD3444D" target="_blank"><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/44247913_1944886688883873_1971986452447232000_o.jpg?_nc_cat=105&_nc_ht=scontent-ort2-1.xx&oh=34ef017332be94078f1bb8a60133b2c9&oe=5CD3444D"></a>',
               "image3": '<a href="https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/22528719_1516172175088662_6268295754026964224_o.jpg?_nc_cat=108&_nc_ht=scontent-ort2-1.xx&oh=dd783790781c8791f09a6dbc0abe8ca3&oe=5C8CD511" target="_blank"><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/22528719_1516172175088662_6268295754026964224_o.jpg?_nc_cat=108&_nc_ht=scontent-ort2-1.xx&oh=dd783790781c8791f09a6dbc0abe8ca3&oe=5C8CD511"></a>',
               "image4": '<a href="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/21430340_1483797818326098_212246027070866466_n.jpg?_nc_cat=100&_nc_ht=scontent-ort2-1.xx&oh=6691009b9fc3b265a3a969f7681ddd96&oe=5CC864C8" target="_blank"><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/21430340_1483797818326098_212246027070866466_n.jpg?_nc_cat=100&_nc_ht=scontent-ort2-1.xx&oh=6691009b9fc3b265a3a969f7681ddd96&oe=5CC864C8"></a>',
               "image5": '<a href="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/21432714_1483797821659431_3605878204831989145_n.jpg?_nc_cat=100&_nc_ht=scontent-ort2-1.xx&oh=41d3808ae3f7db97984370200f793bfa&oe=5C9D55D3" target="_blank"><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/21432714_1483797821659431_3605878204831989145_n.jpg?_nc_cat=100&_nc_ht=scontent-ort2-1.xx&oh=41d3808ae3f7db97984370200f793bfa&oe=5C9D55D3"></a>',
               "image6": '<a href="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/11377388_877490122290207_5979650164744360508_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=83429ba637e33eecf94b649da7bec641&oe=5C97B1C6" target="_blank"><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/11377388_877490122290207_5979650164744360508_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=83429ba637e33eecf94b649da7bec641&oe=5C97B1C6"></a>',
               "link": '<a href="https://www.trincoll.edu/UrbanGlobal/StudyAway/programs/TrinityPrograms/Rome/" target="_blank">website</a>',
               "TotalEnrollment": "50"
             },
             text: "Clivo Dei Publicii",
             "place_name": "Trinity College, Clivo Dei Publicii 2, 00153 Roma Roma, Italy",
             center: [12.482741, 41.88463],
             geometry: {
               type: "Point",
               coordinates: [12.482741, 41.88463]
             },
             address: "2",
             context: [{
                 id: "postcode.15815264381815910",
                 text: "00153"
               },
               {
                 id: "place.9045806458813870",
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "region.3733",
                 short_code: null,
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "country.333",
                 short_code: "it",
                 wikidata: "Q38",
                 text: "Italy"
               }
             ]
           },
           {
             id: "poi.9363776862486700",
             type: "Feature",
             place_type: ["poi"],
             relevance: 1,
             properties: {
               landmark: true,
               tel: "06 580 9891",
               category: "college, education, school, university",
               address: "Via Dandolo 19",
               "place_name": "Cornell University",
               "image1": '<a href="https://aap.cornell.edu/academics/rome" target="_blank"><img src="http://farm8.staticflickr.com/7309/27552217222_0a014fcc73_b.jpg"></a>',
               "image2": '<a href="https://aap.cornell.edu/sites/default/files/styles/news-event-medium/public/Andras_rome-8_550x310_0.jpg?itok=Iylv9JT5" target="_blank"><img src="https://aap.cornell.edu/sites/default/files/styles/news-event-medium/public/Andras_rome-8_550x310_0.jpg?itok=Iylv9JT5"></a>',
               "image3": '<a href="https://aap.cornell.edu/sites/default/files/Second%20Year%20Studio_550x310.jpg" target="_blank"><img src="https://aap.cornell.edu/sites/default/files/Second%20Year%20Studio_550x310.jpg"></a>',
               "image4": '<a href="https://aap.cornell.edu/sites/default/files/styles/news-event-medium/public/ArchStudio_550x310.jpg?itok=8AaCGpFc" target="_blank"><img src="https://aap.cornell.edu/sites/default/files/styles/news-event-medium/public/ArchStudio_550x310.jpg?itok=8AaCGpFc"></a>',
               "image5": '<a href="https://aap.cornell.edu/sites/default/files/styles/news-event-medium/public/_NQR3980-HDR_1440x350.jpg?itok=A3dAG-Zi" target="_blank"><img src="https://aap.cornell.edu/sites/default/files/styles/news-event-medium/public/_NQR3980-HDR_1440x350.jpg?itok=A3dAG-Zi"></a>',
               "image6": '<a href="https://aap.cornell.edu/sites/default/files/Paestum%20Italy%20Field%20Trip_550x310.jpg" target="_blank"><img src="https://aap.cornell.edu/sites/default/files/Paestum%20Italy%20Field%20Trip_550x310.jpg"></a>',
               "link": '<a href="https://aap.cornell.edu/academics/rome" target="_blank">website</a>',
               "TotalEnrollment": "50"
             },
             text: "Cornell University",
             "place_name": "Cornell University, Via Dandolo 19, Roma, Roma 00153, Italy",
             center: [12.46818, 41.88431],
             geometry: {
               type: "Point",
               coordinates: [12.46818, 41.88431]
             },
             context: [{
                 id: "postcode.15815264381815910",
                 text: "00153"
               },
               {
                 id: "place.9045806458813870",
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "region.3733",
                 short_code: null,
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "country.333",
                 short_code: "it",
                 wikidata: "Q38",
                 text: "Italy"
               }
             ]
           },
           {
             id: "address.1101303985",
             type: "Feature",
             place_type: ["address"],
             relevance: 1,
             properties: {
               landmark: true,
               tel: "",
               category: "college, education, school, university",
               address: "Via Lata 6",
               "place_name": "Penn State University",
               "image1": '<a href="https://stuckeman.psu.edu/arch/programs/rome" target="_blank"><img src="http://www.doriapamphilj.it/roma/it/wp-content/uploads/2009/08/palazzo-doria-pamphilj-galleria-museo-roma-cortile9.jpg"></a>',
               "image2": '<a href="https://assets.engr.psu.edu/AE/images/12-column/12-rome-study-abroad-architectural-engineering-penn-state.jpg" target="_blank"><img src="https://assets.engr.psu.edu/AE/images/12-column/12-rome-study-abroad-architectural-engineering-penn-state.jpg"></a>',
               "image3": '<a href="https://aarc.arts.psu.edu/filestore/3/2/5/6/2_19d49bbe3b0d326/32562pre_a0f237ed32e9f89.jpg?v=2018-08-09+11%3A05%3A11" target="_blank"><img src="https://aarc.arts.psu.edu/filestore/3/2/5/6/2_19d49bbe3b0d326/32562pre_a0f237ed32e9f89.jpg?v=2018-08-09+11%3A05%3A11"></a>',
               "image4": '<a href="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/22490217_123964774987170_5009378778661324104_n.jpg?_nc_cat=110&_nc_ht=scontent-atl3-1.xx&oh=5bbb5692e03c760577dcbeb8dfd778fc&oe=5CD1CA2B" target="_blank"><img src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/22490217_123964774987170_5009378778661324104_n.jpg?_nc_cat=110&_nc_ht=scontent-atl3-1.xx&oh=5bbb5692e03c760577dcbeb8dfd778fc&oe=5CD1CA2B"></a>',
               "image5": '<a href="https://assets.engr.psu.edu/AE/images/3-column/3-studyabroad-rome-architectural-engineering-penn-state.jpg" target="_blank"><img src="https://assets.engr.psu.edu/AE/images/3-column/3-studyabroad-rome-architectural-engineering-penn-state.jpg"></a>',
               "image6": '<a href="http://sip.la.psu.edu/images/reggioabroad2014" target="_blank"><img src="http://sip.la.psu.edu/images/reggioabroad2014"></a>',
               "link": '<a href="https://stuckeman.psu.edu/arch/programs/rome" target="_blank">website</a>',
               "TotalEnrollment": "50"
             },
             text: "via Lata",
             "place_name": "Penn State University, via Lata 6, 00186 Roma Roma, Italy",
             center: [12.481197, 41.89822],
             geometry: {
               type: "Point",
               coordinates: [12.481197, 41.89822]
             },
             address: "6",
             context: [{
                 id: "postcode.15469928861926560",
                 text: "00186"
               },
               {
                 id: "place.9045806458813870",
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "region.3733",
                 short_code: null,
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "country.333",
                 short_code: "it",
                 wikidata: "Q38",
                 text: "Italy"
               }
             ]
           },
           {
             id: "poi.14377028647623320",
             type: "Feature",
             place_type: ["poi"],
             relevance: 1,
             properties: {
               landmark: true,
               tel: "06 320 2808",
               category: "college, education, school, university",
               address: "Lungotevere Arnaldo da Brescia 15",
               text: "Temple University",
               "place_name": "Temple University",
               "image1": '<a href="https://rome.temple.edu/wp-content/uploads/2017/09/campus-temple-rome.jpg" target="_blank"><img src="https://rome.temple.edu/wp-content/uploads/2017/09/campus-temple-rome.jpg"></a>',
               "image2": '<a href="https://studyabroad.temple.edu/sites/studyabroad/files/styles/siteslide_mobile/public/program_slides/TU%20Rome%20Campus.jpg?itok=3w95WgIt&c=49be551c64d1c307410ae8d56e106892" target="_blank"><img src="https://studyabroad.temple.edu/sites/studyabroad/files/styles/siteslide_mobile/public/program_slides/TU%20Rome%20Campus.jpg?itok=3w95WgIt&c=49be551c64d1c307410ae8d56e106892"></a>',
               "image3": '<a href="http://2.bp.blogspot.com/-Yt7VoAV3rvw/UnF54rZ-oBI/AAAAAAAAGYE/EhmlHLaKT3E/s1600/archblog.jpg" target="_blank"><img src="https://studyabroad.temple.edu/sites/studyabroad/files/styles/siteslide_normal/public/page_slides/Kara%20Foran-students%20at%20work.jpg?itok=nvGwpnB1&c=ef36b3c741c23515796f5b15320a22cf"></a>',
               "image4": '<a href="http://2.bp.blogspot.com/-Yt7VoAV3rvw/UnF54rZ-oBI/AAAAAAAAGYE/EhmlHLaKT3E/s1600/archblog.jpg" target="_blank"><img src="http://2.bp.blogspot.com/-Yt7VoAV3rvw/UnF54rZ-oBI/AAAAAAAAGYE/EhmlHLaKT3E/s1600/archblog.jpg"></a>',
               "image5": '<a href="https://rome.temple.edu/wp-content/uploads/2017/09/temple-university-rome-gallery-history.jpg" target="_blank"><img src="https://rome.temple.edu/wp-content/uploads/2017/09/temple-university-rome-gallery-history.jpg"></a>',
               "image6": '<a href="https://studyabroad.temple.edu/sites/studyabroad/files/styles/siteslide_mobile/public/program_slides/Caroline_Lebranti_view%20of%20rome_F14.jpg?itok=Mw2X2cjq&c=be557bd771cccfd1aa307980a7d13342" target="_blank"><img src="https://studyabroad.temple.edu/sites/studyabroad/files/styles/siteslide_mobile/public/program_slides/Caroline_Lebranti_view%20of%20rome_F14.jpg?itok=Mw2X2cjq&c=be557bd771cccfd1aa307980a7d13342"></a>',
               "link": '<a href="https://studyabroad.temple.edu/rome" target="_blank">website</a>',
               "TotalEnrollment": "100"
             },
             text: "Temple University",
             "place_name": "Temple University",
             center: [12.471885, 41.914324],
             geometry: {
               type: "Point",
               coordinates: [12.471885, 41.914324]
             },
             context: [{
                 id: "postcode.14020245925380570",
                 text: "00196"
               },
               {
                 id: "place.9045806458813870",
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "region.3733",
                 short_code: null,
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "country.333",
                 short_code: "it",
                 wikidata: "Q38",
                 text: "Italy"
               }
             ]
           },
           {
             id: "poi.7574659668513080",
             type: "Feature",
             place_type: ["poi"],
             relevance: 0.9,
             properties: {
               landmark: true,
               tel: "06 3534 4799",
               category: "college, education, school, university",
               address: "Via Massimi 114",
               text: "Loyola University Chicago",
               "place_name": "Loyola University Chicago",
               "image1": '<a href="https://www.luc.edu/media/lucedu/rome/images/4-recreation.jpg" target="_blank"><img src="https://www.luc.edu/media/lucedu/rome/images/4-recreation.jpg"></a>',
               "image2": '<a href="https://www.luc.edu/rome/index.shtml" target="_blank"><img src="https://www.luc.edu/media/lucedu/rome/images/7-information-commons.jpg"></a>',
               "image3": '<a href="https://www.luc.edu/media/lucedu/rome/images/3-food-services.jpg" target="_blank"><img src="https://www.luc.edu/media/lucedu/rome/images/3-food-services.jpg"></a>',
               "image4": '<a href="https://www.luc.edu/media/lucedu/rome/calcio/calcio%20group-640x426.jpg" target="_blank"><img src="https://www.luc.edu/media/lucedu/rome/calcio/calcio%20group-640x426.jpg"></a>',
               "image5": '<a href="https://www.luc.edu/media/lucedu/rome/images/homepage/COLOSSEO-2017-1.jpg" target="_blank"><img src="https://www.luc.edu/media/lucedu/rome/images/homepage/COLOSSEO-2017-1.jpg"></a>',
               "image6": '<a href="https://www.luc.edu/media/lucedu/rome/DSC_0054-5127x3414.JPG" target="_blank"><img src="https://www.luc.edu/media/lucedu/rome/DSC_0054-5127x3414.JPG"></a>',
               "link": '<a href="https://www.luc.edu/rome/index.shtml" target="_blank">website</a>',
               "TotalEnrollment": "75"
             },
             text: "Loyola University Chicago",
             "place_name": "Loyola University Chicago",
             center: [12.437873, 41.929834],
             geometry: {
               type: "Point",
               coordinates: [12.437873, 41.929834]
             },
             context: [{
                 id: "postcode.7968738606504650",
                 text: "00136"
               },
               {
                 id: "place.9045806458813870",
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "region.3733",
                 short_code: null,
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "country.333",
                 short_code: "it",
                 wikidata: "Q38",
                 text: "Italy"
               }
             ]
           },
           {
             id: "poi.4915637706892710",
             type: "Feature",
             place_type: ["poi"],
             relevance: 1,
             properties: {
               landmark: true,
               wikidata: "Q6045800",
               tel: "06 9725 2724",
               category: "college, education, school, university",
               address: "Via Alessandro Algardi 19",
               text: "ICCS",
               "place_name": "Intercollegiate Center for Classical Studies (Duke)",
               "image1": '<a href="https://globaled.duke.edu/programs/rome_ICCS" target="_blank"><img src="http://iccsnews.com/_Media/dsc_0420-2.jpeg"></a>',
               "image2": '<a href="http://cdn.ipernity.com/133/58/35/24105835.65b48d9b.640.jpg?r2" target="_blank"><img src="http://cdn.ipernity.com/133/58/35/24105835.65b48d9b.640.jpg?r2"></a>',
               "image3": '<a href="http://iccsnews.com/_Media/centro-group-at-ziza-palace.jpeg" target="_blank"><img src="http://iccsnews.com/_Media/centro-group-at-ziza-palace.jpeg"></a>',
               "image4": '<a href="http://iccsnews.com/_Media/pastedgraphic.png" target="_blank"><img src="http://iccsnews.com/_Media/pastedgraphic.png"></a>',
               "image5": '<a href="http://iccsnews.com/_Media/iccs-at-capua.jpeg" target="_blank"><img src="http://iccsnews.com/_Media/iccs-at-capua.jpeg"></a>',
               "image6": '<a href="http://iccsnews.com/_Media/centro-group-in-naples-from.jpeg" target="_blank"><img src="http://iccsnews.com/_Media/centro-group-in-naples-from.jpeg"></a>',
               "link": '<a href="https://globaled.duke.edu/programs/rome_ICCS" target="_blank">website</a>',
               "TotalEnrollment": "50"
             },
             text: "ICCS",
             "place_name": "Intercollegiate Center for Classical Studies",
             center: [12.4578, 41.8853],
             geometry: {
               type: "Point",
               coordinates: [12.4578, 41.8853]
             },
             context: [{
                 id: "postcode.10595266237971670",
                 text: "00152"
               },
               {
                 id: "place.9045806458813870",
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "region.3733",
                 short_code: null,
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "country.333",
                 short_code: "it",
                 wikidata: "Q38",
                 text: "Italy"
               }
             ]
           },
           {
             id: "poi.6666666665934370",
             type: "Feature",
             place_type: ["poi"],
             relevance: 1,
             properties: {
               landmark: true,
               wikidata: "Q209344",
               tel: "06 494 0804",
               category: "college, education, landmark, school, university",
               address: "Via degli Apuli 8",
               text: "Sapienza University of Rome",
               "place_name": "Sapienza University of Rome",
               "image1": '<a href="js/data/Sapienza main gate.jpg" target="_blank"><img src="js/data/Sapienza main gate.jpg"></a>',
               "image2": '<a href="js/data/Sapienza aula magna.jpg" target="_blank"><img src="js/data/Sapienza aula magna.jpg"></a>',
               "image3": '<a href="js/data/Sapienza auditorium.jpg" target="_blank"><img src="js/data/Sapienza auditorium.jpg"></a>',
               "image4": '<a href="js/data/Sapienza political science dept.jpg" target="_blank"><img src="js/data/Sapienza political science dept.jpg"></a>',
               "image5": '<a href="https://www.skuola.net/news_foto/2017/test-ingresso-costi.jpg" target="_blank"><img src="https://www.skuola.net/news_foto/2017/test-ingresso-costi.jpg"></a>',
               "image6": '<a href="http://en.uniroma1.it/" target="_blank"><img src="http://www1.mat.uniroma1.it/ricerca/convegni/2007/MAQM2007/INDAM2007_files/Campus.jpg"></a>',
               "link": '<a href="http://en.uniroma1.it/" target="_blank">website</a>',
               "TotalEnrollment": "101047"
             },
             text: "Sapienza University of Rome",
             "place_name": "Sapienza University of Rome",
             center: [12.515833333333, 41.903333333333],
             geometry: {
               type: "Point",
               coordinates: [12.515833333333, 41.903333333333]
             },
             context: [{
                 id: "postcode.12698094745797020",
                 text: "00185"
               },
               {
                 id: "place.9045806458813870",
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "region.3733",
                 short_code: null,
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "country.333",
                 short_code: "it",
                 wikidata: "Q38",
                 text: "Italy"
               }
             ]
           },
           {
             "id": "poi.5276266227318380",
             "type": "Feature",
             "place_type": [
               "poi"
             ],
             "relevance": 1,
             "properties": {
               "landmark": true,
               "tel": "06 305 8338",
               "category": "college, education, school, university",
               "place_name": "Università Cattolica Del Sacro Cuore",
               "address": "Largo Francesco Vito 1",
               "image": '<a href="https://roma.unicatt.it/" target="_blank"><img src="http://www.ucscinternational.it/news/images/March_2016/IMG_1074QS.jpg"></a>',
               "image1": '<a href="data/SacredHeart 4.jpg" target="_blank"><img src="data/SacredHeart 4.jpg"></a>',
               "image2": '<a href="data/SacredHeart 23.jpg" target="_blank"><img src="data/SacredHeart 23.jpg"></a>',
               "image3": '<a href="data/SacredHeart 8.jpg" target="_blank"><img src="data/SacredHeart 8.jpg"></a>',
               "image4": '<a href="data/SacredHeart 20.jpg" target="_blank"><img src="data/SacredHeart 20.jpg"></a>',
               "image5": '<a href="data/SacredHeart 3.jpg" target="_blank"><img src="data/SacredHeart 3.jpg"></a>',
               "image6": '<a href="data/SacredHeart 22.jpg" target="_blank"><img src="data/SacredHeart 22.jpg"></a>',
               "link": '<a href="https://roma.unicatt.it/" target="_blank">website</a>',
               "TotalEnrollment": "6000"
             },
             "text": "Università Cattolica Del Sacro Cuore",
             "place_name": "Università Cattolica Del Sacro Cuore, Largo Francesco Vito 1, Roma, Roma 00168, Italy",
             "center": [
               12.426381,
               41.933114
             ],
             "geometry": {
               "type": "Point",
               "coordinates": [
                 12.426381,
                 41.933114
               ]
             },
             "context": [{
                 "id": "postcode.12474232870350340",
                 "text": "00168"
               },
               {
                 "id": "place.9045806458813870",
                 "wikidata": "Q220",
                 "text": "Roma"
               },
               {
                 "id": "region.3733",
                 "short_code": null,
                 "wikidata": "Q220",
                 "text": "Roma"
               },
               {
                 "id": "country.333",
                 "short_code": "it",
                 "wikidata": "Q38",
                 "text": "Italy"
               }
             ]
           },
           {
             id: "poi.1111288887618520",
             type: "Feature",
             place_type: ["poi"],
             relevance: 1,
             properties: {
               landmark: true,
               wikidata: "Q1122851",
               tel: "06 802081",
               category: "historic, historic site, landmark",
               address: "Viale Romania 32",
               text: "LUISS",
               "place_name": "LUISS",
               "image1": '<a href="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/35062704_1980055212005674_1495597497542770688_o.jpg?_nc_cat=104&_nc_ht=scontent-ort2-1.xx&oh=2f7c5838bf5a00be95be50b7264d50df&oe=5C8B1AC0" target="_blank"><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/35062704_1980055212005674_1495597497542770688_o.jpg?_nc_cat=104&_nc_ht=scontent-ort2-1.xx&oh=2f7c5838bf5a00be95be50b7264d50df&oe=5C8B1AC0"></a>',
               "image2": '<a href="https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/12030390_1070896302921574_547931134739146916_o.jpg?_nc_cat=106&_nc_ht=scontent-ort2-1.xx&oh=54c5cb5613de24221755f08b64f61cb5&oe=5C9C1A3C" target="_blank"><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/12030390_1070896302921574_547931134739146916_o.jpg?_nc_cat=106&_nc_ht=scontent-ort2-1.xx&oh=54c5cb5613de24221755f08b64f61cb5&oe=5C9C1A3C"></a>',
               "image3": '<a href="https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/10687991_866684256676114_4587806733321118458_o.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=c6c3b5a1cd694b3f2c9b46e970b9b05f&oe=5CD95486" target="_blank"><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/10687991_866684256676114_4587806733321118458_o.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=c6c3b5a1cd694b3f2c9b46e970b9b05f&oe=5CD95486"></a>',
               "image4": '<a href="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/30729563_1918825641461965_9061109980593127424_o.jpg?_nc_cat=109&_nc_ht=scontent-ort2-1.xx&oh=e6c7b799c46879167903a78bcaabe16f&oe=5C9F384D" target="_blank"><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/30729563_1918825641461965_9061109980593127424_o.jpg?_nc_cat=109&_nc_ht=scontent-ort2-1.xx&oh=e6c7b799c46879167903a78bcaabe16f&oe=5C9F384D"></a>',
               "image5": '<a href="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/18119085_1536024909742042_4000362819565364589_n.jpg?_nc_cat=108&_nc_ht=scontent-ort2-1.xx&oh=4cba8a8abab89f9bcea370cf427bc9dd&oe=5C90EEDD" target="_blank"><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/18119085_1536024909742042_4000362819565364589_n.jpg?_nc_cat=108&_nc_ht=scontent-ort2-1.xx&oh=4cba8a8abab89f9bcea370cf427bc9dd&oe=5C90EEDD"></a>',
               "image6": '<a href="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/32267436_1946165305394665_8816519023379349504_o.jpg?_nc_cat=103&_nc_ht=scontent-ort2-1.xx&oh=566308424e4b154d45b678be03b82dbc&oe=5CCC769D" target="_blank"><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/32267436_1946165305394665_8816519023379349504_o.jpg?_nc_cat=103&_nc_ht=scontent-ort2-1.xx&oh=566308424e4b154d45b678be03b82dbc&oe=5CCC769D"></a>',
               "link": '<a href="http://www.luiss.edu/" target="_blank">website</a>',
               "TotalEnrollment": "7682"
             },
             text: "LUISS",
             "place_name": "LUISS",
             center: [12.49305556, 41.92444444],
             geometry: {
               type: "Point",
               coordinates: [12.49305556, 41.92444444]
             },
             context: [{
                 id: "postcode.7914251250142700",
                 text: "00197"
               },
               {
                 id: "place.9045806458813870",
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "region.3733",
                 short_code: null,
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "country.333",
                 short_code: "it",
                 wikidata: "Q38",
                 text: "Italy"
               }
             ]
           },
           {
             id: "poi.10238236398472140",
             type: "Feature",
             place_type: ["poi"],
             relevance: 1,
             properties: {
               landmark: true,
               tel: "06 852221",
               category: "college, education, school, university",
               address: "Viale Pola 12",
               text: "LUISS",
               "place_name": "LUISS",
               "image1": '<a href="http://www.luiss.edu/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/LUISS_sede_centrale_Via_Pola.jpeg/1280px-LUISS_sede_centrale_Via_Pola.jpeg"></a>',
               "image2": '<a href="https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/14361300_1298757186802150_5921453888401173007_o.jpg?_nc_cat=106&_nc_ht=scontent-ort2-1.xx&oh=c2f015cae45607b0db3853dc9216928d&oe=5C8F37AE" target="_blank"><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/14361300_1298757186802150_5921453888401173007_o.jpg?_nc_cat=106&_nc_ht=scontent-ort2-1.xx&oh=c2f015cae45607b0db3853dc9216928d&oe=5C8F37AE"></a>',
               "image3": '<a href="js/data/LUISS viale pola main.jpg" target="_blank"><img src="js/data/LUISS viale pola main.jpg"></a>',
               "image4": '<a href="js/data/LUISS pola green archway.jpg" target="_blank"><img src="js/data/LUISS pola green archway.jpg"></a>',
               "image5": '<a href="http://www.luiss.it/sites/www.luiss.it/files/images/news/70/giornalismo.jpg" target="_blank"><img src="http://www.luiss.it/sites/www.luiss.it/files/images/news/70/giornalismo.jpg"></a>',
               "image6": '<a href="https://www.senato.it/application/xmanager/projects/leg17/attachments/foto_presidente/foto/000/000/879/20140403_ScuolaGiornalismoLuiss_7774_web.jpg" target="_blank"><img src="https://www.senato.it/application/xmanager/projects/leg17/attachments/foto_presidente/foto/000/000/879/20140403_ScuolaGiornalismoLuiss_7774_web.jpg"></a>',
               "link": '<a href="http://www.luiss.edu/" target="_blank">website</a>',
               "TotalEnrollment": "7682"
             },
             text: "LUISS",
             "place_name": "LUISS",
             center: [12.51191, 41.918199],
             geometry: {
               type: "Point",
               coordinates: [12.51191, 41.918199]
             },
             context: [{
                 id: "postcode.7401735241935250",
                 text: "00198"
               },
               {
                 id: "place.9045806458813870",
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "region.3733",
                 short_code: null,
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "country.333",
                 short_code: "it",
                 wikidata: "Q38",
                 text: "Italy"
               }
             ]
           },
           {
             id: "poi.666707222622610",
             type: "Feature",
             place_type: ["poi"],
             relevance: 0.6,
             properties: {
               landmark: true,
               wikidata: "Q1031803",
               tel: "06 72591",
               category: "college, education, school, university",
               address: "Via Orazio Raimondo 18",
               text: "University of Rome Tor Vergata",
               "place_name": "University of Rome Tor Vergata",
               "image1": '<a href="http://www.graduateguide.co.uk/images/uploads/3.jpg" target="_blank"><img src="http://www.graduateguide.co.uk/images/uploads/3.jpg" alt="Tor entrance"></a>',
               "image2": '<a href="http://en.uniroma2.it/wp-content/uploads/school-of-economics.png" target="_blank"><img src="http://en.uniroma2.it/wp-content/uploads/school-of-economics.png" alt="Tor Econ"></a>',
               "image3": '<a href="https://web.uniroma2.it/home/newlang/english" target="_blank"><img src="https://economia.uniroma2.it/plugins/slir/c2x1-w1140-/public/def/images/eebl2.jpg" alt="Tor lawn"></a>',
               "image4": '<a href="https://web.uniroma2.it/image/action/getImg/3616" target="_blank"><img src="https://web.uniroma2.it/image/action/getImg/3616" alt="Tor fountain"></a>',
               "image5": '<a href="http://www.graduateguide.co.uk/images/uploads/4444.jpg" target="_blank"><img src="http://www.graduateguide.co.uk/images/uploads/4444.jpg" alt="Tor lecture"></a>',
               "image6": '<a href="https://i.ytimg.com/vi/rtN_HGUhQZg/maxresdefault.jpg" target="_blank"><img src="https://i.ytimg.com/vi/rtN_HGUhQZg/maxresdefault.jpg" alt="Tor archway"></a>',
               "link": '<a href="https://web.uniroma2.it/home/newlang/english" target="_blank">website</a>',
               "TotalEnrollment": "31000"
             },
             text: "University of Rome Tor Vergata",
             "place_name": "University of Rome Tor Vergata",
             matching_text: "University of Rome II",
             center: [12.603333, 41.853611],
             geometry: {
               type: "Point",
               coordinates: [12.603333, 41.853611]
             },
             context: [{
                 id: "postcode.17684708974545090",
                 text: "00133"
               },
               {
                 id: "place.9045806458813870",
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "region.3733",
                 short_code: null,
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "country.333",
                 short_code: "it",
                 wikidata: "Q38",
                 text: "Italy"
               }
             ]
           },
           {
             id: "poi.15817972503138190",
             type: "Feature",
             place_type: ["poi"],
             relevance: 1,
             properties: {
               landmark: true,
               tel: "06 5733 2100",
               category: "college, education, school, university",
               address: "Via Ostiense 159",
               text: "Roma Tre University",
               "place_name": "Roma Tre University",
               "image1": '<a href="http://www.uniroma3.it/en/" target="_blank"><img src="http://mbe.uniroma3.it/images/mbe/roma_tre_giu.jpg"></a>',
               "image2": '<a href="http://iaps2018.com/wp-content/uploads/2014/08/department-of-education_roma3university.jpg" target="_blank"><img src="http://iaps2018.com/wp-content/uploads/2014/08/department-of-education_roma3university.jpg"></a>',
               "image3": '<a href="http://studylaw.uniroma3.it/assets/images/studenti.jpg" target="_blank"><img src="http://studylaw.uniroma3.it/assets/images/studenti.jpg"></a>',
               "image4": '<a href="http://studylaw.uniroma3.it/Public/foto/cover/f80197ca-b5fd-427f-acee-9f20e6422270.jpg" target="_blank"><img src="http://studylaw.uniroma3.it/Public/foto/cover/f80197ca-b5fd-427f-acee-9f20e6422270.jpg"></a>',
               "image5": '<a href="http://anagrafe.iccu.sbn.it/abi/photo/IT/RM/1611/IT-RM1611Salalettura.JPG" target="_blank"><img src="js/data/Roma Tre humanities library.jpg" alt="Biblioteca di area umanistica"></a>',
               "image6": '<a href="http://buromilan.com/content/uploads/2016/11/rettorato-roma-tre-render-950x562.png" target="_blank"><img src="http://buromilan.com/content/uploads/2016/11/rettorato-roma-tre-render-950x562.png" alt="Roma Tre archictecture rendering"></a>',
               "link": '<a href="http://www.uniroma3.it/en/" target="_blank">website</a>',
               "TotalEnrollment": "40000"
             },
             text: "Roma Tre University",
             "place_name": "Roma Tre University",
             center: [12.479089, 41.86252],
             geometry: {
               type: "Point",
               coordinates: [12.479089, 41.86252]
             },
             context: [{
                 id: "postcode.7402337349488590",
                 text: "00154"
               },
               {
                 id: "place.9045806458813870",
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "region.3733",
                 short_code: null,
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "country.333",
                 short_code: "it",
                 wikidata: "Q38",
                 text: "Italy"
               }
             ]
           },
           {
             id: "address.1905283917",
             type: "Feature",
             place_type: ["address"],
             relevance: 1,
             properties: {
               landmark: true,
               wikidata: "Q1454044",
               tel: "06 6813 4109",
               category: "college, education, school, university",
               address: "Via Pompeo Magno 22",
               text: "LUMSA",
               "place_name": "LUMSA",
               "image1": '<a href="https://www.lumsa.it/en" target="_blank"><img src="https://www.lumsa.it/sites/default/files/Pompeo_Magno-14052018.jpg"></a>',
               "image2": '<a href="https://www.topuniversities.com/sites/default/files/styles/media_slider_728x410/public/lumsa-photo-7_3.jpg" target="_blank"><img src="https://www.topuniversities.com/sites/default/files/styles/media_slider_728x410/public/lumsa-photo-7_3.jpg"></a>',
               "image3": '<a href="https://betteregulation.lumsa.it/sites/default/files/radaelli%201.jpg" target="_blank"><img src="https://betteregulation.lumsa.it/sites/default/files/radaelli%201.jpg"></a>',
               "image4": '<a href="https://www.topuniversities.com/sites/default/files/styles/media_slider_728x410/public/lumsa-photo-3_3.jpg" target="_blank"><img src="https://www.topuniversities.com/sites/default/files/styles/media_slider_728x410/public/lumsa-photo-3_3.jpg"></a>',
               "image5": '<a href="https://www.lumsa.it/sites/default/files/IMG_20160427_114602.jpg" target="_blank"><img src="https://www.lumsa.it/sites/default/files/IMG_20160427_114602.jpg"></a>',
               "image6": '<a href="https://www.lumsa.it/sites/default/files/IMG_20160427_115228.jpg" target="_blank"><img src="https://www.lumsa.it/sites/default/files/IMG_20160427_115228.jpg"></a>',
               "link": '<a href="https://www.lumsa.it/en" target="_blank">website</a>',
               "TotalEnrollment": "5000"
             },
             text: "LUMSA",
             "place_name": "LUMSA",
             center: [12.467502, 41.910127],
             geometry: {
               type: "Point",
               coordinates: [12.467502, 41.910127]
             },
             address: "22",
             context: [{
                 id: "postcode.12135619990400930",
                 text: "00192"
               },
               {
                 id: "place.9045806458813870",
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "region.3733",
                 short_code: null,
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "country.333",
                 short_code: "it",
                 wikidata: "Q38",
                 text: "Italy"
               }
             ]
           },
           {
             id: "poi.12578380616413600",
             type: "Feature",
             place_type: ["poi"],
             relevance: 1,
             properties: {
               landmark: true,
               wikidata: "Q1454044",
               tel: "06 6813 4109",
               category: "college, education, school, university",
               address: "Via della Traspontina 21",
               text: "LUMSA",
               "place_name": "LUMSA",
               "image1": '<a href="https://www.lumsa.it/en" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Sede_traspontina.jpg/220px-Sede_traspontina.jpg"></a>',
               "image2": '<a href="https://www.lumsa.it/sites/default/files/186A4841_a.jpg" target="_blank"><img src="https://www.lumsa.it/sites/default/files/186A4841_a.jpg"></a>',
               "image3": '<a href="https://www.lumsa.it/sites/default/files/foto-lumsa-christmas-night-roma-2018-slide.jpg?1544796004" target="_blank"><img src="https://www.lumsa.it/sites/default/files/foto-lumsa-christmas-night-roma-2018-slide.jpg?1544796004"></a>',
               "image4": '<a href="https://www.lumsa.it/sites/default/files/iscrizione-laurea-magistrale-universita-lumsa-2018_int.jpg" target="_blank"><img src="https://www.lumsa.it/sites/default/files/iscrizione-laurea-magistrale-universita-lumsa-2018_int.jpg"></a>',
               "image5": '<a href="https://www.topuniversities.com/sites/default/files/styles/media_slider_728x410/public/lumsa-photo-11_3.jpg" target="_blank"><img src="https://www.topuniversities.com/sites/default/files/styles/media_slider_728x410/public/lumsa-photo-11_3.jpg"></a>',
               "image6": '<a href="https://www.lumsa.it/sites/default/files/campus_lumsa.jpg" target="_blank"><img src="https://www.lumsa.it/sites/default/files/campus_lumsa.jpg"></a>',
               "link": '<a href="https://www.lumsa.it/en" target="_blank">website</a>',
               "TotalEnrollment": "5000"
             },
             text: "LUMSA",
             "place_name": "LUMSA",
             center: [12.462891, 41.90308],
             geometry: {
               type: "Point",
               coordinates: [12.462891, 41.90308]
             },
             context: [{
                 id: "postcode.10360309340175850",
                 text: "00193"
               },
               {
                 id: "place.9045806458813870",
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "region.3733",
                 short_code: null,
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "country.333",
                 short_code: "it",
                 wikidata: "Q38",
                 text: "Italy"
               }
             ]
           },
           {
             id: "address.379087466",
             type: "Feature",
             place_type: ["address"],
             relevance: 0.8,
             properties: {
               landmark: true,
               wikidata: "",
               tel: "",
               category: "college, education, school, university",
               address: "Via Plinio, 44",
               text: "Marconi University",
               "place_name": "Marconi University",
               "image1": '<a href="https://www.miuniversity.edu/web/app/uploads/2017/10/eng_2.jpg" target="_blank"><img src="https://www.miuniversity.edu/web/app/uploads/2017/10/eng_2.jpg"></a>',
               "image2": '<a href="https://www.gmuonline.org/images/slides/slide1.jpg" target="_blank"><img src="https://www.gmuonline.org/images/slides/slide1.jpg"></a>',
               "image3": '<a href="https://digitaluniversities.guideassociation.org/wp-content/uploads/issue_25-1_07.jpg" target="_blank"><img src="https://digitaluniversities.guideassociation.org/wp-content/uploads/issue_25-1_07.jpg"></a>',
               "image4": '<a href="https://i.ytimg.com/vi/8Gp1zAj41Aw/maxresdefault.jpg" target="_blank"><img src="https://i.ytimg.com/vi/8Gp1zAj41Aw/maxresdefault.jpg"></a>',
               "image5": '<a href="http://www.unimarconi.gr/images/uni_eng_newimage/jumbo_university.jpg" target="_blank"><img src="http://www.unimarconi.gr/images/uni_eng_newimage/jumbo_university.jpg"></a>',
               "image6": '<a href="https://www.gmuonline.org/images/sedi/Sede_Studios_1.jpg" target="_blank"><img src="https://www.gmuonline.org/images/sedi/Sede_Studios_1.jpg"></a>',
               "link": '<a href="https://www.gmuonline.org/en/" target="_blank">website</a>',
               "TotalEnrollment": "15386"
             },
             text: "Marconi University, via Plinio",
             "place_name": "Marconi University, via Plinio 44, 00193 Roma Roma, Italy",
             center: [12.464566, 41.907202],
             geometry: {
               type: "Point",
               coordinates: [12.464566, 41.907202]
             },
             address: "44",
             context: [{
                 id: "postcode.10360309340175850",
                 text: "00193"
               },
               {
                 id: "place.9045806458813870",
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "region.3733",
                 short_code: null,
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "country.333",
                 short_code: "it",
                 wikidata: "Q38",
                 text: "Italy"
               }
             ]
           },
           {
             id: "poi.18650623696553410",
             type: "Feature",
             place_type: ["poi"],
             relevance: 1,
             properties: {
               landmark: true,
               wikidata: "Q26319",
               tel: "06 7030 7312",
               category: "college, education, school, university",
               address: "Via Don Carlo Gnocchi 3",
               text: "Università degli Studi Niccolò Cusano",
               "place_name": "Università degli Studi Niccolò Cusano",
               "image1": '<a href="https://www.unicusano.it/images/universita-copiafinale.jpg" target="_blank"><img src="https://www.unicusano.it/images/universita-copiafinale.jpg"></a>',
               "image2": '<a href="https://www.unicusano.it/images/Riconoscimento-creditifinale.jpg" target="_blank"><img src="https://www.unicusano.it/images/Riconoscimento-creditifinale.jpg"></a>',
               "image3": '<a href="js/data/unicusano lecture hall.jpg" target="_blank"><img src="js/data/unicusano lecture hall.jpg"></a>',
               "image4": '<a href="https://www.unicusano.it/images/universita/campus-universitario-roma/IMG_4341.JPG" target="_blank"><img src="https://www.unicusano.it/images/universita/campus-universitario-roma/IMG_4341.JPG"></a>',
               "image5": '<a href="https://www.unicusano.it/blog/wp-content/uploads/2017/08/bibliografia-tesi-di-laurea.jpg" target="_blank"><img src="https://www.unicusano.it/blog/wp-content/uploads/2017/08/bibliografia-tesi-di-laurea.jpg"></a>',
               "image6": '<a href="https://www.unicusano.it/images/universita/campus-universitario-roma/IMG_4761d.jpg" target="_blank"><img src="https://www.unicusano.it/images/universita/campus-universitario-roma/IMG_4761d.jpg"></a>',
               "link": '<a href="https://www.unicusano.it/en/" target="_blank">website</a>',
               "TotalEnrollment": "11510"
             },
             text: "Università degli Studi Niccolò Cusano",
             "place_name": "Università degli Studi Niccolò Cusano, Via Don Carlo Gnocchi 3, Roma, Roma 00166, Italy",
             center: [12.393253, 41.911848],
             geometry: {
               type: "Point",
               coordinates: [12.393253, 41.911848]
             },
             context: [{
                 id: "postcode.10536782072474720",
                 text: "00166"
               },
               {
                 id: "place.9045806458813870",
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "region.3733",
                 short_code: null,
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "country.333",
                 short_code: "it",
                 wikidata: "Q38",
                 text: "Italy"
               }
             ]
           },
           {
             id: "poi.9401334337898370",
             type: "Feature",
             place_type: ["poi"],
             relevance: 1,
             properties: {
               landmark: true,
               tel: "06 225411",
               category: "college, education, school, university",
               address: "Via Alvaro del Portillo 21",
               text: "Università Campus Bio-Medico di Roma",
               "place_name": "Università Campus Bio-Medico di Roma",
               "image1": '<a href="http://www.unicampus.it/eng/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Polo_della_Ricerca%2C_Universit%C3%A0_Campus_Bio-Medico_di_Roma%2C_novembre_2013.JPG"></a>',
               "image2": '<a href="https://www.hospitaly.it/wp-content/uploads/2017/05/recepcion-1024x1000.jpg" target="_blank"><img src="https://www.hospitaly.it/wp-content/uploads/2017/05/recepcion-1024x1000.jpg"></a>',
               "image3": '<a href="http://www.unicampus.it/eng/images/Lifehand_MEDIUM.jpg" target="_blank"><img src="http://www.unicampus.it/eng/images/Lifehand_MEDIUM.jpg"></a>',
               "image4": '<a href="js/data/unicampus biomedico lifehand2.jpg" target="_blank"><img src="js/data/unicampus biomedico lifehand2.jpg"></a>',
               "image5": '<a href="http://www.unicampus.it/eng/images/slide/UCBM_Diagnostica_Immagini_Medium_01.jpg" target="_blank"><img src="http://www.unicampus.it/eng/images/slide/UCBM_Diagnostica_Immagini_Medium_01.jpg"></a>',
               "image6": '<a href="http://www.unicampus.it/eng/images/Risorse-e-uffici/Servizio-formazione-post-lauream/UCBM_Post_Lauream_generale_SHORT.jpeg" target="_blank"><img src="http://www.unicampus.it/eng/images/Risorse-e-uffici/Servizio-formazione-post-lauream/UCBM_Post_Lauream_generale_SHORT.jpeg"></a>',
               "link": '<a href="http://www.unicampus.it/eng/" target="_blank">website</a>',
               "TotalEnrollment": "1691"
             },
             text: "Università Campus Bio-Medico di Roma",
             "place_name": "Università Campus Bio-Medico di Roma, Via Alvaro del Portillo 21, Roma, Roma 00128, Italy",
             center: [12.47006, 41.767169],
             geometry: {
               type: "Point",
               coordinates: [12.47006, 41.767169]
             },
             context: [{
                 id: "postcode.9622658762821580",
                 text: "00128"
               },
               {
                 id: "place.9045806458813870",
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "region.3733",
                 short_code: null,
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "country.333",
                 short_code: "it",
                 wikidata: "Q38",
                 text: "Italy"
               }
             ]
           },
           {
             id: "poi.11794463249554520",
             type: "Feature",
             place_type: ["poi"],
             relevance: 1,
             properties: {
               landmark: true,
               tel: "06 3250 3304",
               category: "college, education, school, university",
               address: "Piazza Lauro de Bosis 6",
               text: "I.u.s.m.",
               "place_name": "Foro Italico (Roma IV)",
               "image1": '<a href="https://www.erasmuspeople.com/wp-content/uploads/2017/05/Universit%C3%A0-degli-Studi-di-Roma-Foro-Italico-picture-Erasmus-in-Rome-1024x655.jpg" target="_blank"><img src="https://www.erasmuspeople.com/wp-content/uploads/2017/05/Universit%C3%A0-degli-Studi-di-Roma-Foro-Italico-picture-Erasmus-in-Rome-1024x655.jpg"></a>',
               "image2": '<a href="js/data/Foro Italico 2.JPG" target="_blank"><img src="js/data/Foro Italico 2.JPG"></a>',
               "image3": '<a href="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/37723780_2127869054152791_3772922319048015872_o.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=0555c5649ba4bf2d5d59ae5f5319a917&oe=5CD8117C" target="_blank"><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/37723780_2127869054152791_3772922319048015872_o.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=0555c5649ba4bf2d5d59ae5f5319a917&oe=5CD8117C"></a>',
               "image4": '<a href="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/37789502_2127739687499061_7219711287226269696_o.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=7a1a717cfe3db81c137549082f4354bf&oe=5C91013B" target="_blank"><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/37789502_2127739687499061_7219711287226269696_o.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=7a1a717cfe3db81c137549082f4354bf&oe=5C91013B"></a>',
               "image5": '<a href="https://www.vignaclarablog.it/wp-content/uploads/2018/07/studenti.jpg" target="_blank"><img src="https://www.vignaclarablog.it/wp-content/uploads/2018/07/studenti.jpg"></a>',
               "image6": '<a href="js/data/Foro Italico 1.JPG" target="_blank"><img src="js/data/Foro Italico 1.JPG"></a>',
               "link": '<a href="http://www.uniroma4.it/" target="_blank">website</a>',
               "TotalEnrollment": "2241"
             },
             text: "I.u.s.m.",
             "place_name": "Foro Italico, Piazza Lauro de Bosis 6, Roma, Roma 00135, Italy",
             center: [12.458972, 41.931625],
             geometry: {
               type: "Point",
               coordinates: [12.458972, 41.931625]
             },
             context: [{
                 id: "postcode.12800609146535220",
                 text: "00135"
               },
               {
                 id: "place.9045806458813870",
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "region.3733",
                 short_code: null,
                 wikidata: "Q220",
                 text: "Roma"
               },
               {
                 id: "country.333",
                 short_code: "it",
                 wikidata: "Q38",
                 text: "Italy"
               }
             ]
           },
           {
             "id": "address.1000341573",
             "type": "Feature",
             "place_type": [
               "address"
             ],
             "relevance": 0.8,
             "properties": {
               landmark: true,
               tel: "+39 06 9453 9142",
               category: "college, education, school, university",
               "place_name": "The Pantheon Institute",
               address: "Piazza Della Maddalena 52",
               "image1": '<a href="https://res-3.cloudinary.com/abroad101/image/upload/c_limit,h_800,w_800/v1540977166/Program_12666_Photo__6267.jpg" target="_blank"><img src="https://res-3.cloudinary.com/abroad101/image/upload/c_limit,h_800,w_800/v1540977166/Program_12666_Photo__6267.jpg"></a>',
               "image2": '<a href="https://www.umass.edu/larp/sites/default/files/nolli_centro7.jpg" target="_blank"><img src="https://www.umass.edu/larp/sites/default/files/nolli_centro7.jpg"></a>',
               "image3": '<a href="http://3.bp.blogspot.com/-PkTHUhOyV3w/TykliF67kQI/AAAAAAAAAqc/xSYx65W2K3U/s1600/P1130174%2Bcopia.JPG" target="_blank"><img src="http://3.bp.blogspot.com/-PkTHUhOyV3w/TykliF67kQI/AAAAAAAAAqc/xSYx65W2K3U/s1600/P1130174%2Bcopia.JPG"></a>',
               "image4": '<a href="http://www.pantheon-institute.com/nbpantheon/wp-content/uploads/2014/09/nb_calder2.jpg" target="_blank"><img src="http://www.pantheon-institute.com/nbpantheon/wp-content/uploads/2014/09/nb_calder2.jpg"></a>',
               "image5": '<a href="http://4.bp.blogspot.com/-BALBm1ziXQU/TagMQzGSdqI/AAAAAAAAAic/x1WQSflD_FA/s1600/007.JPG" target="_blank"><img src="http://4.bp.blogspot.com/-BALBm1ziXQU/TagMQzGSdqI/AAAAAAAAAic/x1WQSflD_FA/s1600/007.JPG"></a>',
               "image6": '<a href="http://www.pantheon-institute.com/nbpantheon/wp-content/uploads/2014/09/6540203881_750_piazza-della-rotonda-and-pantheonCROP.jpg" target="_blank"><img src="http://www.pantheon-institute.com/nbpantheon/wp-content/uploads/2014/09/6540203881_750_piazza-della-rotonda-and-pantheonCROP.jpg"></a>',
               "link": '<a href="http://www.pantheon-institute.com/nbpantheon/" target="_blank">website</a>',
               "TotalEnrollment": "50"
             },
             "text": "The Pantheon Institute, Piazza Della Maddalena",
             "place_name": "The Pantheon Institute, Piazza Della Maddalena 52, 00186 Roma Roma, Italy",
             "center": [
               12.476686,
               41.900035
             ],
             "geometry": {
               "type": "Point",
               "coordinates": [
                 12.476686,
                 41.900035
               ],
               "interpolated": true,
               "omitted": true
             },
             "address": "52",
             "context": [{
                 "id": "postcode.15469928861926560",
                 "text": "00186"
               },
               {
                 "id": "place.9045806458813870",
                 "wikidata": "Q220",
                 "text": "Roma"
               },
               {
                 "id": "region.3733",
                 "short_code": null,
                 "wikidata": "Q220",
                 "text": "Roma"
               },
               {
                 "id": "country.333",
                 "short_code": "it",
                 "wikidata": "Q38",
                 "text": "Italy"
               }
             ]
           }
         ];



    dbo.collection("universities").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        console.log(res);
        db.close();
    });

    // How to insert records if do NOT exist -- upsert must be true
    //If you want to insert one document, if it is not found, 
    //you can use the upsert option in the update() method:
    //      collection.update(_query_, _update_, { upsert: true });
    //https://docs.mongodb.com/manual/reference/method/db.collection.update/#upsert-behavior


});
