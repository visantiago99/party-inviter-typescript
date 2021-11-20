import React, { useState } from 'react';
import { Istate as Props } from '../App';

interface IInput {
  name: string;
  age: number;
  url: string;
  note: string;
}

interface IProps {
  people: Props["people"]
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}


const AddToList: React.FC<IProps> = ({people, setPeople}) => {

  const [input, setInput] = useState<IInput>({
    name: "",
    age: 0,
    url: "",
    note: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (): void => {
    if (!input.name || !input.age ) {
      return
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: input.age,
        url: input.url,
        note: input.note
      }
    ])
  }


  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="number"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="Image-URL"
        className="AddToList-input"
        value={input.url}
        onChange={handleChange}
        name="url"
      />
      <textarea
        placeholder="Note"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
        name="note"
      />
      <button 
        className="AddToList-btn"
        onClick={handleClick}
      >
        Add to list
      </button>
    </div>
  )
}

export default AddToList;