const changeLang = () => {
    document.querySelectorAll('.rus').forEach((item) => item.classList.toggle('hidden'));
    document.querySelectorAll('.eng').forEach((item) => item.classList.toggle('hidden'));
};

export default changeLang;
