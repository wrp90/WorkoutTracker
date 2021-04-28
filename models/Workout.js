const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
   workouts: [
       {
           type: {
               type: String,
               required: true,
           },
           name: {
               type: String,
               required: true
           },
           duration: {
               type: Number,
               required: true
           },
           weight: {
               type: Number
           },
           reps: {
               type: Number
           },
           sets: {
               type: Number
           },
           distance: {
               type: Number
           }
       }
   ],
   day: {
       type: Date,
       defualt: Date.now
   }
});

const workoutModel = mongoose.model('Workout', WorkoutSchema);
module.exports = workoutModel;
