import React from 'react';
import { Checkbox } from '@mui/material';

const data1 = [
  { id: '1', firstName: 'Ben', active: true },
  { id: '2', firstName: 'Angus', active: false },
  { id: '3', firstName: 'Dayne', active: true },
];

const data2 = [
  { key: '1', first_name: 'Matt', active: false },
  { key: '2', first_name: 'Brett', active: true },
  { key: '3', first_name: 'Mandia', active: false },
];

interface Props<T> {
  data: T[];
  getKey: (item: T) => string;
  renderItem: (item: T) => string;
}
const GenericList = <T extends { active: boolean }>({ data, getKey, renderItem }: Props<T>) => {
  return (
    <>
      {data.map((item: T) => {
        return (
          <div key={getKey(item)} style={{ display: 'flex' }}>
            <Checkbox style={{ padding: 0 }} checked={item.active} />
            <div>{`${getKey(item)} - ${renderItem(item)}`}</div>
          </div>
        );
      })}
    </>
  );
};

export default function Generics3() {
  return (
    <div>
      <h1>Generics 3</h1>
      <GenericList data={data1} getKey={({ id }) => id} renderItem={({ firstName }) => firstName} />
      <br />
      <GenericList data={data2} getKey={({ key }) => key} renderItem={({ first_name }) => first_name} />
    </div>
  );
}
