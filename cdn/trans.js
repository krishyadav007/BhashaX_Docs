function _0x45e8(_0x4a91ef,_0x31c59f){var _0x429818=_0x4298();return _0x45e8=function(_0x45e85c,_0x267e1f){_0x45e85c=_0x45e85c-0xab;var _0x3a345b=_0x429818[_0x45e85c];return _0x3a345b;},_0x45e8(_0x4a91ef,_0x31c59f);}(function(_0x5e4888,_0xd0d676){var _0xc12e7c=_0x45e8,_0x2fd953=_0x5e4888();while(!![]){try{var _0x2e7adf=parseInt(_0xc12e7c(0xb6))/0x1*(parseInt(_0xc12e7c(0xb3))/0x2)+-parseInt(_0xc12e7c(0xac))/0x3*(parseInt(_0xc12e7c(0xbe))/0x4)+parseInt(_0xc12e7c(0xad))/0x5+-parseInt(_0xc12e7c(0xc1))/0x6+-parseInt(_0xc12e7c(0xb2))/0x7+-parseInt(_0xc12e7c(0xbb))/0x8*(parseInt(_0xc12e7c(0xc3))/0x9)+parseInt(_0xc12e7c(0xab))/0xa;if(_0x2e7adf===_0xd0d676)break;else _0x2fd953['push'](_0x2fd953['shift']());}catch(_0x3006e8){_0x2fd953['push'](_0x2fd953['shift']());}}}(_0x4298,0x58096));function _0x4298(){var _0x499559=['613242XYLNgA','keys','81YUlyxk','4916830wPQblg','470697rcoBpX','3513145UwPjdW','replaceAll','length','match','VAR_','768131lUueYF','26426DtWTci','indexOf','toString','4yBfMWV','slice','FUNCTIONS','UMF_','substring','320736xZdnxE','KEYWORDS','NUMBERS','8oHAgde','replace','push'];_0x4298=function(){return _0x499559;};return _0x4298();}function HANDLE_STRINGS(_0xfd1c6c){var _0x4993ff=_0x45e8;STRINGS_LIST_REGEX=/(["'])(?:(?=(\\?))\2.)*?\1/gm,STRINGS_OCCURENCES=_0xfd1c6c[_0x4993ff(0xb0)](STRINGS_LIST_REGEX),STRINGS_STORAGE=[];for(STRINGS_OCCURENCE in STRINGS_OCCURENCES){TEMP_STR=STRINGS_OCCURENCES[STRINGS_OCCURENCE],STRINGS_STORAGE['push'](TEMP_STR[_0x4993ff(0xba)](0x1,TEMP_STR[_0x4993ff(0xaf)]-0x1)),_0xfd1c6c=_0xfd1c6c[_0x4993ff(0xbf)](STRINGS_OCCURENCES[STRINGS_OCCURENCE],'STRINGS_STORAGE['+STRINGS_OCCURENCE+']');}return _0xfd1c6c;}function HANDLE_SYSTEM_FUNCTIONS(_0x2409aa){var _0x259f48=_0x45e8;LIST_OF_SYSTEM_FUNCTIONS=[];for(existing_function in ENV_FILE[_0x259f48(0xb8)]){LIST_OF_SYSTEM_FUNCTIONS[_0x259f48(0xc0)](existing_function[_0x259f48(0xb5)]());}USER_MADE_FUNCTIONS_LIST_REGEX=/@(.*?)\(/gm,USER_MADE_FUNCTIONS_OCCURENCES=_0x2409aa[_0x259f48(0xb0)](USER_MADE_FUNCTIONS_LIST_REGEX);for(USER_MADE_FUNCTIONS_OCCURENCE in USER_MADE_FUNCTIONS_OCCURENCES){let _0x682606=USER_MADE_FUNCTIONS_OCCURENCES[USER_MADE_FUNCTIONS_OCCURENCE][_0x259f48(0xb7)](0x1,-0x1)[_0x259f48(0xb5)]();LIST_OF_SYSTEM_FUNCTIONS[_0x259f48(0xb4)](_0x682606)>-0x1&&(_0x2409aa=_0x2409aa['replaceAll']('@'+_0x682606,ENV_FILE[_0x259f48(0xb8)][_0x682606]));}return _0x2409aa;}function HANDLE_USER_MADE_FUNCTIONS(_0x4edda1){var _0x106129=_0x45e8;USER_MADE_FUNCTIONS_LIST_REGEX=/@(.*?)\(/gm,USER_MADE_FUNCTIONS_OCCURENCES=_0x4edda1['match'](USER_MADE_FUNCTIONS_LIST_REGEX),USER_MADE_FUNCTIONS_STORAGE=[],USER_MADE_FUNCTIONS_STORAGE_ORIGINAL_NAME=[];for(USER_MADE_FUNCTIONS_OCCURENCE in USER_MADE_FUNCTIONS_OCCURENCES){USER_MADE_FUNCTIONS_STORAGE['push'](_0x106129(0xb9)+USER_MADE_FUNCTIONS_OCCURENCE),USER_MADE_FUNCTIONS_STORAGE_ORIGINAL_NAME[_0x106129(0xc0)](USER_MADE_FUNCTIONS_OCCURENCES[USER_MADE_FUNCTIONS_OCCURENCE]),_0x4edda1=_0x4edda1[_0x106129(0xae)](USER_MADE_FUNCTIONS_OCCURENCES[USER_MADE_FUNCTIONS_OCCURENCE],USER_MADE_FUNCTIONS_STORAGE[USER_MADE_FUNCTIONS_OCCURENCE]+'(');}return _0x4edda1;}function HANDLE_VARIABLES(_0x33c388){var _0x1ba08b=_0x45e8;VARIABLES_LIST_REGEX=/\$(.*?)[! " #$%&'()*+,-.\/:;<=>?@[\]^_`{|}~]/gm,VARIABLES_OCCURENCES=_0x33c388['match'](VARIABLES_LIST_REGEX),VARIABLES_STORAGE=[],VARIABLES_STORAGE_ORIGINAL_NAME=[];for(VARIABLES_OCCURENCE in VARIABLES_OCCURENCES){VARIABLES_STORAGE[_0x1ba08b(0xc0)](_0x1ba08b(0xb1)+VARIABLES_OCCURENCE),VARIABLES_STORAGE_ORIGINAL_NAME[_0x1ba08b(0xc0)](VARIABLES_OCCURENCES[VARIABLES_OCCURENCE]),_0x33c388=_0x33c388[_0x1ba08b(0xae)](VARIABLES_OCCURENCES[VARIABLES_OCCURENCE]['slice'](0x0,-0x1),VARIABLES_STORAGE[VARIABLES_OCCURENCE]);}return _0x33c388;}function HANDLE_KEYWORDS(_0x53c266){var _0x3ced65=_0x45e8;keywords_sorted=[];for(existing_keyword in ENV_FILE['KEYWORDS']){keywords_sorted['push']([existing_keyword[_0x3ced65(0xaf)],existing_keyword,ENV_FILE[_0x3ced65(0xbc)][existing_keyword]]);}keywords_sorted['sort'](KEYWORD_SORT);for(existing_keyword in keywords_sorted){_0x53c266=_0x53c266[_0x3ced65(0xae)](keywords_sorted[existing_keyword][0x1]+'\x20',keywords_sorted[existing_keyword][0x2]+'\x20');}return _0x53c266;}function KEYWORD_SORT(_0x17ff08,_0x24502d){return _0x17ff08[0x0]===_0x24502d[0x0]?0x0:_0x17ff08[0x0]<_0x24502d[0x0]?0x1:-0x1;}function HANDLE_NUMBERS(_0x29aa3d){var _0x499598=_0x45e8,_0x266d38=Object[_0x499598(0xc2)](ENV_FILE['NUMBERS'])[0x0],_0x4837f0=ENV_FILE[_0x499598(0xbd)][_0x266d38];for(ii in _0x266d38){_0x29aa3d=_0x29aa3d['replaceAll'](_0x266d38[ii],_0x4837f0[ii]);}return _0x29aa3d;}function translate_pipleline(_0x2742cc){return _0x2742cc=HANDLE_STRINGS(_0x2742cc),_0x2742cc=HANDLE_VARIABLES(_0x2742cc),_0x2742cc=HANDLE_SYSTEM_FUNCTIONS(_0x2742cc),_0x2742cc=HANDLE_USER_MADE_FUNCTIONS(_0x2742cc),_0x2742cc=HANDLE_KEYWORDS(_0x2742cc),_0x2742cc=HANDLE_NUMBERS(_0x2742cc),console['log'](_0x2742cc),_0x2742cc;}
