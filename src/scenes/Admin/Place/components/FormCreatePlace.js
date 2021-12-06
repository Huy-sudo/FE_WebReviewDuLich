import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RenderNumberAnt from '../../../../share/components/RenderNumberAnt'
import RenderSelect from '../../../../share/components/RenderSelect'
import RenderInputText from '../../../../share/components/RenderInputText'
import RenderTextareaAnt from '../../../../share/components/RenderTextareaAnt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons'
let ModalCreatePlace = props => {
    const { handleSubmit, handleShowForm, city = [] } = props

    let options = city.map(d=>{
        return {label: d.name, value: d.ID }
    }) || []

    return (
        <form onSubmit={handleSubmit}>
            <div className='row bg-white m-3 pt-3' >
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Tên địa điểm:</label>
                    <Field
                        name="name"
                        component={RenderInputText}
                        placeholder='Tên địa điểm'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Thuộc thành phố:</label>
                    <Field
                        name="ID_city"
                        component={RenderSelect}
                        options={options}
                        placeholder='Thành phố'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Địa chỉ: </label>
                    <Field
                        name="address"
                        component={RenderInputText}
                        placeholder='Địa chỉ'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Hình ảnh: </label>
                    <Field
                        name="picture"
                        component={RenderInputText}
                        placeholder='Source'
                    />
                </div>
                <label className="font-weight-bold text-muted">Nội dung: </label>
                <Field
                    name="content"
                    component={RenderTextareaAnt}
                    placeholder='Giới thiệu'
                />
            </div>
            <div className='col-12 text-center'>
                <button className='btn btn-primary mr-3' type="submit"> <FontAwesomeIcon icon={faSave} /> Save</button>
                <button onClick={() => handleShowForm(false)} className='btn btn-secondary'> <FontAwesomeIcon icon={faTimes} /> Cancel</button>
            </div>
        </form>
    )
}

ModalCreatePlace = reduxForm({
    enableReinitialize: true,
    form: 'FormCreatePlace'
})(ModalCreatePlace)

export default ModalCreatePlace
