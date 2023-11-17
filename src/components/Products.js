import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products/actions";
import Layout from "./Layout";
import ItemCard from "./ItemCard";
import Toolbar from "./Toolbar";
import Button from "./Button";
import InputBase from "./InputBase";

function Products(props) {
  useEffect(() => {
    props.onInit()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className="row">
        <div className="col-12">
          <h1>
            Products
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Toolbar>
            <Button>
              Add product
            </Button>
            <Button className="ms-3" variant="secondary">
              Add filter
            </Button>
            <div className="ms-auto">
              <InputBase placeholder="Search" />
            </div>
          </Toolbar>
        </div>
      </div>
      <br />
      <div className="row">
        {props.data.map(item => (
          <div
            key={item.id}
            className="col-3"
          >
            <ItemCard data={item} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

function mapState(state) {
  return {
    data: state.products.data,
    status: state.products.status
  };
}

function mapDispatch(dispatch) {
  return {
    onInit() {
      return dispatch(fetchProducts());
    }
  };
}

export default connect(mapState, mapDispatch)(Products);
