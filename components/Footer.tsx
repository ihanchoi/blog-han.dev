import { BlogInfo, Copyright, FooterContainer, SocialIcon, SocialIconWrap } from './Footer.style'
import metadata from '../data/metadata'

const Footer = () => {
    return (
    <FooterContainer>
        <SocialIconWrap>
        {metadata.social.github && (
        <a href={metadata.social.github} target="_blank" rel="noreferrer">
            <SocialIcon src="/social/github.svg" alt="github" />
            </a>
        )}
        {metadata.social.facebook && (
            <a href={metadata.social.facebook} target="_blank" rel="noreferrer">
            <SocialIcon src="/social/facebook.svg" alt="facebook" />
            </a>
        )}
        {metadata.social.instagram && (
            <a href={metadata.social.instagram} target="_blank" rel="noreferrer">
            <SocialIcon src="/social/instagram.svg" alt="instagram" />
            </a>
        )}
        {metadata.social.linkedin && (
            <a href={metadata.social.linkedin} target="_blank" rel="noreferrer">
            <SocialIcon src="/social/linkedin.svg" alt="linkedin" />
            </a>
        )}
        {metadata.social.velog && (
            <a href={metadata.social.velog} target="_blank" rel="noreferrer">
            <SocialIcon src="/social/stackoverflow.svg" alt="stackoverflow" />
            </a>
        )}
        {metadata.social.twitter && (
            <a href={metadata.social.twitter} target="_blank" rel="noreferrer">
            <SocialIcon src="/social/twitter.svg" alt="twitter" />
            </a>
        )}
        {metadata.social.rss && (
            <a href={metadata.social.rss} target="_blank" rel="noreferrer">
            <SocialIcon src="/social/rss.svg" alt="rss" />
            </a>
        )}
        </SocialIconWrap>
        <Copyright>
        Copyright © {new Date().getFullYear()} {metadata.author}
        </Copyright>
        <BlogInfo href={metadata.repo} rel="noreferrer">
        hanlog.dev
        </BlogInfo>
    </FooterContainer>
    )
}

export default Footer