import React, { useState } from 'react';
import Row from "react-bootstrap/Row";

export default function Greeting(props) {
    const [name, setName] = useState('James');
    const [surname, setSurname] = useState('Park');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleSurnameChange(e) {
        setSurname(e.target.value);
    }

    return (
        <section className="widget">
            <Row label="Name">
                <input
                    value={name}
                    onChange={handleNameChange}
                    />
            </Row>
            <Row label="Surname">
                <input
                    value={surname}
                    onChange={handleSurnameChange}
                    />
            </Row>
        </section>
    )
}