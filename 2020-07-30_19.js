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

geestland004 = ["geestland004", 'Bederkesa: Bebauungsplan Nr. 12 "Erholungszentrum", 12. Änderung', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/geestland-bederkesa-energiewerk", "08/2020"]
geestland003 = ["geestland003", 'Neuenwalde: Bebauungsplan Nr. 226 "Schafdamm"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/neuenwalde-schafdamm/", "07/2020"]
geestland002 = ["geestland002", 'Debstedt: Bebauungsplan Nr. 224 "Östlich Malerwinkel"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/debstedt-östlich-malerwinkel/", "07/2020"]
geestland001 = ["geestland001", 'Debstedt: "Rosenburg", 2. Änderung des Teil-Flächennutzungsplans', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/geestland-teil-fnp-langen-2-änderung/", "05/2019"]

bremerhaven002 = ["bremerhaven002", 'Bebauungsplan Nr. 495 "Eingang Geestemünde und Werftquartier"',"https://www.nabu-bremerhaven.de/themen/bauleitplanung/bremerhaven-eingang-geestemünde-und-werftquartier/","08/2020"]
bremerhaven003 = ["bremerhaven003", 'Bebauungsplan Nr. 497 "Erhaltungssatzung für das Goethequartier einschließlich der Hafenstraße"',"https://www.nabu-bremerhaven.de/themen/bauleitplanung/bremerhaven-erhaltungssatzung-goethequartier/","08/2020"]
bremerhaven001 = ["bremerhaven001", 'Bebauungsplan Nr. 494 "Green Economy-Gebiet Lune Delta"',"https://www.nabu-bremerhaven.de/themen/bauleitplanung/bremerhaven-green-economy-gebiet-lune-delta/","02/2020"]

loxstedt001 = ["loxstedt001", "derzeit keine Stellungnahmen","","",""]

schiffdorf004 = ["schiffdorf004", 'Schiffdorf: Bebauungsplan Nr. 102 "Feuerwehrhaus Schiffdorf"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/schiffdorf-feuerwehrhaus", "08/2020"]
schiffdorf003 = ["schiffdorf003", 'Wehden: Bebauungsplan Nr. 98 "Am Kirchweg"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/wehden-am-kirchweg", "08/2020"]
schiffdorf002 = ["schiffdorf002", 'Wehdel: Bebauungsplan Nr. 96 "Moorteilsweg"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/wehdel-moorteilsweg", "07/2020"]
schiffdorf001 = ["schiffdorf001", 'Spaden: Bebauungsplan Nr. 103 "Betreutes Wohnen am Schierholzweg"',"https://www.nabu-bremerhaven.de/themen/bauleitplanung/spaden-betreutes-wohnen-am-schierholzweg/","05/2020"]

wnk002 = ["wnk002", 'Mulsum: Bebauungsplan Nr. 6 "Am Wremer Landweg"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/mulsum-am-wremer-landweg/", "07/2020"]
wnk001 = ["wnk001", 'Wremen: Bebauungsplan Nr. 32 "Wohnanlage Marschenhof"', "https://www.nabu-bremerhaven.de/themen/bauleitplanung/wremen-wohnanlage-marschenhof/", "05/2020"]

bplaene = [geestland001, geestland002, geestland003, geestland004, bremerhaven001, bremerhaven002, bremerhaven003, loxstedt001, schiffdorf001, schiffdorf002, schiffdorf003, schiffdorf004, wnk001, wnk002, wnk002]

/* PLATZIEREN DER BPLAN-INFORMATIONEN */    

for (let i of bplaene) {
    for (j = 0, len = i.length; j < len; j++) {document.getElementById(i[0]).getElementsByTagName("a")[0].innerText=i[1];
                                               document.getElementById(i[0]).getElementsByTagName("a")[0].href=i[2];
                                              document.getElementById(i[0]).getElementsByTagName("p")[1].innerHTML=i[4];}}
