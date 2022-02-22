import './style.css';

import { rand, randImg } from '@ngneat/falso';

let img = `https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3308&q=80`

document.getElementById('aboutIMG').innerHTML = `<img class="object-fit -mt-14" src="${img}" alt="random image"></img>`;