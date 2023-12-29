function visit(linkurl) {
    window.location.href = linkurl;
}


function Product(props) {
    return (
        <div className="hmpgProduct" onClick={() => { visit(props.linkurl) }}>
            <p>{props.heading}</p>
            <div>
                <div>
                    <div>
                        <img src={props.img1} alt={props.name1} />
                    </div>
                        <p>{props.name1}</p>
                </div>
                <div>
                    <div>
                        <img src={props.img2} alt={props.name2} />
                    </div>
                        <p>{props.name2}</p>
                </div>
                <div>
                    <div>
                        <img src={props.img3} alt={props.name3} />
                    </div>
                        <p>{props.name3}</p>
                </div>
                <div>
                    <div>
                        <img src={props.img4} alt={props.name4} />
                    </div>
                        <p>{props.name4}</p>
                </div>
            </div>
            <a href={props.linkurl}>{props.link}</a>
        </div>
    )
}
export default Product;