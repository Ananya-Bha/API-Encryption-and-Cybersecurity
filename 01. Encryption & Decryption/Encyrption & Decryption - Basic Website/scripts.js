const messageInput = document.getElementById('messageInput');
const keyInput = document.getElementById('keyInput');
const outputBox = document.getElementById('outputBox');
const encodeBtn = document.getElementById('encodeBtn');
const decodeBtn = document.getElementById('decodeBtn');
const submitBtn = document.getElementById('submitBtn');
const modeLabel = document.getElementById('modeLabel');

let currentMode = 'encode';

function normalizeKey(rawKey) {
  const trimmed = rawKey.trim();
  if (!trimmed) return null;
  const digitsOnly = /^[0-9]+$/.test(trimmed);
  if (digitsOnly) {
    return { type: 'numeric', value: Number(trimmed) % 26 };
  }

  const letters = trimmed.replace(/[^a-zA-Z]/g, '').toUpperCase();
  if (letters) {
    return { type: 'alpha', value: letters };
  }

  return null;
}

function transformText(text, key, mode) {
  const normalizedKey = normalizeKey(key);
  if (!normalizedKey) {
    return null;
  }

  if (!text) {
    return '';
  }

  let result = '';
  let keyIndex = 0;

  for (const char of text) {
    const isUpper = char >= 'A' && char <= 'Z';
    const isLower = char >= 'a' && char <= 'z';

    if (!isUpper && !isLower) {
      result += char;
      continue;
    }

    const base = isUpper ? 65 : 97;
    const charCode = char.charCodeAt(0) - base;
    let shift;

    if (normalizedKey.type === 'numeric') {
      shift = normalizedKey.value;
    } else {
      const keyChar = normalizedKey.value[keyIndex % normalizedKey.value.length];
      shift = keyChar.charCodeAt(0) - 65;
    }

    const offset = mode === 'encode'
      ? (charCode + shift) % 26
      : (charCode - shift + 26) % 26;

    result += String.fromCharCode(base + offset);
    keyIndex += 1;
  }

  return result;
}

function updateOutput() {
  const message = messageInput.value;
  const key = keyInput.value;
  const result = transformText(message, key, currentMode);

  if (result === null) {
    outputBox.value = 'Enter a valid alphabetic key or numeric shift key.';
    return;
  }

  outputBox.value = result || 'Enter a message to encrypt or decrypt.';
}

function setActiveButton(mode) {
  currentMode = mode;
  encodeBtn.classList.toggle('active', mode === 'encode');
  decodeBtn.classList.toggle('active', mode === 'decode');
  modeLabel.textContent = `Mode: ${mode.toUpperCase()}`;
}

encodeBtn.addEventListener('click', () => setActiveButton('encode'));
decodeBtn.addEventListener('click', () => setActiveButton('decode'));
submitBtn.addEventListener('click', updateOutput);

setActiveButton('encode');
