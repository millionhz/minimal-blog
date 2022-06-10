const mongoose = require('mongoose');

const defaults = [
  {
    title: 'Day 1',
    content:
      'Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.',
  },
  {
    title: 'Day 2',
    content:
      'Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.',
  },
];

const postSchema = mongoose.Schema({
  title: {
    type: String,
    maxLength: [100, 'Max length exceeded'],
    required: [
      function () {
        return this.title !== '';
      },
      'Title can not be empty',
    ],
    trim: true,
  },
  content: {
    type: String,
    maxLength: [10000, 'Max length exceeded'],
    required: [
      function () {
        return this.content !== '';
      },
      'Content can not be empty',
    ],
    trim: true,
  },
});

postSchema.statics.getPosts = function () {
  return this.find({}).exec();
};

postSchema.statics.getPostById = function (id) {
  return this.findById(id).exec();
};

postSchema.statics.deletePostById = function (id) {
  return this.findByIdAndDelete(id).exec();
};

postSchema.statics.addPost = function (title, content) {
  return this({
    title,
    content,
  }).save();
};

postSchema.statics.initDevDB = async function () {
  await this.deleteMany({}).exec();
  await this.insertMany(defaults);
};

if (process.env.NODE_ENV === 'development') {
  const devModel = mongoose.model('post_dev', postSchema);
  devModel.initDevDB();
  module.exports = devModel;
} else {
  module.exports = mongoose.model('post', postSchema);
}
