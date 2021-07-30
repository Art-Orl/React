import React, { useState } from 'react';

import './Form.css';

export function Form({ person, setPerson, idPerson, setIdPerson, notice, setNotice }) {
  const [name, setName] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [nameError, setNameError] = useState(null);

  const [surname, setSurname] = useState('');
  const [surnameDirty, setSurnameDirty] = useState(false);
  const [surnameError, setSurnameError] = useState(null);

  const [email, setEmail] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState(null);

  const [born, setBorn] = useState('');
  const [bornDirty, setBornDirty] = useState(false);
  const [bornError, setBornError] = useState(null);

  let nameRef = React.createRef();
  let emailRef = React.createRef();
  let surnameRef = React.createRef();
  let bDayRef = React.createRef();
  let sexRef = React.createRef();
  let checkboxRef = React.createRef();
  let formRef = React.createRef();

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        if (e.target.value == '') setEmailError('необходимо указать email');
        break;
      case 'name':
        setNameDirty(true);
        if (e.target.value == '') setNameError('необходимо указать имя');
        break;
      case 'surname':
        setSurnameDirty(true);
        if (e.target.value == '') setSurnameError('необходимо указать фамилию');
        break;
      case 'born':
        setBornDirty(true);
        if (e.target.value == '') setBornError('необходимо указать дату рождения');
        break;
    }
  };

  const handlerName = (e) => {
    setName(e.target.value);
    const fe = /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!fe.test(e.target.value) && e.target.value == '') {
      setNameError('необходимо указать имя');
    } else if (!fe.test(e.target.value)) {
      setNameError('имя не должно содержать цифр и спецсимволов');
    } else setNameError('');
  };

  const handlerSurname = (e) => {
    setSurname(e.target.value);
    const fe = /^[a-zA-Z,-]+(([a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!fe.test(e.target.value) && e.target.value == '') {
      setSurnameError('необходимо указать фамилию');
    } else if (!fe.test(e.target.value)) {
      setSurnameError('фамилия не должна содержать цифр и спецсимволов');
    } else setSurnameError('');
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('email введен некоректно');
    } else setEmailError('');
  };

  const bornHandler = (e) => {
    setBorn(e.target.value);
    const re = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if (!re.test(e.target.value)) {
      setBornError('необходимо указать корректную дату');
    } else setBornError('');
  };

  function showNotice() {
    setNotice(!notice);
  }

  function formClear() {
    for (let i = 0; i < formRef.current.elements.length; i++) {
      formRef.current.elements[i].value = '';
    }
    // setName('');
  }

  const idNumber = () => {
    setIdPerson(idPerson + 1);
    return idPerson;
  };

  function addPerson() {
    setPerson([
      ...person,
      {
        name: nameRef.current.value,
        surname: surnameRef.current.value,
        email: emailRef.current.value,
        bDay: bDayRef.current.value,
        sex: sexRef.current.value,
        id: idNumber(),
        checkbox: checkboxRef.current.value,
      },
    ]);
  }

  return (
    <form className="form" ref={formRef}>
      <h1>Регистрация</h1>

      <div className="_input">
        <input
          className={!nameError == '' ? 'error' : null}
          type="text"
          placeholder="Введите своё имя"
          ref={nameRef}
          name="name"
          onBlur={(e) => blurHandler(e)}
          onChange={(e) => handlerName(e)}
          value={name}
          onFocus={() => {
            setNameDirty(!nameDirty);
            setNameError(false);
          }}
        />
        {nameDirty && nameError ? <div className="input__error">{nameError}</div> : null}
      </div>

      <div className="_input">
        <input
          className={!surnameError == '' ? 'error' : null}
          type="text"
          name="surname"
          placeholder="Введите свою фамилию"
          ref={surnameRef}
          value={surname}
          onChange={(e) => handlerSurname(e)}
          onBlur={(e) => blurHandler(e)}
          onFocus={() => {
            setSurnameDirty(!surnameDirty);
            setSurnameError(false);
          }}
        />
        {surnameDirty && surnameError ? <div className="input__error">{surnameError}</div> : null}
      </div>

      <div className="_input">
        <input
          className={!emailError == '' ? 'error' : null}
          onChange={(e) => emailHandler(e)}
          value={email}
          type="email"
          name="email"
          onBlur={(e) => blurHandler(e)}
          placeholder="Введите свой email"
          ref={emailRef}
          onFocus={() => {
            setEmailDirty(!surnameDirty);
            setEmailError(false);
          }}
        />
        {emailDirty && emailError && <div className="input__error">{emailError}</div>}
      </div>

      <div className="_input">
        <input
          className={!bornError == '' ? 'error' : null}
          type="date"
          ref={bDayRef}
          value={born}
          name="born"
          onBlur={(e) => blurHandler(e)}
          onChange={(e) => bornHandler(e)}
        />
        {bornDirty && bornError && <div className="input__error">{bornError}</div>}
      </div>

      <select ref={sexRef}>
        <option>выберите пол</option>
        <option>женский </option>
        <option>мужской</option>
      </select>

      <div>
        <input
          className="_input"
          onClick={() => {
            console.log(checkboxRef);
          }}
          value={false}
          type="checkbox"
          id="scales"
          name="scales"
          ref={checkboxRef}
        />
        <label for="scales">Подписаться на новости и скидки</label>
      </div>
      <div>
        <div
          onClick={() => {
            addPerson();
            formClear();
            showNotice();
            setTimeout(() => setNotice(false), 2000);
          }}
          className="form__button">
          Отправить
        </div>
      </div>
    </form>
  );
}
