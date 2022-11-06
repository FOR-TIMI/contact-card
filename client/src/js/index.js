
/** Js Files */
import  {clearForm, toggleForm} from "./form";



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
import { initdb, getDb, postDb } from './database';

/** getAll cards */
import { fetchCards} from './card';



window.addEventListener('load', function() {
  initdb();
  fetchCards();
  document.getElementById('logo').src = Logo;
  document.getElementById('bearThumbnail').src = Bear;
  document.getElementById('dogThumbnail').src = Dog;
});



