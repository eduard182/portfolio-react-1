const baseUrl = 'http://nicolasreichert.com/images/';

function createImageUrl(imageName) {
  return `${baseUrl}${imageName}`;
}

const images = {
  // Home page
  homeButton1: createImageUrl('home/box-1.png'),
  homeButton1Hover: createImageUrl('home/box-fill-1.png'),
  homeButton2: createImageUrl('home/box-2.png'),
  homeButton2Hover: createImageUrl('home/box-fill-2.png'),
  homeButton3: createImageUrl('home/box-3.png'),
  homeButton3Hover: createImageUrl('home/box-fill-3.png'),

  // Skills page

  // About page
  aboutBoard: createImageUrl('about/board.png'),
  aboutPhoto: createImageUrl('about/photo.png'),
  aboutPhotoBackground: createImageUrl('about/photo-background.png'),

  // Projects page

  // Contacts page
};

export default images;
