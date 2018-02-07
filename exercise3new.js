var nama = '';
var peran = '';

if (nama === '' && peran ===''){
  console.log("Nama tidak boleh kosong. Pilih peranmu untuk  memulai game");
}
  else if (nama !== '' && peran === '') {
  console.log("pilih peranmu untuk memulai game");
}
  else if (peran !== '' && nama === ''){
  console.log('Nama tidak boleh kosong');
}
  else if (nama !== '' && peran === 'Ksatria') {
  console.log("selamat datang di dunia Proxytia, "+nama+" . Halo Ksatria " +nama+ ", kamu dapat menyerang dengan senjatamu");
}
  else if (nama !== '' && peran === 'Tabib') {
  console.log("selamat datang di dunia Proxytia, "+nama+" . Halo Tabib "+nama+", kamu dapat menyembuhkan temanmu yang terluka");
}
  else if (nama !== '' && peran === 'Penyihir') {
  console.log("selamat datang di dunia Proxytia, "+nama+". Halo Penyihir "+nama+", ciptakan keajaiban yang membantu kemenanganmu");
}
