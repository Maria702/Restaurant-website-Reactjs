
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
  } from 'react-icons/fa';

  import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaItem,
    SocialLogo,
    SocialIcons,
    IconLink
  } from './FooterElements';
  
  const Footer = () => {
    return (
      <FooterContainer>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaItem>
              <SocialLogo to='/'>FOOD house</SocialLogo>
              <SocialIcons>
                <IconLink  href='#'  aria-label='Facebook'>
                  <FaFacebook />
                </IconLink >
                <IconLink  href='#' aria-label='Instagram'>
                  <FaInstagram />
                </IconLink >
                <IconLink  href='#'  aria-label='Youtube'>
                  <FaYoutube />
                </IconLink >
                <IconLink 
                  href='#'
                  aria-label='Twitter'
                  rel='noopener noreferrer'
                >
                  <FaTwitter />
                </IconLink >
                <IconLink  href='#' aria-label='Linkedin'>
                  <FaLinkedin />
                </IconLink >
              </SocialIcons>
            </SocialMediaItem>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    );
  };
  
  export default Footer;