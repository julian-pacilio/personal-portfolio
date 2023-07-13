'use strict';

const downloadResume = document.querySelector('.button');
const downloadFile = () => {
            downloadResume.href = 'https://pacilio-julian.vercel.app/assets/Resume_Pacilio_Julian_April_2023.pdf';
            downloadResume.target = '_blank';
            downloadResume.download = 'Resume - Pacilio Julian - April 2023';
};

downloadResume.addEventListener('click', e => {
    downloadFile();
});
