const tasks = [
  {
    id: 1,
    status: 'Nowe zadanie',
    action: 'Rozpocznij',
    title:
      'Konieczne wykonanie cyklicznego audytu procedur polityk ochrony danych',
    info: '',
    reason: 'Zbliża się narzucony przez Ciebie termin',
    date: '17.06.2024',
  },
  {
    id: 3,
    status: 'Nowe zadanie',
    action: 'Rozpocznij',
    title: 'Konieczne przeszkolenie pracownika',
    info: '',
    reason: 'Do firmy dołączył nowy pracownik',
    date: '06.03.2024',
  },
  {
    id: 2,
    status: 'W trakcie',
    action: 'Zakończ',
    title: 'Konieczna aktualizacja rejestru czynności przetwarzania danych',
    info: '',
    reason: 'Przekroczony termin aktualizacji ',
    date: '01.01.2024',
    isVisible: true,
  },
  {
    id: 4,
    status: 'Wykonano',
    action: 'Wykonano',
    title: 'Konieczna aktualizacja CRBR',
    info: 'Pochodzi z integracji KRS',
    reason: 'Zmienił się skład zarządu spółki',
    date: '17.12.2023',
    isVisible: true,
  },
];

export default tasks;
