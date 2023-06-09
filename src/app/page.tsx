'use client';
import { LoginForm } from '@/components/LoginForm';
import { UserList } from '@/components/UserList';
import { UserProfile } from '@/components/UserProfile';
import { useState } from 'react';

export default function Home() {
  const [showText, setShowText] = useState(false);
  return (
    <main>
      <h1>Home Page</h1>
      <button>Click Me</button>
      <div>
        <label htmlFor="randomText">Enter Random Text: </label>
        <input id="randomText" />
      </div>
      <div>
        <label htmlFor="specificText">Enter Specific Text:</label>
        <input id="specificText" />
      </div>
      <div>
        <input placeholder="Search..." />
      </div>
      <div>
        <input value="AUDI Q5" onChange={() => {}} />
      </div>
      <div>
        {showText && <span>This is the text!</span>}
        <button
          onClick={() => {
            setTimeout(() => {
              setShowText(!showText);
            }, 1100);
          }}
        >
          Show Text
        </button>
      </div>
      <UserProfile
        displayName={'ansonasdasdadasuidasuidasgidasgduiasydghasiudasdaid'}
        username="anson"
        email="anson@anson.com"
        isEmailVerified={false}
      />
      <UserList />
      <LoginForm />
    </main>
  );
}
