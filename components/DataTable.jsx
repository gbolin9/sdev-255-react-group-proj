import { useEffect, useState } from "react";

function DataTable({ endpoint, columns, title }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(result => {
        setData(result);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [endpoint]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>{title}</h2>

      <table border="1">
        <thead>
          <tr>
            {columns.map(col => (
              <th key={col.header}>{col.header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map(item => (
            <tr key={item._id}>
              {columns.map(col => (
                <td key={col.field}>
                  {item[col.field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;