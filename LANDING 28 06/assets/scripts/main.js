
$(document).ready(function() {
    // MULTISTEP
    var form = document.getElementById('my-form');
    document.addEventListener("keyup", function(event) {
        if (event.code === 'Enter') {
        jQuery(this).disabled= true;
        }
    });
    var click = 0;
    //BUTTON PE PROFESSIONE
    profButton = jQuery('.profButton');
    profButton.click(function(){
        profButton.removeClass('clicked');
        jQuery(this).toggleClass('clicked');
        professione = jQuery(this).value;
        console.log(jQuery(this).attr("value"));
        click = 1;
        data = document.createElement("input");
        data.type = "hidden";
        data.id = 'professione';
        data.name = 'professione';
        data.value = (jQuery(this).attr("value"));
        form.append(data);
    })

    //PROVINCIA E PROFESSIONE
    prov_anno = jQuery('.age');
    prov_anno.click(function(){
        if(prov_anno.value != ''){
            click = 1;
        }
    })
    
    var current = 1,current_step,next_step,steps;
        steps = jQuery("fieldset").length;
        jQuery(".next").click(function(){
            if(document.getElementById('privacy_1').checked == true){
                click++;
            }
            if(click != 2){
                alert('Scegli una professione e acconsenti al trattamento dei dati per proseguire.')
            }else{
            current_step = jQuery(this).parent().parent().parent().parent();
            next_step = jQuery(this).parent().parent().parent().parent().next();
            console.log(next_step);
            next_step.show();
            current_step.hide();
            setProgressBar(++current);
            click = 0;
            }

        });
        jQuery(".previous").click(function(){
            current_step = jQuery(this).parent().parent().parent().parent();
            next_step = jQuery(this).parent().parent().parent().parent().prev();
            next_step.show();
            current_step.hide();
            setProgressBar(--current);
            click = 1;
        });
        setProgressBar(current);
        // Change progress bar action
        function setProgressBar(curStep){
            var percent = parseFloat(100 / steps) * curStep;
            percent = percent.toFixed();
            jQuery(".progress-bar")
                .css("width",percent+"%")
                .html(percent+"%");		
    }

    //FINE  MULTISTEP


    // ARGUMENTS X FORM
        var arguments = ['ch','bnd','mdm','ctry','cmp','cmpid','var','adgid','adg','adid','dvc','kwd','mtch','tp','subvar','pg','campagnaeggid','gclid','extid'];
        var argumentsValues =[];
        var value;
        var temporary;
        var data;
        var form = document.getElementById('my-form');
        
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        
        for(var i = 0; i < arguments.length; i++){
                temporary = urlParams.get(arguments[i]);
                if(temporary != null){
                    value = urlParams.get(arguments[i]);
                }else{
                    switch(arguments[i]){
                            case "bnd":
                            value = "SOLPRES";
                        break;
                        
                        case "ch":
                            value = "OR";
                        break;
                        
                        case "cmp":
                            value = "SOLPRES_ID0000_OR_00000000_ORG_CTRY_ORGANICO";
                        break;
                        
                                    case "mdm":
                            value = "ORG";
                        break;
                        
                        case "ctry":
                            value = "CTRY";
                        break;
                        
                        default:
                        value = null;
                        break;
                }
                }
                argumentsValues.push(value);
                data = document.createElement("input");
                data.type = "hidden";
                data.id = arguments[i];
                data.name = arguments[i];
                data.value = value;
                form.append(data);
            }
        data = document.createElement("input");
        data.type = "hidden";
        data.id = 'where';
        data.name = 'where';
        data.value ='PAP';
        form.append(data);

        //FINE ARGUMENTS X FORM

        // ONE SEND Form
        var inputs = [
            nome = document.getElementById('nome'),
            cognome = document.getElementById('cognome'),
            mail = document.getElementById('mail'),
            telefono = document.getElementById('telefono'),
        ]

        var send = $ ("#send-button");
        var back = $ ("#back-button");
        var fieldset = $ (".field-full-screen");

        send.click(function(){
            console.log(fieldset[2]);
            var go = checkInput(inputs);
            if(go == 5){
                back.addClass('disabled');
                jQuery(this).addClass('rotate');
                fieldset[0].style.display = "none";
                fieldset[1].style.display = "none";
                fieldset[2].style.display = "flex";
            }else{
                alert('Compila tutti i campi');
            }
        })

        function checkInput(inputs){
            var send = 0;
            var prov = document.getElementById('Provincia')
            for (let i = 0; i < inputs.length; i++) {
               if(inputs[i].value != ''){
                send ++;
               }
            }
            if(prov.options[prov.selectedIndex].value != ''){
                send ++;
            }
            return send;
        }
        

       
        // send.click(function(){
        //     $(this).disabled = true;
        // })
    });
