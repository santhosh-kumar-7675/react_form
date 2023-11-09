import { useState } from "react";
import { useForm, Controller } from 'react-hook-form';
function Forms(){    
    const { register, formState: { errors }, control , handleSubmit } = useForm();    
    const [formData, setFormData] = useState("");
    const onSubmit = (data) => {
        setFormData(data)
        console.log(data);
        const elements = document.getElementsByClassName('confirmation');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'block';
        }
    }
    
    return(
        <div className="formContainer">
            <div className="confirmation">
                <p>Registration successful !</p>
            </div>
            <div className="formcenter">
                <h1 id="hCenter">REGISTRATION FORM</h1>
                <form  className="formClass" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <label id="leftAlign" htmlFor="name">Name: </label> <br />
                    <input {...register('name', {required:true, minLength:2, maxLength:3}) } 
                        aria-invalid={errors.name ? "true" : "false"}  placeholder="Enter your name"  />  <br />
                    {errors.name?.type === 'required' && <p  className="alert" role="alert">Name is required</p>}
                    {errors.name?.type === 'minLength' && 
                        (<p className="alert" role="alert">Name must be a minimum of 2 characters & maximum of  3 characters</p>)}
                    {errors.name?.type === 'maxLength' && 
                        (<p className="alert" role="alert">Name must be a maximum of 3 characters</p>)}
                    
                    <label htmlFor="phone">Phone number:</label> <br />
                    <input {...register('phone', {required:true,  pattern: /^\d{5}-\d{5}$/ } )} placeholder="12345-12345"
                        aria-invalid={errors.phone ? "true" : "false"}  />  <br />
                    {errors.phone?.type === 'required' && <p className="alert" role="alert">Phone number is required</p>}
                    {(errors.phone?.type === 'pattern' && <p className="alert" role="alert">Phone number should match the pattern 12345-12345</p>  )}
                    
                    <label htmlFor="email">Email:</label> <br />
                    <input  {...register("email", { required: 'true' , pattern: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/})} 
                        aria-invalid={errors.email ? "true" : "false"} placeholder="username@example.com" /> <br />
                    {errors.email?.type==='required' && <p  className="alert" role="alert">Email is required</p>}
                    {errors.email?.type=== 'pattern' &&<p className="alert" role="alert">Please enter valid email address</p>}
                    
                    <div className="formElement">
                        <label htmlFor="gender">Gender:</label> <br/>
                        <label id="customLabel">
                            <input
                            className="radioButton"
                            type="radio"
                            name="gender"
                            value="male"
                            {...register('gender', { required: true })} 
                            // checked={selectedGender === 'male'}
                            // onChange={handleGenderChange}
                            />
                            Male
                        </label> <br/>
                        <label id="customLabel">
                            <input
                            className="radioButton"
                            type="radio"
                            name="gender"
                            value="female"
                            {...register('gender', { required: true })} 
                            // checked={selectedGender === 'male'}
                            // onChange={handleGenderChange}
                            />
                            Female
                        </label> <br/>
                        <label id="customLabel">
                            <input
                            className="radioButton"
                            type="radio"
                            name="gender"
                            value="other"
                            {...register('gender', { required: true })}
                            // checked={selectedGender === 'male'}
                            // onChange={handleGenderChange}
                            />
                            Other
                        </label> <br/>
                        {errors.gender && <p className="alert" role="alert">Gender is required</p>}
                    </div>
                    <div>
                        <label>Country:</label> <br />
                        <Controller
                        name="country"
                        control={control}
                        defaultValue="" 
                        rules={{ required: 'Country is required' }} 
                        render={({ field }) => (
                            <select {...field}>
                            <option value="" disabled>Select your country</option>
                            <option value="usa">United States</option>
                            <option value="canada">Canada</option>
                            <option value="uk">United Kingdom</option>
                            {/* Add more country options */}
                            </select>
                        )}
                        />
                        {errors.country && (<p className="error alert"  role="alert">{errors.country.message}</p>)}
                    </div>

                    {/* <div>
                        <label>Country:</label> <br />
                        <select id="country1" {...register('country1',{required:true})}>
                            <option value="" disabled>Select your country</option>
                            <option value="usa">United States</option>
                            <option value="canada">Canada</option>
                            <option value="uk">United Kingdom</option>

                        </select>
                        {errors.country1?.type=== 'required' &&<p className="alert" role="alert">Please enter valid email address</p>}
                    </div> */}

                    <label htmlFor="password">Password:</label> <br />
                    <input  {...register("password", { required: 'true' , pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=])[A-Za-z\d@#$%^&+=]{4,}$/})}
                        aria-invalid={errors.password ? "true" : "false"} placeholder="Enter a password" /> <br />
                    {errors.password?.type==='required' && <p  className="alert" role="alert">Password is required</p>}
                    {errors.password?.type=== 'pattern' &&<p className="alert" role="alert">Ensure password contains
                     <li>Atleast one digit</li>
                    <li>Atleast one  alphabetic character</li>
                    <li>Atleast one special character @#$%^&+=</li>
                    <li>Minimum length should be 4 characters</li>
                    </p>}
                    
                    <input type="checkbox" className="tacButton"  
                        {...register('tac', { required: true })}  />
                    <label id="customLabel" htmlFor="tac">I agree to the terms and conditions.</label>
                    {errors.tac && <p className="alert" role="alert">Please accept the terms and conditions!</p>}

                    <button id="submitButton" type="submit">Submit</button>
                    
                </form>
            </div>

            <div className="result">
                <p>Name: {formData.name}</p>
                <p>Phone: {formData.phone}</p>
                <p>Email: {formData.email}</p>
            </div>
        </div>
    );
}

export default Forms;