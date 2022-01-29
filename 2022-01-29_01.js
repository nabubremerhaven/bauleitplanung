/* MOUSEOUT-BILDER */  

geestland000_img = "https://image.jimcdn.com/app/cms/image/transf/dimension=667x10000:format=png/path/seb50942c1bfad30c/image/i1fb819ea6b0c91e9/version/1574531862/image.png"
bremerhaven000_img = "https://image.jimcdn.com/app/cms/image/transf/dimension=667x10000:format=png/path/seb50942c1bfad30c/image/ica6bdb5c83fcbbc7/version/1574533772/image.png"
loxstedt000_img = "https://image.jimcdn.com/app/cms/image/transf/dimension=667x10000:format=png/path/seb50942c1bfad30c/image/i941375db3b91d294/version/1574533822/image.png"
schiffdorf000_img = "https://image.jimcdn.com/app/cms/image/transf/dimension=667x10000:format=png/path/seb50942c1bfad30c/image/if92d79fda50614c4/version/1574533840/image.png"
wnk000_img = "https://image.jimcdn.com/app/cms/image/transf/dimension=667x10000:format=png/path/seb50942c1bfad30c/image/ibc27431c0bf3b46c/version/1574533861/image.png"

/* MOUSEOVER-BILDER */  

geestland001_img = "https://image.jimcdn.com/app/cms/image/transf/dimension=667x10000:format=png/path/seb50942c1bfad30c/image/id85aca96cd08cdd0/version/1574531835/image.png"
geestland002_img = "https://image.jimcdn.com/app/cms/image/transf/dimension=667x10000:format=png/path/seb50942c1bfad30c/image/ida553c4b96b4ee39/version/1574531847/image.png"
geestland003_img = "https://image.jimcdn.com/app/cms/image/transf/dimension=667x10000:format=png/path/seb50942c1bfad30c/image/ida553c4b96b4ee39/version/1574531847/image.png"

function out_geestland() {
    document.getElementById("img_geestland").src = geestland000_img;}
function over_geestland001() {
        document.getElementById("img_geestland").src = geestland001_img;}
function over_geestland002() {
        document.getElementById("img_geestland").src = geestland002_img;}
function over_geestland003() {
        document.getElementById("img_geestland").src = geestland003_img;}
        
/* DEFINIEREN DER BPLAN-INFORMATIONEN */    

geestland013 = ["geestland013", 'Sievern: Bebauungsplan Nr. 229 "Am Sohlacker"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/sievern-am-sohlacker", "01/2022"]
geestland012 = ["geestland012", 'Langen: Bebauungsplan Nr. 218 "Schule Friedrichsruh"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/langen-schule-friedrichsruh", "01/2022"]
geestland011 = ["geestland011", 'Hymendorf: Bebauungsplan Nr. 231 "Erweiterung Westlich Hymendorf-Dorf', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/hymendorf-erweiterung-westlich-hymendorf-dorf", "01/2022"]
geestland010 = ["geestland010", 'Debstedt: Bebauungsplan Nr. 36 "An der Autobahn", 4. Änderung', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/debstedt-an-der-autobahn", "01/2022"] 

geestland009 = ["geestland009", 'Langen: Bebauungsplan Nr. 232 "Ortsmitte West"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/langen-ortsmitte-west", "08/2021"]
geestland008 = ["geestland008", 'Ringstedt: Bebauungsplan Nr. 8 "Keilstraße", 2. Änderung', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/ringstedt-keilstraße-2-änderung", "02/2021"]
geestland007 = ["geestland007", 'Holßel: Bebauungsplan Nr. 228 "Am Königsweg II"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/holßel-am-königsweg-ii", "02/2021"]
geestland006 = ["geestland006", 'Sievern: Bebauungsplan Nr. 76 "Campingplatz Sievern", 1. Änderung', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/sievern-campingplatz", "11/2020"]
geestland005 = ["geestland005", 'Lintig: Bebauungsplan Nr. 227 "Erweiterung Hasenweg"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/lintig-erweiterung-hasenweg", "10/2020"]
geestland004 = ["geestland004", 'Bederkesa: Bebauungsplan Nr. 12 "Erholungszentrum", 12. Änderung (Energiewerk Bederkesa)', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/geestland-bederkesa-energiewerk", "08/2020"]
geestland003 = ["geestland003", 'Neuenwalde: Bebauungsplan Nr. 226 "Schafdamm"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/neuenwalde-schafdamm/", "07/2020"]
geestland002 = ["geestland002", 'Debstedt: Bebauungsplan Nr. 224 "Östlich Malerwinkel"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/debstedt-östlich-malerwinkel/", "07/2020"]
geestland001 = ["geestland001", 'Debstedt: "Rosenburg", 2. Änderung des Teil-Flächennutzungsplans', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/geestland-teil-fnp-langen-2-änderung/", "05/2019"]

bremerhaven002 = ["bremerhaven001", 'Bebauungsplan Nr. 495 "Eingang Geestemünde und Werftquartier"',"https://www.nabu-bremerhaven.de/themen/bauleitplanung/bremerhaven-eingang-geestemünde-und-werftquartier/","08/2020"]
bremerhaven003 = ["bremerhaven002", 'Bebauungsplan Nr. 497 "Erhaltungssatzung für das Goethequartier einschließlich der Hafenstraße"',"https://www.nabu-bremerhaven.de/themen/bauleitplanung/bremerhaven-erhaltungssatzung-goethequartier/","08/2020"]
bremerhaven001 = ["bremerhaven006", 'Bebauungsplan Nr. 494 "Green Economy-Gebiet Lune Delta"',"https://www.nabu-bremerhaven.de/themen/bauleitplanung/bremerhaven-green-economy-gebiet-lune-delta/","05/2021"]
bremerhaven004 = ["bremerhaven003", 'Bebauungsplan Nr. 491 "Hackfahrel"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/bremerhaven-hackfahrel/", "12/2020"]
bremerhaven005 = ["bremerhaven004", 'Bebauungsplan Nr. 493 "Poggenbruchstraße / Weg 89"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/bremerhaven-poggenbruchstraße-weg-89/", "01/2021"]
bremerhaven006 = ["bremerhaven005", 'Bebauungsplan Nr. 469 "Entwicklungsgebiet Rudloffstraße"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/bremerhaven-entwicklungsgebiet-rudloffstraße/", "01/2021"]
bremerhaven007 = ["bremerhaven007", 'Bebauungsplan Nr. 468 "Kreuzackerstraße"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/bremerhaven-kreuzackerstraße/", "09/2021"]
bremerhaven008 = ["bremerhaven008", 'Bebauungsplan Nr. 481 "Wilhelm-Leuschner-Straße"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/bremerhaven-wilhelmleuschner-straße", "01/2022"]

loxstedt001 = ["loxstedt001", 'Loxstedt: Bebauungsplan Nr. 52 "Claus-Giesschen-Straße II"',"https://www.nabu-bremerhaven.de/themen/bauleitplanung/loxstedt-claus-giesschen-straße-ii/","01/2021"]
loxstedt002 = ["loxstedt002", 'Loxstedt: Bebauungsplan Nr. 53 "Schwaaner Straße"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/loxstedt-schwaaner-straße/","01/2021"]
loxstedt003 = ["loxstedt003", 'Bexhövede: Bebauungsplan Nr. 21 "Kiebuschstraße"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/loxstedt-kiebuschstraße/","05/2021"]
loxstedt004 = ["loxstedt004", 'Loxstedt: Bebauungsplan Nr. 12 "Parkanlage", 4. Änderung', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/loxstedt-parkanlage", "08/2021"]

schiffdorf012 = ["schiffdorf012", 'Spaden: Bebauungsplan Nr. 110 "Wehdener Straße 34"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/spaden-wehdener-straße-34", "08/2021"]
schiffdorf011 = ["schiffdorf011", 'Wehdel: Bebauungsplan Nr. 106 "Kita an der Wesermünder Straße"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/wehdel-kita-an-der-wesermünder-straße", "08/2021"]
schiffdorf010 = ["schiffdorf010", 'Schiffdorf: Bebauungsplan Nr. 101 "Östlich Postbrookstraße"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/schiffdorf-östlich-postbrookstraße", "08/2021"]
schiffdorf009 = ["schiffdorf009", 'Spaden: Bebauungsplan Nr. 41 "Sportanlage Spaden", 2. Änderung', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/spaden-sportanlage-spaden", "08/2021"]
schiffdorf008 = ["schiffdorf008", 'Spaden: Bebauungsplan Nr. 104 "Kita am Meersenweg"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/spaden-kita-am-meersenweg", "02/2021"]
schiffdorf007 = ["schiffdorf007", 'Spaden: Bebauungsplan Nr. 10 "Meersenfeld", 4. Änderung', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/spaden-meersenfeld", "11/2020"]
schiffdorf006 = ["schiffdorf006", 'Wehdel: Einbeziehungssatzung "Hainkamp"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/wehdel-hainkamp", "10/2020"]
schiffdorf005 = ["schiffdorf005", 'Sellstedt: Bebauungsplan Nr. 105 "Kreuzstraße"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/sellstedt-kreuzstraße", "10/2020"]
schiffdorf004 = ["schiffdorf004", 'Schiffdorf: Bebauungsplan Nr. 102 "Feuerwehrhaus Schiffdorf"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/schiffdorf-feuerwehrhaus", "08/2020"]
schiffdorf003 = ["schiffdorf003", 'Wehden: Bebauungsplan Nr. 98 "Am Kirchweg"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/wehden-am-kirchweg", "08/2020"]
schiffdorf002 = ["schiffdorf002", 'Wehdel: Bebauungsplan Nr. 96 "Moorteilsweg"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/wehdel-moorteilsweg", "07/2020"]
schiffdorf001 = ["schiffdorf001", 'Spaden: Bebauungsplan Nr. 103 "Betreutes Wohnen am Schierholzweg"',"https://www.nabu-bremerhaven.de/themen/bauleitplanung/spaden-betreutes-wohnen-am-schierholzweg/","05/2020"]

wnk004 = ["wnk004", 'Dorum: Bebauungsplan Nr. 50 "Wohnanlage Poststraße"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/dorum-wohnanlage-poststraße/", "05/2021"]
wnk003 = ["wnk003", 'Wremen: Bebauungsplan Nr. 31 "Wohngebiet Strandstraße"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/wremen-wohngebiet-strandstraße/", "02/2021"]
wnk002 = ["wnk002", 'Mulsum: Bebauungsplan Nr. 6 "Am Wremer Landweg"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/mulsum-am-wremer-landweg/", "07/2020"]
wnk001 = ["wnk001", 'Wremen: Bebauungsplan Nr. 32 "Wohnanlage Marschenhof"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/wremen-wohnanlage-marschenhof/", "05/2020"]

bplaene = [geestland001, geestland002, geestland003, geestland004, geestland005, geestland006, geestland007, geestland008, geestland009, geestland010, geestland011, geestland012, geestland013, bremerhaven001, bremerhaven002, bremerhaven003, bremerhaven004, bremerhaven005, bremerhaven006, bremerhaven007, loxstedt001, loxstedt002, loxstedt003, loxstedt004, schiffdorf001, schiffdorf002, schiffdorf003, schiffdorf004, schiffdorf005, schiffdorf006, schiffdorf007, schiffdorf008, schiffdorf009, schiffdorf010, schiffdorf011, schiffdorf012, wnk001, wnk002, wnk003, wnk004, wnk004]

/* PLATZIEREN DER BPLAN-INFORMATIONEN */    

for (let i of bplaene) {
    for (j = 0, len = i.length; j < len; j++) {document.getElementById(i[0]).getElementsByTagName("a")[0].innerText=i[1];
                                               document.getElementById(i[0]).getElementsByTagName("a")[0].href=i[2];
                                              document.getElementById(i[0]).getElementsByTagName("p")[0].innerHTML=i[3];}}
