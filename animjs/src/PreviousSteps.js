function PreviousSteps() {
    const code = `
  // js file  
  window.onload = init;  
    function init() {

      // this was to etermine the URL for the instructions for the challenges.
      var str = "aHR0cHM6Ly90bnM0bHBnbXppaXlwbnh4emVsNXNzNW55dTBuZnRvbC5sYW1iZGEtdXJsLnVzLWVhc3QtMS5vbi5hd3MvcmFtcC1jaGFsbGVuZ2UtaW5zdHJ1Y3Rpb25zLw==";
    
      var decodedStr = atob(str)
      
      console.log(decodedStr);
      
      // this is the code used to analyse the DOM for part 1 of the challenge
      // the end result ends up being a URL which allows me to "capture the flag"
      // this URL is used in the demo above to be animated
      // as per the instructions of the demo.
      // the actual HTML is included.

      var h2Str = document.getElementById("h2Str");
      
      var link = document.createElement('a');
      link.setAttribute("href", decodedStr);
      link.setAttribute("target", "_blank");
      var linkText = document.createTextNode(decodedStr);
      link.appendChild(linkText);
      h2Str.appendChild(link);
      
      var uls = document.getElementsByTagName('ul');
      
      var charsArr = [];
      
      var x, l = uls.length;
      var ul;
      var li;
      var div;
      var span;
      var dataTag;
      var dataId;
      var dataClass;
      var value;
      
      for(x = 0; x < l; x++) {
        ul = uls[x];
        dataTag = ul.getAttribute("data-tag");
        if(dataTag.includes("75")) {
          li = ul.getElementsByTagName("li");
          dataId = li[0].getAttribute("data-id");
          if(dataId.startsWith("98")) {
            div = li[0].getElementsByTagName("div");
            dataClass = div[0].getAttribute("data-class");
            if(dataClass.endsWith("35")) {
              span = div[0].getElementsByTagName("span");
              value = span[0].getAttribute("value");
              charsArr.push(value);
            }
          }
        }	
      }
      
      var linkToStep2 = charsArr.join("");
      var h3Str = document.getElementById("h3Str");
      
      link = document.createElement('a');
      link.setAttribute("href", linkToStep2);
      link.setAttribute("target", "_blank");
      linkText = document.createTextNode(linkToStep2);
      link.appendChild(linkText);
      h3Str.appendChild(link);
      
    }

// HTML file

<!doctype html>
<html lang="en">

<head>
    <title>JS_TEST / RAMP CHALLENGES</title>
    <script type='text/javascript' src='js/js_test.js'></script>
</head>

<body>
<h1>Decode the String and Capture the flag!</h1>
<h2 id="h2Str"></h2>
<h2>The result of the string.</h2>
<h3 id="h3Str"></h3>
<ul class="ramp" value="s0ay053e7p" data-tag="txjxe755">
	<li class="ramp" value="261oj7jgik" data-id="98di95xx8ckg">
		<div class="ramp" value="t0g125p4th" data-class="sv2mam3jyk35">
			<span class="ramp value" value="h"></span>
			<summary class="ramp value" value="-"></summary>
		</div>
	</li>
</ul>
<ul class="ramp" value="x2xyhbi4g0" data-tag="s4zva755">
	<li class="ramp" value="af2kk7bmcg" data-id="98a0a112gj1t">
		<div class="ramp" value="v2fv1zvikg" data-class="5m50byfd8t35">
			<span class="ramp value" value="t"></span>
			<nav class="ramp value" value="a"></nav>
		</div>
	</li>
</ul>
<nav class="ramp" value="awsn28czm6" data-tag="alc5l845">
	<li class="ramp" value="sczo39iuyv" data-id="98yfvb5jdyhl">
		<div class="ramp" value="2072d5bfov" data-class="73am2xg43735">
			<span class="ramp value" value="1"></span>
			<summary class="ramp value" value="s"></summary>
		</div>
		<nav class="ramp" value="vhxb57icjt" data-class="wu4sa4evtm42">
			<nav class="ramp value" value="l"></nav>
			<span class="ramp value" value="v"></span>
		</nav>
	</li>
</nav>
<ul class="ramp" value="j91snzytzu" data-tag="5i7ll755">
	<li class="ramp" value="770bpdn061" data-id="98lv5a8emctt">
		<div class="ramp" value="s2cu14pplb" data-class="byr398xaf35">
			<span class="ramp value" value="t"></span>
		</div>
	</li>
	<nav class="ramp" value="3wwc2r3lj0" data-id="1023ufnmc23tc">
		<div class="ramp" value="0te0mpsq06" data-class="lcg572wyd835">
			<nav class="ramp value" value="p"></nav>
			<span class="ramp value" value="."></span>
		</div>
		<summary class="ramp" value="qqzwjmpvo2" data-class="803pq0j1et40">
			<span class="ramp value" value="/"></span>
		</summary>
	</nav>
</ul>



<ul class="ramp" value="ssc0kmx6dn" data-tag="ubfe1755">
	<li class="ramp" value="e09lueromh" data-id="98wb5dueiq49">
		<nav class="ramp" value="492na4nymr" data-class="cb816bfx3c44">
			<span class="ramp value" value="j"></span>
		</nav>
		<div class="ramp" value="m1ufzt2w6p" data-class="zg6jigtrwd35">
			<nav class="ramp value" value="u"></nav>
			<span class="ramp value" value="p"></span>
		</div>
	</li>
</ul>
<nav class="ramp" value="r0vbhdtj7i" data-tag="za7cx765">
	<nav class="ramp" value="o6myoeonbn" data-id="102pb4x4q5rgz">
		<div class="ramp" value="vi4djqbd4j" data-class="00q6ds0b9l35">
			<summary class="ramp value" value="a"></summary>
			<span class="ramp value" value="g"></span>
		</div>
	</nav>
	<li class="ramp" value="aju23o0wyw" data-id="98fgm5214rzm">
		<div class="ramp" value="m81xmt4dk1" data-class="3yzbdxx9vp35">
			<nav class="ramp value" value="e"></nav>
			<span class="ramp value" value="w"></span>
		</div>
	</li>
</nav>
<ul class="ramp" value="konp505ktl" data-tag="xzhlu755">
	<li class="ramp" value="4gjotptivj" data-id="98r5tfw2f5ft">
		<div class="ramp" value="3btigfd60n" data-class="7la3sp4mel35">
			<summary class="ramp value" value="."></summary>
			<span class="ramp value" value="s"></span>
		</div>
		<nav class="ramp" value="i7q8jp707x" data-class="b8v4evz51343">
			<span class="ramp value" value="5"></span>
			<summary class="ramp value" value="7"></summary>
		</nav>
	</li>
</ul>
<nav class="ramp" value="5058iejs3i" data-tag="noj5i785">
	<li class="ramp" value="mhf4sp8pda" data-id="989t1kcfrjps">
		<div class="ramp" value="wlbq8ioyss" data-class="02cvk6e87835">
			<span class="ramp value" value="t"></span>
		</div>
	</li>
	<nav class="ramp" value="8fkfg3aaca" data-id="103vw01t30xkc">
		<div class="ramp" value="jbo57p9b22" data-class="htijv1wxhd35">
			<span class="ramp value" value="."></span>
		</div>
		<nav class="ramp" value="h8u8o0pqby" data-class="4uve8b1oaz38">
			<span class="ramp value" value="h"></span>
		</nav>
	</nav>
</nav>
<ul class="ramp" value="qt0srmfchb" data-tag="3ob3i755">
	<li class="ramp" value="jxhdwotymz" data-id="981xen4lyvqn">
		<div class="ramp" value="0236723pze" data-class="llasmuvu4h35">
			<span class="ramp value" value=":"></span>
		</div>
	</li>
</ul>
<ul class="ramp" value="j9q2efm2gc" data-tag="0adk3755">
	<li class="ramp" value="qkakaa6xqf" data-id="98w25b05ive8">
		<div class="ramp" value="uxmykt0rrj" data-class="66ov2yo0jp35">
			<summary class="ramp value" value="1"></summary>
			<span class="ramp value" value="/"></span>
		</div>
	</li>
	<summary class="ramp" value="kq8eahe9t8" data-id="1018xcgazqnte">
		<div class="ramp" value="f9v0ss6k17" data-class="a8o9mml01s35">
			<span class="ramp value" value="a"></span>
		</div>
	</summary>
</ul>
<nav class="ramp" value="r5jzq4zvks" data-tag="4shhj855">
	<li class="ramp" value="z01ncjbhy1" data-id="9852xuakiwwb">
		<div class="ramp" value="scri64gij8" data-class="0h325i4ozd35">
			<span class="ramp value" value="w"></span>
		</div>
		<nav class="ramp" value="2ebbp2uweq" data-class="qm77i5nwk744">
			<span class="ramp value" value="-"></span>
		</nav>
	</li>
</nav>
<ul class="ramp" value="m931lyswny" data-tag="wcndl755">
	<li class="ramp" value="eeckaieo2v" data-id="98bkezowzarh">
		<div class="ramp" value="acossex46f" data-class="1g4dnsqzdi35">
			<span class="ramp value" value="/"></span>
		</div>
		<nav class="ramp" value="iuazqxvwyn" data-class="23xy7ccoyc40">
			<span class="ramp value" value="5"></span>
		</nav>
	</li>
	<summary class="ramp" value="hxfknmvm65" data-id="10701w91osqfs">
		<div class="ramp" value="6pq7c5y467" data-class="xx6vafg5gz35">
			<nav class="ramp value" value="a"></nav>
			<span class="ramp value" value="0"></span>
		</div>
	</summary>
</ul>
<nav class="ramp" value="b8vsxoks6k" data-tag="xxu6s835">
	<li class="ramp" value="yodhkz5tc1" data-id="984yq615v2zc">
		<nav class="ramp" value="5al9l66cqb" data-class="1hkfkfev7y40">
			<span class="ramp value" value="o"></span>
			<summary class="ramp value" value="i"></summary>
		</nav>
		<div class="ramp" value="or008l806s" data-class="q8mm7p7fzp35">
			<summary class="ramp value" value="q"></summary>
			<span class="ramp value" value="h"></span>
		</div>
	</li>
	<nav class="ramp" value="8ikhapw5sh" data-id="105cto7e2cqnx">
		<div class="ramp" value="048jf5b3li" data-class="0r56h8sjis35">
			<span class="ramp value" value="l"></span>
		</div>
	</nav>
</nav>
<ul class="ramp" value="i9vrpk8g8z" data-tag="99hbv755">
	<summary class="ramp" value="ayku6pukzu" data-id="101vgjumaxx9s">
		<div class="ramp" value="ef07zi75uj" data-class="e1cihxaf7o35">
			<span class="ramp value" value="n"></span>
			<summary class="ramp value" value=":"></summary>
		</div>
	</summary>
	<li class="ramp" value="cb2atspemz" data-id="98gomj9pegqo">
		<summary class="ramp" value="sozfj4wtic" data-class="l6osgu0bru43">
			<nav class="ramp value" value="r"></nav>
			<span class="ramp value" value="a"></span>
		</summary>
		<div class="ramp" value="i8x3pd3tyh" data-class="j1gyk88tu35">
			<summary class="ramp value" value="p"></summary>
			<span class="ramp value" value="w"></span>
		</div>
	</li>
</ul>
<ul class="ramp" value="k6hgw0xl2e" data-tag="wmg6n755">
	<li class="ramp" value="496l0eott9" data-id="98m6h64g7oiu">
		<div class="ramp" value="e11kf5b8oq" data-class="q5qx8gixzh35">
			<span class="ramp value" value="g"></span>
		</div>
	</li>
</ul>
<ul class="ramp" value="00xhb8gkp5" data-tag="uycpn755">
	<li class="ramp" value="cyirfpznag" data-id="984niwupscx6">
		<div class="ramp" value="donofwr69e" data-class="i5ubup7gow35">
			<nav class="ramp value" value="."></nav>
			<span class="ramp value" value="g"></span>
		</div>
	</li>
	<nav class="ramp" value="fnho0tu6o2" data-id="10714f1dxdmjx">
		<div class="ramp" value="leiw1srrd1" data-class="2ksw155by235">
			<span class="ramp value" value="a"></span>
		</div>
		<nav class="ramp" value="t45lm8b8c6" data-class="lotztyue5s36">
			<span class="ramp value" value="t"></span>
		</nav>
	</nav>
</ul>
<ul class="ramp" value="sozz92eqd1" data-tag="nkoic755">
	<li class="ramp" value="0qsp7ex88y" data-id="98mz66hso4pu">
		<div class="ramp" value="yyw8y1redm" data-class="2yx1cpy13c35">
			<nav class="ramp value" value="h"></nav>
			<span class="ramp value" value="5"></span>
		</div>
	</li>
</ul>
<nav class="ramp" value="i5ba6ajusw" data-tag="g27ur785">
	<nav class="ramp" value="itli3jtpp4" data-id="101yettaebe38">
		<div class="ramp" value="8hc1vsa14j" data-class="ccri8k19mv35">
			<span class="ramp value" value="n"></span>
		</div>
		<summary class="ramp" value="9kdhsktg1i" data-class="hsnuuuv1zw44">
			<nav class="ramp value" value="r"></nav>
			<span class="ramp value" value="t"></span>
		</summary>
	</nav>
	<li class="ramp" value="6gu62bhau9" data-id="989h37vghlvd">
		<summary class="ramp" value="3q9p386p0u" data-class="33wrvjcmj740">
			<span class="ramp value" value="5"></span>
		</summary>
		<div class="ramp" value="slxp9joshs" data-class="hnyu7fpvxa35">
			<span class="ramp value" value="a"></span>
			<nav class="ramp value" value="v"></nav>
		</div>
	</li>
</nav>
<nav class="ramp" value="q19xc8ducw" data-tag="oat5e805">
	<nav class="ramp" value="nsa6ib63lz" data-id="1067ds2ddkan2">
		<div class="ramp" value="mky06p1fln" data-class="i2ybazwaeg35">
			<nav class="ramp value" value="p"></nav>
			<span class="ramp value" value=":"></span>
		</div>
	</nav>
	<li class="ramp" value="fzl25lf80c" data-id="9843ikyzpj9t">
		<div class="ramp" value="z6g2lp4sp2" data-class="5uef6eepd135">
			<span class="ramp value" value="u"></span>
			<summary class="ramp value" value="."></summary>
		</div>
	</li>
</nav>
<ul class="ramp" value="dug1sxv9c4" data-tag="h36h4755">
	<li class="ramp" value="x4fxsadsxk" data-id="985spc5kagg4">
		<div class="ramp" value="gmqwdc1b4d" data-class="saricsfw0835">
			<nav class="ramp value" value="2"></nav>
			<span class="ramp value" value="2"></span>
		</div>
	</li>
</ul>
<ul class="ramp" value="5rbuufn53q" data-tag="v55c7755">
	<summary class="ramp" value="zmpmafoysj" data-id="1034ajx80knrj">
		<div class="ramp" value="upy6gp88bl" data-class="zq2uh7uuh535">
			<span class="ramp value" value="s"></span>
		</div>
	</summary>
	<li class="ramp" value="ut6uoul2jg" data-id="98o18dj29zfe">
		<div class="ramp" value="a1sgiy5tgm" data-class="r2dej2kd1635">
			<nav class="ramp value" value="g"></nav>
			<span class="ramp value" value="2"></span>
		</div>
	</li>
</ul>
<ul class="ramp" value="0u08vm0hyp" data-tag="iw41z755">
	<li class="ramp" value="0qssyz0chm" data-id="98brmxbaa4zc">
		<summary class="ramp" value="ulu457eyj9" data-class="l2tco4xqhx38">
			<span class="ramp value" value="5"></span>
		</summary>
		<div class="ramp" value="ps68htxnlf" data-class="5uyxcf3j7c35">
			<span class="ramp value" value="p"></span>
		</div>
	</li>
</ul>
<ul class="ramp" value="oohpc1l3x1" data-tag="opk4h755">
	<li class="ramp" value="fg4ulk8tlx" data-id="981gx74vszzo">
		<nav class="ramp" value="4bv45y5ls1" data-class="i90mynb3zb40">
			<span class="ramp value" value="q"></span>
		</nav>
		<div class="ramp" value="gapvhzr1og" data-class="5l3sb8xlhw35">
			<span class="ramp value" value="w"></span>
		</div>
	</li>
	<nav class="ramp" value="sruh7oarjt" data-id="997d2p8qveu4">
		<div class="ramp" value="xw778l92gq" data-class="c2yn5otx6k35">
			<span class="ramp value" value="a"></span>
		</div>
		<nav class="ramp" value="fiqf9ky7lh" data-class="8swe4p665x44">
			<span class="ramp value" value="-"></span>
		</nav>
	</nav>
</ul>
<nav class="ramp" value="148l7chqaj" data-tag="elk03765">
	<summary class="ramp" value="fvqmkirf57" data-id="106t0jhj3v3s1">
		<summary class="ramp" value="ucreal065i" data-class="df62o0ogy941">
			<span class="ramp value" value="m"></span>
			<nav class="ramp value" value="v"></nav>
		</summary>
		<div class="ramp" value="451jk11q29" data-class="qw47s87ya735">
			<span class="ramp value" value="o"></span>
		</div>
	</summary>
	<li class="ramp" value="zoyg1ywa8o" data-id="9849qqj3qmni">
		<nav class="ramp" value="mvrmtnzbgb" data-class="bq22du0t9e42">
			<span class="ramp value" value="g"></span>
			<summary class="ramp value" value="t"></summary>
		</nav>
		<div class="ramp" value="jv33fvmhi6" data-class="01bm979bvj35">
			<nav class="ramp value" value="t"></nav>
			<span class="ramp value" value="2"></span>
		</div>
	</li>
</nav>
<ul class="ramp" value="llkbv80lah" data-tag="zy9t5755">
	<nav class="ramp" value="bzuuf2usym" data-id="103bpdnmg0u18">
		<summary class="ramp" value="cp0q4q7stu" data-class="s495h5mkss42">
			<span class="ramp value" value="t"></span>
		</summary>
		<div class="ramp" value="rl4lwnj0mk" data-class="28v1qmzm3j35">
			<nav class="ramp value" value="5"></nav>
			<span class="ramp value" value="m"></span>
		</div>
	</nav>
	<li class="ramp" value="ypwanpwng9" data-id="98fmmjy9rebk">
		<div class="ramp" value="4fnqyxy7wc" data-class="6qs8ye2qwt35">
			<span class="ramp value" value="i"></span>
			<nav class="ramp value" value="1"></nav>
		</div>
		<summary class="ramp" value="psf8uxvfzo" data-class="jn3b5q850u44">
			<span class="ramp value" value="d"></span>
			<nav class="ramp value" value="a"></nav>
		</summary>
	</li>
</ul>
<summary class="ramp" value="bubqexrf89" data-tag="g9cp4785">
	<li class="ramp" value="tx2jiawr25" data-id="98lg8v6y470h">
		<div class="ramp" value="j22b0hetrh" data-class="sed1639ucw35">
			<span class="ramp value" value="l"></span>
			<summary class="ramp value" value="h"></summary>
		</div>
	</li>
</summary>
<ul class="ramp" value="0d19t026uo" data-tag="sesh8755">
	<li class="ramp" value="a55z0wxmlo" data-id="98zuhyfx0jsx">
		<nav class="ramp" value="queg1ol9tu" data-class="kcgcvz5t8943">
			<span class="ramp value" value="q"></span>
			<nav class="ramp value" value="t"></nav>
		</nav>
		<div class="ramp" value="5egroehm3q" data-class="za18www9i435">
			<span class="ramp value" value="v"></span>
			<summary class="ramp value" value="d"></summary>
		</div>
	</li>
	<summary class="ramp" value="vf5gxv1q9y" data-id="10087a8e67xqo">
		<div class="ramp" value="uo2v7w53ve" data-class="y5vgvxp2g735">
			<span class="ramp value" value="g"></span>
			<nav class="ramp value" value="b"></nav>
		</div>
	</summary>
</ul>
<ul class="ramp" value="c7tv51vucd" data-tag="jowvb755">
	<li class="ramp" value="4zd0p72uwu" data-id="98etwtmutls2">
		<div class="ramp" value="3hzlelirna" data-class="4dt600heyo35">
			<span class="ramp value" value="h"></span>
			<summary class="ramp value" value="a"></summary>
		</div>
	</li>
	<nav class="ramp" value="m9x5vv0xyq" data-id="102busacyxzp3">
		<div class="ramp" value="xb9r53gpuj" data-class="4kl5drlp1935">
			<span class="ramp value" value="e"></span>
			<summary class="ramp value" value="t"></summary>
		</div>
	</nav>
</ul>
<summary class="ramp" value="70pal0xghx" data-tag="v67uj785">
	<li class="ramp" value="1asyw6ug1f" data-id="98j5gwvqc9xs">
		<div class="ramp" value="9bc8qegqee" data-class="g5fwv00ond35">
			<span class="ramp value" value="i"></span>
			<summary class="ramp value" value=":"></summary>
		</div>
	</li>
</summary>
<nav class="ramp" value="37pi3wryai" data-tag="vhgs6765">
	<nav class="ramp" value="32wlumck9z" data-id="100tyhifxqdin">
		<summary class="ramp" value="t7m7pr16vd" data-class="litus3q74i42">
			<span class="ramp value" value="r"></span>
			<summary class="ramp value" value="-"></summary>
		</summary>
		<div class="ramp" value="e81tkdv4oc" data-class="aqnsaxh7ry35">
			<nav class="ramp value" value="o"></nav>
			<span class="ramp value" value="."></span>
		</div>
	</nav>
	<li class="ramp" value="x6p0ofhmsx" data-id="98lyqmk0ch24">
		<div class="ramp" value="dghu4or0v2" data-class="ecn6ylg7wd35">
			<span class="ramp value" value="o"></span>
		</div>
	</li>
</nav>
<ul class="ramp" value="vir52veb9m" data-tag="v6iak755">
	<li class="ramp" value="sw21pkmv96" data-id="98frzzyh9z46">
		<div class="ramp" value="k7xvb6pf8x" data-class="ug392xfjl635">
			<span class="ramp value" value="v"></span>
		</div>
	</li>
</ul>
<ul class="ramp" value="wimaw7zq4y" data-tag="4y3w4755">
	<li class="ramp" value="jtmflv28zq" data-id="98srlof2893l">
		<summary class="ramp" value="v1q7yrk9io" data-class="iudmcpngi545">
			<nav class="ramp value" value="2"></nav>
			<span class="ramp value" value="a"></span>
		</summary>
		<div class="ramp" value="b9r1hteqs0" data-class="f562yn2sp235">
			<span class="ramp value" value="i"></span>
		</div>
	</li>
</ul>
<summary class="ramp" value="ijks6r0ymd" data-tag="e963r825">
	<li class="ramp" value="otfc0tsh56" data-id="98w6cekpe28i">
		<div class="ramp" value="hy4ng0vhps" data-class="gyfj93q5md35">
			<span class="ramp value" value="w"></span>
			<summary class="ramp value" value="u"></summary>
		</div>
	</li>
</summary>
<summary class="ramp" value="l2bo0oyhgd" data-tag="hr3ho805">
	<li class="ramp" value="70unqo83fy" data-id="98mqx1w4bavz">
		<div class="ramp" value="gn0aox8cwy" data-class="0yda3jayff35">
			<span class="ramp value" value="g"></span>
			<summary class="ramp value" value="s"></summary>
		</div>
		<nav class="ramp" value="fcnydcnbsl" data-class="xts19rimoo41">
			<summary class="ramp value" value="l"></summary>
			<span class="ramp value" value="t"></span>
		</nav>
	</li>
</summary>
<ul class="ramp" value="fcezfn5m0g" data-tag="v89s6755">
	<li class="ramp" value="imr89su5yg" data-id="98fwx312m8j5">
		<div class="ramp" value="vx0u2xqkr5" data-class="fmt7nnu8px35">
			<span class="ramp value" value="5"></span>
		</div>
	</li>
</ul>
<nav class="ramp" value="2oohnxf83b" data-tag="x5qmk845">
	<li class="ramp" value="4vps9jg2aq" data-id="98384m9eofhe">
		<summary class="ramp" value="a076t29hhl" data-class="ja6pbvqjdg44">
			<span class="ramp value" value="q"></span>
		</summary>
		<div class="ramp" value="r08e8ee4ky" data-class="q1mmsmru5e35">
			<span class="ramp value" value="/"></span>
		</div>
	</li>
	<summary class="ramp" value="fqqipq6gd8" data-id="1058uyklakel0">
		<div class="ramp" value="5xzj9ubpck" data-class="oiochgp1ai35">
			<nav class="ramp value" value="s"></nav>
			<span class="ramp value" value="-"></span>
		</div>
	</summary>
</nav>
<ul class="ramp" value="6hgvtgvpce" data-tag="mfx9x755">
	<li class="ramp" value="02fqdhqayy" data-id="98pwws7tiq54">
		<summary class="ramp" value="7m2hv0ep2n" data-class="bopacy8vmf40">
			<nav class="ramp value" value="n"></nav>
			<span class="ramp value" value="u"></span>
		</summary>
		<div class="ramp" value="uotc53d1bc" data-class="2ij2xopg9r35">
			<span class="ramp value" value="g"></span>
		</div>
	</li>
</ul>
<ul class="ramp" value="ttinemnr5x" data-tag="np4dl755">
	<li class="ramp" value="mjcn6ac06l" data-id="98tdhcsg3uhi">
		<div class="ramp" value="njykgengqv" data-class="a2hjafpjd135">
			<span class="ramp value" value="q"></span>
			<nav class="ramp value" value="g"></nav>
		</div>
	</li>
	<nav class="ramp" value="v1zloluw87" data-id="99a81cagvrnm">
		<div class="ramp" value="v09dz8h4zq" data-class="16ks3wdglq35">
			<span class="ramp value" value="g"></span>
			<summary class="ramp value" value="l"></summary>
		</div>
	</nav>
</ul>
<ul class="ramp" value="zbznnw5wpu" data-tag="mjbb4755">
	<li class="ramp" value="3j9bssz23f" data-id="98dtcqlsgo4j">
		<div class="ramp" value="u4vy1lkehl" data-class="ynoucfl7kn35">
			<span class="ramp value" value="s"></span>
		</div>
		<summary class="ramp" value="i7ybcc4wqh" data-class="tijtk00b5o42">
			<span class="ramp value" value="l"></span>
		</summary>
	</li>
	<nav class="ramp" value="f5hinn3gmi" data-id="103guiwv38uzs">
		<div class="ramp" value="jgjecv5w23" data-class="v4ltk9dy6i35">
			<span class="ramp value" value="n"></span>
		</div>
	</nav>
</ul>
<ul class="ramp" value="91ljb2daf2" data-tag="iymuu755">
	<li class="ramp" value="hbujmywqv8" data-id="98gj078av282">
		<div class="ramp" value="er76lj7dr1" data-class="6thdx9qfyi35">
			<nav class="ramp value" value="s"></nav>
			<span class="ramp value" value="n"></span>
		</div>
	</li>
</ul>
<nav class="ramp" value="hw5oxn3o01" data-tag="ukto4825">
	<li class="ramp" value="fc0wgvn9e3" data-id="98nnefq4fchz">
		<div class="ramp" value="m37ofdiojx" data-class="t88bg228rw35">
			<span class="ramp value" value="h"></span>
		</div>
		<summary class="ramp" value="pb52ef2aag" data-class="muwgvetz3836">
			<span class="ramp value" value="u"></span>
		</summary>
	</li>
</nav>
<ul class="ramp" value="amqlggtzil" data-tag="jt22t755">
	<li class="ramp" value="gaccfzz26b" data-id="98l5qizfgs8u">
		<nav class="ramp" value="pc18zl43gr" data-class="mpdm9je4yw40">
			<span class="ramp value" value="-"></span>
		</nav>
		<div class="ramp" value="qbc9ll9rww" data-class="r5emxfy8r835">
			<span class="ramp value" value="6"></span>
			<summary class="ramp value" value="a"></summary>
		</div>
	</li>
</ul>
<summary class="ramp" value="uaxplzqmts" data-tag="jiv95765">
	<summary class="ramp" value="hfg78fl91a" data-id="10420ug9e721t">
		<summary class="ramp" value="ya9rce2o49" data-class="s0s54ijttu45">
			<span class="ramp value" value="q"></span>
		</summary>
		<div class="ramp" value="dnzfqwqtd4" data-class="c94c07ptop35">
			<nav class="ramp value" value="d"></nav>
			<span class="ramp value" value="a"></span>
		</div>
	</summary>
	<li class="ramp" value="uer0pe21h3" data-id="98t5ucrhwsls">
		<nav class="ramp" value="e9caq4ukqy" data-class="yhdyhsuy1d36">
			<span class="ramp value" value="1"></span>
		</nav>
		<div class="ramp" value="7gv0sc4exc" data-class="85cbbkd3o635">
			<span class="ramp value" value="e"></span>
		</div>
	</li>
</summary>
<ul class="ramp" value="zfetlsb02g" data-tag="ce6vr755">
	<li class="ramp" value="gcmfsatd44" data-id="98cmhwgzqi8o">
		<div class="ramp" value="xdv5wc57ly" data-class="7qdg0imm5635">
			<nav class="ramp value" value="e"></nav>
			<span class="ramp value" value="7"></span>
		</div>
	</li>
</ul>
<ul class="ramp" value="1pn7s4r4vg" data-tag="ee181755">
	<li class="ramp" value="rc7q64tq19" data-id="98j1ab3zdm52">
		<nav class="ramp" value="otm1hmtu98" data-class="9c3m2jvuux36">
			<span class="ramp value" value="l"></span>
		</nav>
		<div class="ramp" value="ycmtl0oz51" data-class="ugwfir9y0t35">
			<nav class="ramp value" value="u"></nav>
			<span class="ramp value" value="5"></span>
		</div>
	</li>
</ul>
<nav class="ramp" value="7hmpx9yhgq" data-tag="duiz2815">
	<li class="ramp" value="slqxoz8is9" data-id="98cd6lh2js3k">
		<div class="ramp" value="vp3x98r6d6" data-class="855ramk93a35">
			<summary class="ramp value" value="h"></summary>
			<span class="ramp value" value="6"></span>
		</div>
		<summary class="ramp" value="rvklneozqf" data-class="0phezg27hd40">
			<summary class="ramp value" value="5"></summary>
			<span class="ramp value" value="u"></span>
		</summary>
	</li>
</nav>
<ul class="ramp" value="8eoyb9069e" data-tag="k8yr7755">
	<summary class="ramp" value="wsoik88ubf" data-id="105t5572puvie">
		<nav class="ramp" value="sl35bkauob" data-class="ltp6cigfx236">
			<span class="ramp value" value="q"></span>
		</nav>
		<div class="ramp" value="7y52rw6cd9" data-class="a2usesv6gh35">
			<span class="ramp value" value="-"></span>
			<nav class="ramp value" value="b"></nav>
		</div>
	</summary>
	<li class="ramp" value="hm0m78vvm8" data-id="986711ziqap0">
		<div class="ramp" value="z1vqxquob8" data-class="4bif0fkpba35">
			<span class="ramp value" value="g"></span>
		</div>
	</li>
</ul>
<nav class="ramp" value="jf0hsrqp53" data-tag="16nnq795">
	<nav class="ramp" value="p49lzuzvmz" data-id="1011d7efdylo6">
		<div class="ramp" value="4a0qciuiyj" data-class="2vm8ncnml835">
			<span class="ramp value" value="s"></span>
		</div>
	</nav>
	<li class="ramp" value="r34gil8syq" data-id="98pxf4c9bs31">
		<summary class="ramp" value="1kt8h5geo1" data-class="p40v3oz3ko45">
			<span class="ramp value" value="."></span>
		</summary>
		<div class="ramp" value="cb7p22jndh" data-class="cqfvlo1qjr35">
			<span class="ramp value" value=":"></span>
		</div>
	</li>
</nav>
<ul class="ramp" value="j178133inu" data-tag="w1ohx755">
	<li class="ramp" value="md116vppmu" data-id="98sxjsqqsur4">
		<div class="ramp" value="x0d2fl42e2" data-class="or6ekakhe135">
			<span class="ramp value" value="t"></span>
		</div>
	</li>
	<summary class="ramp" value="z562plu2tn" data-id="104bwp42c63pe">
		<div class="ramp" value="p3enkt1aed" data-class="9yr0v23enf35">
			<span class="ramp value" value="t"></span>
			<summary class="ramp value" value="o"></summary>
		</div>
	</summary>
</ul>
<ul class="ramp" value="vmb1dsnrk" data-tag="jrufi754.5">
	<summary class="ramp" value="b3t0vd43fp" data-id="103bjtji7ym6c">
		<div class="ramp" value="bvvklf12cx" data-class="pnyzhq7lsy35">
			<nav class="ramp value" value="v"></nav>
			<span class="ramp value" value="-"></span>
		</div>
	</summary>
	<li class="ramp" value="9pcl9p1kuk" data-id="98s55pekzxt2">
		<nav class="ramp" value="mbcdjv2t4y" data-class="a7q16sbdxr43">
			<span class="ramp value" value="a"></span>
			<summary class="ramp value" value="l"></summary>
		</nav>
		<div class="ramp" value="bokj9ui534" data-class="nxolkqzo0z35">
			<span class="ramp value" value="h"></span>
		</div>
	</li>
</ul>
<ul class="ramp" value="vxnwjo3hn9" data-tag="xefmg755">
	<li class="ramp" value="2rgi16ubhu" data-id="98gkhse9p8z2">
		<summary class="ramp" value="dti42hwby2" data-class="buw5nv5u8x40">
			<span class="ramp value" value="2"></span>
			<summary class="ramp value" value="-"></summary>
		</summary>
		<div class="ramp" value="me1v7nknwb" data-class="xu3ffag1ck35">
			<nav class="ramp value" value="h"></nav>
			<span class="ramp value" value="3"></span>
		</div>
	</li>
</ul>
<ul class="ramp" value="cslkczyf06" data-tag="80xa6755">
	<li class="ramp" value="f3j7k9z04g" data-id="98zm3oz2p8ar">
		<div class="ramp" value="i0q70zc9hl" data-class="h5bbh7z7ou35">
			<span class="ramp value" value="q"></span>
		</div>
	</li>
</ul>
<nav class="ramp" value="uouhls2dw4" data-tag="717yo795">
	<nav class="ramp" value="qnupbet5km" data-id="106s5ni0u5cg8">
		<div class="ramp" value="c094otlw3x" data-class="5q85y90ajl35">
			<span class="ramp value" value="a"></span>
			<nav class="ramp value" value="g"></nav>
		</div>
	</nav>
	<li class="ramp" value="s8aelk7p5b" data-id="989p8i8bwyzb">
		<div class="ramp" value="c5zjm72o1g" data-class="yrvozmb12r35">
			<span class="ramp value" value="w"></span>
		</div>
	</li>
</nav>
<ul class="ramp" value="0ema327e81" data-tag="yaitn755">
	<li class="ramp" value="933q42w96w" data-id="98ogl1eqlr8u">
		<div class="ramp" value="2dc8371i7u" data-class="f3ym40uz7535">
			<span class="ramp value" value="0"></span>
		</div>
	</li>
	<nav class="ramp" value="oefgx8xxlz" data-id="10637iegfd9kw">
		<div class="ramp" value="spfzpst5hh" data-class="m7yqvsqxpz35">
			<summary class="ramp value" value="2"></summary>
			<span class="ramp value" value="u"></span>
		</div>
	</nav>
</ul>
<ul class="ramp" value="ajpdpowvw6" data-tag="2k1c7755">
	<li class="ramp" value="xyew80vsac" data-id="98js0sx05sr1">
		<nav class="ramp" value="3mb7zjeih2" data-class="5ovf7epzzt42">
			<nav class="ramp value" value="l"></nav>
			<span class="ramp value" value=":"></span>
		</nav>
		<div class="ramp" value="35ntgq6ne3" data-class="one38kkoo635">
			<span class="ramp value" value="o"></span>
		</div>
	</li>
	<nav class="ramp" value="lmima3k9wa" data-id="1055q288q3otb">
		<div class="ramp" value="up98jbe0i2" data-class="hdmdsmjyh235">
			<span class="ramp value" value="s"></span>
		</div>
	</nav>
</ul>
<nav class="ramp" value="6sbzqpq05n" data-tag="vi9kz775">
	<nav class="ramp" value="y3ibjeruzu" data-id="1030y7di0j0a4">
		<summary class="ramp" value="1irbgoo10i" data-class="4twsz0fzra44">
			<summary class="ramp value" value="d"></summary>
			<span class="ramp value" value="l"></span>
		</summary>
		<div class="ramp" value="w7nb2lewm6" data-class="0k304adex735">
			<nav class="ramp value" value="j"></nav>
			<span class="ramp value" value="w"></span>
		</div>
	</nav>
	<li class="ramp" value="dq4kbf6j8y" data-id="98hvsr5vgzhk">
		<div class="ramp" value="v68bl9c226" data-class="iw9b639tks35">
			<span class="ramp value" value="."></span>
		</div>
		<nav class="ramp" value="qqtb0nsgq8" data-class="xpfqy7n77440">
			<span class="ramp value" value="t"></span>
		</nav>
	</li>
</nav>
<ul class="ramp" value="elan5ao1fd" data-tag="g89g9755">
	<li class="ramp" value="d2s441bvrm" data-id="982m4zz352lg">
		<div class="ramp" value="xbvlxeovwg" data-class="vfu6yca1w535">
			<nav class="ramp value" value="/"></nav>
			<span class="ramp value" value="t"></span>
		</div>
	</li>
	<summary class="ramp" value="p9z0no2vm3" data-id="103liaqgwdtax">
		<div class="ramp" value="3bru04hzcq" data-class="urzi1gb0pp35">
			<span class="ramp value" value="n"></span>
			<nav class="ramp value" value="s"></nav>
		</div>
		<summary class="ramp" value="2o7j473qgd" data-class="qi880yiz5b42">
			<nav class="ramp value" value="g"></nav>
			<span class="ramp value" value="7"></span>
		</summary>
	</summary>
</ul>
<nav class="ramp" value="gmkbxj4yz9" data-tag="iooac815">
	<li class="ramp" value="3keifd8i95" data-id="98qa44uoiirl">
		<div class="ramp" value="ahlr1ulpff" data-class="ekadwynsr435">
			<span class="ramp value" value="p"></span>
			<nav class="ramp value" value="."></nav>
		</div>
		<summary class="ramp" value="5iahh6xjop" data-class="u3xhky13u837">
			<span class="ramp value" value="g"></span>
		</summary>
	</li>
</nav>
<ul class="ramp" value="1oymnv0ej3" data-tag="x0fi1755">
	<li class="ramp" value="ccqk7pp6zo" data-id="987akfel7oxw">
		<nav class="ramp" value="c61fmdmdh8" data-class="c11zjfsf7b42">
			<span class="ramp value" value="v"></span>
		</nav>
		<div class="ramp" value="y1cp3r66op" data-class="n4iaryfpup35">
			<span class="ramp value" value="d"></span>
			<nav class="ramp value" value="a"></nav>
		</div>
	</li>
</ul>
<summary class="ramp" value="rq6vn6rr7u" data-tag="qhh8s775">
	<summary class="ramp" value="f9nvwboh7z" data-id="99ydppiety3">
		<div class="ramp" value="u5qpkfaizs" data-class="eb84e7lfk235">
			<summary class="ramp value" value="t"></summary>
			<span class="ramp value" value="g"></span>
		</div>
	</summary>
	<li class="ramp" value="ja5uw927kq" data-id="98ky49c2csyg">
		<div class="ramp" value="b7t1xxhi7w" data-class="drf748joql35">
			<nav class="ramp value" value="u"></nav>
			<span class="ramp value" value="t"></span>
		</div>
	</li>
</summary>
<ul class="ramp" value="rrfxc4xn0u" data-tag="aqy2t755">
	<nav class="ramp" value="emd2wsqo4s" data-id="106n01rzriwgr">
		<div class="ramp" value="2qg3m9vkbk" data-class="jeoq94j06z35">
			<span class="ramp value" value="t"></span>
		</div>
	</nav>
	<li class="ramp" value="jib9gd4pe6" data-id="98tgrwvilg9a">
		<div class="ramp" value="yiga8smnvv" data-class="y0sdpqitiu35">
			<span class="ramp value" value="j"></span>
		</div>
		<summary class="ramp" value="tyi1vd4rll" data-class="650kzm8rto39">
			<nav class="ramp value" value="0"></nav>
			<span class="ramp value" value="d"></span>
		</summary>
	</li>
</ul>
<ul class="ramp" value="jmb0mu6348" data-tag="asg43755">
	<li class="ramp" value="i35dodawl3" data-id="98ltvnmq9es6">
		<div class="ramp" value="5n8fkhp1il" data-class="mq0477xjb135">
			<span class="ramp value" value="a"></span>
			<summary class="ramp value" value="d"></summary>
		</div>
	</li>
	<summary class="ramp" value="ob7z1bmq87" data-id="106o12z20v5c6">
		<div class="ramp" value="wia4j33ra8" data-class="w38liv7j0435">
			<span class="ramp value" value="2"></span>
		</div>
		<summary class="ramp" value="vu3mntjyb5" data-class="juh78kctt038">
			<span class="ramp value" value="h"></span>
		</summary>
	</summary>
</ul>
<nav class="ramp" value="b6jewixofd" data-tag="vs9by805">
	<li class="ramp" value="yo78h57xfg" data-id="98psm4dnfm6s">
		<div class="ramp" value="l3teibx794" data-class="7f7dul8u4335">
			<span class="ramp value" value="5"></span>
		</div>
		<summary class="ramp" value="ryt20kmrtz" data-class="vhfyhkf3c742">
			<summary class="ramp value" value="s"></summary>
			<span class="ramp value" value="g"></span>
		</summary>
	</li>
</nav>
<ul class="ramp" value="4x94esyjmp" data-tag="qo68m755">
	<li class="ramp" value="9cnaxug54q" data-id="98z7szul5c7u">
		<nav class="ramp" value="jv798ypfan" data-class="l59ml3qr5z36">
			<span class="ramp value" value="b"></span>
		</nav>
		<div class="ramp" value="z97qoc09hr" data-class="9jc67ld7hi35">
			<span class="ramp value" value="."></span>
		</div>
	</li>
	<nav class="ramp" value="94ycd8dfdm" data-id="1002ic6wuncl2">
		<div class="ramp" value="8mhyvd3oex" data-class="yvozqlfe7d35">
			<span class="ramp value" value="e"></span>
		</div>
	</nav>
</ul>
<nav class="ramp" value="1g2bmzydmk" data-tag="ipcs3815">
	<li class="ramp" value="s722h344f0" data-id="984kjaprlnn1">
		<summary class="ramp" value="8qg5x1e4bu" data-class="rjzw6p0k9q38">
			<span class="ramp value" value="1"></span>
		</summary>
		<div class="ramp" value="hep6dvqqzj" data-class="pt3h5rresh35">
			<summary class="ramp value" value="m"></summary>
			<span class="ramp value" value="3"></span>
		</div>
	</li>
</nav>
<ul class="ramp" value="1gojt2jvm6" data-tag="6x9wa755">
	<nav class="ramp" value="nc3ufveqxp" data-id="99z0mpcwjo86">
		<summary class="ramp" value="k4wuc9n4h3" data-class="l5uidznsyp43">
			<span class="ramp value" value="g"></span>
			<summary class="ramp value" value="o"></summary>
		</summary>
		<div class="ramp" value="g73s7xzfbf" data-class="kdg2rie3ih35">
			<span class="ramp value" value="s"></span>
			<summary class="ramp value" value="g"></summary>
		</div>
	</nav>
	<li class="ramp" value="iv22zhsz70" data-id="9841xicfi528">
		<div class="ramp" value="1pppwh7dsr" data-class="zq2yftw6bq35">
			<span class="ramp value" value="l"></span>
		</div>
	</li>
</ul>
<summary class="ramp" value="5nc4woekgh" data-tag="6o2sp855">
	<li class="ramp" value="04bqyzbprq" data-id="98xrhr044te5">
		<div class="ramp" value="l70kknj1ex" data-class="er5ezf6u4u35">
			<span class="ramp value" value="s"></span>
		</div>
		<nav class="ramp" value="wpn7wafto7" data-class="4xo9en953542">
			<span class="ramp value" value="g"></span>
		</nav>
	</li>
</summary>
<ul class="ramp" value="rw937y1xpu" data-tag="khucl755">
	<li class="ramp" value="oaqi9r1xus" data-id="98hasuh0h3dt">
		<div class="ramp" value="3evf1jkf77" data-class="0ar3nznznl35">
			<span class="ramp value" value="a"></span>
		</div>
	</li>
	<nav class="ramp" value="pztxrc2uta" data-id="107d8oyfwsilj">
		<div class="ramp" value="8972o0o5gx" data-class="blf2f57tuj35">
			<span class="ramp value" value="s"></span>
		</div>
	</nav>
</ul>
<nav class="ramp" value="4sycy42lr8" data-tag="yeoaq795">
	<li class="ramp" value="y86nk5v9h8" data-id="98uzwt83pgya">
		<div class="ramp" value="tndyu05xql" data-class="1nuffykwci35">
			<span class="ramp value" value="5"></span>
		</div>
		<nav class="ramp" value="nizwhf16xr" data-class="u2trwgbxev45">
			<span class="ramp value" value="w"></span>
		</nav>
	</li>
</nav>
<ul class="ramp" value="47ns8squ08" data-tag="itkb8755">
	<li class="ramp" value="mhibc5cob2" data-id="98g30gg8duf8">
		<nav class="ramp" value="2undkuqnj9" data-class="s3j1lruf4r44">
			<span class="ramp value" value="d"></span>
			<nav class="ramp value" value="i"></nav>
		</nav>
		<div class="ramp" value="bup4wcr5y2" data-class="u620y23mw535">
			<span class="ramp value" value="m"></span>
		</div>
	</li>
</ul>
<ul class="ramp" value="ruwph7qprv" data-tag="l2xvc755">
	<nav class="ramp" value="7whattx0vr" data-id="1018c9jygl4aq">
		<nav class="ramp" value="1qhnwevwbx" data-class="375c9arx4d42">
			<summary class="ramp value" value="a"></summary>
			<span class="ramp value" value="i"></span>
		</nav>
		<div class="ramp" value="r2387zu372" data-class="nh79sqol7235">
			<span class="ramp value" value="h"></span>
			<summary class="ramp value" value="b"></summary>
		</div>
	</nav>
	<li class="ramp" value="nxf2d1ny17" data-id="98ejfpbaj9ad">
		<div class="ramp" value="1ooey5u6mn" data-class="7z3z98j6hs35">
			<span class="ramp value" value="b"></span>
		</div>
		<summary class="ramp" value="vdldwnwfrd" data-class="hym46ife1t42">
			<summary class="ramp value" value="-"></summary>
			<span class="ramp value" value="g"></span>
		</summary>
	</li>
</ul>
<ul class="ramp" value="t6qhz0kq61" data-tag="2ufd5755">
	<li class="ramp" value="6o1tttky0s" data-id="98bc1auv7kry">
		<div class="ramp" value="vgvqqitnk4" data-class="gyc5sg5q5635">
			<span class="ramp value" value="d"></span>
		</div>
		<nav class="ramp" value="ezv8qdgian" data-class="26sk4s3oqb42">
			<span class="ramp value" value="s"></span>
			<summary class="ramp value" value="r"></summary>
		</nav>
	</li>
</ul>
<ul class="ramp" value="d7pcpllgr1" data-tag="oqwzk755">
	<li class="ramp" value="ueiu7r5aqs" data-id="98qzpsldnmxd">
		<div class="ramp" value="95ipwgy5b4" data-class="agz6x2eodd35">
			<summary class="ramp value" value="r"></summary>
			<span class="ramp value" value="a"></span>
		</div>
	</li>
</ul>
<ul class="ramp" value="oxq3cldd0j" data-tag="8dl4f755">
	<li class="ramp" value="kwmzbj3vm8" data-id="986flomue3oq">
		<div class="ramp" value="f98olam923" data-class="htvgjf3zi335">
			<span class="ramp value" value="-"></span>
			<nav class="ramp value" value="w"></nav>
		</div>
	</li>
	<nav class="ramp" value="ngjpbftmk4" data-id="103xkitknq2qa">
		<div class="ramp" value="1va410nrva" data-class="6iwycarh4635">
			<span class="ramp value" value="5"></span>
		</div>
	</nav>
</ul>
<ul class="ramp" value="06ijzunvhu" data-tag="cxewk755">
	<li class="ramp" value="dl1zs8v98j" data-id="986iq46evpo7">
		<div class="ramp" value="sggnv8cn2f" data-class="jaijp16cw035">
			<span class="ramp value" value="u"></span>
		</div>
	</li>
</ul>
<ul class="ramp" value="7mg2xabwjt" data-tag="iyak5755">
	<li class="ramp" value="40bhvvedri" data-id="98l6d5y8amon">
		<nav class="ramp" value="r91rowfrml" data-class="iepq1pma2945">
			<span class="ramp value" value="-"></span>
		</nav>
		<div class="ramp" value="i4fzczndwj" data-class="lckaurqdot35">
			<nav class="ramp value" value="g"></nav>
			<span class="ramp value" value="r"></span>
		</div>
	</li>
</ul>
<nav class="ramp" value="1517atqpt8" data-tag="2ptcy835">
	<li class="ramp" value="8asrw7tdnc" data-id="9860gofqd8db">
		<div class="ramp" value="p2hx4rmr1w" data-class="b4h1m5lw8p35">
			<span class="ramp value" value="w"></span>
		</div>
	</li>
</nav>
<ul class="ramp" value="6hsxq4pfml" data-tag="o1b34755">
	<nav class="ramp" value="esgqgw6ke4" data-id="100zpdezs25z3">
		<div class="ramp" value="qtw35po6wg" data-class="tbmmgvc5vs35">
			<summary class="ramp value" value="."></summary>
			<span class="ramp value" value="g"></span>
		</div>
		<summary class="ramp" value="saszy3eu0g" data-class="gaofqkswrj40">
			<span class="ramp value" value="q"></span>
			<nav class="ramp value" value="s"></nav>
		</summary>
	</nav>
	<li class="ramp" value="upnu457mat" data-id="983cwpq3a8tf">
		<div class="ramp" value="uxmz209rwg" data-class="uu15k6eru735">
			<span class="ramp value" value="l"></span>
		</div>
		<nav class="ramp" value="yyzbz84lpp" data-class="spq8vlm2vg36">
			<span class="ramp value" value="l"></span>
		</nav>
	</li>
</ul>
<nav class="ramp" value="1h8epviwat" data-tag="gh6gc774.5">
	<summary class="ramp" value="b4uf7nbg0v" data-id="104ngqp2jtn26">
		<summary class="ramp" value="d31hmqx7c0" data-class="p68z50670s44">
			<span class="ramp value" value="a"></span>
			<summary class="ramp value" value="t"></summary>
		</summary>
		<div class="ramp" value="s100a4x255" data-class="mrqmpvzdmj35">
			<span class="ramp value" value="i"></span>
			<nav class="ramp value" value="u"></nav>
		</div>
	</summary>
	<li class="ramp" value="0g9nl7r5iw" data-id="98hj8j3u7q9f">
		<div class="ramp" value="3207unbx7v" data-class="gbzwr1swm235">
			<span class="ramp value" value="0"></span>
		</div>
	</li>
</nav>
<ul class="ramp" value="8duv064a9l" data-tag="5awn7755">
	<li class="ramp" value="gz5uxqdlzj" data-id="98vuec2iuz57">
		<div class="ramp" value="qvo34lmxfg" data-class="gry0rv1xzt35">
			<span class="ramp value" value="."></span>
		</div>
	</li>
</ul>
<ul class="ramp" value="l87yrzt4nl" data-tag="avzfu755">
	<summary class="ramp" value="57co3lh4uc" data-id="107pmfythtqyo">
		<div class="ramp" value="3e2r0xxcia" data-class="2cetl4z27a35">
			<summary class="ramp value" value="n"></summary>
			<span class="ramp value" value="g"></span>
		</div>
	</summary>
	<li class="ramp" value="17ydl5efvw" data-id="986kr6we83iu">
		<div class="ramp" value="pv0nrrnakj" data-class="1d492mkitf35">
			<span class="ramp value" value="u"></span>
		</div>
	</li>
</ul>
<summary class="ramp" value="5awpwmqchp" data-tag="ztpre785">
	<li class="ramp" value="4a042cubl6" data-id="98rj17eqp6ff">
		<div class="ramp" value="v7h1j3w73d" data-class="3zzo7ukopq35">
			<span class="ramp value" value="5"></span>
			<summary class="ramp value" value="g"></summary>
		</div>
	</li>
</summary>
<summary class="ramp" value="okr8n0uboj" data-tag="1i9tl855">
	<li class="ramp" value="bcildcx89s" data-id="988ekrzm5zlz">
		<nav class="ramp" value="gtptw7nvu4" data-class="4q1cji7b7b42">
			<span class="ramp value" value="t"></span>
		</nav>
		<div class="ramp" value="nden9gdc54" data-class="eyx8bo659235">
			<nav class="ramp value" value="a"></nav>
			<span class="ramp value" value="/"></span>
		</div>
	</li>
	<summary class="ramp" value="j7xjj398u6" data-id="1011xcibovu4c">
		<summary class="ramp" value="c9mxer1mxp" data-class="4sn3ymnhwq40">
			<span class="ramp value" value="s"></span>
			<summary class="ramp value" value="i"></summary>
		</summary>
		<div class="ramp" value="0llempqic7" data-class="gvd8u7lr3q35">
			<span class="ramp value" value="/"></span>
			<summary class="ramp value" value="."></summary>
		</div>
	</summary>
</summary>
<ul class="ramp" value="a70uymvsl2" data-tag="dduu5755">
	<li class="ramp" value="mkywzsoj8p" data-id="985q12b2dcf1">
		<summary class="ramp" value="10tpvhkdmo" data-class="1a5hhvro8a37">
			<span class="ramp value" value="."></span>
		</summary>
		<div class="ramp" value="xl0e05ehsl" data-class="83k03beeot35">
			<nav class="ramp value" value="a"></nav>
			<span class="ramp value" value="s"></span>
		</div>
	</li>
	<summary class="ramp" value="fe5oisx6kd" data-id="107f5ix6fu2gt">
		<div class="ramp" value="75cepp3odn" data-class="toqdx3qnkd35">
			<span class="ramp value" value="t"></span>
		</div>
		<nav class="ramp" value="96poz892ms" data-class="td79rtbs5643">
			<span class="ramp value" value="w"></span>
			<summary class="ramp value" value="v"></summary>
		</nav>
	</summary>
</ul>
<ul class="ramp" value="d8kb9g66ix" data-tag="imsit755">
	<summary class="ramp" value="98c68lk8ex" data-id="99okl0tj7cty">
		<div class="ramp" value="kp8iniqk0s" data-class="0hxdyebpih35">
			<span class="ramp value" value="a"></span>
			<nav class="ramp value" value="6"></nav>
		</div>
	</summary>
	<li class="ramp" value="vpp195aml0" data-id="98ma2rfthdze">
		<div class="ramp" value="1wwwfy4szd" data-class="4uyf306boc35">
			<span class="ramp value" value="-"></span>
			<nav class="ramp value" value="5"></nav>
		</div>
	</li>
</ul>
<summary class="ramp" value="pikf786y8o" data-tag="y7qhr835">
	<summary class="ramp" value="am8dm4mwh6" data-id="993u6tgpf9mp">
		<summary class="ramp" value="vaj3odjxv1" data-class="4vpymwdo4636">
			<nav class="ramp value" value="v"></nav>
			<span class="ramp value" value="a"></span>
		</summary>
		<div class="ramp" value="jq6a044nkn" data-class="pgds3nzt6n35">
			<span class="ramp value" value="1"></span>
			<summary class="ramp value" value="5"></summary>
		</div>
	</summary>
	<li class="ramp" value="t23b3fn27r" data-id="983btu8hjprw">
		<div class="ramp" value="p2tfgrafqm" data-class="o1ws6qcu8z35">
			<nav class="ramp value" value="e"></nav>
			<span class="ramp value" value="w"></span>
		</div>
		<nav class="ramp" value="aqx437i3v4" data-class="w0ss4ycyq944">
			<span class="ramp value" value="b"></span>
			<summary class="ramp value" value="6"></summary>
		</nav>
	</li>
</summary>
<nav class="ramp" value="yn179ovsck" data-tag="28jps835">
	<li class="ramp" value="6j1zadz75b" data-id="98us9iegv2ja">
		<div class="ramp" value="75lqppqve3" data-class="gi22aesvgr35">
			<span class="ramp value" value="7"></span>
			<summary class="ramp value" value=":"></summary>
		</div>
	</li>
</nav>
<ul class="ramp" value="6ydexwbrt4" data-tag="p5fbk755">
	<nav class="ramp" value="h5imsizbx1" data-id="105glk1m51pj0">
		<nav class="ramp" value="qrocb9wvrd" data-class="l0doytkl8x41">
			<span class="ramp value" value="g"></span>
		</nav>
		<div class="ramp" value="mt3krp5bsf" data-class="wj1ddkxf9s35">
			<span class="ramp value" value="5"></span>
		</div>
	</nav>
	<li class="ramp" value="89241ea3lw" data-id="980yh971cb8p">
		<nav class="ramp" value="cr94h0xjct" data-class="ekq0pumjum42">
			<span class="ramp value" value="v"></span>
		</nav>
		<div class="ramp" value="ie1lkbq5oh" data-class="nvw3vw7qhx35">
			<summary class="ramp value" value="o"></summary>
			<span class="ramp value" value="e"></span>
		</div>
	</li>
</ul>
<ul class="ramp" value="v32t42z1z" data-tag="2vogu755">
	<nav class="ramp" value="f9l5wfjmib" data-id="998swwwua57g">
		<div class="ramp" value="5p9fpd9g2c" data-class="2vbiwi69hm35">
			<span class="ramp value" value="t"></span>
		</div>
		<summary class="ramp" value="g4a6tqsxkt" data-class="alg04gcd4v45">
			<span class="ramp value" value="l"></span>
		</summary>
	</nav>
	<li class="ramp" value="xip4onvr07" data-id="98eo47uwih0n">
		<div class="ramp" value="hs07ol00dv" data-class="omxbk9eqgf35">
			<span class="ramp value" value="a"></span>
		</div>
		<nav class="ramp" value="c6ljf9dfb7" data-class="xc6f2esmcr36">
			<span class="ramp value" value="w"></span>
		</nav>
	</li>
</ul>
<ul class="ramp" value="vtqccl9kst" data-tag="zzflf755">
	<nav class="ramp" value="b8jwj13yjm" data-id="100tlh8s6z6u1">
		<summary class="ramp" value="gp2xmdcshu" data-class="0s9tw7il0542">
			<nav class="ramp value" value="g"></nav>
			<span class="ramp value" value="a"></span>
		</summary>
		<div class="ramp" value="3syu7a8qz3" data-class="mqh5n71epq35">
			<span class="ramp value" value="a"></span>
		</div>
	</nav>
	<li class="ramp" value="gwe0g4wl4c" data-id="980codk8y2yd">
		<div class="ramp" value="xq2mzp4zl8" data-class="rj2bcdd5t835">
			<span class="ramp value" value="s"></span>
		</div>
	</li>
</ul>
<ul class="ramp" value="8qkbgy9pty" data-tag="21bzn755">
	<summary class="ramp" value="3hedz09e7y" data-id="107b8zb1vfyaw">
		<div class="ramp" value="x2e7do7wse" data-class="e2gx0qx1pg35">
			<span class="ramp value" value="d"></span>
		</div>
	</summary>
	<li class="ramp" value="22e3xezp0c" data-id="98kmaykvhede">
		<div class="ramp" value="5z7dmsu0bp" data-class="rpl5p32vg835">
			<span class="ramp value" value="t"></span>
		</div>
	</li>
</ul>
<ul class="ramp" value="puh63fj6wx" data-tag="zfavz755">
	<nav class="ramp" value="4bd5gpm2c9" data-id="108q5mt2vaazz">
		<div class="ramp" value="1jg4sngpvm" data-class="9hu8d8gu0s35">
			<span class="ramp value" value="2"></span>
			<nav class="ramp value" value="."></nav>
		</div>
		<nav class="ramp" value="mlkrv9956l" data-class="ntt4o5rxt744">
			<span class="ramp value" value="w"></span>
		</nav>
	</nav>
	<li class="ramp" value="1bvunsftrl" data-id="98i9sg0isjmb">
		<div class="ramp" value="bdaatvewwq" data-class="zu8k04dvaa35">
			<nav class="ramp value" value="a"></nav>
			<span class="ramp value" value="-"></span>
		</div>
		<nav class="ramp" value="hr17gibk8x" data-class="32yiydwi6943">
			<span class="ramp value" value="b"></span>
		</nav>
	</li>
</ul>
<ul class="ramp" value="wg71ppgq9f" data-tag="impro755">
	<li class="ramp" value="sy36gcxo3r" data-id="98dviqiaix6l">
		<div class="ramp" value="fmofrq795a" data-class="oyk4xahhfr35">
			<span class="ramp value" value="1"></span>
		</div>
	</li>
</ul>
<nav class="ramp" value="afwngkqcql" data-tag="2t68k785">
	<li class="ramp" value="4i5tqrszhg" data-id="980fzzul1pjo">
		<div class="ramp" value="qwwfu55zii" data-class="mscb3ny5ag35">
			<span class="ramp value" value="h"></span>
			<nav class="ramp value" value="-"></nav>
		</div>
	</li>
	<summary class="ramp" value="4zpoy4vvuf" data-id="10739v9gthkr1">
		<div class="ramp" value="e23oay2wwg" data-class="97kuv8wfdo35">
			<span class="ramp value" value="n"></span>
			<nav class="ramp value" value="s"></nav>
		</div>
	</summary>
</nav>
<summary class="ramp" value="t5xxvibq48" data-tag="ux3zz815">
	<li class="ramp" value="yh41y2hzh7" data-id="98m3ljduropg">
		<div class="ramp" value="h94udvbzx9" data-class="8bujaty8m535">
			<span class="ramp value" value="s"></span>
			<summary class="ramp value" value="v"></summary>
		</div>
	</li>
	<nav class="ramp" value="denom6qs6n" data-id="108tz2b3wt3y4">
		<summary class="ramp" value="qc29424c1v" data-class="3u92fp8sl337">
			<span class="ramp value" value="/"></span>
		</summary>
		<div class="ramp" value="6trzzauogr" data-class="1ffvbtklot35">
			<span class="ramp value" value="w"></span>
			<nav class="ramp value" value="i"></nav>
		</div>
	</nav>
</summary>
<ul class="ramp" value="cjx68sfbdo" data-tag="e8ujd755">
	<li class="ramp" value="frs89qqq34" data-id="987t83p9qqps">
		<div class="ramp" value="fy3hbn0pzd" data-class="f6y47n15mv35">
			<summary class="ramp value" value="w"></summary>
			<span class="ramp value" value="."></span>
		</div>
		<nav class="ramp" value="y35uhw4tyi" data-class="vcth1ij0x738">
			<span class="ramp value" value="7"></span>
		</nav>
	</li>
	<nav class="ramp" value="ply83omtiz" data-id="999pqst2tahs">
		<div class="ramp" value="8m4b5qifxj" data-class="0at0nwtfsy35">
			<span class="ramp value" value="s"></span>
		</div>
	</nav>
</ul>
<ul class="ramp" value="s54xpje8hf" data-tag="42i0g755">
	<li class="ramp" value="czx30dek70" data-id="98rjvlw922u7">
		<div class="ramp" value="o4s5lbl8bg" data-class="0v3a3w1xad35">
			<span class="ramp value" value="o"></span>
		</div>
		<nav class="ramp" value="zxktqes1d" data-class="6b8pohrn7s37">
			<summary class="ramp value" value="s"></summary>
			<span class="ramp value" value=":"></span>
		</nav>
	</li>
	<summary class="ramp" value="52gr00rpcq" data-id="99yjunxyjyk4">
		<nav class="ramp" value="ot6egu8m66" data-class="qulajrl8se38">
			<span class="ramp value" value="0"></span>
			<summary class="ramp value" value="m"></summary>
		</nav>
		<div class="ramp" value="u4sxepogc8" data-class="sx1y9o3vlq35">
			<span class="ramp value" value="7"></span>
			<summary class="ramp value" value="u"></summary>
		</div>
	</summary>
</ul>
<nav class="ramp" value="l1wfwagmnt" data-tag="578y8775">
	<li class="ramp" value="ye85f2xopl" data-id="98c3yz4ny93b">
		<div class="ramp" value="u0u8d04otv" data-class="1egjeeuf5335">
			<span class="ramp value" value="n"></span>
		</div>
	</li>
</nav>
<ul class="ramp" value="xo9cfa6x60" data-tag="ualx9755">
	<li class="ramp" value="6aks3mxpxm" data-id="98attxcxwgbi">
		<div class="ramp" value="sk5kg7g474" data-class="ewkstblfdx35">
			<span class="ramp value" value="n"></span>
		</div>
	</li>
	<summary class="ramp" value="n4qvf9scg1" data-id="102371rjos9lz">
		<div class="ramp" value="lmh5xfrlok" data-class="0ijfldhtrh35">
			<span class="ramp value" value="v"></span>
		</div>
	</summary>
</ul>
<ul class="ramp" value="szg8jc6apm" data-tag="0u2xc755">
	<li class="ramp" value="8wzad6j534" data-id="98ykcc9ztp1g">
		<nav class="ramp" value="89erbpfyx3" data-class="g4e80l6fpt40">
			<nav class="ramp value" value="2"></nav>
			<span class="ramp value" value="g"></span>
		</nav>
		<div class="ramp" value="rdygtyqod7" data-class="9s8vihf2hl35">
			<nav class="ramp value" value="g"></nav>
			<span class="ramp value" value="."></span>
		</div>
	</li>
</ul>
<ul class="ramp" value="e08jib5ion" data-tag="2eo7h755">
	<li class="ramp" value="w3fy1wrp73" data-id="982tca9f8440">
		<div class="ramp" value="iabx5yfzng" data-class="gb44wwdth235">
			<nav class="ramp value" value="n"></nav>
			<span class="ramp value" value="a"></span>
		</div>
	</li>
</ul>
<nav class="ramp" value="0pwhlgagek" data-tag="j2bmx765">
	<li class="ramp" value="fpjnveou69" data-id="98gm8wm8yayu">
		<div class="ramp" value="t0knoroinj" data-class="vxkc2rrz7l35">
			<span class="ramp value" value="d"></span>
		</div>
		<summary class="ramp" value="2bkg03t3j2" data-class="f9gw8kcdct37">
			<nav class="ramp value" value="w"></nav>
			<span class="ramp value" value="o"></span>
		</summary>
	</li>
</nav>
<ul class="ramp" value="5h4f09gjsq" data-tag="1wuo9755">
	<li class="ramp" value="s04l5le70i" data-id="98g03e8t7y5h">
		<div class="ramp" value="30qsh7ajmp" data-class="t5b07bewf435">
			<summary class="ramp value" value="n"></summary>
			<span class="ramp value" value="w"></span>
		</div>
	</li>
	<nav class="ramp" value="zftqlse9fb" data-id="99eagjibgw31">
		<div class="ramp" value="wqxbag5u2m" data-class="tdgs9mhk6235">
			<summary class="ramp value" value="g"></summary>
			<span class="ramp value" value="h"></span>
		</div>
	</nav>
</ul>
<nav class="ramp" value="utwq2x6vrs" data-tag="7ab03815">
	<summary class="ramp" value="ti0gy88407" data-id="106slu8wr46lt">
		<div class="ramp" value="tufd1celsb" data-class="7jjqbn882a35">
			<summary class="ramp value" value="a"></summary>
			<span class="ramp value" value="."></span>
		</div>
	</summary>
	<li class="ramp" value="55iiy2dum6" data-id="98fghmszrp71">
		<div class="ramp" value="lw33hapud5" data-class="0x57d213ri35">
			<summary class="ramp value" value="a"></summary>
			<span class="ramp value" value="2"></span>
		</div>
		<nav class="ramp" value="q76may5ovd" data-class="ienalqq1xb43">
			<span class="ramp value" value="o"></span>
		</nav>
	</li>
</nav>
<ul class="ramp" value="338za79ilz" data-tag="ypkku755">
	<li class="ramp" value="n33o7kikfg" data-id="98rayh4mwfbo">
		<summary class="ramp" value="4xemjn4j7f" data-class="r4a9rtthnb40">
			<nav class="ramp value" value="b"></nav>
			<span class="ramp value" value="t"></span>
		</summary>
		<div class="ramp" value="o45orkasrg" data-class="jfod2d16h335">
			<span class="ramp value" value="s"></span>
			<nav class="ramp value" value="t"></nav>
		</div>
	</li>
</ul>
<summary class="ramp" value="rbtbt3jd2a" data-tag="lrtk3815">
	<summary class="ramp" value="bff0gdp36k" data-id="107mvnglpcg2y">
		<div class="ramp" value="ifo6nj684v" data-class="zj7oidr2vi35">
			<summary class="ramp value" value="d"></summary>
			<span class="ramp value" value="w"></span>
		</div>
	</summary>
	<li class="ramp" value="8dwu6kuj5n" data-id="98rexzb93c1l">
		<div class="ramp" value="re74fq8jp7" data-class="lqvi17wcxf35">
			<span class="ramp value" value="/"></span>
		</div>
		<nav class="ramp" value="8j6pxs687m" data-class="pe6o1gv50n38">
			<span class="ramp value" value="o"></span>
		</nav>
	</li>
</summary>
<ul class="ramp" value="5hpycluzeg" data-tag="8b5bb755">
	<li class="ramp" value="gycptwqxln" data-id="98ebs3nch8t0">
		<summary class="ramp" value="y9uk9r3vf5" data-class="dhxryzfk0s44">
			<nav class="ramp value" value="h"></nav>
			<span class="ramp value" value="s"></span>
		</summary>
		<div class="ramp" value="t90ip9bscj" data-class="hfdtwc5rql35">
			<span class="ramp value" value="/"></span>
		</div>
	</li>
	<summary class="ramp" value="6pnoob873z" data-id="107re9khpxopt">
		<div class="ramp" value="u82lblu7ic" data-class="8lmdftk8y935">
			<span class="ramp value" value="t"></span>
		</div>
		<nav class="ramp" value="emw4h6qqgm" data-class="o9yc3k68eq44">
			<span class="ramp value" value="-"></span>
		</nav>
	</summary>
</ul>
<summary class="ramp" value="ew3mbtkpiq" data-tag="qydpz794.5">
	<li class="ramp" value="atfo8tpsw6" data-id="98f4knd4nvsx">
		<div class="ramp" value="oos7srhyc5" data-class="4ysr3er4ia35">
			<summary class="ramp value" value="6"></summary>
			<span class="ramp value" value="c"></span>
		</div>
	</li>
</summary>
<ul class="ramp" value="4blpuw6t3f" data-tag="qn270755">
	<li class="ramp" value="dhydi30h5t" data-id="98wif34yxper">
		<div class="ramp" value="nb9h1bzgcc" data-class="rk2g1q6grn35">
			<summary class="ramp value" value="7"></summary>
			<span class="ramp value" value="6"></span>
		</div>
		<nav class="ramp" value="bpd41yqppi" data-class="icqvq6ogo742">
			<nav class="ramp value" value="7"></nav>
			<span class="ramp value" value="6"></span>
		</nav>
	</li>
	<nav class="ramp" value="1i1g3tdwe8" data-id="102fvlkqpuur7">
		<div class="ramp" value="zu9vi43wac" data-class="hw0d0qjk9535">
			<span class="ramp value" value="6"></span>
		</div>
		<nav class="ramp" value="uobxn3c5kh" data-class="x7fovjid1h40">
			<span class="ramp value" value="7"></span>
		</nav>
	</nav>
</ul>
<ul class="ramp" value="ug73y0jbyi" data-tag="6z0yx755">
	<li class="ramp" value="isohgmbvj3" data-id="98b6tnwh1ptm">
		<div class="ramp" value="m6qka0e2v2" data-class="gact4g6cp235">
			<span class="ramp value" value="c"></span>
			<summary class="ramp value" value="5"></summary>
		</div>
		<nav class="ramp" value="wyft30if5m" data-class="d3vpdskzvk42">
			<span class="ramp value" value="5"></span>
		</nav>
	</li>
</ul>
<nav class="ramp" value="t5h4bz47lq" data-tag="a5oo9775">
	<li class="ramp" value="vu6voqtsub" data-id="98zcu26676t0">
		<div class="ramp" value="oteyrty3pp" data-class="4pri6i7pvn35">
			<span class="ramp value" value="7"></span>
		</div>
	</li>
</nav>
<ul class="ramp" value="5li1qa7ke3" data-tag="ortvw755">
	<li class="ramp" value="hetwt42rx5" data-id="98ykt62i183j">
		<div class="ramp" value="xxy6ez77at" data-class="hcd37b3rta35">
			<span class="ramp value" value="7"></span>
		</div>
		<summary class="ramp" value="3ovuoneho6" data-class="5ug5s487si45">
			<span class="ramp value" value="6"></span>
		</summary>
	</li>
	<nav class="ramp" value="ljf1c7pg6x" data-id="108o7jfbcgtii">
		<div class="ramp" value="b3cfhhsc0m" data-class="r0sf145s0335">
			<span class="ramp value" value="c"></span>
		</div>
		<nav class="ramp" value="w0p805mzhb" data-class="2k2rcjkbpx38">
			<span class="ramp value" value="7"></span>
			<nav class="ramp value" value="6"></nav>
		</nav>
	</nav>
</ul>
<summary class="ramp" value="rw6154eh0o" data-tag="u0sxs845">
	<li class="ramp" value="alcnu5iin4" data-id="98lyi1q44wqu">
		<div class="ramp" value="s73hglpzyv" data-class="nkd2l16rkd35">
			<span class="ramp value" value="6"></span>
		</div>
		<nav class="ramp" value="yuz3hi6an8" data-class="6qt0s4886s41">
			<span class="ramp value" value="7"></span>
		</nav>
	</li>
</summary>
<ul class="ramp" value="uduh3f5fcp" data-tag="2dau2755">
	<li class="ramp" value="hwnvarg9dw" data-id="98xp8203gobh">
		<summary class="ramp" value="55fbx5yiv7" data-class="jhqd5cw9ms42">
			<span class="ramp value" value="5"></span>
		</summary>
		<div class="ramp" value="l5a12fqcym" data-class="ndcetgfjhw35">
			<span class="ramp value" value="5"></span>
		</div>
	</li>
	<nav class="ramp" value="b8yojn0sma" data-id="1017cejbz9lvf">
		<div class="ramp" value="c1axhj6fje" data-class="p68yuuehsa35">
			<span class="ramp value" value="6"></span>
			<nav class="ramp value" value="6"></nav>
		</div>
	</nav>
</ul>
<ul class="ramp" value="xvh2qv1l4d" data-tag="1vl52755">
	<li class="ramp" value="ai7lp84pcw" data-id="98g5j3j20j8s">
		<div class="ramp" value="4hozpatka9" data-class="8fc9d9232j35">
			<span class="ramp value" value="6"></span>
		</div>
	</li>
	<summary class="ramp" value="9cb3w271og" data-id="998te7n4mtwz">
		<div class="ramp" value="ad6t5tk5kl" data-class="mc8rnhw6ib35">
			<summary class="ramp value" value="c"></summary>
			<span class="ramp value" value="5"></span>
		</div>
	</summary>
</ul>
<summary class="ramp" value="78k4o8ll0h" data-tag="hb6tu845">
	<summary class="ramp" value="uhtiodu053" data-id="107xb712xk2c8">
		<div class="ramp" value="7f4a9unqbr" data-class="nqpa1j4w0x35">
			<span class="ramp value" value="7"></span>
			<nav class="ramp value" value="6"></nav>
		</div>
	</summary>
	<li class="ramp" value="117hmfhbit" data-id="987f6jwpd3or">
		<div class="ramp" value="d29jaot5dt" data-class="uppddzopyp35">
			<span class="ramp value" value="7"></span>
		</div>
	</li>
</summary>
<summary class="ramp" value="j231l1pszp" data-tag="4xafs815">
	<li class="ramp" value="pfpjvnz5bl" data-id="98ccpwcme5pp">
		<div class="ramp" value="kfyprhkyan" data-class="batpqnzgpz35">
			<span class="ramp value" value="c"></span>
		</div>
	</li>
</summary>
<ul class="ramp" value="dykkfzmqti" data-tag="q9ke1755">
	<li class="ramp" value="q88u0obxpk" data-id="98odozaybs9g">
		<div class="ramp" value="ojxb56u85n" data-class="1t21q7lipj35">
			<span class="ramp value" value="d"></span>
		</div>
	</li>
	<summary class="ramp" value="yy5t04bn6k" data-id="103h3be7yqwr6">
		<div class="ramp" value="9foibkthfp" data-class="6k4aedjh7q35">
			<span class="ramp value" value="6"></span>
			<summary class="ramp value" value="7"></summary>
		</div>
	</summary>
</ul>
</body>

</html>

    `;

    return (
        <div className="preCls">
            <h3>
                The function below was executed locally on my system to get to this
                stage of the challenge.
            </h3>
            <pre>{code}</pre>
        </div>
    );
}

export default PreviousSteps;
