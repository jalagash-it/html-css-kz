const onBodyScroll = function(evt) {
    const steps = document.getElementById('steps');
    const flow = document.getElementById('flow');
    const communication = document.getElementById('communication');

    if (steps.getClientRects()[0].top > 0 || communication.getClientRects()[0].top < 0) {
        flow.classList.remove('fixed');
    } else {
        flow.classList.add('fixed');
    }

}
document.onscroll = onBodyScroll