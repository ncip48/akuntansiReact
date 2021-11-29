/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { clickMenuOpen } from "../../../redux/actions";

class Sidebar extends Component {
  // componentDidMount() {
  //   document.getElementById('body').className = 'page-top';
  // }
  // state = {
  //   sidebarToggled: false,
  // }

  // handleSideBarToggle() {
  //   if (this.sidebarToogled === true) {
  //     this.setState({ sidebarToggled: !this.state.sidebarToggled });
  //     document.getElementById('body').className = 'page-top sidebar-toggled';
  //   } else {
  //     this.setState({ sidebarToggled: !this.state.sidebarToggled });
  //     document.getElementById('body').className = 'page-top';
  //   }

  // }

  render() {
    const { clickMenuOpen, toggled, active } = this.props;
    return (
      <ul
        className={
          toggled
            ? "navbar-nav bg-gradient-danger sidebar sidebar-dark accordion toggled"
            : "navbar-nav bg-gradient-danger sidebar sidebar-dark accordion"
        }
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-2">PT MENCARI CINTA SEJATI</div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className={active === "dashboard" ? "nav-item active" : "nav-item"}>
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        {/* <hr className="sidebar-divider my-0" /> */}

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-controls="collapseOne"
          >
            <i className="fas fa-fw fa-building"></i>
            <span>Perusahaan</span>
          </a>
          <div
            id="collapseOne"
            className="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Menu Perusahaan:</h6>
              <Link className="collapse-item" to="/cabang">
                Cabang
              </Link>
              <Link className="collapse-item" to="/pajak">
                Pajak
              </Link>
              <Link className="collapse-item" to="/syarat-pembayaran">
                Syarat Pembayaran
              </Link>
              <Link className="collapse-item" to="/pengiriman">
                Pengiriman
              </Link>
              <Link className="collapse-item" to="/fob">
                FOB
              </Link>
              <Link className="collapse-item" to="/gaji">
                Gaji/Tunjangan
              </Link>
              <Link className="collapse-item" to="/karyawan">
                Karyawan
              </Link>
              <Link className="collapse-item" to="/kontak">
                Kontak
              </Link>
              <Link className="collapse-item" to="/log-aktifitas">
                Log Aktifitas
              </Link>
            </div>
          </div>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline">
          <button
            onClick={() => {
              clickMenuOpen();
            }}
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>
      </ul>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ clickMenuOpen }, dispatch);

const mapStateToProps = (store) => ({
  toggled: store.menuState.menuOpen,
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
