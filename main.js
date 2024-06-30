let sat = document.getElementById('saturate');
let con = document.getElementById('contrast');
let bri = document.getElementById('brightness');
let sep = document.getElementById('sepia');
let gray = document.getElementById('grayscale');
let blur = document.getElementById('blur');
let hue = document.getElementById('hue-rotate');
let up = document.getElementById('upload')
let down = document.getElementById('download');
let img = document.getElementById('imgs');
let reset = document.querySelector('span');
let imgBox = document.querySelector('.img-box');
window.onload = ()=>{
    reset.style.display = 'none';
    down.style.display = 'none';
    imgBox.style.display = 'none';
}
up.onchange = ()=>{
    reset.style.display = 'block';
    down.style.display = 'block';
    imgBox.style.display = 'block';
    let file = up.files[0];
    let fileType = file.type;
    let valid = ['image/jpeg','image/png','image/jpg'];
    if(valid.includes(fileType)){
        let reader = new FileReader();
        reader.onload = ()=>{
            let dataUrl = reader.result;
            img.src = dataUrl;
        }
        reader.readAsDataURL(file);
    }else{
        alert('Please select a valid image');
    }
}
let filters = document.querySelectorAll('ul li input');
filters.forEach(filter=>{
    filter.addEventListener('input',()=>{
        img.style.filter = `
        saturate(${sat.value}%)
        contrast(${con.value}%)
        brightness(${bri.value}%)
        sepia(${sep.value}%)
        grayscale(${gray.value})
        blur(${blur.value}px)
        hue-rotate(${hue.value}deg)
        `;
    })
})
reset.onclick = ()=>{
    sat.value = 100;
    con.value = 100;
    bri.value = 100;
    sep.value = 0;
    gray.value = 0;
    blur.value = 0;
    hue.value = 0;
    filters.forEach(filter=>{
        filter.dispatchEvent(new Event('input'));
    })
}




