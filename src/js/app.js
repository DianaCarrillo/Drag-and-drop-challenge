const allowDrop = (ev) =>{
    ev.preventDefault();
} 

const drag = (ev) =>{
    ev.dataTransfer.setData('text', ev.target.id);
}

const drop = (ev) =>{
ev.preventDefault();
let data = ev.dataTransfer.getData('text');
console.log(data);
console.log(ev.target);
ev.target.appendChild(document.getElementById(`${data}`));

}