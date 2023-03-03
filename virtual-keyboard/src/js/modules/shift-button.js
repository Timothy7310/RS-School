const shiftFunc = () => {
    if (document.querySelector('.CapsLock').classList.contains('active')) {
        document.querySelectorAll('.shiftCaps').forEach((item) => item.classList.toggle('hidden'));
        document.querySelectorAll('.caps').forEach((item) => item.classList.toggle('hidden'));
    } else {
        document.querySelectorAll('.caseUp').forEach((item) => item.classList.toggle('hidden'));
        document.querySelectorAll('.caseDown').forEach((item) => item.classList.toggle('hidden'));
    }
};

export default shiftFunc;
