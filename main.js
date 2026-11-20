let vastused = [
        ['1', ['Lascaux hiina hobune', 'Lascaux nn hiina hobune'], [''], ['Paleoliitikum', 'Vanem kiviaeg']],
        ['2', ['Willendorfi Veenus'], [''], ['Paleoliitikum', 'Vanem kiviaeg']],
        ['3', ["Stonehenge'i kromlehh", 'Stonehenge kromlehh'], [''], ['Neoliitikum', 'Uuem kiviaeg']],
        ['4', ['Tsikuraat', "Eanna tsikuraat Ur'is"], [''], ['Vana-Mesopotaamia', 'Mesopotaamia', 'Sumer']],
        ['5', ['Ištari värav', 'Ištari väravad'], [''], ['Mesopotaamia', 'Babüloonia']],
        ['6', ['Hammurapi steel', 'Hammurabi steel'], [''], ['Mesopotaamia', 'Babüloonia']],
        ['7', ['Sfinks', 'Suur sfinks'], [''], ['Vana-Egiptus', 'Egiptus', 'Egiptuse']],
        ['8', ['Tutanhamoni surimask', 'Vaarao Tutanhamoni surimask'], [''], ['Vana-Egiptus', 'Egiptus', 'Egiptuse']],
        ['9', ['Ehnaton ja Nofretete', 'Ehnatoni ja Nofretete reljeef'], [''], ['Vana-Egiptus', 'Egiptus', 'Egiptuse']],
        ['10', ['Giza püramiidid', 'Cheopsi, Chefreni ja Mykerinose püramiidid', 'Giza püramiidideväli'], [''], ['Vana-Egiptus', 'Egiptus', 'Egiptuse']],
        ['11', ['Knossose loss', 'Knossos'], [''], ['Egeuse kultuur', 'Kreeta-Mükeene', 'Egeuse', 'Kreeta-Mükeene kultuur']],
        ['12', ['Lõvivärav Mükeene linnuses', 'Mükeene lõvivärav'], [''], ['Kreeta-Mükeene', 'Egeuse kultuur', 'Egeuse', 'Kreeta-Mükeene kultuur']],
        ['13', ['Odakandja'], ['Polykleitos'], ['Vana-Kreeka', 'Kreeka']],
        ['14', ['Laokooni grupp', 'Laokoon ja tema pojad'], [''], ['Vana-Kreeka', 'Kreeka']],
        ['15', ['Samothrake Nike'], [''], ['Vana-Kreeka', 'Kreeka']],
        ['16', ['Milose Venus', 'Milose Veenus'], [''], ['Vana-Kreeka', 'Kreeka']],
        ['17', ['Parthenon'], ['Iktinos ja Kallikrates'], ['Vana-Kreeka', 'Kreeka']],
        ['18', ['Tituse triumfikaar'], [''], ['Antiik-Rooma', 'Vana-Rooma', 'Rooma']],
        ['19', ['Colosseum', 'Amfiteater Colosseum'], [''], ['Antiik-Rooma', 'Vana-Rooma', 'Rooma']],
        ['20', ['Panteon', 'Pantheon'], [''], ['Antiik-Rooma', 'Vana-Rooma', 'Rooma']],
        ['21', ['Hagia Sophia', 'Hagia Sophia katedraal'], [''], ['Bütsants']],
        ['22', ['Vladimiri Jumalaema', 'Vladimiri Jumalaema ikoon'], [''], ['Bütsants', 'Vanavene']],
        ['23', ['Vassili Blažennõi kirik', 'Vassili Blažennõi kirik Moskvas'], [''], ['Vanavene']],
        ['24', ['Bayeux vaip', "Bayeux' vaip"], [''], ['Romaani stiil', 'Romaanika']],
        ['25', ['Tartu Jaani kirik', 'Jaani kirik'], [''], ['Gooti stiil', 'Gootika']],
        ['26', ['Tallinna Oleviste kirik', 'Oleviste kirik'], [''], ['Gooti stiil', 'Gootika']],
        ['27', ["Reimsi katedraal", "Reims'i katedraal"], [''], ['Gooti stiil', "Gootika"]],
        ['28', ['Surmatants'], ['Notke', 'Bernt Notke'], ['Hilisgootika', 'Hilisgooti stiil']],
        ['29', ['Taavet'], ['Donatello'], ['Vararenessanss']],
        ['30', ['Venuse sünd', 'Veenuse sünd'], ['Botticelli', 'Sandro Botticelli'], ['Vararenessanss']],
        ['31', ['Mona Lisa'], ['Leonardo da Vinci'], ['Kõrgrenessanss']],
        ['32', ['Püha õhtusöömaaeg'], ['Leonardo da Vinci'], ['Kõrgrenessanss']],
        ['33', ['Sixtuse madonna'], ['Raffael'], ['Kõrgrenessanss']],
        ['34', ['Ateena kool'], ['Raffael'], ['Kõrgrenessanss']],
        ['35', ['Taavet'], ['Michelangelo', 'Michelangelo Buonarroti'], ['Kõrgrenessanss']],
        ['36', ['Freskod Sixtuse kabelis', 'Sixtuse kabeli freskod'], ['Michelangelo', 'Michelangelo Buonarroti'], ['Kõrgrenessanss']],
        ['37', ['fragment "Aadama loomine"', 'Aadama loomine'], ['Michelangelo', 'Michelangelo Buonarroti'], ['Kõrgrenessanss']],
        ['38', ['Madonna kantsler Roliniga'], ['Eyck', 'Jan van Eyck'], ['Vararenessanss Madalmaades', 'Madalmaade vararenessanss']],
        ['39', ['Pimedad'], ['Brueghel', 'Pieter Brueghel vanem'], ['Madalmaad 16. sajand', '16. sajandi Madalmaad']],
        ['40', ['Isenheimi altar', 'Isenheimi altarimaal'], ['Grünewald', 'Matthias Grünewald'], ['Vararenessanss Saksamaal']],
        ['41', ['Neli ratsanikku'], ['Dürer', 'Albrecht Dürer'], ['Kõrgrenessanss Saksamaal']],
        ['42', ['Autoportree', 'Autoportree karusnahkses rüüs'], ['Dürer', 'Albrecht Dürer'], ['Kõrgrenessanss Saksamaal']],
        ['43', ['Peetruse ristilöömine', 'Püha Peetruse ristilöömine'], ['Caravaggio'], ['Barokk', 'Itaalia Barokk-naturalistlik suund']],
        ['44', ['Õuedaamid'], ['Velazquez', 'Diego Velazquez'], ['Barokk Hispaanias', 'Hispaania barokk']],
        ['45', ['Leukippose tütarde röövimine'], ['Rubens', 'Peter Paul Rubens'], ['Flandria barokk', 'Barokk Flandrias']],
        ['46', ['Öine vahtkond'], ['Rembrandt', 'Rembrandt van Rijn'], ['Hollandi barokk']],
        ['47', ['Kiik'], ['Fragonard', 'Jean-Honore Fragonard',], ['Rokokoo']],
        ['48', ['Horatiuse vanne'], ['David', 'Jacques-Louis David'], ['Klassitsism']],
        ['49', ['Vabadus viib rahva barrikaadidele'], ['Delacroix', 'Eugene Delacroix'], ['Romantism']],
        ['50', ['Viljapeade korjajad'], ['Millet', 'Jean-Francois Millet'], ['Realism']],
        ['51', ['Isa portree'], ['Johann Köler', 'Köler'], ['Eesti rahvuslik kunst', 'Eesti rahvuskunst']],
        ['52', ['Ema portree'], ['Johann Köler', 'Köler'], ['Eesti rahvuslik kunst', 'Eesti rahvuskunst']]
    ];


var praegune_küsimus = 0; // 0-pealkiri; 1-autor; 2-ajastu
küsimused = ['. küsimus: Mis on selle teose pealkiri?',
             '. küsimus: Kuidas nimetatakse selle teose autorit/autoreid?',
             '. küsimus: Millises stiilis on antud teos?']
var küsimuste_count = 0;
var õigete_count = 0;
var valik_nr = 0;
var valik = []


function start(){
    document.getElementById("vastus").value = "";

    valik_nr = Math.floor(Math.random() * vastused.length)
    valik = vastused[valik_nr]

    document.getElementById("pildi_koht").src = "KU1/" + valik[0] + ".png";
    
    küsimuste_count += 1;
    praegune_küsimus = 0;
    document.getElementById("küsimus").innerText = küsimuste_count.toString() + küsimused[praegune_küsimus];
}


var disallow_enter = false;
var eelmineValeVastus = "";
function enter() {
    if (disallow_enter){return;}

    const answer = document.getElementById("vastus").value;
    if (answer==""){return;}
    if (answer==eelmineValeVastus){return;}

    var õige_vale = false;
    var õige_vastus = "";
    var alternatiivne_variant = "";
    for (const i of valik[praegune_küsimus+1]){
        if (answer.toLowerCase() == i.toLowerCase()){
            õige_vale = true;
            õige_vastus = i;
            if (valik[praegune_küsimus+1].indexOf(i) == 0){
                alternatiivne_variant = valik[praegune_küsimus+1][1]
            } else {
                alternatiivne_variant = valik[praegune_küsimus+1][0]
            }
        } else {
            õige_vastus = valik[praegune_küsimus+1][0];
        }
    }

    if (õige_vale){
        õigete_count += 1;
        eelmineValeVastus = "";

        document.getElementById("küsimus").style = "color: #55d52b"
        if (valik[praegune_küsimus+1].length == 1){
            document.getElementById("küsimus").innerText = '✓ Õige vastus!'
        } else {
            document.getElementById("küsimus").innerText = '✓ Õige vastus! Alternatiivne variant: ' + alternatiivne_variant;
        }
        

        disallow_enter = true;
        setTimeout(() => {
            document.getElementById("vastus").value = "";

            if(praegune_küsimus < 2){
                praegune_küsimus += 1;
                if(praegune_küsimus==1 && valik[praegune_küsimus+1][0]==""){
                    praegune_küsimus += 1;
                }
            } else {
                praegune_küsimus = 0;
                vastused.splice(valik_nr, 1);

                if (vastused.length == 0){
                    document.getElementById("küsimus").style = "color: white"
                    document.getElementById("küsimus").innerText = "Tehtud! Sinu skoor on " + õigete_count.toString() + "/" + küsimuste_count.toString() + " ehk " + (õigete_count*100/küsimuste_count).toFixed(1).toString() + "%."
                    return;
                }

                valik_nr = Math.floor(Math.random() * vastused.length)
                valik = vastused[valik_nr]
                document.getElementById("pildi_koht").src = "KU1/" + valik[0] + ".png";
            };

            document.getElementById("küsimus").style = "color: white"
            küsimuste_count += 1;
            document.getElementById("küsimus").innerText = küsimuste_count.toString() + küsimused[praegune_küsimus];
            disallow_enter = false;
        }, 1500);

    } else {
        eelmineValeVastus = new String(answer);
        küsimuste_count += 1;
        document.getElementById("küsimus").style = "color: #ff4d4d"
        document.getElementById("küsimus").innerText = 'x Vale vastus! Õige vastus on ' + õige_vastus;
    }
}