import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { useAuth } from 'hooks';
import { authSchema } from 'validationSchemas';

import { GoogleAuth, Input, PrimaryButton } from 'components';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
};

const AuthForm = ({ value, chgForm }) => {
  const { signIn, signUp } = useAuth();

  useEffect(() => {
    async function breakFormikInputs() {
      await setValues({
        name: initialValues.name,
        email: initialValues.email,
        password: initialValues.password,
      });
    }
    async function breakFormikTouched() {
      await setTouched({
        name: false,
        email: false,
        password: false,
      });
    }

    breakFormikInputs();
    breakFormikTouched();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chgForm]);

  const onHandleSubmit = async ({ name, email, password }, { resetForm }) => {
    try {
      if (value === 0) {
        const data = await signUp({ name, email, password });

        if (data.payload === 'Request failed with status code 409') {
          toast.error('User with this email already exists');
          return;
        }

        await signIn({ email, password });
      } else {
        await signIn({ email, password });
      }

      resetForm();
    } catch (error) {
      if (error.response && error.response.status === 409) {
        console.error('User already exists:', error.message);
        // Handle the 409 error (user already exists) here
      } else {
        console.error('An error occurred:', error.message);
        // Handle other errors here
      }
    }
  };

  const formDistributor = {
    passText: value === 0 ? 'Create a password' : 'Confirm your password',
    buttText: value === 0 ? 'Register Now' : 'Log in Now',
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    setValues,
    setTouched,
  } = useFormik({
    initialValues: initialValues,
    onSubmit: onHandleSubmit,
    validationSchema: authSchema,
  });

  return (
    <>
      <form style={formStyle} onSubmit={handleSubmit}>
        {value === 0 && (
          <Input
            name="name"
            type="name"
            placeholder="Enter your name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
        )}
        {value === 0 && errors.name && touched.name ? (
          <span style={{ color: 'white' }}>{errors.name}</span>
        ) : null}

        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {errors.email && touched.email ? (
          <span style={{ color: 'white' }}>{errors.email}</span>
        ) : null}

        <Input
          name="password"
          type="password"
          placeholder={formDistributor.passText}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {errors.password && touched.password ? (
          <span style={{ color: 'white' }}>{errors.password}</span>
        ) : null}

        <PrimaryButton
          style={{ marginTop: '14px' }}
          hasIcon={false}
          type="submit"
        >
          {formDistributor.buttText}
        </PrimaryButton>
      </form>
      <GoogleAuth />
    </>
  );
};

export default AuthForm;
