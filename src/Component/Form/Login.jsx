

function Login(){
    return(
    <div>
         <div className="container">
        <div className="row justify-content-center mt-5 mb-5">
            <div className="col-8 shadow-lg mt-5">
                <div className="text">
                    <h4 className="text-center mt-5">Login Form</h4>
                </div>
                <form>

                   

                    <div className="mt-4">
                        <input type="email" className="form-control  border-0 border-bottom" id="exampleInputcode"
                            placeholder="Enter email"/>
                    </div>
                    <div className="mt-4">
                        <input type="password" className="form-control  border-0 border-bottom" id="exampleInputcode"
                            placeholder="Enter password"/>
                    </div>

                    <div className="col-10 mt-4 mb-4">
                        <button type="button" className="btn btn-success">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>       
    )
}
export default Login