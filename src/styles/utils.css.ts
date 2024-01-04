export function color(variable: string, alpha?: number): string {
	return `rgb(${variable}${alpha !== undefined ? ` / ${alpha}` : ""})`;
}
