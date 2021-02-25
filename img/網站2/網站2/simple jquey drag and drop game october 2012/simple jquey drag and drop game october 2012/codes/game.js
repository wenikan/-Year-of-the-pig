$(document).ready(function() {
		
   
		//le main 
		var total=0;
		var main = $("#main");
		var distination = $("#destination");
		var source = $("#source");
		var res = $("#resultat");
		res.html('<label class="result"   id="resultat"  >Score :0</label>' );
		
		
		
		$("#source").droppable({
		'accept' : function (ui)
		{
			return true ; 
		},
			'addClasses': false,
			'hoverClass': 'hover',
			
			 
		'drop': function(event,ui)
		{
			
	    var obj=$(this);
		
		var piece=ui.draggable;
		var lastLocation=$.data(piece[0],'lastLocation');
		//var lastLocation=$.data(obj,'lastLocation'); 
		
		
       // ui.draggable.appendTo(obj);
		piece.appendTo($(this));
		
   //alert(  lastLocation.position().top  + piece.position().top      );
	
		
	
	
	
		piece.css(
		{
		'left': lastLocation.position().left+'px',
		'top': ( lastLocation.position().top  + piece.position().top   )+ 'px',
		
		});
		
		}
			});
		

		
		
		//element 1 
		var elmt1 = $( "#elmt1" );
		var elmt2 = $( "#elmt2" );
		var dest1 = $( "#dest1" );
		var dest2 = $( "#dest2" );
		
		var elmt3 = $( "#elmt3" );
		var elmt4 = $( "#elmt4" );
		var dest3 = $( "#dest3" );
		var dest4 = $( "#dest4" );
		
		//en va enregistrer l'etat du image  dabord
   
	
	//rendre les elmt mouvable	
	$( "#elmt1" ).draggable(
	{
		'addClasses': false,
		 'appendTo': 'body',
         'zIndex': 10000,
		'start': function(event,ui)
    {
        /* si c dans la bonne position on arrete le drag */
        if($.data(this,'ok'))
        {
            return false;
        }
		//sinon on change le z-index pr quelle ne cache pas
	//	var zIndex=$( "#elmt1" ).draggable( "option", "zIndex" );
		
		
		
		//alert(zIndex);

       
    },

    'revert': 'invalid',
    'containment': main
		
	}
	
	
	
	
	).appendTo(main);
	
	
	 //alert(jQuery.data( elmt1, 'ok' ));
	//alert(dest1.is(':parent') );
	//alert(jQuery.data( elmt1, 'lastLocation' ));
	
	

/* copier coller */


	elmt2.draggable(
	{
		'addClasses': false,
		'appendTo': 'body',
         'zIndex': 10000,
		'start': function(event,ui)
    {
        /* si c dans la bonne position on arrete le drag */
        if($.data(this,'ok'))
        {
            return false;
        }

       
    },
	
    'revert': 'invalid',
    'containment': main
		
		}
	
	).appendTo(main);		


//rendre la destination droppabla 
	dest1.droppable(
	{
	  'accept': function(ui)
    {
		/* on accepte si ssi la place est vide */
		//$(this).is(":empty");
	   // res.text(	$('#dest1').is(':empty') ) ;
	//	return( $(this).attr('data-check')== 'f' ) ; 
		
		//return( $(this).css('background-image')== 'url(file:///C:/Users/Riadh/Desktop/my%20puzzle/images/guess2.png)' ) ;
	//	return (ui.hasClass('verif'));
     // return ( $(this).is(':parent') );
	//alert(dest1.is(':parent') );
	return ( $(this).is(':empty') );
	// return true ; 
    },
    'addClasses': false,
	'hoverClass': 'hover',
	 'drop': function(event,ui)
    {
        var obj=$(this);

        ui.draggable.appendTo(obj);
		
		
		
       $.data(ui.draggable[0],'lastLocation',obj);

        ui.draggable.css(
        {
            'left': '0px',
            'top': '0px'
        });
		
	
		
		
		
    //si la place est juste on la fixe ou on affiche resultat on compare l'attribut data-num
	if(obj.attr('data-num')==ui.draggable.attr('data-num'))
	{
		$.data(ui.draggable[0],'ok',true);
		//res.text(parseInt(res.text())+1 );
		
		obj.css('background-image','none'); //pr suprimer l'ancien arr plan
		
		 ui.draggable.css('cursor','default'); //on onleve le curseur 
		  /* on ajoute un effet flash si c juste*/
            $('<span></span>').css(
            {
                'position': 'absolute',
                'left': '0px',
                'top': '0px',
                'display':'block',
                'width': '100%',
                'height': '100%',
                'background-color': '#fff'
            }).appendTo(ui.draggable)
            .fadeOut(2000,function()
            {
                $(this).remove();
            });
		total++;
		res.html('<label class="result"   id="resultat"  >Score :'+ total +'</label>' ) ;
		if(total==4)
		{
			alert("you win");
			}
	}//fin if
	
	//end drop
	}

	
	}).appendTo(destination);//fin dest.droppable()



dest2.droppable(
{
	'accept': function(ui)
    {
		/* on accepte si ssi la place est vide */
	 // res.text( ui.hasClass('verif')  ) ;
	//   return (ui.hasClass('verif'));
		//return( $(this).attr('data-check')== 'f' ) ; 
		
	//	return( $(this).css('background-image')== 'url(file:///C:/Users/Riadh/Desktop/my%20puzzle/images/guess2.png)' ) ;
		//alert( 'parent:'+$(this).is(':parent')+'empty:'+$(this).is(':empty')   );
     // return ( $(this).is(':parent') );
	//alert(dest1.is(':parent') );
	
	 return ( $(this).is(':empty') );
	 //return true ; 
    },
    'addClasses': false,
	'hoverClass': 'hover',
	 'drop': function(event,ui)
    {
         obj=$(this);

        ui.draggable.appendTo(obj);
		
		//pour fermer l'ajout multiple
		obj.attr('data-check','t');
		
       $.data(ui.draggable[0],'lastLocation',obj);

        ui.draggable.css(
        {
            'left': '0px',
            'top': '0px'
        });
		
		
    //si la place est juste on la fixe ou on affiche resultat on compare l'attribut data-num
	if(obj.attr('data-num')==ui.draggable.attr('data-num'))
	{
		$.data(ui.draggable[0],'ok',true);
	//	res.text(parseInt(res.text())+1 );
		
		obj.css('background-image','none'); //pr suprimer l'ancien arr plan
		
		 ui.draggable.css('cursor','default'); //on onleve le curseur 
		  /* on ajoute un effet flash si c juste*/
            $('<span></span>').css(
            {
                'position': 'absolute',
                'left': '0px',
                'top': '0px',
                'display':'block',
                'width': '100%',
                'height': '100%',
                'background-color': '#fff'
            }).appendTo(ui.draggable)
            .fadeOut(2000,function()
            {
                $(this).remove();
            });
		total++;
	res.html('<label class="result"   id="resultat"  >Score :'+ total +'</label>' ) ;
		//res.text(res.text()+total   );
		if(total==4)
		{
			alert("you win");
		}
	}//fin if
	
	//end drop
	}
	
}).appendTo(destination);// droppable


//fin de partie pr elmt 1 et elm2 , dest1 et dest2 , mtn le reste copier coller pr elmt3 4 et leur dest
elmt3.draggable(
	{
		'addClasses': false,
		'appendTo': 'body',
         'zIndex': 10000,
		'start': function(event,ui)
    {
        /* si c dans la bonne position on arrete le drag */
        if($.data(this,'ok'))
        {
            return false;
        }

       
    },
	
    'revert': 'invalid',
    'containment': main
		
		}
	
	).appendTo(main);		


//elmt4
elmt4.draggable(
	{
		'addClasses': false,
		'appendTo': 'body',
         'zIndex': 10000,
		'start': function(event,ui)
    {
        /* si c dans la bonne position on arrete le drag */
        if($.data(this,'ok'))
        {
            return false;
        }

       
    },
	
    'revert': 'invalid',
    'containment': main
		
		}
	
	).appendTo(main);		


//dest3
dest3.droppable(
{
	'accept': function(ui)
    {
		/* on accepte si ssi la place est vide */
	
	 return ( $(this).is(':empty') );
 
    },
    'addClasses': false,
	'hoverClass': 'hover',
	 'drop': function(event,ui)
    {
         obj=$(this);

        ui.draggable.appendTo(obj);
		
		//pour fermer l'ajout multiple
		obj.attr('data-check','t');
		
       $.data(ui.draggable[0],'lastLocation',obj);

        ui.draggable.css(
        {
            'left': '0px',
            'top': '0px'
        });
		
		
    //si la place est juste on la fixe ou on affiche resultat on compare l'attribut data-num
	if(obj.attr('data-num')==ui.draggable.attr('data-num'))
	{
		$.data(ui.draggable[0],'ok',true);
	//	res.text(parseInt(res.text())+1 );
		
		obj.css('background-image','none'); //pr suprimer l'ancien arr plan
		
		 ui.draggable.css('cursor','default'); //on onleve le curseur 
		  /* on ajoute un effet flash si c juste*/
            $('<span></span>').css(
            {
                'position': 'absolute',
                'left': '0px',
                'top': '0px',
                'display':'block',
                'width': '100%',
                'height': '100%',
                'background-color': '#fff'
            }).appendTo(ui.draggable)
            .fadeOut(2000,function()
            {
                $(this).remove();
            });
		total++;
	res.html('<label class="result"   id="resultat"  >Score :'+ total +'</label>' ) ;
		//res.text(res.text()+total   );
		if(total==4)
		{
			alert("you win");
		}
	}//fin if
	
	//end drop
	}
	
}).appendTo(destination);// droppable


//dest4
dest4.droppable(
{
	'accept': function(ui)
    {
		/* on accepte si ssi la place est vide */
	
	 return ( $(this).is(':empty') );
 
    },
    'addClasses': false,
	'hoverClass': 'hover',
	 'drop': function(event,ui)
    {
         obj=$(this);

        ui.draggable.appendTo(obj);
		
		//pour fermer l'ajout multiple
		obj.attr('data-check','t');
		
       $.data(ui.draggable[0],'lastLocation',obj);

        ui.draggable.css(
        {
            'left': '0px',
            'top': '0px'
        });
		
		
    //si la place est juste on la fixe ou on affiche resultat on compare l'attribut data-num
	if(obj.attr('data-num')==ui.draggable.attr('data-num'))
	{
		$.data(ui.draggable[0],'ok',true);
	//	res.text(parseInt(res.text())+1 );
		
		obj.css('background-image','none'); //pr suprimer l'ancien arr plan
		
		 ui.draggable.css('cursor','default'); //on onleve le curseur 
		  /* on ajoute un effet flash si c juste*/
            $('<span></span>').css(
            {
                'position': 'absolute',
                'left': '0px',
                'top': '0px',
                'display':'block',
                'width': '100%',
                'height': '100%',
                'background-color': '#fff'
            }).appendTo(ui.draggable)
            .fadeOut(2000,function()
            {
                $(this).remove();
            });
		total++;
	res.html('<label class="result"   id="resultat"  >Score :'+ total +'</label>' ) ;
		//res.text(res.text()+total   );
		if(total==4)
		{
		$( "#dialog" ).dialog({
            autoOpen: false,
            show: "blind",
            hide: "explode"
        }).dialog( "open" );
		}
	}//fin if
	
	//end drop
	}
	
}).appendTo(destination);// droppable

}); //fin fct
		 