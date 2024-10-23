import PropTypes from "prop-types";
import Row from "./Row";

const CurrentlyCooking = ({ data }) => {
  return (
    <div>
      <div className="w-[350px] h-[50px] border-b mx-auto">
        <h1 className="text-center text-2xl font-semibold text-card-base-content">
          Currently Cooking : {data.length}
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
            <tr className="text-base">
              <th></th>
              <td></td>
              <td>
                {data.length
                  ? data.reduce((acc, curr) => curr.preparing_time + acc, 0) +
                    " Minutes"
                  : ""}
              </td>
              <td>
                {data.length
                  ? data.reduce((acc, curr) => curr.calories + acc, 0) +
                    " Calories"
                  : ""}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

CurrentlyCooking.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CurrentlyCooking;
