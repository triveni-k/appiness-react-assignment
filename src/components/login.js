import React, { useState, useEffect } from "react";
import { Grid, Header, Form, Segment, Button } from 'semantic-ui-react';
import './style.css';
import { login, resetUser } from '../actions/user';
import { useSelector, useDispatch } from "react-redux";


const Login = (props) => {
  const [inputVal, setInputVal] = useState({ username: '', password: '' });

  function handleChange(e) {
    const { value, name } = e.target || {};
    setInputVal({ ...inputVal, [name]: value });
  }



  const dispatch = useDispatch();
  const results = useSelector((store) => ({ success: store.users.success, error: store.users.error }));

  useEffect(() => {
    if (results.success) props.history.push('/dashboard');
    return function reset() {
      dispatch(resetUser());
    }
  }, [dispatch, props.history, results.success])
  const onSubmit = async () => {
    await dispatch(login(inputVal));
  }


  return (
    <Grid className='login-grid' textAlign='center' verticalAlign='middle'>
      <Grid.Column className='login-grid-column'>
        <Header as='h2' color='teal' className='login-header'>Log In</Header>
        {results.error && <div className='error-message'>Invalid username or password</div>}
        <Form >
          <Segment stacked textAlign='center'>
            <Form.Input icon='user'
              name='username'
              iconPosition='left'
              placeholder='username'
              onChange={handleChange} />
            <Form.Input icon='lock'
              name='password'
              iconPosition='left'
              onChange={handleChange}
              placeholder='password'
              type='password' />
            <Button color='teal' onClick={onSubmit}>Submit</Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default Login; 