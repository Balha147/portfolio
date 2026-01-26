import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faUser,
  faHome,
  faCog,
  faSpinner,
  faStar,
  faHeart,
  faDownload,
  faUserGroup,
  faExternalLinkAlt,
  faPaperPlane,
  faEnvelope,
  faPhone,
  faLocationDot,
  faArrowRight,
  faHouse,
  faBolt,
  faCode
} from '@fortawesome/free-solid-svg-icons';
import {
  faCircle,
  faSquare,
  faStar as farStar
} from '@fortawesome/free-regular-svg-icons';
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

export function initializeFontAwesome(library: FaIconLibrary): () => void {
  return () => {
    library.addIcons(
      faUser,      // fas fa-user
      faDownload,      // fas fa-download
      faUserGroup,      // fas fa-userGroup
      faHome,      // fas fa-home
      faCog,       // fas fa-cog
      faSpinner,   // fas fa-spinner
      faStar,      // fas fa-star
      faHeart,     // fas fa-heart
      faCircle,    // far fa-circle
      faSquare,    // far fa-square
      farStar,     // far fa-star (alias pour différencier)
      faGithub,    // fab fa-github
      faTwitter,   // fab fa-twitter
      faLinkedin,   // fab fa-linkedin
      faFacebook,   // fab fa-facebook
      faExternalLinkAlt,
      faPaperPlane,
      faEnvelope,
      faPhone,
      faLocationDot,
      faArrowRight,
      faHouse,
      faBolt,
      faCode,
    );
  };
}
