import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm, Controller } from 'react-hook-form';
import { RegistrationType } from '../types/registration.types';
import { Link } from 'react-router-dom';
import ScreenMd from '@/components/layout/page-containers/screen-md';
import FormContainer from '@/components/layout/page-containers/form-container';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '@/components/api/user';

const RegistrationPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegistrationType>({
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      confirm_password: '',
    },

    mode: 'onChange',
  });
  const { mutate: register } = useMutation({
    mutationKey: ['register'],
    mutationFn: registerUser,
  });

  const onSubmit = (fieldValues: RegistrationType) => {
    console.log('clicked');

    register(fieldValues);
  };
  return (
    <>
      <ScreenMd>
        <Card>
          <CardHeader>
            <CardTitle className='text-2xl font-bold'>Sign Up</CardTitle>
          </CardHeader>
          <CardContent>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Label htmlFor='full_name'>Full Name</Label>
                <Controller
                  name='fullname'
                  control={control}
                  rules={{
                    required: true,
                    minLength: {
                      value: 10,
                      message: 'min length is 10',
                    },
                  }}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <Input
                        onChange={onChange}
                        value={value}
                        className='mb-2 mt-2'
                        placeholder='Full Name'
                      />
                    );
                  }}
                />
                {errors.fullname && (
                  <span role='alert' className='pt-2 text-sm text-destructive'>
                    {String(errors.fullname.message)}
                  </span>
                )}
              </div>
              <div>
                <Label htmlFor='email'>Email</Label>
                <Controller
                  name='email'
                  control={control}
                  rules={{
                    required: true,
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Entered value does not match email format',
                    },
                    minLength: {
                      value: 10,
                      message: 'min length is 10',
                    },
                  }}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <Input
                        onChange={onChange}
                        value={value}
                        className='mb-2 mt-2'
                        placeholder='Email'
                      />
                    );
                  }}
                />
                {errors.email && (
                  <span role='alert' className='pt-2 text-sm text-destructive'>
                    {String(errors.email.message)}
                  </span>
                )}
              </div>
              <div className='mb-2 mt-4 md:m-0'>
                <Label htmlFor='password'>Password</Label>
                <Controller
                  name='password'
                  control={control}
                  rules={{
                    required: true,
                    minLength: {
                      value: 6,
                      message: 'min length is 6',
                    },
                  }}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <Input
                        onChange={onChange}
                        value={value}
                        type='password'
                        placeholder='password'
                        className='mb-2 mt-2'
                      />
                    );
                  }}
                />
                {errors.password && (
                  <span role='alert' className='pt-2 text-sm text-destructive'>
                    {String(errors.password.message)}
                  </span>
                )}
              </div>
              <div className='mt-4'>
                <Label htmlFor='confirmPassword'>Confirm Password</Label>
                <Controller
                  name='confirm_password'
                  control={control}
                  rules={{
                    required: true,
                    validate: (value) => {
                      if (watch('password') != value) {
                        return 'Your passwords do not match.';
                      }
                    },
                  }}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <Input
                        onChange={onChange}
                        value={value}
                        type='password'
                        className='mt-2'
                        placeholder='Confirm Password'
                      />
                    );
                  }}
                />
                {errors.confirm_password && (
                  <span role='alert' className='pt-2 text-sm text-destructive'>
                    {String(errors.confirm_password.message)}
                  </span>
                )}
              </div>
              <div className='grid gap-4 md:grid-cols-2'>
                <div>
                  <Link to='/login' className='w-full'>
                    <Button
                      className='w-full'
                      type='button'
                      size='lg'
                      variant='secondary'
                    >
                      Sign In
                    </Button>
                  </Link>
                </div>
                <div>
                  <Button className='w-full' type='submit' size='lg'>
                    Register
                  </Button>
                </div>
              </div>
            </FormContainer>
          </CardContent>
        </Card>
      </ScreenMd>
    </>
  );
};

export default RegistrationPage;
