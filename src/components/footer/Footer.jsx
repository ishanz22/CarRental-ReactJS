import React from 'react';
import Logo from '../Logo';



function Footer() {
    return (
        <>
            <footer style={styles.footer}>
                <div style={styles.leftSide}>
                    <Logo />
                    <p style={styles.description}>Our vision is to provide convenience and help increase your sales business.</p>
                </div>

                <div style={styles.rightSide}>
                    <div style={styles.footerLinks}>
                        <div style={{ width: '200px' }}>
                            <a style={styles.link} href="/about">About</a>
                            <p style={styles.linkDescription}>How it works</p>
                            <p style={styles.linkDescription}>Featured</p>
                            <p style={styles.linkDescription}>Partnership</p>
                            <p style={styles.linkDescription}>Business Relation</p>
                        </div>
                        <div style={{ width: '200px' }}>
                            <a style={styles.link} href="/community">Community</a>
                            <p style={styles.linkDescription}>Events</p>
                            <p style={styles.linkDescription}>Blog</p>
                            <p style={styles.linkDescription}>Podcast</p>
                            <p style={styles.linkDescription}>Invite a friend
                            </p>
                        </div>
                        <div style={{ width: '200px' }}>
                            <a style={styles.link} href="/socials">Socials</a>
                            <p style={styles.linkDescription}>Discord</p>
                            <p style={styles.linkDescription}>Instagram</p>
                            <p style={styles.linkDescription}>Twitter</p>
                            <p style={styles.linkDescription}>Facebook</p>
                        </div>
                    </div>
                </div>

            </footer>
            

        </>
    );
}

export default Footer;

const styles = {
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        color: 'rgba(19, 19, 19, 0.6)',
        padding: '40px',
    },
    leftSide: {
        flex: 1,
    },
    rightSide: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    link: {
        color: "#1A202C",
        textDecoration: 'none',
        marginRight: '20px',
        fontsize: '20px',
        fontweight: "600",

    },
    linkDescription: {
        color: 'rgba(19, 19, 19, 0.6)',
        margin: '5px 0',
        fontsize: '16px',
        paddingTop: 20
    },
    socials: {
        display: 'flex',
    },
    socialLink: {
        color: 'black',
        textDecoration: 'none',
        marginRight: '10px',
    },
    description: {
        paddingTop: 20,
    },
    footerLinks: {
        display: 'flex'
    },
    border: {
        borderBottom: "red",
        width: "100%"
    },
};
