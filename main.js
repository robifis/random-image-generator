const imageSizes = [
	'640x480',
	'800x600',
	'480x350',
	'1000x1000',
	'750x500',
	'480x800',
	'960x960',
	'400x400',
	'400x500',
	'500x400',
	'450x540',
	'800x700',
	'800x500',
	'950x840',
	'740x490',
	'800x300',
	'500x450',
	'1000x1000',
	'1250x590',
	'480x500',
	'960x960',
	'400x400',
	'400x500',
	'500x400',
	'450x540',
	'800x700',
	'728 x 90',
	'800x400',
	'640 x 480',
	'1280 x 1024',
	'1024 x 768'
];

const categories = [
	'nature',
	'dogs',
	'fruit',
	'landscape',
	'wallpapers',
	'textures-patterns',
	'architecture',
	'travel',
	'food-drink',
	'experimental',
	'current-events'
];

const websiteImages = imageSizes.forEach(() => {
	const randomSize = imageSizes[Math.floor(Math.random() * imageSizes.length)];
	const randomCat = categories[Math.floor(Math.random() * categories.length)];
	const url = `https://source.unsplash.com/random/${randomSize}/?${randomCat}`;

	const listItem = document.createElement('li');
	const createImage = document.createElement('img');
	createImage.setAttribute('src', url);
	const final = listItem.appendChild(createImage);

	const list = document.querySelector('ul');
	list.appendChild(final);
});
