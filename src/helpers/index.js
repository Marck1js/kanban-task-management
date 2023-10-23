export function colorRGBAleatorio() {
    // Genera valores aleatorios para los componentes R, G y B
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Formatea el color en el formato '#RRGGBB'
    const color = `${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

    return color;
}


export function checkTrues(array) {
	return array.reduce((acc, cur) => {
		if (cur.isCompleted == true) {
			return acc + 1
		} else {
			return acc;
		}
	}, 0)
};