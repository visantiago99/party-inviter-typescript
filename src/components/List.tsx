import React from 'react';

interface Iprops {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[]
}


const List: React.FC<Iprops> = ({ people }) => {

  const renderList = (): JSX.Element[] => {
    return people.map((ppl) => <li className="List">
    <div className="List-header">
      <img className="List-img" src={ppl.url} alt="ppl"/>
      <h2>{ppl.name}</h2>
    </div>
    <p>{ppl.age} years old</p>
    <p className="List-note">{ppl.note}</p>
  </li>)
  }

  return (
    <ul>
      {renderList()}
    </ul>
  );
}

export default List