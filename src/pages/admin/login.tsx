import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import '@firebase/init';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Text from '@sagebox/components/text/text';
import Input from '@sagebox/components/input';
import Button from '@sagebox/components/button';
import InputMessage from '@sagebox/components/input-message';
import useAuth from '@contexts/auth/hooks/useAuth';
import { useRouter } from 'next/router';

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
  const { signIn } = useAuth();
  const router = useRouter();
  const [signInError, setSignInError] = React.useState(null);

  async function onSubmit({ email, password }: IFormData) {
    try {
      setSignInError(null);
      await signIn(email, password);

      router.replace('/admin/blog');
    } catch (e) {
      setSignInError(e);
    }
  }

  return (
    <>
      <Head>
        <title>Welcome to Gus CMS</title>
        <meta name="robots" content="noindex, nofollow" />
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
              {signInError && (
                <InputMessage
                  type="error"
                  className="text-center mb-4"
                  withSpace={false}
                >
                  Invalid credentials
                </InputMessage>
              )}

              <Button className="w-full" type="submit">
                Sign In
              </Button>

              <div className="text-center mt-4">
                <Link href="/">
                  <a className="text-sm text-blue-500 transition-colors ease-in-out hover:text-blue-400">
                    Return to site
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
