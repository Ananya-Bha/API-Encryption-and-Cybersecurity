const form = document.querySelector("#cipher-form");
const messageInput = document.querySelector("#message");
const keyInput = document.querySelector("#key");
const resultOutput = document.querySelector("#result");
const status = document.querySelector("#operation-status");

function transformMessage(message, key, direction) {
	const normalizedKey = key.toUpperCase().match(/[A-Z]/g)?.join("") || "";

	if (!normalizedKey) {
		return null;
	}

	let keyPosition = 0;
	return [...message].map((character) => {
		if (!/[A-Za-z]/.test(character)) {
			return character;
		}

		const baseCode = character === character.toUpperCase() ? 65 : 97;
		const messageValue = character.charCodeAt(0) - baseCode;
		const keyValue = normalizedKey.charCodeAt(keyPosition % normalizedKey.length) - 65;
		const transformedValue = (messageValue + direction * keyValue + 26) % 26;
		keyPosition += 1;

		return String.fromCharCode(baseCode + transformedValue);
	}).join("");
}

function runCipher(operation) {
	const direction = operation === "encrypt" ? 1 : -1;
	const result = transformMessage(messageInput.value, keyInput.value, direction);

	if (result === null) {
		status.textContent = "Enter a letter key first";
		keyInput.focus();
		return;
	}

	resultOutput.value = result;
	status.textContent = `${operation === "encrypt" ? "Encrypted" : "Decrypted"} locally`;
}

form.addEventListener("submit", (event) => {
	event.preventDefault();
	runCipher("encrypt");
});

document.querySelector('[data-operation="decrypt"]').addEventListener("click", () => {
	runCipher("decrypt");
});
