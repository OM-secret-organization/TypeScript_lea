import React, { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import InputGroup from '../components/InputGroup';
import axios from 'axios';

const register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<any>({});

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const res = await axios.post('./auth/register', {
      email: email,
      password,
      username,
    });
    console.log('res', res);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen p-6">
        <div className="w-10/12 mx-auto md:w-96">
          <h1 className="mb-2 text-lg font-medium">회원가입</h1>
          <form onSubmit={handleSubmit}>
            <InputGroup
              placeholder="Email"
              value={email}
              setValue={setEmail}
              error={errors.email}
            />
            <InputGroup
              placeholder="User Name"
              value={username}
              setValue={setUsername}
              error={errors.username}
            />
            <InputGroup
              placeholder="PW"
              value={password}
              setValue={setPassword}
              error={errors.password}
            />
            <button className="w-full py-2 mb-1 text-xs font-bold text-white uppercase bg-gray-400 border border-gray-400 rounded">
              회원 가입
            </button>
          </form>
          <small>
            이미 가입하셨나요?
            <Link href="/login">
              <span className="ml-1 text-blue-500 uppercase">로그인</span>
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default register;
