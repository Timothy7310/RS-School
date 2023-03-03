const capsFunc = () => {
    document.querySelector('.CapsLock').classList.toggle('active');
    if (document.querySelector('.caseUp').classList.contains('hidden')) {
        document.querySelectorAll('.caseDown').forEach((item) => item.classList.toggle('hidden'));
        document.querySelectorAll('.caps').forEach((item) => item.classList.toggle('hidden'));
    } else {
        document.querySelectorAll('.caseUp').forEach((item) => item.classList.toggle('hidden'));
        document.querySelectorAll('.caps').forEach((item) => item.classList.toggle('hidden'));
    }
};

export default capsFunc;
