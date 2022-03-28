import React from 'react';

interface Props<T> {
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
  data: T[];
}

const GenericList = <T extends { active: boolean }>({ data, renderItem, keyExtractor }: Props<T>) => {
  return (
    <div>
      {data.map((item) => (
        <div key={keyExtractor(item)} className="item">
          {keyExtractor(item)} - {renderItem(item)}
        </div>
      ))}
    </div>
  );
};

export default function Generics() {
  return (
    <div className="App">
      <h1>Generics 1</h1>
      <h3>Generic list 1</h3>
      <GenericList
        data={[
          { id: '1', firstName: 'Jhon', lastName: 'Doe', active: true },
          { id: '2', firstName: 'Jona', lastName: 'Doe', active: true },
          { id: '3', firstName: 'Jhonney', lastName: 'Doe', active: true },
        ]}
        keyExtractor={({ id }) => id}
        renderItem={(test) => test.firstName}
      />
      <h3>Generic list 2</h3>
      <GenericList
        data={[
          { key: '3', firstName: 'Jhonney', lastName: 'Doe', active: true },
          { key: '2', firstName: 'Jona', lastName: 'Doe', active: true },
          { key: '1', firstName: 'Jhon', lastName: 'Doe', active: true },
        ]}
        keyExtractor={({ key }) => key}
        renderItem={(test) => test.firstName}
      />
    </div>
  );
}
