# HtmlMap
Html map made easy (by Javascript) - MIT

<html>  
<head>  
<title>htmlmap</title>   

<script src="/js/htmlmap.js" ref="text/javascript"></script>   

</head>   
<body>   
   
<script>

//HtmlMap.createMap($name, $y, $x, $height, $width, $bg);
HtmlMap.createMap("numode", 0, 0, 500, 500, "url(/res/logot.png)");
//HtmlMap.createMap($name, $y (%), $x, $height, $width, link, target);
HtmlMap.addArea("area1", 0, 0, 50, 50, "http://numode.eu", "_blank" );
//HtmlMap.createMap($name, $y (%), $x, $height, $width, link, target);
HtmlMap.addArea("area2", 0, 50, 50, 50, "http://radxide.com", "_blank" );

</script>

</body>
</html>
