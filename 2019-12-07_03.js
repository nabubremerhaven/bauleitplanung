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

geestland003 = ["geestland003", "Bederkesa: Teil-Flächennutzungsplan, 10. Änderung", "geestland-teil-fnp-bederkesa-10-änderung/", "frühzeitig", "11/2019"]
geestland002 = ["geestland002", 'Bederkesa: Bebauungsplan Nr. 12 "Erholungszentrum", 12. Änderung', "geestland-teil-fnp-bederkesa-10-änderung/", "frühzeitig", "11/2019"]
geestland001 = ["geestland001", "Langen: Teil-Flächennutzungsplan, 2. Änderung", "geestland-teil-fnp-langen-2-änderung/", "Öffentlichkeit", "05/2019"]

bremerhaven001 = ["bremerhaven001", 'Bebauungsplan Nr. 494 "Green Economy-Gebiet Lune Delta"',"bremerhaven-green-economy-gebiet-lune-delta/","frühzeitig","02/2020"]

loxstedt001 = ["loxstedt001", "derzeit keine Stellungnahmen","","",""]

schiffdorf001 = ["schiffdorf001", "derzeit keine Stellungnahmen","","",""]

wnk001 = ["wnk001", "derzeit keine Stellungnahmen","","",""]

bplaene = [geestland001, geestland002, geestland003, bremerhaven001, loxstedt001,
               schiffdorf001, wnk001]   

/* PLATZIEREN DER BPLAN-INFORMATIONEN */    

for (let i of bplaene) {
    for (j = 0, len = i.length; j < len; j++) {document.getElementById(i[0]).getElementsByTagName("a")[0].innerText=i[1];
                                               document.getElementById(i[0]).getElementsByTagName("a")[0].href=i[2]
                                              document.getElementById(i[0]).getElementsByTagName("p")[0].innerHTML=i[3];
                                              document.getElementById(i[0]).getElementsByTagName("p")[1].innerHTML=i[4];}}
