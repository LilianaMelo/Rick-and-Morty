import React from "react";

const InputGroup = ({total, name, setID, id}) => {

    // console.log([...Array(total).keys() ]);

    return(
        <div className="input-group">
            <label >Escoger: </label>
            <select 
                onChange={ (e) => setID(e.target.value)}
                id={name}
                className="form-select"
                key={id}
            >
                <option value="1" >Seleccionar...</option>

                {[...Array(total).keys()].map((x) => {
                    return (
                        <option value={x + 1}>
                            {name} - {x + 1}
                        </option>
                    );
                })}

            </select>
        </div>
    );
};

export default InputGroup;