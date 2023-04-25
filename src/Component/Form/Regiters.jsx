

function Regiters(){
    return(
    <div>
        <div className="container">
        <div className="row justify-content-center mt-5">
            <div className="col-8 shadow-lg mt-5">
                <div className="text">
                    <h4 className="text-center mt-5">REGISTRATION INFO</h4>
                </div>
                <form>

                    <input type="text" className="form-control border-0 border-bottom mt-5" placeholder="Name"/>


                    <div className="mt-4 d-flex">
                        <input type="date" className="form-control  border-0 border-bottom" title="Birthdate"/>
                        <select className="form-select  border-0 border-bottom ms-5" aria-label="Default select example">
                            <option selected> Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>

                        </select>
                    </div>

                    <div className="mt-4">
                        <input type="email" className="form-control  border-0 border-bottom" id="exampleInputcode"
                            placeholder="Enter email"/>
                    </div>
                    <div className="mt-4">
                        <input type="password" className="form-control  border-0 border-bottom" id="exampleInputcode"
                            placeholder="Enter password"/>
                    </div>

                    <div className="col-10 mt-4 mb-4">
                        <button type="button" className="btn btn-success">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>       
    )
}
export default Regiters