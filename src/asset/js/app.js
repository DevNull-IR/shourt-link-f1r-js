    function view(array = {}){
      console.log(array);
      return array;
    }
    class f1r_js {
      constructor(token = "not"){
        if (token != "not"){
          this.token = token;
          let apis = "https://f1r.ir/api/v2/";
          this.api = apis;
        } else {
          console.warn("not found token");
        }
      }
      new_link(url,name = "rand") {
        $.post(this.api,{
          token:this.token,
          url:url,
          name:name
        })
        .then(
          res => {
            if (res['ok'] == true){
              if (res['description'] == "successful"){
                $("#code").html(res['result']['name']);
                $("#shourt").html(res['result']['link']);
                $("#status").html("<a href='"+res['result']['status']+"'>"+res['result']['status']+"</a>");
                $("#long").html("<a href='"+url+"'>"+url+"</a>");
              }
            }
            // console.log(res);
          }
        );
      }
      get_view(name = "host") {
        $.post(this.api+"status/",{
          token:this.token,
          name:name
        })
        .then(
          result => {
            if (result['ok'] == true){
              this.Last_visit = result['result']['Last_visit'];
              this.Real_hits = result['result']['Real_hits'];
              this.Redirect = result['result']['Redirect'];
              this.Visits_today = result['result']['Visits_today'];
              this.date_created = result['result']['date_created'];
              this.views = result['result']['views'];
              // this.array = {
              //   views:result['result']['views'],
              //   date_created:result['result']['date_created'],
              //   Visits_today:result['result']['Visits_today'],
              //   Redirect:result['result']['Redirect'],
              //   Real_hits:result['result']['Real_hits'],
              //   Last_visit:result['result']['Last_visit']
              // };
              $("#views").html(this.views);
              $("#date_created").html(this.date_created);
              $("#Last_visit").html(this.Last_visit);
              $("#Real_hits").html(this.Real_hits);
              $("#Redirect").html(this.Redirect);
              $("#Visits_today").html(this.Visits_today);
              
            }else {
              console.warn("error in api");
            }
          }
        );
      }
      getVIEW(){
        console.log(this.array);
        return this.array;
      }
    }
    let tokenSite = "*********"; // your token ( https://f1r.ir/panel )
    let f1r = new f1r_js(tokenSite);
    f1r.new_link("https://f1r.ir/demo.tests","rand");
    console.log(f1r.get_view("host"));
    console.log(f1r.getVIEW());
