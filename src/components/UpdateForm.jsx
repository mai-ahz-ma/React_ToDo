const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
    return(
        <>
        {/* updateTask */}
        <div className="row">
          <div className="col">
            <input 
              value={ updateData && updateData.title }
              onChange={ (e) => changeTask(e)}
              className="form-control form-control-lg"
              />
          </div>
          <div className="col-auto">
            <button 
                onClick={updateTask} 
                className="btn btn-lg btn-success mr-20"
                >update</button>
            <button 
                onClick={cancelUpdate} 
                className="btn btn-lg btn-warning"
                >cancel</button>
          </div>
        </div>
        <br />
      </>

    )
} 

export default UpdateForm;