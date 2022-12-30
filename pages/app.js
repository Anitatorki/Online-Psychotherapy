var button = document.getElementById('submit');
button.addEventListener('click', function (event) {
  event.preventDefault();
  
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var pnum = document.getElementById('pnum');
    var country = document.getElementById('country');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');
    if(fname.value === '' || lname.value === '' || pnum.value === '' || country === '' || msg.value === ''){
    danger.style.display = 'block';
  }
  else{
    setTimeout(() => {
      fname.value = '';
      lname.value = '';
      pnum.value = '';
      country = '';
    }, 2000);
    success.style.display = 'block';
  }

  setTimeout(() => {
    danger.style.display = 'none';
    success.style.display = 'none';
  },4000);
});
