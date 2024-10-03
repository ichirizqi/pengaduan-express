import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const PengaduanCreate = () => {
    const [nama, setNama] = useState("");
    const [lokasi, setLokasi] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    
    const navigate = useNavigate();


    const savePengaduan = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/pengaduan', {
                nama,
                lokasi,
                deskripsi
            });
            alert('Selamat, Pengaduan Anda berhasil dikirim');
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
      <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={savePengaduan}>
                <div className="field">
                    <label className="label">Nama</label>
                    <div className="control">
                        <input type="text" className="input" 
                        value={nama} 
                        onChange={(e) => setNama(e.target.value)} 
                        placeholder='Nama'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Lokasi</label>
                    <div className="control">
                        <input type="text" className="input" 
                        value={lokasi} 
                        onChange={(e) => setLokasi(e.target.value)} 
                        placeholder='Lokasi'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Deskripsi</label>
                    <div className="control">
                        <textarea className="input" rows={5} 
                        value={deskripsi} 
                        onChange={(e) => setDeskripsi(e.target.value)} 
                        placeholder='Deskripsi'></textarea>
                    </div>
                </div>
                <div className="field">
                    <button type='submit' className='button is-success'>Save</button>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default PengaduanCreate
