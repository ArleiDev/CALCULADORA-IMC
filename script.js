const calcular = document.getElementById("btnCalcular");


    function imc(){
     
        const altura = document.getElementById("Altura").value;
        const peso = document.getElementById("Peso").value;
        const resultado = document.getElementById("Resultado")
        

        if (altura !== '' && peso !== ''){
            const valorIMC = (peso / (altura * altura)).toFixed(2);
    
            
            let classificacao ="";

                if (valorIMC < 18.5){
                    classificacao ="ABAIXO DO PESO"

                }else if(valorIMC < 25){
                    classificacao ="COM PESO IDEAL"
                }else if (valorIMC < 30){
                    classificacao ="ACIMA DO PESO"
                }else if (valorIMC < 35){
                    classificacao ="COM OBESIDADE GRAU I"
                }else if (valorIMC < 40){
                    classificacao ="COM OBESIDADE GRAU II"
                }else {
                    classificacao ="COM OBESIDADE GRAU III"
                }  
           



                resultado.textContent = "RESULTADO: " + valorIMC +" "+ "VOCÊ ESTA " + classificacao;
                


        } else{

            resultado.textContent ="Preencha todos os campos!!"
        }
        
        
       
        
       
    }

    calcular.addEventListener('click', imc);
