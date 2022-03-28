import React from 'react';
import { NavLinksGenerics } from '../_navlinks';
import Generics1 from './generics1';
import Generics2 from './generics2';
import Generics3 from './generics3';

export const Gen1 = () => (
  <GenNav>
    <Generics1 />
  </GenNav>
);
export const Gen2 = () => (
  <GenNav>
    <Generics2 />
  </GenNav>
);
export const Gen3 = () => (
  <GenNav>
    <Generics3 />
  </GenNav>
);

const GenNav = (props: any) => {
  return (
    <div>
      <NavLinksGenerics />
      {props.children}
    </div>
  );
};
