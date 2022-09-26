
let notes = [];

const openNote = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const update_modal_container = document.getElementById("update_modal_container");
const save_btn = document.getElementById("save_btn");
const close_btn = document.getElementById("close_btn");
const close_btn1 = document.getElementById("close_btn1");

openNote.addEventListener('click', () => {
	modal_container.classList.add('show');
})

close_btn.addEventListener('click', () => {
	modal_container.classList.remove('show');
})
close_btn1.addEventListener('click', () => {
	update_modal_container.classList.remove('show');
})
// Code for displaying existing notes
function displayNotes(notesarray) {
	let notesData = "";
	if (notesarray != undefined) {
		notes = notesarray;
	}
	notes.forEach((note, index) => {
		let currentnote = `<div class="note-wrapper"><div class="note" onclick="updateNote(${index})">${note.content}</div><div class="note-cap">${note.name}</div></div>`
		notesData = notesData + currentnote;
	})
	document.getElementsByClassName("notes")[0].innerHTML = notesData;
}

// Code for Adding Note
save_btn.addEventListener('click', () => {
	let note = {};
	let note_name = document.getElementById("note_name").value;
	let note_content = document.getElementById("editor").innerHTML;
	note.name = note_name;
	note.content = note_content;
	notes.push(note);
	displayNotes(notes);
	document.getElementById("note_name").value = "";
	document.getElementById("editor").innerHTML = "";
	modal_container.classList.remove('show');
})

//code for copying text in the note


const copyText = () => {
	const Copy = document.getElementById("editor");
	navigator.clipboard.writeText(Copy.innerHTML);
}
let updateIndex;
function copyNotes(index) {
	updateIndex = index;
	let note = notes[index];
	document.getElementById("upeditor").innerHTML = note.content;
	document.getElementById("upnote_name").value = note.name;
	console.log(note);

}

function updateNote(index) {
	update_modal_container.classList.add('show');
	// document.getElementById("editor1").innerHTML = content;
	// document.getElementById("note_name1").innerHTML = nname;
	copyNotes(index)
}

function saveUpdatedNote() {
	let note = notes[updateIndex];
	let note_name = document.getElementById("upnote_name").value;
	let note_content = document.getElementById("upeditor").innerHTML;
	note.name = note_name;
	note.content = note_content;
	displayNotes(notes);
	document.getElementById("note_name").value = "";
	document.getElementById("editor").innerHTML = "";
	update_modal_container.classList.remove('show');
}


