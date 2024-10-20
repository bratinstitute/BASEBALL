const players = [
    { no: 1, name: "Beau Alvarez", pos: "C", year: "Junior", ht: "6'2\"", wt: "210 lbs", hometown: "Redondo Beach, Calif.", school: "Redondo Union HS", bt: "R/R", image: "images/1 Beau Alvarez.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 2, name: "Kyson Frost", pos: "OF", year: "Junior", ht: "6'0\"", wt: "185 lbs", hometown: "Atlanta, Ga.", school: "Marist HS", bt: "R/R", image: "images/2 Kyson Frost.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 3, name: "Dalton Seeker", pos: "OF", year: "Junior", ht: "6'1\"", wt: "190 lbs", hometown: "Mooresville, Ind.", school: "Mooresville HS", bt: "L/L", image: "images/3 Dalton Seeker.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 4, name: "Bryce Ready", pos: "INF", year: "Freshman", ht: "6'2\"", wt: "220 lbs", hometown: "Murrysville, Pa.", school: "Franklin Regional HS", bt: "R/R", image: "images/4 Bryce Ready.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 5, name: "KJ DeBarge", pos: "INF", year: "Junior", ht: "6'3\"", wt: "190 lbs", hometown: "Potomac, Md.", school: "Bullis HS", bt: "R/R", image: "images/5 KJ DeBarge.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 6, name: "Tanner Swain", pos: "INF", year: "Sophomore", ht: "6'5\"", wt: "240 lbs", hometown: "Syracuse, N.Y.", school: "Cicero-North Syracuse HS", bt: "R/R", image: "images/6 Tanner Swain.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 7, name: "Trey Favors", pos: "INF", year: "Freshman", ht: "5'10\"", wt: "175 lbs", hometown: "San Diego, Calif.", school: "St. Augustine HS", bt: "L/R", image: "images/7 Trey Favors.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 8, name: "Matt Pennington", pos: "INF", year: "Junior", ht: "6'0\"", wt: "200 lbs", hometown: "Rockaway, N.J.", school: "Morris Knolls HS", bt: "R/R", image: "images/8 Matt Pennington.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 9, name: "Walker Mendez", pos: "INF", year: "Sophomore", ht: "5'10\"", wt: "190 lbs", hometown: "Wayne, N.J.", school: "Wayne Hills HS", bt: "L/R", image: "images/9 Walker Mendez.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 10, name: "Kenneth Couture", pos: "LHP", year: "Freshman", ht: "6'6\"", wt: "180 lbs", hometown: "Brooklyn, N.Y.", school: "Jefferson HS", bt: "L/L", image: "images/10 Kenneth Couture.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 11, name: "Khal Valdez", pos: "RHP", year: "Sophomore", ht: "6'4\"", wt: "205 lbs", hometown: "Naples, Fla.", school: "Gulf Coast HS", bt: "R/R", image: "images/11 Khal Valdez.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 12, name: "Reese Witherspoon", pos: "RHP", year: "Sophomore", ht: "6'1\"", wt: "195 lbs", hometown: "San Antonio, Texas", school: "Warren HS", bt: "R/R", image: "images/12 Reese Witherspoon.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 14, name: "RJ Zimbardo", pos: "C", year: "Freshman", ht: "5'10\"", wt: "180 lbs", hometown: "Fresno, Calif.", school: "Fresno HS", bt: "R/R", image: "images/14 RJ Zimbardo.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 15, name: "Michael Vu", pos: "RHP", year: "Sophomore", ht: "6'2\"", wt: "180 lbs", hometown: "Las Vegas, Nev.", school: "Palo Verde HS", bt: "R/R", image: "images/15 Michael Vu.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 16, name: "Dean Devine", pos: "LHP", year: "Junior", ht: "5'11\"", wt: "190 lbs", hometown: "Fort Smith, Ark.", school: "Northside HS", bt: "L/L", image: "images/16 Dean Devine.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 17, name: "Griffin Kuntz", pos: "OF", year: "Senior", ht: "6'1\"", wt: "190 lbs", hometown: "San Jose, Calif.", school: "Pioneer HS", bt: "L/L", image: "images/17 Griffin Kuntz.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 18, name: "Clayton Krauss", pos: "RHP", year: "Senior", ht: "6'5\"", wt: "225 lbs", hometown: "Fairfield, Conn.", school: "Fairfield Warde HS", bt: "R/R", image: "images/18 Clayton Krauss.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 19, name: "Blake Blanco", pos: "OF", year: "Sophomore", ht: "6'0\"", wt: "215 lbs", hometown: "Phoenix, Ariz.", school: "O'Connor HS", bt: "R/R", image: "images/19 Blake Blanco.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 21, name: "Carter	Sass", pos: "OF", year: "Freshman", ht: "6'1\"", wt: "180 lbs", hometown: "Suwanee, Ga.", school: "North Gwinnett HS", bt: "R/R", image: "images/21 Carter Sass.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 22, name: "Aaron Toole", pos: "RHP", year: "Freshman", ht: "5'11\"", wt: "170 lbs", hometown: "New York, N.Y.", school: "Poly Prep HS", bt: "R/R", image: "images/22 Aaron Toole.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 23, name: "Tyler Quinlan", pos: "LHP", year: "Junior", ht: "6'3\"", wt: "215 lbs", hometown: "Keller, Texas", school: "Keller HS", bt: "L/L", image: "images/23 Tyler Quinlan.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 24, name: "Jordan Mallory Jr.", pos: "OF", year: "Sophomore", ht: "6'2\"", wt: "185 lbs", hometown: "Bellaire, Texas", school: "Episcopal HS", bt: "L/R", image: "images/24 Jordan Mallory Jr.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 25, name: "Garret Smink", pos: "UT", year: "Junior", ht: "6'1\"", wt: "210 lbs", hometown: "Newton, Mass.", school: "Newton North HS", bt: "R/R", image: "images/25 Garret Smink.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 26, name: "Kellen Mercer", pos: "RHP", year: "Senior", ht: "6'2\"", wt: "190 lbs", hometown: "Narragansett, R.I.", school: "Narragansett HS", bt: "R/R", image: "images/26 Kellan Mercer.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 27, name: "Nick Driscoll", pos: "RHP", year: "Freshman", ht: "5'11\"", wt: "175 lbs", hometown: "Oakwood, Ohio", school: "Oakwood HS", bt: "R/R", image: "images/27 Nick Driscoll.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 29, name: "Niko Serrano", pos: "INF", year: "Junior", ht: "6'0\"", wt: "185 lbs", hometown: "Winston-Salem, N.C.", school: "Oak Grove HS", bt: "L/R", image: "images/29 Niko Serrano.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 31, name: "Chris McCrystal", pos: "LHP", year: "Senior", ht: "6'3\"", wt: "215 lbs", hometown: "Golden, Colo.", school: "Golden HS", bt: "L/R", image: "images/31 Chris McCrystal.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 32, name: "Jurrangelo Kryszczuk", pos: "RHP", year: "Junior", ht: "6'5\"", wt: "220 lbs", hometown: "Gurnee, Ill.", school: "Warren Township HS", bt: "R/R", image: "images/32 Jurrangelo Kryszczuk.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 33, name: "Mitch Grinsell", pos: "C", year: "Senior", ht: "6'1\"", wt: "205 lbs", hometown: "Sugar Land, Texas", school: "Fort Bend Clements HS", bt: "R/R", image: "images/33 Mitch Grinsell.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 34, name: "Tatsunori Schmidt", pos: "UT", year: "Freshman", ht: "6'1\"", wt: "200 lbs", hometown: "Lexington, Mass.", school: "Minuteman Regional HS", bt: "L/L", image: "images/34 Tatsunori Schmidt.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 36, name: "Dom Compton", pos: "RHP", year: "Junior", ht: "6'0\"", wt: "195 lbs", hometown: "Boca Raton, Fla.", school: "Boca Raton HS", bt: "R/R", image: "images/36 Dom Compton.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 38, name: "Luke Pooser", pos: "LHP", year: "Sophomore", ht: "6'2\"", wt: "190 lbs", hometown: "Staten Island, N.Y.", school: "Tottenville HS", bt: "L/L", image: "images/38 Luke Pooser.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 39, name: "Travis Desandro", pos: "1B", year: "Sophomore", ht: "6'3\"", wt: "200 lbs", hometown: "Oakland, Calif.", school: "Fremont HS", bt: "L/L", image: "images/39 Travis Desandro.jpg",
        bioLink: 'http://bratinstitute.com'},
    { no: 40, name: "Leighton D'Amato", pos: "INF", year: "Senior", ht: "6'1\"", wt: "210 lbs", hometown: "Austin, Texas", school: "Lake Travis HS", bt: "L/L", image: "images/40 Leighton D'Amato.jpg",
        bioLink: 'http://bratinstitute.com'},
];
