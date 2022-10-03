import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer';
import UserInfo from '../src/components/UserInfo';
import Button from '../src/components/form/Button';
import { useForm, SubmitHandler} from 'react-hook-form';
import InputTailwind from '../src/components/form/InputTailwind';

type Inputs = {
  example: string,
  exampleRequired: string,
}

const ReactHookForm = () => { // TODO: Implement it!
  
  // react-hook-form
  const { register, handleSubmit, watch, formState: { errors }} = useForm<Inputs>();
  
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  const [user, setUser] = useState({});

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
      <div className="flex h-screen flex-col items-center justify-center">
      <Head>
        <title>ReactHookForm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex w-full flex-1 flex-col px-20 py-4 bg-gradient-to-b from-white to-zinc-200">
      <h1>ReactHookForm content</h1>
        <div className="bg-slate-200 flex flex-row">
          
          <div className="bg-slate-300 w-8/12 h-full p-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="border-2 border-zinc-400 rounded-md p-4">
                <legend className="px-2">Data Input</legend>
                <InputTailwind
                  type="text"
                  label="Name"
                  {...register("example")}
                />
                <InputTailwind
                  type="number"
                  label="Age"
                  {...register("exampleRequired", { required: true})}
                />
                {errors.exampleRequired && <pre>This field is required.</pre>}
                <InputTailwind
                  type="email"
                  label="E-mail"
                />
                <div className="flex justify-end px-2 pt-2">
                  <Button onClick={handleSubmit} label="Add data" />
                </div>
              </fieldset>
            </form>
          </div>
          <div className="bg-slate-400 w-4/12 h-full p-2 flex flex-wrap">
            Data Output: {typeof user}<pre>{JSON.stringify(user)}</pre>
            <UserInfo />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ReactHookForm;