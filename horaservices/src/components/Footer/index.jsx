import React from "react";
import frame_footer from "../../assets/frame_footer.png";
import horaFooterImage from '../../assets/hora-footer-bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';
import Link from "next/link";

const footerColumns = [
  {
    title: 'About Hora',
    links: [
      { text: 'My Order', to: '/orderlist' },
      { text: 'About Us', href: 'https://horaservices.com/AboutUs.html' },
      { text: 'Private Policy', href: 'https://horaservices.com/privacy-policy.html' },
      { text: 'Terms & Condition', href: 'https://horaservices.com/termCondition.html' },
      { text: 'Sitemap', href: 'https://horaservices.com/sitemap.xml' },
    ],
  },
  {
    title: 'Services',
    links: [
      { text: 'Chef for Party and Occasions', href: '/book-chef-cook-for-party' },
      { text: 'Decorations for Party and Occasions', href: '/balloon-decoration' },
      { text: 'Food Delivery for Party and Occasions', href: 'party-food-delivery-live-catering-buffet/party-food-delivery' },
      { text: 'Catering Service for Party and Occasions', href: '/party-food-delivery-live-catering-buffet/party-live-buffet-catering' },
      { text: 'Waiter for Party and Occasions', href: 'https://horaservices.com/ContactUs.html' },
      { text: 'Bar Tender for Party and Occasions', href: 'https://horaservices.com/ContactUs.html' },
      { text: 'Cleaner for Party and Occasions', href: 'https://horaservices.com/ContactUs.html' },
      { text: 'Occasions', href: 'https://horaservices.com/Occasion.html' },
      { text: 'Cuisine', href: 'https://horaservices.com/Cuisine.html' },
    ],
  },
  {
    title: 'Chef in your city',
    links: [
      { text: 'Delhi', to: '/city/chef-near-me?city=delhi' },
      { text: 'Gurugram', to: '/city/chef-near-me?city=gurugram' },
      { text: 'Ghaziabad', to: '/city/chef-near-me?city=ghaziabad' },
      { text: 'Faridabad', to: '/city/chef-near-me?city=faridabad' },
      { text: 'Noida', to: '/city/chef-near-me?city=noida' },
      { text: 'Bengaluru', to: '/city/chef-near-me?city=bengaluru' },
      { text: 'Hyderabad', to: '/city/chef-near-me?city=hyderabad' },
      { text: 'Mumbai', to: '/city/chef-near-me?city=mumbai' },
      { text: 'Indore', to: '/city/chef-near-me?city=indore' },
      { text: 'Chennai', to: '/city/chef-near-me?city=chennai' },
      { text: 'Pune', to: '/city/chef-near-me?city=pune' },
      { text: 'Surat', to: '/city/chef-near-me?city=surat' },
      { text: 'Bhopal', to: '/city/chef-near-me?city=bhopal' },
      { text: 'Kanpur', to: '/city/chef-near-me?city=kanpur' },
      { text: 'Lucknow', to: '/city/chef-near-me?city=lucknow' },
      { text: 'Goa', to: '/city/chef-near-me?city=goa' },
    ],
  },
  {
    title: 'Decorations in your city',
    links: [
      { text: 'Delhi', to: '/city?city=delhi' },
      { text: 'Gurugram', to: '/city?city=gurugram' },
      { text: 'Ghaziabad', to: '/city?city=ghaziabad' },
      { text: 'Faridabad', to: '/city?city=faridabad' },
      { text: 'Noida', to: '/city?city=noida' },
      { text: 'Bengaluru', to: '/city?city=bengaluru' },
      { text: 'Hyderabad', to: '/city?city=hyderabad' },
      { text: 'Mumbai', to: '/city?city=mumbai' },
      { text: 'Indore', to: '/city?city=indore' },
      { text: 'Chennai', to: '/city?city=chennai' },
      { text: 'Pune', to: '/city?city=pune' },
      { text: 'Surat', to: '/city?city=surat' },
      { text: 'Bhopal', to: '/city?city=bhopal' },
      { text: 'Kanpur', to: '/city?city=kanpur' },
      { text: 'Lucknow', to: '/city?city=lucknow' },
      { text: 'Goa', to: '/city?city=goa' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { text: '+917338584828', href: 'tel:+918982321487' },
      { text: 'dev@horaservices.com', href: 'mailto:dev@horaservices.com', style: { textTransform: 'lowercase' } },
      { text: 'Contact Us', href: '/contactus' },
    ],
  },
];

function Footer() {
  return (
    <footer style={style.footer}>
      <div style={style.frameBlack}></div>
      <Container className="p-0">
        <Row className="py-4 justify-content-center">
          {footerColumns.map((column, index) => (
            <Col key={index} className="mb-3">
              <h2 className="footerheading">{column.title}</h2>
              <ul className={`list-unstyled-${index}`}>
                {column.links.map((link, idx) => (
                  <li key={idx}>
                    {link.to ? (
                      <Link href={link.to} style={style.link}>{link.text}</Link>
                    ) : (
                      <Link href={link.href} style={style.link}>{link.text}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
        <Row className="text-center align-items-center justify-content-center">
          <Col>
            <div className="social-icons">
              <Link href="https://www.facebook.com/profile.php?id=61550111701616" target="_blank" rel="noopener noreferrer" className="mx-2" style={{ color: "inherit" }}>
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link href="https://www.instagram.com/horaservices/?fbclid=IwAR0PktJ-rl5rKC6YGSZ8BSw3m8o9qMfLpJchO17FCEZuCXKxvASZWRymifA" target="_blank" rel="noopener noreferrer" className="mx-2" style={{ color: "inherit" }}>
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link href="https://www.youtube.com/channel/UCj5gMUjptHut0aGYHxCbE5g" target="_blank" rel="noopener noreferrer" className="mx-2" style={{ color: "inherit" }}>
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            </div>
          </Col>
          <Col>
            <p className="copy p-0 m-0">© HORA - All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

const style = {
  footer: {
    background: `url(${horaFooterImage.src})`,
    padding: '10px 0',
    color: '#fff',
  },
  frameBlack: {
    background: `url(${frame_footer.src}) 0 0 repeat-x`,
    backgroundSize: '10px 3px',
    height: '3px',
    width: '100%',
    position: 'absolute',
    top: '-3px',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
}

export default Footer;


