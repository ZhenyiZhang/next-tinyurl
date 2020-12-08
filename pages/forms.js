import styled from 'styled-components';
import {useForm} from 'react-hook-form';

const StyledContainer = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100vw;
`;

const StyledForm = styled.form`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 50%;
`;

export default function Forms() {
    const {register, watch, handleSubmit, errors, setError} = useForm();
    const watchCheckbox = watch('checkbox');

    const onSubmit = data => {
      console.log(data);
    };

    const validateDate = (date) => {
        return new Date(date).getDate() > new Date().getDate();
    };

    return(
        <StyledContainer>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <label>What's your favorite color?</label>
                <select name="color" ref={register}>
                    <option value="blue">blue</option>
                    <option value="red">red</option>
                    <option value="green">green</option>
                </select>

                <label>Do you want to receive latest offers?</label>
                <input type="checkbox" name="checkbox" ref={register}/>
                {watchCheckbox && <input type="email" name="email" placeholder="enter your email address" ref={register}/>}

                <label>Date</label>
                <input type="date" name="date" ref={register({validate: validateDate})}/>
                {errors.date?.type === 'validate' && <p>Pick a date that is later than today</p>}
                <button type="submit">Submit</button>
            </StyledForm>
        </StyledContainer>
    );
};