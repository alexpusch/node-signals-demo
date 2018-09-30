setInterval(() => console.log('run'), 2000);

process.on('SIGTERM', () => {
  console.log('test program: SIGTERM');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('test program: SIGINT');
  process.exit(0);
});
