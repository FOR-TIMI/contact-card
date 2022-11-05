
/** Js Files */
import  "./form";
import "./submit";


/** Images */
import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

/** CSS */
import "../css/index.css";

/** Bootstrap*/
import {Tooltip, Toast, Popover} from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


/** IndexDB */
import { initdb } from './database';

window.addEventListener('load', function() {
  initdb();
  document.getElementById('logo').src = Logo;
  document.getElementById('bearThumbnail').src = Bear;
  document.getElementById('dogThumbnail').src = Dog;
});

