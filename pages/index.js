import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { createForm } from '@formily/core';
import React, { useMemo } from 'react';
import { Field, FormProvider, FormConsumer } from '@formily/react';

export default function Home() {
  const form = useMemo(() => createForm({ validateFirst: true }), []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <FormProvider form={form}>
          <form
            autoComplete="off"
            noValidate
            styles={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
          >
            <Field
              name="name"
              title="Full name"
              component={[
                'input',
                {
                  'data-testid': 'input-register-name',
                },
              ]}
            />
            <Field
              name="mobile"
              title="Mobile"
              component={[
                'input',
                {
                  'data-testid': 'input-register-phone',
                  maxLength: 12,
                },
              ]}
            />
          </form>
          <FormConsumer>
            {(formState) => {
              const handleSubmitForm = async () => {
                console.log('Submit Form');
              };

              return (
                <button
                  data-testid="button-register-account"
                  type="button"
                  disabled={!formState.valid}
                  onClick={handleSubmitForm}
                >
                  Register
                </button>
              );
            }}
          </FormConsumer>
        </FormProvider>
      </main>
    </div>
  );
}
