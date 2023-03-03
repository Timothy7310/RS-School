const keyBoradSetUp = `
    <div class="keyboard-row">
        <button class="keyboard-key Backquote">
            <span class="rus">
                <span class="caseDown">ё</span>
                <span class="caseUp hidden">Ё</span>
                <span class="caps hidden">Ё</span>
                <span class="shiftCaps hidden">ё</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">\`</span>
                <span class="caseUp hidden">~</span>
                <span class="caps hidden">\`</span>
                <span class="shiftCaps hidden">~</span>
            </span>
        </button>

        <button class="keyboard-key Digit1">
            <span class="rus">
                <span class="caseDown">1</span>
                <span class="caseUp hidden">!</span>
                <span class="caps hidden">1</span>
                <span class="shiftCaps hidden">!</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">1</span>
                <span class="caseUp hidden">!</span>
                <span class="caps hidden">1</span>
                <span class="shiftCaps hidden">!</span>
            </span>
        </button>

        <button class="keyboard-key Digit2">
            <span class="rus">
                <span class="caseDown">2</span>
                <span class="caseUp hidden">"</span>
                <span class="caps hidden">2</span>
                <span class="shiftCaps hidden">"</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">2</span>
                <span class="caseUp hidden">@</span>
                <span class="caps hidden">2</span>
                <span class="shiftCaps hidden">@</span>
            </span>
        </button>

        <button class="keyboard-key Digit3">
            <span class="rus">
                <span class="caseDown">3</span>
                <span class="caseUp hidden">№</span>
                <span class="caps hidden">3</span>
                <span class="shiftCaps hidden">№</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">3</span>
                <span class="caseUp hidden">#</span>
                <span class="caps hidden">3</span>
                <span class="shiftCaps hidden">#</span>
            </span>
        </button>

        <button class="keyboard-key Digit4">
            <span class="rus">
                <span class="caseDown">4</span>
                <span class="caseUp hidden">;</span>
                <span class="caps hidden">4</span>
                <span class="shiftCaps hidden">;</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">4</span>
                <span class="caseUp hidden">$</span>
                <span class="caps hidden">4</span>
                <span class="shiftCaps hidden">$</span>
            </span>
        </button>

        <button class="keyboard-key Digit5">
            <span class="rus">
                <span class="caseDown">5</span>
                <span class="caseUp hidden">%</span>
                <span class="caps hidden">5</span>
                <span class="shiftCaps hidden">%</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">5</span>
                <span class="caseUp hidden">%</span>
                <span class="caps hidden">5</span>
                <span class="shiftCaps hidden">%</span>
            </span>
        </button>

        <button class="keyboard-key Digit6">
            <span class="rus">
                <span class="caseDown">6</span>
                <span class="caseUp hidden">:</span>
                <span class="caps hidden">6</span>
                <span class="shiftCaps hidden">:</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">6</span>
                <span class="caseUp hidden">^</span>
                <span class="caps hidden">6</span>
                <span class="shiftCaps hidden">^</span>
            </span>
        </button>

        <button class="keyboard-key Digit7">
            <span class="rus">
                <span class="caseDown">7</span>
                <span class="caseUp hidden">?</span>
                <span class="caps hidden">7</span>
                <span class="shiftCaps hidden">?</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">7</span>
                <span class="caseUp hidden">&amp;</span>
                <span class="caps hidden">7</span>
                <span class="shiftCaps hidden">&amp;</span>
            </span>
        </button>

        <button class="keyboard-key Digit8">
            <span class="rus">
                <span class="caseDown">8</span>
                <span class="caseUp hidden">*</span>
                <span class="caps hidden">8</span>
                <span class="shiftCaps hidden">*</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">8</span>
                <span class="caseUp hidden">*</span>
                <span class="caps hidden">8</span>
                <span class="shiftCaps hidden">*</span>
            </span>
        </button>

        <button class="keyboard-key Digit9">
            <span class="rus">
                <span class="caseDown">9</span>
                <span class="caseUp hidden">(</span>
                <span class="caps hidden">9</span>
                <span class="shiftCaps hidden">(</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">9</span>
                <span class="caseUp hidden">(</span>
                <span class="caps hidden">9</span>
                <span class="shiftCaps hidden">(</span>
            </span>
        </button>

        <button class="keyboard-key Digit0">
            <span class="rus">
                <span class="caseDown">0</span>
                <span class="caseUp hidden">)</span>
                <span class="caps hidden">0</span>
                <span class="shiftCaps hidden">)</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">0</span>
                <span class="caseUp hidden">)</span>
                <span class="caps hidden">0</span>
                <span class="shiftCaps hidden">)</span>
            </span>
        </button>

        <button class="keyboard-key Minus">
            <span class="rus">
                <span class="caseDown">-</span>
                <span class="caseUp hidden">_</span>
                <span class="caps hidden">-</span>
                <span class="shiftCaps hidden">_</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">-</span>
                <span class="caseUp hidden">_</span>
                <span class="caps hidden">-</span>
                <span class="shiftCaps hidden">_</span>
            </span>
        </button>

        <button class="keyboard-key Equal">
            <span class="rus">
                <span class="caseDown">=</span>
                <span class="caseUp hidden">+</span>
                <span class="caps hidden">=</span>
                <span class="shiftCaps hidden">+</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">=</span>
                <span class="caseUp hidden">+</span>
                <span class="caps hidden">=</span>
                <span class="shiftCaps hidden">+</span>
            </span>
        </button>

        <button class="keyboard-key accent-key Backspace">
            <span class="rus">
                <span class="caseDown">Backspace</span>
                <span class="caseUp hidden">Backspace</span>
                <span class="caps hidden">Backspace</span>
                <span class="shiftCaps hidden">Backspace</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">Backspace</span>
                <span class="caseUp hidden">Backspace</span>
                <span class="caps hidden">Backspace</span>
                <span class="shiftCaps hidden">Backspace</span>
            </span>
        </button>
    </div>

    <div class="keyboard-row">
        <button class="keyboard-key accent-key Tab">
            <span class="rus">
                <span class="caseDown">Tab</span>
                <span class="caseUp hidden">Tab</span>
                <span class="caps hidden">Tab</span>
                <span class="shiftCaps hidden">Tab</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">Tab</span>
                <span class="caseUp hidden">Tab</span>
                <span class="caps hidden">Tab</span>
                <span class="shiftCaps hidden">Tab</span>
            </span>
        </button>

        <button class="keyboard-key KeyQ">
            <span class="rus">
                <span class="caseDown">й</span>
                <span class="caseUp hidden">Й</span>
                <span class="caps hidden">Й</span>
                <span class="shiftCaps hidden">й</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">q</span>
                <span class="caseUp hidden">Q</span>
                <span class="caps hidden">Q</span>
                <span class="shiftCaps hidden">q</span>
            </span>
        </button>

        <button class="keyboard-key KeyW">
            <span class="rus">
                <span class="caseDown">ц</span>
                <span class="caseUp hidden">Ц</span>
                <span class="caps hidden">Ц</span>
                <span class="shiftCaps hidden">ц</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">w</span>
                <span class="caseUp hidden">W</span>
                <span class="caps hidden">W</span>
                <span class="shiftCaps hidden">w</span>
            </span>
        </button>

        <button class="keyboard-key KeyE">
            <span class="rus">
                <span class="caseDown">у</span>
                <span class="caseUp hidden">У</span>
                <span class="caps hidden">У</span>
                <span class="shiftCaps hidden">у</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">e</span>
                <span class="caseUp hidden">E</span>
                <span class="caps hidden">E</span>
                <span class="shiftCaps hidden">e</span>
            </span>
        </button>

        <button class="keyboard-key KeyR">
            <span class="rus">
                <span class="caseDown">к</span>
                <span class="caseUp hidden">К</span>
                <span class="caps hidden">К</span>
                <span class="shiftCaps hidden">к</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">r</span>
                <span class="caseUp hidden">R</span>
                <span class="caps hidden">R</span>
                <span class="shiftCaps hidden">r</span>
            </span>
        </button>

        <button class="keyboard-key KeyT">
            <span class="rus">
                <span class="caseDown">е</span>
                <span class="caseUp hidden">Е</span>
                <span class="caps hidden">Е</span>
                <span class="shiftCaps hidden">е</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">t</span>
                <span class="caseUp hidden">T</span>
                <span class="caps hidden">T</span>
                <span class="shiftCaps hidden">t</span>
            </span>
        </button>

        <button class="keyboard-key KeyY">
            <span class="rus">
                <span class="caseDown">н</span>
                <span class="caseUp hidden">Н</span>
                <span class="caps hidden">Н</span>
                <span class="shiftCaps hidden">н</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">y</span>
                <span class="caseUp hidden">Y</span>
                <span class="caps hidden">Y</span>
                <span class="shiftCaps hidden">y</span>
            </span>
        </button>

        <button class="keyboard-key KeyU">
            <span class="rus">
                <span class="caseDown">г</span>
                <span class="caseUp hidden">Г</span>
                <span class="caps hidden">Г</span>
                <span class="shiftCaps hidden">г</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">u</span>
                <span class="caseUp hidden">U</span>
                <span class="caps hidden">U</span>
                <span class="shiftCaps hidden">u</span>
            </span>
        </button>

        <button class="keyboard-key KeyI">
            <span class="rus">
                <span class="caseDown">ш</span>
                <span class="caseUp hidden">Ш</span>
                <span class="caps hidden">Ш</span>
                <span class="shiftCaps hidden">ш</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">i</span>
                <span class="caseUp hidden">I</span>
                <span class="caps hidden">I</span>
                <span class="shiftCaps hidden">i</span>
            </span>
        </button>

        <button class="keyboard-key KeyO">
            <span class="rus">
                <span class="caseDown">щ</span>
                <span class="caseUp hidden">Щ</span>
                <span class="caps hidden">Щ</span>
                <span class="shiftCaps hidden">щ</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">o</span>
                <span class="caseUp hidden">O</span>
                <span class="caps hidden">O</span>
                <span class="shiftCaps hidden">o</span>
            </span>
        </button>

        <button class="keyboard-key KeyP">
            <span class="rus">
                <span class="caseDown">з</span>
                <span class="caseUp hidden">З</span>
                <span class="caps hidden">З</span>
                <span class="shiftCaps hidden">з</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">p</span>
                <span class="caseUp hidden">P</span>
                <span class="caps hidden">P</span>
                <span class="shiftCaps hidden">p</span>
            </span>
        </button>

        <button class="keyboard-key BracketLeft">
            <span class="rus">
                <span class="caseDown">х</span>
                <span class="caseUp hidden">Х</span>
                <span class="caps hidden">Х</span>
                <span class="shiftCaps hidden">х</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">[</span>
                <span class="caseUp hidden">{</span>
                <span class="caps hidden">[</span>
                <span class="shiftCaps hidden">{</span>
            </span>
        </button>

        <button class="keyboard-key BracketRight">
            <span class="rus">
                <span class="caseDown">ъ</span>
                <span class="caseUp hidden">Ъ</span>
                <span class="caps hidden">Ъ</span>
                <span class="shiftCaps hidden">ъ</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">]</span>
                <span class="caseUp hidden">}</span>
                <span class="caps hidden">]</span>
                <span class="shiftCaps hidden">}</span>
            </span>
        </button>

        <button class="keyboard-key Backslash">
            <span class="rus">
                <span class="caseDown">\\</span>
                <span class="caseUp hidden">/</span>
                <span class="caps hidden">\\</span>
                <span class="shiftCaps hidden">/</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">\\</span>
                <span class="caseUp hidden">|</span>
                <span class="caps hidden">\\</span>
                <span class="shiftCaps hidden">|</span>
            </span>
        </button>

        <button class="keyboard-key accent-key Delete">
            <span class="rus">
                <span class="caseDown">Del</span>
                <span class="caseUp hidden">Del</span>
                <span class="caps hidden">Del</span>
                <span class="shiftCaps hidden">Del</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">Del</span>
                <span class="caseUp hidden">Del</span>
                <span class="caps hidden">Del</span>
                <span class="shiftCaps hidden">Del</span>
            </span>
        </button>
    </div>

    <div class="keyboard-row">
        <button class="keyboard-key accent-key CapsLock">
            <span class="rus">
                <span class="caseDown">CapsLock</span>
                <span class="caseUp hidden">CapsLock</span>
                <span class="caps hidden">CapsLock</span>
                <span class="shiftCaps hidden">CapsLock</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">CapsLock</span>
                <span class="caseUp hidden">CapsLock</span>
                <span class="caps hidden">CapsLock</span>
                <span class="shiftCaps hidden">CapsLock</span>
            </span>
        </button>

        <button class="keyboard-key KeyA">
            <span class="rus">
                <span class="caseDown">ф</span>
                <span class="caseUp hidden">Ф</span>
                <span class="caps hidden">Ф</span>
                <span class="shiftCaps hidden">ф</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">a</span>
                <span class="caseUp hidden">A</span>
                <span class="caps hidden">A</span>
                <span class="shiftCaps hidden">a</span>
            </span>
        </button>

        <button class="keyboard-key KeyS">
            <span class="rus">
                <span class="caseDown">ы</span>
                <span class="caseUp hidden">Ы</span>
                <span class="caps hidden">Ы</span>
                <span class="shiftCaps hidden">ы</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">s</span>
                <span class="caseUp hidden">S</span>
                <span class="caps hidden">S</span>
                <span class="shiftCaps hidden">s</span>
            </span>
        </button>

        <button class="keyboard-key KeyD">
            <span class="rus">
                <span class="caseDown">в</span>
                <span class="caseUp hidden">В</span>
                <span class="caps hidden">В</span>
                <span class="shiftCaps hidden">в</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">d</span>
                <span class="caseUp hidden">D</span>
                <span class="caps hidden">D</span>
                <span class="shiftCaps hidden">d</span>
            </span>
        </button>

        <button class="keyboard-key KeyF">
            <span class="rus">
                <span class="caseDown">а</span>
                <span class="caseUp hidden">А</span>
                <span class="caps hidden">А</span>
                <span class="shiftCaps hidden">а</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">f</span>
                <span class="caseUp hidden">F</span>
                <span class="caps hidden">F</span>
                <span class="shiftCaps hidden">f</span>
            </span>
        </button>

        <button class="keyboard-key KeyG">
            <span class="rus">
                <span class="caseDown">п</span>
                <span class="caseUp hidden">П</span>
                <span class="caps hidden">П</span>
                <span class="shiftCaps hidden">п</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">g</span>
                <span class="caseUp hidden">G</span>
                <span class="caps hidden">G</span>
                <span class="shiftCaps hidden">g</span>
            </span>
        </button>

        <button class="keyboard-key KeyH">
            <span class="rus">
                <span class="caseDown">р</span>
                <span class="caseUp hidden">Р</span>
                <span class="caps hidden">Р</span>
                <span class="shiftCaps hidden">р</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">h</span>
                <span class="caseUp hidden">H</span>
                <span class="caps hidden">H</span>
                <span class="shiftCaps hidden">h</span>
            </span>
        </button>

        <button class="keyboard-key KeyJ">
            <span class="rus">
                <span class="caseDown">о</span>
                <span class="caseUp hidden">О</span>
                <span class="caps hidden">О</span>
                <span class="shiftCaps hidden">о</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">j</span>
                <span class="caseUp hidden">J</span>
                <span class="caps hidden">J</span>
                <span class="shiftCaps hidden">j</span>
            </span>
        </button>

        <button class="keyboard-key KeyK">
            <span class="rus">
                <span class="caseDown">л</span>
                <span class="caseUp hidden">Л</span>
                <span class="caps hidden">Л</span>
                <span class="shiftCaps hidden">л</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">k</span>
                <span class="caseUp hidden">K</span>
                <span class="caps hidden">K</span>
                <span class="shiftCaps hidden">k</span>
            </span>
        </button>

        <button class="keyboard-key KeyL">
            <span class="rus">
                <span class="caseDown">д</span>
                <span class="caseUp hidden">Д</span>
                <span class="caps hidden">Д</span>
                <span class="shiftCaps hidden">д</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">l</span>
                <span class="caseUp hidden">L</span>
                <span class="caps hidden">L</span>
                <span class="shiftCaps hidden">l</span>
            </span>
        </button>

        <button class="keyboard-key Semicolon">
            <span class="rus">
                <span class="caseDown">ж</span>
                <span class="caseUp hidden">Ж</span>
                <span class="caps hidden">Ж</span>
                <span class="shiftCaps hidden">ж</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">;</span>
                <span class="caseUp hidden">:</span>
                <span class="caps hidden">;</span>
                <span class="shiftCaps hidden">:</span>
            </span>
        </button>

        <button class="keyboard-key Quote">
            <span class="rus">
                <span class="caseDown">э</span>
                <span class="caseUp hidden">Э</span>
                <span class="caps hidden">Э</span>
                <span class="shiftCaps hidden">э</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">'</span>
                <span class="caseUp hidden">"</span>
                <span class="caps hidden">'</span>
                <span class="shiftCaps hidden">"</span>
            </span>
        </button>

        <button class="keyboard-key accent-key Enter">
            <span class="rus">
                <span class="caseDown">Enter</span>
                <span class="caseUp hidden">Enter</span>
                <span class="caps hidden">Enter</span>
                <span class="shiftCaps hidden">Enter</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">Enter</span>
                <span class="caseUp hidden">Enter</span>
                <span class="caps hidden">Enter</span>
                <span class="shiftCaps hidden">Enter</span>
            </span>
        </button>
    </div>

    <div class="keyboard-row">
        <button class="keyboard-key accent-key ShiftLeft">
            <span class="rus">
                <span class="caseDown">Shift</span>
                <span class="caseUp hidden">Shift</span>
                <span class="caps hidden">Shift</span>
                <span class="shiftCaps hidden">Shift</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">Shift</span>
                <span class="caseUp hidden">Shift</span>
                <span class="caps hidden">Shift</span>
                <span class="shiftCaps hidden">Shift</span>
            </span>
        </button>

        <button class="keyboard-key KeyZ">
            <span class="rus">
                <span class="caseDown">я</span>
                <span class="caseUp hidden">Я</span>
                <span class="caps hidden">Я</span>
                <span class="shiftCaps hidden">я</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">z</span>
                <span class="caseUp hidden">Z</span>
                <span class="caps hidden">Z</span>
                <span class="shiftCaps hidden">z</span>
            </span>
        </button>

        <button class="keyboard-key KeyX">
            <span class="rus">
                <span class="caseDown">ч</span>
                <span class="caseUp hidden">Ч</span>
                <span class="caps hidden">Ч</span>
                <span class="shiftCaps hidden">ч</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">x</span>
                <span class="caseUp hidden">X</span>
                <span class="caps hidden">X</span>
                <span class="shiftCaps hidden">x</span>
            </span>
        </button>

        <button class="keyboard-key KeyC">
            <span class="rus">
                <span class="caseDown">с</span>
                <span class="caseUp hidden">С</span>
                <span class="caps hidden">С</span>
                <span class="shiftCaps hidden">с</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">c</span>
                <span class="caseUp hidden">C</span>
                <span class="caps hidden">C</span>
                <span class="shiftCaps hidden">c</span>
            </span>
        </button>

        <button class="keyboard-key KeyV">
            <span class="rus">
                <span class="caseDown">м</span>
                <span class="caseUp hidden">М</span>
                <span class="caps hidden">М</span>
                <span class="shiftCaps hidden">м</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">v</span>
                <span class="caseUp hidden">V</span>
                <span class="caps hidden">V</span>
                <span class="shiftCaps hidden">v</span>
            </span>
        </button>

        <button class="keyboard-key KeyB">
            <span class="rus">
                <span class="caseDown">и</span>
                <span class="caseUp hidden">И</span>
                <span class="caps hidden">И</span>
                <span class="shiftCaps hidden">и</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">b</span>
                <span class="caseUp hidden">B</span>
                <span class="caps hidden">B</span>
                <span class="shiftCaps hidden">b</span>
            </span>
        </button>

        <button class="keyboard-key KeyN">
            <span class="rus">
                <span class="caseDown">т</span>
                <span class="caseUp hidden">Т</span>
                <span class="caps hidden">Т</span>
                <span class="shiftCaps hidden">т</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">n</span>
                <span class="caseUp hidden">N</span>
                <span class="caps hidden">N</span>
                <span class="shiftCaps hidden">n</span>
            </span>
        </button>

        <button class="keyboard-key KeyM">
            <span class="rus">
                <span class="caseDown">ь</span>
                <span class="caseUp hidden">Ь</span>
                <span class="caps hidden">Ь</span>
                <span class="shiftCaps hidden">ь</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">m</span>
                <span class="caseUp hidden">M</span>
                <span class="caps hidden">M</span>
                <span class="shiftCaps hidden">m</span>
            </span>
        </button>

        <button class="keyboard-key Comma">
            <span class="rus">
                <span class="caseDown">б</span>
                <span class="caseUp hidden">Б</span>
                <span class="caps hidden">Б</span>
                <span class="shiftCaps hidden">б</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">,</span>
                <span class="caseUp hidden">&lt;</span>
                <span class="caps hidden">,</span>
                <span class="shiftCaps hidden">&lt;</span>
            </span>
        </button>

        <button class="keyboard-key Period">
            <span class="rus">
                <span class="caseDown">ю</span>
                <span class="caseUp hidden">Ю</span>
                <span class="caps hidden">Ю</span>
                <span class="shiftCaps hidden">ю</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">.</span>
                <span class="caseUp hidden">&gt;</span>
                <span class="caps hidden">.</span>
                <span class="shiftCaps hidden">&gt;</span>
            </span>
        </button>

        <button class="keyboard-key Slash">
            <span class="rus">
                <span class="caseDown">.</span>
                <span class="caseUp hidden">,</span>
                <span class="caps hidden">.</span>
                <span class="shiftCaps hidden">,</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">/</span>
                <span class="caseUp hidden">?</span>
                <span class="caps hidden">/</span>
                <span class="shiftCaps hidden">?</span>
            </span>
        </button>

        <button class="keyboard-key accent-key ArrowUp">
            <span class="rus">
                <span class="caseDown">▲</span>
                <span class="caseUp hidden">▲</span>
                <span class="caps hidden">▲</span>
                <span class="shiftCaps hidden">▲</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">▲</span>
                <span class="caseUp hidden">▲</span>
                <span class="caps hidden">▲</span>
                <span class="shiftCaps hidden">▲</span>
            </span>
        </button>

        <button class="keyboard-key accent-key ShiftRight">
            <span class="rus">
                <span class="caseDown">Shift</span>
                <span class="caseUp hidden">Shift</span>
                <span class="caps hidden">Shift</span>
                <span class="shiftCaps hidden">Shift</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">Shift</span>
                <span class="caseUp hidden">Shift</span>
                <span class="caps hidden">Shift</span>
                <span class="shiftCaps hidden">Shift</span>
            </span>
        </button>
    </div>

    <div class="keyboard-row">
        <button class="keyboard-key accent-key ControlLeft">
            <span class="rus">
                <span class="caseDown">Ctrl</span>
                <span class="caseUp hidden">Ctrl</span>
                <span class="caps hidden">Ctrl</span>
                <span class="shiftCaps hidden">Ctrl</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">Ctrl</span>
                <span class="caseUp hidden">Ctrl</span>
                <span class="caps hidden">Ctrl</span>
                <span class="shiftCaps hidden">Ctrl</span>
            </span>
        </button>

        <button class="keyboard-key accent-key MetaLeft">
            <span class="rus">
                <span class="caseDown">Win</span>
                <span class="caseUp hidden">Win</span>
                <span class="caps hidden">Win</span>
                <span class="shiftCaps hidden">Win</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">Win</span>
                <span class="caseUp hidden">Win</span>
                <span class="caps hidden">Win</span>
                <span class="shiftCaps hidden">Win</span>
            </span>
        </button>

        <button class="keyboard-key accent-key AltLeft">
            <span class="rus">
                <span class="caseDown">Alt</span>
                <span class="caseUp hidden">Alt</span>
                <span class="caps hidden">Alt</span>
                <span class="shiftCaps hidden">Alt</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">Alt</span>
                <span class="caseUp hidden">Alt</span>
                <span class="caps hidden">Alt</span>
                <span class="shiftCaps hidden">Alt</span>
            </span>
        </button>

        <button class="keyboard-key Space">
            <span class="rus">
                <span class="caseDown"></span>
                <span class="caseUp hidden"></span>
                <span class="caps hidden"></span>
                <span class="shiftCaps hidden"></span>
            </span>
            <span class="eng hidden">
                <span class="caseDown"></span>
                <span class="caseUp hidden"></span>
                <span class="caps hidden"></span>
                <span class="shiftCaps hidden"></span>
            </span>
        </button>

        <button class="keyboard-key accent-key AltRight">
            <span class="rus">
                <span class="caseDown">Alt</span>
                <span class="caseUp hidden">Alt</span>
                <span class="caps hidden">Alt</span>
                <span class="shiftCaps hidden">Alt</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">Alt</span>
                <span class="caseUp hidden">Alt</span>
                <span class="caps hidden">Alt</span>
                <span class="shiftCaps hidden">Alt</span>
            </span>
        </button>

        <button class="keyboard-key accent-key ArrowLeft">
            <span class="rus">
                <span class="caseDown">◄</span>
                <span class="caseUp hidden">◄</span>
                <span class="caps hidden">◄</span>
                <span class="shiftCaps hidden">◄</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">◄</span>
                <span class="caseUp hidden">◄</span>
                <span class="caps hidden">◄</span>
                <span class="shiftCaps hidden">◄</span>
            </span>
        </button>

        <button class="keyboard-key accent-key ArrowDown">
            <span class="rus">
                <span class="caseDown">▼</span>
                <span class="caseUp hidden">▼</span>
                <span class="caps hidden">▼</span>
                <span class="shiftCaps hidden">▼</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">▼</span>
                <span class="caseUp hidden">▼</span>
                <span class="caps hidden">▼</span>
                <span class="shiftCaps hidden">▼</span>
            </span>
        </button>

        <button class="keyboard-key accent-key ArrowRight">
            <span class="rus">
                <span class="caseDown">►</span>
                <span class="caseUp hidden">►</span>
                <span class="caps hidden">►</span>
                <span class="shiftCaps hidden">►</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">►</span>
                <span class="caseUp hidden">►</span>
                <span class="caps hidden">►</span>
                <span class="shiftCaps hidden">►</span>
            </span>
        </button>

        <button class="keyboard-key accent-key ControlRight">
            <span class="rus">
                <span class="caseDown">Ctrl</span>
                <span class="caseUp hidden">Ctrl</span>
                <span class="caps hidden">Ctrl</span>
                <span class="shiftCaps hidden">Ctrl</span>
            </span>
            <span class="eng hidden">
                <span class="caseDown">Ctrl</span>
                <span class="caseUp hidden">Ctrl</span>
                <span class="caps hidden">Ctrl</span>
                <span class="shiftCaps hidden">Ctrl</span>
            </span>
        </button>
    </div>
`;

export default keyBoradSetUp;
