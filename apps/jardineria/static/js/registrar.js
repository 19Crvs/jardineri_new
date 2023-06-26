$(function(){
    $("#miFormulario2").validate({
        rules:{
            txtUsuario : {
                required:true,
                minlength : 5
            },
            txtNombre : {
                required:true,
                minlength : 3
            },
            txtApellido : {
                required:true,
                minlength: 3
            },
            txtNumero : {
                required:true,
                minlength: 8
            },
            txtCorreo : {
                required:true,
                minlength: 12
            },
            txtPassword : {
                required: true,
                minlength: 8
            },
            txtPasswordConfirmate: {
                required : true,
                minlength: 8
            }    
        },
        messages: {
            txtUsuario : {
                required:"Este campo es obligatorio",
                minlength : "El usuario debe de contener un minimo de 5 caracteres"
            },
            txtNombre : {
                required:"Este campo es obligatorio",
                minlength : "El nombre debe de tener un minimo de 3 caracteres"
            },
            txtApellido : {
                required:"Este campo es obligatorio",
                minlength: "El apellido debe de contener un minimo de 3 caracteres "
            },
            txtNumero : {
                required:"El numero debe ser valido!",
                minlength: "El numero debe de contener un minimo de 9 caracteres "
            },
            txtCorreo : {
                required:"El correo debe ser valido!",
                minlength: "debe contener un minimo de 12 caracteres, al igual que '@'"
            },
            txtPassword : {
                required : "Debe de contener 1 mayuscula al menos, 3 numeros",
                minlength : "Debe de contener un minimo de 8 caracteres"
            },
            txtPasswordConfirmate: {
                required : "Su contraseña debe de coincidir con la anterior",
                minlength: "Debe de contener un minimo de 8 caracteres"
            } 
        }
    })
})
