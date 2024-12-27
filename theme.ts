export const clockTheme = {
  background: 'bg-gradient-to-br from-indigo-50 to-blue-100',
  border: 'border-blue-200',
  shadow: 'shadow-[0_0_50px_-12px_rgba(79,70,229,0.25)]',
  marker: {
    default: 'bg-indigo-200',
    quarter: 'bg-indigo-400 w-1.5 h-6',
    hour: 'bg-indigo-300'
  },
  hands: {
    hour: 'bg-indigo-900 shadow-lg',
    minute: 'bg-blue-800 shadow-md',
    second: 'bg-rose-600 shadow-sm',
    pin: 'bg-indigo-900 shadow-lg z-50'
  },
  numbers: {
    hours: {
      active: 'text-indigo-900 bg-white shadow-lg border-indigo-100',
      inactive: 'text-indigo-400 bg-white/90 shadow-sm border-indigo-50'
    },
    minutes: {
      active: 'text-blue-800 bg-white shadow-lg border-blue-100',
      inactive: 'text-blue-400 bg-white/90 shadow-sm border-blue-50'
    },
    seconds: {
      active: 'text-rose-700 bg-white shadow-lg border-rose-100',
      inactive: 'text-rose-400 bg-white/90 shadow-sm border-rose-50'
    }
  }
};