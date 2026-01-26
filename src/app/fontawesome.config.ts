import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faUser, faDownload, faUserGroup, faHome, faCog,
  faSpinner, faStar, faHeart, faExternalLinkAlt,
  faPaperPlane, faEnvelope, faPhone, faLocationDot,
  faArrowRight, faHouse, faBolt, faCode
} from '@fortawesome/free-solid-svg-icons';
import { faCircle, faSquare, faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

export function setupFontAwesome(library: FaIconLibrary): void {
  library.addIcons(
    faUser, faDownload, faUserGroup, faHome, faCog,
    faSpinner, faStar, faHeart, faCircle, faSquare,
    farStar, faGithub, faTwitter, faLinkedin, faFacebook,
    faExternalLinkAlt, faPaperPlane, faEnvelope, faPhone,
    faLocationDot, faArrowRight, faHouse, faBolt, faCode
  );
}
