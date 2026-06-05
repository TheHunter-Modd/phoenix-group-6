import './FactsTable.css'

function FactsTable() {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th colSpan={2} scope="colgroup"></th>
            <th>Name</th>
            <th>Mass (1024kg)</th>
            <th>Diameter (km)</th>
            <th>Density (kg/m3)</th>
            <th>Gravity (m/s2)</th>
          </tr>
        </thead>
        <tbody>
          {/* Terrestrial Planets */}
          <tr>
            <td className="Planet-1" colSpan={2} rowSpan={4}>Terrestrial Planets</td>
            <td>Mercury</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Venus</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Earth</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Mars</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>

          {/* Jovian Planets / Gas Giants */}
          <tr>
            <td className="Planet-2" rowSpan={4} scope="rowgroup">Jovian Planets</td>
            <td className="Planet-3" rowSpan={2} scope="rowgroup">Gas Giants</td>
            <td>Jupiter</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Saturn</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>

          {/* Ice Giants */}
          <tr>
            <td className="Planet-4" rowSpan={2} scope="rowgroup">Ice Giants</td>
            <td>Uranus</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Neptune</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>

          {/* Dwarf Planets */}
          <tr>
            <td className="Planet-5" colSpan={2} scope="colgroup">Dwarf Planets</td>
            <td>Pluto</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FactsTable;