import { Button, Container, Menu, MenuItem } from 'semantic-ui-react';

type Props = {
    setFormOpen: (value: boolean) => void;
}

const NavBar = ({ setFormOpen }: Props) => {
    return (
        <Menu inverted={true} fixed='top'>
            <Container>
                <MenuItem header>
                    <img src="/logo.png" alt="algo" />
                    Re-Vents
                </MenuItem>
                <MenuItem name='Events' />
                <MenuItem>
                    <Button floated='right' positive={true} inverted={true} content='Create Event' onClick={() => setFormOpen(true)} />
                </MenuItem>
                <MenuItem position='right'>
                    <Button basic inverted content='Login' />
                    <Button basic inverted content='Register' style={{ marginLeft: '0.5em' }} />
                </MenuItem>
            </Container>
        </Menu>
    );
};

export default NavBar;