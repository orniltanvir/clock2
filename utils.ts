export const calculateRotation = (value: number, type: 'hours' | 'minutes' | 'seconds'): number => {
  switch (type) {
    case 'hours':
      return ((value % 12) * 30) - 90; // -90 to start at 12 o'clock
    case 'minutes':
    case 'seconds':
      return (value * 6) - 90; // -90 to start at 12 o'clock
    default:
      return 0;
  }
};