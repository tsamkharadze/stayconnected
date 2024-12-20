import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm, Controller } from 'react-hook-form';
import { loginType } from '../types/login.types';
import { Link, useNavigate } from 'react-router-dom';
import ScreenMd from '@/components/layout/page-containers/screen-md';
import FormContainer from '@/components/layout/page-containers/form-container';
import { useMutation } from '@tanstack/react-query';
import { LoginUser } from '@/components/api/user';
import { useSetAtom } from 'jotai';

import { userAtom } from '@/store/auth';
import { setAuthToken } from '@/components/api';

const LoginPage = () => {
  const setuser = useSetAtom(userAtom);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<loginType>({
    defaultValues: { email: '', password: '' },
  });

  const { mutate: login } = useMutation({
    mutationKey: ['login'],
    mutationFn: LoginUser,
    onSuccess: (data) => {
      console.log(data?.access);
      setAuthToken(data?.access);
      setuser(data);
      navigate('/home');
    },
  });

  const onSubmit = (fieldValues: loginType) => {
    login(fieldValues);
  };
  return (
    <>
      <ScreenMd>
        <Card>
          <CardHeader>
            <CardTitle className='text-center text-2xl font-bold'>
              Sign In
            </CardTitle>
          </CardHeader>
          <CardContent>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
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
              <div>
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
                        className='mb-4 mt-2'
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
              <div className='grid gap-4'>
                <div>
                  <Button className='w-full' type='submit' size='lg'>
                    Sign In
                  </Button>
                </div>
                <div className='cursor-pointer space-x-2 text-center text-sm text-muted-foreground'>
                  <span>Don't have an account?</span>
                  <Link to='/register' className='font-semibold text-primary'>
                    Sign Up
                  </Link>
                </div>
              </div>
            </FormContainer>
          </CardContent>
        </Card>
      </ScreenMd>
    </>
  );
};

export default LoginPage;
