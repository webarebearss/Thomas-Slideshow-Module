const faker = require('faker');

exports.seed = function(knex, Promise) {
  return knex('images').del()
    .then(function () {
      return knex('images').insert(sampleImgSet());
    });
};

function sampleImgSet() {
  let imgArr = [];
  for (let i = 1; i <= 18; i++) {
    imgArr.push(
      {
        imgId: i,
        imgUrl: faker.image.image(),
        listingId: 1000,
        imgOrder: i,
        description: faker.random.words()
      }
    )
  }
  return imgArr;
}