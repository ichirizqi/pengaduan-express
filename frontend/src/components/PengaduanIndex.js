import { Link } from 'react-router-dom';

function PengaduanIndex() {
  return (
    <div>
      <Link to={`add`} className='button is-success'>Add Pengaduan</Link>
    </div>
  )
}

export default PengaduanIndex
