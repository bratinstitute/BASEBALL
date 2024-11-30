const players = [
    { no: 1, name: "Beau Alvarez", pos: "C", year: "Junior", ht: "6'2\"", wt: "210 lbs", hometown: "Redondo Beach, Calif.", school: "Redondo Union HS", bt: "R/R", image: "images/1 Beau Alvarez.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 2, name: "Kyson Frost", pos: "OF", year: "Junior", ht: "6'0\"", wt: "185 lbs", hometown: "Atlanta, Ga.", school: "Marist HS", bt: "R/R", image: "images/2 Kyson Frost.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 3, name: "Garret Smink", pos: "UT", year: "Junior", ht: "6'1\"", wt: "210 lbs", hometown: "Newton, Mass.", school: "Newton North HS", bt: "R/R", image: "images/3 Garret Smink.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 4, name: "Bryce Ready", pos: "INF", year: "Freshman", ht: "6'2\"", wt: "220 lbs", hometown: "Murrysville, Pa.", school: "Franklin Regional HS", bt: "R/R", image: "images/4 Bryce Ready.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 5, name: "KJ DeBarge", pos: "INF", year: "Junior", ht: "6'3\"", wt: "190 lbs", hometown: "Potomac, Md.", school: "Bullis HS", bt: "R/R", image: "images/5 KJ DeBarge.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 6, name: "Tanner Swain", pos: "INF", year: "Sophomore", ht: "6'5\"", wt: "240 lbs", hometown: "Syracuse, N.Y.", school: "Cicero-North Syracuse HS", bt: "R/R", image: "images/6 Tanner Swain.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 7, name: "Trey Favors", pos: "INF", year: "Freshman", ht: "5'10\"", wt: "175 lbs", hometown: "San Diego, Calif.", school: "St. Augustine HS", bt: "L/R", image: "images/7 Trey Favors.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 8, name: "Tatsunori Schmidt", pos: "UT", year: "Freshman", ht: "6'1\"", wt: "200 lbs", hometown: "Lexington, Mass.", school: "Minuteman Regional HS", bt: "L/L", image: "images/8 Tatsunori Schmidt.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 9, name: "Walker Mendez", pos: "INF", year: "Sophomore", ht: "6'3\"", wt: "205 lbs", hometown: "Wayne, N.J.", school: "Wayne Hills HS", bt: "L/R", image: "images/9 Walker Mendez.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 10, name: "Clyde Babee", pos: "RHP", year: "Freshman", ht: "5'11\"", wt: "0 lbs", hometown: "Houston, Texas", school: "Cy Ranch HS", bt: "R/R", image: "images/10 Clyde Babee.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 11, name: "Khal Valdez", pos: "RHP", year: "Sophomore", ht: "6'1\"", wt: "180 lbs", hometown: "Naples, Fla.", school: "Gulf Coast HS", bt: "R/R", image: "images/11 Khal Valdez.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 12, name: "Tressa Scar", pos: "OF", year: "Freshman", ht: "5'10\"", wt: "0 lbs", hometown: "San Marcos, Calif.", school: "San Marcos HS", bt: "R/R", image: "images/12 Tressa Scar.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 13, name: "Reese Witherspoon", pos: "RHP", year: "Sophomore", ht: "6'1\"", wt: "195 lbs", hometown: "San Antonio, Texas", school: "Warren HS", bt: "R/R", image: "images/13 Reese Witherspoon.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 14, name: "RJ Zimbardo", pos: "C", year: "Freshman", ht: "5'10\"", wt: "180 lbs", hometown: "Fresno, Calif.", school: "Fresno HS", bt: "R/R", image: "images/14 RJ Zimbardo.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 15, name: "Dalton Seeker", pos: "OF", year: "Junior", ht: "6'1\"", wt: "190 lbs", hometown: "Mooresville, Ind.", school: "Mooresville HS", bt: "L/L", image: "images/15 Dalton Seeker.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 16, name: "Dean Devine", pos: "LHP", year: "Junior", ht: "5'11\"", wt: "200 lbs", hometown: "Fort Smith, Ark.", school: "Northside HS", bt: "L/L", image: "images/16 Dean Devine.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 17, name: "Griffin Kuntz", pos: "LHP", year: "Senior", ht: "6'1\"", wt: "190 lbs", hometown: "San Jose, Calif.", school: "Pioneer HS", bt: "L/L", image: "images/17 Griffin Kuntz.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 18, name: "Clayton Krauss", pos: "RHP", year: "Senior", ht: "6'5\"", wt: "225 lbs", hometown: "Fairfield, Conn.", school: "Fairfield Warde HS", bt: "R/R", image: "images/18 Clayton Krauss.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 19, name: "Blake Blanco", pos: "OF", year: "Sophomore", ht: "6'0\"", wt: "210 lbs", hometown: "Phoenix, Ariz.", school: "O'Connor HS", bt: "R/R", image: "images/19 Blake Blanco.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 20, name: "Yorks Font", pos: "OF", year: "Junior", ht: "6'0\"", wt: "0 lbs", hometown: "Corona, Calif.", school: "Corona HS", bt: "R/R", image: "images/20 Yorks Font.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 21, name: "Carter	Sass", pos: "OF", year: "Freshman", ht: "6'1\"", wt: "180 lbs", hometown: "Suwanee, Ga.", school: "North Gwinnett HS", bt: "R/R", image: "images/21 Carter Sass.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 22, name: "Michael Vu", pos: "RHP", year: "Sophomore", ht: "6'2\"", wt: "180 lbs", hometown: "Las Vegas, Nev.", school: "Palo Verde HS", bt: "R/R", image: "images/22 Michael Vu.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 23, name: "Tyler Quinlan", pos: "OF", year: "Junior", ht: "6'3\"", wt: "215 lbs", hometown: "Keller, Texas", school: "Keller HS", bt: "L/L", image: "images/23 Tyler Quinlan.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 24, name: "Jordan Mallory Jr.", pos: "OF", year: "Sophomore", ht: "6'2\"", wt: "200 lbs", hometown: "Bellaire, Texas", school: "Episcopal HS", bt: "L/R", image: "images/24 Jordan Mallory Jr.png",
        bioLink: 'http://bratinstitute.com'},
    { no: 25, name: "Aaron Toole", pos: "RHP", year: "Freshman", ht: "5'11\"", wt: "170 lbs", hometown: "New York, N.Y.", school: "Poly Prep HS", bt: "R/R", image: "images/25 Aaron Toole.png",
        bioLink: 'http://bratinstitute.com'},
    { no: 26, name: "Kellen Mercer", pos: "RHP", year: "Senior", ht: "6'2\"", wt: "205 lbs", hometown: "Narragansett, R.I.", school: "Narragansett HS", bt: "R/R", image: "images/26 Kellan Mercer.png",
        bioLink: 'http://bratinstitute.com'},
    { no: 27, name: "Nick Driscoll", pos: "RHP", year: "Freshman", ht: "5'11\"", wt: "175 lbs", hometown: "Oakwood, Ohio", school: "Oakwood HS", bt: "R/R", image: "images/27 Nick Driscoll.png",
        bioLink: 'http://bratinstitute.com'},
    { no: 28, name: "Kenneth Couture", pos: "LHP", year: "Freshman", ht: "6'6\"", wt: "185 lbs", hometown: "Brooklyn, N.Y.", school: "Jefferson HS", bt: "L/L", image: "images/28 Kenneth Couture.png",
        bioLink: 'http://bratinstitute.com'},
    { no: 29, name: "Niko Serrano", pos: "INF", year: "Junior", ht: "6'0\"", wt: "185 lbs", hometown: "Winston-Salem, N.C.", school: "Oak Grove HS", bt: "L/R", image: "images/29 Niko Serrano.png",
        bioLink: 'http://bratinstitute.com'},
    { no: 30, name: "Kermit Grastan", pos: "UT", year: "Junior", ht: "6'1\"", wt: "0 lbs", hometown: "Brookline, Mass.", school: "Brookline HS", bt: "R/R", image: "images/30 Kermit Grastan.png",
        bioLink: 'http://bratinstitute.com'},
    { no: 31, name: "Chris McCrystal", pos: "LHP", year: "Senior", ht: "6'3\"", wt: "215 lbs", hometown: "Golden, Colo.", school: "Golden HS", bt: "L/L", image: "images/31 Chris McCrystal.png",
        bioLink: 'http://bratinstitute.com'},
    { no: 32, name: "Jurrangelo Kryszczuk", pos: "RHP", year: "Junior", ht: "6'5\"", wt: "220 lbs", hometown: "Gurnee, Ill.", school: "Warren Township HS", bt: "R/R", image: "images/32 Jurrangelo Kryszczuk.png",
        bioLink: 'http://bratinstitute.com'},
    { no: 33, name: "Mitch Grinsell", pos: "C", year: "Senior", ht: "6'1\"", wt: "205 lbs", hometown: "Sugar Land, Texas", school: "Fort Bend Clements HS", bt: "R/R", image: "images/33 Mitch Grinsell.png",
        bioLink: 'http://bratinstitute.com'},
    { no: 34, name: "Matt Pennington", pos: "INF", year: "Junior", ht: "6'2\"", wt: "210 lbs", hometown: "Rockaway, N.J.", school: "Morris Knolls HS", bt: "R/R", image: "images/34 Matt Pennington.png",
        bioLink: 'http://bratinstitute.com'},
    { no: 35, name: "Linzora Shatzman", pos: "LHP", year: "Sophomore", ht: "5'8\"", wt: "0 lbs", hometown: "Mason, Ohio", school: "Ursuline Academy", bt: "L/L", image: "images/35 Linzora Shatzman.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 36, name: "Dom Compton", pos: "RHP", year: "Junior", ht: "6'0\"", wt: "195 lbs", hometown: "Boca Raton, Fla.", school: "Boca Raton HS", bt: "R/R", image: "images/36 Dom Compton.png",
        bioLink: 'http://bratinstitute.com'},
    { no: 37, name: "Melvin Carroule", pos: "C", year: "Junior", ht: "6'2\"", wt: "0 lbs", hometown: "Scottsdale, Ariz.", school: "Saguaro HS", bt: "R/R", image: "images/37 Melvin Carroule.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 38, name: "Luke Pooser", pos: "LHP", year: "Sophomore", ht: "6'4\"", wt: "215 lbs", hometown: "Staten Island, N.Y.", school: "Tottenville HS", bt: "L/L", image: "images/38 Luke Pooser.png",
        bioLink: 'http://bratinstitute.com'},
    { no: 39, name: "Travis Desandro", pos: "1B", year: "Sophomore", ht: "6'3\"", wt: "190 lbs", hometown: "Oakland, Calif.", school: "Fremont HS", bt: "L/L", image: "images/39 Travis Desandro.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 40, name: "Leighton D'Amato", pos: "INF", year: "Senior", ht: "6'1\"", wt: "210 lbs", hometown: "Austin, Texas", school: "Lake Travis HS", bt: "L/L", image: "images/40 Leighton D'Amato.png",
        bioLink: 'http://bratinstitute.com'},
    { no: 41, name: "Maina Dogsta", pos: "1B", year: "Senior", ht: "5'10\"", wt: "0 lbs", hometown: "Langley, B.C.", school: "Brookswood Secondary", bt: "L/L", image: "images/41 Maina Dogsta.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 43, name: "Brent Tracer", pos: "RHP", year: "Senior", ht: "6'3\"", wt: "0 lbs", hometown: "Sydney, Australia", school: "Turramurra HS", bt: "R/R", image: "images/43 Brent Tracer.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 44, name: "Donnisa Chilsick", pos: "LHP", year: "Junior", ht: "5'9\"", wt: "0 lbs", hometown: "Marietta, Georgia", school: "Walton HS", bt: "L/L", image: "images/44 Donnisa Chilsick.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 45, name: "Elmo Stich", pos: "INF", year: "Sophomore", ht: "6'0\"", wt: "0 lbs", hometown: "Waianae, Hawai'i", school: "Maryknoll HS", bt: "R/R", image: "images/45 Elmo Stich.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 47, name: "Reed Clonne", pos: "OF", year: "Sophomore", ht: "5'9\"", wt: "0 lbs", hometown: "Providence, Ky.", school: "Webster County HS", bt: "L/R", image: "images/47 Reed Clonne.png",
        bioLink: 'http://bratinstitute.com'},
    { no: 48, name: "Mony Coblas", pos: "RHP", year: "Junior", ht: "5'8\"", wt: "0 lbs", hometown: "Detroit, Mich.", school: "Central HS", bt: "R/R", image: "images/48 Mony Coblas.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 49, name: "Whres Eet", pos: "INF", year: "Junior", ht: "5'10\"", wt: "0 lbs", hometown: "Corpus Christi, Texas", school: "Mary Carroll HS", bt: "L/R", image: "images/49 Whres Eet.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 51, name: "Lanny Mandon", pos: "C", year: "Senior", ht: "5'9\"", wt: "0 lbs", hometown: "Los Angeles, Calif.", school: "Notre Dame HS", bt: "R/R", image: "images/51 Lanny Mandon.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 52, name: "Leona Rotor", pos: "RHP", year: "Freshman", ht: "5'10\"", wt: "0 lbs", hometown: "Memphis, Tenn.", school: "Collierville HS", bt: "R/R", image: "images/52 Leona Rotor.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 53, name: "Laren Pyton", pos: "UT", year: "Sophomore", ht: "5'8\"", wt: "0 lbs", hometown: "Rose Bud, Ark.", school: "Rose Bud HS", bt: "L/L", image: "images/53 Laren Pyton.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 54, name: "Cassio Farrane", pos: "RHP", year: "Junior", ht: "6'1\"", wt: "0 lbs", hometown: "Hartsville, S.C.", school: "Hartsville HS", bt: "R/R", image: "images/54 Cassio Farrane.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 55, name: "Nilo Socc", pos: "INF", year: "Senior", ht: "5'11\"", wt: "0 lbs", hometown: "Ballston Spa, N.Y.", school: "Ballston Spa HS", bt: "R/R", image: "images/55 Nilo Socc.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 57, name: "Mavis Shen", pos: "OF", year: "Senior", ht: "5'9\"", wt: "0 lbs", hometown: "Aurora, Illinois", school: "Oswego East HS", bt: "L/L", image: "images/57 Mavis Shen.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 60, name: "Warren Saint", pos: "INF", year: "Sophomore", ht: "6'5\"", wt: "0 lbs", hometown: "Oshkosh, Wisconsin", school: "Oshkosh North HS", bt: "R/R", image: "images/60 Warren Saint.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 62, name: "Reneck Mellet", pos: "RHP", year: "Senior", ht: "6'2\"", wt: "0 lbs", hometown: "Abbeville, La.", school: "Vermilion Catholic HS", bt: "R/R", image: "images/62 Reneck Mellet.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 63, name: "Ebolda Huntin", pos: "INF", year: "Freshman", ht: "5'9\"", wt: "0 lbs", hometown: "Port St. Lucie, Fla.", school: "Treasure Coast HS", bt: "R/R", image: "images/63 Ebolda Huntin.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 66, name: "Dante Info", pos: "C", year: "Freshman", ht: "6'3\"", wt: "0 lbs", hometown: "West Palm Beach, Fla.", school: "Palm Beach Gardens HS", bt: "R/R", image: "images/66 Dante Info.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 67, name: "Wren Pagon", pos: "INF", year: "Junior", ht: "5'9\"", wt: "0 lbs", hometown: "Cerritos, Calif.", school: "Gahr HS", bt: "L/R", image: "images/67 Wren Pagon.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 69, name: "Cumnong Hamdic", pos: "INF", year: "Freshman", ht: "6'2\"", wt: "0 lbs", hometown: "Niceville, Fla.", school: "Niceville HS", bt: "L/L", image: "images/69 Cumnong Hamdic.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 71, name: "Luffin Grikintz", pos: "LHP", year: "Senior", ht: "6'1\"", wt: "0 lbs", hometown: "San Jose, Calif.", school: "Leland HS", bt: "L/L", image: "images/71 Luffin Grikintz.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 75, name: "Lexy Adnhea", pos: "OF", year: "Sophomore", ht: "5'10\"", wt: "0 lbs", hometown: "San Antonio, Texas", school: "Sandra Day O'Connor HS", bt: "R/R", image: "images/75 Lexy Adnhea.png",
        bioLink: 'http://bratinstitute.com'},
    { no: 77, name: "Coin Klank", pos: "LHP", year: "Junior", ht: "6'2\"", wt: "0 lbs", hometown: "Reno, Nev.", school: "Reno HS", bt: "L/L", image: "images/77 Coin Klank.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 78, name: "Jolka Bot", pos: "RHP", year: "Sophomore", ht: "5'8\"", wt: "0 lbs", hometown: "Seoul, South Korea", school: "Kyunggi HS", bt: "R/R", image: "images/78 Jolka Bot.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 82, name: "Tucketh Norene", pos: "LHP", year: "Freshman", ht: "6'0\"", wt: "0 lbs", hometown: "Carmel, Ind.", school: "University HS", bt: "L/L", image: "images/82 Tucketh Norene.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 84, name: "Blon Narkel", pos: "RHP", year: "Junior", ht: "5'11\"", wt: "0 lbs", hometown: "Hayward, Calif.", school: "Moreau Catholic HS", bt: "R/R", image: "images/84 Blon Narkel.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 88, name: "Nutpuck Minimick", pos: "RHP", year: "Sophomore", ht: "6'4\"", wt: "0 lbs", hometown: "Halifax, Nova Scotia", school: "Foothills Composite HS", bt: "R/R", image: "images/88 Nutpuck Minimick.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 92, name: "Rokie Sarnon", pos: "INF", year: "Junior", ht: "5'9\"", wt: "0 lbs", hometown: "Mission Viejo, Calif.", school: "Capistrano Valley HS", bt: "L/R", image: "images/92 Rokie Sarnon.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 99, name: "Yonk Ribell", pos: "OF", year: "Freshman", ht: "5'11\"", wt: "0 lbs", hometown: "Albuquerque, N.M.", school: "Sandia HS", bt: "L/R", image: "images/99 Yonk Ribell.jpg",
        bioLink: 'http://bratinstitute.com'},
];
