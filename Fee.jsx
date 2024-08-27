import './Fee.css';
export default function Fee() {
   var count=3;
    const payment={
        paid:"1,00,000/-",
        FeeDue:"80,000/-",
    };
    let rowdec={fontWeight : "600"};

    return (
        <>
            <div className="body3">
                <div className="feeslide">
                    <div className="navibar">

                        <div className="ham">
                            <i class="fa-solid fa-bars"></i>
                        </div>
                        <div className="notify">
                            <i class="fa-solid fa-bell"></i>
                            <img src="https://cdn.glitch.global/39c23c41-f2b1-4a3e-a30c-49d98298abe0/thumbnails%2Fprofile.jpg?1720155902468"></img>
                        </div>

                    </div>
                    <h1>Fee Payment</h1>
                    <div className="details">
                        <h2 className='detail'>Paid : {payment.paid} </h2>
                        <h2  className='detail'>Fee Due : {payment.FeeDue} </h2>
                    </div>
                    <div className="section">
                        <a className='status'>All payments</a>
                        <a className='status'>Succeeded</a>
                        <a className='status'>Pending</a>
                        <a className='status'>Failed</a>
                    </div>
                    <p className='num' >{count} in total</p>
                    <div className="impo">
                    <table className='transaction'>
                        <tr style={rowdec}>
                            <td>CODE</td>
                            <td>AMOUNT</td>
                            <td>STATUS</td>
                            <td>TIME</td>
                            <td>DATE</td>
                            <td>DEVICE</td>
                            <td>IP ADDRESS </td>
                            <td>PAYMENT<br>
                            </br> METHOD</td>

                        </tr>
                        <tr>
                            <td>CODE</td>
                            <td>CODE</td>
                            <td>CODE</td>
                            <td>CODE</td>
                            <td>CODE</td>
                            <td>CODE</td>
                            <td>CODE</td>
                            <td>CODE</td>
                        </tr>
                        <tr>
                            <td>CODE</td>
                            <td>CODE</td>
                            <td>CODE</td>
                            <td>CODE</td>
                            <td>CODE</td>
                            <td>CODE</td>
                            <td>CODE</td>
                            <td>CODE</td>
                        </tr>
                        <tr>
                            <td>CODE</td>
                            <td>CODE</td>
                            <td>CODE</td>
                            <td>CODE</td>
                            <td>CODE</td>
                            <td>CODE</td>
                            <td>CODE</td>
                            <td>CODE</td>
                        </tr>
                        <tr>
                            <td>CODE</td>
                            <td>CODE</td>
                            <td>CODE</td>
                            <td>CODE</td>
                            <td>CODE</td>
                            <td>CODE</td>
                            <td>CODE</td>
                            <td>CODE</td>
                        </tr>
                    </table>
                    </div>
                    <div className="receipt">
                        <h2 style={rowdec}>Receipt</h2>
                    </div>
                    <div className="check">
                        <p>The Receipt has not been sent yet</p>
                    </div>
                    <div className="submission">
                        <button className='button'>Send Receipt</button>
                    </div>
                </div>
            </div>
        </>
    );
}