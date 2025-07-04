import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router";
import styles from "./NavBar.module.css";

export default function NavBar() {
    return (
        <Navbar expand="lg" className={styles.navbar} sticky="top">
            <Container className="px-4">
                <Navbar.Brand
                    className={`d-flex align-items-center ${styles.brandTitle}`}
                >
                    <Link to="/" className={styles.logo}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={`ms-auto ${styles.links}`}>
                        <Nav.Link as={Link} to={"/"}>
                            მთავარი
                        </Nav.Link>
                        <NavDropdown title="კატეგორიები" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to={"/products/epilator"}>
                                ეპილატორი
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/products/facial-cleanser"}>
                                სახის ვაკუუმ-აპარატი
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/products/hair-dryer"}>
                                თმის ფენ-სავარცხელი
                            </NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
