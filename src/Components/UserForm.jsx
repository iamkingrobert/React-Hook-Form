import "./UserForm.css"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools";

export const UserForm = () => {

 const form = useForm();
 const {register, control, handleSubmit, formState} = form;
 const {errors} = formState;

//  Here we Destructure the properties and then assign them as props to the element
 // const {name, ref, onChange, onBlur} = register("fullname") // But i later changed that.
 {/* Assign the distructure as props to the input, but i scrapped it and wrote the code in
 a much simpler way by using the spread operator ... */}

 const onSubmit = (data) => {
  console.log("Form Submitted Successfully", data);
 }

  return (
    <div>
    <h1>React Hook Form</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <label>Full Name</label>
            {/* Here am using the spread operator ... directly on the form control, 
            this method is much simpler and less code to write */}
            <input type="text" 
            id="fullname" 
            {//Spread operator
              ...register("fullname",
            {required: "Your name is required"})}/>
            <p className="error">{errors.fullname?.message}</p>

            <label>Email</label>
            <input type="email" id="email" 
            {//Spread operator
              ...register("email", 
            {required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid Email Format",
            }
            })}/>
            <p className="error">{errors.email?.message}</p>

            <label>Course</label>
            <input type="text" id="course" {
              //Spread operator
              ...register("course", 
              {required: "Course is required" })}/>
            <p className="error">{errors.course?.message}</p>

            <label>Nationality</label>
            <input type="text" id="nationality" {
              //Spread operator
              ...register("nationality", {required: "Nationality is required"})}/>
            <p className="error">{errors.nationality?.message}</p>

            <label>Address</label>
            <input type="text" id="address" {
              //Spread operator
              ...register("address", {required: "Address is required"})}/>
            <p className="error">{errors.address?.message}</p>

            <button>Send Now</button>
        </form>
        <DevTool control={control}/>
    </div>
  )
}
