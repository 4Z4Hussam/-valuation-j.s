// Les fonctions 

/*1 - Créer les 2 fonctions suivantes

* `produit(x, y)` qui retourne le produit des 2 variables `x`, `y` passées en paramètres.
* `afficheImg(image)` qui affiche l'image passée en paramètre. Créer la page HTML correspondant au résultat ci-dessous.*/


     var nombre;
     var multiple;
     var image = "";

     function cube(nombre) 
     {
	    nombre = prompt("Saisissez un nombre entier");
	    cube = nombre * nombre * nombre;
	     console.log("Le cube de " + nombre + " est égal à " + cube);
	    return cube;
     }

     function produit(nombre, multiple) 
     {
	    produit = nombre * multiple;
	    console.log("Le produit de " + nombre + " x " + multiple + " est égal à " + produit);
	    return produit;
     }

     function afficheImg(image) 
     {
       // Comme on a besoin d'afficher du HTML, il faut utiliser la fonction document.write(); 
      
       // Attention au guillements pour la concaténation, il faut échapper avec des \ les guillemets des attributs HTML
	   document.write("<img src=\""+image+"\">");
     }

     // Appels des fonctions
     var resultat = cube(3);

     console.log("cube : "+cube);
     afficheImg("papillon.jpg");
     
/* Exercice 2 : Compter le nombre de lettres
Ecrivez une fonction qui prend deux paramètres :

* `phrase` de type _string_
* `lettre` de type _string_
La fonction compte le nombre de fois ou `lettre` apparaît dans `phrase`. */

        var compteur = 0;
        var phrase = prompt("Saisir une phrase");
        var lettre = prompt("Saisir une lettre");
				
		for (i=0; i<phrase.length; i++)
		{
		   if (phase[i] == lettre) 
		   {	
 	          compteur++;
		   }
		}
		
        alert("La lettre '"+lettre+"' est présente "+compteur+" fois dans '"+phrase+"'");

/* Exercice 3 : Menu

A partir du menu affiché à l'écran (avec `prompt`), vous exécuterez, par les 3 premières options, les exercices 
déjà réalisés, appelés sous forme de fonction.   

L'option 4 est une généralisation de la recherche du nombre de voyelles dans un mot : elle permet de rechercher la présence de n'importe quel caractère dans une chaîne.

La recherche de voyelles dans une chaîne constitue une surcharge de cette fonction, dans la mesure où les caractères à rechercher seront fournis sous forme de chaîne.*/

     function multiple() 
     {
         var nombre = parseInt(prompt("entrez un nombre"));
         var multi = parseInt(prompt("entrez un nombre"));
         
         while (multi > 0) 
         {
             alert(nombre*multi); 
             multi--;
         }
     }

     function somme_moyenne() 
     {
          var i=0;
          var somme=0;
          var moyenne=0;
          var nombre=0;
	      nb = parseInt(prompt("moyenne"));
	      notes = new Array(nb);
	
          for(i=1;i<=nb;i++)
	      {
	         x = parseInt(prompt("entre un nombre"));
	         notes[i-1] = parseInt(prompt("entre un second nombre"));
	         somme = x + notes[i-1];
	      }
	
	    moyenne = somme/nb;
		alert("la somme des nombres est :"+somme);
		alert("la moyenne des nombres est :"+moyenne);
	} 

    function nb_voyelles()
	{
	    var voyelles = 0;
        var mot = prompt("Saisir un mot :");
				
		for (i=0;i<mot.length;i++)
		{
		   if (mot[i] == "a" || mot[i] == "e" || mot[i] == "i" || mot[i] == "o" || mot[i] == "u" || mot[i] == "y") 
		   {	
 	          voyelles++;
		   }
		}
		
        alert("le nombre de voyelles dans :"+mot+" est de "+voyelles);
	}

    function comptelettre()
	{ 
        var phrase = prompt("entrez un mot ou une phrase");
	    var lettre = prompt("entrez une lettre");
    
        var compteur=0;
	    var longueur=texte.length;
	    alert(longueur);
		
        for(i=0;i<=longueur;i++)
	    {
	       var d=texte.substr(i,1);
		       
           if (lettre==d)
	       {
	          compteur++;
	       }
		}
	
    	alert(compteur);
	}

     var choix = prompt("entrz le chiffre voulue selon l'operation \n1-multiple \n2-somme et moyenne \n3-recherche du nombre de voyelles \n4-recherche du nombre des caractères suivants");
    
     switch (choix) 
     {
         case "1":
            multiple();
            break;
    
         case "2":
            somme_moyenne()
         	break;
	
	     case"3":
	        nb_voyelles();
		    break;

		 case"4":
            comptelettre();
            break;

         default:
            alert("Choix non valide");
     } 

/* Exercice 4 : String Token

Concevez la fonction `strtok()` qui  prend 3 paramètres `str1`, `str2`, `n` en entrée et renvoie une 
chaîne de caractères : 

* `str1` est composée d'une liste de mots séparés par le caractère `str2`.
* `strtok` sert à extraire le n<sup>ième</sup> mot de `str1`.

Exemple : pour str1 = « robert ;dupont ;amiens ;80000 » , strtok (str1, « ; », 3) doit retourner
"amiens".*/

    function strtok(str1,str2,n) 
    {
        var res = str1.split(str2);
        console.log(res[n]);
     }  

     var str1 = "robert ;dupont ;amiens ;80000";
     var str2 = ";";
     var n = 2;
     
     strtok(str1, str2, n);