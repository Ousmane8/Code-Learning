import PropTypes from "prop-types"
import React from "react"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: this.state.isOpen
        });
    }
    render() {
    return (
                <Navbar fixed="top" light expand="md">
                    <div className="container">
                        <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/">Accueil</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/blog">Blog</NavLink>
                                </NavItem>
                                {/*<NavItem>*/}
                                {/*    <NavLink href="/account">Mon Compte</NavLink>*/}
                                {/*</NavItem>*/}
                                <NavItem>
                                    <NavLink href="/contact">Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
        );
    }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
