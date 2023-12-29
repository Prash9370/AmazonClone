import Product from "./Product";
function ProductsList(props) {
    return (
        <div className="plist">
            <Product
  name1={props.dtarray.list1.name[0]}
  name2={props.dtarray.list1.name[1]}
  name3={props.dtarray.list1.name[2]}
  name4={props.dtarray.list1.name[3]}
  img1={props.dtarray.list1.images[0]}
  img2={props.dtarray.list1.images[1]}
  img3={props.dtarray.list1.images[2]}
  img4={props.dtarray.list1.images[3]}
  link={props.dtarray.list1.link}
  linkurl={props.dtarray.list1.linkurl}
  heading={props.dtarray.list1.heading}
/>
<Product
  name1={props.dtarray.list2.name[0]}
  name2={props.dtarray.list2.name[1]}
  name3={props.dtarray.list2.name[2]}
  name4={props.dtarray.list2.name[3]}
  img1={props.dtarray.list2.images[0]}
  img2={props.dtarray.list2.images[1]}
  img3={props.dtarray.list2.images[2]}
  img4={props.dtarray.list2.images[3]}
  link={props.dtarray.list2.link}
  linkurl={props.dtarray.list2.linkurl}
  heading={props.dtarray.list2.heading}
/>
<Product
  name1={props.dtarray.list3.name[0]}
  name2={props.dtarray.list3.name[1]}
  name3={props.dtarray.list3.name[2]}
  name4={props.dtarray.list3.name[3]}
  img1={props.dtarray.list3.images[0]}
  img2={props.dtarray.list3.images[1]}
  img3={props.dtarray.list3.images[2]}
  img4={props.dtarray.list3.images[3]}
  link={props.dtarray.list3.link}
  linkurl={props.dtarray.list3.linkurl}
  heading={props.dtarray.list3.heading}
/>
        </div>
    )
}
export default ProductsList;