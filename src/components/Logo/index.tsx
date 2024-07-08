import React, { useEffect, useState } from 'react';
import './style.css';
import logoWhite from '@/svg/logo-no-background.svg';
import logoBlack from '@/svg/logo-black.svg';
import { DarkModeState } from '@/store/ProfileStore';
import { redirect, useRouter } from "next/navigation";

interface Props {
  black?: boolean;
}

const Logo = (props: Props) => {
  const router = useRouter();

  return (
    <div className="logo">
      <div className="logo--image">
        {!props.black && (
          <img src={logoWhite.src} alt="Contacts logo" onClick={() => router.push('/home')}/>
        )}
        {props.black && (
          <img src={logoBlack.src} alt="Contacts logo" onClick={() => router.push('/home')}/>
        )}
      </div>
    </div>
  );
};

export default Logo;
