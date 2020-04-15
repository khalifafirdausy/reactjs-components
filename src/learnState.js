import React from 'react';
// import button dari reactstrap
import {Button} from 'reactstrap';

class LearnState extends React.Component {

  // bikin state
  state = {
    nama: "rehan",
    umur: 20,
  }

  // Belajar Life Cycle
  componentWillMount(){
    // ganti nama
    this.setState({nama: "khalifa"})
  }


  // belajar merubah state
  gantiNama() {
    this.setState({nama: "alif"})
  }

  tambahUmur() {
    let umurSaatIni = this.state.umur
    this.setState({umur: umurSaatIni + 1})
  }

  kuranginUmur() {
    let umurSaatIni = this.state.umur
    // tambahkan kondisi 
    // umur tidak dapat berkurang jika umur kurang dari 18
    if (umurSaatIni > 18) {
      this.setState({umur: umurSaatIni - 1})
    }
  }

  render() {
    return (
      <div>
        <p>Hello {this.state.nama}</p>
        <p>umur {this.state.umur}</p>
        {/* bikin button */}
        <Button onClick={() => this.gantiNama()} >
          Ganti Nama
        </Button>

        <Button color="danger" onClick={() => this.tambahUmur()} >
          Tambah Umur
        </Button>
        <Button color="success" onClick={() => this.kuranginUmur()} >
          Kurangin Umur
        </Button>
      </div>
    )
  }
}

export default LearnState
