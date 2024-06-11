import { useState } from 'react';

import { Link } from 'react-router-dom';

import { ADD_WELLNESS } from '../../utils/mutations';

import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';

const WellnessForm = ({ profileId }) => {
  const [wellnessData, setWellnessData] = useState({
    caloriesBenchmark: false,
    proteinBenchmark: false,
    fiberBenchmark: false,
    fatsBenchmark: false,
    carbohydratesBenchmark: false,
    hourExercise: false,
    halfHourExercise: false,
    cardio: false,
    weightlift: false,

  });


  const [addWellness, { error }] = useMutation(ADD_WELLNESS);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setWellnessData({
      ...wellnessData,
      [name]: checked,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();


    try {
      const data = await addWellness({
        variables: { ...wellnessData },
      });
      console.log(data);
      setWellnessData({
        caloriesBenchmark: false,
        proteinBenchmark: false,
        fiberBenchmark: false,
        fatsBenchmark: false,
        carbohydratesBenchmark: false,
        hourExercise: false,
        halfHourExercise: false,
        cardio: false,
        weightlift: false,

      });


    } catch (err) {

    }
  };

  return (
    <div>
      <h4></h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="container col-12 col-lg-9">
            <div className="form-check">
              <input
                type='checkbox'
                name='caloriesBenchmark'
                checked={wellnessData.caloriesBenchmark}
                className="form-input w-100 col-6 col-sm-4"
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="caloriesBenchmark">
                Calories Benchmark
              </label>
            </div>
            <div className="form-check">
              <input
                type='checkbox'
                name='proteinBenchmark'
                checked={wellnessData.proteinBenchmark}
                className="form-input w-100 col-6 col-sm-4"
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="proteinBenchmark">
               Protein Benchmark 
              </label>
            </div>
            <div className="form-check">

              <input
                type='checkbox'
                name='fiberBenchmark'
                checked={wellnessData.fiberBenchmark}
                className="form-input w-100 col-6 col-sm-4"
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="fiberBenchmark">
                Fiber Benchmark
              </label>
            </div>
            <div className="form-check">
              <input
                type='checkbox'
                name='fatsBenchmark'
                checked={wellnessData.fatsBenchmark}
                className="form-input w-100 col-6 col-sm-4"
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="fatsBenchmark">
                Fats Benchmark
              </label>
            </div>
            <div className="form-check">

              <input
                type='checkbox'
                name='carbohydratesBenchmark'
                checked={wellnessData.carbohydratesBenchmark}
                className="form-input w-100 col-6 col-sm-4"
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="carbohydratesBenchmark">
              Carbohydrates Benchmark
              </label>
            </div>
            <div className="form-check">

              <input
                type='checkbox'
                name='hourExercise'
                checked={wellnessData.hourExercise}
                className="form-input w-100 col-6 col-sm-4"
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="hourExecrise">
                Hour Exercise 
              </label>
            </div>
            <div className="form-check">

              <input
                type='checkbox'
                name='halfHourExercise'
                checked={wellnessData.halfHourExercise}
                className="form-input w-100 col-6 col-sm-4"
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="halfHourExercise">
                Half Hour Exercise
              </label>
            </div>
            <div className="form-check">

              <input
                type='checkbox'
                name='cardio'
                checked={wellnessData.cardio}
                className="form-input w-100 col-6 col-sm-4"
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="cardio">
                Cardio
              </label>
            </div>
            <div className="form-check">

              <input
                type='checkbox'
                name='weightlift'
                checked={wellnessData.weightlift}
                className="form-input w-100 col-6 col-sm-4"
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="weightlift">
                Weight Lift
              </label>
            </div>

          </div>

          <div>
            <button className="btn btn-block btn-outline-dark" type="submit">
              Submit
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to track you wellness journey . Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>

  )
};

export default WellnessForm;