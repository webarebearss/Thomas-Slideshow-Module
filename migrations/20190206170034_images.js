
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('images', function(table) {
      table.increments('imgId').primary();
      table.string('imgUrl');
      table.integer('listingId');
      table.integer('imgOrder');
      table.string('description');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('images')
  ])
};

// imageId NUMBER NOT NULL AUTO INCREMENT
// imageUrl STRING NOT NULL
// listingId NUMBER NOT NULL (foreign key) - (we’ll use static key for this mockup)
// imgOrder NUMBER NOT NULL
// Description STRING NULL DEFAULT NULL
