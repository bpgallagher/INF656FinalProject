var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    //var dbo = db.db("chicago");
    var dbo = db.db("chicago");
    var myobj = [
        {
            "id":"poi.1571958030778",
            "type":"Feature",
            "place_type":[
               "poi"
            ],
            "relevance":1,
            "properties":{
               "landmark":"true",
               "ranking":3,
               "place_name":"Loyola University Chicago",
               "address":"1032 W Sheridan Rd",
               "category":"college, university",
               "maki":"college",
               "image":"<a href='https://www.luc.edu/undergrad/media/prospective-working/images/home/home-campus-aerial-mobile.jpg' target='_blank'><img src='https://www.luc.edu/undergrad/media/prospective-working/images/home/home-campus-aerial-mobile.jpg'></a>",
               "link":"<a href='https://www.luc.edu/' target='_blank'>website</a>"
            },
            "text":"Loyola University Chicago - Lake Shore Campus",
            "place_name":"Loyola University Chicago - Lake Shore Campus, 1032 W Sheridan Rd, Chicago, Illinois 60660, United States",
            "center":[
               -87.656028,
               41.998188
            ],
            "geometry":{
               "coordinates":[
                  -87.656028,
                  41.998188
               ],
               "type":"Point"
            },
            "context":[
               {
                  "id":"neighborhood.298511",
                  "text":"Rogers Park"
               },
               {
                  "id":"postcode.18135530614223630",
                  "text":"60660"
               },
               {
                  "id":"place.1924128844701850",
                  "wikidata":"Q1297",
                  "text":"Chicago"
               },
               {
                  "id":"region.3290978600358810",
                  "short_code":"US-IL",
                  "wikidata":"Q1204",
                  "text":"Illinois"
               },
               {
                  "id":"country.9053006287256050",
                  "short_code":"us",
                  "wikidata":"Q30",
                  "text":"United States"
               }
            ]
         },
         {
            "id":"poi.1700807050081",
            "type":"Feature",
            "place_type":[
               "poi"
            ],
            "relevance":1,
            "properties":{
               "ranking":2,
               "address":"633 Clark St",
               "wikidata":"Q309350",
               "category":"college, university",
               "maki":"college",
               "landmark":"True",
               "place_name":"Northwestern University",
               "image":"<a href='https://www.library.northwestern.edu/images/libraries-collections/DeeringReadingRoom1.jpg' target='_blank'><img src='https://www.library.northwestern.edu/images/libraries-collections/DeeringReadingRoom1.jpg'></a>",
               "link":"<a href='https://www.northwestern.edu' target='_blank'>website</a>"
            },
            "text":"Northwestern University",
            "place_name":"Northwestern University, 633 Clark St, Evanston, Illinois 60201, United States",
            "center":[
               -87.6752305,
               42.0530945
            ],
            "geometry":{
               "coordinates":[
                  -87.6752305,
                  42.0530945
               ],
               "type":"Point"
            },
            "context":[
               {
                  "id":"neighborhood.287068",
                  "text":"Northwestern"
               },
               {
                  "id":"postcode.6994029310438720",
                  "text":"60201"
               },
               {
                  "id":"place.8314603939537550",
                  "wikidata":"Q462799",
                  "text":"Evanston"
               },
               {
                  "id":"region.3290978600358810",
                  "short_code":"US-IL",
                  "wikidata":"Q1204",
                  "text":"Illinois"
               },
               {
                  "id":"country.9053006287256050",
                  "short_code":"us",
                  "wikidata":"Q30",
                  "text":"United States"
               }
            ]
         },
         {
            "id":"poi.1443109012597",
            "type":"Feature",
            "place_type":[
               "poi"
            ],
            "relevance":1,
            "properties":{
               "landmark":"True",
               "ranking":1,
               "place_name":"University of Chicago",
               "address":"5801 S Ellis Ave",
               "category":"college, university",
               "maki":"college",
               "image":"<a href='https://collegeadmissions.uchicago.edu/files/styles/regular_photo_paragraph/public/images/paragraphs-photo/harper_0.jpg?itok=d_uWAl6b' target='_blank'><img src='https://collegeadmissions.uchicago.edu/files/styles/regular_photo_paragraph/public/images/paragraphs-photo/harper_0.jpg?itok=d_uWAl6b'></a>",
               "link":"<a href='https://www.uchicago.edu' target='_blank'>website</a>"
            },
            "text":"University of Chicago",
            "place_name":"University of Chicago, 5801 S Ellis Ave, Chicago, IL 60637",
            "center":[
               -87.599648,
               41.789592
            ],
            "geometry":{
               "coordinates":[
                  -87.599648,
                  41.789592
               ],
               "type":"Point"
            },
            "context":[
               {
                  "id":"neighborhood.296845",
                  "text":"Streeterville"
               },
               {
                  "id":"postcode.10677509705849340",
                  "text":"60611"
               },
               {
                  "id":"place.1924128844701850",
                  "wikidata":"Q1297",
                  "text":"Chicago"
               },
               {
                  "id":"region.3290978600358810",
                  "short_code":"US-IL",
                  "wikidata":"Q1204",
                  "text":"Illinois"
               },
               {
                  "id":"country.9053006287256050",
                  "short_code":"us",
                  "wikidata":"Q30",
                  "text":"United States"
               }
            ]
         },
         {
            "id":"poi.120259085020",
            "type":"Feature",
            "place_type":[
               "poi"
            ],
            "relevance":0.3333333333333333,
            "properties":{
               "landmark":"True",
               "ranking":7,
               "wikidata":"Q6246903",
               "place_name":"John Marshall Law School",
               "address":"315 S Plymouth Ct",
               "category":"college, university",
               "maki":"college",
               "image":"<a href='https://jmls.uic.edu/_homepagefiles/img/headerimage.jpg' target='_blank'><img src='https://jmls.uic.edu/_homepagefiles/img/headerimage.jpghall-Law-School-592x420.jpg'></a>",
               "link":"<a href='https://jmls.uic.edu' target='_blank'>website</a>"
            },
            "text":"John Marshall Law School",
            "place_name":"John Marshall Law School, 315 S Plymouth Ct, Chicago, Illinois 60604, United States",
            "center":[
               -87.628241,
               41.8780115
            ],
            "geometry":{
               "type":"Point",
               "coordinates":[
                  -87.628241,
                  41.8780115
               ]
            },
            "context":[
               {
                  "id":"neighborhood.298853",
                  "text":"The Loop"
               },
               {
                  "id":"postcode.3417728072498100",
                  "text":"60604"
               },
               {
                  "id":"place.1924128844701850",
                  "wikidata":"Q1297",
                  "text":"Chicago"
               },
               {
                  "id":"region.3290978600358810",
                  "short_code":"US-IL",
                  "wikidata":"Q1204",
                  "text":"Illinois"
               },
               {
                  "id":"country.9053006287256050",
                  "short_code":"us",
                  "wikidata":"Q30",
                  "text":"United States"
               }
            ]
         },
         {
            "id":"poi.25769804689",
            "type":"Feature",
            "place_type":[
               "poi"
            ],
            "relevance":0.3333333333333333,
            "properties":{
               "landmark":"True",
               "wikidata":"Q4683288",
               "ranking":8,
               "place_name":"Adler University",
               "address":"17 N Dearborn St",
               "category":"college, university",
               "maki":"college",
               "image":"<a href='https://www.adler.edu/resources/category/2/7/7/images/library-880x340.jpg' target='_blank'><img src='https://www.adler.edu/resources/category/2/7/7/images/library-880x340.jpg'></a>",
               "link":"<a href='https://www.adler.edu' target='_blank'>website</a>"
            },
            "text":"Adler University",
            "place_name":"Adler University, 17 N Dearborn St, Chicago, Illinois 60602, United States",
            "center":[
               -87.629111,
               41.882425999999995
            ],
            "geometry":{
               "coordinates":[
                  -87.629111,
                  41.882425999999995
               ],
               "type":"Point"
            },
            "context":[
               {
                  "id":"neighborhood.298853",
                  "text":"The Loop"
               },
               {
                  "id":"postcode.18641675017935990",
                  "text":"60602"
               },
               {
                  "id":"place.1924128844701850",
                  "wikidata":"Q1297",
                  "text":"Chicago"
               },
               {
                  "id":"region.3290978600358810",
                  "short_code":"US-IL",
                  "wikidata":"Q1204",
                  "text":"Illinois"
               },
               {
                  "id":"country.9053006287256050",
                  "short_code":"us",
                  "wikidata":"Q30",
                  "text":"United States"
               }
            ]
         },
         {
            "id":"poi.1614907704147",
            "type":"Feature",
            "place_type":[
               "poi"
            ],
            "relevance":0.3333333333333333,
            "properties":{
               "landmark":"True",
               "ranking":8,
               "wikidata":"Q5180022",
               "place_name":"Coyne College",
               "address":"230 W Monroe St",
               "category":"trade school, college",
               "image":"<a href='http://www.boothhansen.com/wp-content/uploads/2016/01/Coynecollege_A-1.jpg' target='_blank'><img src='http://www.boothhansen.com/wp-content/uploads/2016/01/Coynecollege_A-1.jpg'></a>",
               "link":"<a href='https://www.coynecollege.edu' target='_blank'>website</a>"
            },
            "text":"Coyne College",
            "place_name":"Coyne College, 230 W Monroe St, Chicago, Illinois 60661, United States",
            "center":[
               -87.64210750000001,
               41.8843095
            ],
            "geometry":{
               "coordinates":[
                  -87.64210750000001,
                  41.8843095
               ],
               "type":"Point"
            },
            "context":[
               {
                  "id":"neighborhood.298504",
                  "text":"West Loop Gate"
               },
               {
                  "id":"postcode.4397350836702060",
                  "text":"60661"
               },
               {
                  "id":"place.1924128844701850",
                  "wikidata":"Q1297",
                  "text":"Chicago"
               },
               {
                  "id":"region.3290978600358810",
                  "short_code":"US-IL",
                  "wikidata":"Q1204",
                  "text":"Illinois"
               },
               {
                  "id":"country.9053006287256050",
                  "short_code":"us",
                  "wikidata":"Q30",
                  "text":"United States"
               }
            ]
         },
         {
            "id":"poi.1589137899842",
            "type":"Feature",
            "place_type":[
               "poi"
            ],
            "relevance":0.3333333333333333,
            "properties":{
               "landmark":"True",
               "ranking":8,
               "place_name":"Tribeca Flashpoint College",
               "address":"28 N Clark St",
               "category":"college, university",
               "maki":"college",
               "image":"<a href='https://georgejewell.com/wp-content/uploads/2018/12/Jewell-Events-Catering-Venue-Tribeca-Flashpoint-Academy.jpg' target='_blank'><img src='https://georgejewell.com/wp-content/uploads/2018/12/Jewell-Events-Catering-Venue-Tribeca-Flashpoint-Academy.jpg'></a>",
               "link":"<a href='https://flashpoint.columbiacollege.edu/' target='_blank'>website</a>"
            },
            "text":"Tribeca Flashpoint College",
            "place_name":"Tribeca Flashpoint College, 28 N Clark St, Chicago, Illinois 60602, United States",
            "center":[
               -87.631117,
               41.883221
            ],
            "geometry":{
               "coordinates":[
                  -87.631117,
                  41.883221
               ],
               "type":"Point"
            },
            "context":[
               {
                  "id":"neighborhood.298853",
                  "text":"The Loop"
               },
               {
                  "id":"postcode.18641675017935990",
                  "text":"60602"
               },
               {
                  "id":"place.1924128844701850",
                  "wikidata":"Q1297",
                  "text":"Chicago"
               },
               {
                  "id":"region.3290978600358810",
                  "short_code":"US-IL",
                  "wikidata":"Q1204",
                  "text":"Illinois"
               },
               {
                  "id":"country.9053006287256050",
                  "short_code":"us",
                  "wikidata":"Q30",
                  "text":"United States"
               }
            ]
         },
         {
            "id":"poi.1554778161163",
            "type":"Feature",
            "place_type":[
               "poi"
            ],
            "relevance":0.3333333333333333,
            "properties":{
               "landmark":"True",
               "ranking":4,
               "place_name":"DePaul University",
               "address":"1 E Jackson Blvd",
               "category":"college, university",
               "maki":"college",
               "image":"<a href='https://www.depaul.edu/admission-and-aid/visit-depaul/PublishingImages/FJG-DEPAUL-1761-1200x800.jpg' target='_blank'><img src='https://www.depaul.edu/admission-and-aid/visit-depaul/PublishingImages/FJG-DEPAUL-1761-1200x800.jpg'></a>",
               "link":"<a href='https://www.depaul.edu' target='_blank'>website</a>"
            },
            "text":"DePaul University",
            "place_name":"DePaul University, 1 E Jackson Blvd, Chicago, Illinois 60604, United States",
            "center":[
               -87.6278375,
               41.87939900000001
            ],
            "geometry":{
               "coordinates":[
                  -87.6278375,
                  41.87939900000001
               ],
               "type":"Point"
            },
            "context":[
               {
                  "id":"neighborhood.298853",
                  "text":"The Loop"
               },
               {
                  "id":"postcode.3417728072498100",
                  "text":"60604"
               },
               {
                  "id":"place.1924128844701850",
                  "wikidata":"Q1297",
                  "text":"Chicago"
               },
               {
                  "id":"region.3290978600358810",
                  "short_code":"US-IL",
                  "wikidata":"Q1204",
                  "text":"Illinois"
               },
               {
                  "id":"country.9053006287256050",
                  "short_code":"us",
                  "wikidata":"Q30",
                  "text":"United States"
               }
            ]
         },
         {
            "id":"poi.1391569405391",
            "type":"Feature",
            "place_type":[
               "poi"
            ],
            "relevance":0.9772727272727273,
            "properties":{
               "landmark":"True",
               "ranking":5,
               "place_name":"University of Illinois at Chicago",
               "address":"750 S Halsted St",
               "category":"college, university",
               "maki":"college",
               "image":"<a href='https://www.uic.edu/_assets/a502964eedd0bd05f626095a6bba513c.jpg' target='_blank'><img src='https://www.uic.edu/_assets/a502964eedd0bd05f626095a6bba513c.jpg'></a>",
               "link":"<a href='https://www.uic.edu' target='_blank'>website</a>"
            },
            "text":"University of Illinois at Chicago (UIC)",
            "place_name":"University of Illinois at Chicago (UIC), 750 S Halsted St, Chicago, Illinois 60607, United States",
            "center":[
               -87.650264,
               41.873436
            ],
            "geometry":{
               "coordinates":[
                  -87.650264,
                  41.873436
               ],
               "type":"Point"
            },
            "context":[
               {
                  "id":"neighborhood.298974",
                  "text":"University Village - Little Italy"
               },
               {
                  "id":"postcode.11396174988413020",
                  "text":"60607"
               },
               {
                  "id":"place.1924128844701850",
                  "wikidata":"Q1297",
                  "text":"Chicago"
               },
               {
                  "id":"region.3290978600358810",
                  "short_code":"US-IL",
                  "wikidata":"Q1204",
                  "text":"Illinois"
               },
               {
                  "id":"country.9053006287256050",
                  "short_code":"us",
                  "wikidata":"Q30",
                  "text":"United States"
               }
            ]
         },
         {
            "id":"poi.274877907419",
            "type":"Feature",
            "place_type":[
               "poi"
            ],
            "relevance":1,
            "properties":{
               "wikidata":"Q2124886",
               "ranking":8,
               "place_name":"Roosevelt University",
               "address":"430 S Michigan Ave",
               "landmark":"True",
               "category":"college, university",
               "maki":"college",
               "image":"<a href='https://cpb-us-e1.wpmucdn.com/blogs.roosevelt.edu/dist/3/270/files/2017/09/RU-Slide-1-11te3xg-300x172.jpg' target='_blank'><img src='https://cpb-us-e1.wpmucdn.com/blogs.roosevelt.edu/dist/3/270/files/2017/09/RU-Slide-1-11te3xg-300x172.jpg'></a>",
               "link":"<a href='https://www.roosevelt.edu' target='_blank'>website</a>"
            },
            "text":"Roosevelt University",
            "place_name":"Roosevelt University, 430 S Michigan Ave, Chicago, Illinois 60605, United States",
            "center":[
               -87.6251795,
               41.87616
            ],
            "geometry":{
               "coordinates":[
                  -87.6251795,
                  41.87616
               ],
               "type":"Point"
            },
            "context":[
               {
                  "id":"neighborhood.298853",
                  "text":"The Loop"
               },
               {
                  "id":"postcode.17384199267741760",
                  "text":"60605"
               },
               {
                  "id":"place.1924128844701850",
                  "wikidata":"Q1297",
                  "text":"Chicago"
               },
               {
                  "id":"region.3290978600358810",
                  "short_code":"US-IL",
                  "wikidata":"Q1204",
                  "text":"Illinois"
               },
               {
                  "id":"country.9053006287256050",
                  "short_code":"us",
                  "wikidata":"Q30",
                  "text":"United States"
               }
            ]
         },
         {
            "id":"poi.1219770713538",
            "type":"Feature",
            "place_type":[
               "poi"
            ],
            "relevance":1,
            "properties":{
               "wikidata":"Q915866",
               "ranking":8,
               "landmark":"True",
               "category":"college, university",
               "place_name":"Chicago State University",
               "address":"9500 S King Dr",
               "maki":"college",
               "image":"<a href='https://www.csu.edu/admissions/images/DSC_0054.JPG' target='_blank'><img src='https://www.csu.edu/admissions/images/DSC_0054.JPG'></a>",
               "link":"<a href='https://www.csu.edu' target='_blank'>website</a>"
            },
            "text":"Chicago State University",
            "place_name":"Chicago State University, 9500 S King Dr, Chicago, Illinois 60628, United States",
            "center":[
               -87.609691,
               41.718251499999994
            ],
            "geometry":{
               "coordinates":[
                  -87.609691,
                  41.718251499999994
               ],
               "type":"Point"
            },
            "context":[
               {
                  "id":"neighborhood.296847",
                  "text":"Rosemoor"
               },
               {
                  "id":"postcode.12591952237139340",
                  "text":"60628"
               },
               {
                  "id":"place.1924128844701850",
                  "wikidata":"Q1297",
                  "text":"Chicago"
               },
               {
                  "id":"region.3290978600358810",
                  "short_code":"US-IL",
                  "wikidata":"Q1204",
                  "text":"Illinois"
               },
               {
                  "id":"country.9053006287256050",
                  "short_code":"us",
                  "wikidata":"Q30",
                  "text":"United States"
               }
            ]
         },
         {
            "id":"poi.94489280955",
            "type":"Feature",
            "place_type":[
               "poi"
            ],
            "relevance":1,
            "properties":{
               "landmark":"True",
               "ranking":8,
               "place_name":"Northeastern Illinois University",
               "address":"5500 N Saint Louis Ave",
               "category":"college, university",
               "maki":"college",
               "image":"<a href='https://www.neiu.edu/sites/neiu.edu/files/styles/feature_image/public/about/generic-page-feature-images/2016/11/28/neiu_main_campus_0.jpg?itok=zkfbJolU' target='_blank'><img src='https://www.neiu.edu/sites/neiu.edu/files/styles/feature_image/public/about/generic-page-feature-images/2016/11/28/neiu_main_campus_0.jpg?itok=zkfbJolU'></a>",
               "link":"<a href='' target='_blank'>website</a>"
            },
            "text":"Northeastern Illinois University",
            "place_name":"Northeastern Illinois University, 5500 N Saint Louis Ave, Chicago, Illinois 60625, United States",
            "center":[
               -87.717649,
               41.981603
            ],
            "geometry":{
               "coordinates":[
                  -87.717649,
                  41.981603
               ],
               "type":"Point"
            },
            "context":[
               {
                  "id":"neighborhood.298775",
                  "text":"North Park"
               },
               {
                  "id":"postcode.15480893007594010",
                  "text":"60625"
               },
               {
                  "id":"place.1924128844701850",
                  "wikidata":"Q1297",
                  "text":"Chicago"
               },
               {
                  "id":"region.3290978600358810",
                  "short_code":"US-IL",
                  "wikidata":"Q1204",
                  "text":"Illinois"
               },
               {
                  "id":"country.9053006287256050",
                  "short_code":"us",
                  "wikidata":"Q30",
                  "text":"United States"
               }
            ]
         },
         {
            "id":"poi.1425929142495",
            "type":"Feature",
            "place_type":[
               "poi"
            ],
            "relevance":1,
            "properties":{
               "landmark":"True",
               "ranking":6,
               "wikidata":"Q5366768",
               "place_name":"Elmhurst College",
               "address":"190 S Prospect Ave",
               "category":"college, university",
               "maki":"college",
               "image":"<a href='https://www.elmhurst.edu/wp-content/uploads/2018/09/news-rankings.jpg' target='_blank'><img src='https://www.elmhurst.edu/wp-content/uploads/2018/09/news-rankings.jpg'></a>",
               "link":"<a href='https://www.elmhurst.edu' target='_blank'>website</a>"
            },
            "text":"Elmhurst College",
            "place_name":"Elmhurst College, 190 S Prospect Ave, Elmhurst, Illinois 60126, United States",
            "center":[
               -87.94594000000001,
               41.897585
            ],
            "geometry":{
               "coordinates":[
                  -87.94594000000001,
                  41.897585
               ],
               "type":"Point"
            },
            "context":[
               {
                  "id":"neighborhood.287059",
                  "text":"Elmhurst City Centre"
               },
               {
                  "id":"postcode.14277643230845500",
                  "text":"60126"
               },
               {
                  "id":"place.10834168015713210",
                  "wikidata":"Q579542",
                  "text":"Elmhurst"
               },
               {
                  "id":"region.3290978600358810",
                  "short_code":"US-IL",
                  "wikidata":"Q1204",
                  "text":"Illinois"
               },
               {
                  "id":"country.9053006287256050",
                  "short_code":"us",
                  "wikidata":"Q30",
                  "text":"United States"
               }
            ]
         },
         {
            "id":"poi.1228360647922",
            "type":"Feature",
            "place_type":[
               "poi"
            ],
            "relevance":1,
            "properties":{
               "wikidata":"Q659706",
               "ranking":8,
               "place_name":"Illinois Institute of Technology",
               "address":"10 W 35th St",
               "landmark":"True",
               "category":"college, university",
               "maki":"college",
               "image":"<a href='https://web.iit.edu/sites/web/files/departments/campus-life/IIT_Image_v3.jpg' target='_blank'><img src='https://web.iit.edu/sites/web/files/departments/campus-life/IIT_Image_v3.jpg'></a>",
               "link":"<a href='https://web.iit.edu' target='_blank'>website</a>"
            },
            "text":"Illinois Institute of Technology",
            "place_name":"Illinois Institute of Technology, 99 E 34th St., Chicago, Illinois 60616, United States",
            "center":[
               -87.627396,
               41.8348405
            ],
            "geometry":{
               "coordinates":[
                  -87.627396,
                  41.8348405
               ],
               "type":"Point"
            },
            "context":[
               {
                  "id":"neighborhood.295697",
                  "text":"Bronzeville"
               },
               {
                  "id":"postcode.11036815072354260",
                  "text":"60616"
               },
               {
                  "id":"place.1924128844701850",
                  "wikidata":"Q1297",
                  "text":"Chicago"
               },
               {
                  "id":"region.3290978600358810",
                  "short_code":"US-IL",
                  "wikidata":"Q1204",
                  "text":"Illinois"
               },
               {
                  "id":"country.9053006287256050",
                  "short_code":"us",
                  "wikidata":"Q30",
                  "text":"United States"
               }
            ]
         },
         {
            "id":"poi.944892805446",
            "type":"Feature",
            "place_type":[
               "poi"
            ],
            "relevance":1,
            "properties":{
               "ranking":8,
               "landmark":"True",
               "wikidata":"Q14687525",
               "place_name":"Harold Washington College",
               "address":"30 E Lake St",
               "category":"college, university",
               "maki":"college",
               "image":"<a href='http://www.ccc.edu/colleges/washington/departments/PublishingImages/HLC/HWC-HLC-Web-Banner[1].jpg' target='_blank'><img src='http://www.ccc.edu/colleges/washington/departments/PublishingImages/HLC/HWC-HLC-Web-Banner[1].jpg'></a>",
               "link":"<a href='' target='_blank'>website</a>"
            },
            "text":"Harold Washington College",
            "place_name":"Harold Washington College, 30 E Lake St, Chicago, Illinois 60601, United States",
            "center":[
               -87.626834,
               41.886112999999995
            ],
            "geometry":{
               "coordinates":[
                  -87.626834,
                  41.886112999999995
               ],
               "type":"Point"
            },
            "context":[
               {
                  "id":"neighborhood.298853",
                  "text":"The Loop"
               },
               {
                  "id":"postcode.9094874002548200",
                  "text":"60601"
               },
               {
                  "id":"place.1924128844701850",
                  "wikidata":"Q1297",
                  "text":"Chicago"
               },
               {
                  "id":"region.3290978600358810",
                  "short_code":"US-IL",
                  "wikidata":"Q1204",
                  "text":"Illinois"
               },
               {
                  "id":"country.9053006287256050",
                  "short_code":"us",
                  "wikidata":"Q30",
                  "text":"United States"
               }
            ]
         },
         {
            "id":"poi.1829656072655",
            "type":"Feature",
            "place_type":[
               "poi"
            ],
            "relevance":1,
            "properties":{
               "ranking":8,
               "landmark":"True",
               "place_name":"North Central College",
               "address":"999 E Chicago Ave",
               "category":"business, service, building",
               "image":"<a href='https://www.northcentralcollege.edu/sites/default/files/styles/teaser_large_2x/public/spring-campus.jpg' target='_blank'><img src='https://www.northcentralcollege.edu/sites/default/files/styles/teaser_large_2x/public/spring-campus.jpg'></a>",
               "link":"<a href='https://www.northcentralcollege.edu' target='_blank'>website</a>"
            },
            "text":"North Central College",
            "place_name":"North Central College Theatre Shop, 999 E Chicago Ave, Naperville, Illinois 60540, United States",
            "center":[
               -88.107422,
               41.779435
            ],
            "geometry":{
               "coordinates":[
                  -88.107422,
                  41.779435
               ],
               "type":"Point"
            },
            "context":[
               {
                  "id":"neighborhood.286739",
                  "text":"Green Trails"
               },
               {
                  "id":"postcode.12542243895745770",
                  "text":"60540"
               },
               {
                  "id":"place.4074713976939640",
                  "wikidata":"Q243007",
                  "text":"Naperville"
               },
               {
                  "id":"region.3290978600358810",
                  "short_code":"US-IL",
                  "wikidata":"Q1204",
                  "text":"Illinois"
               },
               {
                  "id":"country.9053006287256050",
                  "short_code":"us",
                  "wikidata":"Q30",
                  "text":"United States"
               }
            ]
         },
         {
            "id":"poi.1992864831618",
            "type":"Feature",
            "place_type":[
               "poi"
            ],
            "relevance":1,
            "properties":{
               "ranking":8,
               "landmark":"True",
               "place_name":"Robert Morris University",
               "address":"401 S State St",
               "category":"college, university, building",
               "image":"<a href='http://library.rmu.edu/_/rsrc/1463412306401/home/library-photo-spring.jpg' target='_blank'><img src='http://library.rmu.edu/_/rsrc/1463412306401/home/library-photo-spring.jpg'></a>",
               "link":"<a href='https:robertmorris.edu' target='_blank'>website</a>"
            },
            "text":"Robert Morris University",
            "place_name":"Robert Morris University, 401 S State St, Chicago, Illinois 60605, United States",
            "center":[
               -87.627216,
               41.876178
            ],
            "geometry":{
               "coordinates":[
                  -87.627216,
                  41.876178
               ],
               "type":"Point"
            },
            "context":[
               {
                  "id":"neighborhood.298853",
                  "text":"The Loop"
               },
               {
                  "id":"postcode.17384199267741760",
                  "text":"60605"
               },
               {
                  "id":"place.1924128844701850",
                  "wikidata":"Q1297",
                  "text":"Chicago"
               },
               {
                  "id":"region.3290978600358810",
                  "short_code":"US-IL",
                  "wikidata":"Q1204",
                  "text":"Illinois"
               },
               {
                  "id":"country.9053006287256050",
                  "short_code":"us",
                  "wikidata":"Q30",
                  "text":"United States"
               }
            ]
         },
         {
            "id":"poi.1589137900896",
            "type":"Feature",
            "place_type":[
               "poi"
            ],
            "relevance":1,
            "properties":{
               "ranking":6,
               "landmark":"True",
               "place_name":"Saint Xavier University",
               "address":"3700 W 103rd St",
               "category":"college, university",
               "maki":"college",
               "image":"<a href='http://annualreport.sxu.edu/images/header/SXU/fall2011_1544.jpg' target='_blank'><img src='http://annualreport.sxu.edu/images/header/SXU/fall2011_1544.jpg'></a>",
               "link":"<a href='https://www.sxu.edu' target='_blank'>website</a>"
            },
            "text":"Saint Xavier University",
            "place_name":"Saint Xavier University, 3700 W 103rd St, Chicago, Illinois 60655, United States",
            "center":[
               -87.714368,
               41.70953
            ],
            "geometry":{
               "coordinates":[
                  -87.714368,
                  41.70953
               ],
               "type":"Point"
            },
            "context":[
               {
                  "id":"neighborhood.298755",
                  "text":"Tallys Corner"
               },
               {
                  "id":"postcode.15066228038458380",
                  "text":"60655"
               },
               {
                  "id":"place.1924128844701850",
                  "wikidata":"Q1297",
                  "text":"Chicago"
               },
               {
                  "id":"region.3290978600358810",
                  "short_code":"US-IL",
                  "wikidata":"Q1204",
                  "text":"Illinois"
               },
               {
                  "id":"country.9053006287256050",
                  "short_code":"us",
                  "wikidata":"Q30",
                  "text":"United States"
               }
            ]
         },
         {
            "id":"poi.1649267443209",
            "type":"Feature",
            "place_type":[
               "poi"
            ],
            "relevance":1,
            "properties":{
               "landmark":"True",
               "ranking":7,
               "wikidata":"Q7237976",
               "place_name":"Prairie State College",
               "address":"202 S Halsted St",
               "category":"college, university",
               "maki":"college",
               "image":"<a href='https://prairiestate.edu/_ldp/.private_ldp/a52903/production/master/84ce1a67-af43-4b12-a7f3-a7bcf514ac73.jpg' target='_blank'><img src='https://prairiestate.edu/_ldp/.private_ldp/a52903/production/master/84ce1a67-af43-4b12-a7f3-a7bcf514ac73.jpg'></a>",
               "link":"<a href='https://www.prairiestate.edu' target='_blank'>website</a>"
            },
            "text":"Prairie State College",
            "place_name":"Prairie State College, 202 S Halsted St, Chicago Heights, Illinois 60411, United States",
            "center":[
               -87.6384335,
               41.526613999999995
            ],
            "geometry":{
               "coordinates":[
                  -87.6384335,
                  41.526613999999995
               ],
               "type":"Point"
            },
            "context":[
               {
                  "id":"neighborhood.281626",
                  "text":"Graymoor"
               },
               {
                  "id":"postcode.8191362902629610",
                  "text":"60411"
               },
               {
                  "id":"place.6664083375459650",
                  "wikidata":"Q578277",
                  "text":"Chicago Heights"
               },
               {
                  "id":"region.3290978600358810",
                  "short_code":"US-IL",
                  "wikidata":"Q1204",
                  "text":"Illinois"
               },
               {
                  "id":"country.9053006287256050",
                  "short_code":"us",
                  "wikidata":"Q30",
                  "text":"United States"
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
