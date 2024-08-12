var share_section = document.getElementById("share_section");
var share_dd = document.getElementById("share_dropdown");
var share_btn = document.getElementById("share_btn");
var share_svg = document.getElementById("share_svg");

share_btn.addEventListener('click', () => {
    if (share_dd.style.display === 'none' || share_dd.style.display === '') {
        share_dd.style.display = 'flex';
        share_btn.style.backgroundColor = 'hsl(214, 17%, 51%)';
        share_svg.style.fill = 'hsl(210, 46%, 95%)';
        if(window.innerWidth <= 710 && share_section.contains(share_btn)) {
            share_dd.appendChild(share_btn);
        } else if(window.innerWidth > 710 && share_dd.contains(share_btn)) {
            share_section.appendChild(share_btn);
        }
    } else {
        share_dd.style.display = 'none';
        share_btn.style.backgroundColor = 'hsl(210, 46%, 95%)';
        share_svg.style.fill = '#6E8098';
        if(share_dd.contains(share_btn)) {
            share_section.appendChild(share_btn);
        }
    }
});
