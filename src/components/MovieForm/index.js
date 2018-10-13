import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import './style.css';

const renderField = ({ input, label, type, meta: { touched, error, warning }}) => (
    <div>
        <div>
            <input {...input} placeholder={label} type={type} className="form-control" formNoValidate autoFocus={true}/>
            {touched && ((error && <small className="error">{error}</small>) || (warning && <small className="warn">{warning}</small>))}
        </div> 
    </div>
);

const MovieForm = (props) => {

    const { pristine, handleSubmit, onSubmit, exit, invalid, modalTitle } = props;

    return (
        <React.Fragment>
            <div className="modal-header">
                <h5 className="modal-title"><i className="fas fa-film icon-space"></i>{modalTitle}</h5>
                <button type="button" className="close" onClick={() => exit()}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div className="modal-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <Field component={renderField} name="Title" label="Movie Title" />
                    </div>
                    <div className="form-group">
                        <Field component={renderField} name="Director" label="Movie Director" />
                    </div>
                    <div className="form-group">
                        <Field component={renderField} name="Year" label="Release Year" />
                    </div>
                    <div className="form-group">
                        <Field component={renderField} name="Runtime" label="Run Time" />
                    </div>
                    <div className="form-group">
                        <Field component={renderField} name="Genre" label="Genre" />
                    </div>
                    <div className="form-group">
                        <Field component={renderField} name="Poster" label="Poster Url" />
                    </div>
                    
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => exit()}>close</button>
                        <button type="submit" className="btn btn-primary" disabled={invalid || pristine}>Save</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

MovieForm.propTypes = {
    pristine: PropTypes.bool, 
    handleSubmit: PropTypes.func, 
    onSubmit: PropTypes.func, 
    exit: PropTypes.func, 
    invalid: PropTypes.bool,
    modalTitle: PropTypes.string
};

export default MovieForm;