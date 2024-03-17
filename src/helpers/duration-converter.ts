export function convertDuration(duration: number) {
  const hrs = duration / 60;

  const mins = duration % 60;
  return `${hrs.toFixed(0)}h ${mins}min`;
}
