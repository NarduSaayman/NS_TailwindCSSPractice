import './style.css'

import { rand, randImg } from '@ngneat/falso';

document.getElementById('aboutIMG').innerHTML = `<img src="${randImg(69)}" alt="random image"></img>`;