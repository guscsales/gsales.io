import React from 'react';
import Head from 'next/head';
import '@firebase/init';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Text from '@sagebox/components/text/text';
import Input from '@sagebox/components/input';
import Button from '@sagebox/components/button';
import InputMessage from '@sagebox/components/input-message';

interface IFormData {
  email: string;
  password: string;
}

const validationSchema = yup.object({
  email: yup.string().email('Invalid email').required('This field is required'),
  password: yup.string().required('This field is required'),
});

export default function Login() {
  const {
    formState: { errors },
    ...form
  } = useForm<IFormData>({
    resolver: yupResolver(validationSchema),
  });

  function onSubmit(data: IFormData) {
    console.log(data);
  }

  console.log(errors);

  return (
    <>
      <Head>
        <title>Welcome to Gus CMS</title>
      </Head>

      <div className="w-full h-full absolute flex items-center justify-center">
        <div className="w-80 bg-white p-6 rounded-lg shadow-lg">
          <Text heading as="h1" className="text-xl text-center">
            Welcome to Gus CMS
          </Text>
          <Text heading as="h2" className="text-base text-center">
            Enter your credentials below.
          </Text>

          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mt-3">
              <Text as="label" className="text-sm text-gray-500">
                Email
              </Text>
              <Input type="text" {...form.register('email')} />
              {errors.email && (
                <InputMessage type="error">
                  {errors.email?.message}
                </InputMessage>
              )}
            </div>

            <div className="mt-2">
              <Text as="label" className="text-sm text-gray-500">
                Password
              </Text>
              <Input type="password" {...form.register('password')} />
              {errors.password && (
                <InputMessage type="error">
                  {errors.password?.message}
                </InputMessage>
              )}
            </div>

            <div className="mt-6 w-full">
              <InputMessage
                type="error"
                className="text-center mb-4"
                withSpace={false}
              >
                Invalid credentials
              </InputMessage>

              <Button className="w-full" type="submit">
                Sign In
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
