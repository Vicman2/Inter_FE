import React, {Component} from 'react'
import './products.css'
import Product from '../../component/Product/Product'


class Products extends Component{
    state = {
        products :[
            {
                "id": 5193,
                "brand_id": "0",
                "name": "ALPEN NO ADDED SUGAR ",
                "slug": "alpen-no-added-sugar",
                "image": "https://tradexadmin.itskillscenter.com/img/products/5010029219326.jpg",
                "manufacturer": "",
                "unit_cost_price": "100.00",
                "unit_selling_price": "100.00",
                "units": "",
                "weight": null,
                "weight_unit": null,
                "subcategory_id": "823",
                "expiry_date": null,
                "barcode": "5010029219326",
                "created_at": "2020-06-23 05:54:33",
                "updated_at": "2020-06-23 05:54:33",
                "reorder_level": "10",
                "category_id": "57"
            },
            {
                "id": 5194,
                "brand_id": "0",
                "name": "ALPEN NO ADDED SUGAR ",
                "slug": "alpen-no-added-sugar",
                "image": "https://tradexadmin.itskillscenter.com/img/products/5010029222890.jpg",
                "manufacturer": "",
                "unit_cost_price": "100.00",
                "unit_selling_price": "100.00",
                "units": "",
                "weight": null,
                "weight_unit": null,
                "subcategory_id": "823",
                "expiry_date": null,
                "barcode": "5010029222890",
                "created_at": "2020-06-23 05:54:33",
                "updated_at": "2020-06-23 05:54:33",
                "reorder_level": "10",
                "category_id": "57"
            },
            {
                "id": 5195,
                "brand_id": "0",
                "name": "ALPEN THE ORIGINAL ",
                "slug": "alpen-the-original",
                "image": "https://tradexadmin.itskillscenter.com/img/products/5010029222876.jpg",
                "manufacturer": "",
                "unit_cost_price": "100.00",
                "unit_selling_price": "100.00",
                "units": "",
                "weight": null,
                "weight_unit": null,
                "subcategory_id": "823",
                "expiry_date": null,
                "barcode": "5010029222876",
                "created_at": "2020-06-23 05:54:33",
                "updated_at": "2020-06-23 05:54:33",
                "reorder_level": "10",
                "category_id": "57"
            },
            {
                "id": 5196,
                "brand_id": "0",
                "name": "BRAN FLAKES ",
                "slug": "bran-flakes",
                "image": "https://tradexadmin.itskillscenter.com/img/products/5053827170062.jpg",
                "manufacturer": "",
                "unit_cost_price": "100.00",
                "unit_selling_price": "100.00",
                "units": "",
                "weight": null,
                "weight_unit": null,
                "subcategory_id": "823",
                "expiry_date": null,
                "barcode": "5053827170062",
                "created_at": "2020-06-23 05:54:33",
                "updated_at": "2020-06-23 05:54:33",
                "reorder_level": "10",
                "category_id": "57"
            },
            {
                "id": 5197,
                "brand_id": "0",
                "name": "BRIIGGEN CORN FLAKES ",
                "slug": "briiggen-corn-flakes",
                "image": "https://tradexadmin.itskillscenter.com/img/products/4008713705690.jpg",
                "manufacturer": "",
                "unit_cost_price": "100.00",
                "unit_selling_price": "100.00",
                "units": "",
                "weight": null,
                "weight_unit": null,
                "subcategory_id": "823",
                "expiry_date": null,
                "barcode": "4008713705690",
                "created_at": "2020-06-23 05:54:33",
                "updated_at": "2020-06-23 05:54:33",
                "reorder_level": "10",
                "category_id": "57"
            },
            {
                "id": 5198,
                "brand_id": "0",
                "name": "COCO POPS ",
                "slug": "coco-pops",
                "image": "https://tradexadmin.itskillscenter.com/img/products/5053827172424.jpg",
                "manufacturer": "",
                "unit_cost_price": "100.00",
                "unit_selling_price": "100.00",
                "units": "",
                "weight": null,
                "weight_unit": null,
                "subcategory_id": "823",
                "expiry_date": null,
                "barcode": "5053827172424",
                "created_at": "2020-06-23 05:54:33",
                "updated_at": "2020-06-23 05:54:33",
                "reorder_level": "10",
                "category_id": "57"
            },
            {
                "id": 5199,
                "brand_id": "0",
                "name": "GOLDEN MORN CEREAL ",
                "slug": "golden-morn-cereal",
                "image": "https://tradexadmin.itskillscenter.com/img/products/6151100030283.jpg",
                "manufacturer": "",
                "unit_cost_price": "100.00",
                "unit_selling_price": "100.00",
                "units": "",
                "weight": null,
                "weight_unit": null,
                "subcategory_id": "823",
                "expiry_date": null,
                "barcode": "6151100030283",
                "created_at": "2020-06-23 05:54:33",
                "updated_at": "2020-06-23 05:54:33",
                "reorder_level": "10",
                "category_id": "57"
            },
            {
                "id": 5200,
                "brand_id": "0",
                "name": "GOLDEN MORN REFILL ",
                "slug": "golden-morn-refill",
                "image": "https://tradexadmin.itskillscenter.com/img/products/6151100030269.jpg",
                "manufacturer": "",
                "unit_cost_price": "100.00",
                "unit_selling_price": "100.00",
                "units": "",
                "weight": null,
                "weight_unit": null,
                "subcategory_id": "823",
                "expiry_date": null,
                "barcode": "6151100030269",
                "created_at": "2020-06-23 05:54:33",
                "updated_at": "2020-06-23 05:54:33",
                "reorder_level": "10",
                "category_id": "57"
            },
            {
                "id": 5201,
                "brand_id": "0",
                "name": "GOOD MORNING CORNFLAKES ",
                "slug": "good-morning-cornflakes",
                "image": "https://tradexadmin.itskillscenter.com/img/products/4008569027403.jpg",
                "manufacturer": "",
                "unit_cost_price": "100.00",
                "unit_selling_price": "100.00",
                "units": "",
                "weight": null,
                "weight_unit": null,
                "subcategory_id": "823",
                "expiry_date": null,
                "barcode": "4008569027403",
                "created_at": "2020-06-23 05:54:33",
                "updated_at": "2020-06-23 05:54:33",
                "reorder_level": "10",
                "category_id": "57"
            },
            {
                "id": 5202,
                "brand_id": "0",
                "name": "GOOD MORNING WHITE OAT ",
                "slug": "good-morning-white-oat",
                "image": "https://tradexadmin.itskillscenter.com/img/products/4008844400006.jpg",
                "manufacturer": "",
                "unit_cost_price": "100.00",
                "unit_selling_price": "100.00",
                "units": "",
                "weight": null,
                "weight_unit": null,
                "subcategory_id": "823",
                "expiry_date": null,
                "barcode": "4008844400006",
                "created_at": "2020-06-23 05:54:33",
                "updated_at": "2020-06-23 05:54:33",
                "reorder_level": "10",
                "category_id": "57"
            },
        ]

    }
    componentDidMount(){
           
        
    }
    render(){
        const products = this.state.products.map((prod, index )=> {
            return(
                <Product
                key={prod.id}
                no={index +1}
                url= {prod.image}
                name={prod.name}
                category="GROCERIES"
                barcode={prod.barcode}
                price={prod.unit_cost_price}
                selling={prod.unit_selling_price}
                createdAt={prod.created_at}
                />
            )
        })
        return(
            <div className="products">
                <div className="Headings">
                    <p className="no1">#</p>
                    <p className="name">Name</p>
                    <p className="category">Category</p>
                    <p className="barcode">Barcode</p>
                    <p className="action">Action</p>
                    <p className="price">Price</p>
                    <p className="expiry">Expiry Date </p>
                    <p className="created">Created</p>
                </div>
                {products}
            </div>

        )
    }
}

export default Products