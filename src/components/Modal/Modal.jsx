import { useState } from 'react';
import css from './Modal.module.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addNewAdvert } from '../../Redux/reducer';

const Modal = ({ onClose }) => {
  const dispatch = useDispatch();

  const [adv, setAdv] = useState({
    id: nanoid(),
    title: '',
    desc: '',
    price: '',
    lat: null,
    lng: null,
  });
  const handleSubmit = event => {
    event.preventDefault();
    console.log(adv);
    dispatch(addNewAdvert(adv));
    onClose();
  };

  const handleInput = event => {
    if (event.target.name === 'lat' || event.target.name === 'lng') {
      setAdv({
        ...adv,
        [event.target.name]: parseInt(event.target.value),
      });
    } else {
      setAdv({
        ...adv,
        [event.target.name]: event.target.value,
      });
    }
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.info}>
          <label>
            Title: <input type="text" name="title" onInput={handleInput} />
          </label>
          <label>
            Description: <input type="text" name="desc" onInput={handleInput} />
          </label>
          <label>
            Price: <input type="text" name="price" onInput={handleInput} />
          </label>
        </div>
        <div className={css.location}>
          <label>
            Latitude: <input type="text" name="lat" onInput={handleInput} />
          </label>
          <label>
            Longitude: <input type="text" name="lng" onInput={handleInput} />
          </label>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Modal;
