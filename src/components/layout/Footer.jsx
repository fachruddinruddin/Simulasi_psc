import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Muhammad Fachruddin .</p>
        </footer>
    );
};

const styles = {
    footer: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#fff',
        color: 'black',
        textAlign: 'center',
        padding: '10px 0',
    },
};

export default Footer;