window.addEventListener('scroll', reveal);

        function reveal(){
            let reveals = document.querySelectorAll('.reveal');

            for(let i = 0; i < reveals.length; i++) {
                
                let windowheight = window.innerHeight;
                let revealtop = reveals[i].getBoundingClientRect().top;
                let revealpoint = 80;

                if(revealtop < windowheight - revealpoint) {
                    reveals[i].classList.add('active');
                }else{
                    reveals[i].classList.remove('active');
                }
            }
        }

let a;
function show_hide(){
    if (a==1) {
        document.getElementById('extra_projects').style.display = 'inline';
        return a=0;
    }else{
        document.getElementById('extra_projects').style.display = 'none';
        return a=1;
    }
}