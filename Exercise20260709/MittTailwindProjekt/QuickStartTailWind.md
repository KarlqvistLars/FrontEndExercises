## QuickStart TailWind

Att starta ett helt rent projekt från grunden med Tailwind v4 utan Node.js är superenkelt och går väldigt snabbt. Eftersom du kör .NET-utbildning i botten (ser jag på din mappsökväg) så är detta perfekta sättet att hålla det "lättviktigt".

## Här är din steg-för-steg-guide för att sätta upp det i Windows (PowerShell):

### Steg 1: Skapa din projektmapp
Öppna PowerShell och skapa en ny mapp för ditt projekt och gå in i den.

```powershell
# PowerShell:
mkdir MittTailwindProjekt
cd MittTailwindProjekt
```
### Steg 2: Ladda ner Tailwind Standalone CLI
Du behöver ladda ner den färdiga .exe-filen från Tailwinds officiella GitHub. För att göra det direkt via PowerShell, kör följande kommando (detta laddar ner v4 för Windows x64):

```powershell
# PowerShell:
Invoke-WebRequest -Uri "https://github.com/tailwindcss/tailwindcss/releases/latest/download/tailwindcss-windows-x64.exe" -OutFile "tailwind.exe"
```
(Om du hellre vill göra det manuellt: Gå till Tailwinds GitHub Releases, ladda ner tailwindcss-windows-x64.exe och lägg den i din projektmapp och döp om den till tailwind.exe).

### Steg 3: Skapa filstrukturen
Nu skapar vi en mapp för din CSS samt filerna som behövs. Kör dessa kommandon i PowerShell:

```powershell
# PowerShell:
mkdir src
New-Item index.html
New-Item src/input.css
```

### Steg 4: Fyll på med kod
Nu öppnar du din projektmapp i valfri textredigerare (t.ex. VS Code) och lägger till följande:

I src/input.css:
Lägg till denna enda rad (detta är allt som behövs för Tailwind v4):
```css
CSS:
@import "tailwindcss";
```
I index.html:
Klistra in en vanlig HTML-mall, men se till att du länkar till src/output.css (som kommer att skapas i nästa steg):
```HTML
HTML:
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind Utan Node</title>
    <link rel="stylesheet" href="src/output.css">
</head>
<body class="bg-gradient-to-br from-slate-900 to-slate-800 text-white min-h-screen flex flex-col justify-center items-center">
    <div class="p-8 bg-slate-700/50 rounded-2xl shadow-xl border border-slate-600 backdrop-blur-md text-center">
        <h1 class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-2">
            Det fungerar!
        </h1>
        <p class="text-slate-300">Projektet rullar helt utan Node.js eller npm.</p>
    </div>
</body>
</html>
```

### Steg 5: Starta Tailwinds kompilator
Gå tillbaka till din terminal (se till att du står i mappen MittTailwindProjekt) och kör igång Tailwind i "watch"-läge:

```powershell
# PowerShell:
./tailwind -i src/input.css -o src/output.css --watch
```
#### Vad som händer nu:

* Tailwind skapar automatiskt filen src/output.css åt dig.
* Den scannar din index.html, hittar dina klasser (som bg-gradient-to-br, text-4xl osv.) och bygger en optimerad CSS-fil.
* Terminalen lämnas öppen. Varje gång du gör en ändring och sparar din HTML-fil, kommer Tailwind att uppdatera CSS-filen blixtsnabbt i bakgrunden. 
* Nu är det bara att dubbelklicka på din index.html (eller köra via "Live Server" i VS Code) och börja koda!