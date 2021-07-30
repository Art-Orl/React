import { React, useState } from 'react';

import { Form } from './components/Form/Form';
import { CardsField } from './components/CardsField/CardsField';

import './App.css';

export function App() {
  const [person, setPerson] = useState([]);
  const [idPerson, setIdPerson] = useState(1);
  const [notice, setNotice] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <Form
        notice={notice}
        setNotice={setNotice}
        person={person}
        setPerson={setPerson}
        setIdPerson={setIdPerson}
        idPerson={idPerson}
        search={search}
        setSearch={setSearch}
      />
      {notice ? <div className="notice">пользователь добавлен</div> : null}
      <CardsField person={person} />
    </div>
  );
}
