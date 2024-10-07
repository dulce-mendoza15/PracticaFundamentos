let equipo1 = "Green Bay Packers";
let jugadoresEquipo1 = [["Jordan Love", 10, "QB", 25, "1.93 m", "99 kg", "Utah State"],
["Malik Willis", 2, "QB", 25, "1.85 m", "102 kg", "Liberty"],
["Chris Brooks", 30, "RB", 24, "1.85 m", "99 kg", "BYU"],
["Josh Jacobs", 8, "RB", 26, "1.78 m", "101 kg", "Alabama"],
["Emanuel Wilson", 31, "RB", 25, "1.78 m", "102 kg", "Fort Valley State"],
["Romeo Doubs", 87, "WR", 24, "1.88 m", "92 kg", "Nevada"],
["Malik Heath", 18, "WR", 24, "1.88 m", "96 kg", "Ole Miss"],
["Bo Melton", 80, "WR", 25, "1.8 m", "85 kg", "Rutgers"],
["Jayden Reed", 11, "WR", 24, "1.8 m", "84 kg", "Michigan State"],
["Christian Watson", 9, "WR", 25, "1.93 m", "94 kg", "North Dakota State"],
["Dontayvion Wicks", 13, "WR", 23, "1.85 m", "93 kg", "Virginia"],
["Tucker Kraft", 85, "TE", 23, "1.96 m", "117 kg", "South Dakota State"],
["Luke Musgrave", 88, "TE", 24, "1.98 m", "114 kg", "Oregon State"],
["Ben Sims", 89, "TE", 24, "1.96 m", "113 kg", "Baylor"],
["Jacob Monk", 62, "C", 23, "1.91 m", "139 kg", "Duke"],
["Josh Myers", 71, "C", 26, "1.96 m", "140 kg", "Ohio State"],
["Elgton Jenkins", 74, "G", 28, "1.96 m", "141 kg", "Mississippi State"],
["Sean Rhyan", 75, "G", 24, "1.96 m", "145 kg", "UCLA"],
["Zach Tom", 50, "G", 25, "1.93 m", "137 kg", "Wake Forest"],
["Andre Dillard", 73, "OT", 28, "1.96 m", "142 kg", "Washington State"],
["Travis Glover", 79, "OT", 24, "1.98 m", "143 kg", "Georgia State"],
["Jordan Morgan", 77, "OT", 23, "1.96 m", "141 kg", "Arizona"],
["Kadeem Telfort", 76, "OT", 25, "2.01 m", "146 kg", "UAB"],
["Rasheed Walker", 63, "OT", 24, "1.98 m", "146 kg", "Penn State"],
["Karl Brooks", 94, "DE", 24, "1.91 m", "134 kg", "Bowling Green"],
["Brenton Cox Jr.", 57, "DE", 24, "1.93 m", "113 kg", "Florida"],
["Kingsley Enagbare", 55, "DE", 24, "1.93 m", "117 kg", "South Carolina"],
["Rashan Gary", 52, "DE", 26, "1.96 m", "125 kg", "Michigan"],
["Arron Mosby", 53, "DE", 25, "1.91 m", "113 kg", "Fresno State"],
["Preston Smith", 91, "DE", 31, "1.96 m", "120 kg", "Mississippi State"],
["Lukas Van Ness", 90, "DE", 23, "1.96 m", "123 kg", "Iowa"],
["Kenny Clark", 97, "DT", 28, "1.91 m", "142 kg", "UCLA"],
["T.J. Slaton", 93, "DT", 26, "1.93 m", "149 kg", "Florida"],
["Colby Wooden", 96, "DT", 23, "1.93 m", "123 kg", "Auburn"],
["Devonte Wyatt", 95, "DT", 26, "1.91 m", "137 kg", "Georgia"],
["Edgerrin Cooper", 56, "LB", 22, "1.88 m", "103 kg", "Texas A&M"],
["Ty'Ron Hopper", 59, "LB", 23, "1.88 m", "103 kg", "Missouri"],
["Isaiah McDuffie", 58, "LB", 25, "1.85 m", "102 kg", "Boston College"],
["Quay Walker", 7, "LB", 24, "1.93 m", "109 kg", "Georgia"],
["Eric Wilson", 45, "LB", 30, "1.85 m", "104 kg", "Cincinnati"],
["Jaire Alexander", 23, "CB", 27, "1.78 m", "88 kg", "Louisville"],
["Corey Ballentine", 26, "CB", 28, "1.8 m", "88 kg", "Washburn"],
["Keisean Nixon", 25, "CB", 27, "1.78 m", "90 kg", "South Carolina"],
["Eric Stokes", 21, "CB", 25, "1.85 m", "87 kg", "Georgia"],
["Carrington Valentine", 24, "CB", 23, "1.83 m", "85 kg", "Kentucky"],
["Zayne Anderson", 39, "S", 27, "1.88 m", "93 kg", "BYU"],
["Javon Bullard", 20, "S", 22, "1.78 m", "89 kg", "Georgia"],
["Xavier McKinney", 29, "S", 26, "1.83 m", "91 kg", "Alabama"],
["Kitan Oladapo", 27, "S", 23, "1.88 m", "97 kg", "Oregon State"],
["Evan Williams", 33, "S", 23, "1.8 m", "90 kg", "Oregon"],
["Brayden Narveson", 44, "PK", 25, "1.83 m", "97 kg", "NC State"],
["Daniel Whelan", 19, "P", 25, "1.96 m", "97 kg", "UC Davis"],
["Matt Orzech", 42, "LS", 29, "1.91 m", "111 kg", "Azusa Pacific"]];

let equipo2 = "Las Vegas Raiders"
let jugadoresEquipo2 = [["Gardner Minshew", 15, "QB", 28, "1.85 m", "102 kg", "Washington State"],
["Aidan O'Connell", 12, "QB", 26, "1.91 m", "95 kg", "Purdue"],
["Ameer Abdullah", 8, "RB", 31, "1.75 m", "92 kg", "Nebraska"],
["Dylan Laube", 23, "RB", 24, "1.78 m", "94 kg", "New Hampshire"],
["Alexander Mattison", 22, "RB", 26, "1.8 m", "99 kg", "Boise State"],
["Zamir White", 3, "RB", 25, "1.83 m", "97 kg", "Georgia"],
["Davante Adams", 17, "WR", 31, "1.85 m", "97 kg", "Fresno State"],
["Tyreik McAllister", 32, "WR", 26, "1.8 m", "81 kg", "Charleston (WV)"],
["Jakobi Meyers", 16, "WR", 27, "1.88 m", "90 kg", "NC State"],
["Tre Tucker", 11, "WR", 23, "1.75 m", "83 kg", "Cincinnati"],
["DJ Turner", 19, "WR", 27, "1.75 m", "92 kg", "Pittsburgh"],
["Brock Bowers", 89, "TE", 21, "1.93 m", "104 kg", "Georgia"],
["Harrison Bryant", 84, "TE", 26, "1.96 m", "104 kg", "Florida Atlantic"],
["Michael Mayer", 87, "TE", 23, "1.93 m", "120 kg", "Notre Dame"],
["John Samuel Shenker", 86, "TE", 26, "1.91 m", "109 kg", "Auburn"],
["Andre James", 68, "C", 27, "1.93 m", "136 kg", "UCLA"],
["Jordan Meredith", 61, "G", 26, "1.88 m", "136 kg", "Western Kentucky"],
["Dylan Parham", 66, "G", 25, "1.91 m", "129 kg", "Memphis"],
["Andrus Peat", 75, "G", 30, "2.01 m", "143 kg", "Stanford"],
["Jackson Powers-Johnson", 58, "G", 21, "1.91 m", "151 kg", "Oregon"],
["Cody Whitehair", 65, "G", 32, "1.91 m", "143 kg", "Kansas State"],
["DJ Glaze", 71, "OT", 22, "1.93 m", "146 kg", "Maryland"],
["Kolton Miller", 74, "OT", 29, "2.03 m", "147 kg", "UCLA"],
["Thayer Munford Jr.", 77, "OT", 25, "1.98 m", "142 kg", "Ohio State"],
["Maxx Crosby", 98, "DE", 27, "1.96 m", "115 kg", "Eastern Michigan"],
["Janarius Robinson", 97, "DE", 26, "1.96 m", "117 kg", "Florida State"],
["Charles Snowden", 49, "DE", 26, "2.01 m", "111 kg", "Virginia"],
["Tyree Wilson", 9, "DE", 24, "1.98 m", "124 kg", "Texas Tech"],
["Adam Butler", 69, "DT", 30, "1.96 m", "136 kg", "Vanderbilt"],
["John Jenkins", 95, "DT", 35, "1.91 m", "148 kg", "Georgia"],
["Jonah Laulu", 96, "DT", 24, "1.96 m", "132 kg", "Oklahoma"],
["Nesta Jade Silvera", 99, "DT", 24, "1.88 m", "142 kg", "Arizona State"],
["Christian Wilkins", 94, "DT", 28, "1.93 m", "140 kg", "Clemson"],
["Amari Burney", 56, "LB", 24, "1.88 m", "103 kg", "Florida"],
["Divine Deablo", 5, "LB", 26, "1.91 m", "101 kg", "Virginia Tech"],
["Tommy Eichenberg", 54, "LB", 23, "1.88 m", "108 kg", "Ohio State"],
["Amari Gainer", 53, "LB", 24, "1.91 m", "107 kg", "North Carolina"],
["Luke Masterson", 59, "LB", 26, "1.85 m", "99 kg", "Wake Forest"],
["Kana'i Mauga", 43, "LB", 24, "1.88 m", "111 kg", "USC"],
["Robert Spillane", 41, "LB", 28, "1.85 m", "103 kg", "Western Michigan"],
["Jakorian Bennett", 0, "CB", 24, "1.8 m", "88 kg", "Maryland"],
["Nate Hobbs", 39, "CB", 25, "1.83 m", "88 kg", "Illinois"],
["Darnay Holmes", 30, "CB", 26, "1.78 m", "88 kg", "UCLA"],
["Jack Jones", 18, "CB", 26, "1.8 m", "79 kg", "Arizona State"],
["Decamerion Richardson", 25, "CB", 23, "1.88 m", "88 kg", "Mississippi State"],
["Sam Webb", 27, "CB", 26, "1.88 m", "88 kg", "Missouri Western"],
["Thomas Harper", 34, "S", 23, "1.78 m", "88 kg", "Notre Dame"],
["Tre'von Moehrig", 7, "S", 25, "1.88 m", "91 kg", "TCU"],
["Isaiah Pola-Mao", 20, "S", 25, "1.93 m", "92 kg", "USC"],
["Chris Smith II", 29, "S", 24, "1.8 m", "88 kg", "Georgia"],
["Daniel Carlson", 2, "PK", 29, "1.96 m", "97 kg", "Auburn"],
["AJ Cole", 6, "P", 28, "1.93 m", "99 kg", "NC State"],
["Jacob Bobenmoyer", 50, "LS", 27, "1.88 m", "106 kg", "Northern Colorado"]]

let marcadorEquipo1 = 0;
let marcadorEquipo2 = 0;

function equipoMarco (noEquipo, puntos, jugador) {

}


function ponerJugadores(noEquipo) {
    let jugadoresEquipo;
    let nombreEquipo;
    let htmlElementoJugadores;
    let equipoNombre
    if (noEquipo==1) {
        jugadoresEquipo = jugadoresEquipo1;
        nombreEquipo = equipo1;
        htmlElementoJugadores = document.getElementById("lista-equipo1");
        equipoNombre = document.getElementById("equipo1nombre");
    } else {
        jugadoresEquipo = jugadoresEquipo2;
        nombreEquipo = equipo2;
        htmlElementoJugadores = document.getElementById("lista-equipo2");
        equipoNombre = document.getElementById("equipo2nombre");
    }

    
    let jugador = "";
    for (i = 0; i < jugadoresEquipo.length; i++) {
    jugador +="<tr>"+
        "<td>"+jugadoresEquipo[i][1]+"</td>"+
        "<td>"+jugadoresEquipo[i][0]+"</td>"+
        "<td>"+jugadoresEquipo[i][2]+"</td>"+
        "<td>"+jugadoresEquipo[i][4]+"</td>"+
        "<td>"+jugadoresEquipo[i][6]+"</td>"+
        "<td></td></tr>";
    }
    htmlElementoJugadores.innerHTML = jugador;
    equipoNombre.innerText = nombreEquipo;
}
