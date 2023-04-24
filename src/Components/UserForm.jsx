import "./UserForm.css"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools";

export const UserForm = () => {

 const form = useForm();
 const {register, control, handleSubmit} = form

//  Here we Destructure the properties and then assign them as props to the element
 const {name, ref, onChange, onBlur} = register("fullname")

 const onSubmit = (data) => {
  console.log("Form Submitted Successfully", data);
 }

  return (
    <div>
    <h1>React Hook Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Full Name</label>
            {/* Assign the distructure as props to the input */}
            <input type="text" 
            id="fullname" 
            name={name} 
            ref={ref} 
            onChange={onChange} 
            onBlur={onBlur}/>

            <label>Email</label>
            {/* Here we spread the form method directly on the form control, 
            this method is much simpler and less code to write */}
            <input type="email" id="email" {...register("email")}/>

            <label>Course</label>
            <input type="text" id="course" {...register("course")}/>

            <label>Nationality</label>
            <input type="text" id="nationality" {...register("nationality")}/>

            <button>Send Now</button>
        </form>
        <DevTool control={control}/>
    </div>
  )
}
