let players = [
    "QAT1 Team Photo","QAT2 Team Logo FOIL", 'QAT3 Saad Al Sheeb', 'QAT4 Meshaal Barsham', 'QAT5 Homam Ahmed', 'QAT6 Bassam Alrawi', 'QAT7 Abdulkarim Hassan', 'QAT8 Musaab Khidir', 'QAT9 Boualem Khoukhi', 'QAT10 Pedro Miguel', 'QAT11 Tarek Salman', 'QAT12 Karim Boudiaf', 'QAT13 Abdulaziz Hatem', 'QAT14 Assim Omer Madibo', 'QAT15 Yousuf Abdurisag', 'QAT16 Akram Hassan Afif', 'QAT17 Ahmad Alaaeldin', 'QAT18 Hasan Al-Haydos', 'QAT19 Almoez Ali', 'QAT20 Mohammed Muntari', 'ECU1 Team Photo', 'ECU2 Team Logo FOIL', 'ECU3 Hernán Galíndez', 'ECU4 Alexander Domínguez', 'ECU5 Robert Arboleda', 'ECU6 Byron Castillo', 'ECU7 Pervis Estupiñán', 'ECU8 Piero Hincapié', 'ECU9 Ángelo Preciado', 'ECU10 Félix Torres', 'ECU11 Moisés Caicedo', 'ECU12 Alan Franco', 'ECU13 Carlos Gruezo', 'ECU14 Jhegson Méndez', 'ECU15 Jeremy Sarmiento', 'ECU16 Michael Estrada', 'ECU17 Ángel Mena', 'ECU18 Gonzalo Plata', 'ECU19 Ayrton Preciado', 'ECU20 Enner Valencia', 'SEN1 Team Photo', 'SEN2 Team Logo FOIL', 'SEN3 Édouard Mendy', 'SEN4 Alfred Gomis', 'SEN5 Saliou Ciss', 'SEN6 Pape Abou Cissé', 'SEN7 Abdou Diallo', 'SEN8 Kalidou Koulibaly', 'SEN9 Ibrahima Mbaye', 'SEN10 Bouna Sarr', 'SEN11 Krépin Diatta', 'SEN12 Idrissa Gueye', 'SEN13 Pape Gueye', 'SEN14 Cheikhou Kouyaté', 'SEN15 Nampalys Mendy', 'SEN16 Boulaye Dia', 'SEN17 Famara Diédhiou', 'SEN18 Bamba Dieng', 'SEN19 Sadio Mané', 'SEN20 Ismaïla Sarr', 'NED1 Team Photo', 'NED2 Team Logo FOIL', 'NED3 Justin Bijlow', 'NED4 Jasper Cillessen', 'NED5 Daley Blind', 'NED6 Matthijs de Ligt', 'NED7 Stefan de Vrij', 'NED8 Denzel Dumfries', 'NED9 Virgil van Dijk', 'NED10 Steven Berghuis', 'NED11 Frenkie de Jong', 'NED12 Ryan Gravenberch', 'NED13 Davy Klaassen', 'NED14 Teun Koopmeiners', 'NED15 Georginio Wijnaldum', 'NED16 Steven Bergwijn', 'NED17 Arnaut Danjuma', 'NED18 Memphis Depay', 'NED19 Cody Gakpo', 'NED20 Donyell Malen',
    'ENG1 Team Photo','ENG2 Team Logo FOIL','ENG3 Jordan Pickford','ENG4 Aaron Ramsdale','ENG5 Trent Alexander-Arnold','ENG6 Conor Coady','ENG7 Harry Maguire','ENG8 Luke Shaw','ENG9 John Stones','ENG10 Kyle Walker','ENG11 Jude Bellingham','ENG12 Jack Grealish','ENG13 Jordan Henderson','ENG14 Mason Mount','ENG15 Kalvin Phillips','ENG16 Declan Rice','ENG17 Phil Foden','ENG18 Harry Kane','ENG19 Bukayo Saka','ENG20 Raheem Sterling','IRN1 Team Photo' ,'IRN2 Team Logo FOIL' ,'IRN3 Amir Abedzadeh' ,'IRN4 Alireza Bevand' ,'IRN5 Ehsan Hajsafi' ,'IRN6 Majid Hosseini' ,'IRN7 Hossein Kanaani' ,'IRN8 Shoja Khalilzadeh' ,'IRN9 Milad Mohammadi' ,'IRN10 Sadegh Moharrami' ,'IRN11 Omid Noorafkan' ,'IRN12 Vahid Amiri' ,'IRN13 Saeid Ezatolahi' ,'IRN14 Ali Gholizadeh' ,'IRN15 Alireza Jahanbakhsh' ,'IRN16 Ahmad Nourollahi' ,'IRN17 Karim Ansarifard' ,'IRN18 Sardar Azmoun' ,'IRN19 Saman Ghoddos' ,'IRN20 Mehdi Taremi' ,'USA1 Team Photo' ,'USA2 Team Logo FOIL' ,'USA3 Matt Turner' ,'USA4 Zack Steffen' ,'USA5 Sergiño Dest' ,'USA6 Aaron Long' ,'USA7 Chris Richards' ,'USA8 Antonee Robinson' ,'USA9 DeAndre Yedlin' ,'USA10 WALker Zimmerman','USA11 Brenden Aaronson','USA12 Kellyn Acosta','USA13 Tyler Adams','USA14 Weston McKennie','USA15 Yunus Musah','USA16 Jesús Ferreira','USA17 Ricardo Pepi','USA18 Christian Pulisic','USA19 Giovanni Reyna','USA20 Timothy Weah','WAL1 Team Photo','WAL2 Team Logo FOIL','WAL3 Danny Ward','WAL4 Wayne Hennessey','WAL5 Ethan Ampadu','WAL6 Ben Davies','WAL7 Chris Gunter','WAL8 Chris Mepham','WAL9 Connor Roberts','WAL10 Joe Rodon','WAL11 Neco Williams','WAL12 Joe Allen','WAL13 Joe Morrell','WAL14 Aaron Ramsey','WAL15 Jonathan Williams','WAL16 Harry Wilson','WAL17 Gareth Bale','WAL18 Daniel James','WAL19 Brennan Johnson','WAL20 Kieffer Moore',
    'ARG1 Team Photo','ARG2 Team Logo FOIL','ARG3 Emiliano Martínez','ARG4 Franco Armani','ARG5 Marcos Acuña','ARG6 Nahuel Molina','ARG7 Nicolás Otamendi','ARG8 Germán Pezzella','ARG9 Cristian Romero','ARG10 Rodrigo De Paul','ARG11 Ángel Di María','ARG12 Giovani Lo Celso','ARG13 Leandro Paredes','ARG14 Guido Rodríguez','ARG15 Julián Álvarez','ARG16 Joaquín Correa','ARG17 Alejandro Gómez','ARG18 Nicolás González','ARG19 Lautaro Martínez','ARG20 Lionel Messi','KSA1 Team Photo','KSA2 Team Logo FOIL','KSA3 Mohammed Al - Owais','KSA4 Mohammed Al - Rubaie','KSA5 Abdulelah Al - Amri','KSA6 Ali Al - Boleahi','KSA7 Mohammed Al - Burayk','KSA8 Sultan Al - Ghannam','KSA9 Yasser Al - Shahrani','KSA10 Hassan Al - Tambakti','KSA11 Abdullah Madu','KSA12 Salman Al - Faraj','KSA13 Abdulelah Al - Malki','KSA14 Sami Al - Najei','KSA15 Hattan Bahebri','KSA16 Mohamed Kanno','KSA17 Abdullah Otayf','KSA18 Firas Al - Buraikan','KSA19 Salem Al - Dawsari','KSA20 Khalid Al - Ghannam','MEX1 Team Photo','MEX2 Team Logo FOIL','MEX3 Guillermo Ochoa','MEX4 Alfredo Talavera','MEX5 Néstor Araújo','MEX6 Jesús Gallardo','MEX7 César Montes','MEX8 Héctor Moreno','MEX9 Luis Romo','MEX10 Jorge Sánchez','MEX11 Edson Álvarez','MEX12 Jesús Manuel Corona','MEX13 Andrés Guardado','MEX14 Érick Gutiérrez','MEX15 Héctor Herrera','MEX16 Diego Lainez','MEX17 Carlos Rodríguez','MEX18 Rogelio Funes Mori','MEX19 Raúl Jiménez','MEX20 Hirving Lozano','POL1 Team Photo','POL2 Team Logo FOIL','POL3 Wojciech Szczęsny','POL4 Łukasz Skorupski','POL5 Jan Bednarek','POL6 Bartosz Bereszyński','POL7 Matty Cash','POL8 Kamil Glik','POL9 Tymoteusz Puchacz','POL10 Maciej Rybus','POL11 Kamil Jóźwiak','POL12 Mateusz Klich','POL13 Grzegorz Krychowiak','POL14 Jakub Moder','POL15 Sebastian Szymański','POL16 Piotr Zieliński','POL17 Robert Lewandowski','POL18 Arkadiusz Milik','POL19 Krzysztof Piątek','POL20 Karol Świderski',
    'FRA1 Team Photo','FRA2 Team Logo FOIL','FRA3 Hugo Lloris','FRA4 Mike Maignan','FRA5 Lucas Hernández','FRA6 Theo Hernández','FRA7 Presnel Kimpembe','FRA8 Jules Koundé','FRA9 Benjamin Pavard','FRA10 Raphaël Varane','FRA11 NGolo Kanté','FRA12 Paul Pogba','FRA13 Adrien Rabiot','FRA14 Aurélien Tchouaméni','FRA15 Wissam Ben Yedder','FRA16 Karim Benzema','FRA17 Kingsley Coman','FRA18 Antoine Griezmann','FRA19 Kylian Mbappé','FRA20 Christopher Nkunku','AUS1 Team Photo','AUS2 Team Logo FOIL','AUS3 Mathew Ryan','AUS4 Andrew Redmayne','AUS5 Aziz Behich','AUS6 Miloš Degenek','AUS7 Rhyan Grant','AUS8 Joel King','AUS9 Trent Sainsbury','AUS10 Harry Souttar','AUS11 Ajdin Hrustić','AUS12 Jackson Irvine','AUS13 James Jeggo','AUS14 Awer Mabil','AUS15 Aaron Mooy','AUS16 Martin Boyle','AUS17 Mitchell Duke','AUS18 Craig Goodwin','AUS19 Mathew Leckie','AUS20 Adam Taggart','DEN1 Team Photo','DEN2 Team Logo FOIL','DEN3 Kasper Schmeichel','DEN4 Frederik Rønnow','DEN5 Andreas Christensen','DEN6 Simon Kjær','DEN7 Joakim Mæhle','DEN8 Jens Stryger Larsen','DEN9 Jannik Vestergaard','DEN10 Mikkel Damsgaard','DEN11 Thomas Delaney','DEN12 Christian Eriksen','DEN13 Pierre Emile Højbjerg','DEN14 Christian Nørgaard','DEN15 Daniel Wass','DEN16 Martin Braithwaite','DEN17 Kasper Dolberg','DEN18 Yussuf Poulsen','DEN19 Andreas Skov Olsen','DEN20 Jonas Wind','TUN1 Team Photo','TUN2 Team Logo FOIL','TUN3 Bechir Ben Saïd','TUN4 Farouk Ben Mustapha','TUN5 Dylan Bronn','TUN6 Mohamed Dräger','TUN7 Bilel Ifa','TUN8 Ali Maâloul','TUN9 Hamza Mathlouthi','TUN10 Yassine Meriah','TUN11 Montassar Talbi','TUN12 Mohamed Ali Ben Romdhane','TUN13 Wahbi Khazri','TUN14 Aïssa Laïdouni','TUN15 Ferjani Sassi','TUN16 Ellyes Skhiri','TUN17 Anis Slimane','TUN18 Seifeddine Jaziri','TUN19 Youssef Msakni','TUN20 Naïm Sliti',
    'ESP1 Team Photo','ESP2 Team Logo FOIL','ESP3 Unai Simón','ESP4 Robert Sánchez','ESP5 César Azpilicueta','ESP6 Eric García','ESP7 Jordi Alba','ESP8 Aymeric Laporte','ESP9 Pau Torres','ESP10 Gavi','ESP11 Koke','ESP12 Marcos Llorente','ESP13 Pedri','ESP14 Rodri','ESP15 Sergio Busquets','ESP16 Dani Olmo','ESP17 Ansu Fati','ESP18 Ferran Torres','ESP19 Álvaro Morata','ESP20 Pablo Sarabia','CRC1 Team Photo','CRC2 Team Logo FOIL','CRC3 Keylor Navas','CRC4 Leonel Moreira','CRC5 Ricardo Blanco','CRC6 francisco Calvo','CRC7 Óscar Duarte','CRC8 Keysher Fuller','CRC9 Bryan Oviedo','CRC10 Juan Pablo Vargas','CRC11 Kendall Waston','CRC12 Celso Borges','CRC13 Orlando Galo','CRC14 Bryan Ruiz','CRC15 Yeltsin Tejeda','CRC16 Jewison Bennette','CRC17 Joel Campbell','CRC18 Anthony Contreras','CRC19 Gerson Torres','CRC20 Johan Venegas','GER1 Team Photo','GER2 Team Logo FOIL','GER3 Manuel Neuer','GER4 Marc - André ter Stegen','GER5 Matthias Ginter','GER6 Robin Gosens','GER7 Thilo Kehrer','GER8 David Raum','GER9 Antonio Rüdiger','GER10 Niklas Süle','GER11 Leon Goretzka','GER12 İlkay Gündoğan','GER13 Kai Havertz','GER14 Jonas Hofmann','GER15 Joshua Kimmich','GER16 Serge Gnabry','GER17 Thomas Müller','GER18 Marco Reus','GER19 Leroy Sané','GER20 Timo Werner','JPN1 Team Photo','JPN2 Team Logo FOIL','JPN3 Shuichi Gonda','JPN4 Eiji Kawashima','JPN5 Yuto Nagatomo','JPN6 Yuta Nakayama','JPN7 Takehiro Tomiyasu','JPN8 Miki Yamane','JPN9 Maya Yoshida','JPN10 Wataru Endo','JPN11 Genki Haraguchi','JPN12 Hidemasa Morita','JPN13 Gaku Shibasaki','JPN14 Ao Tanaka','JPN15 Takuma Asano','JPN16 Kyogo Furuhashi','JPN17 Junya Ito','JPN18 Takumi Minamino','JPN19 Kaoru Mitoma','JPN20 Yuya Osako',
    'BEL1 Team Photo','BEL2 Team Logo FOIL','BEL3 Thibaut Courtois','BEL4 Simon Mignolet','BEL5 Toby Alderweireld','BEL6 Timothy Castagne','BEL7 Jason Denayer','BEL8 Thomas Meunier','BEL9 Jan Vertonghen','BEL10 Yannick Carrasco','BEL11 Kevin De Bruyne','BEL12 Charles De Ketelaere','BEL13 Thorgan Hazard','BEL14 Youri Tielemans','BEL15 Hans Vanaken','BEL16 Axel Witsel','BEL17 Jérémy Doku','BEL18 Eden Hazard','BEL19 Romelu Lukaku','BEL20 Dries Mertens','CAN1 Team Photo','CAN2 Team Logo FOIL','CAN3 Milan Borjan','CAN4 Maxime Crépeau','CAN5 Samuel Adekugbe','CAN6 Doneil Henry','CAN7 Alistair Johnston','CAN8 Richie Laryea','CAN9 Kamal Miller','CAN10 Steven Vitória','CAN11 Tajon Buchanan','CAN12 Alphonso Davies','CAN13 Stephen Eustáquio','CAN14 Atiba Hutchinson','CAN15 Mark - Anthony Kaye','CAN16 Jonathan Osorio','CAN17 Samuel Piette','CAN18 Jonathan David','CAN19 David Junior Hoilett','CAN20 Cyle Larin','MAR1 Team Photo','MAR2 Team Logo FOIL','MAR3 Yassine Bounou','MAR4 Munir Mohamedi','MAR5 Nayef Aguerd','MAR6 Achraf Hakimi','MAR7 Adam Masina','MAR8 Samy Mmaee','MAR9 Romain Saïss','MAR10 Selim Amallah','MAR11 Sofyan Amrabat','MAR12 Aymen Barkok','MAR13 Ilias Chair','MAR14 Imrân Louza','MAR15 Sofiane Boufal','MAR16 Ayoub El Kaabi','MAR17 Youssef En - Nesyri','MAR18 Ryan Mmaee','MAR19 Munir','MAR20 Tarik Tissoudali','CRO1 Team Photo','CRO2 Team Logo FOIL','CRO3 Dominik Livaković','CRO4 Ivica Ivušić','CRO5 Duje Ćaleta - Car','CRO6 Joško Gvardiol','CRO7 Josip Juranović','CRO8 Dejan Lovren','CRO9 Borna Sosa','CRO10 Domagoj Vida','CRO11 Marcelo Brozović','CRO12 Mateo Kovačić','CRO13 Luka Modrić','CRO14 Mario Pašalić','CRO15 Ivan Perišić','CRO16 Nikola Vlašić','CRO17 Josip Brekalo','CRO18 Andrej Kramarić','CRO19 Marko Livaja','CRO20 Mislav Oršić',
    'BRA1 Team Photo','BRA2 Team Logo FOIL','BRA3 Alisson','BRA4 Ederson','BRA5 Alex Sandro','BRA6 Danilo','BRA7 Éder Militão','BRA8 Marquinhos','BRA9 Thiago Silva','BRA10 Casemiro','BRA11 Philippe Coutinho','BRA12 Fabinho','BRA13 Fred','BRA14 Lucas Paquetá','BRA15 Antony','BRA16 Gabriel Jesus','BRA17 Neymar Jr','BRA18 Raphinha','BRA19 Richarlison','BRA20 Vinícius Jr','SRB1 Team Photo','SRB2 Team Logo FOIL','SRB3 Predrag Rajković','SRB4 Vanja Milinković - Savić','SRB5 Nikola Milenković','SRB6 Strahinja Pavlović','SRB7 Miloš Veljković','SRB8 Filip Đuričić','SRB9 Nemanja Gudelj','SRB10 Filip Kostić','SRB11 Darko Lazović','SRB12 Saša Lukić','SRB13 Nemanja Maksimović','SRB14 Sergej Milinković - Savić','SRB15 Nemanja Radonjić','SRB16 Andrija Živković','SRB17 Luka Jović','SRB18 Aleksandar Mitrović','SRB19 Dušan Tadić','SRB20 Dušan Vlahović','SUI1 Team Photo','SUI2 Team Logo FOIL','SUI3 Yann Sommer','SUI4 Gregor Kobel','SUI5 Manuel Akanji','SUI6 Nico Elvedi','SUI7 Kevin Mbabu','SUI8 Ricardo Rodríguez','SUI9 Fabian Schär','SUI10 Silvan Widmer','SUI11 Remo Freuler','SUI12 Xherdan Shaqiri','SUI13 Djibril Sow','SUI14 Granit Xhaka','SUI15 Denis Zakaria','SUI16 Steven Zuber','SUI17 Breel Embolo','SUI18 Noah Okafor','SUI19 Haris Seferović','SUI20 Ruben Vargas','CMR1 Team Photo','CMR2 Team Logo FOIL','CMR3 André Onana','CMR4 Devis Epassy','CMR5 Jean - Charles Castelletto','CMR6 Collins Fai','CMR7 Olivier Mbaizo','CMR8 Harold Moukoudi','CMR9 Michael Ngadeu','CMR10 Nouhou','CMR11 Martin Hongla','CMR12 Pierre Kunde','CMR13 James Léa Siliki','CMR14 Samuel Oum Gouet','CMR15 André - Frank Zambo Anguissa','CMR16 Vincent Aboubakar','CMR17 Stéphane Bahoken','CMR18 Eric Maxim Choupo - Moting','CMR19 Nicolas Moumi Ngamaleu','CMR20 Karl Toko Ekambi',
    'POR1 Team Photo','POR2 Team Logo FOIL','POR3 Diogo Costa','POR4 Rui Patrício','POR5 João Cancelo','POR6 José Fonte','POR7 Nuno Mendes','POR8 Pepe','POR9 Raphaël Guerreiro','POR10 Rúben Dias','POR11 Bernardo Silva','POR12 Bruno Fernandes','POR13 Danilo Pereira','POR14 João Moutinho','POR15 Renato Sanches','POR16 Rúben Neves','POR17 André Silva','POR18 Cristiano Ronaldo','POR19 Diogo Jota','POR20 Gonçalo Guedes','GHA1 Team Photo','GHA2 Team Logo FOIL','GHA3 Joe Wollacott','GHA4 Richard Ofori','GHA5 Daniel Amartey','GHA6 Abdul - Rahman Baba','GHA7 Alexander Djiku','GHA8 Gideon Mensah','GHA9 Jonathan Mensah','GHA10 Andy Yiadom','GHA11 Iddrisu Baba','GHA12 Mohammed Kudus','GHA13 Daniel - Kofi Kyereh','GHA14 Thomas Partey','GHA15 Mubarak Wakaso','GHA16 Felix Afena - Gyan','GHA17 André Ayew','GHA18 Jordan Ayew','GHA19 Issahaku Abdul Fatawu','GHA20 Kamaldeen Sulemana','URU1 Team Photo','URU2 Team Logo FOIL','URU3 Fernando Muslera','URU4 Sergio Rochet','URU5 Ronald Araújo','URU6 Martín Cáceres','URU7 José María Giménez','URU8 Diego Godín','URU9 Mathías Olivera','URU10 Matías Viña','URU11 Rodrigo Bentancur','URU12 Giorgian De Arrascaeta','URU13 Nicolás De La Cruz','URU14 Lucas Torreira','URU15 Federico Valverde','URU16 Matías Vecino','URU17 Edinson Cavani','URU18 Darwin Núñez','URU19 Facundo Pellistri','URU20 Luis Suárez','KOR1 Team Photo','KOR2 Team Logo FOIL','KOR3 Seung - gyu Kim','KOR4 Hyeon - woo Jo','KOR5 Chul Hong','KOR6 Tae - hwan Kim','KOR7 Min - jae Kim','KOR8 Young - gwon Kim','KOR9 Jin - su Kim','KOR10 Yong Lee','KOR11 In - beom Hwang','KOR12 Woo - young Jung','KOR13 Jae - sung Lee','KOR14 Seung - ho Paik','KOR15 Gue - sung Cho','KOR16 Hee - chan Hwang','KOR17 Ui - jo Hwang','KOR18 Chang - hoon Kwon','KOR19 Heung - min Son','KOR20 Min - kyu Song',
    'FWC19 Uruguay 1930 FOIL','FWC20 Italy 1938 FOIL','FWC21 Brazil 1958 FOIL','FWC22 England 1966 FOIL','FWC23 Brazil 1970 FOIL','FWC24 argentina 1978 FOIL','FWC25 Italy 1982 FOIL','FWC26 Germany 1990 FOIL','FWC27 France 1998 FOIL','FWC28 Spain 2010 FOIL','FWC29 France 2018 FOIL'
];

function autocomplete(inp, arr) {
    /*the autocomplete function takes two 'ARGuments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = 1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > 1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

/*An array containing all the country names in the world:*/
/*initiate the autocomplete function on the "myInput" element, and pass along the players array as possible autocomplete values:*/
autocomplete(document.getElementById("playerInput"), players);


function handleFormSubmit(event) {
    event.preventDefault()
    let addPlayerInput = playerInput.value
    let listEl = document.createElement("li")
    listEl.textContent = addPlayerInput
    let countryUl =  document.querySelector(".MEX")
    countryUl.appendChild(listEl)
    // console.log(addPlayerInput.substring(0, 3));
    //groupAPlayers.filter()
}



let addPlayerButton = document.getElementById("addPlayerButton")
addPlayerButton.addEventListener("click", handleFormSubmit);
