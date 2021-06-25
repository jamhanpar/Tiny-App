import React, { useState, useEffect } from 'react';
import Row from "react-bootstrap/Row";

export default function Greeting(props) {
    const [name, setName] = useState('James');
    const [surname, setSurname] = useState('Park');

    useEffect(() => {
        document.title = name + ' ' + surname;
    });

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    });

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleSurnameChange(e) {
        setSurname(e.target.value);
    }

    return (
      <section className="widget">
        <div className="info" label="Name">
          <input value={name} onChange={handleNameChange} />
        </div>
        <div className="info" label="Surname">
          <input value={surname} onChange={handleSurnameChange} />
        </div>
        <div className="info" label="Width">
          {width}
        </div>
      </section>
    );
}