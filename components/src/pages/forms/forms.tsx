import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Text from '../../components/UI element/InputForm/textField';
import CheckBox from '../../components/UI element/InputForm/checkBox';
import Switcher from '../../components/UI element/InputForm/switch';
import FileInput from '../../components/UI element/InputForm/fileInput';
import Selected from '../../components/UI element/InputForm/selectedBox';
import styles from './form.module.css';
import FormCard from '../../components/UI element/formCard/formCard';
const initialState = {
  name: '',
  birthday: '',
  breed: '',
  like: false,
  gender: '',
  file: '',
  id: '',
};

type TFormData = {
  name: string;
  birthday: string;
  breed: string;
  like: boolean;
  gender: string;
  file: string;
  id: string;
};

const switchOptions = ['Male', 'Female'];
const selectOptions = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
];

function FormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [cards, setCards] = useState<(typeof initialState)[]>([]);

  const onSubmit = handleSubmit((data) => {
    const newCardData: TFormData = {
      id: (cards.length + 1).toString(),
      name: data.name,
      file: data.file[0] ? URL.createObjectURL(data.file[0] as File) : '',
      like: data.like,
      gender: data.gender ? 'Female' : 'Male',
      birthday: data.birthday,
      breed: data.breed,
    };

    setCards((prev) => [...prev, newCardData]);
    reset();
  });

  return (
    <>
      <h2>Form</h2>
      <form className={styles.form} data-testid="form-page" onSubmit={onSubmit}>
        <Text label="name" field="name" register={register} error={errors} />
        <Text label="Birthday" field="birthday" type="date" register={register} error={errors} />
        <CheckBox label="like" field="passport" register={register} error={errors} />
        <Switcher options={switchOptions} error={errors} label="" field="gender" register={register} />
        <Selected
          options={selectOptions}
          defaultOption="choose..."
          disabledOption={false}
          error={errors}
          label="op"
          field="op"
          register={register}
        />
        <FileInput error={errors} field="file" label="Photo:&nbsp;" register={register} />

        <button type="submit">submit</button>
      </form>
      <div>
        <h3>Cards List</h3>

        {cards.length ? (
          <div className={styles.cards_list} data-testid="not-empty">
            {cards.map((card) => (
              <div key={card.id}>
                <FormCard dataPr={card} />
              </div>
            ))}
          </div>
        ) : (
          <p data-testid="empty">Empty</p>
        )}
      </div>
    </>
  );
}
export default FormPage;
