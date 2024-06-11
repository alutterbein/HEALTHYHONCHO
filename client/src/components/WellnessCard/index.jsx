

function WellnessCard ({wellness}) {


  return (
    <div>
      <h3>{wellness.createdAt}</h3>
      <h3>{wellness.caloriesBenchmark}</h3>
      <h3>{wellness.proteinBenchmark}</h3>
      <h3>{wellness.fiberBenchmark}</h3>
      <h3>{wellness.fatsBenchmark}</h3>
      <h3>{wellness.carbohydratesBenchmark}</h3>
      <h3>{wellness.hourExercise}</h3>
      <h3>{wellness.halfHourExercise}</h3>
      <h3>{wellness.cardio}</h3>
      <h3>{wellness.weightlift}</h3>
    </div>
  )
}

export default WellnessCard;