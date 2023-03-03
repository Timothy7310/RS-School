class TextArea {
    constructor(parentSelector) {
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('textarea');
        element.classList.add('textarea');
        this.parent.append(element);
    }
}

export default TextArea;
