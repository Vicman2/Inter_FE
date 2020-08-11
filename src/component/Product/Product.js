import React from'react'
import './Product.css'


const Product = (props) => {
    const classes = ["Product"];
    if(props.no % 2 !== 0){
        classes.push("Odd")
    }
    return(
        <div className={classes.join(" ")}>
            <p className="no">{props.no}</p>
            <div className="Product_Name_Image name">
                <div className="Prod_Image_Cont">
                    <img src={props.url} alt={props.name} />
                </div>
                <p>{props.name} </p>
            </div>
            <p className="category">{props.category} </p>
            <p className="barcode">{props.barcode} </p>
            <div className="action">
                <div className="actionpoint">
                    <p>Edit</p>
                    <p><ion-icon name="trash"></ion-icon></p>

                </div>
            </div>
            <div className="price">
                <p> Cost</p>
                <p >{props.price} </p>
                <p>Selling </p>
                <p>{props.selling} </p>
            </div>
            <div className="expiry">
                
            </div>
            <p className="created">{props.createdAt} </p>
        </div>
    )
}

export default Product

