import { useState } from "react";

function Form() {

    const [form, setForm] = useState({
        FirstName: "",
        email: "",
        age: "",
        onion: false,
        gender: ""
    });

    function Handle(e) {

        const name = e.target.name;

        const value =
            e.target.type === "checkbox"
                ? e.target.checked
                : e.target.value;

        setForm(values => ({
            ...values,
            [name]: value
        }));
    }

    function Submit(e) {
        e.preventDefault();
alert(`this ${form.FirstName}  ${form.age}  ${form.onion}  ${form.gender}  ${form.email}`)
        console.log(form);
    }

    return (
        <form onSubmit={Submit}>

            <label>
                First Name:
                <input
                    type="text"
                    name="FirstName"
                    value={form.FirstName}
                    placeholder="Enter name"
                    required
                    onChange={Handle}
                />
            </label>

            <br />

            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    placeholder="Enter email"
                    required
                    onChange={Handle}
                />
            </label>

            <br />

            <label>
                Age:
                <input
                    type="number"
                    name="age"
                    value={form.age}
                    min="1"
                    max="100"
                    onChange={Handle}
                />
            </label>

            <br />

            <label>
                Onion:
                <input
                    type="checkbox"
                    name="onion"
                    checked={form.onion}
                    onChange={Handle}
                />
            </label>

            <br />

            <p>Gender:</p>

            <label>
                Male
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={form.gender === "male"}
                    onChange={Handle}
                />
            </label>

            <label>
                Female
                <input
                    type="radio"
                    name="gender"

                    value="female"
                    checked={form.gender === "female"}
                    onChange={Handle}
                />
            </label>

            <br /><br />

            <button type="submit">
                Submit
            </button>

        </form>
    );
}

export default Form;