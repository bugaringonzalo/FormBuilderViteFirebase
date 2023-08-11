import React, { useState } from "react";
import Button from "../button/Button";
import FIELDS_DATA from "../../../data.json";

const defaultFormFields = {
  full_name: "",
  email: "",
  birth_date: "",
  country_of_origin: "",
  terms_and_conditions: "",
};

function Form() {
  const data = FIELDS_DATA;

  const [input, setInput] = useState(defaultFormFields);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(input);
  };
  

  return (
    <div>
      <form action="" className="form" onSubmit={handleSubmit}>
        {data?.items.map((item: any) => {
          return (
            <div>
              {
                (function (){
                  switch (item.type) {
                    case "text":
                      return (
                        <div>
                          <label htmlFor={item.name}>{item.label}</label>
                          <input
                            type={item.type}
                            name={item.name}
                            id={item.name}
                            value={input[item.name]}
                            onChange={handleChange}
                          />
                        </div>
                      );
                    case "date":
                      return (
                        <div>
                          <label htmlFor={item.name}>{item.label}</label>
                          <input
                            type={item.type}
                            name={item.name}
                            id={item.name}
                            value={input[item.name]}
                            onChange={handleChange}
                          />
                        </div>
                      );
                    case "email":
                      return (
                        <div>
                          <label htmlFor={item.name}>{item.label}</label>
                          <input
                            type={item.type}
                            name={item.name}
                            id={item.name}
                            value={input[item.name]}
                            onChange={handleChange}
                          />
                        </div>
                      );
                    case "select":
                      return (
                        <div>
                          <label htmlFor={item.name}>{item.label}</label>
                          <select
                            name={item.name}
                            id={item.name}
                            value={input[item.name]}
                            onChange={handleChange}
                          >
                            {item.options.map((option: any) => {
                              return (
                                <option value={option.value}>
                                  {option.label}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      );
                    case "checkbox":
                      return (
                        <div>
                          <label htmlFor={item.name}>{item.label}</label>
                          <input
                            type={item.type}
                            name={item.name}
                            id={item.name}
                            required={item.required}
                            value={input[item.name]}
                            onChange={handleChange}
                          />
                        </div>
                      );
  
                    case "submit":
                      return <Button props={'name'} />;
                    default:
                      return null;
                  }
                })()
              }
              
            </div>
          );
        })}
      </form>
      
    </div>
  );
}

export default Form;
