const input = document.getElementById('file');
const progress=document.querySelector('.gradient-bar');
const convertMB=1024*1024;
const maxSize=10;
let total=10;
let totalpercent=0;
let sum=0;
function info(){
    const pattern = /\.(jpg|jpeg|gif|png)$/;
    const files=input.files;
    if(pattern1.test(files[0].name))
    {
        alert('File format isn’t supported')
        return;
    }
    const currentImageSize=files[0].size;
    let fileSize=(size/(convertMB)).toFixed(2);
    if(fileSize>maxSize)
    {
     alert('There is not enough space on the disk');
     return;
    }
    sum=(sum+ parseFloat(fileSize));
    total=total-fileSize;
    if(total<0)
        {
         alert('There is not enough space on the disk');
         return;
        }
    document.getElementById('span1').innerHTML=total.toFixed(2);
    document.getElementById('element2').innerHTML=sum.toFixed(2);
    let percent=(fileSize/maxSize)*100;
    totalpercent+=percent;
    progress.style.width = `${totalpercent}%`

}
