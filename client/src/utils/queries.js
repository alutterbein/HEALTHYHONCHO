import { gql } from '@apollo/client';

export const QUERY_PROFILE = gql `
query profile($profileId: ID!) {
  profile(profileId: $profileId) {
    _id
    name
    email
    wellness {
      _id
      caloriesBenchmark
      proteinBenchmark
      fiberBenchmark
      fatsBenchmark
      carbohydratesBenchmark
      hourExercise
      halfHourExercise
      cardio
      weightlift
      createdAt
    }
  }
}
`;

export const QUERY_ME = gql `
query Me {
  me {
    _id
    name
    email
    wellness {
      _id
      caloriesBenchmark
      proteinBenchmark
      fiberBenchmark
      fatsBenchmark
      carbohydratesBenchmark
      hourExercise
      halfHourExercise
      cardio
      weightlift
      createdAt
    }
  }
}`;

export const QUERY_ALL = gql `
query profiles {
  profiles {
    _id
    name
    email
    wellness {
      _id
      caloriesBenchmark
      proteinBenchmark
      fiberBenchmark
      fatsBenchmark
      carbohydratesBenchmark
      hourExercise
      halfHourExercise
      cardio
      weightlift
      createdAt
    }
  }
}`;

export const QUERY_WELLNESS = gql `
query wellness($wellnessId: ID!) {
  wellness(wellnessID: $wellnessId) {
    _id
    caloriesBenchmark
    proteinBenchmark
    fiberBenchmark
    fatsBenchmark
    carbohydratesBenchmark
    hourExercise
    halfHourExercise
    cardio
    weightlift
    createdAt
  }
}
`;

