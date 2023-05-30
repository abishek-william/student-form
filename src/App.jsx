import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

const StudentForm = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();

  const onSubmit = (data) => {
    // Perform additional validation on the form data
    if (data.name.length < 3) {
      setError('name', { type: 'manual', message: 'Name should be at least 3 characters long' });
      return;
    }

    // Proceed with form submission or further processing
    console.log('Submitted:', data);
  };

  return (
    <div className="form-container">
      {/* <div className='container'>*/}
        
      <form className='student-form' onSubmit={handleSubmit(onSubmit)}>
        <h2>STUDENT INFORMATION</h2> 
        <div>
           {errors.name && <span className="error-message">Name is required and should contain only letters and spaces</span>}
          <input
            placeholder='Enter the Name'
            type="text"
            id="name"
            {...register('name', { required: true, pattern: /^[A-Za-z ]+$/ })}
          />
         
        </div>
        <div>
           {errors.dob && <span className="error-message">Date of Birth is required</span>}
          {/* <label htmlFor="dob">Date of Birth:</label> */}
          <input type="date" id="dob" {...register('dob', { required: true })} />
         
        </div>
        <div>
          {/* <label htmlFor="class">Class:</label> */}
          {errors.class && <span className="error-message">Class is required</span>}
          <select id="class" placeholder='Select Class' {...register('class', { required: true })}>
            <option value="">Select Class</option>
            <option value="1">X</option>
            <option value="2">XI</option>
            <option value="3">XII</option>
          </select>
          
        </div>
        <div>
          {/* <label htmlFor="division">Division:</label> */}
          {errors.division && <span className="error-message">Division is required</span>}
          <select id="division" {...register('division', { required: true })}>
            <option value="">Select Division</option>
            <option value="A">Division A</option>
            <option value="B">Division B</option>
            <option value="C">Division C</option>
          </select>
          
        </div>
        <div className='gender-radio-btn'>
          {/* <label>Gender:</label> */}
          {errors.gender && <span className="error-message">Gender is required</span>}
          <label>
            <input type="radio" value="male" {...register('gender', { required: true })} />
            Male
          </label>
          <label>
            <input type="radio" value="female" {...register('gender', { required: true })} />
            Female
          </label>
          
        </div>
        {/* Add other form fields as needed */}
        <button type="submit">Submit</button>
      </form>
      {/* </div> */}
    </div>
  );
};

export default StudentForm;
