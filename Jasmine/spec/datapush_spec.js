describe ("names", function() {
   
		it("returns an array of names", function () {
		expect(Names()).toContain('Bar Soho');
		expect(Names()).toContain('Koko');
		});
	});

describe ("Locations", function() {
   
		it("returns an array of Locations", function () {
		expect(Locations()).toContain('Chalk Farm Road, London NW1 8EH');
		
		});
	});
	
describe ("Images", function() {
   
		it("returns an array of images", function () {
		expect(Images()).toContain('https://lh5.googleusercontent.com/-lFPZ_VLqTMI/U4T_Jhr2HyI/AAAAAAAAxew/z7qrIQr_LbU/s285-k-no/photo.jpg');
		expect(Images()).toContain('https://lh3.googleusercontent.com/-AbdVz-BXYUE/U6yVdJJWHhI/AAAAAAAA0TQ/dwdqduOkvQ8/s240-k-no/photo.jpg');
		});
	});