import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
mutation addProfile($name: String!, $email: String!, $password: String!) {
  addProfile(name: $name, email: $email, password: $password) {
    token
    profile {
      _id
      email
      name
    }
  }
}
`;
export const ADD_WELLNESS = gql `
mutation addWellness($caloriesBenchmark: Boolean!, $proteinBenchmark: Boolean!, $fiberBenchmark: Boolean!, $fatsBenchmark: Boolean!, $carbohydratesBenchmark: Boolean!, $hourExercise: Boolean!, $halfHourExercise: Boolean!, $cardio: Boolean!, $weightlift: Boolean!) {
  addWellness(caloriesBenchmark: $caloriesBenchmark, proteinBenchmark: $proteinBenchmark, fiberBenchmark: $fiberBenchmark, fatsBenchmark: $fatsBenchmark, carbohydratesBenchmark: $carbohydratesBenchmark, hourExercise: $hourExercise, halfHourExercise: $halfHourExercise, cardio: $cardio, weightlift: $weightlift) {
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
}`

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    profile {
      _id
      email
      name
    }
  }
}
`;



