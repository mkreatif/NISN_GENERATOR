import React from 'react';
import { Route } from 'react-router-dom';
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import "./home.css"

import Dashboard from './Dashboard'
import { UserList, UserCreateOrUpdate } from './../module-user'
import Sidemenu from './Sidemenu';

export default function Home(props) {
    return (
        <Container fluid={true} className="dashboard">
            <Navbar id="navbar" bg="dark" variant="dark">
                <Navbar.Brand href="#dashboard">
                    <img
                        src="/kbb.png"
                        width="auto"
                        height="40"
                        className="d-inline-block align-top"
                        alt="kbb logo"
                    />
                    <div id="brand">
                        <div id="brand-dinas">Dinas Pendidikan</div>
                        <div id="brand-sekolah">SD NEGERI 01 CIBENDA</div>
                    </div>
                </Navbar.Brand>
            </Navbar>
            <Row id="content" >
                <Col id="left" md={2} sm={4} style={{ background: "grey" }} >
                    <Sidemenu />
                </Col>
                <Col id="right" md={10} sm={8}>
                    <div className="content-body">
                        <Route path='/dashboard/' exact component={Dashboard} />
                        <Route
                            path={`/dashboard/user`}
                            render={({ match: { url } }) => (
                                <>
                                    <Route path={`${url}/`} component={UserList} exact />
                                    <Route
                                        path={`${url}/:user_id`}
                                        component={UserCreateOrUpdate}
                                    />
                                </>
                            )}
                        />
                    </div>
                </Col>
            </Row>


        </Container>
    )
}