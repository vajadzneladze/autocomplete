import React, { Fragment } from 'react';
import PropTypes from "prop-types";

const List = ({ data, selectHandler }) => {

    return (
        <Fragment>
            {
                data.map((name, index) => {
                    return <p key = {index} onClick = { () => selectHandler(name) }> { name } </p>
                })
            }
        </Fragment>
    )
}

export default List;

List.propTypes = {
    selectHandler: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.string)
};