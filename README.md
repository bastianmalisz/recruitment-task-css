# Zadanie rekrutacyjne Front End Developer

Witaj,

Prosimy Ci� o wykonanie poni�szego zadania najlepiej jak tylko umiesz. Pozwoli to nam lepiej oceni� Twoje umiej�tno�ci :)
Masz na to czas do ko�ca miesi�ca. Je�eli nie zd��ysz spe�ni� wszystkich za�o�e� przeka� nam to co masz gotowe i opisz braki.

## OPIS

W katalogu znajdziesz projekt graficzny. Prosimy Ci� o jego poci�cie oraz napisanie funkcjonalno�ci dla poszczeg�lnych element�w. Swoje prace r�b jako fork tego repozytorium.


### CEL

- Poci�ta strona ma wype�nia� ca�e okno przegl�darki. Przy mniejszych rozdzielczo�ciach (w granicach 960-1920px) elementy powinny si� proporcjonalnie zmniejszy� - chodzi o osi�gni�cie efektu zbli�onego do ogl�dania projektu na fullscreenie niezale�nie od rozdzielczo�ci ekranu (przyk�adowo element na FHD ma 100px wysoko�ci, wi�c przy rozdzielczo�ci 1366px kt�ra jest o oko�o 30% mniejsza od FHD dany element zmieni wysoko�� na 70px). Nie chodzi tu by zmniejszaj�c okno przegl�darki elementy si� od razu skalowa�y ale dopiero po przekroczeniu breakpointu.

- Header powinien by� 'fixed'. Logo HTML5 w headerze powinno linkowa� do '/' .  

- Stopka strony w przypadku ma�ej ilo�ci tre�ci w contencie powinna i tak by� na samym dole strony a nie 'dokleja�' si� pod contentem.

- W bloku pierwszym s� radiobuttony, ich wyb�r a nast�pnie klikni�cie przycisku w bloku drugim wykona akcj� podmiany lub doklejenia tekstu w bloku ostatnim. Tre�ci kt�re maj� zosta� u�yte nale�y pobra� z JSONa (szczeg�y ni�ej). Opcja pierwsza wybierze zawsze tre�� pierwsz�, opcja druga drug� a opcja losowa dowoln� z pozosta�ych. Ka�da osobna tre�� w ostatnim bloku powinna by� obj�ta tagiem <article>. Doklejaj�c tre�� nale�y unikn�� powielania ju� istniej�cej tre�ci (w przypadku u�ycia opcji losowej nale�y wylosowa� kolejn� jeszcze nie u�yt� tre��). 

- Button 'poka�' w footerze po klikni�ciu pokazuje ramk� (wysuwa j� spod footera) z 2 klikalnymi opcjami. Pierwsza przywraca stron� do pocz�tkowych ustawie�, druga w headerze dokleja Twoje imi� i nazwisko.


### PLIK JSON

Zbudowa� plik z tablic� przynajmniej 6 element�w zawieraj�cych dowoln� tre��. Wolno w JSONie trzyma� dodatkowe dane je�eli upro�ci to wykonanie zadania.


### WARUNKI

- Nie u�ywa� bootstrapa ani innych podobnych framework�w. Na potrzeby JS'a dozwolone jest jQuery.
- Nie u�ywa� display: grid, dozwolony (a nawet mocno zalecany) flexbox.
- Przynajmniej 3 breakpointy w zakresie 960-1920px (samemu dobra� jakie - warto zwr�ci� uwag� na to kt�re rozdzielczo�ci s� popularne).
- Poni�ej 960px wed�ug uznania dokona� zmian w projekcie by jak najlepiej przedstawi� stron� (wykorzystuj�c przyk�ad projektu mobilnego).
- Strona ma dzia�a� poprawnie w aktualnych wersjach Edge, Firefox, Chrome, Safari, Opera. Z tego wzgl�du nie ma sensu u�ywania prefix�w zapewniaj�cych kompatybilno�� w starszych przegl�darkach.


### DODATKOWE PLUSY

- Brak plik�w graficznych w ko�cowym projekcie.
- CSS IS AWESOME w footerze - po najechaniu myszk� ramka (bez tekstu) powinna wykona� animowany obr�t.
- Zastosowanie SCSS (ale bez zb�dnego pisania skomplikowanych funkcji na potrzeby ich jednokrotnego wykorzystania).
- Zastosowanie BEM (ale tylko je�eli faktycznie ma si� �wiadomo�� �e robi si� to dobrze, b��dne u�ycie b�dzie dzia�a�o na niekorzy��)
- Logiczne wykorzystanie jednostek rem, em (w efekcie jak najmniejsze u�ycie jednostki px).
- Jak najmniej kodu odpowiedzialnego za responsywno��.
- Wsparcie dla IE11.
- Doklejaj�c tre�� sprawi� by w ostatnim bloku tre�ci by�y posortowane alfabetycznie.
- Przy doklejaniu tre�ci w przypadku nie mo�liwo�ci spe�nienia warunku by by�a unikalna wy�wietli� stosowny komunikat.
- Button w footerze ("poka�") wysuwaj�cy ramk� bez u�ycia JSa.

## UWAGI
Projekt nie musi by� 'pixel perfect' (cho� warto pr�bowa�). Z uwagi na brak pliku �r�d�owego a jedynie jpg nale�y wymiary samemu zmierzy�. Ale przyk�adowo je�eli jaki� element po zmierzeniu wydaje si� �e ma 139px to dobr� praktyk� b�dzie zaokr�gli� go do 140px. Je�eli osi�gni�cie jakiej� ma�o istotnej dekoracji wymaga� b�dzie dziesi�tek linii dodatkowego kodu to lepiej sobie to odpu�ci�.
U�yty w projekcie font to OpenSans.

## WYSY�KA PRACY
Nale�y przes�a� link do swojego repozytorium z rozwi�zaniem (b�d�cy fork'iem tego repozytorium). Dodatkowo wrzu� dokument tekstowy z list� rzeczy kt�rych nie uda�o si� wykona� z cel�w g��wnych oraz list� rzeczy kt�re zrobiono dodatkowo.

POWODZENIA :)
