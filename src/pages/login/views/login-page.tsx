import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Logo from '@/components/ui-blocks/header/components/logo';
import { useForm, Controller } from 'react-hook-form';
import { loginType } from '../types/login.types';

const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<loginType>({
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = (fieldValues: loginType) => {
    console.log(fieldValues);
  };
  return (
    <>
      <div className='m-auto flex h-svh w-full flex-col p-4 md:w-3/4 md:justify-center md:p-6 lg:w-1/2'>
        <Card className='w-full space-y-8 p-4 pb-6'>
          <div className='flex justify-center'>
            <Logo />
          </div>

          <Card className='m-auto pt-2 md:w-3/4 md:p-8'>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className='md:space-y-4'>
                <div>
                  <Label htmlFor='email'>Email</Label>
                  <Controller
                    name='email'
                    control={control}
                    rules={{
                      required: true,
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'ელ.ფოსტის არასწორი ფორმატი',
                      },
                      minLength: {
                        value: 10,
                        message: 'საჭიროა მინიმუმ 10 სიმბოლო',
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
                    <span
                      role='alert'
                      className='pt-2 text-sm text-destructive'
                    >
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
                        message: 'მინიმუმ 6 სიმბოლო',
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
                    <span
                      role='alert'
                      className='pt-2 text-sm text-destructive'
                    >
                      {String(errors.password.message)}
                    </span>
                  )}
                </div>
                <div className='mb-2 mt-4 space-y-2 md:flex md:flex-row md:gap-4 md:space-y-0'>
                  <Button className='w-full md:w-1/2' type='submit' size='lg'>
                    Sign In
                  </Button>
                  <Button
                    className='w-full md:w-1/2'
                    type='button'
                    size='lg'
                    variant='secondary'
                  >
                    Register
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </Card>
      </div>
    </>
  );
};

export default LoginPage;
