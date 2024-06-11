const db = require('../config/connection');
const { Profile, Wellness } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Profile', 'profile');
  await cleanDB('Wellness', 'wellness');

  
  const wellnessData = await Wellness.insertMany([

    {   
      caloriesBenchmark: true,
        proteinBenchmark: true,
        fiberBenchmark: true,
        fatsBenchmark: true,
        carbohydratesBenchmark: true,
        hourExercise: true,
        halfHourExercise: true,
        cardio: true,
        weightlift: true,
    },
    {   
      caloriesBenchmark: true,
        proteinBenchmark: true,
        fiberBenchmark: true,
        fatsBenchmark: true,
        carbohydratesBenchmark: true,
        hourExercise: true,
        halfHourExercise: true,
        cardio: true,
        weightlift: true,
    }
  ]);

  console.log('wellness seeded');

  await Profile.create({
    name: 'THE honcho',
    email: 'honcho@testmail.com',
    password: 'password',
    wellness: [
      {
        _id: [wellnessData[0]._id],
        caloriesBenchmark: [wellnessData[0].caloriesBenchmark],
        proteinBenchmark: [wellnessData[0].proteinBenchmark],
        fiberBenchmark: [wellnessData[0].fiberBenchmark],
        fatsBenchmark: [wellnessData[0].fatsBenchmark],
        carbohydratesBenchmark: [wellnessData[0].carbohydratesBenchmark],
        hourExercise: [wellnessData[0].hourExercise],
        halfHourExercise: [wellnessData[0].halfHourExercise],
        cardio: [wellnessData[0].cardio],
        weightlift: [wellnessData[0].weightlift]
      
    }
    ]
      
    
  });


  console.log('profile seeded');

  process.exit();
});
