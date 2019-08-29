// Title Tag
var title_style = new Vue({
  el : '#title',
  data : {
    title : 'TwoPark Register!',
    styleVue : {
      fontSize : '30px',
      fontWeight : 'bold',
      color : 'blue',
      marginTop : '100px',
      marginBottom : '10px'
    }
  }
})

// Login Check - NULL Value Request Protect
var login_check = new Vue({
  el : '#check',
  data : {
    id : '',
    nickname : '',
    email : '',
    pw : '',
    repw : ''
  },
  methods :{
    // need clean code
    check: function () {
      if(this.id == '') {
        alert('Input Your ID')
      }
      else if(this.nickname == '') {
        alert('Input Your NickName')
      }
      else if(this.email == '') {
        alert('Input Your Email')
      }
      else if(this.pw == '') {
        alert('Input Your Password')
      }
      else if(this.repw == '') {
        alert('Input Your Confirm Password')
      }
      else if(this.repw != this.pw) {
        alert('NOT Match Your Password and Confirm Password')
      }
      else{
        ajax.send(this.id, this.nickname, this.email, this.pw, this.repw);
      }
    }
  }
})

// AJAX CODE using Vue-axios - send Register_proc
var ajax = new Vue({
  methods : {
    send: function(id, nick, email, pw, repw){
      axios.post('/register_proc',{ id : id, nickname : nick, email : email, pw : pw, repw: repw})
        .then(function(res){
          console.log(res);
        }).catch(function (e) {
        console.error(e);
      })
    }
  }
})
