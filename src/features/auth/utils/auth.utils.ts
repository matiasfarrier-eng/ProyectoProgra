export function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part.at(0)?.toUpperCase() ?? '')
    .slice(0, 2)
    .join('')
}
