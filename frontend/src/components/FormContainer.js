import './form.css'

const FormContainer = ({ children }) => {
  return (
    <div style={{ marginTop: '10rem' }} className="container">
      <div className="columns is-flex is-justify-content-center is-desktop">
        <div className="column center-form is-6 is-mobile">{children}</div>
      </div>
    </div>
  )
}

export default FormContainer
