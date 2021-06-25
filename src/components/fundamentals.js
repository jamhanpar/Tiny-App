import React, { useState, useEffect } from 'react';
import Row from "react-bootstrap/Row";

export default function Greeting(props) {
    const name = useFormInput('James');
    const surname = useFormInput('Park');
    // const [name, setName] = useState('James');
    // const [surname, setSurname] = useState('Park');
    const width = useWindowWidth();
    // useDocumentTitle(name + ' ' + surname);
    useDocumentTitle(name.value + ' ' + surname.value);

    // function handleNameChange(e) {
    //     setName(e.target.value);
    // }

    // function handleSurnameChange(e) {
    //     setSurname(e.target.value);
    // }

    return (
      <section className="widget">
        <div className="info" label="Name">
          {/* <input value={name} onChange={handleNameChange} /> */}
          <input {...name} />
        </div>
        <div className="info" label="Surname">
          {/* <input value={surname} onChange={handleSurnameChange} /> */}
          <input {...surname} />
        </div>
        <div className="info" label="Width">
          {`width: ${width}`}
        </div>
      </section>
    );
}

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
      setValue(e.target.value);
    }
    
    return {
        value,
        onChange: handleChange
    }
}

function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title;
    });
}

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    });
    
    return width;
}