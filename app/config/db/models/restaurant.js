var mongoose     = require('mongoose'),

RestaurantSchema = mongoose.model('Restaurant', {
  name        :  {
                  type     : String,
                  required : true
                 },
  description :  {
                  type     : String,
                  required : true
                 },
  cuisine     :  {
                    type     : String,
                    required : true,
                 },
  street      :  {
                  type     : String,
                  required : true,
                  index    : {
                              unique : true
                             }
                 },
  state       :  {
                  type     : String,
                  required : true
                 },
  city        :  {
                  type     : String,
                  required : true
                 },
  zip         :  {
                  type     : Number,
                  required : true
                 },
  website     :  {
                  type : String,
                  required : false
                 },
  phone       :  {
                  type : String,
                  required : false
                 },
  email       :  {
                  type     : String,
                  required : false
                 }
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
