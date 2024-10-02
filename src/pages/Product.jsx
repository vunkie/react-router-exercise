import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Product = () => {
    const { id } = useParams();

    const url = `http://localhost:3000/products/${id}`;

    const {data: product, loading, error} = useFetch(url);


	return <div>
        <p>ID do produto: {id}</p>
        {error && <p>{error} </p>}
        {loading && <p>Carregando...</p>}
        {!loading && product && (
            <div>
                <h1>{product.name}</h1>
                <p>R$ {product.price}</p>
                <Link to={`/products/${product.id}/info`} >Mais Informacoes</Link>
            </div>
        )}
    </div>;
};

export default Product;
