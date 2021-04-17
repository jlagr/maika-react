import React from 'react'

function ContactForm() {
    return (
        <div className="col-md-6 footer2 wow bounceInUp" data-wow-delay=".25s" id="contact">
            <form action="correo.php" method="POST">
                <div className="form-box">          
                    <h4>CONTACTANOS</h4>
                    <table className="table table-responsive d-table">
                        <tbody>
                            <tr>
                                <td><input type="text" className="form-control pl-0" placeholder="NOMBRE" name="nombre" required/></td>
                                <td><input type="email" className="form-control pl-0" placeholder="EMAIL" name="email" required/></td>
                            </tr>
                            <tr>
                                <td colSpan="2"></td>
                            </tr>            
                            <tr>
                                <td colSpan="2"></td>
                            </tr>
                            <tr>
                                <td colSpan="2"><input type="text" className="form-control pl-0" placeholder="MENSAJE" name="mensaje" required/></td>
                            </tr>
                            <tr>
                                <td colSpan="2"></td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="text-center pl-0"><button type="submit" className="btn btn-dark">ENVIAR</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </form>                    
        </div>
    )
}

export default ContactForm
