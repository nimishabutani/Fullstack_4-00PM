function Duplicate_card() {

    let object = 
        {
            name: 'Mahek',
            Email: 'mahek@gmail.com',
            Address: 'vadodara',
            qualification: 'BCA',
            contact: '786786989'

        }
    
    document.getElementById("name1").innerHTML=object.name;
    document.getElementById("email1").innerHTML=object.Email;
    document.getElementById("address1").innerHTML=object.Address;
    document.getElementById("quali1").innerHTML=object.qualification;
    document.getElementById("contact1").innerHTML=object.contact;
    return(
        <div>

            <div className="row justify-content-center">
                <div className="col-4" id="card1">
                    <div className="card g-5 mt-5">
                        {/* <img src="assets/nature-therapy-1019x573.webp" className="card-img-top" alt="..." /> */}
                        <div className="card-body">
                            <label className="fw-bold col-4">Name:</label>
                            <label name="name1" id="name1"></label><br /><br />

                            <label className="fw-bold col-4">Email:</label>
                            <label name="email1" id="email1"></label><br /><br />

                            <label className="fw-bold col-4">Address:</label>
                            <label name="address1" id="address1"></label><br /><br />

                            <label className="fw-bold col-4">Qualification:</label>
                            <label name="quali1" id="quali1"></label><br /><br />

                            <label className="fw-bold col-4">Contact:</label>
                            <label name="contact1" id="contact1"></label><br /><br />
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
 
}
export default Duplicate_card