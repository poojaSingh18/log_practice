var mm=angular.module("myjs", [])
	mm.controller("index", ["$scope",'$http', function($scope, $http) {
		
	$scope.ishidden=true;
   $scope.isHidden=true;

$scope.worldP=function(){
	console.log("It's me");
	$scope.isHidden=true;
$scope.ishidden=false;

	$scope.data= [
{"country" : "Aruba", "population" : 103000},
{"country" : "Afghanistan", "population" : 22720000},
{"country" : "Angola", "population" : 12878000},
{"country" : "Anguilla", "population" : 8000},
{"country" : "Albania", "population" : 3401200},
{"country" : "Andorra", "population" : 78000},
{"country" : "Netherlands Antilles", "population" : 217000},
{"country" : "United Arab Emirates", "population" : 2441000},
{"country" : "Argentina", "population" : 37032000},
{"country" : "Armenia", "population" : 3520000},
{"country" : "American Samoa", "population" : 68000},
{"country" : "Antigua and Barbuda", "population" : 68000},
{"country" : "Australia", "population" : 23840314},
{"country" : "Austria", "population" : 8091800},
{"country" : "Azerbaijan", "population" : 7734000},
{"country" : "Burundi", "population" : 6695000},
{"country" : "Belgium", "population" : 10239000},
{"country" : "Benin", "population" : 6097000},
{"country" : "Burkina Faso", "population" : 11937000},
{"country" : "Bangladesh", "population" : 129155000},
{"country" : "Bulgaria", "population" : 8190900},
{"country" : "Bahrain", "population" : 617000},
{"country" : "Bahamas", "population" : 307000},
{"country" : "Bosnia and Herzegovina", "population" : 3972000},
{"country" : "Belarus", "population" : 10236000},
{"country" : "Belize", "population" : 241000},
{"country" : "Bermuda", "population" : 65000},
{"country" : "Bolivia", "population" : 8329000},
{"country" : "Brazil", "population" : 170115000},
{"country" : "Barbados", "population" : 270000},
{"country" : "Brunei", "population" : 328000},
{"country" : "Bhutan", "population" : 2124000},
{"country" : "Botswana", "population" : 1622000},
{"country" : "Central African Republic", "population" : 3615000},
{"country" : "Canada", "population" : 31147000},
{"country" : "Cocos (Keeling) Islands", "population" : 600},
{"country" : "Switzerland", "population" : 7160400},
{"country" : "Chile", "population" : 15211000},
{"country" : "China", "population" : 1277558000},
{"country" : "Cote d'Ivoire", "population" : 14786000},
{"country" : "Cameroon", "population" : 15085000},
{"country" : "The Democratic Republic of the Congo", "population" : 51654000},
{"country" : "Congo", "population" : 2943000},
{"country" : "Cook Islands", "population" : 20000},
{"country" : "Colombia", "population" : 42321000},
{"country" : "Comoros", "population" : 578000},
{"country" : "Cape Verde", "population" : 428000},
{"country" : "Costa Rica", "population" : 4023000},
{"country" : "Cuba", "population" : 11201000},
{"country" : "Christmas Island", "population" : 2500},
{"country" : "Cayman Islands", "population" : 38000},
{"country" : "Cyprus", "population" : 754700},
{"country" : "Czech Republic", "population" : 10278100},
{"country" : "Germany", "population" : 82164700},
{"country" : "Djibouti", "population" : 638000},
{"country" : "Dominica", "population" : 71000},
{"country" : "Denmark", "population" : 5330000},
{"country" : "Dominican Republic", "population" : 8495000},
{"country" : "Algeria", "population" : 31471000},
{"country" : "Ecuador", "population" : 12646000},
{"country" : "Egypt", "population" : 68470000},
{"country" : "Eritrea", "population" : 6250000},
{"country" : "Western Sahara", "population" : 293000},
{"country" : "Spain", "population" : 39441700},
{"country" : "Estonia", "population" : 1439200},
{"country" : "Ethiopia", "population" : 78565000},
{"country" : "Finland", "population" : 5171300},
{"country" : "Fiji Islands", "population" : 817000},
{"country" : "Falkland Islands", "population" : 2000},
{"country" : "France", "population" : 59225700},
{"country" : "Faroe Islands", "population" : 43000},
{"country" : "Federated States of Micronesia", "population" : 119000},
{"country" : "Gabon", "population" : 1226000},
{"country" : "United Kingdom", "population" : 59623400},
{"country" : "Georgia", "population" : 4968000},
{"country" : "Ghana", "population" : 20212000},
{"country" : "Gibraltar", "population" : 25000},
{"country" : "Guinea", "population" : 7430000},
{"country" : "Guadeloupe", "population" : 456000},
{"country" : "Gambia", "population" : 1305000},
{"country" : "Guinea-Bissau", "population" : 1213000},
{"country" : "Equatorial Guinea", "population" : 453000},
{"country" : "Greece", "population" : 10545700},
{"country" : "Grenada", "population" : 94000},
{"country" : "Greenland", "population" : 56000},
{"country" : "Guatemala", "population" : 11385000},
{"country" : "French Guiana", "population" : 181000},
{"country" : "Guam", "population" : 168000},
{"country" : "Guyana", "population" : 861000},
{"country" : "Hong Kong", "population" : 6782000},
{"country" : "Honduras", "population" : 6485000},
{"country" : "Croatia", "population" : 4473000},
{"country" : "Haiti", "population" : 8222000},
{"country" : "Hungary", "population" : 10043200},
{"country" : "Indonesia", "population" : 212107000},
{"country" : "India", "population" : 1013662000},
{"country" : "Ireland", "population" : 3775100},
{"country" : "Iran", "population" : 67702000},
{"country" : "Iraq", "population" : 23115000},
{"country" : "Iceland", "population" : 279000},
{"country" : "Israel", "population" : 6217000},
{"country" : "Italy", "population" : 57680000},
{"country" : "Jamaica", "population" : 2583000},
{"country" : "Jordan", "population" : 5083000},
{"country" : "Japan", "population" : 126714000},
{"country" : "Kazakstan", "population" : 16223000},
{"country" : "Kenya", "population" : 30080000},
{"country" : "Kyrgyzstan", "population" : 4699000},
{"country" : "Cambodia", "population" : 11168000},
{"country" : "Kiribati", "population" : 83000},
{"country" : "Saint Kitts and Nevis", "population" : 38000},
{"country" : "South Korea", "population" : 46844000},
{"country" : "Kuwait", "population" : 1972000},
{"country" : "Laos", "population" : 5433000},
{"country" : "Lebanon", "population" : 3282000},
{"country" : "Liberia", "population" : 3154000},
{"country" : "Libyan Arab Jamahiriya", "population" : 5605000},
{"country" : "Saint Lucia", "population" : 154000},
{"country" : "Liechtenstein", "population" : 32300},
{"country" : "Sri Lanka", "population" : 18827000},
{"country" : "Lesotho", "population" : 2153000},
{"country" : "Lithuania", "population" : 3698500},
{"country" : "Luxembourg", "population" : 435700},
{"country" : "Latvia", "population" : 2424200},
{"country" : "Macao", "population" : 473000},
{"country" : "Morocco", "population" : 28351000},
{"country" : "Monaco", "population" : 34000},
{"country" : "Moldova", "population" : 4380000},
{"country" : "Madagascar", "population" : 15942000},
{"country" : "Maldives", "population" : 286000},
{"country" : "Mexico", "population" : 98881000},
{"country" : "Marshall Islands", "population" : 64000},
{"country" : "Macedonia", "population" : 2024000},
{"country" : "Mali", "population" : 11234000},
{"country" : "Malta", "population" : 380200},
{"country" : "Myanmar", "population" : 45611000},
{"country" : "Mongolia", "population" : 2662000},
{"country" : "Northern Mariana Islands", "population" : 78000},
{"country" : "Mozambique", "population" : 19680000},
{"country" : "Mauritania", "population" : 2670000},
{"country" : "Montserrat", "population" : 11000},
{"country" : "Martinique", "population" : 395000},
{"country" : "Mauritius", "population" : 1158000},
{"country" : "Malawi", "population" : 10925000},
{"country" : "Malaysia", "population" : 22244000},
{"country" : "Mayotte", "population" : 149000},
{"country" : "Namibia", "population" : 1726000},
{"country" : "New Caledonia", "population" : 214000},
{"country" : "Niger", "population" : 10730000},
{"country" : "Norfolk Island", "population" : 2000},
{"country" : "Nigeria", "population" : 111506000},
{"country" : "Nicaragua", "population" : 5074000},
{"country" : "Niue", "population" : 2000},
{"country" : "Netherlands", "population" : 15864000},
{"country" : "Norway", "population" : 4478500},
{"country" : "Nepal", "population" : 23930000},
{"country" : "Nauru", "population" : 12000},
{"country" : "New Zealand", "population" : 3862000},
{"country" : "Oman", "population" : 2542000},
{"country" : "Pakistan", "population" : 156483000},
{"country" : "Panama", "population" : 2856000},
{"country" : "Pitcairn", "population" : 50},
{"country" : "Peru", "population" : 25662000},
{"country" : "Philippines", "population" : 75967000},
{"country" : "Palau", "population" : 19000},
{"country" : "Papua New Guinea", "population" : 4807000},
{"country" : "Poland", "population" : 38653600},
{"country" : "Puerto Rico", "population" : 3869000},
{"country" : "North Korea", "population" : 24039000},
{"country" : "Portugal", "population" : 9997600},
{"country" : "Paraguay", "population" : 5496000},
{"country" : "Palestine", "population" : 3101000},
{"country" : "French Polynesia", "population" : 235000},
{"country" : "Qatar", "population" : 599000},
{"country" : "Reunion", "population" : 699000},
{"country" : "Romania", "population" : 22455500},
{"country" : "Russian Federation", "population" : 146934000},
{"country" : "Rwanda", "population" : 7733000},
{"country" : "Saudi Arabia", "population" : 21607000},
{"country" : "Sudan", "population" : 29490000},
{"country" : "South Sudan", "population" : 12042910},
{"country" : "Senegal", "population" : 9481000},
{"country" : "Singapore", "population" : 3567000},
{"country" : "Saint Helena", "population" : 6000},
{"country" : "Svalbard and Jan Mayen", "population" : 3200},
{"country" : "Solomon Islands", "population" : 444000},
{"country" : "Sierra Leone", "population" : 4854000},
{"country" : "El Salvador", "population" : 6276000},
{"country" : "San Marino", "population" : 27000},
{"country" : "Somalia", "population" : 10097000},
{"country" : "Saint Pierre and Miquelon", "population" : 7000},
{"country" : "Sao Tome and Principe", "population" : 147000},
{"country" : "Suriname", "population" : 417000},
{"country" : "Slovakia", "population" : 5398700},
{"country" : "Slovenia", "population" : 1987800},
{"country" : "Sweden", "population" : 8861400},
{"country" : "Swaziland", "population" : 1008000},
{"country" : "Seychelles", "population" : 77000},
{"country" : "Syria", "population" : 16125000},
{"country" : "Turks and Caicos Islands", "population" : 17000},
{"country" : "Chad", "population" : 7651000},
{"country" : "Togo", "population" : 4629000},
{"country" : "Thailand", "population" : 61399000},
{"country" : "Tajikistan", "population" : 6188000},
{"country" : "Tokelau", "population" : 2000},
{"country" : "Turkmenistan", "population" : 4459000},
{"country" : "East Timor", "population" : 885000},
{"country" : "Tonga", "population" : 99000},
{"country" : "Trinidad and Tobago", "population" : 1295000},
{"country" : "Tunisia", "population" : 9586000},
{"country" : "Turkey", "population" : 66591000},
{"country" : "Tuvalu", "population" : 12000},
{"country" : "Taiwan", "population" : 22256000},
{"country" : "Tanzania", "population" : 33517000},
{"country" : "Uganda", "population" : 21778000},
{"country" : "Ukraine", "population" : 50456000},
{"country" : "Uruguay", "population" : 3337000},
{"country" : "United States", "population" : 278357000},
{"country" : "Uzbekistan", "population" : 24318000},
{"country" : "Holy See (Vatican City State)", "population" : 1000},
{"country" : "Saint Vincent and the Grenadines", "population" : 114000},
{"country" : "Venezuela", "population" : 24170000},
{"country" : "British Virgin Islands", "population" : 21000},
{"country" : "United States Virgin Islands", "population" : 93000},
{"country" : "Vietnam", "population" : 79832000},
{"country" : "Vanuatu", "population" : 190000},
{"country" : "Wallis and Futuna", "population" : 15000},
{"country" : "Samoa", "population" : 180000},
{"country" : "Yemen", "population" : 18112000},
{"country" : "Yugoslavia", "population" : 10640000},
{"country" : "South Africa", "population" : 40377000},
{"country" : "Zambia", "population" : 9169000},
{"country" : "Zimbabwe", "population" : 11669000}];

$http.post('/world_pop');

}

$scope.India_emp=function(){
$scope.isHidden=false;
$scope.ishidden=true;
	$scope.data=[
  {
    "Country Name": "India",
    "Country Code": "IND",
    "Series Name": "Total employment, total (ages 15+)",
    "Series Code": "SL.EMP.TOTL",
    "2000 _YR2000_": 389169885,
    "2001 [YR2001]": 401656799,
    "2002 [YR2002]": 411619783,
    "2003 [YR2003]": 425428103,
    "2004 [YR2004]": 437243307,
    "2005 [YR2005]": 446881586,
    "2006 [YR2006]": 448383394,
    "2007 [YR2007]": 452021840,
    "2008 [YR2008]": 450570955,
    "2009 [YR2009]": 452098508,
    "2010 [YR2010]": 455114097,
    "2011 [YR2011]": 457751651,
    "2012 [YR2012]": 461166931,
    "2013 [YR2013]": 469879059,
    "2014 [YR2014]": "..",
    "Most Recent Value [YR20111]": 469879059
  },
  {
    "Country Name": "India",
    "Country Code": "IND",
    "Series Name": "Labor force, total",
    "Series Code": "SL.TLF.TOTL.IN",
    "2000 _YR2000_": 406359368,
    "2001 [YR2001]": 418539057,
    "2002 [YR2002]": 430329762,
    "2003 [YR2003]": 442356898,
    "2004 [YR2004]": 454552446,
    "2005 [YR2005]": 467648895,
    "2006 [YR2006]": 468800170,
    "2007 [YR2007]": 469653873,
    "2008 [YR2008]": 470196564,
    "2009 [YR2009]": 471283494,
    "2010 [YR2010]": 471277041,
    "2011 [YR2011]": 475090729,
    "2012 [YR2012]": 477952680,
    "2013 [YR2013]": 487882088,
    "2014 [YR2014]": "..",
    "Most Recent Value [YR20111]": 487882088
  },
  {
    "Country Name": "India",
    "Country Code": "IND",
    "Series Name": "Unemployment, total (% of total labor force) (modeled ILO estimate)",
    "Series Code": "SL.UEM.TOTL.ZS",
    "2000 _YR2000_": 4.30000019073486,
    "2001 [YR2001]": 4,
    "2002 [YR2002]": 4.30000019073486,
    "2003 [YR2003]": 3.90000009536743,
    "2004 [YR2004]": 3.90000009536743,
    "2005 [YR2005]": 4.40000009536743,
    "2006 [YR2006]": 4.30000019073486,
    "2007 [YR2007]": 3.70000004768372,
    "2008 [YR2008]": 4.09999990463257,
    "2009 [YR2009]": 3.90000009536743,
    "2010 [YR2010]": 3.5,
    "2011 [YR2011]": 3.5,
    "2012 [YR2012]": 3.59999990463257,
    "2013 [YR2013]": 3.59999990463257,
    "2014 [YR2014]": "..",
    "Most Recent Value [YR20111]": 3.59999990463257
  },
  {
    "Country Name": "India",
    "Country Code": "IND",
    "Series Name": "Unemployment, male (% of male labor force) (modeled ILO estimate)",
    "Series Code": "SL.UEM.TOTL.MA.ZS",
    "2000 _YR2000_": 4.30000019073486,
    "2001 [YR2001]": 3.79999995231628,
    "2002 [YR2002]": 4.19999980926514,
    "2003 [YR2003]": 3.90000009536743,
    "2004 [YR2004]": 3.90000009536743,
    "2005 [YR2005]": 4.09999990463257,
    "2006 [YR2006]": 4.09999990463257,
    "2007 [YR2007]": 3.70000004768372,
    "2008 [YR2008]": 4.09999990463257,
    "2009 [YR2009]": 3.90000009536743,
    "2010 [YR2010]": 3.29999995231628,
    "2011 [YR2011]": 3.29999995231628,
    "2012 [YR2012]": 3.40000009536743,
    "2013 [YR2013]": 3.5,
    "2014 [YR2014]": "..",
    "Most Recent Value [YR20111]": 3.5
  },
  {
    "Country Name": "India",
    "Country Code": "IND",
    "Series Name": "Unemployment, female (% of female labor force) (modeled ILO estimate)",
    "Series Code": "SL.UEM.TOTL.FE.ZS",
    "2000 _YR2000_": 4.19999980926514,
    "2001 [YR2001]": 4.5,
    "2002 [YR2002]": 4.40000009536743,
    "2003 [YR2003]": 3.90000009536743,
    "2004 [YR2004]": 3.90000009536743,
    "2005 [YR2005]": 5,
    "2006 [YR2006]": 4.90000009536743,
    "2007 [YR2007]": 3.79999995231628,
    "2008 [YR2008]": 4,
    "2009 [YR2009]": 3.90000009536743,
    "2010 [YR2010]": 4.40000009536743,
    "2011 [YR2011]": 4.30000019073486,
    "2012 [YR2012]": 4.09999990463257,
    "2013 [YR2013]": 4,
    "2014 [YR2014]": "..",
    "Most Recent Value [YR20111]": 4
  }
];

$scope.arr=[];

	for(var i in $scope.data){
	     
		var eachdata=$scope.data[i];
		var keys=Object.keys(eachdata);

       var val;
	   var newobj={};
		
          for(var k in keys)
         {        val=eachdata[keys[k]];
     	  	      keys[k]=keys[k].replace(/ /g,"");
     	  	      if(keys[k].substr(0,1)=='2')
     	  	      {
     	  	      	keys[k]="k"+keys[k];
     	  	      }
     	  	      keys[k]=keys[k].replace("[","");
     	  	            keys[k]=keys[k].replace("]","");

     	  	      newobj[keys[k]]=val;

     	  	
         }


     $scope.arr.push(newobj);
     	
     

}


$http.post('/India_emp');

}

$scope.tax_pop=function(){
	$scope.isHidden=false;
$scope.ishidden=true; 


	$scope.data=[
  {
    "Country Name": "India",
    "Country Code": "IND",
    "Series Name": "Tax revenue (% of GDP)",
    "Series Code": "GC.TAX.TOTL.GD.ZS",
    "2000 [YR2000]": 8.65830340454038,
    "2001 [YR2001]": 7.94020755211745,
    "2002 [YR2002]": 8.52674103971312,
    "2003 [YR2003]": 8.95110931272321,
    "2004 [YR2004]": 9.40586701542926,
    "2005 [YR2005]": 9.91376763580563,
    "2006 [YR2006]": 11.0254813270753,
    "2007 [YR2007]": 11.8936504337926,
    "2008 [YR2008]": 10.7511761330101,
    "2009 [YR2009]": 9.64099466718715,
    "2010 [YR2010]": 10.1883393366562,
    "2011 [YR2011]": 8.97951726675936,
    "2012 [YR2012]": 10.7884838792178,
    "2013 [YR2013]": "..",
    "2014 [YR2014]": "..",
    "Most Recent Value [YR20111]": 10.7884838792178
  },
  {
    "Country Name": "India",
    "Country Code": "IND",
    "Series Name": "Tax payments (number)",
    "Series Code": "IC.TAX.PAYM",
    "2000 [YR2000]": "..",
    "2001 [YR2001]": "..",
    "2002 [YR2002]": "..",
    "2003 [YR2003]": "..",
    "2004 [YR2004]": "..",
    "2005 [YR2005]": 55,
    "2006 [YR2006]": 58,
    "2007 [YR2007]": 59,
    "2008 [YR2008]": 59,
    "2009 [YR2009]": 59,
    "2010 [YR2010]": 56,
    "2011 [YR2011]": 33,
    "2012 [YR2012]": 33,
    "2013 [YR2013]": 33,
    "2014 [YR2014]": 33,
    "Most Recent Value [YR20111]": 33
  },
  {
    "Country Name": "India",
    "Country Code": "IND",
    "Series Name": "Rural population",
    "Series Code": "SP.RUR.TOTL",
    "2000 [YR2000]": 762014464,
    "2001 [YR2001]": 772638445,
    "2002 [YR2002]": 782276276,
    "2003 [YR2003]": 791686221,
    "2004 [YR2004]": 800850345,
    "2005 [YR2005]": 809782501,
    "2006 [YR2006]": 818470414,
    "2007 [YR2007]": 826888846,
    "2008 [YR2008]": 835004284,
    "2009 [YR2009]": 842800278,
    "2010 [YR2010]": 850240997,
    "2011 [YR2011]": 857294797,
    "2012 [YR2012]": 863903600,
    "2013 [YR2013]": 870136004,
    "2014 [YR2014]": 876057482,
    "Most Recent Value [YR20111]": 876057482
  },
  {
    "Country Name": "India",
    "Country Code": "IND",
    "Series Name": "Urban population",
    "Series Code": "SP.URB.TOTL",
    "2000 [YR2000]": 291466608,
    "2001 [YR2001]": 299249745,
    "2002 [YR2002]": 307913082,
    "2003 [YR2003]": 316683356,
    "2004 [YR2004]": 325568976,
    "2005 [YR2005]": 334543792,
    "2006 [YR2006]": 343617891,
    "2007 [YR2007]": 352796785,
    "2008 [YR2008]": 362065825,
    "2009 [YR2009]": 371381904,
    "2010 [YR2010]": 380743507,
    "2011 [YR2011]": 390151214,
    "2012 [YR2012]": 399686039,
    "2013 [YR2013]": 409362870,
    "2014 [YR2014]": 419234061,
    "Most Recent Value [YR20111]": 419234061
  }
]
$scope.arr=[];

	for(var i in $scope.data){
	     
		var eachdata=$scope.data[i];
		var keys=Object.keys(eachdata);

       var val;
	   var newobj={};
		
          for(var k in keys)
         {        val=eachdata[keys[k]];
     	  	      keys[k]=keys[k].replace(/ /g,"");
     	  	      if(keys[k].substr(0,1)=='2')
     	  	      {
     	  	      	keys[k]="k"+keys[k];
     	  	      }
     	  	      keys[k]=keys[k].replace("[","");
     	  	            keys[k]=keys[k].replace("]","");

     	  	      newobj[keys[k]]=val;

     	  	
         }


     $scope.arr.push(newobj);
     	
     

}


$http.post('/tax_pop');

}
		



		$scope.India_pop=function(){
$scope.isHidden=false;
$scope.ishidden=true;

	$scope.data=[
  {
    "Country Name": "India",
    "Country Code": "IND",
    "Series Name": "Population, total",
    "Series Code": "SP.POP.TOTL",
    "2001 [YR2001]": 1071888190,
    "2002 [YR2002]": 1090189358,
    "2003 [YR2003]": 1108369577,
    "2004 [YR2004]": 1126419321,
    "2005 [YR2005]": 1144326293,
    "2006 [YR2006]": 1162088305,
    "2007 [YR2007]": 1179685631,
    "2008 [YR2008]": 1197070109,
    "2009 [YR2009]": 1214182182,
    "2010 [YR2010]": 1230984504,
    "2011 [YR2011]": 1247446011,
    "2013 [YR2013]": 1279498874,
    "2014 [YR2014]": 1295291543,
    "2015 [YR2015]": 1311051000,
    "2016 [YR2016]": 1326802000
  },
  {
    "Country Name": "India",
    "Country Code": "IND",
    "Series Name": "Population, male",
    "Series Code": "SP.POP.TOTL.MA.IN",
    "2001 [YR2001]": 555285952,
    "2002 [YR2002]": 564831087,
    "2003 [YR2003]": 574318928,
    "2004 [YR2004]": 583745375,
    "2005 [YR2005]": 593103531,
    "2006 [YR2006]": 602393796,
    "2007 [YR2007]": 611602576,
    "2008 [YR2008]": 620693546,
    "2009 [YR2009]": 629620870,
    "2010 [YR2010]": 638354760,
    "2011 [YR2011]": 646873909,
    "2013 [YR2013]": 663366520,
    "2014 [YR2014]": 671467119,
    "2015 [YR2015]": 679548000,
    "2016 [YR2016]": 687626000
  },
  {
    "Country Name": "India",
    "Country Code": "IND",
    "Series Name": "Population, female",
    "Series Code": "SP.POP.TOTL.FE.IN",
    "2001 [YR2001]": 516602238,
    "2002 [YR2002]": 525358271,
    "2003 [YR2003]": 534050649,
    "2004 [YR2004]": 542673946,
    "2005 [YR2005]": 551222762,
    "2006 [YR2006]": 559694509,
    "2007 [YR2007]": 568083055,
    "2008 [YR2008]": 576376563,
    "2009 [YR2009]": 584561312,
    "2010 [YR2010]": 592629744,
    "2011 [YR2011]": 600572102,
    "2013 [YR2013]": 616132354,
    "2014 [YR2014]": 623824424,
    "2015 [YR2015]": 631502000,
    "2016 [YR2016]": 639175000
  },
  {
    "Country Name": "India",
    "Country Code": "IND",
    "Series Name": "Population growth (annual %)",
    "Series Code": "SP.POP.GROW",
    "2001 [YR2001]": 1.73217695125204,
    "2002 [YR2002]": 1.69296472529366,
    "2003 [YR2003]": 1.65386818689212,
    "2004 [YR2004]": 1.61537731932809,
    "2005 [YR2005]": 1.57722142926792,
    "2006 [YR2006]": 1.54025760745955,
    "2007 [YR2007]": 1.50293390579442,
    "2008 [YR2008]": 1.46290068776241,
    "2009 [YR2009]": 1.41937534698082,
    "2010 [YR2010]": 1.37435100597576,
    "2011 [YR2011]": 1.32840109681551,
    "2013 [YR2013]": 1.25119062623581,
    "2014 [YR2014]": 1.22673029572789,
    "2015 [YR2015]": "..",
    "2016 [YR2016]": ".."
  },
  {
    "Country Name": "India",
    "Country Code": "IND",
    "Series Name": "Rural population",
    "Series Code": "SP.RUR.TOTL",
    "2001 [YR2001]": 772638445,
    "2002 [YR2002]": 782276276,
    "2003 [YR2003]": 791686221,
    "2004 [YR2004]": 800850345,
    "2005 [YR2005]": 809782501,
    "2006 [YR2006]": 818470414,
    "2007 [YR2007]": 826888846,
    "2008 [YR2008]": 835004284,
    "2009 [YR2009]": 842800278,
    "2010 [YR2010]": 850240997,
    "2011 [YR2011]": 857294797,
    "2013 [YR2013]": 870136004,
    "2014 [YR2014]": 876057482,
    "2015 [YR2015]": 881721000,
    "2016 [YR2016]": 887153000
  },
  {
    "Country Name": "India",
    "Country Code": "IND",
    "Series Name": "Urban population",
    "Series Code": "SP.URB.TOTL",
    "2001 [YR2001]": 299249745,
    "2002 [YR2002]": 307913082,
    "2003 [YR2003]": 316683356,
    "2004 [YR2004]": 325568976,
    "2005 [YR2005]": 334543792,
    "2006 [YR2006]": 343617891,
    "2007 [YR2007]": 352796785,
    "2008 [YR2008]": 362065825,
    "2009 [YR2009]": 371381904,
    "2010 [YR2010]": 380743507,
    "2011 [YR2011]": 390151214,
    "2013 [YR2013]": 409362870,
    "2014 [YR2014]": 419234061,
    "2015 [YR2015]": 429330000,
    "2016 [YR2016]": 439649000
  },
  {
    "Country Name": 0,
    "Country Code": 0,
    "Series Name": 0,
    "Series Code": 0,
    "2001 [YR2001]": 0,
    "2002 [YR2002]": 0,
    "2003 [YR2003]": 0,
    "2004 [YR2004]": 0,
    "2005 [YR2005]": 0,
    "2006 [YR2006]": 0,
    "2007 [YR2007]": 0,
    "2008 [YR2008]": 0,
    "2009 [YR2009]": 0,
    "2010 [YR2010]": 0,
    "2011 [YR2011]": 0,
    "2013 [YR2013]": 0,
    "2014 [YR2014]": 0,
    "2015 [YR2015]": 0,
    "2016 [YR2016]": 0
  },
  {
    "Country Name": 0,
    "Country Code": 0,
    "Series Name": 0,
    "Series Code": 0,
    "2001 [YR2001]": 0,
    "2002 [YR2002]": 0,
    "2003 [YR2003]": 0,
    "2004 [YR2004]": 0,
    "2005 [YR2005]": 0,
    "2006 [YR2006]": 0,
    "2007 [YR2007]": 0,
    "2008 [YR2008]": 0,
    "2009 [YR2009]": 0,
    "2010 [YR2010]": 0,
    "2011 [YR2011]": 0,
    "2013 [YR2013]": 0,
    "2014 [YR2014]": 0,
    "2015 [YR2015]": 0,
    "2016 [YR2016]": 0
  },
  {
    "Country Name": 0,
    "Country Code": 0,
    "Series Name": 0,
    "Series Code": 0,
    "2001 [YR2001]": 0,
    "2002 [YR2002]": 0,
    "2003 [YR2003]": 0,
    "2004 [YR2004]": 0,
    "2005 [YR2005]": 0,
    "2006 [YR2006]": 0,
    "2007 [YR2007]": 0,
    "2008 [YR2008]": 0,
    "2009 [YR2009]": 0,
    "2010 [YR2010]": 0,
    "2011 [YR2011]": 0,
    "2013 [YR2013]": 0,
    "2014 [YR2014]": 0,
    "2015 [YR2015]": 0,
    "2016 [YR2016]": 0
  },
  {
    "Country Name": "Data from database: Health Nutrition and Population Statistics: Population estimates and projections",
    "Country Code": 0,
    "Series Name": 0,
    "Series Code": 0,
    "2001 [YR2001]": 0,
    "2002 [YR2002]": 0,
    "2003 [YR2003]": 0,
    "2004 [YR2004]": 0,
    "2005 [YR2005]": 0,
    "2006 [YR2006]": 0,
    "2007 [YR2007]": 0,
    "2008 [YR2008]": 0,
    "2009 [YR2009]": 0,
    "2010 [YR2010]": 0,
    "2011 [YR2011]": 0,
    "2013 [YR2013]": 0,
    "2014 [YR2014]": 0,
    "2015 [YR2015]": 0,
    "2016 [YR2016]": 0
  },
  {
    "Country Name": "Last Updated: 04/14/2016",
    "Country Code": 0,
    "Series Name": 0,
    "Series Code": 0,
    "2001 [YR2001]": 0,
    "2002 [YR2002]": 0,
    "2003 [YR2003]": 0,
    "2004 [YR2004]": 0,
    "2005 [YR2005]": 0,
    "2006 [YR2006]": 0,
    "2007 [YR2007]": 0,
    "2008 [YR2008]": 0,
    "2009 [YR2009]": 0,
    "2010 [YR2010]": 0,
    "2011 [YR2011]": 0,
    "2013 [YR2013]": 0,
    "2014 [YR2014]": 0,
    "2015 [YR2015]": 0,
    "2016 [YR2016]": 0
  }
];

$scope.arr=[];

	for(var i in $scope.data){
	     
		var eachdata=$scope.data[i];
		var keys=Object.keys(eachdata);

       var val;
	   var newobj={};
		
          for(var k in keys)
         {        val=eachdata[keys[k]];
     	  	      keys[k]=keys[k].replace(/ /g,"");
     	  	      if(keys[k].substr(0,1)=='2')
     	  	      {
     	  	      	keys[k]="k"+keys[k];
     	  	      }
     	  	      keys[k]=keys[k].replace("[","");
     	  	            keys[k]=keys[k].replace("]","");

     	  	      newobj[keys[k]]=val;

     	  	
         }


     $scope.arr.push(newobj);
     	
     

}


$http.post('/India_pop');

}
		
		
		
}]);


      
       