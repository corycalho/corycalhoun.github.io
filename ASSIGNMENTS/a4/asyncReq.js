<html>

<head>
<script src='https://code.jquery.com/jquery-3.1.1.min.js'> </script>

<style>
#list{
  position: absolute;
  left: 0px;
  width: 200px;
  background: rgba(0,0,0,.1);
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px;
}

#list a{
  text-decoration: none;
}


</style>
  <script src='asyncReq.js'></script>
  <script>




  var rssData = [];
    var filename = "./itunes.json";
    var callback = function(res){
      var data = JSON.parse(res).feed.entry;
      rssData = data;
      var markup = "";
      for(var i = 0; i < data.length; i++){
        var item = data[i];
        var thumbURL = item["im:image"][0].label
        markup += "<a href='javascript:itemSelected(" + i + ")'>" 
        + "<p>" + item["im:name"].label + "</p>"
        + "<i>" + item["im:vendorName"].label + "</i>"
         + "</a>"; 
      }

      document.getElementById("list").innerHTML = markup;
    }

    loadFile(filename, callback);
  </script>
  <base href="http://subtlepatterns.com" >
</head>

<body>
<h1> RSS Reader </h1>
<div id='list'> </div>

</body>


</html>
