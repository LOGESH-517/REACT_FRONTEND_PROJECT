    import './sections.js';

    var total=0;

    function Cart() {
        return( 
            <div style={{justifyContent:'center',display:"flex" }}>
            <div className="cart" >
                <h6 style={{textAlign:"center"}}>ITEMS ADDED TO THE CARD</h6>
                <button onClick={totalam} style={{borderRadius:"12%"}}>CLICK TO KNOW TOTAL AMOUNT</button>
                <section id='cartsection'>
                </section>
            </div>
            </div>
        )
    }

    function totalam () 
    {
        const f = document.createElement("h4");
        const sec = document.getElementById('cartsection');
        f.append("Thank you!!  ");
        f.append("Total Price Rs.",total);
        sec.append(f);
        console.log(total);
        alert(`BILL AMOUNT: ₹${total}`)
    }

    var adder = (x,y) => () =>
    {
        var v = document.getElementById(x).value;
        console.log(v);
        console.log(y);
        var sec = document.getElementById('cartsection');
        const p = document.createElement("p");
        p.append(y," ",v);
        sec.append(p);
        total = parseInt(total) + parseInt(v);
        console.log(total);
    }

    export {Cart,adder};