var bardata = [
{  "Name":"12 Bar Club",
	"Location":" 26 Denmark Street, London WC2H 8NJ",
	"img":"https://mw2.google.com/mw-panoramio/photos/small/21899204.jpg",
	"Opening hours":"19:00-03:00",
	"Description":"Compact live music bar with a packed programme featuring rock, blues and folk acts every night.",
	},
	{  "Name":"Roundhouse",
	"Location":"Chalk Farm Road, London NW1 8EH",
	"img":"https://mw2.google.com/mw-panoramio/photos/small/45943012.jpg",
	"Opening hours":"...",
	"Description":"Distinctive former Victorian railway shed, now hosts live music, circus and alternative theatre.",
	},
	{  "Name":"Bar Soho",
	"Location":" 23-25 Old Compton St, London W1D 5JL",
	"img":"https://lh5.googleusercontent.com/-lFPZ_VLqTMI/U4T_Jhr2HyI/AAAAAAAAxew/z7qrIQr_LbU/s285-k-no/photo.jpg",
	"Opening hours":"12:00-00:30",
	"Description":"Cocktail bar with mirrored walls and a fairground horse, or decadent boudoir with baths for seats.",
	},
	{  "Name":"The Black Cap",
	"Location":"171 Camden High St, London NW1 7JY",
	"img":"https://mw2.google.com/mw-panoramio/photos/small/62874349.jpg",
	"Opening hours":"12:00-02:00",
	"Description":"Enduring gay pub with garden terrace and karaoke, known for hosting regular drag cabaret shows.",
	},
	{  "Name":"Barfly",
	"Location":"49 Chalk Farm Rd, London NW1 8AN",
	"img":"https://mw2.google.com/mw-panoramio/photos/small/76648976.jpg",
	"Opening hours":"15:00-03:00",
	"Description":"Established indie haunt that plays host to popular and budding talent, and has regular club nights",
	},
	{  "Name":"The Hill Bar & Brasserie",
	"Location":"Steeles Studios, Haverstock Hill, London NW3 4RN",
	"img":"https://lh6.googleusercontent.com/-4lVIxzoKYf0/UvjJkzDWaBI/AAAAAAAAAIc/GqdrZaGnzO8/s161-k-no/DSC_0077.JPG",
	"Opening hours":"12:00-00:30",
	"Description":"Polished gastropub with a classic interior of mirrors and wood and a Pacific North American menu",
	},
	{  "Name":"inSpiral Lounge",
	"Location":"250 Camden High St, London NW1 8QS",
	"img":"https://lh6.googleusercontent.com/-8d8_RPW1Afo/Ut_YJ3LnhmI/AAAAAAAAcmM/1SSdBxpeY1o/s240-k-no/photo.jpg",
	"Opening hours":"...",
	"Description":"Canalside vegan cafe/bar, run on renewable energy, with intimate music and spoken word performances.",
	},
	{  "Name":"Gilgamesh London",
	"Location":"The Stables Market, Chalk Farm Rd, London NW1 8AH",
	"img":"https://lh3.googleusercontent.com/-AbdVz-BXYUE/U6yVdJJWHhI/AAAAAAAA0TQ/dwdqduOkvQ8/s240-k-no/photo.jpg",
	"Opening hours":"12:00-00:00",
	"Description":"Dim sum, sushi and cocktails in elaborate Indian-chic setting with wood carvings and open kitchen",
	},
	{  "Name":"Koko",
	"Location":"1a Camden High St, London NW1 7JE",
	"img":"https://lh3.googleusercontent.com/-FkLek6WJaj4/Ut_be1h4yOI/AAAAAAAAcWI/khQSwmSw0PQ/s239-k-no/photo.jpg",
	"Opening hours":"07:00-20:00",
	"Description":"Live, big-Name indie, rock and dance music plus club nights in palatial former theatre.",
	},
	{  "Name":"Jazz Café",
	"Location":"5 Parkway, Camden, London NW1 7PG",
	"img":"https://mw2.google.com/mw-panoramio/photos/small/3321076.jpg",
	"Opening hours":"19:00-00:00",
	"Description":"Intimate venue for jazz, soul, reggae and more from homegrown and international stars.",
	}];
	
var names =[]
	for (i = 0; i < bardata.length; i++){
	names.push(bardata[i].Name)
};
var Names =function(){
	return names
}

var locations =[]
	for (i = 0; i < bardata.length; i++){
	locations.push(bardata[i].Location)
}; 
var Locations =function(){
	return locations
}

var images =[]
	for (i = 0; i < bardata.length; i++){
	images.push(bardata[i].img)
}; 
var Images =function(){
	return images
}
