import {useState,useEffect} from 'react';
  export default () => {

    const [form ,setForm] = useState({});

    const handleChange = (e,{name, value}) => {
        // console.log(name, value);
          setForm({...form, [name]: value});
      }

      const [formError, setFormError] = useState({});
      const [isSubmitting, setIsSubmitting] = useState(false);
      
      const saveAndContinue = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormError(validate(form));
      }

      const countryOptions = [
        { key: 'a', value: 'Andaman and Nicobar Islands', text: 'Andaman and Nicobar Islands' },
        { key: 'b', value: 'Andhra Pradesh', text: 'Andhra Pradesh' },
        { key: 'c', value: 'Arunachal Pradesh', text: 'Arunachal Pradesh' },
        { key: 'd', value: 'Assam', text: 'Assam' },
        { key: 'e', value: 'Bihar', text: 'Bihar' },
        { key: 'f', value: 'Chandigarh', text: 'Chandigarh' },
        { key: 'g', value: 'Chhattisgarh', text: 'Chhattisgarh' },
        { key: 'h', value: 'Dadra & Nagar Haveli', text: 'Dadra & Nagar Haveli' },
        { key: 'i', value: 'Delhi', text: 'Delhi' },
        { key: 'j', value: 'Goa', text: 'Goa' },
        { key: 'k', value: 'Gujrat', text: 'Gujrat' },
        { key: 'l', value: 'Haryana', text: 'Haryana' },
        { key: 'm', value: 'Himachal Pradesh', text: 'Himachal Pradesh' },
        { key: 'n', value: 'Jammu and Kashmir', text: 'Jammu and Kashmir' },
        { key: 'o', value: 'Jammu and Kashmir', text: 'Jharkhand' },
        { key: 'p', value: 'Karnataka', text: 'Karnataka' },
        { key: 'q', value: 'Kerala', text: 'Kerala' },
        { key: 'r', value: 'Lakshadweep', text: 'Lakshadweep' },
        { key: 's', value: 'Madhya Pradesh', text: 'Madhya Pradesh' },
        { key: 't', value: 'Maharashtra', text: 'Maharashtra' },
        { key: 'u', value: 'Manipur', text: 'Manipur' },
        { key: 'v', value: 'Meghalaya', text: 'Meghalaya' },
        { key: 'w', value: 'Mizoram', text: 'Mizoram' },
        { key: 'x', value: 'Nagaland', text: 'Nagaland' },
        { key: 'y', value: 'Odisha', text: 'Odisha' },
        { key: 'z', value: 'Punjab', text: 'Punjab' },
        { key: 'aa', value: 'Puducherry', text: 'Puducherry' },
        { key: 'ab', value: 'Sikkim', text: 'Sikkim' },
        { key: 'ac', value: 'Tamil Nadu', text: 'Tamil Nadu' },
        { key: 'ad', value: 'Telangana', text: 'Telangana' },
        { key: 'ae', value: 'Tripura', text: 'Tripura' },
        { key: 'af', value: 'Uttar Pradesh', text: 'Uttar Pradesh' },
        { key: 'ag', value: 'Uttarakhand', text: 'Uttarakhand' },
        { key: 'ah', value: 'West Bengal', text: 'West Bengal' },
      ]

      const [open , setOpen] = useState(false);
        useEffect(() => {
                if (Object.keys(formError).length === 0 && isSubmitting) {
                setOpen(true);
                }
                else {
                setIsSubmitting(false);
                }
    
            }, [formError]);

      return {form, handleChange,saveAndContinue,formError,countryOptions,open,setOpen,setForm,setIsSubmitting};

  }
  

  const  validate = (val) =>{
    const errors = {};
    if (!val.firstName || val.firstName.length < 4) {
      if(!val.firstName)
      errors.firstNameError = ' First Name Required';
      else
      errors.firstNameError = ' First Name must be at least 4 characters';
    }
    if (!val.lastName || val.lastName.length < 4) {
      if(!val.lastName)
      errors.lastNameError = ' Last Name Required';
      else
      errors.lastNameError = ' Last Name must be at least 4 characters';
    }
    if (!val.email) {
      errors.emailError = 'Required';
    }
    if (!val.dob) {
      errors.dobError = 'Required';
    }
    if (!val.password || val.password.length < 8) {
      if(!val.password)
      errors.passwordError = ' Password Required';
      else
      errors.passwordError = ' Password must be at least 8 characters';
    }
    if (!val.confirmPassword || val.confirmPassword !== val.password || val.confirmPassword.length < 8) {
      if(!val.confirmPassword)
      errors.confirmPasswordError = ' Confirm Password Required';
      else if(val.confirmPassword !== val.password)
      errors.confirmPasswordError = ' Password does not match';
      else
      errors.confirmPasswordError = ' Password must be at least 8 characters';
    }
    if (!val.state ) {
      if(!val.state)
      errors.stateError = ' State Required';
      else
      errors.stateError = ' State not found';
    }

    return errors;

  }


  export  {validate};