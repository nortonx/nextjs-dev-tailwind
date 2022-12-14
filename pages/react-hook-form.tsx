import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer';
import Input from '../src/components/form/Input';
import UserInfo from '../src/components/UserInfo';
import Button from '../src/components/form/Button';

interface DummyUser {
  name: string;
  age: number;
  email: string
}

const ReactHookForm = () => { // TODO: Implement it!
  
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  const [user, setUser] = useState({});

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
            <fieldset className="border-2 border-zinc-400 rounded-md p-4">
              <legend className="px-2">Data Input</legend>
              <Input 
                label="Name"
                type="text"
                onChange={(e: any) => setName(e.target.value)}
                value={name}
              />
              <Input
                label="Age"
                type="number"
                value={age}
                onChange={(e: any) => setAge(e.target.value)}
              />
              <Input
                label="E-mail"
                type="email"
                placeholder="user e-mail"
                onChange={(e: any) => setEmail(e.target.value)}
                value={email}
              />
              <div className="flex justify-end px-2 pt-2">
                <Button label="Add data" />
              </div>
            </fieldset>
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