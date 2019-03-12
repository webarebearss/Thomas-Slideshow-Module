const faker = require('faker');
const Room = require('../../models/Room');

const seed = () => {
  Room.create(sampleImgSet(100))
}

let runningCount = 1;

function sampleImgSet(numOfListings) {
  let imgArr = [];
  let listingId = 1;

  while (listingId <= numOfListings) {
    let imageCount = 6 + Math.floor((bearPics.length - 20) * Math.random())
    let pics = new BearPics();
    for (let i = 0; i < imageCount; i++) {
      imgArr.push(
        {
          imgUrl: pics.generate(),
          listingId: runningCount,
          imgOrder: i,
          description: faker.fake("{{random.words}}, {{random.words}}, {{random.words}}")
        }
      )
    }
    listingId++;
    runningCount++;
  }
  return imgArr;
}

function BearPics() {
  let lastUsed;
  let proposedPic;

  this.generate = () => {
    proposedPic = Math.floor(Math.random() * bearPics.length);
    while (proposedPic === lastUsed) {
      proposedPic = Math.floor(Math.random() * bearPics.length);
    }

    lastUsed = proposedPic;
    return bearPics[proposedPic];
  }
}

let bearPics = [
  'https://i.imgur.com/c2a0Kfc.jpg',
  'https://i.imgur.com/Gqadqrx.jpg',
  'https://i.imgur.com/zgkoJVn.jpg',
  'https://i.imgur.com/wCRubbP.jpg',
  'https://i.imgur.com/n6IAdeF.jpg',
  'https://i.imgur.com/tfMSeh7.jpg',
  'https://i.imgur.com/b0H92yf.jpg',
  'https://i.imgur.com/hNAE9Ry.jpg',
  'https://i.imgur.com/JbkxVjR.jpg',
  'https://i.imgur.com/hBJp4eW.jpg',
  'https://i.imgur.com/PkrFeTE.jpg',
  'https://i.imgur.com/99g1yC8.png',
  'https://i.imgur.com/sxMv5f4.jpg',
  'https://i.imgur.com/lEfJLWb.jpg',
  'https://i.imgur.com/bNFYjsM.jpg',
  'https://i.imgur.com/PCcGRd8.jpg',
  'https://i.imgur.com/D23rkPo.jpg',
  'https://i.imgur.com/l2YgfUy.jpg',
  'https://i.imgur.com/Xro5dJn.jpg',
  'https://i.imgur.com/SEKVc7G.jpg',
  'https://i.imgur.com/QeOwAEM.jpg',
  'https://i.imgur.com/lOh75gt.jpg',
  'https://i.imgur.com/BfaRAMr.jpg',
  'https://i.imgur.com/keTGHHx.jpg'
];

seed();