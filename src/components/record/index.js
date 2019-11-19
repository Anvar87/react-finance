import React from "react";

import InputField from '../input/index'
import TitleBlock from "../title";
import SelectBlock from "../select";
import './record.scss'

export default () => {
    return (
        <div className="record-block">
            <TitleBlock/>
            <form className="record-block__form">
                <SelectBlock/>
                <InputField/>
            </form>
        </div>
    )
}