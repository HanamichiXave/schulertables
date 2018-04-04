var socket = io.connect('192.168.1.48:49372');
var rcvd = document.createElement("audio");
var typng = document.createElement("audio");
rcvd.src="/assets/new-msg.mp3";
rcvd.volume=0.5;
rcvd.autoPlay=false;
rcvd.preLoad=true; 
typng.src="/assets/typing.mp3";
typng.volume=0.1;
typng.autoPlay=false;
typng.preLoad=true;
var countsrt = 0;
var mns =0;
var scrolledtimes=0;
var last_id;
var v1, v2, v3, v4, v5, v6;
var temp_id = new Array();

            $(document).on('click', "#minimizer", function () {
              mns++;
                if(mns==1) {
                $(".siders").css("height", "60%");
                $(this).attr("title", "minimize");
              } else {
                $(".siders").css("height", "30px");
                $(this).attr("title", "maximize");
                mns =0;
              }
            });
socket.on('typing', function (data) {
              data = jQuery.parseJSON(data);
              var to = data.to.slice(2);
              var fr = data.fr;
              var imdi = parseInt($('.gtr-urs').attr('id')).toString(32);
              if(to == imdi && $('.'+to+'ol'+fr+'').length != 0)
              {
                  typng.play();
                  $('.l-st-'+to+'ol'+fr).find('span').html('Typing...');
                  setTimeout(function(){
                    $('.l-st-'+to+'ol'+fr).find('span').html('');
                  }, 1500);
              }
            });
socket.on('offline', function (data) {
              data = jQuery.parseJSON(data);
              var idu = parseInt(data.id).toString(32);

              //data.id+data.role
              if(myIDs != idu){
                if($('.'+data.role).length ==0)
                {
                    $('.side-list').prepend('<div  class="'+data.role+'"><div class="rttle">'
                  +'\n<span>'+data.role+'</span>'
                  +'\n</div></div>');
                }
                if($('#ol'+idu).length == 0)
                {
                  var olctr = parseInt($('#olcount').html()) + 1;
                  $('#olcount').html(olctr);
                  $('.'+data.role).append('<div class="ol-usr" id="ol'+idu+'">'
                            +'\n<div class="usrpt">'
                              +'\n<img alt="user-img" height="40" width="40" class="img-circle" src="/assets/images/chat.jpg">'
                            +'\n</div>'
                            +'\n<div class="usrp">'
                              +'\n<span class="nma">'+data.fname+' '+data.lname+'</span>'
                            +'\n</div>'
                            +'\n</div>');
                  
                }
               
              }

            });
socket.on('online', function (data) {
              data = jQuery.parseJSON(data);
              var idu = parseInt(data.id).toString(32);

              //data.id+data.role
              if(myIDs != idu){
                if($('.'+data.role).length ==0)
                {
                    $('.side-list').prepend('<div  class="'+data.role+'"><div class="rttle">'
                  +'\n<span>'+data.role+'</span>'
                  +'\n</div></div>');
                }
                if($('#ol'+idu).length == 0)
                {
                  var olctr = parseInt($('#olcount').html()) + 1;
                  $('#olcount').html(olctr);
                  $('.'+data.role).append('<div class="ol-usr" id="ol'+idu+'">'
                            +'\n<div class="usrpt">'
                              +'\n<img alt="user-img" height="40" width="40" class="img-circle" src="/assets/images/chat.jpg">'
                            +'\n</div>'
                            +'\n<div class="usrp">'
                              +'\n<span class="nma">'+data.fname+' '+data.lname+'</span>'
                            +'\n</div>'
                            +'\n</div>');
                  
                }
               
              }

            });
socket.on('message', function (data) {
              data = jQuery.parseJSON(data);
              var to = data.to.slice(2);
              var fr = data.fr;
              var msg = data.message;
              var dateNow = new Date();
              var imdi = parseInt($('.gtr-urs').attr('id')).toString(32);
              $('.l-st-'+to+'ol'+fr).find('span').html('');

                  if(to == imdi)
                  {
                    rcvd.play();
                    var monthNow = new Array();
                                          monthNow[0] = "January";
                                          monthNow[1] = "February";
                                          monthNow[2] = "March";
                                          monthNow[3] = "April";
                                          monthNow[4] = "May";
                                          monthNow[5] = "June";
                                          monthNow[6] = "July";
                                          monthNow[7] = "August";
                                          monthNow[8] = "September";
                                          monthNow[9] = "October";
                                          monthNow[10] = "November";
                                          monthNow[11] = "December";
                                          var monthToday = monthNow[dateNow.getMonth()];
                                          var dayNow = dateNow.getDate();
                                          var yearNow = dateNow.getFullYear();
                                          var minuteNow = dateNow.getMinutes();
                                          var timeNow = dateNow.getHours();

                                          var disp_date;

                        var ampm;
                        if (timeNow >= 12) {
                                            timeNow = timeNow - 12;
                                            minuteNow = minuteNow < 10 ? "0" + minuteNow : minuteNow;
                                            if (timeNow == 0) {
                                            timeNow = 12;
                                            ampm = "PM";
                                            disp_date = monthToday+' '+dayNow+', '+yearNow+' @'+timeNow+':'+minuteNow+' '+ampm;
                                            } else if (timeNow==12) {
                                              ampm = "AM";
                                            disp_date = monthToday+' '+dayNow+', '+yearNow+' @'+timeNow+':'+minuteNow+' '+ampm;
                                            }
                                            else {
                                              ampm = "PM";
                                            disp_date = monthToday+' '+dayNow+', '+yearNow+' @'+timeNow+':'+minuteNow+' '+ampm;
                                             }
                                          } else {
                                            if (timeNow == 0) {
                                              timeNow = 12;
                                            }
                                            minuteNow = minuteNow < 10 ? "0" + minuteNow : minuteNow;
                                            ampm = "AM";
                                            disp_date = monthToday+' '+dayNow+', '+yearNow+' @'+timeNow+':'+minuteNow+' '+ampm;
                                          }
                    if($('.left-ch-'+to+'ol'+fr).length==0)
                    {
                      // alert("the chat box doesn't exist!");
                      var uid = 'ol'+fr;
                      var finder = $('#ol'+fr).find('.nma');
                      var nameu = finder.html();
                      cBox(uid, imdi, finder, nameu, 'prepend', false);
                    }
                      $('.l-st-'+to+'ol'+fr).find('span').html('');
                      $('.mchb-'+to+'ol'+fr).append('<div class="mch-001">'
                             +'\n<div class="usrpt">'
                          +'\n<img alt="user-img" height="35" width="35" class="img-circle" src="/assets/images/chat.jpg">'
                             +'\n</div>'
                             +'\n<div class="bw-wr">'
                          +'\n<span title="Received '+disp_date+'">'+msg+'</span>'
                             +'\n</div>'
                  +'\n</div>');
                      var new_msg_cnt;
                      var new_msg_chk;
                      if($('#ol'+fr).find('.cntr_bdge').length !=0) {
                          new_msg_chk = $('#ol'+fr).find('.cntr_bdge span');
                          if(parseInt(new_msg_chk.html())<99)
                          {
                            new_msg_cnt = parseInt(new_msg_chk.html())+1;
                          }
                          else{
                            new_msg_cnt= '99+';
                          }
                          new_msg_chk.html(new_msg_cnt);
                      }
                      else {
                        new_msg_cnt=1;
                        $('#ol'+fr).append('<div class="cntr_bdge">'
                        +'\n<span>'+new_msg_cnt+'</span>'
                        +'\n</div>');
                      }
                      // if(new_msg_chk.length ==0)
                      // {
                      //     new_msg_cnt = 1;
                      // }
                      // else {
                      //   new_msg_cnt = parseInt(new_msg_chk)+1;
                      // }
                      
                  }
      if($('.mchb-'+to+'ol'+fr).height() >= 218) {
        $('.mchb-'+to+'ol'+fr).css('overflow-y', 'scroll');
        //marked
        $('.mchb-'+to+'ol'+fr).attr('onwheel', 'scrolling("mchb-'+to+'ol'+fr+'");');
        $('.mchb-'+to+'ol'+fr).attr('onscroll', 'scrolling("mchb-'+to+'ol'+fr+'");');
      } 
     if($('.mchb-'+to+'ol'+fr).get(0).scrollHeight >= 218) {
        $('.mchb-'+to+'ol'+fr).scrollTop($('.mchb-'+to+'ol'+fr).get(0).scrollHeight);
      }
                  // if($('.mchb-'+to+ ' div').last().attr('class') == "mch-001")
                  // {
                  //   alert('sample');
                  // }
            });
        $(document).on('keydown', '.ch-1i', function(e) {
          var iusr = parseInt($('.gtr-urs').attr('id')).toString(32);
          var uid = $(this).attr('id').slice(3);
          var msgs = $(this).html();
          // alert(iusr);
          if(e.keyCode !=9) { 
            if(e.keyCode !=18)
            {
              countsrt++; 
            }
        }
          if(countsrt==1){
              $.ajax({
                                      type: "POST",
                                      url: '/type',
                                      headers:{'X-CSRF-Token': toks},
                                      dataType: "json",
                                      data: {'toidch':uid, 'useridch':iusr },
                                      success:function(data){
                                        countsrt = 0;
                                      }, error: function() {
                                         //not sent
                                      }
              });
          }
        if(e.keyCode == 8){ return true; }
                // if (e.keyCode == 32) {
                // var removesp = $(this).html().find("&nbsp");
                // removesp.replace(/&nbsp;/gi," "); }
                if($(this).html().length == 400) {  return false; }
                if(e.keyCode == 13 )
                { 
                    if(!e.shiftKey)
                    {
                      do{
                        var ok;
                        var temp_id_gen = parseInt(1 + Math.floor(Math.random() * 9999999)).toString(32);
                        if($.inArray(temp_id_gen, temp_id))
                        {
                          temp_id.push(temp_id_gen);
                          var tmp_id = temp_id_gen;
                          ok = true;
                        } else {
                          ok = false;
                        }
                    } while(ok == false);
                      var dateNow = new Date();
                      var monthNow = new Array();
                                          monthNow[0] = "January";
                                          monthNow[1] = "February";
                                          monthNow[2] = "March";
                                          monthNow[3] = "April";
                                          monthNow[4] = "May";
                                          monthNow[5] = "June";
                                          monthNow[6] = "July";
                                          monthNow[7] = "August";
                                          monthNow[8] = "September";
                                          monthNow[9] = "October";
                                          monthNow[10] = "November";
                                          monthNow[11] = "December";
                                          var monthToday = monthNow[dateNow.getMonth()];
                                          var dayNow = dateNow.getDate();
                                          var yearNow = dateNow.getFullYear();
                                          var minuteNow = dateNow.getMinutes();
                                          var timeNow = dateNow.getHours();

                                          var disp_date;

                        var ampm;
                        if (timeNow >= 12) {
                                            timeNow = timeNow - 12;
                                            minuteNow = minuteNow < 10 ? "0" + minuteNow : minuteNow;
                                            if (timeNow == 0) {
                                            timeNow = 12;
                                            ampm = "PM";
                                            disp_date = monthToday+' '+dayNow+', '+yearNow+' @'+timeNow+':'+minuteNow+' '+ampm;
                                            } else if (timeNow==12) {
                                              ampm = "AM";
                                            disp_date = monthToday+' '+dayNow+', '+yearNow+' @'+timeNow+':'+minuteNow+' '+ampm;
                                            }
                                            else {
                                              ampm = "PM";
                                            disp_date = monthToday+' '+dayNow+', '+yearNow+' @'+timeNow+':'+minuteNow+' '+ampm;
                                             }
                                          } else {
                                            if (timeNow == 0) {
                                              timeNow = 12;
                                            }
                                            minuteNow = minuteNow < 10 ? "0" + minuteNow : minuteNow;
                                            ampm = "AM";
                                            disp_date = monthToday+' '+dayNow+', '+yearNow+' @'+timeNow+':'+minuteNow+' '+ampm;
                                          }
                      if($(this).html().trim() != "")
                      {
                        $(this).html("");
                        // chatMsg(uid, iusr, msgs);
                        $('.mchb-'+iusr+uid).append('<div class="mch-000" id="tmp_'+tmp_id+'">'
                         +'\n<div class="bw-wrr">'
                               +'\n<span title="Sent '+disp_date+'">'+msgs+'</span>'
                         +'\n</div>'
                  +'\n</div>');
                        var errs = $('.r-st-'+iusr+uid).find('span');
                        errs.removeAttr('class');
                        errs.html('Sending...');
                        if($('.mchb-'+iusr+uid).height() >= 218) {
                          $('.mchb-'+iusr+uid).css('overflow-y', 'scroll');
                          //marked
                          // $('.mchb-'+iusr+uid).attr('onwheel', 'scrolling("mchb-'+uid+iusr+'");');
                          // $('.mchb-'+iusr+uid).attr('onscroll', 'scrolling("mchb-'+uid+iusr+'");');
                        } 
                        if($('.mchb-'+iusr+uid).get(0).scrollHeight >= 218)
                        {
                          $('.mchb-'+iusr+uid).scrollTop($('.mchb-'+iusr+uid).get(0).scrollHeight);
                        }
                          $.ajax({
                                  type: "POST",
                                  url: '/sendmessage',
                                  headers:{'X-CSRF-Token': toks},
                                  dataType: "json",
                                  data: {'message':msgs, 'toidch':uid, 'useridch':iusr },
                                  success:function(data){
                                    var sent = document.createElement("audio");
                                    sent.src="/assets/sent.mp3";
                                    sent.volume=0.1;
                                    sent.autoPlay=false;
                                    sent.preLoad=true;
                                    sent.play();
                                    setTimeout(function(){
                                    $('.r-st-'+iusr+uid).find('span').html('Sent');
                                      }, 500);
                                    errs.removeAttr('class');
                                  }, error: function() {
                                     //not sent
                                     $('.r-st-'+iusr+uid).find('span').html('');
                                     $('#tmp_'+tmp_id).children().first().css('opacity', '.7');
                                     $('#tmp_'+tmp_id).append('<div class="snt_errs">'
                                        +'\n<span class="snt_chld">Message not sent! Please check your internet connection and click here to resend</span>'
                                     +'\n</div>');
                                     $('.mchb-'+iusr+uid).scrollTop($('.mchb-'+iusr+uid).get(0).scrollHeight);
                                  }
                          });
                      }
                    return false;
                    }
                }
        //end
        });
      var err_snt = 0;
        $(document).on('click', '.snt_errs', function() {

            if(err_snt == 0) {
            err_snt = 1;
            var errsnt_lvl = $(this).parent().find('.bw-wrr span').html();
            // if ajax success $(this).parent().removeAttr('id'); $(this).remove();
            var err_remove = $(this);
            var snt_to_lvl1 = $(this).parent();
            var snt_to_lvl2 = snt_to_lvl1.parent().attr('class');
            var lvl_snt1 = snt_to_lvl2.split(' ');
            var snd_to = lvl_snt1[0].split('-');
            var snd_lvl1 = snd_to[1].split('ol');
            var fr_snd = snd_lvl1[0];
            var to_snd = 'ol'+snd_lvl1[1];
              if(to_snd!=null){
              $.ajax({
                                    type: "POST",
                                    url: '/sendmessage',
                                    headers:{'X-CSRF-Token': toks},
                                    dataType: "json",
                                    data: {'message':errsnt_lvl, 'toidch':to_snd, 'useridch':fr_snd},
                                    success:function(data){
                                      snt_to_lvl1.children().first().css('opacity', '1');
                                      snt_to_lvl1.removeAttr('id');
                                      err_remove.remove();
                                      err_snt = 0;
                                    }, error: function() {
                                      err_snt = 0;
                                    }
                                  });
              }
          }
        });

        $(document).on('click', '.ch-act', function() {
           var level1 = $(this).parent();
           var level2 = level1.parent();
           var level3 = level2.parent();
           var level4 = level3.parent();
           level4.remove();
           if($('.excss').length !=0) {
            var childrenfirst = $('.list-hlder').children().first();
            var gtcls = childrenfirst.attr('class').split(' ');
            var cls = gtcls[1].split('ex');
            var fndr = childrenfirst.find('.excss-list-n');
            var name = $(fndr).find('span').html();
                if($('.list-hlder').children().length ==1) {
                  cBox('ol'+cls[1], cls[0], null, name, 'append', false);
                   $('.excss').remove();
                } else {
                  cBox('ol'+cls[1], cls[0], null, name, 'append', false);
                  childrenfirst.remove();
                }
           }
        });
          var ishdn = 0;
        $(document).on('click', '.chat-head', function() {
          var prnt = $(this).parent();
          if(ishdn==0) {
          ishdn = 1;
          prnt.children().last().css('display', 'none');
        } else {
          ishdn = 0;
          prnt.children().last().css('display', 'block');
        }
        });


        $(document).on('click', '.ol-usr', function() {
                var uid = $(this).attr('id');
                var imid = parseInt($('.gtr-urs').attr('id')).toString(32);
                var finder = $(this).find('.nma');
                var nameu = finder.html();
                cBox(uid, imid, finder, nameu, 'prepend', true);
                      v1 = uid;
                      v2 = imid;
                      v3 = finder;
                      v4 = nameu;
                      v5 = 'prepend';
                      v6 = true;
            });

      function cBox(uid, imid, finder, nameu, posi, focus) {
        var chb_color;
                if(focus==true)
                {
                  ch_color = 'background-color: #00D489; color: white;';
                } else {
                  ch_color = 'background-color: #EEEDED; color: #6B6B6B;';
                }
        if($('.left-ch-'+imid+uid).length ==0)
                {
                  
                  if($('.left-ch').children().length ==3)
                  {
                    var fndn = $('.left-ch').children().last();
                    var name = fndn.find('.usersname-ch span').html();
                    var oid = fndn.find('.chat-cont').attr('class').split(' ');
                    var gametime = oid[1].split('ol');
                    var id1 = gametime[0];
                    var id2 = gametime[1];
                    if($('.'+imid+'ex'+uid.slice(2)).length >0)
                    {
                      $('.'+imid+'ex'+uid.slice(2)).remove();
                    }
                    excessBox(oid[1], finder, name);
                    $('.left-ch').children().last().remove();
                  }
                  if(posi == "prepend") {
                $('.left-ch').prepend('<div class="left-ch-'+imid+uid+' left-cssc">'
        +'\n<div class="ch-cont-floater">'
                  +'\n<div class="chat-cont '+imid+uid+'">'
                              +'\n<div class="chat-head"  id="mn'+uid+'" style="'+ch_color+'">'
                                 +'\n<div class="usersname-ch">'
                                     +'\n<span>'+nameu+'</span>'
                                 +'\n</div>'
                                 +'\n<div class="ch-act">'
                                     +'\n<div class="dta-2" id="cl'+uid+'">'
                                     +'\n<span><i class="glyphicon glyphicon-remove"></i></span>'
                                     +'\n</div>'
                                 +'\n</div>'
                               +'\n</div>'
                               +'\n<div class="hd'+uid+'">'
                                 +'\n<div class="chat-body">'
                                 +'\n<div class="mchb-'+imid+uid+' knamo"><div position:relative;><div class="stat-fl-'+imid+uid+'" style="position: fixed; width: 242px; bottom: 49px; height: 30px; font-size: 10px;"><div class="r-st-'+imid+uid+'" style="padding: 10px; float:right;"><span></span></div><div class="l-st-'+imid+uid+'" style="padding: 10px; float:left;"><span></span></div></div></div></div>'
                                 +'\n</div>'
                                 +'\n<div class="ch-'+uid+'" style="min-height: 30px;max-height: 60px; overflow-x:hidden; background-color: white; padding: 10px; box-shadow: 0px 0px 1px 0px;">'
                                       +'\n<div class="ch-1i" id="inp'+uid+'" style="padding: 5px; width: 100%; height: 100%;" contenteditable="true" role="textbox" spellcheck="true" style="outline: none; white-space: pre-wrap; word-wrap: break-word;">'
                                       +'\n</div>'
                                 +'\n</div>'
                               +'\n</div>'
                 +'\n</div>'
                 +'\n</div>'
                 +'\n</div>');
              } else {
                  $('.left-ch').append('<div class="left-ch-'+imid+uid+' left-cssc">'
        +'\n<div class="ch-cont-floater">'
                  +'\n<div class="chat-cont '+imid+uid+'">'
                              +'\n<div class="chat-head"  id="mn'+uid+'" style="'+ch_color+'">'
                                 +'\n<div class="usersname-ch">'
                                     +'\n<span>'+nameu+'</span>'
                                 +'\n</div>'
                                 +'\n<div class="ch-act">'
                                     +'\n<div class="dta-2" id="cl'+uid+'">'
                                     +'\n<span><i class="glyphicon glyphicon-remove"></i></span>'
                                     +'\n</div>'
                                 +'\n</div>'
                               +'\n</div>'
                               +'\n<div class="hd'+uid+'">'
                                 +'\n<div class="chat-body">'
                                 +'\n<div class="mchb-'+imid+uid+' knamo"><div position:relative;><div class="stat-fl-'+imid+uid+'" style="position: fixed; width: 242px; bottom: 49px; height: 30px; font-size: 10px;"><div class="r-st-'+imid+uid+'" style="padding: 10px; float:right;"><span></span></div><div class="l-st-'+imid+uid+'" style="padding: 10px; float:left;"><span></span></div></div></div></div>'
                                 +'\n</div>'
                                 +'\n<div class="ch-'+uid+'" style="min-height: 30px;max-height: 60px; overflow-x:hidden; background-color: white; padding: 10px; box-shadow: 0px 0px 1px 0px;">'
                                       +'\n<div class="ch-1i" id="inp'+uid+'" style="padding: 5px; width: 100%; height: 100%;" contenteditable="true" role="textbox" spellcheck="true" style="outline: none; white-space: pre-wrap; word-wrap: break-word;">'
                                       +'\n</div>'
                                 +'\n</div>'
                               +'\n</div>'
                 +'\n</div>'
                 +'\n</div>'
                 +'\n</div>');
                }
                //dito ha
                cBoxReload(uid, imid, finder, nameu, posi, focus);
              }
                if(focus==true)
                {
                  $('#inp'+uid).focus();
                }
      }

       function cBoxReload(uid, imid, finder, nameu, posi, focus) {
        v1 = uid;
        v2 = imid;
        v3 = finder;
        v4 = nameu;
        v5 = posi;
        v6 = focus;
        var req = 'mchb-'+imid+uid;
                $('.'+req).prepend('<div id="loadr" style="float:left; padding:10px; height: 30px; width:100%;"><div class="loaderch" style="margin: auto;"></div></div>');
                //start code here now
                $.ajax({
                                      type: "POST",
                                      url: '/getmsg',
                                      headers:{'X-CSRF-Token': toks},
                                      dataType: "json",
                                      data: {'cbox':req},
                                      success:function(data){
                                        $('#loadr').remove();
                                        var ap;
                                        if(parseInt(data.msg.length)!=0){
                                        $nums = parseInt(data.msg.length)-1;
                                        last_id = data.msg[$nums]['id'];
                                        }
                                        for($i=0; $i < data.msg.length; $i++)
                                        {
                                          if($('.mchb-'+imid+uid).height() >= 218 ) {
                                            $('.mchb-'+imid+uid).css('overflow-y', 'scroll');
                                            //marked
                                            $('.mchb-'+imid+uid).attr('onwheel', 'scrolling("mchb-'+imid+uid+'", '+last_id+');');
                                            $('.mchb-'+imid+uid).attr('onscroll', 'scrolling("mchb-'+imid+uid+'", '+last_id+');');
                                          }
                                          if($('.mchb-'+imid+uid).get(0).scrollHeight >= 218) {
                                            $('.mchb-'+imid+uid).scrollTop($('.mchb-'+imid+uid).get(0).scrollHeight);
                                          }
                                          
                                          var msg = data.msg[$i]['message'];
                                          var fr = data.msg[$i]['from_id'];
                                          var to = data.msg[$i]['to_id'];
                                          var dates = new Date(data.msg[$i]['created_at']);
                                          var dd = dates.getHours();
                                          var mnt = dates.getMinutes();
                                          var month = new Array();
                                          month[0] = "January";
                                          month[1] = "February";
                                          month[2] = "March";
                                          month[3] = "April";
                                          month[4] = "May";
                                          month[5] = "June";
                                          month[6] = "July";
                                          month[7] = "August";
                                          month[8] = "September";
                                          month[9] = "October";
                                          month[10] = "November";
                                          month[11] = "December";
                                          var monthh = month[dates.getMonth()];
                                          var days = dates.getDate();
                                          var yrnw = dates.getFullYear();
                                          var ttd;
                                          if (dd >= 12) {
                                            dd = dd - 12;
                                            mnt = mnt < 10 ? "0" + mnt : mnt;
                                            if (dd == 0) {
                                            dd = 12;
                                            ap = "PM";
                                            ttd = monthh+' '+days+', '+yrnw+' @'+dd+':'+mnt+' '+ap;
                                            } else if (dd==12) {
                                              ap = "AM";
                                            ttd = monthh+' '+days+', '+yrnw+' @'+dd+':'+mnt+' '+ap;
                                            }
                                            else {
                                              ap = "PM";
                                            ttd = monthh+' '+days+', '+yrnw+' @'+dd+':'+mnt+' '+ap;
                                             }
                                          } else {
                                            mnt = mnt < 10 ? "0" + mnt : mnt;
                                            ap = "AM";
                                            ttd = monthh+' '+days+', '+yrnw+' @'+dd+':'+mnt+' '+ap;
                                          }
                                          if(parseInt(myIDs).toString(32) == fr)
                                          {
                                            $('.mchb-'+imid+uid).prepend('<div class="mch-000">'
                                                   +'\n<div class="bw-wrr" title="Sent '+ttd+'">'
                                                         +'\n<span>'+msg+'</span>'
                                                   +'\n</div>'
                                            +'\n</div>');
                                          } else {
                                            $('.mchb-'+imid+uid).prepend('<div class="mch-001">'
                                                   +'\n<div class="usrpt">'
                                                +'\n<img alt="user-img" height="35" width="35" class="img-circle" src="/assets/images/chat.jpg">'
                                                   +'\n</div>'
                                                   +'\n<div class="bw-wr" title="Received '+ttd+'">'
                                                +'\n<span>'+msg+'</span>'
                                                   +'\n</div>'
                                        +'\n</div>');
                                          }
                                          
                                        }
                                        if($i==data.msg.length) {
                                          if(data.msg.length ==0)
                                          {
                                            $('#loadr').remove();
                                          } else {
                                          $('.'+req).prepend('<div id="loadr" style="float:left; padding:10px; width:100%;"><div class="loaderch" style="margin: auto;"></div></div>');
                                          }
                                        }
                                      }, error: function(e) {
                                         $('#loadr').remove();
                                         $('.mchb-'+imid+uid).prepend('<div class="err-m1">'
                                                                +'\n<span>Something went wrong! Please click here to reload.</span></div>');
                                      }
                });
      }


      $(document).on('click', '.err-m1 span', function() {
          $('.err-m1').remove();
          cBoxReload(v1, v2, v3, v4, v5, v6);
      });
      $cntclk = 0;
      $(document).on('click', '.excss-btn', function() {
          if($cntclk==0){
            $cntclk =1;
            $('.excss-l-hldr').css('display', 'block');
            $(this).css('background-color', 'white');
          }
          else{
            $cntclk = 0;
            $('.excss-l-hldr').css('display', 'none');
            $(this).css('background-color', '#00D489');
          }
      });
      $(document).on('click', '.excss-list-i', function() {
          $(this).parent().remove();
          if($('.excss-list').length == 0) {
              $('.excss').remove();
          }
          // $('.list-hlder').children().last().remove().
      });
      $(document).on('click', '.excss-list-n', function() {
          $(this).parent().remove();
          var name = $(this).find('span').html();
          var id = $(this).parent().attr('class').split(' ');
          var ids = id[1].split('ex');
          cBox('ol'+ids[1], ids[0], null, name, 'prepend', true);
      });

      function excessBox(id, fnd, fn){
        var spid = id.split('ol');
        if($('.excss').length == 0)
        {
        $('.chat-body-cont').append(
            '<div class="excss">'
      +'\n<div class="excss-b">'
        +'\n<div class="excss-nn">'
          +'\n<div class="excss-l-hldr">'
              +'\n<div class="list-hlder">'
                +'\n<div class="excss-list '+spid[0]+'ex'+spid[1]+'">'
                    +'\n<div class="excss-list-n">'
                      +'\n<span>'+fn+'</span>'
                    +'\n</div>'
                    +'\n<div class="excss-list-i">'
                      +'\n<span><i class="glyphicon glyphicon-remove"></i></span>'
                    +'\n</div>'
                +'\n</div>'
              +'\n</div>'
              +'\n<div class="excss-whspc">'
              +'\n</div>'
          +'\n</div>'
          +'\n<div class="excss-btn">'
          +'\n</div>'
        +'\n</div>'
      +'\n</div>'
+'\n</div>');
        } else {
                  $('.list-hlder').prepend('<div class="excss-list '+spid[0]+'ex'+spid[1]+'">'
                    +'\n<div class="excss-list-n">'
                      +'\n<span>'+fn+'</span>'
                    +'\n</div>'
                    +'\n<div class="excss-list-i">'
                      +'\n<span><i class="glyphicon glyphicon-remove"></i></span>'
                    +'\n</div>'
                +'\n</div>');
        }
      }
      $(document).on('focusout', '.chat-cont', function() {
          $(this).find('.chat-head').css('background-color', '#EEEDED');
          $(this).find('.chat-head').css('color', '#6B6B6B');
      });

      $(document).on('click', '.chat-body', function() {
          $(this).parent().find('.ch-1i').focus();
          var lvl1 = $(this).parent();
          var lvl2 = lvl1.parent();
          lvl2.find('.chat-head').css('background-color', '#00D489');
          lvl2.find('.chat-head').css('color', 'white');
      });
      $(document).on('focus', '.ch-1i', function() {
        var lvel1 = $(this).parent();
        var lvel2 = lvel1.parent();
        var lvel3 = lvel2.parent();
        lvel3.find('.chat-head').css('background-color', '#00D489');
        lvel3.find('.chat-head').css('color', 'white');
        var split_class = lvel3.attr('class').split(' ');
        var thisId = split_class[1].split('ol');
        $.ajax({
                                      type: "POST",
                                      url: '/updateseen',
                                      headers:{'X-CSRF-Token': toks},
                                      dataType: "json",
                                      data: {'chat_box_id':split_class[1], 'myId':thisId[0]},
                                      success:function(data){
                                        $('#ol'+thisId[1]).find('.cntr_bdge').remove();
                                      }

        });
        //add code here
      });
      var clkcnt =0;
      $(document).on('click', '.chat-head', function() {
        if(clkcnt==0)
        {
          clkcnt = 1;
          $(this).css('background-color', '#EEEDED');
          $(this).css('color', '#6B6B6B');
        }
        else{
          clkcnt = 0;
          $(this).css('background-color', '#00D489');
          $(this).parent().find('.ch-1i').focus();
          $(this).css('color', 'white');
        }
      });
      // $(document).on('click', '.knamo', function() {
      //   console.log($(this).attr('class'));
      //   // if($(this).scrollTop() ==0)
      //   // {
      //   //     a
      //   //   // getOtherMsg();
      //   // }
      // });
      function getOtherMsg(bxc, lastId){
        
      }


      var sclr, reclass, reidf;
      function scrolling(clsses, idf) {
        reclass = clsses;
        reidf = idf;
          if($('.'+clsses).scrollTop() <= $('.'+clsses).get(0).scrollHeight*0.30) {
              if(idf != sclr){
                //start here
                $.ajax({
                                      type: "POST",
                                      url: '/getmoremsg',
                                      headers:{'X-CSRF-Token': toks},
                                      dataType: "json",
                                      data: {'cbox':clsses, 'lid':idf},
                                      success:function(data){
                                        $('#loadr').remove();
                                        $('.err-m2').remove();
                                        var ap;
                                        if(parseInt(data.msg.length)!=0){
                                        $nums = parseInt(data.msg.length)-1;
                                        last_id = data.msg[$nums]['id'];
                                        }
                                        for($i=0; $i < data.msg.length; $i++)
                                        {
                                            //marked
                                            $('.'+clsses).attr('onwheel', 'scrolling("'+clsses+'", '+last_id+');');
                                            $('.'+clsses).attr('onscroll', 'scrolling("'+clsses+'", '+last_id+');');
                                          
                                          var msg = data.msg[$i]['message'];
                                          var fr = data.msg[$i]['from_id'];
                                          var to = data.msg[$i]['to_id'];
                                          var dates = new Date(data.msg[$i]['created_at']);
                                          var dd = dates.getHours();
                                          var mnt = dates.getMinutes();
                                          var month = new Array();
                                          month[0] = "January";
                                          month[1] = "February";
                                          month[2] = "March";
                                          month[3] = "April";
                                          month[4] = "May";
                                          month[5] = "June";
                                          month[6] = "July";
                                          month[7] = "August";
                                          month[8] = "September";
                                          month[9] = "October";
                                          month[10] = "November";
                                          month[11] = "December";
                                          var monthh = month[dates.getMonth()];
                                          var ttd;
                                          if (dd >= 12) {
                                            dd = dd - 12;
                                            ap = "PM";
                                            mnt = mnt < 10 ? "0" + mnt : mnt;
                                            ttd = monthh+' '+dd+':'+mnt+' '+ap;
                                          }
                                          if (dd == 0) {
                                            dd = 12;
                                            ap = "AM";
                                            ttd = monthh+' '+dd+':'+mnt+' '+ap;
                                          }
                                          if(parseInt(myIDs).toString(32) == fr)
                                          {
                                            $('.'+clsses).prepend('<div class="mch-000" title="Sent '+ttd+'">'
                                                   +'\n<div class="bw-wrr">'
                                                         +'\n<span>'+msg+'</span>'
                                                   +'\n</div>'
                                            +'\n</div>');
                                          } else {
                                            $('.'+clsses).prepend('<div class="mch-001" title="Received '+ttd+'">'
                                                   +'\n<div class="usrpt">'
                                                +'\n<img alt="user-img" height="35" width="35" class="img-circle" src="/assets/images/chat.jpg">'
                                                   +'\n</div>'
                                                   +'\n<div class="bw-wr">'
                                                +'\n<span>'+msg+'</span>'
                                                   +'\n</div>'
                                        +'\n</div>');
                                          }
                                          
                                        }
                                        if($i==data.msg.length) {
                                          if(data.msg.length ==0)
                                          {
                                            $('#loadr').remove();
                                          } else {
                                          $('.'+clsses).prepend('<div id="loadr" style="float:left; padding:10px; width:100%;"><div class="loaderch" style="margin: auto;"></div></div>');
                                          }
                                        }
                                      }, error: function(e) {
                                         $('#loadr').remove();
                                         $('.'+clsses).prepend('<div class="err-m2">'
                                                                +'\n<span>Something went wrong! Please click here to reload.</span></div>');

                                      }
                });
              //end here
                sclr=idf;
              }
          }
      }
      $(document).on('click', '.err-m2', function() {
        sclr =0;
        $('.'+reclass).prepend('<div id="loadr" style="float:left; padding:10px; height: 30px; width:100%;"><div class="loaderch" style="margin: auto;"></div></div>');
        $('.err-m2').remove();
        scrolling(reclass, reidf);
      });

     