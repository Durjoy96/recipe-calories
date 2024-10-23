import PropTypes from "prop-types";
import Row from "./Row";

const WantCook = ({ data }) => {
  return (
    <div>
      <div className="w-[350px] h-[50px] border-b mx-auto">
        <h1 className="text-center text-2xl font-semibold text-card-base-content">
          Want to cook : {data.length}
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table text-card-base-content-secondary mt-6">
          <thead className="text-base">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <Row key={idx} data={item} id={idx}></Row>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

WantCook.propTypes = {
  data: PropTypes.array.isRequired,
};

export default WantCook;
