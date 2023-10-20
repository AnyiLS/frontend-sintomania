import PropTypes from "prop-types";
import { Fragment } from "react";
import { Controller } from "react-hook-form";
import { InputContent } from "./Input.styles";

const Input = ({ required, control, name, placeholder, rules }) => {
    const InputComponent = ({ field, formState }) => {
        const { errors } = formState;

        return (
            <Fragment>
                <InputContent>
                    {required && required && <span>*</span>}
                    <input
                        type="text"
                        placeholder={placeholder}
                        onChange={(e) => field.onChange(e)}
                    />
                </InputContent>
                {errors[name] && (
                    <small className="text-red-500 text-[10px] mt-[-10px]">
                        {errors[name]?.message}
                    </small>
                )}
            </Fragment>
        );
    };

    const controller = { control, name, render: InputComponent, rules };

    return <Controller {...controller} />;
};

Input.propTypes = {
    required: PropTypes.bool,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};

export default Input;
