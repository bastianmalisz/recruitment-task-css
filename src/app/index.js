import '../style/app.scss';
import appHeader from '../templates/appHeader.html';
import sectionOne from '../templates/sectionOne.html';
import sectionTwo from '../templates/sectionTwo.html';
import sectionThree from '../templates/sectionThree.html';
import appFooter from '../templates/Footer.html';

import { fetchData } from '../javascript/data';
import { removeData } from '../javascript/removeStorage';
import { actionsController } from '../javascript/actionsController';
import { footerButtonsController } from '../javascript/buttonListener';

// injectiong templates into main html file
document.getElementById('appHeaderId').innerHTML += appHeader({});
document.getElementById('sectionOne').innerHTML += sectionOne({});
document.getElementById('sectionTwo').innerHTML += sectionTwo({});
document.getElementById('sectionThree').innerHTML += sectionThree({});
document.getElementById('appFooterId').innerHTML += appFooter({});

//injectiong JS scripts
fetchData();
actionsController();
removeData();
footerButtonsController();
