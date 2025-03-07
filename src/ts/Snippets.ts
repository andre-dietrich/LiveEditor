const Snippets = [
  {
    documentation:
      "Add ASCII art drawings, sketches, or what ever you want, simply\nby enclosing it with at least four back tics (````).\n\nExamples:\n\n  `````````````````````````````````\n                           .--->  F\n  A       B     C   D     /\n  *-------*-----*---*----*----->  E\n                       ^ v          /   '--->  G\n             B --> C -'\n  `````````````````````````````````",
    insertText:
      "``````````````````````````````````````````````````\n${1:                             .--->  F\n    A       B     C   D     /\n    *-------*-----*---*----*----->  E\n                         ^ v          /   '--->  G\n               B --> C -'}\n``````````````````````````````````````````````````",
    label: 'lia-ascii-example',
  },
  {
    documentation:
      'Add styling to your ASCII art drawings, sketches. Set the maximum\nsize or center it.\n\nExamples:\n\n  <!-- style="display: block;\n              margin-left: auto;\n              margin-right: auto;\n              max-width: 315px;" -->\n  ``````````````````````````````````````````````````\n  ${1:                             .--->  F\n      A       B     C   D     /\n      *-------*-----*---*----*----->  E\n                           ^ v          /   \'--->  G\n                 B --> C -\'}\n  ``````````````````````````````````````````````````',
    insertText:
      '<!-- style="display: block; margin-left: auto; margin-right: auto; max-width: 315px;" -->\n``````````````````````````````````````````````````\n${1:                             .--->  F\n    A       B     C   D     /\n    *-------*-----*---*----*----->  E\n                         ^ v          /   \'--->  G\n               B --> C -\'}\n``````````````````````````````````````````````````',
    label: 'lia-ascii-example-css',
  },
  {
    documentation: 'Inline `code` has `back-ticks around` it.',
    insertText: '`${1:code}`',
    label: 'lia-code-inline',
  },
  {
    documentation:
      'To insert a code block with syntax highlight, enclose your code snippet with three back-ticks (```) that is followed by a language code. To search all language codes, visit the link below, but in most cases you can simply add either the name of the language or the typical file-ending.\n\nExamples:\n\n  ```javascript\n  var s = "JavaScript syntax highlighting";\n  alert(s);\n  s;\n  ```\n\n  ```python\n  s = "Python syntax highlighting"\n  print s\n  ```\n\n  ```\n  No language indicated, so no syntax highlighting.\n  But let\'s throw in a <b>tag</b>.\n  ```',
    insertText:
      '```${1|abap,abc,actionscript,ada,adoc,ahk,alda,angelscript,apache,apache_conf,apacheconf,apex,applescript,aql,arduino,arm,armasm,as,asc,asciidoc,asl,asm,aspectj,atom,autohotkey,avrasm,bash,basic,bat,batchfile,c,c#,c++,c9search,cc,cirru,cjs,clj,clojure,cmake,cmake.in,cmd,cobol,coffee,coffeescript,coldfusion,console,cpp,cr,craftcms,crm,crmsh,crystal,cs,csharp,cson,csound_document,csound_orchestra,csound_score,csp,css,curly,cxx,d,dart,delphi,dfm,diff,django,docker,dockerfile,dos,dot,dpr,drools,edifact,edn,eiffel,ejs,elixir,elm,erl,erlang,ex,exs,f#,f90,f95,feature,forth,fortran,fs,fsharp,fsl,ftl,gcode,gemspec,gherkin,gitignore,glsl,go,gobstones,golang,graphqlschema,groovy,gyp,h,h++,haml,handlebars,haskell,haskell_cabal,haxe,hbs,hh,hjson,hpp,hs,html,htmlbars,html_elixir,html.handlebars,html.hbs,html_ruby,hx,hxx,hy,hylang,iced,ini,ino,io,ipython,irb,jack,jade,java,javascript,jinja,js,json,json5,jsoniq,jsp,jssm,jsx,julia,kot,kotlin,kt,kts,latex,latte,less,liquid,lisp,livescript,logiql,logtalk,ls,lsl,lua,luapage,lucene,mak,make,makefile,markdown,mask,matlab,maze,md,mediawiki,mel,mips,mipsasm,mixal,mjs,mk,mkd,mkdown,ml,mm,mushcode,mysql,nc,nginx,nginxconf,nim,nix,nixos,nsis,nunjacks,obj-c,obj-c++,objc,objective-c++,objectivec,ocaml,openscad,osascript,pas,pascal,patch,pb,pbi,pcmk,pde,perl,pgsql,php,php_laravel_blade,pig,pl,plaintext,plist,pm,podspec,postgres,postgresql,powershell,pp,praat,prisma,processing,prolog,properties,protobuf,ps,ps1,puppet,purebasic,pwsh,py,python,qml,qt,r,raku,razor,rb,rdoc,red,redshift,rest,rhtml,rs,rss,rst,ruby,rust,sass,scad,scala,scheme,scss,sh,shell,shellsession,sjs,slim,smarty,smithy,soy,space,sparql,sql,sqlserver,styl,stylus,svg,swift,tcl,terraform,tex,text,textile,thor,tk,toml,ts,tsx,turtle,twig,txt,typescript,vala,vb,vbnet,vbs,vbscript,velocity,verilog,vhdl,visualforce,wollok,wsf,x86asm,xhtml,xjb,xml,xpath,xq,xquery,xsd,xsl,yaml,yml,zeek|}\n${2:var s = "JavaScript syntax highlighting";\nalert(s);}\n```',
    label: 'lia-code-block',
  },
  {
    documentation:
      'To insert an executable and editable code block with syntax highlight, insert a common Markdown code block with a succeeding <script> tag. The macro @input is replaced with the current user input and gets evaluated in a try and catch block. Using JavaScript you can also insert interpreters to other languages or access them. In these cases you will have to change the content of the script tag. To get an impression about the possibilities, click on the link below.\nThe result of the script or the error are passed to a command-line like output beneath the code-block.\n\nExample:\n\n  ```javascript\n  var s = "JavaScript syntax highlighting";\n  alert(s);\n  ```\n  <script>@input</script>',
    insertText:
      '```${1|abap,abc,actionscript,ada,adoc,ahk,alda,angelscript,apache,apache_conf,apacheconf,apex,applescript,aql,arduino,arm,armasm,as,asc,asciidoc,asl,asm,aspectj,atom,autohotkey,avrasm,bash,basic,bat,batchfile,c,c#,c++,c9search,cc,cirru,cjs,clj,clojure,cmake,cmake.in,cmd,cobol,coffee,coffeescript,coldfusion,console,cpp,cr,craftcms,crm,crmsh,crystal,cs,csharp,cson,csound_document,csound_orchestra,csound_score,csp,css,curly,cxx,d,dart,delphi,dfm,diff,django,docker,dockerfile,dos,dot,dpr,drools,edifact,edn,eiffel,ejs,elixir,elm,erl,erlang,ex,exs,f#,f90,f95,feature,forth,fortran,fs,fsharp,fsl,ftl,gcode,gemspec,gherkin,gitignore,glsl,go,gobstones,golang,graphqlschema,groovy,gyp,h,h++,haml,handlebars,haskell,haskell_cabal,haxe,hbs,hh,hjson,hpp,hs,html,htmlbars,html_elixir,html.handlebars,html.hbs,html_ruby,hx,hxx,hy,hylang,iced,ini,ino,io,ipython,irb,jack,jade,java,javascript,jinja,js,json,json5,jsoniq,jsp,jssm,jsx,julia,kot,kotlin,kt,kts,latex,latte,less,liquid,lisp,livescript,logiql,logtalk,ls,lsl,lua,luapage,lucene,mak,make,makefile,markdown,mask,matlab,maze,md,mediawiki,mel,mips,mipsasm,mixal,mjs,mk,mkd,mkdown,ml,mm,mushcode,mysql,nc,nginx,nginxconf,nim,nix,nixos,nsis,nunjacks,obj-c,obj-c++,objc,objective-c++,objectivec,ocaml,openscad,osascript,pas,pascal,patch,pb,pbi,pcmk,pde,perl,pgsql,php,php_laravel_blade,pig,pl,plaintext,plist,pm,podspec,postgres,postgresql,powershell,pp,praat,prisma,processing,prolog,properties,protobuf,ps,ps1,puppet,purebasic,pwsh,py,python,qml,qt,r,raku,razor,rb,rdoc,red,redshift,rest,rhtml,rs,rss,rst,ruby,rust,sass,scad,scala,scheme,scss,sh,shell,shellsession,sjs,slim,smarty,smithy,soy,space,sparql,sql,sqlserver,styl,stylus,svg,swift,tcl,terraform,tex,text,textile,thor,tk,toml,ts,tsx,turtle,twig,txt,typescript,vala,vb,vbnet,vbs,vbscript,velocity,verilog,vhdl,visualforce,wollok,wsf,x86asm,xhtml,xjb,xml,xpath,xq,xquery,xsd,xsl,yaml,yml,zeek|}\n${2:var s = "JavaScript syntax highlighting";\nalert(s);\ns;}\n```\n<script>${3:@input}</script>',
    label: 'lia-code-block-js',
  },
  {
    documentation:
      'You can name your snippets by adding just after the language code. At default, it will be visible, but by adding a plus (+) in front of your filename you can make this more expressible, whereby a minus (-) will hide it at first. In this way you can also group multiple files into a (executable) project.\n\nExamples:\n\n  ```javascript    Visible.js\n  alert("Visble JavaScript file";);\n  ```\n\n  ```javascript   +Visible.js\n  alert("Also visible JavaScript file");\n  ```\n\n  ```javascript   -Hidden.js\n  alert("Hidden JavaScript file on init");\n  ```',
    insertText:
      '```${1|abap,abc,actionscript,ada,adoc,ahk,alda,angelscript,apache,apache_conf,apacheconf,apex,applescript,aql,arduino,arm,armasm,as,asc,asciidoc,asl,asm,aspectj,atom,autohotkey,avrasm,bash,basic,bat,batchfile,c,c#,c++,c9search,cc,cirru,cjs,clj,clojure,cmake,cmake.in,cmd,cobol,coffee,coffeescript,coldfusion,console,cpp,cr,craftcms,crm,crmsh,crystal,cs,csharp,cson,csound_document,csound_orchestra,csound_score,csp,css,curly,cxx,d,dart,delphi,dfm,diff,django,docker,dockerfile,dos,dot,dpr,drools,edifact,edn,eiffel,ejs,elixir,elm,erl,erlang,ex,exs,f#,f90,f95,feature,forth,fortran,fs,fsharp,fsl,ftl,gcode,gemspec,gherkin,gitignore,glsl,go,gobstones,golang,graphqlschema,groovy,gyp,h,h++,haml,handlebars,haskell,haskell_cabal,haxe,hbs,hh,hjson,hpp,hs,html,htmlbars,html_elixir,html.handlebars,html.hbs,html_ruby,hx,hxx,hy,hylang,iced,ini,ino,io,ipython,irb,jack,jade,java,javascript,jinja,js,json,json5,jsoniq,jsp,jssm,jsx,julia,kot,kotlin,kt,kts,latex,latte,less,liquid,lisp,livescript,logiql,logtalk,ls,lsl,lua,luapage,lucene,mak,make,makefile,markdown,mask,matlab,maze,md,mediawiki,mel,mips,mipsasm,mixal,mjs,mk,mkd,mkdown,ml,mm,mushcode,mysql,nc,nginx,nginxconf,nim,nix,nixos,nsis,nunjacks,obj-c,obj-c++,objc,objective-c++,objectivec,ocaml,openscad,osascript,pas,pascal,patch,pb,pbi,pcmk,pde,perl,pgsql,php,php_laravel_blade,pig,pl,plaintext,plist,pm,podspec,postgres,postgresql,powershell,pp,praat,prisma,processing,prolog,properties,protobuf,ps,ps1,puppet,purebasic,pwsh,py,python,qml,qt,r,raku,razor,rb,rdoc,red,redshift,rest,rhtml,rs,rss,rst,ruby,rust,sass,scad,scala,scheme,scss,sh,shell,shellsession,sjs,slim,smarty,smithy,soy,space,sparql,sql,sqlserver,styl,stylus,svg,swift,tcl,terraform,tex,text,textile,thor,tk,toml,ts,tsx,turtle,twig,txt,typescript,vala,vb,vbnet,vbs,vbscript,velocity,verilog,vhdl,visualforce,wollok,wsf,x86asm,xhtml,xjb,xml,xpath,xq,xquery,xsd,xsl,yaml,yml,zeek|} ${2:title.js}\n${3:var s = "Named JavaScript syntax highlighting";\nalert(s);}\n```',
    label: 'lia-code-block-name',
  },
  {
    documentation:
      'To insert a named and executable and code snippet. The macro @input is replaced with the current user input and gets evaluated in a try and catch block. Using JavaScript you can also insert interpreters to other languages or access them. In these cases you will have to change the content of the <script> tag. To get an impression about the possibilities, click on the link below.\nThe result of the script or the error are passed to a command-line like output beneath the code-block.\n\nExample:\n\n  ```javascript   +Tile.js\n  var s = "Visible JavaScript syntax highlighting";\n  ```\n  <script>@input</script>\n\n  ```javascript   +Title.js\n  var s = "Hidden JavaScript syntax highlighting";\n  ```\n  <script>@input</script>',
    insertText:
      '```${1|abap,abc,actionscript,ada,adoc,ahk,alda,angelscript,apache,apache_conf,apacheconf,apex,applescript,aql,arduino,arm,armasm,as,asc,asciidoc,asl,asm,aspectj,atom,autohotkey,avrasm,bash,basic,bat,batchfile,c,c#,c++,c9search,cc,cirru,cjs,clj,clojure,cmake,cmake.in,cmd,cobol,coffee,coffeescript,coldfusion,console,cpp,cr,craftcms,crm,crmsh,crystal,cs,csharp,cson,csound_document,csound_orchestra,csound_score,csp,css,curly,cxx,d,dart,delphi,dfm,diff,django,docker,dockerfile,dos,dot,dpr,drools,edifact,edn,eiffel,ejs,elixir,elm,erl,erlang,ex,exs,f#,f90,f95,feature,forth,fortran,fs,fsharp,fsl,ftl,gcode,gemspec,gherkin,gitignore,glsl,go,gobstones,golang,graphqlschema,groovy,gyp,h,h++,haml,handlebars,haskell,haskell_cabal,haxe,hbs,hh,hjson,hpp,hs,html,htmlbars,html_elixir,html.handlebars,html.hbs,html_ruby,hx,hxx,hy,hylang,iced,ini,ino,io,ipython,irb,jack,jade,java,javascript,jinja,js,json,json5,jsoniq,jsp,jssm,jsx,julia,kot,kotlin,kt,kts,latex,latte,less,liquid,lisp,livescript,logiql,logtalk,ls,lsl,lua,luapage,lucene,mak,make,makefile,markdown,mask,matlab,maze,md,mediawiki,mel,mips,mipsasm,mixal,mjs,mk,mkd,mkdown,ml,mm,mushcode,mysql,nc,nginx,nginxconf,nim,nix,nixos,nsis,nunjacks,obj-c,obj-c++,objc,objective-c++,objectivec,ocaml,openscad,osascript,pas,pascal,patch,pb,pbi,pcmk,pde,perl,pgsql,php,php_laravel_blade,pig,pl,plaintext,plist,pm,podspec,postgres,postgresql,powershell,pp,praat,prisma,processing,prolog,properties,protobuf,ps,ps1,puppet,purebasic,pwsh,py,python,qml,qt,r,raku,razor,rb,rdoc,red,redshift,rest,rhtml,rs,rss,rst,ruby,rust,sass,scad,scala,scheme,scss,sh,shell,shellsession,sjs,slim,smarty,smithy,soy,space,sparql,sql,sqlserver,styl,stylus,svg,swift,tcl,terraform,tex,text,textile,thor,tk,toml,ts,tsx,turtle,twig,txt,typescript,vala,vb,vbnet,vbs,vbscript,velocity,verilog,vhdl,visualforce,wollok,wsf,x86asm,xhtml,xjb,xml,xpath,xq,xquery,xsd,xsl,yaml,yml,zeek|}   ${2:Filename.js}\n${3:var s = "Named JavaScript syntax highlighting";\nalert(s);\ns;}\n```\n<script>${4:@input}</script>',
    label: 'lia-code-block-name-js',
  },
  {
    documentation:
      'This is an extended executable version of a code block, it shows how errors can be extracted and fed back by using LiaError to show inline errors, warnings, or information.\nIf you are using a project and want to integrate more than one file into your execution, you will have to use the parameterized @input(int) macro, the integer is defined by the file order (@input defaults to 0).\n\nExample:\n\n  ```javascript\n  var s = "JavaScript syntax highlighting";\n  alert(s);\n  ```\n  <script>\n    try{\n      eval(`@input`);  // <== code to evaluate\n    } catch (e) {\n      var log = e.stack.match(/((.*?):(.*))\\n.*?(:(\\d+):(\\d+)\\)\\n)/);\n      var err_msg = new LiaError(log[1] + " =>  (" + log[4], 1);\n      err_msg.add_detail(0, log[3], "error", log[5]-1, log[6]);\n      throw err_msg;\n    }\n  </script>',
    insertText:
      '```${1:javascript}\n${2:var s = "JavaScript syntax highlighting";\nalert(s);}\n```\n<script>\n  try{\n    eval(`@input`);\n  } catch (e) {\n    var log = e.stack.match(/((.*?):(.*))\\\\n.*?(:(\\\\d+):(\\\\d+)\\\\)\\\\n)/);\n    var err_msg = new LiaError(log[1] + " =>  (" + log[4], 1);\n    err_msg.add_detail(0, log[3], "error", log[5]-1, log[6]);\n    throw err_msg;\n  }\n</script>',
    label: 'lia-code-block-jsx',
  },
  {
    documentation:
      'This is an extended executable version of a code block, it shows how errors can be extracted and fed back by using LiaError to show inline errors, warnings, or information.\nIf you are using a project and want to integrate more than one file into your execution, you will have to use the parameterized @input(int) macro, the integer is defined by the file order (@input defaults to 0).\n\nExample:\n\n  <script>\n    try{\n      eval(`@input`); // code to be evaluated\n    } catch (e) {\n      // do some pattern matching to get the error string, the line number and column\n      var log = e.stack.match(/((.*?):(.*))\\n.*?(:(\\d+):(\\d+)\\)\\n)/);\n\n      // create a new LiaError object with\n      // param1: an error message string\n      // param2: add the number of files involved as int\n      var err_msg = new LiaError(log[1] + " =>  (" + log[4], 1);\n\n      // add as many information to your error message\n      // param1: file id\n      // param2: additional information string\n      // param3: type, either "error", "info", or "warning"\n      // param4: line number\n      // param5: column number\n      err_msg.add_detail(0, log[3], "error", log[5]-1, log[6]);\n\n      throw err_msg;   // finally just throw it away\n    }\n  </script>',
    insertText:
      '<script>\n  try{\n    eval(`@input`);\n  } catch (e) {\n    var log = e.stack.match(/((.*?):(.*))\\\\n.*?(:(\\\\d+):(\\\\d+)\\\\)\\\\n)/);\n    var err_msg = new LiaError(log[1] + " =>  (" + log[4], 1);\n    err_msg.add_detail(0, log[3], "error", log[5]-1, log[6]);\n    throw err_msg;\n  }\n</script>',
    label: 'lia-code-js',
  },
  {
    documentation:
      'In contrast to the @input macro, there is also an @output macro, which can be used to define the initial output of and executable code-block. This block has to be the last and you can use a plus (+) or a minus (-) in front to indicate, whether this output is interpreted as normal stdout or stderr.\n\nExample:\n\n  ``` js     -EvalScript.js\n  let str = "hello world";\n\n  consolelog(str)\n  ```\n  ``` json    -@ouput\n  There is a error in line 3...\n  ```\n  <script>@input</script>',
    insertText:
      '``` ${1:text}     ${2:+@output}\n${3:Enter your default output}\n```',
    label: 'lia-code-output',
  },
  {
    documentation:
      'If you want to create a project and thus separate data and code into multiple files, simply write multiple code blocks in a sequence. To make them executable as a whole, simply add a script tag to the end and use the parameterized @input(id) macro to compose your project properly. The file id is defined by the order of code blocks.\nSee the link below to see more examples.\n\nExample:\n\n  ``` js     -EvalScript.js\n  let who = data.first_name + " " + data.last_name;\n\n  if(data.online) { who + " is online"; }\n  else            { who + " is NOT online"; }\n  ```\n  ``` json    +Data.json\n  { "first_name" :  "Sammy",\n    "last_name"  :  "Shark",\n    "online"     :  true   }\n  ```\n  <script>\n    // insert the JSON dataset into the local variable data\n    let data = @input(1);\n\n    // eval the script that uses this dataset\n    eval(`@input(0)`);\n  </script>',
    insertText:
      '``` ${1:js}     ${2:-EvalScript.js}\n${3:let who = data.first_name + " " + data.last_name;\n\nif(data.online) {\n  who + " is online"; \\}\nelse {\n  who + " is NOT online"; \\}}\n```\n``` ${4:json}    ${5:+Data.json}\n${6:{\n  "first_name" :  "Sammy",\n  "last_name"  :  "Shark",\n  "online"     :  true\n\\}}\n```\n<script>\n  ${7:// insert the JSON dataset into the local variable data\n  let data = @input(1);\n\n  // eval the script that uses this dataset\n  eval(`@input(0)`);}\n</script>',
    label: 'lia-code-project',
  },
  {
    documentation:
      'Comments are those elements that get read out aloud in slide and presentation mode and a printed out at the placed position in textbook mode. Only paragraphs are allowed as comments and Markdown can be applied for styling different elements.\nThe default voice is defined within the main header, if not english will be used. This main voice can be changed per section by adding a section comment.\n\nExample:\n  <!--\n  author:   ...\n  email:    ...\n  ...\n  narrator: UK English Female\n  -->\n\n  # Title\n\n               --{{0}}--\n  I will speak with a female *UK* accent.\n\n  ## Section\n  <!-- narrator: US English Male -->\n\n               --{{0}}--\n  This entire section will be spoken aloud american man.\n\n               --{{1}}--\n  But only this section...\n\nTo simplify the voice-search, simply start typing "voice" and fuzzy search all responsive voice or click on the link below.',
    insertText:
      "              --{{${1:number}}}--\n${2:Enter some **text** that gets read out aloud.\nOnly paragraphs are allowed!}'",
    label: 'lia-comment',
  },
  {
    documentation:
      'You can change the voice also per comment by adding it directly after the number of appearance.\nType "voice" for fuzzy searching all responsive voices or click on the link below.\n\nExample:\n        --{{0 Australian Female}}--\n  I will speak with a female Australian accent,\n  no matter what the default language is.\n\n        --{{0 Deutsch Male}}--\n  Und hier äußert sich gerade ein deutscher Mann.',
    insertText:
      "              --{{${1:number} ${2|UK English Female,UK English Male,US English Female,US English Male,Afrikaans Male,Albanian Male,Arabic Female,Arabic Male,Armenian Male,Australian Female,Australian Male,Bangla Bangladesh Female,Bangla Bangladesh Male,Bangla India Female,Bangla India Male,Bosnian Male,Brazilian Portuguese Female,Brazilian Portuguese Male,Catalan Male,Chinese Female,Chinese Male,Chinese (Hong Kong) Female,Chinese (Hong Kong) Male,Chinese Taiwan Female,Chinese Taiwan Male,Croatian Male,Czech Female,Czech Male,Danish Female,Danish Male,Deutsch Female,Deutsch Male,Dutch Female,Dutch Male,Esperanto Male,Estonian Male,Filipino Female,Finnish Female,Finnish Male,French Canadian Female,French Canadian Male,French Female,French Male,Greek Female,Greek Male,Hindi Female,Hindi Male,Hungarian Female,Hungarian Male,Icelandic Male,Indonesian Female,Indonesian Male,Italian Female,Italian Male,Japanese Female,Japanese Male,Korean Female,Korean Male,Latin Female,Latin Male,Latvian Male,Macedonian Male,Moldavian Female,Moldavian Male,Montenegrin Male,Nepali,Nepali,Norwegian Female,Norwegian Male,Polish Female,Polish Male,Portuguese Female,Portuguese Male,Romanian Female,Romanian Male,Russian Female,Russian Male,Serbian Male,Serbo-Croatian Male,Sinhala,Sinhala,Slovak Female,Slovak Male,Spanish Female,Spanish Male,Spanish Latin American Female,Spanish Latin American Male,Swahili Male,Swedish Female,Swedish Male,Tamil Female,Tamil Male,Thai Female,Thai Male,Turkish Female,Turkish Male,Ukrainian Female,Vietnamese Female,Vietnamese Male,Welsh Male|}}}--\n${3:Enter some **text** that gets read out aloud with another voice.\nOnly paragraphs are allowed!}'",
    label: 'lia-comment-voice',
  },
  {
    documentation:
      'If you want to speak out some additional text that shall not appear in the textbook mode, then simply put your comment into a HTML comment tag.\n\nExample:\n  <!-- --{{2}}--\n  I will speak with the default voice, but not appear\n  elsewhere within the document.\n  -->',
    insertText:
      '<!-- --{{${1:number}}}-- ${2:Enter some **text** that gets read out aloud!} -->',
    label: 'lia-comment-hidden',
  },
  {
    documentation:
      'If you want to speak out some additional text that shall not appear in the textbook mode and speak with another voice, then simply put your comment with a voice definition into a HTML comment tag.\n\nExample:\n  <!-- --{{2 Deutsch Female}}--\n  I will speak with a German voice, but not appear\n  elsewhere within the document.\n  -->\n\nType "voice" for fuzzy searching or click on the link below for more information.',
    insertText:
      '<!-- --{{${1:number} ${2|UK English Female,UK English Male,US English Female,US English Male,Afrikaans Male,Albanian Male,Arabic Female,Arabic Male,Armenian Male,Australian Female,Australian Male,Bangla Bangladesh Female,Bangla Bangladesh Male,Bangla India Female,Bangla India Male,Bosnian Male,Brazilian Portuguese Female,Brazilian Portuguese Male,Catalan Male,Chinese Female,Chinese Male,Chinese (Hong Kong) Female,Chinese (Hong Kong) Male,Chinese Taiwan Female,Chinese Taiwan Male,Croatian Male,Czech Female,Czech Male,Danish Female,Danish Male,Deutsch Female,Deutsch Male,Dutch Female,Dutch Male,Esperanto Male,Estonian Male,Filipino Female,Finnish Female,Finnish Male,French Canadian Female,French Canadian Male,French Female,French Male,Greek Female,Greek Male,Hindi Female,Hindi Male,Hungarian Female,Hungarian Male,Icelandic Male,Indonesian Female,Indonesian Male,Italian Female,Italian Male,Japanese Female,Japanese Male,Korean Female,Korean Male,Latin Female,Latin Male,Latvian Male,Macedonian Male,Moldavian Female,Moldavian Male,Montenegrin Male,Nepali,Nepali,Norwegian Female,Norwegian Male,Polish Female,Polish Male,Portuguese Female,Portuguese Male,Romanian Female,Romanian Male,Russian Female,Russian Male,Serbian Male,Serbo-Croatian Male,Sinhala,Sinhala,Slovak Female,Slovak Male,Spanish Female,Spanish Male,Spanish Latin American Female,Spanish Latin American Male,Swahili Male,Swedish Female,Swedish Male,Tamil Female,Tamil Male,Thai Female,Thai Male,Turkish Female,Turkish Male,Ukrainian Female,Vietnamese Female,Vietnamese Male,Welsh Male|}}}-- ${3:Enter some **text** that gets read out aloud!} -->',
    label: 'lia-comment-voice-hidden',
  },
  {
    documentation:
      'The character is used as a color code, such as r stands for red, w for white, etc. Uppercase and lowercase characters define the size of the plotted dots. And if there is only one character, then it is plotted as a single dot only.\n\nExample:\n                  Colored - Dots\n     6 | A a B b C c\n       | D d E e F f G g H h I i\ny-axis | J j K k L l M m N n o O\n       | P p Q q R r S s T t U u\n       | V v W w X x Y y Z Z   *\n     1 +------------------------\n       0        x-axis        24\n\nThe definition of the title, x and y labels and their limits is optional, but the number of used pipes (|) and hyphens (-) define the resolution of the diagram.',
    insertText:
      '               Title - dots\n6 | A a B b C c\n  | D d E e F f G g H h I i\n  | J j K k L l M m N n o O\n  | P p Q q R r S s T t U u\n  | V v W w X x Y y Z Z   *\n1 +------------------------\n  0                      24',
    label: 'lia-diagram-dots',
  },
  {
    documentation:
      'The character is used as a color code, such as r stands for red, B for blue, etc. Uppercase and lowercase characters define the size of the plotted dots. A sequence of equal characters gets interpreted as a poly-line, there are more than two characters and if there are no two characters at the same x position.\n\nExample:\n                                  Multiline\n  1.9 |\n      |                 ***\n    y |               *     *\n    - | r r r r r r r*r r r r*r r r r r r r\n    a |             *         *\n    x |            *           *\n    i | B B B B B * B B B B B B * B B B B B\n    s |         *                 *\n      | *  * *                       * *  *\n   -1 +------------------------------------\n      0            x-axis                 1\n\nThe definition of the title, x and y labels and their limits is optional, but the number of used pipes (|) and hyphens (-) define the resolution of the diagram.',
    insertText:
      '                                Multiline\n1.9 |\n    |                 ***\n  y |               *     *\n  - | r r r r r r r*r r r r*r r r r r r r\n  a |             *         *\n  x |            *           *\n  i | B B B B B * B B B B B B * B B B B B\n  s |         *                 *\n    | *  * *                       * *  *\n -1 +------------------------------------\n    0              x-axis               1',
    label: 'lia-diagram-multiline',
  },
  {
    documentation:
      'Simple dots and poly-line representations can be applied together in one diagram, if they use different characters.\n\nExample:\n              Combining dots and poly-lines\n  1.9 |\n      |     DOTS\n    y |                                *\n    - |\n    a |                         *\n    x |                  *\n    i |         *\n    s |\n      | *\n   -1 +------------------------------------\n      0            x-axis                 1\n\nThe definition of the title, x and y labels and their limits is optional, but the number of used pipes (|) and hyphens (-) define the resolution of the diagram.',
    insertText:
      '             Combining dots and polylines\n1.9 |\n    |     DOTS\n  y |                                *\n  - |\n  a |                         *\n  x |                  *\n  i |         *\n  s |\n    | *\n -1 +------------------------------------\n    0            x-axis                 1',
    label: 'lia-diagram-simple',
  },
  {
    documentation:
      'Use simple inline effects to highlight specific elements within a Markdown block. Simply enclose your elements within two subsequent braces ({}{}), whereby the first one is used to hold the number of appearance, while the will contain your text, image, video, what so ever ...\nYou can tweak your effects with additional animations and styling. Animate.css is included at default.\n\nExamples:\n  This block contains some {1}{inline __effects__} that will appear {2}{subsequently}.\n\n  Inline effects can also contain more effects {1}{I will appear first {2}{and I as a second}}.\n\n  With styling ++ {3}{bouncing red and delayed}<!--\n        class = "animated infinite bounce"\n        style = "animation-delay: 3s; color: red;"\n      -->',
    insertText: '{${1:number}}{${2:__element__}}',
    label: 'lia-effect-inline',
  },
  {
    documentation:
      'Use simple inline effects to highlight specific elements within a Markdown block. Simply enclose your elements within two subsequent braces ({}{}), whereby the first one contains two numbers separated by (-) the first number defines the time of appearance and the second one the time of disappearance. The element contains the Markdown elements for highlighting (text, videos, images, etc.)\nYou can tweak your effects with additional animations and styling. Animate.css is included at default.\n\nExamples:\n  This block contains some {1-2}{I appear at fragment 1 and disapper at 2}.\n\n  Nesting is allowed but has to make sense {1-3}{I will rest from 1 to 3 {4}{I will not be visible}}.\n\n  With styling ++ {1-3}{bouncing red and delayed}<!--\n        class = "animated infinite bounce"\n        style = "animation-delay: 3s; color: red;"\n      -->',
    insertText: '{${1:from}-${2:to}}{${3:__element__}}',
    label: 'lia-effect-inline2',
  },
  {
    documentation:
      'Use block effects to let entire Markdown blocks appear or disappear. It works exactly as simple inline effects. But the number of appearance has to be put in double braces.\nThe entire block can also be styled and the animation tweaked, but the required comment tag has to be defined before the Markdown block. Animate.css is included at default.\n\nExamples:\n                    {{1}}\n  This entire block will appear with the first\n  fragment. And remain till the end of this slide.\n\n                    {{2}}\n  ```js\n  // this works with any markdown block\n  ```\n\n  <!-- class = "animated rollIn" -->\n       {{3}}\n  | Also | with  |\n  |------|-------|\n  | any  | table |',
    insertText: '    {${1:number}}\n$2',
    label: 'lia-effect-block',
  },
  {
    documentation:
      'Use block effects to let entire Markdown blocks appear or disappear. It works exactly as simple inline effects. But the number of appearance has to be put in double braces, followed by a hyphen (-) and the number of disappearance.\nThe entire block can also be styled and the animation tweaked, but the required comment tag has to be defined before the Markdown block. Animate.css is included at default.\n\nExamples:\n                   {{1-4}}\n  This entire block will appear with the first fragment.\n  And remain untill the fourth fragment of this slide.\n\n                   {{0-1}}\n  ```js\n  // I will be present emeadiately and disapper on the\n  // 1st fragment.\n  ```\n\n  <!-- class = "animated rollIn" -->\n       {{3-4}}\n  | Also | with  |\n  |------|-------|\n  | any  | table |',
    insertText: '    {${1:from}-${2:to}}\n$3',
    label: 'lia-effect-block',
  },
  {
    documentation:
      'You can bundle multiple blocks to one effect block by enclosing them into two lines of stars (*). The rest works exactly as block effects...\nThe entire block can also be styled and the animation tweaked, but the required comment tag has to be defined before the Markdown block. Animate.css is included at default.\n\nExamples:\n                    {{1}}\n  *************************************************\n\n  Both blocks will appear at once. Nesting of other\n  {2}{inline} and block effects is also allowed.\n\n\n  | Also | with  |\n  |------|-------|\n  | any  | table |\n\n  **************************************************',
    insertText:
      '                 {{${1:number}}}\n************************************************\n\n${2:Insert your Markdown blocks in here ...}\n\n************************************************',
    label: 'lia-effect-multiblock',
  },
  {
    documentation:
      'You can bundle multiple blocks to one effect block by enclosing them into two lines of stars (*). The rest works exactly as block effects...\nThe entire block can also be styled and the animation tweaked, but the required comment tag has to be defined before the Markdown block. Animate.css is included at default.\n\nExamples:\n                    {{1-3}}\n  *************************************************\n\n  Both blocks will appear at once and disappear at\n  the third fragment. Nesting of other {2}{inline}\n  and block effects is also allowed.\n\n\n  | Also | with  |\n  |------|-------|\n  | any  | table |\n\n  **************************************************',
    insertText:
      '                 {{${1:from}-${2:to}}}\n************************************************\n\n${3:Insert your Markdown blocks in here ...}\n\n************************************************',
    label: 'lia-effect-multiblock2',
  },
  {
    documentation:
      'This is only an example of how Animate.css can be used to tweak your effects. Additional CSS magic can be applied onto single elements or blocks by adding a comment tag either in front of the block or directly after the element.\n\nExample:\n\n  <!-- class = "animated rollIn" style = "animation-delay: 3s; color: purple" -->\n  The whole text-block should appear in purple color and with a wobbling effect.\n  Which is a **bad** example, please use it with caution ...\n  ~~ Jumping red ~~ <!-- class = "animated infinite bounce" style = "color: red;" -->\n\nFor more information how to change the animation styles, click on the link below.',
    insertText: '<!-- class="animated rollIn" style="animation-delay: 3s;" -->',
    label: 'lia-effect-animate-example',
  },
  {
    documentation:
      'With this triangle notation it is possible to add a playback button, which will read out loud the text within the second braces. It is possible to add additional animation definitions and also to change the voice.\n\nStart typing voice, if you want to change the narrator and the language.\n\nExamples:\n  Within this block {|>}{this text will be spoken out loud}.\n\n  Nesting is allowed but has to make sense {1-3 |>}{I speak from 1 to 3 {4}{and nesting is also possible}}.\n\n  If you want to {|> Australian Female}{it is also possible to change the voice}.',
    insertText: '{|>}{${1:text to read}}',
    label: 'lia-effect-inline-playback',
  },
  {
    documentation:
      'Use the `|>` or `!>` to indicate, that the entire block below should be read out loud in the default language. It is also possible to add effect-numbers to indicate the appearance and also to add another language. Start typing "voice" to select another narrator and language.\n\nExample:\n\n     {{|>}}\n  Read this block after the user has clicked the play button.\n\n     {{3 |>}}\n  This block will only appear at the 3rd animation step.\n\n     {{1-2 |> Australian Female}}\n  This will appear at step 1 and disappear at animation step 2, when the\n  users clicks on it, an Australian female voice is used as a narrator.',
    insertText: '{{|>}}',
    label: 'lia-effect-block-playback',
  },
  {
    documentation:
      'Links can be added in many ways to a document (relative or absolute), either in common Markdown style by enclosed brackets ([]) and parentheses (()), or directly if it starts with http or www and matches the common url pattern.\nIf you want to navigate within the current document, use hash tag and the number of the slide.\nAnd you can add additional html and css options by adding a trailing comment.\n\nExamples:\n  [LiaScript](https://liascript.github.io)\n\n  Also an accepted link: https://liascript.github.io\n\n  Local navigation by slide number: [top](#1)\n\n  Local navigation by slide title: [top](#some-title)\n\n  With styling [LiaScript](https://liascript.github.io)<!--\n    title = "click me"\n    style = "color: red;"\n  -->',
    insertText: '[${1:name}](${2:url})',
    label: 'lia-link',
  },
  {
    documentation:
      'An optional information can be attached to every link by adding double quotes after the link in the parentheses.\n\nExamples:\n  [LiaScript](https://liascript.github.io "click Me")\n\n  Local navigation:\n    [top](#1 "by slide number")\n    [top](#and-the-title-is "by slide title")',
    insertText: '[${1:name}](${2:url} "${3:info}")',
    label: 'lia-link-info',
  },
  {
    documentation:
      'Include images via the common Markdown notation as depicted below, by using absolute or relative paths. In contrast to common Markdown you can add also styles, classes, or any other allowed image tag to it simply by appending a comment tag.\n\nExample:\n\n  ![image of a puppy](https://upload.wikimedia.org/wikipedia/commons/c/c7/Puppy_on_Halong_Bay.jpg)\n\n  ![relative](./img/puppy.jpg)\n\n  ![with styling](./img/puppy.jpg)<!--\n      title = "a gray puppy"\n      width = "300px"\n      style = "border: 10px solid; filter: grayscale(100%);"\n    -->',
    insertText: '![${1:alt-text}](${2:image-url})',
    label: 'lia-image',
  },
  {
    documentation:
      'Optional information can be attached to every image by adding double quotes after the link in the parentheses. This will be attached as a subtitle to this element and can also include Markdown syntax.\n\nExample:\n\n  ![image of a puppy](https://upload.wikimedia.org/wikipedia/commons/c/c7/Puppy_on_Halong_Bay.jpg "This image is free __CC0__")\n\n  ![relative](./img/puppy.jpg "A cute image of a __puppy__")',
    insertText: '![${1:alt-text}](${2:image-url} "${3:info}")',
    label: 'lia-image-info',
  },
  {
    documentation:
      'Including audio is done with a starting question mark (?) that is followed a common Markdown link. If you want to include soundcloud, then you only have to refer to the link and the player gets embedded into your course.\n\nExample:\n\n  ?[singing birds](https://bigsoundbank.com/UPLOAD/mp3/1068.mp3)\n\n  ?[soundcloud](https://soundcloud.com/glennmorrison/beethoven-moonlight-sonata)',
    insertText: '?[${1:alt-text}](${2:audio-url})',
    label: 'lia-audio',
  },
  {
    documentation:
      'An optional information can be attached to every audio file by adding double quotes after the link in the parentheses. This will be attached as a subtitle to this element and can also include Markdown syntax.\n\nExample:\n\n  ?[singing birds](https://bigsoundbank.com/UPLOAD/mp3/1068.mp3 "optional infos")',
    insertText: '?[${1:alt-text}](${2:audio-url} "${3:info}")',
    label: 'lia-audio-info',
  },
  {
    documentation:
      'Include movies is like combining images and sound by a starting exclamation mark followed by a question mark (!?) as depicted below. Paths can either be absolute or relative. You can add also styles, classes, or any other allowed options to it simply by appending a comment tag.\n\nTo simplify the usage, you can directly use the YouTube link, or Vimeo, or TeacherTube. Those resources are atomatically parsed and included appropriately into the document, without searching for an embed-code.\n\nExample:\n\n  !?[eLab](https://www.youtube.com/watch?v=bICfKRyKTwE)\n\n  !?[relative](./mov/video.mp4)\n\n  !?[eLab](https://www.youtube.com/watch?v=bICfKRyKTwE)<!--\n      title = "the elab in gray"\n      width = "90%"\n      style = "border: 10px solid; filter: grayscale(100%);"\n    -->\n\nBut it is still possible to use HTML to include Videos and other stuff ...\n\n  <iframe width="560" height="315" src="https://www.youtube.com/embed/bICfKRyKTwE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
    insertText: '!?[${1:alt-text}](${2:movie-url})',
    label: 'lia-movie',
  },
  {
    documentation:
      'Optional information can be attached to every video by adding double quotes after the link in the parentheses. This will be attached as a subtitle to this element and can also include Markdown syntax.\n\nExample:\n\n  !?[eLab](https://www.youtube.com/watch?v=bICfKRyKTwE "Some information about the previous __eLab__ project.")',
    insertText: '!?[${1:alt-text}](${2:movie-url} "${3:info}")',
    label: 'lia-movie-info',
  },
  {
    documentation:
      'Embed anything by using two question marks. LiaScript will try to determine if it is possible to use oEmbed for this site, if not, the content will be embedded as an `<iframe>`.\n\nExample:\n\n  ??[circuit simulator](https://falstad.com/circuit/circuitjs.html?ctz=CQAgjCAMB0l3BWcDoBYDsAmdA2dBOdMMADhzEnxASQusmoFMBaYgKACcQBmTB7yKh58eCTFHCQ2Ac2H8xcniSEMpAJRCYEOTSRKbI+zHokNUDTNCSqoVtgHdF2cbwuYVDp+5CowOzN5Sjq7gxj5+ofrqimBhISQ2Zgx0iXYAxjFxIgEqtvCC+IVFxSU6+ND43CRiejjcOJUkEDBwYJzhOrH6vv6BkvCeIV2aWJFQg9nezpqBbADOI+LD0zkSEAAuHACujGwAZprauvohxlHgVnmYbAD2IPrDSfgPqrBw6E1aEuInbEA)\n\n  ??[Pottery Jar 3D model](https://sketchfab.com/3d-models/pottery-jar-0576d43d28924c948ed3bbae02e4e0cb)',
    insertText: '??[${1:alt-text}](${2:url})',
    label: 'lia-embed',
  },
  {
    documentation:
      'If you group multimedia links within one line or within one block, they will appear as a gallery within LiaScript.\n\nExample:\n\n  ![image of a puppy](https://upload.wikimedia.org/wikipedia/commons/c/c7/Puppy_on_Halong_Bay.jpg)\n  ??[circuit simulator](https://falstad.com/circuit/circuitjs.html)\n  ??[Pottery Jar 3D model](https://sketchfab.com/3d-models/pottery-jar-0576d43d28924c948ed3bbae02e4e0cb)',
    insertText: '![${1:alt-text}](${2:url}) ![${3:alt-text}](${4:url})',
    label: 'lia-gallery',
  },
  {
    documentation:
      'Inline Footnotes are composed of a reference in brackets with a starting caret. The following text has to be put into parentheses, only one line is allowed.\n\n   Example with [^1](inline _footnote_) and some more text.',
    insertText: '[^${1:ref}](${2:explanation})',
    label: 'lia-footnote-inline',
  },
  {
    documentation:
      "Multiline footnotes have to be split into a reference and into a comment. Footnote references are defined by brackets with a starting caret and can appear everywhere within the text. Footnote texts have to be put into the end of each section.\n\nExample:\n\nHere is a footnote reference, [^1] and another.[^longnote]\n\n...\n\n[^1]: Here is the footnote text.\n\n[^longnote]: Here's one with multiple blocks.\n\n               Subsequent paragraphs are indented to show that they\n               belong to the previous footnote.",
    insertText: '[^${1:ref}]',
    label: 'lia-footnote-reference',
  },
  {
    documentation:
      'Multiline footnotes have to be split into a reference and into a comment. Footnote texts start with a reference "tag", which is followed by a colon. They have to be put into the end of each section otherwise they are not interpreted as footnote texts and multi-block footnotes have to follow the previous indentation.\nExample:\n...\n\n[^1]: Here is the footnote text.\n\n[^longnote]: Here\'s one with multiple blocks.\n\n               Subsequent paragraphs are indented to show that they\n               belong to the previous footnote.',
    insertText: '[^${1:ref}]: ${2:some comments}',
    label: 'lia-footnote-text',
  },
  {
    documentation:
      'Insert a mathematical formula (inline) within your text. It has to be enclosed with two single dollar signs, as shown in the example.\n\nExample: $ f(a,b,c) = (a^2+b^2+c^2)^3 $\n\nFormulas are rendered with KaTex, so click on the link below to get more information and examples on the applied notation.',
    insertText: '$ ${1:f(a,b,c) = (a^2+b^2+c^2)^3} $',
    label: 'lia-formula-inline',
  },
  {
    documentation:
      'Insert a more multiline mathematical formula as a block, which is automatically centered within your document. It has to be enclosed with two dollar signs, as shown in the example.\n\nExample:\n\n$$\n   \\sum_{i=1}^\\infty\\frac{1}{n^2}\n        =\\frac{\\pi^2}{6}\n$$\n\nFormulas are rendered with KaTex, so click on the link below to get more information and examples on the applied notation.',
    insertText:
      '$$\n   ${1:\\\\sum_\\{i=1\\}^\\\\infty\\\\frac\\{1\\}\\{n^2\\}\n        =\\\\frac\\{\\\\pi^2\\}\\{6\\}}\n$$',
    label: 'lia-formula-block',
  },
  {
    documentation:
      '  The main header is a comment of the following format. You can use it to define defaults, such as authors, emails, where to find translations, what JavaScript and styles should be loaded additionally, as well as the language of your course.\n  You can change some of these settings within a sub-header for each section individually.\n\n  Default:\n      language: (en) | de | ua | fa | hy | bg\n      narrator: US English Male\n\n  Example:\n\n      <!--\n      author:   Your Name\n      email:    your@email.com\n      version:  0.1.0\n      language: en\n      narrator: US English Female\n\n      comment:  This simple description of your course.\n                Multiline is also okay.\n\n      link:     https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css\n                https://...\n\n      script:   https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js\n                https://...\n\n      translation: Français translations/French.md\n      translation: 日本語    translations/Japanese.md\n      -->\n\n      # Course ...\n\nAnd you can refer to these values via the system macros:\n\n    @author\n    @email\n    @version',
    insertText:
      '<!--\nauthor:   ${1:Your Name}\nemail:    ${2:your@email.com}\nversion:  ${3:0.1.0}\nlanguage: ${4:en}\nnarrator: ${5:US English Female}\n\ncomment:  ${6:This simple description of your course.\n          Multiline is also okay.}\n\nlink:     ${7:https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css}\n\nscript:   ${8:https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js}\n\n${9:translation: Français translations/French.md}\n-->',
    label: 'lia-header-main',
  },
  {
    documentation:
      'You can overwrite some main header settings as it is listed below. Just attach a comment to the section title and overwrite only those settings, that are relevant to you.\n\nExample:\n\n    ...\n    # Course\n    ...\n    ## Section\n    <!--\n    narrator: Australian Female\n    -->\n    ...\n    ### Sub Section\n    <!--\n    author:   Section Author\n    email:    section.author@email.com\n    version:  0.1.0\n    narrator: Australian Female\n\n    link:     https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css\n    script:   https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js\n    -->',
    insertText:
      '<!--\nauthor:   ${1:Section Author}\nemail:    ${2:section.author@email.com}\nversion:  ${3:0.1.0}\nnarrator: ${4:UK English Female}\n\nlink:     ${5:https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css}\n\nscript:   ${6:https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js}\n-->',
    label: 'lia-header-section',
  },
  {
    documentation: '',
    insertText: 'actionscript',
    label: 'hili-actionscript',
  },
  {
    documentation: '',
    insertText: 'as',
    label: 'hili-as',
  },
  {
    documentation: '',
    insertText: 'apache',
    label: 'hili-apache',
  },
  {
    documentation: '',
    insertText: 'apacheconf',
    label: 'hili-apacheconf',
  },
  {
    documentation: '',
    insertText: 'asciidoc',
    label: 'hili-asciidoc',
  },
  {
    documentation: '',
    insertText: 'adoc',
    label: 'hili-adoc',
  },
  {
    documentation: '',
    insertText: 'x86asm',
    label: 'hili-x86asm',
  },
  {
    documentation: '',
    insertText: 'armasm',
    label: 'hili-armasm',
  },
  {
    documentation: '',
    insertText: 'arm',
    label: 'hili-arm',
  },
  {
    documentation: '',
    insertText: 'avrasm',
    label: 'hili-avrasm',
  },
  {
    documentation: '',
    insertText: 'asm',
    label: 'hili-asm',
  },
  {
    documentation: '',
    insertText: 'bash',
    label: 'hili-bash',
  },
  {
    documentation: '',
    insertText: 'sh',
    label: 'hili-sh',
  },
  {
    documentation: '',
    insertText: 'zsh',
    label: 'hili-zsh',
  },
  {
    documentation: '',
    insertText: 'c',
    label: 'hili-c',
  },
  {
    documentation: '',
    insertText: 'cc',
    label: 'hili-cc',
  },
  {
    documentation: '',
    insertText: 'cpp',
    label: 'hili-cpp',
  },
  {
    documentation: '',
    insertText: 'c++',
    label: 'hili-c++',
  },
  {
    documentation: '',
    insertText: 'h',
    label: 'hili-h',
  },
  {
    documentation: '',
    insertText: 'hpp',
    label: 'hili-hpp',
  },
  {
    documentation: '',
    insertText: 'h++',
    label: 'hili-h++',
  },
  {
    documentation: '',
    insertText: 'clojure',
    label: 'hili-clojure',
  },
  {
    documentation: '',
    insertText: 'clj',
    label: 'hili-clj',
  },
  {
    documentation: '',
    insertText: 'coffeescript',
    label: 'hili-coffeescript',
  },
  {
    documentation: '',
    insertText: 'coffee',
    label: 'hili-coffee',
  },
  {
    documentation: '',
    insertText: 'cson',
    label: 'hili-cson',
  },
  {
    documentation: '',
    insertText: 'iced',
    label: 'hili-iced',
  },
  {
    documentation: '',
    insertText: 'csharp',
    label: 'hili-csharp',
  },
  {
    documentation: '',
    insertText: 'cs',
    label: 'hili-cs',
  },
  {
    documentation: '',
    insertText: 'c#',
    label: 'hili-c#',
  },
  {
    documentation: '',
    insertText: 'diff',
    label: 'hili-diff',
  },
  {
    documentation: '',
    insertText: 'patch',
    label: 'hili-patch',
  },
  {
    documentation: '',
    insertText: 'django',
    label: 'hili-django',
  },
  {
    documentation: '',
    insertText: 'jinja',
    label: 'hili-jinja',
  },
  {
    documentation: '',
    insertText: 'dockerfile',
    label: 'hili-dockerfile',
  },
  {
    documentation: '',
    insertText: 'docker',
    label: 'hili-docker',
  },
  {
    documentation: '',
    insertText: 'elixir',
    label: 'hili-elixir',
  },
  {
    documentation: '',
    insertText: 'ex',
    label: 'hili-ex',
  },
  {
    documentation: '',
    insertText: 'exs',
    label: 'hili-exs',
  },
  {
    documentation: '',
    insertText: 'erlang',
    label: 'hili-erlang',
  },
  {
    documentation: '',
    insertText: 'erl',
    label: 'hili-erl',
  },
  {
    documentation: '',
    insertText: 'fsharp',
    label: 'hili-fsharp',
  },
  {
    documentation: '',
    insertText: 'fs',
    label: 'hili-fs',
  },
  {
    documentation: '',
    insertText: 'f#',
    label: 'hili-f#',
  },
  {
    documentation: '',
    insertText: 'fortran',
    label: 'hili-fortran',
  },
  {
    documentation: '',
    insertText: 'f90',
    label: 'hili-f90',
  },
  {
    documentation: '',
    insertText: 'f95',
    label: 'hili-f95',
  },
  {
    documentation: '',
    insertText: 'gcode',
    label: 'hili-gcode',
  },
  {
    documentation: '',
    insertText: 'nc',
    label: 'hili-nc',
  },
  {
    documentation: '',
    insertText: 'golang',
    label: 'hili-golang',
  },
  {
    documentation: '',
    insertText: 'go',
    label: 'hili-go',
  },
  {
    documentation: '',
    insertText: 'handlebars',
    label: 'hili-handlebars',
  },
  {
    documentation: '',
    insertText: 'hbs',
    label: 'hili-hbs',
  },
  {
    documentation: '',
    insertText: 'html.hbs',
    label: 'hili-html.hbs',
  },
  {
    documentation: '',
    insertText: 'html.handlebars',
    label: 'hili-html.handlebars',
  },
  {
    documentation: '',
    insertText: 'haskell',
    label: 'hili-haskell',
  },
  {
    documentation: '',
    insertText: 'hs',
    label: 'hili-hs',
  },
  {
    documentation: '',
    insertText: 'haxe',
    label: 'hili-haxe',
  },
  {
    documentation: '',
    insertText: 'hx',
    label: 'hili-hx',
  },
  {
    documentation: '',
    insertText: 'html',
    label: 'hili-html',
  },
  {
    documentation: '',
    insertText: 'xhtml',
    label: 'hili-xhtml',
  },
  {
    documentation: '',
    insertText: 'rss',
    label: 'hili-rss',
  },
  {
    documentation: '',
    insertText: 'atom',
    label: 'hili-atom',
  },
  {
    documentation: '',
    insertText: 'xjb',
    label: 'hili-xjb',
  },
  {
    documentation: '',
    insertText: 'xsd',
    label: 'hili-xsd',
  },
  {
    documentation: '',
    insertText: 'xsl',
    label: 'hili-xsl',
  },
  {
    documentation: '',
    insertText: 'plist',
    label: 'hili-plist',
  },
  {
    documentation: '',
    insertText: 'javascript',
    label: 'hili-javascript',
  },
  {
    documentation: '',
    insertText: 'js',
    label: 'hili-js',
  },
  {
    documentation: '',
    insertText: 'livescript',
    label: 'hili-livescript',
  },
  {
    documentation: '',
    insertText: 'ls',
    label: 'hili-ls',
  },
  {
    documentation: '',
    insertText: 'makefile',
    label: 'hili-makefile',
  },
  {
    documentation: '',
    insertText: 'mk',
    label: 'hili-mk',
  },
  {
    documentation: '',
    insertText: 'mak',
    label: 'hili-mak',
  },
  {
    documentation: '',
    insertText: 'markdown',
    label: 'hili-markdown',
  },
  {
    documentation: '',
    insertText: 'md',
    label: 'hili-md',
  },
  {
    documentation: '',
    insertText: 'mkdown',
    label: 'hili-mkdown',
  },
  {
    documentation: '',
    insertText: 'mkd',
    label: 'hili-mkd',
  },
  {
    documentation: '',
    insertText: 'ocaml',
    label: 'hili-ocaml',
  },
  {
    documentation: '',
    insertText: 'ml',
    label: 'hili-ml',
  },
  {
    documentation: '',
    insertText: 'objectivec',
    label: 'hili-objectivec',
  },
  {
    documentation: '',
    insertText: 'mm',
    label: 'hili-mm',
  },
  {
    documentation: '',
    insertText: 'objc',
    label: 'hili-objc',
  },
  {
    documentation: '',
    insertText: 'obj-c',
    label: 'hili-obj-c',
  },
  {
    documentation: '',
    insertText: 'delphi',
    label: 'hili-delphi',
  },
  {
    documentation: '',
    insertText: 'dpr',
    label: 'hili-dpr',
  },
  {
    documentation: '',
    insertText: 'dfm',
    label: 'hili-dfm',
  },
  {
    documentation: '',
    insertText: 'pas',
    label: 'hili-pas',
  },
  {
    documentation: '',
    insertText: 'pascal',
    label: 'hili-pascal',
  },
  {
    documentation: '',
    insertText: 'freepascal',
    label: 'hili-freepascal',
  },
  {
    documentation: '',
    insertText: 'lazarus',
    label: 'hili-lazarus',
  },
  {
    documentation: '',
    insertText: 'lpr',
    label: 'hili-lpr',
  },
  {
    documentation: '',
    insertText: 'lfm',
    label: 'hili-lfm',
  },
  {
    documentation: '',
    insertText: 'php',
    label: 'hili-php',
  },
  {
    documentation: '',
    insertText: 'php3',
    label: 'hili-php3',
  },
  {
    documentation: '',
    insertText: 'php4',
    label: 'hili-php4',
  },
  {
    documentation: '',
    insertText: 'php5',
    label: 'hili-php5',
  },
  {
    documentation: '',
    insertText: 'php6',
    label: 'hili-php6',
  },
  {
    documentation: '',
    insertText: 'perl',
    label: 'hili-perl',
  },
  {
    documentation: '',
    insertText: 'pl',
    label: 'hili-pl',
  },
  {
    documentation: '',
    insertText: 'pm',
    label: 'hili-pm',
  },
  {
    documentation: '',
    insertText: 'powershell',
    label: 'hili-powershell',
  },
  {
    documentation: '',
    insertText: 'ps',
    label: 'hili-ps',
  },
  {
    documentation: '',
    insertText: 'puppet',
    label: 'hili-puppet',
  },
  {
    documentation: '',
    insertText: 'pp',
    label: 'hili-pp',
  },
  {
    documentation: '',
    insertText: 'python',
    label: 'hili-python',
  },
  {
    documentation: '',
    insertText: 'py',
    label: 'hili-py',
  },
  {
    documentation: '',
    insertText: 'gyp',
    label: 'hili-gyp',
  },
  {
    documentation: '',
    insertText: 'ruby',
    label: 'hili-ruby',
  },
  {
    documentation: '',
    insertText: 'rb',
    label: 'hili-rb',
  },
  {
    documentation: '',
    insertText: 'gemspec',
    label: 'hili-gemspec',
  },
  {
    documentation: '',
    insertText: 'podspec',
    label: 'hili-podspec',
  },
  {
    documentation: '',
    insertText: 'thor',
    label: 'hili-thor',
  },
  {
    documentation: '',
    insertText: 'irb',
    label: 'hili-irb',
  },
  {
    documentation: '',
    insertText: 'rust',
    label: 'hili-rust',
  },
  {
    documentation: '',
    insertText: 'rs',
    label: 'hili-rs',
  },
  {
    documentation: '',
    insertText: 'scad',
    label: 'hili-scad',
  },
  {
    documentation: '',
    insertText: 'openscad',
    label: 'hili-openscad',
  },
  {
    documentation: '',
    insertText: 'shell',
    label: 'hili-shell',
  },
  {
    documentation: '',
    insertText: 'console',
    label: 'hili-console',
  },
  {
    documentation: '',
    insertText: 'stylus',
    label: 'hili-stylus',
  },
  {
    documentation: '',
    insertText: 'styl',
    label: 'hili-styl',
  },
  {
    documentation: '',
    insertText: 'tcl',
    label: 'hili-tcl',
  },
  {
    documentation: '',
    insertText: 'tk',
    label: 'hili-tk',
  },
  {
    documentation: '',
    insertText: 'twig',
    label: 'hili-twig',
  },
  {
    documentation: '',
    insertText: 'craftcms',
    label: 'hili-craftcms',
  },
  {
    documentation: '',
    insertText: 'typescript',
    label: 'hili-typescript',
  },
  {
    documentation: '',
    insertText: 'ts',
    label: 'hili-ts',
  },
  {
    documentation: '',
    insertText: 'vbscript',
    label: 'hili-vbscript',
  },
  {
    documentation: '',
    insertText: 'vbs',
    label: 'hili-vbs',
  },
  {
    documentation: '',
    insertText: 'verilog',
    label: 'hili-verilog',
  },
  {
    documentation: '',
    insertText: 'v',
    label: 'hili-v',
  },
  {
    documentation: '',
    insertText: 'xpath',
    label: 'hili-xpath',
  },
  {
    documentation: '',
    insertText: 'xq',
    label: 'hili-xq',
  },
  {
    documentation:
      'Initialize your file with a complete dummy course with a header and body, which can be used as a bootstrap for your course.\n\nExample:\n\n    <!--\n    author:   Your Name\n\n    email:    your@mail.org\n\n    version:  0.0.1\n\n    language: en\n\n    narrator: US English Female\n\n    ...\n    -->\n\n    # Course Main Title\n\n    This is your **course** initialization stub...',
    insertText:
      '<!--\nauthor:   Your Name\n\nemail:    your@mail.org\n\nversion:  0.0.1\n\nlanguage: en\n\nnarrator: US English Female\n\ncomment:  Try to write a short comment about\n          your course, multiline is also okay.\n\nlink:     https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css\n\nscript:   https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js\n\n-->\n\n# Course Main Title\n\nThis is your **course** initialization stub.\n\nPlease see the [Docs](https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md)\nto find out what is possible in [LiaScript](https://liascript.github.io).\n\nIf you want to use instant help in your Atom IDE, please type **lia** to see all available shortcuts.\n\n## Markdown\n\nYou can use common [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) syntax to create your course, such as:\n\n1. Lists\n2. ordered or\n\n   * unordered\n   * ones ...\n\n\n| Header 1   | Header 2   |\n| :--------- | :--------- |\n| Item 1     | Item 2     |\n\n\nImages:\n\n![images](https://farm2.static.flickr.com/1618/26701766821_7bea494826.jpg)\n\n\n### Extensions\n\n     --{{0}}--\nBut you can also include other features such as spoken text.\n\n      --{{1}}--\nInsert any kind of audio file:\n\n       {{1}}\n?[audio](https://bigsoundbank.com/UPLOAD/mp3/1068.mp3)\n\n\n     --{{2}}--\nEven videos or change the language completely.\n\n       {{2-3}}\n!?[video](https://www.youtube.com/watch?v=bICfKRyKTwE)\n\n\n      --{{3 Russian Female}}--\n«Для торжества зла достаточно бездействия хороших людей».\n\n\n    {{3}}\nType "voice" to see a list of all available languages.\n\n\n### Styling\n\n<!-- class = "animated rollIn" style = "animation-delay: 2s; color: purple" -->\nThe whole text-block should appear in purple color and with a wobbling effect.\nWhich is a **bad** example, please use it with caution ...\n~~ only this is red ;-) ~~ <!-- class = "animated infinite bounce" style = "color: red;" -->\n\n## Charts\n\nUse ASCII-Art to draw diagrams:\n\n                                    Multiline\n    1.9 |    DOTS\n        |                 ***\n      y |               *     *\n      - | r r r r r r r*r r r r*r r r r r r r\n      a |             *         *\n      x |            *           *\n      i | B B B B B * B B B B B B * B B B B B\n      s |         *                 *\n        | *  * *                       * *  *\n     -1 +------------------------------------\n        0              x-axis               1\n\n## Quizzes\n\n### A Textquiz\n\nWhat did the **fish** say when he hit a **concrete wall**?\n\n    [[dam]]\n\n### Multiple Choice\n\nJust add as many points as you wish:\n\n    [[X]] Only the **X** marks the correct point.\n    [[ ]] Empty ones are wrong.\n    [[X]] ...\n\n### Single Choice\n\nJust add as many points as you wish:\n\n    [( )] ...\n    [(X)] <-- Only the **X** is allowed.\n    [( )] ...\n\n## Executable Code\n\nA drawing example, for demonstrating that any JavaScript library can be used, also for drawing.\n\n```javascript\n// Initialize a Line chart in the container with the ID chart1\nnew Chartist.Line(\'#chart1\', {\n  labels: [1, 2, 3, 4],\n  series: [[100, 120, 180, 200]]\n});\n\n// Initialize a Line chart in the container with the ID chart2\nnew Chartist.Bar(\'#chart2\', {\n  labels: [1, 2, 3, 4],\n  series: [[5, 2, 8, 3]]\n});\n```\n<script>@input</script>\n\n<div class="ct-chart ct-golden-section" id="chart1"></div>\n<div class="ct-chart ct-golden-section" id="chart2"></div>\n\n\n### Projects\n\nYou can make your code executable and define projects:\n\n``` js     -EvalScript.js\nlet who = data.first_name + " " + data.last_name;\n\nif(data.online) {\n  who + " is online"; }\nelse {\n  who + " is NOT online"; }\n```\n``` json    +Data.json\n{\n  "first_name" :  "Sammy",\n  "last_name"  :  "Shark",\n  "online"     :  true\n}\n```\n<script>\n  // insert the JSON dataset into the local variable data\n  let data = @input(1);\n\n  // eval the script that uses this dataset\n  eval(`@input(0)`);\n</script>\n\n## More\n\nFind out what you can even do more with quizzes:\n\nhttps://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md',
    label: 'lia-init',
  },
  {
    documentation:
      'Insert a Markdown ordered list, as depicted below. Indentation is important in this case.\n\nExample:\n  1. first point\n  2. second point\n  3. some text\n\n     and some image ![image](img/point.jpg)',
    insertText: '1. ${1:block}\n2. ${2:block}\n3. ${3:block}',
    label: 'lia-list-ordered',
  },
  {
    documentation:
      'Insert a Markdown unordered list, as depicted below. You can use (*+-) to begin every point. Indentation is important in this case.\n\nExample:\n  * first point\n  + second point\n  - some text\n\n    and some image ![image](img/point.jpg)',
    insertText: '+ ${1:block}\n+ ${2:block}\n+ ${3:block}',
    label: 'lia-list-unordered',
  },
  {
    documentation: 'Gets replaced by the author defined in the header.',
    insertText: '@author',
    label: 'lia-macro-author',
  },
  {
    documentation: 'Gets replaced by the date defined in the header.',
    insertText: '@date',
    label: 'lia-macro-date',
  },
  {
    documentation: 'Gets replaced by the email defined in the header.',
    insertText: '@email',
    label: 'lia-macro-email',
  },
  {
    documentation:
      'Use this only in conjunction with executable code and projects or with quizzes. This macro can only be used in a script tag and gets replaced by the current user input.\nTo refer to the inputs in a project, use the parameterized macro:\n\n  @input(0)   <== equal to @input\n  @input(1)',
    insertText: '@input',
    label: 'lia-macro-input',
  },
  {
    documentation: 'Gets replaced by the current section number.',
    insertText: '@section',
    label: 'lia-macro-section',
  },
  {
    documentation: 'Generates a UID that can be used to name tags uniquely.',
    insertText: '@uid',
    label: 'lia-macro-uid',
  },
  {
    documentation: 'Gets replaced by the version defined in the header.',
    insertText: '@version',
    label: 'lia-macro-version',
  },
  {
    documentation:
      'If you do not want to store the course state wihin indexeddb and also not within the local course index, you can use this macro within the header, which means that no trace of this course will be stored locally.\n\nExample:\n  <!--\n  persistent: false\n  -->',
    insertText: 'persistent: ${1|false,true|}',
    label: 'lia-macro-persistent',
  },
  {
    documentation:
      'You can import the main macros of other courses, simply by using the import command, which is followed by the raw url of the foreign course.\n\nExample:\n\n  ## section\n  <!--\n  import: https://raw.githubusercontent.com/liaTemplates/rextester_template/master/README.md\n  -->\n\n  ``` python\n  print("Hello World")\n  ```\n  @Rextester.eval(@Python)',
    insertText: 'import: ${1:url}',
    label: 'lia-macro-import',
  },
  {
    documentation:
      'Attribution is an important issue. With the attribute command, you can define the attribution that is showed within the info field within the navigation pannel. These elements get also imported if you import the functionality from another course.\n\nA good attribution might look like the follwing ones...\n\nExample:\n  <!--\n  attribute: [AlaSQL](https://alasql.org)\n             by [Andrey Gershun](agershun@gmail.com)\n             & [Mathias Rangel Wulff](m@rawu.dk)\n             is licensed under [MIT](https://opensource.org/licenses/MIT)\n\n  attribute: [PapaParse](https://www.papaparse.com)\n             by [Matthew Holt](https://twitter.com/mholt6)\n             is licensed under [MIT](https://opensource.org/licenses/MIT)\n  -->\n',
    insertText: 'attribute: ${1:thx}',
    label: 'lia-macro-attribute',
  },
  {
    documentation:
      'You can change the default appearance of your document, either if you prefer dark mode or light mode. This will not change the user preferences. The default mode is defined by the user settings.\n\nExample:\n  <!--\n  dark: true\n\n  dark: false\n  -->\n',
    insertText: 'dark: ${1|true,false|}',
    label: 'lia-macro-dark',
  },
  {
    documentation:
      'You can change the default style of your document, either if you do not have any effects you can set mode to Textbook or start with and interactive Presentation. The three modes a the same as defined within the document at the upper right button. The default mode is defined by the user settings.\n\nExample:\n  <!--\n  mode: Presentation\n\n  mode: Slides\n\n  mode: Textbook\n  -->\n',
    insertText: 'mode: ${1|Presentation,Slides,Textbook|}',
    label: 'lia-macro-mode',
  },
  {
    documentation:
      'Disable or enable the classroom feature for your course, by using this macro within the header of your course. You can use words like `false`, `disabled`, `0`, `OFF` ... LiaScript will recognize them as negative. All other words like wouldLoveToSeeThisFeature are treated as positive. __But better stick with `false`/`true`, `on`/`off`, `disable`/`enable`__\n\nExample:\n  <!--\n  classroom: false\n  -->\n',
    insertText: 'classroom: ${1|disable,enable|}',
    label: 'lia-macro-classroom',
  },
  {
    documentation:
      'Disable or enable the experimental google translation for your course, by using this macro within the header of your course. You can use words like `false`, `disabled`, `0`, `OFF` ... LiaScript will recognize them as negative. All other words like wouldLoveToSeeThisFeature are treated as positive. __But better stick with `false`/`true`, `on`/`off`, `disable`/`enable`__\n\nExample:\n  <!--\n  translateWithGoogle: false\n  -->\n',
    insertText: 'translateWithGoogle: ${1|disable,enable|}',
    label: 'lia-macro-translateWithGoogle',
  },
  {
    documentation:
      'Disable or enable sharing for your course, by using this macro within the header (no share-icon and button will be displayed). You can use words like `false`, `disabled`, `0`, `OFF` ... LiaScript will recognize them as negative. All other words like wouldLoveToSeeThisFeature are treated as positive. __But better stick with `false`/`true`, `on`/`off`, `disable`/`enable`__\n\nExample:\n  <!--\n  sharing: false\n  -->\n',
    insertText: 'sharing: ${1|disable,enable|}',
    label: 'lia-macro-sharing',
  },
  {
    documentation:
      'Use this macro to redefine the respository information of your project, by default the course will display the GitHub, GitLab, or Dropbox origin. By adding this information to the head, you can define a static root for your project, which will also be visible on all exports.\n\nExample:\n  <!--\n  repository: https://github.com/andre-dietrich/liascript-snippets\n  -->\n',
    insertText: 'repository: ${1:url}',
    label: 'lia-macro-repository',
  },
  {
    documentation:
      'Use macros to deal with repetitive task and to make the document more readable. You can define your own macros within the main and section headers. Start your macro with an (@) sign and give it a name. Separate the name from the body with a colon (:). If you want to parameterize your macro, use @0, @1, ... for the parameter id. It is a simple string substitution mechanism, and the parameters are separated by a comma (,). If you have commas in your parameters, then use back-tics (`) to enclose this parameter. And triple back-tics (```) to enclose multi-line parameters.\n\nExample:\n\n  ## section\n  <!--\n  @red: <!-- style="color: red;" -->\n\n  @bold_italic: __@0__ _@1_\n  -->\n\n  @red\n  This whole paragraph will be read and this will be:\n  @bold_italic(I am Bold,`I am Italic,, I am too`).',
    insertText: '@${1:name}: ${2:line}',
    label: 'lia-macro-definition-line',
  },
  {
    documentation:
      'Use macros to deal with repetitive task and to make the document more readable. Multi-line macros start with an (@your_name) and end with (@end). Parameters can also be passed as to single line macros.\n\nExample:\n\n  ## section\n  <!--\n  @evalJS\n  <script>\n    try{\n      eval(`@input`);\n    } catch (e) {\n      var log = e.stack.match(/((.*?):(.*))\n.*?(:(d+):(d+))\n)/);\n      var err_msg = new LiaError(log[1] + " =>  (" + log[4], 1);\n      err_msg.add_detail(0, log[3], "error", log[5]-1, log[6]);\n      throw err_msg;\n    }\n  </script>\n  @end\n  -->\n\n  eval this code with erros:\n\n  ```js\n  let x = 12;\n  x * c;\n  ```\n  @evalJS',
    insertText: '@${1:name}\n${2:param1 -> __@0__}\n@end',
    label: 'lia-macro-definition-block',
  },
  {
    documentation:
      'This type of macro-call comes handy, if you want to refere to a certain URL and want other Markdown readers to show this information as a link. It is also possible to add additional parameters within parentheses, whereby the URL is always used as the last parameter.\n\nExample:\n\n  @[doSomethingWith](URL)\n\n  @[doSomethingWith(1,2,3)](URL "this will be ignored by now")',
    insertText: '@[${1:macro}](${2:url-param})',
    label: 'lia-macro-call-link',
  },
  {
    documentation:
      'If you have a more complex multi-line macro definition, you can also use the following style so that it gets rendered at least in a readable manner by Github for example. Thus, you can place your macro call into into the code-block header, the first (optional) language parameter gets ignored and, whereby the following elements within the block are passed as the last multi-line parameter to that call.\n\nExample:\n\n    ## Macro\n    <!--\n    link:   https://pannellum.org/css/style.css\n            https://cdn.pannellum.org/2.4/pannellum.css\n\n    script: https://cdn.pannellum.org/2.4/pannellum.js\n\n    @panorama\n    <div id="panorama_@0" style="width: 100%; height: 400px;"></div>\n    <script>\n    pannellum.viewer(\'panorama_@0\', {\n        "type": "equirectangular",\n        "panorama": "@1",\n        "autoLoad": false,\n        "hotSpots": [@2]\n    });\n    </script>\n    @end\n    -->\n\n    ```json @panorama("0",https://pannellum.org/images/cerro-toco-0.jpg)\n    {\n        "pitch": 14.1,\n        "yaw": 1.5,\n        "type": "info",\n        "text": "Baltimore Museum of Art",\n        "URL": "https://artbma.org/"\n    },\n    {\n        "pitch": -0.9,\n        "yaw": 144.4,\n        "type": "info",\n        "text": "North Charles Street"\n    }\n    ```',
    insertText: '```${1:lang} @${2:macro}\n${3:a multiline\nparameter}\n```',
    label: 'lia-macro-call-block',
  },
  {
    documentation:
      'Horizontal lines are realized by adding at least 3 hyphens in a row (---), but more hyphens look a little bit nicer ;)\n\nExample:\n  This is a horizontal line:\n\n    ---\n\n  And this also:\n\n  ---------------------------------------------',
    insertText: '----------------------\n',
    label: 'lia-horizontal-line',
  },
  {
    documentation:
      "Insert single line quotes or quote blocks just with the help of a starting (>).\n\nExample:\n  > Block-quotes are very handy in email to emulate reply text.\n  > This line is part of the same quote.\n\n  Quote break.\n\n  > This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a block-quote.",
    insertText: '> ${1:your quote}',
    label: 'lia-quote',
  },
  {
    documentation:
      'Insert single line quotes or quote blocks just with the help of a starting (>) and let the final paragraph start with -- to indicate an blockquote citation.\n\nExample:\n  > “Live as if you were to die tomorrow.\n  > Learn as if you were to live forever.”\n  >\n  > -- Mahatma Gandhi',
    insertText: '> ${1:your quote}\n>\n> -- ${2:your citation}',
    label: 'lia-quote-citation',
  },
  {
    documentation:
      'As in common Markdown, a document is segregated into different parts by its titles. A title starts with hash-tag (#) that is followed by an head-line. The number of subsequent hash-tags defines the order. It is furthermore possible to overwrite some of the definitions from the main header, see more information on this by typing "liaheadersection" ...\n\nExample:\n  # Main Title\n\n  ...\n\n  ## Chapter Title\n  <!--\n  comment: This comment is only for demonstrating purposes\n           and will be overwritten within the next slide...\n\n  author:  New Author\n  email:   notmain@email.com\n  -->\n\n  ...\n\n  ### Section __Title__\n\n  ...\n\nIt is possible to add styling elements to the titles, but this should be used only in some rare cases.',
    insertText: '# ${1:Main Title}\n',
    label: 'lia-title-1',
  },
  {
    documentation:
      'As in common Markdown, a document is segregated into different parts by its titles. A title starts with hash-tag (#) that is followed by an head-line. The number of subsequent hash-tags defines the order. It is furthermore possible to overwrite some of the definitions from the main header, see more information on this by typing "liaheadersection" ...\n\nExample:\n  # Main Title\n\n  ...\n\n  ## Chapter Title\n  <!--\n  comment: This comment is only for demonstrating purposes\n           and will be overwritten within the next slide...\n\n  author:  New Author\n  email:   notmain@email.com\n  -->\n\n  ...\n\n  ### Section __Title__\n\n  ...\n\nIt is possible to add styling elements to the titles, but this should be used only in some rare cases.',
    insertText: '## ${1:Chapter Title}\n',
    label: 'lia-title-2',
  },
  {
    documentation:
      'As in common Markdown, a document is segregated into different parts by its titles. A title starts with hash-tag (#) that is followed by an head-line. The number of subsequent hash-tags defines the order. It is furthermore possible to overwrite some of the definitions from the main header, see more information on this by typing "liaheadersection" ...\n\nExample:\n  # Main Title\n\n  ...\n\n  ## Chapter Title\n  <!--\n  comment: This comment is only for demonstrating purposes\n           and will be overwritten within the next slide...\n\n  author:  New Author\n  email:   notmain@email.com\n  -->\n\n  ...\n\n  ### Section __Title__\n\n  ...\n\nIt is possible to add styling elements to the titles, but this should be used only in some rare cases.',
    insertText: '### ${1:Section Title}\n',
    label: 'lia-title-3',
  },
  {
    documentation:
      'As in common Markdown, a document is segregated into different parts by its titles. A title starts with hash-tag (#) that is followed by an head-line. The number of subsequent hash-tags defines the order. It is furthermore possible to overwrite some of the definitions from the main header, see more information on this by typing "liaheadersection" ...\n\nExample:\n  # Main Title\n\n  ...\n\n  ## Chapter Title\n  <!--\n  comment: This comment is only for demonstrating purposes\n           and will be overwritten within the next slide...\n\n  author:  New Author\n  email:   notmain@email.com\n  -->\n\n  ...\n\n  ### Section __Title__\n\n  ...\n\nIt is possible to add styling elements to the titles, but this should be used only in some rare cases.',
    insertText: '#### ${1:SubSection Title}\n',
    label: 'lia-title-4',
  },
  {
    documentation:
      'As in common Markdown, a document is segregated into different parts by its titles. A title starts with hash-tag (#) that is followed by an head-line. The number of subsequent hash-tags defines the order. It is furthermore possible to overwrite some of the definitions from the main header, see more information on this by typing "liaheadersection" ...\n\nExample:\n  # Main Title\n\n  ...\n\n  ## Chapter Title\n  <!--\n  comment: This comment is only for demonstrating purposes\n           and will be overwritten within the next slide...\n\n  author:  New Author\n  email:   notmain@email.com\n  -->\n\n  ...\n\n  ### Section __Title__\n\n  ...\n\nIt is possible to add styling elements to the titles, but this should be used only in some rare cases.',
    insertText: '##### ${1:Paragraph Title}\n',
    label: 'lia-title-5',
  },
  {
    documentation:
      'As in common Markdown, a document is segregated into different parts by its titles. A title starts with hash-tag (#) that is followed by an head-line. The number of subsequent hash-tags defines the order. It is furthermore possible to overwrite some of the definitions from the main header, see more information on this by typing "liaheadersection" ...\n\nExample:\n  # Main Title\n\n  ...\n\n  ## Chapter Title\n  <!--\n  comment: This comment is only for demonstrating purposes\n           and will be overwritten within the next slide...\n\n  author:  New Author\n  email:   notmain@email.com\n  -->\n\n  ...\n\n  ### Section __Title__\n\n  ...\n\nIt is possible to add styling elements to the titles, but this should be used only in some rare cases.',
    insertText: '##### ${1:SubParagraph Title}\n',
    label: 'lia-title-6',
  },
  {
    documentation:
      'The details and summary tags are standard HTML tags and GitHub also supports their usage with Markdown. These tags offer a neat way to define something what is nowadays called accordion. Thus, your user can click on the summary text to make the body of the details-tag appear.\n\nExample:\n  <details>\n\n  <summary>**Honest Textbook ads (click to enlarge)**</summary>\n\n  !?[If High School and College Textbooks Were Honest - Honest Ads](https://www.youtube.com/watch?v=lhSjYT7pWkw)\n\n  </details>',
    insertText:
      '<details>\n\n<summary>${1:title}</summary>\n\n${2:body}\n\n</details>',
    label: 'lia-details',
  },
  {
    documentation: '',
    insertText: 'UK English Female',
    label: 'voice-uk-english-female',
  },
  {
    documentation: '',
    insertText: 'UK English Male',
    label: 'voice-uk-english-male',
  },
  {
    documentation: '',
    insertText: 'US English Female',
    label: 'voice-us-english-female',
  },
  {
    documentation: '',
    insertText: 'US English Male',
    label: 'voice-us-english-male',
  },
  {
    documentation: '',
    insertText: 'Arabic Female',
    label: 'voice-arabic-female',
  },
  {
    documentation: '',
    insertText: 'Arabic Male',
    label: 'voice-arabic-male',
  },
  {
    documentation: '',
    insertText: 'Armenian Male',
    label: 'voice-armenian-male',
  },
  {
    documentation: '',
    insertText: 'Australian Female',
    label: 'voice-australian-english-female',
  },
  {
    documentation: '',
    insertText: 'Australian Male',
    label: 'voice-australian-english-male',
  },
  {
    documentation: '',
    insertText: 'Bangla Bangladesh Female',
    label: 'voice-bangla-bangladesh-female',
  },
  {
    documentation: '',
    insertText: 'Bangla Bangladesh Male',
    label: 'voice-bangla-bangladesh-male',
  },
  {
    documentation: '',
    insertText: 'Bangla India Female',
    label: 'voice-bangla-india-female',
  },
  {
    documentation: '',
    insertText: 'Bangla India Male',
    label: 'voice-bangla-india-male',
  },
  {
    documentation: '',
    insertText: 'Brazilian Portuguese Female',
    label: 'voice-brazilian-portuguese-female',
  },
  {
    documentation: '',
    insertText: 'Brazilian Portuguese Male',
    label: 'voice-brazilian-portuguese-male',
  },
  {
    documentation: '',
    insertText: 'Chinese Female',
    label: 'voice-chinese-female',
  },
  {
    documentation: '',
    insertText: 'Chinese Male',
    label: 'voice-chinese-male',
  },
  {
    documentation: '',
    insertText: 'Chinese (Hong Kong) Female',
    label: 'voice-chinese-hong-kong-female',
  },
  {
    documentation: '',
    insertText: 'Chinese (Hong Kong) Male',
    label: 'voice-chinese-hong-kong-male',
  },
  {
    documentation: '',
    insertText: 'Chinese Taiwan Female',
    label: 'voice-chinese-taiwan-female',
  },
  {
    documentation: '',
    insertText: 'Chinese Taiwan Male',
    label: 'voice-chinese-taiwan-male',
  },
  {
    documentation: '',
    insertText: 'Czech Female',
    label: 'voice-czech-female',
  },
  {
    documentation: '',
    insertText: 'Czech Male',
    label: 'voice-czech-male',
  },
  {
    documentation: '',
    insertText: 'Danish Female',
    label: 'voice-danish-female',
  },
  {
    documentation: '',
    insertText: 'Danish Male',
    label: 'voice-danish-male',
  },
  {
    documentation: '',
    insertText: 'Deutsch Female',
    label: 'voice-deutsch-female',
  },
  {
    documentation: '',
    insertText: 'Deutsch Male',
    label: 'voice-deutsch-male',
  },
  {
    documentation: '',
    insertText: 'Deutsch Female',
    label: 'voice-german-female',
  },
  {
    documentation: '',
    insertText: 'Deutsch Male',
    label: 'voice-german-male',
  },
  {
    documentation: '',
    insertText: 'Dutch Female',
    label: 'voice-dutch-female',
  },
  {
    documentation: '',
    insertText: 'Dutch Male',
    label: 'voice-dutch-male',
  },
  {
    documentation: '',
    insertText: 'Filipino Female',
    label: 'voice-filipino-female',
  },
  {
    documentation: '',
    insertText: 'Filipino Male',
    label: 'voice-filipino-male',
  },
  {
    documentation: '',
    insertText: 'Finnish Female',
    label: 'voice-finnish-female',
  },
  {
    documentation: '',
    insertText: 'Finnish Male',
    label: 'voice-finnisch-male',
  },
  {
    documentation: '',
    insertText: 'French Canadian Female',
    label: 'voice-french-vanadian-female',
  },
  {
    documentation: '',
    insertText: 'French Male',
    label: 'voice-french-canadian-male',
  },
  {
    documentation: '',
    insertText: 'French Female',
    label: 'voice-french-female',
  },
  {
    documentation: '',
    insertText: 'French Male',
    label: 'voice-french-male',
  },
  {
    documentation: '',
    insertText: 'Greek Female',
    label: 'voice-greek-female',
  },
  {
    documentation: '',
    insertText: 'Greek Male',
    label: 'voice-greek-male',
  },
  {
    documentation: '',
    insertText: 'Hindi Female',
    label: 'voice-hindi-female',
  },
  {
    documentation: '',
    insertText: 'Hindi Male',
    label: 'voice-hindi-male',
  },
  {
    documentation: '',
    insertText: 'Hungarian Female',
    label: 'voice-hungarian-female',
  },
  {
    documentation: '',
    insertText: 'Hungarian Male',
    label: 'voice-hungarian-male',
  },
  {
    documentation: '',
    insertText: 'Indonesian Female',
    label: 'voice-indonesian-female',
  },
  {
    documentation: '',
    insertText: 'Indonesian Male',
    label: 'voice-indonesian-male',
  },
  {
    documentation: '',
    insertText: 'Italian Female',
    label: 'voice-italian-female',
  },
  {
    documentation: '',
    insertText: 'Italian Male',
    label: 'voice-italian-male',
  },
  {
    documentation: '',
    insertText: 'Japanese Female',
    label: 'voice-japanese-female',
  },
  {
    documentation: '',
    insertText: 'Japanese Male',
    label: 'voice-japanese-male',
  },
  {
    documentation: '',
    insertText: 'Korean Female',
    label: 'voice-korean-female',
  },
  {
    documentation: '',
    insertText: 'Korean Male',
    label: 'voice-korean-male',
  },
  {
    documentation: '',
    insertText: 'Latin Female',
    label: 'voice-latin-female',
  },
  {
    documentation: '',
    insertText: 'Latin Male',
    label: 'voice-latin-male',
  },
  {
    documentation: '',
    insertText: 'Norwegian Female',
    label: 'voice-norwegian-female',
  },
  {
    documentation: '',
    insertText: 'Norwegian Male',
    label: 'voice-norwegian-male',
  },
  {
    documentation: '',
    insertText: 'Polish Female',
    label: 'voice-polish-female',
  },
  {
    documentation: '',
    insertText: 'Polish Male',
    label: 'voice-polish-male',
  },
  {
    documentation: '',
    insertText: 'Portuguese Female',
    label: 'voice-portuguese-female',
  },
  {
    documentation: '',
    insertText: 'Portuguese Male',
    label: 'voice-portuguese-male',
  },
  {
    documentation: '',
    insertText: 'Romanian Female',
    label: 'voice-romanian-female',
  },
  {
    documentation: '',
    insertText: 'Romanian Male',
    label: 'voice-romanian-male',
  },
  {
    documentation: '',
    insertText: 'Russian Female',
    label: 'voice-russian-female',
  },
  {
    documentation: '',
    insertText: 'Russian Male',
    label: 'voice-russian-male',
  },
  {
    documentation: '',
    insertText: 'Slovak Female',
    label: 'voice-slovak-female',
  },
  {
    documentation: '',
    insertText: 'Slovak Male',
    label: 'voice-slovak-male',
  },
  {
    documentation: '',
    insertText: 'Spanish Female',
    label: 'voice-spanish-female',
  },
  {
    documentation: '',
    insertText: 'Spanish Male',
    label: 'voice-spanish-male',
  },
  {
    documentation: '',
    insertText: 'Spanish Latin American Female',
    label: 'voice-spanish-latin-america-female',
  },
  {
    documentation: '',
    insertText: 'Spanish Latin American Male',
    label: 'voice-spanish-latin-america-male',
  },
  {
    documentation: '',
    insertText: 'Swedish Female',
    label: 'voice-swedish-female',
  },
  {
    documentation: '',
    insertText: 'Swedish Male',
    label: 'voice-swedish-male',
  },
  {
    documentation: '',
    insertText: 'Tamil Male',
    label: 'voice-tamil-male',
  },
  {
    documentation: '',
    insertText: 'Thai Female',
    label: 'voice-tamil-female',
  },
  {
    documentation: '',
    insertText: 'Thai Male',
    label: 'voice-thai-male',
  },
  {
    documentation: '',
    insertText: 'Turkish Female',
    label: 'voice-turkish-female',
  },
  {
    documentation: '',
    insertText: 'Turkish Male',
    label: 'voice-turkish-male',
  },
  {
    documentation: '',
    insertText: 'Vietnamese Female',
    label: 'voice-vietnamese-female',
  },
  {
    documentation: '',
    insertText: 'Vietnamese Male',
    label: 'voice-vietnamese-male',
  },
  {
    documentation: '',
    insertText: 'Afrikaans Male',
    label: 'voice-afrikaans-male',
  },
  {
    documentation: '',
    insertText: 'Albanian Male',
    label: 'voice-albanian-male',
  },
  {
    documentation: '',
    insertText: 'Bosnian Male',
    label: 'voice-bosnian-male',
  },
  {
    documentation: '',
    insertText: 'Catalan Male',
    label: 'voice-catalan-male',
  },
  {
    documentation: '',
    insertText: 'Croatian Male',
    label: 'voice-croatian-male',
  },
  {
    documentation: '',
    insertText: 'Esperanto Male',
    label: 'voice-esperanto-male',
  },
  {
    documentation: '',
    insertText: 'Estonian Male',
    label: 'voice-estonian-male',
  },
  {
    documentation: '',
    insertText: 'Icelandic Male',
    label: 'voice-icelandic-male',
  },
  {
    documentation: '',
    insertText: 'Latvian Male',
    label: 'voice-latvian-male',
  },
  {
    documentation: '',
    insertText: 'Macedonian Male',
    label: 'voice-macedonian-male',
  },
  {
    documentation: '',
    insertText: 'Moldavian Female',
    label: 'voice-moldavian-female',
  },
  {
    documentation: '',
    insertText: 'Moldavian Male',
    label: 'voice-moldavian-male',
  },
  {
    documentation: '',
    insertText: 'Montenegrin Male',
    label: 'voice-montenegrin-male',
  },
  {
    documentation: '',
    insertText: 'Nepali',
    label: 'voice-nepali',
  },
  {
    documentation: '',
    insertText: 'Sinhala',
    label: 'voice-sinhala',
  },
  {
    documentation: '',
    insertText: 'Serbian Male',
    label: 'voice-serbian-male',
  },
  {
    documentation: '',
    insertText: 'Serbo-Croatian Male',
    label: 'voice-serbo-croatian-male',
  },
  {
    documentation: '',
    insertText: 'Swahili Male',
    label: 'voice-swahili-male',
  },
  {
    documentation: '',
    insertText: 'Ukrainian Female',
    label: 'voice-ukrainian-female',
  },
  {
    documentation: '',
    insertText: 'Welsh Male',
    label: 'voice-welsh-male',
  },
  {
    documentation:
      'Surveys are defined similarly to quizzes by using brackets ([]). A text survey is defined by a multiple number three subsequent underscores (___) that are enclosed by double brackets. The number of underscores defines the number of lines a user has to fill out.\n\nExample:\n\n  A single line text survey:\n\n    [[___]]\n\n  A two line text survey:\n\n    [[___ ___]]\n\n  And a six liner:\n\n    [[___ ___ ___ ___ ___ ___ ]]',
    insertText: '[[___ ___]]',
    label: 'lia-survey-text',
  },
  {
    documentation:
      'The definition is similar to a single choice quiz, but instead of an X, either numbers have to be put into parentheses or variable names. They do not have to be ordered and the number is also variable.\n\nExample:\n\n  Choose between different options:\n\n    [(1)] option 1\n    [(2)] option 2\n    [(0)] option 3\n\n  What is your favorite color:\n\n    [(red)]   red?\n    [(blue)]  blue?\n    [(green)] green?',
    insertText:
      '[(${1:1})] ${2:option 1}\n[(${3:2})] ${4:option 2}\n[(${5:3})] ${6:option 3}',
    label: 'lia-survey-single-choice',
  },
  {
    documentation:
      'The definition is similar to a multiple choice quiz, but instead of an X, either numbers have to be put into parentheses or variable names. They do not have to be ordered and the number is also variable.\n\nExample:\n\n  Choose as many options as your want:\n\n    [[1]] option 1\n    [[2]] option 2\n    [[0]] option 0\n\n  Mark all colors you like:\n\n    [[red]]   red?\n    [[blue]]  blue?\n    [[green]] green?\n    [[none]]  None of these ...',
    insertText:
      '[[${1:1}]] ${2:option 1}\n[[${3:2}]] ${4:option 2}\n[[${5:3}]] ${6:option 3}',
    label: 'lia-survey-multiple-choice',
  },
  {
    documentation:
      'A list of single choice surveys can be defined as depicted below. Either numbers have to be put into parentheses or variable. They do not have to be ordered and the number is also variable.\n\nExample:\n\n  Give marks:\n\n      [(-1)(0)(1)]\n      [          ] LiaScript is great?\n      [          ] I would use it to make online **courses**?\n      [          ] I would use it for online **surveys**?\n\n  What is your opinion:\n\n      [(agree)(unsure)(maybe not so)]\n      [                             ] LiaScript is great?\n      [                             ] I would use it to make online **courses**?\n      [                             ] I would use it for online **surveys**?',
    insertText:
      '[(${1:0})(${2:1})(${3:2})]\n[         ] ${4:text}\n[         ] ${5:text}\n[         ] ${6:text}',
    label: 'lia-survey-single-choice-matrix',
  },
  {
    documentation:
      'A list of multiple choice surveys can be defined as depicted below. Either numbers have to be put into parentheses or variable names. They do not have to be ordered and the number is also variable.\n\nExample:\n\n  Give marks:\n\n      [[-1][0][1]]\n      [          ] LiaScript is great?\n      [          ] I would use it to make online **courses**?\n      [          ] I would use it for online **surveys**?\n\n  What is your opinion:\n\n      [[agree][unsure][maybe not so]]\n      [                             ] LiaScript is great?\n      [                             ] I would use it to make online **courses**?\n      [                             ] I would use it for online **surveys**?',
    insertText:
      '[[${1:0}][${2:1}][${3:2}]]\n[         ] ${4:text}\n[         ] ${5:text}\n[         ] ${6:text}',
    label: 'lia-survey-multiple-choice-matrix',
  },
  {
    documentation:
      "There must be at least 3 dashes separating each header cell. Cells are separated by pipes (|), and you don't need to make the raw Markdown line up prettily. Hyphens (-) are used to separate the table header from the body, whereby the colons are used to align the columns.\n\nExample:\n\n| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |",
    insertText: '| ${1:Header}     |\n| :--------- |\n| ${2:Item}       |',
    label: 'lia-table-1',
  },
  {
    documentation:
      "There must be at least 3 dashes separating each header cell. Cells are separated by pipes (|), and you don't need to make the raw Markdown line up prettily. Hyphens (-) are used to separate the table header from the body, whereby the colons are used to align the columns.\n\nExample:\n\n| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |",
    insertText:
      '| Header 1   | Header 2   |\n| :--------- | :--------- |\n| Item 1     | Item 2     |',
    label: 'lia-table-2',
  },
  {
    documentation:
      "There must be at least 3 dashes separating each header cell. Cells are separated by pipes (|), and you don't need to make the raw Markdown line up prettily. Hyphens (-) are used to separate the table header from the body, whereby the colons are used to align the columns.\n\nExample:\n\n| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |",
    insertText:
      '| Header 1   | Header 2   | Header 3   |\n| :--------- | :--------- | :--------- |\n| Item 1     | Item 2     | Item 3     |',
    label: 'lia-table-3',
  },
  {
    documentation:
      "There must be at least 3 dashes separating each header cell. Cells are separated by pipes (|), and you don't need to make the raw Markdown line up prettily. Hyphens (-) are used to separate the table header from the body, whereby the colons are used to align the columns.\n\nExample:\n\n| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |",
    insertText:
      '| Header 1   | Header 2   | Header 3   | Header 4   |\n| :--------- | :--------- | :--------- | :--------- |\n| Item 1     | Item 2     | Item 3     | Item 4     |',
    label: 'lia-table-4',
  },
  {
    documentation:
      "There must be at least 3 dashes separating each header cell. Cells are separated by pipes (|), and you don't need to make the raw Markdown line up prettily. Hyphens (-) are used to separate the table header from the body, whereby the colons are used to align the columns.\n\nExample:\n\n| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |",
    insertText:
      '| Header 1   | Header 2   | Header 3   | Header 4   | Header 5   |\n| :--------- | :--------- | :--------- | :--------- | :--------- |\n| Item 1     | Item 2     | Item 3     | Item 4     | Item 5     |',
    label: 'lia-table-5',
  },
  {
    documentation:
      "There must be at least 3 dashes separating each header cell. Cells are separated by pipes (|), and you don't need to make the raw Markdown line up prettily. Hyphens (-) are used to separate the table header from the body, whereby the colons are used to align the columns.\n\nExample:\n\n| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |",
    insertText:
      '| Header 1   | Header 2   | Header 3   | Header 4   | Header 5   | Header 6   |\n| :--------- | :--------- | :--------- | :--------- | :--------- | :--------- |\n| Item 1     | Item 2     | Item 3     | Item 4     | Item 5     | Item 6     |',
    label: 'lia-table-6',
  },
  {
    documentation:
      "There must be at least 3 dashes separating each header cell. Cells are separated by pipes (|), and you don't need to make the raw Markdown line up prettily. Hyphens (-) are used to separate the table header from the body, whereby the colons are used to align the columns.\n\nExample:\n\n| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |",
    insertText:
      '| Header 1   | Header 2   | Header 3   | Header 4   | Header 5   | Header 6   | Header 7   |\n| :--------- | :--------- | :--------- | :--------- | :--------- | :--------- | :--------- |\n| Item 1     | Item 2     | Item 3     | Item 4     | Item 5     | Item 6     | Item 7     |',
    label: 'lia-table-7',
  },
  {
    documentation:
      "There must be at least 3 dashes separating each header cell. Cells are separated by pipes (|), and you don't need to make the raw Markdown line up prettily. Hyphens (-) are used to separate the table header from the body, whereby the colons are used to align the columns.\n\nExample:\n\n| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |",
    insertText:
      '| Header 1   | Header 2   | Header 3   | Header 4   | Header 5   | Header 6   | Header 7   | Header 8   |\n| :--------- | :--------- | :--------- | :--------- | :--------- | :--------- | :--------- | :--------- |\n| Item 1     | Item 2     | Item 3     | Item 4     | Item 5     | Item 6     | Item 7     | Item 8     |',
    label: 'lia-table-8',
  },
  {
    documentation:
      "There must be at least 3 dashes separating each header cell. Cells are separated by pipes (|), and you don't need to make the raw Markdown line up prettily. Hyphens (-) are used to separate the table header from the body, whereby the colons are used to align the columns.\n\nExample:\n\n| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |",
    insertText:
      '| Header 1   | Header 2   | Header 3   | Header 4   | Header 5   | Header 6   | Header 7   | Header 8   | Header 9   |\n| :--------- | :--------- | :--------- | :--------- | :--------- | :--------- | :--------- | :--------- | :--------- |\n| Item 1     | Item 2     | Item 3     | Item 4     | Item 5     | Item 6     | Item 7     | Item 8     | Item 9     |',
    label: 'lia-table-9',
  },
  {
    documentation:
      'You can set the diagram title for your plotted document via the data-title parameter, this is only visible if you switch to the diagram mode.\n\nExample:\n  <!--\n  data-title="Government expenditure on education"\n  data-xlabel="year"\n  data-ylabel="% of GDP"\n  -->\n  | Year | Finland | USA | Germany |   China |\n  | ---- | -------:| ---:| -------:| -------:|\n  | 1995 | 6.80942 |     | 4.42079 | 1.84192 |\n  | 1996 | 6.86052 |     | 4.48319 | 1.85338 |\n  | ...  |     ... | ... |     ... |     ... |',
    insertText: '<!-- data-title="${1:title}" -->',
    label: 'lia-table-diagram-title',
  },
  {
    documentation:
      'You can overwrite the diagram x-label for your plotted document via the data-xlabel parameter, this is only visible if you switch to the diagram mode.\n\nExample:\n  <!--\n  data-title="Government expenditure on education"\n  data-xlabel="year"\n  data-ylabel="% of GDP"\n  -->\n  | Year | Finland | USA | Germany |   China |\n  | ---- | -------:| ---:| -------:| -------:|\n  | 1995 | 6.80942 |     | 4.42079 | 1.84192 |\n  | 1996 | 6.86052 |     | 4.48319 | 1.85338 |\n  | ...  |     ... | ... |     ... |     ... |',
    insertText: '<!-- data-xlabel="${1:title}" -->',
    label: 'lia-table-diagram-xlabel',
  },
  {
    documentation:
      'You can overwrite the diagram y-label for your plotted document via the data-ylabel parameter, this is only visible if you switch to the diagram mode.\n\nExample:\n  <!--\n  data-title="Government expenditure on education"\n  data-xlabel="year"\n  data-ylabel="% of GDP"\n  -->\n  | Year | Finland | USA | Germany |   China |\n  | ---- | -------:| ---:| -------:| -------:|\n  | 1995 | 6.80942 |     | 4.42079 | 1.84192 |\n  | 1996 | 6.86052 |     | 4.48319 | 1.85338 |\n  | ...  |     ... | ... |     ... |     ... |',
    insertText: '<!-- data-ylabel="${1:title}" -->',
    label: 'lia-table-diagram-ylabel',
  },
  {
    documentation:
      'You can enforce the visualization of a certain type, even if the sturcture of your table might look different.\nCurrently available data-types are: lineplot, scatterplot, boxplot, barchart, radar, piechart, map, heatmap, parallel, graph, sankey, and none\nIf you do not want to show tables as diagrams, you can also use data-type="None" and only the table will be visible.\n\nExample:\n  <!-- data-type="pie" -->\n  | Year | Finland | USA | Germany |   China |\n  | ---- | -------:| ---:| -------:| -------:|\n  | 1995 | 6.80942 |     | 4.42079 | 1.84192 |\n  | 1996 | 6.86052 |     | 4.48319 | 1.85338 |\n  | ...  |     ... | ... |     ... |     ... |',
    insertText: '<!-- data-type="${1:type}" -->',
    label: 'lia-table-diagram-type',
  },
  {
    documentation:
      "If the first column contains (not repeating) numbers as well as the other columns, lineplots are used as the default representation, a special tag is not required. If this isn't the case, then you can apply this tag to enforce the visualization as a scatterplot.\n\nExample:\n  <!-- data-type=\"lineplot\" -->\n  | x's |  some y's  |    dist |\n  | --- |:----------:| -------:|\n  | 1   |    1 $    | 16 $km$ |\n  | 2.2 |    2 $    | 12 $km$ |\n  | 3.3 |    5 $    |  1 $km$ |\n  | 4   | -12.333 $ |         |",
    insertText: '<!-- data-type="lineplot" -->',
    label: 'lia-table-diagram-lineplot',
  },
  {
    documentation:
      'If the first column contains repetitive numbers, scatterplots are used as the default representation if further numbers are determine, a special tag is not required.\n\nExample:\n  <!-- data-type="scatterplot" -->\n  | x\'s |  some y\'s  |                              dist |\n  | --- |:----------:| ---------------------------------:|\n  | 1   |    1 $    |                           16 $km$ |\n  | 2.2 |    2 $    |                           12 $km$ |\n  | 3.3 |    5 $    |                            1 $km$ |\n  | 4   | -12.333 $ | -555$km$ <-- this will be ignored |\n  | 4   |            |                                 1 |',
    insertText: '<!-- data-type="scatterplot" -->',
    label: 'lia-table-diagram-scatterplot',
  },
  {
    documentation:
      'In contrast to a line or a scatter plot, if the first colum contains at least one entry thant cannot be parsed as a number, this might be represented also as BarChart. Which works perfectly with the following example. If the maximum values of the columns do not differ to much, then this dataset it represented as a BarChart, otherwise you might end up seeing only one huge bar, while the other bars are indistiguishable from each other. In this case other visualization are chosen.\n\nExample:\n  <!-- data-type="barchart" -->\n  | Animal          | weight in kg | Lifespan years | Mitogen |\n  | --------------- | ------------:| --------------:| -------:|\n  | Mouse           |        0.028 |              2 |      95 |\n  | Flying squirrel |        0.085 |             15 |      50 |\n  | Brown bat       |        0.020 |             30 |      10 |\n  | Sheep           |           90 |             12 |      95 |\n  | Human           |           68 |             70 |      10 |',
    insertText: '<!-- data-type="barchart" -->',
    label: 'lia-table-diagram-barchart',
  },
  {
    documentation:
      'If you have a ScatterPlot like representation, but actually want to use this data as primary data for your BoxPlot, you can manually change the type of visualization to BoxPlot, simply by adding the follwing attribute to the head of your table, as it is shown in the snippet below. Columns are then treated as datasets and get visualized accordingly.\n\nExample:\n  <!-- data-type="boxplot" -->\n  | Random |    I |  II |\n  | ------:| ----:| ---:|\n  |    5.0 |  1.0 |   5 |\n  |    6.0 |  1.0 |   4 |\n  |    7.0 |  1.0 |   5 |\n  |    8.0 |  1.0 |   5 |\n  |    9.0 |  1.0 |   4 |\n  |   10.0 |  1.0 |   5 |\n  |    5.0 | 10.0 |   7 |\n  |    6.0 | 10.0 |   8 |\n  |    7.0 | 10.0 |   7 |\n  |    8.0 | 10.0 |   7 |\n  |    9.0 | 10.0 |   8 |',
    insertText: '<!-- data-type="boxplot" -->',
    label: 'lia-table-diagram-boxplot',
  },
  {
    documentation:
      'If for example humans and sheeps are removed from the dataset, then wheight in kg would not be visible in a BarChart at all. In this case a Radar is selected, that allows to analyze data visually with different "y"-axis.\n\nExample:\n  <!-- data-type="radar" -->\n  | Animal          | weight in kg | Lifespan years | Mitogen |\n  | --------------- | ------------:| --------------:| -------:|\n  | Mouse           |        0.028 |             02 |      95 |\n  | Flying squirrel |        0.085 |             15 |      50 |\n  | Brown bat       |        0.020 |             30 |      10 |',
    insertText: '<!-- data-type="radar" -->',
    label: 'lia-table-diagram-radar',
  },
  {
    documentation:
      'If you have a table with only one row full of numbers, this will be automatically presented as an pie chart. The head represents the categories and the body the quatities.\n\nExample:\n  | Classic | Country | Reggae | Hip-Hop | Hard-Rock | Samba |\n  | -------:| -------:| ------:| -------:| ---------:| -----:|\n  |      50 |      50 |    100 |     200 |       350 |   250 |\n\n  <!-- data-type="PieChart" -->\n  | Music-Style | Classic | Country | Reggae | Hip-Hop | Hard-Rock | Samba |\n  |:----------- | -------:| -------:| ------:| -------:| ---------:| -----:|\n  | 1994        |      50 |      50 |    100 |     200 |       350 |   250 |\n  | 2014        |      20 |      30 |    100 |     220 |       400 |   230 |\n  | demo 2034   |       5 |      12 |     98 |     293 |       345 |    32 |',
    insertText: '<!-- data-type="piechart" -->',
    label: 'lia-table-diagram-piechart',
  },
  {
    documentation:
      'A map is similar to a BarChart from the table structure, but if you want to depict your data on a real map, you will have to add a geojson-file, that contains all relevant data about the form of your countries, states, cities, etc. The first column has to match the names of your objects in your geojson data, that is attached to your table in the following way:\n\nExample:\n  <!-- data-type="map" data-src="https://code.highcharts.com/mapdata/custom/europe.geo.json" -->\n  | Country                | percent |\n  | ---------------------- | ------- |\n  | Albania                | 73.5    |\n  | Andorra                | 98.9    |\n  | Armenia                | 72.4    |\n  | ...                    |         |',
    insertText: '<!-- data-type="map" -->',
    label: 'lia-table-diagram-map',
  },
  {
    documentation:
      'Another type of visualization is a HeatMap, which is used, if the table head and the first column do only contain numbers, in other words coordinates. If you want to use categories instead of coordinate numbers, you can enforce the usage of a heatmap, with the comment shown below:\n\nExample:\n  <!--\n  data-type="heatmap"\n  data-title="Seattle mean temperature in Fahrenheit"\n  data-show\n  -->\n    | Seattle |  Jan |  Feb |  Mar |  Apr |  May |  ... |\n    | -------:| ----:| ----:| ----:| ----:| ----:| ----:|\n    |       0 | 40.7 | 41.5 | 43.6 | 46.6 | 51.4 |  ... |\n    |       2 |  ... |  ... |  ... |  ... |  ... |  ... |',
    insertText: '<!-- data-type="heatmap" -->',
    label: 'lia-table-diagram-heatmap',
  },
  {
    documentation:
      'A Parallel representation jumps in, if there are simply too many categories, so that your BarChart would contain only thin lines.\n\nExample:\n  <!-- data-type="parallel" -->\n  | Country                | GDP growth (%) | Births per woman | Life expectancy ...\n  | ---------------------- | --------------:| ----------------:| -------------------\n  | Albania                |            7.5 |            1.858 |               76.63\n  | Andorra                |          3.570 |            1.260 |                 NaN\n  | Austria                |          2.178 |            1.414 |               80.44\n  | ...                    |            ... |              ... |                 ...',
    insertText: '<!-- data-type="parallel" -->',
    label: 'lia-table-diagram-parallel',
  },
  {
    documentation:
      'If the first column and the head of the table are equal, then the interpreter tries to interpret the content of the table as an adjacency matrix, which defines a graph. If those values are symetrical according to the diagonal, then the matrix defines an "undirected graph".\nIn contrast to this, if those values differ, then the result is simply an an "directed graph", whereby the values define the strength of the line.\n\nExample:\n  <!-- data-title="Undirected Graph" -->\n  | Graph |  A  |  B  |  C  |  D  |  E  |\n  |:----- |:---:|:---:|:---:|:---:|:---:|\n  | A     |  0  |  1  |  0  |  1  |  0  |\n  | B     |  1  |  0  |  0  |  1  |  0  |\n  | C     |  0  |  0  |  0  |  0  |  0  |\n  | D     |  1  |  1  |  0  |  0  |  1  |\n  | E     |  0  |  0  |  0  |  1  |  0  |\n\n  <!-- data-title="Directed Graph" -->\n  | Graph |  A  |  B  |  C  |  D  |  E  |\n  |:----- |:---:|:---:|:---:|:---:|:---:|\n  | A     |  0  | 12  |  0  |  1  |  0  |\n  | B     | -22 |  0  |  0  | 0.4 |  0  |\n  | C     |  0  |  0  |  0  |  0  |  0  |\n  | D     |  2  | 12  |  0  |  0  |  1  |\n  | E     |  0  |  0  |  0  |  2  |  0  |',
    insertText: '<!-- data-type="graph" -->',
    label: 'lia-table-diagram-graph',
  },
  {
    documentation:
      'A Sankey diagram is a special type of directed graph that can be used to streams or the flow of something, such as engergy, money, etc.\n\nExample:\n  <!-- data-type="sankey" -->\n  | Sankey |  A  |  B  |  C  |  D  |  E  |\n  |:------ |:---:|:---:|:---:|:---:|:---:|\n  | A      |     |  2  |     |     |     |\n  | B      |  3  |     |     |     |     |\n  | C      |  1  |  1  |     |     |     |\n  | D      |     |  1  |  1  |     |     |\n  | E      |  2  |  1  |  1  |  1  |     |',
    insertText: '<!-- data-type="sankey" -->',
    label: 'lia-table-diagram-sankey',
  },
  {
    documentation:
      'Simply data-type="none" to prevent any kind of visualization.\n\nExample:\n  <!-- data-type="none" -->\n  | Sankey |  A  |  B  |  C  |  D  |  E  |\n  |:------ |:---:|:---:|:---:|:---:|:---:|\n  | A      |     |  2  |     |     |     |\n  | B      |  3  |     |     |     |     |\n  | C      |  1  |  1  |     |     |     |\n  | D      |     |  1  |  1  |     |     |\n  | E      |  2  |  1  |  1  |  1  |     |',
    insertText: '<!-- data-type="none" -->',
    label: 'lia-table-diagram-none',
  },
  {
    documentation:
      'Simply add this attribute or set it to true (data-show="true"), if you want to visualize your data immediately, without the need to click in the switch-button. It is still possible for your users to switch to the table representation.\n\nExample:\n  <!-- data-show -->\n  | Sankey |  A  |  B  |  C  |  D  |  E  |\n  |:------ |:---:|:---:|:---:|:---:|:---:|\n  | A      |     |  2  |     |     |     |\n  | B      |  3  |     |     |     |     |\n  | C      |  1  |  1  |     |     |     |\n  | D      |     |  1  |  1  |     |     |\n  | E      |  2  |  1  |  1  |  1  |     |',
    insertText: '<!-- data-show -->',
    label: 'lia-table-diagram-show',
  },
  {
    documentation:
      'Like in the mathematical sense, set this attribute or set it to true (data-transpose="true"), if you want to switch rows and columns. One benefit is, that you can for example use PieChart and let your table grow vertically instead of using a horizontal monster.\n\nExample:\n  <!-- data-transpose -->\n  | Music-Style {0-1}{1994} {1}{2014} |      Student rating |\n  |:--------------------------------- | -------------------:|\n  | Classic                           |   {0-1}{50} {1}{20} |\n  | Country                           |   {0-1}{50} {1}{30} |\n  | Reggae                            |                 100 |\n  | Hip-Hop                           | {0-1}{200} {1}{220} |\n  | Hard-Rock                         | {0-1}{350} {1}{400} |\n  | Samba                             | {0-1}{250} {1}{230} |',
    insertText: '<!-- data-transpose -->',
    label: 'lia-table-diagram-transpose',
  },
  {
    documentation:
      'Currently this attribute is used to refere to your geojson data, if you use the `data-type="Map"` representation, but this might change in the future to load and visualize data directly, such as csv.\nIf you are using geojson files from external websites such as: https://code.highcharts.com/mapdata/\nIt can be usefull to use anycors, if the data cannot be visualized due to CORS restrictions:\n\ndata-src="https://cors-anywhere.herokuapp.com/https://code.highcharts.com/mapdata/custom/europe.geo.json"\n\nExample:\n  <!-- data-type="map" data-src="https://code.highcharts.com/mapdata/custom/europe.geo.json" -->\n  | Country                | percent |\n  | ---------------------- | ------- |\n  | Albania                | 73.5    |\n  | Andorra                | 98.9    |\n  | Armenia                | 72.4    |\n  | ...                    |         |',
    insertText: '<!-- data-src="${1:url}" -->',
    label: 'lia-table-diagram-source',
  },
  {
    documentation:
      'Use the GitHub-flavoured Markdown syntax for tasks. If the version of the course is larger than 1, the task-states will be stored persistently.\n\nYou can define as much tasks as you want\n\nExample:\n\n  -[ ] This is not checked by default\n  -[X] This one is checked by default',
    insertText: '-[${1:X}] ${2:line with Markdown}',
    label: 'lia-task',
  },
  {
    documentation:
      'Use the GitHub-flavoured Markdown syntax for tasks in association with JavaScript-code that is executed on every input.\n\nYou can define as much tasks as you want.\n\nExample:\n\n  - [X] Biology\n  - [ ] Chemistry\n  <script output="tasks">"@input"</script>\n\n  <script style="width: 100%">\n  try {\n    let task = @input(`tasks`) // interpret the output="tasks"\n\n    if(task[0]) {\n      send.liascript(`## Biology\n\n  Hey, great, you want to learn something about Biology.\n\n  * resource 1\n  * resource 2\n\n  The input from the tasks above was: `[${task}]``)\n    } else send.clear()\n  } catch(e) { }\n  </script>',
    insertText:
      '-[${1:X}] ${2:task-definition}\n-[${3:X}] ${4:task-definition}\n<script>\n  ${5:js-code}\n</script>',
    label: 'lia-task-js',
  },
  {
    documentation: '',
    insertText: '_${1:italic}_',
    label: 'lia-text-italic',
  },
  {
    documentation: '',
    insertText: '*${1:italic}*',
    label: 'lia-text-italic2',
  },
  {
    documentation: '',
    insertText: '__${1:bold}__',
    label: 'lia-text-bold',
  },
  {
    documentation: '',
    insertText: '**${1:bold}**',
    label: 'lia-text-bold2',
  },
  {
    documentation: '',
    insertText: '___${1:italic bold}___',
    label: 'lia-text-italic-bold',
  },
  {
    documentation: '',
    insertText: '***${1:italic bold}***',
    label: 'lia-text-italic-bold2',
  },
  {
    documentation: '',
    insertText: '~${1:strike}~',
    label: 'lia-text-strike',
  },
  {
    documentation: '',
    insertText: '~~${1:underline}~~',
    label: 'lia-text-underline',
  },
  {
    documentation: '',
    insertText: '~~~${1:strike underline}~~~',
    label: 'lia-text-strike-underline',
  },
  {
    documentation: '',
    insertText: '^${1:superscript}^',
    label: 'lia-text-superscript',
  },
  {
    documentation:
      'Simply encompass your solution word into double brackets and you will get a nicely rendered text quiz.\n\nExample:\n  What is the color of the sky?\n\n  [[blue]]',
    insertText: '[[${1:solution}]]',
    label: 'lia-quiz-text',
  },
  {
    documentation:
      'If different inputs are possible, you can add a script tag to your quiz-field. The reference @input will be replaced by the current user input string, and the result of the script has to be true or false.\n\nExample:\n  What is the color of the sky?\n\n  [[blue]]\n  <script>\n    let input_string = "@input";\n    "BLUE" == input_string.trim().toUpperCase();\n  </script>',
    insertText:
      '[[${1:solution}]]\n<script>\n  ${2:// @input will be replace by the user input\n  let input_string = "@input";\n  "solution" == input_string.trim().toLowerCase();}\n</script>',
    label: 'lia-quiz-text-js',
  },
  {
    documentation:
      'Create a selection field, that contains various different solutions, separated by `|`. Images, formulas everything is allowed, only the correct solution has to be put into parentheses and there can be multiple correct solutions.\n\nExample:\n  What is the color of the sky?\n\n  [[ red | (__blue__) | green | (black at night)]]',
    insertText: '[[${1:option}|${2:option}]]',
    label: 'lia-quiz-select',
  },
  {
    documentation:
      'Compose your single choice quizzes out of many lines in the following format:\n\nExample:\n  This is a single choice quiz with three options:\n\n    [( )] Add as many lines as you want?\n    [(X)] The X marks the only correct answer!\n    [( )] ... And only one X is allowed.\n\n(If you want, you can also have multiple correct options.)',
    insertText: '[(${1: })] ${2:enter your text}',
    label: 'lia-quiz-single-choice',
  },
  {
    documentation:
      'Compose your multiple choice quizzes out of many lines in the following format:\n\nExample:\n  This is a multiple choice quiz with four options:\n\n    [[ ]] Add as many lines as you want?\n    [[X]] The X marks the correct lines that have to be selected!\n    [[X]] This can offer multiple options that have to be clicked.\n    [[ ]] But it can also consist of empty brackets either.',
    insertText: '[[${1: }]] ${2:enter your text}',
    label: 'lia-quiz-multiple-choice',
  },
  {
    documentation:
      'Compose a matrix of quizzes with multiple SingleChoice and MultipleChoice quizzes per row. The column headers have to be put into brackets or parentheses, depending on your passed Markdown content. It is allowed to have different numbers of options per row.\n\nExample:\n  This is a multiple choice quiz with four options:\n    [[:-)] (:-]) (_bold_)]\n    [ [ ]   [ ]     [X]  ] Only the X marks the correct solution!\n    [ [X]   [ ]     [ ]  ] Multiple- and SingleChoice quizzes in a matrix,\n    [ ( )   ( )     (X)  ] but you have to be consitent per row.\n    [ ( )   ( )     ( )   ( ) ] More or less options than defined in the header are also allowed.',
    insertText:
      '[[${1: }] [${2: }] [${3: }]]\n[[${4: }] [${5: }] [${6: }]] ${7: add a line}\n[(${8: }) (${9: }) (${10: })] ${11: add a line}',
    label: 'lia-quiz-matrix-choice',
  },
  {
    documentation:
      'If a quiz might be a bit tricky, you can add hints directly after any type of quiz and as many hints as you want. The user can decide whether he or she wants to use it, simply by clicking on the additional question mark, that appears after the check button.\n\nExample:\n  This is a text quiz with two hints:\n\n    [[solution]]\n    [[?]] This is the first hint\n    [[?]] This is a second hint\n\n  And a multiple choice quiz with one hint:\n\n    [[X]] This is correct!\n    [[ ]] This is wrong!\n    [[?]] Click on the first option!',
    insertText: '[[?]] ${1:enter your hint}',
    label: 'lia-quiz-hint',
  },
  {
    documentation:
      'If the user solved a quiz or clicked onto resolve, the correct answer gets automatically revealed, but you can add additional information to your solution by adding two lines to the end of your quiz that can contain multiple Markdown blocks as explanation.\n\nExample:\n  What is the color of the sky?\n\n    [[blue]]\n    [[?]] Enter blue!\n    *************************************\n\n    During the day the color is blue, if\n    it is not cloudy. See the following\n    picture ...\n\n    ![blue sky](./img/sunny.jpg)\n\n    *************************************',
    insertText:
      '****************************************\n\n${1:Add a solution explanation __Markdown__!}\n\n****************************************',
    label: 'lia-quiz-solution',
  },
  {
    documentation:
      'In some rare cases you might want to change the correct solution, or add a counter, that reveals the correct answer after some predefined number of trials. Then simply add a script tag to the quiz. The @input string gets replaced by an integer representing the current user input:\n\n-1 -> no selection\n0  -> the first\n1  -> the second\n\nExample:\n\n    [( )] Check this ...\n    [(X)] ... and not this\n    <script>\n      // @input gets replaced by a single number\n      // -1 if no selection otherwise it starts\n      // with 0.\n      let input_number = @input;\n\n      ${7:if(input_number == 0)\n        true;\n      else\n        false;}\n    </script>',
    insertText:
      '<script>\n  // @input gets replaced by a single number\n  // -1 if no selection otherwise it starts\n  // with 0.\n  let input_number = @input;\n\n  ${1:if(input_number == 1)\n    true;\n  else\n    false;}\n</script>',
    label: 'lia-quiz-single-js',
  },
  {
    documentation:
      'In some rare cases you might want to change the correct solution, add a counter, or let some correct answers pass. Then simply add a script tag to the quiz. The @input string here gets replaced by an by an array of integers ([0,1,1,0]) that represent the current user input:\n\n0 -> stands for checked\n1 -> represents an unchecked field\n\nExample:\n\n  Get at least one right ...\n\n  [[ ]] Wrong.\n  [[X]] Right.\n  [[ ]] Wrong.\n  [[X]] Right.\n  <script>\n    // @input gets replaced by an array in the\n    // form of [0,0,0,1], whereby 0 and 1\n    // define whether a checkbox is checked\n    // or not...\n    let input_array = @input;\n    input_array = JSON.stringify(input_array);\n\n    if      (input_array == "[0,1,0,1]")  true;\n    else if (input_array == "[0,1,0,0]")  true;\n    else if (input_array == "[0,0,0,1]")  true;\n    else                                 false;\n  </script>',
    insertText:
      '<script>\n  // @input gets replaced by an array in the\n  // form of [0,0,0,1], whereby 0 and 1\n  // define whether a checkbox is checked\n  // or not...\n  let input_array = @input;\n  ${1:input_array = JSON.stringify(input_array);\n\n  if      (input_array == "[0,1,0,1]")  true;\n  else if (input_array == "[0,1,0,0]")  true;\n  else if (input_array == "[0,0,0,1]")  true;\n  else                                 false;}\n</script>',
    label: 'lia-quiz-multiple-js',
  },
  {
    documentation:
      'This will insert a generic script tag in the following form, the @input will be replaced according the current context:\n\n<script>\n  // @input gets replaced by the current quiz input.\n  // In case of a:\n  // * text input -> string, that has to be encapsulated with (")\n  // * single choice -> int (-1, if nothing is selected)\n  // * multiple choice -> array int (0 unchecked, 1 checked)\n  let input = @input;\n\n  true; // if solved otherwise return false\n</script>',
    insertText:
      '<script>\n  ${1:// @input gets replaced by the current quiz input.\n  // In case of a:\n  // * text input -> string, that has to be encapsulated with (")\n  // * single choice -> int (-1, if nothing is selected)\n  // * multiple choice -> array int (0 unchecked, 1 checked)\n  let input = @input;\n\n  true; // if solved otherwise return false}\n</script>',
    label: 'lia-quiz-js',
  },
  {
    documentation:
      'Insert a the following quiz dummy:\n\n  [( )] This is wrong.\n  [(X)] The only correct option.\n  [( )] Still not right.',
    insertText:
      '[(${1: })] ${2:This is wrong.}\n[(${3:X})] ${4:The only correct option.}\n[(${5: })] ${6:Still not right.}',
    label: 'lia-quiz-single-choice-3',
  },
  {
    documentation:
      'Insert a the following quiz dummy:\n\n[[ ]] Add as many elements as you want?\n[[X]] The X marks the correct answer!\n[[ ]] ... this is wrong ...\n[[X]] ... this has to be selected too ...',
    insertText:
      '[[${1: }]] ${2:Add as many elements as you want?}\n[[${3:X}]] ${4:The X marks the correct answer!}\n[[${5: }]] ${6:... this is wrong ...}\n[[${7:X}]] ${8:... this has to be selected too ...}',
    label: 'lia-quiz-multiple-choice-4',
  },
  {
    documentation:
      "In some rarely rarely rare cases, you might want to have something completely different and analyze some other HTML or code inputs (unit testing). In this case you can apply this generic tag and do in JavaScript whatever you want. The this quiz is solved if the script gets evaluated to true, not solved by resulting in false (everything else is ignored).\n\n*Click Me!*<!-- onclick=\"window['rand'] = Math.random();\" -->\n\n[[!]]\n<script>\n  alert(\"your value random value is:\", window['rand']);\n  if(window['rand'] > 0.8)\n    true;\n  else\n    false\n</script>",
    insertText:
      '[[!]]\n<script>\n  ${1:// you are free to check anything you want\n  true;}\n</script>',
    label: 'lia-quiz-generic-js',
  },
]

export { Snippets }
