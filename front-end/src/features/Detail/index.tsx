import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  return <div>Chi tiết dao có ID: {id}</div>;
}

export default Detail;
